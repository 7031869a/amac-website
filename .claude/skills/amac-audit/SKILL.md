---
name: amac-audit
description: Run the AMaC content audit. With no argument (or "stage N") it runs the next stage of the 8-stage rotation; with "changed" it audits every live question, station or card added or changed since the last audited commit. Two independent agents (Agent 1 on sonnet, Agent 2 on opus) check items against current UK guidance, and the run writes an owner sign-off list to Documents\AMaC-audits. Use when the user types /amac-audit, /amac-audit stage N or /amac-audit changed. It never edits site content.
---

# /amac-audit: staged clinical content audit

Each run produces a sign-off list for the owner and is report-only:

- **Never edit site content.** Approved fixes ship later as their own PR, and only when the owner asks.
- **Never write audit output into the repo.** Everything goes to `C:\Users\user\Documents\AMaC-audits\`: the report, `rotation.json` and the `work\` files.
- **Never put "AI-checked"**, "AI-reviewed", "verified by AI" or any similar label anywhere on the site, in a commit or in a PR.
- **No real creator or reviewer names** in anything that could reach the repo.

## Modes

| Command | What it audits |
|---|---|
| `/amac-audit` | The next stage in `rotation.json`, as a sample |
| `/amac-audit stage N` | Stage N, as a sample |
| `/amac-audit changed` | **Every** item added or changed in any gate since that gate's last audited commit (git diff on the data files). No sampling. |

Both modes use the same two-agent process (steps 3 to 6) and the same report format (step 7).

## Cadence and models
- **Cadence:** `rotation.json` → `cadence` (default `{ "label": "twice weekly", "weekdays": ["Mon", "Thu"] }`; edit the weekdays to change it). After each run, `next_due` is the first listed weekday after the run date. `status` shows `OVERDUE` once that date has passed. Every report header shows the next due date.
- **Models:** Agent 1 (screen) runs with `model: "sonnet"`. Agent 2 (independent re-check) runs with `model: "opus"`. Pass these on the Agent tool call and name both models in the report header.

## The cycle

| Stage | Gate | Content | Sample |
|---|---|---|---|
| 1 | akt | UKMLA AKT bank (`questions.html`) | bank |
| 2 | plab1 | PLAB 1 bank + the 6 mock papers (`plab1-questions.js`, `plab1-papers.js`) | bank |
| 3 | cpsa | CPSA stations (`cpsa-stations.html`) | 8 stations |
| 4 | plab2 | PLAB 2 OSCE stations (`osce.html`) + PLAB 2 Master Cards (`mastercards.html`) | 8 stations + 25 cards |
| 5 | mrcs-a | MRCS Part A (`data/mrcs-part-a-combined.json`) | bank |
| 6 | mrcs-b | MRCS Part B stations (`stations/MB-*.json`) | 8 stations |
| 7 | performance | Atlas, PLAB 2, CPSA and FRCS flashcards, Say/Avoid, Do/Never, Actor Traps, Examiner Brain, Fail/Pass/Distinction, Recovery Scripts, and the Recovery Room page | 25 cards (+ Recovery Room page once per cycle) |
| 8 | reference | prescribing, antibiotics, DVLA, normal values, ECG/ABG, ethics-law | **every page in full** |

- **Bank sample:** 40 items stratified across domains, plus up to 20 items added or changed since that stage's last audit. On a stage's first audit, "changed" means the last 8 weeks.
- **Station or card sample:** 8 stations or 25 cards. Up to 2 of the stations, or up to 6 of the cards, are added or changed items.
- **Ledger:** every audited ID is recorded, in rotation and changed runs alike. An item is not drawn again until the stage's pool is exhausted; then the ledger restarts.
- **Seed:** the sample is seeded by date and stage, so a re-run on the same day draws the same items.

## Steps

### 1. Pre-flight
From the repo root (your own git worktree on an up-to-date `origin/main`; never switch the shared checkout), run:

```
node scripts/content-integrity.mjs
node .claude/skills/amac-audit/audit-tool.mjs status
```

Note any FAIL gate and the warning counts for the audited sources; they go in the report header. `status` creates or upgrades `rotation.json` and shows the cadence and next due date.

### 2. Sample (rotation) or collect (changed)
```
node .claude/skills/amac-audit/audit-tool.mjs sample            # next stage in rotation.json
node .claude/skills/amac-audit/audit-tool.mjs sample --stage 3  # when the user names a stage
node .claude/skills/amac-audit/audit-tool.mjs changed           # /amac-audit changed
```

Each command writes a JSON file in `Documents\AMaC-audits\work\`: `<date>-stage<N>-<gate>-sample.json` or `<date>-changed-sample.json`. The file holds every item's full content, ID, domain, reason, `models` and `next_due`. The command also prints the report path.

- **Rotation:** if it prints **FULL SWEEP PENDING**, put that at the top of the report and remind the user. A full sweep runs only when the user asks.
- **Changed:** each gate's baseline is its `changed_commit`, else its last rotation commit, else `--since <sha>`. A gate with none of these starts at HEAD, so there is nothing to audit for it this time. Removed items are counted, not audited. If there are **more than 150 items**, tell the user the count per gate and get their go-ahead before launching agents. Never sample to cut the count: changed mode audits everything or waits.

### 3. Agent 1: screen (model "sonnet")
Split the items into batches of at most 20 (stations: at most 4; full pages: 2). Run one general-purpose agent per batch with `model: "sonnet"`, in parallel, all with the same brief below. Give each agent the sample file path and its item IDs, and tell it to read the items from the file.

Each agent checks every item for the following:

1. **Clinical accuracy.** Facts, doses, investigations and management steps.
2. **Correct key** (questions). Is the keyed option the single best answer? Is any distractor also defensible?
3. **Current UK guidance** (NICE, NICE CKS, BNF/BNFc, Resus Council UK, GMC, UKHSA Green Book, and the relevant royal colleges, SIGN or MHRA).
   - **Web-verify only** (a) items it flags, and (b) items whose answer depends on a guideline, a threshold, a drug, a dose, or a legal or GMC rule.
   - For a web-verified item, cite the URL, the guidance's own published or last-updated date, and today's access date. If a source cannot be reached, say so.
   - Check every other item from knowledge and mark it `web_verified: false`; the report shows it as "not web-verified". If such an item turns out to need a flag, it becomes case (a) and is web-verified.
   - NICE, CKS and BNF pages block WebFetch; fetch them with curl.
4. **Exam-appropriateness.** Is it at the right level for the exam (UKMLA AKT / PLAB 1 = day-one FY1; MRCS = core surgical trainee)? Is it UK practice, with an unambiguous stem?
5. **AMaC rules:**
   - Adapt, do not copy. Flag text that looks lifted from a published bank or textbook; search a distinctive phrase if suspicious.
   - No movable-threshold answers. The key must not hinge on a number that differs between guidelines or changes often, such as a fixed 2WW day count.
   - The fail label is "Critical fail". There is no "instant fail" label except in the product name "Instant Fail Atlas", and there are no "Kill zone", "hurdle" or "Safety-critical" fail labels.
   - Station patient first names and surnames are unique.

Each agent returns one row per item:
- `id`
- `verdict`: OK / MINOR / MAJOR / ACUTE
- `issue`
- `evidence`: a quote from the item plus what the source says
- `source_url`
- `source_date`
- `proposed_fix`
- `web_verified`: true / false
- `depends_on`: guideline / threshold / drug / dose / legal-GMC / none

Severities:
- **ACUTE:** a candidate who learnt this could harm a patient (a dangerous dose, a contraindicated drug keyed as correct, a missed emergency).
- **MAJOR:** wrong key, a factual error, or guidance that changes the answer.
- **MINOR:** wording, clarity, a dated but harmless detail, or a rule breach with no clinical effect.
- **OK:** no issue.

### 4. Agent 2: independent re-check (model "opus")
Run **one** separate general-purpose agent with `model: "opus"`. It must be a fresh agent, not a continuation of an Agent 1 agent. Give it:

- **Every item Agent 1 flagged.** Pass only the item ID and a one-line statement of the alleged problem, not Agent 1's evidence, severity or fix.
- **10 items Agent 1 marked OK,** chosen at random (all of them if fewer). Do not say these were unflagged.

Tell it not to open any `*agent1*` file. It applies the same brief and the same web-verification rule. Every flagged item counts as case (a), so Agent 2 web-verifies all of them. It returns the same row format.

### 5. Reconcile
| Agent 1 | Agent 2 | Final |
|---|---|---|
| ACUTE | ACUTE | **ACUTE** |
| MAJOR | MAJOR | **MAJOR** |
| ACUTE | MAJOR (or the reverse) | **DISCUSS** (show both) |
| MAJOR/ACUTE | MINOR or OK | **DISCUSS** |
| MINOR | MINOR | **MINOR** |
| MINOR | OK | MINOR, noted "one agent" |
| OK | MAJOR/ACUTE (one of the 10) | **DISCUSS** |
| OK | OK | not listed |

Only an item both agents agree on is MAJOR or ACUTE.

### 6. Escalate
Mark a domain for a **full sweep** if either of these applies:
- there is **any ACUTE**: mark that item's domain;
- **MAJOR is more than 5 %** of the items audited: mark the domain of every MAJOR item.

In changed mode, check this per gate.

Say so in the report's first lines. The record step in step 8 writes the marked domains to `rotation.json`.

### 7. Write the report
Write it to the path the command printed: `<YYYY-MM-DD>-stage<N>-<gate>.md` or `<YYYY-MM-DD>-changed.md` in `C:\Users\user\Documents\AMaC-audits\`. Use this layout:

```
# AMaC content audit — Stage N: <title> — <date>        (changed mode: "Changed items since last audit — <date>")
**Summary:** <n> items (<domains> domains; <k> added/changed) · ACUTE a · MAJOR m · DISCUSS d · MINOR i · <FULL SWEEP: domains | no escalation>
Models: Agent 1 sonnet · Agent 2 opus · Next due: <next_due> (<cadence label>)
Repo <head sha> · seed <seed> (rotation) · baseline <sha> (changed mode: per gate, with its item count) · integrity: <FAIL count> structural, <warnings for these sources>
Web-verified: <w> of <n> items (the rest checked from knowledge, marked "not web-verified")

## ACUTE
(numbered, or "None.")

## Sign-off list
| # | Item ID | Severity | Issue | Evidence + source (link, date) | Proposed fix | APPROVE / REJECT / DISCUSS |
|---|---|---|---|---|---|---|
(ACUTE first, then MAJOR, DISCUSS, MINOR; leave the decision column blank. In changed mode, group by gate.)

## 5 items for <owner_first_name> to verify personally
(heading name from rotation.json `owner_first_name`, which is kept out of the repo. 5 findings chosen at random, with a fixed seed; if there are fewer than 5 findings, all of them plus random OK items to make 5. For each: ID, what to check, where.)

## Audited items
| ID | Gate | Domain | Reason | Web-verified | Final |
(every audited ID; write "not web-verified" in that column where it applies; OK items are listed here, not in the sign-off list)

## Method
Agent 1 (sonnet, n batches) and Agent 2 (opus, independent; re-checked f flags + 10 OK items). Sources consulted. Limits: anything that could not be verified.
```

Write in plain British English. Quote item text exactly. Every MAJOR, ACUTE or DISCUSS row needs a source link and date.

### 8. Record
```
node .claude/skills/amac-audit/audit-tool.mjs record --sample "<sample json>" --report "<report md>" --findings F --major M --acute A [--sweep "..." --why "1 ACUTE; MAJOR 4/60 = 6.7%"]
```

- **Rotation:** `--sweep "Domain A|Domain B"`. This adds the IDs to the stage's ledger, sets `last_audit` and `last_commit`, stores the sweep marks and advances `next_stage`.
- **Changed:** `--sweep "1:Domain A|3:Domain B"` (stage:domain). This sets **every** gate's `changed_commit` to the audited HEAD, adds the IDs to each ledger, and logs the run in `changed_audits`.
- **Both modes** set `last_run` and `next_due`.

### 9. Tell the user
Give the report path, the summary line, the next due date and any FULL SWEEP. Do not offer to apply fixes in the same run.

## Pre-push warning
`.githooks/pre-push` runs `audit-tool.mjs coverage --commit <pushed sha> --from <remote sha or merge-base>`. If the push changes a gate's data files and that gate's `changed_commit` does not cover the pushed commit, it prints a **warning** naming the gates and files and suggests `/amac-audit changed`. It never blocks a push.

## Files
- `audit-tool.mjs` (this folder): rotation, sampling, changed-item collection, ledger, cadence and coverage. Reads the repo; writes only under `AMAC_AUDIT_DIR` (default `C:\Users\user\Documents\AMaC-audits`).
- `scripts/content-integrity.mjs` (repo): mechanical checks. These are not clinical review.
- Bleep cards and Starting Out cards are not in the rotation.
