import json,os
B='_tools/plab-adaptation/work/u74-g03/'
draft=json.load(open(B+'draft.json',encoding='utf-8'))
d={q['id']:q for q in draft}
order=[q['id'] for q in draft]
ck=json.load(open(B+'ctx/check_ids.json'))
U=dict(
 NG145='https://www.nice.org.uk/guidance/ng145/chapter/Recommendations',
 NHSC='https://www.nhs.uk/conditions/cushings-syndrome/',
 CG89='https://www.nice.org.uk/guidance/cg89/chapter/Recommendations',
 NG10='https://www.nice.org.uk/guidance/ng10/chapter/Recommendations',
 CG138='https://www.nice.org.uk/guidance/cg138/chapter/Recommendations',
 GEMP='https://www.gmc-uk.org/professional-standards/the-professional-standards/confidentiality---disclosing-information-for-employment-insurance-and-similar-purposes/disclosing-information-for-employment-insurance-and-similar-purposes',
 GDC='https://www.gmc-uk.org/professional-standards/the-professional-standards/confidentiality/using-and-disclosing-patient-information-for-direct-care',
 G018='https://www.gmc-uk.org/ethical-guidance/ethical-guidance-for-doctors/0-18-years',
 G018S='https://www.gmc-uk.org/professional-standards/the-professional-standards/0-18-years/contraception-abortion-and-sexually-transmitted-infections-stis',
 GDMC='https://www.gmc-uk.org/professional-standards/the-professional-standards/decision-making-and-consent/the-dialogue-leading-to-a-decision-continued-1',
 GMP='https://www.gmc-uk.org/professional-standards/the-professional-standards/good-medical-practice',
 MDUR='https://themdu.com/guidance-and-advice/guides/effective-record-keeping',
 RMM='https://rmmonline.co.uk/manual/c15-fea-0045',
 BSACI='https://www.bsaci.org/wp-content/uploads/2020/07/Anaesthesia-guidelines.pdf',
)
DROP={
'PAN1321':"Duplicate: live PAN276 (unresponsive insulin-treated man with snoring breathing -> IV glucose) and live PAN1148 (unrousable on ward, cannula -> IV glucose); also parked PAN450 (snoring, airway + non-oral glucose) and PAN8548. Same scenario and learning point.",
'PAN4389':"Duplicate: live BX667 (pituitary adenoma, bumping into things on both sides, bitemporal loss -> optic chiasm). One-line BX item testing the same fact; the acromegaly framing does not change the learning point (README BX rule).",
'PAN10322':"Duplicate: live END066 (insulin-treated diabetes, vomiting and eating little, asks whether to stop insulin -> continue insulin and monitor glucose/ketones). Same scenario and learning point; draft distractors A/E are the same 'stop insulin' trap.",
'PAN4373':"Duplicate: live RHE053 (limited sun exposure, diffuse bone pain, proximal weakness -> osteomalacia from vitamin D deficiency) and parked PAQ15783 (rarely goes outside, rib/hip aching, difficulty with stairs -> osteomalacia). Asking for the deficiency rather than the diagnosis does not change the learning point.",
'PAN3924':"Duplicate: parked PAQ15152 (38-year-old, round face, wide purplish flank striae, bruising, proximal weakness, new hypertension, no steroids -> Cushing syndrome); vignette nearly identical, key 'cortisol' vs 'Cushing syndrome' is the same learning point.",
'PAN7521':"Duplicate: u74-g02 PAN8535 (confirmed thyrotoxicosis, which further symptom fits -> heat intolerance/sweating, distractors are hypothyroid features). Same scenario and learning point. If PAN8535 is dropped by its checker, this item could be reconsidered.",
'PAN4681':"Duplicate: parked PAN8031 (advance care planning conversation -> explore and record her preferences) and u74-g04 PAN2928 (progressive IPF, wants to plan future care -> explore wishes and record an advance care plan shared with those involved). Same scenario and learning point.",
'PAN5793':"Duplicate: live BX584 (pre-transfusion bedside check -> check patient identity against the unit and documentation). BX one-liner on the same fact; also u74-g10 PAN673 and u74-g11 PAQ11822.",
'PAQ12477':"Duplicate: live SAF012 (16-year-old with 35-year-old man, asks not to tell -> refer to children's social care, explaining confidentiality cannot be kept) and live BX005 (confidentiality may need to be breached to protect from serious harm).",
'PAN268':"Duplicate: live DF022 (4-month-old not rolling, bruise on cheek -> same-day paediatric referral under safeguarding), parked PAAKT136 and u74-g05 PAN4269 (bruise in non-mobile 4-month-old -> safeguarding + urgent paediatric assessment).",
'PAN629':"Duplicate: live ETH017 (bruise not matching mechanism -> safeguarding referral) and live PED040 (inconsistent accounts -> refer to paediatrician and social care); also u74-g05 PAN5785 (bruises behind ears -> same-day safeguarding referral).",
'PAN10056':"Duplicate: live DF022 and parked PAAKT136 (non-mobile infant bruising -> same-day paediatric assessment under safeguarding); u74-g05 PAN4269; also same learning point as PAN268 in this batch.",
'PAN9936':"Duplicate: u74-g05 PAN344 (third attendance in two months, burn, different accounts each time -> recognise pattern and follow safeguarding procedures); also live PED040.",
'PAN557':"Duplicate: parked PAQ15379 (13-year-old discloses abuse, asks for secrecy -> explain you cannot keep it secret and act on safeguarding), live BX602 and ETH019.",
'PAN728':"Duplicate: live ETH020 (duty of candour), live BX001 (open disclosure after drug error), parked PAQ15766 and PAQ12471 (medication error causing harm -> explain, apologise, report); also u74-g04 PAQ11589.",
'PAN730':"Duplicate: live BX008 (handover content -> active problems, current plan, outstanding tasks); u74-g04 PAN1276 and u74-g05 PAN6584 (structured handover of deteriorating patient).",
'PAN724':"Duplicate: u74-g05 PAN587 (intimate examination -> explain what it involves, gain consent and offer a chaperone; distractors 'examine then explain' and partner involvement). Same learning point.",
'PAN9928':"Duplicate: u74-g06 PAN10490 (GP unsure of diagnosis outside competence -> seek specialist advice or refer; distractors internet search, oral steroids, wait). Same scenario and learning point; also u74-g04 PAN5988.",
'PAN7367':"Duplicate: live BX967 (very limited English, important discussion -> use a professional interpreter). Same learning point (BX rule).",
'PAN1511':"Duplicate: live SAF001 (controlling partner, bruising -> find a reason to see and examine her alone) and u74-g04 PAN10507 (antenatal, controlling husband -> see her alone during urine sample/examination). Near-identical scenario.",
'PAN1306':"Duplicate: live BX952 (competent patient refuses sharing with partner; partner rings surgery -> maintain confidentiality unless justified). Same scenario and learning point.",
'PAN1998':"Duplicate: live ETH026 (credible specific threat to a named person -> breach confidentiality to protect and inform authorities) and live GF027 (threat with knife -> disclose to police without consent).",
'PAN348':"Duplicate: parked PAQ14955 (police ask ED for details of man treated for assault injury -> consider lawful basis/public interest and share only the minimum necessary). Near-identical scenario.",
'PAN828':"Duplicate: u74-g04 PAN5781 (professional violinist, uncommon nerve-injury risk -> discuss because it matters to her) and live ETH027 (Montgomery material risks). Same scenario type and learning point.",
'PAN10482':"Duplicate: live SAF003 (parent declines -> make safeguarding referral to children's social care anyway) and live PED040/ETH017 (child injuries with inconsistent account -> refer); same learning point as several safeguarding items already live.",
'PAN10479':"Duplicate: u74-g04 PAN6084 (lacks capacity, no LPA, relative says he is next of kin and should decide -> clinician proposing treatment decides in best interests after consulting family); also live BX950 and ETH023.",
'PAN10478':"Duplicate: live ETH032 (MCA principle: all practicable steps to help them decide must be tried first), live BX951 (adapt explanation before assessing capacity) and u74-g04 PAN6574 (support communication before concluding incapacity).",
'PAN10477':"Duplicate: u74-g04 PAN6082 (cannot speak, communicates by nodding/aid, husband offers to decide -> may have capacity if she can express her decision); same scenario and learning point (presumption of capacity, communication by any means).",
'PAN1304':"Duplicate: parked PAQ15049 (recurrent gallstone pain, declines cholecystectomy with capacity, relative wants surgery -> respect decision, document and keep option open). Near-identical scenario and key.",
'PAN1305':"Duplicate: live DR011 (adult with Down syndrome, mother wants to consent -> assess capacity for this particular decision) and live BX951.",
}
def src(i,txt): return d[i]['why_correct'].rstrip()+' Source: '+txt
FIX={}
def fx(i,issues,edits): FIX[i]=(issues,edits)
fx('PAN10299',"Clinically sound (proximal myopathy, bruising, plethora and wide purple striae are the discriminating features of cortisol excess). Key was the longest option: shortened. Added Source/sources. Reviewer note: overlaps in theme with parked PAQ15152 (recognise Cushing syndrome) and u74-g02 PAN3639 (proximal myopathy in known Cushing's), but the angle here (which finding discriminates Cushing's from simple obesity) is distinct, so kept.",
 {'options':{'B':'Needing to push on his arms to rise from a chair'},
  'why_correct':src('PAN10299',"NHS, Cushing's syndrome (nhs.uk), reviewed 2025."),
  'sources':[U['NHSC']]})
fx('PAN1150',"Clinically correct (NICE NG145: if TSH is below range, measure FT4 and FT3). Key was the longest option: reworded all options into a parallel TSH/FT4/FT3 format so the key is no longer longest; why_wrong and exam_trap updated to match.",
 {'options':{'A':'Raised TSH with low free T4 and a normal free T3','B':'Raised TSH with raised free T4 and/or free T3','C':'Normal TSH with normal free T4 and free T3','D':'Low TSH with raised free T4 and/or free T3','E':'Suppressed TSH with low free T4 and low free T3'},
  'why_wrong':"A. A raised TSH with a low free T4 is the pattern of primary hypothyroidism. B. A raised TSH with raised free T4 or T3 suggests a rare TSH-secreting pituitary tumour or thyroid hormone resistance, not primary hyperthyroidism. C. Normal results would not explain clinical thyrotoxicosis. E. A low TSH with low free hormones suggests pituitary (secondary) hypothyroidism or non-thyroidal illness, not an overactive gland.",
  'exam_trap':"B, Raised TSH with raised free T4 and/or free T3 — both values high may seem to fit overactivity, but in primary disease the excess hormone switches TSH off.",
  'why_correct':src('PAN1150',"NICE NG145 Thyroid disease: assessment and management, 2019 (updated 2023)."),
  'sources':[U['NG145']]})
fx('PAN9787',"Clinically correct: NICE NG145 1.2.8 advises TSH alone first (then FT4 and FT3 if TSH is low), with TRAbs to establish the cause once thyrotoxicosis is confirmed (1.6.1). Only Source/sources added. Reviewer note: u74-g02 PAN8340 tests TSH as the first test for suspected hypothyroidism; different condition so not treated as a repeat, but a reviewer may prefer to keep only one.",
 {'why_correct':src('PAN9787',"NICE NG145 Thyroid disease: assessment and management, 2019 (updated 2023)."),'sources':[U['NG145']]})
fx('PAN7725',"Sound: safety first, summon help, then de-escalate and look for organic causes (NICE NG10 principles; NG10 is written mainly for mental health and emergency settings but the principles apply). Key was longest: shortened.",
 {'options':{'C':"Ensure everyone's safety first, calling security if needed"},
  'why_correct':src('PAN7725',"NICE NG10 Violence and aggression: short-term management, 2015."),'sources':[U['NG10']]})
fx('PAN5797',"Sound: document the allergy, inform the theatre team, latex-free environment; antihistamine premedication does not prevent anaphylaxis. Key was longest: shortened. Reviewer note: I could not open a current UK latex-specific perioperative guideline (Association of Anaesthetists/NAP6 full text not retrievable); the latex-free-environment principle is standard UK practice, but please confirm the cited source.",
 {'options':{'C':'Document the latex allergy and arrange a latex-free theatre'},
  'why_correct':src('PAN5797',"Association of Anaesthetists, Suspected anaphylactic reactions associated with anaesthesia, 2009; RCoA NAP6 report, 2018."),
  'sources':[U['BSACI'],'https://rcoa.ac.uk/media/33356']})
fx('PAN1485',"Sound (structured approach to breaking bad news; check understanding). Key was longest: shortened.",
 {'options':{'D':'Explore what he knows and wants, explain clearly, invite questions'},
  'why_correct':src('PAN1485',"GMC Decision making and consent, 2020; NICE CG138 Patient experience in adult NHS services, 2012 (updated 2021)."),
  'sources':[U['GDMC'],U['CG138']]})
fx('PAN318',"Sound; no clinical change. Added Source/sources only.",
 {'why_correct':src('PAN318',"NICE CG138 Patient experience in adult NHS services, 2012 (updated 2021)."),'sources':[U['CG138']]})
fx('PAN10097',"Sound: NICE CG89 1.1.6 lists scalds in a glove or stocking distribution, symmetrical limb scalds and sharply delineated borders as indicating forced immersion. Key was longest (E nearly equal): shortened.",
 {'options':{'C':'Treat the scald, document findings and follow safeguarding procedures'},
  'why_correct':src('PAN10097',"NICE CG89 Child maltreatment: when to suspect maltreatment in under 18s, 2009 (updated 2025)."),'sources':[U['CG89']]})
fx('PAN1521',"Diagnosis correct. why_correct said 'stop, remove the cannula, elevate' while the pearl says to aspirate before removal for a vesicant: made consistent. Key was longest: shortened. Reviewer note: source is the Royal Marsden Manual extravasation entry (subscription; checked via search summary only).",
 {'options':{'B':'Leakage of fluid into surrounding tissue'},
  'why_correct':"Local pain, cool pale swelling around the cannula and a slowing infusion are typical of fluid escaping into the subcutaneous tissue. This is infiltration if the fluid is non-irritant, or extravasation if it is a vesicant drug. The infusion should be stopped at once; for a vesicant, aspiration through the cannula is attempted before it is removed, then the limb is elevated and local extravasation guidance followed. Source: Royal Marsden Manual of Clinical Nursing Procedures, extravasation management (peripheral cannula), online edition 2024.",
  'sources':[U['RMM']]})
fx('PAN1519',"Sound: positive identification with two identifiers, explanation and consent; written consent is not needed for cannulation; a nurse cannot consent for an adult. Key was longest: shortened.",
 {'options':{'B':'Check her identity against wristband and chart, explain and seek consent'},
  'why_correct':src('PAN1519',"GMC Decision making and consent, 2020."),'sources':[U['GDMC']]})
fx('PAN1049',"Sound (objective, contemporaneous safeguarding records with the child's words verbatim). Key was longest: shortened.",
 {'options':{'E':"Record the marks objectively, the boy's exact words, her assessment and actions"},
  'why_correct':src('PAN1049',"GMC Good medical practice, 2024 (paragraphs 69-70); NICE CG89 Child maltreatment, 2009 (updated 2025)."),
  'sources':[U['MDUR'],U['GMP'],U['CG89']]})
fx('PAN729',"Sound. Key tied for longest with E: shortened.",
 {'options':{'D':'Record now the options and risks discussed, his questions and his choice'},
  'why_correct':src('PAN729',"GMC Decision making and consent, 2020; GMC Good medical practice, 2024."),'sources':[U['GDMC'],U['MDUR']]})
fx('PAN1308',"Sound (GMP 2024 paras 69-70: findings, information shared, decisions). Key was much the longest: shortened the key and lengthened E.",
 {'options':{'C':'History, examination with relevant negatives, reasoning, plan and safety-netting','E':'Findings and diagnosis now, with the reasoning added later only if a complaint is made'},
  'why_correct':src('PAN1308',"GMC Good medical practice, 2024 (paragraphs 69-70)."),'sources':[U['MDUR'],U['GMP']]})
fx('PAN10503',"Sound (NICE CG138 1.5.6: avoid jargon and confirm understanding; GMC requires checking understanding). Key was longest: shortened.",
 {'options':{'E':'Explain in plain language, in small steps, and ask him to say it back'},
  'why_correct':src('PAN10503',"NICE CG138 Patient experience in adult NHS services, 2012 (updated 2021)."),'sources':[U['CG138'],U['GDMC']]})
fx('PAN10481',"Sound (next of kin has no right to a competent adult's information; ask the patient). Key was longest: shortened the key and lengthened C. Reviewer note: related to live BX952 (explicit refusal, partner asks), but here the patient has not yet been asked and the learning point is to seek his agreement; kept, though a reviewer may judge it too close.",
 {'options':{'E':"Explain he cannot share it without his father's agreement and offer to ask him",'C':'Share the result once the son signs a form promising to keep it strictly private'},
  'why_correct':src('PAN10481',"GMC Confidentiality: good practice in handling patient information, 2017."),'sources':[U['GDC']]})
fx('PAN4835',"Sound (GMC: consent needed before disclosing to employers; Access to Medical Reports Act 1988 pearl correct). Key was longest: shortened.",
 {'options':{'D':'Decline unless the patient consents or disclosure is otherwise justified'},
  'why_correct':src('PAN4835',"GMC Confidentiality: disclosing information for employment, insurance and similar purposes, 2017."),'sources':[U['GEMP']]})
fx('PAN6576',"Sound (16 and 17 year olds are presumed to have capacity under the MCA 2005; Gillick applies to under-16s; confidentiality as for adults unless there is serious risk). Key was longest: shortened. Reviewer note: theme overlaps live BX004 and u74-g04 PAQ12475 (confidentiality for competent under-16s), but the 16-17/MCA angle is distinct.",
 {'options':{'D':'Keep it confidential unless there is a serious risk of harm'},
  'why_correct':src('PAN6576',"GMC 0-18 years: guidance for all doctors, 2007 (updated 2024)."),'sources':[U['G018'],U['G018S']]})

fx('PAN1635',"reinstated: partner g05 PAN5788 dropped. Full recheck: no repeat in live or held banks or kept items (live BX006 and u74-g04 PAQ12478 test correcting an erroneous entry, a different learning point). Clinically sound: a late entry is acceptable if clearly marked as retrospective, dated and timed when written and stating when the events occurred; backdating, inserting text among earlier entries or having someone else write it is misleading. Key was longest: shortened. Source added.",
 {'options':{'D':'Write a new entry now marked as retrospective, timed now, stating when events occurred'},
  'why_correct':src('PAN1635',"GMC Good medical practice, 2024 (paragraphs 69-70); MDU guidance on effective record keeping."),
  'sources':[U['MDUR'],'https://themdu.com/for-students/dilemmas/can-i-amend-patient-records-if-key-information-is-missing',U['GMP']]})

assert set(DROP)|set(FIX)==set(ck) and not set(DROP)&set(FIX)
rev=[]
for i in ck:
  if i in DROP: rev.append({'id':i,'verdict':'drop','issues':DROP[i],'edits':{}})
  else:
    iss,ed=FIX[i]; rev.append({'id':i,'verdict':'fix','issues':iss,'edits':ed})
final=[]
E={r['id']:r['edits'] for r in rev if r['verdict']=='fix'}
for i in order:
  if i not in E: continue
  q=json.loads(json.dumps(d[i]))
  for k,v in E[i].items():
    if k=='options': q['options'].update(v)
    else: q[k]=v
  L=q['correct_letter']; ca=f"{L}. {q['options'][L]}"
  if ca!=q['correct_answer']: q['correct_answer']=ca; E[i]['correct_answer']=ca
  final.append(q)
os.makedirs(B+'rev',exist_ok=True); os.makedirs(B+'out',exist_ok=True)
json.dump(rev,open(B+'rev/C.json','w',encoding='utf-8'),ensure_ascii=False,indent=1)
json.dump(final,open(B+'out/final.json','w',encoding='utf-8'),ensure_ascii=False,indent=1)
print(len(rev),'drops',sum(r['verdict']=='drop' for r in rev),'final',len(final))
for q in final: print(q['id'],q['correct_letter'],{k:len(v) for k,v in q['options'].items()})
