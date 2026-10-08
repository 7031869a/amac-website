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
- `drafts/iud-questions-draft.json` — six intrauterine-death questions, clinically reviewed and
  edited (8 Oct 2026). Not yet in the live bank.

## Method
- v1 (6 Oct 2026): label matching, then stem classification in batches; blind second pass on
  disagreements, low-confidence items and a 400-question random sample.
- v2 (8 Oct 2026): a clinical review found forced "nearest entry" labels. Hard rule since: if no GMC
  entry genuinely represents what is tested, record `X`; never force a neighbour. All 920 questions in
  conditions/presentations with ≤9 questions were re-checked under the rule; the 128 proposed changes
  were independently verified (121 accepted, 2 reverted, 5 amended); the reviewer's corrections were
  applied. 129 labels changed.

## Coverage (v2)
- Conditions: 1 gap, 75 thin (1–4), 353 covered. Presentations: 2 gaps, 22 thin, 196 covered.
- Bank coverage gaps (full-bank stem search, not the sample): Skin manifestations of systemic disease
  (condition); Intrauterine death (presentation; six questions drafted). Tinnitus appears in 19 questions
  but never as the lead problem.
- THE THIN LIST IS PROVISIONAL until the 100-item mapping audit is complete (65 items outstanding).
  Do not commission questions from it before then.

## Limits
- One condition and one presentation per question; secondary features are not counted.
- Large buckets (e.g. Adverse drug effects) were not re-checked in v2. Forced labels there inflate an
  already-covered entry and do not affect the thin list.
- New questions are not in the map until mapped under MAPPING_RULES.md; unmapped ids are ignored.
