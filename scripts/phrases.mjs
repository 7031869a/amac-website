/*
  scripts/phrases.mjs — wording rules shared by audit-site.mjs (pages) and
  content-integrity.mjs (data files). Edit the lists here, nowhere else.
*/

// Banned on the site.
export const BANNED = [
  { name: 'examiner-led', re: /examiner[- ]led/gi },
  { name: 'No competitor', re: /no competitor/gi },
  { name: 'AI-checked', re: /\bAI[- ]checked\b/gi },
  { name: 'instant fail', re: /instant[- ]fail/gi },
];

// Wording that can imply an instant/automatic fail: a warning, not a failure.
export const WARN = [
  { name: 'on the spot', re: /\bon the spot\b/gi },
  { name: 'automatic fail', re: /\bautomatic(?:ally)?[- ]fail/gi },
  { name: 'ends the station', re: /\bends? (?:the|a|your) station\b/gi },
  { name: 'instantly fail', re: /\binstantly fail/gi },
  { name: 'immediate fail', re: /\bimmediate(?:ly)? fail|\bfails? immediately\b/gi },
];

// What "instant fail" may legitimately be part of. Callers replace these with
// spaces of the same length (blank) so line numbers and offsets stay true.
export const NOT_A_LABEL = [
  /Instant[- ]Fail Atlas/gi,                                   // product name
  /instant-fail[\w-]*\.html/gi,                                // URLs / filenames
  /\b(?:id|class|for|href|src|onclick|data-[\w-]+)="[^"]*"/g,  // identifiers in markup
  /(['"])(?:panel-)?instant-fails?\1/g,                        // identifiers in scripts
];

export const blank = s => s.replace(/[^\n]/g, ' ');
