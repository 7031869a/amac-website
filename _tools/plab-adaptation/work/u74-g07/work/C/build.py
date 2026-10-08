import json,sys
B=sys.argv[1]
draft=json.load(open(B+'/draft.json',encoding='utf-8'))
ids=json.load(open(B+'/ctx/check_ids.json'))
NG12='https://www.nice.org.uk/guidance/ng12/chapter/Recommendations-organised-by-site-of-cancer'
NG20='https://www.nice.org.uk/guidance/ng20/chapter/Recommendations'
drops={
'PAQ11694':'Repeat: same scenario and learning point as live BX932 (fatty takeaway, RUQ pain about an hour later, settles within hours, no fever -> biliary colic) and live GAS101.',
'PAN9227':'Repeat: same scenario and learning point as parked PAQ15703 (patient has started cutting out bread/pasta before booked coeliac serology -> keep eating gluten); also duplicates PAN1019 in this batch and PAN7770 (u74-g06).',
'PAN1019':'Repeat: near-identical to parked PAQ15703 (cut out bread, pasta and cereals, feels better, advice before coeliac serology -> reintroduce gluten); also PAN9227 in this batch. Key also embeds the 6-week figure.',
'PAN9698':'Repeat: same scenario and learning point as live DR068 (known UC, 9 bloody stools/day, fever, tachycardia, tender not distended -> recognise ASUC and admit); ASUC also covered by live GAS093, DS107, DT071, DT072.',
'PAN5916':'Repeat: same scenario and fact as PAN2465 (u74-g06, checked set: proctitis, straining with sensation of incomplete emptying -> tenesmus). Keep one only; recommend keeping PAN2465.',
'PAN7867':'Repeat: same scenario and learning point as PAN6440 (u74-g06, checked set: diagnosed IBS with normal tests asks whether it could turn into cancer -> functional, no structural damage/cancer risk).',
'PAQ11256':'Repeat: live BX811 tests the same fact (gallstones as a cause of acute pancreatitis); also PAN1014 and PAN683 in u74-g06 (gallstone cause of pancreatitis).',
'PAN219':'Repeat: same scenario and learning point as live GAS100 (8 weeks of looser stools -> FIT to guide referral) and parked PAQ241 (2 months looser stools -> quantitative FIT); also DT067, DF111.',
'PAQ11262':'Repeat: live BX816 tests the identical fact (cholestasis = disproportionate ALP and GGT rise); parked PAQ15874 same learning point with an itch vignette.',
'PAN5377':'Repeat: near-identical scenario and learning point to parked PAQ14853 (biopsy-proven coeliac a year ago, ongoing bloating/loose stools, tTG still raised, beer and eating out -> ongoing gluten exposure/strict GFD) and PAQ14969.',
'PAN2094':'Repeat (BX rule): live BX818 tests the same fact (cirrhosis + splenomegaly + oesophageal varices <- portal hypertension), and live BX708 (cirrhosis -> varices). Borderline: PAN2094 adds the screening-endoscopy angle; clinician may overrule.',
'PAN5927':'Repeat: live GAS003 and parked PAAKT191 test the same fact in the same scenario (compensated cirrhosis -> 6-monthly liver ultrasound for HCC surveillance).',
'PAN4962':'Repeat: live BX821 tests the identical fact (liver failure, jerky flap of outstretched hands -> asterixis).',
'PAN6037':'Repeat: near-identical to PAN6205 (u74-g06, checked set: cirrhosis, muddled and drowsy for two days, no bowel opening for almost a week -> constipation as precipitant); also PAN6797 (u74-g06).',
'PAN5594':'Repeat: parked PAQ12834 (post hip surgery, regular opioid, constipation -> opioid mechanism) and PAQ15798 (opioid -> constipation as the adverse effect to anticipate); live BX273 same fact.',
'PAN6450':'Repeat: near-identical to PAN8762 (u74-g09, checked set: office worker, hard infrequent stools, little fluid/fibre, no red flags -> more fibre and fluid); live GER040 same learning point.',
'PAN8916':'Repeat: near-identical to parked PAQ16242 (itch, yellow eyes, tea-coloured urine, pale putty stools -> cholestasis/obstruction); also PAQ15873 and PAQ16423.',
'PAN6443':'Repeat: live BX831 tests the identical fact (in suspected IBS, unintentional weight loss is the red flag).',
'PAN690':'Repeat: live GAS074 (young adult, weeks of bloody diarrhoea with mucus, urgency, cramps -> UC) and parked PAQ16418 (same symptoms -> inflammatory bowel disease); live BX531.',
'PAN7089':'Repeat: live CR068 (young adult with chronic pain/altered bowel habit; faecal calprotectin used to distinguish IBD from IBS) and parked PAQ15875/PAQ16419 teach the same point.',
'PAN9453':'Repeat: live BX830 tests the identical fact (symptoms after dairy -> lactase deficiency); parked PAQ15757 similar vignette. Stem also cued the answer ("not digesting the sugar in milk") and key tied for longest.',
'PAN7082':'Repeat: live BX828 tests the same fact (coeliac disease is triggered by gluten); GFD-for-life point also in PAN5377 (dropped) and parked PAQ14853/PAQ14969.',
'PAN6218':'Repeat: near-identical to PAN3437 (u74-g08, checked set: no painkillers, nocturnal epigastric pain eased by food -> H. pylori); live BX352, parked PAQ16108.',
'PAN7473':'Repeat: live BX705 tests the identical fact (dysphagia starting with solids then liquids -> mechanical obstruction); BX109 is the converse.',
'PAN7372':'Repeat: parked PAQ14865 is the same scenario (long-standing reflux, new food sticking behind the sternum -> urgent endoscopy to exclude cancer); live BX707 (Barrett -> adenocarcinoma) and GF017.',
'PAN7169':'Repeat within this batch: same scenario (day 2 of gallstone pancreatitis, perioral and finger tingling) and learning point (fat-necrosis hypocalcaemia) as PAN7291, which is kept. Stem also gave the mechanism away ("caused by fat necrosis").',
}
fixes={
'PAN5917':({'why_correct':"Faecal urgency is a sudden, compelling need to defecate that is difficult to defer. It is caused by an inflamed, poorly compliant rectum, which is why it is a key marker of activity in ulcerative colitis and proctitis. She has not lost control of stool, so incontinence is not the right term. Source: NHS website, Ulcerative colitis, 2026; NICE NG130 Ulcerative colitis, 2019."},
  ['https://www.nhs.uk/conditions/ulcerative-colitis/','https://www.nice.org.uk/guidance/ng130'],'Format/source only. Clinically correct.'),
'PAN2494':({'why_correct':"Long-standing ulcerative colitis beyond the rectum increases the risk of colorectal dysplasia and cancer, and the risk rises with the duration and extent of disease and with poorly controlled inflammation. UK guidance offers colonoscopic surveillance starting several years after symptom onset (about 8 years in the 2025 BSG guideline, 10 years in NICE CG118), with the interval set by individual risk. Surveillance aims to detect dysplasia early, when it can be removed or treated. Source: BSG guidelines on colorectal surveillance in IBD, 2025; NICE CG118 Colonoscopic surveillance, 2011.",
  'pearl':"Coexisting primary sclerosing cholangitis greatly increases colorectal cancer risk in colitis, so these patients need colonoscopy at diagnosis and then annual surveillance."},
  ['https://www.nice.org.uk/guidance/cg118/chapter/Recommendations','https://www.bsg.org.uk/clinical-resource/BSG-guidelines-on-colorectal-surveillance-in-IBD'],
  'Clinical correction: why_correct said NICE and BSG both start surveillance at about 10 years; the 2025 BSG guideline starts at about 8 years from symptom onset (NICE CG118 says 10). Reworded to give both. Pearl tightened to BSG 2025 (colonoscopy at PSC diagnosis, then annual).'),
'PAN6419':({'why_correct':"Carvedilol and propranolol are non-selective beta-blockers that reduce portal pressure by lowering cardiac output (beta-1 blockade) and causing splanchnic vasoconstriction (unopposed alpha tone after beta-2 blockade). Lower portal pressure reduces tension in the variceal wall and so lowers the risk of a first bleed. This is why they are used as primary prevention for medium or large varices. Source: NICE NG50 Cirrhosis in over 16s, updated 2023.",
  'pearl':"NICE (2023) recommends carvedilol or propranolol to prevent a first bleed from medium or large varices, with endoscopic band ligation used if a beta-blocker is not tolerated, is contraindicated or cannot be taken reliably."},
  ['https://www.nice.org.uk/guidance/ng50/chapter/Managing-complications','https://www.nice.org.uk/guidance/ng50/chapter/Monitoring'],
  'Clinical correction: pearl said band ligation is the NICE-recommended option for medium/large varices (old CG141/2016 position). NICE NG50 2023 update recommends carvedilol or propranolol first, band ligation if beta-blockers are not tolerated/contraindicated/cannot be taken. Pearl and source rewritten.'),
'PAN7088':({'why_correct':"Long-standing pale, bulky stools and weight loss suggest fat malabsorption. Vitamin D is fat-soluble and calcium absorption depends on it, so malabsorption leads to low calcium and vitamin D with a raised alkaline phosphatase, the picture of osteomalacia, and fragility fractures. Coeliac disease is a common underlying cause and should be tested for. Source: NICE NG20 Coeliac disease, 2015; NHS website, Rickets and osteomalacia, 2025."},
  [NG20,'https://www.nhs.uk/conditions/rickets-and-osteomalacia/causes/'],'Format/source only. NG20 lists osteomalacia as an indication for coeliac serology.'),
'PAN5384':({'options':{'B':'His food and water exposures while abroad'},'correct_answer':'B. His food and water exposures while abroad',
  'why_correct':"Persistent diarrhoea after travel to a low-income region raises the possibility of an infection such as giardiasis, amoebiasis or bacterial enteritis. Asking about drinking water, street food, ice and contacts helps judge the likely organism and guides stool testing, including requesting ova, cysts and parasites. Greasy stools and wind after drinking untreated water would particularly suggest Giardia. Source: NHS website, Giardiasis, 2026."},
  ['https://www.nhs.uk/conditions/giardiasis/'],'Key shortened (was longest option); source added. Clinically correct.'),
'PAN6452':({'options':{'C':'Gentle water cleansing, pat dry, barrier cream'},'correct_answer':'C. Gentle water cleansing, pat dry, barrier cream',
  'why_correct':"Frequent contact with liquid stool causes irritant (incontinence-associated) dermatitis. Gentle cleansing with warm water or a pH-balanced cleanser, patting rather than rubbing dry, and applying a barrier preparation protects the skin from further damage. The cause of the diarrhoea should also be addressed and her hydration maintained. Source: NICE CG179 Pressure ulcers: prevention and management, 2014."},
  ['https://www.nice.org.uk/guidance/cg179/chapter/1-Recommendations','https://www.dbth.nhs.uk/wp-content/uploads/2024/01/Skin-Care-Pathway-for-Incontinence-Associated-Dermatitis-IAD-v3-2024.pdf'],'Key shortened (was longest option); source added. Clinically correct (NICE CG179 1.1.18 barrier preparations; cleansing detail from NHS trust IAD pathways).'),
'PAN8861':({'options':{'A':'Gluten triggers immune damage to the small intestinal lining'},'correct_answer':'A. Gluten triggers immune damage to the small intestinal lining',
  'why_correct':"In coeliac disease, gluten peptides are modified by tissue transglutaminase and presented by HLA-DQ2 or DQ8 molecules, triggering a T-cell response that causes villous atrophy in the small bowel. This damage can occur even after small amounts of gluten and even when there are no symptoms. Ongoing exposure increases the risk of anaemia, osteoporosis, poor growth and small bowel lymphoma. Source: NICE NG20 Coeliac disease, 2015; NHS website, Coeliac disease, 2023."},
  [NG20,'https://www.nhs.uk/conditions/coeliac-disease/'],'Key shortened (was longest option); source added. Clinically correct. Near topic: live BX828 (gluten as trigger) tests a different fact.'),
'PAN6411':({'options':{'C':'Loss of inhibitory myenteric neurones, so the sphincter cannot relax'},'correct_answer':'C. Loss of inhibitory myenteric neurones, so the sphincter cannot relax',
  'why_correct':"Achalasia results from degeneration of inhibitory nitrergic neurones in the myenteric (Auerbach) plexus. Without them the lower oesophageal sphincter cannot relax on swallowing and the oesophageal body loses its peristalsis, so food and fluid pool in a dilating oesophagus. That retained food is regurgitated when he lies flat, which is why he props himself up. Source: NHS website, Achalasia, 2023."},
  ['https://www.nhs.uk/conditions/achalasia/'],'Key shortened (was longest option; aperistalsis now explained in why_correct only); source added. Clinically correct. No UK national guideline on achalasia found; NHS page used.'),
'PAN7291':({'options':{'E':'Calcium bound as soaps by fatty acids from fat necrosis'},'correct_answer':'E. Calcium bound as soaps by fatty acids from fat necrosis',
  'why_correct':"Pancreatic lipases released into the surrounding tissue digest fat, freeing fatty acids that combine with calcium to form insoluble soaps (saponification). This sequesters calcium and lowers the serum level, producing perioral and digital paraesthesia. Because her albumin is normal, the fall is a true reduction rather than a binding artefact. Source: Society for Endocrinology emergency guidance, Acute hypocalcaemia in adults, 2016; NICE NG104 Pancreatitis, 2018."},
  ['https://gloshospitals.nhs.uk/media/documents/Emergency_Guidance_Acute_Hypocalcaemia_in_Adults.pdf','https://www.nice.org.uk/guidance/ng104/chapter/Recommendations'],
  'Key shortened (was longest option); source added. Clinically correct. PAN7169 (same scenario) dropped in its favour.'),
'PAN9137':({'why_correct':"Dysphagia is a red-flag symptom for oesophageal and gastric cancer. NICE suspected cancer guidance recommends a suspected cancer pathway referral for anyone with dysphagia, whatever their age. Adding it to his early satiety and upper abdominal discomfort would change management from treating dyspepsia to urgent specialist assessment. Source: NICE NG12 Suspected cancer: recognition and referral, amended 2025."},
  [NG12,'https://www.nice.org.uk/guidance/cg184'],'Source added; verified against NG12 1.2.1/1.2.7 (2025 amendment: dysphagia -> suspected cancer pathway referral at any age). Near-topic live items (GF017, GAS041, GAS064, DF049) key endoscopy for dysphagia with weight loss; this item tests picking dysphagia as the red flag among dyspeptic symptoms - clinician may judge it a repeat.'),
}
rev=[];final=[]
for i in ids:
    if i in drops: rev.append({'id':i,'verdict':'drop','issues':drops[i],'edits':{}}); continue
    e,src,iss=fixes[i]; ed=dict(e); ed['sources']=src
    rev.append({'id':i,'verdict':'fix','issues':iss,'edits':ed})
for q in draft:
    if q['id'] in fixes:
        q=json.loads(json.dumps(q)); e,src,_=fixes[q['id']]
        for k,v in e.items():
            if k=='options': q['options'].update(v)
            else: q[k]=v
        q['sources']=src; final.append(q)
assert set(ids)==set(drops)|set(fixes) and not set(drops)&set(fixes)
json.dump(rev,open(B+'/rev/C.json','w',encoding='utf-8'),indent=1,ensure_ascii=False)
json.dump(final,open(B+'/out/final.json','w',encoding='utf-8'),indent=1,ensure_ascii=False)
print(len(rev),len(final),len(drops))
