import json, copy
B = '_tools/plab-adaptation/work/u74-g11/'
draft = json.load(open(B + 'draft.json', encoding='utf-8'))
ids = json.load(open(B + 'ctx/check_ids.json', encoding='utf-8'))
D = {q['id']: q for q in draft}

NICE158 = 'https://www.nice.org.uk/guidance/ng158/chapter/Recommendations'
NG35 = 'https://www.nice.org.uk/guidance/ng35/chapter/Recommendations'
HCV = 'https://www.nhs.uk/conditions/hepatitis-c/'

DROP = {
 'PAN4798': 'Repeat: live BX573 (known haemophilia, swollen knee after minor trauma -> haemarthrosis) tests the same fact (haemophilia bleeds into joints). Also mirrors u74-g10 PAN8373 (platelet-type bleeding pattern). Clinically sound otherwise.',
 'PAN7514': 'Repeat: parked PAN801 and PAN981 (both: two-level Wells "DVT unlikely" -> D-dimer first) teach the same scenario and learning point; parked PAQ211 covers the next step. Clinically correct (NICE NG158).',
 'PAN3996': 'Repeat: live HAE015 (Hodgkin lymphoma diagnosed from node biopsy showing Reed-Sternberg owl-eye cells) tests the same fact in reverse (Reed-Sternberg cell <-> classical Hodgkin lymphoma). Borderline (reverse direction); human reviewer may overrule. Content accurate.',
 'PAN4792': 'Repeat: live BX436 (firm non-tender neck node persisting 7 weeks -> investigate to exclude malignancy) and BX540 teach the same point (painless persistent node = suspect cancer). Also overlaps PAN5511/PAN7183 in this batch. Correct key was also the longest option.',
 'PAN5511': 'Repeat: live BX436 and BX540 (persistent painless neck lump in a 58-59 year old -> exclude malignancy) and parked PAN9892 (63-year-old smoker, persistent neck lump -> suspected cancer pathway). Same scenario and learning point.',
 'PAN4342': 'Repeat: live BX433 (macrocytosis with neuropathy -> B12 not folate) and u74-g09 PAN10266 (alcohol excess, megaloblastic anaemia, normal neurology -> folate is the deficiency that rarely causes neurological damage) teach the identical point. Clinically correct.',
 'PAN7183': 'Repeat: parked PAQ14808 (painless rubbery neck node, drenching sweats -> lymphoma) and live BX436; same learning point as PAN4792 in this batch. Also weak: key echoed the stem (drenching night sweats), key was the longest option and C/E distractors were not node features.',
 'PAQ11822': 'Repeat: live BX584 (pre-transfusion bedside identity check) is the same fact; u74-g03 PAN5793 and u74-g10 PAN673 are further adaptations of the same point. Clinically correct.',
 'PAN4002': 'Repeat: u74-g09 PAN10283 (essential thrombocythaemia, which complication -> clots and bleeding) is the same scenario and learning point; u74-g09 PAN10282 also keys "arterial or venous thrombosis" for polycythaemia. Cross-batch: please make sure g09 keeps PAN10283. Key was also the longest option.',
 'PAN7149': 'Repeat: live PAN2433 (day 8 after chemotherapy, phones acute oncology helpline, feels shivery with a temperature -> possible neutropenic sepsis needing hospital assessment now) is the same scenario and learning point; parked PAN4359/PAN2314 and live BX579 also.',
 'PAN7511': 'Repeat: live BX580 (neutropenia markedly increases risk of serious infection) and u74-g10 PAN6400 (severe neutropenia on a DMARD -> serious bacterial or fungal infection) teach the same point.',
 'PAN6665': 'Repeat: parked PAQ16131 is near-identical (sickle cell disease, cold exposure, back and thigh pain, Hb at baseline, reticulocytes as usual -> vaso-occlusive crisis); u74-g09 PAN4006 and live BX889 also. Note: pearl claim that NICE says "avoid pethidine" was not verified.',
 'PAN9505': 'Repeat: u74-g09 PAN2430 (LUQ dragging, large spleen, very high WCC with myelocytes and basophils -> CML) is the same scenario and diagnosis; live HAE011 and parked PAQ848 also. Also overlaps PAN4000 in this batch.',
 'PAN1548': 'Repeat within this batch: same scenario (46-year-old woman, Friday evening, DVT likely, scan not until morning) and learning point (interim therapeutic anticoagulation, scan within 24 hours) as PAN1406, which is kept because it also includes the NICE D-dimer step.',
 'PAN4004': 'Repeat: parked PAQ840 (young woman, DVT, sibling with PE, APC resistance -> factor V Leiden) is the same scenario and learning point; live HAE034 covers the mechanism.',
 'PAN6658': 'Repeat within this batch: PAN4358 teaches the same definition of B symptoms (kept, stronger distractors). Also "Constitutional Horner features" is not a real term and made a non-functioning distractor.',
 'PAN2486': 'Repeat: live GAS026 and ID052 (52/50-year-old man, past injecting drug use, raised ALT -> hepatitis C testing pathway) share the scenario; u74-g13 PAN6646 (injecting equipment = main hepatitis C risk) and u74-g06 PAN1986 (unexplained raised ALT -> test for hepatitis C) teach the same point.',
 'PAN10107': 'Repeat: parked PAQ15267 (animal exposure abroad -> urgent rabies post-exposure risk assessment) and live BX186 (rabies first aid: wash the wound with soap and water) together cover the same scenario and key. Clinically correct.',
 'PAN3781': 'Repeat: u74-g12 PAN3333 is near-identical (untreated stray dog bite in India weeks earlier, throat spasm on drinking, agitation when a fan blows air -> rabies). Cross-batch: make sure g12 keeps PAN3333.',
 'PAN7708': 'Repeat: parked PAQ15267 (returned traveller days after a stray animal injury abroad -> urgent rabies risk assessment) is the same learning point; also overlaps PAN10107 in this batch.',
 'PAN8056': 'Repeat: live PAN1934 is near-identical (9-year-old, neighbour\'s dog bit forearm 45 minutes ago, bleeding stopped -> explore, irrigate and clean the wound); live ID025/ID046 cover tetanus and antibiotics. Also the pearl misstated NICE NG184 for dog bites (NICE does not offer prophylaxis for dog bites that have not drawn blood, and offers it for some bleeding dog bites only when deep, puncture, crush or contaminated).',
 'PAN2324': 'Repeat: live ID046 (puncture cat bite to the hand, not yet infected -> prophylactic co-amoxiclav because of the high infection risk) is the same scenario and learning point. Also why_correct oversimplified NICE NG184 (offer if skin broken AND blood drawn; consider if broken without blood and could be deep).',
 'PAN6369': 'Repeat: live GAS027 is near-identical (6-year-old boy, bloody diarrhoea from E. coli O157 -> haemolytic uraemic syndrome is the complication to monitor); parked PAQ15565, u74-g12 PAN6370 and live DS026 also.',
}

FIX = {}
def fx(i, issues, **edits):
    FIX[i] = (issues, edits)

fx('PAN3729', 'Format only: added Source and sources. Clinical content checked (NICE NG52; NHS NHL). No duplicate found (HAE016 is DLBCL treatment; HAE015 is Hodgkin).',
   why_correct="Non-Hodgkin lymphoma often presents in older adults with painless lymphadenopathy in several separate, non-adjacent regions, because it tends to spread in a non-contiguous way. Hodgkin lymphoma, by contrast, typically spreads in an orderly fashion from one node group to the next. The diagnosis is confirmed by lymph node biopsy. Source: NICE NG52 Non-Hodgkin's lymphoma: diagnosis and management, 2016; NHS non-Hodgkin lymphoma, 2026.",
   sources=['https://www.nice.org.uk/guidance/ng52/chapter/Recommendations', 'https://www.nhs.uk/conditions/non-hodgkin-lymphoma/symptoms/'])

fx('PAN4358', 'Format only: Source and sources added. Definition checked against Cancer Research UK. PAN6658 (same learning point) dropped in favour of this item; no live B-symptom question found.',
   why_correct="B symptoms are unexplained fevers above 38°C, drenching night sweats and unintentional loss of more than a tenth of body weight within six months. They are recorded at staging because they reflect more active disease and influence prognosis and treatment. Night sweats that soak the bedding meet this definition. Source: Cancer Research UK, Non-Hodgkin lymphoma symptoms, 2024.",
   sources=['https://www.cancerresearchuk.org/about-cancer/non-hodgkin-lymphoma/symptoms'])

fx('PAN2424', 'Format only: Source and sources added. Content checked; no amyloidosis question in live/parked/other drafts.',
   why_correct="Amyloidosis causes extracellular deposition of misfolded protein in many organs, giving nephrotic syndrome, restrictive cardiomyopathy with thick ventricular walls, and peripheral and autonomic neuropathy. Macroglossia and bilateral carpal tunnel syndrome are classic clues, particularly in AL amyloidosis linked to a plasma cell disorder. The diagnosis is made on tissue biopsy with Congo red staining. Source: NHS amyloidosis, 2025.",
   sources=['https://www.nhs.uk/conditions/amyloidosis/'])

fx('PAN4001', 'Format only: Source and sources added. Overlap noted but not a repeat: u74-g09 PAN2312 (polycythaemia diagnosis) and PAN10282 (thrombosis risk) test different points.',
   why_correct="A raised red cell mass thickens the blood and slows flow through small vessels, particularly in the brain. This commonly causes headache, a feeling of fullness, dizziness and blurred vision. His persistent erythrocytosis and plethora fit this mechanism. Source: NHS polycythaemia (erythrocytosis), 2025.",
   sources=['https://www.nhs.uk/conditions/polycythaemia/'])

fx('PAN4000', 'Format only: Source and sources added. Different scenario (incidental pre-operative finding, isolated basophilia, no splenomegaly) from live HAE011 and u74-g09 PAN2430 (massive spleen picture), so kept, but reviewer may judge three CML-diagnosis items too many.',
   why_correct="A very high white-cell count with prominent basophilia is characteristic of chronic myeloid leukaemia, a myeloproliferative neoplasm driven by the BCR-ABL1 fusion gene. CML is often found incidentally on a routine blood count in the chronic phase. Reactive causes rarely produce marked basophilia, so this finding should prompt urgent haematology referral. Source: NHS Highland basophilia guideline (NHS Scotland Right Decisions); NHS chronic myeloid leukaemia, 2025.",
   sources=['https://rightdecisions.scot.nhs.uk/tam-treatments-and-medicines-nhs-highland/therapeutic-guidelines/haematology/basophilia-guidelines/', 'https://www.nhs.uk/conditions/chronic-myeloid-leukaemia/tests-and-next-steps/'])

fx('PAN6398', 'Format only: Source and sources added. No duplicate of the cell-function point found (BX580 and u74-g10 PAN5940 test different facts).',
   why_correct="Neutrophils are the most numerous white cells and the main phagocytes of innate immunity. They migrate rapidly to sites of infection and engulf and kill bacteria and fungi. Chemotherapy commonly suppresses them, which is why neutropenia carries a high risk of serious bacterial infection. Source: NICE CG151 Neutropenic sepsis, 2012.",
   sources=['https://www.nice.org.uk/guidance/cg151/chapter/Recommendations'])

fx('PAN6655', 'Format only: Source and sources added. NICE NG35 supports immunoglobulin replacement for hypogammaglobulinaemia with recurrent infections. No duplicate found.',
   why_correct="In myeloma, a single clone of plasma cells expands and produces a paraprotein while normal polyclonal immunoglobulin production falls (immunoparesis). Low levels of functional antibody leave her vulnerable to encapsulated bacteria such as Streptococcus pneumoniae. Treatment-related neutropenia and steroids add to the risk, but antibody deficiency is the central problem. Source: NICE NG35 Myeloma: diagnosis and management, 2016 (updated 2018).",
   sources=[NG35])

fx('PAN10277', 'Format and option length: key shortened (was joint-longest/longest). Content checked; no duplicate found.',
   options={'A': 'Cast nephropathy from filtered monoclonal light chains'},
   why_correct="Free monoclonal light chains are filtered by the glomerulus and combine with Tamm-Horsfall protein in the distal tubule to form obstructing casts; they are also directly toxic to proximal tubular cells. This light-chain cast nephropathy (myeloma kidney) is the commonest cause of renal impairment in myeloma, and his heavy light-chain excretion supports it. Source: NICE NG35 Myeloma: diagnosis and management, 2016 (updated 2018).",
   sources=[NG35])

fx('PAN3992', 'Format and option length: key shortened. Overlaps u74-g10 PAN4790/PAN10276 (which test detects a paraprotein) but tests a different point (what the band is). Kept.',
   options={'C': 'A monoclonal immunoglobulin or its free light chains'},
   why_correct="Myeloma arises from a single clone of plasma cells, so they all secrete an identical immunoglobulin, seen as a narrow spike (M band) on electrophoresis. Some myelomas secrete only free light chains. These proteins can damage the kidneys, which fits her rising creatinine. Source: NICE NG35 Myeloma: diagnosis and management, 2016 (updated 2018).",
   sources=[NG35])

fx('PAN1406', 'Option length fix: key was by far the longest; all five options rewritten to similar length (same content and order). Checked against NICE NG158 1.1.4. Kept over PAN1548 (same scenario). No live/parked duplicate (PAQ1092 tests the first-line scan).',
   options={'A': 'Arrange a CT pulmonary angiogram tonight instead of the leg ultrasound',
            'B': 'Take a D-dimer, start therapeutic anticoagulation, scan within 24 hours',
            'C': 'Give prophylactic-dose LMWH tonight and book the ultrasound within 72 hours',
            'D': 'Start aspirin tonight and arrange the leg ultrasound within the next 24 hours',
            'E': 'Discharge without anticoagulation and book an outpatient scan within a week'},
   why_correct="NICE NG158 advises that when DVT is likely and a proximal leg vein ultrasound result cannot be obtained within 4 hours, a D-dimer test is taken and interim therapeutic anticoagulation started. The ultrasound should then be done with the result available within 24 hours. This protects her from clot propagation and embolism while she waits for imaging. Source: NICE NG158 Venous thromboembolic diseases, 2020 (updated 2023).",
   sources=[NICE158])

fx('PAN1407', 'Format only: Source and sources added. Checked against NICE NG158 (negative scan + positive D-dimer -> stop interim anticoagulation, repeat scan 6 to 8 days). No duplicate found.',
   why_correct="When DVT is likely on the two-level Wells score and the proximal leg vein ultrasound is negative, NICE advises a D-dimer test if not already done. A negative D-dimer allows interim anticoagulation to stop and DVT to be considered unlikely. A positive D-dimer means stopping interim anticoagulation and repeating the proximal ultrasound 6 to 8 days later. Source: NICE NG158 Venous thromboembolic diseases, 2020 (updated 2023).",
   sources=[NICE158])

fx('PAN4507', 'Format plus distractor fix: B (wears glasses) was non-functional; replaced with a copper IUD user (no VTE risk) and key shortened so it is not the longest. Checked against NICE NG89. Related but not a repeat of parked PAN5296 (hip fracture -> prevent VTE).',
   options={'B': 'A 30-year-old woman using a copper intrauterine device',
            'C': 'A 67-year-old man in bed after a hip replacement'},
   why_correct="Major orthopaedic surgery such as hip replacement, followed by reduced mobility, is one of the strongest risk factors for VTE. Surgery causes endothelial injury and a hypercoagulable state, and immobility adds venous stasis, completing Virchow's triad. NICE advises VTE risk assessment and prophylaxis for people having elective hip replacement whose VTE risk outweighs their bleeding risk. Source: NICE NG89 Venous thromboembolism in over 16s, 2018 (updated 2019).",
   why_wrong="A. Hay fever does not increase thrombotic risk. B. A copper intrauterine device contains no hormone and does not raise VTE risk. D. Regular walking reduces venous stasis rather than increasing risk. E. A healed minor skin wound carries no VTE risk.",
   sources=['https://www.nice.org.uk/guidance/ng89/chapter/Recommendations'])

fx('PAN3999', 'Format and option length: key shortened. Source: 2025 British Infection Association UK eosinophilia guideline. Not a repeat of live ID056 (schistosomiasis from haematuria) or u74-g09 PAN3735 (allergic eosinophilia).',
   options={'D': 'Helminth infection'},
   why_correct="Persistent eosinophilia in a returning traveller or migrant should be assumed to be due to a helminth infection until proven otherwise. Tissue-invasive worms such as schistosoma and strongyloides commonly cause it, and freshwater exposure in Africa is a classic risk for schistosomiasis. Stool microscopy, strongyloides serology and schistosomiasis tests are appropriate next steps. Source: British Infection Association UK guidelines on eosinophilia in returning travellers and migrants, 2025.",
   sources=['https://research.lstmed.ac.uk/en/publications/uk-guidelines-for-the-investigation-and-management-of-eosinophili-5/', 'https://researchonline.lshtm.ac.uk/id/eprint/3652'])

fx('PAN1739', 'Option length fix: key was the longest by far; all options rewritten to similar length (same order and meaning). Clinical correction: why_correct cited "low-severity CAP 5 days" from NG138, which has been replaced by NICE NG250 (2025); a 76-year-old has CRB65 of at least 1, so the severity label was unsafe. Now states the NG250 rule (stop after 5 days for adults with CAP unless microbiology or clinical instability suggests otherwise). Key does not hinge on the number.',
   options={'A': 'Stop the amoxicillin today because his symptoms have fully resolved',
            'B': 'Extend the amoxicillin to a three-week course to prevent relapse',
            'C': 'Double the amoxicillin dose to make sure the response is sustained',
            'D': 'Add clarithromycin to the amoxicillin to protect against resistance',
            'E': 'Complete the recommended course for the diagnosis, then stop'},
   why_correct="Antimicrobial stewardship means reviewing every antibiotic prescription against the diagnosis and the clinical response. For adults with community-acquired pneumonia, NICE advises stopping antibiotics after 5 days unless microbiology suggests a longer course is needed or the person is not clinically stable, so he should complete the course and then stop. Improvement does not justify stopping early, extending, escalating or adding agents. Source: NICE NG250 Pneumonia in adults: diagnosis and management, 2025.",
   why_wrong="A. Improvement alone does not mean the infection is fully treated; course length depends on the diagnosis. B. Unnecessarily long courses increase side effects, C. difficile risk and resistance. C. Increasing the dose has no benefit when he is responding. D. Adding a second antibiotic without an indication is poor stewardship.",
   exam_trap="A, Stop the amoxicillin today because his symptoms have fully resolved — it sounds like good stewardship, but stopping depends on the recommended course for the diagnosis, not on feeling better.",
   sources=['https://www.nice.org.uk/guidance/ng250/chapter/Recommendations'])

fx('PAN2325', 'Option length fix: key shortened (was longest and included the teaching point). why_correct aligned with NICE NG184 (offer prophylaxis for a human bite that has broken the skin and drawn blood). No duplicate found.',
   options={'E': 'Human bite wound over the knuckle'},
   why_correct="A wound over a knuckle after punching someone in the mouth is a fight bite (a human bite injury) until proven otherwise. The tooth can penetrate the extensor tendon and metacarpophalangeal joint capsule when the fist is clenched, carrying oral bacteria deep into the joint. These injuries need exploration, irrigation, an X-ray, prophylactic co-amoxiclav and often hand surgery review. Source: NICE NG184 Human and animal bites: antimicrobial prescribing, 2020.",
   exam_trap="B, Boxer's fracture of the fifth metacarpal — a punch injury immediately suggests a fracture, but a skin wound over the knuckle after hitting a face points to a contaminated human bite with risk of joint and tendon infection.",
   sources=['https://www.nice.org.uk/guidance/ng184/chapter/Recommendations'])

fx('PAN427', 'Option length fix: key shortened. Source: NICE NG60 (offer and recommend testing when HIV is in the differential; emphasise confidentiality). The "no lengthy pre-test counselling" point comes from BHIVA/BASHH/BIA 2020; I could not open the full text, so the reviewer should confirm that wording. No duplicate (live DR034 tests the indication, not the consent process).',
   options={'C': 'Explain why testing is advised and offer it with her verbal consent'},
   why_correct="HIV testing should be offered and recommended whenever HIV is part of the differential diagnosis, whatever the person's perceived risk group. Oral candidiasis, shingles and seborrhoeic dermatitis are HIV indicator conditions. Any clinician can offer the test after a brief explanation and verbal consent, and the result is confidential. Source: NICE NG60 HIV testing: increasing uptake, 2016 (updated 2025); BHIVA/BASHH/BIA adult HIV testing guidelines, 2020.",
   sources=['https://www.nice.org.uk/guidance/ng60/chapter/Recommendations', 'https://discovery-pp.ucl.ac.uk/id/eprint/10120450'])

fx('PAN5926', 'Stem format fix (question was not separated or ending in "?") and key shortened. Checked against NICE PH43 (antibody-positive samples tested for HCV RNA). Not a repeat: live GAS026/ID052 test the step after a positive antibody.',
   stem="At a drug and alcohol service, a 44-year-old woman who injected heroin in her twenties asks to be checked for blood-borne infections. She has never been tested before and is currently well. Her keyworker arranges a blood sample.\n\nWhich test should be sent first to find out whether she has ever been infected with hepatitis C?",
   options={'A': 'HCV antibody serology'},
   why_correct="Antibody testing for hepatitis C is the standard first-line test for people at risk, such as those who have ever injected drugs. A positive antibody shows exposure at some point but cannot distinguish cleared from ongoing infection. NICE advises that laboratories automatically test antibody-positive samples for HCV RNA to confirm current infection. Source: NICE PH43 Hepatitis B and C testing, 2012 (updated 2013).",
   sources=['https://www.nice.org.uk/guidance/ph43/chapter/Recommendations', HCV])

fx('PAN10115', 'Option length fix: key shortened. Content checked against NHS (antiviral tablets for 8 to 12 weeks cure most people). No duplicate found.',
   options={'A': 'Oral antiviral tablets cure most people with this infection'},
   why_correct="Chronic hepatitis C is now curable in most people with a course of oral direct-acting antiviral tablets, usually taken for 8 to 12 weeks. Cure is shown by having no detectable virus in the blood after treatment. He should be referred to the hepatitis C treatment service, and being in prison does not prevent this. Source: NHS hepatitis C treatment, 2025.",
   sources=[HCV, 'https://www.nhs.uk/conditions/hepatitis-c/treatment/'])

fx('PAN4852', 'Format only: Source and sources added. Fact confirmed (no hepatitis C vaccine). No duplicate found.',
   why_correct="There is no vaccine against hepatitis C. Protection for healthcare workers relies on standard infection-control precautions, safe sharps handling and prompt reporting and follow-up of any exposure. The hepatitis B vaccine does not protect against hepatitis C. Source: NHS England hepatitis C factsheet; NHS hepatitis C, 2025.",
   sources=['https://england.nhs.uk/wp-content/uploads/2014/11/Hepatitis-C-Factsheet.pdf', HCV])

fx('PAN4853', 'Format plus accuracy: why_correct now notes that the needle-sharing risk depends on the friend having a detectable viral load and adds urgent PEP assessment if within 72 hours (NHS). No duplicate found (u74-g13 PAN6646 is hepatitis C).',
   why_correct="HIV is transmitted through blood, semen, vaginal fluids and breast milk. Sharing a needle and syringe puts blood directly into the bloodstream and is a recognised route of transmission when the source has a detectable viral load. He should be assessed urgently for post-exposure prophylaxis if the sharing was within 72 hours, and offered HIV, hepatitis B and hepatitis C testing and needle exchange advice. Source: NHS HIV and AIDS: causes and prevention, 2025.",
   sources=['https://www.nhs.uk/conditions/hiv-and-aids/causes/', 'https://www.nhs.uk/conditions/hiv-and-aids/prevention/'])

fx('PAN5742', 'Option length fix: B and D were tied longest (Hepatitis B/Hepatitis C); A lengthened to Chlamydia trachomatis. Stem tidied (awkward clause). Content checked against NHS hepatitis B (6-in-1 vaccine, adults at risk vaccinated). No duplicate found.',
   stem="A 30-year-old man attends a sexual health clinic after condomless sex with a new partner. While his screening samples are taken, he asks whether any of the infections being tested for can be prevented by a vaccine. He is particularly worried about one that can be passed on through blood as well as through sex.\n\nWhich infection on the list can he be vaccinated against?",
   options={'A': 'Chlamydia trachomatis'},
   why_correct="Hepatitis B is spread by blood, sexual contact and from mother to baby, and an effective vaccine is available. Sexual health clinics offer hepatitis B vaccination to people at increased risk. None of the other listed infections has a vaccine that prevents it. Source: NHS hepatitis B, 2025.",
   sources=['https://www.nhs.uk/conditions/hepatitis-b/'])

fx('PAN3787', 'Format plus minor correction: pearl named diloxanide furoate (supply limited in the UK); now says "a luminal amoebicide such as diloxanide furoate or paromomycin". BNF page returned 403; treatment checked via GPnotebook summary citing the BNF, so reviewer may wish to confirm. Not a repeat: live GF021 is amoebic liver abscess treatment; parked PAQ15270 is the term dysentery.',
   why_correct="Entamoeba histolytica invades the colonic mucosa, producing amoebic dysentery with gradual-onset abdominal pain and bloody, mucoid diarrhoea. It is acquired through faecally contaminated food or water, typically by travellers to areas with poor sanitation. It can also spread to cause an amoebic liver abscess. Source: NHS dysentery, 2025; BNF amoebicides (antiprotozoal drugs), 2025.",
   pearl="Invasive amoebiasis is treated with metronidazole followed by a luminal amoebicide, such as diloxanide furoate or paromomycin, to clear cysts from the bowel.",
   sources=['https://www.nhs.uk/conditions/dysentery/', 'https://gpnotebook.com/en-GB/pages/infectious-disease/amoebic-liver-abscess/treatment-of-amoebiasis'])

fx('PAN3793', 'Format only: Source and sources added. NHS confirms staying off nursery until 48 hours after diarrhoea stops; UKHSA confirms S. sonnei is endemic and the commonest UK species. Not a repeat of parked PAQ15270 (tests the term dysentery).',
   why_correct="Shigella causes bacillary dysentery with fever, cramping pain, tenesmus and frequent small-volume stools containing blood and mucus. It has a very low infective dose, so it spreads easily from person to person in nurseries and households. Shigella sonnei is the commonest species in the UK, and shigellosis is notifiable. Source: UKHSA Shigella guidance, data and analysis, 2019; NHS dysentery, 2025.",
   sources=['https://www.gov.uk/government/collections/shigella-guidance-data-and-analysis', 'https://www.nhs.uk/conditions/dysentery/'])

rev, final = [], []
for i in ids:
    if i in DROP:
        rev.append({'id': i, 'verdict': 'drop', 'issues': DROP[i], 'edits': {}})
        continue
    issues, edits = FIX[i]
    rev.append({'id': i, 'verdict': 'fix', 'issues': issues, 'edits': edits})
assert len(rev) == len(ids) and set(DROP) | set(FIX) == set(ids) and not (set(DROP) & set(FIX))

for q in draft:
    if q['id'] not in FIX: continue
    q = copy.deepcopy(q)
    for k, v in FIX[q['id']][1].items():
        if k == 'options':
            q['options'].update(v)
        else:
            q[k] = v
    L = q['correct_letter']
    q['correct_answer'] = f"{L}. {q['options'][L]}"
    final.append(q)
# record correct_answer in edits where options changed
for r in rev:
    if r['verdict'] == 'fix' and 'options' in r['edits']:
        q = next(x for x in final if x['id'] == r['id'])
        r['edits']['correct_answer'] = q['correct_answer']
json.dump(rev, open(B + 'rev/C.json', 'w', encoding='utf-8', newline='\n'), ensure_ascii=False, indent=1)
json.dump(final, open(B + 'out/final.json', 'w', encoding='utf-8', newline='\n'), ensure_ascii=False, indent=1)
print(len(rev), 'reviewed;', len(DROP), 'drop;', len(final), 'final')
for q in final:
    o = q['options']; print(q['id'], q['correct_letter'], {k: len(v) for k, v in o.items()})
