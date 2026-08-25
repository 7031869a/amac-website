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

   VERIFIED against thefederation.uk/examinations/guidance-and-information/
   pass-marks-explained, read 25 August 2026:
     - PASS_MARK_SCALED (450)                  scaled pass mark
     - PASS_MARK_APPLIES_FROM ("2026/1")       diet it applies from
     - STANDARD_SETTING                        equating by Item Response
       Theory, pass mark set by the MRCP(UK) Part 1 Standard Setting Group
     - SCALED_SCORE_RANGE ([200, 800])         see the caveat below

   SCALED_SCORE_RANGE IS NOT A LIMIT. The pass-marks page says most
   candidates score between 200 and 800; it also says a score can
   occasionally fall below 200 or rise above 800. Treat the pair as a
   typical span, never as bounds, and never clamp or validate against it.
   Anything rendering it must say so -- mrcp1-mock.html shows
   "typically 200-800 scaled" for this reason.

   SPEC_VERSION tracks this transcription, not the exam. Bump it whenever
   any value below changes, and say why in the changelog comment.

   Loaded by mrcp1-mock.html and mrcp1-exam-runner.html so the format is
   stated from one place and cannot drift between pages.
   ============================================================ */
window.MRCP1_SPEC = {

  /* ---- version of this transcription ---- */
  SPEC_VERSION: 3,
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
  // Published scoring: most candidates score between 200 and 800. Scores can
  // occasionally fall below 200 or rise above 800, so this is a typical span,
  // NOT a pair of bounds. See the provenance note at the top of this file.
  SCALED_SCORE_RANGE: [200, 800],
  // Published standard-setting method, from the pass-marks page.
  STANDARD_SETTING: "equating based on Item Response Theory, with the pass mark set by the MRCP(UK) Part 1 Standard Setting Group",

  /* ------------------------------------------------------------------
     WHY NO PRACTICE SCORE MAY BE COMPARED TO PASS_MARK_SCALED
     ------------------------------------------------------------------
     The 450 pass mark is a SCALED score. Scaling equates each diet against
     the difficulty of the questions actually sat in it, so the raw mark
     corresponding to 450 is different from diet to diet and is not knowable
     in advance.

     There is therefore NO fixed conversion from a raw score or a percentage
     on a practice set to a point on the scaled range. Any page that maps a
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

          The 'Images' row in mrcp1-mock.html was removed with it, so no
          page renders a claim about images, and none falls through to a
          falsy undefined. That row was the only reference: mrcp1.html,
          mrcp1-exams.html, mrcp1-exam-runner.html and mrcp1-study.html
          were checked and state nothing about images, in the spec table
          or as prose.
     v3 — pass-marks page read (25 August 2026), so the last two unverified
          constants are now verified and one asserted value is corrected.
          STANDARD_SETTING no longer says "modified Angoff at question
          level": that method is not stated on the pass-marks page and was
          asserted in error. It now records what the page does describe --
          equating by Item Response Theory, with the pass mark set by the
          MRCP(UK) Part 1 Standard Setting Group.
          PASS_MARK_SCALED (450) and PASS_MARK_APPLIES_FROM ("2026/1") are
          verified against that page; their values are unchanged.
          SCALED_SCORE_RANGE is unchanged as a value but is documented as a
          TYPICAL span, not bounds -- the page allows scores below 200 and
          above 800. mrcp1-mock.html now renders "typically 200-800" instead
          of "200-800 scaled" so the table does not read as a limit.
  */
};
