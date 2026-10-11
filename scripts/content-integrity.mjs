#!/usr/bin/env node
/*
  scripts/content-integrity.mjs — mechanical checks over every live data file.

      node scripts/content-integrity.mjs              report, exit 1 on any FAIL gate
      node scripts/content-integrity.mjs --all        list every hit, not the first 10 per gate
      node scripts/content-integrity.mjs --json FILE  also write every hit as JSON (for /amac-audit)

  Report-only: never edits a file. Reads the same live sources the pages load
  (the ones scripts/sync-counts.mjs counts).

  FAIL gates (structural; block the push and the GitHub Action):
    duplicate-id      two items in one bank/library/deck share an ID
    missing-key       correct_letter is not one of the item's options
    empty-answer      correct_letter (or correct_answer, where the bank has it) is empty
  WARN gates (listed, never block):
    option-count      not the exam's option count (all four SBA banks: 5)
    empty-option      an option with no text
    duplicate-option  two options of one question with the same text
    answer-mismatch   correct_answer text differs from the keyed option
    empty-stem / empty-explanation / empty-field
    near-duplicate    same keyed answer and stems that overlap heavily (same bank)
    mock-ref          a PLAB 1 / MRCP 1 mock paper lists an ID the bank does not have, or lists one twice
    marking-grid      a station with no marking grid
    critical-fail     a station with no critical-fail section
    banned-phrase     a phrase from phrases.mjs BANNED inside item text
    wording           a phrase from phrases.mjs WARN inside item text

  Mechanical only: a clean run says nothing about clinical accuracy.
*/
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { ROOT, literalStart, literalEnd } from './sync-counts.mjs';
import { BANNED, WARN, NOT_A_LABEL, blank } from './phrases.mjs';

const args = process.argv.slice(2);
const SHOW_ALL = args.includes('--all');
const JSON_OUT = args.includes('--json') ? args[args.indexOf('--json') + 1] : null;
const LIMIT = 10;

const read = rel => fs.readFileSync(path.join(ROOT, rel), 'utf8');

// The literal assigned to NAME in FILE. JSON first; plain JavaScript literals
// (unquoted keys, single quotes) are evaluated in an empty sandbox.
function literal(rel, name) {
  const text = read(rel);
  const s = literalStart(text, name);
  const src = text.slice(s, literalEnd(text, s) + 1);
  try { return JSON.parse(src); } catch { return vm.runInNewContext('(' + src + ')', {}, { timeout: 5000 }); }
}

// ---------------------------------------------------------------- gates
const GATES = {
  'duplicate-id': 'FAIL', 'missing-key': 'FAIL', 'empty-answer': 'FAIL',
  'option-count': 'WARN', 'empty-option': 'WARN', 'duplicate-option': 'WARN', 'answer-mismatch': 'WARN',
  'empty-stem': 'WARN', 'empty-explanation': 'WARN', 'empty-field': 'WARN', 'near-duplicate': 'WARN',
  'mock-ref': 'WARN', 'marking-grid': 'WARN', 'critical-fail': 'WARN', 'banned-phrase': 'WARN', 'wording': 'WARN',
};
const hits = Object.fromEntries(Object.keys(GATES).map(g => [g, []]));
const hit = (gate, source, id, msg) => hits[gate].push({ source, id: id == null ? null : String(id), msg });
const checked = []; // [source label, file, item count]

const isEmpty = v => v == null || (typeof v === 'string' && v.trim() === '') ||
  (Array.isArray(v) && v.length === 0) || (typeof v === 'object' && !Array.isArray(v) && Object.keys(v).length === 0);
const norm = s => String(s || '').toLowerCase().replace(/<[^>]+>/g, ' ').replace(/[^a-z0-9]+/g, ' ').trim();

// Every string value inside an item (keys are not text: "instant_fails" is a field name).
function strings(v, out = []) {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach(x => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach(x => strings(x, out));
  return out;
}

function phraseChecks(source, id, item) {
  let text = strings(item).join(' \n ');
  for (const re of NOT_A_LABEL) text = text.replace(re, blank);
  for (const [gate, list] of [['banned-phrase', BANNED], ['wording', WARN]]) {
    for (const p of list) {
      for (const m of text.matchAll(p.re)) {
        const ctx = text.slice(Math.max(0, m.index - 50), m.index + 60).replace(/\s+/g, ' ').trim();
        hit(gate, source, id, `"${p.name}": …${ctx}…`);
      }
    }
  }
}

function duplicateIds(source, items, idOf) {
  const seen = new Map();
  items.forEach((it, i) => {
    const id = idOf(it, i);
    if (id == null || id === '') return;
    const k = String(id);
    if (seen.has(k)) hit('duplicate-id', source, k, `ID used by items #${seen.get(k) + 1} and #${i + 1}`);
    else seen.set(k, i);
  });
}

// ---------------------------------------------------------------- question banks
// options: the exam's option count. answerText: whether the bank stores correct_answer.
const BANKS = [
  { source: 'UKMLA AKT', file: 'questions.html', name: 'QUESTIONS', options: 5, explain: 'why_correct', answerText: true },
  { source: 'PLAB 1', file: 'plab1-questions.js', name: 'PLAB1_QUESTIONS', options: 5, explain: 'why_correct', answerText: true },
  { source: 'MRCS Part A', file: 'data/mrcs-part-a-combined.json', json: true, options: 5, explain: 'why_correct', answerText: true },
  { source: 'MRCP Part 1', file: 'mrcp1-questions.js', name: 'MRCP1_QUESTIONS', options: 5, explain: 'why_correct', answerText: false },
];

// Near-duplicates: same keyed answer text, and word sets that overlap by at least
// 85% of the shorter stem (token-set style) and 50% of the union.
function stemWords(s) { return new Set(norm(s).split(' ').filter(w => w.length > 2)); }
function nearDuplicates(source, qs) {
  const groups = new Map();
  for (const q of qs) {
    const ans = norm(q.options && q.options[q.correct_letter]);
    if (!ans || !q.stem) continue;
    if (!groups.has(ans)) groups.set(ans, []);
    groups.get(ans).push({ id: q.id, w: stemWords(q.stem) });
  }
  for (const g of groups.values()) {
    for (let i = 0; i < g.length; i++) {
      for (let j = i + 1; j < g.length; j++) {
        const a = g[i].w, b = g[j].w;
        if (!a.size || !b.size) continue;
        const small = a.size < b.size ? a : b, big = small === a ? b : a;
        if (small.size / big.size < 0.5) continue;
        let inter = 0;
        for (const w of small) if (big.has(w)) inter++;
        const contain = inter / small.size, jacc = inter / (a.size + b.size - inter);
        if (contain >= 0.85 && jacc >= 0.5) {
          hit('near-duplicate', source, `${g[i].id} ~ ${g[j].id}`, `same answer, stem overlap ${Math.round(contain * 100)}% (Jaccard ${Math.round(jacc * 100)}%)`);
        }
      }
    }
  }
}

const bankItems = {};
for (const b of BANKS) {
  const qs = b.json ? JSON.parse(read(b.file)) : literal(b.file, b.name);
  bankItems[b.source] = qs;
  checked.push([b.source, b.file, qs.length]);
  duplicateIds(b.source, qs, q => q.id);
  for (const q of qs) {
    const id = q.id;
    const opts = q.options && typeof q.options === 'object' ? q.options : {};
    const letters = Object.keys(opts);
    if (isEmpty(q.correct_letter)) hit('empty-answer', b.source, id, 'correct_letter is empty');
    else if (!letters.includes(String(q.correct_letter).trim())) hit('missing-key', b.source, id, `key "${q.correct_letter}" not among options ${letters.join('')}`);
    if (b.answerText && isEmpty(q.correct_answer)) hit('empty-answer', b.source, id, 'correct_answer is empty');
    if (letters.length !== b.options) hit('option-count', b.source, id, `${letters.length} options, exam format is ${b.options}`);
    for (const L of letters) if (isEmpty(opts[L])) hit('empty-option', b.source, id, `option ${L} is empty`);
    // Exact text after case and spacing only: formulas differ by symbols (+, −, ÷).
    const texts = letters.map(L => String(opts[L] || '').toLowerCase().replace(/\s+/g, ' ').trim()).filter(Boolean);
    if (new Set(texts).size !== texts.length) hit('duplicate-option', b.source, id, 'two options have the same text');
    if (b.answerText && !isEmpty(q.correct_answer) && opts[q.correct_letter] != null) {
      const shown = norm(String(q.correct_answer).replace(/^\s*[A-Z][.)]\s*/, ''));
      if (shown !== norm(opts[q.correct_letter])) hit('answer-mismatch', b.source, id, `correct_answer "${String(q.correct_answer).slice(0, 60)}" ≠ option ${q.correct_letter}`);
    }
    if (isEmpty(q.stem)) hit('empty-stem', b.source, id, 'stem is empty');
    if (isEmpty(q[b.explain])) hit('empty-explanation', b.source, id, `${b.explain} is empty`);
    phraseChecks(b.source, id, q);
  }
  nearDuplicates(b.source, qs);
}

// ---------------------------------------------------------------- mock papers
for (const [source, file, name, bankName] of [
  ['PLAB 1 mocks', 'plab1-papers.js', 'PLAB1_PAPERS', 'PLAB 1'],
  ['MRCP Part 1 mocks', 'mrcp1-papers.js', 'MRCP1_PAPERS', 'MRCP Part 1'],
]) {
  const papers = literal(file, name);
  const bank = new Set(bankItems[bankName].map(q => String(q.id)));
  let n = 0;
  for (const [key, p] of Object.entries(papers)) {
    const ids = (p.ids || []).map(String);
    n += ids.length;
    const seen = new Set();
    for (const id of ids) {
      if (!bank.has(id)) hit('mock-ref', source, id, `${key} lists an ID that is not in the bank`);
      if (seen.has(id)) hit('mock-ref', source, id, `${key} lists it twice`);
      seen.add(id);
    }
  }
  checked.push([source, file, n]);
}

// ---------------------------------------------------------------- stations
// grid / critical: how each schema holds its marking grid and critical-fail section.
// null = the schema has no such section (reported once per library, not per station).
const LIBRARIES = [
  { source: 'CPSA stations', file: 'cpsa-stations.html', name: 'STATIONS', id: s => s.num,
    required: ['title', 'scenario'], grid: s => s.markingGrid, critical: null },
  { source: 'PLAB 2 OSCE stations', file: 'osce.html', name: 'STATIONS', id: s => s.num,
    required: ['title'], grid: s => s.marks || s.self_audit, critical: s => s.critical_fails || s.instant_fails },
  { source: 'MRCS Part B stations', dir: 'stations', id: s => s.id,
    required: ['title'], grid: s => s.grid, critical: s => s.failures,
    // The ICBSE source citation ("Station format: ... examiner-led questioning
    // ...") quotes the exam's own description of the format, so it is not
    // checked for phrases.
    phraseText: s => ({ ...s, sources: (s.sources || []).map(x =>
      x && /^Station format:/.test(x.supports || '') ? { ...x, supports: '' } : x) }) },
];
for (const L of LIBRARIES) {
  let items;
  if (L.dir) {
    const files = fs.readdirSync(path.join(ROOT, L.dir)).filter(f => /^MB-.*\.json$/.test(f)).sort();
    items = files.map(f => JSON.parse(read(`${L.dir}/${f}`)));
    const index = JSON.parse(read(`${L.dir}/index.json`)).map(e => String(e.id || e));
    const ids = new Set(items.map(s => String(s.id)));
    for (const id of index) if (!ids.has(id)) hit('empty-field', L.source, id, 'listed in stations/index.json but has no station file');
  } else items = literal(L.file, L.name);
  checked.push([L.source, L.file || `${L.dir}/MB-*.json`, items.length]);
  duplicateIds(L.source, items, L.id);
  for (const s of items) {
    const id = L.id(s);
    for (const f of L.required) if (isEmpty(s[f])) hit('empty-field', L.source, id, `${f} is empty`);
    if (isEmpty(L.grid(s))) hit('marking-grid', L.source, id, 'no marking grid');
    if (L.critical && isEmpty(L.critical(s))) hit('critical-fail', L.source, id, 'no critical-fail section');
    phraseChecks(L.source, id, L.phraseText ? L.phraseText(s) : s);
  }
  if (!L.critical) hit('critical-fail', L.source, null, `the station schema has no critical-fail field: all ${items.length} stations lack the section`);
}

// ---------------------------------------------------------------- card decks
// id: the deck's item ID (null = the deck has none, so no duplicate check).
// required: fields that must not be empty.
const DECKS = [
  { source: 'PLAB 2 flashcards', file: 'flashcards.html', name: 'CARDS', id: c => c.id, required: ['q', 'a'] },
  { source: 'CPSA flashcards', file: 'cpsa-flashcards.html', name: 'CARDS', id: c => c.id, required: ['q', 'a'] },
  { source: 'Instant Fail Atlas', file: 'atlas-cards.js', name: 'ATLAS_CARDS', id: c => c.id, required: ['title', 'trap', 'rule'] },
  { source: 'Master Cards PLAB 2', file: 'mastercards.html', name: 'CARDS', id: c => c.id, required: ['title', 'sections'] },
  { source: 'Master Cards UKMLA', file: 'mastercards-ukmla.html', name: 'CARDS', id: c => c.id, required: ['title', 'sections'] },
  { source: 'Bleep cards', file: 'bleep-cards-data.js', name: 'BLEEP_CARDS', id: c => c.id, required: ['title', 'scenario'] },
  { source: 'Starting Out cards', file: 'starting-out-data.js', name: 'SO_CARDS', id: c => c.id, required: ['title'] },
  { source: 'Say/Avoid CPSA', file: 'say-never-say.html', name: 'CARDS', id: c => c.id, required: [] },
  { source: 'Say/Avoid PLAB 2', file: 'say-never-say-plab2.html', name: 'CARDS', id: c => c.id, required: [] },
  { source: 'Do/Never CPSA', file: 'do-never-do.html', name: 'CARDS', id: null, required: ['t', 'do', 'never'] },
  { source: 'Do/Never PLAB 2', file: 'do-never-do-plab2.html', name: 'CARDS', id: null, required: ['t', 'do', 'never'] },
  { source: 'Actor Traps', file: 'actor-traps.html', name: 'TRAPS', id: c => c.id, required: ['title', 'right_response'] },
  { source: 'Examiner Brain', file: 'examiner-brain.html', name: 'BRAIN', id: c => c.id, required: ['station', 'what_tested'] },
  { source: 'Fail/Pass/Distinction', file: 'performance-bands.html', name: 'BANDS', id: c => c.id, required: ['station', 'fail', 'pass', 'distinction'] },
  { source: 'Critical-fail behaviours', file: 'instant-fails.html', name: ['T1', 'T2'], id: c => c.n, required: ['text'] },
  { source: 'Recovery Scripts', file: 'recovery-scripts.html', name: 'SCRIPTS', id: c => c.id, required: ['title', 'script'] },
];
for (const d of DECKS) {
  let cards;
  try {
    cards = [].concat(...[].concat(d.name).map(n => literal(d.file, n)));
  } catch (e) {
    hit('empty-field', d.source, null, `could not read ${d.file}: ${e.message}`);
    continue;
  }
  checked.push([d.source, d.file, cards.length]);
  if (d.id) duplicateIds(d.source, cards, d.id);
  cards.forEach((c, i) => {
    const id = d.id ? d.id(c) : `#${i + 1}`;
    for (const f of d.required) if (isEmpty(c[f])) hit('empty-field', d.source, id, `${f} is empty`);
    phraseChecks(d.source, id, c);
  });
}

// ---------------------------------------------------------------- report
const failCount = Object.entries(hits).filter(([g]) => GATES[g] === 'FAIL').reduce((n, [, h]) => n + h.length, 0);
const warnCount = Object.entries(hits).filter(([g]) => GATES[g] === 'WARN').reduce((n, [, h]) => n + h.length, 0);

console.log('='.repeat(64));
console.log('AMaC CONTENT INTEGRITY (mechanical checks; not a clinical review)');
console.log('='.repeat(64));
for (const [label, file, n] of checked) console.log(`  ${label.padEnd(26)} ${String(n).padStart(6)}  ${file}`);
console.log('\nGATE                 LEVEL  HITS  BY SOURCE');
for (const [g, level] of Object.entries(GATES)) {
  const by = {};
  for (const h of hits[g]) by[h.source] = (by[h.source] || 0) + 1;
  const bySrc = Object.entries(by).map(([s, n]) => `${s} ${n}`).join(', ');
  console.log(`  ${g.padEnd(19)} ${level}  ${String(hits[g].length).padStart(5)}  ${bySrc}`);
}
for (const [g, level] of Object.entries(GATES)) {
  if (!hits[g].length) continue;
  console.log(`\n${level === 'FAIL' ? 'x' : '!'} ${g} (${hits[g].length})`);
  for (const h of SHOW_ALL ? hits[g] : hits[g].slice(0, LIMIT)) console.log(`    ${h.source}${h.id ? ' ' + h.id : ''}: ${h.msg}`);
  if (!SHOW_ALL && hits[g].length > LIMIT) console.log(`    … ${hits[g].length - LIMIT} more (--all lists every hit)`);
}
if (JSON_OUT) {
  fs.writeFileSync(JSON_OUT, JSON.stringify({ generated: new Date().toISOString(), gates: GATES, checked, hits }, null, 1));
  console.log(`\nAll hits written to ${JSON_OUT}`);
}
console.log(`\n${failCount ? `FAIL: ${failCount} structural error(s).` : 'No structural errors.'} ${warnCount} warning(s).`);
process.exit(failCount ? 1 : 0);
