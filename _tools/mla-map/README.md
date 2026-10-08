# AKT bank → GMC MLA content map

Not published (Jekyll skips `_tools/`).

## Files
- `data/gmc-mla-map.json` — GMC MLA content map: presentations P001–P220, conditions C001–C429.
  Source: GMC MLA content map PDF (Oct 2025, applies from Sep 2026), with the Sep 2026 live revision
  PCOS → Polyendocrine Metabolic Ovarian Syndrome (PMOS). Three umbrella conditions carry
  `covered_under` (Antepartum haemorrhage, Lower respiratory tract infection, Abnormal blood film):
  their questions are labelled under more specific entries and are counted through them.
- `data/akt-mla-map.json` — `q[id] = [condition, presentation]`: a GMC id, `"X"` (the question tests
  something the GMC list does not name) or `null` (nothing to map, e.g. ethics or statistics).
  Only GMC ids count towards coverage.
- `mla-coverage.js` (site root) — the single shared calculation used by `mla-coverage.html` and the
  strip on `ukmla.html`. `questions.html?gmc=C310,C311&via=C024` filters the bank.
- `akt-mla-map-full.json` — mapping with confidence and re-check flags.
- `MAPPING_RULES.md` — the strict labelling rule (v2). Use it for every future mapping.
- `v2-change-log.json` — every label changed in v2, with its source.
- `AKT_GMC_Coverage_Review.xlsx` — coverage review workbook (v2).
- `drafts/iud-questions-draft.json` — the six intrauterine-death questions as reviewed (8 Oct 2026);
  now live in both banks. Post-review edits: IUD06/PIUD06 option A reworded to "Cabergoline orally to
  suppress lactation" (1 mg single dose is the prevention regimen, not suppression); PIUD05 tense.

## Method
- v1 (6 Oct 2026): label matching, then stem classification in batches; blind second pass on
  disagreements, low-confidence items and a 400-question random sample.
- v2 (8 Oct 2026): a clinical review found forced "nearest entry" labels. Hard rule since: if no GMC
  entry genuinely represents what is tested, record `X`; never force a neighbour. All 920 questions in
  conditions/presentations with ≤9 questions were re-checked under the rule; the 128 proposed changes
  were independently verified (121 accepted, 2 reverted, 5 amended); the reviewer's corrections were
  applied. 129 labels changed; 5 more at sign-off (134 total, all in v2-change-log.json).

## Coverage (v2)
- Conditions: 1 gap, 75 thin (1–4), 353 covered. Presentations: 1 gap, 22 thin, 197 covered.
- Bank coverage gap (full-bank stem search, not the sample): Skin manifestations of systemic disease
  (condition). Tinnitus (presentation) appears in 19 questions but never as the lead problem.
- Intrauterine death was a bank gap (no question in a full-bank stem search); closed 8 Oct 2026 by six
  clinically reviewed questions: IUD01–IUD06 in the AKT bank, adapted as PIUD01–PIUD06 in PLAB 1
  (new vignettes, reordered options, same teaching; source_akt_id links them).
- Mapping audit COMPLETE and signed off (8 Oct 2026). Fixed 100-question sample (50 from thin
  conditions, 50 random). Round 1 (32 items, v1 labels) found forced-neighbour errors -> strict rule,
  v2 re-check. Round 2 (remaining 68 items, v2 labels): condition disagreement 2/68 (2.9%),
  presentation 1/68 (1.5%), against thresholds of 10% / 20%. Reviewer verdict: acceptable with
  corrections. All corrections applied, plus the same patterns elsewhere in the bank (5 labels).
- The thin list (75 conditions, 22 presentations) is FINAL and can be used for commissioning.

## Limits
- One condition and one presentation per question; secondary features are not counted.
- Large buckets (e.g. Adverse drug effects) were not re-checked in v2. Forced labels there inflate an
  already-covered entry and do not affect the thin list.
- New questions are not in the map until mapped under MAPPING_RULES.md; unmapped ids are ignored.
