#!/usr/bin/env node
// Builds paces-stations/index.json for the MRCP PACES station list (mrcp-paces-stations.html).
// Skips any station that fails validate(): the index only ever lists publishable stations.
// Usage: node build-paces-index.js   (run before every PACES station push)

const fs = require('fs');
const path = require('path');

// Workflow notes, banned labels and images that must never reach a live station.
// (Author and reviewer names are checked by hand before each push, so they are not listed here.)
const FORBIDDEN = [
  [/\bStation ID\b/i, 'Station ID placeholder'],
  [/\b(?:draft|provisional)\b/i, 'draft label'],
  [/before (?:final )?(?:publication|approval)|sign-off pending|verification pending|not independently clinically approved/i, 'review-status note'],
  [/\b(?:instant[- ]fail|safety[- ]critical|kill zone|hurdle)\b/i, 'banned fail label'],
  [/<img\b|\.(?:png|jpe?g|gif|webp|svg)\b/i, 'image'],
];

const textOf = st => st.sections.flatMap(s => [s.heading, ...s.blocks.flatMap(b =>
  b.t === 'table' ? b.rows.flat() : [b.text])]).join('\n');

// Returns a list of problems for one station object (empty = publishable).
function validate(st) {
  const errors = [];
  if (!/^R5-\d{3}$/.test(st.id || '')) errors.push(`id "${st.id}" is not R5-NNN`);
  if (st.exam !== 'MRCP-PACES') errors.push('exam is not MRCP-PACES');
  if (!st.title || !st.title.trim()) errors.push('no title');
  if (!Array.isArray(st.sections) || !st.sections.length) return errors.concat('no sections');
  for (const s of st.sections) if (!s.blocks.length) errors.push(`section "${s.heading}" is empty`);
  const sources = st.sections.find(s => /^15\b/.test(s.heading));
  const srcText = sources ? sources.blocks.map(b => b.text || '').join(' ') : '';
  if (!/\b(?:19|20)\d{2}\b/.test(srcText)) errors.push('no dated source in section 15');
  const text = textOf(st);
  for (const [re, what] of FORBIDDEN) {
    const m = text.match(re);
    if (m) errors.push(`${what}: "${m[0]}"`);
  }
  return errors;
}

function buildIndex(dir) {
  const files = fs.readdirSync(dir).filter(f => /^R5-\d{3}\.json$/.test(f)).sort();
  const index = [], skipped = [];
  for (const f of files) {
    const st = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
    const errors = validate(st);
    if (path.basename(f, '.json') !== st.id) errors.push(`file name does not match id ${st.id}`);
    if (errors.length) { skipped.push(`${f}: ${errors.join('; ')}`); continue; }
    const e = st.encounter || {};
    index.push({ id: st.id, title: st.title, station: e.station, label: e.label, minutes: e.minutes });
  }
  index.sort((a, b) => a.id.localeCompare(b.id, 'en', { numeric: true }));
  return { index, skipped, read: files.length };
}

module.exports = { validate, buildIndex };

if (require.main === module) {
  const DIR = path.join(__dirname, 'paces-stations');
  const OUT = path.join(DIR, 'index.json');
  const { index, skipped, read } = buildIndex(DIR);
  fs.writeFileSync(OUT, JSON.stringify(index, null, 2) + '\n');
  console.log(`Wrote ${path.relative(__dirname, OUT)}: ${index.length} stations (${read} files read)`);
  const byStation = {};
  for (const s of index) byStation[s.station] = (byStation[s.station] || 0) + 1;
  for (const [n, c] of Object.entries(byStation).sort()) console.log(`  Station ${n}: ${c}`);
  if (skipped.length) {
    console.log(`Skipped ${skipped.length}:`);
    skipped.forEach(s => console.log(`  - ${s}`));
    process.exitCode = 1;
  }
}
