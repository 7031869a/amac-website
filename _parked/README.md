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
human clinician. Content is unchanged. They can return to the live bank on the owner's instruction; a named-clinician sign-off is not required (owner decision, 17 Oct 2026).

**9 Oct 2026 — clinician verdicts, non-Paediatrics (held pack H01 and Adapted packs 01–03).** Record: `_tools/mla-map/signoff/2026-10-09-plab1-clinician-verdicts-non-paeds.md`.
- `plab1-adapted-awaiting-review.json`: 2,431 → 2,342. 46 H01 questions went live (44 approved, 2 edited: PAQ932, PAQ14765); 43 H01 section-3
  repeats retired: PAQ15748, PAN9234, PAN17545, PAN7783, PAN9892, PAOG078, PAOG080, PAQ227, PAQ561, PAQ599, PAQ619, PAQ624, PAQ635, PAQ914, PAQ1139, PAQ1175, PAQ1209, PAAKT114, PAAKT149, PACARD038, PAOG001, PAOG002, PAOG003, PAOG007, PAOG010, PAOG019, PAOG022, PAOG023, PAOG024, PAOG031, PAOG038, PAOG042, PAOG043, PAOG046, PAOG054, PAOG057, PAOG066, PAQ190, PAQ193, PAQ194, PAQ208, PAQ211, PAQ212. PAN15778 was rejected and stays here with `review_status: "rejected"` (do not return it live).
  The 10 Paediatrics H01 items are untouched (the Paediatrics session handles them).
- `plab1-adaptation-ii-unadapted.json`: 3,443 → 2,807. 636 sources resolved from the u74-g01..g13 drafts: 237 now live as clinically reviewed
  adaptations, 399 retired as repeats (Adapted packs section 3; ids in the sign-off JSON). Do not re-adapt these sources.
- `plab1-next-review-pack.json` (new): PAQ11939, a u74 draft the reviewer kept out of the retirements. It has not been reviewed as a question and
  must not go live until it has; it goes in the next review pack. Its parked source UQ11939 stays in the parked list.

**9 Oct 2026 (later) — the 9 Oct verdict entry above is WITHDRAWN.** The verdict letter it relied on is not confirmed as a personal
clinician verdict, so everything PR #66 changed is back to its pre-#66 state (c75ebe7):
- The 46 H01 questions #66 put live are back in `plab1-adapted-awaiting-review.json` with their original text (without the PAQ932/PAQ14765
  edits), marked `review_status: "awaiting genuine clinician review"`. The 43 H01 retirements are undone, and PAN15778 is no longer marked rejected.
  Held list: 2,431 again.
- The 237 Adapted 01–03 questions are off the live bank. Their 636 sources (237 + 399 "retired") are back in
  `plab1-adaptation-ii-unadapted.json` (3,443 again). The checked drafts remain on branch `plab1-u74-review-packs`.
- `plab1-next-review-pack.json` (PAQ11939) is kept. PR #67 (Paediatrics packs) was closed unmerged.
- No retirement from the 9 Oct packs stands. They all need a confirmed clinician verdict.

**9 Oct 2026 (afternoon) — #66 reinstated.** PR #68 had taken #66's changes back off the live bank because the 9 Oct verdict letter was not confirmed as a
clinician verdict. Ahmed has since confirmed that the letter counts as clinician sign-off, so this change restores #66 exactly (same content as main at d4db2e9):
PLAB 1 bank 3,314 → 3,597; held 2,431 → 2,342; parked 3,443 → 2,807. Record: `_tools/mla-map/signoff/2026-10-09-plab1-clinician-verdicts-non-paeds.md`.

**9 Oct 2026 — clinician verdicts, Paediatrics (Held 01, Batch 2, and the Paediatrics items of H01).** Record: `_tools/mla-map/signoff/2026-10-09-plab1-clinician-verdicts-paeds.md`.
- `plab1-adapted-awaiting-review.json`: 2,342 → 2,204. 59 Paediatrics Held 01 questions went live (55 approved, 4 edited: PAQ15063, PAQ995, PAAKT183, PAQ977); 79 section-3
  repeats retired (ids in the sign-off JSON). PAQ15847 relabelled Neurology and PAQ15061 Infectious Diseases & Emergencies; both stay here for their domains' review.
- `plab1-adaptation-ii-unadapted.json`: 2,807 → 2,707. All 100 Paediatrics batch-2 sources resolved: 61 live, 3 held back (below), 36 retired. Do not re-adapt these sources.
- `plab1-next-review-pack.json`: +3 approved batch-2 questions held back because each repeats a Held 01 question that went live (PAN2526/PAQ300, PAN1799/PAQ15511,
  PAN1974/PAQ15553). Ahmed or the reviewer to choose which of each pair stays live.

**17 Oct 2026: PLAB 1 packs 01, 02, 03, 04, 08, 09 go live (Ahmed's instruction).** Record: `_tools/mla-map/signoff/2026-10-17-plab1-packs-01-02-03-04-08-09.md`.
- `plab1-adapted-awaiting-review.json`: 2,204 to 1,006. 1,193 questions went live (PLAB 1 bank 3,717 to 4,910); 5 duplicates retired (PAQ841, PAQ854, PAQ15206, PAQ15424, PAQ15456); PAN8630 and PAAKT051 stay here marked `needs rewrite`. Packs 05, 06, 07, 10 and 11 (1,000 items) are still held.
- Reviewed by A. Mansour and colleagues, October 2026. No named-clinician sign-off is required for these packs, now or in future (owner decision, 17 Oct 2026). Section labels are unchanged.

**17 Oct 2026 — clinician sign-off, packs 05, 06, 07, 10, 11 (802 go-live).** Record: `_tools/mla-map/signoff/2026-10-17-plab1-packs-05-06-07-10-11.md`.
- `plab1-adapted-awaiting-review.json`: 1,006 → 204. 802 questions went live (PLAB 1 bank 4,910 → 5,712), six with reviewer edits: PAN7551, PAQ588 (relabelled Surgery / Vascular), PAQ15409, PAQ1004, PAQ14737, PAQ16207. PAAKT058 and PAN214 approved unchanged.
- No live near-verbatim AKT copy existed for any of the 802 (none carries their `source_akt_id`), so all 802 were added, none replaced one.
- Rejected as duplicates and kept here with `review_status: "rejected"`: PAQ15559 (of PAQ15361), PAQ15603 (of PAQ15208), PAQ15605 (of PAQ15209). Do not return them live. PAN15778 stays rejected.

**17 Oct 2026 (corrective) — batch 2 after #126.** Record: `_tools/mla-map/signoff/2026-10-17-plab1-batch2-corrective.md`.
- PLAB 1 bank 5,712 → 5,817: 185 more questions went live, 80 duplicate rejects were removed from live, 17 live questions were edited. `plab1-adapted-awaiting-review.json`: 204 → 19.
- 10 parked duplicates are marked `review_status: "rejected"` (their originals are live). PAN8630 and PAAKT051 stay here as `needs rewrite` (not published).
- PAQ854 was retired by #126 as a near-duplicate of PAQ16136 and PAQ16476 (both live); it was not restored.

**17 Oct 2026 (O&G batch, PR for plab1-adaptation-og-review):** 24 O&G sources resolved by live adaptations (PAN6753, PAN4106, PAN8063, PAN4146, PAN2022, PAN4557, PAN9552, PAN5333, PAN10406, PAN2378, PAN7538, PAN9323, PAN2881, PAN6319, PAN4116, PAN9011, PAN2368, PAN10402, PAN5951, PAN9555, PAN2079, PAN6497, PAN6747, PAN2006) removed from `plab1-adaptation-ii-unadapted.json`: 2,707 → 2,683. N2322 stays, marked `review_status: "dropped_review_dup"` (duplicate of live ID018). The 8 O&G holds stay parked.

**17 Oct 2026 (Neurology batch, PR for plab1-adaptation-neurology-golive):** 31 Neurology sources resolved by live adaptations (PAN2697, PAN9576, PAN9746, PAN8839, PAN10231, PAN3658, PAN5574, PAN6634, PAN5158, PAN224, PAN6882, PAN3345, PAN7586, PAN8821, PAN1257, PAN3892, PAN1684, PAN3677, PAN8586, PAN10469, PAN3661, PAN3668, PAN8823, PAN3915, PAN10462, PAN4454, PAN3902, PAN5039, PAN1502, PAN7031, PAN3688) removed from `plab1-adaptation-ii-unadapted.json`: 2,683 → 2,652. N1256 and N3669 stay, marked `review_status: "dropped_review_dup"` (PAN1256 duplicates live PAQ16373 / NEU106 / PAQ16278; PAN3669 duplicates live BX983 / BX1058 / NEU087). The 2 Neurology holds (N5590, N8595), all writer skips, checker drops and the 12 pre-screen repeats stay parked.
