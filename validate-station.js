#!/usr/bin/env node
// AMaC station validator — enforces station-template-spec.md §10.
// Usage: node validate-station.js stations/MB-099.json [more.json ...]
// Exit code 1 if any station has errors. Warnings do not fail.

const fs = require('fs');

const TYPES = ['examination', 'applied-knowledge', 'communication', 'history', 'procedural', 'data-interpretation'];
const DOMAINS = {
  'MRCS-B': ['clinical-knowledge', 'clinical-skill', 'communication', 'professionalism'],
  'PLAB-2': null,      // define before converting PLAB 2 stations
  'UKMLA-CPSA': null   // define before converting CPSA stations
};
// Review-process language only. Clinical uses ("review the patient") are allowed.
const BANNED = /\b(reviewed|reviewers?|unreviewed|pending review|under review|awaiting review|review status|sign-?off|signed off|editorial note)\b/i;
// Framing the MRCS does not use: no 'instant fail', 'kill zone' or 'hurdle' on candidate-facing text.
const BANNED_FRAMING = /\b(instant fail|kill zone|hurdle)\b/i;
const COMPONENTS = ['Applied Knowledge', 'Applied Skills'];
const GRID_BANDS = ['fail', 'pass', 'high'];  // required on every row; 'borderline' is optional
const MODEL_BANDS = ['fail', 'borderline', 'pass', 'high'];
const BUDGET = { brief: 120, before: 60, flow: 40, cell: 25, fail: 150, pass: 200, borderline: 200, high: 300, failure: 40, knowledge: 150, recall: 80 };
const REQUIRED = ['id', 'exam', 'title', 'type', 'header', 'brief', 'beforeYouWalkIn', 'flow', 'grid', 'performances', 'failures', 'knowledge', 'recall', 'sources', 'partner'];

const words = s => (s || '').trim().split(/\s+/).filter(Boolean).length;
const blank = s => !s || !String(s).trim() || /^[-—–\s]+$/.test(String(s));

function validate(file) {
  const errors = [], warnings = [];
  let st;
  try { st = JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch (e) { return { errors: [`Cannot parse JSON: ${e.message}`], warnings }; }

  // 1. Required fields and vocabulary
  for (const k of REQUIRED) if (st[k] === undefined) errors.push(`Missing required field: ${k}`);
  if (!TYPES.includes(st.type)) errors.push(`Station type "${st.type}" is not in the controlled vocabulary`);
  if (!(st.exam in DOMAINS)) errors.push(`Unknown exam "${st.exam}"`);
  if (errors.length) return { errors, warnings };
  const domainErr = !COMPONENTS.includes(st.header.domain) ? [`header.domain must be one of: ${COMPONENTS.join(', ')}`] : [];
  for (const b of ['fail', 'pass', 'high']) if (!Array.isArray(st.performances[b])) errors.push(`Missing ${b} performance`);
  if (errors.length) return { errors: errors.concat(domainErr), warnings };
  errors.push(...domainErr);

  const rows = new Map(st.grid.map(r => [r.id, r]));
  const sources = new Set(st.sources.map(s => s.id));
  const domains = DOMAINS[st.exam];
  if (!domains) errors.push(`Exam ${st.exam} has no domain list configured — define it before converting stations`);
  if (st.grid.length < 5 || st.grid.length > 10) errors.push(`Grid has ${st.grid.length} rows (allowed 5–10)`);

  // 2. Every grid cell filled; domains valid; 6. numbers need a source
  for (const r of st.grid) {
    for (const band of GRID_BANDS) {
      if (blank(r[band])) errors.push(`${r.id} ${band} descriptor is empty`);
      else if (words(r[band]) > BUDGET.cell * 1.2) warnings.push(`${r.id} ${band} is ${words(r[band])} words (budget ${BUDGET.cell})`);
    }
    if (r.borderline !== undefined && blank(r.borderline)) errors.push(`${r.id} borderline descriptor is present but empty (remove it or fill it in)`);
    if (domains && !domains.includes(r.domain)) errors.push(`${r.id} domain "${r.domain}" is not a ${st.exam} domain`);
    const hasNumber = /\d/.test(`${r.pass} ${r.high}`);
    if (hasNumber && !r.source) errors.push(`${r.id} contains a number but has no source`);
    if (r.source && !sources.has(r.source)) errors.push(`${r.id} cites unknown source "${r.source}"`);
  }

  // 3/4. Coverage of grid cells by tagged model lines
  const covered = { fail: new Set(), borderline: new Set(), pass: new Set(), high: new Set() };
  for (const perf of MODEL_BANDS) {
    if (!st.performances[perf]) continue;
    for (const line of st.performances[perf]) {
      for (const t of line.tags || []) {
        if (!rows.has(t.row)) errors.push(`${perf} model tags unknown row ${t.row}`);
        else covered[t.band].add(t.row);
        if (t.band !== perf) warnings.push(`${perf} model line tagged as ${t.band} (${t.row}) — check this is intended`);
      }
    }
    const cw = st.performances[perf].filter(l => l.speaker === 'candidate').reduce((n, l) => n + words(l.text), 0);
    if (cw > BUDGET[perf] * 1.2) warnings.push(`${perf} model is ${cw} candidate words (budget ${BUDGET[perf]})`);
  }
  const failureRows = new Set(st.failures.map(f => f.row));
  for (const id of rows.keys()) {
    if (!covered.pass.has(id)) errors.push(`${id} Pass descriptor is not demonstrated by any Pass-model line`);
    if (!covered.high.has(id)) errors.push(`${id} High-performance descriptor is not demonstrated by any High-performance model line`);
    if (!covered.fail.has(id) && !failureRows.has(id)) errors.push(`${id} Fail descriptor is not shown in the Fail model or a failure entry`);
  }

  // 5. References resolve
  const checkRow = (where, row) => { if (!rows.has(row)) errors.push(`${where} references unknown row ${row}`); };
  st.failures.forEach((f, i) => checkRow(`failures[${i}]`, f.row));
  st.partner.reveals.forEach((r, i) => checkRow(`partner.reveals[${i}]`, r.row));
  st.partner.push.forEach((p, i) => checkRow(`partner.push[${i}]`, p.row));
  st.partner.curveballs.forEach((c, i) => checkRow(`partner.curveballs[${i}]`, c.row));
  st.knowledge.forEach((k, i) => { if (k.source && !sources.has(k.source)) errors.push(`knowledge[${i}] cites unknown source "${k.source}"`); });
  (st.recall.numbers || []).forEach((n, i) => {
    if (!n.source) errors.push(`recall.numbers[${i}] has no source`);
    else if (!sources.has(n.source)) errors.push(`recall.numbers[${i}] cites unknown source "${n.source}"`);
  });

  // 7. Banned internal language anywhere candidate-facing
  const walk = (v, path) => {
    if (typeof v === 'string') { if (BANNED.test(v)) errors.push(`Internal review language at ${path}: "${v.match(BANNED)[0]}"`); }
    else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${path}[${i}]`));
    else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) if (k !== 'url') walk(x, `${path}.${k}`);
  };
  walk(st, 'station');
  const walk2 = (v, path) => {
    if (typeof v === 'string') { if (BANNED_FRAMING.test(v)) errors.push(`Framing the exam does not use at ${path}: "${v.match(BANNED_FRAMING)[0]}"`); }
    else if (Array.isArray(v)) v.forEach((x, i) => walk2(x, `${path}[${i}]`));
    else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) if (k !== 'url') walk2(x, `${path}.${k}`);
  };
  walk2(st, 'station');

  // 8. Word budgets (warnings)
  const b = st.brief;
  const briefW = words(`${b.setting} ${b.role} ${b.scenario} ${b.task}`);
  if (briefW > BUDGET.brief * 1.2) warnings.push(`Brief is ${briefW} words (budget ${BUDGET.brief})`);
  const byw = st.beforeYouWalkIn;
  const beforeW = words(`${byw.frame} ${byw.trap} ${byw.firstMove}`);
  if (beforeW > BUDGET.before * 1.2) warnings.push(`Before you walk in is ${beforeW} words (budget ${BUDGET.before})`);
  const flowW = words(st.flow.join(' '));
  if (flowW > BUDGET.flow * 1.2) warnings.push(`Station flow is ${flowW} words (budget ${BUDGET.flow})`);
  st.failures.forEach((f, i) => { const w = words(`${f.move} ${f.consequence}`); if (w > BUDGET.failure * 1.2) warnings.push(`failures[${i}] is ${w} words (budget ${BUDGET.failure})`); });
  const kw = st.knowledge.reduce((n, k) => n + words(k.fact), 0);
  if (kw > BUDGET.knowledge * 1.2) warnings.push(`Knowledge is ${kw} words (budget ${BUDGET.knowledge})`);
  const r = st.recall;
  const rw = words([r.think, r.say, ...(r.do || []), ...(r.numbers || []).map(n => `${n.value} ${n.meaning}`), r.trap, r.finish].join(' '));
  if (rw > BUDGET.recall * 1.2) warnings.push(`Recall card is ${rw} words (budget ${BUDGET.recall})`);

  // 9. Curveballs and recall card completeness
  if (st.partner.curveballs.length > 4) errors.push(`${st.partner.curveballs.length} curveballs (max 4)`);
  for (const k of ['think', 'say', 'do', 'numbers', 'trap', 'finish']) if (blank(Array.isArray(r[k]) ? r[k].length && 'x' : r[k])) errors.push(`Recall card missing ${k}`);
  if (st.failures.length < 3 || st.failures.length > 5) errors.push(`${st.failures.length} failure entries (allowed 3–5)`);
  if ((st.recovery || []).length > 3) errors.push(`More than 3 station-specific recovery lines`);

  return { errors, warnings };
}

const files = process.argv.slice(2);
if (!files.length) { console.log('Usage: node validate-station.js <station.json> [...]'); process.exit(2); }
let failed = false;
for (const f of files) {
  const { errors, warnings } = validate(f);
  console.log(`\n${f}: ${errors.length ? 'FAIL' : 'PASS'} (${errors.length} errors, ${warnings.length} warnings)`);
  errors.forEach(e => console.log(`  ✗ ${e}`));
  warnings.forEach(w => console.log(`  ! ${w}`));
  if (errors.length) failed = true;
}
process.exit(failed ? 1 : 0);
