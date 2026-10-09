# PLAB 1 clinician verdicts — Paediatrics (9 Oct 2026) — sign-off record (internal; never shown on the website)

- Reviewer: Dr De A Darling. Verdicts dated 9 Oct 2026, in the letter `AMaC_PLAB1_Reviewer_Verdicts_2026-10-09.txt` (Packs 2 and 4; Pack 3 edits 1–2).
- Before applying, Ahmed was told that the letter reads as AI-drafted ("Here is my review, written as Dr …", "Date: [today]") and that the returned
  forms had no verdicts filled in. He instructed this go-live on 9 Oct 2026. Applied 9 Oct 2026 on branch `plab1-paeds-verdicts`.
- Item-level record: `2026-10-09-plab1-clinician-verdicts-paeds.json`.

## Paediatrics Held 01 (59, repaired held items)
- Pack verdict: 57 Approve, 2 Edit. PAAKT183 and PAQ977 are also Held 01 items; the letter lists their edits under Pack 3. So 55 went live unchanged and 4 edited.
- Edits (key letter unchanged in all four; independently re-checked):
  - PAQ15063: stem "first MMR" → "first MMRV"; why_correct "MMR is" → "MMRV is", plus a sentence that MMRV can cause a mild chickenpox-like rash around the injection site 3–4 weeks later
    (NHS.uk MMRV vaccine, reviewed Dec 2025). For consistency, "MMR" → "MMRV" in the presentation (shown as the learning objective), pearl, takeaway and exam trap; "The child is not infectious" →
    "This measles-like rash is not infectious" (the later chickenpox-like spots can be).
  - PAQ995: option D → "Rubella — risk of congenital rubella syndrome". That made the key the longest option, so option E was lengthened to
    "Roseola infantum — risk of febrile seizures during the high fever before the rash" (accurate, no pregnancy or haemolysis cue).
  - PAAKT183: option E (key) → "Intravenous ceftriaxone plus amoxicillin now, with lumbar puncture once safe". why_correct, pearl and takeaway now give ceftriaxone first
    (cefotaxime only if contraindicated) plus amoxicillin for Listeria under 3 months. Source: NICE NG240 (2024) 1.6.5–1.6.6 and NG143 1.5.7. why_wrong B no longer says
    cefotaxime is preferred, and the last step of the reasoning line names ceftriaxone. Option B "Intravenous ceftriaxone alone" stays wrong (no Listeria cover).
  - PAQ977: Source line → NICE CG84 (2009, updated October 2022 when the shock bolus changed to 10 ml/kg) 1.3.3.2 (IV route) and APLS, Advanced Life Support Group (intraosseous route). Key unchanged.
- Section 3: 79 retired from the held file (69 repeat a live question, 9 are the weaker of a held twin, 1 repeats a held question in another domain:
  PAQ16534 → PAQ16393, still held under Infectious Diseases. If PAQ16393 is ever retired, PAQ16534 should be restored from git history).
- Label moves (the items stay held for their own domains): PAQ15847 → Neurology, PAQ15061 → Infectious Diseases & Emergencies.

## Paediatrics items from mixed pack H01
- PAN4275, PAPAED188, PAPAED171 and PAPAED173 are Approve. None is named among the letter's H01 edits (PAQ932, PAAKT183, PAQ977) or rejects (PAN15778, PAQ932 conditional),
  and all four are also approved in Held 01, where they went live in their repaired form. The "2 approve / 1 edit / 1 reject" in the #66 record was inferred
  from the counts; the letter does not support it, because PAAKT183 and PAQ977 are not H01 items.
- The 6 H01 Paediatrics section-3 items (PAPAED169, 172, 174, 178, 182, 186) are among the 79 Held 01 retirements.

## Paediatrics Batch 2 (64, new adaptations of parked sources)
- Pack verdict: 62 Approve, 2 Edit.
  - PAN2223: difficulty Moderate → Difficult.
  - PAN2217: Source → Down Syndrome Medical Interest Group (DSMIG UK), Cervical spine disorders: craniovertebral instability, revised 2024 (a UK source was found,
    so the AAP citation was replaced. The guide's Box 1/2 warning signs match the stem).
- 61 went live. **3 approved Batch 2 questions are held back** in `_parked/plab1-next-review-pack.json`, because each repeats a Held 01 question that went live
  (same scenario and learning point; the two packs were never reviewed side by side): PAN2526 (PAQ300, Meckel's), PAN1799 (PAQ15511, bilious vomiting),
  PAN1974 (PAQ15553, overflow soiling). Ahmed or the reviewer to choose. Borderline, both live: PAN1793 / PAQ14950 (assume neonatal infection, without vs with risk factors).
- Section 3: 36 drafts retired. All 100 Batch 2 parked sources were removed from the parked list (61 live, 3 held back, 36 retired).

## Counts
- PLAB 1 live bank 3,597 → 3,717 (+120: 59 Held 01 + 61 Batch 2). Held 2,342 → 2,204. Parked 2,807 → 2,707. Next review pack 1 → 4.
- Over #66 and this PR, the 9 Oct letter took the bank from 3,314 to 3,717 (+403).

## Checks
- validate.py on all 120: passes except PAPAED188 (stem 0.41 similar to its AKT source, limit 0.40; flagged in the pack and approved) and PAN2223
  (difficulty differs from its plan because of the reviewer's edit).
- Independent checker agent: see `_tools/plab-adaptation/work/paeds-golive/check_edits.json` (summary in the PR).
- build-counts: plab1Questions 3,597 → 3,717; `--check` clean. Headless Edge: the 10 count pages load with no JS errors and show 3,717. Mocks 1–6 each load
  180/180 and score 180/180 when answered with the keys. All 344 Paediatrics questions (the 120 new ones included) render with their options and score 344/344.
- Not done: the 16 parked sources that the held repair marked as covered by a kept Held 01 question stay in the parked list (they are not part of any verdict).
