// AMaC Instant Fail Atlas — card data (170 cards)
// Public build. All cards clinically and examiner reviewed.

// Category chips for the board (keys must match each card's `cat`).
window.ATLAS_CATS = [
  { key: "all",          label: "All" },
  { key: "danger",       label: "Clinical Danger" },
  { key: "comms",        label: "Communication" },
  { key: "ethics",       label: "Ethics & Professionalism" },
  { key: "prescribing",  label: "Prescribing" },
  { key: "consent",      label: "Consent & Capacity" },
  { key: "bbn",          label: "Breaking Bad News" },
  { key: "safeguarding", label: "Safeguarding" },
  { key: "remote",       label: "Remote & Telephone" },
  { key: "suicide-mh",   label: "Suicide & MH" }
];

window.ATLAS_CARDS = [
  {
    id: "chest-pain-anchored-anxiety",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "The anxious chest pain",
    trap: "Young, breathless, visibly panicking \u2014 it looks like anxiety, and the moment you settle on that story you stop looking for anything that could kill them. The plausibility of the easy diagnosis is the trap.",
    fails: [
    { lead: "Anchors on anxiety early.", body: "Fixes on a psychological explanation before serious cardiac, PE or aortic causes are excluded. (App 1B, item 90)" },
    { lead: "Reassures before excluding.", body: "Tells the patient it is \u2018just panic\u2019 while the dangerous differentials are still open." },
    { lead: "No safety-net.", body: "Sends them away with no clear advice on what would mean coming straight back. (App 1B, item 95)" }
    ],
    museum: "She was twenty-four and hyperventilating, and everything fit anxiety so neatly that the candidate reassured her, taught her breathing exercises, and never once excluded the things that quietly fail the station.",
    rule: "Never diagnose anxiety until serious pathology is excluded."
  },
  {
    id: "abdo-pain-better-after-analgesia",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "Better after analgesia",
    trap: "The pain settles after you give analgesia, and the relief feels like reassurance \u2014 as if a calmer patient must be a safer one. Comfort is not the same as safety, and that slip is the trap.",
    fails: [
    { lead: "Reads pain relief as improvement.", body: "Treats a falling pain score as evidence the abdomen is benign, fixating on the comfortable picture. (App 1B, item 90)" },
    { lead: "Downgrades concern.", body: "Steps back from surgical review or imaging, skipping the red-flag screen the presentation still needs. (App 1B, item 70)" },
    { lead: "Stops reassessing.", body: "Abandons serial examination once the patient is settled, missing the evolving picture." }
    ],
    museum: "The analgesia worked beautifully; the patient stopped wincing, the candidate relaxed, and a surgical abdomen sat quietly behind a comfortable face until the station was already lost.",
    rule: "Pain relief never excludes surgical disease."
  },
  {
    id: "the-nice-parents",
    cat: "safeguarding",
    exam: "both",
    kicker: "Safeguarding \u00b7 CPSA",
    title: "The nice parents",
    trap: "The parents are warm, articulate and entirely plausible, and the more you like them the harder it becomes to hold a safeguarding thought. Their credibility quietly becomes your reassurance \u2014 which is exactly backwards.",
    fails: [
    { lead: "Assesses the adults, not the child.", body: "Lets the parents\u2019 manner stand in for the child\u2019s safety and overlooks the protection red flags. (App 1B, item 36)" },
    { lead: "Drops the inconsistency.", body: "Notices a history that does not fit the injury, then talks themselves out of it because the parents seem so reasonable." },
    { lead: "Never escalates.", body: "Decides it cannot be a safeguarding case rather than escalating the concern to a senior or safeguarding lead. (App 1B, item 40)" }
    ],
    museum: "They were charming, concerned, the kind of parents anyone would trust, and the candidate did trust them \u2014 and the one detail that did not add up was never spoken aloud.",
    rule: "Safeguarding is about the child, never how trustworthy the adults seem."
  },
  {
    id: "unwise-decision-not-incapacity",
    cat: "consent",
    exam: "both",
    kicker: "Capacity \u00b7 CPSA",
    title: "The unwise decision",
    trap: "The patient chooses something you think is plainly wrong, and the urge is overwhelming to treat the bad choice as proof they cannot decide. Disagreeing with the outcome feels like assessing capacity \u2014 but it is not.",
    fails: [
    { lead: "Equates unwise with incapable.", body: "Uses the foolishness of the decision as the evidence for lacking capacity. (App 1B, Consent & Capacity Collapse, items 1\u201312)" },
    { lead: "Skips the actual test.", body: "Declares incapacity without supporting the patient or checking they can understand, retain, use or weigh, and communicate the decision. (App 1B, item 9)" },
    { lead: "Overrides a capacitous refusal.", body: "Pushes past a valid \u2018no\u2019 because the consequences seem unacceptable. (App 1B, item 6)" }
    ],
    museum: "He refused the admission everyone knew he needed, and because the choice looked reckless the candidate declared him to lack capacity \u2014 and failed a station testing whether they knew the difference.",
    rule: "An unwise decision is not incapacity."
  },
  {
    id: "smiling-patient-suicide",
    cat: "suicide-mh",
    exam: "both",
    kicker: "Mental Health \u00b7 CPSA",
    title: "The smiling patient",
    trap: "The patient is calm, pleasant, even smiling. It feels almost rude to push on suicide when they seem so composed. Their presentation reassures you \u2014 and that reassurance is the trap.",
    fails: [
    { lead: "Reads mood at interview as risk.", body: "A composed or smiling presentation never excludes suicide risk. (Appendix 1B, item 43)" },
    { lead: "Softens or skips the direct question.", body: "Lets the pleasant manner talk them out of asking plainly about intent and plan." },
    { lead: "Documents \u2018low risk\u2019 on appearance.", body: "Records reassurance based on demeanour rather than a structured risk assessment." }
    ],
    museum: "He chatted warmly, smiled, said all the right things. The candidate relaxed, and never really asked \u2014 and failed a station that was about the question, not the mood.",
    rule: "Mood at interview never excludes suicide risk. Ask plainly regardless."
  },
  {
    id: "testicular-torsion-delay",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "Time to investigate",
    trap: "An adolescent with sudden testicular pain, and the gentler differentials \u2014 epididymitis, a strain, \u2018it\u2019ll settle\u2019 \u2014 are seductive precisely because they let you slow down. Torsion punishes hesitation, and treating it as something to investigate at leisure is the trap.",
    fails: [
    { lead: "Treats it as routine.", body: "Works it up as epididymitis or muscular pain instead of a surgical emergency on the clock. (Vol 2, Ch 30 \u2014 Acute Urological & Scrotal Emergencies)" },
    { lead: "Delays the surgical referral.", body: "Orders scans that waste the narrow window rather than escalating immediately. (App 1B, item 20)" },
    { lead: "Reassures on a soft history.", body: "Lets an atypical or intermittent story talk them out of urgent referral." }
    ],
    museum: "The pain had eased a little by the time he was seen, so the candidate arranged an ultrasound \u2018to be sure\u2019 \u2014 and the clock, which was the whole station, ran out unnoticed.",
    rule: "Sudden testicular pain is torsion until a surgeon says otherwise \u2014 refer now, do not investigate first."
  },
  {
    id: "ectopic-the-calmer-story",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "The calmer story",
    trap: "Some abdominal pain, a little bleeding, an early-pregnancy history \u2014 and it can be made to sound like a threatened miscarriage if you want it to. Wanting the reassuring version is the trap.",
    fails: [
    { lead: "Discharges a possible ectopic.", body: "Sends home a woman of reproductive age with abdominal pain without excluding ectopic. (App 1B, item 15)" },
    { lead: "Skips the pregnancy test.", body: "Builds a plan around a benign assumption rather than the one test that changes everything." },
    { lead: "Anchors on miscarriage.", body: "Settles on the less dangerous diagnosis because it fits the calmer story. (App 1B, item 90)" }
    ],
    museum: "Bleeding in early pregnancy, she said, and the candidate counselled her gently about miscarriage \u2014 warm, thorough on everything except the diagnosis that can rupture.",
    rule: "Abdominal pain in a woman who could be pregnant is ectopic until excluded."
  },
  {
    id: "sepsis-waiting-to-look-septic",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "Not septic enough yet",
    trap: "The patient does not look dramatically unwell, the observations are only a little off, and \u2018a bit run down\u2019 is an easy story to accept. Sepsis rarely announces itself, and waiting for it to look obvious is the trap.",
    fails: [
    { lead: "Misses the sepsis red flags.", body: "Reads borderline observations as reassurance rather than a reason to act. (App 1B, item 22)" },
    { lead: "Does not escalate.", body: "Plans a review \u2018later\u2019 instead of treating and calling for senior help now. (App 1B, item 20)" },
    { lead: "Treats the symptom, not the picture.", body: "Manages the presenting complaint while the systemic warning signs go unjoined." }
    ],
    museum: "Slightly tachycardic, slightly warm, otherwise chatting \u2014 the candidate planned a review in a few hours, and the station was already a fail for the escalation that never came.",
    rule: "Suspect sepsis early and escalate \u2014 do not wait for the patient to look septic."
  },
  {
    id: "stroke-last-known-well",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "The unhurried history",
    trap: "The deficit is improving, or the patient seems stable, and there is a quiet pull to take a careful, unhurried history. Stroke is a race against the clock, and treating it as unhurried is the trap.",
    fails: [
    { lead: "Misses the stroke red flags.", body: "Fails to recognise an acute focal deficit as a time-critical emergency. (App 1B, item 14)" },
    { lead: "Never fixes the clock.", body: "Does not establish the last-known-well time \u2014 and if the patient woke with the deficit, that time is bedtime, not waking." },
    { lead: "Delays escalation.", body: "Keeps assessing instead of activating the stroke pathway immediately. (App 1B, item 20)" }
    ],
    museum: "She took a meticulous history, beautifully structured, and never once asked when he was last seen well \u2014 and the door to treatment had quietly closed while she wrote.",
    rule: "In suspected stroke, establish the last-known-well time and escalate immediately."
  },
  {
    id: "anaphylaxis-tidy-before-treating",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "Getting it exactly right",
    trap: "It looks alarming, and the urge is to reach for the perfect sequence \u2014 confirm, gather, get it exactly right \u2014 before acting. Anaphylaxis punishes the pause, and getting tidy before treating is the trap.",
    fails: [
    { lead: "Hesitates before treating.", body: "Delays first-line treatment while gathering more history or seeking certainty. (App 1B, item 19)" },
    { lead: "Wrong priority order.", body: "Reaches past airway and breathing for secondary steps in a collapsing patient. (App 1B, item 18)" },
    { lead: "Does not call for help.", body: "Manages alone instead of summoning the team early." }
    ],
    museum: "He recognised it correctly, said the word out loud, then talked through the differential \u2014 and the examiner watched a treatable emergency go untreated while the candidate explained it.",
    rule: "Recognise anaphylaxis and treat immediately \u2014 airway and adrenaline first, questions later."
  },
  {
    id: "hyperkalaemia-admire-the-ecg",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "Admiring the ECG",
    trap: "The result is back, the ECG looks abnormal, and there is a tempting instinct to study it, characterise it, be sure before you trouble anyone. Hyperkalaemia is a results-station killer, and pausing to admire the abnormality instead of acting on it is the trap.",
    fails: [
    { lead: "Ignores a critical result.", body: "Treats a dangerously high potassium or its ECG changes as something to monitor rather than act on. (App 1B, item 25)" },
    { lead: "Does not escalate.", body: "Notes the abnormality without calling for urgent senior help. (App 1B, item 20)" },
    { lead: "Over-investigates.", body: "Seeks repeat samples or causes before treating the immediate danger." }
    ],
    museum: "He read the peaked T waves correctly, described them well, and asked for a repeat sample \u2018to confirm\u2019 \u2014 and the station failed on the escalation the first result already demanded.",
    rule: "Suspected severe hyperkalaemia with ECG changes is an act-now emergency \u2014 treat and escalate, do not just observe."
  },
  {
    id: "cardiac-arrest-hands-off-the-chest",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "Thinking with your hands off the chest",
    trap: "Under pressure the instinct is to think, to check, to find the cause first. Cardiac arrest rewards immediate, uninterrupted compressions, and stopping to reason is the trap.",
    fails: [
    { lead: "Poor or interrupted CPR.", body: "Delivers compressions of poor quality or pauses them unnecessarily. (App 1B, items 100\u2013101)" },
    { lead: "Stops to deliberate.", body: "Breaks from the chest to discuss causes \u2014 remember the 4 Hs and 4 Ts without lifting your hands." },
    { lead: "Does not lead.", body: "Fails to call the arrest, summon the team, or keep the rhythm of the resuscitation. (App 1B, item 103)" }
    ],
    museum: "She knew the algorithm cold and recited it beautifully \u2014 while her hands kept lifting off the chest to point at the monitor, and the one thing that mattered, good compressions, never quite happened.",
    rule: "Start and continue high-quality compressions \u2014 think without taking your hands off the chest."
  },
  {
    id: "opioid-naloxone-before-airway",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "Antidote first",
    trap: "Naloxone is the obvious answer, and giving it first feels like decisive medicine. Reaching for the antidote before securing the airway is the trap.",
    fails: [
    { lead: "Naloxone before the airway.", body: "Jumps to the reversal agent while airway and breathing are unaddressed. (App 1B, item 18)" },
    { lead: "Skips A\u2013E.", body: "Abandons the structured assessment of a collapsed patient in the rush to reverse." },
    { lead: "Forgets it can wear off.", body: "Treats the dose as the end of the problem, with no plan for re-narcotisation as the naloxone \u2014 shorter-acting than the opioid \u2014 wears off." }
    ],
    museum: "He called for naloxone the instant he heard \u2018found unresponsive\u2019 \u2014 a confident, correct-sounding move \u2014 and never opened the airway of a patient who was not breathing.",
    rule: "Airway and breathing first \u2014 naloxone supports resuscitation, it does not replace it."
  },
  {
    id: "dka-the-other-explanation",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "The other explanation",
    trap: "The vomiting, the abdominal pain, the heavy breathing each have an innocent explanation, and taken one at a time they lead you anywhere but the pancreas. Explaining the pieces separately is the trap.",
    fails: [
    { lead: "Misses the diagnosis.", body: "Attributes the vomiting or breathlessness to a simpler cause and never tests for ketoacidosis. (App 1B, item 90)" },
    { lead: "Treats without finding the trigger.", body: "Corrects the picture without asking what precipitated it \u2014 infection, missed insulin, a new diagnosis." },
    { lead: "Underestimates how sick they are.", body: "Reads an alert, talking patient as stable and delays escalation. (App 1B, item 20)" }
    ],
    museum: "Each symptom had a tidy explanation, and the candidate addressed them one by one \u2014 a thorough, reasonable consultation that walked straight past the diagnosis tying them all together.",
    rule: "Think DKA in any unwell patient with diabetes \u2014 and always ask what set it off."
  },
  {
    id: "major-haemorrhage-managing-alone",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "Managing it alone",
    trap: "The bleeding feels like something you can get on top of yourself if you just act fast enough, and calling the major haemorrhage response can feel like an overreaction. That reluctance to escalate is the trap.",
    fails: [
    { lead: "Delays the call.", body: "Tries to stabilise locally before activating the major haemorrhage pathway. (App 1B, item 20)" },
    { lead: "Leaves the patient to fetch things.", body: "Steps away from an unstable patient instead of keeping help at the bedside. (App 1B, item 23)" },
    { lead: "Underestimates ongoing loss.", body: "Anchors on the current numbers while the bleeding continues unseen." }
    ],
    museum: "He worked quickly and competently, certain he could hold it \u2014 and the call that would have brought blood and seniors came minutes after it would have mattered.",
    rule: "Catastrophic bleeding is a team call \u2014 activate the major haemorrhage response early."
  },
  {
    id: "sickle-labelled-before-assessed",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "Labelled before assessed",
    trap: "A young patient in severe pain asking for strong analgesia trips an ugly, automatic suspicion \u2014 drug-seeking \u2014 and that label arrives before the assessment does. Letting the bias decide the plan is the trap.",
    fails: [
    { lead: "Under-treats the pain.", body: "Withholds or slows analgesia because the request feels like drug-seeking rather than a sickle crisis. (Vol 2, Ch 40 \u2014 Haematology & Oncology Emergencies)" },
    { lead: "Misses sepsis in the crisis.", body: "Treats fever in a sickle patient as part of the pain rather than a red flag. (App 1B, item 22)" },
    { lead: "Dismisses the patient\u2019s own account.", body: "Overrides someone who knows their own disease better than the candidate does." }
    ],
    museum: "She said it was the worst crisis she\u2019d had, and something in the candidate decided otherwise \u2014 the analgesia came slowly, grudgingly, and the station failed on a judgement made before a single question.",
    rule: "Treat sickle pain as real and urgent \u2014 and never let \u2018drug-seeking\u2019 mask sepsis."
  },
  {
    id: "red-eye-just-conjunctivitis",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "Just conjunctivitis",
    trap: "Most red eyes are harmless, and the odds make \u2018just conjunctivitis\u2019 a comfortable landing place. The sight-threatening few hide in that comfort \u2014 and reaching for the common answer first is the trap.",
    fails: [
    { lead: "Misses the dangerous red eye.", body: "Treats a painful red eye with reduced vision as conjunctivitis, missing acute angle-closure, anterior uveitis, scleritis or a corneal ulcer. (Vol 2, Ch 28 \u2014 Eye Emergencies)" },
    { lead: "Skips the red-flag screen.", body: "Does not ask about pain, visual loss or photophobia \u2014 the features that separate benign from blinding. (App 1B, item 70)" },
    { lead: "Delays referral.", body: "Manages in primary care when the eye needs same-day ophthalmology." }
    ],
    museum: "The eye was red and he reached for the common diagnosis, reassuring and prescribing drops \u2014 and the pain and the failing vision that did not fit were never chased.",
    rule: "A painful red eye with reduced vision is sight-threatening until proven otherwise \u2014 refer same-day."
  },
  {
    id: "comms-interrupted-opening",
    cat: "comms",
    exam: "both",
    kicker: "Communication \u00b7 CPSA",
    title: "The interrupted opening",
    trap: "You know the case, you can feel the answer forming, and the patient\u2019s opening sentence feels like a slow runway to a destination you have already reached. Cutting in early feels efficient \u2014 and that efficiency is the trap.",
    fails: [
    { lead: "Interrupts the opening statement.", body: "Cuts across the patient\u2019s first sentences before they finish. (App 1B, item 61)" },
    { lead: "Steers to your agenda.", body: "Redirects to your own line of questioning before hearing theirs." },
    { lead: "Misses the real reason.", body: "Loses the concern they were building up to say." }
    ],
    museum: "He had the diagnosis within seconds and started asking his questions \u2014 and the patient never got to the sentence that would have changed the whole consultation.",
    rule: "Let the patient finish their opening \u2014 the real reason often comes last."
  },
  {
    id: "comms-no-agenda-set",
    cat: "comms",
    exam: "both",
    kicker: "Communication \u00b7 CPSA",
    title: "No map for the room",
    trap: "Skipping the \u2018here is what we\u2019ll do today\u2019 feels like saving time and getting to the medicine faster. Leaving the patient without a map is the trap.",
    fails: [
    { lead: "Never signposts.", body: "Launches into questions without setting out the shape of the consultation. (App 1B, item 93)" },
    { lead: "No shared agenda.", body: "Decides the plan for the time without checking what the patient came for." },
    { lead: "Disorganised flow.", body: "Jumps between topics, leaving the patient unsure where things are going. (App 1B, item 99)" }
    ],
    museum: "She was thorough but the patient never knew what was happening or when their turn would come \u2014 a competent consultation that felt, from the chair, like being lost.",
    rule: "Set the agenda out loud \u2014 tell the patient what you will cover and ask what they need to discuss."
  },
  {
    id: "comms-closed-question-machine",
    cat: "comms",
    exam: "both",
    kicker: "Communication \u00b7 CPSA",
    title: "Yes, no, yes, no",
    trap: "Closed questions feel controlled and efficient \u2014 you get clean answers fast and stay on schedule. That tidy control is the trap; it closes the door the patient needed open.",
    fails: [
    { lead: "Interrogates instead of listens.", body: "Fires closed questions that never let the patient tell their story. (App 1B, item 66)" },
    { lead: "Closes the history early.", body: "Reaches a diagnosis on yes/no answers and stops exploring. (App 1B, item 75)" },
    { lead: "Misses what wasn\u2019t asked.", body: "Never opens the space where the real concern lives." }
    ],
    museum: "He ran a crisp checklist of closed questions and finished early, satisfied \u2014 and never heard the one thing the patient was waiting to be asked.",
    rule: "Open the history with open questions \u2014 let them talk before you narrow down."
  },
  {
    id: "comms-never-summarises",
    cat: "comms",
    exam: "both",
    kicker: "Communication \u00b7 CPSA",
    title: "Straight to the plan",
    trap: "You have gathered everything and the plan is obvious, so summarising back can feel like a pointless detour. Skipping it is the trap \u2014 it is where errors and missed concerns surface.",
    fails: [
    { lead: "No summary before closing.", body: "Moves to management without reflecting the story back. (App 1B, item 94)" },
    { lead: "Misses the correction.", body: "Never gives the patient the chance to say \u2018that\u2019s not quite right\u2019." },
    { lead: "No check of understanding.", body: "Assumes shared understanding rather than confirming it. (App 1B, item 96)" }
    ],
    museum: "She had it all and went straight to the plan \u2014 and the detail she had misheard, the one a summary would have caught, quietly shaped the wrong advice.",
    rule: "Summarise back before you plan \u2014 it catches errors and shows you listened."
  },
  {
    id: "comms-ends-abruptly",
    cat: "comms",
    exam: "both",
    kicker: "Communication \u00b7 CPSA",
    title: "And we\u2019re done",
    trap: "Time is short, the plan is made, and stopping the moment it is delivered feels efficient. The abrupt ending is the trap \u2014 it undoes the rapport the whole consultation built.",
    fails: [
    { lead: "Ends abruptly.", body: "Closes the instant the plan is stated, with no safety-net or check. (App 1B, item 97)" },
    { lead: "No safety-net.", body: "Leaves without telling the patient what would mean coming back. (App 1B, item 95)" },
    { lead: "No space for questions.", body: "Stands to leave before the patient can ask the thing they were holding." }
    ],
    museum: "He delivered a perfect plan and was on his feet before the patient finished nodding \u2014 and a station that was going well ended on a door closing too soon.",
    rule: "Close properly \u2014 check questions, safety-net, and leave on a human note."
  },
  {
    id: "comms-missed-emotion",
    cat: "comms",
    exam: "both",
    kicker: "Communication \u00b7 CPSA",
    title: "The unacknowledged tear",
    trap: "Emotion appears and the safe, clinical instinct is to keep moving \u2014 stay on task, get the history. Stepping past the feeling is the trap; the station is testing whether you noticed.",
    fails: [
    { lead: "Ignores visible distress.", body: "Carries on with questions while the patient is visibly upset. (App 1B, item 60)" },
    { lead: "Acknowledges nothing.", body: "Offers no words for the emotion in the room." },
    { lead: "Hides behind the task.", body: "Uses the clinical agenda to avoid the harder human moment." }
    ],
    museum: "Her eyes filled and the candidate, not unkindly, asked the next question on his list \u2014 and the examiner marked the moment he chose the form over the person.",
    rule: "Name the emotion before you move on \u2014 acknowledgement is not a detour."
  },
  {
    id: "comms-patient-goes-silent",
    cat: "comms",
    exam: "both",
    kicker: "Communication \u00b7 CPSA",
    title: "Filling the silence",
    trap: "A silence opens up and it feels unbearable \u2014 the urge to fill it, to rescue the moment with words, is overwhelming. Talking into the pause is the trap; the silence was doing the work.",
    fails: [
    { lead: "Fills the silence continuously.", body: "Talks over a pause that the patient needed. (App 1B, item 110)" },
    { lead: "Rushes past the feeling.", body: "Treats silence as a problem to solve rather than space to allow." },
    { lead: "Misses what comes next.", body: "Never lets the patient reach the words they were gathering." }
    ],
    museum: "The room went quiet and he could not bear it, so he spoke \u2014 and the thing the patient had almost found the courage to say slipped back under.",
    rule: "Let silence sit \u2014 the patient often fills it with what matters most."
  },
  {
    id: "comms-jargon-explosion",
    cat: "comms",
    exam: "both",
    kicker: "Communication \u00b7 CPSA",
    title: "Clinically fluent, humanly lost",
    trap: "Precise medical language feels like competence, and under exam pressure it pours out. Sounding like a doctor to another doctor is the trap \u2014 the patient stops understanding and stops saying so.",
    fails: [
    { lead: "Buries the message in jargon.", body: "Explains in terms the patient cannot follow." },
    { lead: "Never checks understanding.", body: "Assumes the words landed instead of confirming. (App 1B, item 96)" },
    { lead: "Mistakes fluency for clarity.", body: "Reads their own polish as the patient\u2019s comprehension." }
    ],
    museum: "He explained it impeccably, every term correct, and the patient nodded along understanding almost none of it \u2014 a fluent consultation that communicated nothing.",
    rule: "Speak so the patient understands \u2014 then check that they did."
  },
  {
    id: "comms-false-reassurance",
    cat: "comms",
    exam: "both",
    kicker: "Communication \u00b7 CPSA",
    title: "It\u2019s probably nothing",
    trap: "The patient is anxious and \u2018I\u2019m sure it\u2019s nothing\u2019 feels kind \u2014 it eases their fear and yours. Premature comfort is the trap; reassurance you cannot yet justify is a fail waiting to happen.",
    fails: [
    { lead: "Reassures before excluding.", body: "Promises it is nothing serious while the dangerous causes are still open. (App 1B, item 123)" },
    { lead: "Trades safety for comfort.", body: "Soothes the patient at the cost of an honest, careful plan." },
    { lead: "No safety-net behind it.", body: "Leaves \u2018probably fine\u2019 unsupported by any what-if advice. (App 1B, item 95)" }
    ],
    museum: "She wanted to comfort an anxious patient and said it was surely nothing \u2014 warm, well-meant, and exactly the false reassurance the station was built to catch.",
    rule: "Never reassure beyond what you have actually excluded \u2014 reassurance is earned, not offered."
  },
  {
    id: "comms-monologue-doctor",
    cat: "comms",
    exam: "both",
    kicker: "Communication \u00b7 CPSA",
    title: "The monologue",
    trap: "You know the explanation cold and it flows out in one confident stream. The uninterrupted monologue feels like thoroughness \u2014 and that is the trap; consultation is a conversation, not a lecture.",
    fails: [
    { lead: "Talks at, not with.", body: "Delivers a continuous block of information with no space for the patient. (App 1B, item 110)" },
    { lead: "No dialogue.", body: "Never pauses to confirm understanding, invite questions, or ask what the patient thinks. (App 1B, item 96)" },
    { lead: "Misses their reaction.", body: "Is so busy explaining that the patient\u2019s confusion, questions or distress go unseen." }
    ],
    museum: "He gave a flawless five-minute explanation without drawing breath \u2014 and never noticed that the patient had stopped following somewhere in the first minute.",
    rule: "Make it a dialogue \u2014 explain in small pieces, pause, check, and let the patient back in."
  },
  {
    id: "esc-waiting-too-long",
    cat: "danger",
    exam: "both",
    kicker: "Escalation \u00b7 CPSA",
    title: "One more set of obs",
    trap: "The patient is borderline, not crashing, and waiting for one more set of observations feels responsible \u2014 you\u2019ll escalate with better information. That wait, dressed up as diligence, is the trap.",
    fails: [
    { lead: "Watches instead of acts.", body: "Delays the escalation call to gather more data the situation does not need. (App 1B, item 20)" },
    { lead: "Normalises the trend.", body: "Explains away a worsening trajectory one reading at a time." },
    { lead: "Escalates too late.", body: "Makes the call after the window for an easy save has closed." }
    ],
    museum: "He wanted to be sure before he troubled anyone, so he waited for the next set of obs \u2014 and the next \u2014 and by the time he picked up the phone the patient needed far more than a phone call.",
    rule: "Escalate on the trend, not the next reading \u2014 sooner is safer."
  },
  {
    id: "esc-trying-to-be-the-hero",
    cat: "danger",
    exam: "both",
    kicker: "Escalation \u00b7 CPSA",
    title: "I can handle this",
    trap: "Managing it yourself feels like competence, and calling for help can feel like admitting you couldn\u2019t. That pride, quiet and well-meant, is the trap.",
    fails: [
    { lead: "Works beyond their competence.", body: "Pushes on alone instead of escalating when out of their depth. (App 1B, item 116)" },
    { lead: "Delays the inevitable call.", body: "Tries everything personally before involving the senior who was always needed. (App 1B, item 20)" },
    { lead: "Mistakes independence for safety.", body: "Treats asking for help as failure rather than good practice." }
    ],
    museum: "She was capable and determined and certain she could manage \u2014 and the examiner watched a safe escalation never happen, lost to the wish to do it alone.",
    rule: "Calling for help early is competence, not weakness \u2014 escalate when you\u2019re out of your depth."
  },
  {
    id: "esc-no-senior-review",
    cat: "danger",
    exam: "both",
    kicker: "Escalation \u00b7 CPSA",
    title: "No second pair of eyes",
    trap: "You\u2019ve reached a plan and it feels solid, so seeking senior review can seem like an unnecessary step that slows things down. Skipping it is the trap \u2014 the station often hinges on knowing when to ask.",
    fails: [
    { lead: "Never seeks review.", body: "Finalises a high-stakes decision without involving a senior. (App 1B, item 116)" },
    { lead: "Defensive about a second opinion.", body: "Treats the suggestion of senior input as a challenge rather than safety. (App 1B, item 117)" },
    { lead: "Owns a decision above their grade.", body: "Carries a decision that should have gone up the chain." }
    ],
    museum: "His plan was reasonable and he was confident in it, so he never ran it past anyone \u2014 and the one detail a senior would have caught quietly failed the station.",
    rule: "Know the decisions that need a senior \u2014 and put them up the chain."
  },
  {
    id: "esc-no-sbar",
    cat: "comms",
    exam: "both",
    kicker: "Escalation \u00b7 CPSA",
    title: "The shapeless handover",
    trap: "You know the patient inside out, so when you escalate the words just tumble out in the order they occur to you. That unstructured rush feels urgent \u2014 and the missing structure is the trap.",
    fails: [
    { lead: "No SBAR.", body: "Escalates without Situation, Background, Assessment, Recommendation. (App 1B, item 103)" },
    { lead: "Buries the ask.", body: "Never states clearly what they actually need from the person they\u2019ve called." },
    { lead: "Chaotic handover.", body: "Leaves the listener assembling the picture from fragments. (App 1B, item 104)" }
    ],
    museum: "He called the registrar and talked for a minute straight, and at the end she still had to ask what he wanted \u2014 a handover that conveyed everything except the point.",
    rule: "Escalate in SBAR \u2014 and say plainly what you need."
  },
  {
    id: "esc-not-calling-999",
    cat: "danger",
    exam: "both",
    kicker: "Escalation \u00b7 CPSA",
    title: "The call that wasn\u2019t made",
    trap: "In a telephone or community scenario the management plan can feel complete \u2014 advice given, follow-up arranged \u2014 and the single decisive action, calling an ambulance, slips off the list. That omission is the trap.",
    fails: [
    { lead: "No ambulance arranged.", body: "Manages an emergency presentation without arranging emergency transport. (App 1B, item 21)" },
    { lead: "Advises instead of acts.", body: "Gives safety-net advice where the situation needed 999 now." },
    { lead: "Leaves the patient to self-present.", body: "Relies on the patient making their own way when minutes matter." }
    ],
    museum: "She gave careful, correct advice and arranged a GP follow-up \u2014 and never said the four words, call an ambulance, that the station was entirely about.",
    rule: "If it\u2019s an emergency, arrange the ambulance \u2014 advice is not transport."
  },
  {
    id: "esc-ignoring-news",
    cat: "danger",
    exam: "both",
    kicker: "Escalation \u00b7 CPSA",
    title: "The score that climbed",
    trap: "The early warning score is creeping up but the patient still looks alright to you, and your eyes feel more trustworthy than the chart. Trusting the look over the number is the trap.",
    fails: [
    { lead: "Overrides the score.", body: "Discounts a rising early warning score because the patient seems well. (App 1B, item 20)" },
    { lead: "No action on the trigger.", body: "Records the deterioration without the escalation it demands." },
    { lead: "Reassured by a snapshot.", body: "Reads a single \u2018looks fine\u2019 over a worsening trend." }
    ],
    museum: "The score kept rising and he kept saying she looked comfortable \u2014 and the chart that was trying to warn him was the thing the station marked him on.",
    rule: "A rising early warning score is an instruction to act \u2014 escalate, do not override it."
  },
  {
    id: "esc-assuming-someone-else",
    cat: "danger",
    exam: "both",
    kicker: "Escalation \u00b7 CPSA",
    title: "Someone else will",
    trap: "In a busy scene with others around, it feels safe to assume the obvious task is already being handled by someone better placed. That comfortable assumption is the trap \u2014 shared responsibility becomes no responsibility.",
    fails: [
    { lead: "Diffuses responsibility.", body: "Assumes a colleague has done the escalation or the task, so no one does. (App 1B, item 116)" },
    { lead: "Names no one.", body: "Issues no clear, directed instruction in an emergency." },
    { lead: "Waits to be told.", body: "Holds back from acting because it felt like someone else\u2019s job." }
    ],
    museum: "Everyone in the room assumed someone else had called for help, and so the call sat unmade \u2014 and the candidate, waiting politely, owned the gap as much as anyone.",
    rule: "Assume nothing is done until you have checked or done it \u2014 and task people by name."
  },
  {
    id: "inv-never-made-recommendation",
    cat: "comms",
    exam: "both",
    kicker: "Communication \u00b7 CPSA",
    title: "All options, no advice",
    trap: "Laying out the options neutrally feels respectful and non-paternalistic \u2014 you\u2019re letting the patient decide. But neutrality can tip into abdication, and never actually recommending anything is the trap.",
    fails: [
    { lead: "Offers options, withholds guidance.", body: "Lists choices but never says what they would advise. (App 1B, item 86)" },
    { lead: "Hides behind neutrality.", body: "Mistakes refusing to recommend for respecting autonomy." },
    { lead: "Leaves the patient adrift.", body: "Sends someone away with a menu and no steer." }
    ],
    museum: "He explained every option with perfect balance and asked what she\u2019d like to do \u2014 and she left more uncertain than she came, having wanted, more than anything, his opinion.",
    rule: "Give a clear recommendation \u2014 shared decisions still need your advice."
  },
  {
    id: "inv-never-took-ownership",
    cat: "comms",
    exam: "both",
    kicker: "Professionalism \u00b7 CPSA",
    title: "The doctor who wasn\u2019t there",
    trap: "Staying neutral and procedural can feel professional and safe. But a consultation needs someone visibly in charge of the care, and never owning it is the trap \u2014 the patient leaves unsure anyone was holding their problem.",
    fails: [
    { lead: "Owns nothing.", body: "Processes the encounter without taking visible responsibility for the patient\u2019s care." },
    { lead: "Defers everything onward.", body: "Passes every decision to other teams or future appointments without holding any." },
    { lead: "Apologises for nothing when due.", body: "Fails to own an error or gap that clearly needed acknowledging. (App 1B, item 68)" }
    ],
    museum: "Everything was technically handled and referred onward, and yet the patient walked out feeling no one had actually taken charge \u2014 a competent consultation with no one at the wheel.",
    rule: "Take visible ownership of the patient in front of you \u2014 be the doctor who is there."
  },
  {
    id: "inv-never-closed",
    cat: "comms",
    exam: "both",
    kicker: "Communication \u00b7 CPSA",
    title: "The consultation that trailed off",
    trap: "When the clinical content is done it can feel like the work is over, and the consultation simply stops. But the close is part of the medicine, and letting it trail away unfinished is the trap.",
    fails: [
    { lead: "No summary, no plan stated.", body: "Lets the consultation end without drawing it together. (App 1B, item 94)" },
    { lead: "No safety-net.", body: "Finishes with no advice on what would warrant coming back. (App 1B, item 95)" },
    { lead: "No check of understanding.", body: "Ends without confirming the patient knows the plan. (App 1B, item 96)" }
    ],
    museum: "The history was thorough, the examination neat, and then it all just stopped \u2014 no summary, no plan, no net, a station that ran out rather than closed.",
    rule: "Always close on purpose \u2014 summarise, plan, safety-net, check."
  },
  {
    id: "inv-never-checked-understanding",
    cat: "comms",
    exam: "both",
    kicker: "Communication \u00b7 CPSA",
    title: "The unconfirmed nod",
    trap: "The patient is nodding along, and a nod is easy to read as understanding. Taking the nod at face value is the trap \u2014 agreement is not comprehension.",
    fails: [
    { lead: "No teach-back.", body: "Never asks the patient to say the plan back in their own words. (App 1B, item 96)" },
    { lead: "Reads nodding as understanding.", body: "Mistakes politeness for grasp of the plan." },
    { lead: "Misses the silent confusion.", body: "Never creates the moment where a misunderstanding could surface." }
    ],
    museum: "She explained it well and he nodded throughout, so she moved on satisfied \u2014 and he went home and did exactly the wrong thing, having never quite understood.",
    rule: "Check understanding with teach-back \u2014 a nod is not comprehension."
  },
  {
    id: "inv-never-explained-why",
    cat: "comms",
    exam: "both",
    kicker: "Communication \u00b7 CPSA",
    title: "Instructions without reasons",
    trap: "Under time pressure it is quicker to give the instructions and skip the reasoning. But people follow what they understand the reason for, and leaving out the why is the trap.",
    fails: [
    { lead: "Gives orders, not reasons.", body: "Tells the patient what to do without explaining why it matters." },
    { lead: "Loses adherence.", body: "Leaves a plan the patient has no reason to believe in or follow." },
    { lead: "Skips the side-effect rationale.", body: "Omits why a warning or precaution matters. (App 1B, item 91)" }
    ],
    museum: "He listed the instructions crisply and moved on, and the patient, never told why any of it mattered, quietly decided most of it could wait.",
    rule: "Explain the why, not just the what \u2014 reasons drive adherence."
  },
  {
    id: "inv-never-safety-netted",
    cat: "comms",
    exam: "both",
    kicker: "Communication \u00b7 CPSA",
    title: "No net under the plan",
    trap: "When the plan feels sound, the what-ifs can seem pessimistic or unnecessary. But every plan can fail, and sending the patient off without a net is the trap.",
    fails: [
    { lead: "No safety-net advice.", body: "Gives no clear guidance on what would mean seeking help again. (App 1B, item 95)" },
    { lead: "Assumes the plan will hold.", body: "Builds no contingency for the patient who gets worse." },
    { lead: "No timeframe or red flags.", body: "Leaves out when to return and what to watch for." }
    ],
    museum: "The plan was good and she was sure it would work, so she said nothing about what to do if it did not \u2014 and the station failed on the sentence she never said.",
    rule: "Always safety-net \u2014 tell them what would mean coming back, and when."
  },
  {
    id: "inv-never-asked-permission",
    cat: "consent",
    exam: "both",
    kicker: "Consent \u00b7 CPSA",
    title: "Straight in",
    trap: "When you know what needs doing, asking permission first can feel like a formality slowing you down. Skipping that small ask is the trap \u2014 consent is the doorway, not the paperwork.",
    fails: [
    { lead: "Examines without explicit consent.", body: "Begins an examination without asking and gaining agreement first. (App 1B, item 1)" },
    { lead: "Proceeds without explaining.", body: "Acts before telling the patient what they are about to do and why." },
    { lead: "Forgets the chaperone offer.", body: "Skips offering a chaperone where one is needed. (App 1B, item 3)" }
    ],
    museum: "He was efficient and kind and reached straight for the patient\u2019s abdomen \u2014 and the examiner marked the moment he laid hands on without ever asking if he could.",
    rule: "Ask before you act \u2014 explain, gain consent, offer a chaperone."
  },
  {
    id: "inv-never-signposted",
    cat: "comms",
    exam: "both",
    kicker: "Communication \u00b7 CPSA",
    title: "No turn signals",
    trap: "Moving between parts of the consultation feels natural to you, so announcing each transition can seem redundant. But the patient cannot see where you are going, and skipping the signposts is the trap.",
    fails: [
    { lead: "No transitions.", body: "Switches from history to examination to plan without flagging the change. (App 1B, item 93)" },
    { lead: "Disorients the patient.", body: "Leaves them unsure what is happening or why. (App 1B, item 99)" },
    { lead: "Feels abrupt and disjointed.", body: "Strings competent pieces together with no connective signposting." }
    ],
    museum: "She moved smoothly through every stage in her own head, and the patient spent the whole consultation a step behind, never told what was coming next.",
    rule: "Signpost each move \u2014 tell the patient where you are going before you go there."
  },
  {
    id: "rx-prescribing-for-someone-you-know",
    cat: "prescribing",
    exam: "both",
    kicker: "Prescribing \u00b7 CPSA",
    title: "A quick favour",
    trap: "A friend, a relative, a colleague asks you to sort out a prescription \u2014 it feels mean to refuse, and kind to help someone you know. That kindness is the trap; familiarity quietly removes the safeguards.",
    fails: [
    { lead: "Prescribes for family or friends.", body: "Writes for someone close where objectivity and proper assessment are lost. (App 1B, item 34)" },
    { lead: "Self-prescribes.", body: "Treats themselves rather than seeing their own doctor. (App 1B, item 33)" },
    { lead: "Skips the normal checks.", body: "Lets the relationship shortcut the history, examination and record." }
    ],
    museum: "It was only a repeat, he reasoned, just helping out a friend \u2014 and the station failed on a prescription that should have come from her own GP, not a favour.",
    rule: "Don\u2019t prescribe for yourself, family or friends \u2014 send them to their own doctor."
  },
  {
    id: "rx-the-confident-decimal",
    cat: "prescribing",
    exam: "both",
    kicker: "Prescribing \u00b7 CPSA",
    title: "The confident decimal",
    trap: "You know this drug well, so you write the dose from memory without pausing to check. That very confidence is the trap \u2014 the worst errors hide behind certainty.",
    fails: [
    { lead: "Skips the double-check.", body: "Writes a dose from memory and misses a gross error. (App 1B, item 27)" },
    { lead: "Trusts familiarity.", body: "Treats a routine drug as too obvious to verify." },
    { lead: "Doesn\u2019t read it back.", body: "Never re-reads the prescription against a reference or a colleague." }
    ],
    museum: "He\u2019d written it a hundred times and wrote it again without looking \u2014 and a misplaced decimal he was far too confident to catch turned a routine prescription into a fail.",
    rule: "Check every dose, especially the ones you\u2019re sure of \u2014 confidence is where errors hide."
  },
  {
    id: "rx-the-pregnancy-blind-spot",
    cat: "prescribing",
    exam: "both",
    kicker: "Prescribing \u00b7 CPSA",
    title: "Could you be pregnant?",
    trap: "The consultation is about the presenting problem, not pregnancy, so the question never comes up. That blind spot is the trap \u2014 one unasked question can make a safe drug dangerous.",
    fails: [
    { lead: "Prescribes without asking.", body: "Gives a drug to a woman of childbearing age without checking pregnancy status. (App 1B, item 28)" },
    { lead: "Assumes it isn\u2019t relevant.", body: "Decides the question doesn\u2019t apply rather than asking it." },
    { lead: "No counselling on the risk.", body: "Misses the chance to discuss contraception or alternatives." }
    ],
    museum: "He treated the complaint perfectly and never thought to ask the one question \u2014 and a drug that was wrong in pregnancy went out to a patient he\u2019d never asked.",
    rule: "Before prescribing to anyone who could be pregnant \u2014 ask."
  },
  {
    id: "rx-the-interaction-not-looked-for",
    cat: "prescribing",
    exam: "both",
    kicker: "Prescribing \u00b7 CPSA",
    title: "The drug you added",
    trap: "You\u2019re focused on the new problem and the new drug, and the patient\u2019s existing list fades into the background. Treating the new prescription in isolation is the trap.",
    fails: [
    { lead: "Ignores the current list.", body: "Adds a drug without checking it against what the patient already takes. (App 1B, item 31)" },
    { lead: "No medication reconciliation.", body: "Never asks for, or reads, the full drug history. (App 1B, item 71)" },
    { lead: "Treats one problem, not one patient.", body: "Optimises the new issue while the interactions go unseen." }
    ],
    museum: "She solved the new complaint neatly and added the obvious drug \u2014 and the dangerous interaction with something already on his list was never looked for.",
    rule: "Always prescribe against the patient\u2019s full current list \u2014 check before you add."
  },
  {
    id: "rx-the-standard-dose",
    cat: "prescribing",
    exam: "both",
    kicker: "Prescribing \u00b7 CPSA",
    title: "The standard dose",
    trap: "The standard dose is the one you reach for automatically, and the patient\u2019s kidneys aren\u2019t front of mind. Defaulting to standard without checking is the trap.",
    fails: [
    { lead: "Ignores renal impairment.", body: "Prescribes a usual dose without considering reduced kidney function. (App 1B, item 29)" },
    { lead: "Doesn\u2019t check the bloods.", body: "Never looks at renal function before choosing a dose." },
    { lead: "Misses the at-risk patient.", body: "Overlooks the elderly or unwell patient most likely to be affected." }
    ],
    museum: "He gave the dose he always gives, to a frail patient whose kidneys couldn\u2019t clear it \u2014 standard, automatic, and exactly wrong for the person in front of him.",
    rule: "Check renal function before you dose \u2014 the standard dose isn\u2019t standard for everyone."
  },
  {
    id: "rx-the-emergency-drug",
    cat: "prescribing",
    exam: "both",
    kicker: "Prescribing \u00b7 CPSA",
    title: "The emergency drug",
    trap: "In the rush of an emergency, the drug everyone reaches for feels so familiar that the route, the strength or the situation goes unchecked. Familiarity under pressure is the trap.",
    fails: [
    { lead: "Wrong emergency drug detail.", body: "Reaches for the right drug in the wrong form or situation. (App 1B, item 30)" },
    { lead: "No one reads it back.", body: "Gives a verbal order in a resus with no check or repeat-back." },
    { lead: "Skips the safety pause.", body: "Lets urgency remove the moment of confirmation." }
    ],
    museum: "He called for the emergency drug with total confidence and the wrong detail slipped through unchecked \u2014 the one place the pressure of the moment cost him the station.",
    rule: "Even in an emergency, confirm the drug and its route out loud \u2014 urgency is no excuse to skip the check."
  },
  {
    id: "eth-the-flicker-of-disapproval",
    cat: "ethics",
    exam: "both",
    kicker: "Professionalism \u00b7 CPSA",
    title: "The flicker of disapproval",
    trap: "A patient\u2019s lifestyle or choices brush against your own values, and a small judgement forms before you can stop it. Letting that flicker show \u2014 or steer the consultation \u2014 is the trap.",
    fails: [
    { lead: "Judges the patient\u2019s choices.", body: "Lets disapproval colour the tone or the plan. (App 1B, item 52)" },
    { lead: "Moralises instead of helps.", body: "Lectures where the patient needed care." },
    { lead: "Withdraws warmth.", body: "Treats the patient differently because of how they live." }
    ],
    museum: "She didn\u2019t say anything unkind, exactly, but the patient felt judged from the first minute \u2014 and the consultation never recovered the trust it lost in that flicker.",
    rule: "Treat the patient, never their choices \u2014 leave judgement at the door."
  },
  {
    id: "eth-im-the-doctor",
    cat: "ethics",
    exam: "both",
    kicker: "Professionalism \u00b7 CPSA",
    title: "I\u2019m the doctor",
    trap: "A patient challenges you, and the instinct under pressure is to pull rank and reassert authority. That defensive reflex is the trap \u2014 it turns a question into a confrontation.",
    fails: [
    { lead: "Pulls rank when challenged.", body: "Responds to a fair question with authority rather than openness. (App 1B, item 55)" },
    { lead: "Gets defensive.", body: "Treats disagreement as a threat to be shut down." },
    { lead: "Stops listening.", body: "Closes the conversation the moment it stops being comfortable." }
    ],
    museum: "He met a reasonable challenge with \u2018I\u2019m the doctor here\u2019 \u2014 and in one sentence turned a patient who wanted reassurance into a patient who wanted to complain.",
    rule: "When challenged, stay curious, not defensive \u2014 \u2018I\u2019m the doctor\u2019 is never the answer."
  },
  {
    id: "eth-the-kind-lie",
    cat: "ethics",
    exam: "both",
    kicker: "Professionalism \u00b7 CPSA",
    title: "The kind lie",
    trap: "The truth is hard and the patient is fragile, and softening it into something untrue feels like mercy. That well-meant dishonesty is the trap.",
    fails: [
    { lead: "Lies to the patient.", body: "Tells a comforting untruth rather than an honest, gentle truth. (App 1B, item 49)" },
    { lead: "Falsely reassures.", body: "Promises an outcome that isn\u2019t theirs to promise." },
    { lead: "Trades trust for comfort.", body: "Buys a moment of relief at the cost of honesty." }
    ],
    museum: "He couldn\u2019t bear to tell her the truth, so he softened it into a lie \u2014 kindly meant, and exactly the breach of honesty the station was built to catch.",
    rule: "Be honest, gently \u2014 never lie to comfort a patient."
  },
  {
    id: "eth-tidying-the-record",
    cat: "ethics",
    exam: "both",
    kicker: "Professionalism \u00b7 CPSA",
    title: "Tidying the record",
    trap: "After something has gone wrong, the urge to make the notes look better \u2014 clearer, more defensible \u2014 can feel like good documentation. Altering the record after the fact is the trap.",
    fails: [
    { lead: "Alters notes after an error.", body: "Changes the record to conceal or soften what happened. (App 1B, item 50)" },
    { lead: "Falsifies documentation.", body: "Writes what should have happened rather than what did. (App 1B, item 48)" },
    { lead: "Hides rather than reports.", body: "Tidies the paper trail instead of being open about the error." }
    ],
    museum: "He went back to \u2018clarify\u2019 the notes after it went wrong, and a small honest mistake became a serious professionalism breach the moment the record changed.",
    rule: "Never alter notes to look better \u2014 document honestly and be open about errors."
  },
  {
    id: "eth-the-patient-you-warmed-to-less",
    cat: "ethics",
    exam: "both",
    kicker: "Professionalism \u00b7 CPSA",
    title: "The patient you warmed to less",
    trap: "Two patients, the same problem, and something \u2014 background, manner, language \u2014 makes you give one of them a little less. That unnoticed inequality is the trap.",
    fails: [
    { lead: "Treats patients unequally.", body: "Lets bias shape the time, warmth or thoroughness a patient receives. (App 1B, item 51)" },
    { lead: "Assumes from a label.", body: "Lets a stereotype stand in for the person." },
    { lead: "Never notices the gap.", body: "Stays unaware that the care wasn\u2019t equal." }
    ],
    museum: "He\u2019d have said he treated everyone the same, and mostly believed it \u2014 and the patient who got the shorter, cooler version felt every minute of the difference.",
    rule: "Give every patient the same care \u2014 and watch for the bias you don\u2019t notice."
  },
  {
    id: "eth-just-being-friendly",
    cat: "ethics",
    exam: "both",
    kicker: "Professionalism \u00b7 CPSA",
    title: "Just being friendly",
    trap: "A grateful patient offers a gift, or wants your number, or the rapport drifts toward friendship. Saying yes feels warm and human \u2014 and that warmth crossing a line is the trap.",
    fails: [
    { lead: "Accepts the boundary-crossing gift.", body: "Takes an inappropriate gift or favour. (App 1B, item 53)" },
    { lead: "Gives out personal contact.", body: "Hands the patient a personal number or private channel. (App 1B, item 54)" },
    { lead: "Over-familiar in a clinical role.", body: "Lets friendliness blur the professional relationship. (App 1B, item 106)" }
    ],
    museum: "It felt cold to refuse, so he took the gift and gave his number \u2014 small, kind gestures that quietly dismantled the boundary the role depends on.",
    rule: "Keep the professional boundary warm but clear \u2014 decline gifts and personal contact kindly."
  },
  {
    id: "bias-anchoring",
    cat: "danger",
    exam: "both",
    kicker: "Cognitive Bias \u00b7 CPSA",
    title: "The first impression",
    trap: "The first piece of information \u2014 the triage label, the opening line, the referral \u2014 sets an early anchor, and every fact after it gets bent to fit. The trap is that the anchor feels like a head start when it is really a blindfold.",
    fails: [
    { lead: "Fixes on the first idea.", body: "Locks onto the initial diagnosis and weights everything toward it. (App 1B, item 90)" },
    { lead: "Discounts the misfit.", body: "Explains away findings that do not match the anchor." },
    { lead: "Never re-anchors.", body: "Holds the first impression even as the picture changes." }
    ],
    museum: "The referral said \u2018anxiety\u2019 and he read the whole consultation through that word \u2014 and the breathlessness that never fit was filed under the anchor he was handed at the door.",
    rule: "Hold your first impression loosely \u2014 actively consider other diagnoses."
  },
  {
    id: "bias-premature-closure",
    cat: "danger",
    exam: "both",
    kicker: "Cognitive Bias \u00b7 CPSA",
    title: "Stopping at the first answer",
    trap: "You reach a diagnosis that fits, and the relief of an answer makes you stop looking. The trap is that fitting is not the same as being right \u2014 and the search ends one question too early.",
    fails: [
    { lead: "Closes the search early.", body: "Settles on a diagnosis before the alternatives are excluded. (App 1B, item 90)" },
    { lead: "Stops asking \u2018what else\u2019.", body: "Treats the first plausible answer as the final one." },
    { lead: "Misses the second diagnosis.", body: "Never looks for the thing hiding behind the obvious one." }
    ],
    museum: "It all fit so neatly that she stopped, satisfied \u2014 and the diagnosis sitting quietly behind the obvious one was the one the station was really about.",
    rule: "Before you commit, ask \u2018what else could this be?\u2019"
  },
  {
    id: "bias-confirmation",
    cat: "danger",
    exam: "both",
    kicker: "Cognitive Bias \u00b7 CPSA",
    title: "Looking for the yes",
    trap: "Once you have a hunch, you start gathering the evidence that proves it and skating past the evidence that doesn\u2019t. The trap is that it feels like thoroughness while it is really self-confirmation.",
    fails: [
    { lead: "Seeks only supporting evidence.", body: "Asks the questions that confirm the favoured diagnosis." },
    { lead: "Ignores the disconfirming.", body: "Downplays findings that argue against it." },
    { lead: "Builds a one-sided case.", body: "Assembles a history that could only ever say yes." }
    ],
    museum: "He asked every question that would confirm his hunch and none that might break it \u2014 a confident, thorough-looking consultation built entirely to agree with itself.",
    rule: "Go looking for what would prove you wrong."
  },
  {
    id: "bias-availability",
    cat: "danger",
    exam: "both",
    kicker: "Cognitive Bias \u00b7 CPSA",
    title: "The last one I saw",
    trap: "A recent or memorable case \u2014 the miss you still think about, the dramatic diagnosis from last week \u2014 jumps to the front of your mind and crowds out the more likely answer. The trap is that vivid is not the same as probable.",
    fails: [
    { lead: "Reaches for the recent.", body: "Lets the last memorable case shape this one." },
    { lead: "Over-weights the dramatic.", body: "Chases the rare diagnosis that stuck in memory over the common cause." },
    { lead: "Under-weights the ordinary.", body: "Skips the likely answer because it is unmemorable." }
    ],
    museum: "She had missed it once and never forgot, so she saw it everywhere \u2014 and the ordinary diagnosis in front of her lost out to the ghost of an old one.",
    rule: "Ask what is most likely, not what is most memorable."
  },
  {
    id: "bias-search-satisficing",
    cat: "danger",
    exam: "both",
    kicker: "Cognitive Bias \u00b7 CPSA",
    title: "One finding, and done",
    trap: "You find something that explains the picture and stop searching \u2014 the first abnormality satisfies you. The trap is the second problem, the one that was always going to be missed once you stopped looking.",
    fails: [
    { lead: "Stops at the first finding.", body: "Accepts one abnormality as the whole answer. (App 1B, item 90)" },
    { lead: "Misses the second problem.", body: "Never looks past the first thing that fit." },
    { lead: "Reads relief as completeness.", body: "Mistakes the comfort of an answer for a finished search." }
    ],
    museum: "The first abnormality explained enough, so he stopped \u2014 and the second one, the dangerous one, sat just past the point where he decided he was done.",
    rule: "When you find one answer, keep looking for the next."
  },
  {
    id: "bias-diagnosis-momentum",
    cat: "danger",
    exam: "both",
    kicker: "Cognitive Bias \u00b7 CPSA",
    title: "The label that travelled",
    trap: "A diagnosis gets attached early \u2014 by triage, by a colleague, by the notes \u2014 and gathers weight as it passes from hand to hand until no one questions it. The trap is inheriting a label instead of making one.",
    fails: [
    { lead: "Inherits the diagnosis.", body: "Accepts a label passed down without re-examining it." },
    { lead: "Adds momentum.", body: "Repeats and reinforces an unverified diagnosis." },
    { lead: "Never re-checks.", body: "Treats the handed-down answer as settled fact." }
    ],
    museum: "By the time it reached her the diagnosis felt certain, stamped by everyone before her \u2014 and she carried it one step further without ever asking if it was true.",
    rule: "Re-examine the diagnosis you were handed \u2014 think for yourself."
  },
  {
    id: "bias-framing",
    cat: "danger",
    exam: "both",
    kicker: "Cognitive Bias \u00b7 CPSA",
    title: "How the story was told",
    trap: "The way a case is framed \u2014 \u2018just a panic attack\u2019, \u2018a known time-waster\u2019, \u2018probably functional\u2019 \u2014 quietly sets your expectations before you have seen a thing. The trap is letting someone else\u2019s frame become your judgement.",
    fails: [
    { lead: "Adopts the given frame.", body: "Lets the handover\u2019s wording shape the assessment." },
    { lead: "Reads the patient through a label.", body: "Sees what the frame told them to expect." },
    { lead: "Never reframes.", body: "Fails to step back and look without the borrowed lens." }
    ],
    museum: "\u2018Probably nothing,\u2019 the handover said, and he walked in already half-convinced \u2014 and the frame he was handed did the missing the moment he accepted it.",
    rule: "Step back and reframe \u2014 don\u2019t inherit someone else\u2019s judgement."
  },
  {
    id: "ck-checklist-robot",
    cat: "comms",
    exam: "both",
    kicker: "Consultation \u00b7 CPSA",
    title: "The checklist robot",
    trap: "You have memorised the structure and you run it flawlessly, ticking each box in order. The trap is that perfect structure with no human in it reads as a machine \u2014 and the station is testing for a doctor.",
    fails: [
    { lead: "Runs a script, not a consultation.", body: "Delivers memorised questions with no responsiveness to the person. (App 1B, item 66)" },
    { lead: "Ignores the patient\u2019s cues.", body: "Ploughs through the checklist past everything they offer." },
    { lead: "No warmth between the boxes.", body: "Mistakes completeness for connection." }
    ],
    museum: "He hit every item on the mark scheme in perfect order, and the patient felt processed rather than met \u2014 a flawless checklist that forgot to be a conversation.",
    rule: "Be human \u2014 the structure serves the patient, not the other way round."
  },
  {
    id: "ck-never-looks-up",
    cat: "comms",
    exam: "both",
    kicker: "Consultation \u00b7 CPSA",
    title: "Eyes on the notes",
    trap: "There is so much to record and remember that your eyes stay down on the page or the screen. The trap is that everything the patient says with their face and body happens in the seconds you are not looking.",
    fails: [
    { lead: "Buried in the notes.", body: "Keeps eyes on paper or screen instead of the patient." },
    { lead: "Misses the non-verbal.", body: "Loses the distress, the hesitation, the relief that never gets spoken. (App 1B, item 60)" },
    { lead: "No connection.", body: "Builds no rapport because they never make eye contact." }
    ],
    museum: "She wrote beautiful notes and never saw his face crumple at the word \u2018biopsy\u2019 \u2014 the most important thing in the room happened where she wasn\u2019t looking.",
    rule: "Look at the patient \u2014 the consultation is on their face, not the page."
  },
  {
    id: "ck-typing-doctor",
    cat: "comms",
    exam: "both",
    kicker: "Consultation \u00b7 CPSA",
    title: "Talking to the screen",
    trap: "Documenting as you go feels efficient and safe \u2014 nothing forgotten. The trap is that a patient watching the back of your attention stops telling you the things that matter.",
    fails: [
    { lead: "Types through the talking.", body: "Records continuously instead of listening fully." },
    { lead: "Loses the thread.", body: "Misses what is said while catching up on the notes." },
    { lead: "Signals distraction.", body: "Tells the patient, without words, that the screen comes first." }
    ],
    museum: "He typed every word and missed the meaning of all of them \u2014 and the patient, talking to a turned head, quietly stopped saying the hard parts.",
    rule: "Write less, listen more \u2014 the notes can wait."
  },
  {
    id: "ck-speed-runner",
    cat: "comms",
    exam: "both",
    kicker: "Consultation \u00b7 CPSA",
    title: "Racing the clock",
    trap: "The clock is loud and you go fast to fit everything in. The trap is that speed reads as not caring \u2014 and a rushed patient hears \u2018you don\u2019t matter\u2019 no matter how complete the medicine.",
    fails: [
    { lead: "Rushes the patient.", body: "Moves so fast the patient cannot keep up or feel heard." },
    { lead: "No room to speak.", body: "Leaves no space for the things that take a moment to say." },
    { lead: "Sacrifices rapport for pace.", body: "Wins time and loses the person." }
    ],
    museum: "She finished with time to spare and the patient left feeling like a hurdle she had cleared \u2014 fast, efficient, and somehow uncared for.",
    rule: "Slow down \u2014 pace is not the same as progress."
  },
  {
    id: "ck-sympathy-machine",
    cat: "comms",
    exam: "both",
    kicker: "Consultation \u00b7 CPSA",
    title: "I\u2019m so sorry to hear that",
    trap: "You have learned the empathy lines and you deliver them on cue. The trap is that empathy performed on autopilot rings hollow \u2014 a real feeling acknowledged late beats a scripted one offered on time.",
    fails: [
    { lead: "Performs empathy.", body: "Recites \u2018that must be hard\u2019 with no real attention behind it." },
    { lead: "Mistimes the line.", body: "Offers a stock phrase that does not fit the moment." },
    { lead: "Sounds rehearsed.", body: "Lets the patient hear the script instead of the care." }
    ],
    museum: "He said all the right empathetic words at all the right intervals, and not one of them landed \u2014 a kindness so practised it had stopped being kind.",
    rule: "Be genuine \u2014 respond to the person, not the script."
  },
  {
    id: "ck-over-explainer",
    cat: "comms",
    exam: "both",
    kicker: "Consultation \u00b7 CPSA",
    title: "Everything you never asked",
    trap: "You know a great deal and the urge to share all of it feels like thoroughness. The trap is that burying the one thing the patient needs under everything you know leaves them with nothing they can use.",
    fails: [
    { lead: "Tells them everything.", body: "Floods the patient with detail they did not need." },
    { lead: "Buries the key message.", body: "Loses the one important point in the volume." },
    { lead: "Overwhelms instead of informs.", body: "Mistakes quantity for clarity." }
    ],
    museum: "She explained the whole of the physiology, beautifully, and the patient left unable to say the one thing they actually needed to do.",
    rule: "Keep it simple \u2014 say the one thing that matters most."
  },
  {
    id: "exam-no-hand-hygiene",
    cat: "danger",
    exam: "both",
    kicker: "Examination \u00b7 CPSA",
    title: "Straight to the patient",
    trap: "You are focused on getting the examination right, and the hands go to the patient before they go to the gel. The trap is that the thing you skip is invisible to you and glaring to the examiner.",
    fails: [
    { lead: "No hand hygiene.", body: "Begins the examination without washing or gelling. (App 1B, item 76)" },
    { lead: "Performance swallows the basics.", body: "Lets concentration on technique crowd out the first, simplest step." },
    { lead: "Never recovers it.", body: "Carries on once missed rather than correcting at the next opportunity." }
    ],
    museum: "His examination was textbook, every manoeuvre clean \u2014 and the examiner had already marked the moment his ungelled hands reached the patient before anything else happened.",
    rule: "Wash your hands before you touch the patient \u2014 every time, first."
  },
  {
    id: "exam-inadequate-exposure",
    cat: "danger",
    exam: "both",
    kicker: "Examination \u00b7 CPSA",
    title: "Examining the shirt",
    trap: "Keeping the patient covered feels respectful, and you do not want to seem to rush their dignity. The trap is that an examination you cannot see is an examination you did not do.",
    fails: [
    { lead: "Inadequate exposure.", body: "Leaves the area too covered to examine properly." },
    { lead: "Trades thoroughness for haste.", body: "Skips proper exposure to move faster through the station." },
    { lead: "Misses what is hidden.", body: "Overlooks signs that were never uncovered." }
    ],
    museum: "She examined a barely-uncovered abdomen and pronounced it normal \u2014 and the scar, the distension, the thing she needed to see stayed politely under the gown.",
    rule: "Expose the area properly \u2014 you cannot examine what you cannot see."
  },
  {
    id: "exam-no-chaperone",
    cat: "consent",
    exam: "both",
    kicker: "Examination \u00b7 CPSA",
    title: "No chaperone offered",
    trap: "The examination needs doing and you want to get on with it, and offering a chaperone feels like a delay that breaks the flow. The trap is that for an intimate examination, the offer is not optional courtesy \u2014 it is the safeguard the station is checking for.",
    fails: [
    { lead: "No chaperone for an intimate exam.", body: "Proceeds without offering a chaperone where one is required. (App 1B, item 3)" },
    { lead: "Skips it to save time.", body: "Treats the offer as a formality to be dropped under pressure." },
    { lead: "No record of the offer.", body: "Fails to document that a chaperone was offered and the patient\u2019s response." }
    ],
    museum: "She explained the examination well and went straight to it, and the chaperone she never offered was the single mark the intimate station was built around.",
    rule: "Always offer a chaperone for an intimate examination \u2014 and document it."
  },
  {
    id: "exam-no-pain-check",
    cat: "danger",
    exam: "both",
    kicker: "Examination \u00b7 CPSA",
    title: "Hands before asking",
    trap: "You know the sequence and you go in to palpate, and asking \u2018is anything painful?\u2019 first feels like an interruption to the flow. The trap is that hurting the patient \u2014 or pressing on without warning \u2014 reads as carelessness.",
    fails: [
    { lead: "Examines without asking about pain.", body: "Palpates before checking where it hurts." },
    { lead: "Continues despite pain.", body: "Pushes on through a wince rather than stopping. (App 1B, item 80)" },
    { lead: "No warning before touching.", body: "Lays hands on without telling the patient what is coming." }
    ],
    museum: "He went straight in to palpate and the patient flinched, and he kept going \u2014 a small roughness that told the examiner more about his care than any manoeuvre could.",
    rule: "Ask \u2018is anything painful?\u2019 before you touch \u2014 and stop if it hurts."
  },
  {
    id: "exam-no-second-wash",
    cat: "danger",
    exam: "both",
    kicker: "Examination \u00b7 CPSA",
    title: "The forgotten second wash",
    trap: "You gelled at the start and your mind has moved on to the findings, so moving between patients or sites the hands never get cleaned again. The trap is that hygiene is not a one-time tick at the door.",
    fails: [
    { lead: "No hygiene between patients or sites.", body: "Cleans hands once and never again. (App 1B, item 76)" },
    { lead: "Reuses without cleaning.", body: "Moves from one examination to the next without re-gelling. (App 1B, item 82)" },
    { lead: "Forgets after gloves.", body: "Treats glove removal as a substitute for hand hygiene." }
    ],
    museum: "She gelled perfectly on the way in and not once after, moving between the bedside and the next task on hands that had stopped being clean ten minutes ago.",
    rule: "Clean your hands between every patient and every site \u2014 not just at the start."
  },
  {
    id: "exam-through-clothes",
    cat: "danger",
    exam: "both",
    kicker: "Examination \u00b7 CPSA",
    title: "Over the jumper",
    trap: "The patient is dressed and undressing feels like an imposition, so you listen and palpate over the clothing. The trap is that an examination through fabric is barely an examination at all.",
    fails: [
    { lead: "Examines through clothing.", body: "Auscultates or palpates over clothes rather than skin. (App 1B, item 81)" },
    { lead: "Avoids the awkwardness.", body: "Skips proper exposure to spare a moment of discomfort." },
    { lead: "Misses or muffles signs.", body: "Loses findings that only skin contact reveals." }
    ],
    museum: "He listened to the chest through a thick jumper, nodding at sounds he could barely hear \u2014 an examination performed over the clothing, and failed on the skin he never reached.",
    rule: "Examine skin-to-skin \u2014 not through clothing."
  },
  {
    id: "hist-chest-pain-radiation",
    cat: "comms",
    exam: "both",
    kicker: "History \u00b7 CPSA",
    title: "Where the pain goes",
    trap: "The pain is in the chest and you characterise it carefully \u2014 site, onset, character, timing. The trap is the one feature that points outward: candidates who drill the history still forget to ask where the pain travels.",
    fails: [
    { lead: "Never asks about radiation.", body: "Characterises the pain but omits where it spreads. (App 1B, item 73)" },
    { lead: "Misses the discriminating clue.", body: "Loses the radiation that separates cardiac from benign." },
    { lead: "Closes the history early.", body: "Moves on before the most telling question is asked. (App 1B, item 75)" }
    ],
    museum: "Her chest-pain history was immaculate and complete, save for one question \u2014 and the radiation to the jaw she never asked about was the clue the station turned on.",
    rule: "In chest pain, always ask where the pain goes."
  },
  {
    id: "hist-chest-pain-exertion",
    cat: "comms",
    exam: "both",
    kicker: "History \u00b7 CPSA",
    title: "Worse when you move?",
    trap: "You ask about the pain itself in detail and forget to ask about its relationship to effort. The trap is that exertional pain is the question that changes everything \u2014 and it is the one a smooth history glides past.",
    fails: [
    { lead: "Never asks about exertion.", body: "Omits whether the pain comes on or worsens with effort. (App 1B, item 70)" },
    { lead: "Misses the pattern.", body: "Loses the exertional signature that flags ischaemia." },
    { lead: "Reads a calm patient as a calm history.", body: "Lets a comfortable patient at rest substitute for the question." }
    ],
    museum: "He covered the pain in every dimension but one and never asked what happened when the patient climbed the stairs \u2014 the exertional history that would have changed the whole picture.",
    rule: "In chest pain, always ask if it is worse with exertion."
  },
  {
    id: "hist-chest-pain-associated",
    cat: "comms",
    exam: "both",
    kicker: "History \u00b7 CPSA",
    title: "And anything with it?",
    trap: "You lock onto the pain as the story and treat it as the whole presentation. The trap is the company the pain keeps \u2014 the breathlessness, sweating, nausea \u2014 that a pain-focused history forgets to gather.",
    fails: [
    { lead: "Never asks about associated symptoms.", body: "Characterises the pain in isolation. (App 1B, item 73)" },
    { lead: "Misses the autonomic clues.", body: "Loses the sweating, nausea or breathlessness that raise the stakes." },
    { lead: "Tunnel vision on the complaint.", body: "Treats the presenting symptom as the entire history." }
    ],
    museum: "The pain was the story and she told it well, and the sweating and breathlessness sitting alongside it were never asked about \u2014 the company the pain kept, and the company she missed.",
    rule: "In chest pain, always ask what came with it."
  },
  {
    id: "hist-headache-red-flags",
    cat: "comms",
    exam: "both",
    kicker: "History \u00b7 CPSA",
    title: "The thunderclap unasked",
    trap: "Most headaches are benign and you settle into a routine tension-headache history. The trap is that the one question that catches the dangerous headache \u2014 how suddenly it came on \u2014 is the one a routine history never reaches for.",
    fails: [
    { lead: "Never screens for red flags.", body: "Takes a headache history without screening for sudden onset or thunderclap. (App 1B, item 70)" },
    { lead: "Assumes benign.", body: "Lets the commonness of headache set the whole approach." },
    { lead: "Misses the time course.", body: "Never establishes how fast the headache reached its peak." }
    ],
    museum: "He worked through a tidy tension-headache history while the word \u2018sudden\u2019 \u2014 the one that mattered \u2014 was never spoken by either of them.",
    rule: "In headache, always ask about sudden onset."
  },
  {
    id: "hist-headache-neurology",
    cat: "comms",
    exam: "both",
    kicker: "History \u00b7 CPSA",
    title: "Just a headache",
    trap: "You frame it as a headache and keep the history in the head. The trap is that the neurology \u2014 weakness, vision, speech, the limbs \u2014 is the part a headache-shaped history forgets to ask about.",
    fails: [
    { lead: "No neurological screen.", body: "Takes a headache history with no neurological symptoms asked. (App 1B, item 70)" },
    { lead: "Stays local to the head.", body: "Treats a headache as a head problem, not a brain one." },
    { lead: "Misses the focal clue.", body: "Loses the weakness or visual change that reframes everything." }
    ],
    museum: "She asked all about the headache and nothing about the rest of the nervous system \u2014 and the arm that had felt odd for two days was never mentioned, because she never asked.",
    rule: "In every headache, ask about the neurology."
  },
  {
    id: "hist-headache-temporal-arteritis",
    cat: "comms",
    exam: "both",
    kicker: "History \u00b7 CPSA",
    title: "The jaw that aches",
    trap: "In an older patient with a headache you run the usual history, and temporal arteritis hides in plain sight. The trap is the unglamorous question \u2014 jaw pain on chewing, scalp tenderness \u2014 that a standard headache history never includes.",
    fails: [
    { lead: "Never asks the GCA questions.", body: "Omits jaw claudication, scalp tenderness and visual symptoms in an older patient. (Vol 2, Ch 28 \u2014 Eye Emergencies)" },
    { lead: "Misses the age clue.", body: "Treats an older patient\u2019s headache like a younger one\u2019s." },
    { lead: "Overlooks the sight risk.", body: "Fails to flag the headache that can take the vision \u2014 suspected GCA needs treating immediately, before the biopsy confirms it." }
    ],
    museum: "He took a thorough headache history from a woman in her seventies and never asked about her jaw \u2014 and the diagnosis that threatens sight slipped past for want of one question.",
    rule: "In an older patient\u2019s headache, ask about jaw pain on chewing \u2014 and if GCA is suspected, treat immediately; sight is at stake."
  },
  {
    id: "hist-weight-loss-cancer",
    cat: "comms",
    exam: "both",
    kicker: "History \u00b7 CPSA",
    title: "Just losing weight",
    trap: "Weight loss has a hundred benign explanations and you reach for the reassuring ones. The trap is the screen you skip \u2014 the \u2018any other symptoms?\u2019 that opens the door to the diagnosis no one wanted to ask about.",
    fails: [
    { lead: "Never screens for red flags.", body: "Takes a weight-loss history without screening for sinister causes. (App 1B, item 70)" },
    { lead: "Anchors on the benign.", body: "Settles on stress or diet before excluding the dangerous." },
    { lead: "Asks too narrowly.", body: "Never opens the broad \u2018anything else\u2019 that surfaces the missed symptom." }
    ],
    museum: "The weight loss had an easy explanation and she accepted it, and the question that would have surfaced the night sweats and the change in bowel habit was never asked.",
    rule: "In unexplained weight loss, always ask \u2018any other symptoms?\u2019"
  },
  {
    id: "pneumothorax-investigate-not-treat",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "The breathless box to tick",
    trap: "A breathless patient and your mind runs to the common causes \u2014 asthma, infection, anxiety \u2014 and a tension pneumothorax, which rewards instant action, gets queued for investigation instead. Treating a time-critical diagnosis as a thing to image is the trap.",
    fails: [
    { lead: "Investigates a tension pneumothorax.", body: "Orders imaging for a patient who needs immediate decompression, not a film." },
    { lead: "Misses it among the common causes.", body: "Anchors on asthma or infection and never considers the collapsed lung. (App 1B, item 90)" },
    { lead: "Delays escalation.", body: "Treats sudden severe breathlessness as something to work up at leisure. (App 1B, item 20)" }
    ],
    museum: "He reached for a chest film while the patient deteriorated \u2014 a sensible-looking next step for a diagnosis that needed hands, not pictures.",
    rule: "A tension pneumothorax is treated on recognition, not on imaging \u2014 act first."
  },
  {
    id: "acs-the-atypical-presentation",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "The MI that didn\u2019t hurt",
    trap: "You are watching for crushing central chest pain, and the elderly, diabetic or female patient with breathlessness, fatigue or epigastric discomfort does not fit the picture. The trap is that the textbook presentation is the one you wait for and the atypical one is the one that walks in.",
    fails: [
    { lead: "Waits for the classic picture.", body: "Discounts ACS because the pain is not textbook. (App 1B, item 90)" },
    { lead: "Misses the silent groups.", body: "Overlooks atypical presentations in the elderly, diabetic or female patient." },
    { lead: "Sends a high-risk patient home.", body: "Discharges without excluding a cardiac cause. (App 1B, item 13)" }
    ],
    museum: "She came with indigestion and breathlessness and not much pain, so it could not be her heart \u2014 except it was, and the absence of crushing chest pain was the only thing that fooled him.",
    rule: "Consider ACS even without classic chest pain \u2014 especially in the elderly, diabetic or female patient."
  },
  {
    id: "eth-blaming-the-last-doctor",
    cat: "ethics",
    exam: "both",
    kicker: "Professionalism \u00b7 CPSA",
    title: "The last doctor got it wrong",
    trap: "A patient arrives unhappy with previous care, and agreeing \u2014 \u2018they really should have caught that\u2019 \u2014 feels like being on the patient\u2019s side. The trap is that criticising a colleague to a patient looks like empathy and lands as unprofessionalism.",
    fails: [
    { lead: "Blames a colleague.", body: "Criticises previous care to the patient rather than addressing it properly. (App 1B, Ethical & Professional Collapse, items 46\u201355)" },
    { lead: "Deflects responsibility.", body: "Points at the system or another doctor instead of owning the next step." },
    { lead: "Undermines trust.", body: "Damages the patient\u2019s confidence in the whole team to side with them." }
    ],
    museum: "He wanted her to feel heard, so he agreed the last doctor had failed her \u2014 a moment of easy sympathy the examiner marked as throwing a colleague under the bus.",
    rule: "Never criticise a colleague to a patient \u2014 acknowledge their concerns and take ownership of the care you are providing now."
  },
  {
    id: "comms-the-hidden-agenda",
    cat: "comms",
    exam: "both",
    kicker: "Professionalism \u00b7 CPSA",
    title: "The real reason, unspoken",
    trap: "The patient gives you a presenting complaint and you run with it, and the thing they actually came about \u2014 a fear, a complaint, a request \u2014 stays behind their teeth. The trap is solving the stated problem while the real one walks back out the door.",
    fails: [
    { lead: "Never explores the real agenda.", body: "Takes the opening complaint as the whole reason for the visit. (App 1B, item 111)" },
    { lead: "Misses the cue.", body: "Walks past the hint that there is more they wanted to say." },
    { lead: "No invitation to say more.", body: "Never asks the open question that lets the hidden concern surface." }
    ],
    museum: "He answered the question she asked and never found the one she came to ask \u2014 and she left with the prescription she did not need and the worry she did.",
    rule: "Always ask if there is anything else \u2014 the real reason often comes last."
  },
  {
    id: "eth-social-media",
    cat: "ethics",
    exam: "both",
    kicker: "Professionalism \u00b7 CPSA",
    title: "The friend request",
    trap: "A patient finds you online, or you are tempted to look them up, and engaging feels harmless \u2014 just being human. The trap is that the professional boundary does not end at the clinic door, and social media is where it most quietly erodes.",
    fails: [
    { lead: "Connects with patients online.", body: "Accepts or makes social media contact with a patient. (App 1B, items 105\u2013108)" },
    { lead: "Shares identifiable material.", body: "Posts anything that could identify a patient. (App 1B, item 46)" },
    { lead: "Blurs the boundary.", body: "Lets an online relationship reshape the clinical one." }
    ],
    museum: "It seemed friendly to accept the request, and within a week the line between doctor and acquaintance had quietly dissolved on a screen.",
    rule: "Keep professional boundaries online \u2014 don\u2019t connect with or post about patients."
  },
  {
    id: "eth-whatsapp-photo",
    cat: "ethics",
    exam: "both",
    kicker: "Professionalism \u00b7 CPSA",
    title: "Just a quick photo",
    trap: "You want a colleague\u2019s opinion on a rash or a wound, and snapping it on your phone and sending it over feels efficient and modern. The trap is that a clinical image on a personal device through a personal app is a confidentiality breach wearing the disguise of good practice.",
    fails: [
    { lead: "Uses personal channels for patient data.", body: "Sends a clinical photo over a personal phone or app. (App 1B, item 46)" },
    { lead: "No consent for the image.", body: "Captures and shares without explicit consent. (App 1B, item 1)" },
    { lead: "Leaves data unsecured.", body: "Stores identifiable images where they should never sit. (App 1B, item 120)" }
    ],
    museum: "He sent the photo to get a quick second opinion, helpfully, instantly \u2014 and a patient\u2019s identifiable image now lived on a personal phone it should never have touched.",
    rule: "Use secure, approved channels for clinical images \u2014 and get consent first."
  },
  {
    id: "eth-corridor-consultation",
    cat: "ethics",
    exam: "both",
    kicker: "Professionalism \u00b7 CPSA",
    title: "Talking in the corridor",
    trap: "It is quicker to grab the moment \u2014 update the relative, discuss the case, hand over \u2014 right there in the corridor. The trap is that the convenience of the open space is exactly where confidentiality leaks.",
    fails: [
    { lead: "Discusses patients in public.", body: "Talks about a patient where others can hear. (App 1B, item 119)" },
    { lead: "No private space sought.", body: "Takes a sensitive conversation in an open area to save time." },
    { lead: "Leaves information exposed.", body: "Lets identifiable details carry across a public space. (App 1B, item 120)" }
    ],
    museum: "She updated the family in the corridor because the side room was busy, and the waiting bay learned a stranger\u2019s diagnosis along with them.",
    rule: "Take sensitive conversations to a private space \u2014 never the corridor."
  },
  {
    id: "rx-breastfeeding-forgotten",
    cat: "prescribing",
    exam: "both",
    kicker: "Prescribing \u00b7 CPSA",
    title: "The question after pregnancy",
    trap: "You remember to ask about pregnancy and feel you have covered the bases, and breastfeeding \u2014 the second question \u2014 never gets asked. The trap is that the safeguard you remember makes you forget the one beside it.",
    fails: [
    { lead: "Forgets breastfeeding.", body: "Asks about pregnancy but not breastfeeding before prescribing. (App 1B, item 28)" },
    { lead: "Assumes it does not apply.", body: "Decides the question is not relevant rather than asking it." },
    { lead: "Misses the infant exposure.", body: "Overlooks a drug that passes into breast milk." }
    ],
    museum: "He checked she was not pregnant, ticked the box in his mind, and prescribed \u2014 and the nursing infant his one extra question would have protected never crossed it.",
    rule: "Ask about breastfeeding as well as pregnancy before you prescribe."
  },
  {
    id: "rx-weekly-as-daily",
    cat: "prescribing",
    exam: "both",
    kicker: "Prescribing \u00b7 CPSA",
    title: "Once a week, not a day",
    trap: "You write the prescription on autopilot in the default daily frequency, and the drug that is meant to be taken weekly slips through in the usual rhythm. The trap is that the frequency, not the drug, is the error \u2014 and it is the box no one re-reads.",
    fails: [
    { lead: "Wrong frequency.", body: "Prescribes a weekly drug \u2014 classically methotrexate \u2014 at a daily frequency, an error that has killed. (App 1B, item 27)" },
    { lead: "Defaults without checking.", body: "Lets the standard daily template carry an unusual schedule." },
    { lead: "No frequency re-check.", body: "Never re-reads the directions against how the drug is actually taken." }
    ],
    museum: "It looked like every other prescription he wrote that day, and the one that should have said \u2018once weekly\u2019 said \u2018once daily\u2019 \u2014 a single word that turned a routine drug dangerous.",
    rule: "Check the frequency \u2014 some drugs, like methotrexate, are weekly, not daily."
  },
  {
    id: "rx-wrong-route",
    cat: "prescribing",
    exam: "both",
    kicker: "Prescribing \u00b7 CPSA",
    title: "The right drug, the wrong way in",
    trap: "You have the drug right and the dose right, and the route \u2014 the small word at the end \u2014 goes unchecked. The trap is that the part you treat as a formality is the part that can do the most harm.",
    fails: [
    { lead: "Wrong route.", body: "Prescribes the correct drug by an incorrect or unsafe route. (App 1B, item 30)" },
    { lead: "Treats route as an afterthought.", body: "Focuses on drug and dose and skims the route." },
    { lead: "No route re-check.", body: "Never confirms the route is right and safe for that drug." }
    ],
    museum: "The drug and the dose were perfect, and the route at the end of the line was wrong \u2014 the detail he was sure was the safe part of the prescription.",
    rule: "Check the route every time \u2014 the right drug by the wrong route can kill."
  },
  {
    id: "rx-wrong-units",
    cat: "prescribing",
    exam: "both",
    kicker: "Prescribing \u00b7 CPSA",
    title: "Micrograms, not milligrams",
    trap: "You write the number confidently and the unit beside it goes unexamined. The trap is that a thousand-fold error hides not in the figure but in the letters after it.",
    fails: [
    { lead: "Wrong units.", body: "Prescribes the right number with the wrong unit of measurement. (App 1B, item 27)" },
    { lead: "Abbreviates dangerously.", body: "Uses unclear unit shorthand that invites misreading." },
    { lead: "No unit re-check.", body: "Never reads the unit back as carefully as the number." }
    ],
    museum: "The number was right and the unit was out by a factor of a thousand, and he never looked at the part of the prescription that did the damage.",
    rule: "Check the units \u2014 micrograms and milligrams are a thousand-fold apart."
  },
  {
    id: "bbn-no-pause",
    cat: "bbn",
    exam: "both",
    kicker: "Breaking Bad News \u00b7 CPSA",
    title: "Filling the silence after",
    trap: "You deliver the news and the silence that follows is unbearable, so you rush to fill it with information and plans. The trap is that the pause is where the patient absorbs the news \u2014 and talking through it takes that moment away.",
    fails: [
    { lead: "No pause after the news.", body: "Moves straight to information without letting it land. (App 1B, item 59)" },
    { lead: "Talks over the shock.", body: "Fills the silence the patient needed to feel it." },
    { lead: "Rushes to the plan.", body: "Treats the management plan as more urgent than the moment." }
    ],
    museum: "He said the word and then kept talking, kindly, helpfully, without pause \u2014 and the patient heard none of the next five sentences because she was still hearing the first.",
    rule: "After bad news, stop and let the silence do its work."
  },
  {
    id: "bbn-hope-destroyer",
    cat: "bbn",
    exam: "both",
    kicker: "Breaking Bad News \u00b7 CPSA",
    title: "Taking all the hope",
    trap: "Being honest about a grim prognosis can tip into stripping away every shred of hope at once. The trap is that brutal honesty and good honesty are not the same \u2014 and a patient left with nothing to hold cannot hear anything else.",
    fails: [
    { lead: "Removes all hope at once.", body: "Delivers the worst case with no room left to stand." },
    { lead: "Confuses bluntness with honesty.", body: "Mistakes harshness for truthfulness. (App 1B, items 56\u201359)" },
    { lead: "Offers no realistic anchor.", body: "Leaves the patient with no next step, comfort or focus." }
    ],
    museum: "He told her the unvarnished worst in a single breath, every door closed at once \u2014 honest, and so total that she left with nowhere at all to put her feet.",
    rule: "Be honest and leave room for realistic hope \u2014 never take it all at once."
  },
  {
    id: "bbn-false-hope",
    cat: "bbn",
    exam: "both",
    kicker: "Breaking Bad News \u00b7 CPSA",
    title: "It\u2019ll all be fine",
    trap: "The patient is frightened and \u2018I\u2019m sure it\u2019ll be fine\u2019 feels like comfort. The trap is that a reassurance you cannot guarantee is a debt that comes due \u2014 and false hope is a kindness that betrays.",
    fails: [
    { lead: "Promises an outcome.", body: "Offers reassurance the evidence does not support. (App 1B, item 49)" },
    { lead: "Overpromises to soothe.", body: "Trades honesty for a moment of relief." },
    { lead: "Sets up the later blow.", body: "Builds an expectation that the truth will have to break." }
    ],
    museum: "He could not bear her fear, so he promised it would all be fine \u2014 and the promise he had no right to make made the truth, when it came, twice as cruel.",
    rule: "Never give hope you cannot justify \u2014 be honest, gently."
  },
  {
    id: "bbn-information-dump",
    cat: "bbn",
    exam: "both",
    kicker: "Breaking Bad News \u00b7 CPSA",
    title: "Everything at once",
    trap: "You have a great deal to convey and the urge is to get it all out \u2014 diagnosis, staging, options, prognosis \u2014 in one go. The trap is that a mind in shock holds almost nothing, and the dump drowns the one thing they needed.",
    fails: [
    { lead: "Delivers it all at once.", body: "Floods a patient in shock with information they cannot absorb." },
    { lead: "No chunking or checking.", body: "Never breaks the news into pieces with pauses between. (App 1B, item 96)" },
    { lead: "Mistakes completeness for care.", body: "Prioritises saying everything over the patient taking anything in." }
    ],
    museum: "She covered the diagnosis, the scan, the options and the odds in two unbroken minutes, and the patient remembered only that something was very wrong.",
    rule: "Give bad news in small chunks \u2014 pause and check between each."
  },
  {
    id: "bbn-no-understanding-check",
    cat: "bbn",
    exam: "both",
    kicker: "Breaking Bad News \u00b7 CPSA",
    title: "Did any of it land?",
    trap: "You have delivered the news as well as you can and you assume it has been understood. The trap is that shock scrambles comprehension \u2014 and a patient who nodded through a life-changing sentence may have grasped none of it.",
    fails: [
    { lead: "Never checks understanding.", body: "Ends the disclosure without confirming what the patient took in. (App 1B, item 96)" },
    { lead: "Reads composure as comprehension.", body: "Mistakes a calm exterior for an understood message." },
    { lead: "No teach-back.", body: "Never invites the patient to say back what they have understood." }
    ],
    museum: "He explained it gently and completely and never asked what she had heard \u2014 and she went home believing something far milder than the truth she had just been told.",
    rule: "After bad news, check what the patient has actually understood."
  },
  {
    id: "bbn-no-questions-invited",
    cat: "bbn",
    exam: "both",
    kicker: "Breaking Bad News \u00b7 CPSA",
    title: "No room for questions",
    trap: "The disclosure is done and you move to wrap up, and the space for the patient\u2019s questions never opens. The trap is that the questions are where the patient takes back some control \u2014 and closing without them leaves them stranded.",
    fails: [
    { lead: "Never invites questions.", body: "Closes the conversation without asking what the patient wants to know. (App 1B, item 59)" },
    { lead: "Rushes to leave.", body: "Treats the disclosure as finished once the news is said." },
    { lead: "Leaves them alone with it.", body: "Departs before the patient can ask the thing they most need to." }
    ],
    museum: "He delivered it well and stood to go, and the question she had been gathering the courage to ask was left unasked in an empty room.",
    rule: "Always invite questions after bad news \u2014 and make space to answer them."
  },
  {
    id: "sdm-imposed-plan",
    cat: "comms",
    exam: "both",
    kicker: "Shared Decision \u00b7 CPSA",
    title: "This is what we\u2019re doing",
    trap: "You know the right management and stating it plainly feels decisive and clear. The trap is that a plan announced rather than agreed skips the patient \u2014 and the station is testing for a decision made together.",
    fails: [
    { lead: "Imposes the plan.", body: "Tells the patient the management without negotiating it. (App 1B, item 112)" },
    { lead: "No options offered.", body: "Presents one path as the only path." },
    { lead: "Skips agreement.", body: "Never checks the patient is on board. (App 1B, item 122)" }
    ],
    museum: "His plan was correct and he delivered it like a verdict, and the patient \u2014 who had a view, and a life it had to fit \u2014 was informed of a decision she was never part of.",
    rule: "Decide with the patient, not for them \u2014 offer options and agree a plan."
  },
  {
    id: "sdm-never-asked-preferences",
    cat: "comms",
    exam: "both",
    kicker: "Shared Decision \u00b7 CPSA",
    title: "What matters to you?",
    trap: "You weigh the options clinically and reach the best answer on the medicine. The trap is that the best answer depends on what the patient values \u2014 and you never asked.",
    fails: [
    { lead: "Ignores patient preference.", body: "Chooses without asking what the patient wants. (App 1B, item 87)" },
    { lead: "Decides on clinical grounds alone.", body: "Treats the medical best as the personal best." },
    { lead: "No exploration of priorities.", body: "Never asks what matters most to this patient." }
    ],
    museum: "She picked the option with the best numbers and never asked the man whose life it was what he was hoping for \u2014 a sound decision made for the wrong person.",
    rule: "Ask what matters to the patient before you decide."
  },
  {
    id: "sdm-never-discussed-risks",
    cat: "comms",
    exam: "both",
    kicker: "Shared Decision \u00b7 CPSA",
    title: "The risks unspoken",
    trap: "The treatment is the right one and you want the patient to feel confident, so the risks go lightly mentioned or unmentioned. The trap is that consent without the risks is not consent \u2014 and the omission fails the station.",
    fails: [
    { lead: "Skips the major risks.", body: "Recommends without explaining the significant harms or side effects. (App 1B, item 91)" },
    { lead: "Sells, doesn\u2019t inform.", body: "Presents only the upside to secure agreement." },
    { lead: "No informed choice.", body: "Leaves the patient agreeing to something they were never fully told." }
    ],
    museum: "He explained how well it would work and not what it could cost, and she consented to a treatment whose risks she only met afterwards.",
    rule: "Always discuss the significant risks \u2014 consent needs the downside too."
  },
  {
    id: "sdm-never-checked-values",
    cat: "comms",
    exam: "both",
    kicker: "Shared Decision \u00b7 CPSA",
    title: "The line they wouldn\u2019t cross",
    trap: "You map out the options and assume the patient wants what most people want. The trap is the personal limit \u2014 the thing they would never accept \u2014 that you only discover by asking about their values, not their symptoms.",
    fails: [
    { lead: "Never asks about limits.", body: "Plans without learning what the patient would and would not accept. (App 1B, item 87)" },
    { lead: "Assumes shared values.", body: "Projects the average patient\u2019s wishes onto this one." },
    { lead: "Misses the red line.", body: "Recommends something the patient would have refused had they been asked." }
    ],
    museum: "He assumed she would want everything done, as most do, and never asked \u2014 and the aggressive option he advised was the one thing she had always sworn she would refuse.",
    rule: "Ask about the patient\u2019s limits and values before you recommend."
  },
  {
    id: "sdm-assumed-compliance",
    cat: "comms",
    exam: "both",
    kicker: "Shared Decision \u00b7 CPSA",
    title: "Assuming they\u2019ll take it",
    trap: "You hand over the plan and assume it will be followed. The trap is that a plan the patient cannot or will not follow is no plan \u2014 and never checking concordance is how good advice quietly fails.",
    fails: [
    { lead: "Assumes compliance.", body: "Takes for granted the patient will follow the plan. (App 1B, item 87)" },
    { lead: "No barriers explored.", body: "Never asks what might get in the way of following it." },
    { lead: "Mistakes agreement for action.", body: "Reads a nod as a guarantee." }
    ],
    museum: "He gave a perfect plan and assumed it would happen, and never asked about the cost, the schedule or the fear that meant it never would.",
    rule: "Check the plan is one the patient can actually follow \u2014 explore the barriers."
  },
  {
    id: "safeg-leading-questions",
    cat: "safeguarding",
    exam: "both",
    kicker: "Safeguarding \u00b7 CPSA",
    title: "Putting words in their mouth",
    trap: "You suspect what happened and you want to confirm it, so the questions start to suggest the answer. The trap is that a leading question in a safeguarding case contaminates the very disclosure it was trying to secure.",
    fails: [
    { lead: "Asks leading questions.", body: "Suggests the answer rather than letting the child or victim speak. (App 1B, item 74)" },
    { lead: "Contaminates the account.", body: "Shapes a disclosure that should have come unprompted." },
    { lead: "Closes down the openness.", body: "Replaces open exploration with confirmation-seeking." }
    ],
    museum: "She was sure of what had happened and asked questions that said so, and the disclosure she needed clean came out shaped by her own certainty.",
    rule: "Use open questions in safeguarding \u2014 never lead the account."
  },
  {
    id: "safeg-not-seen-alone",
    cat: "safeguarding",
    exam: "both",
    kicker: "Safeguarding \u00b7 CPSA",
    title: "Always with the parent",
    trap: "The parent is present and helpful and it feels natural to keep them in the room. The trap is that a child can only say certain things when the adult is not there \u2014 and never creating that space is how disclosures stay buried.",
    fails: [
    { lead: "Never sees the child alone.", body: "Conducts the assessment entirely in the parent\u2019s presence. (App 1B, Safeguarding Failure, items 36\u201340)" },
    { lead: "Misses the private disclosure.", body: "Closes the only door through which the child could speak." },
    { lead: "Defers to the adult\u2019s comfort.", body: "Prioritises the parent staying over the child\u2019s voice." }
    ],
    museum: "The parent never left and it never seemed necessary to ask them to, and the child sat through the whole assessment with something she could only have said alone.",
    rule: "Where appropriate, see the child alone \u2014 some things are only said in private."
  },
  {
    id: "safeg-never-escalated",
    cat: "safeguarding",
    exam: "both",
    kicker: "Safeguarding \u00b7 CPSA",
    title: "Keeping the concern to yourself",
    trap: "The concern is real but uncertain, and you do not want to overreact or cause trouble over a maybe. The trap is that safeguarding is not yours to resolve alone \u2014 and sitting on a concern is itself the failure.",
    fails: [
    { lead: "Never escalates.", body: "Holds a safeguarding concern instead of sharing it. (App 1B, item 40)" },
    { lead: "Waits for certainty.", body: "Treats doubt as a reason to stay silent rather than to ask." },
    { lead: "Fears overreacting.", body: "Lets worry about being wrong outweigh the child\u2019s safety." }
    ],
    museum: "It was only a feeling, he told himself, not enough to bother anyone with \u2014 and the concern he kept to himself was the one the system existed to hear.",
    rule: "Escalate any safeguarding concern \u2014 it is not yours to resolve or dismiss alone."
  },
  {
    id: "rem-confirm-identity",
    cat: "remote",
    exam: "both",
    kicker: "Remote \u00b7 CPSA",
    title: "Who am I speaking to?",
    trap: "The phone rings and you launch into the clinical problem, and confirming exactly who is on the line never happens. The trap is that everything you say next \u2014 advice, results, decisions \u2014 rests on an identity you never checked.",
    fails: [
    { lead: "Never confirms identity.", body: "Discusses a case without verifying who is on the call." },
    { lead: "Risks a confidentiality breach.", body: "Shares information with an unconfirmed caller. (App 1B, item 46)" },
    { lead: "Assumes the voice.", body: "Takes for granted the person is who they seem to be." }
    ],
    museum: "He answered the question and gave the result before he had ever established who was asking \u2014 and the confidentiality breach was complete before the clinical part began.",
    rule: "Confirm exactly who you are speaking to before you say anything."
  },
  {
    id: "rem-confirm-location",
    cat: "remote",
    exam: "both",
    kicker: "Remote \u00b7 CPSA",
    title: "Where are you right now?",
    trap: "You focus on the clinical story over the phone and never establish where the patient actually is. The trap is that if it turns into an emergency, the one thing you need \u2014 where to send help \u2014 is the thing you forgot to ask.",
    fails: [
    { lead: "Never asks the location.", body: "Manages a remote call without knowing where the patient is." },
    { lead: "Cannot direct help.", body: "Has no way to send an ambulance if it is needed. (App 1B, item 21)" },
    { lead: "Assumes home.", body: "Takes the patient\u2019s whereabouts for granted." }
    ],
    museum: "The call turned serious in an instant and he reached to send help \u2014 and realised he had never asked the one question, where are you, that would have let him.",
    rule: "On any remote call, establish where the patient is early."
  },
  {
    id: "rem-diagnosing-remotely",
    cat: "remote",
    exam: "both",
    kicker: "Remote \u00b7 CPSA",
    title: "Diagnosing down the line",
    trap: "The story sounds clear enough over the phone and committing to a diagnosis feels efficient. The trap is that the phone hides the things that examine the patient \u2014 the pallor, the work of breathing, the abdomen \u2014 and certainty without them is a guess.",
    fails: [
    { lead: "Diagnoses without examining.", body: "Commits to a diagnosis the phone cannot support." },
    { lead: "Overreads a remote story.", body: "Treats a reassuring account as a reassuring examination. (App 1B, item 90)" },
    { lead: "Misses what can\u2019t be heard.", body: "Loses the signs that only a face-to-face assessment reveals." }
    ],
    museum: "It sounded straightforward on the phone, so he committed to the benign diagnosis \u2014 and the things he could not see down the line were the things that mattered.",
    rule: "Don\u2019t commit to a diagnosis the phone can\u2019t support \u2014 when in doubt, see them."
  },
  {
    id: "rem-not-bringing-in",
    cat: "remote",
    exam: "both",
    kicker: "Remote \u00b7 CPSA",
    title: "Managing it on the phone",
    trap: "Bringing the patient in feels like an escalation, an inconvenience, an admission you cannot sort it remotely. The trap is that the reluctance to convert a call into a visit is exactly what leaves a sick patient at home.",
    fails: [
    { lead: "Keeps it remote when it shouldn\u2019t be.", body: "Manages on the phone a patient who needed to be seen." },
    { lead: "Underestimates from a distance.", body: "Lets the phone soften a picture that warranted a visit." },
    { lead: "Defaults to advice.", body: "Reaches for safety-net words where a face-to-face was the safe option." }
    ],
    museum: "He gave careful phone advice to a patient who needed eyes on her, and the visit that would have caught it was the step he talked himself out of.",
    rule: "If a remote assessment isn\u2019t enough, bring the patient in."
  },
  {
    id: "rem-missed-red-flags",
    cat: "remote",
    exam: "both",
    kicker: "Remote \u00b7 CPSA",
    title: "The red flags you didn\u2019t ask for",
    trap: "On the phone the conversation follows the patient\u2019s lead, and the structured red-flag screen that comes naturally in person quietly drops off. The trap is that the questions you must ask are the ones the patient will never volunteer.",
    fails: [
    { lead: "Skips the red-flag screen.", body: "Takes a remote history without actively screening for danger. (App 1B, item 70)" },
    { lead: "Follows, doesn\u2019t lead.", body: "Lets the patient set an agenda that omits the warning signs." },
    { lead: "Reassures on a partial picture.", body: "Safety-nets without having asked what would make it serious." }
    ],
    museum: "The call covered everything the patient thought to mention and none of the things she didn\u2019t, and the red flag sitting there unasked went home with her.",
    rule: "On the phone, actively screen for red flags \u2014 the patient won\u2019t raise them for you."
  },
  {
    id: "time-stuck-in-history",
    cat: "comms",
    exam: "both",
    kicker: "Time \u00b7 CPSA",
    title: "Lost in the history",
    trap: "The history is going well and feels productive, so you keep gathering. The trap is that a perfect history with no time left for management fails a station that needed a plan \u2014 thoroughness can run out the clock.",
    fails: [
    { lead: "Over-runs the history.", body: "Spends so long gathering that no time is left to manage. (App 1B, item 98)" },
    { lead: "No clock awareness.", body: "Loses track of how the station time is being spent." },
    { lead: "Never reaches the plan.", body: "Runs out before the management discussion the marks depend on." }
    ],
    museum: "Her history was the best the examiner saw all day, and the buzzer went before she had said a single word about what to do next.",
    rule: "Watch the clock \u2014 leave time to reach management."
  },
  {
    id: "time-no-management",
    cat: "comms",
    exam: "both",
    kicker: "Time \u00b7 CPSA",
    title: "No plan presented",
    trap: "You gather and explore and the station ends with the problem beautifully understood and nothing decided. The trap is that the marks live in the management \u2014 and a consultation that never lands a plan never scores them.",
    fails: [
    { lead: "Never presents a plan.", body: "Ends without a clear management plan. (App 1B, item 86)" },
    { lead: "Diagnoses but doesn\u2019t act.", body: "Reaches understanding and stops short of a plan." },
    { lead: "Leaves it open.", body: "Closes with vague intentions instead of decisions. (App 1B, item 98)" }
    ],
    museum: "He understood the case completely and proposed nothing, and the station ended on a problem perfectly described and entirely unmanaged.",
    rule: "Always reach a clear plan \u2014 understanding is not management."
  },
  {
    id: "time-cut-the-safety-net",
    cat: "comms",
    exam: "both",
    kicker: "Time \u00b7 CPSA",
    title: "The casualty of the clock",
    trap: "Time is running short and something has to give, and the safety-net \u2014 quick, easy to skip \u2014 is what gets cut. The trap is that the thing you drop to save thirty seconds is the thing the station marks hardest.",
    fails: [
    { lead: "Drops the safety-net under pressure.", body: "Cuts the safety-net advice to claw back time. (App 1B, item 95)" },
    { lead: "Rushes the close.", body: "Sacrifices the ending to the clock." },
    { lead: "Misjudges what to cut.", body: "Trims the highest-value step instead of a lower one." }
    ],
    museum: "With the buzzer looming she dropped the safety-net to fit everything else in \u2014 and cut the one line that would have passed the station.",
    rule: "Never let the clock cost you the safety-net \u2014 protect it first."
  },
  {
    id: "time-late-ice",
    cat: "comms",
    exam: "both",
    kicker: "Time \u00b7 CPSA",
    title: "ICE, eight minutes in",
    trap: "You get absorbed in the clinical history and remember to ask about ideas, concerns and expectations only near the end. The trap is that ICE asked too late cannot shape the consultation it was meant to steer \u2014 it becomes a tick, not a tool.",
    fails: [
    { lead: "Leaves ICE too late.", body: "Asks about ideas, concerns and expectations only at the end. (App 1B, item 69)" },
    { lead: "Can\u2019t act on it.", body: "Surfaces the patient\u2019s concern with no time left to address it." },
    { lead: "Treats ICE as a checkbox.", body: "Asks it to be seen to, not to use it." }
    ],
    museum: "He finally asked what worried her in the last minute, and her real concern \u2014 the one that should have shaped everything \u2014 arrived too late to change a thing.",
    rule: "Ask ICE early \u2014 it should steer the consultation, not close it."
  },
  {
    id: "psych-wanting-to-impress",
    cat: "comms",
    exam: "both",
    kicker: "Examiner Psychology \u00b7 CPSA",
    title: "Playing to the examiner",
    trap: "You want to show how much you know, so you reach for the advanced, the impressive, the clever. The trap is that the examiner is scoring the safe basics \u2014 and performing for them instead of the patient is how strong candidates fail simple stations.",
    fails: [
    { lead: "Shows off instead of passing.", body: "Chases impressive depth over the marked fundamentals." },
    { lead: "Performs for the examiner.", body: "Plays to the assessor rather than treating the patient." },
    { lead: "Skips the simple marks.", body: "Misses the easy points while reaching for the hard ones." }
    ],
    museum: "She displayed knowledge that would have impressed a consultant and missed the introduction, the consent and the safety-net that actually scored \u2014 dazzling, and failing.",
    rule: "Pass the station first \u2014 do the safe basics before the clever extras."
  },
  {
    id: "psych-perfect-diagnosis",
    cat: "comms",
    exam: "both",
    kicker: "Examiner Psychology \u00b7 CPSA",
    title: "Right diagnosis, failed station",
    trap: "You become absorbed in nailing the exact diagnosis, and the consultation skills \u2014 consent, communication, the patient \u2014 fade into the background. The trap is that PLAB 2 rewards the safe, humane consultation far more than the brilliant diagnosis.",
    fails: [
    { lead: "Pursues the diagnosis above all.", body: "Sacrifices communication and consent to chase the answer." },
    { lead: "Forgets the marked domains.", body: "Loses points on the skills the station actually tests." },
    { lead: "Treats the puzzle, not the patient.", body: "Solves the case and neglects the person." }
    ],
    museum: "He worked out the rare diagnosis no one expected and never gained consent, never explained, never connected \u2014 right about the disease and wrong about the station.",
    rule: "Diagnose, then consent and communicate \u2014 the marks are in how, not just what."
  },
  {
    id: "psych-the-nice-doctor",
    cat: "comms",
    exam: "both",
    kicker: "Examiner Psychology \u00b7 CPSA",
    title: "Kind but unsafe",
    trap: "You are warm, attentive and likeable, and it feels like that should carry the station. The trap is that kindness is necessary but not sufficient \u2014 a lovely consultation that misses a red flag or a safety step still fails.",
    fails: [
    { lead: "Relies on rapport alone.", body: "Lets warmth stand in for safety and structure." },
    { lead: "Misses the hard requirements.", body: "Is so pleasant that the red flag or the escalation slips. (App 1B, item 123)" },
    { lead: "Comforts without managing.", body: "Soothes the patient and never makes them safe." }
    ],
    museum: "Everyone liked her, the patient most of all, and she missed the one safety step the station was built on \u2014 kind, warm, and a fail.",
    rule: "Kindness isn\u2019t enough \u2014 be safe and structured as well as warm."
  },
  {
    id: "acute-cauda-equina",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "The back pain that wasn\u2019t simple",
    trap: "Back pain is common and benign nine times in ten, and you settle into a mechanical-back-pain consultation. The trap is that the questions that catch cauda equina \u2014 bladder, bowel, saddle, both legs \u2014 are the ones a routine back history never asks.",
    fails: [
    { lead: "Misses the cauda equina red flags.", body: "Takes a back-pain history without screening for bladder, bowel, saddle symptoms, or bilateral leg weakness or progressive neurological deficit. (App 1B, item 16)" },
    { lead: "Reassures on the common case.", body: "Lets the frequency of benign back pain set the whole approach." },
    { lead: "Delays the emergency referral.", body: "Treats a surgical emergency as something for physiotherapy and time. (App 1B, item 20)" }
    ],
    museum: "He ran a faultless mechanical-back-pain consultation and never asked about her waterworks \u2014 and the cauda equina that would cost her bladder went home with a leaflet on posture.",
    rule: "In every back pain, ask about bladder, bowel, saddle and bilateral leg weakness \u2014 and act fast if present."
  },
  {
    id: "acute-meningococcal-rash",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "Probably viral",
    trap: "A feverish, miserable child looks like the dozen viral illnesses you have seen this week, and \u2018probably viral\u2019 is the comfortable landing. The trap is the rash you did not look for and the rapid decline a snapshot cannot predict.",
    fails: [
    { lead: "Misses the non-blanching rash.", body: "Never fully examines the skin or performs the glass test." },
    { lead: "Anchors on viral.", body: "Lets the commonness of viral illness explain a child who is more unwell. (App 1B, item 22)" },
    { lead: "No serious safety-net.", body: "Sends them home without the specific red flags that mean returning at once. (App 1B, item 95)" }
    ],
    museum: "The child looked like every viral case that week, so she reassured the parents \u2014 and the non-blanching rash she never undressed him to see appeared an hour after they left.",
    rule: "Examine the skin and safety-net hard in any unwell, feverish child \u2014 a non-blanching rash is an emergency."
  },
  {
    id: "acute-paracetamol-od",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "The patient who feels fine",
    trap: "Hours after a paracetamol overdose the patient often looks and feels completely well, and that wellness invites you to relax. The trap is that paracetamol\u2019s danger is silent and delayed \u2014 the calm now is no reassurance about the liver later.",
    fails: [
    { lead: "Reads current wellness as safety.", body: "Lets a well-looking patient downgrade the urgency. (App 1B, item 90)" },
    { lead: "Misses the timing or the stagger.", body: "Fails to establish exactly when, and over how long, it was taken \u2014 a staggered overdose breaks the standard nomogram and needs specialist advice." },
    { lead: "Underplays the risk.", body: "Treats a quiet presentation as a low-risk one." }
    ],
    museum: "She looked completely well and said so cheerfully, and the candidate matched her calm \u2014 and the overdose whose harm had not yet shown was treated as though it never would.",
    rule: "In paracetamol overdose, the well-looking patient is still high-risk \u2014 establish the timing, and get specialist advice for a staggered overdose."
  },
  {
    id: "acute-ruptured-aaa",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "Renal colic, probably",
    trap: "An older man with sudden flank or back pain fits renal colic neatly, and the label arrives fast. The trap is that a ruptured aneurysm wears the same clothes \u2014 and anchoring on the common stone misses the catastrophe.",
    fails: [
    { lead: "Anchors on renal colic.", body: "Settles on a stone in an older patient without considering an aneurysm. (App 1B, item 90)" },
    { lead: "Skips the vascular thought.", body: "Never examines for a pulsatile mass or considers the aorta." },
    { lead: "Delays escalation.", body: "Works up the benign cause while the dangerous one bleeds \u2014 a haemodynamically unstable patient with a pulsatile mass needs vascular surgery now, not a CT. (App 1B, item 20)" }
    ],
    museum: "It looked exactly like renal colic and he treated it as renal colic \u2014 and the aneurysm leaking quietly in an older man\u2019s abdomen was never once considered.",
    rule: "In an older patient with sudden flank or back pain, think ruptured AAA before renal colic."
  },
  {
    id: "acute-pulmonary-embolism",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "The normal-looking chest",
    trap: "The patient is breathless or has pleuritic pain, the chest sounds clear and the obs are nearly normal, and a normal examination tempts you to stand down. The trap is that pulmonary embolism is the diagnosis that hides behind an unremarkable exam.",
    fails: [
    { lead: "Reassured by a clear chest.", body: "Lets a normal examination talk them out of PE. (App 1B, item 90)" },
    { lead: "Never asks the risk factors.", body: "Omits the immobility, surgery, malignancy or hormonal history that raise the odds. (App 1B, item 70)" },
    { lead: "Mislabels it.", body: "Files breathlessness under anxiety or a chest infection." }
    ],
    museum: "The chest was clear and the patient looked alright, so he reassured her \u2014 and the embolism that leaves the lungs sounding normal was never on his list.",
    rule: "A normal-looking chest does not exclude PE \u2014 ask the risk factors and consider it."
  },
  {
    id: "acute-compartment-syndrome",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "Just the fracture hurting",
    trap: "A patient in a cast or after an injury complains of severe, escalating pain, and it is easy to attribute it to the injury itself. The trap is pain out of proportion \u2014 the warning sign a candidate explains away as \u2018it\u2019s just the fracture\u2019.",
    fails: [
    { lead: "Attributes pain to the injury.", body: "Explains escalating pain as the expected pain of the fracture. (Vol 2, Ch 41 \u2014 Acute Surgical Emergencies)" },
    { lead: "Ignores pain out of proportion.", body: "Misses the hallmark of a limb-threatening emergency." },
    { lead: "Delays acting on the cast.", body: "Leaves a tight cast and a rising pain unescalated. (App 1B, item 20)" }
    ],
    museum: "The pain kept climbing and he kept reassuring her it was the fracture settling \u2014 and the compartment quietly strangling the limb was lost to the obvious explanation.",
    rule: "Pain out of proportion after injury is compartment syndrome until proven otherwise \u2014 escalate now."
  },
  {
    id: "acute-necrotising-fasciitis",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "It\u2019s just cellulitis",
    trap: "A red, painful leg looks like cellulitis, and cellulitis is what you treat. The trap is the patient who is more unwell than the skin explains \u2014 the pain out of proportion and the systemic toxicity that mark something far worse.",
    fails: [
    { lead: "Calls it cellulitis.", body: "Treats a rapidly spreading, exquisitely painful red leg as simple cellulitis. (App 1B, item 22)" },
    { lead: "Ignores the toxicity.", body: "Overlooks how systemically unwell the patient is for the skin findings." },
    { lead: "Delays surgical escalation.", body: "Manages medically what needs urgent surgical review. (App 1B, item 20)" }
    ],
    museum: "The leg looked like cellulitis and the antibiotics went up, and the speed of it and the patient\u2019s collapse never prompted the surgical call that might have saved the limb.",
    rule: "A red leg with pain out of proportion and a sick patient is necrotising fasciitis until excluded \u2014 escalate to surgery."
  },
  {
    id: "acute-epiglottitis-throat",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "Let me look in your throat",
    trap: "A patient \u2014 classically a child, but adults too \u2014 with a sore throat, drooling and stridor, and the instinct is to do what you always do: ask them to open wide and look. The trap is that in suspected epiglottitis, examining the throat can precipitate complete airway obstruction.",
    fails: [
    { lead: "Examines the throat.", body: "Attempts to inspect the throat of a patient with stridor and drooling. Routine Hib vaccination has made epiglottitis uncommon in children, but it remains a medical emergency and still occurs in adults \u2014 the same caution applies to them. (Vol 2, Ch 29 \u2014 Upper Airway & Stridor)" },
    { lead: "Distresses the child.", body: "Upsets a child whose airway depends on staying calm." },
    { lead: "Delays the airway call.", body: "Fails to keep the patient calm and summon senior airway help immediately. (App 1B, item 19)" }
    ],
    museum: "He asked the drooling, stridulous child to open wide, just as he would for any sore throat \u2014 and the examination itself was the thing that tipped the airway over.",
    rule: "In suspected epiglottitis \u2014 child or adult \u2014 do not examine the throat; keep them calm and call for senior airway help."
  },
  {
    id: "law-impaired-colleague",
    cat: "ethics",
    exam: "both",
    kicker: "Ethics & Law \u00b7 CPSA",
    title: "Covering for a colleague",
    trap: "A colleague is unwell, impaired or making errors, and loyalty and discomfort make you want to smooth it over privately. The trap is that protecting a colleague\u2019s feelings over patients\u2019 safety is itself the failure \u2014 patient safety outranks collegial loyalty.",
    fails: [
    { lead: "Protects the colleague over patients.", body: "Stays silent about an impaired or unsafe colleague. (App 1B, item 116)" },
    { lead: "Handles it too informally.", body: "Has a quiet word instead of escalating properly." },
    { lead: "Delays raising the concern.", body: "Waits for proof rather than acting on a genuine worry." }
    ],
    museum: "He liked her and did not want to make trouble, so he covered the gaps and said nothing \u2014 and the concern that should have gone up the line stayed loyally, dangerously, between them.",
    rule: "Patient safety outranks loyalty \u2014 raise concerns about an unsafe colleague through the proper channel."
  },
  {
    id: "law-duty-of-candour",
    cat: "ethics",
    exam: "both",
    kicker: "Ethics & Law \u00b7 CPSA",
    title: "The error you didn\u2019t mention",
    trap: "A mistake has happened and the patient does not yet know, and the instinct is to manage the consequences quietly and spare everyone the conversation. The trap is that being open about an error is a duty, not a choice \u2014 and concealment compounds the harm.",
    fails: [
    { lead: "Conceals the error.", body: "Manages the fallout without telling the patient what went wrong \u2014 the duty of candour is statutory, not optional, and applies whether or not the patient asks. (App 1B, item 50)" },
    { lead: "Minimises or deflects.", body: "Downplays the mistake rather than being honest about it." },
    { lead: "No apology or plan.", body: "Fails to apologise and explain what will be done. (App 1B, item 68)" }
    ],
    museum: "He fixed what he could and decided the patient need never know, kindly, to spare them worry \u2014 and the openness the duty of candour demanded was the thing he quietly withheld.",
    rule: "Be open when something goes wrong \u2014 explain, apologise, and say what happens next."
  },
  {
    id: "law-under-16-confidentiality",
    cat: "ethics",
    exam: "both",
    kicker: "Ethics & Law \u00b7 CPSA",
    title: "She\u2019s only fifteen",
    trap: "A young teenager asks for contraception or sexual-health advice, and her age makes you want to involve a parent or step back. The trap is that refusing to engage, or breaching her confidence, fails a competent young person the law actually protects.",
    fails: [
    { lead: "Breaches confidentiality.", body: "Assumes a parent must be told without assessing the situation. (App 1B, item 46)" },
    { lead: "Refuses to engage.", body: "Declines to help rather than assessing competence and safeguarding \u2014 and, for contraception, applying the Fraser guidelines." },
    { lead: "Skips the safeguarding screen.", body: "Misses the questions that separate a competent teenager from a child at risk." }
    ],
    museum: "She was fifteen, so he reached for her mother\u2019s name without thinking \u2014 and a competent young person who came for safe advice met a closed door and a broken confidence instead.",
    rule: "Assess Gillick competence before providing any treatment to a child under 16. For contraceptive advice, you must also satisfy the Fraser guidelines. Never assume a parent must be told."
  },
  {
    id: "law-driver-who-wont-stop",
    cat: "ethics",
    exam: "both",
    kicker: "Ethics & Law \u00b7 CPSA",
    title: "The driver who won\u2019t stop",
    trap: "A patient has a condition that means they must not drive, and they refuse to stop or inform the DVLA. The trap lies at both edges \u2014 doing nothing, or breaching confidence too soon \u2014 when the duty is to advise, document, and escalate properly if they continue.",
    fails: [
    { lead: "Ignores the driving duty.", body: "Never advises the patient they must stop and inform the DVLA. (App 1B, item 114)" },
    { lead: "Breaches confidence too readily.", body: "Reports without first advising and giving the patient the chance to act. (App 1B, item 115)" },
    { lead: "Leaves it unresolved.", body: "Documents nothing and makes no plan if the patient keeps driving." }
    ],
    museum: "He mentioned the diagnosis and never the driving, and the patient drove home from the appointment under a duty neither of them had spoken about.",
    rule: "Advise the patient to stop and notify the DVLA \u2014 document it, and escalate only if they keep driving."
  },
  {
    id: "law-dnacpr-avoidance",
    cat: "ethics",
    exam: "both",
    kicker: "Ethics & Law \u00b7 CPSA",
    title: "The conversation you avoided",
    trap: "A resuscitation or ceiling-of-care discussion is needed, and it is so uncomfortable that you skirt it, soften it into vagueness, or never quite have it. The trap is that avoiding the conversation, or having it badly, is itself the fail \u2014 these decisions must be discussed clearly and kindly.",
    fails: [
    { lead: "Avoids the discussion.", body: "Never has the resuscitation or ceiling-of-care conversation the case needs." },
    { lead: "Imposes without involving.", body: "Decides without exploring the patient\u2019s and family\u2019s understanding and wishes. (App 1B, item 112)" },
    { lead: "Hides behind euphemism.", body: "Is so vague the patient never understands what is being decided. (App 1B, item 57)" }
    ],
    museum: "He meant to raise it and kept not raising it, and the resuscitation decision that needed a gentle, honest conversation was made by everyone\u2019s silence instead.",
    rule: "Have the resuscitation conversation \u2014 clearly, kindly, and with the patient, not around them."
  },
  {
    id: "craft-task-not-read",
    cat: "comms",
    exam: "both",
    kicker: "Exam Craft \u00b7 CPSA",
    title: "Answering the wrong question",
    trap: "You read the candidate instructions quickly, your mind already racing ahead to the medicine, and you miss what the station is actually asking you to do. The trap is the most avoidable fail of all \u2014 a flawless performance of the wrong task.",
    fails: [
    { lead: "Misreads the task.", body: "Performs a different task than the one the instructions set." },
    { lead: "Skims the specifics.", body: "Misses the constraint, the focus, or the person they were told to address." },
    { lead: "Never re-checks.", body: "Commits to an assumption about the station and never verifies it." }
    ],
    museum: "She gave a beautiful explanation of the diagnosis \u2014 to a station that had asked her to take a focused history, and graded her on the thing she never did.",
    rule: "Read the task carefully and do exactly what it asks \u2014 a perfect answer to the wrong question still fails."
  },
  {
    id: "craft-angry-patient-logic",
    cat: "comms",
    exam: "both",
    kicker: "De-escalation \u00b7 CPSA",
    title: "Meeting anger with logic",
    trap: "An angry patient confronts you and you reach for facts, explanations and the reasonable case. The trap is that logic cannot reach a person who feels unheard \u2014 the acknowledgement has to come before the explanation.",
    fails: [
    { lead: "Explains before acknowledging.", body: "Answers anger with reasons instead of recognition. (App 1B, item 64)" },
    { lead: "Gets defensive.", body: "Treats the anger as something to argue down." },
    { lead: "Escalates the temperature.", body: "Lets the exchange become a debate the patient cannot win and will not concede." }
    ],
    museum: "He was right about every fact and met her fury with all of them, and each correct sentence made her angrier \u2014 because not one of them said he had heard her.",
    rule: "Acknowledge the feeling before you explain \u2014 you cannot reason with someone who feels unheard."
  },
  {
    id: "craft-crying-patient-fix",
    cat: "comms",
    exam: "both",
    kicker: "The Human Moment \u00b7 CPSA",
    title: "Fixing the tears",
    trap: "A patient breaks down and your instinct is to help \u2014 to offer a solution, a plan, a reassurance that makes it better. The trap is that reaching for the fix skips the moment the patient needed you simply to be with them.",
    fails: [
    { lead: "Jumps to solutions.", body: "Offers a plan when the patient needed acknowledgement first. (App 1B, item 60)" },
    { lead: "Talks through the tears.", body: "Fills the emotional moment with practical words." },
    { lead: "Rushes past the feeling.", body: "Treats distress as a problem to solve rather than a moment to hold." }
    ],
    museum: "She started to cry and he reached at once for something useful to say, kindly, helpfully \u2014 and the silence and the acknowledgement she actually needed never came.",
    rule: "When a patient cries, acknowledge and stay with it \u2014 don\u2019t rush to fix."
  },
  {
    id: "craft-collateral-history",
    cat: "comms",
    exam: "both",
    kicker: "Exam Craft \u00b7 CPSA",
    title: "The story you couldn\u2019t get",
    trap: "The patient is confused, drowsy or a child, and you do your best with the unreliable account in front of you. The trap is that the real history lives elsewhere \u2014 with the relative, the carer, the notes, the ambulance crew \u2014 and never reaching for it leaves you guessing.",
    fails: [
    { lead: "Never seeks the collateral.", body: "Accepts an incomplete account without seeking it from others. (App 1B, item 71)" },
    { lead: "Trusts an unreliable narrator.", body: "Builds a plan on a history the patient cannot give. (App 1B, item 73)" },
    { lead: "Misses the obvious source.", body: "Overlooks the relative, carer or record that holds the answer." }
    ],
    museum: "He took what history the confused patient could give and worked from it faithfully, and the daughter in the corridor \u2014 who knew everything \u2014 was never once asked.",
    rule: "When the patient can\u2019t tell the story, get it from someone or something that can."
  },
  {
    id: "craft-antibiotic-demand",
    cat: "comms",
    exam: "both",
    kicker: "Consultation Pressure \u00b7 CPSA",
    title: "They came for antibiotics",
    trap: "A patient firmly expects antibiotics they do not need, and the path of least resistance \u2014 and least conflict \u2014 is to prescribe and keep them happy. The trap is that caving to pressure, or refusing without explaining, both fail the station differently.",
    fails: [
    { lead: "Caves to pressure.", body: "Prescribes against the evidence to avoid the conflict." },
    { lead: "Refuses without explaining.", body: "Says no without exploring concerns or giving a reason the patient accepts. (App 1B, item 62)" },
    { lead: "No safety-net or shared plan.", body: "Leaves the patient unconvinced and without a clear what-if. (App 1B, item 95)" }
    ],
    museum: "She wanted antibiotics and meant to have them, and he gave them rather than have the conversation \u2014 a quiet surrender the station was built to test.",
    rule: "Don\u2019t cave and don\u2019t just refuse \u2014 explain, address the concern, and safety-net."
  },
  {
    id: "acute-aortic-dissection",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "Tearing to the back",
    trap: "Severe chest pain reads as ACS, and the ACS pathway \u2014 including the blood thinners \u2014 is right there. The trap is the dissection hiding inside the heart-attack picture, where the very treatment for one is catastrophic for the other.",
    fails: [
    { lead: "Anchors on ACS.", body: "Treats tearing chest pain as a heart attack without considering dissection. (App 1B, item 90)" },
    { lead: "Misses the discriminators.", body: "Never asks about a tearing quality or radiation to the back, or checks both arms for a blood-pressure difference over 20 mmHg." },
    { lead: "Heads toward the dangerous treatment.", body: "Moves to anticoagulate or thrombolyse a patient who may be dissecting \u2014 and a Type A dissection can mimic an inferior STEMI on the ECG. (App 1B, item 20)" }
    ],
    museum: "The pain was severe and central and he reached for the heart-attack pathway \u2014 and the tearing quality and the difference between the two arms were never the questions he asked.",
    rule: "In severe chest or back pain, consider aortic dissection before you treat it as ACS."
  },
  {
    id: "acute-hypoglycaemia",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "Drunk, or something else?",
    trap: "A confused, aggressive or drowsy patient is easy to label \u2014 intoxicated, difficult, psychiatric \u2014 and managed accordingly. The trap is the hypoglycaemia those labels hide, reversible in seconds and missed for want of a single test.",
    fails: [
    { lead: "Labels the behaviour.", body: "Attributes confusion or aggression to drink or a psychiatric cause." },
    { lead: "Never checks a glucose.", body: "Manages an altered patient without the one bedside test that explains them." },
    { lead: "Treats the label, not the cause.", body: "Acts on the assumption rather than excluding the reversible emergency." }
    ],
    museum: "He was aggressive and slurring and everyone assumed the obvious, and the glucose no one checked would have explained, and reversed, the whole thing in a minute.",
    rule: "Check a blood glucose in every confused or altered patient \u2014 hypoglycaemia hides behind every label."
  },
  {
    id: "acute-neutropenic-sepsis",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "A fever after chemo",
    trap: "A patient on chemotherapy phones or attends with what sounds like a minor fever, and a mild temperature in a well-seeming person invites a watch-and-wait. The trap is that in the neutropenic patient, that fever is an emergency that cannot wait.",
    fails: [
    { lead: "Underplays the fever.", body: "Treats a fever in a chemotherapy patient as a routine viral illness. (App 1B, item 22)" },
    { lead: "Misses the neutropenic context.", body: "Never connects the recent chemotherapy to the urgency." },
    { lead: "Delays treatment.", body: "Waits or sends home rather than giving antibiotics within one hour of recognition. (App 1B, item 20)" }
    ],
    museum: "It was only a low-grade fever and she seemed well enough, so he advised fluids and rest \u2014 and the neutropenic sepsis that needed treating within the hour was sent home to wait.",
    rule: "A fever in a chemotherapy patient is neutropenic sepsis until proven otherwise \u2014 antibiotics within one hour of recognition."
  },
  {
    id: "acute-cord-compression",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "Back pain with a history of cancer",
    trap: "A patient with known cancer reports worsening back pain, and back pain is so ordinary that it gets an ordinary response. The trap is malignant cord compression \u2014 a window that closes fast, behind a symptom that looks like nothing.",
    fails: [
    { lead: "Treats it as simple back pain.", body: "Manages new back pain in a cancer patient without considering cord compression. (Vol 2, Ch 40 \u2014 Haematology & Oncology Emergencies)" },
    { lead: "Misses the neurology.", body: "Never asks about weakness, sensory change or bladder and bowel function." },
    { lead: "Delays the urgent referral.", body: "Loses the narrow window in which function can be saved by not arranging a same-day MRI of the whole spine. (App 1B, item 20)" }
    ],
    museum: "The cancer was old news and the back pain seemed unrelated, so he reassured her \u2014 and the cord compression that would take her legs was treated as a strain.",
    rule: "New back pain with neurology in a cancer patient is cord compression until excluded \u2014 arrange a same-day MRI of the whole spine."
  },
  {
    id: "acute-pre-eclampsia",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "Just a pregnancy headache",
    trap: "A headache, some swelling, a little epigastric discomfort in a pregnant woman are easy to wave off as the ordinary aches of pregnancy. The trap is that those same symptoms are how severe pre-eclampsia announces itself \u2014 quietly, until it doesn\u2019t.",
    fails: [
    { lead: "Dismisses the symptoms as normal.", body: "Attributes headache, swelling or epigastric pain to ordinary pregnancy. (Vol 2, Ch 34 \u2014 obstetric presentations)" },
    { lead: "Never checks the blood pressure.", body: "Misses the one measurement that reframes the whole picture." },
    { lead: "Delays escalation.", body: "Treats a pre-eclamptic woman as a routine review. (App 1B, item 20)" }
    ],
    museum: "She had a headache and swollen ankles, as pregnant women do, and he reassured her \u2014 and the pre-eclampsia building behind the everyday symptoms went unchecked.",
    rule: "In pregnancy, treat headache, swelling or epigastric pain as pre-eclampsia until the blood pressure says otherwise."
  },
  {
    id: "law-blood-refusal",
    cat: "consent",
    exam: "both",
    kicker: "Ethics & Law \u00b7 CPSA",
    title: "Refusing the blood",
    trap: "A capacitous adult refuses a blood transfusion you believe could save them, and every instinct screams to persuade, pressure, or quietly plan around it. The trap is that a competent refusal must be respected \u2014 overriding it, however well-meant, is the fail.",
    fails: [
    { lead: "Overrides a capacitous refusal.", body: "Plans to transfuse despite a competent, informed refusal. (App 1B, item 6)" },
    { lead: "Pressures the patient.", body: "Pushes or coerces rather than exploring and respecting the decision. (App 1B, item 5)" },
    { lead: "Skips the careful conversation.", body: "Fails to confirm capacity, explore alternatives and document clearly." }
    ],
    museum: "He could not accept that she would refuse the thing that might save her, so he kept pushing \u2014 and the competent refusal he was meant to respect became the line he tried to cross.",
    rule: "Respect a capacitous refusal \u2014 even of life-saving treatment; explore, confirm capacity, and do not override it."
  },
  {
    id: "safeg-domestic-abuse",
    cat: "safeguarding",
    exam: "both",
    kicker: "Safeguarding \u00b7 CPSA",
    title: "The disclosure you steered",
    trap: "A patient hints at, or discloses, abuse at home, and the urge to help becomes the urge to fix \u2014 telling them to leave, to report, to act now. The trap is that directing a frightened person, or never creating the safe space to disclose, both fail them.",
    fails: [
    { lead: "Tells them what to do.", body: "Pushes the patient to leave or report rather than supporting their choices. (App 1B, item 37)" },
    { lead: "Never asks safely.", body: "Misses the disclosure by never seeing the patient alone or asking sensitively." },
    { lead: "Forgets the children.", body: "Overlooks the safeguarding of any children in the home. (App 1B, item 40)" }
    ],
    museum: "She disclosed it quietly and he told her, kindly and at once, that she had to leave him \u2014 and the support she needed became one more person telling her what to do.",
    rule: "Support, don\u2019t direct \u2014 ask safely, respect the patient\u2019s choices, and safeguard any children."
  },
  {
    id: "law-patient-wants-to-leave",
    cat: "consent",
    exam: "both",
    kicker: "Ethics & Law \u00b7 CPSA",
    title: "The patient who wants to leave",
    trap: "A high-risk patient \u2014 confused, suicidal, or acutely unwell \u2014 announces they are leaving, and you are caught between letting them walk and physically stopping them. The trap is both edges: allowing a patient who lacks capacity or is at serious risk to leave, or unlawfully detaining one who is free to.",
    fails: [
    { lead: "Lets a high-risk patient walk.", body: "Allows someone who lacks capacity or is acutely at risk to leave unassessed. (App 1B, item 23)" },
    { lead: "Never assesses capacity or risk.", body: "Reacts to the situation without the assessment that should drive it." },
    { lead: "Detains without lawful basis.", body: "Holds a capacitous patient with no proper legal framework." }
    ],
    museum: "He let the quiet, determined patient leave rather than make a scene, and the capacity and the risk he never assessed walked out of the door with her.",
    rule: "When a patient wants to leave, assess capacity and risk first \u2014 then act within the law, neither detaining nor abandoning."
  },
  {
    id: "reason-second-pathology",
    cat: "danger",
    exam: "both",
    kicker: "Clinical Reasoning \u00b7 CPSA",
    title: "The diagnosis that explained everything",
    trap: "A patient with a known chronic condition presents acutely, and the existing diagnosis is right there to absorb every new symptom \u2014 the chest pain is the anxiety, the breathlessness is the COPD, the headache is the migraine. The trap is that a known diagnosis becomes a shield against seeing a new one.",
    fails: [
    { lead: "Folds new findings into the old label.", body: "Explains the acute presentation with the chronic diagnosis. (App 1B, item 90)" },
    { lead: "Never asks \u2018what if it\u2019s something new\u2019.", body: "Treats the established diagnosis as the only possible explanation." },
    { lead: "Misses the second illness.", body: "Lets the familiar condition hide an unrelated emergency." }
    ],
    museum: "He had COPD and anxiety on file, so the breathlessness was filed under both \u2014 and the pulmonary embolism that had nothing to do with either was never considered.",
    rule: "When a patient with a known condition presents acutely, ask if the old diagnosis really explains the new picture."
  },
  {
    id: "reason-normal-for-the-range",
    cat: "danger",
    exam: "both",
    kicker: "Clinical Reasoning \u00b7 CPSA",
    title: "Normal for the range, not the patient",
    trap: "A result sits inside the reference range and you read it as reassurance. The trap is that the reference range is a population tool, not a patient one \u2014 a \u2018normal\u2019 number can be badly abnormal for the person in front of you.",
    fails: [
    { lead: "Reads the range, not the patient.", body: "Accepts an in-range result without asking what is normal for this person. (App 1B, item 25)" },
    { lead: "Ignores the baseline.", body: "Misses a creatinine that is normal for a young man but renal failure for a frail older woman." },
    { lead: "Treats \u2018just below threshold\u2019 as negative.", body: "Dismisses a borderline result against a high pre-test probability." }
    ],
    museum: "Her creatinine was \u2018normal\u2019 and he moved on, and the number that was perfectly fine for a twenty-year-old was quiet renal failure for the eighty-year-old it belonged to.",
    rule: "Read the result against the patient, not just the reference range."
  },
  {
    id: "reason-unexpected-normal",
    cat: "danger",
    exam: "both",
    kicker: "Clinical Reasoning \u00b7 CPSA",
    title: "The reassuring negative",
    trap: "A test comes back normal when you expected it to be abnormal, and the relief makes you accept it. The trap is that an implausibly normal result deserves as much suspicion as an unexpectedly abnormal one \u2014 it may be the lab, the timing, or the wrong test.",
    fails: [
    { lead: "Reads the negative as reassurance.", body: "Accepts an unexpected normal result without questioning it." },
    { lead: "Ignores the pre-test probability.", body: "Lets one negative test override a strong clinical suspicion. (App 1B, item 25)" },
    { lead: "Forgets the timing.", body: "Treats an early or single result as a complete exclusion." }
    ],
    museum: "The troponin was negative at three hours and he relaxed, and the crushing pain and the changing ECG that said otherwise were quietly outvoted by one early result.",
    rule: "An unexpectedly normal result earns as much scrutiny as an unexpectedly abnormal one."
  },
  {
    id: "acute-carbon-monoxide",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "Waiting for the cherry-red",
    trap: "You half-remember that carbon monoxide turns the skin cherry-red, and a normal-looking, normally-saturating patient does not fit. The trap is that cherry-red skin is late and rare, the oximeter reads falsely normal, and the diagnosis is missed while you wait for a sign that never comes.",
    fails: [
    { lead: "Waits for cherry-red skin.", body: "Relies on a late, unreliable sign to make the diagnosis." },
    { lead: "Trusts the normal SpO2.", body: "Forgets that pulse oximetry cannot distinguish carboxyhaemoglobin from oxygen. (App 1B, item 90)" },
    { lead: "Misses the clues.", body: "Overlooks the headache, nausea and the whole household being unwell together." }
    ],
    museum: "His sats were normal and his colour was fine, so it could not be carbon monoxide \u2014 and the boiler poisoning the whole family went unsuspected because the textbook sign never showed.",
    rule: "Suspect carbon monoxide on the story, not the skin \u2014 the oximeter lies; give high-flow oxygen."
  },
  {
    id: "acute-ovarian-torsion",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "The normal Doppler",
    trap: "Sudden severe pelvic pain in a woman of reproductive age, and the Doppler shows normal flow, which feels like reassurance. The trap is that blood flow is often preserved in a torted ovary \u2014 a normal Doppler does not exclude it, and waiting for it to be abnormal loses the ovary.",
    fails: [
    { lead: "Trusts a normal Doppler.", body: "Lets preserved flow on ultrasound talk them out of torsion." },
    { lead: "Mislabels the pain.", body: "Files sudden pelvic pain under UTI, renal colic or appendicitis. (App 1B, item 90)" },
    { lead: "Delays the surgical referral.", body: "Waits for imaging certainty in a time-critical emergency. (App 1B, item 20)" }
    ],
    museum: "The Doppler showed flow and he was reassured, and the ovary twisting despite it was lost to an investigation that was never going to rule it out.",
    rule: "Sudden severe pelvic pain is ovarian torsion until a surgeon says otherwise \u2014 a normal Doppler does not exclude it."
  },
  {
    id: "acute-limb-ischaemia",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "The wrong kind of leg",
    trap: "A painful, abnormal leg has two opposite stories \u2014 the warm swollen DVT and the cold pulseless ischaemic limb \u2014 and the management of one harms the other. The trap is reaching for the duplex-and-anticoagulate reflex when the leg is actually a vascular emergency.",
    fails: [
    { lead: "Misreads the cold leg as a DVT.", body: "Treats a pale, pulseless, painful limb as a clot to anticoagulate and scan." },
    { lead: "Misses the six Ps.", body: "Overlooks pallor, pulselessness, paraesthesia, paralysis, pain and perishing cold." },
    { lead: "Wastes the window.", body: "Sends a true arterial occlusion for a duplex instead of calling vascular now. (App 1B, item 20)" }
    ],
    museum: "The leg was painful and swollen-looking, so he booked a duplex and started anticoagulation \u2014 and the cold, pulseless, dying limb needed a vascular surgeon an hour ago.",
    rule: "A cold, pale, pulseless leg is acute ischaemia \u2014 call vascular now; don\u2019t treat it as a DVT."
  },
  {
    id: "wernicke-thiamine-before-glucose",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "Glucose before thiamine",
    trap: "A malnourished or alcohol-dependent patient is about to be started on intravenous dextrose or refed, and the glucose is the obvious first move. The trap is that giving a glucose load before thiamine in a thiamine-deficient patient can precipitate Wernicke\u2019s encephalopathy \u2014 though the order must never delay emergency treatment of actual hypoglycaemia.",
    fails: [
    { lead: "Gives a glucose load first.", body: "Starts a dextrose infusion or refeeds a thiamine-deficient patient before giving thiamine." },
    { lead: "Prescribes oral thiamine.", body: "Relies on tablets where absorption is impaired and intravenous thiamine is needed." },
    { lead: "Misses the at-risk patient.", body: "Overlooks the alcohol-dependent, malnourished or hyperemetic patient." }
    ],
    museum: "He set up the dextrose infusion for a malnourished, alcohol-dependent patient, sensibly, and never thought of the thiamine that should have gone up first \u2014 and the Wernicke\u2019s that followed was the harm the order exists to prevent.",
    rule: "In a patient at nutritional risk, give thiamine before or alongside a glucose load \u2014 but never delay emergency glucose for symptomatic hypoglycaemia."
  },
  {
    id: "acute-tca-overdose",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "The widening QRS",
    trap: "A tricyclic overdose is deteriorating and the rhythm is broadening, and the instinct is to reach for an antiarrhythmic. The trap is that in TCA toxicity the widening QRS is the warning, and the answer is sodium bicarbonate \u2014 the usual antiarrhythmics make it worse.",
    fails: [
    { lead: "Reaches for an antiarrhythmic.", body: "Treats the broadening rhythm with drugs that worsen TCA toxicity." },
    { lead: "Waits for the arrhythmia.", body: "Watches the QRS widen instead of acting on it." },
    { lead: "Misses the bicarbonate.", body: "Forgets that sodium bicarbonate, not an antiarrhythmic, narrows the QRS. (App 1B, item 25)" }
    ],
    museum: "The QRS kept widening and he reached for the antiarrhythmic he knew best \u2014 and the bicarbonate that would have saved the rhythm was the one thing he never gave.",
    rule: "In TCA overdose a widening QRS means sodium bicarbonate \u2014 not an antiarrhythmic."
  },
  {
    id: "acute-lp-antibiotic-delay",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "Antibiotics can wait for the scan",
    trap: "Suspected bacterial meningitis, and the plan is to scan, then tap, then treat \u2014 a tidy, logical order. The trap is that delaying antibiotics for the CT or the LP kills; in meningitis, the antibiotics come first, and the scan never justifies the wait.",
    fails: [
    { lead: "Delays antibiotics for the scan.", body: "Holds treatment until after the CT or LP. (App 1B, item 20)" },
    { lead: "Misorders the steps.", body: "Treats the lumbar puncture as more urgent than the first dose of antibiotics." },
    { lead: "Forgets when CT is even needed.", body: "Scans everyone, or no one \u2014 CT first only for focal signs, reduced GCS or immunosuppression." }
    ],
    museum: "He sent her for the scan first, correctly cautious, and the antibiotics waited politely behind the imaging \u2014 and in meningitis that wait was the fail.",
    rule: "In suspected bacterial meningitis, give antibiotics first \u2014 never delay them for the scan or the LP."
  },
  {
    id: "acute-epistaxis-position",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "Tilt your head back",
    trap: "A nosebleed, and the instinct \u2014 the one everyone\u2019s grandmother taught \u2014 is to tilt the head back so the blood stops running out. The trap is that leaning back sends blood down the throat, and pinching the bony bridge does nothing; the technique most candidates use is the wrong one.",
    fails: [
    { lead: "Leans the patient back.", body: "Tilts the head backwards so blood runs into the airway and stomach." },
    { lead: "Pinches the wrong place.", body: "Squeezes the bony bridge instead of the soft part of the nose." },
    { lead: "Releases too soon.", body: "Lets go to check after a couple of minutes and restarts the clock." }
    ],
    museum: "He sat the patient back with their head tilted up, just as he\u2019d always seen it done \u2014 and the blood ran quietly down the throat while the bleeding point was never pressed.",
    rule: "Lean the patient forward, pinch the soft part of the nose, and hold without releasing for ten minutes."
  },
  {
    id: "rx-heparin-induced-thrombocytopenia",
    cat: "prescribing",
    exam: "both",
    kicker: "Prescribing \u00b7 CPSA",
    title: "The falling platelets on heparin",
    trap: "A patient on heparin has falling platelets, and the instinct is to monitor more closely or trim the dose. The trap is that heparin-induced thrombocytopenia is an immune reaction, not a dose effect \u2014 and paradoxically it clots rather than bleeds; the only safe move is to stop all heparin.",
    fails: [
    { lead: "Reduces the dose.", body: "Treats HIT as a dose-related effect rather than an immune reaction." },
    { lead: "Misses the thrombosis risk.", body: "Forgets that HIT causes clotting, so simply stopping anticoagulation is not enough." },
    { lead: "Leaves a hidden heparin source.", body: "Stops the infusion but forgets the flushes and heparin-coated lines." }
    ],
    museum: "The platelets were dropping so he halved the heparin and watched \u2014 and the immune reaction that needed every trace of heparin stopped clotted off a limb instead.",
    rule: "Falling platelets on heparin is HIT until excluded \u2014 stop all heparin and switch to a non-heparin anticoagulant."
  },
  {
    id: "rx-iv-potassium-bolus",
    cat: "prescribing",
    exam: "both",
    kicker: "Prescribing \u00b7 CPSA",
    title: "Pushing the potassium",
    trap: "The potassium is low and needs replacing, and giving it quickly feels like good, decisive correction. The trap is that potassium given fast or concentrated stops the heart \u2014 a rapid IV bolus is a Never Event, and the urge to hurry is the danger.",
    fails: [
    { lead: "Gives it too fast.", body: "Pushes potassium quickly instead of diluted and slow." },
    { lead: "Gives it too concentrated.", body: "Runs a concentration too high for a peripheral line." },
    { lead: "Skips the monitoring.", body: "Replaces potassium rapidly without cardiac monitoring." }
    ],
    museum: "He wanted the potassium corrected quickly and ran it fast \u2014 and the bolus that felt efficient stopped the heart it was meant to protect.",
    rule: "Never give potassium as a rapid or concentrated IV bolus \u2014 dilute it, run it slowly, and monitor."
  },
  {
    id: "rx-triple-whammy",
    cat: "prescribing",
    exam: "both",
    kicker: "Prescribing \u00b7 CPSA",
    title: "The painkiller you added",
    trap: "An older patient wants something for musculoskeletal pain, and an NSAID is the obvious, easy answer. The trap is the combination you didn\u2019t check for \u2014 an NSAID on top of an ACE inhibitor and a diuretic is the \u2018triple whammy\u2019 that tips the kidneys into failure.",
    fails: [
    { lead: "Adds an NSAID blind.", body: "Prescribes an NSAID without reading the existing list. (App 1B, item 31)" },
    { lead: "Misses the triple combination.", body: "Overlooks an NSAID plus ACE inhibitor or ARB plus diuretic." },
    { lead: "Forgets the at-risk patient.", body: "Ignores the dehydrated or elderly patient most likely to be tipped into AKI." }
    ],
    museum: "He gave a simple anti-inflammatory for a sore back, helpfully, and never saw the ACE inhibitor and the diuretic already there \u2014 and the three together quietly shut the kidneys down.",
    rule: "Before adding an NSAID, check for an ACE inhibitor or ARB and a diuretic \u2014 the triple whammy causes AKI."
  },
  {
    id: "rx-valproate-restrictions",
    cat: "prescribing",
    exam: "both",
    kicker: "Prescribing \u00b7 CPSA",
    title: "Valproate for a young woman",
    trap: "Valproate is the right drug for the condition, and you prescribe it as you would for anyone. The trap is that the rules around valproate have tightened sharply \u2014 the drug is correct and the context now makes it a prescribing error.",
    fails: [
    { lead: "Ignores the initiation restriction.", body: "For anyone under 55, initiating valproate requires two specialists to independently document no alternative effective or tolerated treatment, or that reproductive risks do not apply \u2014 for men and women equally. (App 1B, item 28)" },
    { lead: "Misses who the programme covers.", body: "Women of childbearing potential must additionally be enrolled in the Pregnancy Prevention Programme. Men already established on valproate do not need the dual specialist review, but should be asked at annual review about family planning and referred if relevant." },
    { lead: "Misses the safer alternative.", body: "Never considers whether another drug would avoid the risk altogether." }
    ],
    museum: "He prescribed the right drug for her epilepsy the way he always had \u2014 and the tightened valproate rules, the programme and the two-specialist sign-off, were things he had never caught up with.",
    rule: "For anyone under 55, two specialists must independently document there is no alternative \u2014 men and women equally; women of childbearing potential must also be in the Pregnancy Prevention Programme."
  },
  {
    id: "mh-first-episode-psychosis",
    cat: "comms",
    exam: "both",
    kicker: "Mental Health \u00b7 CPSA",
    title: "The word you reached for",
    trap: "A young person presents with their first psychotic episode, and the diagnosis that springs to mind \u2014 schizophrenia \u2014 wants to be said out loud. The trap is that naming schizophrenia at a first presentation is premature, often wrong, and does lasting harm to a frightened patient.",
    fails: [
    { lead: "Says \u2018schizophrenia\u2019 too soon.", body: "Applies a heavy, possibly incorrect label at first presentation. (App 1B, item 57)" },
    { lead: "Catastrophises or withholds.", body: "Either frightens the patient with the label or tells them nothing at all." },
    { lead: "Misses the referral.", body: "Never routes them to early intervention in psychosis services." }
    ],
    museum: "He named schizophrenia to a terrified nineteen-year-old at the very first visit, and a word that may not even have been right became the thing she carried for years.",
    rule: "At a first presentation of psychosis, avoid premature diagnostic labels like \u2018schizophrenia\u2019 \u2014 formulate the symptoms, offer hope, and refer to early intervention services."
  },
  {
    id: "mh-delirium-sedate-first",
    cat: "danger",
    exam: "both",
    kicker: "Mental Health \u00b7 CPSA",
    title: "Reaching for the haloperidol",
    trap: "A confused, agitated older patient is hard to manage, and sedation promises quick calm. The trap is that most delirium has a reversible cause, and sedating first means treating the agitation while the infection, the pain or the constipation behind it goes unfound.",
    fails: [
    { lead: "Sedates before searching.", body: "Reaches for haloperidol before looking for the cause." },
    { lead: "Skips the reversible causes.", body: "Forgets to screen pain, infection, constipation, hydration, medication and environment." },
    { lead: "Misses the precipitant.", body: "Treats the symptom and never finds the urinary infection or the opioid behind it." }
    ],
    museum: "He calmed her with a quick sedative and felt he had managed the delirium \u2014 and the urinary infection driving the whole thing was never looked for.",
    rule: "In delirium, find and treat the cause first \u2014 sedation is a last resort, not a first move."
  },
  {
    id: "mh-eating-disorder-looks-well",
    cat: "danger",
    exam: "both",
    kicker: "Mental Health \u00b7 CPSA",
    title: "She looks well enough",
    trap: "A patient with an eating disorder is composed, articulate and looks reasonably well, and admission feels like an overreaction. The trap is that severe anorexia is medically dangerous long before it looks dramatic \u2014 the calm, well-presenting patient can be the one closest to collapse.",
    fails: [
    { lead: "Judges risk on appearance.", body: "Admits only when the patient \u2018looks very unwell\u2019 rather than on objective risk." },
    { lead: "Misses the physical danger.", body: "Overlooks the cardiac, electrolyte and circulatory risks behind a composed exterior." },
    { lead: "Underestimates the urgency.", body: "Treats a medically high-risk patient as a routine outpatient. (App 1B, item 90)" }
    ],
    museum: "She was polite and capable and looked fine, so he arranged a routine follow-up \u2014 and the heart that was quietly failing on too little for too long did not look fine at all.",
    rule: "In an eating disorder, judge medical risk on the measurements, not on how well the patient looks."
  },
  {
    id: "law-advance-directive",
    cat: "consent",
    exam: "both",
    kicker: "Ethics & Law \u00b7 CPSA",
    title: "But the family disagrees",
    trap: "A patient has a valid, applicable advance decision refusing treatment, and now they cannot speak for themselves while the family pleads for everything to be done. The trap is overriding the advance decision under that pressure \u2014 a valid one carries the same force as a competent refusal made in person.",
    fails: [
    { lead: "Overrides under family pressure.", body: "Sets aside a valid advance decision because relatives disagree. (App 1B, item 11)" },
    { lead: "Substitutes best interests.", body: "Decides the treatment would help and so ignores the refusal." },
    { lead: "Never checks validity.", body: "Fails to confirm the advance decision is valid and applicable to this situation." }
    ],
    museum: "The family begged him to treat and he could not refuse them, so he set the advance decision aside \u2014 and the refusal that had the force of law was overruled by the people who loved her most.",
    rule: "A valid, applicable advance decision must be followed \u2014 it overrides family wishes and your own view."
  },
  {
    id: "law-fluctuating-capacity",
    cat: "consent",
    exam: "both",
    kicker: "Ethics & Law \u00b7 CPSA",
    title: "The blanket label",
    trap: "A patient with dementia or delirium needs decisions made, and it is tempting to settle the question once \u2014 they have capacity, or they don\u2019t. The trap is that capacity is decision-specific and time-specific; a single blanket label is wrong whichever way it falls.",
    fails: [
    { lead: "Applies a blanket label.", body: "Declares the patient to have, or lack, capacity for everything at once." },
    { lead: "Ignores the decision in question.", body: "Forgets that capacity for a blood test differs from capacity for surgery." },
    { lead: "Ignores the time of day.", body: "Misses that a patient may have capacity in the morning and not by evening." }
    ],
    museum: "He decided early that she lacked capacity, full stop, and never revisited it \u2014 and the decisions she could have made for herself were quietly taken from her by a single word.",
    rule: "Assess capacity for the specific decision, at the specific time \u2014 never as a blanket label."
  },
  {
    id: "eth-second-opinion",
    cat: "ethics",
    exam: "both",
    kicker: "Professionalism \u00b7 CPSA",
    title: "You want to see someone else?",
    trap: "A patient asks to see another doctor, and it lands as a verdict on your competence. The trap is meeting the request with defensiveness or persuasion \u2014 a patient has every right to a second opinion, and resisting it is the fail.",
    fails: [
    { lead: "Takes it as a challenge.", body: "Treats the request as an attack on their competence. (App 1B, item 55)" },
    { lead: "Defends or dissuades.", body: "Argues their own view or implies the other doctor will only agree." },
    { lead: "Makes the patient feel difficult.", body: "Leaves them feeling awkward for asking something entirely reasonable." }
    ],
    museum: "She asked to see someone else and he heard it as doubt in him, so he talked her round \u2014 and the simple right to a second opinion became a small battle she had to win.",
    rule: "Facilitate a second opinion graciously \u2014 it is the patient\u2019s right, not a judgement on you."
  },
  {
    id: "bbn-am-i-dying",
    cat: "bbn",
    exam: "both",
    kicker: "Breaking Bad News \u00b7 CPSA",
    title: "Am I dying?",
    trap: "A seriously ill patient asks the question directly \u2014 \u2018am I dying?\u2019 \u2014 and the two easy escapes are to deflect it or to answer with the unsoftened worst. The trap is doing either; the question first needs exploring before it can be answered.",
    fails: [
    { lead: "Deflects the question.", body: "Steers away with \u2018let\u2019s focus on the treatment\u2019 rather than engaging." },
    { lead: "Delivers the unmodified worst.", body: "Answers with a bleak prognosis they were never asked for. (App 1B, item 56)" },
    { lead: "Never explores the why.", body: "Fails to ask what prompts the question and what they want to know." }
    ],
    museum: "She asked if she was dying and he answered the literal question with the whole bleak truth at once \u2014 and never found out that she was really asking whether she would see Christmas.",
    rule: "When asked \u2018am I dying?\u2019, explore first \u2014 \u2018what makes you ask?\u2019 \u2014 then answer honestly, in stages."
  },
  {
    id: "craft-interpreter",
    cat: "comms",
    exam: "both",
    kicker: "The Human Moment \u00b7 CPSA",
    title: "Talking to the interpreter",
    trap: "With an interpreter in the room, it feels natural to address them \u2014 \u2018ask her how long she\u2019s had the pain.\u2019 The trap is that the moment you speak to the interpreter instead of the patient, you lose the patient: the eye contact, the rapport, the whole human channel.",
    fails: [
    { lead: "Speaks to the interpreter.", body: "Says \u2018ask her\u2026\u2019 instead of speaking to the patient directly. (App 1B, item 66)" },
    { lead: "Uses a family member.", body: "Relies on a relative to translate sensitive information instead of a professional interpreter." },
    { lead: "Loses the non-verbal.", body: "Faces and watches the interpreter, missing the patient\u2019s expression entirely." }
    ],
    museum: "He ran the whole consultation through the interpreter, eyes on the wrong person, and the patient \u2014 spoken about rather than to \u2014 slowly stopped being in the room at all.",
    rule: "Speak directly to the patient in the first person \u2014 a professional interpreter relays, but the consultation is with the patient."
  },
  {
    id: "safeg-nai-patterns",
    cat: "safeguarding",
    exam: "both",
    kicker: "Safeguarding \u00b7 CPSA",
    title: "The injury you looked at",
    trap: "A child has a visible injury and you assess the injury in front of you. The trap is that non-accidental injury reveals itself in the pattern, not the single mark \u2014 and a candidate who looks only at the obvious bruise misses the constellation that is diagnostic.",
    fails: [
    { lead: "Looks at the visible injury only.", body: "Assesses the presenting mark without considering the pattern. (App 1B, item 36)" },
    { lead: "Misses the specific signs.", body: "Overlooks the injuries that point to abuse rather than accident." },
    { lead: "Skips the wider assessment.", body: "Never seeks the fuller picture that would reveal the pattern." }
    ],
    museum: "He treated the bruise that was in front of him and signed the child off, and the pattern across the whole small body \u2014 the thing that was actually diagnostic \u2014 was never assembled.",
    rule: "In a child, read the pattern, not just the presenting injury \u2014 the diagnosis is in the whole picture."
  },
  {
    id: "craft-door-handle-question",
    cat: "comms",
    exam: "both",
    kicker: "The Human Moment \u00b7 CPSA",
    title: "Actually, doctor\u2026",
    trap: "The consultation is wrapping up, your hand is almost on the door, and the patient says \u2018actually, doctor, there\u2019s one more thing.\u2019 The trap is treating that late disclosure as an inconvenience to brush past \u2014 the door-handle moment is often where the real concern, or the red flag, finally appears.",
    fails: [
    { lead: "Brushes off the late concern.", body: "Treats the door-handle disclosure as outside the consultation and dismisses it." },
    { lead: "Misses the red flag.", body: "Loses the serious symptom the patient was building up the courage to mention. (App 1B, item 111)" },
    { lead: "Lets the clock decide.", body: "Uses \u2018we\u2019re out of time\u2019 to avoid engaging with what was just raised." }
    ],
    museum: "Her hand was on the door when he said \u2018actually, doctor, I\u2019ve been getting chest pain too\u2019 \u2014 and she smiled, said to book another appointment, and walked out past the thing the station was about.",
    rule: "Take the door-handle concern seriously \u2014 \u2018actually, doctor\u2026\u2019 is often the real reason they came."
  },
  {
    id: "acute-quiet-abdomen",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "The soft, unimpressive abdomen",
    trap: "You examine the abdomen and it feels soft and unremarkable, and a gentle examination reassures you. The trap is that early appendicitis, a contained perforation or bowel ischaemia can sit behind an underwhelming abdomen \u2014 the examination findings can lag the disease.",
    fails: [
    { lead: "Reads a soft abdomen as a safe one.", body: "Lets an unimpressive examination outweigh a worrying history. (App 1B, item 90)" },
    { lead: "Ignores pain out of proportion.", body: "Dismisses severe pain that the examination does not seem to justify." },
    { lead: "No reassessment or safety-net.", body: "Sends the patient home without serial review or clear return advice. (App 1B, item 84)" }
    ],
    museum: "The abdomen was soft and barely tender, so he reassured her and sent her home \u2014 and the appendix that had not yet declared itself perforated overnight.",
    rule: "A soft abdomen does not exclude a surgical one \u2014 respect pain out of proportion, reassess, and safety-net."
  },
  {
    id: "acute-collapse-abcde",
    cat: "danger",
    exam: "both",
    kicker: "Acute \u00b7 CPSA",
    title: "Straight to the diagnosis",
    trap: "A patient has collapsed and your mind races to work out why \u2014 was it the heart, a bleed, a fit? The trap is diagnosis-hunting on an unstable patient instead of starting with A to E; the cause can wait, the airway cannot.",
    fails: [
    { lead: "Hunts the diagnosis first.", body: "Reaches for the cause before assessing airway, breathing and circulation. (App 1B, item 18)" },
    { lead: "Skips the systematic approach.", body: "Abandons the A-to-E structure that keeps a collapsed patient safe." },
    { lead: "Misses the reversible problem.", body: "Overlooks the obstructed airway or the falling blood pressure while theorising." }
    ],
    museum: "He stood at the bedside working out the differential while the patient\u2019s airway quietly closed \u2014 a clever diagnosis arrived at too late to matter.",
    rule: "In any collapsed patient, start with A to E \u2014 stabilise first, diagnose second."
  },
  {
    id: "bias-representativeness",
    cat: "danger",
    exam: "both",
    kicker: "Cognitive Bias \u00b7 CPSA",
    title: "It doesn\u2019t fit the picture",
    trap: "A presentation doesn\u2019t match the textbook picture of a serious diagnosis, so you set that diagnosis aside. The trap is representativeness \u2014 judging by how closely the case resembles the classic prototype, and dismissing the atypical presentation that is exactly how the dangerous version often shows up.",
    fails: [
    { lead: "Dismisses the atypical.", body: "Rules out a serious diagnosis because it doesn\u2019t fit the classic picture. (App 1B, item 90)" },
    { lead: "Trusts the prototype.", body: "Lets the textbook presentation define what counts as the disease." },
    { lead: "Misses the at-risk groups.", body: "Forgets that the elderly, diabetic or immunosuppressed often present unrepresentatively." }
    ],
    museum: "It didn\u2019t look like the textbook case, so he crossed it off \u2014 and the atypical presentation he dismissed was simply how the diagnosis looks in the patient who doesn\u2019t read the textbook.",
    rule: "Don\u2019t dismiss a diagnosis just because it doesn\u2019t fit the classic picture \u2014 the dangerous version is often atypical."
  }
];
