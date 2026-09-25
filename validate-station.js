#!/usr/bin/env node
// AMaC station validator v1.2 — enforces station-template-spec.md §10, four-band model.
// Bands per grid row: fail, pass, high required; borderline optional (only where it teaches something specific).
// Usage: node validate-station.js stations/MB-120.json [more.json ...]
// Exit code 1 if any station has errors. Warnings do not fail.

const fs = require('fs');

const TYPES = ['examination', 'applied-knowledge', 'communication', 'history', 'procedural', 'data-interpretation'];
const DOMAINS = {
  'MRCS-B': ['clinical-knowledge', 'clinical-skill', 'communication', 'professionalism'],
  'PLAB-2': null,      // define before converting PLAB 2 stations
  'UKMLA-CPSA': null   // define before converting CPSA stations
};
const REQUIRED_BANDS = ['fail', 'pass', 'high'];
const ALL_BANDS = ['fail', 'borderline', 'pass', 'high'];
// Review-process language only. Clinical uses ("review the patient") are allowed.
const BANNED = /\b(reviewed|reviewers?|unreviewed|pending review|under review|awaiting review|review status|sign-?off|signed off|editorial note)\b/i;
// Unsupported marking claims and retired AMaC terms (warnings).
const CLAIMS = /\b(examiners? (expect|reward|look for|want)|caps? the station|loses? (the )?[a-z ]*marks|commonest|outscores?|scores? zero|instant fail|kill zone|hurdle)\b/i;
const BUDGET = { brief: 120, before: 60, flow: 40, cell: 25, fail: 150, borderline: 200, pass: 200, high: 300, failure: 40, knowledge: 150, recall: 80 };
const REQUIRED = ['id', 'exam', 'title', 'type', 'header', 'brief', 'beforeYouWalkIn', 'flow', 'grid', 'performances', 'failures', 'knowledge', 'recall', 'sources', 'partner'];
const MEDIA_STATUS = ['needed', 'own', 'licensed'];
const COMPONENTS = ['Applied Knowledge', 'Applied Skills'];
// Framing the exam does not use: an error, not a warning, on candidate-facing text.
const FRAMING = /\b(instant fail|kill zone|hurdle|the bounded answer|instrument limit)\b/i;

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
  if (!/^[A-Z]{2,5}-[0-9]{2,4}$/.test(st.id || '')) errors.push(`Station id "${st.id}" does not match the ID pattern`);
  if (errors.length) return { errors, warnings };
  for (const b of REQUIRED_BANDS) if (!st.performances[b]) errors.push(`Missing ${b} model performance`);
  if (errors.length) return { errors, warnings };
  if (['examination','history'].includes(st.type) && st.header && st.header.signalMinutes !== 6) warnings.push(`Examination and history stations have a signal at 6 minutes (RCPSG candidate guidance): set header.signalMinutes to 6`);
  if (!COMPONENTS.includes((st.header || {}).domain)) errors.push(`header.domain must be exactly one of: ${COMPONENTS.join(', ')} (put the content area, e.g. 'Surgical anatomy', in header.contentArea)`);

  const rows = new Map(st.grid.map(r => [r.id, r]));
  const sources = new Set(st.sources.map(s => s.id));
  const domains = DOMAINS[st.exam];
  if (!domains) errors.push(`Exam ${st.exam} has no domain list configured — define it before converting stations`);
  if (st.grid.length < 5 || st.grid.length > 10) errors.push(`Grid has ${st.grid.length} rows (allowed 5–10)`);
  if ('distinction' in (st.performances || {}) || st.grid.some(r => 'distinction' in r)) errors.push(`Uses retired band "distinction" — rename to "high"`);

  // 2. Every required grid cell filled; domains valid; 6. numbers need a source
  for (const r of st.grid) {
    for (const band of ALL_BANDS) {
      if (band === 'borderline' && r.borderline === undefined) continue;
      if (blank(r[band])) errors.push(`${r.id} ${band} descriptor is empty`);
      else if (words(r[band]) > BUDGET.cell * 1.2) warnings.push(`${r.id} ${band} is ${words(r[band])} words (budget ${BUDGET.cell})`);
    }
    if (domains && !domains.includes(r.domain)) errors.push(`${r.id} domain "${r.domain}" is not a ${st.exam} domain`);
    const hasNumber = /\d/.test(`${r.pass} ${r.high} ${r.borderline || ''}`);
    if (hasNumber && !r.source) errors.push(`${r.id} contains a number but has no source`);
    if (r.source && !sources.has(r.source)) errors.push(`${r.id} cites unknown source "${r.source}"`);
  }

  // 3/4. Coverage of grid cells by tagged model lines
  const covered = { fail: new Set(), borderline: new Set(), pass: new Set(), high: new Set() };
  for (const perf of ALL_BANDS) {
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
  for (const [id, r] of rows) {
    if (!covered.pass.has(id)) errors.push(`${id} Pass descriptor is not demonstrated by any Pass-model line`);
    if (!covered.high.has(id)) errors.push(`${id} High-performance descriptor is not demonstrated by any High-performance-model line`);
    if (!covered.fail.has(id) && !failureRows.has(id)) errors.push(`${id} Fail descriptor is not shown in the Fail model or a failure entry`);
    if (r.borderline !== undefined && st.performances.borderline && !covered.borderline.has(id)) warnings.push(`${id} has a Borderline descriptor not shown in the Borderline model`);
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
  for (const s of st.sources) if (blank(s.version)) errors.push(`Source ${s.id} has no version/date`);

  // Media (images): must say what the image is for and where it comes from.
  (st.media || []).forEach((m, i) => {
    if (blank(m.task) || blank(m.description)) errors.push(`media[${i}] needs a task and a description`);
    if (!MEDIA_STATUS.includes(m.status)) errors.push(`media[${i}] status must be one of ${MEDIA_STATUS.join(', ')}`);
    if ((m.status === 'own' || m.status === 'licensed') && (blank(m.source) || blank(m.licence))) errors.push(`media[${i}] is ${m.status} but has no source or licence recorded`);
    if (m.status === 'needed' && m.required) warnings.push(`media[${i}] (${m.id}) is required but not yet sourced — station cannot be published without it`);
  });

  // 7. Banned internal language and marking claims anywhere candidate-facing
  const walk = (v, path) => {
    if (typeof v === 'string') {
      if (BANNED.test(v)) errors.push(`Internal review language at ${path}: "${v.match(BANNED)[0]}"`);
      if (FRAMING.test(v)) errors.push(`Framing the exam does not use at ${path}: "${v.match(FRAMING)[0]}"`);
      if (CLAIMS.test(v)) warnings.push(`Marking claim or retired term at ${path}: "${v.match(CLAIMS)[0]}"`);
    }
    else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${path}[${i}]`));
    else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) if (k !== 'url') walk(x, `${path}.${k}`);
  };
  walk(st, 'station');

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
  if ((r.do || []).length > 3) errors.push(`Recall card DO has more than 3 actions`);
  if ((r.numbers || []).length > 3) errors.push(`Recall card NUMBERS has more than 3 entries`);
  if (st.failures.length < 3 || st.failures.length > 5) errors.push(`${st.failures.length} failure entries (allowed 3–5)`);
  if ((st.recovery || []).length > 3) errors.push(`More than 3 station-specific recovery lines`);

  return { errors, warnings };
}

module.exports = { validate };

if (require.main === module) {
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
}
