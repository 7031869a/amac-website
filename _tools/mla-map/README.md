# AKT bank → GMC MLA content map

Not published (Jekyll skips `_tools/`).

- `data/gmc-mla-map.json` — GMC MLA content map, Domain 5 presentations (P001–P220) and Domain 6
  conditions (C001–C429). Source: GMC MLA content map PDF (Oct 2025, applies from Sep 2026), with the
  Sep 2026 live revision PCOS → Polyendocrine Metabolic Ovarian Syndrome (PMOS).
- `data/akt-mla-map.json` — one condition and one presentation per AKT question id (`[c, p]`, null = none).
  Read by `mla-coverage.html`, the coverage strip on `ukmla.html`, and `questions.html?gmc=<ID>`.
- `akt-mla-map-full.json` — same mapping with confidence and second-pass flags.
- `AKT_GMC_Coverage_Review.xlsx` — coverage review workbook.

Method (6 Oct 2026): label matching, then stem-by-stem classification in batches; blind second pass by
a stronger reviewer on disagreements (185), low-confidence items (776) and a 400-question random sample
(agreement: condition 94%, presentation 86%); reviewer answer used wherever reviewed.

Limits: one label per question, so secondary features are not counted. Coverage shows breadth, not quality.

When questions are added to the bank they are NOT in the map until mapped. Unmapped ids are simply
ignored by the coverage view.
