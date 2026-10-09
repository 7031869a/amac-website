# PLAB 1 clinician verdicts — Paediatrics packs and remaining edits (9 Oct 2026) — sign-off record (internal; never shown on the website)

- Reviewer: AMaC clinical reviewer (letter of 9 Oct 2026). The returned Excel forms carry no verdicts (verdict columns blank), so the
  letter is the only record of the verdicts.
- Builds on PR #66 (held H01 non-Paediatrics and Adapted 01–03, already live). This record covers the Paediatrics packs plus the edits the
  letter asks for on items already live.

## Verdicts
| Pack | Approve | Edit | Reject | Section 3 |
|---|---|---|---|---|
| 1 Live Sample Audit | 100 Correct, 0 Minor, 0 Clinical error | | | n/a — recorded only; does not clear the held set |
| 2 Paediatrics Held 01 | 57 | 2 (PAQ15063, PAQ995) | 0 | retire all 79 |
| 3 Held H01 | 46 | 3 | 2 | retire all except PAQ11939 |
| 4 Paediatrics Batch 2 | 62 | 2 (PAN2223, PAN2217) | 0 | retire all 36 |
| 5–7 Adapted 01–03 | 100 / 100 / 37 | 0 | 0 | retire all (170 / 189 / 41) |

Pack 3 as written in the letter: the edits are PAAKT183, PAQ977 (both in Paediatrics Held 01, applied there) and PAQ932; the rejects are PAN15778
and PAQ932 "if the stem cannot be made explicit". The stem was made explicit, so PAQ932 is live (since #66); PAN15778 is not live and stays held,
marked rejected. PAQ14765 (approved with comment) has had the U&E/potassium sentence since #66.

## Released in this PR (3,597 → 3,720, +123)
- Paediatrics Held 01 (59): PAN4275, PAPAED188, PAPAED171, PAPAED173, PAQ265, PAQ300, PAQ955, PAQ956, PAQ957, PAQ961, PAQ964, PAQ967, PAQ968, PAQ974, PAQ977, PAQ978, PAQ982, PAQ983, PAQ987, PAQ990, PAQ992, PAQ993, PAQ995, PAQ1152, PAQ1153, PAQ1154, PAQ1155, PAQ1173, PAQ1227, PAQ1228, PAQ1229, PAQ1231, PAAKT133, PAAKT135, PAAKT183, PAQ16392, PAQ14897, PAQ14950, PAQ14952, PAQ15062, PAQ15063, PAQ15075, PAQ15679, PAQ16345, PAQ15376, PAQ15511, PAQ15553, PAQ15554, PAQ15561, PAQ15566, PAQ15567, PAQ15568, PAQ15626, PAQ15629, PAQ15850, PAQ16150, PAQ16151, PAQ16343, PAQ16502
- Paediatrics Batch 2 (64): PAPAED170, PAQ12552, PAQ12612, PAQ12631, PAQ12636, PAQ12714, PAQ12729, PAQ12816, PAQ12819, PAQ12915, PAQ12146, PAQ11954, PAQ11960, PAQ11765, PAQ11769, PAQ11788, PAQ11790, PAQ11156, PAQ11167, PAQ11170, PAQ11193, PAQ11574, PAQ11641, PAN264, PAN265, PAN447, PAN619, PAN624, PAN835, PAN839, PAN1041, PAN1042, PAN1044, PAN1189, PAN1192, PAN1193, PAN1350, PAN1351, PAN1419, PAN1789, PAN1791, PAN1792, PAN1793, PAN1794, PAN1795, PAN1799, PAN1842, PAN1974, PAN1975, PAN2007, PAN2008, PAN2013, PAN2217, PAN2223, PAN2399, PAN2409, PAN2415, PAN2416, PAN2417, PAN2418, PAN2524, PAN2526, PAN2527, PAN2571

## Edits (before → after)
- **PAQ15063** · Paediatrics Held 01 · `stem`
  - before: "A father brings his 13-month-old daughter to the GP. She had her first MMR and other one-year vaccines eight days ago. Since yesterday she has had a mild temperature and a faint, blotchy pink rash on her trunk, which blanches on pressure. She is alert, feeding well, playing normally and has no cough or conjunctivitis.\n\nWhich explanation is most likely?"
  - after: "A father brings his 13-month-old daughter to the GP. She had her first MMRV and other one-year vaccines eight days ago. Since yesterday she has had a mild temperature and a faint, blotchy pink rash on her trunk, which blanches on pressure. She is alert, feeding well, playing normally and has no cough or conjunctivitis.\n\nWhich explanation is most likely?"
- **PAQ15063** · Paediatrics Held 01 · `why_correct`
  - before: "MMR is a live attenuated vaccine, and a mild fever and non-specific rash commonly appear about a week to ten days later as the vaccine virus replicates. In a child who is well, feeding and has a blanching rash, this is a self-limiting reaction needing only reassurance and antipyretics if required. The child is not infectious to others and the second dose should be given as scheduled. Source: UKHSA Immunisation against infectious disease (the Green Book), chapter 21 Measles, 2013 (updated 2026)."
  - after: "MMRV is a live attenuated vaccine, and a mild fever and non-specific rash commonly appear about a week to ten days later as the vaccine virus replicates. Since January 2026 the UK schedule gives MMRV at 12 and 18 months, and its varicella component can also cause a mild varicella-like rash. In a child who is well, feeding and has a blanching rash, this is a self-limiting reaction needing only reassurance and antipyretics if required. The child is not infectious to others and the second dose should be given as scheduled. Source: UKHSA Immunisation against infectious disease (the Green Book), chapter 21 Measles, 2013 (updated 2026)."
- **PAQ995** · Paediatrics Held 01 · `options`
  - before: {"A": "Measles — offer immunoglobulin to his contacts", "B": "Scarlet fever — antibiotics and notification", "C": "Parvovirus B19 — risk to the pregnancy and to people with haemolytic anaemia", "D": "Rubella — risk of congenital rubella syndrome affecting his mother's pregnancy", "E": "Roseola infantum — risk of febrile seizures"}
  - after: {"A": "Measles — offer immunoglobulin to his contacts", "B": "Scarlet fever — antibiotics and notification", "C": "Parvovirus B19 — risk to the pregnancy and to people with haemolytic anaemia", "D": "Rubella — risk of congenital rubella syndrome", "E": "Roseola infantum — risk of febrile seizures"}
- **PAAKT183** · Paediatrics Held 01 · `options`
  - before: {"A": "Perform a lumbar puncture, then start antibiotics according to the CSF result", "B": "Intravenous ceftriaxone alone", "C": "Oral amoxicillin and review in 24 hours", "D": "Wait for blood culture results before starting antibiotics", "E": "Intravenous cefotaxime plus amoxicillin now, with lumbar puncture once safe"}
  - after: {"A": "Perform a lumbar puncture, then start antibiotics according to the CSF result", "B": "Intravenous ceftriaxone alone", "C": "Oral amoxicillin and review in 24 hours", "D": "Wait for blood culture results before starting antibiotics", "E": "Intravenous ceftriaxone plus amoxicillin now, with lumbar puncture once safe"}
- **PAAKT183** · Paediatrics Held 01 · `correct_answer`
  - before: "E. Intravenous cefotaxime plus amoxicillin now, with lumbar puncture once safe"
  - after: "E. Intravenous ceftriaxone plus amoxicillin now, with lumbar puncture once safe"
- **PAAKT183** · Paediatrics Held 01 · `why_correct`
  - before: "A febrile young infant with poor feeding, a high-pitched cry, mottling and a tense fontanelle has bacterial meningitis with possible sepsis until proven otherwise. Antibiotics must not be delayed: under 3 months, cefotaxime is combined with amoxicillin to cover Listeria, which cephalosporins miss. Lumbar puncture should be done as soon as it is safe, but must not hold up treatment in an unwell infant. Source: NICE NG143 Fever in under 5s: assessment and initial management, 2019 (updated 2021)."
  - after: "A febrile young infant with poor feeding, a high-pitched cry, mottling and a tense fontanelle has bacterial meningitis with possible sepsis until proven otherwise. Antibiotics must not be delayed: give intravenous ceftriaxone (cefotaxime only if ceftriaxone is contraindicated), and under 3 months add amoxicillin to cover Listeria, which cephalosporins miss. Lumbar puncture should be done as soon as it is safe, but must not hold up treatment in an unwell infant. Source: NICE NG240 Meningitis (bacterial) and meningococcal disease: recognition, diagnosis and management, 2024."
- **PAAKT183** · Paediatrics Held 01 · `why_wrong`
  - before: "A. Lumbar puncture must not delay antibiotics in an unwell, shocked infant. B. Ceftriaxone alone does not cover Listeria and cefotaxime is generally preferred in young infants. C. Oral antibiotics are inadequate for suspected bacterial meningitis. D. Waiting for culture results risks rapid deterioration and death."
  - after: "A. Lumbar puncture must not delay antibiotics in an unwell, shocked infant. B. Ceftriaxone is the right cephalosporin, but on its own it does not cover Listeria, so amoxicillin must be added under 3 months. C. Oral antibiotics are inadequate for suspected bacterial meningitis. D. Waiting for culture results risks rapid deterioration and death."
- **PAAKT183** · Paediatrics Held 01 · `pearl`
  - before: "In infants under 3 months, add amoxicillin to the cephalosporin for Listeria. Give fluids for shock and antibiotics immediately; investigations follow."
  - after: "In infants under 3 months with suspected bacterial meningitis, give IV ceftriaxone (cefotaxime only if ceftriaxone is contraindicated) plus amoxicillin for Listeria. Give fluids for shock and antibiotics immediately; investigations follow."
- **PAAKT183** · Paediatrics Held 01 · `thinking`
  - before: "Febrile infant under 3 months ↓ Poor feeding, high-pitched cry, mottling and tense fontanelle ↓ Bacterial meningitis with possible sepsis ↓ Treatment first, Listeria cover needed at this age ↓ Intravenous cefotaxime plus amoxicillin, lumbar puncture when safe"
  - after: "Febrile infant under 3 months ↓ Poor feeding, high-pitched cry, mottling and tense fontanelle ↓ Bacterial meningitis with possible sepsis ↓ Treatment first, Listeria cover needed at this age ↓ Intravenous ceftriaxone plus amoxicillin, lumbar puncture when safe"
- **PAAKT183** · Paediatrics Held 01 · `takeaway`
  - before: "Suspected meningitis under 3 months: immediate IV cefotaxime plus amoxicillin; do not delay for LP."
  - after: "Suspected meningitis under 3 months: immediate IV ceftriaxone plus amoxicillin (cefotaxime only if ceftriaxone is contraindicated); do not delay for LP."
- **PAQ977** · Paediatrics Held 01 · `why_correct`
  - before: "Drowsiness, mottled cool peripheries, prolonged capillary refill, tachycardia and no urine output indicate shock from gastroenteritis. She needs immediate fluid resuscitation with an isotonic crystalloid bolus given intravenously, or intraosseously if access is difficult, followed by reassessment. Ongoing rehydration and electrolyte monitoring follow once circulation is restored. Source: NICE CG84 Diarrhoea and vomiting caused by gastroenteritis in under 5s, 2009."
  - after: "Drowsiness, mottled cool peripheries, prolonged capillary refill, tachycardia and no urine output indicate shock from gastroenteritis. She needs immediate fluid resuscitation with an isotonic crystalloid bolus given intravenously, or intraosseously if access is difficult, followed by reassessment. Ongoing rehydration and electrolyte monitoring follow once circulation is restored. Source: NICE CG84 Diarrhoea and vomiting caused by gastroenteritis in under 5s, 2009 (updated 2022), recommendation 1.3.3.2: rapid intravenous infusion of 10 mL/kg 0.9% sodium chloride for suspected or confirmed shock; Advanced Paediatric Life Support (APLS), Advanced Life Support Group: intraosseous access when intravenous access cannot be obtained rapidly."
- **PAQ1227** · Paediatrics Held 01 (optional NG75 softening) · `why_correct`
  - before: "Most infants with faltering growth have no underlying disease; the commonest cause is not taking in enough energy, often due to feeding difficulties, feeding practices or social circumstances. A well, developmentally normal child with weight falling ahead of length and no gastrointestinal or respiratory symptoms fits this pattern. Assessment starts with a detailed feeding history and observing a feed. Source: NICE NG75 Faltering growth: recognition and management of faltering growth in children, 2017."
  - after: "Most infants with faltering growth have no underlying disease; usually the problem is not taking in enough energy, often due to feeding difficulties, feeding practices or social circumstances. A well, developmentally normal child with weight falling ahead of length and no gastrointestinal or respiratory symptoms fits this pattern. Assessment starts with a detailed feeding history and observing a feed. Source: NICE NG75 Faltering growth: recognition and management of faltering growth in children, 2017."
- **PAQ1227** · Paediatrics Held 01 (optional NG75 softening) · `takeaway`
  - before: "The commonest cause of faltering growth is not enough energy going in; assess feeding first."
  - after: "Faltering growth is usually due to not enough energy going in; assess feeding first."
- **PAQ1229** · Paediatrics Held 01 (optional NG75 softening) · `why_correct`
  - before: "In a well infant with faltering growth, assessment begins with a detailed feeding history, including the volume and frequency of feeds and how formula is prepared, and directly observing a feed. This often identifies the cause, such as over-diluted feeds or feeding difficulties. Investigations are reserved for infants with clinical features suggesting an underlying illness. Source: NICE NG75 Faltering growth: recognition and management of faltering growth in children, 2017."
  - after: "In a well infant with faltering growth, assessment begins with a detailed feeding history, including the volume and frequency of feeds and how formula is prepared, and directly observing a feed. This often identifies the cause, such as over-diluted feeds or feeding difficulties. Tests such as urine culture and coeliac screening can be considered as part of the assessment, but they follow the feeding history rather than replace it. Source: NICE NG75 Faltering growth: recognition and management of faltering growth in children, 2017."
- **PAQ1229** · Paediatrics Held 01 (optional NG75 softening) · `why_wrong`
  - before: "A. A sweat test is not a first-line step in a well infant without suggestive features. B. Changing formula before understanding the problem may miss the cause. D. Admission for tube feeding is for severe faltering growth or safeguarding concerns, not first-line. E. Routine blood tests are not indicated without signs of illness."
  - after: "A. A sweat test is not a first-line step in a well infant without suggestive features. B. Changing formula before understanding the problem may miss the cause. D. Admission for tube feeding is for severe faltering growth or safeguarding concerns, not first-line. E. Tests such as urine culture and coeliac screening may be considered, but they come after, not instead of, a feeding history and observed feed."
- **PAN2223** · Paediatrics Batch 2 · `difficulty`
  - before: "Moderate"
  - after: "Difficult"
- **PAN2217** · Paediatrics Batch 2 · `why_correct`
  - before: "Ligament laxity and bony changes in Down syndrome can make the joint between the first two cervical vertebrae unstable, and minor trauma can then compress the spinal cord, causing neck pain, head tilt, upper motor neurone signs and loss of bladder control. She needs her neck protected and urgent cervical spine imaging with a neurosurgical or spinal opinion. Source: American Academy of Pediatrics, Atlantoaxial instability in children with Down syndrome."
  - after: "Ligament laxity and bony changes in Down syndrome can make the joint between the first two cervical vertebrae unstable, and minor trauma can then compress the spinal cord, causing neck pain, head tilt, upper motor neurone signs and loss of bladder control. She needs her neck protected and urgent cervical spine imaging with a neurosurgical or spinal opinion. Source: Down Syndrome Medical Interest Group (DSMIG UK), Cervical spine disorders: craniovertebral instability, 2024."
- **PAQ932** · Held H01 (live since #66) · `stem`
  - before: "A 31-year-old at 22 weeks of pregnancy is seen by the surgical registrar with a day of right-sided abdominal pain, now maximal just below the right costal margin. She has vomited twice, her temperature is 38.1°C, there is localised tenderness with guarding on the right, and her inflammatory markers are raised. Urinalysis is clear and the fetal heart is heard. The surgical team suspect appendicitis. Which imaging should be performed first?"
  - after: "A 31-year-old at 22 weeks of pregnancy is seen by the surgical registrar with a day of right-sided abdominal pain, now maximal just below the right costal margin. She has vomited twice, her temperature is 38.1°C, there is localised tenderness with guarding on the right, and her inflammatory markers are raised. Urinalysis is clear and the fetal heart is heard. The surgical team suspect acute appendicitis. Which imaging should be performed first?"
- **PAN1884** · Adapted 01 (live since #66) · `pearl`
  - before: "Insulin-treated drivers must check their glucose before the first journey and at least every 2 hours while driving."
  - after: "Insulin-treated drivers must check their glucose before driving and at least every 2 hours on long journeys."
- PAQ14765 · `why_correct`: already reads "…, with renal function and potassium checked after restarting or changing the diuretic dose." (#66). No change.

## Not changed / notes
- PAN2217: the UK DSMIG page (Cervical spine disorders: craniovertebral instability, updated April 2024) opened and supports the
  warning signs and urgent referral, so it replaces the AAP source.
- PAQ977: CG84 recommendation 1.3.3.2 (updated October 2022) gives a 10 mL/kg bolus. Checked on nice.org.uk on 9 Oct 2026.
- PAQ15063: presentation, pearl and takeaway still say "MMR". They are not wrong (MMRV contains the MMR components) and were not in the edit list.
- validate.py: PAPAED188 stem is 0.41 similar to its AKT source (limit 0.40; flagged to the reviewer in pack 2). After the reviewer's revert of
  option D, PAQ995's key is the longest option. Neither was reworded, because that would put unreviewed text live.
- Pack 2 section 5 lists 21 parked copies "already covered" by kept questions ("no action needed"). They are still in the parked list.
