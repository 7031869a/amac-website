/* ============================================================
   AMaC — MRCP Part 1 PILOT v2, 50 questions  (_parked/mrcp1-pilot-50-v2.js)
   ------------------------------------------------------------
   NOT LIVE. No page loads this file, and it is not counted on the
   site. It is a pilot set for clinical review before any release.

   v2 (12 Oct 2026): all 50 v1 items rewritten to the single-best-
   answer house standard. Audit-flagged items follow the proposed
   fixes in the 12 Oct pilot audit sign-off list. Rules applied to
   every item: single-best lead-in; five homogeneous options of
   similar length, key not the longest, no absolute qualifiers;
   numerical results with UK units and reference ranges; no
   diagnosis or mechanism named in the stem, lead-in or topic;
   adult patients; UK practice. M1P033 (paediatric) retired and
   replaced by M1P051 (new adult respiratory item, same slot).
   Options reshuffled so keys run 10 each A-E; every key and
   explanation rechecked after the shuffle.

   Mechanical lint: _tools/mrcp1-lint/lint.py and check_v2.py.

   Same per-item format as mrcp1-pilot-50.js:
     id, source_id, subdomain, topic, difficulty, stem, options,
     correct_letter, why_correct, distractor_analysis,
     generalisation, review_status

   review_status "pilot v2 - not clinically reviewed": nothing here
   may go live until a clinician has signed it off.
   ============================================================ */
window.MRCP1_PILOT_V2_QUESTIONS = [
 {
  "id": "M1P001",
  "source_id": "MRCP1-728",
  "subdomain": "Rheumatology",
  "topic": "Rheumatology: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 48-year-old man has lost 8 kg over 4 months. He has livedo reticularis, abdominal pain after meals, and painful asymmetric weakness and sensory loss in both legs with a right foot drop. Blood pressure is 176/104 mmHg. Creatinine is 168 micromol/L (60–110). Urinalysis shows protein 1+ with no blood, and there are no red-cell casts. ANCA is negative and cryoglobulins are not detected. Mesenteric angiography shows multiple microaneurysms and irregular stenoses in medium-sized arteries. What is the most likely diagnosis?",
  "options": {
   "A": "Takayasu arteritis",
   "B": "Microscopic polyangiitis",
   "C": "Giant cell arteritis",
   "D": "Cryoglobulinaemic vasculitis",
   "E": "Polyarteritis nodosa"
  },
  "correct_letter": "E",
  "why_correct": "Polyarteritis nodosa is an ANCA-negative necrotising vasculitis of medium-sized arteries. It causes weight loss, livedo, mononeuritis multiplex, mesenteric ischaemia and renovascular hypertension with renal impairment, but not glomerulonephritis. Angiography showing microaneurysms and stenoses in medium-sized arteries is characteristic.",
  "distractor_analysis": {
   "A": "Takayasu arteritis is a large-vessel vasculitis of the aorta and its main branches, usually in younger women, presenting with absent pulses, bruits and limb claudication.",
   "B": "Microscopic polyangiitis is a small-vessel, usually ANCA-positive (MPO) vasculitis that causes glomerulonephritis with haematuria and red-cell casts, not medium-artery microaneurysms.",
   "C": "Giant cell arteritis affects large and medium arteries in people over 50, mainly the cranial branches of the carotid artery, causing headache, jaw claudication and visual loss rather than mesenteric aneurysms and neuropathy.",
   "D": "Cryoglobulinaemic vasculitis affects small vessels, usually with hepatitis C, purpura and membranoproliferative glomerulonephritis; cryoglobulins were not detected here."
  },
  "generalisation": "ANCA-negative systemic vasculitis with mononeuritis multiplex, gut ischaemia, renovascular hypertension and no active urinary sediment points to polyarteritis nodosa; angiography shows medium-vessel microaneurysms.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P002",
  "source_id": "MRCP1-288",
  "subdomain": "Neurology",
  "topic": "Neurology: investigation",
  "difficulty": "Moderate",
  "stem": "A 42-year-old woman with myasthenia gravis has had rapidly worsening generalised weakness for 3 days after a chest infection. She has difficulty swallowing, a weak cough, nasal speech and breathlessness when lying flat. Respiratory rate is 24 breaths/min and oxygen saturation is 97% on air. She is admitted to hospital. What is the most appropriate investigation to monitor her need for ventilatory support?",
  "options": {
   "A": "Arterial blood gas analysis",
   "B": "Serial forced vital capacity",
   "C": "Serial pulse oximetry",
   "D": "Portable chest radiograph",
   "E": "Serial peak expiratory flow rate"
  },
  "correct_letter": "B",
  "why_correct": "In a myasthenic crisis, respiratory muscle weakness is monitored with serial forced vital capacity (with negative inspiratory force where available). A falling FVC, typically towards 15–20 mL/kg or about 1 L in an adult, signals the need for critical-care review and ventilatory support before gas exchange fails.",
  "distractor_analysis": {
   "A": "Hypercapnia and hypoxaemia on arterial gases are late findings in neuromuscular weakness; waiting for them to change delays intubation.",
   "C": "Oxygen saturation stays normal until late in neuromuscular respiratory failure, so pulse oximetry gives false reassurance and does not show declining muscle strength.",
   "D": "A chest radiograph may show aspiration or the precipitating infection, but it does not measure respiratory muscle function or guide the timing of ventilation.",
   "E": "Peak expiratory flow mainly reflects airway calibre and effort, and is less reliable than vital capacity for tracking respiratory muscle weakness."
  },
  "generalisation": "In myasthenic crisis or Guillain-Barre syndrome, track ventilatory reserve with serial FVC rather than saturation or blood gases, which deteriorate late.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P003",
  "source_id": "MRCP1-1568",
  "subdomain": "Haematology",
  "topic": "Haematology: investigation",
  "difficulty": "Moderate",
  "stem": "A 57-year-old woman develops an abrupt eruption of tender, oedematous, erythematous plaques on her face, neck and upper limbs. Her temperature is 38.4 °C. Haemoglobin is 94 g/L (115–165), MCV 106 fL (80–100), neutrophils 9.6 × 10^9/L (2.0–7.5) and platelets 82 × 10^9/L (150–400). The blood film shows some hypogranular neutrophils. Serum B12 and folate are normal. Histology of a skin lesion shows a dense dermal neutrophilic infiltrate with no vasculitis or infection. What is the most appropriate investigation to identify the underlying cause?",
  "options": {
   "A": "CT of chest, abdomen and pelvis",
   "B": "Bone marrow aspirate and trephine biopsy",
   "C": "Serum protein electrophoresis",
   "D": "Antineutrophil cytoplasmic antibody testing",
   "E": "Colonoscopy with mucosal sampling"
  },
  "correct_letter": "B",
  "why_correct": "The eruption is acute febrile neutrophilic dermatosis (Sweet syndrome). The macrocytic anaemia, thrombocytopenia and dysplastic (hypogranular) neutrophils with normal B12 and folate suggest an underlying myelodysplastic syndrome or acute myeloid leukaemia, the commonest malignant associations. Bone marrow aspirate and trephine with cytogenetics is the test that confirms this.",
  "distractor_analysis": {
   "A": "CT staging looks for a solid tumour, which is a less common association; the blood count abnormalities point to a marrow disorder that CT cannot diagnose.",
   "C": "Serum protein electrophoresis detects a paraprotein; myeloma does not explain dysplastic neutrophils with macrocytosis and thrombocytopenia.",
   "D": "ANCA testing addresses small-vessel vasculitis, but the skin histology shows no vasculitis.",
   "E": "Inflammatory bowel disease is associated with neutrophilic dermatoses, but there are no bowel symptoms and it does not explain the cytopenias."
  },
  "generalisation": "Sweet syndrome with unexplained cytopenias or dysplastic features should prompt bone marrow examination for myelodysplasia or acute myeloid leukaemia.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P004",
  "source_id": "MRCP1-262",
  "subdomain": "Gastroenterology and hepatology",
  "topic": "Gastroenterology and hepatology: investigation",
  "difficulty": "Moderate",
  "stem": "A 48-year-old man has had sudden epigastric pain radiating to his back with vomiting for 12 hours. He drinks 6 units of alcohol a week and has had no previous episodes. Serum lipase is 1,450 U/L (0–60). ALT is 236 U/L (5–40), ALP 182 U/L (30–130) and bilirubin 34 micromol/L (0–21). Adjusted calcium is 2.31 mmol/L (2.20–2.60) and triglycerides 1.6 mmol/L (0.5–1.7). He takes no regular medicines. What is the most appropriate investigation to establish the cause?",
  "options": {
   "A": "MR cholangiopancreatography",
   "B": "Transabdominal ultrasound",
   "C": "Endoscopic ultrasound",
   "D": "Serum IgG4 concentration",
   "E": "Contrast-enhanced CT abdomen"
  },
  "correct_letter": "B",
  "why_correct": "Lipase more than 3 times the upper limit of normal with typical pain confirms acute pancreatitis. An early ALT rise above about 3 times normal suggests gallstones. NICE NG104 recommends abdominal ultrasound to look for gallstones as the cause, because it is safe, quick and sensitive for gallbladder stones.",
  "distractor_analysis": {
   "A": "MRCP looks for common bile duct stones or ductal anomalies when ultrasound and the clinical picture suggest them; it is not the first test for cause.",
   "C": "Endoscopic ultrasound is reserved for pancreatitis that remains unexplained after ultrasound, for example to find microlithiasis or a small tumour.",
   "D": "IgG4 is used when autoimmune pancreatitis is suspected, typically recurrent or unexplained disease with a diffusely enlarged gland, not a first episode with a biliary pattern.",
   "E": "Contrast CT is used to assess necrosis or complications, usually after 72 hours, or when the diagnosis is uncertain; it is less sensitive than ultrasound for gallstones."
  },
  "generalisation": "In a first episode of acute pancreatitis, ultrasound for gallstones is the first test for cause; then check calcium, triglycerides, alcohol and drugs before second-line imaging.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P005",
  "source_id": "MRCP1-651",
  "subdomain": "Respiratory medicine",
  "topic": "Respiratory medicine: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 47-year-old man has progressive exertional breathlessness and a dry cough 9 months after an allogeneic haematopoietic stem-cell transplant for acute myeloid leukaemia. He has oral lichenoid changes and sclerotic skin changes. FEV1 is 1.6 L (45% predicted), FEV1/FVC ratio is 0.55, and FEV1 changes by 3% after salbutamol. Inspiratory and expiratory high-resolution CT shows mosaic attenuation with air trapping and no consolidation. Bronchoalveolar lavage cultures and viral PCR are negative. What is the most likely diagnosis?",
  "options": {
   "A": "Pulmonary veno-occlusive disease",
   "B": "Diffuse alveolar haemorrhage",
   "C": "Cryptogenic organising pneumonia",
   "D": "Bronchiolitis obliterans",
   "E": "Idiopathic pneumonia syndrome"
  },
  "correct_letter": "D",
  "why_correct": "Bronchiolitis obliterans is the pulmonary manifestation of chronic graft-versus-host disease. It causes fixed airflow obstruction (FEV1/FVC below 0.7, little bronchodilator response) with mosaic attenuation and expiratory air trapping on CT, usually months after transplant, alongside other chronic GVHD features such as oral lichenoid and sclerotic skin changes.",
  "distractor_analysis": {
   "A": "Pulmonary veno-occlusive disease causes pulmonary hypertension with a low gas transfer and normal spirometry, not obstruction with air trapping.",
   "B": "Diffuse alveolar haemorrhage occurs early after transplant with ground-glass change, hypoxaemia and bloody lavage returns.",
   "C": "Organising pneumonia after transplant gives a restrictive defect with patchy, often migratory consolidation, not fixed obstruction and air trapping.",
   "E": "Idiopathic pneumonia syndrome is an early complication, usually within the first 120 days, with diffuse alveolar infiltrates and hypoxaemia."
  },
  "generalisation": "New fixed airflow obstruction with air trapping months after allogeneic stem-cell transplant, especially with chronic GVHD elsewhere, is bronchiolitis obliterans until proved otherwise.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P006",
  "source_id": "MRCP1-660",
  "subdomain": "Endocrinology and diabetes",
  "topic": "Endocrinology and diabetes: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 79-year-old woman with primary hypothyroidism has not collected her prescriptions for 3 months. She is admitted in winter with confusion and drowsiness (GCS 11). Temperature is 33.1 °C, heart rate 42 beats/min and blood pressure 92/58 mmHg. Sodium is 124 mmol/L (135–145), glucose 3.1 mmol/L (4.0–7.0), TSH 68 mU/L (0.3–4.2) and free T4 below 3 pmol/L (12–22). Random cortisol is 540 nmol/L (adrenal insufficiency unlikely above 450). White cell count is 6.8 × 10^9/L (4.0–11.0) and CRP 6 mg/L (0–5). What is the most likely diagnosis?",
  "options": {
   "A": "Myxoedema coma",
   "B": "Septic shock",
   "C": "Adrenal crisis",
   "D": "Primary hypothermia",
   "E": "Hypopituitary coma"
  },
  "correct_letter": "A",
  "why_correct": "Myxoedema coma is decompensated hypothyroidism with reduced consciousness, hypothermia, bradycardia, hypotension, hyponatraemia and hypoglycaemia, often after stopping levothyroxine or with cold exposure. TSH 68 mU/L with undetectable free T4 confirms primary hypothyroidism. Treat with IV hydrocortisone before or with thyroid hormone replacement, plus supportive care.",
  "distractor_analysis": {
   "B": "Sepsis may precipitate the illness, but the normal white cell count and CRP make septic shock unlikely as the main explanation.",
   "C": "Adrenal crisis also causes hypotension, hyponatraemia and hypoglycaemia, but a random cortisol of 540 nmol/L in an acutely unwell patient makes it unlikely, and it does not explain the thyroid results.",
   "D": "Environmental hypothermia can cause bradycardia and confusion, but it does not explain a TSH of 68 mU/L with undetectable free T4.",
   "E": "Hypopituitary coma causes secondary hypothyroidism with a low or inappropriately normal TSH, not a TSH of 68 mU/L."
  },
  "generalisation": "Hypothermia, bradycardia, hyponatraemia and reduced consciousness in someone with untreated hypothyroidism suggest myxoedema coma; give hydrocortisone with thyroid replacement.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P007",
  "source_id": "MRCP1-659",
  "subdomain": "Nephrology",
  "topic": "Nephrology: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 60-year-old man on haemodialysis for end-stage kidney disease has progressive thickening and tightening of the skin of his forearms and legs over 6 months. The skin is woody and indurated with a cobblestone texture, and he has flexion contractures of the knees and elbows. The face and fingers are spared. Symptoms began weeks after an MRI angiogram with a gadolinium-based contrast agent. He has no Raynaud phenomenon, nailfold capillaries are normal and ANA is negative. Eosinophil count is 0.2 × 10^9/L (0.0–0.4). What is the most likely diagnosis?",
  "options": {
   "A": "Generalised morphoea",
   "B": "Eosinophilic fasciitis",
   "C": "Nephrogenic systemic fibrosis",
   "D": "Diffuse cutaneous scleroderma",
   "E": "Scleroedema diabeticorum"
  },
  "correct_letter": "C",
  "why_correct": "Nephrogenic systemic fibrosis follows gadolinium exposure in people with advanced renal impairment (eGFR below 30 mL/min/1.73 m2 or on dialysis). It causes symmetrical woody induration of the limbs with contractures, sparing the face. Use of group II (macrocyclic) agents and avoiding gadolinium where possible have made it rare.",
  "distractor_analysis": {
   "A": "Generalised morphoea causes multiple indurated plaques, often on the trunk, rather than diffuse limb induration after gadolinium in renal failure.",
   "B": "Eosinophilic fasciitis also spares the hands and face but usually follows exertion, shows a groove sign and peripheral eosinophilia, and has no link with gadolinium.",
   "D": "Diffuse cutaneous systemic sclerosis almost always has Raynaud phenomenon, sclerodactyly, abnormal nailfold capillaries and positive ANA, none of which is present.",
   "E": "Scleroedema diabeticorum causes thickening of the upper back and neck in people with long-standing diabetes, not the limbs after gadolinium."
  },
  "generalisation": "Skin induration after gadolinium in a patient with eGFR below 30 or on dialysis suggests nephrogenic systemic fibrosis; prevention is avoidance or use of macrocyclic agents.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P008",
  "source_id": "MRCP1-872",
  "subdomain": "Cardiology",
  "topic": "Cardiology: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 39-year-old man with a past thymoma has had progressive breathlessness and palpitations for 10 days. He develops recurrent sustained ventricular tachycardia and second-degree atrioventricular block. Echocardiography shows a left ventricular ejection fraction of 25%. High-sensitivity troponin T is 1,240 ng/L (0–14). Coronary angiography is normal. He deteriorates over 5 days on standard heart failure management. Endomyocardial biopsy shows a diffuse infiltrate of lymphocytes, eosinophils and multinucleated cells with widespread myocyte necrosis and no granulomas. Peripheral eosinophil count is 0.3 × 10^9/L (0.0–0.4). What is the most likely diagnosis?",
  "options": {
   "A": "Eosinophilic myocarditis",
   "B": "Giant cell myocarditis",
   "C": "Cardiac sarcoidosis",
   "D": "Lymphocytic viral myocarditis",
   "E": "Arrhythmogenic cardiomyopathy"
  },
  "correct_letter": "B",
  "why_correct": "Giant cell myocarditis is a rare, rapidly progressive autoimmune myocarditis of young and middle-aged adults, sometimes associated with thymoma or other autoimmune disease. It presents with heart failure, ventricular tachycardia and heart block. Biopsy shows a mixed infiltrate with multinucleated giant cells and extensive necrosis without granulomas. It needs early combined immunosuppression and transplant assessment.",
  "distractor_analysis": {
   "A": "Eosinophilic myocarditis shows an eosinophil-predominant infiltrate, often with peripheral eosinophilia or a drug or parasitic trigger; the eosinophil count here is normal.",
   "C": "Cardiac sarcoidosis also causes ventricular tachycardia and heart block, but biopsy shows well-formed non-necrotising granulomas with little myocyte necrosis, and the course is usually subacute.",
   "D": "Lymphocytic (viral) myocarditis shows a lymphocytic infiltrate without multinucleated cells, and usually has a less aggressive course.",
   "E": "Arrhythmogenic cardiomyopathy causes ventricular arrhythmias with fibrofatty replacement on biopsy, not an acute inflammatory infiltrate with necrosis."
  },
  "generalisation": "Fulminant heart failure with ventricular tachycardia or heart block that worsens despite standard management should prompt endomyocardial biopsy for giant cell myocarditis.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P009",
  "source_id": "MRCP1-2057",
  "subdomain": "Infectious diseases",
  "topic": "Infectious diseases: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 19-year-old man had a sore throat 6 days ago. He now has a temperature of 39.4 °C, rigors, left-sided neck pain with tender swelling along the left sternocleidomastoid muscle, and pleuritic chest pain. He does not inject drugs and has no heart murmur. CT of the neck shows thrombosis of the left internal jugular vein with no retropharyngeal collection. CT of the chest shows multiple peripheral nodules, some cavitating. Echocardiography shows normal valves. Blood cultures grow Gram-negative anaerobic bacilli at 48 hours. What is the most likely diagnosis?",
  "options": {
   "A": "Staphylococcal pneumonia",
   "B": "Lemierre syndrome",
   "C": "Pulmonary tuberculosis",
   "D": "Tricuspid endocarditis",
   "E": "Retropharyngeal abscess"
  },
  "correct_letter": "B",
  "why_correct": "Lemierre syndrome is septic thrombophlebitis of the internal jugular vein after oropharyngeal infection, usually caused by Fusobacterium necrophorum (a Gram-negative anaerobe). Septic emboli cause cavitating peripheral lung nodules. Treatment is prolonged IV antibiotics with anaerobic cover.",
  "distractor_analysis": {
   "A": "Staphylococcal pneumonia can cavitate, but it does not explain internal jugular vein thrombosis, and blood cultures grow Gram-negative anaerobes rather than Gram-positive cocci.",
   "C": "Tuberculosis causes cavitation over weeks to months, not an acute septic illness after a sore throat with anaerobic bacteraemia.",
   "D": "Right-sided endocarditis also causes septic pulmonary emboli, but there is no drug injection, no murmur, normal valves on echocardiography and jugular vein thrombosis instead.",
   "E": "CT shows no retropharyngeal collection, and a retropharyngeal abscess does not explain jugular vein thrombosis with cavitating lung nodules."
  },
  "generalisation": "Sore throat followed by neck pain, jugular vein thrombosis and cavitating lung nodules in a young adult suggests Lemierre syndrome due to Fusobacterium necrophorum.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P010",
  "source_id": "MRCP1-815",
  "subdomain": "Metabolic medicine",
  "topic": "Metabolic medicine: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 24-year-old woman has had episodes of confusion and vomiting after high-protein meals since her teens. She started sodium valproate 2 weeks ago and is now drowsy. Plasma ammonia is 186 micromol/L (0–50). Arterial pH is 7.47 (7.35–7.45) and the anion gap is normal. Glucose and liver tests are normal. Plasma glutamine is 1,050 micromol/L (400–700) and citrulline 8 micromol/L (15–50). Urinary orotic acid is 18 micromol/mmol creatinine (below 3). Urine organic acids show no abnormal metabolites. What is the most likely diagnosis?",
  "options": {
   "A": "Argininosuccinate synthetase deficiency",
   "B": "Ornithine transcarbamylase deficiency",
   "C": "Argininosuccinate lyase deficiency",
   "D": "Carbamoyl phosphate synthetase deficiency",
   "E": "Methylmalonyl-CoA mutase deficiency"
  },
  "correct_letter": "B",
  "why_correct": "Ornithine transcarbamylase deficiency is the commonest urea-cycle disorder and is X-linked; heterozygous women and mildly affected men can present in adulthood after a protein load, illness or valproate. Hyperammonaemia with respiratory alkalosis, high glutamine, low citrulline and high urinary orotic acid (carbamoyl phosphate overflows into pyrimidine synthesis) is the typical pattern.",
  "distractor_analysis": {
   "A": "Argininosuccinate synthetase deficiency (citrullinaemia type 1) causes a very high plasma citrulline, not a low one.",
   "C": "Argininosuccinate lyase deficiency raises citrulline moderately and causes argininosuccinic aciduria, often with liver disease and trichorrhexis nodosa.",
   "D": "Carbamoyl phosphate synthetase deficiency also gives hyperammonaemia with low citrulline, but urinary orotic acid is low or normal because no carbamoyl phosphate accumulates.",
   "E": "Methylmalonic acidaemia is an organic acidaemia with high-anion-gap metabolic acidosis, ketosis and abnormal urine organic acids, none of which is present."
  },
  "generalisation": "In adult hyperammonaemia with respiratory alkalosis, low citrulline and high orotic acid indicate ornithine transcarbamylase deficiency; valproate can unmask it.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P011",
  "source_id": "MRCP1-640",
  "subdomain": "Clinical pharmacology and therapeutics",
  "topic": "Clinical pharmacology and therapeutics: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 63-year-old woman with rheumatoid arthritis started methotrexate 15 mg once weekly 4 months ago. She now has a 3-week history of fever, dry cough and progressive breathlessness. Her temperature is 38.0°C, respiratory rate 24/min and oxygen saturation 89% on air. There are fine bilateral inspiratory crackles and no peripheral oedema. High-resolution CT shows bilateral diffuse ground-glass opacities with no honeycombing. Blood tests show CRP 46 mg/L (<5), LDH 190 U/L (135–214), serum beta-D-glucan 18 pg/mL (<60) and NT-proBNP 110 ng/L (<400). Bronchoalveolar lavage shows lymphocytes 45% (<15); Pneumocystis PCR and bacterial cultures are negative. What is the most likely diagnosis?",
  "options": {
   "A": "Drug-induced pneumonitis",
   "B": "Cardiogenic pulmonary oedema",
   "C": "Rheumatoid interstitial lung disease",
   "D": "Cryptogenic organising pneumonia",
   "E": "Pneumocystis pneumonia"
  },
  "correct_letter": "A",
  "why_correct": "Methotrexate pneumonitis is a hypersensitivity reaction that usually appears within the first year of treatment. It presents subacutely with fever, dry cough, breathlessness and hypoxia, with diffuse ground-glass change on CT and a lymphocytic bronchoalveolar lavage. Infection must be excluded first; here a normal LDH and beta-D-glucan and a negative Pneumocystis PCR make opportunistic infection unlikely.",
  "distractor_analysis": {
   "B": "Cardiogenic pulmonary oedema is not supported by a normal NT-proBNP, the absence of peripheral oedema, fever and a lymphocytic lavage.",
   "C": "Rheumatoid interstitial lung disease usually follows a chronic course over months to years, most often with a usual interstitial pneumonia pattern of reticulation and honeycombing, not a 3-week febrile illness with diffuse ground-glass change.",
   "D": "Cryptogenic organising pneumonia typically shows patchy, often peripheral or perilobular consolidation that may migrate. 'Cryptogenic' means no cause is found, which is not the case when a recently started pneumotoxic drug is present.",
   "E": "Pneumocystis pneumonia is the main infective mimic in a patient on methotrexate, but it usually raises LDH and beta-D-glucan, and lavage PCR is sensitive. Normal results for all three make it unlikely here."
  },
  "generalisation": "In a patient who recently started methotrexate and develops subacute fever, cough, hypoxia and diffuse ground-glass opacities, consider drug pneumonitis once infection (especially Pneumocystis) has been excluded. Stop methotrexate and seek specialist respiratory advice; corticosteroids are often used.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P012",
  "source_id": "MRCP1-876",
  "subdomain": "Dermatology",
  "topic": "Dermatology: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 49-year-old man has a 6-month history of fragile skin and tense blisters on the backs of his hands after minor knocks, healing with scarring and milia. He has noticed increased hair growth over his cheeks and urine that darkens on standing. He drinks about 60 units of alcohol a week. There is no abdominal pain and no history of neuropathy. Blood tests show ALT 78 U/L (<40), GGT 210 U/L (<55) and ferritin 690 micrograms/L (30–400). The urine porphyrin:creatinine ratio is 420 nmol/mmol (<35), and the urine porphobilinogen is within the reference range. What is the most likely diagnosis?",
  "options": {
   "A": "Erythropoietic protoporphyria",
   "B": "Bullous pemphigoid",
   "C": "Pemphigus vulgaris",
   "D": "Acute intermittent porphyria",
   "E": "Porphyria cutanea tarda"
  },
  "correct_letter": "E",
  "why_correct": "Porphyria cutanea tarda is the commonest porphyria. Reduced hepatic uroporphyrinogen decarboxylase activity leads to accumulation of photosensitising porphyrins, causing skin fragility, blisters, scarring, milia and hypertrichosis on sun-exposed skin. Alcohol, iron overload, hepatitis C and oestrogens are common triggers, and urine porphyrins are high while porphobilinogen is normal.",
  "distractor_analysis": {
   "A": "Erythropoietic protoporphyria causes immediate burning pain on sun exposure from childhood, with little blistering. Urine porphyrins are typically normal because protoporphyrin is excreted in bile.",
   "B": "Bullous pemphigoid usually affects older adults with tense blisters on the trunk and flexures, often after an itchy urticarial phase. It is not linked to hypertrichosis or porphyrin excess.",
   "C": "Pemphigus vulgaris causes flaccid, fragile blisters and erosions, usually with oral mucosal involvement. It does not cause hypertrichosis, dark urine or raised urine porphyrins.",
   "D": "Acute intermittent porphyria causes acute neurovisceral attacks (abdominal pain, neuropathy, hyponatraemia) with a high urine porphobilinogen. It has no skin features."
  },
  "generalisation": "Blistering and fragility of sun-exposed skin with hypertrichosis, in a patient with alcohol excess or iron overload, suggests porphyria cutanea tarda. Check urine porphyrins, ferritin and hepatitis C status; treatment includes removing triggers and venesection or low-dose hydroxychloroquine.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P013",
  "source_id": "MRCP1-2038",
  "subdomain": "Clinical immunology and allergy",
  "topic": "Clinical immunology and allergy: investigation",
  "difficulty": "Moderate",
  "stem": "A 52-year-old forestry worker has had four episodes of generalised urticaria, abdominal cramps and wheeze. Each began 3 to 5 hours after an evening meal containing beef, pork or lamb. He has had no reactions after eating poultry or fish. He recalls many tick bites over the past 2 years. Skin-prick tests to peanut, tree nuts, egg, milk, fish and wheat were negative. What is the most appropriate investigation?",
  "options": {
   "A": "Skin-prick test to beef extract",
   "B": "Open oral challenge with beef",
   "C": "Specific IgE to alpha-gal",
   "D": "Serum tryptase during a reaction",
   "E": "Specific IgE to ovomucoid"
  },
  "correct_letter": "C",
  "why_correct": "Delayed urticaria or anaphylaxis 3 to 6 hours after eating mammalian meat, with a history of tick bites, suggests sensitisation to galactose-alpha-1,3-galactose (alpha-gal). Specific IgE to alpha-gal is the most useful test to confirm the diagnosis.",
  "distractor_analysis": {
   "A": "Skin-prick testing with commercial meat extracts has low sensitivity for alpha-gal allergy and is often negative, so it is less useful than specific IgE.",
   "B": "An oral food challenge carries a risk of a delayed severe reaction and is not the first test when a validated blood test is available.",
   "D": "Serum tryptase taken 1 to 4 hours after a reaction supports mast-cell activation, but it does not identify the trigger.",
   "E": "Ovomucoid (Gal d 1) is an egg allergen. Egg testing was already negative, and egg does not explain reactions to mammalian meat."
  },
  "generalisation": "Think of alpha-gal syndrome when anaphylaxis or urticaria occurs several hours after red meat, especially with tick exposure (reported in the UK). Confirm with alpha-gal specific IgE, advise avoiding mammalian meat and gelatin, and consider other alpha-gal sources such as some medicines.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P014",
  "source_id": "MRCP1-2389",
  "subdomain": "Ophthalmology",
  "topic": "Ophthalmology: management",
  "difficulty": "Moderate",
  "stem": "A 67-year-old woman presented with sudden pain in her right eye, blurred vision, coloured haloes around lights, headache and vomiting. Right intraocular pressure was 58 mmHg (10–21), the cornea was hazy and the pupil was mid-dilated and poorly reactive. After topical and systemic pressure-lowering drugs, the right intraocular pressure is now 17 mmHg and the cornea has cleared. Gonioscopy shows a closed angle on the right and a narrow, occludable angle on the left. Neither lens shows a visually significant cataract. What is the most appropriate treatment to prevent further attacks?",
  "options": {
   "A": "Long-term topical latanoprost",
   "B": "Trabeculectomy to the affected eye",
   "C": "Long-term oral acetazolamide",
   "D": "Laser iridotomy to both eyes",
   "E": "Laser iridotomy to the affected eye"
  },
  "correct_letter": "D",
  "why_correct": "Once acute primary angle closure has been controlled medically, laser peripheral iridotomy relieves pupil block. The fellow eye has a similar anatomy and a high risk of an acute attack, so both eyes are treated.",
  "distractor_analysis": {
   "A": "Latanoprost lowers intraocular pressure but does not relieve the anatomical pupil block that causes angle closure, so it does not prevent further attacks.",
   "B": "Trabeculectomy is reserved for uncontrolled pressure after the angle has been opened. It is not first-line prevention after a controlled acute attack.",
   "C": "Acetazolamide is used short term to lower pressure in the acute attack. Long-term use causes paraesthesia, fatigue, renal stones and electrolyte disturbance, and it does not treat the cause.",
   "E": "Treating the affected eye leaves the occludable fellow eye at high risk of its own acute attack, so prophylactic treatment of the other eye is also needed."
  },
  "generalisation": "After acute angle closure, give definitive treatment to relieve pupil block (laser peripheral iridotomy, or lens extraction in selected patients) and treat the fellow eye prophylactically. Avoid mydriatics and anticholinergic drugs in patients with occludable angles.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P015",
  "source_id": "MRCP1-823",
  "subdomain": "Rheumatology",
  "topic": "Rheumatology: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 24-year-old man of Armenian descent has had attacks since the age of 12. Each attack lasts 1 to 3 days and consists of fever up to 39.4°C, abdominal pain with guarding and pleuritic chest pain. He is well between attacks. There is no rash, mouth ulceration, lymphadenopathy or hearing loss, and attacks are not provoked by cold. During an attack his CRP is 186 mg/L (<5); between attacks it is 3 mg/L (<5). Antinuclear antibodies are negative. The urine protein:creatinine ratio is 45 mg/mmol (<15). What is the most likely diagnosis?",
  "options": {
   "A": "Systemic lupus erythematosus",
   "B": "Familial Mediterranean fever",
   "C": "Mevalonate kinase deficiency",
   "D": "Muckle-Wells syndrome",
   "E": "Adult-onset Still's disease"
  },
  "correct_letter": "B",
  "why_correct": "Familial Mediterranean fever (MEFV mutations) is the commonest monogenic autoinflammatory disease, most frequent in Armenian, Turkish, Arab and Sephardic Jewish populations. Attacks of fever with serositis (peritonitis, pleuritis) last 1 to 3 days with normal inflammatory markers between attacks. Proteinuria raises concern about AA amyloidosis, which colchicine helps to prevent.",
  "distractor_analysis": {
   "A": "Systemic lupus erythematosus can cause serositis, but antinuclear antibodies are almost invariably positive and the course is not one of discrete self-limiting attacks with full recovery.",
   "C": "Mevalonate kinase deficiency usually starts in infancy, with attacks of 3 to 7 days featuring cervical lymphadenopathy, rash, mouth ulcers and diarrhoea.",
   "D": "Muckle-Wells syndrome (a cryopyrin-associated periodic syndrome) causes urticarial rash, conjunctivitis and progressive sensorineural deafness, often with cold-related flares.",
   "E": "Adult-onset Still's disease causes daily quotidian fevers with an evanescent salmon-pink rash, arthritis and a very high ferritin, not short, discrete attacks of serositis from childhood."
  },
  "generalisation": "Recurrent 1- to 3-day attacks of fever and serositis from childhood, with normal markers in between, in a patient of eastern Mediterranean descent suggest familial Mediterranean fever. Treat with lifelong colchicine and monitor for proteinuria from AA amyloidosis.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P016",
  "source_id": "MRCP1-774",
  "subdomain": "Neurology",
  "topic": "Neurology: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 29-year-old man had chronic diarrhoea in childhood and had bilateral cataracts removed at the age of 16. Over the past 3 years he has developed progressive gait ataxia, stiffness in his legs and cognitive decline (MoCA 22/30). Both Achilles tendons are thickened and nodular, and there is bilateral lower-limb spasticity with extensor plantar responses. Total cholesterol is 4.6 mmol/L (3.0–5.0) and LDL cholesterol 2.8 mmol/L (<3.0). MRI of the brain shows symmetrical T2 hyperintensity in both dentate nuclei. What is the most likely diagnosis?",
  "options": {
   "A": "Abetalipoproteinaemia",
   "B": "Familial hypercholesterolaemia",
   "C": "Cerebrotendinous xanthomatosis",
   "D": "Niemann-Pick disease type C",
   "E": "Adult-onset adrenoleukodystrophy"
  },
  "correct_letter": "C",
  "why_correct": "Cerebrotendinous xanthomatosis is an autosomal recessive defect of bile acid synthesis (CYP27A1, sterol 27-hydroxylase deficiency). Cholestanol accumulates in tendons, lens and brain, causing childhood diarrhoea, juvenile cataracts, tendon xanthomas with normal cholesterol, ataxia, spasticity, cognitive decline and dentate nucleus signal change. Plasma cholestanol is high, and chenodeoxycholic acid is the treatment.",
  "distractor_analysis": {
   "A": "Abetalipoproteinaemia causes fat malabsorption, acanthocytes, retinopathy and a vitamin E-deficiency spinocerebellar syndrome, with very low cholesterol and no tendon xanthomas.",
   "B": "Familial hypercholesterolaemia causes tendon xanthomas with a high LDL cholesterol and premature coronary disease, not a normal lipid profile with cataracts and a progressive neurological syndrome.",
   "D": "Niemann-Pick disease type C causes ataxia, cognitive and psychiatric decline and vertical supranuclear gaze palsy, often with splenomegaly, but not tendon xanthomas or juvenile cataracts.",
   "E": "Adult-onset adrenoleukodystrophy (adrenomyeloneuropathy) causes spastic paraparesis and adrenal insufficiency in men, with posterior white-matter change, but not tendon xanthomas or cataracts."
  },
  "generalisation": "Tendon xanthomas with a normal cholesterol should prompt a search for cerebrotendinous xanthomatosis or sitosterolaemia. Early cataracts, childhood diarrhoea and neurological decline point to cerebrotendinous xanthomatosis, which is treatable with chenodeoxycholic acid if diagnosed early.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P017",
  "source_id": "MRCP1-2359",
  "subdomain": "Haematology",
  "topic": "Haematology: investigation",
  "difficulty": "Moderate",
  "stem": "A 36-year-old woman has episodes of dark urine on waking, fatigue and abdominal pain. Three months ago she had a hepatic vein thrombosis. Blood tests show haemoglobin 86 g/L (115–165), MCV 104 fL (80–100), white cell count 3.1 × 10^9/L (4.0–11.0), neutrophils 1.4 × 10^9/L (2.0–7.5), platelets 98 × 10^9/L (150–400), reticulocytes 180 × 10^9/L (25–100), LDH 1,850 U/L (135–214), haptoglobin <0.1 g/L (0.3–2.0) and bilirubin 38 micromol/L (<21). Urine haemosiderin is positive and the direct antiglobulin test is negative. The blood film shows polychromasia with no spherocytes or red-cell fragments. What is the most appropriate investigation?",
  "options": {
   "A": "Flow cytometry for CD59 and FLAER",
   "B": "Eosin-5-maleimide binding test",
   "C": "Haemoglobin electrophoresis",
   "D": "JAK2 V617F mutation analysis",
   "E": "Bone marrow aspirate and trephine"
  },
  "correct_letter": "A",
  "why_correct": "Intravascular haemolysis (high LDH, absent haptoglobin, haemosiderinuria) with a negative DAT, cytopenias and thrombosis at an unusual site suggests paroxysmal nocturnal haemoglobinuria. Peripheral blood flow cytometry showing loss of GPI-anchored proteins (CD55, CD59, FLAER binding) on red cells and granulocytes confirms the diagnosis and measures clone size.",
  "distractor_analysis": {
   "B": "The eosin-5-maleimide binding test detects hereditary spherocytosis, which causes extravascular haemolysis with spherocytes on the film, not haemosiderinuria and thrombosis.",
   "C": "Haemoglobin electrophoresis detects haemoglobinopathies, which cause chronic extravascular haemolysis with characteristic red-cell changes, not intravascular haemolysis with cytopenias and venous thrombosis.",
   "D": "JAK2 V617F is the commonest cause of hepatic vein thrombosis in myeloproliferative neoplasms, but these cause high, not low, blood counts and do not explain intravascular haemolysis.",
   "E": "Bone marrow examination helps assess associated marrow failure such as aplastic anaemia, but it does not confirm the diagnosis; flow cytometry of peripheral blood does."
  },
  "generalisation": "Consider paroxysmal nocturnal haemoglobinuria in any patient with Coombs-negative intravascular haemolysis, cytopenias or thrombosis at an unusual site (hepatic, portal, cerebral veins). Peripheral blood flow cytometry for GPI-anchored proteins is the diagnostic test.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P018",
  "source_id": "MRCP1-263",
  "subdomain": "Gastroenterology and hepatology",
  "topic": "Gastroenterology and hepatology: next step",
  "difficulty": "Moderate",
  "stem": "A 71-year-old woman presents with fever of 38.9°C, right upper-quadrant pain and jaundice. On arrival her blood pressure was 84/50 mmHg, heart rate 118 beats/min, and she was confused. Blood tests show bilirubin 96 micromol/L (<21), ALP 420 U/L (30–130), ALT 180 U/L (<40), white cell count 19.2 × 10^9/L (4.0–11.0), lactate 4.1 mmol/L (0.5–2.0) and creatinine 148 micromol/L (45–90). Ultrasound shows a common bile duct of 11 mm containing a 9-mm stone, and gallstones in the gallbladder. She has received 2 L of crystalloid, blood cultures have been taken and intravenous piperacillin with tazobactam has been started. Her blood pressure is now 102/64 mmHg. What is the most appropriate next step?",
  "options": {
   "A": "Percutaneous cholecystostomy",
   "B": "MRCP, then ERCP if a stone is seen",
   "C": "Antibiotics, then ERCP in 6 weeks",
   "D": "Emergency laparoscopic cholecystectomy",
   "E": "Urgent ERCP and biliary stent"
  },
  "correct_letter": "E",
  "why_correct": "Fever, jaundice and right upper-quadrant pain with hypotension, confusion, acute kidney injury and a high lactate indicate severe (grade III) acute cholangitis from an obstructing duct stone. After resuscitation and antibiotics, the definitive step is urgent biliary decompression by ERCP, usually with a stent or nasobiliary drain; definitive stone clearance can follow once she is stable.",
  "distractor_analysis": {
   "A": "Percutaneous cholecystostomy drains the gallbladder, not the common bile duct, so it does not relieve the obstruction causing cholangitis. Percutaneous transhepatic drainage is the fallback if ERCP fails.",
   "B": "Ultrasound has already shown a dilated duct with a stone. Delaying drainage for further imaging is inappropriate in severe cholangitis.",
   "C": "Antibiotics without decompression are inadequate in severe cholangitis with organ dysfunction; delaying ERCP increases the risk of death.",
   "D": "Cholecystectomy does not drain the obstructed common bile duct, and emergency surgery in a septic, unstable patient carries high risk. It is done later, after the duct has been cleared."
  },
  "generalisation": "In acute cholangitis, give fluids and antibiotics promptly and grade severity. Organ dysfunction (grade III) needs urgent biliary drainage, usually by ERCP, once initial resuscitation has started.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P019",
  "source_id": "MRCP1-1464",
  "subdomain": "Respiratory medicine",
  "topic": "Respiratory medicine: cause",
  "difficulty": "Moderate",
  "stem": "A 74-year-old woman has an 8-month history of progressive dry cough and exertional breathlessness. For 2 years she has taken a nightly antibiotic as prophylaxis against recurrent urinary tract infections. She also takes a calcium-channel blocker, a statin and a weekly bisphosphonate. She is afebrile, with fine bibasal inspiratory crackles and oxygen saturation 93% on air. FVC is 68% predicted and TLCO 48% predicted. High-resolution CT shows bilateral subpleural reticulation and ground-glass change. Blood tests show CRP 8 mg/L (<5), NT-proBNP 210 ng/L (<400), eosinophils 0.3 × 10^9/L (0.0–0.4) and ALT 62 U/L (<40). What is the most likely cause?",
  "options": {
   "A": "Atorvastatin",
   "B": "Alendronic acid",
   "C": "Trimethoprim",
   "D": "Amlodipine",
   "E": "Nitrofurantoin"
  },
  "correct_letter": "E",
  "why_correct": "Nitrofurantoin is widely used as long-term prophylaxis against urinary infection. With prolonged use it can cause chronic pulmonary reactions (interstitial pneumonitis and fibrosis) and hepatotoxicity, and the MHRA advises monitoring for and stopping the drug if new pulmonary symptoms or abnormal liver tests develop.",
  "distractor_analysis": {
   "A": "Statin-associated interstitial lung disease has been reported, but it is very rare and much less likely than a known pneumotoxic and hepatotoxic antibiotic taken for 2 years.",
   "B": "Alendronic acid causes oesophagitis and, rarely, osteonecrosis of the jaw or atypical femoral fractures. It does not cause interstitial lung disease.",
   "C": "Trimethoprim is also used for urinary prophylaxis, but it is not a recognised cause of chronic interstitial lung disease; its main adverse effects are hyperkalaemia, rash and folate antagonism.",
   "D": "Amlodipine commonly causes ankle oedema and flushing. It is not associated with interstitial lung disease."
  },
  "generalisation": "In an older woman with new interstitial lung disease or abnormal liver tests, check for long-term nitrofurantoin. Stop the drug; many chronic reactions improve, though some patients are left with fibrosis.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P020",
  "source_id": "MRCP1-971",
  "subdomain": "Endocrinology and diabetes",
  "topic": "Endocrinology and diabetes: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 32-year-old woman is referred with diabetes and recurrent acute pancreatitis. Her HbA1c is 86 mmol/mol (20–41) despite metformin and insulin 180 units/day. Fasting triglycerides are 18.4 mmol/L (<1.7) and ALT 74 U/L (<40); ultrasound shows a fatty liver. Since puberty she has lost fat from her arms, legs and buttocks, which look muscular with prominent veins, while fat has accumulated on her face, neck and chin. Acanthosis nigricans is present. Her mother and a maternal aunt have the same body shape and developed diabetes in their twenties. After an overnight 1 mg dexamethasone suppression test, serum cortisol is 28 nmol/L (<50). What is the most likely diagnosis?",
  "options": {
   "A": "Acquired generalised lipodystrophy",
   "B": "Type B insulin resistance syndrome",
   "C": "ACTH-dependent Cushing syndrome",
   "D": "Maturity-onset diabetes of the young",
   "E": "Familial partial lipodystrophy"
  },
  "correct_letter": "E",
  "why_correct": "Familial partial lipodystrophy (often Dunnigan type, LMNA, autosomal dominant) causes loss of limb and gluteal fat from puberty with fat accumulation on the face and neck. Severe insulin resistance follows, with diabetes needing high insulin doses, hypertriglyceridaemia with pancreatitis, fatty liver and acanthosis nigricans. Several affected relatives support a dominant inheritance.",
  "distractor_analysis": {
   "A": "Acquired generalised lipodystrophy causes loss of fat from the whole body, including the face, often after autoimmune disease or panniculitis, and is not inherited.",
   "B": "Type B insulin resistance is caused by insulin receptor autoantibodies, usually in middle-aged women with other autoimmune disease. It does not cause a lifelong regional fat distribution shared by relatives.",
   "C": "Cushing syndrome causes central fat gain with facial fullness, but suppression of cortisol to 28 nmol/L after dexamethasone makes it very unlikely, and it does not cause muscular-looking limbs or run in families.",
   "D": "Maturity-onset diabetes of the young causes familial early-onset diabetes, but typically without insulin resistance, fat redistribution or very high triglycerides."
  },
  "generalisation": "In a patient with insulin-resistant diabetes, very high triglycerides and fatty liver, examine fat distribution. Limb and gluteal fat loss with facial and neck fat, running in the family, suggests familial partial lipodystrophy; refer to a specialist lipodystrophy service.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P021",
  "source_id": "MRCP1-599",
  "subdomain": "Nephrology",
  "topic": "Nephrology: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 32-year-old man who smokes 15 cigarettes a day presents with 10 days of haemoptysis and reduced urine output. He has no rash, sinus symptoms or joint pain. Haemoglobin is 96 g/L (130–180) and creatinine 512 micromol/L (60–110); 6 weeks earlier it was 84 micromol/L (60–110). Urine dipstick shows blood 3+ and protein 2+, and microscopy shows red-cell casts. Chest X-ray shows bilateral perihilar alveolar shadowing. ANCA and ANA results are awaited. Renal biopsy shows crescents in 80% of glomeruli, and immunofluorescence shows linear IgG along the glomerular capillary walls. What is the most likely diagnosis?",
  "options": {
   "A": "Granulomatosis with polyangiitis",
   "B": "IgA vasculitis with nephritis",
   "C": "Class IV lupus nephritis",
   "D": "Microscopic polyangiitis",
   "E": "Anti-GBM antibody disease"
  },
  "correct_letter": "E",
  "why_correct": "Pulmonary haemorrhage with rapidly progressive crescentic glomerulonephritis and linear IgG deposition along the glomerular capillary walls is the defining picture of anti-GBM (Goodpasture) disease. Smoking increases the risk of lung haemorrhage. Treatment is urgent plasma exchange with corticosteroids and cyclophosphamide.",
  "distractor_analysis": {
   "A": "Granulomatosis with polyangiitis can cause a pulmonary-renal syndrome with crescents, but it is a pauci-immune glomerulonephritis with little or no immunoglobulin on immunofluorescence, and upper-airway disease is usual.",
   "B": "IgA vasculitis causes purpura, arthralgia and mesangial IgA deposits; pulmonary haemorrhage is rare and the immunofluorescence pattern is granular mesangial IgA.",
   "C": "Class IV lupus nephritis shows granular 'full-house' immune deposits (IgG, IgA, IgM, C3, C1q) in a subendothelial pattern, not linear IgG, and usually occurs with other features of lupus.",
   "D": "Microscopic polyangiitis also causes pulmonary haemorrhage and crescentic glomerulonephritis, but the biopsy is pauci-immune rather than showing linear IgG."
  },
  "generalisation": "Linear IgG along the glomerular basement membrane separates anti-GBM disease from pauci-immune ANCA vasculitis and immune-complex nephritis. Check ANCA as well, because up to a third of patients are double-positive.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P022",
  "source_id": "MRCP1-624",
  "subdomain": "Cardiology",
  "topic": "Cardiology: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 25-year-old woman has 8 months of palpitations, light-headedness and fatigue that come on within minutes of standing and settle when she lies down. She has not lost consciousness. Lying, her heart rate is 68 beats/min and blood pressure 112/72 mmHg. After 10 minutes standing, her heart rate is 116 beats/min and blood pressure 108/70 mmHg. A 12-lead ECG shows sinus rhythm with normal intervals. A 24-hour ECG shows sinus rhythm throughout, with a mean rate of 72 beats/min and no rate above 95 beats/min while seated or lying. Haemoglobin is 131 g/L (115–165) and TSH 1.8 mU/L (0.35–5.5). What is the most likely diagnosis?",
  "options": {
   "A": "AV nodal re-entrant tachycardia",
   "B": "Inappropriate sinus tachycardia",
   "C": "Postural tachycardia syndrome",
   "D": "Vasovagal reflex syncope",
   "E": "Classical orthostatic hypotension"
  },
  "correct_letter": "C",
  "why_correct": "A sustained rise in heart rate of 30 beats/min or more within 10 minutes of standing, without orthostatic hypotension, with chronic orthostatic symptoms and no other cause, defines postural tachycardia syndrome (PoTS).",
  "distractor_analysis": {
   "A": "AV nodal re-entrant tachycardia has abrupt onset and offset, a regular narrow-complex rate usually above 150 beats/min, and is not provoked reliably by standing; the 24-hour ECG shows sinus rhythm throughout.",
   "B": "Inappropriate sinus tachycardia gives a raised resting and mean heart rate that is not tied to posture; here the 24-hour mean rate is normal and the rate is normal when seated or lying.",
   "D": "Vasovagal syncope causes episodes of hypotension and bradycardia with loss of consciousness after a trigger, not a sustained tachycardia every time she stands.",
   "E": "Classical orthostatic hypotension needs a fall in systolic pressure of at least 20 mmHg or diastolic of at least 10 mmHg within 3 minutes of standing; her blood pressure barely changes."
  },
  "generalisation": "Diagnose PoTS from an active stand or tilt test: heart-rate rise of 30 beats/min or more (40 in those aged 12–19) within 10 minutes of standing, without orthostatic hypotension, after excluding anaemia, thyroid disease and arrhythmia.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P023",
  "source_id": "MRCP1-2161",
  "subdomain": "Infectious diseases",
  "topic": "Infectious diseases: interpretation",
  "difficulty": "Moderate",
  "stem": "A 34-year-old nurse completed a three-dose hepatitis B vaccine course 2 months ago, as required by occupational health. She is well and reports no needlestick injury or other known exposure. Her serology shows: HBsAg not detected; total anti-HBc not detected; anti-HBs 150 IU/L (response threshold: 10 or more). What is the most likely interpretation of these results?",
  "options": {
   "A": "Window period of acute infection",
   "B": "Chronic carrier state",
   "C": "Immune after past infection",
   "D": "Immune after vaccination",
   "E": "Vaccine non-responder"
  },
  "correct_letter": "D",
  "why_correct": "Anti-HBs is the only marker produced by vaccination, because the vaccine contains HBsAg alone. Anti-HBs of 10 IU/L or more with negative HBsAg and negative anti-HBc therefore shows a response to vaccination, with no evidence of past or current infection.",
  "distractor_analysis": {
   "A": "In the window period of acute infection HBsAg has cleared but anti-HBs has not yet appeared, and IgM anti-HBc is positive. Here anti-HBc is negative and anti-HBs is present.",
   "B": "Chronic infection is defined by HBsAg persisting for more than 6 months, with positive anti-HBc. HBsAg is not detected here.",
   "C": "Immunity after natural infection gives positive anti-HBc together with anti-HBs. A negative anti-HBc rules this out.",
   "E": "A non-responder has anti-HBs below 10 IU/L 1–4 months after a full course. Her level of 150 IU/L is a good response."
  },
  "generalisation": "Read hepatitis B serology as a pattern: anti-HBs alone means vaccine response; anti-HBs with anti-HBc means past infection; HBsAg means current infection; IgM anti-HBc marks acute infection, including the window period.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P024",
  "source_id": "MRCP1-2240",
  "subdomain": "Metabolic medicine",
  "topic": "Metabolic medicine: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 21-year-old man has tendon xanthomas over his Achilles tendons and the extensor tendons of his hands, first noticed at the age of 14. Fasting lipids: total cholesterol 7.4 mmol/L (below 5.0), LDL cholesterol 5.2 mmol/L (below 3.0), HDL cholesterol 1.3 mmol/L (above 1.0), triglycerides 1.0 mmol/L (below 1.7). LDL cholesterol fell by 8% on atorvastatin 80 mg daily but by 45% when ezetimibe was started. Haemoglobin is 118 g/L (130–180), reticulocytes 190 × 10^9/L (20–100) and platelets 92 × 10^9/L (150–400); the blood film shows stomatocytes and large platelets. Both parents have normal cholesterol. He has no diarrhoea, cataracts or neurological symptoms. What is the most likely diagnosis?",
  "options": {
   "A": "Tangier disease (ABCA1)",
   "B": "Familial hypercholesterolaemia (LDLR)",
   "C": "Abetalipoproteinaemia (MTTP)",
   "D": "Cerebrotendinous xanthomatosis (CYP27A1)",
   "E": "Sitosterolaemia (ABCG5/ABCG8)"
  },
  "correct_letter": "E",
  "why_correct": "Sitosterolaemia is an autosomal recessive defect of the ABCG5/ABCG8 sterol transporter, so plant sterols are absorbed and not excreted into bile. It causes tendon xanthomas out of proportion to the LDL cholesterol, a poor response to statins, a marked response to ezetimibe (which blocks sterol absorption) and haemolysis with stomatocytes and large platelets (macrothrombocytopenia). Recessive inheritance fits parents with normal cholesterol.",
  "distractor_analysis": {
   "A": "Tangier disease causes very low HDL cholesterol and apoA-I, orange tonsils and neuropathy. Here HDL is normal.",
   "B": "Heterozygous familial hypercholesterolaemia is autosomal dominant, so a parent would usually have high cholesterol, and LDL cholesterol falls well on a high-intensity statin. It does not cause haemolysis or large platelets.",
   "C": "Abetalipoproteinaemia causes very low LDL cholesterol and triglyceride, acanthocytes, fat malabsorption and vitamin E deficiency neuropathy, not xanthomas.",
   "D": "Cerebrotendinous xanthomatosis causes tendon xanthomas with chronic diarrhoea, juvenile cataracts and progressive neurological disease, none of which he has, and normal cholesterol."
  },
  "generalisation": "Suspect sitosterolaemia when xanthomas are out of proportion to LDL cholesterol, statins work poorly, ezetimibe works well and there is stomatocytic haemolysis with macrothrombocytopenia. Confirm with plasma plant-sterol levels.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P025",
  "source_id": "MRCP1-2197",
  "subdomain": "Clinical pharmacology and therapeutics",
  "topic": "Clinical pharmacology and therapeutics: next step",
  "difficulty": "Moderate",
  "stem": "A 73-year-old man with type 2 diabetes takes metformin 1 g twice daily. He presents after 3 days of vomiting and is drowsy, with a respiratory rate of 32/min and blood pressure 96/58 mmHg. Results: creatinine 486 micromol/L (60–110), baseline 92; potassium 5.9 mmol/L (3.5–5.3); pH 7.05 (7.35–7.45); bicarbonate 6 mmol/L (22–29); lactate 14 mmol/L (0.5–2.2); glucose 7.2 mmol/L (4.0–7.8). Metformin is stopped and he receives 3 litres of intravenous fluid over 4 hours; mean arterial pressure is now 72 mmHg. No source of sepsis or ischaemia is found. Repeat tests show pH 6.98, lactate 16 mmol/L (0.5–2.2) and urine output 10 mL/hour. What is the most appropriate next step?",
  "options": {
   "A": "Intravenous thiamine",
   "B": "Oral activated charcoal",
   "C": "Further intravenous crystalloid",
   "D": "Urgent haemodialysis",
   "E": "Intravenous sodium bicarbonate"
  },
  "correct_letter": "D",
  "why_correct": "This is metformin-associated lactic acidosis with acute kidney injury, so the drug cannot be cleared by the kidneys. Worsening acidosis (pH below 7.0, lactate above 15 mmol/L) despite stopping metformin and restoring perfusion, with oliguria and hyperkalaemia, is an indication for extracorporeal treatment. Haemodialysis removes metformin and lactate and corrects the acidosis and potassium.",
  "distractor_analysis": {
   "A": "Thiamine treats lactic acidosis from thiamine deficiency, for example in alcohol misuse or malnutrition. Nothing here suggests that, and it would not clear metformin.",
   "B": "Activated charcoal is useful within about an hour of an acute overdose. This is accumulation during regular dosing, and he is drowsy with an unprotected airway.",
   "C": "He is no longer hypotensive and is oliguric, so more crystalloid risks fluid overload and will not clear metformin or correct the acidosis.",
   "E": "Sodium bicarbonate may be considered as a temporising measure, but it does not remove metformin, can worsen intracellular acidosis and volume overload, and does not deal with oliguric kidney injury."
  },
  "generalisation": "In metformin-associated lactic acidosis, stop metformin and support the circulation; if acidosis worsens or the kidneys fail (pH 7.0 or below, lactate above 15–20 mmol/L, shock or reduced consciousness), arrange haemodialysis early.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P026",
  "source_id": "MRCP1-275",
  "subdomain": "Dermatology",
  "topic": "Dermatology: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 36-year-old man has a 4-month history of an intensely itchy eruption on his elbows, knees, buttocks and scalp. Examination shows symmetrical groups of excoriated papules and small vesicles. There are no burrows in the finger webs, no scaly plaques, no large tense bullae and no mouth lesions. He reports intermittent bloating. Haemoglobin is 108 g/L (130–180) and ferritin 9 micrograms/L (30–400). He takes no regular medication. What is the most likely diagnosis?",
  "options": {
   "A": "Linear IgA bullous dermatosis",
   "B": "Scabies infestation",
   "C": "Dermatitis herpetiformis",
   "D": "Chronic plaque psoriasis",
   "E": "Early bullous pemphigoid"
  },
  "correct_letter": "C",
  "why_correct": "Dermatitis herpetiformis causes intensely itchy grouped papules and vesicles symmetrically on extensor surfaces, buttocks and scalp. It is the skin manifestation of coeliac disease, here suggested by bloating and iron deficiency. Diagnosis is by granular IgA in the dermal papillae on perilesional biopsy and coeliac serology; treatment is a gluten-free diet, with dapsone for rapid control of itch.",
  "distractor_analysis": {
   "A": "Linear IgA disease causes annular blistering ('string of pearls'), is often drug-induced in adults (for example by vancomycin), and shows linear IgA along the basement membrane rather than an association with coeliac disease.",
   "B": "Scabies is intensely itchy but affects the finger webs, wrists and genitals with burrows, and does not explain iron deficiency and bloating.",
   "D": "Plaque psoriasis affects elbows, knees and scalp but causes well-defined scaly plaques, not grouped vesicles, and is usually less itchy.",
   "E": "Bullous pemphigoid usually affects older adults, with large tense bullae on the trunk and flexures, and is not linked with coeliac disease or iron deficiency."
  },
  "generalisation": "Grouped itchy vesicles on extensor surfaces plus features of malabsorption point to dermatitis herpetiformis. Check coeliac serology and take a perilesional biopsy for direct immunofluorescence.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P027",
  "source_id": "MRCP1-261",
  "subdomain": "Clinical immunology and allergy",
  "topic": "Clinical immunology and allergy: investigation",
  "difficulty": "Moderate",
  "stem": "A 23-year-old woman has had 5 episodes in 2 years of non-pitting, non-itchy swelling of her hands and lips, each lasting 2–4 days, and 2 hospital admissions with colicky abdominal pain and vomiting. She has never had hives. Regular cetirizine and a course of prednisolone did not prevent further episodes. Her mother has had similar attacks. She takes a combined oral contraceptive pill and no other medication. What is the most appropriate initial investigation?",
  "options": {
   "A": "C4 and C1-inhibitor level and function",
   "B": "Serum tryptase during an attack",
   "C": "SERPING1 gene sequencing",
   "D": "Total IgE with specific IgE panel",
   "E": "C3 and C4 with total haemolytic complement"
  },
  "correct_letter": "A",
  "why_correct": "Recurrent swelling without urticaria, no response to antihistamines or steroids, abdominal attacks and a family history suggest hereditary angioedema. The recommended first tests are serum C4 with C1-inhibitor concentration and C1-inhibitor function: low C4 with low concentration or low function confirms type 1 or type 2 disease. The oestrogen-containing pill may be worsening her attacks.",
  "distractor_analysis": {
   "B": "Tryptase identifies mast-cell (histamine-mediated) reactions such as anaphylaxis. Hereditary angioedema is bradykinin-mediated, so tryptase is normal.",
   "C": "Genetic testing is not the first test. It is used after biochemical diagnosis, for example when results are borderline or for family testing, and some patients have new mutations.",
   "D": "IgE testing looks for allergic sensitisation, but these attacks are not allergic: no hives, no response to antihistamines and a family history.",
   "E": "C4 is usually low in hereditary angioedema, but C3 is normal and total haemolytic complement is non-specific. Without C1-inhibitor concentration and function the diagnosis cannot be confirmed or typed."
  },
  "generalisation": "In recurrent angioedema without urticaria, measure C4, C1-inhibitor concentration and C1-inhibitor function. Add C1q if onset is after 40 or there is no family history, to look for acquired C1-inhibitor deficiency.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P028",
  "source_id": "MRCP1-727",
  "subdomain": "Ophthalmology",
  "topic": "Ophthalmology: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 23-year-old man has painless central blurring of vision in his right eye. Six weeks later his left eye is affected in the same way. Visual acuity is 6/60 right and 6/36 left, with central scotomas and reduced colour vision in both eyes. Eye movements are not painful. Fundoscopy shows swollen-looking, hyperaemic optic discs with small telangiectatic vessels around them; fluorescein angiography shows no leakage from the discs. MRI of the brain and orbits is normal. Serum vitamin B12 is 410 ng/L (180–900). Two of his mother's brothers lost their sight in their twenties; his father's vision is normal. What is the most likely diagnosis?",
  "options": {
   "A": "Demyelinating optic neuritis",
   "B": "Vitamin B12 deficiency optic neuropathy",
   "C": "Compressive optic neuropathy",
   "D": "Leber hereditary optic neuropathy",
   "E": "Autosomal dominant optic atrophy"
  },
  "correct_letter": "D",
  "why_correct": "Leber hereditary optic neuropathy is a mitochondrial disorder, so it is passed down the maternal line and mostly affects young men. It causes painless, subacute, sequential central visual loss, with disc hyperaemia and peripapillary telangiectasia that do not leak on fluorescein.",
  "distractor_analysis": {
   "A": "Optic neuritis is usually painful on eye movement, typically affects one eye, often shows lesions on MRI and tends to improve over weeks.",
   "B": "Nutritional optic neuropathy causes bilateral, simultaneous central scotomas, but his B12 is normal and the maternal-line family history is not explained.",
   "C": "Compressive optic neuropathy causes slowly progressive loss with a pale disc, and MRI of the orbits would show the lesion.",
   "E": "Dominant optic atrophy causes slowly progressive, symmetrical visual loss from childhood with temporal disc pallor, and is inherited from either parent."
  },
  "generalisation": "Painless, sequential, subacute central visual loss in a young man with affected maternal relatives suggests Leber hereditary optic neuropathy; confirm by mitochondrial DNA testing (for example m.11778G>A).",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P029",
  "source_id": "MRCP1-2354",
  "subdomain": "Rheumatology",
  "topic": "Rheumatology: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 48-year-old woman has had asthma since the age of 45 and nasal polyps. She develops palpable purpura on her legs, painful numbness of the right foot and weakness of left wrist extension. Nerve conduction studies show mononeuritis multiplex. Eosinophils are 4.8 × 10^9/L (0.0–0.4). Creatinine is 84 micromol/L (45–90) and urinalysis is normal. HBsAg is not detected and MPO-ANCA is positive. A chest X-ray shows patchy shadowing that was not present 3 weeks ago. What is the most likely diagnosis?",
  "options": {
   "A": "Idiopathic hypereosinophilic syndrome",
   "B": "Polyarteritis nodosa associated with hepatitis B",
   "C": "Eosinophilic granulomatosis with polyangiitis",
   "D": "Allergic bronchopulmonary aspergillosis",
   "E": "Granulomatosis with polyangiitis"
  },
  "correct_letter": "C",
  "why_correct": "Late-onset asthma, nasal polyps, a blood eosinophil count above 1.5 × 10^9/L, migratory lung shadowing, purpura and mononeuritis multiplex with MPO-ANCA are the classic features of eosinophilic granulomatosis with polyangiitis (formerly Churg–Strauss syndrome).",
  "distractor_analysis": {
   "A": "Hypereosinophilic syndrome causes organ damage from eosinophilia, but it is a diagnosis of exclusion; adult-onset asthma, nasal polyps, vasculitic purpura and a positive ANCA point to a vasculitis instead.",
   "B": "Polyarteritis nodosa can cause mononeuritis multiplex, but it is ANCA-negative, spares the lungs, is not linked with asthma, and HBsAg is negative here.",
   "D": "Allergic bronchopulmonary aspergillosis causes asthma, eosinophilia and changing lung shadows, but not vasculitic purpura or mononeuritis multiplex, and is not ANCA-associated.",
   "E": "Granulomatosis with polyangiitis is usually PR3-ANCA-positive, with destructive upper-airway disease, lung nodules and glomerulonephritis; marked eosinophilia and asthma are not features."
  },
  "generalisation": "Asthma plus eosinophilia plus a new vasculitic feature (purpura, neuropathy, lung shadowing) suggests eosinophilic granulomatosis with polyangiitis; ANCA is positive (usually MPO) in only about 40%.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P030",
  "source_id": "MRCP1-654",
  "subdomain": "Neurology",
  "topic": "Neurology: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 62-year-old man had a Roux-en-Y gastric bypass 9 years ago. He has 6 months of progressive unsteadiness, worse in the dark, and tingling in his feet. Examination shows impaired vibration and joint-position sense to the knees, brisk knee reflexes, extensor plantar responses and a positive Romberg test. Haemoglobin 98 g/L (130–180), MCV 101 fL (80–100), neutrophils 0.9 × 10^9/L (2.0–7.5). Serum vitamin B12 410 ng/L (180–900), methylmalonic acid 0.2 micromol/L (below 0.28), serum folate 9 micrograms/L (3–20), caeruloplasmin 0.07 g/L (0.20–0.60) and serum zinc 30 micromol/L (11–24). He takes an over-the-counter zinc supplement every day. Treponemal antibodies are negative and he does not use nitrous oxide. MRI shows T2 signal change in the dorsal columns of the cervical cord. What is the most likely diagnosis?",
  "options": {
   "A": "Neurosyphilis (tabes dorsalis)",
   "B": "Nitrous oxide-induced myeloneuropathy",
   "C": "Subacute combined degeneration of the cord",
   "D": "Copper deficiency myeloneuropathy",
   "E": "Vitamin E deficiency ataxia"
  },
  "correct_letter": "D",
  "why_correct": "Copper deficiency causes a myeloneuropathy that mimics subacute combined degeneration, with anaemia and neutropenia. Risk factors are gastric bypass surgery and excess zinc, which blocks copper absorption in the gut. Low caeruloplasmin (the main copper-carrying protein) with high zinc and normal B12 and methylmalonic acid point to copper deficiency.",
  "distractor_analysis": {
   "A": "Tabes dorsalis affects the dorsal columns but causes absent reflexes, lightning pains and Argyll Robertson pupils, and treponemal antibodies are negative.",
   "B": "Nitrous oxide inactivates B12 and causes a similar myelopathy, but he does not use it, methylmalonic acid is normal and it would not explain the low caeruloplasmin.",
   "C": "Subacute combined degeneration from B12 deficiency gives the same dorsal-column picture, but B12 and methylmalonic acid are normal, and B12 deficiency does not lower caeruloplasmin.",
   "E": "Vitamin E deficiency after malabsorption causes spinocerebellar ataxia and neuropathy, but not anaemia, neutropenia or low caeruloplasmin."
  },
  "generalisation": "In a myelopathy that looks like B12 deficiency but with normal B12 and methylmalonic acid, check copper and caeruloplasmin, especially after bariatric surgery or with zinc excess.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P031",
  "source_id": "MRCP1-811",
  "subdomain": "Haematology",
  "topic": "Haematology: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 34-year-old man is investigated for lifelong mild anaemia with intermittent jaundice. His mother has a similar blood picture. Haemoglobin is 128 g/L (130–180), MCV 104 fL (80–100), MCHC 372 g/L (320–360), reticulocytes 210 × 10^9/L (25–100) and bilirubin 41 micromol/L (0–21). Ferritin is 890 micrograms/L (30–400); he has never received a blood transfusion. The direct antiglobulin test is negative, eosin-5-maleimide (EMA) binding is normal, and osmotic gradient ektacytometry shows a curve shifted to the left. Six years ago he had a splenectomy for presumed congenital haemolysis; his haemoglobin did not change, and he has since had two unprovoked pulmonary emboli. What is the most likely diagnosis?",
  "options": {
   "A": "Hereditary pyropoikilocytosis",
   "B": "Hereditary spherocytosis",
   "C": "Paroxysmal nocturnal haemoglobinuria",
   "D": "Dehydrated hereditary stomatocytosis",
   "E": "Pyruvate kinase deficiency"
  },
  "correct_letter": "D",
  "why_correct": "Dehydrated hereditary stomatocytosis (hereditary xerocytosis), usually due to gain-of-function PIEZO1 variants, causes dominantly inherited, well-compensated haemolysis with macrocytosis, a high MCHC from red-cell dehydration and a left-shifted ektacytometry curve, while EMA binding is normal. Iron overload occurs even without transfusion. Splenectomy gives little benefit and is followed by a high risk of venous thromboembolism, so it should be avoided.",
  "distractor_analysis": {
   "A": "Hereditary pyropoikilocytosis is a recessive spectrin disorder with marked microcytosis and bizarre poikilocytes, not macrocytosis with a high MCHC.",
   "B": "Hereditary spherocytosis also gives a high MCHC and dominant inheritance, but EMA binding is reduced, the ektacytometry curve has a different (low minimum deformability) pattern, and splenectomy usually corrects the anaemia.",
   "C": "Paroxysmal nocturnal haemoglobinuria is an acquired clonal disorder causing intravascular haemolysis and thrombosis; it does not explain lifelong anaemia in mother and son or the red-cell dehydration indices.",
   "E": "Pyruvate kinase deficiency is usually recessive, does not give a high MCHC or left-shifted ektacytometry curve, and splenectomy typically raises the haemoglobin."
  },
  "generalisation": "Suspect dehydrated hereditary stomatocytosis in familial compensated haemolysis with macrocytosis, a high MCHC, iron overload without transfusion and normal EMA binding. Confirm with ektacytometry and genetic testing, and avoid splenectomy because of the thrombotic risk.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P032",
  "source_id": "MRCP1-995",
  "subdomain": "Gastroenterology and hepatology",
  "topic": "Gastroenterology and hepatology: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 58-year-old man with coeliac disease diagnosed 10 years ago has had 4 months of colicky abdominal pain, diarrhoea and 9 kg weight loss. A dietitian confirms strict adherence to a gluten-free diet. Tissue transglutaminase IgA is 3 U/mL (0–7) and albumin is 26 g/L (35–50). CT shows a 6 cm segment of thickened jejunum with an ulcerated mass and mesenteric nodes up to 2 cm. Biopsy of the mass shows sheets of medium-to-large pleomorphic cells that express CD3 and CD30, do not express CD20, and invade the muscularis propria. What is the most likely diagnosis?",
  "options": {
   "A": "Diffuse large B-cell lymphoma",
   "B": "Adenocarcinoma of the small bowel",
   "C": "Enteropathy-associated T-cell lymphoma",
   "D": "Refractory coeliac disease type 2",
   "E": "Immunoproliferative small intestinal disease"
  },
  "correct_letter": "C",
  "why_correct": "Enteropathy-associated T-cell lymphoma (EATL) complicates long-standing coeliac disease, often refractory disease, and typically presents with weight loss, pain, obstruction or perforation from an ulcerating jejunal mass. Histology shows pleomorphic CD3-positive, often CD30-positive, T cells invading the bowel wall. Negative serology confirms gluten exposure is not the cause.",
  "distractor_analysis": {
   "A": "Diffuse large B-cell lymphoma is a B-cell tumour and would express CD20, which these cells do not.",
   "B": "Small-bowel adenocarcinoma is also commoner in coeliac disease, but it is an epithelial tumour and would not consist of CD3-positive lymphoid cells.",
   "D": "Refractory coeliac disease type 2 has aberrant intraepithelial T cells with persistent villous atrophy, but it does not form a transmural mass of large pleomorphic cells; it is a precursor of this condition.",
   "E": "Immunoproliferative small intestinal disease is a B-cell (alpha heavy-chain) disorder with diffuse plasma-cell infiltration, seen mainly in young adults from the Mediterranean and Middle East, not a T-cell mass."
  },
  "generalisation": "New weight loss, pain or diarrhoea in coeliac disease despite a strict gluten-free diet and negative serology needs investigation for refractory disease and its complications, including T-cell lymphoma and small-bowel adenocarcinoma.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P051",
  "source_id": "new-v2",
  "subdomain": "Respiratory medicine",
  "topic": "Respiratory medicine: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 34-year-old woman with asthma since childhood has had a year of worsening control requiring three courses of prednisolone. She coughs up brown mucus plugs. She has no rash, numbness or sinus symptoms. Eosinophils are 1.4 × 10^9/L (0.0–0.4), total IgE 2,850 kU/L (0–81), Aspergillus fumigatus-specific IgE 18.2 kUA/L (below 0.35) and Aspergillus IgG 64 mgA/L (below 40). ANCA is negative and urinalysis is normal. High-resolution CT shows central bronchiectasis in both upper lobes with mucus plugging and no cavities. What is the most likely diagnosis?",
  "options": {
   "A": "Allergic bronchopulmonary aspergillosis",
   "B": "Chronic eosinophilic pneumonia",
   "C": "Chronic pulmonary aspergillosis",
   "D": "Eosinophilic granulomatosis with polyangiitis",
   "E": "Idiopathic hypereosinophilic syndrome"
  },
  "correct_letter": "A",
  "why_correct": "Allergic bronchopulmonary aspergillosis is a hypersensitivity reaction to Aspergillus fumigatus colonising the airways in asthma or cystic fibrosis. Poorly controlled asthma, brown mucus plugs, total IgE above 1,000, positive Aspergillus-specific IgE and IgG, eosinophilia and central bronchiectasis meet the diagnostic criteria. Treatment is oral prednisolone or itraconazole, with monitoring of total IgE.",
  "distractor_analysis": {
   "B": "Chronic eosinophilic pneumonia causes peripheral consolidation with eosinophilia, not central bronchiectasis with mucus plugs and a total IgE in the thousands.",
   "C": "Chronic pulmonary aspergillosis causes cavities or aspergillomas in damaged lungs with very high Aspergillus IgG, usually in non-atopic patients; there are no cavities here.",
   "D": "Eosinophilic granulomatosis with polyangiitis causes asthma and eosinophilia, but with vasculitic features such as neuropathy, rash, sinus disease or nephritis; it does not cause central bronchiectasis with fungal sensitisation.",
   "E": "Idiopathic hypereosinophilic syndrome needs eosinophils of at least 1.5 × 10^9/L with organ damage and no other cause; Aspergillus sensitisation with central bronchiectasis explains this picture."
  },
  "generalisation": "In asthma that is getting harder to control, check eosinophils, total IgE and Aspergillus-specific IgE. Total IgE above 1,000 with Aspergillus sensitisation and central bronchiectasis indicates allergic bronchopulmonary aspergillosis.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P034",
  "source_id": "MRCP1-1521",
  "subdomain": "Endocrinology and diabetes",
  "topic": "Endocrinology and diabetes: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 51-year-old man has the sudden onset of the worst headache of his life with vomiting. Within hours he develops double vision and blurred vision. He is afebrile. Blood pressure is 88/52 mmHg. He has a right third cranial nerve palsy and bitemporal visual field loss. Sodium is 129 mmol/L (135–145), glucose 3.4 mmol/L (4.0–7.8) and 09:00 cortisol 48 nmol/L (133–537). CT of the head shows a 2.5 cm hyperdense sellar mass extending above the sella, with no blood in the basal cisterns. What is the most likely diagnosis?",
  "options": {
   "A": "Lymphocytic hypophysitis",
   "B": "Pituitary apoplexy",
   "C": "Cavernous sinus thrombosis",
   "D": "Subarachnoid haemorrhage",
   "E": "Bacterial meningitis"
  },
  "correct_letter": "B",
  "why_correct": "Pituitary apoplexy is haemorrhage or infarction into a pituitary adenoma. It causes thunderclap headache, vomiting, visual field loss and ophthalmoplegia from cavernous sinus compression, and acute ACTH deficiency with hypotension, hyponatraemia and hypoglycaemia. A haemorrhagic sellar mass on imaging confirms it. Give IV hydrocortisone immediately and involve neurosurgery and endocrinology.",
  "distractor_analysis": {
   "A": "Lymphocytic hypophysitis causes hypopituitarism and headache, usually subacutely and often in late pregnancy or after immune checkpoint inhibitors; a hyperdense haemorrhagic mass with a thunderclap onset is not typical.",
   "C": "Cavernous sinus thrombosis causes ophthalmoplegia but usually with fever, proptosis and chemosis after facial or sinus infection, and it does not produce a haemorrhagic sellar mass.",
   "D": "Subarachnoid haemorrhage causes thunderclap headache and a posterior communicating artery aneurysm can cause a third nerve palsy, but CT shows no cisternal blood and it does not explain bitemporal field loss or cortisol deficiency.",
   "E": "Bacterial meningitis causes headache and vomiting with fever and neck stiffness; it does not explain a sellar mass, bitemporal field loss or isolated cortisol deficiency."
  },
  "generalisation": "Sudden headache with visual loss or ophthalmoplegia and hypotension suggests pituitary apoplexy. Give hydrocortisone without waiting for results, image the pituitary (MRI if possible) and involve neurosurgery and endocrinology urgently.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P035",
  "source_id": "MRCP1-669",
  "subdomain": "Nephrology",
  "topic": "Nephrology: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 28-year-old woman has 4 days of malaise and reduced urine output after an upper respiratory tract infection. She has had no diarrhoea. Blood pressure is 148/92 mmHg and fundoscopy is normal. Haemoglobin is 72 g/L (115–165), platelets 38 × 10^9/L (150–400), creatinine 412 micromol/L (45–90), LDH 1,840 U/L (135–214) and haptoglobin below 0.1 g/L (0.3–2.0). The blood film shows red-cell fragments and the direct antiglobulin test is negative. Prothrombin time is 12 seconds (10–13) and fibrinogen 3.4 g/L (1.5–4.0). ADAMTS13 activity is 62% (50–150), stool PCR for Shiga toxin genes is negative, a pregnancy test is negative, and C3 is 0.52 g/L (0.75–1.65). What is the most likely diagnosis?",
  "options": {
   "A": "TMA due to malignant hypertension",
   "B": "Complement-mediated atypical HUS",
   "C": "Disseminated intravascular coagulation",
   "D": "Thrombotic thrombocytopenic purpura",
   "E": "Shiga toxin-producing E. coli HUS"
  },
  "correct_letter": "B",
  "why_correct": "Microangiopathic haemolysis, thrombocytopenia and acute kidney injury define a thrombotic microangiopathy. ADAMTS13 activity of 62% makes TTP very unlikely, there is no diarrhoea and Shiga toxin PCR is negative, clotting is normal and blood pressure is only mildly high with normal fundi. With an infective trigger and low C3, complement-mediated atypical HUS is most likely; treatment is a complement C5 inhibitor (eculizumab or ravulizumab) with meningococcal vaccination and antibiotic prophylaxis.",
  "distractor_analysis": {
   "A": "Malignant hypertension can cause a thrombotic microangiopathy, but it needs very high blood pressure with retinopathy; 148/92 mmHg with normal fundi does not fit.",
   "C": "Disseminated intravascular coagulation consumes clotting factors, prolonging the prothrombin time and lowering fibrinogen; both are normal here.",
   "D": "Thrombotic thrombocytopenic purpura is caused by ADAMTS13 deficiency, with activity usually below 10%; an activity of 62% makes it very unlikely.",
   "E": "Shiga toxin-producing E. coli HUS usually follows bloody diarrhoea, and the stool PCR for Shiga toxin genes is negative."
  },
  "generalisation": "In thrombotic microangiopathy, check ADAMTS13 activity, Shiga toxin testing, clotting, blood pressure and pregnancy status. When these are unremarkable, treat as complement-mediated atypical HUS and start a C5 inhibitor early under specialist guidance.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P036",
  "source_id": "MRCP1-646",
  "subdomain": "Cardiology",
  "topic": "Cardiology: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 66-year-old woman with newly diagnosed metastatic pancreatic adenocarcinoma develops sudden aphasia and right-sided weakness. MRI shows acute infarcts in several different arterial territories. Temperature is 36.9 °C and there are no new murmurs. Transoesophageal echocardiography shows several small (3–5 mm) mobile vegetations on the atrial surface of both mitral leaflets, with no valve destruction or abscess. Three sets of blood cultures taken before any antibiotic are negative at 5 days, and Coxiella and Bartonella serology is negative. ANA and antiphospholipid antibodies are negative. D-dimer is 4,800 ng/mL (0–500). What is the most likely diagnosis?",
  "options": {
   "A": "Embolising left atrial myxoma",
   "B": "Culture-negative infective endocarditis",
   "C": "Valvular papillary fibroelastoma",
   "D": "Libman-Sacks endocarditis",
   "E": "Non-bacterial thrombotic endocarditis"
  },
  "correct_letter": "E",
  "why_correct": "Non-bacterial thrombotic (marantic) endocarditis consists of sterile platelet-fibrin vegetations, most often on the mitral and aortic valves, in hypercoagulable states such as advanced adenocarcinoma, particularly pancreatic, lung and ovarian cancer. The vegetations are friable and commonly embolise to several vascular territories. Afebrile illness, negative cultures and serology and no valve destruction support it; treatment is anticoagulation with heparin and management of the cancer.",
  "distractor_analysis": {
   "A": "Atrial myxoma is a single mass usually attached to the interatrial septum near the fossa ovalis, not small vegetations on the valve leaflets.",
   "B": "Culture-negative infective endocarditis usually follows prior antibiotics or fastidious organisms such as Coxiella or Bartonella; this patient is afebrile, had no antibiotics, has negative serology and no valve destruction.",
   "C": "Papillary fibroelastoma is usually a single pedunculated frond-like mass, most often on the aortic valve, not several small vegetations on both mitral leaflets in a cancer patient.",
   "D": "Libman-Sacks endocarditis is sterile endocarditis of systemic lupus erythematosus or antiphospholipid syndrome; ANA and antiphospholipid antibodies are negative."
  },
  "generalisation": "Multi-territory emboli with sterile valvular vegetations in a patient with cancer suggest non-bacterial thrombotic endocarditis. Exclude infective endocarditis with cultures before antibiotics and serology, then anticoagulate with heparin.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P037",
  "source_id": "MRCP1-2372",
  "subdomain": "Infectious diseases",
  "topic": "Infectious diseases: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 51-year-old man with type 2 diabetes presents with 3 days of fever, right facial pain and swelling around the right eye. Glucose is 31 mmol/L (4.0–7.8), pH 7.12 (7.35–7.45) and blood ketones 5.8 mmol/L (0.0–0.6). There is a black necrotic eschar on the right inferior turbinate, proptosis and restricted eye movements. CT shows opacification of the right maxillary and ethmoid sinuses with bone erosion into the orbit. A biopsy of the turbinate is taken. What is the most likely finding on microscopy of the biopsy?",
  "options": {
   "A": "Broad pauciseptate hyphae with right-angle branching",
   "B": "Small intracellular yeasts within macrophages",
   "C": "Pseudohyphae with budding blastoconidia",
   "D": "Narrow septate hyphae with acute-angle branching",
   "E": "Budding yeasts surrounded by a thick polysaccharide capsule"
  },
  "correct_letter": "A",
  "why_correct": "Rhino-orbital mucormycosis (Mucorales such as Rhizopus) is the classic invasive fungal sinusitis of diabetic ketoacidosis, with a black necrotic eschar from angioinvasion and spread into the orbit. Tissue shows broad, ribbon-like, pauciseptate hyphae branching at wide (near right) angles. Treatment is urgent surgical debridement, liposomal amphotericin B and correction of the ketoacidosis.",
  "distractor_analysis": {
   "B": "Small intracellular yeasts in macrophages are Histoplasma, which causes pulmonary or disseminated disease after exposure in endemic areas, not rhino-orbital necrosis.",
   "C": "Pseudohyphae with budding yeasts are Candida, which causes mucosal and bloodstream infection, not angioinvasive necrotising sinus disease.",
   "D": "Narrow septate hyphae with acute-angle branching are typical of Aspergillus, which causes invasive sinusitis mainly in prolonged neutropenia; acidotic diabetes with a black eschar favours Mucorales.",
   "E": "Encapsulated budding yeasts are Cryptococcus, which causes meningitis and pneumonia in immunosuppressed people rather than necrotising rhino-orbital disease."
  },
  "generalisation": "Facial pain, a black nasal eschar and orbital signs in diabetic ketoacidosis suggest rhino-orbital mucormycosis. Arrange urgent ENT debridement and biopsy, start liposomal amphotericin B and correct the metabolic state.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P038",
  "source_id": "MRCP1-2063",
  "subdomain": "Metabolic medicine",
  "topic": "Metabolic medicine: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 36-year-old man is referred after a routine lipid profile. Over 2 years he has had episodes of numbness and weakness affecting different nerves in his hands, and nerve conduction studies show a patchy sensorimotor neuropathy. His tonsils are enlarged with orange-yellow streaks, the spleen is palpable 3 cm below the costal margin and the corneas are clear. Total cholesterol is 2.1 mmol/L (below 5.0), HDL cholesterol 0.08 mmol/L (above 1.0), LDL cholesterol 1.0 mmol/L (below 3.0), triglycerides 2.4 mmol/L (below 1.7) and apolipoprotein A-I 0.05 g/L (1.05–2.05). Platelets are 112 × 10^9/L (150–400), creatinine 78 micromol/L (60–110), and urinalysis shows no protein. What is the most likely diagnosis?",
  "options": {
   "A": "Tangier disease",
   "B": "Sitosterolaemia",
   "C": "Fish-eye disease",
   "D": "LCAT deficiency",
   "E": "Abetalipoproteinaemia"
  },
  "correct_letter": "A",
  "why_correct": "Tangier disease is caused by recessive ABCA1 variants that prevent cholesterol efflux from cells onto apolipoprotein A-I. HDL and apoA-I are almost absent, and cholesterol esters accumulate in macrophages, causing orange-yellow tonsils, splenomegaly with mild thrombocytopenia and a relapsing or syringomyelia-like neuropathy. Total and LDL cholesterol are low and triglycerides normal or mildly high.",
  "distractor_analysis": {
   "B": "Sitosterolaemia raises plant sterols and causes xanthomas and premature atherosclerosis; HDL and apoA-I are not markedly reduced.",
   "C": "Fish-eye disease (partial LCAT deficiency) causes low HDL with dense corneal opacities and no neuropathy, orange tonsils or splenomegaly.",
   "D": "LCAT deficiency also lowers HDL, but it causes corneal opacities, haemolytic anaemia and proteinuric kidney disease, and the corneas are clear and urine normal here.",
   "E": "Abetalipoproteinaemia causes near-absent apoB-containing lipoproteins (very low LDL and triglyceride), acanthocytes and vitamin E-deficiency neuropathy, not isolated apoA-I and HDL deficiency."
  },
  "generalisation": "Near-absent HDL with low apoA-I points to a genetic HDL disorder. Orange tonsils, splenomegaly and neuropathy indicate Tangier disease, whereas corneal opacities (with or without kidney disease) suggest LCAT deficiency or fish-eye disease.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P039",
  "source_id": "MRCP1-779",
  "subdomain": "Clinical pharmacology and therapeutics",
  "topic": "Clinical pharmacology and therapeutics: cause",
  "difficulty": "Moderate",
  "stem": "A 38-year-old man is brought to the emergency department 6 hours after drinking an unknown liquid from a garage. He is confused and vomiting, with a respiratory rate of 32 breaths/min. Visual acuity and fundoscopy are normal. Sodium is 140 mmol/L (135–145), chloride 100 mmol/L (95–108), bicarbonate 6 mmol/L (22–29), pH 7.08 (7.35–7.45), lactate 2.8 mmol/L (0.5–2.0), adjusted calcium 1.92 mmol/L (2.20–2.60) and creatinine 245 micromol/L (60–110). Measured osmolality is 338 mOsm/kg (275–295), and calculated osmolality is 296 mOsm/kg (275–295). Blood ethanol is undetectable. Urine microscopy shows envelope-shaped calcium oxalate crystals. What is the most likely ingested substance?",
  "options": {
   "A": "Diethylene glycol",
   "B": "Isopropyl alcohol",
   "C": "Ethylene glycol",
   "D": "Propylene glycol",
   "E": "Methyl alcohol"
  },
  "correct_letter": "C",
  "why_correct": "Ethylene glycol (antifreeze, screenwash) causes a high anion gap metabolic acidosis (anion gap 34 here) and a high osmolal gap (42). It is metabolised by alcohol dehydrogenase to glycolate and oxalate; oxalate binds calcium, causing hypocalcaemia, calcium oxalate crystalluria and acute kidney injury. Treatment is fomepizole (or ethanol), bicarbonate and haemodialysis, with advice from the National Poisons Information Service.",
  "distractor_analysis": {
   "A": "Diethylene glycol causes acidosis, an osmolal gap, acute kidney injury and neuropathy, but its metabolites do not produce calcium oxalate crystals or hypocalcaemia.",
   "B": "Isopropyl alcohol raises the osmolal gap but is metabolised to acetone, causing ketosis without a significant acidosis or crystalluria.",
   "D": "Propylene glycol toxicity is usually iatrogenic from high-dose infusions (for example lorazepam) and causes lactic acidosis; it does not form oxalate crystals.",
   "E": "Methyl alcohol (methanol) also gives a high anion gap acidosis and osmolal gap, but it causes visual disturbance and optic disc changes rather than oxalate crystals and hypocalcaemia."
  },
  "generalisation": "In a high anion gap acidosis with a high osmolal gap, think of toxic alcohols. Calcium oxalate crystals and hypocalcaemia point to ethylene glycol; visual symptoms point to methanol. Give fomepizole early and discuss haemodialysis.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P040",
  "source_id": "MRCP1-1507",
  "subdomain": "Dermatology",
  "topic": "Dermatology: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 29-year-old woman who smokes and has a BMI of 33 kg/m² has had recurrent painful nodules in both axillae and the groin for 6 years. Lesions recur at the same sites, discharge pus and heal with rope-like scars. Examination shows double-ended comedones and interconnected draining sinus tracts. She has no fever and no bowel symptoms. CRP is 9 mg/L (0–5). Swabs from previous episodes grew mixed skin flora, and a sexual health screen is negative. What is the most likely diagnosis?",
  "options": {
   "A": "Hidradenitis suppurativa",
   "B": "Lymphogranuloma venereum",
   "C": "Recurrent furunculosis",
   "D": "Pyoderma gangrenosum",
   "E": "Cutaneous Crohn disease"
  },
  "correct_letter": "A",
  "why_correct": "Hidradenitis suppurativa is a chronic inflammatory disease of the hair follicle in flexural skin. Recurrent painful nodules and abscesses at the same sites in the axillae and groin, sinus tracts, rope-like scarring and double-ended comedones are characteristic; smoking and obesity are risk factors.",
  "distractor_analysis": {
   "B": "Lymphogranuloma venereum causes inguinal buboes that may form sinuses, but it does not affect the axillae, and the sexual health screen is negative.",
   "C": "Recurrent furunculosis gives single staphylococcal boils at varying sites that heal without interconnected sinus tracts or double-ended comedones; swabs usually grow Staphylococcus aureus.",
   "D": "Pyoderma gangrenosum causes rapidly enlarging painful ulcers with violaceous undermined edges, not recurrent nodules with comedones and sinus tracts.",
   "E": "Cutaneous Crohn disease can cause perianal and flexural sinuses, but she has no bowel symptoms and a normal CRP would be unusual for active Crohn disease."
  },
  "generalisation": "Recurrent painful nodules, sinus tracts and scarring in the axillae or groin suggest hidradenitis suppurativa. Advise smoking cessation and weight loss, and treat according to severity (for example a tetracycline course, then specialist biologic therapy such as adalimumab).",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P041",
  "source_id": "MRCP1-867",
  "subdomain": "Ophthalmology",
  "topic": "Ophthalmology: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 72-year-old man with hypertension, type 2 diabetes and a 40 pack-year smoking history has had 3 months of gradually worsening vision and a dull ache around his right eye. Visual acuity is 6/36 in the right eye and 6/9 in the left. Fundoscopy of the right eye shows narrowed retinal arteries, dilated but non-tortuous retinal veins and scattered blot haemorrhages in the mid-periphery. Light pressure on the right globe produces visible pulsation of the central retinal artery. The left fundus shows a few microaneurysms only at the posterior pole. Carotid duplex ultrasound shows 90% stenosis of the right internal carotid artery. What is the most likely diagnosis?",
  "options": {
   "A": "Central retinal artery occlusion",
   "B": "Central retinal vein occlusion",
   "C": "Diabetic retinopathy",
   "D": "Hypertensive retinopathy",
   "E": "Ocular ischaemic syndrome"
  },
  "correct_letter": "E",
  "why_correct": "Ocular ischaemic syndrome is caused by chronic hypoperfusion of the globe, usually from ipsilateral internal carotid stenosis of 90% or more. Typical features are gradual visual loss with a periocular ache, narrowed arteries, dilated but non-tortuous veins and mid-peripheral blot haemorrhages. Arterial pulsation induced by light pressure on the globe reflects a low central retinal artery perfusion pressure.",
  "distractor_analysis": {
   "A": "Central retinal artery occlusion causes sudden, painless and profound visual loss with a pale retina and a cherry-red spot, not gradual deterioration over months with venous dilatation and haemorrhages.",
   "B": "Central retinal vein occlusion gives dilated and tortuous veins with haemorrhages in all four quadrants extending to the posterior pole, often with disc swelling. Induced arterial pulsation and ipsilateral carotid stenosis are not features.",
   "C": "Diabetic retinopathy is usually bilateral and fairly symmetrical, with microaneurysms and haemorrhages concentrated at the posterior pole and no ocular ache. The marked asymmetry on the side of the carotid stenosis points to a vascular supply problem.",
   "D": "Hypertensive retinopathy is bilateral, with arteriovenous nipping, flame haemorrhages and cotton-wool spots. It does not explain unilateral mid-peripheral haemorrhages with pain on the side of a tight carotid stenosis."
  },
  "generalisation": "Unilateral, gradual visual loss with periocular ache, mid-peripheral haemorrhages and dilated non-tortuous veins should prompt carotid imaging. Ocular ischaemic syndrome marks high stroke and cardiovascular risk and needs urgent vascular assessment as well as ophthalmic care.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P042",
  "source_id": "MRCP1-2311",
  "subdomain": "Rheumatology",
  "topic": "Rheumatology: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 72-year-old woman has had 6 weeks of bilateral aching in her shoulders, upper arms and hips, with 90 minutes of stiffness each morning and difficulty dressing. She takes atorvastatin 20 mg daily, unchanged for 4 years. Muscle power is normal once pain is allowed for, and there is no synovitis of the hands or wrists. She has no headache, jaw claudication or visual symptoms. C-reactive protein is 46 mg/L (<5), ESR 52 mm/h (1–20), creatine kinase 85 U/L (25–200) and TSH 2.1 mU/L (0.4–4.0). Rheumatoid factor and anti-CCP antibodies are negative. What is the most likely diagnosis?",
  "options": {
   "A": "Late-onset rheumatoid arthritis",
   "B": "Statin-associated myopathy",
   "C": "Hypothyroid myopathy",
   "D": "Inclusion body myositis",
   "E": "Polymyalgia rheumatica"
  },
  "correct_letter": "E",
  "why_correct": "Polymyalgia rheumatica fits: age over 50, bilateral shoulder and hip-girdle aching, morning stiffness longer than 45 minutes, raised CRP and ESR, normal creatine kinase and no peripheral synovitis. Before starting prednisolone (12.5-25 mg daily per BSR guidance), check for symptoms of giant cell arteritis, as here.",
  "distractor_analysis": {
   "A": "Late-onset rheumatoid arthritis can begin with girdle symptoms, but it usually shows peripheral synovitis of the small joints, often with positive rheumatoid factor or anti-CCP antibodies. Neither is present.",
   "B": "Statin-associated muscle symptoms usually begin within weeks to months of starting or increasing the dose and do not raise CRP or ESR. A stable dose for 4 years and an inflammatory response point elsewhere.",
   "C": "Hypothyroid myopathy causes proximal weakness, cramps and a raised creatine kinase. A normal TSH and normal creatine kinase exclude it here.",
   "D": "Inclusion body myositis causes slowly progressive, often asymmetric, painless weakness of the finger flexors and quadriceps, with normal inflammatory markers. Pain and stiffness with preserved power do not fit."
  },
  "generalisation": "In an older adult with girdle pain and stiffness, look for an acute-phase response, normal creatine kinase and absent synovitis, and always ask about cranial symptoms of giant cell arteritis before starting corticosteroids.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P043",
  "source_id": "MRCP1-1564",
  "subdomain": "Neurology",
  "topic": "Neurology: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 54-year-old man is brought by his wife because of an 18-month change in personality. He makes inappropriate remarks to strangers, has lost interest in his family, shows little empathy and has started compulsively checking locks and eating large amounts of sweet food. Speech is fluent, and naming and single-word comprehension are intact. His Addenbrooke's Cognitive Examination (ACE-III) score is 79/100, with memory relatively preserved. Gait is normal, and he has no urinary incontinence. MRI shows symmetrical frontal and anterior temporal lobe atrophy. What is the most likely diagnosis?",
  "options": {
   "A": "Late-onset bipolar affective disorder",
   "B": "Normal-pressure hydrocephalus",
   "C": "Behavioural-variant frontotemporal dementia",
   "D": "Frontal variant of Alzheimer disease",
   "E": "Semantic-variant primary progressive aphasia"
  },
  "correct_letter": "C",
  "why_correct": "Behavioural-variant frontotemporal dementia presents, usually before 65, with early disinhibition, apathy, loss of empathy, compulsive behaviours and hyperorality (often a craving for sweet food), with memory relatively spared. Frontal and anterior temporal atrophy on MRI supports the diagnosis (Rascovsky criteria).",
  "distractor_analysis": {
   "A": "Late-onset bipolar disorder causes episodic mood disturbance, not a steady decline with frontal and temporal atrophy. A first psychiatric presentation after 50 calls for exclusion of an organic cause.",
   "B": "Normal-pressure hydrocephalus causes gait apraxia, urinary incontinence and cognitive slowing, with ventricular enlargement out of proportion to atrophy. Gait and continence are normal here.",
   "D": "The frontal variant of Alzheimer disease can cause behavioural change, but memory impairment is usually clear, and imaging shows hippocampal and temporoparietal involvement rather than this frontal and anterior temporal pattern.",
   "E": "Semantic-variant primary progressive aphasia begins with loss of word meaning, impaired naming and impaired single-word comprehension, usually with asymmetric anterior temporal atrophy. Naming and comprehension are intact here."
  },
  "generalisation": "Progressive disinhibition, apathy, compulsions and dietary change in middle age with relatively preserved memory suggest frontotemporal degeneration. Ask about family history (C9orf72, MAPT, GRN) and refer to a specialist cognitive service.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P044",
  "source_id": "MRCP1-722",
  "subdomain": "Haematology",
  "topic": "Haematology: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 69-year-old man has 6 months of fatigue, night sweats, early satiety and 8 kg of weight loss. His spleen is palpable 14 cm below the left costal margin. Haemoglobin is 94 g/L (130–180), white cell count 13.2 × 10^9/L (4.0–11.0) and platelets 486 × 10^9/L (150–400). The blood film shows tear-drop red cells, nucleated red cells, myelocytes and metamyelocytes. Bone marrow aspiration is a dry tap, and the trephine biopsy shows clusters of atypical megakaryocytes with grade 3 reticulin fibrosis. JAK2 V617F is detected and BCR::ABL1 is not detected. What is the most likely diagnosis?",
  "options": {
   "A": "Hairy cell leukaemia",
   "B": "Chronic myeloid leukaemia",
   "C": "Splenic marginal zone lymphoma",
   "D": "Primary myelofibrosis",
   "E": "Essential thrombocythaemia"
  },
  "correct_letter": "D",
  "why_correct": "Primary myelofibrosis causes a leucoerythroblastic film with tear-drop red cells, massive splenomegaly from extramedullary haematopoiesis, constitutional symptoms and a dry tap. The trephine shows atypical megakaryocytes with reticulin fibrosis. A driver mutation (JAK2, CALR or MPL) is found in about 90% of cases, and BCR::ABL1 is absent.",
  "distractor_analysis": {
   "A": "Hairy cell leukaemia also causes splenomegaly and a dry tap, but it presents with pancytopenia and monocytopenia, circulating hairy cells and BRAF V600E. It does not cause a leucoerythroblastic film, a high platelet count or a JAK2 mutation.",
   "B": "Chronic myeloid leukaemia causes splenomegaly and a left-shifted film with basophilia, but it is defined by BCR::ABL1, which is not detected here.",
   "C": "Splenic marginal zone lymphoma causes splenomegaly with circulating villous B lymphocytes and a clonal B-cell population, not myeloid precursors, tear-drop cells or a JAK2 mutation.",
   "E": "Essential thrombocythaemia shares JAK2 V617F and a high platelet count, but the marrow shows little or no reticulin fibrosis, and a leucoerythroblastic film with massive splenomegaly is not expected."
  },
  "generalisation": "A leucoerythroblastic film with tear-drop cells and massive splenomegaly suggests marrow fibrosis. Confirm with trephine biopsy and driver-mutation testing (JAK2, CALR, MPL), and exclude BCR::ABL1 before labelling a myeloproliferative neoplasm.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P045",
  "source_id": "MRCP1-2177",
  "subdomain": "Gastroenterology and hepatology",
  "topic": "Gastroenterology and hepatology: next step",
  "difficulty": "Moderate",
  "stem": "A 54-year-old woman has had 4 months of loose, watery stools 4-5 times a day. Her weight is stable, and she has no abdominal pain, steatorrhoea, diabetes or history of alcohol excess. Haemoglobin is 132 g/L (115–165), tissue transglutaminase IgA is negative with normal total IgA, and faecal calprotectin is 35 micrograms/g (<50). Faecal elastase on a watery stool sample is 110 micrograms/g (>200). What is the most appropriate next step in assessing her pancreatic function?",
  "options": {
   "A": "Repeat the test on a formed stool",
   "B": "Contrast-enhanced CT of the pancreas",
   "C": "Secretin-stimulated MRCP",
   "D": "Three-day faecal fat collection",
   "E": "Start pancreatic enzyme replacement"
  },
  "correct_letter": "A",
  "why_correct": "Watery stool dilutes faecal elastase and can give a falsely low result. With no risk factors for pancreatic disease and a stable weight, the result should be checked on a formed stool sample before pancreatic exocrine insufficiency is diagnosed or treated (BSG chronic diarrhoea guideline, 2018).",
  "distractor_analysis": {
   "B": "Contrast-enhanced CT looks for structural pancreatic disease or malignancy and is indicated when insufficiency is confirmed or there are red flags such as weight loss or new diabetes. Neither applies yet.",
   "C": "Secretin-stimulated MRCP assesses ductal anatomy and exocrine reserve but is a specialist second-line test, not the step before confirming the screening result on a valid sample.",
   "D": "A three-day faecal fat collection is unpleasant, poorly standardised and rarely used in UK practice. It is not recommended to confirm a doubtful elastase result.",
   "E": "Pancreatic enzyme replacement treats confirmed exocrine insufficiency. A single result from a diluted sample does not establish the diagnosis."
  },
  "generalisation": "Interpret faecal elastase in the light of stool consistency. A low value on a watery sample should be checked on a formed sample before pancreatic exocrine insufficiency is diagnosed or treated.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P046",
  "source_id": "MRCP1-911",
  "subdomain": "Respiratory medicine",
  "topic": "Respiratory medicine: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 68-year-old man is in week 3 of intravenous daptomycin for vertebral osteomyelitis caused by meticillin-resistant Staphylococcus aureus. He develops a temperature of 38.2 °C, a dry cough and breathlessness. Oxygen saturation is 89% on air. Chest X-ray shows new bilateral peripheral infiltrates. Blood eosinophils are 0.9 × 10^9/L (0.0–0.4), haemoglobin is stable at 121 g/L (130–180) and NT-proBNP is 110 ng/L (<400). Bronchoalveolar lavage returns clear fluid with 34% eosinophils (<1%), no haemosiderin-laden macrophages and negative cultures. What is the most likely diagnosis?",
  "options": {
   "A": "Cryptogenic organising pneumonia",
   "B": "Cardiogenic pulmonary oedema",
   "C": "Drug-induced eosinophilic pneumonia",
   "D": "Hospital-acquired bacterial pneumonia",
   "E": "Diffuse alveolar haemorrhage"
  },
  "correct_letter": "C",
  "why_correct": "Daptomycin can cause an acute eosinophilic pneumonia, typically 2-4 weeks into treatment, with fever, hypoxia, bilateral infiltrates and more than 25% eosinophils in bronchoalveolar lavage fluid, often with blood eosinophilia. Treatment is to stop daptomycin and, if needed, give systemic corticosteroids.",
  "distractor_analysis": {
   "A": "Cryptogenic organising pneumonia is subacute, often with migratory consolidation and a lymphocyte-predominant lavage. An eosinophil fraction above 25% after a recognised culprit drug points elsewhere.",
   "B": "Cardiogenic pulmonary oedema is made unlikely by a normal NT-proBNP and does not produce eosinophil-rich lavage fluid.",
   "D": "Hospital-acquired bacterial pneumonia is possible in a hospitalised patient, but lavage cultures are negative and an eosinophil count of 34% is not a feature of bacterial infection.",
   "E": "Diffuse alveolar haemorrhage gives progressively bloodier lavage returns with haemosiderin-laden macrophages and a falling haemoglobin. None of these is present."
  },
  "generalisation": "New fever, hypoxia and bilateral infiltrates during daptomycin treatment should prompt a search for eosinophilia. A lavage eosinophil count above 25% supports drug-induced eosinophilic pneumonia; stop the drug and report the reaction through the Yellow Card scheme.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P047",
  "source_id": "MRCP1-574",
  "subdomain": "Endocrinology and diabetes",
  "topic": "Endocrinology and diabetes: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 79-year-old man with type 2 diabetes treated with metformin and gliclazide presents with 5 days of polyuria, thirst and increasing confusion. He has dry mucous membranes, a heart rate of 112 beats/min and a blood pressure of 98/60 mmHg. Plasma glucose is 48 mmol/L (4.0–7.8), sodium 152 mmol/L (135–145), urea 10 mmol/L (2.5–7.8) and calculated serum osmolality 362 mOsm/kg (275–295). Capillary ketones are 0.8 mmol/L (<0.6), venous pH 7.34 (7.35–7.45) and bicarbonate 22 mmol/L (22–29). What is the most likely diagnosis?",
  "options": {
   "A": "Mixed DKA and hyperosmolar state",
   "B": "Euglycaemic diabetic ketoacidosis",
   "C": "Diabetic ketoacidosis",
   "D": "Hyperosmolar hyperglycaemic state",
   "E": "Nephrogenic diabetes insipidus"
  },
  "correct_letter": "D",
  "why_correct": "The JBDS criteria for the hyperosmolar hyperglycaemic state are met: hypovolaemia, glucose of 30 mmol/L or more, osmolality of 320 mOsm/kg or more, and no significant ketonaemia (below 3 mmol/L) or acidosis (pH above 7.3, bicarbonate above 15 mmol/L). Initial treatment is IV 0.9% sodium chloride, aiming for a gradual fall in osmolality.",
  "distractor_analysis": {
   "A": "A mixed DKA and hyperosmolar picture needs both significant ketonaemia and acidosis as well as hyperosmolality. Ketonaemia and acidosis are absent here.",
   "B": "Euglycaemic ketoacidosis, often linked to SGLT2 inhibitors, has a glucose below about 11 mmol/L with ketonaemia and acidosis, the opposite of this picture.",
   "C": "Diabetic ketoacidosis needs ketonaemia of 3 mmol/L or more with bicarbonate below 15 mmol/L or pH below 7.3. Ketones of 0.8 mmol/L and a bicarbonate of 22 mmol/L do not meet this.",
   "E": "Nephrogenic diabetes insipidus causes dilute polyuria and hypernatraemia with a normal glucose. Here, a glucose of 48 mmol/L explains the osmotic diuresis and dehydration."
  },
  "generalisation": "Classify hyperglycaemic emergencies by numbers: glucose, osmolality, ketones, pH and bicarbonate. HHS needs slow correction of osmolality with fluids first, and insulin only when glucose stops falling with fluids or if ketonaemia is present (JBDS).",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P048",
  "source_id": "MRCP1-873",
  "subdomain": "Nephrology",
  "topic": "Nephrology: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 57-year-old woman without diabetes has a urine protein:creatinine ratio of 420 mg/mmol (<15), microscopic haematuria and a serum creatinine of 186 micromol/L (45–90), compared with 110 micromol/L (45–90) a year ago. The serum free light chain ratio is 1.1 (0.26–1.65), C3 and C4 are normal, cryoglobulins are not detected and hepatitis C serology is negative. Kidney biopsy shows mesangial expansion. Electron microscopy shows randomly arranged, non-branching fibrils with a diameter of 18 nm in the mesangium and capillary walls. Congo red staining is negative, and immunofluorescence shows smudgy polyclonal IgG and C3. What is the most likely diagnosis?",
  "options": {
   "A": "Cryoglobulinaemic glomerulonephritis",
   "B": "AL (light-chain) amyloidosis",
   "C": "Fibronectin glomerulopathy",
   "D": "Fibrillary glomerulonephritis",
   "E": "Immunotactoid glomerulopathy"
  },
  "correct_letter": "D",
  "why_correct": "Fibrillary glomerulonephritis shows randomly arranged, non-branching fibrils of about 12-24 nm that are Congo red negative, with smudgy polyclonal IgG (often IgG4) and C3 on immunofluorescence. DNAJB9 immunostaining confirms it. It often progresses to kidney failure.",
  "distractor_analysis": {
   "A": "Cryoglobulinaemic glomerulonephritis shows curved microtubular deposits and intracapillary thrombi, usually with low C4 and often hepatitis C infection. Cryoglobulins are not detected and complement is normal.",
   "B": "AL amyloidosis has thinner fibrils (8-12 nm) that are Congo red positive with apple-green birefringence and light-chain restriction. The free light chain ratio is normal here.",
   "C": "Fibronectin glomerulopathy is an inherited (autosomal dominant) disorder with large mesangial fibronectin deposits that are negative for immunoglobulin on immunofluorescence.",
   "E": "Immunotactoid glomerulopathy has larger (usually over 30 nm) hollow microtubules in organised parallel arrays and is often monoclonal and linked to lymphoproliferative disease."
  },
  "generalisation": "In glomerular disease with organised deposits, fibril size, Congo red staining and immunofluorescence clonality separate fibrillary glomerulonephritis, immunotactoid glomerulopathy, amyloidosis and cryoglobulinaemia.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P049",
  "source_id": "MRCP1-581",
  "subdomain": "Cardiology",
  "topic": "Cardiology: diagnosis",
  "difficulty": "Moderate",
  "stem": "A 67-year-old woman develops central chest pain and breathlessness an hour after hearing of her son's death. Her ECG shows ST elevation in leads V2-V5, and high-sensitivity troponin I is 1,240 ng/L (<16). Coronary angiography shows smooth coronary arteries with no stenosis or intimal flap. Left ventriculography shows apical and mid-ventricular akinesia extending beyond the territory of a single coronary artery, with hyperkinetic basal segments and normal wall thickness. Cardiac MRI on day 3 shows apical myocardial oedema with no late gadolinium enhancement. Echocardiography at 6 weeks shows normal left ventricular function. What is the most likely diagnosis?",
  "options": {
   "A": "Takotsubo syndrome",
   "B": "Hypertrophic cardiomyopathy",
   "C": "Acute viral myocarditis",
   "D": "Coronary artery spasm",
   "E": "Coronary artery dissection"
  },
  "correct_letter": "A",
  "why_correct": "Takotsubo syndrome typically affects postmenopausal women after emotional or physical stress. It mimics acute myocardial infarction (ST elevation, troponin rise) but shows unobstructed coronaries, regional wall-motion abnormality beyond one coronary territory with basal hyperkinesis, oedema without late gadolinium enhancement, and recovery within weeks.",
  "distractor_analysis": {
   "B": "Hypertrophic cardiomyopathy shows left ventricular hypertrophy, often with outflow tract obstruction. Wall thickness is normal here, and the dysfunction resolved.",
   "C": "Acute viral myocarditis usually follows a viral prodrome and shows non-ischaemic (subepicardial or mid-wall) late gadolinium enhancement on cardiac MRI. That is absent here.",
   "D": "Coronary artery spasm causes transient ischaemia in one coronary territory, often recurrent rest pain. It does not usually produce circumferential apical akinesia beyond a single territory with basal hyperkinesis.",
   "E": "Coronary artery dissection usually affects younger women, often peripartum, and is seen on angiography as an intimal flap or intramural haematoma. The arteries were smooth."
  },
  "generalisation": "In suspected myocardial infarction with unobstructed coronaries, use cardiac MRI to separate takotsubo syndrome, myocarditis and infarction. Takotsubo is not benign: arrhythmia, shock and LV thrombus can occur in the acute phase.",
  "review_status": "pilot v2 - not clinically reviewed"
 },
 {
  "id": "M1P050",
  "source_id": "MRCP1-775",
  "subdomain": "Infectious diseases",
  "topic": "Infectious diseases: cause",
  "difficulty": "Moderate",
  "stem": "A 54-year-old man with type 2 diabetes (HbA1c 86 mmol/mol (20–41)) returns from 3 months working on a cattle farm in the Northern Territory of Australia during the wet season. Four weeks later he develops a temperature of 38.9 °C, a productive cough and 6 kg of weight loss. Chest X-ray shows right upper-lobe cavitating consolidation, and CT shows multiple small abscesses in the liver and spleen. Blood cultures grow an oxidase-positive Gram-negative bacillus with bipolar staining that forms wrinkled colonies after 48 hours and is resistant to gentamicin and colistin. What is the most likely causative organism?",
  "options": {
   "A": "Salmonella enterica Typhi",
   "B": "Burkholderia pseudomallei",
   "C": "Klebsiella pneumoniae",
   "D": "Mycobacterium tuberculosis",
   "E": "Pseudomonas aeruginosa"
  },
  "correct_letter": "B",
  "why_correct": "Burkholderia pseudomallei causes melioidosis, acquired from soil and surface water in northern Australia and South-East Asia, especially in the wet season. Diabetes is the main risk factor. It causes cavitating pneumonia, bacteraemia and abscesses in the liver and spleen. It is an oxidase-positive Gram-negative bacillus with bipolar 'safety-pin' staining and wrinkled colonies, and it is intrinsically resistant to gentamicin and colistin.",
  "distractor_analysis": {
   "A": "Salmonella Typhi causes enteric fever after travel, but it is oxidase negative and rarely causes cavitating pneumonia with multiple visceral abscesses.",
   "C": "Hypervirulent Klebsiella pneumoniae causes liver abscesses with metastatic spread in people with diabetes, but it is oxidase negative, forms mucoid colonies and is usually susceptible to gentamicin.",
   "D": "Mycobacterium tuberculosis causes upper-lobe cavitation and weight loss, but it is an acid-fast bacillus that grows slowly and would not grow as a Gram-negative bacillus in routine blood culture within 48 hours.",
   "E": "Pseudomonas aeruginosa is also an oxidase-positive Gram-negative bacillus, but it usually forms smooth pigmented colonies, is susceptible to colistin and rarely causes community-acquired liver and splenic abscesses."
  },
  "generalisation": "In a patient with diabetes who has returned from northern Australia or South-East Asia, pneumonia with liver and splenic abscesses suggests melioidosis. Warn the laboratory (Hazard Group 3 organism) and treat with IV ceftazidime or meropenem, followed by oral eradication therapy with co-trimoxazole.",
  "review_status": "pilot v2 - not clinically reviewed"
 }
];
