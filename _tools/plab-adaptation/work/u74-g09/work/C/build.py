import json
B='_tools/plab-adaptation/work/u74-g09/'
orig=json.load(open(B+'work/C/checked_orig.json',encoding='utf-8'))
O={q['id']:q for q in orig}
NG12='https://www.nice.org.uk/guidance/ng12/chapter/Recommendations-organised-by-site-of-cancer'
BSHPV='https://www.thebloodproject.com/wp-content/uploads/2021/10/BSH_PV.pdf'
BSHSE='https://pmc.ncbi.nlm.nih.gov/articles/PMC6519221/'
def wc(i,src): return O[i]['why_correct'].rstrip()+' Source: '+src+'.'
fix={}
fix['PAN6784']=dict(src='NHS website, Oesophageal cancer: causes, 2023',urls=['https://www.nhs.uk/conditions/oesophageal-cancer/causes/'])
fix['PAN2459']=dict(src='NICE CKS, Candida - oral, 2025',urls=['https://cks.nice.org.uk/topics/candida-oral/'])
fix['PAN9862']=dict(src='NICE CG184 Gastro-oesophageal reflux disease and dyspepsia in adults, 2014 (updated 2019); NICE CKS, Dyspepsia - unidentified cause, 2024',urls=['https://www.nice.org.uk/guidance/cg184/chapter/Recommendations','https://cks.nice.org.uk/topics/dyspepsia-unidentified-cause/'])
fix['PAN2458']=dict(src='NICE NG12 Suspected cancer: recognition and referral, 2015 (amended 2025)',urls=[NG12],
  edits={'options':{'E':'Postprandial nausea'},'why_wrong':'A. Anorexia means loss of appetite, but he is hungry before eating. C. Dysphagia is difficulty swallowing, which he denies. D. Odynophagia is painful swallowing, which he denies. E. Postprandial nausea is a feeling of wanting to vomit after eating, which he does not describe.'})
fix['PAN6780']=dict(src='NICE NG12 Suspected cancer: recognition and referral, 2015 (amended 2025)',urls=[NG12])
fix['PAN1898']=dict(src='NICE NG246 Overweight and obesity management, 2025',urls=['https://www.nice.org.uk/guidance/ng246/chapter/Identifying-and-assessing-overweight-obesity-and-central-adiposity'])
fix['PAN9256']=dict(src='NICE NG112 Urinary tract infection (recurrent): antimicrobial prescribing, 2018 (updated 2024); NHS website, Urinary tract infections, 2025',
  urls=['https://www.nice.org.uk/guidance/ng112/chapter/Recommendations','https://www.nhs.uk/conditions/urinary-tract-infections-utis/'],
  edits={'options':{'B':'Drink enough fluids and pass urine when she needs to rather than holding on'}})
fix['PAN5145']=dict(src='NICE CG147 Peripheral arterial disease: diagnosis and management, 2012 (updated 2020)',urls=['https://www.nice.org.uk/guidance/cg147/chapter/Recommendations'],
  edits={'options':{'B':'Smoking encourages new collateral vessels to form around the narrowed artery'}})
fix['PAN10282']=dict(src='British Society for Haematology guidelines on polycythaemia vera and secondary erythrocytosis, 2019',urls=[BSHPV,BSHSE])
fix['PAN10283']=dict(src='British Committee for Standards in Haematology guideline for investigation and management of adults and children presenting with a thrombocytosis, 2010',urls=['https://pubmed.ncbi.nlm.nih.gov/20331456/','https://pmc.ncbi.nlm.nih.gov/articles/PMC12231194/'])
fix['PAN2312']=dict(src='British Society for Haematology guideline for the diagnosis and management of polycythaemia vera, 2019',urls=[BSHPV])
fix['PAN3735']=dict(src='British Society for Haematology guideline for the investigation and management of eosinophilia, 2017',urls=['https://b-s-h.org.uk/guidelines/guidelines/investigation-and-management-of-eosinophilia','https://rightdecisions.scot.nhs.uk/tam-treatments-and-medicines-nhs-highland/therapeutic-guidelines/haematology/eosinophilia-guidelines','https://patient.info/doctor/haematology/eosinophilia'],
  edits={'options':{'A':'Acute gastrointestinal haemorrhage','C':'Dietary iron deficiency','E':'Volume depletion from dehydration'}})
fix['PAN6659']=dict(src='British Society for Haematology guideline for the diagnosis and management of polycythaemia vera, 2019',urls=[BSHPV,BSHSE])
fix['PAN1551']=dict(src='NICE CKS, Anaemia - iron deficiency, 2026',urls=['https://cks.nice.org.uk/topics/anaemia-iron-deficiency/'])
fix['PAN3212']=dict(src='NICE NG239 Vitamin B12 deficiency in over 16s: diagnosis and management, 2024',urls=['https://www.nice.org.uk/guidance/ng239/chapter/Recommendations'],
  edits={'options':{'A':"Hashimoto's thyroiditis"}})
issues={
'PAN6784':"Clinically accurate (smoking is a risk factor for both histological types; NHS lists smoking, alcohol, obesity, reflux/Barrett's, hot drinks). No live/parked repeat found. Fix: Source line and sources only.",
'PAN2459':'Accurate terminology item; immunosuppression angle (candida/herpes oesophagitis) consistent with CKS. No live/parked odynophagia item found. Fix: Source line and sources only.',
'PAN9862':'Accurate; pearl matches NICE CG184 (PPI or H. pylori test-and-treat). No live/parked terminology repeat (GAS081/PAQ15271 test management, not the term). Fix: Source line and sources only.',
'PAN2458':'Accurate terminology item. Not a repeat of BX839 (that tests the diagnosis gastric cancer; this tests the term). Fix: key was longest; option E lengthened to "Postprandial nausea" with why_wrong E aligned; Source line and sources added.',
'PAN6780':'Accurate; matches NICE NG12 1.2.5 (aged 60 and over with weight loss and new-onset diabetes: consider urgent direct-access CT). Fix: Source line and sources only.',
'PAN1898':'Accurate; NICE NG246 1.9.12-1.9.14: interpret BMI with caution in muscular adults; use waist-to-height ratio when BMI below 35. Partial overlap with parked PAN6734 (BMI cannot separate muscle from fat, older malnourished man) but different key and learning point; noted for the human reviewer. Fix: Source line and sources only.',
'PAN9256':'Accurate per NICE NG112 1.1.3 and NHS UTI prevention advice (drink fluids, do not hold urine). No live/parked repeat (BX749 tests intercourse as a risk factor). Fix: key was longest; key tightened, meaning unchanged; Source line and sources added.',
'PAN5145':'Accurate. Possible overlap with parked PAN8284 (how smoking damages arteries, QRISK setting) and PAQ16057 (stopping smoking in PAD); judged different keyed facts but flagged for the human reviewer. Fix: key was longest; option B lengthened (still clearly wrong; why_wrong B still fits); Source line and sources added.',
'PAN10282':'Accurate; thrombosis is the main complication of raised red cell mass (BSH 2019). Distinct from u74-g11 PAN4001 (hyperviscosity symptoms) and PAN4002 (ET). Fix: Source line and sources only.',
'PAN10283':"Accurate (ET: thrombosis, plus bleeding at very high counts via acquired von Willebrand syndrome). OVERLAP FLAG: u74-g11 PAN4002 (checked) also tests complications of ET, keyed thrombosis only. Kept because this item's point is the bleeding paradox and the keys do not conflict, but the human reviewer should decide whether both ET-complication items go live. BCSH 2010 is the latest general UK thrombocytosis guideline I could find. Fix: Source line and sources only.",
'PAN2312':'Accurate. Not a repeat of HAE017 (PV diagnosis plus treatment) or parked PAQ16133 (secondary polycythaemia); this tests the broad term. Fix: Source line and sources only.',
'PAN3735':'Accurate (UK commonest cause atopy/allergy; worldwide helminths). I could not open the full BSH 2017 text; the claim was confirmed via the NHS Highland eosinophilia guideline and patient.info, so the reviewer may wish to confirm. Fix: key was longest; distractors A, C, E lengthened without changing meaning; Source line and sources added.',
'PAN6659':'Accurate; BSH 2019 PV guideline: history (smoking, drugs, alcohol), relative/apparent vs absolute erythrocytosis, ferritin (iron deficiency masks PV, consistent with why_wrong E), JAK2. Not a repeat of DR156 (tests JAK2 as first test). Fix: Source line and sources only.',
'PAN1551':'Accurate; CKS: ferritin is hard to interpret with inflammation as levels can be high despite iron deficiency. Live CR028 keys anaemia of chronic disease, not why ferritin misleads. Fix: Source line and sources only.',
'PAN3212':"Accurate; NG239 lists autoimmune thyroid disease among associated autoimmune conditions. Fix: key was longest; shortened to \"Hashimoto's thyroiditis\" (same meaning); Source line and sources added.",
}
drops={
'PAN2092':'Repeat of live BX821 (flapping tremor of outstretched hands in liver failure -> asterixis); also duplicated by u74-g07 PAN4962 and u74-g06 PAQ11267.',
'PAN1012':'Repeat of live BX834 (vomiting blood -> haematemesis; same fact reversed); also u74-g08 PAQ11283.',
'PAN6781':'Repeat of live BX839 (older adult, early satiety and weight loss -> gastric cancer).',
'PAQ12029':'Repeat of live BX461 (almost two weeks of unilateral facial pain, blocked nostril, purulent discharge -> acute bacterial rhinosinusitis); near-identical.',
'PAN346':'Repeat of parked PAN5050 (patient on active cancer treatment; palliative care relieves symptoms and runs alongside treatment). Also overlaps parked PAN7726.',
'PAN8762':'Repeat of u74-g07 PAN6450 (checked): 36-38-year-old office worker, hard infrequent stools, low fibre/fluid, no red flags -> more fibre and fluid. Keep only one of the pair; if the g07 checker drops PAN6450, this could be reinstated after length/Source fixes (key E was longest).',
'PAQ11098':'Repeat of live BX734 (new erectile dysfunction after a new blood pressure tablet -> review medication first); also parked PAN4150 (bendroflumethiazide, age 61).',
'PAN1457':'Repeat of parked PAN7728 (dying at home/nursing home, worries about the weekend -> anticipatory medicines). Stem also used a first name (Margaret), against the name-free rule.',
'PAN4679':'Repeat of parked PAN5052 (just-in-case injectable medicines kept at home so symptoms can be treated promptly) and PAN7728.',
'PAN4678':'Repeat of parked PAN5050 (patient frightened of what palliative care means -> symptom relief and quality of life) and PAN7726.',
'PAN4830':'Repeat of live BX613 (palliative care: tailor symptom control to the individual and their goals); BX one-liner rule.',
'PAN970':'Repeat of parked PAN1516 (rushed in, cuff too small -> rest, correct cuff, repeat); also parked PAN713.',
'PAN2428':'Repeat of parked PAQ16133 (COPD smoker, low saturation, raised Hb -> secondary polycythaemia from hypoxic EPO drive).',
'PAN2430':'Repeat of live HAE011 (fatigue, massive splenomegaly, myeloid left shift, basophilia, BCR-ABL1 -> CML); also u74-g11 PAN9505 and parked PAQ848.',
'PAN2439':'Repeat of parked PAQ16463 (19-year-old with beta-thalassaemia major, poor chelation -> transfusional iron overload); also u74-g10 PAN2717.',
'PAN4006':'Repeat of live BX889 (mechanism of sickle cell painful crisis -> vaso-occlusion by sickled cells); also parked PAQ16131 and u74-g11 PAN6665.',
'PAN10266':'Repeat of u74-g11 PAN4342 (heavy drinker, macrocytic anaemia, hypersegmented neutrophils -> folate deficiency rarely causes neurological damage); also near-identical to PAN6651 in this batch.',
'PAN1356':'Repeat of live HAE001 (woman with heavy periods, fatigue, microcytic anaemia, low ferritin -> iron deficiency anaemia); also parked PAQ14799 and PAAKT101.',
'PAN1554':'Repeat of parked PAQ837 (macrocytic anaemia with neurological signs -> replace B12 first; never folic acid alone).',
'PAN1832':'Repeat of parked PAQ16184 (long-term vegan without supplements, paraesthesia, macrocytic anaemia -> B12 deficiency) and live BX433; also duplicates PAN305 in this batch.',
'PAN305':'Repeat of parked PAQ16184 (vegan without supplements, pins and needles, macrocytosis -> B12 deficiency) and live BX433; also duplicates PAN1832 in this batch.',
'PAN3738':'Repeat of live CR058 (raised reticulocytes in anaemia -> appropriate marrow response to blood loss or haemolysis).',
'PAN3934':'Repeat of u74-g10 PAN9450 (checked; heavy periods, iron deficiency -> microcytic hypochromic cells); live HAE001 covers the same fact. If the g10 checker drops PAN9450, reconsider this one (key D was longest).',
'PAN4344':'Repeat of live HAE050 (anaemia of chronic disease: low serum iron, low TIBC, normal-high ferritin; same fact reversed); also live CR028.',
'PAN5449':'Repeat of live BX577 (B12 deficiency -> tingling and numbness in the feet, SACD) and parked PAQ14962 (B12 neurological features in the feet).',
'PAN6029':'Repeat of live ID039 (child with chronic haemolytic anaemia, sudden severe anaemia, very low reticulocytes -> parvovirus B19 aplastic crisis); hereditary spherocytosis instead of sickle cell does not change the tested fact.',
'PAN6380':'Repeat of u74-g11 PAN4342 (checked; folate vs B12: neurological damage points to B12); also parked PAQ14962 and PAQ15290 (dorsal column signs of B12 deficiency).',
'PAN6382':'Repeat of parked PAQ15871 and PAQ16599 (older adult, good diet, no bleeding, low-ferritin microcytic anaemia -> occult GI bleeding/cancer) and u74-g06 PAN5418 (checked, near-identical).',
'PAN6651':'Repeat of u74-g11 PAN4342 (alcohol excess, macrocytic anaemia, folate deficiency without neurology); also near-identical to PAN10266 in this batch.',
}
rev=[];final=[]
ids=json.load(open(B+'ctx/check_ids.json'))
assert set(ids)==set(fix)|set(drops) and not set(fix)&set(drops)
for q in orig:
  i=q['id']
  if i in drops:
    rev.append({'id':i,'verdict':'drop','issues':drops[i],'edits':{}}); continue
  f=fix[i]; e=dict(f.get('edits',{}))
  e['why_correct']=wc(i,f['src']); e['sources']=f['urls']
  n=dict(q)
  for k,v in e.items():
    if k=='options': n['options']={**q['options'],**v}
    else: n[k]=v
  if 'options' in e:
    n['correct_answer']=f"{n['correct_letter']}. {n['options'][n['correct_letter']]}"
    if n['correct_answer']!=q['correct_answer']: e['correct_answer']=n['correct_answer']
  rev.append({'id':i,'verdict':'fix','issues':issues[i],'edits':e}); final.append(n)
json.dump(rev,open(B+'rev/C.json','w',encoding='utf-8'),ensure_ascii=False,indent=1)
json.dump(final,open(B+'out/final.json','w',encoding='utf-8'),ensure_ascii=False,indent=1)
print(len(rev),len(final),sum(r['verdict']=='drop' for r in rev))
for n in final:
  o=n['options'];L=n['correct_letter'];print(n['id'],{k:len(v) for k,v in o.items()},L)
