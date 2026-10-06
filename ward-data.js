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
    next: { to: 'WD-01-02' },
    sources: 'Royal College of Physicians and Royal College of Nursing, Modern ward rounds (2021); GMC, Good medical practice (2024); Professional Record Standards Body, Generic medical record keeping standards.'
  },
  {
    id: 'WD-01-02', mod: 1, title: 'The jobs list: capture, prioritise, close',
    jur: 'UK-wide', fpcP: 'FPC2 Clinical prioritisation', fpcS: 'FPC5 Continuity of care', status: 'DRAFT',
    good: 'Every job has a patient, a clear task, an urgency and an owner, and nothing falls off the list between the round and handover. At a glance you can see what is urgent, what is waiting on someone else, and what is done.',
    before: [
      'Use one list, in the format your ward uses, not notes on scraps of paper.',
      'Keep it secure: it holds confidential information.',
      'Know who else works from it, such as the nurse in charge, other doctors and the pharmacist.'
    ],
    steps: [
      'Capture each job as it is decided, with the patient, the task and the reason (“check potassium after replacement”, not “bloods”).',
      'Mark how urgent it is: now (safety or time-critical), before handover, or when possible.',
      'Order the list: unwell patients and time-critical jobs first, then jobs that unblock other work (scan requests, referrals, discharges), then routine tasks.',
      'Batch similar jobs, such as all requests at one sitting, but never let batching delay an urgent job.',
      'Mark a job done only when it is complete, and act on what comes back.',
      'Review the list at set points (after the round, midway through the day, before handover) and re-order it when something new arrives.'
    ],
    pitfall: 'Ticking off “bloods sent” when the real job was “act on the bloods”.',
    words: [
      '“I have three urgent jobs. Could someone take the referral?”',
      '“This one is waiting on radiology. I’ll chase it after lunch.”',
      '“Which of these would you like done first?”'
    ],
    stop: [
      'You cannot finish the urgent jobs safely in time: tell your senior early, not at handover.',
      'A job does not make sense, or conflicts with something you know.',
      'You are given a task you are not trained or competent to do.'
    ],
    record: 'The list is a working tool, not the medical record. Anything clinically significant, such as results acted on, decisions and conversations, also goes in the notes. Unfinished jobs are handed over explicitly.',
    local: [
      'The list format your ward uses and where it is kept.',
      'How jobs are shared with the nursing team.',
      'Rules on printing lists and disposing of them as confidential waste.'
    ],
    next: { to: 'WD-01-03' },
    sources: 'Royal College of Physicians and Royal College of Nursing, Modern ward rounds (2021); GMC, Good medical practice (2024); GMC, Confidentiality: good practice in handling patient information (2017).'
  },
  {
    id: 'WD-01-03', mod: 1, title: 'Writing the ward-round entry',
    jur: 'UK-wide', fpcP: 'FPC5 Continuity of care', fpcS: 'FPC1 Clinical assessment', status: 'DRAFT',
    good: 'Someone who was not there can read your entry and know what was found, what was decided and why, what happens next, and what to do if things change.',
    before: [
      'Use your ward’s template if there is one.',
      'Check the patient’s name and identifying number (NHS number, CHI number in Scotland, or Health and Care number in Northern Ireland) on every page or screen.',
      'Have the observations, results and drug chart to hand.',
      'Write at the bedside or straight after each patient, not at the end of the round.'
    ],
    steps: [
      'Start with the date, time, type of entry, who led the round and who was present.',
      'Give a one-line summary of the patient and why they are here, then what has changed.',
      'Record how the patient says they are, and the symptoms that matter.',
      'Record relevant findings, observations and results, with dates.',
      'Write the impression: the working diagnosis or problem list, in order.',
      'Write the plan as numbered actions, each saying what, by whom and by when, with what should prompt a review.',
      'Record escalation and resuscitation decisions if discussed, and what the patient and family were told.',
      'Finish with your name, role, signature and any identifier your employer requires.'
    ],
    pitfall: '“Plan: continue.” Say what continues, and when it will be reviewed.',
    words: [
      '“Plan discussed with the patient, who agrees.”',
      '“If more breathless, or the early warning score triggers under local escalation policy, review by the on-call doctor.”',
      '“CT chest awaited: FY1 to review today and inform the registrar.”'
    ],
    stop: [
      'You are unsure what was decided: ask before the round moves on.',
      'Your entry would contradict another record, such as an allergy or resuscitation status.',
      'You are asked to record something you did not see or a decision you did not witness.'
    ],
    record: 'Entries must be made at the time, legible, accurate and attributable to you. Correct mistakes according to your employer’s policy. Never alter or delete an earlier entry.',
    local: [
      'Your ward-round template and whether records are electronic or paper.',
      'Your employer’s list of approved abbreviations.',
      'Whether ward-round entries need countersigning.'
    ],
    next: { to: 'WD-01-04' },
    sources: 'Professional Record Standards Body, Generic medical record keeping standards; GMC, Good medical practice (2024); Royal College of Physicians and Royal College of Nursing, Modern ward rounds (2021).'
  },
  {
    id: 'WD-01-04', mod: 1, title: 'Documenting outside the round',
    jur: 'UK-wide', fpcP: 'FPC5 Continuity of care', fpcS: 'FPC8 Upholding values', status: 'DRAFT',
    good: 'Every clinical contact that matters is recorded when it happens: reviews, phone advice, conversations, procedures and decisions. Late entries are clearly marked as late, and nothing is ever changed to look better.',
    before: [
      'Know what your employer expects to be recorded, and where.',
      'Check you are in the right patient’s record before you write.'
    ],
    steps: [
      'Record reviews you do between rounds or on call: why you were asked, what you found, what you did, the plan and who you told.',
      'Record phone advice: what you asked the nurse to do and when they should call back.',
      'Record significant conversations with patients and relatives: who was there, what was said and what was asked.',
      'Record procedures: consent, what was done, any complications and any checks needed afterwards.',
      'If you write later, label it as a retrospective entry, with the time you wrote it and the time of the event.',
      'Correct mistakes openly according to policy. Never alter, remove or back-date an entry.'
    ],
    pitfall: 'Writing everything up from memory at the end of a busy shift, and losing the times and details.',
    words: [
      '“Retrospective entry, written at [time] about a review at [time].”',
      '“Asked to review by the staff nurse because …”',
      '“Advised by phone: … Nurse to call back if …”'
    ],
    stop: [
      'You are asked to change, back-date or remove a record: do not, and raise it with a senior.',
      'You have written in the wrong patient’s record: follow your employer’s correction process and report it.',
      'Something you found needs escalating: escalate first, then write it up.'
    ],
    record: 'Every entry carries the date, time, your name and role. Retrospective entries say so clearly.',
    local: [
      'How retrospective entries and corrections are made in your record system.',
      'Where phone advice is recorded.',
      'Templates for common procedures.'
    ],
    next: { to: 'WD-02-01' },
    sources: 'GMC, Good medical practice (2024); Professional Record Standards Body, Generic medical record keeping standards.'
  },
  {
    id: 'WD-02-01', mod: 2, title: 'Chasing and acting on results',
    jur: 'UK-wide', fpcP: 'FPC5 Continuity of care', fpcS: 'FPC1 Clinical assessment', status: 'DRAFT',
    good: 'Every test has someone who will look at the result, act on it and tell the patient where needed. No result goes unseen, and abnormal results reach a person who can act.',
    before: [
      'Request each test with a clear clinical question and correct details.',
      'Note on the jobs list which results you are waiting for and when they are expected.',
      'Know how your results system flags abnormal results.'
    ],
    steps: [
      'Review results at set times in the day, not only when prompted.',
      'Compare with earlier results: the trend often matters more than one value.',
      'Ask whether it changes today’s plan. If it does, act or escalate; if you are unsure, ask.',
      'Acknowledge or file results according to local process, so others can see they were reviewed.',
      'Record significant results and what you did about them in the notes.',
      'Make sure the patient hears about results that matter to them.',
      'Hand over results still awaited, with what to do if they are abnormal.',
      'If the lab phones a result, write it down, read it back, and act on it or pass it straight to the doctor responsible.'
    ],
    pitfall: 'Requesting a test that nobody owns the result of.',
    words: [
      '“Her sodium has fallen since yesterday. Can I run the plan past you?”',
      '“The CT is back. Could we discuss it before the end of the round?”',
      '“Results awaited at handover: … If abnormal, please …”'
    ],
    stop: [
      'A result is critical or unexpected: see WD-02-02.',
      'You do not understand what a result means.',
      'A result needs action you cannot take or arrange yourself.'
    ],
    record: 'The result, when you reviewed it, your interpretation, the action taken and who you told.',
    local: [
      'How results are acknowledged in your system.',
      'How the lab phones critical results, and to whom.',
      'Who reviews results at weekends and for patients who have gone home.'
    ],
    next: { to: 'WD-02-02' },
    sources: 'GMC, Good medical practice (2024); Royal College of Physicians and Royal College of Nursing, Modern ward rounds (2021).'
  },
  {
    id: 'WD-02-02', mod: 2, title: 'The unexpected abnormal result',
    jur: 'UK-wide', fpcP: 'FPC1 Clinical assessment', fpcS: 'FPC2 Clinical prioritisation', status: 'DRAFT',
    good: 'You recognise the result is abnormal, check it belongs to this patient, assess the patient, act or escalate promptly, and make sure the result is not lost.',
    before: [
      'Check the patient’s identity, the sample date and whether this is new or already known.',
      'Look at the trend and any lab comment, such as a haemolysed sample.'
    ],
    steps: [
      'Decide how urgent it is: could it harm the patient in the coming hours? If so, see them now.',
      'Assess the patient. A dangerous result needs action even if the patient looks well.',
      'Repeat the test if a sample problem is likely, but never let a repeat delay treating a dangerous result.',
      'Escalate to your senior when the result is serious, when you are unsure, or when it changes the plan.',
      'For an incidental finding, such as an unexpected abnormality on a scan, make sure the responsible team knows and agrees a plan, including who tells the patient.',
      'Record it and hand it over.'
    ],
    pitfall: 'Assuming an abnormal result is an error and waiting for a repeat.',
    words: [
      '“I have an unexpected result for Mrs B. I’ve seen her. Can I talk it through with you?”',
      '“The scan shows something we weren’t expecting. Who should explain it to her, and when?”'
    ],
    stop: [
      'The patient is unwell: manage it as an acute problem, using the Bleep Cards.',
      'You are unsure whether the result is dangerous.',
      'The result belongs to a patient who has gone home: follow your local process to reach them.'
    ],
    record: 'The result, your assessment of the patient, what you did, who you discussed it with, and the agreed plan.',
    local: [
      'Your employer’s critical-results process.',
      'How to contact a patient or their GP after discharge.',
      'Any pathway for incidental findings on imaging.'
    ],
    next: { to: 'WD-02-03' },
    sources: 'GMC, Good medical practice (2024); Royal College of Radiologists, Standards for the communication of radiological reports and fail-safe alert notification (2016).'
  },
  {
    id: 'WD-02-03', mod: 2, title: 'Giving handover',
    jur: 'UK-wide', fpcP: 'FPC5 Continuity of care', fpcS: 'FPC4 Communication and care', status: 'DRAFT',
    good: 'The next doctor knows who is sick, what is outstanding, what to expect and what to do if it happens. Handover is face to face where possible, structured, and protected from interruption.',
    before: [
      'Update the list: unwell patients, pending results, unfinished jobs, and patients with ceilings of care or resuscitation decisions.',
      'Know where and when handover happens and who should be there.'
    ],
    steps: [
      'Start with the sickest patients and anyone likely to deteriorate.',
      'For each patient, use the structure your team uses, such as SBAR: situation, background, assessment, recommendation.',
      'Give specific tasks with triggers: “if this happens, do that”.',
      'Mention escalation and resuscitation decisions where relevant.',
      'Hand over pending results and what to do if they are abnormal.',
      'Hand over anything promised to patients or relatives.',
      'Invite questions, check understanding, and agree who owns each job.'
    ],
    pitfall: 'Handing over a list of tasks without saying which patients are actually unwell.',
    words: [
      '“The patient I’m most worried about is …”',
      '“If her blood pressure drops, please review her and call the registrar.”',
      '“Is there anything you’d like me to go over again?”'
    ],
    stop: [
      'You are about to leave with an unwell patient not yet reviewed or escalated.',
      'There is nobody to hand over to: tell your senior, and do not leave until the work is safely handed over.',
      'The incoming doctor cannot safely take on the workload: tell the senior.'
    ],
    record: 'Use your employer’s handover system. Make sure anything significant is also in the patient’s notes.',
    local: [
      'Handover times, places and who attends.',
      'Your handover template or electronic tool.',
      'Rules for handover sheets, which contain confidential information.'
    ],
    next: { to: 'WD-02-04' },
    sources: 'Royal College of Physicians, Acute care toolkit 1: handover (2011); BMA, Safe handover: safe patients (2004); GMC, Good medical practice (2024).'
  },
  {
    id: 'WD-02-04', mod: 2, title: 'Receiving handover',
    jur: 'UK-wide', fpcP: 'FPC5 Continuity of care', fpcS: 'FPC2 Clinical prioritisation', status: 'DRAFT',
    good: 'You leave handover knowing who is sick, what is outstanding and what is expected, having checked anything unclear. You then act on the riskiest items first.',
    before: [
      'Arrive on time with a way to record jobs.',
      'Know who you are covering and who your senior is.'
    ],
    steps: [
      'Listen first for who is unwell. If it is not offered, ask who they are most worried about.',
      'For each job, confirm what, why, by when, and what to do if things change.',
      'Clarify ceilings of care and resuscitation decisions for patients at risk.',
      'Read back the key tasks.',
      'If the workload is large, agree priorities with your senior.',
      'After handover, review the sickest patients early rather than waiting to be called.'
    ],
    pitfall: 'Accepting “all fine” without asking what could go wrong overnight.',
    words: [
      '“Who are you most worried about?”',
      '“What should I do if …?”',
      '“Has an escalation plan been discussed with her?”'
    ],
    stop: [
      'Handover is incomplete and the outgoing doctor is leaving: ask for the essentials before they go.',
      'You are handed a job you do not understand.',
      'The workload is unsafe: tell your senior straight away.'
    ],
    record: 'Put handed-over jobs on your list. Record reviews in the notes as you do them.',
    local: [
      'Handover times and places, and the handover tool used.',
      'Who your senior is overnight and at weekends, and how to reach them.'
    ],
    next: { to: 'WD-03-01' },
    sources: 'Royal College of Physicians, Acute care toolkit 1: handover (2011); GMC, Good medical practice (2024).'
  },
  {
    id: 'WD-03-01', mod: 3, title: 'Planning discharge from day one',
    jur: 'UK-wide', fpcP: 'FPC3 Holistic planning', fpcS: 'FPC5 Continuity of care', status: 'DRAFT',
    good: 'From admission, the team knows what needs to happen for the patient to go home safely, the patient and family know the plan, and delays are spotted early.',
    before: [
      'Know the patient’s usual function, home situation and support.',
      'Know the expected date of discharge, if your ward uses one, and what must happen first.'
    ],
    steps: [
      'On the round, ask: what does this patient need before they can go home?',
      'Separate medical criteria (for example, back to their usual oxygen needs, eating and drinking, mobile safely) from other needs (therapy, equipment, care at home).',
      'Make referrals early: therapy, social work, specialist nurses, community teams.',
      'Keep the patient and family updated, including the expected date and what it depends on.',
      'Prepare discharge medicines and paperwork in advance, not on the day.',
      'Review the plan daily and raise delays at the board round.'
    ],
    pitfall: 'Starting to plan discharge on the day the patient is medically fit.',
    words: [
      '“What would need to be in place for you to manage at home?”',
      '“Who helps you at home?”',
      '“We’re aiming for Thursday, if your oxygen levels stay settled.”'
    ],
    stop: [
      'The patient is being pushed home before they are medically ready or safe.',
      'You have concerns about safety at home or a possible safeguarding issue.',
      'The patient or family disagree with the plan.',
      'You doubt the patient’s capacity to make decisions about discharge: see WD-05-03.'
    ],
    record: 'The discharge plan, expected date, referrals made and conversations with the patient and family.',
    local: [
      'How board rounds work and who coordinates discharges.',
      'Whether your ward uses criteria-led discharge.',
      'How much notice pharmacy needs for discharge medicines.'
    ],
    next: { to: 'WD-03-02' },
    sources: 'Department of Health and Social Care, Hospital discharge and community support guidance (England, updated 2024); NICE NG27, Transition between inpatient hospital settings and community or care home settings for adults with social care needs (2015); GMC, Good medical practice (2024).'
  },
  {
    id: 'WD-03-02', mod: 3, title: 'Writing the discharge summary',
    jur: 'UK-wide', fpcP: 'FPC5 Continuity of care', fpcS: 'FPC4 Communication and care', status: 'DRAFT',
    good: 'The GP and the patient can understand what happened, what changed and what needs doing next, from a summary that is accurate, timely and readable.',
    before: [
      'Read the notes, results and drug chart, and know the final plan.',
      'Know your employer’s template and its required fields.'
    ],
    steps: [
      'State the diagnosis and reason for admission in plain terms, and any key procedures.',
      'Give a brief account of what happened and the important results.',
      'List medicines started, stopped or changed, and why.',
      'Write actions for the GP that are specific: what, why and by when. Do not hand the GP hospital tasks unless that has been agreed.',
      'List follow-up and pending results, each with a named owner (see WD-03-03).',
      'Include any resuscitation or treatment escalation decisions the GP needs to know about.',
      'Note what the patient was told, including safety-netting advice.',
      'Proofread, and spell out abbreviations.'
    ],
    pitfall: '“GP to review” with no reason, timing or question.',
    words: [
      '“Please check her kidney function and potassium on [date agreed by the team], because her diuretic dose was increased.”',
      '“Pending at discharge: biopsy result. The hospital team will act on this and contact the patient.”'
    ],
    stop: [
      'The plan or the medicines are unclear: ask before you send it.',
      'An important result is pending with no named owner.',
      'You are asked to complete a summary for a patient you do not know: read the notes fully and check with the team.'
    ],
    record: 'The summary itself is the record. Check that it reaches the GP and, where your employer does so, the patient.',
    local: [
      'Your discharge summary template and who signs it off.',
      'Whether patients receive a copy.',
      'How summaries are sent to GPs.'
    ],
    next: { to: 'WD-03-03' },
    sources: 'Professional Record Standards Body, eDischarge Summary Standard (developed for England; check local equivalents); GMC, Good medical practice (2024). Discharge medicines are covered in the Prescribe section.'
  },
  {
    id: 'WD-03-03', mod: 3, title: 'Follow-up, pending results and safety-netting',
    jur: 'UK-wide', fpcP: 'FPC5 Continuity of care', fpcS: 'FPC4 Communication and care', status: 'DRAFT',
    good: 'Nothing is left hanging after discharge: follow-up is booked or clearly requested, every pending result has an owner, and the patient knows what to watch for and who to contact.',
    before: [
      'List all pending results and planned follow-up before the patient leaves.'
    ],
    steps: [
      'For each pending result, name who will review it and how the patient will hear.',
      'Book or request follow-up, and tell the patient what to expect and when.',
      'Agree what the GP is being asked to do, and check it is reasonable.',
      'Give safety-netting advice: which symptoms, what to do, and who to contact (the ward, their GP, the urgent advice line in their area, or emergency services).',
      'Check understanding by asking them to explain it back, and give written information where available.',
      'Record all of this in the notes and the discharge summary.'
    ],
    pitfall: '“Results will be followed up,” with no name attached.',
    words: [
      '“We’re waiting for one result. Dr A’s team will look at it and write to you.”',
      '“If you become more breathless or get chest pain, call an ambulance.”',
      '“Can you tell me what you would do if that happened?”'
    ],
    stop: [
      'Nobody owns a pending result.',
      'The patient cannot take in the safety-netting advice, for example because of language or confusion: use a professional interpreter, or involve a carer if the patient agrees.',
      'There is no reliable way to contact the patient.'
    ],
    record: 'Pending results and their owners, follow-up arranged, and the safety-netting advice given.',
    local: [
      'How pending results are tracked after discharge.',
      'How to book or request follow-up.',
      'The ward contact number given to patients.'
    ],
    next: { to: 'WD-04-01' },
    sources: 'GMC, Good medical practice (2024).'
  },
  {
    id: 'WD-04-01', mod: 4, title: 'Updating relatives',
    jur: 'UK-wide', fpcP: 'FPC4 Communication and care', fpcS: 'FPC11 Ethics and law', status: 'DRAFT',
    good: 'Relatives get timely, honest, consistent updates that the patient has agreed to, in a private place, and leave knowing what happens next and who to contact.',
    before: [
      'Check the patient is happy for information to be shared, and with whom. If they lack capacity, follow your nation’s framework and GMC guidance.',
      'Know the current plan, and check with your senior what has already been said.',
      'Find a private space, and involve the patient’s nurse.'
    ],
    steps: [
      'Introduce yourself and your role, and check who they are.',
      'Ask what they already know and what they want to know.',
      'Give a short, honest summary in plain language.',
      'Say what happens next and roughly when.',
      'Invite questions. Answer what you can, and say when you will find out what you cannot.',
      'Agree how they will get updates and who to contact.'
    ],
    pitfall: 'Promising an outcome, or sharing information the patient has not agreed to.',
    words: [
      '“What have you been told so far?”',
      '“I’ll be honest with you: …”',
      '“I don’t know yet, but I will find out and let you know by this afternoon.”'
    ],
    stop: [
      'The conversation turns to bad news, prognosis or resuscitation decisions you are not ready to lead: see WD-04-02 and involve your senior.',
      'You are unsure whether the patient has agreed to sharing.',
      'A relative becomes threatening: leave and get help.'
    ],
    record: 'Who you spoke to and their relationship, what was discussed, questions asked, and the plan for updates.',
    local: [
      'Your employer’s policy on phone updates, including any password system.',
      'Where quiet rooms are.',
      'Visiting arrangements.'
    ],
    next: { to: 'WD-04-02' },
    sources: 'GMC, Confidentiality: good practice in handling patient information (2017); GMC, Good medical practice (2024).'
  },
  {
    id: 'WD-04-02', mod: 4, title: 'Breaking bad news',
    jur: 'UK-wide', fpcP: 'FPC4 Communication and care', fpcS: 'FPC8 Upholding values', status: 'DRAFT',
    good: 'The person hears serious news from someone prepared, in private, at their pace and with support, and leaves knowing what happens next. Foundation doctors often support seniors in these conversations; lead one only when you are prepared and it has been agreed.',
    before: [
      'Know the facts and the plan, and agree with your senior who leads and what will be said.',
      'Book a private room and enough time, hand your bleep to a colleague, and bring a nurse.',
      'Ask the patient who they would like with them.',
      'If needed, book a professional interpreter, not a family member.'
    ],
    steps: [
      'Introduce everyone, sit down, and ask what they already know.',
      'Ask how much they want to know.',
      'Give a warning that difficult news is coming.',
      'Give the news simply and without jargon, then pause.',
      'Respond to emotion and allow silence.',
      'When they are ready, talk about next steps and support.',
      'Summarise, check understanding, and arrange when you will next talk.'
    ],
    pitfall: 'Filling the silence with information they cannot take in.',
    words: [
      '“I’m afraid I have some difficult news.”',
      '“I can see this is a shock.”',
      '“What matters most to you right now?”'
    ],
    stop: [
      'You do not know the facts or the plan.',
      'You are asked about prognosis or treatment beyond your knowledge: say you will bring the senior.',
      'A patient asks for information to be kept from family (respect this and seek advice), or family ask you to keep information from the patient (do not agree to this; seek senior advice).'
    ],
    record: 'Who was present, what was said, how they responded, questions asked, the plan and the support offered.',
    local: [
      'Specialist nurse and chaplaincy support.',
      'How to book a professional interpreter.',
      'Where quiet rooms are.'
    ],
    next: { to: 'WD-04-03' },
    sources: 'GMC, Decision making and consent (2020); Baile and colleagues, SPIKES protocol, The Oncologist (2000).'
  },
  {
    id: 'WD-04-03', mod: 4, title: 'A planned conversation with an unhappy relative',
    jur: 'UK-wide', fpcP: 'FPC4 Communication and care', fpcS: 'FPC8 Upholding values', status: 'DRAFT',
    good: 'The relative feels heard, gets honest information, and knows what will happen to their concern. You stay calm and safe, and involve others when needed.',
    before: [
      'Check the patient has agreed to information being shared.',
      'Find out the background: what happened and what has already been said.',
      'Involve the nurse in charge or your senior, use a private room, and know how to leave safely.'
    ],
    steps: [
      'Introduce yourself, sit down, and listen without interrupting.',
      'Acknowledge their feelings and reflect back the concern.',
      'Say sorry for their experience where appropriate.',
      'Explain what you can, honestly, without blaming colleagues.',
      'Agree what will happen next and when.',
      'If they wish, explain how to raise a formal concern through your employer’s patient advice or complaints service.'
    ],
    pitfall: 'Defending the team before you understand the concern.',
    words: [
      '“Tell me what’s been happening.”',
      '“I’m sorry this has been your experience.”',
      '“Here is what I’ll do, and when you’ll hear from me.”'
    ],
    stop: [
      'Behaviour becomes threatening: leave and get help.',
      'The concern may involve an error or safety incident: involve your senior, and follow your professional duty of openness.',
      'The complaint is about you: involve your senior.'
    ],
    record: 'The concern raised, what was discussed, and the actions agreed.',
    local: [
      'Your employer’s patient advice or complaints service (names vary by nation and employer).',
      'How to call security.'
    ],
    next: { ext: 'Bleep Card BLEEP-59: an angry or distressed relative on call', href: 'bleep-cards.html#BLEEP-59' },
    sources: 'GMC and NMC, Openness and honesty when things go wrong: the professional duty of candour (2015, updated 2022); GMC, Good medical practice (2024).'
  },
  {
    id: 'WD-05-01', mod: 5, title: 'Valid consent for treatment',
    jur: 'UK-wide', fpcP: 'FPC11 Ethics and law', fpcS: 'FPC4 Communication and care', status: 'DRAFT',
    good: 'Consent is valid when a person with capacity, given the information they need, makes a voluntary decision. Good consent is a shared conversation: you find out what matters to the person, discuss the reasonable options including doing nothing, and explain the risks they would consider significant.',
    before: [
      'Check that you, or whoever seeks consent, knows the treatment well enough to explain it and answer questions.',
      'If capacity is in doubt, assess it first (WD-05-03).',
      'Arrange privacy, time and, if needed, a professional interpreter.'
    ],
    steps: [
      'Find out what the person already knows and what matters to them.',
      'Explain the options, including no treatment, with their likely benefits, risks and outcomes, focusing on the risks this person would consider significant.',
      'Check understanding, invite questions, and give time to decide where possible.',
      'Make sure the decision is voluntary, without pressure from staff or family.',
      'Record consent in the way your employer requires; many procedures need written consent.',
      'Remember consent is ongoing: the person can change their mind, and you should recheck it if things change.'
    ],
    pitfall: 'Treating a signed form as the consent. The consent is the conversation; the form records it.',
    words: [
      '“What matters most to you in making this decision?”',
      '“There are a few options, including not having treatment.”',
      '“Is there anything that worries you about this?”'
    ],
    stop: [
      'You do not know the treatment well enough to answer the person’s questions.',
      'You doubt their capacity for this decision.',
      'The person seems pressured, or refuses and you are unsure what to do next: a refusal by an adult with capacity must be respected (for under-18s see WD-05-05), so tell your senior.'
    ],
    record: 'The options discussed, the risks explained, questions asked, the decision, who was present, and any written information given.',
    local: [
      'Your employer’s consent forms and which procedures need written consent.',
      'Who may seek consent for which procedures.'
    ],
    next: { to: 'WD-05-02' },
    sources: 'GMC, Decision making and consent (2020); Montgomery v Lanarkshire Health Board [2015] UKSC 11.'
  },
  {
    id: 'WD-05-02', mod: 5, title: 'Consent and safety for ward procedures',
    jur: 'UK-wide', fpcP: 'FPC11 Ethics and law', fpcS: 'FPC9 Quality improvement', status: 'DRAFT',
    good: 'Before any ward procedure, such as a cannula, blood culture, catheter or NG tube, you have valid consent, the right patient and procedure, the competence or supervision you need, and a safe set-up. Afterwards you check the patient and record what you did.',
    before: [
      'Only do procedures you are trained for, or do them under direct supervision.',
      'Check identity, allergies (for example to skin preparations or latex), anticoagulants and any results that matter for this procedure.',
      'Gather the equipment and a sharps bin, and offer a chaperone where appropriate.'
    ],
    steps: [
      'Explain what you will do, why, what it will feel like, the risks and the alternatives, and get consent. Verbal consent is usual for minor ward procedures; follow local policy on written consent.',
      'Pause before you start: right patient, right procedure and site, consent, equipment. Use your employer’s safety checklist for invasive procedures.',
      'Use aseptic technique and dispose of sharps at the point of use.',
      'Stop if the patient withdraws consent, or if you have reached the number of attempts your local policy allows.',
      'Afterwards, check the patient, label samples at the bedside, and complete any required checks, such as confirming NG tube position before use.'
    ],
    pitfall: 'Labelling samples away from the bedside.',
    words: [
      '“I’d like to put a small tube in your vein. It will feel like a sharp scratch. Is that all right?”',
      '“Can you tell me your full name and date of birth?”',
      '“Tell me if you want me to stop at any point.”'
    ],
    stop: [
      'You are not trained for the procedure, or you are not succeeding.',
      'The patient withdraws consent.',
      'There is a complication, or the patient becomes unwell.',
      'You cannot confirm the patient’s identity.'
    ],
    record: 'The procedure and why; consent; technique; the number of attempts; any complications; required checks; your name and role.',
    local: [
      'Which procedures Foundation doctors may do, and how you are signed off.',
      'Your employer’s procedural safety checklists.',
      'The local policy for confirming NG tube position.'
    ],
    next: { to: 'WD-05-03' },
    sources: 'GMC, Decision making and consent (2020); Centre for Perioperative Care, National Safety Standards for Invasive Procedures 2 (2023); Welsh Health Circular WHC/2023/30.'
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
      'If they lack capacity for this decision: England, Wales, Jersey and Northern Ireland use best interests (Northern Ireland under the parts in force or common law). In Scotland, act only to benefit them, least restrictively, taking account of their wishes; non-urgent treatment needs a section 47 certificate from the medical practitioner primarily responsible; check your health board’s policy on who signs.'
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
      'Northern Ireland: only Phase 1 of the 2016 Act is in force; treatment decisions are still largely governed by common law.',
      'Crown Dependencies have their own law, for example Jersey’s Capacity and Self-Determination (Jersey) Law 2016.',
      'Liaison psychiatry contact.',
      'Patients under 16 or 18: a different framework applies; see WD-05-05 or ask a senior.'
    ],
    next: { to: 'WD-05-04' },
    sources: 'Mental Capacity Act 2005 and Code of Practice (2007); A Local Authority v JB [2021] UKSC 52; Adults with Incapacity (Scotland) Act 2000 and Part 5 Code of Practice; Mental Welfare Commission for Scotland, Treatment under section 47; Mental Capacity Act (Northern Ireland) 2016; Capacity and Self-Determination (Jersey) Law 2016; GMC, Decision making and consent (2020).'
  },
  {
    id: 'WD-05-04', mod: 5, title: 'Best interests',
    jur: 'Check your nation and employer', fpcP: 'FPC11 Ethics and law', fpcS: 'FPC3 Holistic planning', status: 'DRAFT',
    good: 'When an adult lacks capacity for a decision, it is made in the way your nation’s law requires, with the person’s own wishes, feelings, values and beliefs at the centre. Relatives are consulted; they decide only if they hold legal authority.',
    before: [
      'Confirm a capacity assessment for this decision is recorded (WD-05-03).',
      'Check for an advance decision to refuse treatment, and for a legal proxy with authority over this decision, such as a health and welfare attorney, deputy, welfare attorney or guardian. The terms differ by nation.',
      'Identify who to consult, and whether an independent advocate is needed under your nation’s law.'
    ],
    steps: [
      'Ask whether the decision can wait until the person regains capacity.',
      'Involve the person as fully as possible.',
      'Find out their past and present wishes, feelings, beliefs and values.',
      'Consult those close to them and any proxy.',
      'England, Wales, Jersey and Northern Ireland (common law until its Act is fully in force): choose what is in the person’s best interests, using the least restrictive option that achieves the purpose.',
      'Scotland: any intervention must benefit the person, be the least restrictive option, take account of their wishes and the views of relevant others, and encourage them to use their skills. Non-urgent treatment needs a section 47 certificate.',
      'In an emergency, give the treatment needed to save life or prevent serious harm.'
    ],
    pitfall: 'Asking relatives to make the decision when they have no legal authority to do so.',
    words: [
      '“We’re not asking you to decide, but to help us understand what she would want.”',
      '“What was important to him before he became unwell?”'
    ],
    stop: [
      'The decision is serious, such as withdrawing major treatment, or there is disagreement: involve your senior, who may seek legal advice.',
      'Restraint or a deprivation of liberty may be needed: each nation has its own legal process.',
      'A proxy’s decision seems contrary to the person’s interests.'
    ],
    record: 'The capacity assessment, who you consulted, the person’s known wishes, the options considered, the decision and the reasons.',
    local: [
      'Your employer’s best-interests and deprivation-of-liberty forms and process.',
      'How to refer to independent advocacy.',
      'How to reach your legal services team.'
    ],
    next: { to: 'WD-05-05' },
    sources: 'Mental Capacity Act 2005, section 4, and Code of Practice (2007); Adults with Incapacity (Scotland) Act 2000, section 1; BMA, Mental capacity in Northern Ireland toolkit (updated March 2025); Capacity and Self-Determination (Jersey) Law 2016; GMC, Decision making and consent (2020).'
  },
  {
    id: 'WD-05-05', mod: 5, title: 'Children and young people: consent and Gillick',
    jur: 'Check your nation and employer', fpcP: 'FPC11 Ethics and law', fpcS: 'FPC4 Communication and care', status: 'DRAFT',
    good: 'You talk to the young person directly, judge whether they can consent to this decision, respect their confidentiality where appropriate, and involve those with parental responsibility when the young person cannot consent or when safety requires it.',
    before: [
      'Know who has parental responsibility.',
      'Know the law where you work. England, Wales and Northern Ireland: young people of 16 and 17 are presumed able to consent to treatment, and under-16s can consent if they are Gillick competent. Scotland: people of 16 and over have full legal capacity, and under-16s can consent if, in the opinion of the attending doctor, they understand the nature and possible consequences of the treatment.'
    ],
    steps: [
      'Speak to the young person directly, in language that suits them.',
      'Assess whether they understand this decision: what is proposed, the options, and the likely consequences.',
      'Encourage them to involve their parents, but respect the confidentiality of a competent young person unless there is a risk of serious harm.',
      'If they cannot consent, obtain consent from someone with parental responsibility.',
      'In an emergency, give the treatment needed to prevent serious harm.'
    ],
    pitfall: 'Talking only to the parents when the young person can take part in the decision.',
    words: [
      '“I’d like to hear what you think about this.”',
      '“Can you tell me what you understand about the treatment?”',
      '“Is it all right if we include your mum in this conversation?”'
    ],
    stop: [
      'A young person refuses treatment, or parents refuse treatment the child needs: seek senior and legal advice.',
      'You have a safeguarding concern (WD-05-06).',
      'Those with parental responsibility disagree.'
    ],
    record: 'Who was present, your assessment of the young person’s understanding, their views, who consented, and any confidentiality decisions.',
    local: [
      'Your employer’s policy for treating young people on adult and children’s wards.',
      'How to reach the paediatric team and the safeguarding team.'
    ],
    next: { to: 'WD-05-06' },
    sources: 'Gillick v West Norfolk and Wisbech Area Health Authority [1986] AC 112; Family Law Reform Act 1969, section 8 (England and Wales); Age of Legal Capacity (Scotland) Act 1991, sections 1 and 2(4); Age of Majority Act (Northern Ireland) 1969, section 4; GMC, 0–18 years: guidance for all doctors.'
  },
  {
    id: 'WD-05-06', mod: 5, title: 'Recognising a safeguarding concern',
    jur: 'Check your nation and employer', fpcP: 'FPC11 Ethics and law', fpcS: 'FPC1 Clinical assessment', status: 'DRAFT',
    good: 'You notice when a child or an adult at risk may be experiencing abuse or neglect, act to keep them safe, share information appropriately, and refer through your local route. You do not investigate it yourself.',
    before: [
      'Know your employer’s safeguarding route and team, including out of hours.',
      'Remember the many forms abuse can take, including physical, sexual, emotional and financial abuse, neglect and self-neglect, domestic abuse and modern slavery.'
    ],
    steps: [
      'Notice warning signs: injuries that do not fit the explanation, delay in seeking help, disclosures, worrying behaviour, signs of neglect.',
      'If someone discloses abuse, listen, do not promise secrecy, avoid leading questions, and note their own words.',
      'Consider immediate safety: is this person, or anyone else such as children at home, at risk now?',
      'Discuss it with your senior or the safeguarding lead the same day.',
      'Refer through your local process. GMC guidance supports sharing information to protect a child, or an adult who lacks capacity, from serious harm. If an adult with capacity refuses, usually respect this unless others, such as children, are at risk; discuss it with your senior or safeguarding lead.',
      'If anyone is in immediate danger, contact the police.'
    ],
    pitfall: 'Waiting until you are certain. Raise the concern; others will assess it.',
    words: [
      '“Thank you for telling me. I can’t keep this a secret, but I will only share it with people who need to know to help keep you safe.”',
      '“Can you tell me what happened?”'
    ],
    stop: [
      'Someone is in immediate danger.',
      'A child discloses abuse.',
      'You are unsure whether something is a safeguarding concern: ask.'
    ],
    record: 'The facts, the person’s own words, what you observed (using a body map if your employer uses one), and who you informed and when.',
    local: [
      'Safeguarding team contacts and the out-of-hours route.',
      'Referral forms, and the law and guidance that apply in your nation.',
      'How to check whether there are children in the household.'
    ],
    next: { ext: 'Starting Out: finding your local safeguarding route', href: 'starting-out.html' },
    sources: 'Care Act 2014 (England); Social Services and Well-being (Wales) Act 2014; Adult Support and Protection (Scotland) Act 2007; Adult Safeguarding: Prevention and Protection in Partnership (Northern Ireland, 2015); Children Acts 1989 and 2004 (England and Wales); Children (Scotland) Act 1995; Children (Northern Ireland) Order 1995; National Guidance for Child Protection in Scotland (2021, updated 2023); GMC, Protecting children and young people (2012); GMC, Confidentiality (2017).'
  },
  {
    id: 'WD-06-01', mod: 6, title: 'Treatment escalation plans and DNACPR conversations',
    jur: 'Check your nation and employer', fpcP: 'FPC11 Ethics and law', fpcS: 'FPC4 Communication and care', status: 'DRAFT',
    good: 'Patients at risk of deteriorating have a clear plan, made with them, about which treatments would and would not be right for them, including CPR. The decision belongs to the senior responsible clinician; you help prepare, take part, and record it.',
    before: [
      'Know who will make the decision, and agree with them who leads the conversation.',
      'Read the notes and check for existing plans or forms, such as ReSPECT, a treatment escalation plan, or your nation’s DNACPR form.',
      'Find a private space and enough time; offer an interpreter if needed.'
    ],
    steps: [
      'Explore what the person understands about their illness and what matters to them.',
      'Explain the current situation and the likely course honestly.',
      'Discuss which treatments may help and which may not, including CPR and its likely outcome for them.',
      'A person with capacity can refuse CPR. Clinicians need not offer CPR that will not work, but should discuss the decision with the patient unless that would cause them physical or psychological harm.',
      'If the person lacks capacity, consult those close to them, who inform the decision but do not make it unless they have legal authority.',
      'Record the decision, share it with the team, and plan when it will be reviewed.'
    ],
    pitfall: 'Treating a DNACPR decision as “not for treatment”. It is only about CPR; all other treatment continues.',
    words: [
      '“What do you understand about how unwell you are?”',
      '“If your heart stopped, CPR would be very unlikely to work and could cause harm.”',
      '“This decision is only about CPR. All your other treatment continues.”'
    ],
    stop: [
      'You are asked to make the decision yourself.',
      'The patient or family disagree with the decision: involve your senior and offer a second opinion.',
      'You are unsure whether a decision is valid or still applies.'
    ],
    record: 'The decision and reasons, who was involved, what was discussed, the form completed under your nation’s policy, and the review plan.',
    local: [
      'Which form you use: ReSPECT, a local treatment escalation plan, the All Wales DNACPR form, or the NHSScotland DNACPR form. Northern Ireland is working towards adopting ReSPECT nationally in 2026, so check your trust’s current form.',
      'Who may sign it, and how it travels with the patient on discharge.'
    ],
    next: { to: 'WD-06-02' },
    sources: 'BMA, Resuscitation Council UK and RCN, Decisions relating to cardiopulmonary resuscitation (3rd edition, 1st revision, 2016); GMC, Treatment and care towards the end of life (2010, updated 2022); R (Tracey) v Cambridge University Hospitals [2014] EWCA Civ 822 (England and Wales); Winspear v City Hospitals Sunderland [2015] EWHC 3250 (QB); Sharing and Involving: All Wales DNACPR policy (revised 2024); Scottish Government, CPR decisions: integrated adult policy (2016); Resuscitation Council UK, Where in the UK has adopted the ReSPECT process?'
  },
  {
    id: 'WD-06-02', mod: 6, title: 'Recognising dying and planning care',
    jur: 'UK-wide', fpcP: 'FPC3 Holistic planning', fpcS: 'FPC4 Communication and care', status: 'DRAFT',
    good: 'When someone may be in the last days of life, the team recognises it, discusses it with them and those important to them, plans care around comfort and their wishes, and reviews the plan daily.',
    before: [
      'Recognising dying is a senior and team decision: raise your concern rather than decide alone.',
      'Check that reversible causes have been considered.',
      'Check existing plans and the person’s known wishes.'
    ],
    steps: [
      'Raise the possibility on the round when a patient is deteriorating despite treatment.',
      'Make sure a senior-led conversation happens with the patient, if possible, and those close to them.',
      'Agree an individual care plan: symptom control, food and fluids as the person wishes and as appropriate, and stopping tests and treatments that no longer help.',
      'Make sure anticipatory medicines are prescribed (see the Prescribe section) and specialist palliative care is involved if needs are complex.',
      'Review daily: some people improve.',
      'Support the family: what to expect, visiting, and who to contact.'
    ],
    pitfall: 'Continuing routine observations and blood tests that no longer help the patient.',
    words: [
      '“I’m worried that he may be dying.”',
      '“We’ll focus on keeping her comfortable.”',
      '“What would be most important to him now?”'
    ],
    stop: [
      'There is uncertainty about whether the person is dying.',
      'Symptoms are not controlled: see Bleep Card BLEEP-58 and contact palliative care.',
      'There is disagreement about the plan.'
    ],
    record: 'The recognition of dying and who agreed it, conversations held, the care plan, and the review plan.',
    local: [
      'Your specialist palliative care team, in and out of hours.',
      'Your employer’s last-days-of-life care plan.',
      'Your anticipatory prescribing guidance.'
    ],
    next: { to: 'WD-06-03' },
    sources: 'NICE NG31, Care of dying adults in the last days of life (2015); Leadership Alliance for the Care of Dying People, One chance to get it right (2014); Scottish Palliative Care Guidelines.'
  },
  {
    id: 'WD-06-03', mod: 6, title: 'Death certification and medical examiner review',
    jur: 'Check your nation and employer', fpcP: 'FPC11 Ethics and law', fpcS: 'FPC5 Continuity of care', status: 'DRAFT',
    good: 'After a death, the certificate of cause of death is completed accurately and promptly by an eligible doctor, deaths that must be reported are reported, and the family understand what happens next.',
    before: [
      'Know your nation’s process. England and Wales: since 9 September 2024, any doctor who attended the person in life and can establish the cause of death may complete the certificate, and a medical examiner reviews every death not reported to the coroner. Scotland: certificates may be selected for review by the Death Certification Review Service, and some deaths must be reported to the procurator fiscal. Northern Ireland: the arrangements were updated by a Chief Medical Officer letter in 2026; follow it and your employer’s process.',
      'Read the notes and agree the cause of death with your consultant.'
    ],
    steps: [
      'Decide whether the death must be reported to the coroner or procurator fiscal under your nation’s criteria. If unsure, ask.',
      'Discuss the cause with your consultant and, in England and Wales, with the medical examiner.',
      'Complete the certificate: the disease or condition that led to death, in sequence, not the mode of dying; no abbreviations.',
      'Make sure the family are told the cause of death and what happens next, by you, the medical examiner’s office or the bereavement team.',
      'Complete any other forms your nation and employer require.'
    ],
    pitfall: 'Writing a mode of dying, such as “cardiac arrest”, as the cause of death.',
    words: [
      '“The certificate will say she died of pneumonia, which was caused by her stroke.”',
      '“I looked after Mr Y during his admission, and I believe the cause of death was …”'
    ],
    stop: [
      'You are unsure of the cause of death.',
      'The death may need reporting, or the family raise concerns about care.',
      'You did not attend the person in life: ask a doctor who did. If none is available within a reasonable time, the death is referred to the coroner (England and Wales); ask your senior.'
    ],
    record: 'In the notes: discussions with the consultant, medical examiner, coroner or procurator fiscal, and the cause of death certified.',
    local: [
      'Your bereavement office and, in England and Wales, the medical examiner office.',
      'How certificates are issued in your system.',
      'Your nation’s reporting criteria and current guidance.'
    ],
    next: { ext: 'Verifying a death on call: Bleep Card BLEEP-56', href: 'bleep-cards.html#BLEEP-56' },
    sources: 'DHSC, An overview of the death certification reforms; DHSC, Guidance for medical practitioners completing MCCDs in England and Wales (2024, updated April 2025); DHSC, Notification of Deaths Regulations guidance (2024); Healthcare Improvement Scotland, Death Certification Review Service; Scottish Government, CMO letter SGHD/CMO(2025)2; Department of Health Northern Ireland, Guidelines for death certification: issuing MCCD using NIECR (2019, updated 2022); CMO letter HSS(MD)15/2026.'
  },
  {
    id: 'WD-07-01', mod: 7, title: 'Infection prevention at the bedside',
    jur: 'UK-wide', fpcP: 'FPC9 Quality improvement', fpcS: 'FPC8 Upholding values', status: 'DRAFT',
    good: 'Every patient contact follows standard infection control precautions, you know when extra precautions are needed, and you challenge lapses politely, including your own.',
    before: [
      'Follow your employer’s dress code for clinical areas.',
      'Check isolation signs and the precautions needed before you enter.'
    ],
    steps: [
      'Clean your hands at the right moments: before touching a patient, before a clean or aseptic procedure, after possible contact with body fluids, after touching a patient, and after touching their surroundings.',
      'Use soap and water when hands are visibly dirty or when the patient has diarrhoea or suspected C. difficile; alcohol gel does not kill spores.',
      'Wear personal protective equipment that fits the task and the patient’s isolation category.',
      'Use aseptic technique for procedures and dispose of sharps at the point of use.',
      'Clean shared equipment between patients.',
      'Review lines and catheters every day, and remove them when they are no longer needed.'
    ],
    pitfall: 'Using alcohol gel instead of soap and water with suspected C. difficile.',
    words: [
      '“Would you mind cleaning your hands before you examine her?”',
      '“This patient is isolated for diarrhoea, so please use an apron and gloves.”'
    ],
    stop: [
      'You have a needlestick or splash injury: see Bleep Card BLEEP-43.',
      'A patient needs isolation and none is available: contact the infection prevention team.',
      'You suspect an outbreak on the ward.'
    ],
    record: 'Device insertion and daily review, isolation decisions, and any infection prevention advice given.',
    local: [
      'Your infection prevention team and isolation policy.',
      'The national infection prevention and control manual that applies where you work.'
    ],
    next: { ext: 'Needlestick or splash injury: Bleep Card BLEEP-43', href: 'bleep-cards.html#BLEEP-43' },
    sources: 'WHO, Guidelines on hand hygiene in health care (2009); NHS England, National infection prevention and control manual for England; ARHAI Scotland, National Infection Prevention and Control Manual; Public Health Agency Northern Ireland, Regional Infection Prevention and Control Manual.'
  }
];
