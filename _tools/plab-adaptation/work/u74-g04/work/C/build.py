import json,copy,os
B=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','..')+'/'
draft=json.load(open(B+'draft.json',encoding='utf-8'))
ids=json.load(open(B+'ctx/check_ids.json',encoding='utf-8'))
D={q['id']:q for q in draft}
GMC_DMC='https://www.gmc-uk.org/professional-standards/the-professional-standards/decision-making-and-consent'
GMC_GMP='https://www.gmc-uk.org/professional-standards/the-professional-standards/good-medical-practice'
GMC_DEL='https://www.gmc-uk.org/cdn/documents/delegation-and-referral-2013---2024_pdf-105558247.pdf'
MCA1='https://www.legislation.gov.uk/ukpga/2005/9/section/1'
MCA3='https://www.legislation.gov.uk/ukpga/2005/9/section/3'
NG108='https://www.nice.org.uk/guidance/ng108'
NIPCM='https://www.england.nhs.uk/national-infection-prevention-and-control-manual-nipcm-for-england/chapter-1-standard-infection-control-precautions-sicps/'
drops={
'PAN2776':"Repeat within this batch of PAN915 (capacity is decision- and time-specific; incapacity for one decision does not transfer to others; near-identical key and distractor A). Kept PAN915.",
'PAN2777':"Repeat of live P077 (capacitous patient's unwise decision must be respected); also parked PAAKT089.",
'PAN295':"Repeat of live ETH031 and P077 (capacitous refusal of life-saving treatment is respected, other care continues); also parked PAQ14838/PAQ15049, live BX013/BX429 and u74-g03 PAN1304.",
'PAN4267':"Repeat of parked PAQ1095 (15-year-old requesting a contraceptive implant, Gillick competence) and live BX503/ETH021/ETH005.",
'PAN5779':"Repeat of parked PAQ1098 (stable schizophrenia on depot declining a recommended procedure; capacity judged by the functional test, not the diagnosis); also parked PAQ15049 and u74-g03 PAN1304.",
'PAN5781':"Repeat of live ETH027 (Montgomery: material risks to this patient) and u74-g03 PAN828 (professional singer, rare voice risk - same performer/rare-risk framing).",
'PAN6071':"Repeat of parked PAQ14837 (pre-op discussion of reasons, risks, alternatives, voluntary agreement -> 'Valid informed consent'); also u74-g05 PAN4638.",
'PAN6072':"Repeat of live BX011 (consent given under threat -> voluntariness); BX one-liner rule.",
'PAN6084':"Repeat of live DT017 (adult with dementia lacking capacity, no health and welfare attorney -> the consultant decides in best interests); also parked PAQ15322, live ETH023/BX950 and u74-g03 PAN10479.",
'PAN6574':"Repeat of parked PAN1506 (profoundly deaf older man without his hearing aids giving muddled answers -> optimise communication before judging capacity); also live ETH032.",
'PAN7363':"Repeat of live ETH001 (older inpatient with dementia facing a treatment decision -> assess capacity for this decision under the MCA); also live DR011/BX951.",
'PAN8000':"Repeat of live BX012 and parked PAQ1098 (capacity is judged on understand, retain, use or weigh, communicate - not on a cognitive score); BX one-liner rule.",
'PAN9920':"Repeat of live BX503 (a competent under-16 may consent to their own treatment); also live ETH021 and parked PAQ1095/PAQ15076.",
'PAN9924':"Repeat of live BX010 (capacitous patient asks about complications and alternatives -> explain risks, benefits and alternatives, support the decision); also u74-g05 PAQ12482.",
'PAN9933':"Repeat of parked PAQ15323 (older man with delirium from UTI who cannot retain the explanation lacks capacity for this decision now) combined with parked PAQ1094/live ETH023 (treat in best interests).",
'PAQ12478':"Repeat of live BX006 (correcting a paper note: single line through, legible, signed and dated correction).",
'PAN1637':"Repeat of live GF040 and ACU007 (FY1 called to a deteriorating patient after bowel resection -> call the registrar now); also parked PAN1428/PAN977 and u74-g06 PAN1368 (near-identical 2 am post-bowel-surgery vignette).",
'PAN1218':"Repeat of live SAF002 (adult discloses partner violence, no children, wants no referral -> respect wishes, offer support and safety planning).",
'PAN10507':"Repeat of live SAF001 (partner answers for the woman and will not leave -> find a reason to see her alone); also u74-g05 PAN345.",
'PAQ11984':"Repeat of live BX472 (find out what the patient wants to know, then discuss prognosis honestly with uncertainty); also parked PAQ11747.",
'PAQ11589':"Repeat of live ETH020/BX954/BX397 and parked PAQ15766/PAQ12471/PAQ1100 (duty of candour after a harmful medication error); also u74-g03 PAN728, u74-g05 PAN9925.",
'PAN1463':"Repeat of live ETH029 (patient unable to consent needing immediate life-saving treatment, no relatives -> treat in best interests under necessity); also live ETH023.",
'PAN2778':"Repeat of live BX003 and ETH004 (valid, applicable advance decision must be followed) and parked PAQ12473/PAQ1150/PAQ1099.",
'PAN2928':"Repeat of parked PAN8031 (capacitous patient with progressive illness wants to discuss the future -> explore and record her wishes) and u74-g03 PAN4681.",
'PAN6087':"Repeat of u74-g05 PAN1725 (IPF patient on a home visit discussing place of care and treatments he would refuse -> advance care planning) and parked PAN8031.",
'PAN4833':"Repeat of parked PAQ14956 (DNACPR covers CPR only; other treatment continues) and live BX014.",
'PAQ11985':"Repeat of live BX473 (fit note for simple low back pain: assess function and certify if justified).",
'PAQ12475':"Repeat of live BX004 (competent teenager seeking confidential sexual health advice -> maintain confidentiality unless sufficient reason).",
'PAN1276':"Repeat of live BX008 (handover content: active problems, current plan, outstanding tasks); also u74-g03 PAN730 and u74-g05 PAN6584.",
'PAN1787':"Repeat of live BX618 (iterative change and measurement -> quality improvement) and u74-g05 PAN5984 (near-identical PDSA vignette).",
'PAN4857':"Repeat within this batch of PAN1568 (care/nursing home, gloves used instead of hand hygiene between residents); also u74-g13 PAN975. Kept PAN1568.",
'PAN1567':"Repeat within this batch of PAN1568 (hand hygiene after glove removal before the next patient; same key fact) and u74-g13 PAN975. Kept PAN1568.",
'PAN1277':"Repeat within this batch of PAN731 (first escalation about a deteriorating post-operative patient fails -> keep escalating to registrar/consultant/outreach) and live GF040. Kept PAN731.",
}
fixes={}
def F(i,issues,**e): fixes[i]=(issues,e)
F('PAN1546',"Stem implied routine imaging before LP; NICE NG240 does LP before antibiotics only if safe and without clinically significant delay, CT only when indicated - stem reworded and pearl corrected to match. Key was longest (shortened; D and B lengthened). Source added. Overlap noted (not dropped): live BX010 and u74-g03 PAN1519/PAN724 test consent content, but none in an urgent setting where 'emergency = implied consent' is the trap - clinician to confirm.",
 stem="A 27-year-old woman in the emergency department has fever, neck stiffness and photophobia. She is alert, orientated and asking sensible questions. The registrar plans an urgent diagnostic lumbar puncture, and a junior doctor is asked to prepare her.\n\nWhat must happen before the needle is inserted?",
 options={"B":"Have her partner sign the consent form because she is feeling so unwell","C":"Explain its purpose, what it involves, its risks and alternatives, then get her consent","D":"Describe the steps of the procedure but leave out the risks so that she does not become distressed","E":"Carry out the procedure now and talk it through with her once she feels better"},
 why_correct="She is alert and orientated, so she is presumed to have capacity and her own valid consent is needed before an invasive procedure. Valid consent means she has been told the reason for the test, what it involves, the material risks such as post-procedure headache, bleeding and infection, and the reasonable alternatives. The urgency of possible meningitis does not remove the need for consent when the patient can give it. Source: Decision making and consent, GMC, 2020.",
 pearl="In suspected bacterial meningitis, lumbar puncture is done before antibiotics only if it is safe and will not cause a clinically significant delay, so the consent discussion should be prompt and focused.",
 sources=[GMC_DMC,'https://www.nice.org.uk/guidance/ng240/chapter/Recommendations',MCA1])
F('PAN6080',"Format only: source added. Overlap noted: live BX012 lists the four functional abilities; this item applies them (identify retention failure) - kept.",
 why_correct="The Mental Capacity Act functional test requires a person to understand, retain, use or weigh information, and communicate a decision. She understands it at first but cannot keep it in mind long enough to decide, so retention is impaired. Information only needs to be retained long enough to make the decision, so short retention may still be enough if it allows that. Source: Mental Capacity Act 2005 section 3, UK Parliament, 2005; Decision-making and mental capacity (NG108), NICE, 2018.",
 sources=[MCA3,NG108])
F('PAN6081',"Key was longest (option A lengthened). 'Frontal injury commonly affects' softened to 'can affect'. Source added. Overlap with live BX012 noted as for PAN6080.",
 options={"A":"Understanding the relevant information"},
 why_correct="He understands and remembers the information, but he cannot use it to compare benefits against risks in reaching a decision. This is an impairment of the ability to use or weigh information, one of the four functional abilities under the Mental Capacity Act 2005. Frontal lobe injury can affect this ability while leaving memory and language intact. Source: Mental Capacity Act 2005 section 3, UK Parliament, 2005; Decision-making and mental capacity (NG108), NICE, 2018.",
 sources=[MCA3,NG108])
F('PAN6082',"Key was longest (shortened; D and E lengthened). Source added. Overlap noted: u74-g03 PAN10477 (dysphasic stroke patient, wife wants to decide) tests the presumption of capacity rather than communication by any means - kept, but clinician may judge them too close.",
 options={"C":"She may have capacity if she can indicate her choice with the board","D":"An independent mental capacity advocate should make the decision for her","E":"The team should decide what is in her best interests because she cannot speak"},
 why_correct="Communicating a decision can be done by any means, including writing, signing, gestures or communication aids. The Mental Capacity Act requires all practicable steps to be taken to help a person decide before concluding incapacity. If she can understand, retain and weigh the information and indicate her choice through her eye-gaze board, she has capacity. Source: Mental Capacity Act 2005 sections 1 and 3, UK Parliament, 2005.",
 sources=[MCA1,MCA3,NG108])
F('PAN915',"Key was longest (shortened; E lengthened). Patient name removed from stem (vignettes must be name-free). Source added. Kept in preference to PAN2776 (same learning point).",
 stem="Six months ago a hospital doctor recorded that a 79-year-old man with vascular dementia lacked capacity to manage his finances. He is now on a surgical ward and needs a decision about an elective hernia repair. The ward nurse suggests the earlier assessment can simply be applied.\n\nWhich statement best reflects the law on mental capacity?",
 options={"B":"Capacity must be assessed for the hernia decision when it needs to be made","E":"A cognitive test score below a set threshold would confirm that he lacks capacity"},
 why_correct="The Mental Capacity Act 2005 treats capacity as specific to each decision and to the time it is made. Lacking capacity for complex finances does not mean he lacks capacity to decide about a hernia repair now, so a fresh assessment for this decision is required. Source: Mental Capacity Act 2005 sections 2 and 3, UK Parliament, 2005; Decision-making and mental capacity (NG108), NICE, 2018.",
 sources=['https://www.legislation.gov.uk/ukpga/2005/9/section/2',MCA3,NG108])
F('PAN10489',"Key was longest (tightened). Source added: the separate GMC 'Delegation and referral' guidance (2013-2024) is superseded; Good medical practice 2024 now carries the delegation standard.",
 options={"E":"Being satisfied that the assistant is competent for these tasks"},
 why_correct="When you delegate, you remain responsible for the decision to delegate. The registrar must be satisfied that the assistant has the knowledge, skills and experience for these tasks or will be adequately supervised, give clear instructions, and make sure the results come back for review. Source: Good medical practice, GMC, 2024.",
 sources=[GMC_GMP,GMC_DEL])
F('PAN5988',"Format only: source added. Overlap noted: u74-g06 PAN1368 (out of depth with a deteriorating post-op patient -> call senior help) and PAN1638 (untrained procedure -> ask supervision) share the 'limits of competence' point in different scenarios - kept, clinician to confirm.",
 why_correct="The doctor has recognised the likely problem but the next step is beyond their competence. Doctors must recognise and work within the limits of their competence and seek help when needed, so prompt escalation to the medical registrar is right, as this man is deteriorating and needs an urgent decision about ventilatory support. Source: Good medical practice, GMC, 2024; NIV in acute hypercapnic respiratory failure guideline, BTS/ICS, 2016.",
 sources=[GMC_GMP,'https://www.brit-thoracic.org.uk/quality-improvement/guidelines/niv/'])
F('PAN731',"Key was longest (shortened; B lengthened). Source added. Kept in preference to PAN1277 (same learning point).",
 options={"A":"Escalate further, for example to the on-call consultant or outreach team","B":"Move the patient to another ward where a different team might be able to see him"},
 why_correct="If a deteriorating patient is not being reviewed, the doctor must keep escalating through the hierarchy until appropriate help arrives, for example to the consultant or the critical care outreach team, and should document each step. Patient safety comes before concern about bypassing a busy senior. Source: Good medical practice, GMC, 2024; National Early Warning Score 2, Royal College of Physicians, 2017.",
 sources=[GMC_GMP,'https://www.rcp.ac.uk/improving-care/resources/national-early-warning-score-news-2/'])
F('PAN7724',"Format only: source added.",
 why_correct="He is frustrated but not threatening. A calm tone, active listening and acknowledging his concern, often with an apology for the wait, are the most effective ways to de-escalate and allow the consultation to continue. Source: Violence and aggression: short-term management in mental health, health and community settings (NG10), NICE, 2015.",
 sources=['https://www.nice.org.uk/guidance/ng10','https://www.nice.org.uk/guidance/ng10/chapter/Recommendations'])
F('PAN4878',"Key was longest (shortened; C lengthened). Source added.",
 options={"A":"Check current national guidance, such as NICE, and apply it to his circumstances","C":"Rely on an old textbook from the practice library without checking for newer advice"},
 why_correct="Good practice is to base decisions on current, relevant evidence-based guidance while applying clinical judgement to the individual patient, including comorbidities, preferences and interactions. When unsure, doctors should also feel free to ask senior colleagues. This keeps care safe, up to date and personalised. Source: Good medical practice, GMC, 2024; Hypertension in adults (NG136), NICE, 2019.",
 sources=[GMC_GMP,'https://www.nice.org.uk/guidance/ng136'])
F('PAN1486',"Key was much longest (shortened; B-E lengthened). 'Much less likely' softened to 'lowers' (a normal screening FIT lowers but does not remove risk). Source added; screening age band and 2-yearly recall checked (50-74, England).",
 options={"A":"Explain it lowers but does not exclude the risk of cancer, and say which symptoms to report","B":"Reassure him that bowel cancer has now been ruled out by the normal screening test","C":"Arrange a colonoscopy so the normal result can be confirmed before discussing it further","D":"Tell him the result is normal and that he will not need to take part in any further screening","E":"Advise him to contact the screening hub, as they are the only ones who can answer this"},
 why_correct="No screening test is perfect, and a normal faecal immunochemical test lowers the probability of bowel cancer without excluding it. Honest explanation of this uncertainty, together with clear safety-netting about rectal bleeding, change in bowel habit, weight loss or other symptoms, lets him make informed decisions and seek help early. He will also be invited again in the next screening round. Source: Bowel cancer screening programme overview, GOV.UK (NHS screening programmes), 2026; Decision making and consent, GMC, 2020.",
 sources=['https://www.gov.uk/guidance/bowel-cancer-screening-programme-overview',GMC_DMC])
F('PAN722',"Stem lacked the blank line before the question (fixed). Key was much longest (shortened; C and E lengthened). Source added.",
 stem="A 57-year-old woman is seen on the gastroenterology ward after a CT scan for painless jaundice. The report describes a mass in the head of the pancreas that is suspicious for malignancy, and an endoscopic biopsy has been booked. She asks the registrar, 'Does this mean I have cancer?'\n\nWhat is the best way to respond?",
 options={"C":"Decline to discuss what the scan shows until the biopsy result is available","D":"Say the scan shows a worrying mass, cancer is possible but not confirmed, and explain next steps","E":"Tell her the oncologist will explain everything at a later appointment once all the results are back"},
 why_correct="She has asked a direct question and is entitled to an honest answer at a pace that suits her. The registrar should explain what the scan shows, that cancer is a real possibility but the biopsy is needed to confirm it, and what will happen next and when. This avoids both false reassurance and a premature diagnosis, and allows her to ask questions and involve family. Source: Decision making and consent, GMC, 2020.",
 sources=[GMC_DMC])
F('PAN4270',"Key was longest (shortened; B reworded/lengthened as a plausible 'handling' distractor, why_wrong B updated). Source added. Overlap noted: live PED046/BX965, parked PAQ966 and u74-g05 PAQ11601 teach 'unexplained fracture in a non-mobile infant -> safeguarding'; this item's distinct point is that the classic metaphyseal lesion itself is strongly associated with abuse - kept, clinician to confirm it is distinct enough.",
 options={"A":"It strongly suggests non-accidental injury and needs a safeguarding response","B":"It is a typical accidental injury from routine handling such as nappy changes at this age"},
 why_wrong="B. A non-mobile infant rarely sustains accidental long-bone fractures, and normal handling does not produce this pattern. C. Rickets can cause metaphyseal changes but is an uncommon explanation and does not remove the duty to act on safeguarding concerns. D. Osteogenesis imperfecta is rare and still requires investigation alongside safeguarding. E. Bruising is often absent in abusive fractures.",
 why_correct="Metaphyseal corner or bucket-handle fractures, the classic metaphyseal lesion, result from forceful twisting or shaking of a limb and are strongly associated with abuse in infants. She is non-mobile and there is no explanation, which adds to the concern. The paediatric team and children's social care should be involved and a skeletal survey and further assessment arranged in line with safeguarding procedures. Source: Child maltreatment: when to suspect maltreatment in under 18s (CG89), NICE, 2009 (updated 2017); Child Protection Evidence: fractures, RCPCH, 2020.",
 sources=['https://www.nice.org.uk/guidance/cg89','https://childprotection.rcpch.ac.uk/child-protection-evidence/fractures-systematic-review/'])
F('PAN1301',"Format only: source added. Overlap noted: u74-g13 PAN975 (all hand hygiene moments) includes this moment - kept as the specific 'before touching the patient after touching the environment' point; clinician to confirm.",
 why_correct="Touching the pump and furniture will have contaminated her hands with organisms from the patient environment. Cleaning hands immediately before touching the patient is the first of the WHO five moments for hand hygiene and stops those organisms reaching a vulnerable post-operative patient. Alcohol hand rub is suitable as her hands are not visibly soiled. Source: National infection prevention and control manual for England, NHS England, current edition (accessed 2026).",
 sources=[NIPCM,'https://www.england.nhs.uk/national-infection-prevention-and-control-manual-nipcm-for-england/'])
F('PAN1568',"Key was longest (tightened). Source added; NIPCM: 'Always perform hand hygiene before putting on and after removing gloves'. Kept as the single hand-hygiene-and-gloves item from this batch (PAN4857 and PAN1567 dropped as repeats).",
 options={"E":"Hands must be cleaned before gloves go on and after they come off"},
 why_correct="Gloves are not a substitute for hand hygiene. They can have tiny perforations, and hands are commonly contaminated when gloves are removed. Hands must therefore be cleaned before gloves are put on and after they are taken off, and gloves must be changed between residents and tasks. Source: National infection prevention and control manual for England, NHS England, current edition (accessed 2026).",
 sources=[NIPCM])

F('PAN2767',"Reinstated: partner g05 PAN1524 dropped. Full recheck: no live or held item tests recapping/disposal at point of use (live BX016/BX563/BX490/ID024 cover first aid and PEP after a sharps injury, a different learning point); no kept item repeats it. Clinical content verified: the Sharps Regulations 2013 reg 5(1)(c) bar capping used needles unless risk-assessed with a suitable device, and require secure sharps containers close to where sharps are used. Key was much longest (shortened; B lengthened, C-E reworded slightly). Source line and sources added.",
 options={"A":"Do not recap; put the needle and syringe straight into the sharps bin","B":"Resheathe the needle carefully using both hands, then put it in the sharps bin","C":"Bend the needle over first so that it cannot be reused by anyone","D":"Place the uncapped needle and syringe in the clinical waste bag","E":"Leave it on the tray and clear everything up after the next patient"},
 why_correct="Resheathing used needles is a common cause of needlestick injury. Used sharps should be disposed of immediately by the person who used them, into a sharps container at the point of use, without recapping, bending or breaking the needle. This reduces the risk of blood-borne virus transmission to staff. Source: Health and Safety (Sharp Instruments in Healthcare) Regulations 2013, regulation 5, UK Government, 2013; National infection prevention and control manual for England, NHS England, current edition (accessed 2026).",
 sources=['https://www.legislation.gov.uk/uksi/2013/645/regulation/5',NIPCM,'https://www.hse.gov.uk/healthservices/needlesticks/'])

assert set(ids)==set(drops)|set(fixes), set(ids)^(set(drops)|set(fixes))
rev=[]
for i in ids:
  if i in drops:
    rev.append({"id":i,"verdict":"drop","issues":drops[i],"edits":{}}); continue
  iss,e=fixes[i]; q=D[i]; ed={}
  for k,v in e.items(): ed[k]=v
  opts=dict(q['options']); opts.update(e.get('options',{}))
  L=q['correct_letter']; ca=f"{L}. {opts[L]}"
  if ca!=q['correct_answer']: ed['correct_answer']=ca
  ed['notes']=((q['notes']+' ') if q['notes'] else '')+'Checker: '+iss
  rev.append({"id":i,"verdict":"fix","issues":iss,"edits":ed})
R={r['id']:r for r in rev}
out=[]
for q0 in draft:
  r=R.get(q0['id'])
  if not r or r['verdict']=='drop': continue
  q=copy.deepcopy(q0)
  for k,v in r['edits'].items():
    if k=='options': q['options'].update(v)
    else: q[k]=v
  out.append(q)
os.makedirs(B+'rev',exist_ok=True)
json.dump(rev,open(B+'rev/C.json','w',encoding='utf-8'),ensure_ascii=False,indent=1)
json.dump(out,open(B+'out/final.json','w',encoding='utf-8'),ensure_ascii=False,indent=1)
print(len(rev),'drops',sum(r['verdict']=='drop' for r in rev),'final',len(out))
