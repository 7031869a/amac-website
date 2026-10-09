# Parked content (not served: Jekyll ignores folders starting with "_")

`plab1-adaptation-ii-unadapted.json` — 6,060 questions added to the PLAB 1 bank on 8 Oct 2026 (PRs #50, #51, #52 and
#56, "2026 UKMLA Adaptation II"). They were word-for-word copies of their UKMLA AKT sources (identical stem, options,
answer and main explanation), which breaks the site's cross-exam rule (adapt, not copy). Removed from the live PLAB 1
bank on Ahmed's instruction and kept here, with their `source_akt_id`, so they can be properly adapted and returned
in reviewed batches.

**8 Oct 2026 (evening):** 198 entries removed from the parked list because they are resolved — their AKT sources now have
clinically reviewed PLAB 1 adaptations live (PMG001–PMG102 for MG001–MG102; batch 1 "PAN…" Acute & Emergency set), or were
retired on reviewer agreement (MG029, MG058, MG085, MG089, MG091 and 11 batch-1 copies: N1274, N1324, N1399, N1402, N1412,
N1547, N1933, N207, N211, N2165, N2314). Do not re-adapt these sources.

**8 Oct 2026 (late):** 1,386 further entries removed because their `source_akt_id` already has a live PLAB 1 question
(the Adaptation III waves, PRs #58 and #59). Parked list: 5,862 → 4,476 entries still to adapt.

**8 Oct 2026 (after #62):** 474 more entries removed because Adaptation III wave 3 (PR #62) made their sources live (Acute & Emergency 176,
Cardiovascular 165, Care of the Elderly 133). Parked list: 4,476 → 4,002 entries still to adapt.

`plab1-adapted-awaiting-review.json` — 2,431 PLAB 1 adaptations ("2026 UKMLA Adaptation III — adapted (Oct 2026)": waves 1–4,
PRs #58, #59, #62 and #64) taken off the live bank on Ahmed's instruction because they were reviewed by AI only, never by a
human clinician. Content is unchanged. They can return to the live bank once clinically reviewed.

**9 Oct 2026 — clinician verdicts, non-Paediatrics (held pack H01 and Adapted packs 01–03).** Record: `_tools/mla-map/signoff/2026-10-09-plab1-clinician-verdicts-non-paeds.md`.
- `plab1-adapted-awaiting-review.json`: 2,431 → 2,342. 46 H01 questions went live (44 approved, 2 edited: PAQ932, PAQ14765); 43 H01 section-3
  repeats retired: PAQ15748, PAN9234, PAN17545, PAN7783, PAN9892, PAOG078, PAOG080, PAQ227, PAQ561, PAQ599, PAQ619, PAQ624, PAQ635, PAQ914, PAQ1139, PAQ1175, PAQ1209, PAAKT114, PAAKT149, PACARD038, PAOG001, PAOG002, PAOG003, PAOG007, PAOG010, PAOG019, PAOG022, PAOG023, PAOG024, PAOG031, PAOG038, PAOG042, PAOG043, PAOG046, PAOG054, PAOG057, PAOG066, PAQ190, PAQ193, PAQ194, PAQ208, PAQ211, PAQ212. PAN15778 was rejected and stays here with `review_status: "rejected"` (do not return it live).
  The 10 Paediatrics H01 items are untouched (the Paediatrics session handles them).
- `plab1-adaptation-ii-unadapted.json`: 3,443 → 2,807. 636 sources resolved from the u74-g01..g13 drafts: 237 now live as clinically reviewed
  adaptations, 399 retired as repeats (Adapted packs section 3; ids in the sign-off JSON). Do not re-adapt these sources.
- `plab1-next-review-pack.json` (new): PAQ11939, a u74 draft the reviewer kept out of the retirements. It has not been reviewed as a question and
  must not go live until it has; it goes in the next review pack. Its parked source UQ11939 stays in the parked list.
