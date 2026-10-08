import json
B='_tools/plab-adaptation/work/u74-g10/'
NG12='https://www.nice.org.uk/guidance/ng12/chapter/Recommendations-organised-by-site-of-cancer'
NG35='https://www.nice.org.uk/guidance/ng35/chapter/Recommendations'
CG151='https://www.nice.org.uk/guidance/cg151/chapter/Recommendations'
SMPC='https://www.medicines.org.uk/emc/product/1575/smpc'
IRON='https://www.nhs.uk/conditions/vitamins-and-minerals/iron/'
HAEM='https://www.nhs.uk/conditions/haemophilia/'
SCD='https://www.nhs.uk/conditions/sickle-cell-disease/treatment/'
GB7='https://www.gov.uk/government/publications/immunisation-of-individuals-with-underlying-medical-conditions-the-green-book-chapter-7'
SDCEP='https://www.sdcep.org.uk/published-guidance/anticoagulants-and-antiplatelets/'
HNY='https://hnyppr.org.uk/web/north-yorkshire/w/normocytic-anaemia-pathway-harrogate'
BSHADMIN='https://b-s-h.org.uk/guidelines/guidelines/administration-of-blood-components'
NHSBT='https://www.nhs.uk/conditions/blood-transfusion/'
DHTR='https://www.england.nhs.uk/wp-content/uploads/2020/09/clinical-commissioning-policy-rituximab-eculizumab-prevention-management-delayed-haemolytic-transfusion-reactions-hyperhaemolysis.pdf'
HS='https://www.gloshospitals.nhs.uk/documents/1896/BCSH_Guidelines_for_Hereditary_Spherocytosis.pdf'
VWD='https://www.nhs.uk/conditions/von-willebrand-disease/'
ANTIC='https://www.nhs.uk/conditions/anticoagulants/side-effects/'
JAUN='https://www.nhs.uk/conditions/jaundice/'
AML='https://www.nhs.uk/conditions/acute-myeloid-leukaemia/'
MYEL='https://www.nhs.uk/conditions/multiple-myeloma/'
ITP='https://sonar.ch/global/documents/92274'

DROP={
 'PAN7039':"Repeat: PAN1356 (u74-g09, checked) uses the same scenario (adult with microcytic anaemia) and the same fact (serum ferritin reflects iron stores; low ferritin = iron deficiency), only asked in the reverse direction. If the g09 checker drops PAN1356, this item could be reinstated with a source line added.",
 'PAN7181':"Repeat: parked PAQ16462 (antenatal booking, microcytosis, normal ferritin and raised red cell count -> thalassaemia trait) tests the same iron deficiency vs thalassaemia trait discrimination in the same antenatal booking setting; PAQ851 (parked) also covers thal trait at booking.",
 'PAN9413':"Repeat: parked PAN4659 (patient on warfarin, which measurement guides dose -> INR) is the same learning point with the same distractor set (APTT, anti-Xa, platelets); PAN4799 (parked) also keys INR for warfarin.",
 'PAN2225':"Repeat: PAN6292 (u74-g08, checked) has the same scenario (chronic pancreatitis, pale greasy hard-to-flush stools, easy bruising) and the same learning point (fat malabsorption -> fat-soluble vitamin, including K, deficiency). Clinical content of this draft was otherwise correct.",
 'PAN703':"Intra-batch repeat of PAN8368 (same batch): both use platelets 11 x10^9/L with oral blood blisters and teach that severe thrombocytopenia with wet purpura carries a high risk of serious haemorrhage. PAN8368 kept because its key is distinct from parked PAN551 (which keys 'severe thrombocytopenia').",
 'PAN673':"Repeat: live BX584 (bedside identity check against the unit before transfusion) tests the same fact; also PAN5793 (u74-g03, checked) and PAQ11822 (u74-g11, checked) are the same scenario and learning point.",
 'PAN7598':"Repeat: parked PAN800 (also a 45-year-old lorry driver, Wells 'DVT likely' -> proximal leg vein ultrasound), PAAKT103 and PAQ15119 (parked), and live CR023 all key proximal leg vein ultrasound when DVT is likely.",
 'PAN7713':"Repeat: parked PAQ14762 (oestrogen-containing pill, unilateral swollen tender calf -> DVT, with the same distractors Baker's cyst, cellulitis, muscle strain) and PAQ16204 (parked); live BX143 and BX920 also key DVT for a unilateral swollen calf. HRT vs COCP is not a sufficient change of scenario. Borderline - clinician may disagree.",
 'PAN3734':"Repeat: live GF042 (66-year-old man, septic shock from cholangitis, oozing cannula sites, low platelets/fibrinogen, prolonged PT/APTT, raised D-dimer -> DIC) is the same scenario and teaches sepsis as the DIC trigger; parked PAAKT108 likewise. This draft also had implausible distractors (osteoarthritis, stable COPD, well-controlled diabetes).",
 'PAN7304':"Repeat: parked PAQ16462 (mild anaemia, markedly low MCV, normal ferritin, Mediterranean heritage, affected relative -> thalassaemia trait) is the same scenario and learning point (TF-IDF 0.66).",
 'PAN9889':"Repeat: live BX888 (Classifying anaemia by MCV) tests the same learning point (classify anaemia by red cell size/MCV); a different category keyed does not change the fact tested (README one-line BX rule). Borderline.",
 'PAN549':"Repeat: live BX888 (Classifying anaemia by MCV, same question format 'into which category') tests the same learning point; also near-duplicate of PAN9889 in this batch. Borderline.",
 'PAN7851':"Repeat: live HAE031 (macrocytic anaemia, low folate, normal B12, no neurology -> folate deficiency, treat with folic acid) tests the same learning point; a different patient group (pregnancy vs methotrexate) does not change the fact tested. Borderline. Note also: this draft's methotrexate setting invites folinic acid confusion.",
 'PAN1555':"Repeat: parked PAQ16129 (anaemia, unconjugated bilirubin, raised reticulocytes, normal liver enzymes -> 'increased red-cell destruction') is the same scenario structure and the same keyed answer; PAQ15173 (parked) also.",
 'PAN2438':"Repeat: live CR058 (anaemia with breakdown markers and high reticulocytes -> appropriate marrow response suggesting haemolysis) tests the same fact in reverse; PAN3738 (another u74 batch) also covers reticulocyte response.",
 'PAN6388':"Repeat: parked PAQ15173 (raised unconjugated bilirubin, raised LDH, low haptoglobin, raised reticulocytes -> haemolysis) tests the same set of haemolysis markers in reverse.",
 'PAN10270':"Repeat: live HAE041 and ACU049 (fever on chemotherapy -> immediate IV broad-spectrum antibiotics without waiting) and parked PAN6019 teach the same management; 'no focus found' is not a new learning point.",
 'PAN4368':"Repeat: live HAE029 (minutes into red cells: fever, rigors, loin/back pain, hypotension, haematuria -> acute haemolytic reaction) is the same scenario and learning point; BX581 (live) also.",
 'PAN1473':"Repeat: parked PAQ850 (older woman admitted with community-acquired pneumonia, expected to be in bed -> document VTE and bleeding risk, LMWH if VTE risk outweighs bleeding) is the same scenario and key; PAN230 (parked) also. The draft also uses a first name (Margaret).",
 'PAN4790':"Intra-batch repeat of PAN10276 (same key: serum protein electrophoresis to detect a paraprotein in suspected myeloma). PAN10276 kept. Its vignette (72M, back pain, high calcium, rising creatinine) also mirrors PAN3992 (u74-g11).",
 'PAN6400':"Repeat: live BX580 (asymptomatic neutropenia on routine bloods -> markedly increased risk of serious infection) is the same learning point; PAN7511 (u74-g11, checked) also keys severe bacterial infection for severe neutropenia.",
 'PAN9450':"Repeat: PAN3934 (u74-g09, checked; iron deficiency -> film shows small, pale microcytic hypochromic cells) is the same learning point and setting (iron loss in a young woman). The draft also uses a first name (Priya).",
 'PAN10087':"Repeat: parked PAQ16130 (man prescribed nitrofurantoin for UTI, cola-coloured urine and jaundice within days -> G6PD deficiency / oxidative haemolysis) is the same scenario and learning point.",
}

FIX={}
FIX['PAN9414']=dict(
 options={'C':'Plasma fibrinogen concentration by the Clauss method','D':'Activated partial thromboplastin time ratio'},
 why_correct="Unfractionated heparin potentiates antithrombin, mainly inhibiting thrombin and factor Xa, which prolongs the APTT. Its effect varies widely between patients, so an infusion is titrated against the APTT ratio, rechecked a few hours after each rate change. It is chosen here because it is short-acting, reversible with protamine and not dependent on renal clearance like low molecular weight heparin. Source: Heparin sodium Summary of Product Characteristics, eMC (MHRA-licensed), 2024.",
 sources=[SMPC])
FIX['PAN10276']=dict(
 why_correct="Back pain, recurrent infection, anaemia and a high ESR in an older man raise the possibility of myeloma. Serum protein electrophoresis separates serum proteins and shows a discrete monoclonal band when a plasma cell clone is producing paraprotein. NICE advises sending it with a serum free light chain assay (or a urine Bence Jones test if free light chains are not available) for people aged 60 and over with persistent bone pain. Source: NICE NG12 Suspected cancer: recognition and referral, 2015 (amended 2025); NICE NG35 Myeloma, 2016.",
 pearl="Serum free light chains (or urine Bence Jones protein) can detect light-chain-only myeloma when serum electrophoresis looks normal.",
 notes="Checker fix: the earlier 'reviewer fix' was out of date. NG12 (amended 2025) now recommends serum protein electrophoresis plus serum free light chains in primary care, with urine Bence Jones only if free light chain testing is unavailable. why_correct and pearl corrected.",
 sources=[NG12,NG35,MYEL])
FIX['PAN1359']=dict(
 options={'D':'Send a routine referral letter to the haematology outpatient clinic'},
 why_correct="A very low platelet count with spontaneous gum bleeding, bruising and petechiae means he is at real risk of serious haemorrhage. He needs same-day assessment to look for significant bleeding and to find the cause, such as immune thrombocytopenia, marrow failure or acute leukaemia, with urgent haematology input. Waiting or routine referral is unsafe. Source: NICE NG12 Suspected cancer: recognition and referral, 2015 (amended 2025); International consensus report on immune thrombocytopenia, 2019.",
 sources=[NG12,ITP])
FIX['PAN7712']=dict(
 why_correct="Aspirin irreversibly acetylates platelet cyclooxygenase, blocking thromboxane A2 production and reducing platelet aggregation for the lifespan of the platelet. This causes easy bruising and prolonged bleeding from minor cuts despite a normal platelet count and normal clotting tests. After a stent, aspirin is usually continued, and UK dental guidance advises managing bleeding with local measures rather than stopping it. Source: SDCEP Management of Dental Patients Taking Anticoagulants or Antiplatelet Drugs, 2022.",
 sources=[SDCEP])
FIX['PAN8370']=dict(
 why_correct="A lifelong pattern of excessive bleeding after surgery and dental work with a normal platelet count means the number of platelets is adequate, so the fault must lie in how platelets work or in the coagulation cascade. Examples include von Willebrand disease, inherited platelet function disorders and mild haemophilia. A clotting screen with APTT and PT, and von Willebrand studies, would be the next steps. Source: NHS, Von Willebrand disease and Haemophilia, 2024.",
 sources=[VWD,HAEM])
FIX['PAN3720']=dict(
 why_correct="Haemophilia B, also called Christmas disease, is an X-linked recessive deficiency of factor IX. Like haemophilia A, it affects males, is carried by females and causes deep muscle and joint bleeds with a prolonged APTT. The specific factor assay showing low factor IX with normal factor VIII makes the diagnosis. Source: NHS, Haemophilia, 2024.",
 sources=[HAEM])
FIX['PAN4367']=dict(
 why_correct="In acute haemorrhage, whole blood is lost, so the remaining red cells are normal in size and haemoglobin content. Once fluid shifts and resuscitation dilute the circulating volume, the haemoglobin falls, revealing a normocytic, normochromic anaemia. Iron stores are not yet depleted, so microcytosis has not had time to develop. Source: Normocytic anaemia primary care pathway, Humber and North Yorkshire NHS, 2023.",
 notes="Checker: no national UK guideline states this textbook point directly; the source line names a regional NHS pathway that lists acute blood loss as a normocytic cause. Clinician may prefer a textbook citation.",
 sources=[HNY])
FIX['PAN6669']=dict(
 options={'A':'To prevent an ABO-incompatible transfusion causing acute haemolysis'},
 why_correct="Recipients have naturally occurring anti-A and anti-B antibodies, so red cells of an incompatible ABO group are destroyed rapidly by intravascular haemolysis, which can cause shock, DIC, renal failure and death. Accurate grouping, careful sample labelling and bedside identity checks exist to stop the wrong blood reaching the wrong patient. SHOT reports repeatedly show that most such incidents arise from identification errors rather than laboratory faults. Source: BSH Guideline on the administration of blood components, 2017; SHOT.",
 sources=[BSHADMIN,NHSBT])
FIX['PAN1360']=dict(
 options={'A':'Same-day assessment by the haematology team for suspected acute leukaemia'},
 why_correct="Fatigue, infections and purpura together with anaemia, thrombocytopenia and neutropenia suggest bone marrow failure, and acute leukaemia is the key concern. NICE advises a very urgent full blood count for these symptoms so that leukaemia is found quickly; once the count shows unexplained pancytopenia, patients can deteriorate within days from sepsis or bleeding. Same-day discussion with haematology allows an urgent blood film, further tests and treatment to start without delay. Source: NICE NG12 Suspected cancer: recognition and referral, 2015 (amended 2025).",
 notes="Checker fix: the draft said NG12 advises immediate specialist assessment for suspected acute leukaemia; in NG12 that recommendation applies to children and young people only (1.10.2). For adults NG12 gives a very urgent FBC (1.10.1); same-day haematology assessment for symptomatic pancytopenia is standard UK practice rather than an explicit NG12 recommendation. why_correct reworded. Key option shortened (was longest).",
 sources=[NG12,AML])
FIX['PAN8368']=dict(
 options={'B':'Venous thromboembolism related to immobility in hospital'},
 why_correct="A platelet count this low, with wet purpura (blood blisters in the mouth), shows that primary haemostasis is failing. The main danger is spontaneous serious bleeding, such as gastrointestinal or intracranial haemorrhage. Assessment therefore centres on bleeding severity, looking for a cause and urgent haematology input. Source: International consensus report on immune thrombocytopenia, 2019; NICE NG12 Suspected cancer: recognition and referral, 2015 (amended 2025).",
 notes="Checker: kept in preference to PAN703 (intra-batch repeat, dropped). Distractors C-E (tumour lysis, hyperkalaemia, hypercalcaemia) are weak but unchanged from the source; B lengthened so the key is not longest.",
 sources=[ITP,NG12])
FIX['PAN8373']=dict(
 options={'C':'Skin and mucosal bleeding such as petechiae and gum bleeding'},
 why_correct="Platelets form the initial plug at sites of small vessel injury, so their deficiency shows up in the skin and mucous membranes. Typical signs are petechiae, purpura, nosebleeds, gum bleeding and heavy menstrual bleeding. In this man, with normal clotting factors, this superficial pattern is what to expect. Source: NHS, Haemophilia and Von Willebrand disease, 2024.",
 notes="Checker: mirror image of PAN4798 (u74-g11, checked: haemophilia -> deep joint and muscle bleeds, contrasted with platelet disorders). Kept because the keyed fact differs, but the human reviewer should decide whether both mirror items are wanted.",
 sources=[HAEM,VWD])
FIX['PAN8753']=dict(
 why_correct="A normal platelet count shows that the problem is not low platelet numbers. In a woman with atrial fibrillation who has just started a new tablet, the likeliest explanation is an anticoagulant impairing coagulation, and bruising is a recognised side effect. Her medicines should be reviewed and clotting tests and renal function checked where relevant. Source: NHS, Anticoagulant medicines: side effects, 2023.",
 sources=[ANTIC])
FIX['PAN5450']=dict(
 why_correct="In acute leukaemia, immature blast cells replace the normal marrow, which causes the cytopenias, and they often spill into the blood. Finding blasts on the film in a patient with pancytopenia and fever strongly supports the diagnosis and needs immediate haematology referral. Bone marrow examination then confirms and classifies the leukaemia. Source: NHS, Acute myeloid leukaemia, 2023; NICE NG12 Suspected cancer: recognition and referral, 2015 (amended 2025).",
 sources=[AML,NG12])
FIX['PAN1831']=dict(
 why_correct="Red meat contains haem iron, which is absorbed much more efficiently than the non-haem iron found in plant foods. Including lean beef, lamb or other red meat is therefore an effective way to increase her iron intake. Diet supports, but does not replace, oral iron in established deficiency. Source: NHS, Iron (vitamins and minerals), 2023.",
 pearl="Vitamin C taken with a meal increases the absorption of non-haem iron, while tea and coffee drunk with meals reduce it; UK advice is still to limit red and processed meat overall.",
 sources=[IRON])
FIX['PAN5940']=dict(
 options={'A':'Too few neutrophils to mount a local inflammatory response','B':'Infections in neutropenic patients are mainly viral rather than bacterial'},
 why_correct="Neutrophils produce much of the local response to bacterial infection, including pus, swelling, redness and consolidation. When they are severely depleted, serious infection may cause only fever, without the usual localising signs. That is why fever alone in neutropenia is treated as sepsis, with empirical antibiotics given immediately, even when no source is found. Source: NICE CG151 Neutropenic sepsis, 2012.",
 sources=[CG151])
FIX['PAN5700']=dict(
 why_correct="Repeated sickling within the spleen causes infarction and fibrosis, so most children with sickle cell anaemia lose effective splenic function in early childhood. The spleen is key to clearing encapsulated bacteria such as Streptococcus pneumoniae, Haemophilus influenzae type b and Neisseria meningitidis. This is why lifelong penicillin prophylaxis, extra vaccinations and urgent assessment of fever are advised. Source: UKHSA Green Book chapter 7, 2020; NHS, Sickle cell disease: treatment, 2022.",
 sources=[GB7,SCD])
FIX['PAN3459']=dict(
 why_correct="Haemolysis increases haem breakdown, producing more bilirubin than the liver can conjugate, so the excess is mainly unconjugated. Unconjugated bilirubin is bound to albumin and not water-soluble, so it does not appear in the urine, which is why haemolytic jaundice is called acholuric. Normal liver enzymes support a pre-hepatic cause. Source: BCSH Guidelines for the diagnosis and management of hereditary spherocytosis, 2011 update; NHS, Jaundice, 2024.",
 sources=[HS,JAUN])
FIX['PAN6387']=dict(
 why_correct="In hereditary spherocytosis, abnormal membrane proteins make red cells spherical and fragile, and they are removed early by the spleen. This shortened red cell survival is a haemolytic anaemia, shown here by jaundice, splenomegaly and polychromasia from increased reticulocytes. A negative direct antiglobulin test helps separate it from autoimmune haemolysis. Source: BCSH Guidelines for the diagnosis and management of hereditary spherocytosis, 2011 update.",
 sources=[HS])
FIX['PAN6389']=dict(
 why_correct="A delayed haemolytic transfusion reaction usually occurs days to a few weeks after transfusion, when previously formed red cell antibodies are boosted and destroy the transfused cells. Falling haemoglobin, jaundice and dark urine are typical. A direct antiglobulin test, haemolysis screen and repeat antibody screen are needed, and the transfusion laboratory should be told. Source: NHS England Clinical commissioning policy on delayed haemolytic transfusion reactions, 2020.",
 sources=[DHTR,NHSBT])
FIX['PAN8365']=dict(
 why_correct="Sickle cell disease is an inherited haemoglobin disorder in which HbS polymerises when deoxygenated, causing rigid red cells that block small vessels and are destroyed early. This explains recurrent painful vaso-occlusive crises, triggered by infection, cold and dehydration, alongside chronic haemolysis, and childhood stroke in a sibling is another recognised complication. Haemoglobin electrophoresis or HPLC confirms the diagnosis. Source: NHS, Sickle cell disease, 2022.",
 sources=[SCD])

ids=json.load(open(B+'ctx/check_ids.json'))
draft=json.load(open(B+'draft.json',encoding='utf-8'))
dd={q['id']:q for q in draft}
assert set(DROP)|set(FIX)==set(ids) and not set(DROP)&set(FIX), (set(ids)-set(DROP)-set(FIX), set(DROP)&set(FIX))
rev=[];final=[]
for i in ids:
    if i in DROP:
        rev.append({'id':i,'verdict':'drop','issues':DROP[i],'edits':{}}); continue
    f=dict(FIX[i]); q=json.loads(json.dumps(dd[i]))
    edits={}
    if 'options' in f:
        opts=f.pop('options'); q['options'].update(opts); edits['options']=opts
        L=q['correct_letter']; q['correct_answer']=f"{L}. {q['options'][L]}"
        if L in opts: edits['correct_answer']=q['correct_answer']
    for k,v in f.items():
        if k=='notes': v=(q['notes']+' ' if q['notes'] else '')+v
        q[k]=v; edits[k]=v
    final.append(q)
    issues='Format/validator fix: added a checked UK Source line and sources list'+('; changed option lengths so the key is not the longest' if 'options' in edits else '')+'.'
    if 'notes' in FIX[i]: issues+=' '+FIX[i]['notes']
    rev.append({'id':i,'verdict':'fix','issues':issues,'edits':edits})
order=[q['id'] for q in draft]
final.sort(key=lambda q:order.index(q['id']))
json.dump(rev,open(B+'rev/C.json','w',encoding='utf-8',newline='\n'),ensure_ascii=False,indent=1)
json.dump(final,open(B+'out/final.json','w',encoding='utf-8',newline='\n'),ensure_ascii=False,indent=1)
print(len(rev),sum(r['verdict']=='drop' for r in rev),len(final))
