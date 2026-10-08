/* ============================================================
   AMaC — MRCP Part 1 fixed mock papers  (mrcp1-papers.js)
   ------------------------------------------------------------
   Shape:  { "<paper-id>": { title: "<display name>", ids: [ "<question id>", ... ] } }

   The mrcp1-exams.html index and mrcp1-exam-runner.html both read this
   object. Both are written to degrade gracefully while it is empty:
   the index shows an explicit "no papers defined yet" state rather
   than an empty grid, and the runner refuses to start a paper session.

   MRCP1_SUBDOMAINS (mrcp1-spec.js) now carries the Federation's published
   approximate 200-question blueprint. TODO: papers still cannot be
   assembled until there are enough reviewed questions across the
   specialties to fill a 100-question paper to that blueprint without
   reusing items. A paper of 100 questions runs timed at 3 hours
   (HOURS_PER_PAPER) in mrcp1-exam-runner.html.
   ============================================================ */
window.MRCP1_PAPERS = {};
