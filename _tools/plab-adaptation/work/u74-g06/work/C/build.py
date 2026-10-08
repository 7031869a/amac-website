import json,sys
sys.stdout.reconfigure(encoding='utf-8')
B='_tools/plab-adaptation/work/u74-g06/'
draft=json.load(open(B+'draft.json',encoding='utf-8'))
D={q['id']:q for q in draft}
ids=json.load(open(B+'ctx/check_ids.json'))
U={'bsgasc':'https://www.bsg.org.uk/clinical-resource/guidelines-on-the-management',
   'bsgasc2':'https://pmc.ncbi.nlm.nih.gov/articles/PMC7788190',
   'bsglft':'https://pmc.ncbi.nlm.nih.gov/articles/PMC5754852/',
   'gmp':'https://www.gmc-uk.org/professional-standards/the-professional-standards/good-medical-practice/domain-1-knowledge--skills-and-development',
   'care':'https://www.legislation.gov.uk/ukpga/2014/23/notes/division/5/1/10',
   'care2':'https://safeguardingpartnership.swindon.gov.uk/info/13/adults/107/financial_and_material_abuse',
   'ng129':'https://www.nice.org.uk/guidance/ng129/chapter/Recommendations',
   'ng104':'https://www.nice.org.uk/guidance/ng104/chapter/Recommendations',
   'food':'https://www.nhs.uk/conditions/food-intolerance/',
   'hepc':'https://www.nhs.uk/conditions/hepatitis-c/causes/',
   'hepc2':'https://www.nhs.uk/conditions/hepatitis-c/',
   'ng151':'https://www.nice.org.uk/guidance/ng151/chapter/Recommendations',
   'cksh':'https://cks.nice.org.uk/topics/haemochromatosis/',
   'wil':'https://www.nhs.uk/conditions/wilsons-disease/',
   'ta337':'https://www.nice.org.uk/guidance/ta337',
   'cg61':'https://www.nice.org.uk/guidance/cg61/chapter/1-Recommendations',
   'dg11':'https://www.nice.org.uk/guidance/dg11',
 'ucnhs':'https://www.nhs.uk/conditions/ulcerative-colitis/','bsgibs':'https://www.bsg.org.uk/clinical-resource/British-Society-of-Gastroenterology-Guidelines','ibsca1':'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8924657/','ibsca2':'https://pubmed.ncbi.nlm.nih.gov/35130187/'}
def wc(i,src):
    return D[i]['why_correct'].rstrip()+' Source: '+src
R={}
def fix(i,issues,edits): R[i]={'id':i,'verdict':'fix','issues':issues,'edits':edits}
def drop(i,issues): R[i]={'id':i,'verdict':'drop','issues':issues,'edits':{}}

# ---- drops
drop('PAN1279',"Duplicate: same scenario and learning point as PAN958 (u74-g05 draft, also under check: alert patient states full name and DOB, checked against wristband and request before phlebotomy). Kept the g05 version; if the g05 checker drops PAN958 citing this item, reinstate PAN1279 instead (it is clinically sound).")
drop('PAN9947',"Duplicate of live BX966 (patient cannot read medicine instructions -> provide information in an accessible form). Same scenario and learning point; BX items count as repeats.")
drop('PAN8035',"Duplicate of live SAF004 (older adult, controlling relative who answers every question, suspected abuse -> speak to the patient alone first). Abuse type differs (financial vs physical) but scenario structure and keyed learning point are the same. Borderline - clinician may wish to reinstate.")
drop('PAN10490',"Duplicate of PAN9928 (u74-g03 draft, under check: GP unsure of cause of rash/systemic symptoms -> discuss with or refer to specialist; limits of competence). Same scenario and learning point.")
drop('PAN1368',"Duplicate of live PAN977 (deteriorating post-op patient, foundation doctor -> ABCDE and escalate to senior) and live GF040 (FY1, day 3 after bowel resection, new confusion and shock -> call registrar/outreach). Same scenario and learning point.")
drop('PAN6291',"Duplicate of live DT071 (UC flare, systemically unwell, AXR dilated transverse colon with loss of haustra -> toxic megacolon). Same scenario and key.")
drop('PAN1014',"Duplicate: live BX811 (usual causes of acute pancreatitis -> gallstones) and PAQ11256 (u74-g07: woman who rarely drinks, pancreatitis -> gallstones); also near-identical to PAN683 in this same batch (both 46-year-old women with a biliary colic history).")
drop('PAN683',"Duplicate: live BX811 (pancreatitis aetiology -> gallstones), PAQ11256 (u74-g07, same scenario and key) and PAN1014 in this batch.")
drop('PAN6448',"Duplicate of live BX244 (months of intermittent LIF cramping pain, altered habit, afebrile and well -> symptomatic diverticular disease). Same scenario and key.")
drop('PAN3429',"Duplicate of live BX244 (intermittent LIF cramping, alternating habit, well -> symptomatic diverticular disease); also repeats PAN6448 in this batch.")
drop('PAN8885',"Duplicate of parked PAN5374 (food -> itchy lips, crampy pain, loose stool and wheeze within minutes -> IgE-mediated food allergy, with intolerance/coeliac/IBS distractors). Also note: recurrent episodes with wheeze after food already meet anaphylaxis criteria, so 'at risk of anaphylaxis' understated it.")
drop('PAN7770',"Duplicate of PAN9227 (u74-g07: 34-year-old man, friend advises going gluten-free -> keep eating gluten until coeliac tests done), PAN1019 (u74-g07) and parked PAQ15703. Same scenario and learning point.")
drop('PAN8448',"Duplicate of live BX530 and BX831 (IBS-type symptoms; which feature suggests organic disease -> unintentional weight loss) and PAN6443 (u74-g07). Same learning point, same key.")
drop('PAN6039',"Near-identical to PAN7236 in this batch (cirrhotic ascites, fever, tenderness, confusion -> diagnostic paracentesis). PAN7236 kept.")
drop('PAN3914',"Duplicate of live BX132 and GAS106 (young adult, tremor/dysarthria, deranged LFTs, golden-brown corneal ring) and PAN5928 (u74-g08: 19-year-old woman, tremor, slurred speech, golden-brown corneal deposit). Naming the sign rather than the disease does not change the learning point.")
drop('PAN5233',"Duplicate of live CR003 (jaundice, pruritus, ALP-dominant LFTs -> cholestatic pattern) and BX816, parked PAQ16242/PAQ15874.")
drop('PAN6200',"Duplicate of live GAS059 and BX845 (hepatocellular LFTs, positive anti-smooth muscle antibody/ANA, raised IgG -> autoimmune hepatitis).")
drop('PAN7141',"Duplicate of live CR004 (transaminase-dominant LFTs -> hepatocellular pattern) and parked PAQ16424 (same key with infiltrative/haemolytic distractors).")
drop('PAN5913',"Duplicate of live BX833 (black, sticky, foul-smelling stool -> melaena).")
drop('PAN217',"Duplicate: same learning point as PAN7144 in this batch (diagnostic criteria for acute pancreatitis: typical pain plus markedly raised enzyme), with the scenario of parked PAQ16603 (52-year-old woman with known gallstones, pain boring to back, vomiting). PAN7144 kept.")
drop('PAN6205',"Duplicate of PAN6037 (u74-g07: man with cirrhosis, muddled and sleepy, not opened bowels -> constipation as precipitant) and PAQ11266 (u74-g08); live GAS102 also covers precipitants. Distractors (walking, salt restriction, vitamins) were also implausible.")
drop('PAQ11267',"Duplicate of live BX821 (jerky flap of outstretched hands in liver failure -> asterixis) and BX369; also PAN4962 (u74-g07).")
drop('PAN2498',"Duplicate of live BX831 and BX530 (in someone thought to have IBS, unintentional weight loss is a red flag) and PAN8448 in this batch. Distractors were also straw men ('IBS does not cause abdominal pain').")
drop('PAN5418',"Duplicate of parked PAQ15871 (older man, incidental microcytic anaemia with low ferritin, varied diet with red meat, no bleeding -> urgent GI investigation) and live HAE046, parked PAQ841/PAQ16599.")

# ---- fixes
fix('PAN1353',"Key was longest: tightened key, lengthened distractors. Added Source and sources. Clinical content correct (Care Act 2014 names financial or material abuse; capacitous adult involved in decisions; disclosure without consent possible where serious risk). No duplicate: live GER019/SAF005/SAF006 are physical abuse/neglect referral scenarios.",{
 'options':{'A':"Tell her that family money matters are outside the GP's professional role",
            'B':"Assess her safety and follow adult safeguarding procedures, involving her",
            'C':"Advise her to change her bank PIN and take no further safeguarding action",
            'D':"Arrange a joint appointment to discuss the concern with her grandson present",
            'E':"Record the conversation in her notes but take no further action at this stage"},
 'why_correct':wc('PAN1353',"Care and support statutory guidance (chapter 14, safeguarding), Department of Health and Social Care, Care Act 2014.")})
fix('PAN1638',"Key was longest: tightened key, lengthened distractors. Added Source (GMC Good medical practice 2024, domain 1: recognise and work within the limits of your competence) and sources. Content correct; no duplicate found (PAN5988 in g04 is escalation of a deteriorating patient, a different learning point).",{
 'options':{'A':"Go ahead carefully and document clearly in the notes that it is a first attempt",
            'B':"Do it as asked, because the registrar who delegated it holds the responsibility",
            'C':"Read the trust's procedure guide on the ward first, then perform it unsupervised",
            'D':"Explain they are untrained and ask for supervision or a competent colleague",
            'E':"Watch an online video of the technique on the ward computer before starting alone"},
 'why_correct':wc('PAN1638',"Good medical practice (domain 1, knowledge, skills and development), General Medical Council, 2024.")})
fix('PAN2492',"Key was far longest (69 vs 15-21 chars): key shortened to 'Fibrotic ileal stricture', E reworded to plain English so it is longest. Added Source and sources. Content correct (NICE NG129 strictures: balloon dilation or surgery). Parked PAQ239 is stricture management (NG tube, fluids), a different learning point.",{
 'options':{'A':"Fibrotic ileal stricture",'E':"Fistula between bowel and bladder"},
 'why_wrong':"B. A perianal abscess causes local pain, swelling and fever rather than obstructive symptoms. C. Toxic megacolon is an acute colonic emergency with systemic toxicity, not recurrent self-settling episodes. D. Gallstone ileus is a rare cause of obstruction in older women and would not recur in this pattern. E. An enterovesical fistula between bowel and bladder causes pneumaturia, faecaluria and recurrent urinary infections.",
 'why_correct':wc('PAN2492',"Crohn's disease: management (NG129), NICE, 2019.")})
fix('PAN7236',"Key was longest: shortened to 'Diagnostic paracentesis'. Added Source and sources. Verified BSG/BASL 2020 (reviewed 2024): diagnostic paracentesis without delay in all cirrhotic patients with ascites on admission; neutrophils >250/mm3 diagnostic. Kept over near-identical PAN6039.",{
 'options':{'C':"Diagnostic paracentesis"},
 'why_correct':wc('PAN7236',"Guidelines on the management of ascites in cirrhosis, British Society of Gastroenterology and British Association for the Study of the Liver, 2020.")})
fix('PAN7144',"Key was longest: lengthened option A. Added Source and sources. Criteria (two of: typical pain, enzymes at least three times normal, imaging) are revised Atlanta; NICE NG104 context agrees enzymes confirm the diagnosis and CT if not raised. Kept over PAN217 (same learning point).",{
 'options':{'A':"Intermittent colicky right loin pain that spreads down into the groin"},
 'why_correct':wc('PAN7144',"Pancreatitis (NG104), NICE, 2018, with the revised Atlanta classification of acute pancreatitis, 2012.")})
fix('PAN5373',"Distractors were implausible fillers (ABO blood group, vaccination record, hearing loss, sports injuries), so the item tested nothing. Replaced A, B, D, E with plausible but wrong sources of information (commercial IgG test, hair analysis, blood-type diet, vaccine history); updated why_wrong and exam_trap. Key unchanged and not longest. Added Source (NHS food intolerance: food and symptom diary; home intolerance tests not recommended).",{
 'options':{'A':"The result of a commercial IgG food-antibody test he bought online",
            'B':"The result of a hair analysis test from a high-street health shop",
            'D':"His ABO blood group, to match him to a 'blood-type' diet",
            'E':"His childhood vaccination record and any reactions to vaccines"},
 'why_wrong':"A. Commercial IgG food-antibody tests reflect normal exposure to foods, not intolerance, and are not recommended. B. Hair analysis has no evidence base for diagnosing food intolerance. D. Blood group has no role in diagnosing food intolerance, and blood-type diets are not evidence based. E. Vaccination history does not help identify a dietary trigger.",
 'exam_trap':"A, A commercial IgG food test - these are widely marketed and give official-looking results, but they are not recommended and do not diagnose intolerance.",
 'why_correct':wc('PAN5373',"Food intolerance, NHS website (nhs.uk), accessed October 2026.")})
fix('PAN2483',"Key was longest: shortened to 'Hypersplenism from portal hypertension' and lengthened A. Pearl replaced: the original claim (platelets plus liver stiffness decide who needs variceal screening) is Baveno criteria, not stated UK guidance; new pearl follows BSG 2018 (thrombocytopenia indicates advanced disease; hypersplenism from portal hypertension). Added Source. Possible overlap with live BX818 (splenomegaly + varices -> portal hypertension), but the finding tested here (thrombocytopenia) differs - clinician may judge.",{
 'options':{'A':"Bone marrow infiltration by a malignancy",'C':"Hypersplenism from portal hypertension"},
 'pearl':"In chronic liver disease a falling platelet count is a useful marker of advanced fibrosis and portal hypertension.",
 'why_correct':wc('PAN2483',"Guidelines on the management of abnormal liver blood tests, British Society of Gastroenterology, 2018.")})
fix('PAN1986',"Clinical update: why_correct/thinking/takeaway said testing is for transfusion before 1991 (start of UK donor HCV screening). Current NHS advice is to test anyone transfused in the UK before 1996; rewritten to 1996. Pearl's '>95% cure' changed to NHS wording (cures most people, 8-12 weeks of tablets). Added Source.",{
 'why_correct':"Hepatitis C is a blood-borne virus that becomes chronic in most people and can remain silent for decades while causing persistently raised transaminases. Current NHS advice is that anyone who had a blood transfusion in the UK before 1996 and has not been tested should be offered a hepatitis C test. Hepatitis C antibody testing with confirmatory RNA testing is appropriate, as curative antiviral treatment is available. Source: Hepatitis C (causes and treatment), NHS website, accessed October 2026.",
 'pearl':"Hepatitis C is now treated with antiviral tablets taken for 8 to 12 weeks, which cure the infection in most people.",
 'thinking':"Persistently raised ALT in a well patient  ↓  Blood transfusion in the UK before 1996  ↓  Blood-borne virus that becomes chronic  ↓  Can be silent for decades  ↓  Test for hepatitis C",
 'takeaway':"Persistently raised liver enzymes in someone transfused in the UK before 1996 should prompt testing for hepatitis C."})
fix('PAN2117',"Key was longest: shortened to 'Liver metastases'. Added Source (NICE NG151 covers colorectal liver metastases and MDT discussion of resection). Content correct; no duplicate found.",{
 'options':{'B':"Liver metastases"},
 'why_correct':wc('PAN2117',"Colorectal cancer (NG151), NICE, 2020.")})
fix('PAN3462',"Format only: added Source and sources. Content correct (albumin half-life about three weeks; PT/INR reflects short half-life clotting factors). Not a repeat of live BX221/BX222, as the time-course contrast is not tested there, though overlap is close - clinician may judge.",{
 'why_correct':wc('PAN3462',"Guidelines on the management of abnormal liver blood tests, British Society of Gastroenterology, 2018.")})
fix('PAN3463',"Key was longest: lengthened A. Added Source (BSG 2018: prolonged PT/INR reflects impaired synthesis but can also be caused by vitamin K deficiency). Content correct.",{
 'options':{'A':"Platelet sequestration within an enlarged spleen"},
 'why_correct':wc('PAN3463',"Guidelines on the management of abnormal liver blood tests, British Society of Gastroenterology, 2018.")})
fix('PAN3853',"Key was longest: shortened key, lengthened D. Added Source. Content correct; live GAS068 is the diagnosis, this tests mechanism; PAN4880 (g08) tests organ of deposition.",{
 'options':{'A':"Excess iron absorption with tissue deposition",'D':"Autoimmune destruction of the small intrahepatic bile ducts"},
 'why_correct':wc('PAN3853',"Haemochromatosis, NICE Clinical Knowledge Summaries; BSG guidelines on HFE haemochromatosis, 2018.")})
fix('PAN4021',"Format only: added Source and sources. Content correct. Live GAS106/BX132/NEU078 test Wilson diagnosis/test; this tests the accumulating metal with a behavioural/handwriting presentation and no KF ring - judged not a repeat, but overlap is close.",{
 'why_correct':wc('PAN4021',"Wilson's disease, NHS website (nhs.uk), accessed October 2026.")})
fix('PAN6036',"Format only: added Source and sources. Content consistent with BSG 2018 (AST more sensitive than ALT in alcohol-related liver disease). No duplicate found.",{
 'why_correct':wc('PAN6036',"Guidelines on the management of abnormal liver blood tests, British Society of Gastroenterology, 2018.")})
fix('PAN9444',"Key was longest: reworded to 'Serum gamma-GT'. Added Source (BSG 2018: GGT indicates whether a raised ALP is hepatic). No duplicate found.",{
 'options':{'B':"Serum gamma-GT"},
 'why_correct':wc('PAN9444',"Guidelines on the management of abnormal liver blood tests, British Society of Gastroenterology, 2018.")})
fix('PAN6797',"Key was far longest (108): shortened. Added Source. Mechanism and lactulose/rifaximin statements correct (NICE TA337 rifaximin to reduce recurrence of overt HE). Not a repeat: other HE items test diagnosis, precipitant or treatment.",{
 'options':{'D':"Slower transit lets colonic bacteria make and absorb more ammonia"},
 'why_correct':wc('PAN6797',"Rifaximin for preventing episodes of overt hepatic encephalopathy (TA337), NICE, 2015.")})
fix('PAN5383',"Format only: added Source and sources. Verified NICE CG61 lists passage of mucus as supportive of IBS; NICE DG11 calprotectin when cancer not suspected. Similar structure to live BX530/BX831 (which feature suggests organic disease) but the keyed feature and contrast (rectal bleeding, IBD) differ - borderline, clinician may judge.",{
 'why_correct':wc('PAN5383',"Irritable bowel syndrome in adults (CG61), NICE, 2008, updated 2017; Faecal calprotectin diagnostic tests (DG11), NICE, 2013.")})

fix('PAN2465',"reinstated: partner g07 PAN5916/PAN7867 dropped. Full recheck: no repeat in live, held (_parked) or kept (other u74 out/final.json) items; parked PAAKT031 mentions incomplete evacuation but keys ulcerative colitis. Content correct (tenesmus = urge with sense of incomplete evacuation, typical of proctitis; NHS UC page lists 'feeling like you need to poo even though your bowel is empty'). Encopresis wording tightened (it is soiling by a child past toilet-training age, not simply involuntary passage of stool). Key is shortest option. Added Source and sources.",{
 'why_wrong':"A. Steatorrhoea is pale, bulky, greasy stool from fat malabsorption. C. Haematochezia means passing fresh blood per rectum, which he has, but it does not describe the urge and sense of incomplete emptying. D. Odynophagia is pain on swallowing. E. Encopresis is repeated soiling by a child beyond toilet-training age, often from overflow around constipated stool.",
 'why_correct':wc('PAN2465',"Ulcerative colitis (symptoms), NHS website (nhs.uk), accessed October 2026.")})
fix('PAN6440',"reinstated: partner g07 PAN5916/PAN7867 dropped. Full recheck: no repeat in live, held or kept items (live GAS060/DS008/DS009 and parked PAQ15709/PAQ231 test diagnosis or treatment, not the nature/prognosis explanation). Key was longest (96): shortened to 65 chars. Cancer statement softened to 'no long-term increase': a 2022 meta-analysis found excess colorectal cancer detection only in the first year after IBS diagnosis (likely detection of pre-existing cancer), with risk thereafter similar to the general population, and UK Biobank found no increased risk - human reviewer may wish to confirm wording. 'Disorder of gut-brain interaction' matches BSG 2021. Pearl matches NICE CG61 (TCA second line). Added Source and sources.",{
 'options':{'C':"It alters gut function and sensitivity without damaging the bowel"},
 'why_correct':"Irritable bowel syndrome is a disorder of gut-brain interaction, involving altered motility and heightened visceral sensitivity without inflammation, ulceration or structural damage. Once the diagnosis is secure, it is not associated with a long-term increase in the risk of colorectal cancer or inflammatory bowel disease. Explaining this clearly is an important part of management and helps reduce anxiety. Source: British Society of Gastroenterology guidelines on the management of irritable bowel syndrome, BSG, 2021; Irritable bowel syndrome in adults (CG61), NICE, 2008, updated 2017."})

SRC={'PAN1353':['care','care2'],'PAN1638':['gmp'],'PAN2492':['ng129'],'PAN7236':['bsgasc','bsgasc2'],'PAN7144':['ng104'],
 'PAN5373':['food'],'PAN2483':['bsglft'],'PAN1986':['hepc','hepc2'],'PAN2117':['ng151'],'PAN3462':['bsglft'],'PAN3463':['bsglft'],
 'PAN3853':['cksh'],'PAN4021':['wil'],'PAN6036':['bsglft'],'PAN9444':['bsglft'],'PAN6797':['ta337'],'PAN5383':['cg61','dg11'],'PAN2465':['ucnhs'],'PAN6440':['bsgibs','cg61','ibsca1','ibsca2']}
for i,ks in SRC.items(): R[i]['edits']['sources']=[U[k] for k in ks]
for i,r in R.items():
    o=r['edits'].get('options',{}); L=D[i]['correct_letter']
    if L in o: r['edits']['correct_answer']=f"{L}. {o[L]}"
assert set(R)==set(ids),(set(ids)-set(R),set(R)-set(ids))
rev=[R[i] for i in ids]
json.dump(rev,open(B+'rev/C.json','w',encoding='utf-8',newline=''),ensure_ascii=False,indent=1)
out=[]
for q in draft:
    r=R.get(q['id'])
    if not r or r['verdict']=='drop': continue
    q=json.loads(json.dumps(q))
    for k,v in r['edits'].items():
        if k=='options': q['options'].update(v)
        else: q[k]=v
    L=q['correct_letter']; q['correct_answer']=f"{L}. {q['options'][L]}"
    out.append(q)
json.dump(out,open(B+'out/final.json','w',encoding='utf-8',newline=''),ensure_ascii=False,indent=1)
from collections import Counter
print(Counter(r['verdict'] for r in rev),len(out))
for q in out: print(q['id'],{k:len(v) for k,v in q['options'].items()},q['correct_letter'])
