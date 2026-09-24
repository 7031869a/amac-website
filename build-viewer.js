#!/usr/bin/env node
// Builds a self-contained viewer page with one station embedded.
// Usage: node build-viewer.js MB-099.json [out.html]
// On the live site you don't need this: station-viewer.html?station=MB-099 loads stations/MB-099.json.
const fs = require('fs');
const [, , stationFile, out = 'station-viewer.built.html'] = process.argv;
if (!stationFile) { console.log('Usage: node build-viewer.js <station.json> [out.html]'); process.exit(2); }
const json = JSON.stringify(JSON.parse(fs.readFileSync(stationFile, 'utf8'))).replace(/</g, '\\u003c');
const tpl = fs.readFileSync(__dirname + '/station-viewer.html', 'utf8');
if (!tpl.includes('__STATION_JSON__')) { console.error('Placeholder not found in station-viewer.html'); process.exit(1); }
fs.writeFileSync(out, tpl.replace('__STATION_JSON__', () => json));
console.log(`Wrote ${out}`);
