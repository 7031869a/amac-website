#!/usr/bin/env node
// Builds stations/index.json for the MRCS Part B station list.
// Skips stations that fail validate-station.js, and stations with a required image not yet sourced
// (status "needed"): those must never appear in the index. Tested in tests/build-station-index.test.js.
// Usage: node build-station-index.js   (run before every station push)

const fs = require('fs');
const path = require('path');
const { validate } = require('./validate-station.js');

// Returns { index, skipped, read } for the station JSON files in dir. Writes nothing.
function buildIndex(dir, opts = {}) {
  const files = fs.readdirSync(dir).filter(f => /\.json$/.test(f) && f !== 'index.json').sort();
  const index = [], skipped = [];

  for (const f of files) {
    const file = path.join(dir, f);
    const { errors } = validate(file, opts);
    if (errors.length) { skipped.push(`${f}: ${errors.length} validation error(s), e.g. ${errors[0]}`); continue; }
    const st = JSON.parse(fs.readFileSync(file, 'utf8'));
    const unsourced = (st.media || []).filter(m => m.required && m.status !== 'own' && m.status !== 'licensed');
    if (unsourced.length) { skipped.push(`${f}: required image not yet sourced (${unsourced.map(m => m.id).join(', ')})`); continue; }
    const h = st.header || {};
    index.push({ id: st.id, title: st.title, type: st.type, domain: h.domain, contentArea: h.contentArea, minutes: h.minutes });
  }

  index.sort((a, b) => a.id.localeCompare(b.id, 'en', { numeric: true }));
  return { index, skipped, read: files.length };
}

module.exports = { buildIndex };

if (require.main === module) {
  const DIR = path.join(__dirname, 'stations');
  const OUT = path.join(DIR, 'index.json');
  const { index, skipped, read } = buildIndex(DIR);
  fs.writeFileSync(OUT, JSON.stringify(index, null, 2) + '\n');

  console.log(`Wrote ${path.relative(__dirname, OUT)}: ${index.length} stations (${read} files read)`);
  const byType = {};
  for (const s of index) byType[s.type] = (byType[s.type] || 0) + 1;
  for (const [t, n] of Object.entries(byType).sort()) console.log(`  ${t}: ${n}`);
  if (skipped.length) {
    console.log(`Skipped ${skipped.length}:`);
    skipped.forEach(s => console.log(`  - ${s}`));
  }
}
