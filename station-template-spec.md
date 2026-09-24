# AMaC Station Template — Specification v1.1 (pilot)

**Status:** Pilot. Apply to four stations first (see §11). Do not convert the full bank until the pilot passes.
**Applies to:** MRCS Part B first. PLAB 2 and UKMLA CPSA use the same skeleton with their own exam configuration (§8).

---

## 1. Purpose

A station is used four ways. The current bank mixes them into one long page. This template stores each station once, as structured data, and renders four views from it.

| View | When the candidate uses it | What it shows |
|---|---|---|
| **Learn** | First encounter | Everything except the examiner script |
| **Partner** | Practising with a colleague | Brief for the candidate; examiner script and tick-box grid for the partner |
| **Solo** | Alone, timed | Brief → timer → self-score against grid → then models |
| **Revise** | Final week | 60-second recall card only |

## 2. Non-negotiable rules

1. **One master record per station.** Views are generated, never hand-written.
2. **The scoring grid is the single source of truth.** Every mark trigger, failure, model line and examiner prompt must point to a grid row.
3. **Every grid row has all four band descriptors:** Fail, Borderline, Pass, High-performance. No blank or "—" cells.
4. **Every row's Pass and High-performance cells must be demonstrated by at least one tagged line in the models.** Every Fail cell must be demonstrated by the Fail model or a failure entry. A Borderline model is optional.
5. **Each fact lives in one place.** Other sections reference it; they don't restate it.
6. **Knowledge removal test:** if removing a fact would not change performance in this station, it doesn't belong.
7. **Every clinical claim that carries a number or a specific action cites a named source with a version date.**
8. **Candidate-facing text contains no internal review language** (reviewed, sign-off, pending, reviewer names, editorial notes).
9. **No framing the exam doesn't use:** no "instant fail", "kill zone" or "hurdle". Unsafe moves are called **Safety-critical**. The card header shows **Domain** (Applied Knowledge / Applied Skills) and **Station type**.

The validator (`validate-station.js`) enforces rules 3, 4 and the structural parts of 2, 7 and 8.

## 3. Master station sections

Word budgets are ceilings, not targets.

| # | Section | Rules | Budget |
|---|---|---|---|
| 1 | **Header** | ID, exam, domain (Applied Knowledge / Applied Skills), station type (controlled, §4), broad content area, time, reading time, guideline version date(s), related stations | — |
| 2 | **Candidate brief** | Exactly what is read outside the door. No hints, no diagnosis in the task unless the real format would give it. | 120 |
| 3 | **Before you walk in** | Three fields only: *Frame* (one line), *Biggest trap*, *First phrase/action* | 60 |
| 4 | **Station flow** | Functional phases only (e.g. Assess → Interpret → Act → Respond to prompts). Timing is added **only** when supported by published format information. | 40 |
| 5 | **Scoring grid** | 5–10 rows. Each row: exam domain tag, short label, Fail / Borderline / Pass / High-performance descriptors, optional source reference | 25 per cell |
| 6–8 | **Fail / Pass / High-performance performances** (Borderline optional) | Examiner–candidate dialogue. Each candidate line tagged with the grid row(s) and band it demonstrates. Lines that move a candidate up a band are highlighted in Learn view automatically. Performances must differ in substance, not just length. | 150 / 200 / 300 |
| 9 | **Why marks are lost** | 3–5 entries, each tied to one grid row, stating the wrong move and the consequence | 40 each |
| 10 | **Recovery lines** | Station-specific only. Generic lines live in the shared library (§6). | 3 lines |
| 11 | **Knowledge you need** | Short facts, each passing the removal test | 150 |
| 12 | **60-second recall card** | Fixed format (§7) | 80 |
| 13 | **Sources** | Named guideline/syllabus, version date, URL, what it supports | — |

**Partner-only content** (not shown in Learn/Solo until after the attempt):

- Examiner opening instruction
- **Reveals:** findings released only when the candidate asks or performs the relevant step (each with its trigger)
- **Push questions** in order, each tied to a grid row
- **Curveballs** (max 4), each tied to a grid row, with the safe answer

## 4. Station type (controlled vocabulary)

The type decides the internal performance structure. Do not force every station into the same sequence.

| Type | Performance built around | Partner script emphasis |
|---|---|---|
| `examination` | Sequence of physical steps, findings, presentation | Reveals triggered by each step |
| `applied-knowledge` | Progressive examiner-supplied findings and push questions | Push-question ladder |
| `communication` | Patient/relative agenda, structure, checking understanding | Actor brief: hidden concerns and cue triggers |
| `history` | Focused history, red flags, summary | Actor brief: facts released on the right question |
| `procedural` | Preparation, safety, technique, aftercare | Step checklist with safety-critical steps flagged |
| `data-interpretation` | Systematic read, key abnormality, action | Data released in stages |

For `communication` and `history` stations, the Partner view shows an **actor brief** in place of clinical reveals.

## 5. Scoring grid rules

- Rows describe **observable behaviour**, not knowledge in the abstract ("States a palpable pulse does not exclude ACS", not "Understands pulses").
- Fail = unsafe or omitted. Borderline = safe but incomplete, hesitant or prompted. Pass = safe and competent. High-performance = specific, prioritised, anticipates the examiner.
- Each row carries an **exam domain tag** from the exam configuration (§8).
- Grid order follows the station flow, so the grid doubles as the Partner tick-sheet.

## 6. Shared recovery-line library (site-wide)

One page, three types, linked from every station:

- **When you blank:** "I'd like to structure this around immediate safety, assessment, escalation and definitive management."
- **When challenged:** "That wouldn't exclude the diagnosis, because…" / "I'd still want to…, because…"
- **When asked "anything else?":** "Yes — I'd also consider [complications / safety-netting / documentation / who else to inform]."

Stations add at most three recovery lines specific to their content.

## 7. 60-second recall card (fixed format)

| Field | Content |
|---|---|
| **THINK** | What can kill or disable the patient |
| **SAY** | The diagnosis/escalation phrase to say early |
| **DO** | First three actions |
| **NUMBERS** | 1–3 numbers worth remembering (with source) |
| **TRAP** | What falsely reassures candidates |
| **FINISH** | Definitive management |

## 8. Exam configuration

Each exam defines its domains and band labels once; stations reference them.

**MRCS Part B (confirm wording against current Intercollegiate candidate guidance before locking):**

- Domains: `clinical-knowledge`, `clinical-skill` (clinical and technical skill), `communication`, `professionalism` (includes decision-making, situational awareness and judgement, organisation, planning, patient safety).
- Each station is marked out of 20 against a structured mark sheet, plus a global rating of **pass / borderline / fail**.
- Stations are 9 minutes with a reading minute outside the door.
- **Band note:** the real overall rating is pass / borderline / fail. AMaC's Fail, Borderline and Pass bands mirror it. **High-performance** is AMaC's teaching label for what lifts a pass towards full marks; it is not an official grade, and the Learn view says so once.

**PLAB 2 / UKMLA CPSA:** define their own domains from the GMC marking scheme before any station is converted. Do not reuse MRCS domains.

## 9. Data model

Each station is one JSON file validated against `station.schema.json`. Key ideas:

- `grid[].id` is the anchor everything else references.
- Model lines carry `tags: [{ "row": "G3", "band": "high" }]` (bands: `fail`, `borderline`, `pass`, `high`).
- `reveals`, `push`, `curveballs`, `failures` each carry a `row`.
- `sources[].id` is referenced by grid rows and knowledge items.

The viewer (`station-viewer.html`) renders all four views from this file. Guideline updates are made once, in the data.

## 10. Validator checks

`node validate-station.js <file.json>` fails the station if:

1. Any required field is missing or the station type is not in the vocabulary.
2. Any of the four grid cells in a row is empty or "—", or `header.domain` is not Applied Knowledge / Applied Skills.
3. Any grid row's Pass or High-performance descriptor has no tagged model line.
4. Any grid row's Fail descriptor has no tagged Fail-model line or failure entry.
5. Any reveal, push question, curveball, failure or knowledge item references a non-existent row or source.
6. A grid row with a number in it has no source reference.
7. Candidate-facing text contains review-process terms (reviewed, reviewer, unreviewed, pending/under/awaiting review, review status, sign-off, editorial note). Clinical uses such as "review the patient" are allowed. Also fails on "instant fail", "kill zone" or "hurdle".
8. A word budget is exceeded by more than 20% (warning, not failure).
9. Curveballs exceed 4, or the recall card is missing a field.

## 11. Pilot

Convert four deliberately different stations:

1. `examination` — a limb or neurological examination
2. `applied-knowledge` — MB-099 (done: `MB-099.json`)
3. `communication` — consent or breaking bad news
4. `procedural` or `data-interpretation` — whichever the bank has

**Pass criteria** (all four must be yes for every pilot station):

- Does it make the candidate perform better? (Test with 2–3 candidates, not by author judgement.)
- Is it shorter than the current version, with no loss of grid content?
- Can a partner who has never seen it run the station from the Partner view alone?
- Can the candidate revise it in under 60 seconds from the recall card?

If all pass, this becomes the locked AMaC master template.
