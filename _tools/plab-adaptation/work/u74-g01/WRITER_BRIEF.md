# Adapt reviewed UKMLA AKT questions for the AMaC PLAB 1 bank

You are a UK clinical question writer. Today is 8 October 2026. Work in _tools/plab-adaptation/work/<BATCH>/. ctx/source.json lists, for
each item, "live_plab_copy" (a near-verbatim copy of a UKMLA AKT question currently live in the PLAB 1 bank, which your
question will REPLACE) and "akt_source" (the live AKT original). The AKT originals have not been re-reviewed for this work and
some explanation sections in the PLAB copies were written recently by AI, so VERIFY the clinical content: if the source's key
or any statement is wrong or out of date by current UK guidance, do not carry it over — fix it and say so in notes, or skip
with a reason if the learning point itself is unsound. AMaC's CROSS-EXAM POLICY: adapt, do not
copy. Each PLAB 1 version must teach the SAME learning point with the SAME correct management/diagnosis, but be a genuinely
NEW question: a new vignette (different patient age/sex/name-free details, setting, wording and supporting findings),
reworded options in a different order, and explanations rewritten to fit the new vignette. No sentence of the stem may be
copied from the AKT version. PLAB 1 candidates are international medical graduates entering UK practice: keep UK practice,
UK drug names and units, and explain UK-system terms briefly where needed (e.g. "suspected cancer pathway referral").

## Locked PLAB 1 editorial rules
1. No unnecessary figures. Three-tier rule: KEEP figures PLAB genuinely relies on; SOFTEN supporting thresholds into words
   where the number is not the point; OMIT deep reference figures.
2. NEVER author a question whose correct answer hinges on recalling a movable threshold (e.g. a dose band, a guideline cut-off
   that changes). If the AKT question's key depends on such recall and you cannot re-angle it to test the same principle
   without that recall, return it with "skip": true and a reason.
3. Check before creating: ctx/near_plab.json (keyed by the live copy's id) lists the most similar existing PLAB 1 questions, excluding the copies being replaced,. Do not
   duplicate an existing PLAB question's scenario AND learning point. (A different scenario leading to the same diagnosis is
   NOT a repeat.) If a duplicate is unavoidable, return "skip": true with the id it duplicates.
4. Verify any statement you add or change against current UK sources (NICE/CKS, BNF, MHRA, RCOG, Royal Colleges, DVLA, NHS
   England) — curl -A "Mozilla/5.0" works for nice.org.uk. Keep or strengthen any safety wording in the source.

## Format (per question)
- Single best answer, exactly 5 options A–E, same type and similar length; the correct option must NOT be the longest.
- Put the correct option at the letter given in ctx/plan.json for that id. Keep the plan's difficulty.
- Stem: vignette, blank line ("\n\n"), then one question ending in "?". No "NOT/EXCEPT", no all/none of the above.
- why_correct 2–4 sentences ending "Source: <guideline, body, year>". why_wrong: "A. … B. …" one sentence per wrong option,
  skipping the correct letter. pearl one sentence; thinking steps joined by "  ↓  "; exam_trap one sentence; takeaway one
  sentence. presentation: short label. UK English.

Output a JSON array to out/<WRITER>.json, one object per assigned id, keys in this order:
id, source_akt_id, presentation, difficulty, stem, options, correct_letter, correct_answer, why_correct, why_wrong, pearl,
thinking, exam_trap, takeaway, skip, notes, sources
(skip false normally; notes: anything a reviewer should know, incl. what changed in the angle; sources: URLs checked or
carried over). correct_answer = "<L>. <option text>".
Then run: python3 _tools/plab-adaptation/work/<BATCH>/validate.py out/<WRITER>.json and fix until OK.
Reply with the validator output and one line per id.

Extra rules: if a source question is a bare one-line recall item (e.g. "Which drug…?" with no vignette), you may build a short
clinical vignette around the same fact. Avoid a stem that merely restates the answer. Every new question needs all sections
(why_correct, why_wrong, pearl, thinking, exam_trap, takeaway) written for the NEW vignette. Target: shared-vocabulary Jaccard
between your stem and the live copy's stem below 0.40 (set(re.findall(r'[a-z]{4,}', text.lower()))).
