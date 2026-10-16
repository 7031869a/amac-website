#!/usr/bin/env node
/*
  scripts/strict-data.mjs — strict parse of every data file; fails with file:line.

      node scripts/strict-data.mjs

  The other checks find a data array by bracket-matching from its opening "["
  and stop at the bracket that closes it, so text after the array (a stray "]")
  is never read, and the page breaks in the browser while every check passes.
  This script parses each file the way the browser and JSON.parse do.

  FAILS (exit 1), each reported as file:line:
    parse            a tracked .json file is not valid JSON; a .js file or an inline
                     <script> in an .html page is not valid JavaScript; an inline
                     ld+json / application/json block is not valid JSON
    data-literal     a question, mock or station array is not strict JSON
    duplicate-id     two questions (or stations) in one source share an ID
    option-count     a question does not have exactly 5 options (A-E)
    invalid-key      correct_letter is not one of the question's options
    no-explanation   a question has an empty explanation (why_correct)

  Files come from `git ls-files`; outside a git checkout (the pre-push hook runs
  this on an archived copy) every file under the root is walked instead.
  Structural only: a clean run says nothing about clinical accuracy.
*/
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { ROOT, literalStart, literalEnd } from './sync-counts.mjs';

const read = rel => fs.readFileSync(path.join(ROOT, rel), 'utf8').replace(/^﻿/, '');
const lineOf = (text, i) => text.slice(0, i).split('\n').length;
const failures = [];
const fail = (kind, where, msg) => failures.push(`[${kind}] ${where}  ${msg}`);
let parsed = 0;

function trackedFiles() {
  try {
    return execFileSync('git', ['ls-files', '-z'], { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] })
      .split('\0').filter(Boolean);
  } catch {
    const out = [];
    const walk = dir => {
      for (const e of fs.readdirSync(path.join(ROOT, dir), { withFileTypes: true })) {
        if (e.name === '.git' || e.name === 'node_modules') continue;
        const rel = dir ? `${dir}/${e.name}` : e.name;
        if (e.isDirectory()) walk(rel); else out.push(rel);
      }
    };
    walk('');
    return out;
  }
}

// V8's position/line/column count from the start of the parsed slice, not the file: drop them.
const jsonMessage = e => e.message.replace(/ in JSON at position \d+/, '').replace(/\s*\(line \d+ column \d+\)/, '');

// JSON.parse with the failure turned into file:line (offset = where TEXT starts in the file).
function parseJson(text, file, fileText = text, offset = 0) {
  try { return JSON.parse(text); } catch (e) {
    const m = /position (\d+)/.exec(e.message);
    const at = m ? offset + Number(m[1]) : offset;
    fail('parse', `${file}:${lineOf(fileText, at)}`, jsonMessage(e));
    return undefined;
  }
}

// SyntaxError line from V8's stack ("file:LINE" on the first line).
function syntaxLine(e, file) {
  const m = new RegExp(file.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ':(\\d+)').exec(String(e.stack));
  return m ? m[1] : '?';
}

function checkScript(code, file, lineOffset = 0, isModule = false) {
  if (isModule) {   // vm cannot compile an ES module without a flag; node --check can
    const tmp = path.join(os.tmpdir(), `strict-data-${process.pid}-${parsed}.mjs`);
    fs.writeFileSync(tmp, '\n'.repeat(lineOffset) + code);
    try { execFileSync(process.execPath, ['--check', tmp], { stdio: ['ignore', 'ignore', 'pipe'] }); }
    catch (e) {
      const m = /:(\d+)\s*\n/.exec(String(e.stderr));
      fail('parse', `${file}:${m ? m[1] : '?'}`, (String(e.stderr).match(/SyntaxError: .*/) || ['SyntaxError'])[0]);
    } finally { fs.rmSync(tmp, { force: true }); }
    return;
  }
  try { new vm.Script(code, { filename: file, lineOffset }); }
  catch (e) { fail('parse', `${file}:${syntaxLine(e, file)}`, `${e.name}: ${e.message}`); }
}

// ---------------------------------------------------------------- (1) every data-bearing file parses
const files = trackedFiles();
for (const f of files) {
  const ext = path.extname(f).toLowerCase();
  if (ext === '.json') { parseJson(read(f), f); parsed++; }
  else if (ext === '.js') { checkScript(read(f), f); parsed++; }
  else if (ext === '.html') {
    const text = read(f);
    for (const m of text.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)) {
      const attrs = m[1];
      if (/\bsrc\s*=/i.test(attrs)) continue;
      const type = ((/\btype\s*=\s*["']?([^"'\s>]+)/i.exec(attrs) || [])[1] || 'text/javascript').toLowerCase();
      const start = m.index + m[0].indexOf('>') + 1;
      // station-viewer.html is a template: its JSON block is a __PLACEHOLDER__ filled per station.
      if (/json/.test(type) && /^\s*__[A-Z_]+__\s*$/.test(m[2])) continue;
      if (/json/.test(type)) parseJson(m[2], f, text, start);
      else if (type === 'module') checkScript(m[2], f, lineOf(text, start) - 1, true);
      else if (/javascript|ecmascript/.test(type)) checkScript(m[2], f, lineOf(text, start) - 1);
      else continue;   // templates and other non-script blocks
      parsed++;
    }
  }
}

// ---------------------------------------------------------------- (2) data arrays are strict JSON
// The array assigned to NAME in FILE, parsed strictly; reports file:line on failure.
function dataLiteral(file, name) {
  const text = read(file);
  let s;
  try { s = literalStart(text, name); } catch { fail('data-literal', file, `${name} not found`); return null; }
  let e;
  try { e = literalEnd(text, s); } catch { fail('data-literal', `${file}:${lineOf(text, s)}`, `${name} is never closed`); return null; }
  try { return { text, start: s, data: JSON.parse(text.slice(s, e + 1)) }; } catch (err) {
    const m = /position (\d+)/.exec(err.message);
    fail('data-literal', `${file}:${lineOf(text, s + (m ? Number(m[1]) : 0))}`, `${name}: ${jsonMessage(err)}`);
    return null;
  }
}

// line:column of the item whose KEY is ID (its nth occurrence), searched from the start of its
// array. The column matters: questions.html holds the whole AKT bank on one line.
function itemLine(text, from, key, id, nth = 1) {
  const esc = String(id).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`["']?${key}["']?\\s*:\\s*["']?${esc}["']?\\s*[,}]`, 'g');
  re.lastIndex = from;
  let m, at = from;
  for (let k = 0; k < nth && (m = re.exec(text)); k++) at = m.index;
  const line = lineOf(text, at);
  return `${line}:${at - text.lastIndexOf('\n', at - 1)}`;
}

// ---------------------------------------------------------------- (3) question rules
// Every file holding SBA questions. The JSON bank is read whole; the rest are arrays in .js/.html.
const QUESTION_SOURCES = [
  { file: 'questions.html', name: 'QUESTIONS' },                          // UKMLA AKT
  { file: 'akt-mock-questions.js', name: 'AKT_MOCK_QUESTIONS' },          // AKT mock extract
  { file: 'plab1-questions.js', name: 'PLAB1_QUESTIONS' },
  { file: 'mrcp1-questions.js', name: 'MRCP1_QUESTIONS' },
  { file: 'data/mrcs-part-a-combined.json' },                             // MRCS Part A (live)
  { file: 'mrcs-part-a-combined-questions.js', name: 'MRCS_PART_A_COMBINED_QUESTIONS' },
  { file: 'mrcs-a-applied-knowledge-questions.js', name: 'MRCSA_AK_QUESTIONS' },
  { file: 'ukmla.html', name: 'D', sample: true },                        // sample questions on the page
];
const OPTIONS = ['A', 'B', 'C', 'D', 'E'];
let questions = 0;

// Line numbers are looked up only for failures: a lookup scans the file, and the AKT bank is 16 MB.
function duplicateIds(file, items, key, text, from) {
  const seen = new Map();
  for (const it of items) {
    const id = it && it[key];
    if (id == null || id === '') continue;
    const n = (seen.get(String(id)) || 0) + 1;
    seen.set(String(id), n);
    if (n > 1) fail('duplicate-id', `${file}:${itemLine(text, from, key, id, n)}`, `${key} ${id} is used ${n} times (first at ${itemLine(text, from, key, id)})`);
  }
}

for (const src of QUESTION_SOURCES) {
  if (!files.includes(src.file)) continue;
  let lit;
  if (src.name) lit = dataLiteral(src.file, src.name);
  else { const text = read(src.file); const data = parseJson(text, src.file); lit = data === undefined ? null : { text, start: 0, data }; }
  if (!lit) continue;
  // A sample object holds questions under keys, next to other page data: only items with options are questions.
  const qs = Array.isArray(lit.data) ? lit.data
    : Object.values(lit.data).filter(v => v && typeof v === 'object' && 'options' in v);
  questions += qs.length;
  duplicateIds(src.file, qs, 'id', lit.text, lit.start);
  for (const q of qs) {
    let line;
    const where = { toString: () => `${src.file}:${line ??= itemLine(lit.text, lit.start, 'id', q.id)}` };
    const opts = q.options && typeof q.options === 'object' && !Array.isArray(q.options) ? q.options : {};
    const letters = Object.keys(opts);
    const filled = letters.filter(L => String(opts[L] ?? '').trim() !== '');
    if (letters.length !== 5 || !OPTIONS.every(L => letters.includes(L)) || filled.length !== 5)
      fail('option-count', where, `${q.id}: ${filled.length} filled options (${letters.join('') || 'none'}), need exactly 5 (A-E)`);
    const key = String(q.correct_letter ?? '').trim();
    if (!key || !(key in opts)) fail('invalid-key', where, `${q.id}: correct_letter "${q.correct_letter ?? ''}" is not one of its options`);
    if (String(q.why_correct ?? '').trim() === '') fail('no-explanation', where, `${q.id}: why_correct is empty`);
  }
}

// ---------------------------------------------------------------- (4) mocks and stations: strict JSON, unique IDs
const OTHER_LITERALS = [
  { file: 'akt-papers.js', name: 'AKT_PAPERS' },
  { file: 'plab1-papers.js', name: 'PLAB1_PAPERS' },
  { file: 'mrcp1-papers.js', name: 'MRCP1_PAPERS' },
  { file: 'cpsa-stations.html', name: 'STATIONS', id: 'num' },
  { file: 'osce.html', name: 'STATIONS', id: 'num' },
];
let stations = 0;
for (const o of OTHER_LITERALS) {
  if (!files.includes(o.file)) continue;
  const lit = dataLiteral(o.file, o.name);
  if (lit && o.id) { stations += lit.data.length; duplicateIds(o.file, lit.data, o.id, lit.text, lit.start); }
}
// One JSON file per station: every file parsed in (1); IDs unique across the folder.
for (const dir of ['stations', 'paces-stations']) {
  const seen = new Map();
  for (const f of files.filter(x => x.startsWith(dir + '/') && x.endsWith('.json') && !x.endsWith('/index.json'))) {
    let s;
    try { s = JSON.parse(read(f)); } catch { continue; }   // already reported in (1)
    stations++;
    if (s && s.id != null) {
      if (seen.has(String(s.id))) fail('duplicate-id', `${f}:${itemLine(read(f), 0, 'id', s.id)}`, `id ${s.id} also used by ${seen.get(String(s.id))}`);
      else seen.set(String(s.id), f);
    }
  }
}

// ---------------------------------------------------------------- report
console.log(`strict-data: ${parsed} files/scripts parsed, ${questions} questions and ${stations} stations checked`);
if (failures.length) {
  console.log(`\n${failures.length} FAILURE(S):`);
  for (const f of failures.slice(0, 200)) console.log('  ' + f);
  if (failures.length > 200) console.log(`  … and ${failures.length - 200} more`);
  process.exit(1);
}
console.log('All clean. (Structural only -- clinical accuracy still needs a clinician.)');
