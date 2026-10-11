#!/usr/bin/env node
/*
  .claude/skills/amac-audit/audit-tool.mjs — rotation, sampling and ledger for /amac-audit.

      node .claude/skills/amac-audit/audit-tool.mjs status
      node .claude/skills/amac-audit/audit-tool.mjs sample [--stage N] [--date YYYY-MM-DD]
      node .claude/skills/amac-audit/audit-tool.mjs record --sample FILE --report FILE
            [--findings N --major N --acute N] [--sweep "Domain A|Domain B" --why "text"]

  Reads the live data files in this repo; reads and writes ONLY under
  AUDIT_DIR (default C:\Users\user\Documents\AMaC-audits). Never writes inside
  the repo, so no audit output can reach the public site.

  sample  picks the stage (next_stage in rotation.json unless --stage), draws
          the sample and writes AUDIT_DIR/work/<date>-stage<N>-<gate>-sample.json
          with every sampled item's full content. It does NOT update the ledger.
  record  after the report is written: adds the sampled IDs to the stage's
          ledger, sets last_audit / last_commit, records full-sweep domains and
          advances next_stage. Run it once per finished audit.

  Sampling (seeded by date + stage, so a re-run on the same day gives the same sample):
    bank     40 items stratified across domains (every domain once, as far as 40
             allows, then in proportion to domain size) + up to 20 items added or
             changed since the stage's last audit (git; first audit: the last 8 weeks)
    station  8 stations (up to 2 of them added/changed), rest stratified
    card     25 cards (up to 6 of them added/changed), rest stratified
    full     every page, every time (stage 8)
  An item already in the stage's ledger is never drawn again until the stage's
  pool is exhausted; then the ledger restarts (pool_cycle + 1).
*/
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const { literalStart, literalEnd } = await import(new URL('file:///' + path.join(ROOT, 'scripts/sync-counts.mjs').replace(/\\/g, '/')));
const AUDIT_DIR = process.env.AMAC_AUDIT_DIR || 'C:\\Users\\user\\Documents\\AMaC-audits';
const ROTATION = path.join(AUDIT_DIR, 'rotation.json');

const args = process.argv.slice(2);
const cmd = args[0];
const opt = (name, def = null) => (args.includes('--' + name) ? args[args.indexOf('--' + name) + 1] : def);

const git = (...a) => execFileSync('git', ['-C', ROOT, ...a], { encoding: 'utf8', maxBuffer: 1 << 30, stdio: ['ignore', 'pipe', 'pipe'] });
const readHead = rel => fs.readFileSync(path.join(ROOT, rel), 'utf8');
const readAt = (sha, rel) => { try { return git('show', `${sha}:${rel}`); } catch { return null; } };

function literalFrom(text, name) {
  const s = literalStart(text, name);
  const src = text.slice(s, literalEnd(text, s) + 1);
  try { return JSON.parse(src); } catch { return vm.runInNewContext('(' + src + ')', {}, { timeout: 5000 }); }
}

// ---------------------------------------------------------------- stages
// Each part is one pool. load(read) -> [{ id, domain, content }]; read(rel) returns
// the file text at HEAD or at an older commit (null if it did not exist then).
const arr = (read, file, name) => { const t = read(file); return t == null ? [] : [].concat(literalFrom(t, name)); };
const bank = (source, file, name, domain) => ({ kind: 'bank', source, files: [file],
  load: read => (name ? arr(read, file, name) : (read(file) == null ? [] : JSON.parse(read(file))))
    .map(q => ({ id: String(q.id), domain: domain(q) || 'Unassigned', content: q })) });
const lib = (kind, source, file, name, id, domain) => ({ kind, source, files: [file],
  load: read => arr(read, file, name).map((x, i) => ({ id: String(id(x, i)), domain: domain(x) || 'Unassigned', content: x })) });
const deck = (source, file, name, id) => ({ source, file, name, id });

const PERFORMANCE_DECKS = [
  deck('Instant Fail Atlas', 'atlas-cards.js', 'ATLAS_CARDS', c => c.id),
  deck('PLAB 2 flashcards', 'flashcards.html', 'CARDS', c => c.id),
  deck('CPSA flashcards', 'cpsa-flashcards.html', 'CARDS', c => c.id),
  deck('Say/Avoid CPSA', 'say-never-say.html', 'CARDS', (c, i) => c.id ?? i + 1),
  deck('Say/Avoid PLAB 2', 'say-never-say-plab2.html', 'CARDS', (c, i) => c.id ?? i + 1),
  deck('Do/Never CPSA', 'do-never-do.html', 'CARDS', c => c.t),
  deck('Do/Never PLAB 2', 'do-never-do-plab2.html', 'CARDS', c => c.t),
  deck('Actor Traps', 'actor-traps.html', 'TRAPS', c => c.id),
  deck('Examiner Brain', 'examiner-brain.html', 'BRAIN', c => c.id),
  deck('Fail/Pass/Distinction', 'performance-bands.html', 'BANDS', c => c.id),
  deck('Recovery Scripts', 'recovery-scripts.html', 'SCRIPTS', c => c.id),
];
// FRCS flashcards are markup, not a data array: one item per <div class="flashcard">.
function frcsCards(read) {
  const t = read('frcs-flashcards.html');
  if (t == null) return [];
  return t.split('<div class="flashcard">').slice(1).map(chunk => {
    const n = (chunk.match(/class="card-number">#?(\d+)/) || [])[1];
    const text = chunk.split(/<div class="flashcard">|<\/main>/)[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    return { id: `FRCS flashcards:FRCS-${n}`, domain: 'FRCS flashcards', content: { text } };
  });
}

const STAGES = {
  1: { gate: 'akt', title: 'UKMLA AKT', parts: [bank('UKMLA AKT', 'questions.html', 'QUESTIONS', q => q.domain)] },
  2: { gate: 'plab1', title: 'PLAB 1 + mocks', note: 'The six mock papers draw only from this bank; each sampled item says which papers use it.',
       parts: [bank('PLAB 1', 'plab1-questions.js', 'PLAB1_QUESTIONS', q => q.domain)] },
  3: { gate: 'cpsa', title: 'CPSA stations', parts: [lib('station', 'CPSA stations', 'cpsa-stations.html', 'STATIONS', s => s.num, s => s.category)] },
  4: { gate: 'plab2', title: 'PLAB 2 OSCE stations + PLAB 2 Master Cards', parts: [
       lib('station', 'PLAB 2 OSCE stations', 'osce.html', 'STATIONS', s => s.num, s => s.domain),
       lib('card', 'Master Cards PLAB 2', 'mastercards.html', 'CARDS', c => c.id, c => c.domain)] },
  5: { gate: 'mrcs-a', title: 'MRCS Part A', parts: [bank('MRCS Part A', 'data/mrcs-part-a-combined.json', null, q => q.subject)] },
  6: { gate: 'mrcs-b', title: 'MRCS Part B stations', parts: [{ kind: 'station', source: 'MRCS Part B stations', files: ['stations'],
       load: (read, sha) => {
         const files = sha ? git('ls-tree', '--name-only', sha, 'stations/').split('\n').map(f => f.replace(/^stations\//, ''))
                           : fs.readdirSync(path.join(ROOT, 'stations'));
         return files.filter(f => /^MB-.*\.json$/.test(f)).map(f => read('stations/' + f)).filter(Boolean).map(t => JSON.parse(t))
           .map(s => ({ id: String(s.id), domain: (s.header && (s.header.contentArea || s.header.domain)) || s.type, content: s }));
       } }] },
  7: { gate: 'performance', title: 'Performance layer', note: 'Recovery Room (recovery-room.html) has no item data: read the whole page once per cycle.',
       parts: [{ kind: 'card', source: 'Performance layer', files: [...PERFORMANCE_DECKS.map(d => d.file), 'frcs-flashcards.html'],
         load: read => [...PERFORMANCE_DECKS.flatMap(d => arr(read, d.file, d.name)
           .map((c, i) => ({ id: `${d.source}:${d.id(c, i)}`, domain: d.source, content: c }))), ...frcsCards(read)] }] },
  8: { gate: 'reference', title: 'Clinical reference pages (full review)', parts: [{ kind: 'full', source: 'Reference pages',
       files: ['prescribing.html', 'antibiotics.html', 'dvla.html', 'normal-values.html', 'ecg-abg.html', 'ethics-law.html'],
       load: read => ['prescribing.html', 'antibiotics.html', 'dvla.html', 'normal-values.html', 'ecg-abg.html', 'ethics-law.html']
         .map(f => ({ id: f, domain: f, content: { file: f, note: 'Review the whole page: every table row, dose, threshold and statement.' } })) }] },
};
const SIZE = { bank: { total: 40, changed: 20, extra: true }, station: { total: 8, changed: 2 }, card: { total: 25, changed: 6 } };

// ---------------------------------------------------------------- rotation.json
function freshRotation() {
  return {
    _about: 'AMaC content-audit rotation for /amac-audit. Written by .claude/skills/amac-audit/audit-tool.mjs. Never commit this file.',
    owner_first_name: '',   // used in the report heading "5 items for <name> to verify personally"; kept out of the repo
    cycle_weeks: 8,
    next_stage: 1,
    stages: Object.fromEntries(Object.entries(STAGES).map(([n, s]) => [n, {
      title: s.title, gate: s.gate, last_audit: null, last_commit: null, pool_cycle: 1,
      sampled_ids: [], full_sweep: [], reports: [],
    }])),
  };
}
function loadRotation() {
  if (!fs.existsSync(ROTATION)) {
    fs.mkdirSync(path.join(AUDIT_DIR, 'work'), { recursive: true });
    fs.writeFileSync(ROTATION, JSON.stringify(freshRotation(), null, 2));
    console.log(`Created ${ROTATION}`);
  }
  return JSON.parse(fs.readFileSync(ROTATION, 'utf8'));
}

// ---------------------------------------------------------------- sampling helpers
function rng(seedText) {
  let h = 1779033703 ^ seedText.length;
  for (let i = 0; i < seedText.length; i++) { h = Math.imul(h ^ seedText.charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19); }
  let a = h >>> 0;
  return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const shuffle = (a, r) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

// n items spread across domains: one per domain (random domain order) while n
// allows, the rest in proportion to what each domain still has.
function stratified(items, n, r) {
  const by = new Map();
  for (const it of shuffle(items, r)) { if (!by.has(it.domain)) by.set(it.domain, []); by.get(it.domain).push(it); }
  const out = [];
  for (const d of shuffle([...by.keys()], r)) { if (out.length >= n) break; out.push(by.get(d).shift()); }
  while (out.length < n) {
    const left = [...by.values()].reduce((s, l) => s + l.length, 0);
    if (!left) break;
    let pick = r() * left;
    for (const l of by.values()) { if (pick < l.length) { out.push(l.shift()); break; } pick -= l.length; }
  }
  return out;
}

// Item IDs added or changed between `sha` and HEAD.
function changedSince(part, sha) {
  if (!sha) return [];
  const old = new Map(part.load(rel => readAt(sha, rel), sha).map(it => [it.id, JSON.stringify(it.content)]));
  return part.load(readHead).filter(it => old.get(it.id) !== JSON.stringify(it.content)).map(it => it.id);
}

// ---------------------------------------------------------------- commands
function status() {
  const rot = loadRotation();
  console.log(`next_stage: ${rot.next_stage}`);
  for (const [n, s] of Object.entries(rot.stages)) {
    console.log(`  ${n} ${s.title.padEnd(44)} last ${s.last_audit || 'never'}  ledger ${s.sampled_ids.length} (cycle ${s.pool_cycle})` +
      (s.full_sweep.filter(x => !x.done).length ? `  FULL SWEEP PENDING: ${s.full_sweep.filter(x => !x.done).map(x => x.domain).join(', ')}` : ''));
  }
}

function sample() {
  const rot = loadRotation();
  const n = String(opt('stage', rot.next_stage));
  const stage = STAGES[n];
  if (!stage) throw new Error(`no stage ${n}`);
  const st = rot.stages[n];
  const date = opt('date', new Date().toISOString().slice(0, 10));
  const head = git('rev-parse', 'HEAD').trim();
  // First audit of a stage: changes over the last 8 weeks.
  const baseline = st.last_commit ||
    git('rev-list', '-1', `--before=${new Date(Date.parse(date) - 56 * 864e5).toISOString().slice(0, 10)}`, 'HEAD').trim() || null;
  const r = rng(`${date}|stage${n}`);
  const ledger = new Set(st.sampled_ids);
  const items = [];
  let poolReset = false;

  for (const part of stage.parts) {
    const pool = part.load(readHead);
    if (part.kind === 'full') { pool.forEach(it => items.push({ ...it, source: part.source, reason: 'full review' })); continue; }
    const size = SIZE[part.kind];
    let eligible = pool.filter(it => !ledger.has(it.id));
    const changedIds = new Set(changedSince(part, baseline));
    const changed = shuffle(eligible.filter(it => changedIds.has(it.id)), r).slice(0, size.changed);
    const strat = size.extra ? size.total : size.total - changed.length;
    const taken = new Set(changed.map(it => it.id));
    let rest = stratified(eligible.filter(it => !taken.has(it.id)), strat, r);
    if (rest.length < strat) {                     // pool exhausted: restart the ledger
      poolReset = true;
      rest.forEach(it => taken.add(it.id));
      rest = rest.concat(stratified(pool.filter(it => !taken.has(it.id)), strat - rest.length, r));
    }
    changed.forEach(it => items.push({ ...it, source: part.source, reason: 'added/changed since last audit' }));
    rest.forEach(it => items.push({ ...it, source: part.source, reason: 'stratified' }));
    console.log(`${part.source}: pool ${pool.length}, not yet sampled ${eligible.length}, changed since baseline ${changedIds.size}` +
      ` -> ${changed.length} changed + ${rest.length} stratified`);
  }

  if (n === '2') {                                  // which mock papers use each PLAB 1 item
    const papers = literalFrom(readHead('plab1-papers.js'), 'PLAB1_PAPERS');
    for (const it of items) it.mock_papers = Object.entries(papers).filter(([, p]) => p.ids.map(String).includes(it.id)).map(([k]) => k);
  }

  const name = `${date}-stage${n}-${stage.gate}`;
  const out = path.join(AUDIT_DIR, 'work', `${name}-sample.json`);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  const domains = {};
  items.forEach(it => { domains[it.domain] = (domains[it.domain] || 0) + 1; });
  fs.writeFileSync(out, JSON.stringify({
    stage: Number(n), gate: stage.gate, title: stage.title, note: stage.note || null, date, seed: `${date}|stage${n}`,
    head, baseline, pool_reset: poolReset, report: path.join(AUDIT_DIR, `${name}.md`),
    pending_full_sweeps: st.full_sweep.filter(x => !x.done), domains,
    items,
  }, null, 1));
  console.log(`Stage ${n} (${stage.title}): ${items.length} items, ${Object.keys(domains).length} domains${poolReset ? ', ledger restarts (pool exhausted)' : ''}`);
  console.log(`Sample: ${out}`);
  console.log(`Report: ${path.join(AUDIT_DIR, name + '.md')}`);
  const pend = st.full_sweep.filter(x => !x.done);
  if (pend.length) console.log(`FULL SWEEP PENDING for stage ${n}: ${pend.map(x => x.domain).join(', ')}`);
}

function record() {
  const rot = loadRotation();
  const s = JSON.parse(fs.readFileSync(opt('sample'), 'utf8'));
  const report = opt('report');
  if (!report || !fs.existsSync(report)) throw new Error('--report must name the written report');
  const st = rot.stages[String(s.stage)];
  const ids = s.items.map(it => it.id);
  st.sampled_ids = s.pool_reset ? ids : [...new Set([...st.sampled_ids, ...ids])];
  if (s.pool_reset) st.pool_cycle += 1;
  st.last_audit = s.date;
  st.last_commit = s.head;
  const sweep = (opt('sweep') || '').split('|').map(x => x.trim()).filter(Boolean);
  for (const d of sweep) st.full_sweep.push({ domain: d, marked: s.date, why: opt('why', ''), report, done: false });
  st.reports.push({ date: s.date, report, sampled: ids.length, findings: Number(opt('findings', 0)),
    major: Number(opt('major', 0)), acute: Number(opt('acute', 0)), full_sweep: sweep });
  rot.next_stage = (s.stage % 8) + 1;
  fs.writeFileSync(ROTATION, JSON.stringify(rot, null, 2));
  console.log(`Recorded stage ${s.stage}: ${ids.length} IDs in the ledger, next_stage ${rot.next_stage}` +
    (sweep.length ? `, full sweep marked: ${sweep.join(', ')}` : ''));
}

if (cmd === 'status') status();
else if (cmd === 'sample') sample();
else if (cmd === 'record') record();
else { console.log('usage: audit-tool.mjs status | sample [--stage N] [--date D] | record --sample FILE --report FILE [...]'); process.exit(2); }
