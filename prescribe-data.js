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
    next: { to: 'PR-02-01' },
    sources: 'GMC and NMC, Openness and honesty when things go wrong: the professional duty of candour (2015, as updated); GMC, Good practice in prescribing and managing medicines and devices (2021); Academy of Medical Royal Colleges, COPMeD, GMC and Medical Schools Council, The reflective practitioner: guidance for doctors and medical students (2018).'
  },
  {
    id: 'PR-02-01', mod: 2, title: 'Medicines reconciliation on admission',
    jur: 'UK-wide', fpcP: 'FPC4 Communication and care', fpcS: 'FPC5 Continuity of care', status: 'DRAFT',
    good: 'Soon after admission, the team has an accurate list of what the patient was actually taking before they came in, checked against more than one source, with every difference from the hospital chart explained or acted on.',
    before: [
      'Gather sources: the patient or carer, the GP record or shared care record (such as the Summary Care Record in England, the Emergency Care Summary in Scotland, the Welsh GP Record or the Northern Ireland Electronic Care Record), repeat prescriptions, the patient’s own medicines, compliance aids and community pharmacy records.',
      'Include over-the-counter, herbal and recreational substances, and medicines given by other services, such as depot injections or clinic-supplied drugs.'
    ],
    steps: [
      'Use at least two sources, and ask the patient how they actually take each medicine.',
      'For each medicine, record the name, dose, frequency, formulation and when it was last taken.',
      'Compare the list with the hospital chart, and for each difference decide: continue, change, hold or stop, and why.',
      'Prescribe what should continue, and record why anything was held or stopped.',
      'Flag time-critical medicines so doses are not missed.',
      'Work with the pharmacy team, who often complete or check reconciliation.'
    ],
    pitfall: 'Copying an old GP list onto the chart without checking what the patient actually takes.',
    words: [
      '“Can you talk me through the medicines you take each day, and how you take them?”',
      '“Do you take anything you buy yourself, or anything from another clinic?”'
    ],
    stop: [
      'Sources conflict and you cannot resolve them: ask pharmacy.',
      'The patient takes a specialist medicine you do not know: check with pharmacy or the prescribing team before continuing or stopping it.',
      'A medicine may be causing the admission.'
    ],
    record: 'The sources used, the reconciled list, and the decision and reason for each medicine held, changed or stopped.',
    local: [
      'Your employer’s medicines reconciliation process and target timeframe.',
      'How to access the GP record or shared care record where you work.',
      'How pharmacy technicians and pharmacists share the work.'
    ],
    next: { to: 'PR-02-02' },
    sources: 'NICE NG5, Medicines optimisation (2015; England and Wales); NICE QS120, Medicines optimisation, quality statement 4 (2016; England); Royal Pharmaceutical Society, Keeping patients safe when they transfer between care providers – getting the medicines right (2012).'
  },
  {
    id: 'PR-02-02', mod: 2, title: 'Interactions and contraindications',
    jur: 'UK-wide', fpcP: 'FPC4 Communication and care', fpcS: 'FPC9 Quality improvement', status: 'DRAFT',
    good: 'Before adding a medicine, you check it against everything else the patient takes and against their conditions, recognise the interactions that matter, and change the plan or put monitoring in place.',
    before: [
      'Have the full reconciled medicines list (PR-02-01) and the problem list, including kidney and liver function, pregnancy and allergies.'
    ],
    steps: [
      'Check the new medicine against current medicines with the BNF interactions checker or your system’s alerts.',
      'Judge the severity and whether it matters for this patient: avoid, adjust the dose, or monitor.',
      'Watch for high-risk combinations, such as several drugs that add to bleeding risk, raise potassium, prolong the QT interval or cause sedation.',
      'Check contraindications and cautions against the patient’s conditions, such as kidney impairment, heart failure or asthma.',
      'If you continue despite an interaction, arrange the monitoring needed and record why.',
      'Remember interactions when you stop a drug too: stopping an enzyme inducer or inhibitor changes the levels of others.'
    ],
    pitfall: 'Clicking past electronic alerts without reading them.',
    words: [
      '“This new antibiotic interacts with her warfarin. Can we agree how to monitor it?”',
      '“Could you check this combination with me?”'
    ],
    stop: [
      'The interaction is listed as severe or the combination should be avoided.',
      'The patient is on a narrow-therapeutic-range medicine, such as warfarin, lithium, digoxin or an antiepileptic.',
      'You are unsure how to manage it: ask the pharmacist.'
    ],
    record: 'The interaction considered, the decision, and any monitoring arranged.',
    local: [
      'How interaction alerts work in your prescribing system.',
      'How to reach the ward pharmacist and medicines information.'
    ],
    next: { to: 'PR-02-03' },
    sources: 'BNF, Interactions; MHRA, Drug Safety Update; GMC, Good practice in prescribing and managing medicines and devices (2021).'
  },
  {
    id: 'PR-02-03', mod: 2, title: 'Reviewing and stopping medicines',
    jur: 'UK-wide', fpcP: 'FPC4 Communication and care', fpcS: 'FPC3 Holistic planning', status: 'DRAFT',
    good: 'Medicines are reviewed during the admission, with the patient, so that each one still has a reason, still does more good than harm, and still fits what matters to the patient. Medicines are stopped safely when they no longer help.',
    before: [
      'Know why each medicine was started, and the patient’s current condition, goals and prognosis.',
      'Look for problems: falls, confusion, kidney injury, low blood pressure, many medicines, and medicines with no clear indication.'
    ],
    steps: [
      'Raise a medicines review on the round when it is relevant, especially for frail patients or those on many medicines.',
      'Go through each medicine: is there a current indication, is it working, is it causing harm, and does the patient want it?',
      'Use a structured tool if your employer uses one.',
      'Agree changes with your senior and the patient, and stop or reduce medicines safely; some need tapering.',
      'Record what was stopped and why, and tell the GP in the discharge summary (see Ward card WD-03-02).'
    ],
    pitfall: 'Restarting every pre-admission medicine automatically at discharge without asking whether it is still needed.',
    words: [
      '“Which of your tablets do you feel help you, and are any causing problems?”',
      '“This medicine may now be doing more harm than good. Would you be happy to stop it?”'
    ],
    stop: [
      'The medicine needs tapering or specialist input to stop safely.',
      'The patient disagrees with stopping it.',
      'It was started by a specialist team: talk to them first.'
    ],
    record: 'Medicines reviewed, decisions and reasons, the patient’s views, and the plan for the GP.',
    local: [
      'Any structured medication review tool your employer uses.',
      'Pharmacy and specialist teams for older people or frailty.'
    ],
    next: { to: 'PR-02-04' },
    sources: 'NICE NG5, Medicines optimisation (2015; England and Wales); Scottish Government, Polypharmacy guidance: appropriate prescribing, making medicines safe, effective and sustainable 2026–2029 (2026; Scotland); GMC, Good practice in prescribing and managing medicines and devices (2021).'
  },
  {
    id: 'PR-02-04', mod: 2, title: 'Medicines that need monitoring',
    jur: 'UK-wide', fpcP: 'FPC4 Communication and care', fpcS: 'FPC5 Continuity of care', status: 'DRAFT',
    good: 'For every medicine that needs drug levels or blood tests, someone has planned when to check, who will look at the result, and what to do with it, and the plan continues after discharge.',
    before: [
      'Know which of the patient’s medicines need monitoring, for example aminoglycosides and vancomycin, digoxin, lithium, some antiepileptics, warfarin, and medicines affecting kidney function or potassium.',
      'Check your local guideline for when and how to sample.'
    ],
    steps: [
      'Plan the monitoring when you prescribe: what test, when, and the target range from your local guideline or the BNF.',
      'Time drug levels correctly in relation to the dose, as the guideline specifies, and record the dose times.',
      'Review results promptly and act on them: continue, adjust, withhold or seek advice.',
      'Hand over pending levels and what to do with them.',
      'At discharge, tell the GP and the patient what monitoring continues and who is responsible.'
    ],
    pitfall: 'A drug level taken at the wrong time, which is then acted on as if it were correct.',
    words: [
      '“When is the next level due, and who will check it?”',
      '“Her level is above the range. Can I check the plan with you or the pharmacist?”'
    ],
    stop: [
      'A level is high or there are signs of toxicity: withhold if your guideline says so and seek advice.',
      'You are unsure how to interpret a level or adjust the dose.',
      'Kidney function changes in a patient on a medicine that needs monitoring.'
    ],
    record: 'The monitoring plan, dose and sample times, results, actions, and the plan handed over or sent to the GP.',
    local: [
      'Your guidelines for drug-level monitoring and dosing.',
      'How to request levels, and the lab’s turnaround times.',
      'The antimicrobial pharmacist or medicines information contact.'
    ],
    next: { to: 'PR-03-01' },
    sources: 'BNF; local therapeutic drug monitoring guidelines; GMC, Good practice in prescribing and managing medicines and devices (2021).'
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
    next: { to: 'PR-03-02' },
    sources: 'MHRA, Drug Safety Update (25 May 2023): Direct-acting oral anticoagulants (DOACs): paediatric formulations; reminder of dose adjustments in patients with renal impairment; MHRA, Drug Safety Update (29 June 2020): DOACs: reminder of bleeding risk, including availability of reversal agents; NICE NG196, Atrial fibrillation: diagnosis and management (2021; England and Wales); NICE NG158, Venous thromboembolic diseases: diagnosis, management and thrombophilia testing (2020, updated 2023; England and Wales); BNF.'
  },
  {
    id: 'PR-03-02', mod: 3, title: 'Insulin in hospital',
    jur: 'UK-wide', fpcP: 'FPC4 Communication and care', fpcS: 'FPC9 Quality improvement', status: 'DRAFT',
    good: 'Patients with diabetes get the right insulin, at the right dose and time, without gaps; glucose is monitored and acted on; and people who can manage their own insulin are supported to do so.',
    before: [
      'Know the patient’s usual insulin: the exact product name, device, doses and times. Check their own records or insulin passport.',
      'Know whether they are eating, their glucose trend and whether they are unwell.'
    ],
    steps: [
      'Prescribe insulin by its exact product name, strength and device, with the dose in “units” written in full.',
      'Continue background (basal) insulin when the patient is not eating or is on an insulin infusion, unless a specialist advises otherwise. Never leave a person with type 1 diabetes without insulin.',
      'Use your employer’s guidelines for variable-rate insulin infusions, surgery, steroids and when patients are nil by mouth.',
      'Prescribe the treatment of hypoglycaemia according to your local protocol.',
      'Support self-management where the patient is able and wishes to, according to local policy.',
      'Involve the diabetes inpatient team early when control is poor or the situation is complex.'
    ],
    pitfall: 'Writing “U” for units, or prescribing the wrong insulin because two products have similar names.',
    words: [
      '“Which insulin do you take, what does the pen look like, and when do you take it?”',
      '“Would you like to keep doing your own insulin while you’re here?”'
    ],
    stop: [
      'Glucose is low: see Bleep Card BLEEP-06. Glucose is persistently high, or the patient may have DKA or HHS: see Bleep Cards BLEEP-24 and BLEEP-25.',
      'You do not recognise the insulin product or regimen.',
      'The patient is nil by mouth, on steroids or having surgery and you are unsure of the plan: ask the diabetes team or your senior.'
    ],
    record: 'The usual regimen, any changes and reasons, glucose results acted on, and the plan for discharge.',
    local: [
      'Your inpatient diabetes guidelines, including insulin infusions and hypoglycaemia.',
      'How to contact the diabetes inpatient team.',
      'Your self-management policy.'
    ],
    next: { to: 'PR-03-03' },
    sources: 'Joint British Diabetes Societies for Inpatient Care, The use of variable rate intravenous insulin infusion (VRIII) in medical inpatients (2014), Self-management of diabetes in hospital (2023) and The hospital management of hypoglycaemia in adults with diabetes mellitus (2023); National Patient Safety Agency, Rapid Response Report NPSA/2010/RRR013: Safer administration of insulin (2010; England and Wales); MHRA, Drug Safety Update (April 2015): high strength, fixed combination and biosimilar insulin products; BNF.'
  },
  {
    id: 'PR-03-03', mod: 3, title: 'Opioids and controlled drugs',
    jur: 'UK-wide', fpcP: 'FPC4 Communication and care', fpcS: 'FPC9 Quality improvement', status: 'DRAFT',
    good: 'Opioids are prescribed for a clear reason, at a dose that fits the patient and any previous opioid use, in the right formulation, with laxatives and monitoring planned, and controlled drugs prescriptions meet the legal requirements.',
    before: [
      'Know what opioids the patient already takes, including patches, and whether they are opioid-naive.',
      'Check kidney and liver function, age, frailty and other sedating medicines.'
    ],
    steps: [
      'Check the dose against the BNF and your local guideline, and double-check any conversion between opioids or routes, ideally with a pharmacist.',
      'Be clear about immediate-release and modified-release products, and prescribe by brand where your employer requires it.',
      'For “as required” doses, state the indication, minimum interval and maximum daily dose.',
      'Prescribe a laxative alongside regular opioids unless there is a reason not to, and an antiemetic if needed.',
      'Make sure sedation and breathing are monitored, and that naloxone is available according to local policy.',
      'For Schedule 2 and 3 controlled drugs, include the patient’s name and address, the form, the strength where more than one exists, the dose, and the total quantity in words and figures, with your signature, the date and your address, as the BNF and your employer require.'
    ],
    pitfall: 'Confusing immediate-release and modified-release morphine.',
    words: [
      '“What painkillers do you take at home, and do you use any patches?”',
      '“Could you check this opioid conversion with me?”'
    ],
    stop: [
      'The patient is drowsy or breathing slowly: see Bleep Card BLEEP-48.',
      'You are converting between opioids or routes and are unsure.',
      'Pain is poorly controlled despite treatment: review the cause (BLEEP-53) and seek senior or pain team advice.'
    ],
    record: 'The indication, the dose and how it was chosen, conversions checked, and the monitoring plan.',
    local: [
      'Your opioid prescribing and conversion guidance.',
      'Rules for prescribing controlled drugs, including at discharge.',
      'The acute pain team and palliative care team contacts.'
    ],
    next: { to: 'PR-03-04' },
    sources: 'Misuse of Drugs Regulations 2001 (England, Wales and Scotland) and Misuse of Drugs Regulations (Northern Ireland) 2002; National Patient Safety Agency, Rapid Response Report 05: Reducing dosing errors with opioid medicines (2008; England and Wales); Faculty of Pain Medicine, Opioids Aware; BNF, Controlled drugs and drug dependence.'
  },
  {
    id: 'PR-03-04', mod: 3, title: 'VTE risk assessment and prophylaxis',
    jur: 'Check your nation and employer', fpcP: 'FPC4 Communication and care', fpcS: 'FPC9 Quality improvement', status: 'DRAFT',
    good: 'Every admitted patient has a venous thromboembolism (VTE) and bleeding risk assessment using the tool your employer uses, prophylaxis is prescribed when the balance favours it, and the assessment is repeated when things change.',
    before: [
      'Know your employer’s VTE risk assessment tool and prophylaxis guideline.',
      'Check whether the patient is already anticoagulated, and their kidney function, weight, platelets and bleeding risk.'
    ],
    steps: [
      'Complete the VTE and bleeding risk assessment on admission, as your employer requires.',
      'If prophylaxis is indicated, choose pharmacological or mechanical methods according to the guideline and the patient’s bleeding risk.',
      'Do not prescribe prophylaxis on top of a treatment dose of an anticoagulant.',
      'Reassess when the clinical situation changes, for example after surgery, with new bleeding or a falling platelet count.',
      'Plan the duration, including any prophylaxis continuing after discharge.',
      'Explain the plan to the patient.'
    ],
    pitfall: 'Prescribing prophylactic heparin to a patient who is already on a DOAC.',
    words: [
      '“Have you had blood clots before, or problems with bleeding?”',
      '“This injection helps prevent clots while you’re less mobile.”'
    ],
    stop: [
      'The patient is bleeding, has a high bleeding risk or a low platelet count.',
      'The patient has severe kidney impairment or extremes of weight.',
      'You suspect a VTE has already happened: see Bleep Card BLEEP-16.'
    ],
    record: 'The completed risk assessment, the decision and reason, and the planned duration.',
    local: [
      'Your VTE risk assessment tool and prophylaxis guideline.',
      'Guidance for surgical, orthopaedic and pregnant patients.'
    ],
    next: { to: 'PR-03-05' },
    sources: 'NICE NG89, Venous thromboembolism in over 16s: reducing the risk of hospital-acquired deep vein thrombosis or pulmonary embolism (2018, updated 2019; England and Wales); SIGN 122, Prevention and management of venous thromboembolism (2010, revised 2014; Scotland); Department of Health, VTE risk assessment tool (England; available as a NICE NG89 resource); BNF.'
  },
  {
    id: 'PR-03-05', mod: 3, title: 'Antimicrobial prescribing',
    jur: 'Check your nation and employer', fpcP: 'FPC4 Communication and care', fpcS: 'FPC9 Quality improvement', status: 'DRAFT',
    good: 'Antibiotics are started promptly when needed, chosen from the local guideline, documented with an indication and review date, and reviewed once results are back so they are stopped, narrowed, switched or continued for a clear reason.',
    before: [
      'Take cultures before antibiotics where possible, without delaying treatment in sepsis.',
      'Check allergies accurately (PR-01-03), kidney function, pregnancy and interactions.'
    ],
    steps: [
      'Choose the antibiotic, dose and route from your local antimicrobial guideline, which reflects local resistance.',
      'Record the indication, start date and a review or stop date on the prescription.',
      'Review at the time your guideline sets, with the results: stop, switch from intravenous to oral, change, continue, or arrange outpatient treatment.',
      'Seek microbiology or infectious diseases advice for unusual organisms, treatment failure or restricted antibiotics.',
      'Monitor levels and kidney function for medicines that need it (PR-02-04).'
    ],
    pitfall: 'An antibiotic with no indication or stop date that is still running days later.',
    words: [
      '“What are we treating, and when will we review it?”',
      '“The cultures are back. Can we narrow or stop this?”'
    ],
    stop: [
      'The patient has sepsis: follow the sepsis pathway and Bleep Card BLEEP-03.',
      'The patient has a significant allergy and the guideline’s choices are not suitable.',
      'The patient is not improving, or results suggest a resistant organism: ask microbiology.'
    ],
    record: 'The indication, the antibiotic and why it was chosen, the review date, and the outcome of each review.',
    local: [
      'Your antimicrobial guideline or app, and which antibiotics are restricted.',
      'How to contact microbiology and the antimicrobial pharmacist.'
    ],
    next: { to: 'PR-04-01' },
    sources: 'UK Health Security Agency, Start smart then focus: antimicrobial stewardship toolkit for inpatient care settings (updated September 2023; England); Scottish Antimicrobial Prescribing Group; NICE NG15, Antimicrobial stewardship (2015; England and Wales).'
  },
  {
    id: 'PR-04-01', mod: 4, title: 'Prescribing IV fluids',
    jur: 'Check your nation and employer', fpcP: 'FPC4 Communication and care', fpcS: 'FPC1 Clinical assessment', status: 'DRAFT',
    good: 'IV fluids are prescribed only when needed, for a clear purpose (resuscitation, routine maintenance, or replacement and redistribution), after assessing the patient, with the type, volume and rate chosen from your guideline, and with reassessment at least daily.',
    before: [
      'Assess fluid status: history, observations, examination, fluid balance, weight and blood results including electrolytes and kidney function.',
      'Decide whether the patient can drink or be fed instead.'
    ],
    steps: [
      'Decide the purpose: resuscitation, routine maintenance, or replacing ongoing losses and correcting imbalances.',
      'Choose the fluid, volume and rate from your employer’s guideline, taking account of weight, losses, electrolytes and conditions such as heart or kidney failure.',
      'Prescribe clearly: fluid, additives, volume, rate and duration.',
      'Use ready-mixed potassium-containing fluids as your employer’s guideline requires; concentrated potassium is a restricted high-risk medicine.',
      'Reassess after each bolus in resuscitation, and at least daily for maintenance, with fluid balance, weight and electrolytes.',
      'Stop IV fluids when they are no longer needed.'
    ],
    pitfall: 'Writing up “maintenance fluids” for days without reassessing the patient or the electrolytes.',
    words: [
      '“Is he drinking enough to stop the drip?”',
      '“Her sodium has fallen. Can we review the fluid plan?”'
    ],
    stop: [
      'The patient is shocked or not responding to fluid: see Bleep Card BLEEP-03 and escalate.',
      'There are signs of fluid overload: see Bleep Card BLEEP-39.',
      'The patient has significant electrolyte problems, heart failure, kidney failure or is a child: follow specialist guidance.'
    ],
    record: 'Your assessment, the purpose of the fluids, the prescription, and each review.',
    local: [
      'Your employer’s IV fluid guideline and prescription chart.',
      'Guidance for children, which differs from adults.'
    ],
    next: { to: 'PR-04-02' },
    sources: 'NICE CG174, Intravenous fluid therapy in adults in hospital (2013, updated 2017; England and Wales); BNF.'
  },
  {
    id: 'PR-04-02', mod: 4, title: 'Prescribing a blood transfusion',
    jur: 'UK-wide', fpcP: 'FPC4 Communication and care', fpcS: 'FPC11 Ethics and law', status: 'DRAFT',
    good: 'A transfusion is given only when it is indicated, after a shared decision with the patient, to the right patient, with the right component, checked at every step, and monitored throughout.',
    before: [
      'Check the indication against your employer’s transfusion guideline, and consider alternatives such as treating iron deficiency.',
      'Check for special requirements, such as irradiated components, and any previous reactions.',
      'Make sure the sample is taken and labelled at the bedside according to local policy.'
    ],
    steps: [
      'Discuss the transfusion with the patient: the reason, benefits, risks and alternatives. Give written information, and record their decision.',
      'Prescribe the component, the volume or units, the rate and any special requirements, according to your employer’s guideline.',
      'Consider whether the patient is at risk of fluid overload and needs a slower rate or reassessment between units.',
      'Make sure the bedside identity check is done and observations are recorded as local policy requires.',
      'Reassess after the transfusion before prescribing more.'
    ],
    pitfall: 'Prescribing more than one unit automatically when one, followed by reassessment, would do.',
    words: [
      '“Your blood count is low and we think a transfusion would help. Can I explain the benefits and risks?”',
      '“Have you ever had a reaction to a transfusion?”'
    ],
    stop: [
      'The patient has a reaction during a transfusion: see Bleep Card BLEEP-54.',
      'The patient refuses blood products, for example for religious reasons: respect a decision made with capacity and seek senior and transfusion team advice.',
      'You are unsure about the indication or special requirements.'
    ],
    record: 'The indication, the consent discussion, the prescription, and the reassessment afterwards.',
    local: [
      'Your transfusion guideline and the hospital transfusion team.',
      'The patient information leaflets your employer uses.'
    ],
    next: { to: 'PR-05-01' },
    sources: 'Advisory Committee on the Safety of Blood, Tissues and Organs (SaBTO), Guidelines on patient consent and shared decision-making for blood transfusion (September 2025); British Society for Haematology, The administration of blood components (2017); NICE NG24, Blood transfusion (2015; England and Wales); Serious Hazards of Transfusion (SHOT) annual reports.'
  },
  {
    id: 'PR-05-01', mod: 5, title: 'Discharge medicines (TTOs)',
    jur: 'UK-wide', fpcP: 'FPC4 Communication and care', fpcS: 'FPC5 Continuity of care', status: 'DRAFT',
    good: 'The discharge prescription matches what the patient should take at home: reconciled against the admission list and the inpatient chart, with every change explained, written early enough for pharmacy, and clear for the GP and the patient.',
    before: [
      'Have the reconciled admission list, the current chart and the final plan.',
      'Know your employer’s deadlines for discharge prescriptions.'
    ],
    steps: [
      'Go through each medicine: continue, new, changed or stopped, with the reason for each change.',
      'Remove inpatient-only medicines, such as VTE prophylaxis that is not continuing, unless they are intended to continue.',
      'Include durations for short courses, such as antibiotics or steroid reductions.',
      'Check that monitoring is arranged for medicines that need it (PR-02-04).',
      'For Schedule 2 and 3 controlled drugs, include the patient’s name and address, the form, the strength where more than one exists, the dose, and the total quantity in words and figures, with your signature, the date and your address, as the BNF and your employer require.',
      'Write it as early as your employer’s deadlines allow, so pharmacy can check and supply it.'
    ],
    pitfall: 'A medicine stopped during the admission reappearing on the discharge prescription.',
    words: [
      '“We’ve stopped your water tablet because your kidneys were strained. Your GP will review it.”',
      '“Take this antibiotic until the date on the label, then stop.”'
    ],
    stop: [
      'The final plan for a medicine is unclear: ask before writing it.',
      'There is a discrepancy you cannot resolve between the admission list and the chart.',
      'A high-risk medicine needs monitoring that has not been arranged.'
    ],
    record: 'The discharge prescription, and the reasons for changes in the discharge summary (see Ward card WD-03-02).',
    local: [
      'Your discharge prescription system and deadlines.',
      'Pharmacy checking and supply arrangements.'
    ],
    next: { to: 'PR-05-02' },
    sources: 'NICE NG5, Medicines optimisation (2015; England and Wales); Royal Pharmaceutical Society, Keeping patients safe when they transfer between care providers – getting the medicines right (2012); BNF.'
  },
  {
    id: 'PR-05-02', mod: 5, title: 'Explaining medicine changes',
    jur: 'UK-wide', fpcP: 'FPC4 Communication and care', fpcS: 'FPC5 Continuity of care', status: 'DRAFT',
    good: 'The patient, and their carer if appropriate, leaves knowing which medicines are new, changed or stopped, why, how to take them, what to watch for, and who to ask.',
    before: [
      'Know the final list and the reason for each change.',
      'Find out who manages the patient’s medicines at home, and whether they use a compliance aid or need a carer.'
    ],
    steps: [
      'Go through the changes in plain language, starting with what matters most.',
      'For each new medicine: what it is for, how and when to take it, the main side effects, and how long to take it.',
      'For high-risk medicines, give specific safety advice and written information, such as an anticoagulant alert card or insulin information.',
      'Check understanding by asking the patient to explain it back.',
      'Make sure the GP and community pharmacy are told, using your employer’s referral routes where they exist.'
    ],
    pitfall: 'Handing over a bag of medicines without explaining what changed.',
    words: [
      '“A few things have changed with your tablets. Let me go through them.”',
      '“Can you tell me how you will take the new tablet?”'
    ],
    stop: [
      'The patient cannot manage their medicines safely at home: involve pharmacy, carers or the discharge team.',
      'There is a language barrier: use a professional interpreter.',
      'The patient is unsure or worried about a change: involve the pharmacist.'
    ],
    record: 'What was explained, the written information given, and any referral to community pharmacy or other services.',
    local: [
      'Patient information leaflets and alert cards.',
      'Discharge referral services to community pharmacy where you work.'
    ],
    next: { ext: 'Ward: writing the discharge summary (WD-03-02)', href: 'ward.html#WD-03-02' },
    sources: 'NICE NG5, Medicines optimisation (2015; England and Wales); GMC, Good practice in prescribing and managing medicines and devices (2021).'
  }
];
