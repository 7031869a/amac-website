/* AMaC Foundation — Develop door data. DRAFT until senior sign-off.
   Spec: "Develop Door — Spec v0.1" (Docs). Same Task Card template as Ward and Prescribe.
   Four-nation facts checked 5 October 2026; every framework names its nation. */
window.DV_MODULES = [
  { n: 1, name: 'Safety and learning', planned: 3 },
  { n: 2, name: 'Professional standards', planned: 4 },
  { n: 3, name: 'Your training', planned: 5 },
  { n: 4, name: 'Growing as a doctor', planned: 3 },
  { n: 5, name: 'Your working life', planned: 1 }
];

window.DV_CARDS = [
  {
    id: 'DV-01-01', mod: 1, title: 'How organisations learn from incidents',
    jur: 'Check your nation and employer', fpcP: 'FPC9 Quality improvement', fpcS: 'FPC8 Upholding values', status: 'DRAFT',
    good: 'You report incidents and near misses, take part honestly in the learning that follows, and understand that the aim is to make care safer by improving systems, not to blame individuals.',
    before: [
      'Know which framework your employer uses. England: the Patient Safety Incident Response Framework (PSIRF). Scotland: Healthcare Improvement Scotland’s national framework for learning from adverse events. Wales: the NHS Wales National Policy on Patient Safety Incident Reporting and Management, with concerns handled under Putting Things Right. Northern Ireland: the serious adverse incident procedure, which is being redesigned.',
      'Know your employer’s incident reporting system (see Starting Out for the local route).'
    ],
    steps: [
      'Report incidents and near misses promptly, with facts rather than opinions.',
      'If you are asked to contribute to a learning response, such as a review, a debrief or a written account, take part openly.',
      'If asked for a written account, keep to facts: what you saw, did and knew at the time, with times. Ask your supervisor to read it, and seek advice from your medical defence organisation if the incident is serious.',
      'Read the findings that come back, and apply the learning to your own practice.',
      'Reflect on the incident in your portfolio (DV-03-05).'
    ],
    pitfall: 'Not reporting near misses because “nothing happened”. Near misses show where the next harm will come from.',
    words: [
      '“I’d like to report a near miss so we can stop it happening again.”',
      '“Could you read my account before I send it?”'
    ],
    stop: [
      'A patient is at risk now: act first and report afterwards.',
      'You feel blamed or unsupported after an incident: talk to your educational supervisor.',
      'You are asked to change an account or not to report: raise a concern (DV-01-03).'
    ],
    record: 'The incident report reference, your factual account if requested, and your reflection.',
    local: [
      'Your employer’s incident framework and reporting system.',
      'Who leads patient safety and learning in your department.',
      'Support available after an incident, including from your foundation school.'
    ],
    next: { to: 'DV-01-02' },
    sources: 'NHS England, Patient Safety Incident Response Framework; Healthcare Improvement Scotland, Learning from adverse events through reporting and review: a national framework for Scotland; NHS Wales Executive, National Policy on Patient Safety Incident Reporting and Management (WHC/2023/017); NHS Wales, Putting Things Right; Department of Health Northern Ireland, Framework for learning and improvement from patient safety incidents (consultation).'
  },
  {
    id: 'DV-01-02', mod: 1, title: 'The duty of candour',
    jur: 'Check your nation and employer', fpcP: 'FPC8 Upholding values', fpcS: 'FPC11 Ethics and law', status: 'DRAFT',
    good: 'When something goes wrong in a patient’s care, you are open and honest with them, apologise, explain what happened and what will happen next, and support your organisation in meeting its legal duty.',
    before: [
      'Know the two duties. The professional duty applies to every doctor across the UK. The statutory duty applies to organisations in England, Wales and Scotland, under each nation’s law. Northern Ireland has consulted on a statutory duty but does not yet have one.',
      'Know who in your organisation leads candour conversations and records them.'
    ],
    steps: [
      'Make sure the patient, or those close to them, are told promptly when something has gone wrong that has caused, or could cause, harm or distress.',
      'Apologise, explain what you know, and say what will happen next and who will keep them informed.',
      'Involve your senior: the formal candour process is usually led by a senior clinician.',
      'Tell your organisation, through the incident system, so the statutory process can start where it applies.',
      'Record the conversation.'
    ],
    pitfall: 'Waiting for the investigation to finish before saying anything to the patient.',
    words: [
      '“I’m sorry. Something went wrong with your care, and I want to explain what we know so far.”',
      '“We are looking into it, and Dr A will keep you updated.”'
    ],
    stop: [
      'You are unsure whether the incident meets your organisation’s threshold for the statutory duty: ask your senior or the patient safety team.',
      'Anyone suggests not telling the patient: raise it with your senior or the patient safety team (DV-01-03).',
      'The patient wants to make a complaint: give them the route.'
    ],
    record: 'Who was told, by whom, when, what was said, the apology, and what follow-up was promised.',
    local: [
      'Your organisation’s candour policy and who leads it.',
      'How candour conversations are recorded.'
    ],
    next: { to: 'DV-01-03' },
    sources: 'GMC and NMC, Openness and honesty when things go wrong: the professional duty of candour; Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 (England); Duty of Candour Procedure (Wales) Regulations 2023; Duty of Candour Procedure (Scotland) Regulations 2018; Department of Health Northern Ireland, duty of candour consultation (closed March 2025).'
  },
  {
    id: 'DV-01-03', mod: 1, title: 'Raising a concern',
    jur: 'Check your nation and employer', fpcP: 'FPC8 Upholding values', fpcS: 'FPC9 Quality improvement', status: 'DRAFT',
    good: 'When you believe patient safety, care or dignity is at risk, from systems, resources or a colleague’s conduct, you raise it promptly through the right route, and you know you are supported in doing so.',
    before: [
      'Know your duty: Good medical practice requires you to act when patient safety is at risk.',
      'Know the routes where you work. England: your line manager or supervisor, or at any stage your organisation’s Freedom to Speak Up arrangements. Scotland: the National Whistleblowing Standards, with the Independent National Whistleblowing Officer as the final, independent stage. Wales: your organisation’s procedure under the NHS Wales Speaking Up Safely framework. Northern Ireland: your HSC organisation’s whistleblowing policy.'
    ],
    steps: [
      'If patients are at immediate risk, act to protect them first.',
      'Raise the concern with your senior, supervisor or manager, giving facts rather than opinions.',
      'If that does not work or is not appropriate, use your employer’s speaking-up route.',
      'If the concern is still not addressed, you can go to a regulator, such as the GMC or the system regulator in your nation.',
      'Get advice and support from your educational supervisor, the BMA, your defence organisation or the independent charity Protect.'
    ],
    pitfall: 'Waiting for certainty. You need a reasonable belief, not proof.',
    words: [
      '“I’m worried about patient safety on the ward overnight, and I’d like to explain why.”',
      '“Can we agree what will happen next and when I’ll hear back?”'
    ],
    stop: [
      'A patient is in immediate danger: act now.',
      'You fear you will be treated unfairly for speaking up: get advice before you go further.',
      'The concern involves your own supervisor: use another route.'
    ],
    record: 'Keep your own dated notes of what you raised, with whom, and the response.',
    local: [
      'Your employer’s speaking-up or whistleblowing policy and contacts.',
      'The system regulator in your nation: CQC (England), Healthcare Inspectorate Wales, Healthcare Improvement Scotland, or RQIA (Northern Ireland).'
    ],
    next: { to: 'DV-02-01' },
    sources: 'GMC, Good medical practice (2024); GMC, Raising and acting on concerns about patient safety (2012, updated December 2024); SPSO, Independent National Whistleblowing Officer and National Whistleblowing Standards (from April 2021; Scotland); NHS England, The future of Freedom to Speak Up (April 2026; England); Welsh Government and NHS Wales, Speaking Up Safely (2023); Public Interest Disclosure Act 1998 and Public Interest Disclosure (Northern Ireland) Order 1998.'
  },
  {
    id: 'DV-02-01', mod: 2, title: 'Good medical practice day to day',
    jur: 'UK-wide', fpcP: 'FPC8 Upholding values', fpcS: 'FPC7 Fitness for practise', status: 'DRAFT',
    good: 'You know what Good medical practice expects of you and use it to guide everyday decisions: working within your competence, being honest, treating patients and colleagues with respect, and acting when something is wrong.',
    before: [
      'Read Good medical practice (2024). It has four domains: knowledge, skills and development; patients, partnership and communication; colleagues, culture and safety; and trust and professionalism.'
    ],
    steps: [
      'Work within your competence, and ask for help when you reach its limits.',
      'Keep your knowledge and skills up to date, and reflect on your practice.',
      'Treat patients as partners: listen, share information, and respect their decisions.',
      'Treat colleagues with respect, and act if you see bullying, harassment or discrimination.',
      'Be honest in everything you write and sign, including your CV, references and forms.',
      'Look after your own health, and get help if it could affect patient safety.'
    ],
    pitfall: 'Seeing Good medical practice as a document for disciplinary cases, rather than a guide to everyday decisions.',
    words: [
      '“I haven’t done this before. Could you supervise me?”',
      '“That comment wasn’t appropriate. Can we talk about it?”'
    ],
    stop: [
      'You are asked to work beyond your competence: say so, and ask for senior support.',
      'You see behaviour that puts patients or colleagues at risk: see DV-01-03.',
      'Your own health may be affecting your work: talk to your supervisor or occupational health.'
    ],
    record: 'Reflections on situations where you applied the guidance, linked to your portfolio.',
    local: [
      'Your foundation school’s professionalism support.',
      'Where to get confidential help with your own health.'
    ],
    next: { to: 'DV-02-02' },
    sources: 'GMC, Good medical practice (2024, in effect from 30 January 2024).'
  },
  {
    id: 'DV-02-02', mod: 2, title: 'Confidentiality and information governance',
    jur: 'UK-wide', fpcP: 'FPC11 Ethics and law', fpcS: 'FPC8 Upholding values', status: 'DRAFT',
    good: 'You protect patient information, share it appropriately for care, disclose it only on a sound legal and ethical basis, and handle records, lists and messages securely.',
    before: [
      'Know when GMC guidance allows disclosure: the patient consents; it benefits a patient who lacks capacity; it is required by law or approved through a statutory process; or it is justified in the public interest.',
      'Know that sharing for a patient’s direct care can usually rely on implied consent, unless the patient objects.'
    ],
    steps: [
      'Access records only for patients you are involved in caring for, or for an approved purpose.',
      'Share the minimum information needed, with people who need it.',
      'Keep handover lists and printouts secure, and dispose of them as confidential waste.',
      'Use only messaging and storage approved by your employer for patient information.',
      'Before disclosing information outside direct care, check the basis, and seek advice from your senior or Caldicott Guardian if unsure.',
      'Report any data breach, including your own, through your employer’s process.'
    ],
    pitfall: 'Sharing patient details in an unapproved messaging group or on a personal phone.',
    words: [
      '“Are you happy for me to talk to your daughter about your care?”',
      '“I can’t share that without the patient’s agreement, but I can listen to your concerns.”'
    ],
    stop: [
      'You are asked to disclose information to police, a solicitor or an employer: seek advice from your senior or Caldicott Guardian.',
      'A disclosure might be justified to protect someone from serious harm: seek advice from your senior or Caldicott Guardian.',
      'You are unsure whether a patient lacks capacity to agree to sharing: seek advice from your senior.'
    ],
    record: 'Any disclosure outside direct care: what, to whom, the basis, and who advised.',
    local: [
      'Your employer’s information governance policy and approved apps.',
      'Who your Caldicott Guardian and data protection officer are.'
    ],
    next: { to: 'DV-02-03' },
    sources: 'GMC, Confidentiality: good practice in handling patient information (2017); UK General Data Protection Regulation and Data Protection Act 2018; the Caldicott Principles.'
  },
  {
    id: 'DV-02-03', mod: 2, title: 'Professional boundaries and social media',
    jur: 'UK-wide', fpcP: 'FPC8 Upholding values', fpcS: 'FPC11 Ethics and law', status: 'DRAFT',
    good: 'You keep clear professional boundaries with patients and colleagues, online and offline, and behave in ways that maintain public trust in the profession.',
    before: [
      'Read the GMC’s guidance on professional boundaries and on using social media, both published alongside Good medical practice (2024).'
    ],
    steps: [
      'Do not pursue a sexual or improper emotional relationship with a current patient, or use your professional relationship to pursue a relationship with someone close to them.',
      'Avoid treating yourself, family or close friends except in an emergency.',
      'Online, assume anything you post is public and permanent. Never post information that could identify a patient.',
      'If a patient contacts you about their care through your private profile, direct them to an appropriate healthcare setting.',
      'Treat colleagues with respect online as well as offline.',
      'When you comment on health or healthcare online, usually say who you are, and be open about any interests that could influence your recommendations.'
    ],
    pitfall: 'Posting about “an interesting case today” with enough detail for someone to identify the patient.',
    words: [
      '“I’m sorry, I can’t connect with patients on social media, but please contact the ward.”',
      '“I’m not able to treat you as your doctor, but I can help you get seen.”'
    ],
    stop: [
      'A patient’s behaviour towards you becomes personal or inappropriate: tell your senior.',
      'You see a colleague cross a boundary: see DV-01-03.',
      'You are unsure whether something you plan to post is appropriate: don’t post it.'
    ],
    record: 'Any boundary concern raised with your senior, with dates.',
    local: [
      'Your employer’s social media and chaperone policies.',
      'Who to talk to if a patient’s behaviour concerns you.'
    ],
    next: { to: 'DV-02-04' },
    sources: 'GMC, Good medical practice (2024); GMC, Using social media as a medical professional (2024); GMC, Maintaining personal and professional boundaries (2024).'
  },
  {
    id: 'DV-02-04', mod: 2, title: 'Safeguarding: your professional duties',
    jur: 'Check your nation and employer', fpcP: 'FPC11 Ethics and law', fpcS: 'FPC8 Upholding values', status: 'DRAFT',
    good: 'You understand your legal and professional safeguarding duties in your nation, keep your training current, and know the specific duties that apply where you work.',
    before: [
      'Know the law where you work. Adults: Care Act 2014 (England); Social Services and Well-being (Wales) Act 2014; Adult Support and Protection (Scotland) Act 2007; Northern Ireland’s regional adult safeguarding policy. Children: each nation has its own children’s legislation and guidance.',
      'Know the safeguarding training level your role requires, as set by your employer.'
    ],
    steps: [
      'Complete and keep up to date the safeguarding training your employer requires.',
      'Recognise and respond to concerns at the bedside (Ward card WD-05-06).',
      'Share information to protect children, and adults who lack capacity, from serious harm, as GMC guidance supports.',
      'In England and Wales, know the mandatory duty for regulated health professionals to report known cases of female genital mutilation in under-18s to the police.',
      'In England, Wales and Scotland, know your employer’s procedure under the Prevent duty.',
      'Get advice from your safeguarding team whenever you are unsure.'
    ],
    pitfall: 'Assuming someone else has already made the referral.',
    words: [
      '“I have a safeguarding concern and I’d like advice on next steps.”',
      '“Has a referral already been made, and who is coordinating it?”'
    ],
    stop: [
      'Someone is at immediate risk: act and contact the police if needed.',
      'You are unsure which legal duty applies.',
      'You disagree with a decision about a referral: escalate to the safeguarding lead.'
    ],
    record: 'Concerns, advice received, referrals made, and who you informed.',
    local: [
      'Your safeguarding team, policies and training requirements.',
      'Your employer’s FGM reporting and Prevent procedures, where they apply.'
    ],
    next: { to: 'DV-03-01' },
    sources: 'Care Act 2014 (England); Social Services and Well-being (Wales) Act 2014; Adult Support and Protection (Scotland) Act 2007; Adult Safeguarding: Prevention and Protection in Partnership (Northern Ireland, 2015); Female Genital Mutilation Act 2003, section 5B (England and Wales); Counter-Terrorism and Security Act 2015 (Prevent duty); GMC, Protecting children and young people (2012).'
  },
  {
    id: 'DV-03-01', mod: 3, title: 'The ePortfolio and the curriculum',
    jur: 'UK-wide', fpcP: 'FPC12 Continuing professional development', fpcS: 'FPC11 Ethics and law', status: 'DRAFT',
    good: 'Your ePortfolio shows, through evidence gathered steadily across the year, how you are meeting the 13 Foundation Professional Capabilities.',
    before: [
      'Know which ePortfolio you use: Horus in England, or Turas in Scotland, Wales and Northern Ireland.',
      'Read the curriculum’s three higher-level outcomes and 13 capabilities, and your foundation school’s guidance.'
    ],
    steps: [
      'Add evidence as you go: supervised learning events, reflections, teaching, audit or QI, and feedback.',
      'Link each piece of evidence to the capabilities it shows.',
      'Use supervision meetings to review your progress against the curriculum.',
      'Check the requirements for each placement and for ARCP early (DV-03-04).',
      'Keep entries anonymised and professional.'
    ],
    pitfall: 'Leaving the portfolio until the weeks before ARCP.',
    words: [
      '“Which capabilities am I still light on evidence for?”',
      '“Could you complete this observation while you’re here?”'
    ],
    stop: [
      'You cannot access your ePortfolio: contact your foundation school.',
      'You are falling behind on requirements: tell your educational supervisor early.'
    ],
    record: 'Your ePortfolio is the record. Keep it contemporaneous.',
    local: [
      'Your foundation school’s ePortfolio guidance and deadlines.',
      'Who to contact for technical help.'
    ],
    next: { to: 'DV-03-02' },
    sources: 'UK Foundation Programme, About the Foundation e-portfolio; UK Foundation Programme Curriculum 2021 (2026 revision).'
  },
  {
    id: 'DV-03-02', mod: 3, title: 'Supervision meetings and your PDP',
    jur: 'UK-wide', fpcP: 'FPC12 Continuing professional development', fpcS: 'FPC11 Ethics and law', status: 'DRAFT',
    good: 'You meet your supervisors at the expected points, come prepared, agree a personal development plan (PDP) with specific goals, and use the meetings to get honest feedback and support.',
    before: [
      'Know who your educational supervisor is (your progress across the year) and who your clinical supervisor is (your work in each placement).',
      'Before each meeting, review your evidence, your PDP and what you want to discuss.'
    ],
    steps: [
      'Book your initial meeting early in each placement; do not wait to be asked.',
      'Agree a PDP with specific, achievable goals, and how you will show you have met them.',
      'Discuss any difficulties early, including health, workload or concerns.',
      'Ask for feedback, and agree what to work on next.',
      'Make sure each meeting is recorded in your ePortfolio.'
    ],
    pitfall: 'A vague PDP goal such as “improve clinical skills”, with no way to show progress.',
    words: [
      '“My goal this placement is to lead a ward round with supervision. Could we plan how?”',
      '“I’m finding the workload hard and would like to talk about it.”'
    ],
    stop: [
      'You cannot arrange meetings with your supervisor: contact your foundation programme director.',
      'There is a conflict with your supervisor: seek support from the foundation school.',
      'Your health or wellbeing is affecting your training: ask for help early.'
    ],
    record: 'Meeting records and your PDP in your ePortfolio.',
    local: [
      'Your foundation school’s meeting requirements and templates.',
      'Who your foundation programme director is.'
    ],
    next: { to: 'DV-03-03' },
    sources: 'UK Foundation Programme Curriculum 2021 (2026 revision); UK Foundation Programme, ARCP checklist.'
  },
  {
    id: 'DV-03-03', mod: 3, title: 'Supervised learning events and TAB',
    jur: 'UK-wide', fpcP: 'FPC12 Continuing professional development', fpcS: 'FPC11 Ethics and law', status: 'DRAFT',
    good: 'You use supervised learning events (SLEs) as genuine learning, with feedback that changes your practice, and you complete your team assessment of behaviour (TAB) and placement supervision group (PSG) feedback in good time.',
    before: [
      'Know the types of SLE your curriculum uses, including direct observation, case-based discussion and the developing-the-clinical-teacher tool.',
      'Know the ARCP requirement: at least one satisfactory TAB and one satisfactory PSG report in each foundation year.'
    ],
    steps: [
      'Ask for SLEs throughout the year, spread across different skills and settings.',
      'Choose cases you can learn from, not only ones that went well.',
      'Ask the assessor for specific feedback and an action point, and record it.',
      'Start your TAB early in the placement, and nominate a wide range of colleagues as your foundation school requires.',
      'Discuss your TAB results with your educational supervisor.'
    ],
    pitfall: 'Collecting SLEs in a rush at the end of a placement, which turns them into box-ticking.',
    words: [
      '“Could you observe me taking this history and give me feedback?”',
      '“What one thing should I do differently next time?”'
    ],
    stop: [
      'Your TAB raises concerns: discuss it with your educational supervisor promptly.',
      'You cannot get assessors to complete SLEs: tell your supervisor.'
    ],
    record: 'SLEs, TAB and PSG in your ePortfolio, with the action points you agreed.',
    local: [
      'Your foundation school’s TAB rules, such as who and how many raters.',
      'Deadlines for TAB and PSG in each placement.'
    ],
    next: { to: 'DV-03-04' },
    sources: 'UK Foundation Programme, ARCP checklist; UK Foundation Programme Curriculum 2021 (2026 revision).'
  },
  {
    id: 'DV-03-04', mod: 3, title: 'ARCP: getting signed off',
    jur: 'UK-wide', fpcP: 'FPC12 Continuing professional development', fpcS: 'FPC11 Ethics and law', status: 'DRAFT',
    good: 'You know the ARCP requirements from the start of the year, meet them steadily, and arrive at your Annual Review of Competence Progression with a complete portfolio.',
    before: [
      'Read the UK Foundation Programme ARCP checklist and your foundation school’s guidance at the start of each year.'
    ],
    steps: [
      'Check registration: provisional registration with a licence to practise for F1, and full registration with a licence for F2.',
      'Complete the required time in training, within the absence allowed by the checklist.',
      'Make sure your supervisor reports are completed: clinical supervisor end-of-placement reports, educational supervisor reports, and the end-of-year report.',
      'Complete at least one satisfactory TAB and one satisfactory PSG report in the year.',
      'Show evidence across all 13 capabilities, including the life support capabilities in FPC2, and complete your probity and health declarations.',
      'In F1, pass the Prescribing Safety Assessment.',
      'Know what sign-off leads to: completing F1 earns the F1 Certificate of Completion, which you need for full GMC registration; completing F2 earns the Foundation Programme Certificate of Completion.'
    ],
    pitfall: 'Assuming your supervisor will complete reports without a reminder.',
    words: [
      '“Could we check my portfolio against the ARCP checklist together?”',
      '“My end-of-placement report is due. Could you complete it this week?”'
    ],
    stop: [
      'You have had extended absence, or are at risk of not meeting a requirement: tell your educational supervisor and foundation school early.',
      'You disagree with an ARCP outcome: ask about the review and appeal process.'
    ],
    record: 'Your ePortfolio, with all required reports and declarations.',
    local: [
      'Your foundation school’s ARCP dates and portfolio deadlines.',
      'How the PSA is arranged in your region.'
    ],
    next: { to: 'DV-03-05' },
    sources: 'UK Foundation Programme, ARCP checklist; UK Foundation Programme, PSA requirements and process.'
  },
  {
    id: 'DV-03-05', mod: 3, title: 'Writing a useful reflection',
    jur: 'UK-wide', fpcP: 'FPC12 Continuing professional development', fpcS: 'FPC11 Ethics and law', status: 'DRAFT',
    good: 'Your reflections are brief, honest and focused on learning: what happened, what you learned, and what you will do differently, written without identifying patients.',
    before: [
      'Read The reflective practitioner (2018), the joint guidance for doctors and medical students.',
      'Know that recorded reflections are not legally privileged, though the GMC does not ask doctors for reflective notes when investigating a concern.'
    ],
    steps: [
      'Choose experiences that taught you something, including things that went well, not only incidents.',
      'Describe the experience only as far as you need to explain your learning. Record factual details elsewhere, such as the clinical record or an incident report.',
      'Focus on what you learned and how you felt, and what you will change.',
      'Anonymise thoroughly: removing names alone is often not enough.',
      'Link it to the capabilities it shows, and follow up later on whether you made the change.'
    ],
    pitfall: 'Writing a long account of events with little about what you learned.',
    words: [
      '“What would I do differently next time, and why?”',
      '“What did this teach me about my own practice?”'
    ],
    stop: [
      'The experience has affected you deeply: talk to your supervisor or a support service, not only your portfolio.',
      'The event is subject to an investigation or legal process: seek advice before writing about it, and keep to your learning.'
    ],
    record: 'Your reflection, anonymised, in your ePortfolio.',
    local: [
      'Your foundation school’s guidance on reflection.',
      'Wellbeing and support services for doctors.'
    ],
    next: { ext: 'Develop module 4: teaching, audit and careers (coming next)' },
    sources: 'Academy of Medical Royal Colleges, COPMeD, GMC and Medical Schools Council, The reflective practitioner: guidance for doctors and medical students (2018).'
  }
];
