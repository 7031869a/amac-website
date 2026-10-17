# PLAB 1 Adaptation II: Respiratory review pack

Review pack only. Not live, no PR, plab1-questions.js, _parked, counts and pages untouched. Branch plab1-adaptation-respiratory-review, built from main c817c29 (PLAB 1 bank 5,999; _parked 2,631; integrity 473). 18 October 2026.

## 1. Counts

| Stage | Count |
|---|---|
| Candidates (Respiratory, not dropped_review_dup) | 168 |
| Pre-screen repeats of live questions | 9 |
| Sent to writers | 159 |
| Writer skips: duplicate of a live or in-batch item | 121 |
| Writer declines: movable threshold, terminology-only or weak key (Appendix B) | 7 |
| Written | 31 |
| Checker drops (3 checkers) | 5 |
| Pack-review drops (within-pack duplicates) | 2 |
| **IN PACK (section 3)** | 24 |

**Funnel:** 168 candidates -> 31 written -> 24 in pack.

**Answer-letter spread of the pack:** A 4, B 5, C 5, D 5, E 5. The key is the longest option in 0 of 24 items and the shortest in 1. Letters were pre-balanced in the plan (159 items); after skips and drops they were evened by swapping option positions only (4 items: PAN4518, PAN7471, PAN10450, PAN2846); wording unchanged.

**Checks:** validate.py OK (including key longest/shortest <= 25%). No ID clash with the live bank; highest stem similarity to any live question 73% (rapidfuzz token_set_ratio, threshold 85). Each checker searched the live bank for every item by learning point, scenario and keyed answer; the closest live items are listed per item. 17 of the 168 candidates (UQ-prefixed) have no AKT original in the live AKT bank; they were adapted from the parked copy alone.

**Citations:** NICE CKS (403) and BTS/Thorax (403) could not be fetched from this environment. Pages checked by writers and checkers: NICE NG158 (VTE, 1.1.17-1.1.18), NG115 (COPD, 1.1.5), NG250 (pneumonia, CURB65 Box 2), NG12 (1.1.1), HSE silicosis, NHS asbestosis and sleep apnoea. Statements not backed by a fetched page are labelled as standard teaching.

**Label for every item:** 2026 UKMLA Adaptation II — adapted (Oct 2026). Domain/system: Respiratory.

## 2. Dropped items (with the live or pack ID they duplicate)

### 2.1 Checker drops (5)

- **PAN3954** (C1): Duplicates live BX266 (known heart failure, dullness to percussion and reduced breath sounds at both bases -> pleural effusions): same sign pattern and same learning point (dull + reduced breath sounds = effusion); only the aetiology and laterality differ, so this is a diagnosis-only re-skin. Also the D explanation was loose (lobar collapse breath sounds are diminished rather than 'bronchial' when the bronchus is blocked).
- **PAN4515** (C1): Within-batch duplicate: same learning point as PAN3957, which is earlier in draft_all.json (stone-dust worker with upper-zone nodules and hilar nodes -> silicosis); PAN3957 is kept. No live duplicate (DT120 is TB in known silicosis).
- **PAN4780** (C2): Within-batch duplicate of PAN10447 (earlier in draft_all): same pursed-lip breathing mechanism, same key (airways held open, less air trapping). Later item dropped per rule. No live duplicate.
- **PAN1427** (C3): Same scenario and learning point as live PAN1547 (and PAN1400): low NEWS2 but clinical concern, so reassess urgently and escalate; COPD skin adds nothing keyed (Scale 2 is not tested).
- **PAN9834** (C3): Duplicates live BX598 (family history asthma, wheeze, eczema: which predisposition => Atopy) and PAQ16283 (eczema, hay fever, wheeze: predisposition linking => Atopy); also PAQ11788, PAN3735.

### 2.2 Pack-review drops: within-pack duplicates (2)

- **PAN2420**: Within-pack duplicate of PAN4518 (sarcoidosis with raised calcium and suppressed PTH: macrophage 1-alpha-hydroxylase activates vitamin D, independent of PTH). Same learning point and key; PAN4518 is earlier in draft order so it is kept. Missed by the checkers because the two items sat with different checkers (C3 and C1). Found in the pack-level within-pack screen (stem match 78%).
- **PAN3960**: Within-pack duplicate: coal miner, key "pneumoconiosis" (the collective term). PAN2846 (coal face worker with upper-zone nodules, key coal workers' pneumoconiosis) tests the same occupational lung disease and is earlier in draft order, so it is kept. Found in the pack-level within-pack screen.

### 2.3 Writer skips: duplicates (121)

- **PAQ11556**: Duplicate: acute severe asthma initial treatment already live as RES006, BX934, BX388, PAQ12694 and BX590.
- **PAN4506**: Duplicate: sudden breathlessness with pleuritic pain suggesting PE already live as BX144, BX550, PAQ15448, S058 and OG059.
- **PAN4977**: Duplicate: grading acute severe asthma (cannot complete sentences, PEF 33-50%) already live as RES029 and RES006.
- **PAQ12656**: Duplicate: alpha-1 antitrypsin deficiency with emphysema and liver disease already live as BX846, BX133, RES043, PAN3452 and PAN4503.
- **PAN10453**: Same learning point as my own PAN3954 (stony dullness = effusion); BX266 also live. Not repeated within batch.
- **PAN1332**: Duplicate: asthma unable to complete sentences means acute severe asthma already live as BX590, BX388, RES006, RES029 and PAN447.
- **PAN1333**: Duplicate: silent chest as a life-threatening asthma feature already live in RES001, RES029 and PAQ16091.
- **PAN1539**: Duplicate/low-value: falling peak flow signalling worsening asthma already live in PAN447, RES029, PAQ225 and CR033.
- **PAN208**: Duplicate: severe asthma, cannot complete sentences, treat urgently already live as RES006, RES029, BX388, BX934 and BX590.
- **PAN209**: Duplicate: controlled oxygen in COPD at risk of hypercapnia already live as RES030, BX933, PAN1748 and PAQ15182.
- **PAN234**: Duplicate: life-threatening asthma features (exhaustion, low saturation, poor air entry) already live as PAQ16091, RES001 and RES029.
- **PAN4502**: Duplicate: early-onset basal emphysema in a non-smoker as alpha-1 antitrypsin deficiency already live as RES043, PAN4503, BX133 and BX846.
- **PAN4508**: Duplicate: chronic lung disease with right heart failure (cor pulmonale/pulmonary hypertension) already live as PAN2158, PAN8280 and CARD063.
- **PAN479**: Skip: repeats live BX134, BX548 and RES045 (COPD exacerbation recognition and management from increased breathlessness and purulent sputum). Live ids: BX134, BX548, RES045.
- **PAN542**: Skip: repeats live BX388, BX590, RES006 and RES029 (asthma, cannot complete sentences = acute severe attack). Live ids: BX388, BX590, RES006, RES029.
- **PAN6247**: Skip: repeats live BX165, PAQ14883, PAQ15314 and RES030 (controlled oxygen in COPD because of CO2 retention). Live ids: BX165, PAQ14883, PAQ15314, RES030.
- **PAN6914**: Skip: repeats live RES014, PAQ15444 and PAAKT026 (progressive dyspnoea, dry cough and bibasal crackles = pulmonary fibrosis). Live ids: RES014, PAQ15444, PAAKT026.
- **PAN710**: Skip: repeats live PAN1472 and ACU016 (severe hypoxaemia, give oxygen and assess the cause); also PAN1748. Live ids: PAN1472, ACU016, PAN1748.
- **PAN8125**: Skip: repeats live RES030, RES045, BX933 and PAQ14883 (controlled oxygen with COPD, assess for hypercapnia). Live ids: RES030, RES045, BX933, PAQ14883.
- **PAN8872**: Skip: repeats live BX165, PAQ14883 and PAN1505 (COPD with confusion and hypoxia: respiratory failure/hypercapnia). Live ids: BX165, PAQ14883, PAN1505.
- **PAN9417**: Skip: repeats live CR024, RES041 and OG059 (CT pulmonary angiography for suspected PE). Live ids: CR024, RES041, OG059.
- **PAN9459**: Skip: duplicate of live BX165, PAQ15314 and RES030 (oxygen target 88-92% and CO2 retention); also overlaps PAN6247 in this batch. Live ids: BX165, PAQ15314, RES030.
- **PAN9638**: Skip: repeats live BX134 and BX548 (COPD with increased purulent sputum = acute exacerbation). Live ids: BX134, BX548.
- **PAN971**: Skip: repeats live RES006, RES029 and BX590 (peak flow/speech used to grade acute asthma severity). Live ids: RES006, RES029, BX590.
- **PAN9805**: Skip: repeats live BX163 and BX459 (frequent reliever use = poorly controlled asthma). Live ids: BX163, BX459.
- **PAN5528**: Skip: repeats live RES014, DR111 and PAAKT026 (breathlessness, dry cough, clubbing, bibasal change = interstitial/fibrotic lung disease). Live ids: RES014, DR111, PAAKT026.
- **PAN3951**: Skip: repeats live CR039 and RES014 (fibrosis with restrictive defect). Live ids: CR039, RES014.
- **PAN3971**: Skip: repeats live RES035, PAQ594 and PAN2158 (chronic lung disease complicated by cor pulmonale/pulmonary hypertension). Live ids: RES035, PAQ594, PAN2158.
- **PAN1534**: Skip: repeats live CR008 (chest X-ray absent lung markings and pleural line = pneumothorax). Live ids: CR008.
- **PAN210**: Repeats live PE-probability-assessment items: ACU020 (Wells then D-dimer/CTPA), CR024, RES041, BX549, CR044.
- **PAN508**: Repeats ACU020 (calculate Wells score, then D-dimer or CTPA accordingly) and RES041/CR024.
- **PAN746**: Purpose of Wells score duplicates ACU020, RES041 and CR024 (probability estimation guiding D-dimer vs CTPA).
- **PAN803**: Which PE rule (two-level PE Wells) is covered by ACU020/CR024/RES041; PAN799 covers the DVT Wells tool.
- **PAN983**: PE likely -> immediate CTPA duplicates CR024; interim anticoagulation covered by PAQ550.
- **PAN10446**: Repeats BX263 (smoking cessation changes long-term trajectory of lung disease) and BX958.
- **PAN7470**: Repeats occupational asthma items BX269, RES049 and DS132.
- **PAN9637**: Diagnosis-only COPD in an older smoker; same learning point as live COPD vignettes (e.g. PAQ15631, DR087, DS052, RES021); no new learning point.
- **PAN10124**: Mycoplasma pneumoniae in a young adult with dry cough duplicates RES047 (21-year-old student, dry cough, low-grade fever, Mycoplasma).
- **PAN236**: Pneumonia severity assessment duplicates ID019, ID044, Q357 and BX936 (CURB-65 / severity-guided management).
- **PAN1945**: CURB-65 as severity tool duplicates BX936, ID019, ID044 and Q357.
- **PAN3956**: Duplicates RES025 (hilar lymphadenopathy, erythema nodosum, cough -> sarcoidosis) and PAQ16116.
- **PAN5527**: Duplicates BX460 (heavy smoker, weight loss, cough -> lung cancer) and RES019/RES037.
- **PAN2229**: Repeats live OSA driving/sleepiness items DS015 (stop driving, notify DVLA) and RES022/PAAKT024; same learning point as PAN2842 and PAN3953.
- **PAN2842**: Repeats live DS015 (OSA, sleepiness at the wheel, driving restrictions) and PAAKT024/RES022; also same learning point as PAN2229 and PAN3953.
- **PAN3953**: Repeats live DS015 (OSA with sleepiness: road-traffic risk and driving rules) and RES022; also same learning point as PAN2229 and PAN2842.
- **PAN7633**: Repeats live BX165 (COPD, drowsy, hypercapnic respiratory failure), RES010, RES040 and PAN1505.
- **PAN4497**: Clubbing in pulmonary fibrosis is already a stem feature of live RES014, DR111, PAQ15444 and PAAKT026; re-skin of the IPF diagnosis items.
- **PAQ12023**: Repeats live BX457 (adolescent, wheeze and tightness on exercise that settles with rest = exercise-induced asthma) and BX261.
- **PAN3962**: Repeats live NEU043 (lung cancer, facial and arm swelling, distended neck veins = superior vena cava obstruction).
- **PAN1501**: Repeats live RES027 and RES003 (dysphagia/stroke with pneumonia = aspiration pneumonia).
- **PAN6907**: Repeats live CR009 and PAQ16095 (fever, productive cough, consolidation/bronchial breathing = lobar pneumonia).
- **PAN1949**: Repeats live DS096 (haemoptysis, suspected cancer pathway) and RES015; generic haemoptysis assessment adds no new learning point.
- **PAN4779**: Same learning point as PAN3974 (PE haemoptysis = pulmonary infarction), which is written in this batch; not repeated twice.
- **PAN4979**: Persistent cough and haemoptysis in a heavy smoker = lung cancer already tested by live DS096, BX460, PAAKT019 and RES019; sibling AKT items PAN6260, PAN7589, PAN8335 repeat it.
- **PAN6260**: Repeats live BX460 (smoker, weight loss, persistent cough: urgent investigation for lung cancer) and DS096.
- **PAN6912**: Same learning point as PAN3974 (PE haemoptysis = pulmonary infarction), which is written in this batch; not repeated twice.
- **PAN7589**: Repeats live BX460 and DS096 (smoker with persistent cough and haemoptysis: urgent assessment for lung cancer).
- **PAN8335**: Repeats live BX460 and DS096 (smoker with persistent cough and haemoptysis: assess for lung cancer).
- **PAN8891**: Duplicate: live BX460 (heavy smoker, weight loss, cough, blood in sputum -> urgent investigation for lung cancer) and PAQ15440 (haemoptysis, smoker, key bronchial carcinoma) test the same learning point.
- **PAN4980**: Same learning point as PAN4512 (RLN involvement by lung tumour causes hoarseness), which is written in this batch; not repeated twice. Also near live PAQ15950 (RLN, thyroid mass).
- **PAQ12697**: Duplicate: live PAQ14883, PAQ15314, PAQ15182, BX165, BX933, RES030 and RES045 already test oxygen-induced CO2 retention in COPD.
- **PAN988**: Duplicate: live PAN1271, PAN207, PAN2165, PAQ16094, CARD028 and BX265 test shocked PE = high-risk PE, manage with reperfusion.
- **PAQ12844**: Duplicate: live BX281 (asthmatic with oral thrush after ICS) tests mouth rinsing/spacer; GF047 also covers ICS thrush.
- **PAN3975**: Duplicate: live CR032 (reduced FEV1/FVC = obstructive) and GF046/GF048/PAQ225 test the same obstructive spirometry pattern.
- **PAN3976**: Duplicate: live CR039 (reduced FVC, preserved ratio = restrictive) and PAAKT026 test the same restrictive pattern.
- **PAN1331**: Duplicate: live CR044 (low Wells + positive D-dimer), RES041, BX549 and PAQ1116 test D-dimer positive means imaging.
- **PAN5324**: Duplicate: live CR032 and GF048 test reduced FEV1/FVC = obstructive; same learning point as PAN3975.
- **PAN747**: Duplicate: live RES041, BX549, PAQ1116 and CR044 test D-dimer as a rule-out test in low-probability PE.
- **PAN972**: Duplicate: live CR032 and GF048 test reduced FEV1/FVC = obstructive.
- **PAN986**: Duplicate: live CR044, RES041 and BX549 test positive D-dimer means further imaging, not confirmation.
- **PAQ12696**: Duplicate: live BX164 (key resting arterial oxygenation for LTOT), RES026 and RES034 test LTOT assessment.
- **PAN7074**: Diagnosis-only re-skin of live RES025 (hilar lymphadenopathy with erythema nodosum, arthralgia, raised calcium -> sarcoidosis); PAAKT021 and PAQ16116 also cover sarcoid presentations.
- **PAN9241**: Duplicate: live BX541 (seasonal allergic rhinitis), PAN6935 (hay fever gardener) and PAQ15839 (Type I IgE hypersensitivity) cover allergic rhinitis and the IgE mechanism.
- **PAN4513**: Duplicate: asbestos as cause of mesothelioma/pleural disease is live in RES024 (shipbuilder, pleural thickening, mesothelioma), PAAKT025 (pipe lagger, mesothelioma) and PAQ15445 (asbestos plaques).
- **PAN420**: Duplicate of PAN1748 (prescribe oxygen to a target saturation range suited to the patient; same key, same distractors) and PAN244 (94-98% target); also RES045/BX933 for 88-92%.
- **PAN709**: Duplicate of PAN1748 (prescribe oxygen to a target range; same learning point) and PAN244.
- **PAN953**: Duplicate of PAN1748 (target-saturation principle for oxygen) and PAN244; same learning point as the other oxygen items in this batch.
- **PAN3972**: Duplicate: severe COPD with raised JVP, oedema and hepatomegaly leading to cor pulmonale is live in RES035 and PAQ594.
- **PAN4509**: Duplicate: cor pulmonale as right heart failure from chronic lung disease is live in RES035 and PAQ594 (same key).
- **PAN2172**: Duplicate: asbestos exposure with pleural effusion pointing to mesothelioma is live in RES024 and PAAKT025 (diagnosis re-skins).
- **PAN1329**: Duplicate: pleuritic pain with tachycardia and hypoxaemia leading to Wells pathway is live in ACU020 (key: calculate Wells score then D-dimer or CTPA) and RES041.
- **PAN5534**: Duplicate: CTPA as the PE imaging test is live in CR024 (Wells 5, key CTPA) and ACU020; also BX550/OG059.
- **PAN8874**: Duplicate: DVT as the source of PE with a swollen leg is live in BX144 and PAN6954 (DVT/PE linkage) and GF014.
- **PAN9641**: Duplicate: negative D-dimer to exclude PE in low-probability patient is live in RES041, BX549 and PAQ1116.
- **PAN740**: Duplicate: CURB65 severity of confused, hypotensive, tachypnoeic pneumonia is live in ID019, ID044 and Q357 (same CURB65 inputs).
- **PAN741**: Duplicate: confusion, hypotension and tachypnoea as severe pneumonia needing urgent assessment is live in ID019 and ID044 (high CURB65, admit as severe).
- **PAN4491**: Duplicate: parapneumonic effusion/pleural fluid complicating pneumonia is live in DR092 (day 4 pneumonia plus effusion, key diagnostic aspiration), RES048, DR093, PAAKT150 and BX267.
- **PAN4492**: Duplicate: pus in pleural space as empyema is live in BX267 (frank pus, key empyema) plus DR093, RES048 and PAAKT150.
- **PAN10449**: Skipped: same learning point as PAN10448 (CURB65 components) already written in this batch; respiratory-rate threshold is also covered by Q357/ID019/ID044 inputs.
- **PAN2178**: Duplicates live lung abscess items RES038, DF043, PMG076-078 (cavity with air-fluid level and foul sputum).
- **PAN6246**: Duplicates live COPD exacerbation with purulent sputum items BX134, BX548 and RES045 (antibiotics when purulence increases).
- **PAQ12026**: Duplicates live smoker with haemoptysis/weight loss urgent lung cancer assessment items BX460 and RES019 (same learning point).
- **PAN242**: Duplicates live BX265 and PAQ12825 (hypotensive suspected PE = high-risk PE, urgent specialist treatment).
- **PAN3963**: Duplicates live Pancoast/Horner items RES037, PAAKT052 and NEU081.
- **PAN4511**: Duplicates live Pancoast items RES037 and PAAKT052 (apical tumour with shoulder pain and hand weakness); also repeats PAN3963 in this batch.
- **PAN6489**: Duplicates live RES025 (hilar lymphadenopathy with erythema nodosum = sarcoidosis) and BX310/BX536.
- **PAN7130**: Duplicates live CR032 and CR039 (reduced FEV1/FVC = obstructive pattern); diagnosis-only re-skin.
- **PAQ16212**: Duplicates live primary spontaneous pneumothorax items RES017, CR008 and RES032.
- **PAQ12024**: Duplicates live BX458, PAQ15313 and BX261 (variable symptoms support asthma).
- **PAN7472**: Duplicates live lung cancer urgent assessment items BX460 and RES019 (smoker, cough, weight loss, suspicious lesion); same learning point as PAQ12026.
- **PAN10444**: Duplicates live BX262, BX935 and BX200 (check inhaler technique and adherence before escalating).
- **PAN1083**: Duplicates live BX388, RES029, BX590 and PAN447 (cannot complete sentences = at least acute severe asthma).
- **PAN1084**: Silent chest/exhaustion as life-threatening asthma already live in RES001 (brittle asthma, no wheeze, reduced air entry, key anaesthetic review) and RES029/PAQ16091; skipped as same learning point.
- **PAN1139**: Same learning point as PAN1084 (silent chest = life-threatening asthma), covered live by RES001; skipped to avoid a repeat.
- **PAN1140**: Duplicates live RES001 (asthma not responding to nebulisers: escalate to senior/anaesthetic review) and PAAKT015/BX934.
- **PAN1940**: Duplicates live BX163 and BX459 (frequent reliever use = poor control).
- **PAN3977**: Duplicates live PAQ225, PAQ15313, BX458, CR033 (variable PEF/nocturnal symptoms = asthma).
- **PAN4782**: Duplicates live PAQ225, PAQ15313, CR033 (variable airflow obstruction in asthma).
- **PAN6245**: Duplicates live RES020 (frequent SABA use needs ICS-containing anti-inflammatory therapy) and BX262.
- **PAN6259**: Duplicates live BX458, PAQ15313, PAQ225 (variability of symptoms supports asthma).
- **PAN6903**: Duplicates live PAQ16091 (silent chest/cyanosis = life-threatening asthma) and RES006 (quiet chest).
- **PAN7075**: Duplicates live PAQ15313, PAQ225, BX458 (variable airflow obstruction as characteristic of asthma).
- **PAN742**: Duplicates live RES029 and BX590 (cannot complete sentences = acute severe asthma).
- **PAN743**: Duplicates live PAQ16091, RES006 and RES001 (exhaustion/quiet chest = life-threatening, impending failure).
- **PAN7972**: Duplicates live BX163, BX459 and PAN10498 (frequent reliever use = inadequate control).
- **PAN8126**: Diagnosis-only re-skin of live BX458, PAQ16279, BX912, BX457 (allergen-triggered wheeze = asthma).
- **PAN8333**: Diagnosis-only item ('indicates an asthma exacerbation'); overlaps live RES029, BX590, BX934 and PAQ12228; no distinct learning point.
- **PAN9194**: Diagnosis-only re-skin of live BX458, PAQ16279, BX912 (allergen-triggered recurrent wheeze = asthma).
- **PAN9636**: Duplicates live PAQ15313 and PAQ225 (bronchodilator reversibility/PEF variability demonstrate variable obstruction).
- **PAN5132**: Diagnosis-only re-skin of live BX458 (dust-triggered episodic wheeze, normal between episodes = asthma) and PAQ16279.
- **PAN5405**: Duplicates live BX458, BX457, PAQ15313 (variability of symptoms supports asthma; exercise/cold trigger).

## 3. Items in the pack (24)

### 1. PAN4518: Abnormal calcium

- **Item ID:** PAN4518  |  **Source ID:** N4518 (parked copy: UN4518)  |  **Difficulty:** Difficult

**Stem:** A 41-year-old woman with biopsy-proven pulmonary sarcoidosis has two weeks of thirst, constipation and passing large volumes of urine. She takes no supplements. Her adjusted serum calcium is raised and her parathyroid hormone level is suppressed.

Which mechanism best explains the raised calcium?

- A. Autonomous parathyroid hormone secretion from a single enlarged parathyroid adenoma
- **B. Activation of vitamin D by granuloma macrophages, independent of parathyroid hormone**
- C. Reduced renal calcium excretion because of chronic granulomatous kidney scarring
- D. Increased bone resorption driven by a persistently high circulating parathyroid hormone level
- E. Osteolytic bone destruction by widespread metastatic deposits within the skeleton

**Key:** B. Activation of vitamin D by granuloma macrophages, independent of parathyroid hormone

**Why correct:** Macrophages in sarcoid granulomas express 1-alpha-hydroxylase and convert 25-hydroxyvitamin D to calcitriol without the normal feedback control. The excess calcitriol increases intestinal calcium absorption and bone resorption, so calcium rises and parathyroid hormone is suppressed. This is why a low or low-normal parathyroid hormone in a patient with granulomatous disease points away from a parathyroid cause. Source: standard teaching on granulomatous hypercalcaemia (sarcoidosis).

**Why the others are wrong:** A. A parathyroid adenoma would give a raised or inappropriately normal parathyroid hormone, not a suppressed one. C. Granulomatous kidney scarring is not the usual mechanism; extrarenal calcitriol production is. D. A high parathyroid hormone level contradicts the suppressed result given in the stem. E. Bone metastases can cause hypercalcaemia, but nothing here suggests malignancy and it would not explain the link with sarcoidosis.

**Pearl:** In sarcoidosis the hypercalcaemia is parathyroid hormone independent, so a suppressed parathyroid hormone with raised calcium should make you think of calcitriol-producing granulomas (or malignancy), and vitamin D supplements can worsen it.

**Exam trap:** A, a parathyroid adenoma, is a leading cause of hypercalcaemia in general, but the suppressed parathyroid hormone in this stem rules it out.

**Takeaway:** Hypercalcaemia with a suppressed parathyroid hormone in sarcoidosis comes from macrophage production of active vitamin D.

**Sources opened/carried:** N4518

**Closest live items by learning point:**

- **RES025** (different learning point): key "Sarcoidosis (diagnosis from erythema nodosum/hilar nodes)"
- **END022** (different learning point): key "Primary hyperparathyroidism"
- **DR127** (different learning point): key "12-lead ECG (sarcoid cardiac screen)"

Verdict: [ ] APPROVE   [ ] EDIT   [ ] REJECT      Comment: ____________

### 2. PAN4781: Acid-base abnormality

- **Item ID:** PAN4781  |  **Source ID:** N4781 (parked copy: UN4781)  |  **Difficulty:** Difficult

**Stem:** A 66-year-old man with severe COPD attends a stable outpatient review. His arterial blood gas shows a raised carbon dioxide tension and a bicarbonate above the reference range, with a pH close to normal.

Which renal adaptation, developing over several days, accounts for the raised bicarbonate?

- A. Increased urinary excretion of bicarbonate to counter the acidosis over several days
- **B. Greater tubular bicarbonate reabsorption with extra acid excreted as ammonium**
- C. Reduced glomerular filtration to conserve the circulating buffer in the blood stream
- D. Suppressed ammonium production by the proximal tubular cells of the nephron
- E. Decreased hydrogen-ion secretion by the cells lining the collecting duct

**Key:** B. Greater tubular bicarbonate reabsorption with extra acid excreted as ammonium

**Why correct:** Chronic carbon dioxide retention lowers blood pH, and over several days the kidneys compensate by reabsorbing more filtered bicarbonate and generating new bicarbonate while excreting extra hydrogen ions, largely as ammonium. This raises plasma bicarbonate and brings the pH back towards normal, which is the pattern of compensated chronic type 2 respiratory failure. Source: standard teaching on renal compensation in respiratory acidosis.

**Why the others are wrong:** A. Excreting bicarbonate would worsen the acidosis rather than compensate for it. C. A fall in filtration is not the compensatory mechanism and would not raise bicarbonate. D. Ammonium production rises, not falls, to excrete the acid load. E. Hydrogen-ion secretion increases in this setting, so a decrease would be the wrong direction.

**Pearl:** A high bicarbonate with a near-normal pH in a patient with a high carbon dioxide implies chronic retention with renal compensation, whereas a low pH implies the compensation has been overwhelmed or the rise is acute.

**Exam trap:** A, increased bicarbonate excretion, is tempting if the direction of compensation is muddled, but losing bicarbonate would deepen the acidosis.

**Takeaway:** Chronic carbon dioxide retention is compensated by renal bicarbonate retention and acid excretion over days.

**Sources opened/carried:** N4781

**Closest live items by learning point:**

- **CR001** (different learning point): key "Acute-on-chronic respiratory acidosis"
- **PAN5774** (different learning point): key "Slower, shallower breathing so CO2 accumulates"
- **PAN3632** (different learning point): key "Lower arterial CO2 as partial compensation"

Verdict: [ ] APPROVE   [ ] EDIT   [ ] REJECT      Comment: ____________

### 3. PAN10447: Breathlessness

- **Item ID:** PAN10447  |  **Source ID:** N10447 (parked copy: UN10447)  |  **Difficulty:** Easy

**Stem:** A 72-year-old woman with COPD attends pulmonary rehabilitation because she becomes breathless on stairs and panics when it starts. The physiotherapist teaches her to breathe in gently through her nose and then out slowly through pursed lips, as if cooling hot soup.

What is the main physiological benefit of this technique?

- A. It increases inspiratory flow so that a larger tidal volume is drawn in
- B. It raises carbon dioxide levels to stimulate a stronger respiratory drive
- C. It strengthens the diaphragm by adding resistance to every inspiration
- **D. It slows expiration and holds small airways open, reducing air trapping**
- E. It generates a rapid expiratory flow that helps to clear the sputum

**Key:** D. It slows expiration and holds small airways open, reducing air trapping

**Why correct:** Breathing out slowly against pursed lips creates a small back-pressure that splints the narrowed small airways open during expiration. This reduces dynamic air trapping and hyperinflation, lowers respiratory rate and helps the patient regain control of breathlessness. It is a standard breathing-control technique taught in COPD self-management and pulmonary rehabilitation. Source: standard teaching in COPD self-management (pulmonary rehabilitation is recommended in NICE NG115).

**Why the others are wrong:** A. The technique slows breathing and does not aim to increase inspiratory flow. B. It does not deliberately raise carbon dioxide and could not safely be used for that purpose. C. Resistance to inspiration describes inspiratory muscle training, which is a different intervention. E. Rapid forced expiration is the active cycle of breathing or huff technique used for secretions, not pursed-lip breathing.

**Pearl:** Pursed-lip breathing is gentle and slow, with a longer expiration than inspiration; forced rapid exhalation is a different technique used for sputum clearance.

**Exam trap:** E, rapid expiratory flow to clear sputum, confuses pursed-lip breathing with huffing, which is a forced technique for secretions.

**Takeaway:** Pursed-lip breathing keeps small airways open during slow expiration and reduces air trapping in COPD.

**Sources opened/carried:** N10447; https://www.nice.org.uk/guidance/ng115/chapter/Recommendations

**Closest live items by learning point:**

- **BX264** (different learning point): key "Pulmonary rehabilitation"

Verdict: [ ] APPROVE   [ ] EDIT   [ ] REJECT      Comment: ____________

### 4. PAN10450: Breathlessness

- **Item ID:** PAN10450  |  **Source ID:** N10450 (parked copy: UN10450)  |  **Difficulty:** Moderate

**Stem:** A 61-year-old woman presents to the emergency department with sudden breathlessness and pleuritic chest pain. She takes oestrogen-containing hormone therapy and has an oxygen saturation of 94% on air. She had a deep vein thrombosis in her left leg two years ago. The clinician starts to apply the two-level Wells score for pulmonary embolism.

Which of her features contributes to that score?

- A. The pleuritic quality of her chest pain
- B. Her age being over 50 years
- C. Her current use of oestrogen-containing hormone therapy
- **D. A previous episode of deep vein thrombosis**
- E. Her oxygen saturation below 95% on air

**Key:** D. A previous episode of deep vein thrombosis

**Why correct:** The two-level PE Wells score includes clinical signs of DVT, PE being the most likely diagnosis, a heart rate above 100 beats per minute, recent immobilisation or surgery, a previous DVT or PE, haemoptysis and active cancer. A previous DVT therefore scores, and the total decides whether a CTPA or a D-dimer comes next. Source: NICE NG158, venous thromboembolic diseases, recommendation 1.1.17.

**Why the others are wrong:** A. The pleuritic quality of the pain is common in PE but is not scored. B. Age over 50 is part of the PERC rule used to rule out PE in low-risk patients and is not a Wells item. C. Oestrogen use features in the PERC rule but does not score in the Wells PE score. E. Saturation below 95% is a PERC criterion, not a Wells criterion.

**Pearl:** Wells PE and PERC overlap (previous VTE, haemoptysis, heart rate) but age, oestrogen use and low saturation belong only to PERC.

**Exam trap:** C, oestrogen therapy, is a recognised VTE risk factor and is in PERC, so it tempts, but it does not score in the Wells PE tool.

**Takeaway:** Previous DVT or PE scores in the Wells PE tool, whereas age, oestrogen use and low saturation belong to PERC.

**Sources opened/carried:** N10450; https://www.nice.org.uk/guidance/ng158/chapter/Recommendations

**Closest live items by learning point:**

- **CR024** (different learning point): key "CT pulmonary angiography (next step after Wells)"
- **BX549** (different learning point): key "D-dimer (next step after Wells)"
- **ACU020** (different learning point): key "Calculate Wells then D-dimer or CTPA"

Verdict: [ ] APPROVE   [ ] EDIT   [ ] REJECT      Comment: ____________

### 5. PAN2846: Breathlessness

- **Item ID:** PAN2846  |  **Source ID:** N2846 (parked copy: UN2846)  |  **Difficulty:** Moderate

**Stem:** A 68-year-old retired man spent thirty years working at an underground coal face. He now has several years of gradually worsening exertional breathlessness and a chronic cough. A chest radiograph shows multiple small nodular opacities, most marked in the upper zones, and there is no pleural thickening.

Which occupational lung disease is most likely?

- A. Hypersensitivity pneumonitis from inhaled mouldy hay spores
- B. Malignant mesothelioma arising after earlier asbestos exposure
- C. Byssinosis due to repeated exposure to raw cotton dust
- **D. Coal workers' pneumoconiosis from long-term inhaled mine dust**
- E. Occupational asthma caused by sensitisation to isocyanates

**Key:** D. Coal workers' pneumoconiosis from long-term inhaled mine dust

**Why correct:** Prolonged inhalation of coal dust causes coal workers' pneumoconiosis, with small nodular opacities, typically in the upper zones, and slowly progressive breathlessness and cough. A detailed occupational history is the key to recognising it. Source: standard teaching on occupational lung disease (pneumoconiosis).

**Why the others are wrong:** A. Hypersensitivity pneumonitis is linked to organic dusts such as mouldy hay and is not related to coal. B. Mesothelioma follows asbestos exposure and presents with pleural thickening, effusion or a pleural mass rather than diffuse upper-zone nodules. C. Byssinosis occurs in cotton and textile workers. E. Isocyanate asthma causes variable airflow obstruction with a normal or non-specific radiograph.

**Pearl:** Always take a lifetime occupational history in breathlessness; the dust determines the disease, so match the job to the pattern on the radiograph.

**Exam trap:** B, mesothelioma, is the best-known occupational lung disease, but it is caused by asbestos and shows pleural disease, not nodular opacities.

**Takeaway:** A coal miner with progressive breathlessness and nodular upper-zone opacities has coal workers' pneumoconiosis.

**Sources opened/carried:** N2846

**Closest live items by learning point:**

- **DT120** (different learning point): key "Sputum for AFB (silicosis with TB)"
- **PAQ15445** (different learning point): key "Asbestos"
- **RES024** (different learning point): key "Malignant mesothelioma"

Verdict: [ ] APPROVE   [ ] EDIT   [ ] REJECT      Comment: ____________

### 6. PAN3950: Breathlessness

- **Item ID:** PAN3950  |  **Source ID:** N3950 (parked copy: UN3950)  |  **Difficulty:** Moderate

**Stem:** A 71-year-old man who smoked heavily for fifty years has progressive breathlessness on exertion. He has a barrel-shaped chest, hyperresonant percussion and quiet breath sounds. CT shows enlarged airspaces and lung function testing shows a very low gas transfer. A pathologist later examines tissue from a lung resection.

Which pathological change is characteristic of his condition?

- A. Permanent dilatation of the bronchi with chronic bacterial infection
- B. Interstitial fibrosis that thickens the walls of the alveoli
- **C. Destruction of alveolar walls with loss of elastic recoil**
- D. Hypertrophy of mucous glands with excess goblet cells
- E. Eosinophilic airway inflammation with reversible smooth-muscle contraction

**Key:** C. Destruction of alveolar walls with loss of elastic recoil

**Why correct:** Emphysema is defined by destruction of the walls of the airspaces distal to the terminal bronchioles. Loss of alveolar tissue and elastic recoil causes air trapping and hyperinflation, and the loss of surface area for gas exchange explains the very low gas transfer. Source: standard teaching on COPD pathology.

**Why the others are wrong:** A. Permanent bronchial dilatation defines bronchiectasis. B. Interstitial fibrosis causes restrictive disease with a reduced lung volume, not hyperinflation. D. Mucous gland hypertrophy is the feature of chronic bronchitis. E. Eosinophilic inflammation with reversible bronchoconstriction describes asthma.

**Pearl:** Emphysema is a pathological diagnosis (alveolar destruction), whereas chronic bronchitis is a clinical one (chronic productive cough); both sit within COPD.

**Exam trap:** D, mucous gland hypertrophy, is also a smoking-related COPD change, but it defines chronic bronchitis, not the loss of alveolar tissue.

**Takeaway:** Emphysema is destruction of alveolar walls with air trapping and a low gas transfer.

**Sources opened/carried:** N3950

**Closest live items by learning point:**

- **BX133** (different learning point): key "Emphysema (diagnosis from CT/AAT)"
- **RES043** (different learning point): key "Alpha-1 antitrypsin deficiency"

Verdict: [ ] APPROVE   [ ] EDIT   [ ] REJECT      Comment: ____________

### 7. PAN7070: Breathlessness with unilateral chest signs

- **Item ID:** PAN7070  |  **Source ID:** N7070 (parked copy: UN7070)  |  **Difficulty:** Easy

**Stem:** A 74-year-old man has had three weeks of slowly worsening breathlessness on exertion. He has no fever and no chest pain. The left side of his chest expands less than the right. There is a stony-dull percussion note over the left base, and breath sounds there are very quiet.

Which investigation should be requested first?

- **A. Posteroanterior chest X-ray**
- B. Formal spirometry with reversibility testing
- C. Diagnostic bronchoscopy
- D. CT pulmonary angiogram
- E. Transthoracic echocardiography

**Key:** A. Posteroanterior chest X-ray

**Why correct:** Reduced expansion, a stony-dull percussion note and diminished breath sounds at one base indicate a pleural effusion. A chest X-ray is the first-line, widely available test to confirm fluid; thoracic ultrasound then guides any pleural sampling, and diagnostic pleural aspiration follows if the cause is unclear. Source: BTS Pleural Disease Guideline, Thorax 2023, and standard teaching.

**Why the others are wrong:** B. Spirometry assesses airflow obstruction and would not explain focal dullness. C. Bronchoscopy is an invasive test reserved for later, once imaging and pleural sampling have guided the diagnosis. D. A CT pulmonary angiogram is for suspected pulmonary embolism, which does not fit a three-week gradual history with focal dullness. E. Echocardiography may be useful later for a cardiac cause but does not confirm the effusion.

**Pearl:** Stony dullness with absent breath sounds at a base is an effusion until proved otherwise, and the chest X-ray comes before ultrasound, aspiration or bronchoscopy.

**Exam trap:** Do not jump to an invasive or specialised test; a plain chest X-ray is the starting point.

**Takeaway:** Suspected pleural effusion is confirmed first with a chest X-ray.

**Sources opened/carried:** N7070

**Closest live items by learning point:**

- **BX266** (different learning point): key "Pleural effusions (diagnosis from bilateral basal dullness in HF)"
- **DR092** (different learning point): key "Ultrasound-guided diagnostic pleural aspiration (parapneumonic effusion)"

**Reviewer note:** BTS pleural guideline could not be fetched (403); cited from secondary summaries (C3).

Verdict: [ ] APPROVE   [ ] EDIT   [ ] REJECT      Comment: ____________

### 8. PAN7471: Chronic cough and breathlessness in a smoker

- **Item ID:** PAN7471  |  **Source ID:** N7471 (parked copy: UN7471)  |  **Difficulty:** Easy

**Stem:** A 62-year-old woman has smoked 25 cigarettes a day for most of her adult life. For two years she has had a productive cough each morning and now becomes breathless climbing a single flight of stairs. She has never been diagnosed with asthma, and her chest examination is unremarkable apart from a prolonged expiratory phase.

Which test is needed to confirm the diagnosis you suspect?

- A. Resting 12-lead electrocardiogram
- **B. Spirometry following a bronchodilator**
- C. Sputum culture and sensitivity testing
- D. High-resolution CT scan of the chest
- E. Two-week twice-daily peak flow diary

**Key:** B. Spirometry following a bronchodilator

**Why correct:** A long smoking history with chronic cough and exertional breathlessness suggests chronic obstructive pulmonary disease. Diagnosis rests on spirometry performed after a bronchodilator showing persistent airflow obstruction (FEV1/FVC ratio below 0.7), alongside the clinical picture. Source: NICE NG115, Chronic obstructive pulmonary disease in over 16s, recommendation 1.1.5.

**Why the others are wrong:** A. An ECG assesses rhythm and ischaemia and does not demonstrate airflow obstruction. C. Sputum culture helps to guide treatment of an infective exacerbation but does not diagnose COPD. D. High-resolution CT is used to characterise suspected interstitial or structural lung disease and is not required to confirm COPD. E. A peak flow diary looks for variable obstruction and supports asthma rather than confirming COPD.

**Pearl:** A normal chest X-ray does not exclude COPD, and a CT scan is not the diagnostic test.

**Exam trap:** Do not pick imaging because the symptoms are respiratory; the diagnosis of COPD is physiological, not radiological.

**Takeaway:** COPD is confirmed by post-bronchodilator spirometry showing persistent airflow obstruction.

**Sources opened/carried:** N7471; https://www.nice.org.uk/guidance/ng115/chapter/Recommendations

**Closest live items by learning point:**

- **PAQ15631** (different learning point): key "Chronic obstructive pulmonary disease (spirometry given in stem, asks diagnosis)"
- **CR032** (different learning point): key "Obstructive ventilatory defect"
- **GF048** (different learning point): key "Persistent obstruction with marked reversibility"

Verdict: [ ] APPROVE   [ ] EDIT   [ ] REJECT      Comment: ____________

### 9. PAN6261: Lung cancer: local airway effects

- **Item ID:** PAN6261  |  **Source ID:** N6261 (parked copy: UN6261)  |  **Difficulty:** Moderate

**Stem:** A 68-year-old man who stopped smoking a few years ago has had a persistent cough and weight loss for three months. A chest X-ray shows a mass at the left hilum, and he has been referred on the suspected cancer pathway (an urgent, time-limited route to specialist assessment).

On examining his chest, which finding is most directly explained by the tumour narrowing the left main bronchus?

- A. Painful swelling of the wrists and ankles alongside finger clubbing
- B. Fine crackles heard at both lung bases at the end of inspiration
- C. Swelling of both ankles together with a raised jugular venous pressure
- **D. A wheeze in one part of the chest that persists after coughing**
- E. Sharp pain in the side of the chest on deep inspiration

**Key:** D. A wheeze in one part of the chest that persists after coughing

**Why correct:** A tumour growing in or pressing on a main bronchus narrows the lumen, so air moving through the narrowed segment makes a localised wheeze that persists and does not clear with coughing or bronchodilators. A fixed, unilateral wheeze in a smoker or ex-smoker should prompt imaging for lung cancer rather than a trial of asthma treatment. Source: standard respiratory teaching on central airway obstruction; NICE NG12 (suspected cancer, 2015, updated) recommendation 1.1.1 supports referral on the suspected cancer pathway when chest X-ray findings suggest lung cancer.

**Why the others are wrong:** A. Hypertrophic pulmonary osteoarthropathy is a paraneoplastic effect, not a result of airway obstruction. B. Bilateral basal end-inspiratory crackles point to interstitial fibrosis or left heart failure, not a single obstructing lesion. C. Ankle swelling with a raised venous pressure suggests right heart failure, which is not caused by a unilateral bronchial tumour. E. Pleuritic pain reflects pleural involvement, whereas obstruction of a bronchus causes airway noise or collapse.

**Pearl:** A localised wheeze that persists after coughing suggests a fixed obstruction, unlike the variable, widespread wheeze of asthma.

**Exam trap:** A paraneoplastic sign such as clubbing or joint pain is not caused by airway obstruction, so do not pick it for a mechanical question.

**Takeaway:** Narrowing of a main bronchus by a central tumour causes a persistent, localised wheeze.

**Sources opened/carried:** N6261; https://www.nice.org.uk/guidance/ng12/chapter/Recommendations-organised-by-site-of-cancer

**Closest live items by learning point:**

- **PAQ15440** (different learning point): key "Bronchial carcinoma"
- **PAAKT052** (different learning point): key "Apical lung tumour (Pancoast)"
- **BX460** (different learning point): key "Urgent investigation for possible lung cancer"

Verdict: [ ] APPROVE   [ ] EDIT   [ ] REJECT      Comment: ____________

### 10. PAN356: Pleural effusion on chest X-ray

- **Item ID:** PAN356  |  **Source ID:** N356 (parked copy: UN356)  |  **Difficulty:** Easy

**Stem:** A 72-year-old man with long-standing heart failure has had increasing breathlessness on lying flat for two weeks. His chest X-ray is reported as showing a homogeneous white shadow at the right base, with a smooth concave upper edge that rises towards the lateral chest wall and obscures the costophrenic angle. The trachea is central.

Which radiological abnormality does this describe?

- A. Right lower lobe collapse with a sharply outlined triangular shadow
- B. Right-sided pneumothorax with a visible visceral pleural line
- C. Hyperinflated lungs with flattened hemidiaphragms bilaterally
- D. Loculated lung abscess with an air-fluid level within a cavity
- **E. Right-sided pleural effusion with a meniscus along the chest wall**

**Key:** E. Right-sided pleural effusion with a meniscus along the chest wall

**Why correct:** Fluid in the pleural space tracks up the lateral chest wall, producing a homogeneous basal opacity with a concave upper border (meniscus) and loss of the costophrenic angle. Heart failure is a common cause of transudative effusions, and a central trachea fits a moderate-sized collection. Source: standard radiology teaching (chest X-ray interpretation).

**Why the others are wrong:** A. Lobar collapse produces a triangular volume-loss shadow with the fissures or trachea pulled towards it, not a meniscus. B. A pneumothorax shows absent lung markings beyond a pleural line, not a dense basal opacity. C. Hyperinflation gives dark over-expanded lung fields, which does not match a white basal shadow. D. An abscess is a thick-walled cavity with an air-fluid level, not a smooth meniscus reaching the chest wall.

**Pearl:** A meniscus sign with a blunted costophrenic angle on an erect film means pleural fluid.

**Exam trap:** Candidates may call any basal white-out pneumonia, but consolidation shows air bronchograms and no meniscus.

**Takeaway:** A meniscus-shaped basal opacity with a blunted costophrenic angle is a pleural effusion.

**Sources opened/carried:** N356

**Closest live items by learning point:**

- **BX266** (different learning point): key "Pleural effusions (clinical signs)"
- **PAN355** (different learning point): key "Pulmonary oedema (CXR)"

**Reviewer note:** Standard radiology teaching; no guideline applies.

Verdict: [ ] APPROVE   [ ] EDIT   [ ] REJECT      Comment: ____________

### 11. PAN987: PE imaging choice in severe renal impairment

- **Item ID:** PAN987  |  **Source ID:** N987 (parked copy: UN987)  |  **Difficulty:** Moderate

**Stem:** A 66-year-old man with end-stage kidney disease managed conservatively attends the emergency department with a day of pleuritic chest pain and worsening breathlessness. He recently had a hip operation. He is haemodynamically stable, his clinical assessment makes pulmonary embolism likely, and the chest X-ray shows no alternative diagnosis. Iodinated contrast is considered hazardous for him because of his kidney function.

Which approach to definitive imaging is most appropriate?

- A. Proceed to CTPA regardless of renal function, since a missed PE is more dangerous
- B. Rule out PE with a D-dimer result, because imaging is unsafe in kidney disease
- **C. Consider a ventilation-perfusion (V/Q) scan as the alternative to contrast CTPA**
- D. Arrange transthoracic echocardiography as the sole test to confirm the diagnosis
- E. Withhold imaging and treat empirically for pneumonia with oral antibiotics

**Key:** C. Consider a ventilation-perfusion (V/Q) scan as the alternative to contrast CTPA

**Why correct:** When PE is likely, CTPA is the usual immediate test, but NICE advises assessing the suitability of V/Q SPECT (or planar V/Q if SPECT is unavailable) for people with contrast allergy, severe renal impairment or a high risk from radiation. This avoids iodinated contrast while still giving a diagnostic result. Source: NICE NG158, Venous thromboembolic diseases, recommendation 1.1.18 (checked online).

**Why the others are wrong:** A. Contrast carries a real risk of further kidney injury, and NICE directs a V/Q alternative in severe renal impairment rather than ignoring renal function. B. A D-dimer is used to rule out PE only when PE is unlikely, so it cannot exclude a likely PE. D. Echocardiography may show right heart strain but cannot confirm or exclude PE. E. Treating as pneumonia without imaging leaves a probable PE untreated and delays anticoagulation.

**Pearl:** Renal impairment, contrast allergy or radiation risk should prompt a V/Q scan as the alternative to CTPA.

**Exam trap:** Candidates may reflexively choose CTPA or accept a D-dimer, forgetting that a likely PE needs imaging and that kidney function changes which imaging is used.

**Takeaway:** In suspected PE with severe renal impairment, consider V/Q imaging instead of contrast CTPA.

**Sources opened/carried:** N987; https://www.nice.org.uk/guidance/ng158/chapter/Recommendations

**Closest live items by learning point:**

- **OG059** (different learning point): key "Chest X-ray then V/Q or CTPA (pregnancy)"
- **CR024** (different learning point): key "CT pulmonary angiography"
- **PAQ15448** (different learning point): key "CT pulmonary angiogram"

Verdict: [ ] APPROVE   [ ] EDIT   [ ] REJECT      Comment: ____________

### 12. PAN4505: Snoring and witnessed apnoeas

- **Item ID:** PAN4505  |  **Source ID:** N4505 (parked copy: UN4505)  |  **Difficulty:** Easy

**Stem:** A 52-year-old office worker is referred to the sleep clinic because his wife has noticed loud snoring with pauses in his breathing during the night. He walks to work each day and has never smoked. His recent thyroid function tests and resting blood pressure were normal, and his body mass index is 36 kg/m2.

Which feature of his assessment is the most important risk factor for his sleep-disordered breathing?

- **A. A body mass index well into the obese range**
- B. Normal thyroid function on recent blood testing
- C. Regular walking to and from his place of work
- D. A normal resting blood pressure on repeat checks
- E. Having never smoked tobacco in any form

**Key:** A. A body mass index well into the obese range

**Why correct:** Obesity is the most important modifiable risk factor for obstructive sleep apnoea, because fat deposition around the upper airway and neck narrows the pharynx and makes it collapse during sleep. Weight loss is therefore a core part of management alongside other measures. Source: NHS sleep apnoea information (obesity listed first among linked factors) and standard teaching; NICE NG202 (2021) covers diagnosis and treatment.

**Why the others are wrong:** B. Normal thyroid function removes a possible contributor; it is hypothyroidism, not a normal result, that is associated with sleep apnoea. C. Regular walking is healthy activity and, if anything, helps weight control rather than promoting airway collapse. D. A normal blood pressure is not a risk factor; sleep apnoea is associated with hypertension as a consequence, not a cause. E. Never smoking is not a risk factor, whereas current smoking and alcohol before bed can worsen upper airway symptoms.

**Pearl:** Other risk factors include male sex, increasing age, alcohol and sedatives at night, and anatomical features such as a large neck or enlarged tonsils.

**Exam trap:** Treating a normal result as if it were a risk factor, such as normal thyroid tests or normal blood pressure.

**Takeaway:** In a middle-aged adult with snoring and witnessed apnoeas, obesity is the key risk factor for obstructive sleep apnoea.

**Sources opened/carried:** N4505; https://www.nice.org.uk/guidance/ng202

**Closest live items by learning point:**

- **RES022** (different learning point): key "Sleep study, then CPAP with weight loss"
- **DS016** (different learning point): key "Home respiratory polygraphy"
- **PAQ15794** (different learning point): key "Obstructive sleep apnoea"

**Reviewer note:** Weak item: the distractors are normal findings stated in the stem. Unambiguous, so kept (C2).

Verdict: [ ] APPROVE   [ ] EDIT   [ ] REJECT      Comment: ____________

### 13. PAN3974: Haemoptysis after surgery

- **Item ID:** PAN3974  |  **Source ID:** N3974 (parked copy: UN3974)  |  **Difficulty:** Moderate

**Stem:** A 44-year-old woman develops sudden breathlessness and sharp right-sided chest pain on breathing in, five days after an elective knee replacement. CT pulmonary angiography confirms an embolus in a peripheral branch of the right lower lobe artery. She then coughs up a small amount of blood-streaked sputum while on the ward.

What is the most likely mechanism of her haemoptysis?

- A. Erosion of a bronchial artery by an adjacent tumour
- B. Blood tracking into the airway from a ruptured oesophagus
- C. Raised capillary pressure from acute left ventricular failure
- **D. Infarction of lung tissue supplied by the blocked vessel**
- E. Swallowed blood from a posterior nosebleed being coughed up

**Key:** D. Infarction of lung tissue supplied by the blocked vessel

**Why correct:** A peripheral pulmonary embolus can cut off the blood supply to the lung segment beyond it, causing pulmonary infarction with alveolar haemorrhage. This produces pleuritic pain and small-volume blood-streaked sputum. Haemoptysis is a recognised feature of pulmonary embolism, and it features in the Wells score used to estimate PE probability. Source: NICE NG158, venous thromboembolic diseases (2020), and standard teaching.

**Why the others are wrong:** A. A tumour eroding a bronchial artery would not explain an acute presentation after surgery with a confirmed embolus. B. Oesophageal rupture causes severe chest pain and vomiting with mediastinitis, not haemoptysis after a knee replacement. C. Left ventricular failure causes frothy pink sputum with bilateral crackles, and nothing here suggests heart failure. E. Swallowed blood from a nosebleed would be vomited or coughed from the throat, and the picture here is of a lung process.

**Pearl:** Pulmonary infarction is more likely with a small, peripheral embolus than with a large central one, which tends to cause haemodynamic compromise instead.

**Exam trap:** Assuming haemoptysis in a patient with a confirmed embolus must come from a second, separate cause such as cancer or heart failure.

**Takeaway:** Small-volume haemoptysis in pulmonary embolism reflects pulmonary infarction distal to a peripheral clot.

**Sources opened/carried:** N3974; https://www.nice.org.uk/guidance/ng158/chapter/Recommendations

**Closest live items by learning point:**

- **S058** (different learning point): key "Pulmonary embolism (post-op diagnosis)"
- **PAQ15447** (different learning point): key "Pulmonary embolism (post knee replacement diagnosis)"
- **PAQ550** (different learning point): key "Interim anticoagulation and CTPA"

Verdict: [ ] APPROVE   [ ] EDIT   [ ] REJECT      Comment: ____________

### 14. PAN4512: Hoarseness

- **Item ID:** PAN4512  |  **Source ID:** N4512 (parked copy: UN4512)  |  **Difficulty:** Moderate

**Stem:** A 66-year-old retired plumber who has smoked for most of his adult life has had a dry cough for two months and now speaks in a weak, rough voice. Chest X-ray shows a left hilar mass with fullness of the mediastinum beside the aortic arch. Laryngoscopy shows the left vocal cord is paralysed and fixed.

Which structure has most likely been involved by the tumour?

- A. Left phrenic nerve running over the surface of the pericardium
- B. Right recurrent laryngeal nerve hooking round the subclavian artery
- **C. Left recurrent laryngeal nerve looping beneath the aortic arch**
- D. Left stellate ganglion lying at the apex of the left lung
- E. Left hypoglossal nerve passing through the upper part of the neck

**Key:** C. Left recurrent laryngeal nerve looping beneath the aortic arch

**Why correct:** The left recurrent laryngeal nerve branches from the vagus and hooks under the aortic arch, so a left hilar or mediastinal tumour (or involved nodes) can compress or invade it. This causes vocal cord palsy with a weak, hoarse voice, and hoarseness in a smoker is a red flag for lung or laryngeal cancer. A chest X-ray suggesting lung cancer needs referral on the suspected cancer pathway. Source: standard anatomy teaching; NICE NG12 (2015, updated) recommendation 1.1.1 for referral when chest X-ray findings suggest lung cancer.

**Why the others are wrong:** A. Phrenic nerve involvement causes hemidiaphragm paralysis and breathlessness, not hoarseness. B. The right recurrent laryngeal nerve loops round the right subclavian artery, so a left-sided hilar mass does not usually reach it and the paralysed cord here is on the left. D. Stellate ganglion involvement gives Horner syndrome (ptosis, miosis, anhidrosis) rather than a voice change. E. The hypoglossal nerve supplies the tongue and lies in the neck, away from the mediastinum, so it would cause tongue deviation, not hoarseness.

**Pearl:** Because the left recurrent laryngeal nerve passes under the aortic arch, left-sided mediastinal disease is the classic cause of lung-cancer-related vocal cord palsy.

**Exam trap:** Choosing the phrenic nerve because it also runs through the mediastinum, forgetting that it affects the diaphragm and not the voice.

**Takeaway:** Hoarseness with a left hilar or mediastinal lung tumour points to left recurrent laryngeal nerve involvement.

**Sources opened/carried:** N4512

**Closest live items by learning point:**

- **S059** (different learning point): key "Suspected cancer pathway referral (hoarseness, smoker)"
- **PAQ1069** (different learning point): key "Suspected cancer pathway referral"
- **PAAKT052** (different learning point): key "Apical lung tumour (Pancoast)"

Verdict: [ ] APPROVE   [ ] EDIT   [ ] REJECT      Comment: ____________

### 15. PAN3957: Occupational lung disease

- **Item ID:** PAN3957  |  **Source ID:** N3957 (parked copy: UN3957)  |  **Difficulty:** Moderate

**Stem:** A 58-year-old man has spent twenty years drilling and sandblasting granite in a quarry, usually without a face mask. He now has progressive breathlessness and a dry cough. His chest X-ray shows many small nodules in the upper zones and thin rim-like calcification around enlarged hilar lymph nodes.

Which inhaled agent is most likely to be responsible?

- A. Asbestos fibres released from old building insulation materials
- B. Coal dust inhaled during years of underground mining work
- C. Raw cotton fibres inhaled in the preparation rooms of textile mills
- D. Beryllium fumes released during the manufacture of metal alloys
- **E. Respirable crystalline silica released as rock is fragmented**

**Key:** E. Respirable crystalline silica released as rock is fragmented

**Why correct:** Crystalline silica from cutting, drilling or blasting stone, sand and granite causes silicosis, a pneumoconiosis with small upper-zone nodules and hilar nodes that may show eggshell calcification. Risk rises with cumulative dust exposure, and dust control and masks reduce it. People with silicosis also have an increased risk of tuberculosis and lung cancer. Source: UK Health and Safety Executive, Silicosis (hse.gov.uk/lung-disease/silicosis.htm); standard occupational respiratory teaching.

**Why the others are wrong:** A. Asbestos causes lower-zone fibrosis, pleural plaques and mesothelioma rather than upper-zone nodules with eggshell calcification. B. Coal dust causes coal worker's pneumoconiosis, which also favours the upper zones, but the exposure here is rock cutting, not mining. C. Cotton fibres cause byssinosis, an asthma-like illness that is worse at the start of the working week. D. Beryllium causes a granulomatous disease resembling sarcoidosis, linked to alloy and electronics industries rather than stone work.

**Pearl:** Eggshell calcification of hilar nodes is a classic radiological clue to silicosis, and these patients need to be alert to tuberculosis symptoms.

**Exam trap:** Choosing asbestos because it is the best-known occupational lung toxin, ignoring the upper-zone nodular pattern.

**Takeaway:** Stone, sand or granite dust exposure with upper-zone nodules and eggshell node calcification means silicosis.

**Sources opened/carried:** N3957

**Closest live items by learning point:**

- **DT120** (different learning point): key "Sputum for AFB (TB in known silicosis)"
- **PAQ15445** (different learning point): key "Asbestos (bilateral irregular pleural calcification)"
- **RES024** (different learning point): key "Malignant mesothelioma"

Verdict: [ ] APPROVE   [ ] EDIT   [ ] REJECT      Comment: ____________

### 16. PAN3958: Occupational lung disease

- **Item ID:** PAN3958  |  **Source ID:** N3958 (parked copy: UN3958)  |  **Difficulty:** Moderate

**Stem:** A 72-year-old retired ship pipe-fitter has had over a year of worsening breathlessness on exertion and a dry cough. For decades he stripped old lagging from engine-room pipework. He has finger clubbing and fine late-inspiratory crackles at both lung bases. His chest X-ray shows lower-zone reticular shadowing with calcified plaques along the pleura.

Which condition best explains his lung disease?

- A. Silicosis from inhaled quartz dust particles over many years
- **B. Asbestosis, a fibrosing lung disease from asbestos fibres**
- C. Sarcoidosis with chronic pulmonary parenchymal involvement
- D. Malignant pleural mesothelioma with encasement of the lung
- E. Extrinsic allergic alveolitis from repeated antigen exposure

**Key:** B. Asbestosis, a fibrosing lung disease from asbestos fibres

**Why correct:** Prolonged heavy asbestos exposure causes asbestosis, a diffuse interstitial fibrosis worst at the lung bases, with fine basal crackles, clubbing and pleural plaques on imaging. It typically appears many years after the exposure. The fibrosis gives a restrictive pattern with reduced gas transfer. Source: NHS asbestosis information and standard occupational respiratory teaching; the occupational history is the key to diagnosis.

**Why the others are wrong:** A. Silicosis causes nodules predominantly in the upper zones after silica dust exposure, not lower-zone fibrosis with pleural plaques. C. Sarcoidosis commonly shows hilar lymphadenopathy and upper-zone change, and neither the pleural calcification nor the occupational history fits. D. Mesothelioma presents with chest pain, effusion and irregular pleural thickening rather than bibasal crackles and reticular change. E. Extrinsic allergic alveolitis follows organic antigen exposure and often causes episodic symptoms with upper or mid-zone change.

**Pearl:** Pleural plaques show past asbestos exposure but do not themselves cause breathlessness, whereas asbestosis does.

**Exam trap:** Choosing mesothelioma because of asbestos, when the picture is fibrosis with crackles rather than pleural pain or effusion.

**Takeaway:** Bibasal crackles, clubbing and lower-zone fibrosis after heavy asbestos exposure indicate asbestosis.

**Sources opened/carried:** N3958

**Closest live items by learning point:**

- **RES014** (different learning point): key "Idiopathic pulmonary fibrosis"
- **PAQ15445** (different learning point): key "Asbestos (asymptomatic pleural plaques)"
- **PAAKT025** (different learning point): key "Malignant pleural mesothelioma"

Verdict: [ ] APPROVE   [ ] EDIT   [ ] REJECT      Comment: ____________

### 17. PAN1946: Pleural effusion

- **Item ID:** PAN1946  |  **Source ID:** N1946 (parked copy: UN1946)  |  **Difficulty:** Moderate

**Stem:** An 82-year-old man with known heart failure stopped taking his furosemide two weeks ago. He is admitted with orthopnoea, weight gain and leg swelling but no fever or chest pain. A chest X-ray shows cardiomegaly with moderate bilateral pleural effusions of similar size.

What is the most appropriate approach to the effusions?

- A. Bilateral ultrasound-guided aspiration now to exclude malignancy
- B. Bilateral intercostal drains to relieve his breathlessness
- **C. Treat the heart failure with diuretics and review progress**
- D. Intravenous antibiotics for a presumed pleural infection
- E. Referral for talc pleurodesis on both sides

**Key:** C. Treat the heart failure with diuretics and review progress

**Why correct:** Symmetrical bilateral effusions in a patient with decompensated heart failure and no atypical features are presumed to be transudates. The best approach is to treat the underlying heart failure with diuretics and review the response. Pleural sampling is reserved for effusions that are unilateral or asymmetrical, associated with pleuritic pain or fever, or that fail to resolve with treatment. Source: standard teaching on pleural effusion in heart failure, in line with BTS pleural disease guidance.

**Why the others are wrong:** A. Routine aspiration of both sides exposes him to risk without benefit when the clinical picture is clearly heart failure and there are no atypical features. B. Drains are for pleural infection, large symptomatic effusions or pneumothorax, and are not first-line for a transudate that will respond to diuretics. D. There is no fever, pleuritic pain or consolidation to suggest empyema. E. Pleurodesis is for recurrent malignant effusions, not for fluid from heart failure.

**Pearl:** Treat first and tap later in bilateral effusions with clear heart failure, but sample if the effusion is unilateral, asymmetrical or fails to respond.

**Exam trap:** Aspirating or draining both sides by reflex, when the clinical context makes a transudate likely and treatment of the cause should come first.

**Takeaway:** Bilateral effusions in decompensated heart failure are managed by treating the heart failure.

**Sources opened/carried:** N1946

**Closest live items by learning point:**

- **BX266** (different learning point): key "Pleural effusions (diagnosis in heart failure)"
- **PAQ14765** (different learning point): key "Decompensated heart failure"
- **PAQ16214** (different learning point): key "Fluid retention from decompensated heart failure"

Verdict: [ ] APPROVE   [ ] EDIT   [ ] REJECT      Comment: ____________

### 18. PAN4490: Pleural effusion

- **Item ID:** PAN4490  |  **Source ID:** N4490 (parked copy: UN4490)  |  **Difficulty:** Moderate

**Stem:** A 77-year-old woman has long-standing heart failure with reduced ejection fraction and is increasingly breathless on exertion, with swollen ankles. Percussion is stony dull at both lung bases, with reduced breath sounds, and a chest X-ray shows an enlarged heart with small effusions of similar size on both sides. She has no fever or pleuritic pain.

Which mechanism best explains the pleural fluid?

- A. Obstruction of a main bronchus by an endobronchial tumour
- B. Spread of bacteria from the adjacent lung into the pleura
- C. Leakage of lymph from a damaged thoracic duct
- D. Increased capillary permeability from pleural inflammation
- **E. Raised capillary pressure forcing fluid into the pleura**

**Key:** E. Raised capillary pressure forcing fluid into the pleura

**Why correct:** In heart failure the raised venous and pulmonary capillary hydrostatic pressure drives protein-poor fluid across the pleural membranes faster than the lymphatics can clear it. This produces a transudate, typically bilateral and roughly symmetrical. Inflammatory, infective and malignant effusions are usually exudates and tend to be unilateral or asymmetrical. Source: BTS Pleural Disease Guideline, Thorax 2023, and standard teaching.

**Why the others are wrong:** A. Bronchial obstruction causes lung collapse and may be associated with a unilateral malignant effusion, not symmetrical bilateral fluid in heart failure. B. Bacterial spread produces a parapneumonic effusion or empyema, which needs fever and a lung infection. C. Thoracic duct leakage causes a chylothorax, usually after trauma, surgery or lymphoma. D. Increased permeability from inflammation produces an exudate, whereas here there is no pleuritic pain, fever or inflammatory trigger.

**Pearl:** Bilateral, symmetrical effusions in a patient with clear heart failure are almost always transudates caused by hydrostatic pressure.

**Exam trap:** Choosing increased capillary permeability, which describes exudates (infection, malignancy, inflammation) rather than the pressure-driven transudate of heart failure.

**Takeaway:** Heart failure causes bilateral transudative effusions through raised hydrostatic pressure.

**Sources opened/carried:** N4490

**Closest live items by learning point:**

- **BX266** (different learning point): key "Pleural effusions"
- **RES018** (different learning point): key "Malignancy or infection (exudate by Light's)"
- **BX791** (different learning point): key "Raised venous hydrostatic pressure (ankle oedema)"

**Reviewer note:** Overlaps live BX266 (heart failure, bibasal dullness, key pleural effusions) but tests the mechanism, so the keys differ (C3). Shares the heart-failure effusion topic with PAN1946, which tests management.

Verdict: [ ] APPROVE   [ ] EDIT   [ ] REJECT      Comment: ____________

### 19. PAN10448: Pneumonia severity

- **Item ID:** PAN10448  |  **Source ID:** N10448 (parked copy: UN10448)  |  **Difficulty:** Easy

**Stem:** A 69-year-old man has had 3 days of fever, productive cough and right-sided pleuritic chest pain. A chest X-ray confirms right lower lobe consolidation. He is alert and orientated, with a temperature of 38.9°C, pulse 104/min, respiratory rate 22/min, blood pressure 128/76 mmHg and oxygen saturation 93% on air. His C-reactive protein is markedly raised. The admitting doctor calculates his CURB65 score.

Which of his findings contributes a point to the score?

- **A. His age of 69 years on presentation**
- B. A temperature of 38.9°C on arrival
- C. A resting pulse rate of 104 beats per minute
- D. Right-sided pleuritic chest pain
- E. A markedly raised C-reactive protein level

**Key:** A. His age of 69 years on presentation

**Why correct:** CURB65 gives one point each for new confusion, urea above 7 mmol/L, respiratory rate of 30 or more, low blood pressure (systolic under 90 or diastolic 60 or less) and age 65 or over. This man is alert, with a respiratory rate of 22 and normal blood pressure, so of the findings given only his age scores; his urea is not yet known. Fever, tachycardia, pleuritic pain and CRP are not part of the score, so clinical judgement and oxygen saturation must be used alongside it. Source: NICE NG250 Pneumonia: diagnosis and management, 2025 (Box 2, CURB65).

**Why the others are wrong:** B. Temperature is not a CURB65 component, although it supports infection. C. Heart rate is not part of CURB65 even though it is in NEWS2. D. Pleuritic pain is a feature of lobar pneumonia but does not score. E. CRP helps confirm infection and guide treatment decisions but is not in the score.

**Pearl:** CURB65 is Confusion, Urea, Respiratory rate, Blood pressure and age 65 or over, and fever, pulse, saturation and CRP are not in it.

**Exam trap:** Counting the fever, pulse or CRP because they look abnormal, although none of them is a CURB65 component.

**Takeaway:** CURB65 uses confusion, urea, respiratory rate, blood pressure and age 65 or over, and nothing else.

**Sources opened/carried:** N10448; https://www.nice.org.uk/guidance/ng250/chapter/Recommendations

**Closest live items by learning point:**

- **Q357** (different learning point): key "4 (CURB65 calculation with all items given)"
- **ID019** (different learning point): key "High severity - admit"
- **ID044** (different learning point): key "High score - admit"

Verdict: [ ] APPROVE   [ ] EDIT   [ ] REJECT      Comment: ____________

### 20. PAN4686: Peak flow technique

- **Item ID:** PAN4686  |  **Source ID:** N4686 (parked copy: UN4686)  |  **Difficulty:** Easy

**Stem:** A practice nurse is teaching an adult with newly diagnosed asthma to use a handheld meter at home. He will record a reading each morning and evening in a diary.

Which instruction should the nurse give for each reading?

- A. Breathe in gently through the device, then hold the breath for as long as possible
- B. Breathe out slowly and evenly through the device until the lungs feel completely empty
- C. Take a normal breath, then blow out steadily through the device for several seconds
- D. Cough firmly into the device after a small breath, keeping the lips loosely around it
- **E. Stand upright, breathe in fully, seal the lips, then give one short, hard blast out**

**Key:** E. Stand upright, breathe in fully, seal the lips, then give one short, hard blast out

**Why correct:** Peak expiratory flow is the fastest flow achieved during a forced expiration that starts from full lung inflation. The patient therefore needs an upright position, a maximal breath in, a tight lip seal and a single short, forceful blast. The manoeuvre is repeated and the highest of three readings is recorded. Source: standard UK respiratory clinical teaching and respiratory service patient guidance on peak flow meters.

**Why the others are wrong:** A. Peak flow is measured on breathing out, not in, and holding the breath has no role. B. A slow, complete exhalation is a vital capacity style effort and does not produce a maximal peak flow. C. A normal breath followed by a steady blow does not reach maximal flow and underestimates the true reading. D. Coughing after a small breath with a loose seal leaks air and does not reflect maximal expiratory effort.

**Pearl:** Record the highest of three technically good attempts, at the same times each day, and use the same meter.

**Exam trap:** Slow, long exhalation sounds careful but is a vital capacity effort; peak flow needs a brief maximal blast.

**Takeaway:** For peak flow, breathe in fully, seal the lips and blow out as hard and fast as possible.

**Sources opened/carried:** N4686

**Closest live items by learning point:**

- **CR033** (different learning point): key "Significant diurnal variability consistent with asthma"
- **PAQ225** (different learning point): key "Variable, reversible airflow obstruction"
- **DS132** (different learning point): key "Refer to occupational asthma specialist"

**Reviewer note:** Technique cited as standard teaching; no guideline page could be fetched (C2).

Verdict: [ ] APPROVE   [ ] EDIT   [ ] REJECT      Comment: ____________

### 21. PAN3955: Examination signs of consolidation

- **Item ID:** PAN3955  |  **Source ID:** N3955 (parked copy: UN3955)  |  **Difficulty:** Moderate

**Stem:** A 58-year-old woman has had two days of fever, rigors and a cough with rust-coloured sputum. Over the right lower zone posteriorly, percussion is dull, breath sounds are bronchial and whispered words are heard clearly through the stethoscope.

Which change within the lung best explains these examination findings?

- A. Air trapped in the pleural space, separating the lung from the chest wall
- B. Fluid filling the pleural space and damping the transmission of sound
- C. Overdistended alveoli with loss of elastic recoil and a barrel-shaped chest
- D. Airway collapse behind a blocked bronchus, with no air entering the lobe
- **E. Air spaces filled with inflammatory exudate, so sound travels more readily**

**Key:** E. Air spaces filled with inflammatory exudate, so sound travels more readily

**Why correct:** In lobar pneumonia the alveoli fill with inflammatory exudate, producing solid lung that transmits sound from the large airways to the chest wall better than normal aerated lung. This gives dull percussion, bronchial breathing and increased vocal resonance or whispering pectoriloquy. The fever, rigors and rusty sputum point to an infective cause. Source: standard UK respiratory clinical teaching.

**Why the others are wrong:** A. A pneumothorax gives a hyper-resonant percussion note and reduced or absent breath sounds, not bronchial breathing. B. A pleural effusion gives a stony-dull note with reduced breath sounds and reduced vocal resonance because fluid damps sound. C. Emphysema gives hyper-resonance, hyperinflation and quiet breath sounds. D. Lobar collapse from a blocked bronchus gives dullness but typically diminished breath sounds, because air cannot enter to generate or conduct sound.

**Pearl:** Consolidation is the one common cause of dullness in which breath sounds get louder and harsher, not quieter.

**Exam trap:** Dullness alone suggests effusion, but the preserved loud breath sounds and vocal resonance point to consolidation instead.

**Takeaway:** Dull percussion with bronchial breathing and increased vocal resonance means consolidation.

**Sources opened/carried:** N3955

**Closest live items by learning point:**

- **PAQ16095** (different learning point): key "Community-acquired pneumonia"
- **CR009** (different learning point): key "Right lower lobe pneumonia (consolidation)"

Verdict: [ ] APPROVE   [ ] EDIT   [ ] REJECT      Comment: ____________

### 22. PAN3860: Cystic fibrosis lung disease

- **Item ID:** PAN3860  |  **Source ID:** N3860 (parked copy: UN3860)  |  **Difficulty:** Easy

**Stem:** A 19-year-old man with cystic fibrosis attends his annual review. He describes a persistent cough that brings up thick sputum most days, and he has needed several courses of antibiotics for chest infections in the past year.

Which structural change is most likely to be seen on high-resolution CT of his chest?

- A. Honeycombing with traction fibrosis confined to both lung bases
- **B. Dilated, thick-walled airways, typical of established bronchiectasis**
- C. Calcified pleural plaques along the diaphragmatic surface and chest wall
- D. Pulmonary arteriovenous malformations scattered throughout both lungs
- E. Multiple thin-walled bullae with a rim of normal lung at the apices

**Key:** B. Dilated, thick-walled airways, typical of established bronchiectasis

**Why correct:** In cystic fibrosis, defective chloride transport makes airway secretions thick and sticky, impairing mucociliary clearance. Chronic infection and inflammation follow and, over years, damage the bronchial walls and cause bronchiectasis. High-resolution CT shows dilated, thickened airways, and a persistent productive cough with repeated infections is the clinical counterpart. Source: standard UK respiratory clinical teaching.

**Why the others are wrong:** A. Honeycombing with basal fibrosis is the pattern of idiopathic pulmonary fibrosis and is not typical of cystic fibrosis. C. Calcified pleural plaques indicate previous asbestos exposure. D. Pulmonary arteriovenous malformations are linked to hereditary haemorrhagic telangiectasia. E. Apical bullae with a thin rim of normal lung suggest emphysema or primary spontaneous pneumothorax risk, not the airway damage of cystic fibrosis.

**Pearl:** Think of cystic fibrosis as a cause of bronchiectasis in a young person with a chronic productive cough.

**Exam trap:** Basal fibrosis and bullae are common respiratory CT patterns, but neither results from cystic fibrosis secretion retention.

**Takeaway:** Cystic fibrosis lung disease is bronchiectasis from thick secretions and chronic infection.

**Sources opened/carried:** N3860

**Closest live items by learning point:**

- **BX268** (different learning point): key "Bronchiectasis (non-CF sputum history)"
- **RES016** (different learning point): key "Bronchiectasis (HRCT, non-CF)"
- **BX911** (different learning point): key "Cystic fibrosis (diagnosis)"

Verdict: [ ] APPROVE   [ ] EDIT   [ ] REJECT      Comment: ____________

### 23. PAN4499: Respiratory symptom terminology

- **Item ID:** PAN4499  |  **Source ID:** N4499 (parked copy: UN4499)  |  **Difficulty:** Easy

**Stem:** A 48-year-old man with long-standing bronchiectasis brings a tissue to his GP. It contains streaks of bright red blood mixed with sputum that he coughed up this morning.

What is the correct term for this symptom?

- **A. Haemoptysis**
- B. Haematemesis
- C. Epistaxis
- D. Melaena
- E. Haematuria

**Key:** A. Haemoptysis

**Why correct:** Coughing up blood that comes from the lower respiratory tract is called haemoptysis. In bronchiectasis, inflamed fragile bronchial vessels can bleed into the airways, so streaks of blood in sputum are a recognised feature. New haemoptysis in a patient at risk still needs a clinical assessment for its cause. Source: standard UK clinical teaching.

**Why the others are wrong:** B. Haematemesis means vomiting blood from the upper gastrointestinal tract. C. Epistaxis means a nosebleed. D. Melaena means black, tarry stool from digested upper gastrointestinal blood. E. Haematuria means blood in the urine.

**Pearl:** Haemoptysis is blood from the airway or lung, whereas haematemesis is blood from the upper gastrointestinal tract.

**Exam trap:** Haemoptysis and haematemesis are easily confused, but the first is coughed up and the second is vomited.

**Takeaway:** Coughing up blood from the respiratory tract is haemoptysis.

**Sources opened/carried:** N4499

**Closest live items by learning point:**

- **RES039** (different learning point): key "Goodpasture (anti-GBM) disease"
- **BX460** (different learning point): key "Urgent investigation for possible lung cancer"
- **DS096** (different learning point): key "Urgent investigation for haemoptysis"

**Reviewer note:** Low-level terminology item (haemoptysis); the writer notes the owner may prefer to keep the live copy.

Verdict: [ ] APPROVE   [ ] EDIT   [ ] REJECT      Comment: ____________

### 24. PAN8887: Pathophysiology of asthma

- **Item ID:** PAN8887  |  **Source ID:** N8887 (parked copy: UN8887)  |  **Difficulty:** Moderate

**Stem:** A 12-year-old boy with eczema has had a dry night-time cough for several months, with wheeze during football and when he stays at his grandmother's house, where there is a dog. His chest is clear between episodes and his symptoms settle quickly after a blue inhaler. His GP explains to the family what is happening in his airways.

Which process best explains his symptoms?

- A. Fixed airway narrowing caused by long-standing destruction of the alveolar walls and loss of recoil
- B. Thrombotic obstruction of the pulmonary arteries causing a ventilation-perfusion mismatch and hypoxia
- **C. Reversible airway narrowing driven by chronic inflammation and bronchial hyper-responsiveness**
- D. Progressive scarring of the lung interstitium that stiffens the lung and impairs gas transfer
- E. Air entering the pleural space and compressing the underlying lung tissue

**Key:** C. Reversible airway narrowing driven by chronic inflammation and bronchial hyper-responsiveness

**Why correct:** Asthma is a chronic inflammatory airway disease in which hyper-responsive airways narrow in response to triggers such as allergen, exercise and cold air. The narrowing is variable and reversible, which explains why he is well between episodes and responds to a reliever inhaler. This is why anti-inflammatory (inhaled corticosteroid-containing) treatment forms the basis of long-term control. Source: NICE NG245 Asthma: diagnosis, monitoring and chronic asthma management, 2024; BTS/NICE/SIGN asthma guideline.

**Why the others are wrong:** A. Destruction of alveolar walls (emphysema) causes fixed obstruction in older smokers, not variable symptoms in a child. B. Pulmonary embolism causes sudden breathlessness or pleuritic pain, not recurrent trigger-related wheeze. D. Interstitial scarring produces progressive breathlessness with restrictive spirometry and does not fluctuate with triggers. E. A pneumothorax is an acute event with pleuritic pain and reduced breath sounds, not repeated wheezy episodes.

**Pearl:** Asthma is inflammation plus airway hyper-responsiveness, giving variable and reversible airflow obstruction.

**Exam trap:** Fixed or progressive patterns (emphysema, fibrosis) and acute events (embolism, pneumothorax) do not fit symptoms that come and go with triggers.

**Takeaway:** Variable, trigger-related airway narrowing from inflammation and hyper-responsiveness defines asthma.

**Sources opened/carried:** N8887; https://www.nice.org.uk/guidance/ng245/chapter/Recommendations

**Closest live items by learning point:**

- **PAQ225** (different learning point): key "Variable, reversible airflow obstruction (spirometry interpretation)"
- **PAQ15313** (different learning point): key "Obstruction improving after bronchodilator (test supporting asthma)"
- **BX261** (different learning point): key "Asthma (exercise wheeze diagnosis)"

Verdict: [ ] APPROVE   [ ] EDIT   [ ] REJECT      Comment: ____________

## Appendix A: pre-screen repeats (9)

- **UQ12633** (Preschool Asthma): live PAQ16279
- **UQ12821** (Exercise-Induced Childhood Asthma): live BX261, PAQ16279
- **UQ12828** (Empyema): live BX267
- **UQ12829** (Bronchiectasis): live BX268, RES016
- **UQ12077** (Pulmonary TB Microbiological Confirmation): live BX422
- **UQ11482** (Asthma And Atopy): live PAQ16279
- **UQ11563** (Community-Acquired Pneumonia): live BX936
- **UN2174** (Facial swelling): live NEU043
- **UN5532** (Cough and fever): live PAN4233

## Appendix B: writer declines / holds (7)

Declined because the key hinges on a movable threshold, the item is terminology-only, or the key is weak. Most also overlap a live item, as the notes say. A reviewer may reverse these.

- **PAN4778**: Terminology-only recall (pleuritic pain type); no new learning point beyond live pleuritic-pain vignettes (e.g. 244, CR009, BX144).
- **PAN804**: Score 3 = PE unlikely hinges on a movable Wells threshold; learning point covered by RES041 and CR044.
- **PAN984**: Wells 3 -> D-dimer is threshold-dependent and duplicates RES041 and BX549.
- **PAN9320**: Chronic bronchitis definition hinges on 3 months over 2 consecutive years (historical definition, not management); diagnosis-only re-skin of live COPD material.
- **PAN1410**: Wells 6 = PE likely hinges on a movable threshold; covered by CR024 (Wells 5, CTPA).
- **PAN7129**: Hilar mass in heavy smoker = small-cell lung cancer overlaps live RES019 (SCLC key); key is weak without a paraneoplastic clue since squamous cancer is also central, and lung cancer in smokers is covered by BX460/DS096.
- **PAN6904**: Key hinges on PEF band recall (35% = acute severe vs below 33% life-threatening); also overlaps live RES029 and RES006.
