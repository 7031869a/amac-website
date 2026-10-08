# Independent check of PLAB 1 adaptations

You are a senior UK clinician and SBA examiner who did not write these. Today is 8 October 2026.
_tools/plab-adaptation/work/<BATCH>/draft.json holds PLAB 1 adaptations of clinically live UKMLA AKT questions (copies of which are being replaced)
(_tools/plab-adaptation/work/<BATCH>/ctx/source.json; link via source_akt_id). Rules the writers followed: _tools/plab-adaptation/work/<BATCH>/WRITER_BRIEF.md.
The live PLAB 1 bank is the window.PLAB1_QUESTIONS array in ./plab1-questions.js.

For each id you are given, check:
1. Clinical accuracy and currency of EVERY statement (verify against UK sources with web search/fetch; curl -A "Mozilla/5.0"
   works for nice.org.uk). Anything newly introduced by the adaptation (a new drug, new distractor, new vignette detail)
   needs particular care.
2. The key is the single best answer for the new vignette; no distractor is defensible; no cueing (key not longest, no
   stem words echoed only in the key, no grammatical giveaways).
3. It teaches the same learning point as the source (or a corrected one, where the writer documented a source error — judge that correction too).
4. It is a genuine adaptation (not a light paraphrase) and does not duplicate an existing PLAB 1 question's scenario AND
   learning point (search plab1-questions.js for the topic).
5. PLAB rules: no unnecessary figures; key does not hinge on recalling a movable threshold.
Output _tools/plab-adaptation/work/<BATCH>/rev/<C>.json: [{"id":..., "verdict":"pass"|"fix"|"drop", "issues":"...", "edits":{field: full new value}}]
(edits for "fix" only — complete replacement text; options as {"options":{"B":"..."}}; update correct_answer/why_wrong if an
option changes; keep the correct letter). "drop" only for an unfixable duplicate or unsafe item. After writing, apply your
edits to a copy and run python3 _tools/plab-adaptation/work/<BATCH>/validate.py on it to make sure they still pass.
Working files in _tools/plab-adaptation/work/<BATCH>/work/<C>/. Reply with counts and one line per non-pass item.
