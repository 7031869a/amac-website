#!/usr/bin/env node
/*
  .claude/skills/amac-audit/audit-tool.mjs — rotation, sampling and ledger for /amac-audit.

      node .claude/skills/amac-audit/audit-tool.mjs status
      node .claude/skills/amac-audit/audit-tool.mjs sample [--stage N] [--date YYYY-MM-DD]
      node .claude/skills/amac-audit/audit-tool.mjs changed [--since SHA] [--date YYYY-MM-DD]
      node .claude/skills/amac-audit/audit-tool.mjs record --sample FILE --report FILE
            [--findings N --major N --acute N] [--sweep "Domain A|Domain B" --why "text"]
      node .claude/skills/amac-audit/audit-tool.mjs coverage --commit SHA [--from SHA]   (used by .githooks/pre-push)

  Reads the live data files in this repo; reads and writes ONLY under
  AUDIT_DIR (default C:\Users\user\Documents\AMaC-audits). Never writes inside
  the repo, so no audit output can reach the public site.

  sample   rotation mode: picks the stage (next_stage in rotation.json unless
           --stage), draws the sample and writes
           AUDIT_DIR/work/<date>-stage<N>-<gate>-sample.json with every sampled
           item's full content. It does NOT update the ledger.
  changed  every item added or changed, per gate, since that gate's last audited
           commit (changed_commit; else the gate's last rotation commit; else
           --since; else the gate has no baseline yet and starts at HEAD).
           No sampling. Writes AUDIT_DIR/work/<date>-changed-sample.json.
  record   after the report is written. Rotation: adds the sampled IDs to the
           stage's ledger, sets last_audit / last_commit, records full-sweep
           domains, advances next_stage. Changed: sets every gate's
           changed_commit to the audited HEAD. Both set last_run and next_due.
  coverage prints a warning (exit 0) when a gate's data files differ between its
           changed_commit and SHA, i.e. no "changed" audit covers SHA. With
           --from, only gates whose data files changed in FROM..SHA are checked.

  Cadence: rotation.json "cadence" = { label, weekdays } (default twice weekly,
  Mon + Thu). next_due = the first listed weekday after the last run.
  Models: Agent 1 (screen) sonnet, Agent 2 (independent re-check) opus (MODELS).

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
const MODELS = { agent1: 'sonnet', agent2: 'opus' };
const DEFAULT_CADENCE = { label: 'twice weekly', weekdays: ['Mon', 'Thu'] };
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function freshRotation() {
  return {
    _about: 'AMaC content-audit rotation for /amac-audit. Written by .claude/skills/amac-audit/audit-tool.mjs. Never commit this file.',
    owner_first_name: '',   // used in the report heading "5 items for <name> to verify personally"; kept out of the repo
    cadence: DEFAULT_CADENCE,
    last_run: null,
    next_due: null,
    next_stage: 1,
    stages: Object.fromEntries(Object.entries(STAGES).map(([n, s]) => [n, {
      title: s.title, gate: s.gate, last_audit: null, last_commit: null, pool_cycle: 1,
      sampled_ids: [], full_sweep: [], reports: [], changed_commit: null,
    }])),
    changed_audits: [],
  };
}
// Older rotation.json files gain the newer fields without losing anything.
function upgrade(rot) {
  const fresh = freshRotation();
  for (const k of ['cadence', 'last_run', 'next_due', 'changed_audits']) if (!(k in rot)) rot[k] = fresh[k];
  delete rot.cycle_weeks;
  for (const [n, s] of Object.entries(fresh.stages)) rot.stages[n] = { ...s, ...(rot.stages[n] || {}) };
  if (!rot.last_run) {
    const dates = Object.values(rot.stages).map(s => s.last_audit).filter(Boolean).sort();
    if (dates.length) rot.last_run = dates[dates.length - 1];
  }
  if (!rot.next_due && rot.last_run) rot.next_due = nextDue(rot.last_run, rot.cadence);
  return rot;
}
function loadRotation() {
  if (!fs.existsSync(ROTATION)) {
    fs.mkdirSync(path.join(AUDIT_DIR, 'work'), { recursive: true });
    fs.writeFileSync(ROTATION, JSON.stringify(freshRotation(), null, 2));
    console.log(`Created ${ROTATION}`);
  }
  const raw = fs.readFileSync(ROTATION, 'utf8');
  const rot = upgrade(JSON.parse(raw));
  const upgraded = JSON.stringify(rot, null, 2);
  if (upgraded !== JSON.stringify(JSON.parse(raw), null, 2)) fs.writeFileSync(ROTATION, upgraded);   // newer fields added
  return rot;
}
const saveRotation = rot => fs.writeFileSync(ROTATION, JSON.stringify(rot, null, 2));

// First cadence weekday strictly after `date` (YYYY-MM-DD).
function nextDue(date, cadence = DEFAULT_CADENCE) {
  const days = (cadence.weekdays || DEFAULT_CADENCE.weekdays).map(d => WEEKDAYS.indexOf(String(d).slice(0, 3)));
  if (!days.length || days.some(d => d < 0)) throw new Error(`rotation.json cadence.weekdays must be names like ${WEEKDAYS.join(', ')}`);
  const d = new Date(date + 'T12:00:00Z');
  for (let i = 1; i <= 7; i++) {
    const x = new Date(d.getTime() + i * 864e5);
    if (days.includes(x.getUTCDay())) return x.toISOString().slice(0, 10);
  }
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

// Every data file a gate reads, for the coverage check.
const gateFiles = n => STAGES[n].parts.flatMap(p => p.files);

// ---------------------------------------------------------------- commands
function status() {
  const rot = loadRotation();
  const today = new Date().toISOString().slice(0, 10);
  console.log(`cadence: ${rot.cadence.label} (${rot.cadence.weekdays.join(', ')})  last run: ${rot.last_run || 'never'}  next due: ${rot.next_due || 'now'}` +
    (rot.next_due && rot.next_due < today ? '  OVERDUE' : ''));
  console.log(`next_stage: ${rot.next_stage}`);
  for (const [n, s] of Object.entries(rot.stages)) {
    console.log(`  ${n} ${s.title.padEnd(44)} last ${s.last_audit || 'never'}  ledger ${s.sampled_ids.length} (cycle ${s.pool_cycle})` +
      `  changed-audited to ${s.changed_commit ? s.changed_commit.slice(0, 7) : '-'}` +
      (s.full_sweep.filter(x => !x.done).length ? `  FULL SWEEP PENDING: ${s.full_sweep.filter(x => !x.done).map(x => x.domain).join(', ')}` : ''));
  }
}

function writeSample(base, body) {
  // A second run on the same day gets -2, -3 … so no earlier sample or report is overwritten.
  let name = base;
  for (let k = 2; fs.existsSync(path.join(AUDIT_DIR, 'work', `${name}-sample.json`)) || fs.existsSync(path.join(AUDIT_DIR, `${name}.md`)); k++) name = `${base}-${k}`;
  body.report = path.join(AUDIT_DIR, `${name}.md`);
  const out = path.join(AUDIT_DIR, 'work', `${name}-sample.json`);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, JSON.stringify(body, null, 1));
  console.log(`Sample: ${out}`);
  console.log(`Report: ${body.report}`);
  console.log(`Models: Agent 1 ${MODELS.agent1}, Agent 2 ${MODELS.agent2}. Next due after this run: ${body.next_due}`);
  return out;
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
    const eligible = pool.filter(it => !ledger.has(it.id));
    const changedIds = new Set(changedSince(part, baseline));
    const changedItems = shuffle(eligible.filter(it => changedIds.has(it.id)), r).slice(0, size.changed);
    const strat = size.extra ? size.total : size.total - changedItems.length;
    const taken = new Set(changedItems.map(it => it.id));
    let rest = stratified(eligible.filter(it => !taken.has(it.id)), strat, r);
    if (rest.length < strat) {                     // pool exhausted: restart the ledger
      poolReset = true;
      rest.forEach(it => taken.add(it.id));
      rest = rest.concat(stratified(pool.filter(it => !taken.has(it.id)), strat - rest.length, r));
    }
    changedItems.forEach(it => items.push({ ...it, source: part.source, reason: 'added/changed since last audit' }));
    rest.forEach(it => items.push({ ...it, source: part.source, reason: 'stratified' }));
    console.log(`${part.source}: pool ${pool.length}, not yet sampled ${eligible.length}, changed since baseline ${changedIds.size}` +
      ` -> ${changedItems.length} changed + ${rest.length} stratified`);
  }
  if (n === '2') addMockPapers(items);

  const name = `${date}-stage${n}-${stage.gate}`;
  const domains = {};
  items.forEach(it => { domains[it.domain] = (domains[it.domain] || 0) + 1; });
  writeSample(name, {
    mode: 'rotation', stage: Number(n), gate: stage.gate, title: stage.title, note: stage.note || null, date, seed: `${date}|stage${n}`,
    head, baseline, pool_reset: poolReset, report: path.join(AUDIT_DIR, `${name}.md`),
    models: MODELS, cadence: rot.cadence, next_due: nextDue(date, rot.cadence),
    pending_full_sweeps: st.full_sweep.filter(x => !x.done), domains,
    items,
  });
  console.log(`Stage ${n} (${stage.title}): ${items.length} items, ${Object.keys(domains).length} domains${poolReset ? ', ledger restarts (pool exhausted)' : ''}`);
  const pend = st.full_sweep.filter(x => !x.done);
  if (pend.length) console.log(`FULL SWEEP PENDING for stage ${n}: ${pend.map(x => x.domain).join(', ')}`);
}

// Which PLAB 1 mock papers use each PLAB 1 item.
function addMockPapers(items) {
  const papers = literalFrom(readHead('plab1-papers.js'), 'PLAB1_PAPERS');
  for (const it of items) {
    if (it.source === 'PLAB 1') it.mock_papers = Object.entries(papers).filter(([, p]) => p.ids.map(String).includes(it.id)).map(([k]) => k);
  }
}

// "/amac-audit changed": every added or changed item of every gate, no sampling.
function changed() {
  const rot = loadRotation();
  const date = opt('date', new Date().toISOString().slice(0, 10));
  const head = git('rev-parse', 'HEAD').trim();
  const since = opt('since');
  const items = [], gates = {};
  for (const [n, stage] of Object.entries(STAGES)) {
    const st = rot.stages[n];
    const base = st.changed_commit || st.last_commit || since;
    if (!base) {
      gates[n] = { gate: stage.gate, title: stage.title, baseline: head, items: 0, removed: 0,
        note: 'no audited commit yet: baseline set to HEAD, nothing to audit' };
      console.log(`Stage ${n} ${stage.title}: no audited commit yet, baseline set to ${head.slice(0, 7)}`);
      continue;
    }
    let count = 0, removed = 0;
    for (const part of stage.parts) {
      if (part.kind === 'full') {
        const diff = git('diff', '--name-only', base, head, '--', ...part.files).split('\n').filter(Boolean);
        for (const it of part.load(readHead).filter(x => diff.includes(x.id))) {
          items.push({ ...it, stage: Number(n), gate: stage.gate, source: part.source, reason: 'page changed' }); count++;
        }
        continue;
      }
      const ids = new Set(changedSince(part, base));
      const now = part.load(readHead);
      for (const it of now.filter(x => ids.has(x.id))) {
        items.push({ ...it, stage: Number(n), gate: stage.gate, source: part.source, reason: 'added/changed' }); count++;
      }
      const nowIds = new Set(now.map(x => x.id));
      removed += part.load(rel => readAt(base, rel), base).filter(x => !nowIds.has(x.id)).length;
    }
    gates[n] = { gate: stage.gate, title: stage.title, baseline: base, items: count, removed };
    console.log(`Stage ${n} ${stage.title}: ${count} added/changed since ${base.slice(0, 7)}${removed ? `, ${removed} removed (listed only)` : ''}`);
  }
  addMockPapers(items);
  const name = `${date}-changed`;
  const domains = {};
  items.forEach(it => { domains[it.domain] = (domains[it.domain] || 0) + 1; });
  writeSample(name, {
    mode: 'changed', date, head, gates, report: path.join(AUDIT_DIR, `${name}.md`),
    models: MODELS, cadence: rot.cadence, next_due: nextDue(date, rot.cadence), domains, items,
  });
  console.log(`Changed audit: ${items.length} items across ${Object.values(gates).filter(g => g.items).length} gates`);
}

function record() {
  const rot = loadRotation();
  const s = JSON.parse(fs.readFileSync(opt('sample'), 'utf8'));
  const report = opt('report');
  if (!report || !fs.existsSync(report)) throw new Error('--report must name the written report');
  const tally = { findings: Number(opt('findings', 0)), major: Number(opt('major', 0)), acute: Number(opt('acute', 0)) };
  const sweep = (opt('sweep') || '').split('|').map(x => x.trim()).filter(Boolean);
  if (s.mode === 'changed') {
    // --sweep entries are "<stage>:<domain>" in changed mode.
    for (const n of Object.keys(s.gates)) {
      const st = rot.stages[n];
      st.changed_commit = s.head;
      const ids = s.items.filter(it => String(it.stage) === n).map(it => it.id);
      if (ids.length) st.sampled_ids = [...new Set([...st.sampled_ids, ...ids])];
    }
    for (const d of sweep) {
      const [n, domain] = d.split(':');
      if (!rot.stages[n] || !domain) throw new Error(`--sweep in changed mode needs "<stage>:<domain>", got "${d}"`);
      rot.stages[n].full_sweep.push({ domain, marked: s.date, why: opt('why', ''), report, done: false });
    }
    rot.changed_audits.push({ date: s.date, commit: s.head, report, items: s.items.length, ...tally, full_sweep: sweep });
    console.log(`Recorded changed audit: ${s.items.length} items, every gate audited to ${s.head.slice(0, 7)}`);
  } else {
    const st = rot.stages[String(s.stage)];
    const ids = s.items.map(it => it.id);
    st.sampled_ids = s.pool_reset ? ids : [...new Set([...st.sampled_ids, ...ids])];
    if (s.pool_reset) st.pool_cycle += 1;
    st.last_audit = s.date;
    st.last_commit = s.head;
    for (const d of sweep) st.full_sweep.push({ domain: d, marked: s.date, why: opt('why', ''), report, done: false });
    st.reports.push({ date: s.date, report, sampled: ids.length, ...tally, full_sweep: sweep });
    rot.next_stage = (s.stage % 8) + 1;
    console.log(`Recorded stage ${s.stage}: ${ids.length} IDs in the ledger, next_stage ${rot.next_stage}` +
      (sweep.length ? `, full sweep marked: ${sweep.join(', ')}` : ''));
  }
  rot.last_run = s.date;
  rot.next_due = nextDue(s.date, rot.cadence);
  saveRotation(rot);
  console.log(`Next due: ${rot.next_due} (${rot.cadence.label})`);
}

// Pre-push: warn (never block) when content changed after the last "changed" audit.
function coverage() {
  const sha = opt('commit') || 'HEAD';
  if (!fs.existsSync(ROTATION)) {
    console.log('amac-audit: WARNING (not blocking): no rotation.json, so no "changed" audit covers this push. Run /amac-audit changed.');
    return;
  }
  const rot = upgrade(JSON.parse(fs.readFileSync(ROTATION, 'utf8')));
  // --from: the push range starts here; a push that changes no content data file is silent.
  const from = opt('from');
  const touched = n => {
    if (!from) return true;
    try { return git('diff', '--name-only', from, sha, '--', ...gateFiles(n)).trim() !== ''; } catch { return true; }
  };
  const gaps = [];
  for (const n of Object.keys(STAGES)) {
    if (!touched(n)) continue;
    const base = rot.stages[n].changed_commit;
    let diff;
    if (!base) diff = ['no "changed" audit yet'];
    else {
      try { diff = git('diff', '--name-only', base, sha, '--', ...gateFiles(n)).split('\n').filter(Boolean); }
      catch { diff = [`audited commit ${base.slice(0, 7)} not found locally`]; }
    }
    if (diff.length) gaps.push(`${STAGES[n].title}: ${diff.slice(0, 3).join(', ')}${diff.length > 3 ? ' …' : ''}`);
  }
  if (!gaps.length) return;
  console.log(`amac-audit: WARNING (not blocking): no "/amac-audit changed" covers ${String(sha).slice(0, 7)} for:`);
  for (const g of gaps) console.log('  - ' + g);
  console.log('Run /amac-audit changed to audit every added or changed item.');
}

if (cmd === 'status') status();
else if (cmd === 'sample') sample();
else if (cmd === 'changed') changed();
else if (cmd === 'record') record();
else if (cmd === 'coverage') coverage();
else {
  console.log('usage: audit-tool.mjs status | sample [--stage N] | changed [--since SHA] | record --sample FILE --report FILE [...] | coverage --commit SHA');
  process.exit(2);
}
