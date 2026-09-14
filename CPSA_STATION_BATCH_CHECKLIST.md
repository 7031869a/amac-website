# Adding a batch of CPSA stations — checklist

Procedure for merging a new batch of stations into `cpsa-stations.html` and
keeping the advertised station count consistent across the site.

Current total: **282** stations (as of the batch 3 commit that completed the book
screening; previously 275 at `395ff33`).

## 1. Merge the stations

The bank lives in one array in `cpsa-stations.html`:

```js
const STATIONS = [ ... ];
```

The first ~238 entries are minified onto a single line; everything appended since
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
- no emoji in any field. The only non-ASCII characters the bank uses are
  `✓ ✗ · —` (and `°` where a temperature is quoted)

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

**False positives — do not change these.** The count appears as a coincidental
number inside page data:

- `flashcards.html` — inside the `const CARDS` array
- `questions.html` — inside the `const QUESTIONS` array
- `plab1-qc-notes.md` — inside a list of question IDs

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
