---
name: amac-audit
description: Run the next stage of the AMaC 8-week content-audit rotation. It samples live questions, stations or cards, has two independent agents check them against current UK guidance, and writes an owner sign-off list to Documents\AMaC-audits. Use when the user types /amac-audit, optionally with "stage N". It never edits site content.
---

# /amac-audit: staged clinical content audit

Each run audits **one stage** of an 8-week cycle and produces a sign-off list for the owner. It is report-only:

- **Never edit site content.** Approved fixes ship later as their own PR, and only when the owner asks.
- **Never write audit output into the repo.** Everything goes to `C:\Users\user\Documents\AMaC-audits\`: the report, `rotation.json` and the `work\` files.
- **Never put "AI-checked"**, "AI-reviewed", "verified by AI" or any similar label anywhere on the site, in a commit or in a PR.
- **No real creator or reviewer names** in anything that could reach the repo.

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
- **Ledger:** every sampled ID is recorded. An item is not drawn again until the stage's pool is exhausted; then the ledger restarts.
- **Seed:** the sample is seeded by date and stage, so a re-run on the same day draws the same items.

## Steps

### 1. Pre-flight
From the repo root (your own git worktree on an up-to-date `origin/main`; never switch the shared checkout), run:

```
node scripts/content-integrity.mjs
node .claude/skills/amac-audit/audit-tool.mjs status
```

Note any FAIL gate and the warning counts for this stage's sources; they go in the report's mechanical section. `status` creates `rotation.json` if it is missing.

### 2. Sample
```
node .claude/skills/amac-audit/audit-tool.mjs sample            # next stage in rotation.json
node .claude/skills/amac-audit/audit-tool.mjs sample --stage 3  # when the user names a stage
```

This writes `Documents\AMaC-audits\work\<date>-stage<N>-<gate>-sample.json`, holding every sampled item's full content, ID, domain and reason. It also prints the report path. If it prints **FULL SWEEP PENDING**, put that at the top of the report and remind the user. A full sweep runs only when the user asks.

### 3. Agent 1: primary check
Split the sample into batches of at most 20 items (stations: at most 4; full pages: 2 pages). Run one general-purpose agent per batch, in parallel, all with the same brief below. Give each agent the sample file path and its item IDs, and tell it to read the items from the file.

Each agent checks every item for the following:

1. **Clinical accuracy.** Facts, doses, investigations and management steps.
2. **Correct key** (questions). Is the keyed option the single best answer? Is any distractor also defensible?
3. **Current UK guidance.** Check against NICE, NICE CKS, BNF/BNFc, Resus Council UK, GMC, UKHSA (Green Book), and the relevant royal colleges, SIGN or MHRA where those are the source.
   - Web-verify each claim that matters to the answer.
   - Cite the URL, the guidance's own published or last-updated date, and today's access date.
   - Never cite from memory alone. If a source cannot be reached, say so.
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

Severities:
- **ACUTE:** a candidate who learnt this could harm a patient (a dangerous dose, a contraindicated drug keyed as correct, a missed emergency).
- **MAJOR:** wrong key, a factual error, or guidance that changes the answer.
- **MINOR:** wording, clarity, a dated but harmless detail, or a rule breach with no clinical effect.
- **OK:** no issue.

### 4. Agent 2: independent re-check
Run **one** separate general-purpose agent (a fresh agent, not a continuation of an Agent 1 agent). Give it:

- **Every item Agent 1 flagged.** Pass only the item ID and a one-line statement of the alleged problem, not Agent 1's evidence, severity or fix.
- **10 items Agent 1 marked OK,** chosen at random (all of them if fewer). Do not say these were unflagged.

It applies the same brief, verifies on the web itself, and returns the same row format.

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
- the sample has **any ACUTE**: mark that item's domain;
- **MAJOR is more than 5 %** of the items sampled: mark the domain of every MAJOR item.

Say so in the report's first lines. The record step in step 8 writes the marked domains to `rotation.json`.

### 7. Write the report
Write it to `C:\Users\user\Documents\AMaC-audits\<YYYY-MM-DD>-stage<N>-<gate>.md` (the path `sample` printed), using this layout:

```
# AMaC content audit — Stage N: <title> — <date>
**Summary:** <n> items sampled (<domains> domains; <k> added/changed) · ACUTE a · MAJOR m · DISCUSS d · MINOR i · <FULL SWEEP: domains | no escalation>
Repo <head sha> · seed <seed> · baseline <sha> · integrity: <FAIL count> structural, <warnings for these sources>

## ACUTE
(numbered, or "None.")

## Sign-off list
| # | Item ID | Severity | Issue | Evidence + source (link, date) | Proposed fix | APPROVE / REJECT / DISCUSS |
|---|---|---|---|---|---|---|
(ACUTE first, then MAJOR, DISCUSS, MINOR; leave the decision column blank)

## 5 items for <owner_first_name> to verify personally
(heading name from rotation.json `owner_first_name`, which is kept out of the repo. 5 findings chosen at random, with a fixed seed; if there are fewer than 5 findings, all of them plus random OK items to make 5. For each: ID, what to check, where.)

## Sampled items
(every sampled ID with domain, reason, final verdict: OK items are listed here, not in the sign-off list)

## Method
Agent 1 (n batches) and Agent 2 (independent; re-checked f flags + 10 OK items). Sources consulted. Limits: anything that could not be verified.
```

Write in plain British English. Quote item text exactly. Every MAJOR, ACUTE or DISCUSS row needs a source link and date.

### 8. Record
```
node .claude/skills/amac-audit/audit-tool.mjs record --sample "<sample json>" --report "<report md>" --findings F --major M --acute A [--sweep "Domain A|Domain B" --why "1 ACUTE; MAJOR 4/60 = 6.7%"]
```

This adds the sampled IDs to the ledger, sets `last_audit` and `last_commit`, stores the sweep marks and advances `next_stage`.

### 9. Tell the user
Give the report path, the summary line and any FULL SWEEP. Do not offer to apply fixes in the same run.

## Files
- `audit-tool.mjs` (this folder): rotation, sampling and ledger. Reads the repo; writes only under `AMAC_AUDIT_DIR` (default `C:\Users\user\Documents\AMaC-audits`).
- `scripts/content-integrity.mjs` (repo): mechanical checks. These are not clinical review.
- Bleep cards and Starting Out cards are not in the rotation.
