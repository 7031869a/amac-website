# Guideline currency audit 2 — 8 October 2026

Scope: NICE NG247 (folic acid), NICE NG250 (pneumonia; replaces CG191/NG138/NG139) and NG237 (point-of-care CRP),
RCOG GTG34 December 2025 amendment (postmenopausal simple cysts ≤3 cm), RCOG GTG37a position statement September 2026
(VTE in pregnancy). Facts verified at source: 2026-10-08b-facts.md.

Keyword scan of both live banks: 138 questions flagged (AKT and PLAB 1). Independent reviewers judged each:
133 ok, 2 wording, 3 outdated (explanation text only — no keyed answer changed); 4 more added after review (below).

Fixes (exact before/after in 2026-10-08b-applied-fixes.json):
- AKT HAE031 and PLAB1 HAE031 — pearl listed obesity as a reason for 5 mg folic acid; now the NICE NG247 risk list,
  and a raised BMI alone needs only 400 micrograms.
- AKT AKT027 — pearl and takeaway updated to NICE NG250 place-of-care bands and IV-antibiotic wording.
- AKT Q11563 — why_wrong for option B now notes NG250's "consider a corticosteroid" in high-severity CAP in hospital.
- AKT IUD06 and PLAB1 PIUD06 — difficulty "Hard" corrected to the bank's scale ("Difficult").

Added after review (approved by Ahmed):
- AKT CARD027 and PLAB1 CARD027 — pearl and why_correct said 3–6 months for unprovoked DVT/PE; now NICE NG158 1.4.3
  (consider continuing beyond 3 months, often long term, on recurrence vs bleeding risk and preference). Key unchanged.
- AKT OG076 — pearl wrongly limited RMI (NICE CG122) to postmenopausal women; CG122 applies it whenever ovarian cancer is
  suspected (refer at 250 or more). OG019 left as is (250 per CG122 is correct).
- PLAB1 OG036 — pearl said any new postmenopausal cyst requires investigation; now notes RCOG GTG34 (amended 2025): simple
  unilocular cyst of 3 cm or less needs no routine follow-up.
