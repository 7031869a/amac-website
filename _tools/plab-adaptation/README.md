# PLAB 1 adaptation programme (adapt, not copy)

Source: `_parked/plab1-adaptation-ii-unadapted.json` — verbatim AKT copies taken off the live PLAB 1 bank. Each batch
turns ~100 of them into genuine PLAB 1 adaptations, then removes their entries from the parked list.

Per batch (work folder `_tools/plab-adaptation/work/<batch>/`, not served):
1. Select ~100 parked items by domain → `ctx/source.json` ({live_plab_copy, akt_source}) and `ctx/plan.json`
   (id = "PA"+source_akt_id, replaces, source_akt_id, correct_letter ≠ copy's letter, difficulty, domain/system/skill),
   `ctx/near_plab.json` (top-5 similar live PLAB 1 questions, excluding parked copies).
2. Writers (4 × 25) follow WRITER_BRIEF.md → `out/W*.json`; run `BATCH_DIR=... python3 _tools/plab-adaptation/validate.py`.
3. Independent checkers (3) follow CHECK_BRIEF.md → `rev/C*.json` (pass / fix / drop); apply fixes; re-validate.
4. Clinician review pack (.docx) + feedback form (.xlsx); apply verdicts.
5. Go live: append approved items to plab1-questions.js (section "2026 UKMLA adaptation — clinically reviewed (Oct 2026)"),
   remove resolved sources from `_parked`, `python3 _tools/build-counts.py`, then `--check`, test pages, PR.

Locked rules: adapt not copy (stem Jaccard vs copy < 0.40); no unnecessary figures; key never hinges on a movable
threshold; check before creating (no repeat of a live PLAB 1 scenario + learning point); correct option never the longest.
Done so far: MG set (PMG…, 94) and batch 1 Acute & Emergency (PAN…, 89) — see `_tools/mla-map/signoff/`.
