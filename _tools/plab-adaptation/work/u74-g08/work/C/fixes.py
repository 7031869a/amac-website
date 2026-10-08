NICE141 = "https://www.nice.org.uk/guidance/cg141/chapter/Recommendations"
F = {}
I = {}  # issues

I["PAN8811"] = "Clinically correct (CRUK confirms carcinoid syndrome is commonest with a small-bowel NET that has spread to the liver). Key was the longest option: distractors lengthened, key tightened to 'Small intestine (ileum)'. Source added."
F["PAN8811"] = {
 "options": {"A": "Medulla of the adrenal gland", "B": "Parenchyma of the liver", "C": "Exocrine tissue of the pancreas", "D": "Small intestine (ileum)", "E": "Sigmoid segment of the colon"},
 "correct_answer": "D. Small intestine (ileum)",
 "why_correct": "Flushing, diarrhoea and bronchospasm with raised 5-HIAA indicate carcinoid syndrome. The commonest source is a well-differentiated neuroendocrine tumour of the small bowel, usually the ileum. Serotonin and other amines from gut tumours are normally inactivated by the liver, so the syndrome usually appears once liver metastases release mediators directly into the systemic circulation. Source: Cancer Research UK, Carcinoid syndrome (neuroendocrine tumours), 2025.",
 "exam_trap": "B, Parenchyma of the liver — the liver lesions are obvious on imaging, but they are metastases that unmask the syndrome, not the primary source.",
 "sources": ["https://www.cancerresearchuk.org/about-cancer/neuroendocrine-tumours-nets/carcinoid-syndrome", "https://www.nhs.uk/conditions/neuroendocrine-tumours/"]}

I["PAN6418"] = "Key correct (NICE CG141 1.5.3 says use band ligation for oesophageal varices). The key tied for longest with C. Two implausible distractors were replaced with plausible endoscopic alternatives: C is now cyanoacrylate injection, which NICE 1.5.5 reserves for gastric varices, and E is now argon plasma coagulation; the snare and ERCP distractors stay. why_wrong, exam_trap and the pearl (which would have repeated the new distractor) were updated, and the source added."
F["PAN6418"] = {
 "options": {"A": "Biliary sphincterotomy at ERCP", "B": "Band ligation of the varices", "C": "Injection of cyanoacrylate glue", "D": "Snare polypectomy", "E": "Argon plasma coagulation"},
 "correct_answer": "B. Band ligation of the varices",
 "why_correct": "Endoscopic band ligation is the recommended treatment for bleeding oesophageal varices. Elastic bands placed around the varices strangulate them so that they thrombose and slough. If banding does not control the bleeding, a transjugular intrahepatic portosystemic shunt (TIPS) should be considered, with balloon tamponade as a temporary bridge. Source: NICE CG141 Acute upper gastrointestinal bleeding in over 16s, 2012 (updated 2016).",
 "why_wrong": "A. ERCP sphincterotomy treats bile duct stones, not varices. C. Cyanoacrylate injection is the endoscopic treatment for bleeding gastric varices; oesophageal varices are banded. D. Snare polypectomy removes colonic or gastric polyps. E. Argon plasma coagulation treats superficial lesions such as angiodysplasia, not variceal bleeding.",
 "pearl": "Everyone with suspected variceal bleeding should also receive terlipressin and prophylactic antibiotics at presentation, before endoscopy.",
 "exam_trap": "C, Injection of cyanoacrylate glue — it is a genuine endoscopic variceal therapy, but it is used for gastric varices; bleeding oesophageal varices are banded.",
 "sources": [NICE141]}

I["PAN2605"] = "Key correct (NICE CG141 1.3.1–1.3.2 on timing). Fixed an inaccuracy in why_correct: NICE says adrenaline injection must not be used alone, so it now reads 'adrenaline injection combined with a second method'. The absurd distractor E (MRI head) was replaced with a barium meal. Source added."
F["PAN2605"] = {
 "options": {"A": "Lower bowel examination with a flexible sigmoidoscope", "B": "Oesophagogastroduodenoscopy", "C": "Full colonoscopy after bowel preparation", "D": "Ultrasound of the abdomen with Doppler", "E": "Barium meal examination"},
 "correct_answer": "B. Oesophagogastroduodenoscopy",
 "why_correct": "Coffee-ground vomiting and melaena indicate an upper GI bleed. Oesophagogastroduodenoscopy shows the bleeding lesion directly and allows treatment in the same procedure, for example clips, thermal coagulation, or adrenaline injection combined with a second method (adrenaline alone is not recommended). NICE advises endoscopy immediately after resuscitation for unstable patients and within 24 hours of admission for everyone else. Source: NICE CG141 Acute upper gastrointestinal bleeding in over 16s, 2012 (updated 2016).",
 "why_wrong": "A. Flexible sigmoidoscopy views only the distal colon. C. Colonoscopy cannot reach a source in the oesophagus, stomach or duodenum. D. Ultrasound cannot see mucosal lesions or stop bleeding. E. A barium meal cannot treat the bleeding point, and the contrast obscures the view at later endoscopy.",
 "sources": [NICE141]}

I["PAN8503"] = "Clinically sound. The key 'Gastro-oesophageal reflux disease' was the longest option: it is now 'Gastro-oesophageal reflux' and A and D are lengthened. why_correct adds the BTS 2023 point that acid suppression is only for patients with heartburn or other definite evidence of reflux, as this patient has. Source added."
F["PAN8503"] = {
 "options": {"A": "Achalasia of the cardia", "B": "Eosinophilic oesophagitis", "C": "Diffuse oesophageal spasm", "D": "Candida infection of the oesophagus", "E": "Gastro-oesophageal reflux"},
 "correct_answer": "E. Gastro-oesophageal reflux",
 "why_correct": "Gastro-oesophageal reflux can cause extra-oesophageal symptoms such as chronic cough, hoarseness, throat clearing and a feeling of a lump in the throat, through acid irritation of the larynx and reflex vagal mechanisms. Her nocturnal, postural cough together with heartburn and acid brash points to reflux as the unifying cause. Because she has typical heartburn, a trial of acid suppression is reasonable; it is not advised for chronic cough without such evidence of reflux. Source: British Thoracic Society clinical statement on chronic cough in adults, 2023.",
 "why_wrong": "A. Achalasia presents with progressive dysphagia to solids and liquids and regurgitation of undigested food, not heartburn after meals. B. Eosinophilic oesophagitis typically causes dysphagia and food bolus impaction, often in young atopic men. C. Diffuse oesophageal spasm causes episodic chest pain and intermittent dysphagia rather than cough and hoarseness. D. Oesophageal candidiasis causes painful swallowing, usually in immunosuppressed people or inhaled steroid users.",
 "exam_trap": "A, Achalasia of the cardia — it can also cause nocturnal cough from regurgitation and aspiration, but the leading symptom would be dysphagia to both solids and liquids, which she does not have.",
 "sources": ["https://www.brit-thoracic.org.uk/clinical-resources/clinical-statements/chronic-cough-in-adults/", "https://www.brit-thoracic.org.uk/about-us/news/2023/british-thoracic-society-publishes-a-clinical-statement-on-chronic-cough-in-adults", "https://www.nice.org.uk/guidance/cg184"]}

I["PAN4880"] = "Clinically correct. The pearl is softened from 'life expectancy can be normal' to 'close to normal', as the evidence shows a clear survival benefit when treatment starts before cirrhosis. Source added. The BSH guideline PDF and NICE CKS could not be opened from here (CKS is geo-blocked), so the facts were checked against secondary summaries."
F["PAN4880"] = {
 "why_correct": "In hereditary haemochromatosis, excess absorbed iron is deposited mainly in hepatocytes. This causes hepatomegaly, fibrosis and eventually cirrhosis, which carries a high risk of hepatocellular carcinoma. The liver is therefore the main organ affected and the main driver of mortality, although the pancreas, heart, joints, skin and pituitary are also involved. Source: British Society for Haematology guideline on diagnosis and therapy of genetic haemochromatosis, 2018.",
 "pearl": "Venesection is the mainstay of treatment, and when it is started before cirrhosis develops, survival is close to normal.",
 "sources": ["https://discovery-pp.ucl.ac.uk/10047172/1/Fitzsimmons_Diagnosis_therapy_genetic.pdf", "https://fg.bmj.com/content/17/3/190", "https://cks.nice.org.uk/topics/haemochromatosis/"]}

I["PAN3464"] = "Clinically correct: jaundice, coagulopathy and encephalopathy without pre-existing liver disease, and paracetamol is the leading UK cause (RCEMLearning). Source added. There is no NICE guideline for acute liver failure, so a Royal College source is used."
F["PAN3464"] = {
 "why_correct": "Acute liver failure is the rapid onset of jaundice, coagulopathy and hepatic encephalopathy in a person without pre-existing chronic liver disease. Her confusion and asterixis show encephalopathy, and the prolonged INR shows loss of synthetic function. She needs urgent discussion with a specialist liver unit, and causes such as paracetamol overdose and viral hepatitis should be sought. Source: Royal College of Emergency Medicine, RCEMLearning reference: Acute liver failure, 2024.",
 "sources": ["https://www.rcemlearning.co.uk/reference/acute-liver-failure/", "https://www.scottishintensivecare.org.uk/?p=3590"]}

I["PAN4011"] = "Clinically correct. why_correct said 'MRCP or EUS' identifies the cause, which is too narrow: NICE NG85 offers pancreatic-protocol CT first when pancreatic cancer is suspected. It now names MRCP, CT or EUS as appropriate. Source added."
F["PAN4011"] = {
 "why_correct": "Dilatation of the common bile duct and the intrahepatic ducts on ultrasound shows that bile is backing up behind a blockage in the extrahepatic biliary tree. In this setting the commonest causes are a stone in the common bile duct or a tumour of the pancreatic head or bile duct. Further imaging, such as MRCP, pancreatic-protocol CT or endoscopic ultrasound, then identifies the cause. Source: NICE CG188 Gallstone disease, 2014; NICE NG85 Pancreatic cancer in adults, 2018.",
 "sources": ["https://www.nice.org.uk/guidance/cg188/chapter/1-Recommendations", "https://www.nice.org.uk/guidance/ng85/chapter/Recommendations"]}

I["PAN8860"] = "Clinically correct: type 1 (pauciarticular, large-joint) peripheral arthropathy follows bowel activity. Source added. A 2025 BSG IBD guideline may have replaced the 2019 one, but I could not confirm it, so the human reviewer may want to update the citation."
F["PAN8860"] = {
 "why_correct": "Peripheral arthritis is the most common extra-intestinal manifestation of inflammatory bowel disease. The type that involves a few large lower-limb joints typically flares with active bowel disease and settles as the bowel inflammation is controlled. Asymmetrical swelling of the knee and ankle during a Crohn's flare fits enteropathic arthritis. Source: British Society of Gastroenterology consensus guidelines on the management of inflammatory bowel disease in adults, 2019.",
 "sources": ["https://gut.bmj.com/content/68/Suppl_3/s1", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11900441/"]}

I["PAN4297"] = "Clinically correct. The key was the longest option, so D 'Steatorrhoea' is replaced with 'Occult bleeding', a more instructive distractor. Source added."
F["PAN4297"] = {
 "options": {"A": "Melaena", "B": "Tenesmus", "C": "Haematemesis", "D": "Occult bleeding", "E": "Haematochezia"},
 "correct_answer": "E. Haematochezia",
 "why_correct": "Haematochezia means the passage of fresh, bright red or maroon blood per rectum. It usually indicates a lower gastrointestinal source, although a brisk upper gastrointestinal bleed can occasionally present this way, with haemodynamic instability. Using the correct term helps colleagues triage the likely source quickly. Source: British Society of Gastroenterology guideline on acute lower gastrointestinal bleeding, 2019.",
 "why_wrong": "A. Melaena is black, tarry, offensive stool from digested blood, usually from an upper source. B. Tenesmus is the feeling of incomplete evacuation with straining, not blood loss. C. Haematemesis is vomiting of blood. D. Occult bleeding is blood loss that cannot be seen and is found only by testing, such as a faecal immunochemical test.",
 "sources": ["https://gut.bmj.com/content/68/5/776", "https://www.nice.org.uk/guidance/cg141/chapter/Recommendations"]}

I["PAN6292"] = "Clinically correct. The key was the longest option, so it is shortened to 'Vitamins A, D, E and K'. Source added."
F["PAN6292"] = {
 "options": {"A": "Water-soluble B vitamins", "B": "Vitamin B12 (cobalamin) only", "C": "Vitamins A, D, E and K", "D": "Vitamin C (ascorbic acid)", "E": "Iron and folate"},
 "correct_answer": "C. Vitamins A, D, E and K",
 "why_correct": "Pale, greasy, foul stools that are difficult to flush describe steatorrhoea, here from exocrine pancreatic insufficiency. The fat-soluble vitamins A, D, E and K are absorbed with dietary fat, so impaired fat digestion leads to their deficiency. Easy bruising fits vitamin K deficiency causing a prolonged prothrombin time. Source: Pancreatic Society of Great Britain and Ireland, UK practical guidelines for the management of pancreatic exocrine insufficiency, BMJ Open Gastroenterology, 2021.",
 "sources": ["https://bmjopengastro.bmj.com/content/8/1/e000643.abstract", "https://www.nice.org.uk/guidance/ng104/chapter/Recommendations"]}

I["PAN1897"] = "Substantive change. The vignette was anorexia nervosa, but for AN the UK specialist guidance (RCPsych MEED 2022) advises starting refeeding at higher energy levels and warns against underfeeding, which makes 'introduce feeding gradually' arguable. The patient is now a non-eating-disorder adult (older widow, two weeks of negligible intake), where NICE CG32 1.4.8 applies directly. The key (116 characters, the longest) is shortened, and why_correct is rewritten to NICE CG32 without dose figures. Source added."
F["PAN1897"] = {
 "stem": "A 74-year-old woman who lives alone is admitted with a chest infection. Her neighbour says that since her husband died she has eaten almost nothing for about two weeks. She is very thin with marked muscle wasting, and her potassium and phosphate are at the low end of normal. The ward dietitian is planning to start nutrition support.\n\nWhich approach to feeding is most appropriate?",
 "options": {"A": "Give her full estimated energy requirements from day one to reverse weight loss quickly", "B": "Keep her nil by mouth for three days to allow the gut to recover", "C": "Start at a low energy intake with thiamine, monitoring and replacing electrolytes", "D": "Check electrolytes only after a week of full feeding", "E": "Give subcutaneous insulin with each feed to improve uptake of nutrients"},
 "correct_answer": "C. Start at a low energy intake with thiamine, monitoring and replacing electrolytes",
 "why_correct": "About two weeks of negligible intake with marked wasting puts her at high risk of refeeding syndrome. In this syndrome, carbohydrate triggers insulin release and a rapid shift of phosphate, potassium and magnesium into cells, with fluid retention and possible arrhythmias or heart failure. NICE advises starting nutrition at a low energy level and increasing it slowly over the first week. Thiamine and vitamin B supplements should be given immediately before and during the first days of feeding, and potassium, phosphate and magnesium supplemented and monitored closely. Source: NICE CG32 Nutrition support for adults, 2006 (updated 2017).",
 "thinking": "About two weeks of negligible intake with marked wasting ↓ High risk of refeeding syndrome ↓ Feeding drives insulin release and intracellular shift of phosphate, potassium and magnesium ↓ Start low and increase slowly ↓ Give thiamine and monitor and replace electrolytes",
 "notes": "Checker: vignette changed from anorexia nervosa to an older adult with two weeks of negligible intake, because RCPsych MEED (2022) advises higher starting energy in anorexia nervosa; NICE CG32 applies directly to this patient.",
 "sources": ["https://www.nice.org.uk/guidance/cg32/chapter/Recommendations"]}

I["PAN1171"] = "Clinically correct and a distinct angle: live BX1006 teaches that iron darkens stools, and this item teaches the opposite trap. Safety wording is strengthened: a near-syncopal patient with melaena who calls NHS 111 needs emergency hospital assessment, not 'urgent same-day assessment'. The odd 'odourless' stool wording in the stem is fixed. Source added."
F["PAN1171"] = {
 "stem": "A 70-year-old woman who takes ferrous sulfate for iron-deficiency anaemia phones NHS 111. For the past day her stools have been jet black, sticky like tar and unusually foul-smelling, and she nearly fainted when she stood up from her chair. Since starting iron her stools have been dark but formed, with no unusual smell.\n\nWhat is the most likely cause?",
 "why_correct": "Oral iron darkens the stool, but it does not make it tarry, sticky and offensive, and it does not cause postural near-syncope. That change in character, together with symptoms of volume loss, indicates melaena from an upper gastrointestinal bleed, and she needs emergency assessment in hospital. Her known iron deficiency may itself reflect an occult upper gastrointestinal lesion. Source: NICE CG141 Acute upper gastrointestinal bleeding in over 16s, 2012 (updated 2016); BNF, ferrous sulfate.",
 "thinking": "On oral iron, so dark stools are expected ↓ New change to tarry, sticky, offensive stool ↓ Postural near-syncope suggests significant blood loss ↓ This is melaena, not an iron effect ↓ Upper gastrointestinal bleed needing emergency assessment",
 "sources": [NICE141, "https://bnf.nice.org.uk/drugs/ferrous-sulfate/"]}

I["PAN10082"] = "Clinically correct. Source added."
F["PAN10082"] = {
 "why_correct": "Vitamin A (retinol) is needed to form rhodopsin in the retinal rods, so deficiency first causes impaired vision in dim light. It also causes conjunctival and corneal dryness (xerophthalmia). As a fat-soluble vitamin, it is lost with fat malabsorption after small-bowel resection. Source: NHS website, Vitamins and minerals: vitamin A, 2020.",
 "sources": ["https://www.nhs.uk/conditions/vitamins-and-minerals/vitamin-a/"]}

I["PAN2227"] = "Clinically correct. The key was the longest option, so it is now 'Vitamin B3 deficiency', in parallel with the other options. 'Commonest cause in the UK' is softened to 'a leading cause', because the source does not rank causes. Source added."
F["PAN2227"] = {
 "options": {"A": "Vitamin B3 deficiency", "B": "Vitamin K deficiency", "C": "Vitamin C deficiency", "D": "Vitamin B12 deficiency", "E": "Vitamin D deficiency"},
 "correct_answer": "A. Vitamin B3 deficiency",
 "why_correct": "Pellagra results from deficiency of niacin (vitamin B3) and classically causes dermatitis in sun-exposed areas, diarrhoea and neuropsychiatric change, the so-called three Ds; untreated, it can be fatal. Alcohol dependence with a poor diet is a leading cause in the UK. The well-demarcated photosensitive rash around the neck is known as Casal necklace. Source: Patient.info Professional, Pellagra, 2023.",
 "sources": ["https://patient.info/doctor/dermatology/pellagra"]}

I["PAN2228"] = "Clinically correct. The key was the longest option, so distractors are lengthened with parenthetical names. Source added."
F["PAN2228"] = {
 "options": {"A": "Vitamin A (retinol)", "B": "Vitamin C (ascorbic acid)", "C": "Vitamin E (tocopherol)", "D": "Thiamine (vitamin B1)", "E": "Vitamin K (phylloquinone)"},
 "correct_answer": "D. Thiamine (vitamin B1)",
 "why_correct": "Thiamine deficiency causes beriberi: dry beriberi is a symmetrical sensorimotor peripheral neuropathy with muscle weakness, and wet beriberi adds high-output cardiac failure and oedema. Heavy drinkers with poor intake are at greatest risk. Thiamine should be replaced promptly, and parenterally if Wernicke encephalopathy is suspected. Source: NICE CG100 Alcohol-use disorders: diagnosis and management of physical complications, 2010 (updated 2017).",
 "sources": ["https://www.nice.org.uk/guidance/cg100/chapter/Recommendations"]}

I["PAN6040"] = "Clinically correct. why_correct relies on there being no shock and no nephrotoxins (diagnostic criteria for HRS-AKI), but the stem did not say so; this is now added to the stem. Source added."
F["PAN6040"] = {
 "stem": "On the hepatology ward, a 61-year-old man with alcohol-related cirrhosis and tense ascites has a steadily rising creatinine over a week, with very little urine output. Diuretics were stopped and he was given intravenous albumin, but his kidney function has not improved. He is not hypotensive and has not received any nephrotoxic drugs. Urine dipstick shows no blood or protein, and a renal ultrasound shows normal-sized kidneys without hydronephrosis.\n\nWhich diagnosis is most likely?",
 "why_correct": "Hepatorenal syndrome is a functional kidney injury in advanced liver disease caused by intense renal vasoconstriction. It is diagnosed when kidney function keeps deteriorating despite stopping diuretics and giving albumin, with no shock, no nephrotoxins, no proteinuria or haematuria and no structural abnormality on ultrasound, which matches this picture. Source: British Society of Gastroenterology and British Association for the Study of the Liver, guidelines on the management of ascites in cirrhosis, 2020.",
 "sources": ["https://www.basl.org.uk/uploads/Portal%20Hypertension%20SIG/gutjnl-2020-321790.full_.pdf", "https://gut.bmj.com/content/70/1/9"]}
