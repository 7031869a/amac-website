/* AMaC Foundation — Prescribe door data. DRAFT until senior sign-off.
   Spec: "Prescribe Door — Spec v0.1" (Docs). Same Task Card template as Ward.
   Dose rule: no card is a dosing tool. Doses only as attributed guideline facts; always send to BNF, SmPC and local formulary. */
window.PR_MODULES = [
  { n: 1, name: 'Prescribing safely', planned: 4 },
  { n: 2, name: 'Reconciling and reviewing medicines', planned: 4 },
  { n: 3, name: 'High-risk medicines', planned: 5 },
  { n: 4, name: 'Fluids and blood', planned: 2 },
  { n: 5, name: 'Going home', planned: 2 }
];

window.PR_CARDS = [
  {
    id: 'PR-01-01', mod: 1, title: 'Writing a safe prescription',
    jur: 'UK-wide', fpcP: 'FPC4 Communication and care', fpcS: 'FPC9 Quality improvement', status: 'DRAFT',
    good: 'Every prescription is for the right patient, clearly indicated, complete and unambiguous, and checked against allergies, interactions, kidney and liver function, weight where it matters, and pregnancy or breastfeeding. Whoever gives the medicine knows exactly what to give, when, and for how long.',
    before: [
      'Confirm the patient’s identity and that their allergy status is recorded (PR-01-03).',
      'Know the indication, and check current medicines, kidney and liver function, weight, and pregnancy or breastfeeding status.',
      'Check the dose and route in the BNF, the product information or your local guideline. Do not rely on memory for a medicine you rarely prescribe.'
    ],
    steps: [
      'Use the generic name unless the brand matters, as it does for some modified-release products and medicines with a narrow therapeutic range.',
      'Give the dose, route, frequency and timing. Write “units” and “micrograms” in full.',
      'Add the indication, the start date and a review or stop date, especially for antibiotics.',
      'For “as required” medicines, state the indication, the minimum interval and the maximum in 24 hours.',
      'Complete the prescriber details your employer requires; an electronic system usually does this for you.',
      'Look over the whole chart for duplicates and interactions before you leave it.',
      'Tell the nurse about any urgent first dose or time-critical medicine, such as insulin or Parkinson’s medicines.'
    ],
    pitfall: 'Abbreviating “units” or “micrograms”: a handwritten “U” can be read as a zero, and “µg” as “mg”, a thousand-fold error.',
    words: [
      '“I’ve prescribed it, and the first dose is due now. Could you give it?”',
      '“Could you check this with me? I don’t prescribe it often.”',
      '“What is the indication for this on her chart?”'
    ],
    stop: [
      'You do not know the medicine, dose or indication well enough: check the BNF or ask the pharmacist.',
      'There is an allergy or interaction you cannot resolve.',
      'You are asked to prescribe something you believe is wrong or unsafe: say so. You are responsible for what you prescribe.'
    ],
    record: 'The prescription itself, plus a note in the record of why a new medicine was started or changed, especially a high-risk one.',
    local: [
      'Your electronic prescribing system and its training.',
      'The local formulary and abbreviations policy.',
      'Your employer’s list of time-critical medicines, and how to reach the ward pharmacist.'
    ],
    next: { to: 'PR-01-02' },
    sources: 'GMC, Good practice in prescribing and managing medicines and devices (2021); Royal Pharmaceutical Society, A competency framework for all prescribers (2021); BNF, Prescription writing.'
  },
  {
    id: 'PR-01-02', mod: 1, title: 'Using the BNF and local guidance',
    jur: 'UK-wide', fpcP: 'FPC4 Communication and care', fpcS: 'FPC9 Quality improvement', status: 'DRAFT',
    good: 'You know where to find reliable prescribing information quickly, use the right source for each question, and check before prescribing anything unfamiliar.',
    before: [
      'Have quick access to the BNF and BNF for Children, your local formulary and local guidelines (for example antimicrobials, VTE, anticoagulation and fluids).',
      'Know your ward pharmacist and how to reach your medicines information service.'
    ],
    steps: [
      'For dose, route, indication and cautions, use the BNF entry, and read all of it, including kidney and liver impairment, pregnancy and interactions.',
      'For local choices, such as the first-line antibiotic or preferred anticoagulant, use the local formulary and guidelines.',
      'For product details, such as how to give an infusion or renal dosing tables, use the product information (SmPC) or your employer’s injectable medicines guide.',
      'For interactions, use the BNF interactions checker (PR-02-02).',
      'For children, use the BNF for Children, not the adult BNF.',
      'If sources conflict or the situation is unusual, ask the pharmacist or medicines information.'
    ],
    pitfall: 'Relying on a search-engine result or an out-of-date printed guideline instead of the current source.',
    words: [
      '“Could you help me check the dose for her kidney function?”',
      '“Is this on our formulary, or is there a preferred alternative?”'
    ],
    stop: [
      'The patient is pregnant or breastfeeding, is a child, or has severe kidney or liver impairment, and the advice is not clear.',
      'You find conflicting advice.',
      'You are unsure whether the medicine is appropriate at all.'
    ],
    record: 'Your reasoning whenever you depart from the local guideline, for example because of an allergy.',
    local: [
      'How to access the BNF, the product information and the injectable medicines guide at work.',
      'The local formulary app or intranet page.',
      'The medicines information contact.'
    ],
    next: { to: 'PR-01-03' },
    sources: 'BNF and BNF for Children; electronic medicines compendium (product information); GMC, Good practice in prescribing and managing medicines and devices (2021).'
  },
  {
    id: 'PR-01-03', mod: 1, title: 'Allergies and adverse drug reactions',
    jur: 'UK-wide', fpcP: 'FPC4 Communication and care', fpcS: 'FPC9 Quality improvement', status: 'DRAFT',
    good: 'Every patient’s allergy status is checked and recorded before anything is prescribed, including “no known drug allergies”, with the drug, the reaction and how certain it is. Suspected adverse reactions are recognised, managed and reported.',
    before: [
      'Ask the patient or carers, and check the GP record, previous notes and any allergy band.'
    ],
    steps: [
      'Record allergy status on the chart before prescribing. If it is unknown, record that and find out.',
      'For each allergy, record the drug, the reaction, when it happened if known, and whether it is a true allergy or an intolerance; nausea is a side effect, not an allergy.',
      'Check for cross-sensitivity before prescribing related medicines, for example other beta-lactams in penicillin allergy, using the BNF.',
      'If you suspect an adverse reaction, assess the patient first (anaphylaxis is an emergency: see BLEEP-51), then review the medicine and record what happened.',
      'Report suspected adverse reactions on a Yellow Card: all suspected reactions to medicines with a black triangle (under additional monitoring), all suspected reactions in children, and serious suspected reactions to other medicines. The scheme also covers medical devices.',
      'Tell the patient, and include the reaction in the discharge summary.'
    ],
    pitfall: 'Recording “penicillin allergy” without the reaction, so the patient may miss first-line treatment for life.',
    words: [
      '“Have you ever had a reaction to a medicine? What happened?”',
      '“Was it a rash, swelling or breathing trouble, or did it make you feel sick?”'
    ],
    stop: [
      'The reaction is severe or looks like anaphylaxis: treat it as an emergency.',
      'The allergy history is unclear and the medicine matters: ask your senior or the pharmacist.',
      'Records conflict about an allergy.'
    ],
    record: 'The drug, the reaction, its severity, when it happened, where the information came from, and whether a Yellow Card was submitted.',
    local: [
      'How allergies are recorded in your prescribing system.',
      'Whether your employer has a penicillin allergy assessment pathway.',
      'How to submit a Yellow Card (online or app).'
    ],
    next: { to: 'PR-01-04' },
    sources: 'MHRA, Yellow Card scheme; NICE CG183, Drug allergy: diagnosis and management (2014; England and Wales); BNF, Adverse reactions to drugs.'
  },
  {
    id: 'PR-01-04', mod: 1, title: 'When a prescribing error happens',
    jur: 'UK-wide', fpcP: 'FPC9 Quality improvement', fpcS: 'FPC8 Upholding values', status: 'DRAFT',
    good: 'When you find or make a prescribing error, the patient’s safety comes first, you are honest with the patient, the error is reported so the system can learn, and you reflect on it without blame.',
    before: [
      'Know your employer’s incident reporting system, and that reporting is expected of every doctor.'
    ],
    steps: [
      'Check the patient: was the medicine given, and is there any harm? Assess, treat and escalate as needed.',
      'Correct the prescription, and tell the nurse in charge and the pharmacist.',
      'Tell your senior.',
      'Be open with the patient: explain what happened and say sorry.',
      'Report it through your employer’s incident system.',
      'Reflect on what happened, discuss it with your supervisor, and write a reflection for your portfolio.'
    ],
    pitfall: 'Quietly correcting the chart and saying nothing.',
    words: [
      '“I need to tell you that there was a mistake with one of your medicines.”',
      '“I’ve made an error on Mrs B’s chart and she may have had a dose. Can we check her together?”'
    ],
    stop: [
      'The patient has been harmed or is at risk: escalate immediately.',
      'Anyone suggests not reporting or not telling the patient.',
      'You are unsure whether an error has happened: ask the pharmacist or your senior.'
    ],
    record: 'In the notes: what happened, your assessment, actions taken, who you told, and your conversation with the patient. Note the incident report reference.',
    local: [
      'Your incident reporting system and how to access it.',
      'Your employer’s process for being open with patients after an error.',
      'Who supports doctors after an error, such as your educational supervisor.'
    ],
    next: { ext: 'Starting Out: what to do when things go wrong', href: 'starting-out.html' },
    sources: 'GMC and NMC, Openness and honesty when things go wrong: the professional duty of candour (2015, as updated); GMC, Good practice in prescribing and managing medicines and devices (2021); Academy of Medical Royal Colleges, COPMeD, GMC and Medical Schools Council, The reflective practitioner: guidance for doctors and medical students (2018).'
  },
  {
    id: 'PR-03-01', mod: 3, title: 'Anticoagulants',
    jur: 'UK-wide', fpcP: 'FPC4 Communication and care', fpcS: 'FPC9 Quality improvement', status: 'DRAFT',
    good: 'Anticoagulants are prescribed for a clear indication, at the right dose for the patient’s kidney function, weight and age, with interactions and bleeding risk checked, a planned duration, and safe handling around procedures and discharge.',
    before: [
      'Check the indication, such as atrial fibrillation, treatment or prevention of VTE, or a heart valve, and who decided on it.',
      'For a DOAC in an adult, check kidney function as creatinine clearance using the Cockcroft–Gault formula, as the MHRA advises; also check weight, age, liver function, full blood count and bleeding risk.',
      'Check other medicines, especially antiplatelets, anti-inflammatories and interacting drugs (PR-02-02).',
      'For warfarin, check the target INR for the indication and the recent INR results.'
    ],
    steps: [
      'Choose the drug and dose using your local anticoagulation guideline, the BNF and the product information. DOAC doses differ by drug and by indication.',
      'Avoid duplicate anticoagulation, such as VTE prophylaxis on top of a treatment dose.',
      'Prescribe clearly: drug, dose, timing, indication, and planned duration or review date.',
      'Recheck kidney function during the admission, especially if the patient is acutely unwell or has acute kidney injury, and review the dose.',
      'If a dose is held, record why on the chart and when it should restart.',
      'For warfarin, prescribe each dose against the INR according to your local protocol, with a monitoring plan.',
      'Around procedures, follow local guidance on when to stop and restart, agreed with the team doing the procedure.',
      'At discharge, counsel the patient (alert card, signs of bleeding) and make sure monitoring is arranged (PR-05-01).'
    ],
    pitfall: 'Using eGFR instead of creatinine clearance to choose a DOAC dose.',
    words: [
      '“Why is she on apixaban, and who is reviewing how long it continues?”',
      '“Could you check this DOAC dose with me against her creatinine clearance?”',
      '“If you notice blood in your urine or black stools, contact us straight away.”'
    ],
    stop: [
      'The patient is bleeding or has a head injury: see Bleep Cards BLEEP-55 and BLEEP-07.',
      'The patient has a mechanical heart valve or antiphospholipid syndrome: DOACs are not recommended, so check with the anticoagulation service.',
      'There is severe kidney or liver impairment, very low or high body weight, or pregnancy.',
      'You are unsure about stopping or restarting around a procedure: ask the anticoagulation service or the pharmacist.'
    ],
    record: 'The indication, the drug, how the dose was chosen (creatinine clearance, weight), the planned duration, and discharge counselling and monitoring.',
    local: [
      'Your anticoagulation guideline and anticoagulation service.',
      'Your warfarin dosing protocol and procedure guidance.',
      'Where to get patient alert cards and information leaflets.'
    ],
    next: { ext: 'Anticoagulant reversal on call: Bleep Card BLEEP-55', href: 'bleep-cards.html#BLEEP-55' },
    sources: 'MHRA, Drug Safety Update (25 May 2023): Direct-acting oral anticoagulants (DOACs): paediatric formulations; reminder of dose adjustments in patients with renal impairment; MHRA, Drug Safety Update (29 June 2020): DOACs: reminder of bleeding risk, including availability of reversal agents; NICE NG196, Atrial fibrillation: diagnosis and management (2021; England and Wales); NICE NG158, Venous thromboembolic diseases: diagnosis, management and thrombophilia testing (2020, updated 2023; England and Wales); BNF.'
  }
];
