# MRCP Part 1 lint (mechanical, no model calls) — 2026-10-12

Script: `_tools/mrcp1-lint/lint.py`. Per-item flags: `_parked/mrcp1-pool-lint.csv`.
Rules: F1 key > 1.5x mean distractor length; F2 absolute word in a distractor (every "without" counted); F3 6+ letter key word in stem/lead-in/topic (pool has no topic field); F4 vague quantifier in a stem sentence with no number; F5 lead-in lacks most likely/most appropriate/best/next; F6 age under 16.
Specialty = the item's "Clinical domain" line mapped to the pilot's buckets; 935 pool items have no domain line (their label is a condition name) and are listed as Unclassified.

## Archive pool (mrcp1_pool_not_live.json)

```
Items: 2357  (mrcp1_pool_not_live.json)

Items by number of flags:
   0 flags:   397  ( 16.8%)
   1 flags:   731  ( 31.0%)
   2 flags:   677  ( 28.7%)
  3+ flags:   552  ( 23.4%)

Flag counts (items carrying each flag):
  F1_key_long          684  ( 29.0%)
  F2_absolute          667  ( 28.3%)
  F3_key_word_cued    1067  ( 45.3%)
  F4_vague_quant       617  ( 26.2%)
  F5_lead_in           795  ( 33.7%)
  F6_age_under_16       63  (  2.7%)

By specialty (items; % with any flag; per-flag counts F1..F6):
  Unclassified (no domain line)                935   81.9%   228  202  363  251  321   36
  Neurology                                    179   82.1%    57   45   80   34   51    1
  Haematology                                  159   81.8%    52   58   84   32   48    1
  Gastroenterology and hepatology              148   77.0%    62   52   75   32   42    0
  Nephrology                                   139   80.6%    36   39   67   29   50    6
  Endocrinology and diabetes                   117   94.0%    49   46   83   49   39    1
  Rheumatology                                 110   74.5%    22   31   34   37   32    2
  Clinical immunology and allergy              100   85.0%    26   23   42   30   41    9
  Respiratory medicine                          96   85.4%    27   38   53   14   31    0
  Metabolic medicine                            72   94.4%    22   28   44   35   22    1
  Infectious diseases                           58   81.0%    26   23   25    6   17    1
  Clinical sciences and statistics              58   98.3%    19   25   28   19   37    0
  Clinical pharmacology and therapeutics        49   91.8%    15   26   33   19   13    0
  Cardiology                                    49   95.9%    15   14   28   16   23    0
  Dermatology                                   26   61.5%     6    4    3    7    5    4
  Ophthalmology                                 26   84.6%     8    3   11    4    8    0
  Clinical genetics                             24   87.5%     8    5   11    0   11    1
  Oncology                                       9   77.8%     5    5    3    2    2    0
  Geriatric medicine                             3   66.7%     1    0    0    1    2    0
```

## Pilot v1 (_parked/mrcp1-pilot-50.js) against the 12 Oct audit

- 22 audit MINORs: lint flags 20 (all 9 one-agent MINORs, 11 of 13 two-agent). Missed: M1P003 (specialty tag, weak distractors) and M1P019 (drug-class phrase in stem) — both judgement issues outside the six rules.
- 28 audit-OK items: lint flags 20 of them (false positives as a MINOR screen).
- At a cut-off of 2+ flags: 13 of 22 MINORs caught, 9 of 28 OK items flagged.

## Pilot v2 (_parked/mrcp1-pilot-50-v2.js)

- lint.py: 50 of 50 items with 0 flags. check_v2.py (stricter house checks): 0 failing. Keys A–E 10 each.
