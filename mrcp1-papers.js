/* ============================================================
   AMaC — MRCP Part 1 fixed mock papers  (mrcp1-papers.js)
   ------------------------------------------------------------
   Shape:  { "<paper-id>": { title: "<display name>", ids: [ "<question id>", ... ] } }

   The mrcp1-exams.html index and mrcp1-exam-runner.html both read this
   object. Both are written to degrade gracefully while it is empty:
   the index shows an explicit "no papers defined yet" state rather
   than an empty grid, and the runner refuses to start a paper session.

   TODO: papers cannot be assembled until (a) MRCP1_SUBDOMAINS is
   populated from the Federation's published Part 1 blueprint and
   (b) there are enough reviewed questions to fill a paper without
   reusing items. Do not invent paper sizes, timings or a pass mark —
   take them from the published specification.
   ============================================================ */
window.MRCP1_PAPERS = {};
