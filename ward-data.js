/* AMaC Foundation — Ward door data. DRAFT until senior sign-off.
   Spec: "Ward Door — Spec v0.1" (Docs). Task Card template: good · before · steps · words · stop · record · local · next.
   No numeric thresholds or time limits without a dated authoritative source (numbers rule). */
window.WD_MODULES = [
  { n: 1, name: 'The ward round and the list', planned: 4 },
  { n: 2, name: 'Results and handover', planned: 4 },
  { n: 3, name: 'Getting patients home', planned: 3 },
  { n: 4, name: 'Talking with patients and families', planned: 3 },
  { n: 5, name: 'Consent, capacity and safeguarding', planned: 6 },
  { n: 6, name: 'Care at the end of life', planned: 3 },
  { n: 7, name: 'Infection prevention', planned: 1 }
];

window.WD_CARDS = [
  {
    id: 'WD-01-01', mod: 1, title: 'Being the FY1 on a ward round',
    jur: 'UK-wide', fpcP: 'FPC5 Continuity of care', fpcS: 'FPC2 Clinical prioritisation', status: 'DRAFT',
    good: 'Every patient leaves the round knowing the plan, the notes record what was decided and why, and every job has an owner and a time. On the round you are its memory: you capture decisions accurately and turn them into actions.',
    before: [
      'Know your patients: overnight events, new results, the observations trend, the drug chart and yesterday’s outstanding jobs.',
      'Update the list for bed moves and new admissions.',
      'Ask the nurse in charge who they are worried about, and suggest the round sees the sickest patients first.'
    ],
    steps: [
      'When asked, give a short summary: who the patient is, why they are here, what changed overnight and today’s issues.',
      'Write as the round happens, not afterwards from memory.',
      'Read the plan back before moving on, and ask about anything you did not catch.',
      'Add each job to the list as it is decided: patient, task and how urgent it is.',
      'Involve the patient’s nurse at the bedside, and make sure the plan has been explained to the patient (and, with consent, family) and that they understood it.',
      'After the round, order the jobs: unwell patients and time-critical tasks first, then jobs that unblock discharges.'
    ],
    pitfall: 'A vague plan such as “review tomorrow” that nobody can act on. Ask what should happen, by when, and what would change it.',
    words: [
      '“Overnight, Mrs A needed more oxygen. Today’s issues are her chest and her discharge plan.”',
      '“Before we move on, can I check the plan: …?”',
      '“I didn’t catch the duration. Could you repeat it?”',
      '“If her bloods come back abnormal, who should I tell?”'
    ],
    stop: [
      'A patient looks unwell and the round is moving on: say so at the bedside.',
      'A plan conflicts with something you know, such as an allergy or an agreed ceiling of care.',
      'You are asked to do something you are not trained or competent to do.',
      'The round is ending and a plan, or escalation status, is still unclear: ask before the senior leaves.'
    ],
    record: 'Date, time, who led the round and who was present; key findings; the impression; a plan written as actions; any discussion of escalation or resuscitation status; what the patient was told; your name, role and signature as your employer requires. Correct errors according to local policy, never by overwriting.',
    local: [
      'When and where the round starts, and whether a board round or safety huddle comes first.',
      'How the jobs list is kept (electronic or paper) and who updates the patient list.',
      'Which documentation template your ward uses for ward-round entries.'
    ],
    next: { ext: 'WD-01-02 The jobs list: capture, prioritise, close (coming in this module)' },
    sources: 'Royal College of Physicians and Royal College of Nursing, Modern ward rounds (2021); GMC, Good medical practice (2024); Professional Record Standards Body, Generic medical record keeping standards.'
  },
  {
    id: 'WD-05-03', mod: 5, title: 'Assessing capacity',
    jur: 'Check your nation and employer', fpcP: 'FPC11 Ethics and law', fpcS: 'FPC4 Communication and care', status: 'DRAFT',
    good: 'Assess capacity for one decision at one time. Presume capacity, help the person decide, and record your reasoning. An unwise choice is not, by itself, a lack of capacity.',
    before: [
      'Be clear what the decision is and what the person needs to know: the options and their main risks and benefits.',
      'Treat reversible causes first where you can (pain, low oxygen, infection, low glucose, medicines) and ask whether the decision can wait.',
      'Arrange support: hearing aids, glasses, a professional interpreter rather than family, a quiet place.',
      'Check for an advance decision or statement, or a legal proxy (attorney, deputy, guardian); the terms differ by nation.'
    ],
    steps: [
      'Explain the decision in plain language, in small pieces, and ask them to tell it back in their own words.',
      'With open questions, explore whether they can understand, retain, and use or weigh the information, and communicate a choice (England, Wales, Northern Ireland, Jersey). Scotland’s Act asks whether they can act, make, communicate, understand or remember the decision.',
      'If they cannot, ask why: an impairment or disturbance of the mind or brain (England and Wales; similar in Northern Ireland and Jersey), or mental disorder or physical inability to communicate (Scotland).',
      'If unsure, reassess later and seek senior or specialist advice.',
      'If they lack capacity for this decision: England, Wales, Jersey and Northern Ireland use best interests (Northern Ireland under the parts in force or common law). In Scotland, act only to benefit them, least restrictively, taking account of their wishes; non-urgent treatment needs a section 47 certificate from the practitioner primarily responsible, not usually the FY1.'
    ],
    pitfall: 'Deciding someone lacks capacity because they disagree with medical advice.',
    words: [
      '“Can you tell me in your own words what we have talked about?”',
      '“What makes you lean towards that choice?”'
    ],
    stop: [
      'The decision is serious, contested or urgent and you are unsure, or the patient, family or team disagree.',
      'Restraint or restricting liberty might be needed.',
      'You are asked to assess for a treatment you cannot explain: usually the proposing clinician assesses (England and Wales) or the responsible practitioner certifies (Scotland).'
    ],
    record: 'The decision; information and support given; findings for each ability, in their own words; conclusion and reasons; who was involved; date, time and plan to reassess.',
    local: [
      'Which law and code apply, and your employer’s capacity form.',
      'Northern Ireland: the 2016 Act is only partly in force, so check the current position.',
      'Crown Dependencies have their own law, for example Jersey’s Capacity and Self-Determination (Jersey) Law 2016.',
      'Liaison psychiatry contact.',
      'Patients under 16 or 18: a different framework applies; see WD-05-05 or ask a senior.'
    ],
    next: { ext: 'WD-05-04 Best interests (coming in this module). For a refusal on call, see Bleep Card BLEEP-50.', href: 'bleep-cards.html#BLEEP-50' },
    sources: 'Mental Capacity Act 2005 and Code of Practice (2007); A Local Authority v JB [2021] UKSC 52; Adults with Incapacity (Scotland) Act 2000 and Part 5 Code of Practice; Mental Capacity Act (Northern Ireland) 2016; Capacity and Self-Determination (Jersey) Law 2016; GMC, Decision making and consent (2020).'
  }
];
