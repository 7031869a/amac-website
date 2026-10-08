import json
NG203='https://www.nice.org.uk/guidance/ng203/chapter/Recommendations'
NG19='https://www.nice.org.uk/guidance/ng19/chapter/Recommendations'
DESP='https://www.gov.uk/guidance/diabetic-eye-screening-programme-overview'
JBDS='https://abcd.care/resource/current/jbds-02-management-diabetic-ketoacidosis-adults'
JBDSPDF='https://abcd.care/sites/default/files/site_uploads/JBDS_Guidelines_Current/JBDS_02_DKA_Guideline_with_QR_code_March_2023.pdf'
NG28C='https://www.nice.org.uk/guidance/ng28/chapter/Complications'
NG28B='https://www.nice.org.uk/guidance/ng28/chapter/Blood-glucose-management'
NG17='https://www.nice.org.uk/guidance/ng17/chapter/Recommendations'
DVLA='https://www.gov.uk/guidance/diabetes-mellitus-assessing-fitness-to-drive'
HYPERCA=['https://doaj.org/article/6dea33c153d9469cb840422b379f251a','https://patient.info/doctor/hypercalcaemia']
SFENA='https://pmc.ncbi.nlm.nih.gov/articles/PMC5314809'
PINA='https://patient.info/doctor/hyponatraemia'
LEEDS='https://www.leedsth.nhs.uk/services/pathology/tests/osmolality-urine/'
NG243='https://www.nice.org.uk/guidance/ng243/chapter/Recommendations'
NG145='https://www.nice.org.uk/guidance/ng145/chapter/Recommendations'
NG136='https://www.nice.org.uk/guidance/ng136/chapter/Recommendations'
ALDO='https://patient.info/doctor/hyperaldosteronism'
HYPOCA='https://gloshospitals.nhs.uk/media/documents/Emergency_Guidance_Acute_Hypocalcaemia_in_Adults.pdf'

E={}
# ---------------- PAN6678
E['PAN6678']=dict(
 stem="A 41-year-old shop manager was found to have type 2 diabetes six months ago. At her first annual check with the practice nurse she is asked to bring an early-morning urine pot. She feels well, passes urine normally and asks why a urine sample is needed when her bladder is fine.\n\nWhat is the main reason for this test?",
 options={"A":"To find early kidney damage from diabetes before it causes symptoms"},
 why_correct="An early-morning urine albumin-to-creatinine ratio (ACR) detects albuminuria, which is the earliest sign of diabetic kidney disease and appears long before eGFR falls or symptoms develop. Finding it early allows blood pressure, glucose and kidney-protective treatment (such as an ACE inhibitor or ARB) to be optimised. NICE recommends testing urine ACR, together with eGFR, in everyone with diabetes, and it is part of the annual diabetes review. Source: NICE NG203 Chronic kidney disease: assessment and management, 2021.",
 sources=[NG203,NG17])
# ---------------- PAN7947
E['PAN7947']=dict(
 why_correct="NICE recommends that every adult with diabetes has a foot risk assessment when diabetes is diagnosed and at least once a year after that, with both feet examined for neuropathy (using a 10 g monofilament), ischaemia, callus, deformity and other risk factors. The result places him in a risk category that decides how often he is reviewed and whether he needs the foot protection service. Prevention depends on finding risk before damage occurs, even when the feet look normal to the patient. Source: NICE NG19 Diabetic foot problems: prevention and management, 2015 (updated 2023).",
 pearl="A new ulcer or other active diabetic foot problem needs referral to the multidisciplinary foot care or foot protection service within 1 working day, and limb-threatening problems need immediate referral to acute services.",
 sources=[NG19])
# ---------------- PAN1885
E['PAN1885']=dict(
 options={"C":"Sight-threatening retinopathy can be present while vision is normal"},
 why_correct="Diabetic retinopathy, including proliferative disease and maculopathy, can be advanced while visual acuity remains normal. Retinal photography finds these changes at a stage when laser or anti-VEGF treatment can prevent sight loss. Normal vision, or passing a driving eye test, is therefore not reassurance, and he should keep attending the NHS Diabetic Eye Screening Programme. Source: NHS England, Diabetic eye screening: programme overview, 2026.",
 sources=[DESP])
# ---------------- PAN10323
E['PAN10323']=dict(
 stem="A 19-year-old woman with type 1 diabetes is brought to the emergency department with abdominal pain, vomiting and deep sighing breathing. For three days she has had fever, dysuria and loin pain, and she admits she reduced her insulin because she was not eating. She has ketonaemia and a metabolic acidosis.\n\nWhich factor is most likely to have triggered this episode?",
 why_correct="Her fever, dysuria and loin pain point to pyelonephritis, and infection is one of the commonest triggers for DKA. Illness raises counter-regulatory hormones such as cortisol and adrenaline, increasing insulin requirements, and her reduction of insulin made the deficit worse. Treating DKA includes looking for and treating the precipitating cause. Source: JBDS-IP, The management of diabetic ketoacidosis in adults, 2023.",
 sources=[JBDS,JBDSPDF])
# ---------------- PAN925
E['PAN925']=dict(
 stem="A 27-year-old man with type 1 diabetes is admitted to the medical assessment unit with DKA after a week of vomiting. His first venous gas shows a potassium above the upper limit of normal, and his ECG is normal. The junior doctor asks whether this means he has too much potassium overall.\n\nWhich statement best describes his potassium status?",
 options={"C":"His total body potassium is likely to be low despite the raised serum level"},
 why_correct="In DKA, insulin deficiency and acidosis shift potassium out of cells, so the serum level can be normal or high, while osmotic diuresis and vomiting have caused large losses. Total body potassium is therefore low. Once fixed-rate insulin starts, potassium moves back into cells and the serum level falls quickly, so it must be monitored closely and potassium added to the fluids once the level falls into the normal range. Source: JBDS-IP, The management of diabetic ketoacidosis in adults, 2023.",
 why_wrong="A. The serum level reflects the shift out of cells, not total stores. B. There is no true excess, and calcium gluconate is used to protect the heart in hyperkalaemia with ECG changes, which he does not have. D. Insulin lowers serum potassium; it is not delayed for this level. E. Most patients need potassium replacement once insulin is running.",
 sources=[JBDS,JBDSPDF])
# ---------------- PAN926
E['PAN926']=dict(
 why_correct="The key problem in DKA is insulin deficiency driving uncontrolled lipolysis and ketone production, which causes the acidosis. A fixed-rate insulin infusion suppresses ketogenesis so ketones clear and the acidosis corrects, while also lowering glucose. Resolution is judged by falling ketones and rising bicarbonate, not by glucose alone. Source: JBDS-IP, The management of diabetic ketoacidosis in adults, 2023.",
 sources=[JBDS,JBDSPDF])
# ---------------- PAN6732
E['PAN6732']=dict(
 why_correct="Postural hypotension, early satiety from gastroparesis and abnormal sweating (loss in the legs with gustatory facial sweating) together reflect damage to the autonomic nerves supplying the cardiovascular system, gut and sweat glands. This is diabetic autonomic neuropathy, which tends to occur after many years of diabetes alongside other microvascular complications. Source: NICE NG28 Type 2 diabetes in adults: management (complications), 2015 (updated 2022).",
 sources=[NG28C,'https://patient.info/doctor/autonomic-neuropathy'])
# ---------------- PAN1884 (clinical correction)
E['PAN1884']=dict(
 stem="A 45-year-old sales representative with insulin-treated type 2 diabetes drives a car for his work. He tells his GP that last week he became shaky and confused at the wheel, and a passer-by had to help him out of the car and give him a sugary drink. A milder episode while driving happened a fortnight earlier. He wants to keep working.\n\nWhat is the most appropriate advice?",
 options={"A":"Stop driving, tell the DVLA and have his insulin treatment reviewed urgently",
          "B":"Keep driving for work but eat a carbohydrate snack every hour while on the road",
          "C":"Increase his insulin dose so that his overall glucose control improves quickly",
          "D":"Keep driving provided he can still feel his usual warning symptoms first",
          "E":"Stop checking his glucose before journeys, as this only adds to his worry"},
 correct_answer="A. Stop driving, tell the DVLA and have his insulin treatment reviewed urgently",
 why_correct="Hypoglycaemia that needs another person's help counts as severe, and DVLA guidance states that any driver who has a severe hypoglycaemic episode while driving must stop driving and notify the DVLA; it is his legal responsibility to do so. Recurrent hypoglycaemia at the wheel endangers him and the public. His insulin regimen, meal pattern and monitoring also need urgent review to find why the episodes are happening. Source: DVLA, Assessing fitness to drive: diabetes mellitus, 2025.",
 why_wrong="B. Snacking does not make driving safe when hypoglycaemia keeps occurring, and a severe episode at the wheel means he must stop. C. Increasing insulin would make hypoglycaemia more frequent. D. Warning symptoms did not protect him, as he already needed help at the wheel. E. Insulin-treated drivers must check their glucose before driving and at regular intervals on longer journeys.",
 pearl="Insulin-treated drivers must check their glucose before the first journey and at least every 2 hours while driving.",
 thinking="Insulin-treated diabetes  ↓  Hypoglycaemia at the wheel needing another person's help  ↓  Counts as severe hypoglycaemia while driving  ↓  DVLA rule: must stop driving and notify  ↓  Urgent review of his treatment",
 exam_trap="D, Keep driving while he can feel warning symptoms — awareness seems protective, but he has already needed someone else's help at the wheel, so he must stop driving and notify the DVLA.",
 takeaway="Severe hypoglycaemia while driving means the driver must stop driving, notify the DVLA and have treatment reviewed.",
 sources=[DVLA])
# ---------------- PAN6109
E['PAN6109']=dict(
 why_correct="Raised extracellular calcium speeds ventricular repolarisation, shortening the ST segment and therefore the QT interval. Severe hypercalcaemia, often from bone metastases in breast cancer, can also cause arrhythmias, so the ECG should be monitored during treatment with intravenous fluids and bisphosphonates. Source: Society for Endocrinology, Emergency management of acute hypercalcaemia in adult patients, 2016.",
 sources=HYPERCA)
# ---------------- PAN3635
E['PAN3635']=dict(
 why_correct="Compulsive excessive water drinking, often seen in people with psychiatric illness, can exceed the kidneys' capacity to excrete free water and cause dilutional hyponatraemia. The urine is maximally dilute, and sodium recovers once intake is restricted, as happened during his admissions. Source: Leeds Teaching Hospitals NHS Trust pathology guidance, urine osmolality, 2026.",
 sources=[LEEDS,PINA])
# ---------------- PAN4938
E['PAN4938']=dict(
 stem="Ten days after her GP started bendroflumethiazide for hypertension, a 77-year-old woman is brought to the emergency department by her daughter because she is vomiting, muddled and has a headache. Her serum sodium is very low.\n\nWhich complication poses the most immediate threat to her?",
 options={"D":"Brain swelling causing seizures or coma"},
 correct_answer="D. Brain swelling causing seizures or coma",
 why_correct="A sharp fall in sodium makes plasma hypotonic relative to brain cells, so water moves into the brain and causes cerebral oedema. Headache, vomiting and confusion are warning features that can progress to seizures, coma and herniation. Vomiting marks severe symptoms, which need urgent senior management with hypertonic saline and close monitoring so that the sodium does not rise too quickly. Source: Society for Endocrinology, Emergency management of severe symptomatic hyponatraemia in adult patients, 2016.",
 sources=[SFENA,PINA])
# ---------------- PAN5392
E['PAN5392']=dict(
 stem="A 59-year-old woman with long-standing alcohol misuse is found to have a profoundly low sodium after weeks of poor eating. She is treated, and her sodium rises far faster than the recommended limit over the first day. Three days later she develops slurred speech, difficulty swallowing and weakness of all four limbs.\n\nWhich complication has most likely occurred?",
 why_correct="Rapid correction of chronic hyponatraemia shrinks brain cells that had adapted to hypotonicity, damaging myelin, especially in the pons. The typical picture is a delay of a few days followed by dysarthria, dysphagia and quadriparesis, sometimes progressing to a locked-in state. Alcohol misuse and malnutrition increase the risk, so the rise in sodium must be kept within safe limits. Source: Society for Endocrinology, Emergency management of severe symptomatic hyponatraemia in adult patients, 2016.",
 sources=[SFENA,PINA])
# ---------------- PAN6721
E['PAN6721']=dict(
 why_correct="Aldosterone acts on the distal nephron to reabsorb sodium and secrete potassium. In primary adrenal insufficiency the adrenal cortex is destroyed, so aldosterone is lost and potassium is retained, causing hyperkalaemia. Fludrocortisone replaces this mineralocorticoid effect. Source: NICE NG243 Adrenal insufficiency: identification and management, 2024.",
 sources=[NG243])
# ---------------- PAN1363
E['PAN1363']=dict(
 options={"C":"Urgent assessment of symptoms, fluid status and cause, with senior input"},
 correct_answer="C. Urgent assessment of symptoms, fluid status and cause, with senior input",
 why_correct="New confusion with a very low sodium suggests symptomatic hyponatraemia, which can progress to seizures and coma from cerebral oedema. He needs urgent assessment of symptom severity, volume status, medicines and possible causes, with senior involvement to decide whether hypertonic saline is needed. Correction must be controlled, as raising sodium too quickly risks osmotic demyelination. Source: Society for Endocrinology, Emergency management of severe symptomatic hyponatraemia in adult patients, 2016.",
 sources=[SFENA,PINA])
# ---------------- PAN6171
E['PAN6171']=dict(
 why_correct="Smoking is the most important modifiable risk factor for developing thyroid eye disease and for it becoming more severe. It also reduces the response to treatment and increases the risk of eye disease worsening after radioactive iodine. She should be strongly advised and supported to stop smoking. Source: British Thyroid Foundation, Thyroid eye disease information, and NICE NG145 Thyroid disease, 2019.",
 sources=['https://www.btf-thyroid.org/thyroid-eye-disease-leaflet','https://patient.info/doctor/thyroid-eye-disease',NG145])
# ---------------- PAN1886
E['PAN1886']=dict(
 why_correct="A new foot ulcer in someone with diabetes is an active diabetic foot problem that needs prompt assessment, because neuropathy, ischaemia and infection can progress quickly. NICE advises referral within 1 working day to the multidisciplinary foot care service or foot protection service, or immediate referral to acute services if the problem is limb-threatening. The absence of pain does not mean the ulcer is minor; it reflects reduced sensation. Source: NICE NG19 Diabetic foot problems: prevention and management, 2015 (updated 2023).",
 sources=[NG19])
# ---------------- PAN2078
E['PAN2078']=dict(
 why_correct="Hirsutism means excess coarse terminal hair in a male-pattern, androgen-dependent distribution in a woman, such as the face, chest and lower abdomen. Combined with irregular periods, the most common cause is polycystic ovary syndrome. The absence of voice change or increased muscle bulk argues against virilisation. Source: NHS website, Excessive hair growth (hirsutism), and Patient.info Professional, Hirsutism, 2026.",
 sources=['https://www.nhs.uk/conditions/hirsutism/','https://patient.info/doctor/hirsutism'])
# ---------------- PAN8943 (distractor rework)
E['PAN8943']=dict(
 options={"A":"Gradual failure of the thyroid gland needing lifelong replacement",
          "B":"Recurrent inflammation of the outer ear canal",
          "C":"Damage to small vessels of the eyes, kidneys and nerves",
          "D":"Iron overload with bronzed skin and joint damage",
          "E":"Recurrent gallstones blocking the common bile duct"},
 correct_answer="C. Damage to small vessels of the eyes, kidneys and nerves",
 why_correct="Sustained hyperglycaemia damages small blood vessels, leading to retinopathy, nephropathy and neuropathy. These complications develop silently over years, which is why good glycaemic control matters even when the patient feels well. Better control reduces the risk of these microvascular complications, which are looked for at his annual eye screening, urine ACR and foot checks. Source: NICE NG28 Type 2 diabetes in adults: management, 2015 (updated 2022).",
 why_wrong="A. Autoimmune thyroid disease is commoner in type 1 diabetes, but it is not a consequence of high glucose. B. Otitis externa can be severe in diabetes but is not the key long-term consequence of poor control. D. Haemochromatosis can cause diabetes, not the other way round. E. Gallstones are not caused by poor glycaemic control.",
 exam_trap="D, Iron overload with bronzed skin — haemochromatosis is linked with diabetes, but iron overload causes the diabetes rather than resulting from high glucose.",
 sources=[NG28B,NG28C])
# ---------------- PAN3638
E['PAN3638']=dict(
 why_correct="Phaeochromocytomas arise from chromaffin cells of the adrenal medulla and secrete adrenaline, noradrenaline and sometimes dopamine. Surges of catecholamines cause paroxysmal headache, sweating, palpitations and hypertension. Diagnosis is by plasma or urinary metanephrines, and NICE advises same-day specialist referral when phaeochromocytoma is suspected. Source: NICE NG136 Hypertension in adults, 2019 (updated 2023), and Patient.info Professional, Phaeochromocytoma.",
 sources=[NG136,'https://patient.info/doctor/phaeochromocytoma','https://www.nhs.uk/conditions/phaeochromocytoma/'])
# ---------------- PAN3984
E['PAN3984']=dict(
 why_correct="Autonomous aldosterone production causes sodium retention and expansion of the circulating volume. The juxtaglomerular cells sense increased renal perfusion and reduce renin release. This suppressed renin with high aldosterone is the basis of the aldosterone-to-renin ratio used in screening. Source: Patient.info Professional, Hyperaldosteronism (UK clinical reference), 2026.",
 sources=[ALDO])
# ---------------- PAN4395
E['PAN4395']=dict(
 why_correct="Conn syndrome describes primary hyperaldosteronism due to a unilateral aldosterone-producing adrenal adenoma. It causes hypertension and hypokalaemia with suppressed renin. A lateralised adenoma can often be treated by laparoscopic adrenalectomy. Source: Patient.info Professional, Hyperaldosteronism (UK clinical reference), 2026.",
 sources=[ALDO])
# ---------------- PAN9357
E['PAN9357']=dict(
 why_correct="Aldosterone acts on the distal nephron to reabsorb sodium in exchange for potassium and hydrogen ions. Excess aldosterone therefore causes hypokalaemia and loss of hydrogen ions in the urine, producing a metabolic alkalosis. Hypokalaemia itself also shifts hydrogen ions into cells, worsening the alkalosis. Source: Patient.info Professional, Hyperaldosteronism (UK clinical reference), 2026.",
 sources=[ALDO])
# ---------------- PAN10311
E['PAN10311']=dict(
 why_correct="Chvostek sign is twitching of the facial muscles when the facial nerve is tapped anterior to the ear. It reflects neuromuscular irritability from hypocalcaemia. After total thyroidectomy, damage to or removal of the parathyroid glands is the commonest cause of acute low calcium in hospital. Source: Society for Endocrinology, Emergency management of acute hypocalcaemia in adult patients, 2016.",
 sources=[HYPOCA])
# ---------------- PAN6123
E['PAN6123']=dict(
 why_correct="Destruction of the adrenal cortex removes aldosterone as well as cortisol. Without aldosterone the distal nephron cannot excrete potassium or retain sodium, so the classic pattern is hyperkalaemia with hyponatraemia. Her pigmentation, salt craving and postural hypotension all fit primary adrenal insufficiency. Source: NICE NG243 Adrenal insufficiency: identification and management, 2024.",
 sources=[NG243])
# ---------------- PAN5771
E['PAN5771']=dict(
 why_correct="In diabetic ketoacidosis, ketoacids such as beta-hydroxybutyrate accumulate and are not measured in the routine electrolyte calculation. As they consume bicarbonate, the gap between measured cations and anions widens, producing a high anion gap metabolic acidosis. His deep sighing (Kussmaul) breathing is respiratory compensation for this acidosis. Source: JBDS-IP, The management of diabetic ketoacidosis in adults, 2023.",
 sources=[JBDS,JBDSPDF])
# ---------------- PAN1460
E['PAN1460']=dict(
 options={"E":"Investigate the discrepancy and use other glucose measures"},
 correct_answer="E. Investigate the discrepancy and use other glucose measures",
 why_correct="Haemoglobin variants and conditions that alter red cell turnover can make HbA1c inaccurate, depending on the laboratory method. When the HbA1c disagrees with reliable glucose readings, NICE advises investigating the discrepancy with specialist or laboratory advice and estimating control another way, such as glucose profiles or fructosamine. Here the monitor and his osmotic symptoms suggest real hyperglycaemia that the HbA1c is missing. Source: NICE NG28 Type 2 diabetes in adults: management, 2015 (updated 2022).",
 takeaway="When HbA1c disagrees with glucose readings, especially with a haemoglobin variant, investigate and use alternative measures of glucose control.",
 sources=[NG28B])
# ---------------- PAN3643
E['PAN3643']=dict(
 why_correct="A low free T4 should normally drive the pituitary to produce a high TSH. A normal or low TSH alongside a low free T4 is therefore inappropriate and indicates that the pituitary is failing to stimulate the thyroid, which is why NICE advises measuring both TSH and free T4 when pituitary disease is suspected. His previous pituitary surgery and radiotherapy are classic causes of central hypothyroidism, and other pituitary hormones, especially ACTH, should be assessed before starting levothyroxine. Source: NICE NG145 Thyroid disease: assessment and management, 2019.",
 sources=[NG145,'https://patient.info/doctor/hypothyroidism'])
E['PAN6678']['options']={"A":"To find early diabetic kidney damage before it causes symptoms"}
E['PAN10311']['options']={"C":"Lhermitte sign"}
E['PAN10311']['why_wrong']="A. Kernig sign is pain or resistance on knee extension with the hip flexed, seen in meningism. B. Romberg sign is loss of balance with eyes closed, indicating proprioceptive loss. C. Lhermitte sign is an electric-shock sensation down the spine on neck flexion, seen in cervical cord disease such as multiple sclerosis. D. Babinski sign is an extensor plantar response from an upper motor neurone lesion."
E['PAN3643']['options']={"E":"Thyrotoxicosis due to painless thyroiditis"}
E['PAN251']=dict(
 why_correct="In a stable adult with symptoms suggesting primary thyroid dysfunction and no suspicion of pituitary disease, NICE advises measuring TSH alone as the first test. TSH is the most sensitive marker of primary thyroid disease, and free T4 is added on the same sample if the TSH is abnormal. His tiredness, weight gain, cold intolerance and constipation suggest hypothyroidism, which TSH will detect. Source: NICE NG145 Thyroid disease: assessment and management, 2019.",
 sources=[NG145])
E['PAN5865']=dict(
 options={"A":"Pare away hard skin at home himself using a razor blade",
          "B":"Use medicated corn plasters on any sore spots",
          "C":"Inspect his feet every day and protect them from injury",
          "D":"Walk barefoot indoors to help retrain the feeling in his feet",
          "E":"Test the bath water temperature by dipping a foot in"},
 why_correct="With reduced sensation he will not feel minor injuries, so daily inspection (using a mirror or help if needed) allows problems to be spotted early. He should wear well-fitting footwear, avoid going barefoot and seek prompt advice for any break in the skin, and NICE advises that everyone with diabetes is given basic foot care and footwear advice. These measures reduce the risk of ulceration and amputation. Source: NICE NG19 Diabetic foot problems: prevention and management, 2015 (updated 2023), and NHS trust diabetes foot care advice (ELFT 2023; Royal Berkshire 2025).",
 exam_trap="B, Use medicated corn plasters on any sore spots — they seem like simple self-care, but the acid can burn the skin and start an ulcer in an insensate foot.",
 sources=[NG19,'https://WWW.ELFT.NHS.UK/sites/default/files/2023-03/ELFT%20Low%20Risk%20actual.pdf','https://royalberkshire.nhs.uk/media/2lypw13q/foot-care-advice-for-people-with-diabetes_may25.pdf'])
