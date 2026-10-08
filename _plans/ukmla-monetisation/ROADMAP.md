# AMaC UKMLA — Paid-Platform Roadmap (parked until monetisation)

**Status:** PARKED. Do not build any of this until Ahmed decides to move the site to paid access.
**Saved:** 8 Oct 2026
**Sources:** `source/UKMLA_IMPROVEMENT_PROJECT.docx` (an exported AI chat, about 333,000 words), plus Claude's review of it against the live site.
**Not served on the website:** folders starting with `_` are not published by GitHub Pages. The repository itself is **public**, so anyone browsing it on GitHub can read this file.

Items marked **[Claude]** were added in the review and are not in the original document. Everything else comes from the document, de-duplicated (it repeats most ideas 4–6 times) and cleaned up.

---

## 0. Read this first: the guardrails

These override any idea below.

1. **Never promise or predict a pass.** No "pass guarantee" and no "X% chance of passing". Any readiness indicator is an *AMaC learning indicator* only.
2. **Independence statement on every paid page:** "AMaC is an independent educational resource. It is not affiliated with, endorsed by or approved by the GMC. AMaC content is mapped to publicly available GMC frameworks and supported by relevant UK clinical guidance." (The GMC states that it does not endorse or monitor commercial courses.)
3. **Never imply access to confidential exam material or official mark schemes.** Say "AMaC examiner-style marking grids", not "the standard" or "how it is actually assessed".
4. **Don't compete on price or question volume.** Volume is a commodity: PassMedicine, Quesmed and others all claim 10,000–12,000+. Sell "know what to fix, fix it, prove it".
5. **AI never invents clinical guidance.** Any AI feature answers only from AMaC's own reviewed content and cited sources, and admits when it doesn't know.
6. **Existing policies still apply:** the content-merge policy (never remove live content without an explicit order), the cross-exam policy (adapt between UKMLA and PLAB, don't copy-paste) and the Master Cards design standard.
7. **[Claude] Build small.** The document's specification (modules 001–030) is written for a large engineering team. Version 1 should be the smallest thing people will pay for, and the specification should be used as a reference, not a checklist.

---

## 1. Technical prerequisites for any paid version  [Claude]

GitHub Pages cannot restrict content to paying users. A paid version needs:

| Need | Typical options (decide at the time — check current prices) |
|---|---|
| User accounts / login | Supabase Auth, Firebase Auth, Clerk, Auth0 |
| Database (progress, attempts, subscriptions) | Supabase (Postgres), Firebase |
| Payments and subscriptions | Stripe (Checkout + Customer Portal), Paddle, Lemon Squeezy (merchant-of-record options simplify international sales) |
| Content protection | Paid questions served from the server only to paying users. Today the whole bank ships as public `.js` files, which anyone can download. |
| Hosting | Can stay static (GitHub Pages / Cloudflare Pages / Netlify) for public pages, plus serverless functions for paid content |
| Legal | Privacy notice, terms of sale, cookie notice, UK GDPR / ICO registration as a data controller, refund policy |

**Migration point [Claude]:** progress currently lives in browser localStorage (`amac_q_state`, `amac_plab1_q_state`, handled by `amac-progress.js`). The existing backup-file format should be importable into a new account so current free users don't lose their history.

**Decide early [Claude]:** what stays free forever, so the switch doesn't feel like a bait-and-switch to the audience built during the free phase. One option is "everything free today stays free; new intelligence features are paid".

---

## 2. Positioning and messaging

- **Core proposition:** "The UKMLA preparation system that tells you what to study, makes you practise it, identifies why you're failing, and trains you to perform safely under exam pressure."
- **Tagline candidates:** "Know what you need. Practise it. Understand your mistakes. Fix them. Prove you're ready." / "Know where you stand. Fix your mistakes. Train to perform. Know when you're ready."
- **Market gap:** "The clinical performance platform for becoming a safe UK doctor", connecting UKMLA → CPSA → F1 → practice instead of stopping at question → answer → score.
- **Build around the 3 GMC MLA themes:** readiness for safe practice, managing uncertainty, and holistic person-centred care.
- **"Don't revise everything":** the final weeks are about eliminating avoidable mistakes. This fits the "room itself" philosophy.
- **Biggest competitor isn't another question bank.** It's candidate confusion: "which of 28 tools do I use?"
- **The AMaC method (the page's spine):** ASSESS → LEARN → PRACTISE → PERFORM → PROVE (an alternative 8-step version runs ASSESS, LEARN, PRACTISE, ANALYSE, REPAIR, RETEST, MASTER, READY).
- **Keep the big numbers, but demote them** to supporting evidence below the method.
- **"Why AMaC?" block (5 points):** built around the GMC blueprint · learn from every mistake · train the way you'll be examined · practise safe clinical reasoning · know when you're ready.
- **"Who is AMaC for?"** UK students, IMGs (UKMLA / PLAB), F1 starters.
- **Make independence a strength:** not owned by a university, not a GMC product, written by practising doctors.
- **Testimonials structured around outcomes** (what changed for them), never "I passed thanks to AMaC" as a guarantee.

---

## 3. Free tier (the shop window)

Purpose: prove quality before asking for money.

- **Free diagnostic (the main free entry point):** 25–50 questions with results by system and professionalism, and "see your weak areas". This replaces the "free chapter" as the main call to action.
- **"Try 10 real AMaC questions — no card required"**, then the diagnostic, then unlock the full profile.
- Limited AKT questions (a daily allowance, e.g. 20/day) · a small flashcard set · a GMC map preview · selected CPSA stations · a basic performance report.
- **Don't force the diagnostic** on everyone. Allow "skip, just let me practise".
- **[Claude]** Keep the shared clinical reference shelf (DVLA, antibiotics, ECG/ABG etc.) free. It's good for search-engine traffic and goodwill, and it's reference material rather than the product.

---

## 4. Paid Version 1: the core (build first)

The document's own top priorities, in order:

| # | Feature | Why |
|---|---|---|
| 1 | Free diagnostic → account → profile | Conversion |
| 2 | **AMaC Profile / candidate dashboard** | Core product |
| 3 | **GMC Content Map tracking** (every question and station mapped; coverage + accuracy per area) | Foundation, trust |
| 4 | **Weakness Loop**: IDENTIFY → UNDERSTAND → FIX → APPLY → TRANSFER → RETEST → MASTER | Differentiation |
| 5 | **"What should I do now?"**: one button that builds today's session (e.g. 45 min = 20 weak-topic Qs + 10 previously wrong + 10 spaced-review cards + 5 reasoning Qs) | Usability, retention |
| 6 | **First-attempt / unseen-question analytics** (repeat attempts inflate accuracy) | Honest readiness |
| 7 | Personalised study plan (exam date + hours available per week) | Retention |
| 8 | Timed AKT mocks in a real **exam mode**, separate from **learning mode** | Expected by the market |
| 9 | **Error taxonomy**: classify *why* a question was wrong (knowledge gap, misread stem, missed red flag, wrong next step, guideline outdated, timing, overthinking) | Underpins the Weakness Loop |
| 10 | **Mistake library** + "retest what I got wrong" | Retention |
| 11 | **Spaced review / forgetting**: "You haven't revised this in 42 days" | Retention |
| 12 | Clinical governance + versioning + "Report an error" | Trust |

**Dashboard design rule:** answer three questions only. Where am I? What am I weak at? What should I do next? Don't build another giant analytics screen.

**Example dashboard:** a table by system showing coverage %, accuracy % and a 🟢🟠🔴 status, then "Your 10 biggest gaps" and "Today's recommended session".

**Also in or near V1:**
- **Exam distance** (days to exam) and **study time available**, which drive the plan.
- **"Busy medical student" mode**: 15-minute sessions.
- **Confidence rating** on answers ("sure / unsure / guess") to catch lucky guesses and overconfidence.
- **Before vs now view**: show improvement.
- **Continue where I left off**.
- **Reward improvement, not volume.** Use streaks carefully; never reward mindless question-grinding.
- **Onboarding**: exam, date, background (UK student / IMG), weekly hours.
- **[Claude]** A "readiness" view shown as *domain strengths* (knowledge, reasoning, safety, professionalism, timing) rather than one headline %. If a single number is ever shown, label it "AMaC readiness indicator — not a prediction of your result" and hide it until there is enough data (e.g. 300+ first-attempt answers and one full mock).

---

## 5. Paid Version 2: the differentiation

### AKT / reasoning modes
- **"Why is the other answer wrong?"** explained for every option.
- **Clinical discriminators**: the one feature that separates the two closest options.
- **"Commonest / Most dangerous / Next step"** drill mode.
- **"Same case, different question"**: one vignette, several decision points.
- **"Change one thing"** / **"The question changed — did your decision change?"**: alter one variable (age, pregnancy, eGFR, allergy) and re-answer.
- **"Safe answer vs clever answer"**.
- **"What would an F1 do?"**
- **Managing-uncertainty mode** and **"I don't know" training**: when to safety-net, escalate or seek senior help.
- **Guideline-conflict** and **"Guideline changed"** alerts on questions affected by NICE/BNF/DVLA updates.
- **Prediction traps**: common distractor patterns.
- **"One-minute medicine"** micro-revision and **"Explain it like I'm about to sit the exam"** summaries.
- **"I keep getting this wrong"**: triggers a repair mini-lesson.
- **"Teach me from my mistakes"**: a lesson built from the candidate's own wrong answers.
- **"Same topic, AKT → CPSA"** clinical threads that link a question to its station.
- **Dynamic cases** (later): cases that evolve with the candidate's choices.
- **"UK practice vs exam answer"** notes where they differ.

### CPSA performance system
- **A CPSA performance dashboard** that measures *behaviours* (clinical, communication, safety, patient-centredness, reasoning, timing), not just marks.
- Fail / Pass / High-performance transcripts. **Keep these; they're a major differentiator.**
- **Recovery training** (expand Recovery Scripts and the Recovery Room into an AMaC signature feature): what to do when a station goes wrong.
- **Simulators:** safety-netting · escalation ladder · delegation · speaking up · team conflict · "What would you do if your senior is wrong?" · colleague scenarios.
- **Bad actor / difficult patient levels** and a **patient agenda detector** (hidden agenda).
- **Silence simulator** (tolerating pauses).
- **"Say it naturally"** coaching. **Accent is never the target.**
- **Patient-centredness score**.
- **Doctor vs examiner mode**: the same station seen from both sides.
- **"Consent isn't just a checkbox"**, **"Legal ≠ ethical ≠ GMC standard"**, and the **GMC four-domain** (Good medical practice) mode/dashboard.

### Professional practice
- Turn "Ethics & Law" into **Professional Practice & Patient Safety**: GMC standards, safety, capacity, safeguarding, teamwork and speaking up.

### Exam run-in
- **Final Fortnight / Last 72 hours / Last chance before exam** mode: a 14-day plan, full mocks, the exam-day card. (A product in its own right, and it links to the PLAB 2 *Final Fortnight* brand.)
- **8-week UKMLA programme** as a structured plan.
- **Three preparation modes:** early (learn), middle (practise and repair), final (perform).
- **Exam logistics** kept separate from clinical content.

---

## 6. Paid Version 3+: premium / later

- **AMaC CPSA Voice (the 2nd-biggest product idea):** the candidate speaks, an AI patient responds with a hidden agenda, then an **examiner report** (Clinical / Communication / Safety / Patient-centredness / Reasoning / Timing scores, plus critical omissions such as "didn't safety-net Y"). Then "Repeat station: the patient will be more challenging this time". Needs constrained AI and validated feedback.
- **Candidate speech analysis** (pace, fillers, structure), never accent.
- **AMaC Clinical Coach:** source-bound AI, *not* a generic chatbot tutor. It answers only from AMaC content and links to sources.
- **"AMaC Intelligence":** the name for the personalisation layer underneath everything ("what you know, forget, get wrong, why, how you perform under time pressure, where you are unsafe, what to do next"). The document calls this the single biggest thing to build.
- **AMaC On Call / F1 Bridge (the 3rd-biggest idea):** "From passing the UKMLA to surviving your first night on call." Includes a bleep simulator, night-shift mode, prioritisation, handover, prescribing under pressure, the deteriorating patient and an F1 readiness score. **Links to the existing `foundation.html` and Bleep Cards.**
- **Candidate Passport:** a longitudinal AMaC profile that carries from UKMLA into F1 and beyond.
- **Brand ladder:** AMaC UKMLA (pass) → AMaC F1 (start safely) → AMaC MRCP / MRCS (progress) → AMaC Clinical Performance.
- **UK doctor dictionary** / UK clinical English (abbreviations, ward language, bleep etiquette).

---

## 7. Pricing and packaging

### Packaging: keep it simple (the document's later and better recommendation)
- **Free:** diagnostic, limited AKT, selected CPSA stations, selected tools, basic profile.
- **Full:** full AKT + full CPSA + GMC map tracking + Weakness Loop + plan + mocks + all tools.
- **Premium (later):** CPSA Voice, AI Clinical Coach, advanced performance analysis, dynamic cases, intensive plan.

The document's earlier alternative split AKT and CPSA into separate plans (AKT £29.99 / 3 months, £44.99 / 6 months, £59.99 / 12 months; CPSA £34.99 / 3 months, £49.99 / 6 months; Complete UKMLA £69.99 / 6 months). **[Claude]** The simpler single product is better: forcing an AKT-vs-CPSA choice at checkout loses sales.

### Competitor prices quoted in the document (from the 2026 AI chat; NOT verified, re-check before setting prices)
- Quesmed: AKT £39.99/yr; AKT+CPSA £59.99/yr
- UKMLARevisions: £25/month, £36/3 months, £49/6 months
- MLA Prep: £9.99/month; £34.99 lifetime
→ Position slightly above the cheapest and sell the *system*, not the bank.

### Pricing ideas worth keeping
- **Pass-Date Protection:** one free access extension if the candidate's exam date changes materially. Unusual in the market and cheap to offer.
- **UK medical student price** with a verified university email.
- **University / cohort licences:** cohort dashboard, diagnostic, mocks, institutional analytics. **No individual-student surveillance** without a proper privacy and consent framework; sell *institutional* learning analytics.
- **Student society partnerships:** discount codes, "AMaC UKMLA Diagnostic Week".
- **Referral:** "invite 3 friends → unlock 30 days of CPSA/AI practice". Never lifetime access.
- **Free email funnel:** the diagnostic result is emailed, then a short sequence follows.
- **[Claude]** Offer a **one-off fixed-term pass** (e.g. 3 or 6 months, no auto-renew) alongside subscriptions. Exam candidates dislike forgotten renewals, and it reduces refund disputes.
- **[Claude]** IMG audience: consider regional pricing (purchasing-power adjustment) for PLAB / UKMLA IMG candidates. Check payment-provider support at the time.

---

## 8. Trust, quality and clinical governance (sell this as a feature)

Some of these can be done **now, on the free site**. See section 11.

- **Public change log** of corrections and updates.
- **"Report a clinical issue"**: one click on every question and station.
- **Correction transparency** and an **AMaC correction policy** (target response times).
- **Content freshness system:** "Last reviewed: [date] · Source: NICE / BNF / DVLA / GMC" on every reference item and question.
- **"Current 2026" as a selling point:** mapped to the September 2026 GMC MLA content map (a *live* document; e.g. PCOS was replaced by PMOS).
- **GMC Content Map monitoring process**, and the same for NICE, BNF and DVLA changes, with an internal "clinical change alert" that flags affected questions.
- **Version questions** rather than silently editing them; keep history.
- **Retired-questions system**.
- **AMaC Editorial Standards** page (`standards.html` already exists; extend it) and a **Candidate Safety & Trust** page.
- **AMaC Evidence Grade** per explanation (guideline-backed vs expert consensus).
- **Item statistics once there are paying users:** evidence-based difficulty, question discrimination, option analysis (flag distractors nobody picks, or that strong candidates pick), and a duplicate-content detector (`_tools/` already has AKT duplicate checks).
- **AI assists editors, never replaces them.**
- **Editorial CMS**, not just a question file (only at scale; a spreadsheet plus version dates is enough for a long time).

---

## 9. Website / UX structure for the paid site

**Navigation the document proposes:**
- **Prepare:** Diagnostic · Study plan · GMC Map
- **AKT:** Questions · Mocks · Flashcards · Clinical reasoning · Weaknesses
- **CPSA:** Stations · Voice practice · Actor simulator · Master Cards · Recovery · Communication
- **Professional Practice:** GMC · Safety · Ethics/capacity · Safeguarding · Teamwork · Speaking up
- **Clinical Reference:** Prescribing · Antibiotics · ECG · ABG · DVLA · Reference values
- **My Progress:** Dashboard · Mastery · Weaknesses · Readiness · Study plan
- **Final Sprint:** 14-day plan · Full mocks · Exam-day card

**Alternative grouping of existing tools:** LEARN · PRACTISE · PERFORM · FIX · READY. Call it a "preparation system with 5 pathways", not a list of "tools".

**Internal architecture, "five engines":** Knowledge · Blueprint (GMC map) · Reasoning · Performance · Readiness. Every feature belongs to one.

**UX principles:**
- The candidate always knows where they are and what's next.
- Reduce cognitive overload: the homepage should NOT show every feature.
- Integrate the reference tools into the workflow (link from explanations) rather than presenting a "reference dump".
- Mobile is a primary product.
- Accessibility built in; performance matters.

---

## 10. Marketing, SEO and metrics

**SEO**
- Build pages around the GMC Content Map (one page per presentation or condition, with free teaching content and links into practice).
- Informational SEO ("how to pass UKMLA CPSA", "AKT vs PLAB 1") and honest comparison pages.
- Don't make every page a sales page; build internal links aggressively.

**Content marketing**
- "UKMLA Trap of the Week" · "One GMC sentence" · "One F1 mistake" · an email strategy and free email funnel.

**Metrics**
- Acquisition: landing → diagnostic starts → registrations → conversion.
- Learning: first-attempt accuracy, repeat accuracy, time per question, confidence, error type.
- Retention: sessions/week, return rate, completed recommendations, weakness improvement.
- CPSA: stations attempted/completed, repeats, performance domains.
- Commercial: free→paid, trial→paid, cancellation, renewal, feature usage, NPS.
- **North-star metric:** *weaknesses improved per active candidate* (the % of identified weaknesses that later improve).

---

## 11. Can be done NOW on the free site (no payments needed)

Wording fixes confirmed still live on `ukmla.html` on 8 Oct 2026 (needs an explicit order before changing; see the content-merge policy):

| Current | Suggested |
|---|---|
| Documentation Coach: "free marks on every station" | "A commonly missed opportunity to demonstrate safe documentation" |
| Normal Values: "complete UK NHS ranges" | "Common UK reference ranges and clinically important thresholds", plus "always use the lab's own range" |
| "thinking and communicating like a UK-trained doctor under pressure" | "thinking and communicating safely in UK clinical practice" |
| "the voice of confidence that passes stations" (if still present) | "clear, safe communication under pressure" |
| "UKMLA isn't about knowing more medicine" (if still present) | "UKMLA isn't only about knowing medicine. It's about applying knowledge safely, managing uncertainty and communicating under pressure." |
| "the standard, and how it is actually assessed" (if still present) | "Written around the GMC MLA framework and the skills candidates need to demonstrate" |
| "Examiner marking grids" | "AMaC examiner-style marking grids" |
| "Instant Fail Atlas" | Brand decision for Ahmed: keep the name and add "potential critical error" framing on cards, or rename to "Critical Safety Atlas" |
| "NHS Language Coach" | "UK Clinical Communication Coach" (broaden: patients, colleagues, escalation, handover, referral, telephone) |
| "Ethics & Law" | "Professional Practice & Patient Safety" |
| DVLA / antibiotics pages | Add "Last checked: [date] · Source: DVLA / NICE / local policy" |
| Hard-coded "429 conditions and 220 presentations" | "Mapped to the current GMC MLA content map" (show live counts from `data/gmc-mla-map.json`) |

Also possible now:
- Public change log page and a report-an-error link (mailto or form) on questions and stations.
- A free diagnostic, mistake list and "retest wrong answers" using localStorage. `mla-coverage.js` already computes coverage from `amac_q_state`, so the profile can be built on it.
- Reorganise `ukmla.html` around the method, with numbers demoted.
- Use the reasoning formats in section 5 when writing new question and station batches.

**[Claude] Count check:** the live page says 10,953 AKT / 293 CPSA; earlier records said 10,252 / 238. Verify with `_tools/build-counts.py` before any marketing uses them.

---

## 12. What NOT to build (from the document, agreed)

- A generic AI tutor chatbot.
- More questions purely to beat competitors on volume.
- Copies of competitors' AI features (e.g. Quesmed's).
- Any "official GMC" language, pass guarantees or pass predictions.
- Individual-student surveillance for universities.
- Unlimited extensions or lifetime-for-referrals deals.
- The full enterprise editorial / item-banking platform (spec modules 028–030) before there is real scale.
- The document lists more to defer: AI tutor, dynamic cases, adaptive learning and FY1 tools until the UKMLA core is excellent.

---

## 13. The engineering specification inside the source document

`source/UKMLA_IMPROVEMENT_PROJECT.md` contains detailed specifications (user stories, acceptance criteria, data models, APIs, events). Line numbers refer to that `.md` file. **Use these as reference designs for a developer, not as a build list.** Module 029 was still marked "amend before freeze" when the chat ended.

| Module | Topic | Approx. line | V1? |
|---|---|---|---|
| — | Product spec, wireframes (homepage, dashboard, profile, GMC map, question page, CPSA station, session player), data dictionary | 12400–18100 | ✅ read first |
| 001 | GMC Content Map data model | 18136 | ✅ |
| 002 | GMC map versioning fields | 18342 | ✅ |
| 003 | Content-mapping admin UI | 18393 | later |
| 004 | Migrating and mapping existing content | 18446 | ✅ |
| 005 | Attempt categorisation (first / repeat / retest) | 18498 | ✅ |
| 006 | Error classification data model | 18547 | ✅ |
| 007 | Mastery calculation engine | 18593 / 20000 | ✅ (simplified) |
| 008–028 | Fully expanded set | 21529 onward | — |
| 009 | Diagnostic results page | 27254 | ✅ |
| 010 | Diagnostic conversion flow | 29624 | ✅ |
| 011 | Candidate Profile dashboard | 32284 | ✅ |
| 012 | Recommendation engine ("what next") | 28458 | ✅ (simple rules first) |
| 013 | Manual override of recommendations | 39396 | later |
| 014 | GMC coverage card / coverage snapshots | 18198, 41298 | V2 |
| 015 | Learning mode vs exam mode toggle (AKT) | 18200 | ✅ |
| 016 | Weakness Loop | 28467 | ✅ |
| 017 | Homepage / positioning and conversion | 53410 | ✅ |
| 018 | Pricing, free→paid conversion, entitlements, subscriptions | 54340 | ✅ |
| 019 | Spaced repetition / review engine | 61110 | ✅ |
| 020 | Mock exams / exam simulation | 61307 | ✅ |
| 021 | Performance analytics | 61314 | V2 |
| 022 | Notifications / study reminders | 61322 | V2 |
| 023 | Confidence-rating prompt in the early list (20955); later reused as the CPSA performance system (rubrics, scoring, feedback) | 20955, ~76000 | V2 |
| 024 | Personalised study plan / daily command centre | 89887 | ✅ (simple) |
| 025 | Clinical knowledge / learning library | 97719 | V2 |
| 026 | Reasoning tutor / AI teaching assistant | 100059 | V3 |
| 027 | Unified UKMLA / PLAB readiness journey | 102468 | V2 |
| 028 | Content authoring, editorial workflow, QA | 107082 | at scale |
| 029 | Question bank / item banking (statistics, exposure, retirement) | 117981 | at scale |
| 030 | Canonical question-content service | 136560 | at scale |

---

## 14. Things to verify when the time comes

- Competitor prices and features (all quoted from an AI chat via third-party blogs, mainly iatroX).
- The GMC MLA content map version in force, and its condition and presentation counts.
- Payment provider, VAT handling and data-protection obligations: take professional advice (outside this document's scope).
- That `amac-progress.js` backup files import cleanly into accounts.
