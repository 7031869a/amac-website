# Adding a batch of CPSA stations — checklist

Procedure for merging a new batch of stations into `cpsa-stations.html` and
keeping the advertised station count consistent across the site.

Current total: **282** stations (as of the batch 3 commit that completed the book
screening; previously 275 at `395ff33`).

## 0. Release gate — do not merge or push until both are done

Standing rule from Dr Carter (2026-09-19). A batch goes live only when **both**
of these are complete for **every** station in it:

1. Dr Carter's full clinical sign-off on the final text, with no open rounds.
   A later review round reopens sign-off, even if an earlier round cleared it.
2. A category duplication check against the live bank: each new station
   compared field by field (not by title) with every real station in its own
   category, plus the nearest cross-category analogues. Check both caller
   type/pressure dynamic and the core mechanism being tested. The results are
   written up as a draft → nearest real station → what's different table.

A status line in a draft file ("all 9 duplication-checked", "cleared") is not
evidence. Before pushing, confirm the table exists and names each station in
the batch. Stations whose check hasn't run are held back, even if the rest of
the batch goes live.

Why: commit `4ea7355` pushed nine stations when the duplication check had
covered only MH/HIST/RX. The TEL check ran afterwards and found TEL-11 to be
a third 6-week postnatal depression station, so it was removed from the live
bank in `f73fc47`.

**What counts as a duplicate: the station, not the skeleton** (Dr Carter,
2026-09-19). Duplication is judged on the content tested and the reasoning
demanded, and above all on what the distinction tier is marked on: for
example, a process boundary (attend and assess before prescribing) versus a
knowledge boundary (name the pharmacological mechanism and its risks). It is
not judged on whether two stations share a setup skeleton, such as "urgent
out-of-hours call from an assertive nurse". Two stations that share a
skeleton but test different content and mark the distinction tier on
different things are not duplicates. Record the skeleton overlap in the
duplication table and give the verdict on content and distinction-tier
marking. Example: TEL-12 (care home diuretic request) and mix-34 (ward
sedation request) share a skeleton, but TEL-12's distinction tier is marked
on a knowledge boundary and mix-34's on a process boundary, so both stay.
TEL-11 was pulled because its tested content repeated comm-09 and mh-09, not
because of its format.

## 1. Merge the stations

The bank lives in one array in `cpsa-stations.html`:

```js
const STATIONS = [ ... ];
```

The first 213 entries are minified onto a single line (an earlier version of this
checklist said ~238; that figure was wrong from the start — the line held 213
when this file was added at `0369d3b`); everything appended since
is pretty-printed with `JSON.stringify(station, null, 1)`. Match that style when
appending — new objects go at the end of the array, comma-separated, no trailing
comma.

Before merging, check the incoming batch against the live bank:

- no `id` collisions, and no `id` duplicated within the batch
- no `num` collisions
- every object carries all 20 keys the existing entries use:
  `id, num, title, category, mlaTheme, contentMap, capabilities, level, setting,
  time, yourRole, scenario, markingGrid, fail, pass, distinction, hook,
  examinerTrap, thinkSayDo, markTriggers`
- no emoji in any field. Ordinary typographic and clinical non-ASCII characters
  are legitimate and already in the bank — do not strip them. As of 282 stations
  the full set is:
  - marks and punctuation: `✓ ✗ · — – ’ “ ”`
  - symbols: `° µ → × ± ≤ ≥ ≠ é`
  - sub/superscripts: `₂ ₃ ² ⁹ ⁺ ⁻`

  A character outside this set isn't automatically wrong (a new unit or
  formula may need one), but check it isn't an emoji or a paste artefact.

After merging, confirm the page still works:

- the main `<script>` block parses as valid JavaScript
- the `application/ld+json` block is still valid JSON
- `STATIONS.length` equals the expected new total, and all ids/nums are unique

## 2. The station count — what updates itself

**`cpsa-stations.html` visible copy is automatic. Do not hand-edit it.**

Both on-page counts are rendered at runtime from `STATIONS.length`:

- the hero intro paragraph
- the `<h2 class="section-title">… Stations</h2>` heading

Both are `<span class="js-station-count"></span>` placeholders, filled by
`buildCounts()`, which `buildGrid()` calls on load. To add another self-updating
count anywhere on this page, drop in the same span — no JS change needed.

The category tab counts (`buildTabs()`) have always been derived from the array
and need no attention either.

This is safe because the entire station bank is already JS-rendered — `#stationGrid`
and `#categoryTabs` are empty in the static HTML — so the count is no more
JS-dependent than the station cards themselves. The `<meta>` descriptions below
remain static, so the crawler-visible count is still in the source.

## 3. The station count — what you must update by hand

**14 sites across 6 files.** All are static text; none derive from `STATIONS`.
Line numbers are as of the commit that added this file — grep rather than trust them:

```
grep -rn '\b<old-count>\b' --include=*.html . | grep -v node_modules
```

| File | Sites | Where |
|---|---|---|
| `cpsa-stations.html` | 3 | `og:description` (27), `twitter:description` (37), `meta description` (59) |
| `ukmla.html` | 5 | `og:description` (27), `twitter:description` (37), `meta description` (59), `.hs-num` stat (246), `.tc-badge` (261) |
| `plab1-exam-runner.html` | 2 | `og:description` (28), `twitter:description` (38) |
| `plab1-study.html` | 2 | `og:description` (29), `twitter:description` (39) |
| `index.html` | 1 | `.door-stats` (220) |
| `landing.html` | 1 | `.door-stats` (159) |

Easy to miss: the two `.door-stats` blocks on `index.html` / `landing.html`, and
the `.hs-num` / `.tc-badge` pair on `ukmla.html`. Batch briefs have historically
listed only the meta descriptions.

**False positives — do not change these.** The count can appear as a coincidental
number inside page data. This list is keyed to a specific count, so it goes stale
every batch — re-run the grep for the old count and re-check each hit rather than
trusting it.

At 282 (after `7f7dfe4`), the only HTML false positive is:

- `flashcards.html` — inside the `const CARDS` array (`"id": 282`)

(`book-previews/volume2_preview.pdf` and `book-samples/volume2_sample_chapter.pdf`
also match `282`, but the `--include=*.html` grep never reaches them.)

An earlier version of this list also named `questions.html` (`const QUESTIONS`)
and `plab1-qc-notes.md` (a list of question IDs). Those were hits for `262`, an
older count; neither file matched `275` or `282`.

## 4. Categories

`buildTabs()` holds an explicit `order` array; any category missing from it still
renders, but gets appended last by the unknown-category fallback rather than
appearing in sequence. (This is what happened to `history-taking` before `88558b1`.)

If a batch introduces a new category, three things must change together:

1. add the key to the `order` array in `buildTabs()`
2. add a display name to `catLabel`
3. add it to the category list in the hero intro paragraph, which is prose and
   does not derive from `catLabel`

Worth checking each batch: every category in the data appears in `order`, no
`order` entry is empty, every category has a `catLabel`, and the tab counts sum
to `STATIONS.length`.

## 5. Deploy

Commit and push to `origin main`; GitHub Pages serves the repo root
(`CNAME` → amac-medical.com).
