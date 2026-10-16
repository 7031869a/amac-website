#!/usr/bin/env node
/*
  scripts/sync-counts.mjs — one source of truth for every public content count.

      node scripts/sync-counts.mjs           count, write data/counts.json, rewrite the HTML
      node scripts/sync-counts.mjs --check   count and report only; exit 1 if anything is stale

  1. Counts the live items in the data files the pages actually load (question
     banks, station libraries, card decks, tool data arrays) and writes
     data/counts.json: one number per key, plus `_meta` saying what each key is,
     which file(s) it was counted from and how.

  2. Writes those numbers as literal text into every tagged spot, so the count is
     in the HTML for crawlers and for readers without JavaScript:

       <span data-count="aktQuestions">11,058</span>
       <span data-count="plab1Questions" data-count-plain>3717</span>   (no separator)

     Inside attributes (<title> has no markup inside, so counts in titles and in
     meta/og/twitter tags go on the <meta>), the tag names the key and the words
     that follow the number:

       <meta data-count-content="cpsaStations:CPSA stations;aktQuestions:AKT questions"
             name="description" content="431 CPSA stations, 11,058 AKT questions ...">

     Each number keeps its style: written with a thousands separator it stays
     separated, written without it stays plain.

  counts.js fills the same elements at runtime from data/counts.json.

  A data-count whose value is only digits (the question-count chips on
  plab1-exams.html use data-count="10" etc.) is not a count and is left alone.

  Files are read and written as UTF-8 text with line endings untouched.

  After adding or removing content, run this and commit the HTML and
  data/counts.json together. scripts/audit-site.mjs fails the build if they drift.
*/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const read = rel => fs.readFileSync(path.join(ROOT, rel), 'utf8');

// ---------------------------------------------------------------- reading data

// Index just past `NAME =` (window.NAME / const NAME / var / let) where an
// array or object literal starts.
export function literalStart(text, name) {
  const re = new RegExp('(?:window\\.|\\b(?:const|var|let)\\s+)' + name + '\\s*=\\s*(?=[\\[{])');
  const m = re.exec(text);
  if (!m) throw new Error(`${name} not found`);
  return m.index + m[0].length;
}

// Index of the bracket closing the literal that opens at text[start].
// Skips strings, template strings and comments.
export function literalEnd(text, start) {
  let depth = 0;
  for (let i = start; i < text.length; i++) {
    const c = text[i];
    if (c === '"' || c === "'" || c === '`') {
      for (i++; i < text.length && text[i] !== c; i++) if (text[i] === '\\') i++;
    } else if (c === '/' && text[i + 1] === '/') {
      i = text.indexOf('\n', i);
      if (i < 0) break;
    } else if (c === '/' && text[i + 1] === '*') {
      i = text.indexOf('*/', i) + 1;
    } else if ('[{('.includes(c)) depth++;
    else if (']})'.includes(c) && --depth === 0) return i;
  }
  throw new Error('unterminated literal');
}

// Number of items at depth 1 of the literal at text[start]. Works on plain
// JavaScript (unquoted keys, single quotes, template strings), not only JSON.
function topLevelItems(text, start) {
  let depth = 0, items = 0, pending = false;
  for (let i = start; i < text.length; i++) {
    const c = text[i];
    if (c === '"' || c === "'" || c === '`') {
      for (i++; i < text.length && text[i] !== c; i++) if (text[i] === '\\') i++;
      if (depth === 1) pending = true;
    } else if (c === '/' && text[i + 1] === '/') {
      i = text.indexOf('\n', i);
      if (i < 0) break;
    } else if (c === '/' && text[i + 1] === '*') {
      i = text.indexOf('*/', i) + 1;
    } else if ('[{('.includes(c)) {
      if (++depth === 2) pending = true;
    } else if (']})'.includes(c)) {
      if (--depth === 0) return items + (pending ? 1 : 0);
    } else if (depth === 1 && c === ',') {
      if (pending) items++;
      pending = false;
    } else if (depth === 1 && !/\s/.test(c)) pending = true;
  }
  throw new Error('unterminated literal');
}

// The literal assigned to NAME in FILE, parsed as JSON.
function literal(rel, name) {
  const text = read(rel);
  const s = literalStart(text, name);
  return JSON.parse(text.slice(s, literalEnd(text, s) + 1));
}

// Item count of the literal assigned to NAME: array length or object key count.
function count(rel, name) {
  const text = read(rel);
  const s = literalStart(text, name);
  try {
    const v = JSON.parse(text.slice(s, literalEnd(text, s) + 1));
    return Array.isArray(v) ? v.length : Object.keys(v).length;
  } catch {
    return topLevelItems(text, s);
  }
}

const json = rel => JSON.parse(read(rel));
const byType = (rel, name, type) => literal(rel, name).filter(c => c.type === type).length;
const distinct = (arr, field) => new Set(arr.map(x => x[field])).size;

// ---------------------------------------------------------------- what is counted
// Every public count has one key. `src` is the file the page loads; `how` is the
// rule. Every value is measured; none is typed in by hand.

const KEYS = {
  // ---- question banks
  aktQuestions: { label: 'UKMLA AKT questions', src: ['questions.html'], how: 'length of QUESTIONS',
    fn: () => count('questions.html', 'QUESTIONS') },
  aktDomains: { label: 'UKMLA AKT clinical domains', src: ['questions.html'], how: 'distinct QUESTIONS[].domain',
    fn: () => distinct(literal('questions.html', 'QUESTIONS'), 'domain') },
  plab1Questions: { label: 'PLAB 1 SBA questions', src: ['plab1-questions.js'], how: 'length of PLAB1_QUESTIONS',
    fn: () => count('plab1-questions.js', 'PLAB1_QUESTIONS') },
  plab1Domains: { label: 'PLAB 1 bank clinical domains', src: ['plab1-questions.js'], how: 'distinct PLAB1_QUESTIONS[].domain',
    fn: () => distinct(literal('plab1-questions.js', 'PLAB1_QUESTIONS'), 'domain') },
  plab1Papers: { label: 'PLAB 1 full timed mock papers', src: ['plab1-papers.js'], how: 'keys of PLAB1_PAPERS',
    fn: () => count('plab1-papers.js', 'PLAB1_PAPERS') },
  aktMockPapers: { label: 'UKMLA AKT timed mock papers (2 per mock)', src: ['akt-papers.js', 'akt-mock-questions.js', 'questions.html'],
    how: 'keys of AKT_PAPERS; every paper id must be in questions.html and its akt-mock-questions.js entry identical to the bank',
    fn: () => {
      const bank = Object.fromEntries(literal('questions.html', 'QUESTIONS').map(q => [String(q.id), q]));
      const ex = Object.fromEntries(literal('akt-mock-questions.js', 'AKT_MOCK_QUESTIONS').map(q => [String(q.id), q]));
      const papers = literal('akt-papers.js', 'AKT_PAPERS');
      for (const p of Object.values(papers)) for (const id of p.ids.map(String)) {
        if (!(id in bank)) throw new Error(`AKT mock id ${id} is not in questions.html`);
        if (!(id in ex)) throw new Error(`AKT mock id ${id} is missing from akt-mock-questions.js`);
        for (const [k, v] of Object.entries(ex[id])) if (JSON.stringify(v) !== JSON.stringify(bank[id][k]))
          throw new Error(`akt-mock-questions.js ${id}.${k} differs from questions.html - regenerate the extract`);
      }
      return Object.keys(papers).length;
    } },
  aktMocks: { label: 'UKMLA AKT full mocks (each of 2 timed papers)', src: ['akt-papers.js'], how: 'distinct mock number in the keys of AKT_PAPERS',
    fn: () => new Set(Object.keys(literal('akt-papers.js', 'AKT_PAPERS')).map(k => k.replace(/-paper-\d+$/, ''))).size },
  plab1PaperDomains: { label: 'Clinical domains covered by the PLAB 1 mock papers (not the whole bank)',
    src: ['plab1-papers.js', 'plab1-questions.js'], how: 'distinct domain of every question id listed in PLAB1_PAPERS',
    fn: () => {
      const dom = Object.fromEntries(literal('plab1-questions.js', 'PLAB1_QUESTIONS').map(q => [q.id, q.domain]));
      const ids = Object.values(literal('plab1-papers.js', 'PLAB1_PAPERS')).flatMap(p => p.ids);
      const missing = ids.filter(id => !(id in dom));
      if (missing.length) throw new Error(`${missing.length} paper ids not in the bank, e.g. ${missing[0]}`);
      return new Set(ids.map(id => dom[id])).size;
    } },
  mrcsPartATotal: { label: 'MRCS Part A questions (one combined bank)', src: ['data/mrcs-part-a-combined.json'],
    how: 'length of the JSON array mrcs-part-a.html loads',
    fn: () => json('data/mrcs-part-a-combined.json').length },
  mrcsPartASubjects: { label: 'MRCS Part A subjects', src: ['data/mrcs-part-a-combined.json'], how: 'distinct subject',
    fn: () => distinct(json('data/mrcs-part-a-combined.json'), 'subject') },
  mrcp1Questions: { label: 'MRCP Part 1 questions (scaffold bank)', src: ['mrcp1-questions.js'], how: 'length of MRCP1_QUESTIONS',
    fn: () => count('mrcp1-questions.js', 'MRCP1_QUESTIONS') },

  // ---- station libraries
  cpsaStations: { label: 'UKMLA CPSA stations', src: ['cpsa-stations.html'], how: 'length of STATIONS',
    fn: () => count('cpsa-stations.html', 'STATIONS') },
  osceStations: { label: 'PLAB 2 OSCE stations', src: ['osce.html'], how: 'length of STATIONS',
    fn: () => count('osce.html', 'STATIONS') },
  mrcsPartBStations: { label: 'MRCS Part B practice stations', src: ['stations/index.json'],
    how: 'length of the index mrcs-part-b.html lists (built by build-station-index.js)',
    fn: () => json('stations/index.json').length },
  mrcpPacesStations: { label: 'MRCP PACES practice stations', src: ['paces-stations/index.json'],
    how: 'length of the index mrcp-paces-stations.html lists (built by build-paces-index.js)',
    fn: () => json('paces-stations/index.json').length },
  mockCircuitStations: { label: 'PLAB 2 mock circuit stations', src: ['mock-circuit.html'], how: 'length of STATIONS',
    fn: () => count('mock-circuit.html', 'STATIONS') },
  simulatorStations: { label: 'Consultation simulator stations', src: ['simulator.html'], how: 'length of STATIONS',
    fn: () => count('simulator.html', 'STATIONS') },
  actorTrapSimStations: { label: 'Actor trap simulator stations', src: ['actor-trap-simulator.html'], how: 'length of ORDER',
    fn: () => count('actor-trap-simulator.html', 'ORDER') },
  spokenOsceStations: { label: 'Spoken OSCE trainer stations', src: ['spoken-osce.html'],
    how: 'entries indented `  id:"` between `const STATIONS=[` and the next top-level declaration '
       + '(the literal holds regexes with quotes in them, so it cannot be bracket-matched)',
    fn: () => {
      const t = read('spoken-osce.html');
      const s = literalStart(t, 'STATIONS');
      const e = t.slice(s).search(/\n(?:const|let|var|function)\s/);
      if (e < 0) throw new Error('end of STATIONS not found');
      return (t.slice(s, s + e).match(/^ {2}id:"/gm) || []).length;
    } },
  stationPlannerStations: { label: 'Station types in the Station Frequency Analyser', src: ['station-planner.html'],
    how: 'length of FREQ', fn: () => count('station-planner.html', 'FREQ') },
  performanceBands: { label: 'Fail/Pass/Distinction stations', src: ['performance-bands.html'], how: 'length of BANDS',
    fn: () => count('performance-bands.html', 'BANDS') },

  // ---- flashcard decks (the 108 cards flagged in the Aug 2026 audit were 86
  // repairs + 22 false positives, commit a862acc; none are excluded today)
  flashcards: { label: 'PLAB 2 flashcards (all types)', src: ['flashcards.html'], how: 'length of CARDS',
    fn: () => count('flashcards.html', 'CARDS') },
  flashcardsDecision: { label: 'PLAB 2 flashcards: Decision (type qa)', src: ['flashcards.html'], how: 'CARDS where type = qa',
    fn: () => byType('flashcards.html', 'CARDS', 'qa') },
  flashcardsCurveball: { label: 'PLAB 2 flashcards: Curveball', src: ['flashcards.html'], how: 'CARDS where type = curveball',
    fn: () => byType('flashcards.html', 'CARDS', 'curveball') },
  flashcardsExaminerTrap: { label: 'PLAB 2 flashcards: Examiner Trap', src: ['flashcards.html'], how: 'CARDS where type = examiner_trap',
    fn: () => byType('flashcards.html', 'CARDS', 'examiner_trap') },
  flashcardsCriticalMiss: { label: 'PLAB 2 flashcards: Critical Miss', src: ['flashcards.html'], how: 'CARDS where type = critical_miss',
    fn: () => byType('flashcards.html', 'CARDS', 'critical_miss') },
  flashcardsSafetyCheck: { label: 'PLAB 2 flashcards: Safety Check', src: ['flashcards.html'], how: 'CARDS where type = safety_check',
    fn: () => byType('flashcards.html', 'CARDS', 'safety_check') },
  flashcardsSayThis: { label: 'PLAB 2 flashcards: Say This', src: ['flashcards.html'], how: 'CARDS where type = say_this',
    fn: () => byType('flashcards.html', 'CARDS', 'say_this') },
  cpsaFlashcards: { label: 'CPSA flashcards (all types)', src: ['cpsa-flashcards.html'], how: 'length of CARDS',
    fn: () => count('cpsa-flashcards.html', 'CARDS') },
  cpsaFlashcardsDecision: { label: 'CPSA flashcards: Decision (type qa)', src: ['cpsa-flashcards.html'], how: 'CARDS where type = qa',
    fn: () => byType('cpsa-flashcards.html', 'CARDS', 'qa') },
  cpsaFlashcardsCurveball: { label: 'CPSA flashcards: Curveball', src: ['cpsa-flashcards.html'], how: 'CARDS where type = curveball',
    fn: () => byType('cpsa-flashcards.html', 'CARDS', 'curveball') },
  cpsaFlashcardsSafetyCheck: { label: 'CPSA flashcards: Safety Check', src: ['cpsa-flashcards.html'], how: 'CARDS where type = safety_check',
    fn: () => byType('cpsa-flashcards.html', 'CARDS', 'safety_check') },
  cpsaFlashcardsCriticalMiss: { label: 'CPSA flashcards: Critical Miss', src: ['cpsa-flashcards.html'], how: 'CARDS where type = critical_miss',
    fn: () => byType('cpsa-flashcards.html', 'CARDS', 'critical_miss') },
  frcsFlashcards: { label: 'FRCS paper-critique flashcards', src: ['frcs-flashcards.html'],
    how: 'count of <div class="flashcard"> (static HTML deck)',
    fn: () => (read('frcs-flashcards.html').match(/<div class="flashcard">/g) || []).length },
  bleepCards: { label: 'Foundation On Call Bleep Cards', src: ['bleep-cards-data.js'], how: 'length of BLEEP_CARDS',
    fn: () => count('bleep-cards-data.js', 'BLEEP_CARDS') },
  startingOutCards: { label: 'Foundation Starting Out cards', src: ['starting-out-data.js'], how: 'length of SO_CARDS',
    fn: () => count('starting-out-data.js', 'SO_CARDS') },

  // ---- card libraries
  atlasCards: { label: 'Instant Fail Atlas cards', src: ['atlas-cards.js'], how: 'length of ATLAS_CARDS',
    fn: () => count('atlas-cards.js', 'ATLAS_CARDS') },
  masterCards: { label: 'PLAB 2 Master Cards', src: ['mastercards.html'], how: 'length of CARDS',
    fn: () => count('mastercards.html', 'CARDS') },
  masterCardsUkmla: { label: 'UKMLA (CPSA) Master Cards', src: ['mastercards-ukmla.html'], how: 'length of CARDS',
    fn: () => count('mastercards-ukmla.html', 'CARDS') },
  sayThisCpsa: { label: 'Say This. Avoid This. (CPSA) cards', src: ['say-never-say.html'], how: 'length of CARDS',
    fn: () => count('say-never-say.html', 'CARDS') },
  sayThisPlab2: { label: 'Say This. Avoid This. (PLAB 2) cards', src: ['say-never-say-plab2.html'], how: 'length of CARDS',
    fn: () => count('say-never-say-plab2.html', 'CARDS') },
  doNeverDo: { label: 'Do / Never Do (CPSA) cards', src: ['do-never-do.html'], how: 'length of CARDS',
    fn: () => count('do-never-do.html', 'CARDS') },
  doNeverDoPlab2: { label: 'Do / Never Do (PLAB 2) cards', src: ['do-never-do-plab2.html'], how: 'length of CARDS',
    fn: () => count('do-never-do-plab2.html', 'CARDS') },
  actorTraps: { label: 'Actor Traps Library traps', src: ['actor-traps.html'], how: 'length of TRAPS',
    fn: () => count('actor-traps.html', 'TRAPS') },
  examinerBrain: { label: 'Examiner Brain stations', src: ['examiner-brain.html'], how: 'length of BRAIN',
    fn: () => count('examiner-brain.html', 'BRAIN') },
  criticalFailsTier1: { label: 'Critical-fail behaviours: Tier 1', src: ['instant-fails.html'], how: 'length of T1',
    fn: () => count('instant-fails.html', 'T1') },
  criticalFailsTier2: { label: 'Critical-fail behaviours: Tier 2', src: ['instant-fails.html'], how: 'length of T2',
    fn: () => count('instant-fails.html', 'T2') },
  criticalFailsTotal: { label: 'Critical-fail behaviours: total', src: ['instant-fails.html'], how: 'length of T1 + T2',
    fn: () => count('instant-fails.html', 'T1') + count('instant-fails.html', 'T2') },

  // ---- smaller tools
  nhsPhrases: { label: 'NHS Language Coach phrases', src: ['nhs-language.html'], how: 'length of PHRASES',
    fn: () => count('nhs-language.html', 'PHRASES') },
  documentationScripts: { label: 'Documentation Coach scripts', src: ['documentation.html'], how: 'length of DOCS',
    fn: () => count('documentation.html', 'DOCS') },
  recoveryScripts: { label: 'Recovery Scripts scenarios', src: ['recovery-scripts.html'], how: 'length of SCRIPTS',
    fn: () => count('recovery-scripts.html', 'SCRIPTS') },
  failRecoveryQuestions: { label: 'Fail Recovery Diagnostic questions', src: ['fail-recovery.html'], how: 'length of QUESTIONS',
    fn: () => count('fail-recovery.html', 'QUESTIONS') },
  failRecoveryDomains: { label: 'Fail Recovery Diagnostic domains', src: ['fail-recovery.html'], how: 'keys of DOMAINS',
    fn: () => count('fail-recovery.html', 'DOMAINS') },
  routeFinderQuestions: { label: 'Route Finder questions', src: ['route-finder.html'], how: 'length of QUESTIONS',
    fn: () => count('route-finder.html', 'QUESTIONS') },
  dvlaConditions: { label: 'DVLA Fitness to Drive conditions', src: ['dvla.html'], how: 'length of CONDITIONS.conditions',
    fn: () => literal('dvla.html', 'CONDITIONS').conditions.length },
  ethicsFrameworks: { label: 'Ethics & Law Quick Reference frameworks', src: ['ethics-law.html'], how: 'length of ETHICS.sections',
    fn: () => literal('ethics-law.html', 'ETHICS').sections.length },
  antibioticInfections: { label: 'Antibiotic Guide infections', src: ['antibiotics.html'], how: 'length of ABX',
    fn: () => count('antibiotics.html', 'ABX') },
  examCoachExams: { label: 'Examination Coach examinations', src: ['examcoach.html'], how: 'length of EXAMS.examinations',
    fn: () => literal('examcoach.html', 'EXAMS').examinations.length },
  consultationFrameworks: { label: 'Consultation Frameworks', src: ['frameworks.html'], how: 'length of FW',
    fn: () => count('frameworks.html', 'FW') },
  studyPlans: { label: 'Study Planner plans', src: ['study-planner.html'], how: 'keys of PLANS',
    fn: () => count('study-planner.html', 'PLANS') },
  speakMoments: { label: 'Speak Like a Doctor moments', src: ['speak-m*.html'], how: 'number of speak-m<N>-*.html pages',
    fn: () => fs.readdirSync(ROOT).filter(f => /^speak-m\d+-.*\.html$/.test(f)).length },

  // ---- the "N Tools" headline
  performanceTools: { label: 'Tools (the "N Tools" headline)', src: ['tools.html'],
    how: 'tiles on tools.html: <a class="tool-card"> links, counting each target page once and '
       + 'leaving out the book-volume tiles that link to books.html',
    fn: () => {
      const hrefs = [...read('tools.html').matchAll(/<a\b[^>]*>/g)]
        .map(m => m[0])
        .filter(a => /\bclass="tool-card\b/.test(a))
        .map(a => (a.match(/\bhref="([^"#?]+)/) || [])[1])
        .filter(h => h && h !== 'books.html');
      return new Set(hrefs).size;
    } },
};

export function measure() {
  const counts = {}, problems = [];
  for (const [key, k] of Object.entries(KEYS)) {
    try {
      const n = k.fn();
      if (!Number.isInteger(n) || n <= 0) throw new Error(`got ${n}`);
      counts[key] = n;
    } catch (e) {
      problems.push(`${key}: ${e.message}`);
    }
  }
  return { counts, problems };
}

export const meta = () => Object.fromEntries(Object.entries(KEYS).map(([key, k]) => [key,
  { label: k.label, source: k.src, method: k.how }]));

// ---------------------------------------------------------------- the markup

const NUM = String.raw`\d{1,3}(?:,\d{3})+|\d+`;
export const ELEM = /<([a-zA-Z][\w-]*)(\s[^>]*?\bdata-count="([A-Za-z]\w*)"[^>]*)>([^<]*)<\/\1>/g;
export const ATTR = /<[a-zA-Z][^>]*?\bdata-count-([a-z-]+)="([^"]+)"[^>]*>/g;
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const fmt = (n, like) => (like.includes(',') ? n.toLocaleString('en-GB') : String(n));

export const htmlPages = () => fs.readdirSync(ROOT).filter(f => f.endsWith('.html')).sort();

// Every count spot in a page: { key, shown, where } — used by the rewriter and the audit.
export function spots(html) {
  const out = [];
  for (const m of html.matchAll(ELEM)) out.push({ key: m[3], shown: m[4].trim(), plain: /\bdata-count-plain\b/.test(m[2]), where: 'element' });
  for (const m of html.matchAll(ATTR)) {
    const [tag, attr, spec] = m;
    if (attr === 'plain') continue;
    const val = (tag.match(new RegExp(`\\s${esc(attr)}="([^"]*)"`)) || [])[1];
    for (const pair of spec.split(';')) {
      const i = pair.indexOf(':');
      const key = pair.slice(0, i), phrase = pair.slice(i + 1);
      const hits = val === undefined ? []
        : [...val.matchAll(new RegExp(`(?<![\\d,])(${NUM})(\\+?\\s+${esc(phrase)})`, 'g'))];
      out.push({ key, shown: hits.length === 1 ? hits[0][1] : null, hits: hits.length, attr, phrase, where: 'attribute' });
    }
  }
  return out;
}

function rewrite(html, counts, errors, file) {
  html = html.replace(ELEM, (whole, tag, attrs, key, inner) => {
    if (!(key in counts)) { errors.push(`${file}: unknown key ${key}`); return whole; }
    if (!new RegExp(`^(?:${NUM})$`).test(inner.trim())) {
      errors.push(`${file}: data-count="${key}" holds ${JSON.stringify(inner)}, not a number`);
      return whole;
    }
    const n = /\bdata-count-plain\b/.test(attrs) ? String(counts[key]) : counts[key].toLocaleString('en-GB');
    return `<${tag}${attrs}>${inner.replace(inner.trim(), n)}</${tag}>`;
  });
  return html.replace(ATTR, (tag, attr, spec) => {
    if (attr === 'plain') return tag;
    const am = tag.match(new RegExp(`\\s${esc(attr)}="([^"]*)"`));
    if (!am) { errors.push(`${file}: data-count-${attr} but no ${attr} attribute`); return tag; }
    let val = am[1];
    for (const pair of spec.split(';')) {
      const i = pair.indexOf(':');
      const key = pair.slice(0, i), phrase = pair.slice(i + 1);
      if (!(key in counts)) { errors.push(`${file}: unknown key ${key} in data-count-${attr}`); continue; }
      const re = new RegExp(`(?<![\\d,])(${NUM})(\\+?\\s+${esc(phrase)})`, 'g');
      const hits = val.match(re) || [];
      if (hits.length !== 1) { errors.push(`${file}: "${phrase}" found ${hits.length} times in ${attr}`); continue; }
      val = val.replace(re, (_, n, rest) => fmt(counts[key], n) + rest);
    }
    const at = am.index + am[0].indexOf('"') + 1;
    return tag.slice(0, at) + val + tag.slice(at + am[1].length);
  });
}

// ---------------------------------------------------------------- main

function main() {
  const check = process.argv.includes('--check');
  const { counts, problems } = measure();
  if (problems.length) {
    console.error('COULD NOT COUNT:\n' + problems.map(p => '  - ' + p).join('\n'));
    return 1;
  }

  const errors = [], changed = [];
  for (const file of htmlPages()) {
    const old = read(file);
    if (!old.includes('data-count')) continue;
    const next = rewrite(old, counts, errors, file);
    if (next !== old) {
      changed.push(file);
      if (!check) fs.writeFileSync(path.join(ROOT, file), next);
    }
  }
  if (errors.length) console.error('MARKUP PROBLEMS:\n' + errors.map(e => '  - ' + e).join('\n'));

  const jsonPath = path.join(ROOT, 'data', 'counts.json');
  let prev = null;
  try { prev = JSON.parse(fs.readFileSync(jsonPath, 'utf8')); } catch { /* missing or unreadable */ }
  const prevCounts = prev && Object.fromEntries(Object.entries(prev).filter(([k, v]) => typeof v === 'number'));
  const diff = Object.keys({ ...prevCounts, ...counts }).sort()
    .filter(k => (prevCounts || {})[k] !== counts[k])
    .map(k => `${k} ${(prevCounts || {})[k]} -> ${counts[k]}`);
  const metaNow = meta();
  const staleJson = !prev || diff.length > 0 || JSON.stringify(prev._meta) !== JSON.stringify(metaNow);
  if (staleJson && check) console.log('stale: data/counts.json' + (diff.length ? ` (${diff.join('; ')})` : ' (_meta)'));
  if (staleJson && !check) {
    // `generated` is the date the numbers last changed, so a rerun with no
    // content change leaves the file byte-identical.
    const generated = !prev || diff.length ? new Date().toISOString().slice(0, 10) : prev.generated;
    fs.writeFileSync(jsonPath, JSON.stringify({ ...counts, generated, _meta: metaNow }, null, 2) + '\n');
  }

  const w = Math.max(...Object.keys(counts).map(k => k.length));
  for (const [k, v] of Object.entries(counts)) console.log(`  ${k.padEnd(w)}  ${v}`);
  console.log(`\n${check ? 'stale' : 'updated'}: ${changed.length ? changed.join(', ') : 'no HTML files'}`);
  if (check) return changed.length || errors.length || staleJson ? 1 : 0;
  return errors.length ? 1 : 0;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) process.exitCode = main();
