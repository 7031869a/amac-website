/* ============================================================
   AMaC — MRCP Part 1 examination format  (mrcp1-spec.js)
   ------------------------------------------------------------
   The published format of the examination, as versioned constants.
   This file describes THE EXAM, not the AMaC bank. Nothing here is a
   claim about our content.

   PROVENANCE: transcribed from the Federation of the Royal Colleges of
   Physicians of the UK published Part 1 specification. Each constant
   below names what it came from.

   VERIFIED against thefederation.uk/examinations/part-1/format -- eight
   figures, checked against that page:
     - two papers per diet, three hours each   (PAPERS_PER_DIET, HOURS_PER_PAPER)
     - 100 questions per paper                 (QUESTIONS_PER_PAPER)
     - 200 questions per diet                  (QUESTIONS_PER_DIET)
     - best of five                            (OPTIONS_PER_QUESTION)
     - no negative marking                     (NEGATIVE_MARKING)
     - clinical sciences, 25 of 200            (not encoded here)
     - the seven sub-domain names              (not encoded here)
     - sub-domain counts 5/4/4/4/3/3/2         (not encoded here)
   The last three are verified but have no constants in this file:
   MRCP1_SUBDOMAINS does not exist yet (see the TODO in mrcp1-papers.js).
   Take them from the format page when it is populated; do not re-derive them.

   NOT VERIFIED. The pass-marks page has not been read, so these remain as
   supplied and must be re-checked before they are shown to a candidate:
     - PASS_MARK_SCALED (450)
     - PASS_MARK_APPLIES_FROM ("2026/1")
   SCALED_SCORE_RANGE and STANDARD_SETTING were not part of this
   verification pass either way, and stand as originally transcribed.

   SPEC_VERSION tracks this transcription, not the exam. Bump it whenever
   any value below changes, and say why in the changelog comment.

   Loaded by mrcp1-mock.html and mrcp1-exam-runner.html so the format is
   stated from one place and cannot drift between pages.
   ============================================================ */
window.MRCP1_SPEC = {

  /* ---- version of this transcription ---- */
  SPEC_VERSION: 2,
  SPEC_SOURCE:  "Federation of the Royal Colleges of Physicians of the UK — published MRCP(UK) Part 1 specification",

  /* ---- paper structure ---- */
  // Published exam structure: a Part 1 diet is sat as two papers.
  PAPERS_PER_DIET: 2,
  // Published exam structure: each paper is three hours long.
  HOURS_PER_PAPER: 3,
  // Published exam structure: 100 questions in each paper.
  QUESTIONS_PER_PAPER: 100,
  // Published exam structure: 2 papers x 100 questions = 200 across the diet.
  QUESTIONS_PER_DIET: 200,

  /* ---- question format ---- */
  // Published question format: best-of-five, so five options per question.
  OPTIONS_PER_QUESTION: 5,
  // Published marking scheme: there is no negative marking in Part 1.
  NEGATIVE_MARKING: false,

  /* ---- standard setting and scoring ---- */
  // Published standard: the pass mark is a SCALED score of 450.
  PASS_MARK_SCALED: 450,
  // Published standard: the 450 scaled pass mark applies from the 2026/1 diet.
  PASS_MARK_APPLIES_FROM: "2026/1",
  // Published scoring: candidate results are reported on a 200-800 scaled range.
  SCALED_SCORE_RANGE: [200, 800],
  // Published standard-setting method.
  STANDARD_SETTING: "modified Angoff at question level, equated to a scaled score",

  /* ------------------------------------------------------------------
     WHY NO PRACTICE SCORE MAY BE COMPARED TO PASS_MARK_SCALED
     ------------------------------------------------------------------
     The 450 pass mark is a SCALED score. Scaling equates each diet against
     the difficulty of the questions actually sat in it, so the raw mark
     corresponding to 450 is different from diet to diet and is not knowable
     in advance.

     There is therefore NO fixed conversion from a raw score or a percentage
     on a practice set to a point on the 200-800 scale. Any page that maps a
     practice percentage onto 450 is inventing a threshold and telling the
     candidate something false about their standing.

     Practice sessions in this repository report a RAW score and a
     sub-domain breakdown, and nothing else. Do not add a pass/fail verdict.
     ------------------------------------------------------------------ */
  SCALED_SCORE_IS_EQUATED_PER_DIET: true,

  /* ---- changelog ----
     v1 — initial transcription: paper structure, question format, 450 scaled
          pass mark from the 2026/1 diet, 200-800 range, modified Angoff.
     v2 — removed IMAGES_PERMITTED. The claim that Part 1 uses no images is
          not supported by the Federation's format page; it was stated in
          error and is withdrawn, not restated in the other direction.
          Provenance rewritten: paper structure, question format and the
          sub-domain blueprint are verified against the format page; the
          pass mark and its effective date are not, pending the pass-marks
          page.

          OUTSTANDING: mrcp1-mock.html still renders an 'Images' row as
          SPEC.IMAGES_PERMITTED ? 'Used' : 'Not used'. With the constant
          gone that reads undefined and still displays "Not used" -- the
          withdrawn claim, now with nothing behind it. Delete that row.
  */
};
