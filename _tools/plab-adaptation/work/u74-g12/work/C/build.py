import json,copy
B='_tools/plab-adaptation/work/u74-g12/'
draft=json.load(open(B+'draft.json',encoding='utf-8'))
d={q['id']:q for q in draft}
order=[q['id'] for q in draft]
ids=json.load(open(B+'ctx/check_ids.json'))
U=dict(
 ng33='https://www.nice.org.uk/guidance/ng33/chapter/Recommendations',
 ng95='https://www.nice.org.uk/guidance/ng95/chapter/Recommendations',
 ng240='https://www.nice.org.uk/guidance/ng240/chapter/Recommendations',
 ng199='https://www.nice.org.uk/guidance/ng199/chapter/Context',
 gastro='https://cks.nice.org.uk/topics/gastroenteritis/',
 syph='https://cks.nice.org.uk/topics/syphilis/',
 hiv='https://cks.nice.org.uk/topics/hiv-infection-aids/',
 cdiff='https://cks.nice.org.uk/topics/diarrhoea-antibiotic-associated/',
 contra='https://cks.nice.org.uk/topics/contraception-barrier-methods-spermicides/',
 bhiva='https://www.bhiva.org/HIV-testing-guidelines',
 nhsfood='https://www.nhs.uk/conditions/food-poisoning/',
 notif='https://www.gov.uk/guidance/notifiable-diseases-and-causative-organisms-how-to-report',
 rub='https://www.gov.uk/government/publications/rubella-the-green-book-chapter-28',
 nhsrub='https://www.nhs.uk/conditions/rubella/',
 enc='https://www.nhs.uk/conditions/encephalitis/',
 measles='https://www.gov.uk/government/publications/national-measles-guidelines',
 measpdf='https://assets.publishing.service.gov.uk/media/6a69d8c64dda8076771a4313/UKHSA-national-measles-guidelines-version-8.pdf',
 chik='https://www.gov.uk/guidance/chikungunya',
 dengue='https://www.nidirect.gov.uk/conditions/dengue',
 dengue2='https://www.gov.uk/government/collections/dengue-fever-guidance-data-and-analysis',
 crypto='https://www.publichealth.hscni.net/sites/default/files/2025-08/Cryptosporidium%20factsheet.pdf',
 crypto2='https://cms.pembrokeshire.gov.uk/health-and-safety/cryptosporidium-and-swimming-pools',
 pcds='https://www.pcds.org.uk/clinical-guidance/pearly-penile-papules',
 smi='https://www.gov.uk/government/publications/smi-b-37-investigation-of-blood-cultures-for-organisms-other-than-mycobacterium-species',
 malaria='https://www.gov.uk/government/publications/malaria-prevention-guidelines-for-travellers-from-the-uk',
 rice='https://foodstandards.gov.scot/consumers/food-safety/at-home/rice',
)
def src(q,line):
  return q['why_correct'].rstrip()+' Source: '+line
def o(q,**kw):
  op=dict(q['options']); op.update(kw); return op
DROP={
'PAN6370':'Duplicate: same scenario (young child pale with low urine output and petechiae days after STEC bloody diarrhoea) and learning point (HUS = haemolytic anaemia + low platelets + AKI) as live GAS027 and parked PAQ15565; also overlaps u74-g11 PAN6369 (STEC complication = HUS, in g11 check list).',
'PAN1303':'Duplicate: suspected infectious pulmonary TB -> single room with airborne precautions is the learning point of u74-g13 PAN8305 (in g13 check list) and of PAN426 in this batch; the sputum-for-AFB element repeats live BX422. Cross-batch coordination needed: keep only one TB-isolation item across g12/g13 (if the g13 checker drops PAN8305, this item or PAN426 could be revived).',
'PAN426':'Duplicate: near-identical scenario and learning point to u74-g13 PAN8305 (admitted man, months of cough/sweats, upper-lobe cavitation on CXR -> single side room with airborne precautions rather than an open bay); also repeats PAN1303 in this batch. Cross-batch coordination needed: keep only one.',
'PAN6378':'Duplicate: tests the fact that weeks of cough + weight loss + night sweats = pulmonary TB, which is the learning point of parked PAQ14938 and PAQ16519 (same triad -> pulmonary TB) and the premise of live BX422. Stem was also weak ("Which is it?").',
'PAN9776':'Duplicate: asymptomatic newly diagnosed woman with normal CD4 at a sexual health clinic who wants to wait -> treat now regardless of CD4. Same scenario and learning point as parked PAAKT119 and live ID005/ID047.',
'PAN8312':'Duplicate (BX rule): chronic hepatitis B -> liver damage, cirrhosis and HCC is the fact tested by live BX824 (persistent virus predisposing to liver cancer = hepatitis B); u74-g08 PAQ11270 and u74-g13 PAN6208 also cover chronic HBV/HCC. Draft stem also lacked the blank line and question.',
'PAN2700':'Duplicate (BX rule): fever + confusion/behaviour change + focal seizure -> encephalitis is exactly live BX890 (and the premise of NEU075/BX891); distractors (tension headache, Bell palsy, migraine) mirror BX890.',
'PAN3320':'Duplicate: smear-positive pulmonary TB, who to screen first -> household contacts. Same scenario and learning point as live RES004 (household vs office colleagues). The young-child angle is not really tested because the grandson is the only household contact offered.',
'PAN9708':'Duplicate: young woman with dysuria plus new discharge and post-coital bleeding after a new condomless partner -> chlamydia. Same scenario and learning point as parked PAQ16495 (Chlamydia presenting as recurrent UTI: dysuria, discharge change, PCB, new partner, no condoms).',
'PAN6301':'Duplicate: unilateral LMN facial palsy with vesicles in and around the ear plus taste/hearing change -> Ramsay Hunt syndrome is live NEU084 (same scenario and learning point, same distractors incl. Bell palsy and trigeminal neuralgia).',
'PAN776':'Duplicate: suspected bacterial meningitis -> IV ceftriaxone immediately, not delayed for CT/LP. Same scenario and learning point as live NEU036 and ID014; u74-g13 PAN965 also covers the LP-versus-antibiotics angle.',
'PAN756':'Duplicate: stable suspected endocarditis -> multiple blood culture sets before antibiotics to identify the organism. Repeats live BX799 and GF043, parked PAQ603, PAN7983 and PAQ14936; also duplicates PAN3944 in this batch.',
'PAN3944':'Duplicate: stable suspected endocarditis after dental extraction -> three blood culture sets from separate sites before antibiotics. Same scenario and learning point as live GF043 (dental extraction, fevers, three sets) and BX799, parked PAQ603/PAN7983/PAQ14936; also duplicates PAN756 in this batch.',
'PAN3779':'Duplicate: traveller visiting family in Nigeria with severe illness (reduced consciousness, AKI, hypoglycaemia) -> Plasmodium falciparum. Same scenario and learning point as parked PAQ15268 (falciparum malaria after Nigeria) and PAQ16521 (cerebral malaria after Nigeria); live ID021/ID042 cover severe falciparum. Also overlaps PAN6372 in this batch.',
'PAN6372':'Duplicate: near-copy of parked PAQ15268 (man about 10 days after visiting relatives in West Africa, no antimalarials, fever/rigors, mild jaundice -> falciparum malaria is the priority to exclude) with the identical distractor set (typhoid, dengue, hepatitis A, influenza); also parked PAN7707 and live BX185/BX533.',
'PAN4902':'Duplicate: returned traveller from South Asia with step-wise rising fever, headache, abdominal pain, constipation, relative bradycardia and rose spots -> typhoid. Same scenario and learning point as live ID055 (nearly identical clinical details).',
'PAN6366':'Duplicate: acute febrile diarrhoea with cramps soon after travel, NHS 111 call -> infective gastroenteritis. Same scenario and learning point as parked PAQ240; also repeats PAN3030 (cluster -> infective gastroenteritis) in this batch, which is kept.',
'PAN7476':'Duplicate: inpatient with new diarrhoea and suspected C. difficile -> single room, contact precautions, soap-and-water hand washing, sporicidal cleaning. Same scenario and learning point as parked PAQ15368 and PAN1570, and u74-g13 PAN1572 and PAN1022 (both in g13 check list).',
'PAN8619':'Duplicate: fever, cramps and diarrhoea turning bloody a few days after undercooked barbecue chicken -> Campylobacter. Same scenario and learning point as parked PAQ15651 and u74-g11 PAN3790 (pink barbecue chicken -> Campylobacter jejuni).',
'PAN5726':'Duplicate: suspected bacterial meningitis with falling GCS/pupil signs -> defer lumbar puncture, give antibiotics now. Same scenario and learning point as u74-g13 PAN965 (in g13 check list). Draft stem was also negatively phrased ("Which investigation should not be performed").',
'PAN6299':'Duplicate: teenager with hours of fever, leg pains, headache and non-blanching purpura -> meningococcal disease. Same scenario and learning point as live PAN3342 (16-year-old with leg pains and non-blanching spots), live BX420/BX946, parked PAQ15748 and PAN6641.',
'PAN5106':'Duplicate: profuse watery diarrhoea with dry mouth, light-headedness and low urine output -> dehydration. Same learning point and similar scenario to parked PAN8433 and PAN8203 (after holiday abroad -> dehydration with electrolyte disturbance); u74-g07 PAN8907 also covers it.',
}
E={}
q=d['PAN10134']
E['PAN10134']=dict(issues='Key correct (HSV, temporal lobe predilection). Key tied for longest with option C; replaced the HPV distractor with RSV. Added Source line and sources. Distractors remain easy.',
 edits={'options':o(q,C='Respiratory syncytial virus'),'why_wrong':q['why_wrong'].replace('C. HPV causes warts and genital cancers, not encephalitis.','C. Respiratory syncytial virus causes bronchiolitis and respiratory infections, not temporal lobe encephalitis.'),
 'why_correct':src(q,'NHS, Encephalitis, 2023.'),'sources':[U['enc']]})
q=d['PAN2319']
E['PAN2319']=dict(issues='Clinically correct (CRS triad after first-trimester rubella; MMR is live, avoid pregnancy for one month after). Distractors weak but not wrong. Borderline overlap with live BX773 (why rubella exposure in pregnancy matters), which does not test the CRS features, so kept. Added Source line and sources.',
 edits={'why_correct':src(q,'UKHSA, Green Book chapter 28: Rubella, updated 2026.'),'sources':[U['rub'],U['nhsrub']]})
q=d['PAN9163']
E['PAN9163']=dict(issues='Correct and current; no live repeat found. Added Source line and sources.',
 edits={'why_correct':src(q,'NICE CKS, Contraception - barrier methods and spermicides, 2026.'),'sources':[U['contra']]})
q=d['PAN10119']; key='HIV-related immunosuppression greatly increases progression from latent to active tuberculosis'
E['PAN10119']=dict(issues='Key correct (NICE NG33: HIV-positive people with latent TB are at increased risk of active disease). Key was the longest option; shortened. why_wrong D made more precise: ART is started during TB treatment, earliest when CD4 is very low; "usually within the first weeks" was imprecise for higher CD4 counts. Added Source line and sources.',
 edits={'options':o(q,C=key),'correct_answer':'C. '+key,
 'why_wrong':q['why_wrong'].replace('D. Antiretroviral therapy is started during tuberculosis treatment, usually within the first weeks, because it improves survival.','D. Antiretroviral therapy is started during tuberculosis treatment rather than after it, earliest of all when the CD4 count is very low, because this improves survival.'),
 'why_correct':src(q,'NICE NG33 Tuberculosis, 2016 (updated 2024).'),'sources':[U['ng33']]})
q=d['PAN3030']
E['PAN3030']=dict(issues='Correct. Same diagnosis as parked PAQ240 but a different scenario (simultaneous household cluster rather than a single returning traveller), so kept; PAN6366 in this batch dropped as the repeat. Added Source line and sources.',
 edits={'why_correct':src(q,'NICE CKS, Gastroenteritis, 2026.'),'sources':[U['gastro'],U['nhsfood']]})
q=d['PAN3791']
wc=q['why_correct'].replace('Most cases settle with fluids alone, and suspected food poisoning is notifiable to UKHSA.','Most cases settle with fluids alone, and food poisoning is notifiable, so the local health protection team should be informed.')
assert wc!=q['why_correct']
E['PAN3791']=dict(issues='Correct; no live repeat found. Reworded "notifiable to UKHSA" (notification goes to the local health protection team). Added Source line and sources.',
 edits={'why_correct':wc.rstrip()+' Source: NHS, Food poisoning, 2024; UKHSA, Notifiable diseases and causative organisms, 2025.','sources':[U['nhsfood'],U['notif']]})
q=d['PAN6365']; key='Antibiotics kill protective gut bacteria, letting C. difficile multiply and make toxins'
E['PAN6365']=dict(issues='Correct (loss of colonisation resistance; NICE NG199/CKS risk factors incl. clindamycin, cephalosporins, co-amoxiclav, quinolones and PPIs). Key was the longest option; shortened key and lengthened A. No live item tests the mechanism (BX137 tests the risk factor). Added Source line and sources.',
 edits={'options':o(q,B=key,A='Antibiotics directly ulcerate the colonic lining, which then becomes secondarily infected'),'correct_answer':'B. '+key,
 'why_correct':src(q,'NICE NG199 Clostridioides difficile infection: antimicrobial prescribing, 2021; NICE CKS, Diarrhoea - antibiotic associated, 2025.'),'sources':[U['ng199'],U['cdiff']]})
q=d['PAN3785']
wc=q['why_correct'].replace('usually resolve within two to three weeks in immunocompetent people','usually settle within a couple of weeks in immunocompetent people')
assert wc!=q['why_correct']
E['PAN3785']=dict(issues='Correct; no repeat found. Softened illness duration to match UK factsheets (usually about 1-2 weeks). The stem line about chlorine resistance strongly cues the answer but is acceptable. Added Source line and sources.',
 edits={'why_correct':wc.rstrip()+' Source: Public Health Agency Northern Ireland, Cryptosporidium factsheet, 2025.','sources':[U['crypto'],U['crypto2']]})
q=d['PAN9442']
E['PAN9442']=dict(issues='Correct. Live BX826 tests faecal-oral spread of hepatitis A specifically, a different fact, so kept. Added Source line and sources.',
 edits={'why_correct':src(q,'NICE CKS, Gastroenteritis, 2026.'),'sources':[U['gastro']]})
q=d['PAN3772']
E['PAN3772']=dict(issues='Correct; no repeat of miliary TB found. Added Source line and sources.',
 edits={'why_correct':src(q,'NICE NG33 Tuberculosis, 2016 (updated 2024).'),'sources':[U['ng33']]})
q=d['PAN10121']
E['PAN10121']=dict(issues='Correct (NICE NG95 lists facial palsy as a focal presentation of Lyme disease). Live DS111 covers treatment of Lyme facial palsy with the diagnosis given, and erythema migrans items cover the rash, so this diagnosis item is kept. Added Source line and sources.',
 edits={'why_correct':src(q,'NICE NG95 Lyme disease, 2018.'),'sources':[U['ng95']]})
q=d['PAN10147']
E['PAN10147']=dict(issues='Correct. Related to u74-g13 PAN1561 (interpreting a single CoNS-positive set as contamination), which tests result interpretation rather than the purpose of technique; human reviewer may wish to keep only one. Added Source line and sources.',
 edits={'why_correct':src(q,'UK Standards for Microbiology Investigations B 37, Investigation of blood cultures, UKHSA, 2024.'),'sources':[U['smi']]})
op={'A':'Disseminated gonococcal infection','B':'Chikungunya virus infection','C':'Post-infective reactive arthritis','D':'Acute polyarticular gout','E':'Early rheumatoid arthritis'}
E['PAN7412']=dict(issues='Key was the longest option by far (50 vs 20) and read as a category. Rewrote options: key now "Chikungunya virus infection"; septic arthritis replaced by disseminated gonococcal infection (excluded by no new sexual partners or discharge), others reworded. why_correct, why_wrong, thinking and exam_trap updated to match. Checked against UKHSA chikungunya guidance.',
 edits={'options':op,'correct_answer':'B. Chikungunya virus infection',
 'why_correct':'Fever, rash and acute symmetrical polyarthritis of the small joints after many mosquito bites in the Caribbean is typical of chikungunya, an alphavirus spread by Aedes mosquitoes. Joint pain can be severe and may persist for weeks to months. Dengue and Zika can look similar, and malaria should still be excluded when travel has been to an endemic area. Source: UKHSA, Chikungunya guidance, 2025.',
 'why_wrong':'A. Disseminated gonococcal infection causes tenosynovitis, a sparse pustular rash and arthritis after a recent sexual exposure, which he denies. C. Reactive arthritis follows gut or genital infection and is usually an asymmetrical large-joint oligoarthritis. D. Gout rarely starts in several small joints at once and does not cause a widespread rash with fever. E. Rheumatoid arthritis develops more gradually and is not accompanied by an acute febrile rash.',
 'thinking':'Recent Caribbean travel with mosquito bites  ↓  Fever and widespread rash  ↓  Acute symmetrical small-joint polyarthritis  ↓  No gut, genital or sexual trigger  ↓  Chikungunya',
 'exam_trap':'C, Post-infective reactive arthritis — joint symptoms after travel suggest it, but there was no preceding diarrhoea or genital infection and the pattern is symmetrical small-joint disease with a rash.',
 'sources':[U['chik']]})
q=d['PAN10117']
E['PAN10117']=dict(issues='Correct. Live ID002 tests the next test after a negative 4th-generation result in seroconversion, a different learning point, so this recognition item is kept. Added Source line and sources.',
 edits={'why_correct':src(q,'NICE CKS, HIV infection and AIDS, 2025; BHIVA, UK guidelines for HIV testing, 2020.'),'sources':[U['hiv'],U['bhiva']]})
q=d['PAN5729']
E['PAN5729']=dict(issues='Correct (NICE NG240: IV dexamethasone for people over 3 months with suspected bacterial meningitis, continued if pneumococcus). Borderline overlap with live PED036 (Gram-positive diplococci in CSF -> S. pneumoniae) but that is a 2-year-old child; the adult otitis scenario differs, so kept and flagged for the human reviewer. Added Source line and sources.',
 edits={'why_correct':src(q,'NICE NG240 Meningitis (bacterial) and meningococcal disease, 2024.'),'sources':[U['ng240']]})
q=d['PAN1574']
stem=q['stem'].split('\n\n')[0]+'\n\nWhat is the most appropriate immediate action?'
op={'A':'Return her to the shared waiting area wearing a surgical face mask','B':'Keep her in the waiting room until her measles test result returns','C':'Move her promptly to a single room away from other patients','D':'Start oral phenoxymethylpenicillin for presumed scarlet fever','E':'Give a dose of MMR vaccine now to shorten the illness'}
E['PAN1574']=dict(issues='As drafted, every distractor carried a wrong diagnosis, so the item reduced to measles recognition, which repeats live BX380/BX945 and parked PAQ981 (BX rule). Re-angled to the source learning point (suspected measles -> immediate isolation): question now asks the immediate action and all options are actions; key unchanged in substance (single room). why_correct, why_wrong, thinking and exam_trap rewritten. Checked against UKHSA National measles guidelines v8 (July 2026): suspected cases directed to a side room/isolated, notify on clinical suspicion. Live DS092 covers notification, not isolation.',
 edits={'stem':stem,'options':op,'correct_answer':'C. '+op['C'],
 'why_correct':'A prodrome of fever, cough, coryza and conjunctivitis followed by a rash spreading down from the hairline, with Koplik spots, makes measles very likely in this unimmunised adult. Measles spreads by the airborne route and is extremely infectious, so the immediate priority is to move her out of shared areas into a single room with the door closed. Staff should then notify the local health protection team on clinical suspicion and arrange testing, without waiting for confirmation. Source: UKHSA, National measles guidelines version 8, 2026.',
 'why_wrong':'A. A surgical mask does not make it safe for someone with an airborne infection such as measles to share a waiting area with vulnerable patients. B. Waiting for a result before isolating her exposes others, including pregnant women and infants, while she is highly infectious. D. Cough, conjunctivitis and Koplik spots point to measles rather than scarlet fever, so antibiotics are not indicated. E. MMR given to someone already ill with measles does not change the course; post-exposure MMR is for susceptible contacts.',
 'thinking':'Unimmunised adult  ↓  Fever with cough, coryza and conjunctivitis  ↓  Rash spreading down from the hairline with Koplik spots  ↓  Measles is airborne and highly infectious  ↓  Isolate in a single room now, then notify',
 'exam_trap':'A, A mask in the waiting area — masks help with droplet infections, but measles is airborne and she needs a single room away from others.',
 'sources':[U['measles'],U['measpdf']]})
q=d['PAN6373']; key='Exactly where and when he travelled'
E['PAN6373']=dict(issues='Correct. Key was the longest option; shortened to "Exactly where and when he travelled" (why_correct still explains destinations and dates). Distractors are implausible but not wrong. Added Source line and sources.',
 edits={'options':o(q,C=key),'correct_answer':'C. '+key,'why_correct':src(q,'UKHSA, Malaria prevention guidelines for travellers from the UK, 2026.'),'sources':[U['malaria']]})
q=d['PAN6374']
E['PAN6374']=dict(issues='Correct (avoid aspirin and other NSAIDs, use paracetamol). Borderline overlap with live ID026 (dengue diagnosis plus "supportive care, no NSAIDs"); kept because this item tests the drug-safety point on its own in a telephone-advice scenario, but flagged for the human reviewer to decide. Added Source line and sources.',
 edits={'why_correct':src(q,'nidirect (NHS information, Northern Ireland), Dengue, accessed 2026; UKHSA, Dengue fever guidance, 2025.'),'sources':[U['dengue'],U['dengue2']]})
q=d['PAN3788']
E['PAN3788']=dict(issues='Correct; no repeat found. why_wrong D reworded ("E. coli" read as an explanation of key letter E). Added Source line and sources.',
 edits={'why_wrong':q['why_wrong'].replace('D. E. coli O157 has','D. Escherichia coli O157 has'),'why_correct':src(q,'UKHSA, Notifiable diseases and causative organisms, 2025; NHS, Food poisoning, 2024.'),'sources':[U['notif'],U['nhsfood']]})
q=d['PAN3789']
E['PAN3789']=dict(issues='Correct; no repeat found. Added Source line and sources.',
 edits={'why_correct':src(q,'Food Standards Scotland, Rice: storing and reheating safely, accessed 2026.'),'sources':[U['rice'],U['nhsfood']]})
q=d['PAN5415']
E['PAN5415']=dict(issues='Correct (PCDS: normal variant, not infectious, reassure). Key tied for longest with option B; B reworded to "Genital molluscum contagiosum". Added Source line and sources.',
 edits={'options':o(q,B='Genital molluscum contagiosum'),'why_correct':src(q,'Primary Care Dermatology Society, Pearly penile papules, 2021.'),'sources':[U['pcds']]})
q=d['PAN1431']
stem='A 44-year-old man sees his GP about a sore in the groove just behind the head of his penis, which he noticed about a week ago. It is a single ulcer with a clean base and a firm, rubbery edge, and it does not hurt. He has had several new male partners over the past three months.\n\nWhich is the most appropriate next step?'
key='Refer urgently to sexual health for syphilis testing'
E['PAN1431']=dict(issues='Key was the longest option; shortened to "Refer urgently to sexual health for syphilis testing" (why_correct still covers the full STI screen). Clinically correct (CKS: refer suspected syphilis to a sexual health service for lesion testing, serology, treatment and partner notification). Draft vignette nearly mirrored parked PAQ14794 (sore on penile shaft for ten days, new male partner); the learning point differs (referral vs diagnosis) but the vignette was changed to reduce overlap. Added Source line and sources.',
 edits={'stem':stem,'options':o(q,D=key),'correct_answer':'D. '+key,'why_correct':src(q,'NICE CKS, Syphilis, 2025.'),'sources':[U['syph']]})
q=d['PAN3333']
E['PAN3333']=dict(issues='Reinstated: partner g11 PAN3781 dropped. Full check: clinically correct. UKHSA says the incubation is usually 3 to 12 weeks (here seven weeks), early anxiety and fever are followed by swallowing spasm (hydrophobia), and rabies is almost invariably fatal once symptoms appear; aerophobia is a classic sign. Repeat check against live, held and kept items only: live BX186 (wound first aid) and parked PAQ15267 (urgent post-exposure risk assessment) test exposure management, not recognition of clinical rabies; live ID046 is cat-bite antibiotics; g11 PAN3781, PAN7708 and PAN10107 were all dropped. Not a repeat. Option lengths already pass (key "Rabies" is the shortest option), so the options are unchanged. Added Source line and sources.',
 edits={'why_correct':src(q,'UKHSA, Rabies: epidemiology, transmission and prevention, 2025; UKHSA, Rabies risk assessment, post-exposure treatment and management, 2026.'),'sources':['https://www.gov.uk/guidance/rabies-epidemiology-transmission-and-prevention','https://www.gov.uk/government/collections/rabies-risk-assessment-post-exposure-treatment-management','https://www.nhs.uk/conditions/rabies/']})
rev=[];final=[]
for i in ids:
  if i in DROP: rev.append({'id':i,'verdict':'drop','issues':DROP[i],'edits':{}})
  else: rev.append({'id':i,'verdict':'fix','issues':E[i]['issues'],'edits':E[i]['edits']})
assert all((i in DROP)!=(i in E) for i in ids) and len(DROP)+len(E)==len(ids)
for i in order:
  if i in E:
    q=copy.deepcopy(d[i]); q.update(E[i]['edits']); final.append({k:q[k] for k in d[i]})
json.dump(rev,open(B+'rev/C.json','w',encoding='utf-8'),ensure_ascii=False,indent=1)
json.dump(final,open(B+'out/final.json','w',encoding='utf-8'),ensure_ascii=False,indent=1)
print(len(DROP),len(E),len(final))
for q in final:
  print(q['id'],q['correct_letter'],{k:len(v) for k,v in q['options'].items()})
