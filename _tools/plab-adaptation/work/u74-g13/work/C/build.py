import json, copy
B = '_tools/plab-adaptation/work/u74-g13'
draft = json.load(open(B + '/draft.json', encoding='utf-8'))
ids = json.load(open(B + '/ctx/check_ids.json', encoding='utf-8'))
D = {q['id']: q for q in draft}

PEP = "https://www.bashh.org/_userfiles/pages/files/resources/pep2021_2023amendment.pdf"
NG240 = "https://www.nice.org.uk/guidance/ng240/chapter/Recommendations"
GB23 = "https://www.gov.uk/government/publications/mumps-the-green-book-chapter-23"
GB19 = "https://www.gov.uk/government/publications/influenza-the-green-book-chapter-19"
GB6 = "https://www.gov.uk/government/publications/contraindications-and-special-considerations-the-green-book-chapter-6"
MEN = "https://assets.publishing.service.gov.uk/media/69c25a5bbb0dfe55b83e4c2a/UKHSA-meningo-disease-guidelines-dec2025.pdf"
DIP = "https://assets.publishing.service.gov.uk/media/68778311f5eb08157f3637d8/National_diphtheria_guidance_July2025.pdf"
NG33 = "https://www.nice.org.uk/guidance/ng33/chapter/Recommendations"
HCV = "https://www.gov.uk/government/publications/hepatitis-c-in-the-uk/hepatitis-c-in-england-2025"
NIPCM = "https://www.england.nhs.uk/national-infection-prevention-and-control-manual-nipcm-for-england/"
SMI = "https://www.gov.uk/government/publications/smi-b-37-investigation-of-blood-cultures-for-organisms-other-than-mycobacterium-species"
OI = "https://bhiva.org/wp-content/uploads/2024/11/-file-SwhaEzgXmAGOt-hiv_v12_is2_Iss2Press_Text.pdf"
MON = "https://www.bhiva.org/monitoring-guidelines"
HSV = "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11773994/"
SHING = "https://assets.publishing.service.gov.uk/media/68b9c34611b4ded2da19fe85/UKHSA_13423_Shingles_Eligibility_table_poster_2025_02_landscape_WEB.pdf"
FLU = "https://www.gov.uk/government/publications/national-flu-immunisation-programme-plan-2025-to-2026/national-flu-immunisation-programme-2025-to-2026-letter"
MCG = "https://research.lstmed.ac.uk/en/publications/incidence-aetiology-and-sequelae-of-viral-meningitis-in-uk-adults-5/"
UKJSS = "https://bestpractice.bmj.com/topics/en-gb/540/references"

DROPS = {
 "PAN3752": "Duplicate of live BX876 (painful grouped genital vesicles bursting into shallow sores with tender bilateral inguinal nodes -> genital herpes). Same scenario and same fact; one-line BX items count as repeats.",
 "PAN965": "Duplicate of u74-g12 PAN5726 (suspected bacterial meningitis with signs of raised ICP: give IV antibiotics at once, defer lumbar puncture) and overlaps live NEU036 and u74-g12 PAN776 (never delay antibiotics). CROSS-BATCH: if the g12 checker drops PAN5726, reinstate this one instead (it then needs its key shortened: currently the longest option).",
 "PAN1183": "Duplicate of parked PAQ15367 (C. difficile on day 6 of antibiotics for a resolved chest infection: stop antibiotics no longer needed). Same scenario and learning point.",
 "PAN1572": "Duplicate of parked PAQ15368 (suspected C. difficile: side room, gloves/apron, soap-and-water hand washing; alcohol rub and detergent-only cleaning as wrong options) and u74-g12 PAN7476 (same bundle incl. chlorine cleaning).",
 "PAN1022": "Duplicate of parked PAN1570 (suspected C. difficile on a ward, stool result due tomorrow: move to side room now with contact precautions) and parked PAQ15368 / u74-g12 PAN7476.",
 "PAN4718": "Repeat of live DS062 (identify the live vaccine to avoid in an immunosuppressed adult) in the scenario of live DS170 (MMR(V) during high-dose corticosteroids must be deferred). Same learning point: MMR is live and must be postponed under high-dose steroids.",
 "PAN4719": "Duplicate of live DS049 (pregnant woman not immune to rubella asks about MMR: give MMR after delivery, not in pregnancy). Same scenario and learning point.",
 "PAN4863": "Duplicate of parked PAQ1124 (child who cannot have live vaccine protected against measles because classmates are immunised -> herd immunity) and live BX379 (indirect protection when transmission is reduced -> herd immunity).",
 "PAN8185": "Duplicate of parked PAQ15368 (suspected C. difficile: wash hands with soap and water; 'alcohol hand rub after removing gloves is sufficient' is the wrong option) and parked PAN1570.",
 "PAN8186": "Repeat of parked PAQ15368 ('commode cleaned with standard detergent alone' is the wrong option; chlorine cleaning in explanation) and u74-g12 PAN7476 (key includes chlorine-based cleaning). Fifth C. difficile infection-control item in this batch alone.",
 "PAN8305": "Duplicate of u74-g12 PAN426 (cavitating upper lobe lesion, suspected infectious TB, AMU bay vs single room with airborne precautions). CROSS-BATCH: if the g12 checker drops PAN426, this item could be reinstated (clinically sound; would need a Source line).",
 "PAN2321": "Duplicate of parked PAQ995 (child with slapped cheeks and lacy limb rash whose mother is 16 weeks pregnant -> parvovirus B19, risk to the pregnancy); also parked PAQ16394.",
 "PAN3335": "Duplicate of live DR126 (woman about 10 weeks pregnant with a cat worried about an infection harming the baby -> avoid cat litter, eat well-cooked meat, i.e. toxoplasmosis). Same scenario, same association.",
 "PAN10116": "Repeat of live BX826 (hepatitis A transmission -> faecal-oral) and live ID027 (hepatitis A: faecal-oral, self-limiting). The candidate tests the same fact (faecal-oral, so hand and food hygiene).",
 "PAN975": "Duplicate of u74-g04 PAN1301 (hand hygiene immediately before touching the patient, WHO five moments) and u74-g04 PAN1567 (after contact); g04 already holds four hand-hygiene items. If kept, the key (142 chars) would need cutting.",
 "PAN976": "Duplicate of u74-g05 PAN1302 (PPE chosen by the expected exposure to blood and body fluids, not by culture result or known infection). Same learning point and near-identical options. CROSS-BATCH: reinstate if g05 drops PAN1302.",
 "PAN3771": "Duplicate of live ID028 (asymptomatic person screened before immunosuppressive therapy with positive IGRA and normal CXR = latent TB, treat) and parked PAAKT023. Same scenario; recognising latent infection is the core of both.",
 "PAN3770": "Same-batch duplicate of PAN10103 (pulmonary TB spread by inhaled airborne droplet nuclei from a household/flat contact). PAN10103 kept.",
 "PAN6208": "Duplicate of u74-g08 PAQ11270 (HBsAg reactive on blood donation screening, still positive on retest 6+ months later = chronic hepatitis B). CROSS-BATCH: this is the stronger item (PAQ11270 gives HBsAg in the stem and asks which virus); if g08 drops PAQ11270, reinstate PAN6208 (clinically correct; needs Source line).",
}

FIX = {}

FIX["PAN2874"] = ("Format only (Source line, sources). Clinically correct: HSV latency in sensory (sacral dorsal root) ganglia with reactivation. No duplicate found.", {
 "why_correct": "After primary infection, herpes simplex virus travels along sensory nerves and establishes lifelong latency in the dorsal root (sacral) ganglia. Triggers such as stress, illness or menstruation can cause reactivation, with virus travelling back down the nerve to the skin. Recurrences therefore come from her own latent virus rather than a new infection, and frequent episodes can be managed with suppressive aciclovir. Source: UK national guideline for the management of anogenital herpes, BASHH, 2024.",
 "sources": [HSV]})

FIX["PAQ11795"] = ("Verified against BASHH/BHIVA PEP 2021 (2023 amendment): PEP 'recommended' for occupational mucosal splash from a source with detectable viral load; start as soon as possible, preferably within 24 h, can be considered up to 72 h; 28 days. Wording of timing aligned with the guideline. Overlap to note for the clinician: live ID024 (needlestick, start PEP ASAP) and u74-g05 PAN1575 (eye splash, urgent assessment for PEP). Kept because the key point here is that presentation at 48 h is still within the window; judge whether this is distinct enough.", {
 "why_correct": "Mucous membrane exposure to blood from a source with a detectable HIV viral load is a recognised indication for post-exposure prophylaxis. PEP should start as soon as possible, preferably within 24 hours, but it can still be considered up to 72 hours after the exposure. At two days she is within that window, so a 28-day course should be started today alongside baseline testing and follow-up. Source: UK guideline for the use of HIV post-exposure prophylaxis, BASHH/BHIVA, 2021 (2023 amendment).",
 "sources": [PEP]})

FIX["PAN7231"] = ("Format only. CD4 count as the measure of immune suppression is correct. No live duplicate (ID020/ID005 test prophylaxis/ART timing).", {
 "why_correct": "HIV destroys CD4 helper T lymphocytes, so the absolute CD4 count is the standard measure of how immunocompromised a person is. It guides the risk of opportunistic infections and decisions such as starting co-trimoxazole prophylaxis, and it is monitored alongside viral load once treatment starts. Source: Guidelines for the routine investigation and monitoring of adults living with HIV, BHIVA, 2019.",
 "sources": [MON]})

FIX["PAN10131"] = ("Format only. Green Book ch 23: meningitis/meningism common, may precede or follow parotitis or occur without it - consistent with the text. Possible overlap to note: live DT106 (mumps safety-netting, key 'severe headache with neck stiffness'). Kept because DT106 asks what to safety-net for, this asks to recognise the complication once present; clinician may judge it a repeat.", {
 "why_correct": "Mumps virus commonly invades the central nervous system, and aseptic meningitis is one of its most frequent complications, usually appearing within about a week of the parotitis, although it can occur before or without parotid swelling. Headache, vomiting, photophobia and neck stiffness in an alert, unvaccinated teenager with recent bilateral parotid swelling fit this well. The illness is usually self-limiting, but bacterial meningitis must still be considered and excluded. Source: Mumps, Green Book chapter 23, UKHSA, 2026.",
 "sources": [GB23]})

FIX["PAN246"] = ("Checked against NICE NG240: blood culture is a listed blood test, samples taken before antibiotics, LP before antibiotics only if safe and no clinically significant delay, IV antibiotics within 1 hour. NG240 also recommends a throat swab for meningococcal culture, so why_wrong B reworded so the distractor is wrong for the right reason; why_correct rewritten to match NG240's test list (lactate is listed for meningococcal disease, not here).", {
 "why_correct": "In suspected bacterial meningitis, blood cultures should be taken promptly, before the first dose of antibiotics, because they often identify the organism even when a lumbar puncture is delayed or done after treatment has started. Taking them must not hold up intravenous antibiotics, which should be given within an hour of arrival. Whole-blood meningococcal and pneumococcal PCR, CRP and glucose are sent at the same time, and a lumbar puncture is done when it is safe. Source: Meningitis (bacterial) and meningococcal disease, NICE NG240, 2024.",
 "why_wrong": "A. MRI is not part of the initial assessment and would delay care. B. A throat swab is sent for meningococcal culture, not for viral PCR alone, and it does not replace blood cultures. C. An EEG is not needed unless seizure activity is suspected. E. ESR is non-specific and does not influence immediate management.",
 "sources": [NG240]})

FIX["PAN6162"] = ("Format only. Viral CSF pattern correct. Live CR049/ID029/CR048 key the bacterial pattern; this keys the viral pattern - judged a different learning point, but clinician may wish to compare.", {
 "why_correct": "Clear CSF with a lymphocytic pleocytosis, normal glucose and only a slightly raised protein is the typical pattern of viral meningitis. Combined with a well, orientated young man with stable observations, this is the best fit. Enteroviruses are the most frequent cause in the UK. Source: UK joint specialist societies guideline on the diagnosis and management of acute meningitis in adults, British Infection Association, 2016.",
 "sources": [UKJSS, MCG, NG240]})

FIX["PAN10132"] = ("Format only. Checked against BHIVA/BIA OI guideline (cryptococcal section): CSF cryptococcal antigen most sensitive, serum CrAg positive needs LP, manometry essential, serial LPs for raised pressure. Note: the BHIVA OI guideline is 2011 and described as dated; no newer UK CNS OI guideline found.", {
 "why_correct": "Cryptococcus neoformans causes a subacute meningitis in people with advanced HIV, typically with a headache that builds over weeks, fever and altered mental state, often with little meningism. Raised intracranial pressure is common. The diagnosis is made with serum and CSF cryptococcal antigen, and the opening pressure should be measured at lumbar puncture. Source: Guidelines for the treatment of opportunistic infection in HIV-seropositive individuals, BHIVA/BIA, 2011.",
 "sources": [OI]})

FIX["PAN3826"] = ("Format only. Enteroviruses are the commonest identified cause of viral meningitis in UK adults (McGill 2018, multicentre UK cohort); HSV-2 > HSV-1 for meningitis correct.", {
 "why_correct": "Enteroviruses, such as echoviruses and coxsackieviruses, are the most frequent cause of viral meningitis in the UK. They are spread by the faecal-oral and respiratory routes, cluster in families and peak in summer and autumn. Most cases resolve with supportive care. Source: UK joint specialist societies guideline on the diagnosis and management of acute meningitis in adults, British Infection Association, 2016.",
 "sources": [MCG, UKJSS]})

FIX["PAN4426"] = ("Key was 82 chars (longest by far, and the only option carrying an explanation - a cue). Key tightened. why_correct updated to the current England programme (UKHSA eligibility poster 2025): non-live recombinant vaccine at 65 and 70 with catch-up to 80th birthday; severely immunosuppressed from 18 since Sept 2025. Distractor D (third trimester) is a real target group for RSV, but not for shingles vaccine, so it remains wrong.", {
 "options": {"E": "Older adults at specified ages"},
 "correct_answer": "E. Older adults at specified ages",
 "why_correct": "Reactivation of varicella zoster virus becomes more frequent with age as cell-mediated immunity declines, and older people have the highest rates of shingles and post-herpetic neuralgia. In England the routine programme offers two doses of the non-live recombinant vaccine to adults when they turn 65 or 70, with catch-up until their 80th birthday, and to severely immunosuppressed adults from age 18. Source: Shingles vaccination eligibility, UKHSA, 2025.",
 "sources": [SHING]})

FIX["PAN4720"] = ("Key was the longest option; shortened. Green Book ch 6 says providers should consider avoiding a vaccine after confirmed anaphylaxis to a previous dose and seek specialist advice rather than simply withholding where there is doubt - why_correct softened from 'is a contraindication' to match. No duplicate found.", {
 "options": {"C": "Withhold further doses until specialist advice is obtained"},
 "correct_answer": "C. Withhold further doses until specialist advice is obtained",
 "why_correct": "A confirmed anaphylactic reaction to a previous dose of a vaccine, or to one of its components, means further doses of that vaccine should be avoided unless a specialist advises otherwise. Hives, wheeze and collapse treated with adrenaline is anaphylaxis. The vaccine should be withheld and specialist advice sought, for example from an immunologist or paediatric allergy service, about alternatives or supervised vaccination. Source: Contraindications and special considerations, Green Book chapter 6, UKHSA, 2017.",
 "sources": [GB6]})

FIX["PAN10103"] = ("Key (50) was far longer than all distractors (12-24); options rebalanced, why_wrong and exam_trap updated. Same-batch duplicate PAN3770 dropped in favour of this item. No live/parked TB-transmission item found (u74-g12 PAN426 is isolation, not route).", {
 "options": {"A": "Contact with his blood, for example via a shared razor",
             "B": "Sexual intercourse without a condom",
             "C": "Sharing cutlery, crockery and food at mealtimes",
             "D": "Inhaling droplet nuclei released when he coughs",
             "E": "Bites from bedbugs or other household insects"},
 "correct_answer": "D. Inhaling droplet nuclei released when he coughs",
 "why_correct": "Mycobacterium tuberculosis is spread by the airborne route: a person with infectious pulmonary disease releases tiny droplet nuclei when coughing, speaking or sneezing, and these remain suspended and are inhaled by others. Prolonged close contact in an enclosed space, such as sharing a bedroom, carries the highest risk, which is why household contacts are screened. Source: Tuberculosis, NICE NG33, 2016 (updated 2019).",
 "why_wrong": "A. TB is not a blood-borne infection, so a shared razor is not the route. B. Sexual intercourse is not the transmission route; the risk comes from sharing the same air for long periods. C. Sharing cutlery, crockery and food does not spread pulmonary TB. E. TB has no insect vector.",
 "exam_trap": "C, Sharing cutlery, crockery and food — close household sharing is linked to risk, but it is the shared air, not the utensils, that transmits TB.",
 "sources": [NG33]})

FIX["PAN333"] = ("Key changed from 'Inactivated influenza vaccine' to 'Influenza vaccine' because adults 65+ in England may receive the recombinant vaccine (TIVr), which is not an inactivated-virus vaccine. Distractor B reworded ('A single ... dose repeated each autumn' was self-contradictory). Eligibility (65+, care-home residents, chronic heart disease, diabetes) checked against the flu programme letter and Green Book ch 19.", {
 "options": {"B": "A pneumococcal vaccine dose repeated each autumn",
             "C": "Influenza vaccine every autumn"},
 "correct_answer": "C. Influenza vaccine every autumn",
 "why_correct": "The outbreak described is typical of seasonal influenza. Under the UK national immunisation programme, adults aged 65 and over, care-home residents and people with chronic heart disease or diabetes are offered influenza vaccine every autumn, because circulating strains change and protection wanes. Vaccinating residents and staff reduces infections, outbreaks and hospital admissions. Source: Influenza, Green Book chapter 19, UKHSA, 2026.",
 "sources": [GB19, FLU]})

FIX["PAN733"] = ("Key was the longest option; tightened (PPE-by-task element removed, which also avoids overlap with u74-g05 PAN1302). No duplicate found.", {
 "options": {"D": "They apply to every patient in every setting, at all times"},
 "correct_answer": "D. They apply to every patient in every setting, at all times",
 "why_correct": "Standard infection control precautions, such as hand hygiene, appropriate PPE, safe sharps handling and management of blood and body fluids, apply to all patients in all settings. Infection status is often unknown, so every patient is treated as a potential source. The type of PPE is chosen according to the anticipated exposure for each task. Source: National infection prevention and control manual for England, NHS England, 2026.",
 "sources": [NIPCM]})

FIX["PAN6646"] = ("Key was the longest option; shortened and distractor A lengthened, exam_trap aligned. UKHSA notes risks extend beyond needles and syringes (other equipment), which the key covers. No live duplicate (BX827 is hepatitis B).", {
 "options": {"A": "Sharing meals and cutlery with his partner at home",
             "C": "Sharing needles or other injecting equipment"},
 "correct_answer": "C. Sharing needles or other injecting equipment",
 "why_correct": "Hepatitis C is a blood-borne virus, and sharing needles, syringes, spoons, filters or water when injecting is the main route of transmission in the UK. Anyone who has ever injected drugs should be offered testing. Sexual and household transmission are uncommon. Source: Hepatitis C in England 2025, UKHSA, 2025.",
 "why_wrong": "A. The virus is not transmitted by sharing meals or cutlery. B. Swimming pools and showers are not a route of spread. D. Ordinary sporting contact without blood exposure is not a recognised route. E. Kissing is not a recognised route of transmission.",
 "exam_trap": "A, Sharing meals and cutlery at home — household contact feels risky, but hepatitis C needs blood exposure and is not spread through food.",
 "sources": [HCV]})

FIX["PAN3822"] = ("Key was the longest option; options rebalanced. Checked against UKHSA meningococcal guidance (Dec 2025): spread by droplets/secretions; close prolonged contact (household, intimate kissing) gets prophylaxis; classmates do not; prophylaxis ideally within 24 h. Overlap to note: parked PAQ1170/PAQ1174 test who gets prophylaxis; this tests the route - judged distinct.", {
 "options": {"B": "Eating contaminated food prepared in the shared kitchen",
             "D": "Respiratory droplets and secretions from close contact"},
 "correct_answer": "D. Respiratory droplets and secretions from close contact",
 "why_correct": "Neisseria meningitidis colonises the nasopharynx and spreads through respiratory droplets and direct contact with secretions, for example through intimate kissing or living in the same household. Spread therefore needs prolonged close contact, which is why prophylaxis targets household and intimate contacts rather than casual contacts. Source: Guidance for public health management of meningococcal disease in the UK, UKHSA, 2025.",
 "why_wrong": "A. Meningococcus is not spread by insects. B. Contaminated food is not a route of transmission. C. It is not spread by the faecal-oral route. E. Soil is not a reservoir; humans are the only natural host.",
 "sources": [MEN]})

FIX["PAN3824"] = ("Key was (joint) longest; distractor B lengthened. UKHSA 2025 diphtheria guidance confirms droplet spread as the common mode; close contacts need testing, prophylaxis and vaccination. No duplicate found.", {
 "options": {"B": "Faecal-oral spread from contaminated drinking water"},
 "why_correct": "Respiratory diphtheria, caused by toxigenic Corynebacterium diphtheriae, spreads mainly by respiratory droplets and close contact with secretions from infected people or carriers. The grey adherent pharyngeal membrane after travel to an outbreak area is characteristic. Close contacts need assessment, swabbing, antibiotic prophylaxis and vaccination as advised by public health. Source: Public health control and management of diphtheria in England, UKHSA, 2025.",
 "sources": [DIP]})

FIX["PAN1561"] = ("Format only. Writer's earlier fix (prosthetic joint removed) is correct. SMI B 37 now hosted by RCPath; its text was not opened - the contamination principles stated are standard.", {
 "why_correct": "Coagulase-negative staphylococci are normal skin flora and a common contaminant introduced when blood cultures are taken. Growth in only one set, in a patient who is clinically well and has negative repeat cultures, makes contamination the most likely explanation. True infection is more likely with multiple positive sets or an indwelling line or implanted prosthetic material. Source: UK Standards for Microbiology Investigations B 37, investigation of blood cultures, UKHSA and Royal College of Pathologists, 2024.",
 "sources": [SMI]})

assert set(DROPS) | set(FIX) == set(ids) and not (set(DROPS) & set(FIX)), (set(ids) - set(DROPS) - set(FIX))
rev, final = [], []
for i in ids:
    if i in DROPS:
        rev.append({"id": i, "verdict": "drop", "issues": DROPS[i], "edits": {}})
    else:
        iss, ed = FIX[i]
        rev.append({"id": i, "verdict": "fix", "issues": iss, "edits": ed})
for q in draft:
    if q['id'] in FIX:
        n = copy.deepcopy(q)
        for k, v in FIX[q['id']][1].items():
            if k == 'options':
                n['options'].update(v)
            else:
                n[k] = v
        final.append(n)
json.dump(rev, open(B + '/rev/C.json', 'w', encoding='utf-8', newline=''), ensure_ascii=False, indent=1)
json.dump(final, open(B + '/out/final.json', 'w', encoding='utf-8', newline=''), ensure_ascii=False, indent=1)
for q in final:
    o = q['options']; L = q['correct_letter']
    print(q['id'], L, {k: len(v) for k, v in o.items()})
print(len(rev), len(final))
