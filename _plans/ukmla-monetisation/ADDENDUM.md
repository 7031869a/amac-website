# Addendum to ROADMAP.md — second full pass (8 Oct 2026)

This is a second, line-by-line read of the whole source file (`source/UKMLA_IMPROVEMENT_PROJECT.md`), checked against the live repository. It holds only things **not already in ROADMAP.md**, or concrete details for items ROADMAP.md names in one line. Line numbers refer to the source `.md`.

**NOW** = possible on the free static site (localStorage OK). **PAID** = needs accounts, a server or AI. Nothing here is an instruction to change the live site; every change needs an explicit order (content-merge policy).

---

## A. Problems found on the live site (verified in the repo on 8 Oct 2026)

| # | Issue | Where | Fix (source line) |
|---|---|---|---|
| A1 | Schema.org slogan **"Think like an examiner. Pass with confidence."** contradicts guardrail 1 (no pass promises) | 71 HTML pages (shared head block) | "Think like an examiner. Perform with confidence." (the footer already says this) |
| A2 | Eyebrow **"CLINICAL & WRITTEN · THE UK LICENSING STANDARD"** blurs AMaC with the GMC | `ukmla.html` | "UKMLA · AKT + CPSA PREPARATION" (8976, 3713–3731) |
| A3 | **No independence / not-GMC statement** on the main UKMLA pages | `ukmla.html`, `cpsa-stations.html`, `footer.js` (only `standards.html` and `questions.html` have one) | One line in `footer.js` plus a link to `standards.html` (4277–4286, 12476) |
| A4 | **"free marks"** wording | `ukmla.html`, `tools.html`, `documentation.html`, `osce.html`, `recovery-scripts.html` | See ROADMAP §11 |
| A5 | **"Complete UK NHS ranges"** | `ukmla.html`, `tools.html`, `foundation.html` | See ROADMAP §11 |
| A6 | **"…isn't about knowing more medicine"** | `ukmla.html`, `foundation.html` | See ROADMAP §11 |
| A7 | **"examiner-led preparation" / "the UKMLA standard"** imply official examiner involvement | "examiner-led" on 30 files, "the UKMLA standard" on 6 | "examiner-style", "UKMLA-aligned" |
| A8 | AKT trap texts say a wrong option **"scores zero"**, which implies an official SBA mark scheme | `questions.html` ×2, `plab1-questions.js` ×5, `atlas-cards.js` ×1 | "is the unsafe / incorrect choice" |
| A9 | **UKMLA gate sends candidates to PLAB 2-branded tools.** All 10 linked tools have "PLAB 2" in their `<title>`: route-finder, study-planner, exam-morning, fail-recovery, recovery-scripts, nhs-language, frameworks, examcoach, documentation, sbar-generator | those 10 pages | Neutral titles ("UKMLA CPSA & PLAB 2") or UKMLA variants (cross-exam policy) |
| A10 | `nhs-language.html` title: **"Phrases That Pass PLAB 2"** (a pass claim) | `nhs-language.html` | "Clear UK clinical phrases for PLAB 2 & UKMLA CPSA" |
| A11 | **Exam mode in the AKT bank is cosmetic.** It only hides the learning-objective box; answers and explanations still show after each question | `questions.html` (`applyExamModeCard`) | Real exam mode: answers lock, results at block end, countdown, "Question 5 of 60" (45601–45730, 16191) |
| A12 | **"Try again" deletes the first attempt** (`resetAnswer` → `delete state.answered[qid]`), so first-attempt accuracy is lost and `mla-coverage.html` can show "Secure" from re-answers | `questions.html` | Keep the first answer and a timestamp; report first-attempt accuracy separately (17412, 17824) |
| A13 | "Mark Triggers — what ticks the examiner's sheet" and "fail triggers" imply the official marking | `cpsa-stations.html` | "Potential critical errors" / "AMaC examiner-style marking" (14345–14370) |
| A14 | No "last reviewed" date or source on the reference pages | `antibiotics`, `dvla`, `normal-values`, `prescribing`, `ecg-abg` | "Last checked: [date] · Source: …", plus "Always check current DVLA guidance" (5290–5294) |
| A15 | No skip-link or `<main>` landmark | `ukmla.html` and about 64 other pages | Accessibility pass (11583–11603) |

**Count update:** the live site now shows **10,959 AKT / 403 CPSA**. The figures in ROADMAP.md §11 (10,953 / 293 vs 10,252 / 238) are out of date. `_tools/build-counts.py` is the source of truth.

**Already done on the live site** (the source recommends these, and they exist): a "Where are you right now?" stage picker and a "Give me 20 minutes" set on `ukmla.html`; a learning/exam toggle and a wrong-answers filter on `questions.html`; an Attempt → Examiner view → Repair → Retry demo.

---

## B. Wording and copy

**Extra replacements for ROADMAP §11**
- "Do This, Never Do That" → **"Safe Practice — Common Pitfalls"** or "Do This — Avoid This". The GMC says Good medical practice is not a set of rigid rules. Card labels: High-risk mistake · Usually unsafe · Usually appropriate · Depends on context · Escalate/seek advice (3158–3189, 5205–5222).
- "Say This / Avoid This" → "Safe ways to phrase it / Potentially problematic phrasing / Why it matters". Don't teach that one magic sentence passes (3191–3218).
- Do This/Never Do That blurb: replace "the conduct that scores" with the benefit (9010).
- Atlas blurb: "instant-fail moves" → "high-risk mistakes and unsafe responses" (9020). Third name option: **"High-Risk Station Atlas"** (2237).
- "Antibiotic Guide — first-line antibiotics" → "First-line UK antimicrobial choices, with alternatives and key safety considerations" (2324–2329).
- DVLA → "DVLA medical standards — current requirements and notification rules" (2344).
- Normal values caveat: "Reference ranges may vary between laboratories and patient groups; always use the range supplied by the relevant laboratory" (5257).
- 429/220 sentence → "Every AMaC question is mapped to the current GMC MLA Content Map, so you can see what you've covered and where your gaps remain" (5239).
- "YOUR UKMLA TOOLKIT" → "Everything you need to prepare" (9001).
- "Know when you're ready" → "See how your preparation is progressing" (15800).
- Move the IMG/PLAB line and the PLAB 1 and Foundation cross-links lower on `ukmla.html` so they don't interrupt the UKMLA flow (8992, 9026–9028).

**Never claim "We cover 100% of the GMC Content Map"** unless every item is mapped, verified and maintained. Verify "Every AKT question is linked to them" before keeping it (8200–8209, 8998).

**Phrase list — DON'T USE** (5108–5124, 11793–11823, 53528–53538): GMC-approved / endorsed / certified · official GMC preparation · actual or recalled GMC exam questions · official GMC stations · "these are the stations you will get" · guaranteed pass · "Pass the UKMLA first time" · "The only UKMLA system you need" · "AI knows exactly what you need" · instant-fail rule · scores zero.
**USE:** MLA Content Map · AKT · CPSA · "UKMLA-aligned" · "CPSA-style station" · "examiner-style" · "Uses GMC Good medical practice as a professional standards reference".

**Station disclaimer** (89041–89063; have it checked legally): "AMaC practice stations are independently authored educational simulations and are not official GMC examination stations."
**Clinical disclaimer** (13037): "Exam preparation content is not a substitute for local clinical policy or senior advice."

**Principles and brand lines**
- Three principles reworded plus a fourth: Think like an examiner · Speak like a doctor · **Perform under pressure** (replaces "Perform with confidence") · **Know where you stand** (2635–2674).
- Brand promise: "We will show you exactly what you need to improve and train you to perform safely under UKMLA conditions" (2716–2727).
- Taglines: "Stop asking 'What should I revise?' Start asking 'What do I need to fix?'" (9231) · "Know where you stand. Know what to fix. Be ready to perform." (9571) · "Don't just count questions completed. Measure what you have actually improved." (9453) · "Prepare. Perform. Practise safely." (6505).

---

## C. UKMLA gate page (`ukmla.html`) — new sections (NOW)

1. **What the stations cover:** "403 CPSA stations — History • communication • acute care • professionalism • examination • prescribing • data interpretation • telephone" (2472–2484).
2. **"Typical question bank vs AMaC" table** (no competitor names): see score → see *why* wrong · revise topics → target weaknesses · do mocks → analyse performance · practise OSCE → speak, interact, recover · read GMC map → track coverage · study alone → daily plan · finish questions → prove mastery (3733–3759).
3. **"What do you need help with?" picker**, 6 doors: learn · improve my reasoning · practise CPSA · *I keep failing* · my exam is soon · am I ready? (4309–4337). Builds on the existing stage picker.
4. **"Train for the moments candidates struggle with"**: angry patient · forget structure · don't know the answer · hidden concern · realise you made an error · run out of time · need to escalate. Links to `recovery-room.html` (4171–4192, 13255–13270).
5. **"Clinical reasoning, not just recall"**: "A UKMLA question is not always asking 'What disease is this?'" It may ask for the safest next step, what you must exclude, what would change your decision, when to escalate (4194–4212).
6. **CPSA strip:** "Don't just read the station. Perform it." READ → PLAN → SPEAK → REACT → RECOVER → REVIEW → REPEAT (7244–7288, 9380–9418).
7. **Reference shelf regrouped into 5 clusters:** Clinical reasoning (ECG, ABG, exam, normal values) · Safe management (prescribing, antibiotics, acute care, DVLA) · Professional practice · Communication (frameworks, SBAR, documentation) · Performance (recovery, spoken, actor traps) (9470–9503).
8. **Main button that changes with progress** (read `amac_q_state`): new visitor "Start your diagnostic" / diagnostic done "View your results" / active "Continue studying" / inactive "Resume preparation" (54062–54075).
9. **UKMLA FAQ block with FAQPage schema**, e.g. "Is AMaC suitable for PLAB?", "How does AMaC differ from a conventional question bank?" (53940–53970).
10. **Mobile one-tap block:** "What do you need to do? 10 min / 20 min / 45 min / CPSA station" (10980–10998).
11. **Independence and trust strip** linking to `standards.html` (4277–4286).

---

## D. AKT bank (`questions.html`) — new ideas

| Idea | Specifics | Lines | Feasibility |
|---|---|---|---|
| Real exam mode + UKMLA AKT mock runner | Blocks of 20/40/60 (learning) and 60/120 (exam); countdown; flag and review unanswered before submit; reuse `plab1-exam-runner.html` | 45601–45730, 65030–65060 | NOW |
| Protect the first attempt | See A12 | 17412 | NOW |
| Four-tier accuracy | familiar practice / first attempt / unseen / timed unseen; readiness weighted to the last | 10275–10303 | NOW (partly) |
| "Practise 1–2 similar questions" after a wrong answer | Match the same GMC presentation; never pad with poor matches. Copy: "These questions test the same condition where you made an error" | 50480–50565 | NOW |
| GMC mapping panel on each answered question | Presentation, condition and themes, plus "Practise this condition" (data already in `data/akt-mla-map.json`) | 13761–13767 | NOW |
| Links from explanations to reference pages | "Need help interpreting the ECG? → ECG Coach"; antibiotics, prescribing, DVLA; then "Try another ABG question →" | 3534–3557, 7023–7044 | NOW |
| Self-tag why an answer was wrong | Knowledge · **Recognition** (knew it, didn't recognise it) · Reasoning · Reading · Safety · Timing · **Strategy** (changed a correct answer) · Other. Site suggests one, candidate confirms | 1495–1525, 12846–12866 | NOW |
| "Why did you choose that?" | recognised diagnosis / guideline / eliminated others / guessed / misread / unsure | 10043–10067 | NOW |
| "What single thing would have made you choose correctly?" | recognise red flag / know guideline / distinguish diagnoses / prioritise safety / read stem differently | 1529–1549 | NOW |
| Confidence calibration | Optional tap (very unsure → very confident); 4 groups; **"incorrect + confident" = top priority**; "Confidence 92% vs accuracy 68%" | 2066–2086, 10001–10041, 15662–15680 | NOW |
| Answer-change tracking | "You changed 8 answers; 5 went correct → incorrect" | 2088–2106, 10212–10246 | NOW |
| Three explanation depths | 10-second answer / 60-second why / deep dive with why-wrong per option | 1426–1440 | NOW (content) |
| New explanation sections for new batches | **Safety point** and **UK practice point** ("in real practice, management may depend on…") | 13748–13759, 7470–7496 | NOW (content rule) |
| Six "WHY?" questions as an explanation format | why wrong / why right / why tempting / why it would change / why the examiner cares / why it's safe | 3761–3779 | NOW (content) |
| Clinical-reasoning prompts | know / don't know / dangerous / must exclude / do now / can wait / escalate when / what would change management | 347–363, 3283–3301 | NOW (content) |
| Clinical context switching | Patients A–D: which first? (an AKT question format) | 3458–3479 | NOW (content) |
| Practise by GMC capability | Safe practice, managing uncertainty, patient-centred care, escalation… | 307–325, 3036–3070 | NOW once tagged |
| "UK Clinical Context" badge | NICE / BNF / GMC / RCUK / DVLA per item | 906–929 | NOW |
| Four modes | LEARN "Teach me" · PRACTISE "Test me" · EXAM "Simulate the real thing" · REVIEW "Show me what I still get wrong" | 11847–11867 | NOW |
| Capped review queue | "Due: 247 · Recommended today: 20" | 62738 | NOW |
| "Why am I seeing this?" on each recommendation | "Recommended because you recently struggled with acute deterioration" + "Change focus" | 11869–11890, 15763–15782 | NOW (simple rules) |
| One-minute medicine mix | 5 questions + 3 flashcards + 1 trap + 1 safety point + 1 CPSA phrase | 1449–1461 | NOW |
| "I still don't understand this" ladder | simple explanation → scenario → analogy → table → similar Q → retest | 1465–1489 | PAID (or hand-authored) |
| Recurring-mistake patterns | "choosing definitive investigation before stabilisation"; "Practise recurring mistakes →" | 11177–11219 | PAID (tags NOW) |
| "Learn more" topic pages | objectives + sections with time estimates; prerequisites are suggestions, not gates | 98445–98480 | NOW |

---

## E. Progress and coverage (`mla-coverage.html`)

- **Show the evidence behind each label:** "Clinical reasoning — Developing · 42 attempts · 68% correct · 17 reasoning errors" (14333, 16075).
- **States:** Not tested / Learning / Developing / Secure. The current page lacks a "practised but weak" state.
- **"Coverage ≠ mastery"** shown explicitly (100% coverage vs 63% mastery). Tooltip: "Coverage shows what you have attempted. Mastery shows where you have demonstrated consistent, safe performance" (4437–4461, 15651).
- **Five mastery criteria:** correct · correct on a different question · correct in a different context · delayed recall · no repeated safety error (4465–4481).
- **Rules for wording statistics:** minimum sample sizes; no trend below 5; "Lowest-performing area with sufficient recent data", not "your weakest area"; percentage points vs relative change; median for timing. Good: "Accuracy increased from 68% to 75%". Never: "Your clinical ability increased by 11%" (68120–68990).
- **Colour is never the only signal:** 🟢🟠🔴 always gets a text label (accessibility, 11583–11603).
- **Readiness disclaimer text:** "This is an AMaC learning indicator based on your recent performance, coverage, mastery, mocks and CPSA practice. It is not a GMC prediction or guarantee of examination outcome" (4565–4567).
- **Diagnostic results copy:** "24/35 (69%) — a snapshot of performance on this diagnostic, not a prediction of your UKMLA result"; "Breakdown based on X of Y questions"; list a weakness only with enough questions (16650, 28403–28407, 29115).

---

## F. CPSA (`cpsa-stations.html`, `station-viewer.html`)

- **Attempt first, then reveal:** title, time and brief with a "Start" timer; grid and transcripts hidden → "End station" → self-mark against `markingGrid` → reveal → Retry / Similar station / relevant recovery module. `mock-circuit.html` already has timer and checklist code to reuse (13840–13866, 15150–15170).
- **Optional reflection:** "What went well?" / "What would you change?", stored but never scored (88263–88267).
- **Nine behaviour domains for self-rating:** Structure, Information gathering, Clinical reasoning, Patient-centredness, Safety, Communication, Checking understanding, Closure/safety-net, Timing (10330–10372).
- **Feedback-writing rules for new stations:** observable and station-specific ("In this station, you moved to management before checking the patient's concerns", never "You are bad at communication"). No "you would pass/fail". Result words: Strong / Satisfactory / Developing / Needs improvement. Safety-critical and repeated misses first; never 40 points at once (85605–88316).
- **Post-station analysis format:** You missed / You did well / You sounded (rehearsed, too fast, jargon-heavy) / Next exercise (5384–5414).
- **Universal recovery sequence:** **Stop → acknowledge → reassess → prioritise → communicate → safety-net.** Short form: "Pause → acknowledge → recover → continue safely". Triggers include forgot allergy, missed red flag, jargon, interrupted patient, haven't answered the task, actor challenges you, misunderstood task, ran out of time, examiner interrupts (3237–3263, 8344–8380).
- **Critical Safety Atlas card structure:** Situation → Risk → Mistake → Safer response → What to say → How to recover (+ "what the examiner may be concerned about"). Ten category tags: patient safety, consent, capacity, safeguarding, confidentiality, boundaries, escalation, prescribing, communication, infection control (589–598, 5189–5201, 6967–6981).
- **Simulator scoring parts:**
  - **Safety-netting:** red flags / timeframe / who to contact / emergency escalation / understanding.
  - **Escalation ladder:** L1 manage yourself → L2 discuss with senior → L3 urgent senior review → L4 emergency response, then "Why?"
  - **Delegation:** do yourself / delegate / registrar / escalate.
  - **Speaking up**, getting harder: registrar defensive → ward busy → consultant unavailable → "don't make trouble".
  - **Patient-centredness:** agenda, preferences, concerns, shared decision-making, understanding, empathy, circumstances, agreement.
  
  (3302–3452)
- **Bad-actor levels 1–6:** cooperative → anxious → angry → hidden agenda → challenging → "examiner nightmare". The candidate isn't told the level (1758–1784).
- **Silence metric:** "You interrupted after 1.7 s". **Doctor vs examiner** has three views: what the patient heard / what the examiner scored / what you thought you said (1724–1748). PAID.

---

## G. Professional practice (`ethics-law.html`) — NOW as content

- **Full topic list:** consent & capacity · confidentiality · safeguarding · boundaries · errors & **duty of candour** · speaking up · teamwork · delegation · **discrimination** · leadership · **conflicts of interest** · patient-centred care · fitness to practise · raising concerns (3090–3118, 7088–7116). The site has 8 frameworks; candour, discrimination and conflicts of interest are scattered across station content.
- **Colleague scenarios:** registrar asks beyond competence · colleague repeating a prescribing error · nurse concern dismissed · discriminatory comment · too unwell to work (1941–1949).
- **UK Clinical Communication Coach:** add "Difficult conversations" as an eighth section. Dictionary entries such as "I'm not happy with this patient" (what it means) and "Can you review this patient?" (how urgent) (5321, 1893–1903). Strapline: "Know what to say. Know what to avoid. Know how to recover." (9325–9373).

---

## H. Trust and governance — NOW

- **`standards.html` → "Clinical & Editorial Standards"** with a 10-step "How AMaC creates a question": blueprint selection → clinical authoring → evidence selection → clinical review → editorial review → exam-quality review → publication → candidate feedback → guideline monitoring → revision/retirement. Also say who writes and reviews, how references are chosen, how changes are detected, how fast errors are corrected, and **what AI is not allowed to do** (6204–6233, 7404–7428, 10529–10556, 1217–1243).
- **Report-an-issue link on every question and station:** a mailto with the question ID and category pre-filled (incorrect answer · outdated guidance · incorrect explanation · ambiguous · Content Map issue · typo · broken media · other), plus "Our clinical team will review this" (3618–3636, 7390–7400).
- **"Was this explanation useful?"** If no: unclear · too long · doesn't explain distractors · clinically confusing · outdated · too easy/hard (6252–6278, 11545–11569).
- **Change-log page format:** "AMaC Clinical Update — October 2026", grouped GMC / NICE / BNF / AMaC with counts ("23 reviewed, 5 amended, 2 retired, 7 added"); "Recent corrections: Q1234 — answer amended following guideline update"; a "Recent clinical updates" teaser on `ukmla.html` (3587–3650, 7430–7468).
- **Badge "Updated for the September 2026 MLA Content Map"** and "Content Map version: Sep 2026" per item, **only after a genuine check** (9929–9944).
- **Source-type tag per explanation:** GMC / NICE / BNF / DVLA / RCUK / other UK / "AMaC educational interpretation". Softer Evidence Grade labels: Guideline-based / Standard UK practice / Context-dependent / Exam-focused teaching point (14400–14440, 12222–12232, 3654–3676).
- **Withdrawn vs Retired:** severity CRITICAL / HIGH / NORMAL / EDITORIAL; rapid withdrawal; "never silently continue serving known unsafe content". Retired notice: "RETIRED — removed because the underlying guidance/practice has changed", followed by the replacement (100896–110685, 6235–6250). `_withdrawn/` already exists in the repo.
- **Per-question governance fields:** Author / Clinical reviewer / Editorial review / Reference check / Last reviewed / Next review / Version (4972–5012).
- **Content-quality lessons from the PLAB-NEW-155 review:**
  - Cite guidelines precisely ("NICE NG104 — Pancreatitis"), and don't call guidance last updated in 2020 "new".
  - Give interpretable findings ("lipase >3× upper limit of normal").
  - Make severity explicit.
  - Warn examiners against anchoring on the first diagnosis.
  - "Distinct from…" should list genuinely competing diagnoses.
  - Use natural-English titles.
  
  (42992–43470)
- **Review checklists by content type:**
  - **AKT:** accuracy, answer key, distractor plausibility, guideline alignment, ambiguity, safety.
  - **CPSA:** realism, task clarity, actor instructions, safety-critical criteria, acceptable alternative performances, rubric coherence.
  
  (110135–110211)
- **Monthly feedback review:** most-reported issue, most confusing topic, most requested tool, commonest CPSA weakness (11571–11581). Can be done manually from emails now.

---

## I. Study planning — NOW (static)

- **8-week programme:** W1 diagnostic · W2 medicine · W3 surgery · W4 paeds/O&G/psych · W5 professionalism/prescribing/emergencies · W6 weakness repair · W7 mocks · W8 simulation (819–851).
- **Exam-distance phases:**
  - 12 weeks: build knowledge
  - 8 weeks: target weaknesses
  - 4 weeks: timed practice
  - 2 weeks: mocks plus high-risk topics
  - final week: performance and safety
  - At 7 days, stop starting big new topics.
  
  Session sizes 10 / 20 / 45 / 90 min, each with a defined mix (10096–10174).
- **Final Fortnight:** D-14 diagnostic mock … D-7 full mock · D-6 mistake repair · D-5 CPSA · D-4 professional practice · D-3 high-risk topics · D-2 light · D-1 no heavy learning (5915–5957).
- **Last 72 hours:** 72 h no new major topics → 48 h weak areas → 24 h consolidation → morning minimal load → 5 min before "don't learn medicine" (2108–2134). Extends `exam-morning.html`.
- These would need a **UKMLA version of `study-planner.html`** (currently PLAB 2, 3 fixed plans).
- **Keep/amend verdicts on existing tools:** Frameworks "keep, but don't encourage rote scripts"; Route Finder folded into onboarding; Fail Recovery made central; Study Planner rebuilt around performance; SBAR and Prescribing expanded (2729–2805).

---

## J. Site-wide

- **Breadcrumb trail:** "UKMLA → AKT → Cardiology → Arrhythmias → Question 8/20". It should feel like a tool, not a brochure (11000–11012).
- **Accessibility checklist:** keyboard navigation, contrast, text size, screen-reader labels, accessible tables, audio alternatives, colour never the only indicator, timed content accessible (11583–11603). See A15.
- **Performance / offline:** fast question transitions, cached questions, light mobile assets; a service worker is possible on GitHub Pages (11605–11623).
- **Don't-build additions:** fancy animations, a large video library, hundreds more flashcards, an in-platform social feed before the core works (11990–12000). The external Facebook Group plan is unaffected.
- **Homepage clutter to avoid:** "AI-powered" everywhere, 20 feature cards, meaningless badges, unexplained graphs. **Never invented social proof**: accurate numbers until real, permissioned testimonials exist (53916, 54228–54250).

---

## K. Marketing and SEO

- **Problem-based SEO pages:** "I keep failing UKMLA questions" · "I know the medicine but get the next step wrong" · "How do I practise CPSA alone?" · "What if I go blank in a CPSA?" · "How do I recover after a mistake in an OSCE?" (5663–5682).
- **Page lists:** 17 commercial slugs and 15 informational guides (UKMLA 2026 changes, how long to revise, UKMLA vs finals, what to do if you fail…) (5585–5661). Keyword list at 10797–10833 (UKMLA exam dates, scoring, for international graduates…).
- **Topic-page template** for "UKMLA [topic]": what to recognise · first step · key investigations · common traps · what could appear in AKT / CPSA · safety issues, then "Practise this topic: 27 AKT Qs · 2 CPSA stations". Internal-link chain example: hyperkalaemia → AKT → ECG → AKI → prescribing → CPSA → map topic (10791–10958).
- **Honest comparison page:** "Best UKMLA question banks in 2026: which resource is best for which candidate?" (5684–5712).
- **Social formats:** weekly question with "Why 73% of candidates choose the wrong option"; "Trap #17: it's asking for the next safest action, not the diagnosis"; "One F1 mistake: don't write 'Patient stable'" (5714–5756).
- **Email (PAID / mailing list):**
  - Weekly rhythm: Mon biggest trap / Wed reasoning case / Fri weakness report (5758–5788).
  - Day-by-day funnel: Day 0 diagnostic → Day 1 results → Day 2 fix weakest → Day 4 reasoning → Day 6 CPSA → Day 8 mock → Day 10 report → Day 12 offer (5790–5826).
  - Tone: no guilt ("Ready to continue where you left off?", not "You've fallen behind"); lock-screen text kept generic (71675–72525).

---

## L. Later / paid details for existing ROADMAP items

- **F1 Bridge line:** "You've learned the medicine. Now learn how to use it on the ward." (3493). F1 readiness areas: acute assessment, prioritisation, escalation, prescribing, handover, communication, safety (5521–5553). It ties in with the 2026 UKFP curriculum revision.
- **"What would an F1 do?"** must separate exam preparation from real practice and local policy (12237).
- **Speech analysis** measures clarity, structure, pace, jargon, interruption, signposting, checking understanding and safety language, never accent (12241).
- **University feedback** must never override the GMC map (6280–6292).
- **Competitor figures to re-check:** Quesmed 450+ OSCE / 340+ AI stations / 15,000 flashcards; MLA Prep 7,000+ SBAs; UKMLARevisions 5,400+; a PMC study on the most-used UKMLA resources (1003–1006); positioning table (4844–4868).
- **Correction to ROADMAP §5:** "Prediction traps" (2087) means **answer-change tracking**, not "common distractor patterns". See section D.
