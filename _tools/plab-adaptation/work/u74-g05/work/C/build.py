import json
B='C:/Users/user/AppData/Local/Temp/claude/C--Users-user/c8269527-cc45-4897-aeab-239005307720/scratchpad/wt/_tools/plab-adaptation/work/u74-g05/'
draft=json.load(open(B+'draft.json',encoding='utf-8'))
ids=json.load(open(B+'ctx/check_ids.json',encoding='utf-8'))
D={q['id']:q for q in draft}
U=dict(
 nipcm='https://www.england.nhs.uk/national-infection-prevention-and-control-manual-nipcm-for-england/chapter-1-standard-infection-control-precautions-sicps/',
 gb18='https://www.gov.uk/government/publications/hepatitis-b-the-green-book-chapter-18',
 bsh='https://b-s-h.org.uk/guidelines/guidelines/administration-of-blood-components',
 bcsh='https://gov.wales/sites/default/files/publications/2024-10/pre-transfusion-sample-taking-whc-2024-039.pdf',
 gmp='https://www.gmc-uk.org/professional-standards/good-medical-practice-2024/key-changes-to-good-medical-practice-2024',
 gmcc='https://www.gmc-uk.org/professional-standards/the-professional-standards/raising-and-acting-on-concerns/about-this-guidance',
 psirf='https://www.england.nhs.uk/patient-safety/patient-safety-insight/incident-response-framework/',
 cg139='https://www.nice.org.uk/guidance/cg139/chapter/Recommendations',
 ng113='https://www.nice.org.uk/guidance/ng113/chapter/Recommendations',
 ngalert='https://www.england.nhs.uk/2016/07/nasogastric-tube-misplacement-continuing-risk-of-death-severe-harm/',
 never='https://www.england.nhs.uk/patient-safety/patient-safety-insight/revised-never-events-policy-and-framework/',
 bts='https://www.brit-thoracic.org.uk/document-library/guidelines/emergency-oxygen/web-appendix-3-summary-of-guideline-for-hospital-use',
 hqip='https://www.hqip.org.uk/guidance/best-practice-in-clinical-audit/',
 daa='https://www.legislation.gov.uk/ukpga/2021/17/section/1',
 sca='https://www.legislation.gov.uk/ukpga/2015/9/section/76',
 ph50='https://www.nice.org.uk/guidance/ph50/chapter/Recommendations',
 bsp='https://www.gov.uk/government/publications/breast-screening-helping-women-decide/nhs-breast-screening-helping-you-decide',
 ng197='https://www.nice.org.uk/guidance/ng197/chapter/Recommendations',
)
DROP={
'PAQ12482':'Repeat of live BX010 (elective hernia repair: patient asks about risks and alternatives; key "Explain the risks, benefits and alternatives and support the patient to decide"; same distractors). Also overlaps live ETH027 and u74-g03 PAN828.',
'PAN587':'Repeat of live ETH036 (offer a chaperone for intimate examination regardless of the genders involved; same trap). Also parked PAQ1097 and u74-g03 PAN724.',
'PAN9925':'Repeat of live BX001, BX954 and ETH020 (error causing harm: tell the patient, apologise, report). Also parked PAQ12471/PAQ1100 and u74-g03 PAN728, u74-g04 PAQ11589.',
'PAN7365':'Repeat of live BX626 (error reached patient without harm: tell, apologise, report) and parked PAQ15812 (medication error with no harm: explain and report).',
'PAN1467':'Repeat of parked PAQ15050 and PAQ15326 (medication error: first ensure the patient is safe/assess and limit harm, then disclose and report).',
'PAN5788':'Repeat of u74-g03 PAN1635 (omitted information added later as a clearly labelled, dated and timed retrospective entry; same trap of squeezing it into the old note). Tie-break: lower-numbered batch keeps.',
'PAN5986':'Repeat of live BX006 (correcting an error in a paper note: single line through, keep legible, sign and date).',
'PAN6286':'Repeat of live BX006 (wrong side recorded in paper notes; single-line strike-through, sign and date) - same scenario and key. Also duplicates PAN5986 in this batch.',
'PAN1544':'Duplicate within this batch of PAN964 (new fine-bore NG tube after stroke; confirm position by aspirate pH, chest X-ray if that fails). PAN964 kept as it has the better-discriminating distractors (whoosh, litmus, bubbles).',
'PAQ11601':'Repeat of live BX965 (injury inconsistent with developmental stage: consider NAI, follow safeguarding) and live PED046/PED040 (spiral fracture with inconsistent history: safeguarding referral). Also parked PAQ966.',
'PAN424':'Repeat of live BX016 and BX563 (needlestick from used needle: immediate first aid with soap and running water, then prompt reporting/occupational health).',
'PAN1575':'Repeat of live ID024 (needlestick: risk-assess and start HIV PEP as soon as possible; trap of waiting for a test). Also u74-g13 PAQ11795 (HIV PEP timing).',
'PAN10486':'Repeat of live BX397 (principle named: "Duty of candour") and ETH020 (Regulation 20 statutory duty). Options do not test statutory vs professional duty, so the item tests the same recall.',
'PAN6584':'Repeat of live BX008 (handover content: active problems, plan, outstanding tasks), u74-g03 PAN730 (structured handover of an unwell patient) and u74-g04 PAN1276 (handover of a deteriorating patient).',
'PAN1725':'Repeat of u74-g04 PAN2928 (advance care planning in a capacitous patient with idiopathic pulmonary fibrosis - same scenario and learning point). Also parked PAN8031, u74-g03 PAN4681, u74-g04 PAN6087.',
'PAN4685':'Repeat of parked PAN955 (V1 position: fourth intercostal space, right sternal edge).',
'PAN558':'Repeat of parked PAQ15325 (prescribing error by another doctor about to be given: stop the dose, inform the prescriber or senior; traps of deferring to seniority and reporting to the GMC first).',
'PAN1784':'Repeat of parked PAQ15813 (pharmacist intercepts prescribing error before any dose: "a prescribing near miss").',
'PAN5984':'Repeat of live BX618 (iterative change and measurement = quality improvement) and u74-g04 PAN1787 (quality improvement using PDSA cycles - same key).',
'PAN10488':'Duplicate within this batch of PAN6583 (safety concern not resolved informally: escalate formally through incident reporting and management). PAN6583 kept.',
'PAN345':'Repeat of live SAF001 (repeated injuries, partner answers for the patient: find a way to see the patient alone). Also u74-g04 PAN10507 and u74-g03 PAN1511.',
'PAN916':'Repeat of u74-g04 PAN5779 (stable schizophrenia on depot, capacitous refusal of surgery must be respected). Tie-break: lower batch keeps. Also parked PAQ15049. If the reviewer prefers to keep the Mental Health Act angle, this item is otherwise clinically sound.',
'PAN1523':'Duplicate within this batch of PAN947 (label each tube at the bedside immediately after sampling; pre-labelling or labelling away from the patient is wrong). PAN947 kept.',
'PAN1462':'Repeat of live BX010 (elective hernia repair: explain risks, benefits and alternatives and support the patient to decide). Also u74-g04 PAN9924.',
'PAN4638':'Repeat of parked PAQ14837 (pre-operative discussion of risks and alternatives, free choice = "Valid informed consent") and u74-g04 PAN6071 (same key).',
'PAN1524':'Repeat of u74-g04 PAN2767 (practice nurse after vaccine: do not resheathe, sharps bin at point of use). Tie-break: lower batch keeps.',
'PAQ11600':'Repeat of live BX964 (persistent signs of child neglect; key "Safeguarding concern requiring appropriate assessment").',
'PAN723':'Repeat of live BX010 (explain options, risks and benefits and support the patient to decide) and u74-g04 PAN9924; same learning point as PAN1462.',
'PAN1510':'Repeat of live GER019 (older woman with dementia, unexplained upper-arm bruises, withdrawn with carer: suspect abuse, adult safeguarding) and SAF004-SAF006.',
'PAN5785':'Repeat of u74-g03 PAN629 (bruises behind the ear and other protected sites, explanation does not fit: follow child protection procedures; clotting tests must not delay referral). Also live PED040 and BX601.',
'PAN344':'Repeat of u74-g03 PAN9936 (repeated attendances with different injuries and changing explanations: act through child protection procedures now).',
'PAN4269':'Repeat of u74-g03 PAN268 and PAN10056 (bruising in a non-mobile infant: urgent paediatric assessment under safeguarding procedures) and live BX965.',
}
FIX={}
def F(i,issues,ed,src): FIX[i]=(issues,ed,src)
F('PAN1302','Format only: key was longest; Source line and sources added. Clinical content correct (NIPCM: PPE chosen by risk assessment of anticipated exposure; eye/face protection when splashing likely). NOTE duplicate risk: u74-g13 PAN976 (Choosing PPE by exposure risk) and PAN733 test the same fact - keep only one; by the lower-batch tie-break this one stays and g13 PAN976 should go.',
 {'options':{'A':'The culture result, once the laboratory has reported it','D':'The likely exposure to blood and pus during drainage'},
  'why_correct':"Under standard infection control precautions, PPE is chosen by assessing the foreseeable exposure to blood and body fluids for the specific task. Incising an abscess carries a risk of splashing, so gloves, an apron and eye or face protection are appropriate whatever the culture result or how well he looks. Source: National Infection Prevention and Control Manual for England, standard infection control precautions, NHS England, 2022 (updated online)."},
 ['nipcm'])
F('PAN1437','Clinical correction: why_correct said immunoglobulin "ideally within 48 hours"; the current Green Book chapter 18 (updated Feb 2026) says HBIG is given at the same time as, or within 24 hours of, the first vaccine dose and not more than seven days after exposure, and is for high-risk situations or known non-responders. Key shortened (was longest by 36 characters); option B lengthened.',
 {'options':{'B':'Start a course of oral antibiotics to prevent wound infection','E':'Urgent same-day assessment for hepatitis B prophylaxis'},
  'why_correct':"Significant percutaneous exposure to blood from a hepatitis B surface antigen positive source needs urgent assessment of the worker's vaccination history and antibody response. Depending on this she will need a hepatitis B vaccine dose or an accelerated course, with hepatitis B immunoglobulin in high-risk situations such as being unvaccinated or a known non-responder. Vaccine should be started as soon as possible, and any immunoglobulin given at the same time or within 24 hours and never more than seven days after the exposure, so delay loses protection. Source: UKHSA Green Book chapter 18, Hepatitis B, updated 2026."},
 ['gb18'])
F('PAN4684','Format only: key shortened (was longest). Clinical content correct: any identifier discrepancy at the bedside check means do not transfuse until resolved with the laboratory.',
 {'options':{'A':'Do not transfuse until the laboratory has resolved the mismatch'},
  'why_correct':"Every identifier on the patient, the prescription and the blood component label must match exactly at the bedside check. Any discrepancy, however minor it seems, means the unit must not be given until the cause is found with the transfusion laboratory. He is stable, so there is no clinical need to take a risk. Source: Guideline on the administration of blood components, British Society for Haematology, 2017."},
 ['bsh'])
F('PAN6287','Clinical/stem correction: a markedly raised potassium needs immediate action, so a stem in which nothing had been arranged made "hand it over" arguably not the safest answer. Stem now has the FY2 requesting an urgent ECG and starting treatment, with ongoing management falling to the night team; question reworded; why_correct, thinking and takeaway aligned. Key shortened (was longest).',
 {'stem':"At 19:45, fifteen minutes before her shift ends on a respiratory ward, an FY2 doctor is phoned by biochemistry with a markedly raised potassium on a 76-year-old man taking spironolactone and ramipril. She asks for an urgent ECG and starts treatment straight away, but review of the response, repeat bloods and further management will fall to the night team. The night doctor arrives shortly.\n\nHow should she make sure the rest of his care happens?",
  'options':{'A':'Hand it over directly to the night doctor, stating the actions needed'},
  'why_correct':"A critical result needs a named clinician to take responsibility for acting on it. She has rightly started the urgent steps herself, and the outstanding work, such as reviewing the ECG and his response, repeating the potassium and reviewing his medicines, must be handed over directly to the incoming doctor with the result, its significance and what remains to be done, and the handover recorded. Passive methods risk the result being missed while the patient deteriorates. Source: GMC Good medical practice, continuity of care, 2024.",
  'thinking':"Critical result phoned through  ↓  Urgent ECG and treatment started at once  ↓  Further actions still outstanding at shift end  ↓  Responsibility must pass to a named clinician  ↓  Direct verbal handover with actions, then document",
  'takeaway':"A critical result that still needs action must be handed over directly to a named colleague with the actions required."},
 ['gmp'])
F('PAN6583','Format only: key shortened (was longest). Clinically fine. Overlap note for reviewer: live ETH028/ETH013 test raising concerns about colleagues; this item is about an unresolved system fault after informal routes failed, judged distinct.',
 {'options':{'C':'Report it as an incident and escalate to the clinical lead'},
  'why_correct':"GMC guidance requires doctors to act promptly when patient safety may be compromised, including by faulty systems or equipment. When informal routes have failed, the concern should be escalated through formal channels such as the incident reporting system and the clinical lead or clinical governance team, and further up, including the Freedom to Speak Up guardian, if it is still not addressed. Source: GMC Raising and acting on concerns about patient safety, 2012 (updated 2024)."},
 ['gmcc'])
F('PAN1785',"Format: key shortened (was longest); option D grammar fixed (\"staff involved's appraisals\"). Clinically fine.",
 {'options':{'D':"Record the error in each staff member's appraisal and close the incident",'E':'Investigate the system and human factors and act to prevent recurrence'},
  'why_correct':"When an error passes several checks, the problem usually lies in the system, for example look-alike preparations, calculation processes, workload or interruptions, rather than in one individual. A learning-focused review under the NHS Patient Safety Incident Response Framework identifies these contributing factors and leads to changes that reduce the chance of recurrence. A just culture also encourages staff to keep reporting. Source: Patient Safety Incident Response Framework, NHS England, 2022."},
 ['psirf'])
F('PAN958','Format only: key shortened (was longest), A and E lengthened. Clinically fine. NOTE duplicate risk: u74-g06 PAN1279 (positive patient identification before blood sampling, same key) - keep only one; by the lower-batch tie-break this one stays and g06 PAN1279 should go.',
 {'options':{'A':'Read out her name from the request form and ask her to confirm it is correct','D':'Ask her to state her name and date of birth, then check wristband and form','E':'Take the sample first and then confirm her details when labelling the tube'},
  'why_correct':"Positive patient identification means the patient states their own full name and date of birth where able, and these are checked against the wristband and the request form before the procedure. This is particularly important when patients with similar names are nearby, as wrong blood in tube errors can lead to misdiagnosis and dangerous treatment. Source: Guideline on the administration of blood components, British Society for Haematology, 2017."},
 ['bsh'])
F('PAN947','Format: key shortened (was longest). Pearl made precise: the second-sample rule applies unless secure electronic identification is in place (BCSH/BSH compatibility guideline). Clinically fine.',
 {'options':{'D':'By the doctor at the bedside, straight after taking them'},
  'pearl':"For a patient with no previous blood group on record, UK guidance requires a second, independently taken group and save sample to confirm the ABO group before non-urgent red cells are given, unless secure electronic identification is in use, as a safeguard against wrong blood in tube errors.",
  'why_correct':"Samples should be labelled by the person who took them, at the bedside, immediately after collection and before leaving the patient, having positively identified the patient. Labelling away from the patient, or by someone else, is a major cause of wrong blood in tube errors, which are particularly dangerous for group and save samples used for transfusion. Source: Guideline on the administration of blood components, British Society for Haematology, 2017."},
 ['bsh','bcsh'])
F('PAN959','Format: key shortened (was longest by 39 characters). Pearl aligned with the second-sample rule wording. Clinically fine.',
 {'options':{'B':'Follow local policy: discard it, report an incident and repeat the test'},
  'pearl':"Wrong blood in tube errors are reportable incidents, and for a patient with no blood group on record a second, independently taken sample is usually needed to confirm the ABO group before non-urgent red cells are given.",
  'why_correct':"A sample cannot be safely assigned to a patient once its link to that patient has been lost, however confident anyone feels. Local policy should be followed, which normally means disposing of the sample, completing an incident report and taking a fresh, correctly identified and labelled sample. Guessing risks wrong results being acted on, including in transfusion. Source: Guideline on the administration of blood components, British Society for Haematology, 2017."},
 ['bsh','bcsh'])
F('PAN963','Format only: Source line and sources added. Clinically correct (NICE CG139: review need regularly and remove as soon as possible; NICE NG113: no routine antibiotic prophylaxis).',
 {'why_correct':"The risk of catheter-associated urinary tract infection rises with every day an indwelling catheter remains. NICE recommends reviewing the need for a catheter regularly and removing it as soon as possible. She is mobile and able to use a commode, so the catheter should be removed now, with monitoring for retention afterwards. Source: NICE CG139 Healthcare-associated infections: prevention and control in primary and community care, 2012 (updated 2017)."},
 ['cg139','ng113'])
F('PAN964','Format: key shortened (was longest). Clinically correct: pH 5.5 or below first line, chest X-ray second line (NHS Improvement alert 2016); misplaced NG feeding remains on the Never Events list, which NHS England states is still active while a replacement is developed.',
 {'options':{'D':'Test aspirate pH, using a chest X-ray if this cannot confirm position'},
  'why_correct':"Feeding through a misplaced nasogastric tube into the lungs is a recognised NHS Never Event. Position must be confirmed before first use by testing aspirate with CE-marked pH indicator paper, with a value of 5.5 or below acceptable. If no aspirate can be obtained or the pH is too high, a chest X-ray interpreted by a competent person is required. Source: NHS Improvement Patient Safety Alert, nasogastric tube misplacement, 2016."},
 ['ngalert','never'])
F('PAN966','Format/quality: key was a 157-character composite "do everything right" option, far longer than any distractor; tightened to the discriminating elements (identify, explain, radial site, prolonged pressure). why_correct clarified: apixaban is not a contraindication; if he lacks capacity, proceed in best interests; oxygen continues.',
 {'options':{'B':'Identify him, explain, use the radial artery and apply prolonged pressure'},
  'why_correct':"An arterial blood gas is an invasive procedure, so he should be positively identified and the procedure explained, with consent obtained as far as his drowsiness allows or the sample taken in his best interests if he lacks capacity. Apixaban is not a contraindication but increases bleeding risk, so a compressible site such as the radial artery is used, with firm, prolonged pressure afterwards. Oxygen should continue, and the result is interpreted alongside his inspired oxygen and clinical state. Source: BTS guideline for oxygen use in adults in healthcare and emergency settings, British Thoracic Society, 2017."},
 ['bts'])
F('PAN5983','Format only: Source line and sources added. Clinically fine (lithium monitoring interval figure already removed by the writer).',
 {'why_correct':"An audit cycle is only closed when practice is measured again against the same standard after the change has been made. Re-auditing shows whether the recall alert has actually improved monitoring, and if not, further changes can be tried and measured in turn. Source: Best practice in clinical audit, Healthcare Quality Improvement Partnership, 2016 (reviewed 2020)."},
 ['hqip'])
F('PAN6076','Format: key shortened (was longest). why_correct now cites the statutory definition (Domestic Abuse Act 2021 s1 includes controlling or coercive behaviour and economic abuse). Clinically fine.',
 {'options':{'A':'Explain this may be abuse, check his safety and offer support'},
  'why_correct':"Domestic abuse includes controlling or coercive behaviour and economic, emotional and psychological abuse, not just physical or sexual violence, as set out in the statutory definition. Isolating someone from family, monitoring their communication and controlling their money are typical features. He should be told this, asked about his safety and offered support and referral to specialist services. Source: Domestic Abuse Act 2021, section 1, and NICE PH50 Domestic violence and abuse, 2014."},
 ['daa','sca','ph50'])
F('PAN1788','Format: key was longest by 37 characters; key tightened and distractors lengthened. Clinically fine.',
 {'options':{'A':'Tell her that screening has no downsides, so she should certainly attend','B':'Explain that an abnormal result would mean she definitely has cancer','C':'Explain that attending is expected of every woman registered with the practice','D':'Explain benefits and harms, including overdiagnosis, and let her choose','E':'Describe only the benefits of screening, so as not to put her off attending'},
  'why_correct':"Screening is offered, not required, and people should be helped to make an informed choice. That means explaining the potential benefit of early detection alongside the limitations, including false-positive results, missed cancers and overdiagnosis of conditions that might never have caused harm. Her decision should then be respected. Source: NHS breast screening: helping you decide, NHS England (gov.uk), updated 2026."},
 ['bsp'])
F('PAN10500',"Format only: Source line and sources added. Clinically fine. Overlap note for reviewer: parked PAN1508 and u74-g04 PAN9924 cover shared decision-making from other angles; this one (equal-outcome options decided by the patient's circumstances) judged distinct. PAN1462 and PAN723 dropped as repeats of BX010.",
 {'why_correct':"When two treatments offer similar outcomes, the right choice depends on what matters to the individual patient. Her travel burden, caring role and her own feelings about the options are exactly the factors that shared decision-making brings into the discussion. The clinician should explain the options and support her to choose in line with her values. Source: NICE NG197 Shared decision making, 2021, and GMC Decision making and consent, 2020."},
 ['ng197'])
F('PAN1542','Accuracy fix in why_correct: NICE CG139 says catheterisation should be aseptic and gauge chosen by individual assessment; the "smallest suitable catheter" point is national infection prevention practice (epic3), not NICE wording. Source line added.',
 {'why_correct':"Catheterisation is an invasive procedure, so she needs an explanation and valid consent beforehand. NICE advises that all catheterisations by healthcare workers are aseptic procedures, which reduces the risk of catheter-associated urinary tract infection, one of the commonest healthcare-associated infections. The smallest gauge catheter that drains effectively is usually chosen, and the need for the catheter should be reviewed regularly. Source: NICE CG139 Healthcare-associated infections: prevention and control in primary and community care, 2012 (updated 2017)."},
 ['cg139'])
assert set(DROP)|set(FIX)==set(ids) and not set(DROP)&set(FIX), (set(ids)-set(DROP)-set(FIX), set(DROP)&set(FIX))
rev=[]
for i in ids:
    if i in DROP: rev.append({'id':i,'verdict':'drop','issues':DROP[i],'edits':{}}); continue
    iss,ed,src=FIX[i]; ed=dict(ed)
    q=D[i]
    opts=dict(q['options']); opts.update(ed.get('options',{}))
    L=q['correct_letter']
    if L in ed.get('options',{}): ed['correct_answer']=f"{L}. {opts[L]}"
    ed['sources']=[U[s] for s in src]
    rev.append({'id':i,'verdict':'fix','issues':iss,'edits':ed})
FQ={}
for r in rev:
    if r['verdict']=='fix':
        q=json.loads(json.dumps(D[r['id']]))
        for k,v in r['edits'].items():
            if k=='options': q['options'].update(v)
            else: q[k]=v
        FQ[r['id']]=q
final=[FQ[q['id']] for q in draft if q['id'] in FQ]
json.dump(rev,open(B+'rev/C.json','w',encoding='utf-8',newline='\n'),ensure_ascii=False,indent=1)
json.dump(final,open(B+'out/final.json','w',encoding='utf-8',newline='\n'),ensure_ascii=False,indent=1)
for q in final:
    print(q['id'],{k:len(v) for k,v in q['options'].items()},'key',q['correct_letter'])
print(len(rev),sum(r['verdict']=='drop' for r in rev),len(final))
