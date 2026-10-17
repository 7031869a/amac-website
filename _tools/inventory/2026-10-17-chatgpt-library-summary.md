# ChatGPT library inventory, 17 Oct 2026

Read-only inventory of `AMaC_All_Educational_Text.docx` (Heading 1 = exam area, Heading 2 = source file; 3,084 source files, about 154M characters). No site files were changed. Every NEW item is in `2026-10-17-chatgpt-library.json` in this folder. Nothing in it is reviewed, approved or cleared for use.

## Counts per exam

| Exam | Kind | Extracted | Duplicates collapsed | Unique | LIVE | PARKED | WITHDRAWN | NEW |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| MRCP Part 1 | questions | 6,823 | 2,543 | 4,280 | 24 | 0 | 0 | 4,256 |
| MRCS Part A | questions | 4,663 | 2,659 | 2,004 | 1,820 | 0 | 0 | 184 |
| PLAB 1 | questions | 16,024 | 12,361 | 3,663 | 41 | 0 | 0 | 3,622 |
| UKMLA AKT | questions | 15,693 | 13,906 | 1,787 | 1,539 | 5 | 0 | 243 |
| MRCP/PACES: PACES | stations | 1,308 | 818 | 490 | 32 | 0 | 0 | 458 |
| MRCS Part B | stations | 747 | 285 | 462 | 45 | 0 | 0 | 417 |
| CPSA / PLAB 2 (PLAB-NEW style) | stations | 4 | 0 | 4 | 0 | 0 | 0 | 4 |
| Foundation / Bleep cards | cards | 72 | 0 | 72 | 69 | 0 | 0 | 3 |
| **Total** | | **45,334** | **32,572** | **12,762** | **3,570** | **5** | **0** | **9,187** |

- **Extracted** = discrete items that passed the sanity checks, counted across every version in the file. (Raw parser hits before the checks: 43,881 questions.) **Duplicates** = other versions of an item already kept; the latest version (highest phase/version number, then latest in the file) is kept. **Unique** = extracted minus duplicates.
- LIVE, PARKED and WITHDRAWN are matched against the live banks (PLAB 1, UKMLA AKT, MRCS Part A, MRCP Part 1, CPSA, PLAB 2, MRCS Part B, PACES, bleep cards), `_parked/` and `_withdrawn/`. Items are matched to any bank, not only their own exam.
- PARKED is only possible for PLAB 1 questions (the only parked content). No PLAB 2 or CPSA stations were found as discrete items in the export (see limits), so those rows are absent; the 4 stations listed under "CPSA / PLAB 2" are PLAB-NEW style records tagged for both.

## 10 largest NEW groups (exam and specialty)

| # | Exam | Specialty | NEW questions |
|---:|---|---|---:|
| 1 | MRCP Part 1 | Gastroenterology & hepatology | 497 |
| 2 | MRCP Part 1 | Neurology | 476 |
| 3 | MRCP Part 1 | Haematology & oncology | 469 |
| 4 | MRCP Part 1 | Renal & urology | 457 |
| 5 | MRCP Part 1 | Cardiology | 410 |
| 6 | PLAB 1 | Cardiology | 391 |
| 7 | PLAB 1 | Renal & urology | 360 |
| 8 | MRCP Part 1 | Respiratory | 348 |
| 9 | MRCP Part 1 | Endocrinology & diabetes | 333 |
| 10 | PLAB 1 | Neurology | 286 |

By the topic label the source gave (where it had one):

| # | Exam | Source topic | NEW questions |
|---:|---|---|---:|
| 1 | PLAB 1 | Cardiovascular | 164 |
| 2 | MRCP Part 1 | Haematology | 127 |
| 3 | MRCP Part 1 | Neurology | 74 |
| 4 | MRCP Part 1 | Gastroenterology | 69 |
| 5 | MRCP Part 1 | Endocrinology | 66 |
| 6 | MRCP Part 1 | Respiratory medicine | 60 |
| 7 | MRCP Part 1 | Rheumatology | 59 |
| 8 | PLAB 1 | Applied clinical statistics | 52 |
| 9 | PLAB 1 | Vitamin B12 deficiency | 46 |
| 10 | PLAB 1 | Pregnancy of unknown location | 36 |

NEW stations: PACES stations R5-xxx and the older R2/R3/X sets account for 458; MRCS Part B (codes B2-nnn) for 417.

## Method

1. The .docx was streamed (it is 257 MB of XML) into one text line per paragraph. FRCS, MRCS image-library records and book-chapter files were skipped.
2. Questions: a stem followed by 4-5 options, either as separate A-E lines, inline "A. ... B. ..." text, or the "Stem:/Options/Key:" records. The key is read from "Answer", "Correct answer", "Key", "Working answer", "Existing key" or "Answer Letter" lines. Items need at least 4 options and a stem over 30 characters; a key is not required (items without one are flagged `key_unknown`). Commentary text that merely contains lettered lists was filtered out by length and wording checks.
3. Collapsing versions: within each exam, items are clustered when the normalised stems have TF-IDF cosine at least 0.6 and a fuzzy stem ratio (token set) of at least 88, with the same keyed answer where both have one. The kept version is the one from the highest phase/version in its source name.
4. Matching: top-8 TF-IDF neighbours in the combined banks, then LIVE/PARKED/WITHDRAWN if the fuzzy stem ratio is at least 88 and the keyed answer text agrees (ratio 80 or more); if the extract has no key, a stem match alone counts and is flagged. Stem matches with a different key stay NEW and carry `near_match_different_key`; stem ratios 80-87 carry `near_match`.
5. Stations: one per source file named with a station code (PACES R2/R3/R5/X-nn, MRCS B2-nnn), collapsed by code to the latest version, then matched by code (PACES) or by title similarity to live stations. Bleep cards are matched by title.

## Limits

- Question formats are varied; items in unusual layouts (for example the Part A v106 large batch, whose options are not shown in the export) are missed, so NEW is a lower bound for those sources. 1,527 NEW questions have no key line in the export (`key_unknown`).
- Specialty labels for questions are assigned by keywords from the topic and stem; use them for grouping only.
- Not counted as items: the 1,302 CPSA flashcards (Q/A cards, many versions), the PLAB 2 / CPSA "ITEMS VOL" files and PLAB 2 Volume files (book chapters), the station writing lists, image-library records and the FRCS books.
- The station titles in the export differ from the live codes (B2-nnn vs MB-nnn), so station matches rely on title similarity; 45 MRCS Part B and 32 PACES stations matched.
- The JSON is "site format where possible": questions carry the site's field names with stem, options and key filled, but explanations are kept as raw text (`explanation_raw`) and `id` is null for later allocation.
