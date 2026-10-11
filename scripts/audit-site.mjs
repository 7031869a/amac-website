#!/usr/bin/env node
/*
  scripts/audit-site.mjs — fails the build when the site drifts from its rules.

      node scripts/audit-site.mjs

  (a) Counts. Every data-count spot (elements and data-count-content meta tags)
      must show the value in data/counts.json, and data/counts.json must match a
      fresh count of the data files. Fix: node scripts/sync-counts.mjs
  (b) Banned phrases on any page: "examiner-led", "No competitor", "AI-checked",
      and "instant fail" anywhere except the product name "Instant Fail Atlas",
      URLs/filenames and code identifiers. Book listings are exempt only through
      the explicit ALLOW list below, so a new occurrence still fails.
  (c) Internal links. Every local href/src in a page must point at a file that
      exists in the repo.
  WARNINGS (listed, never fail the build): wording that can imply an instant or
      automatic fail ("on the spot", "automatic fail", "ends the station",
      "instantly fail", "immediate fail", "fails immediately"). Many hits are
      ordinary clinical English ("prescribing on the spot"); each needs a human read.

  Exit 0 = clean, 1 = at least one failure. Structural only: clinical accuracy
  always needs a clinician.
*/
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, measure, spots, htmlPages } from './sync-counts.mjs';

const read = rel => fs.readFileSync(path.join(ROOT, rel), 'utf8');
const lineOf = (text, i) => text.slice(0, i).split('\n').length;
const failures = [];
const fail = (kind, msg) => failures.push(`[${kind}] ${msg}`);
const warnings = [];
const pages = htmlPages();

// ---------------------------------------------------------------- (a) counts
const counts = JSON.parse(read('data/counts.json'));
const { counts: fresh, problems } = measure();
for (const p of problems) fail('count', `could not count ${p}`);
for (const k of Object.keys({ ...fresh, ...counts })) {
  if (k === 'generated' || k === '_meta') continue;
  if (counts[k] !== fresh[k]) fail('count', `data/counts.json ${k} = ${counts[k]}, data files give ${fresh[k]}`);
}
let spotTotal = 0;
for (const file of pages) {
  const html = read(file);
  if (!html.includes('data-count')) continue;
  html.split('\n').forEach((ln, i) => {
    for (const s of spots(ln)) {
      if (/^\d+$/.test(s.key)) continue; // plab1-exams.html chip sizes, not counts
      spotTotal++;
      const where = `${file}:${i + 1}`;
      if (!(s.key in counts) || typeof counts[s.key] !== 'number') { fail('count', `${where} unknown key "${s.key}"`); continue; }
      if (s.where === 'attribute' && s.hits !== 1) {
        fail('count', `${where} "${s.phrase}" found ${s.hits} times in ${s.attr}`);
        continue;
      }
      const shown = Number(String(s.shown).replace(/,/g, ''));
      if (shown !== counts[s.key]) fail('count', `${where} shows ${s.shown} for ${s.key}, counts.json has ${counts[s.key]}`);
    }
  });
}

// ---------------------------------------------------------------- (b) banned phrases
const BANNED = [
  { name: 'examiner-led', re: /examiner[- ]led/gi },
  { name: 'No competitor', re: /no competitor/gi },
  { name: 'AI-checked', re: /\bAI[- ]checked\b/gi },
  { name: 'instant fail', re: /instant[- ]fail/gi },
];
// Wording that can imply an instant/automatic fail: a warning, not a failure.
const WARN = [
  { name: 'on the spot', re: /\bon the spot\b/gi },
  { name: 'automatic fail', re: /\bautomatic(?:ally)?[- ]fail/gi },
  { name: 'ends the station', re: /\bends? (?:the|a|your) station\b/gi },
  { name: 'instantly fail', re: /\binstantly fail/gi },
  { name: 'immediate fail', re: /\bimmediate(?:ly)? fail|\bfails? immediately\b/gi },
];
// What "instant fail" may legitimately be part of. Replaced with spaces of the
// same length so line numbers and offsets stay true.
const NOT_A_LABEL = [
  /Instant[- ]Fail Atlas/gi,                                   // product name
  /instant-fail[\w-]*\.html/gi,                                // URLs / filenames
  /\b(?:id|class|for|href|src|onclick|data-[\w-]+)="[^"]*"/g,  // identifiers in markup
  /(['"])(?:panel-)?instant-fails?\1/g,                        // identifiers in scripts
];
// Exact exemptions: book listings (feature lists of published books) keep the
// book's own wording. Each entry must still exist, or the audit says so.
const ALLOW = [
  { file: 'books.html', text: 'Instant-Fail prevention', why: 'Volume I contents list (book listing)' },
  { file: 'books.html', text: 'Instant-Fail risk maps', why: 'Volume II contents list (book listing)' },
  { file: 'books.html', text: 'instant-fail alerts', why: 'The Final Fortnight contents list (book listing)' },
];
const blank = s => s.replace(/[^\n]/g, ' ');
for (const file of pages) {
  const raw = read(file);
  let text = raw;
  for (const re of NOT_A_LABEL) text = text.replace(re, blank);
  for (const a of ALLOW.filter(a => a.file === file)) {
    if (!text.includes(a.text)) fail('allow', `${file}: ALLOW entry "${a.text}" no longer matches; remove it`);
    text = text.split(a.text).join(blank(a.text));
  }
  for (const b of BANNED) {
    for (const m of text.matchAll(b.re)) {
      const ctx = raw.slice(Math.max(0, m.index - 40), m.index + 50).replace(/\s+/g, ' ');
      fail('term', `${file}:${lineOf(raw, m.index)} contains "${b.name}": …${ctx}…`);
    }
  }
  for (const w of WARN) {
    for (const m of text.matchAll(w.re)) {
      const ctx = raw.slice(Math.max(0, m.index - 50), m.index + 50).replace(/\s+/g, ' ');
      warnings.push(`[wording] ${file}:${lineOf(raw, m.index)} "${w.name}": …${ctx}…`);
    }
  }
}

// ---------------------------------------------------------------- (c) internal links
const exists = new Map();
const isFile = rel => {
  if (!exists.has(rel)) {
    let ok = false;
    try { ok = fs.statSync(path.join(ROOT, rel)).isFile(); } catch { /* missing */ }
    exists.set(rel, ok);
  }
  return exists.get(rel);
};
let linkTotal = 0;
for (const file of pages) {
  const html = read(file);
  for (const m of html.matchAll(/\b(?:href|src)\s*=\s*(["'])([^"'\s]*?)\1/gi)) {
    let url = m[2];
    if (!url || /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(url)) continue; // external, mailto:, data:, anchors
    if (/[${}<>+]/.test(url)) continue;                               // built at runtime in a script
    url = url.replace(/[?#].*$/, '');
    if (!url) continue;
    let rel = decodeURIComponent(url.startsWith('/') ? url.slice(1) : path.posix.join(path.posix.dirname(file), url));
    if (rel === '' || rel.endsWith('/')) rel += 'index.html';
    linkTotal++;
    if (!isFile(rel)) fail('link', `${file}:${lineOf(html, m.index)} -> missing "${m[2]}"`);
  }
}

// ---------------------------------------------------------------- report
console.log('='.repeat(64));
console.log(`AMaC SITE AUDIT (node)  --  ${pages.length} pages`);
console.log(`  ${Object.keys(fresh).length} count keys, ${spotTotal} count spots, ${linkTotal} internal links checked`);
console.log('='.repeat(64));
if (warnings.length) {
  console.log(`\nWARNINGS (${warnings.length}) -- non-blocking, read each one:`);
  for (const w of warnings) console.log('  ! ' + w);
}
if (failures.length) {
  console.log(`\nFAILURES (${failures.length}):`);
  for (const f of failures) console.log('  x ' + f);
  console.log('\nCounts: run  node scripts/sync-counts.mjs  and commit the result.');
  process.exitCode = 1;
} else {
  console.log('\nAll clean. (Structural only -- clinical accuracy still needs a clinician.)');
}
