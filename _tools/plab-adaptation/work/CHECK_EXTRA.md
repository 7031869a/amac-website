# Extra instructions for the u74-g01..g13 check (8 Oct 2026)

Read <BATCH>/CHECK_BRIEF.md first and follow it. These points add to it.

Scope: check ONLY the ids in <BATCH>/ctx/check_ids.json. The others were flagged by the duplicate pre-screen and are going to retirement.

The drafts were written without the newer validator rules. Every item currently fails
`PYTHONUTF8=1 BATCH_DIR=<BATCH> python _tools/plab-adaptation/validate.py <file>`. So each item you don't drop is a "fix",
and its edits must make it pass the validator:
- why_correct must end "Source: <guideline, body, year>". Name a real, current UK source that you have checked (NICE/CKS, BNF,
  MHRA, GMC, RCOG, BSG, BTS, UKHSA Green Book, NHS England, DVLA ...). Give the full new why_correct text.
- sources: a non-empty list of URLs you actually opened or searched to verify the item.
- The correct option must not be the longest, including a tie for longest. Fix this by lengthening distractors or tightening the key.
  If you change an option, keep correct_answer as "<L>. <text>" and keep why_wrong and exam_trap consistent.
- Stem: vignette, then a blank line, then a question ending "?". No NOT/EXCEPT.
- why_wrong covers each wrong letter as "X. ...". It never explains the key.
- Keep the correct letter, id, source_akt_id, difficulty and the key order. Plain text only: no emoji, no real people's names, UK spelling.

Duplicate check: the live bank is plab1-questions.js on this branch (main after PR #65). Also search
_parked/plab1-adapted-awaiting-review.json (2,431 held adaptations that may return live after clinician review) and the
other u74-g*/draft.json files. A repeat of the same scenario AND learning point in any of these means "drop", with the
matching id named in issues. One-line BX items count as repeats (README rule). ctx/prescreen.json gives the top 15 live
matches for each id. Use them, but search beyond them too.

Clinical errors: fix them if they can be fixed. Drop only items that are unsafe and can't be fixed, or duplicates. If you are unsure about a
clinical point, say so in issues so that the human clinician sees it.

When you are done:
1. Write <BATCH>/rev/C.json in the CHECK_BRIEF format. Include an entry for every id in check_ids.json.
2. Apply your edits to copies of the checked items. Write <BATCH>/out/final.json, containing only the non-dropped checked items with
   edits applied and in draft key order. Then run the validator on it. It must print OK.
3. Reply with: counts (pass/fix/drop), validator result, and one line for each drop and each substantive clinical
   correction (meaning more than a source, option-length or format change).
Do not touch anything outside <BATCH>/. Do not commit, push or edit plab1-questions.js.
