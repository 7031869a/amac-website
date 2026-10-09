# PLAB 1 clinician verdicts — non-Paediatrics (9 Oct 2026) — sign-off record (internal; never shown on the website)

- Reviewer: Dr De A Darling. Verdicts dated 9 Oct 2026, relayed by Ahmed. Applied 9 Oct 2026 (branch plab1-clinician-verdicts-nonpaeds).
- Packs: AMaC_PLAB1_Clinician_Review_2026-10-09 (files 1a/1b, 3a/3b, 5a–7b). The Paediatrics packs (2, 4) and the Paediatrics items
  in pack 3 are applied by the Paediatrics session, not here.

## Pack 1 — Live Sample Audit (100 random from the 1,043 of #62/#64)
- 100 Correct, 0 Minor issue, 0 Clinical error.
- Recorded only. Per Ahmed's instruction nothing in `_parked/plab1-adapted-awaiting-review.json` was changed or released because of it.

## Pack 3 — Held H01 (51 questions + 49 section-3 repeats)
- Verdict counts as given for the pack: 46 Approve, 3 Edit, 2 Reject (51).
- Applied here (47 non-Paediatrics questions): 44 Approve, 2 Edit, 1 Reject. The remaining 4 questions are Paediatrics
  (PAN4275, PAPAED188, PAPAED171, PAPAED173), which the Paediatrics session applies. By arithmetic they carry 2 Approve, 1 Edit, 1 Reject;
  the item-level split was not relayed to this session.
- Edits (key unchanged in both; independently re-checked):
  - PAQ932 (stem): added "The surgical team suspect appendicitis." before the question line.
  - PAQ14765 (why_correct): final sentence now ends "..., with renal function and potassium checked after restarting or changing the diuretic dose."
- Reject: PAN15778 (axillary nerve after surgical-neck fracture). Not live; kept in the held file marked rejected.
- Section 3: retire all except PAQ11939 (see Adapted 01). 43 non-Paediatrics repeats removed from the held file; the 6 Paediatrics section-3
  items are left to the Paediatrics session.
- Live as of this PR: 46 (PAN7707, PAN1570, PAN5107, PAN2375, PAQ12804, PAOG028, PAOG005, PAOG006, PAOG008, PAOG009, PAOG011, PAOG013, PAOG014, PAOG015, PAOG026, PAOG027, PAOG032, PAOG033, PAOG034, PAOG035, PAOG036, PAOG039, PAOG040, PAOG052, PAOG065, PAOG073, PAOG074, PAN551, PAQ835, PAQ836, PAHAE040, PAQ1035, PAN4292, PAAKT153, PAN7492, PAAKT043, PAQ612, PAQ613, PAQ628, PAN1520, PAQ652, PAQ217, PAQ886, PAAKT164, PAQ14765, PAQ932).
- Format note: these 46 went live as reviewed. They have no "Source:" line and no blank line before the question, and 16 have the
  key as the longest option. The pack disclosed all of this to the reviewer. A follow-up repair, re-reviewed, is Ahmed's call.

## Packs 5, 6, 7 — Adapted 01, 02, 03 (u74-g01..g13 drafts, checked)
- 100 / 100 / 37 questions: all Approve (237). All 237 live as of this PR. 0 edits, 0 rejects.
- Section 3: 170 / 189 / 41 = 400 proposed retirements. Retire every one except PAQ11939 (Adapted 01): 399 sources removed from
  `_parked/plab1-adaptation-ii-unadapted.json`. PAQ11939 is held in `_parked/plab1-next-review-pack.json` for the next review pack and is not
  live (it has not been reviewed as a question).
- PAAKT183 and PAQ977 (Paediatrics) are not in this set; the Paediatrics session applies those edits.

## Checks
- validate.py (all 283): the 237 Adapted questions pass; the 46 H01 questions fail only the format checks above. No stem is too close
  to its AKT source (Jaccard < 0.40 for all 283).
- Independent checker agent: both edits correct, keys unchanged; every new live item is identical to the reviewed version except for the
  section; held and parked removals exact; Paediatrics items untouched.
- build-counts: plab1Questions 3,314 → 3,597; `--check` clean. Browser test (Edge, headless): the PLAB 1 pages show 3,597; mocks 1–6 load
  180/180 each and score 180/180 when answered with the keys; all 283 new questions render and score 283/283.
- Flag for Ahmed (from another session, after the verdicts): PAQ12804 (postpartum seizure → eclampsia, approved) may repeat live BX249/OG007.
  It is live in this PR as approved.

Files: 2026-10-09-plab1-clinician-verdicts-non-paeds.json (ids per decision).

## Status
- 9 Oct 2026: withdrawn by PR #68 (letter not confirmed as a clinician verdict), then reinstated the same day after Ahmed confirmed that the letter counts as
  clinician sign-off. Before confirming, he was told the letter reads as AI-drafted and that the returned forms were blank.
