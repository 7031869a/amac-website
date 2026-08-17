/* ============================================================
   AMaC — MRCP Part 1 question bank  (mrcp1-questions.js)
   ------------------------------------------------------------
   Shape is fixed and enforced by mrcp1-validate.py. Every object
   carries EXACTLY these keys, in this order, no more and no fewer:

     id, subdomain, topic, difficulty, stem, options, correct_letter,
     why_correct, distractor_analysis, generalisation,
     review_status, reviewer, signoff_date

   Rules the validator enforces (it exits non-zero on any breach):
     • options            — dict with exactly A, B, C, D, E
     • correct_letter     — must be one of those five keys
     • distractor_analysis— dict keyed by the FOUR non-correct letters
     • subdomain          — must appear in MRCP1_SUBDOMAINS
     • id                 — unique across the bank

   Deliberately NOT carried over from the PLAB 1 bank:
     correct_answer (letter+text duplication — derive it from options),
     presentation, section, source_akt_id, pearl, thinking, exam_trap,
     takeaway.

   Run the validator before committing any change to this file:
     python mrcp1-validate.py
   ============================================================ */

/* ------------------------------------------------------------------
   The bank is empty. No MRCP Part 1 questions have been authored.

   An empty bank is a VALID state: mrcp1-validate.py exits 0 on it, and
   all five mrcp1-* pages render an explicit empty state rather than
   failing. Nothing on those pages advertises a bank size while this
   array is empty.

   Before the first real question is added, populate MRCP1_SUBDOMAINS in
   mrcp1-validate.py from the Federation's published Part 1 blueprint.
   Until that set is filled the validator rejects every question by
   design, so authoring against an empty subdomain list will not pass.
   ------------------------------------------------------------------ */
window.MRCP1_QUESTIONS = [];
