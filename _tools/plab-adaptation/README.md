# PLAB 1 adaptation programme (adapt, not copy)

Source: `_parked/plab1-adaptation-ii-unadapted.json` — verbatim AKT copies taken off the live PLAB 1 bank. Each batch
turns ~100 of them into genuine PLAB 1 adaptations, then removes their entries from the parked list.

Per batch (work folder `_tools/plab-adaptation/work/<batch>/`, not served):
1. Select ~100 parked items by domain → `ctx/source.json` ({live_plab_copy, akt_source}) and `ctx/plan.json`
   (id = "PA"+source_akt_id, replaces, source_akt_id, correct_letter ≠ copy's letter, difficulty, domain/system/skill),
   `ctx/near_plab.json` (top-5 similar live PLAB 1 questions, excluding parked copies).
   **Duplicate pre-screen, before any writing:** `BATCH_DIR=... python3 _tools/plab-adaptation/prescreen.py`
   compares every candidate with the whole live bank (BX one-liners included): TF-IDF cosine on presentation + stem +
   correct answer (top 15 listed), plus a flag for any live question with the same keyed answer text and the same
   presentation/diagnosis. Outputs in `ctx/`: `prescreen.json` (likely_repeat, matching ids and scores, top 15 per
   candidate), `retire.json` (likely repeats, reason = matching live ids) and `to_writers.json`. Likely repeats go
   straight to the retirement list (record them in `_parked/README.md` and drop them from `_parked` at go-live); only
   `to_writers.json` goes to writers, and its top-15 lists are worth giving writers and checkers alongside near_plab.
   Calibration (batch 2, 100 Paediatrics sources, 36 checker-confirmed repeats): at the default threshold 0.45 every
   automatic flag was a genuine repeat, but it caught only about a third of the repeats. For 30 of the 36, the live
   question the checker named was in the top 15. The pre-screen removes obvious repeats; writers and checkers must
   still check the rest.
2. Writers (4 × 25) follow WRITER_BRIEF.md → `out/W*.json`; run `BATCH_DIR=... python3 _tools/plab-adaptation/validate.py`.
3. Independent checkers (3) follow CHECK_BRIEF.md → `rev/C*.json` (pass / fix / drop); apply fixes; re-validate.
4. Clinician review pack (.docx) + feedback form (.xlsx); apply verdicts.
5. Go live: append approved items to plab1-questions.js (section "2026 UKMLA adaptation — clinically reviewed (Oct 2026)"),
   remove resolved sources from `_parked`, `python3 _tools/build-counts.py`, then `--check`, test pages, PR.

Locked rules: adapt not copy (stem Jaccard vs copy < 0.40); no unnecessary figures; key never hinges on a movable
threshold; check before creating (no repeat of a live PLAB 1 scenario + learning point); correct option never the longest.
One-line recall questions (BX…) DO count as repeats: if a live BX question tests the same fact as the candidate, the
candidate is a repeat, even though the BX stem is one line and the scenarios look different. Writers, checkers and the
pre-screen all apply this rule.
Done so far: MG set (PMG…, 94) and batch 1 Acute & Emergency (PAN…, 89) — see `_tools/mla-map/signoff/`.
