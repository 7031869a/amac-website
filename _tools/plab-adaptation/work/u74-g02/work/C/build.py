import json,sys,re
from collections import Counter
sys.stdout.reconfigure(encoding='utf-8')
B='_tools/plab-adaptation/work/u74-g02/'
draft={q['id']:q for q in json.load(open(B+'draft.json',encoding='utf-8'))}
ids=json.load(open(B+'ctx/check_ids.json'))
D={ # drops
'PAN8340':"Repeat of PAN251 (u74-g01 check list): suspected hypothyroidism in an adult with classic symptoms, first test = TSH. Same scenario and learning point. Keep only one of the pair; if PAN251 is dropped in g01, this item can be reinstated (it only needs Source/sources and option-length fixes).",
'PAN1367':"Repeat of parked PAQ14836 and PAQ15559 (prednisolone for polymyalgia rheumatica, stopped abruptly, now weak/nauseated/light-headed -> adrenal insufficiency from HPA suppression); also parked PAN523, PAN5329, PAQ15361. Same scenario and learning point.",
'PAN763':"Repeat of live BX926 (galactorrhoea with oligomenorrhoea, not pregnant -> prolactin elevated) and parked PAN6720/PAN2075 (amenorrhoea + bilateral milky discharge, never pregnant -> hyperprolactinaemia). Same fact.",
'PAN6110':"Repeat of live BX510 (perioral tingling and hand cramps with low calcium -> carpopedal spasm/tetany) and parked PAQ15965. Same fact; a different setting (pancreatitis) does not change the learning point.",
'PAN2195':"Repeat of parked PAQ15949 (man with a right-lobe thyroid lump; which feature most suggests malignancy). Same scenario and learning point (red-flag feature of a thyroid nodule); only the keyed red flag differs.",
'PAN3199':"Repeat of parked PAQ15113 (man notices a thyroid lump while shaving, moves on swallowing, first investigation = thyroid function tests). Also duplicates PAN6139 in this batch.",
'PAN6139':"Repeat of parked PAQ15113 (new thyroid lump, first test = thyroid function/TSH) and of PAN3199 in this batch. Also used a personal name ('Clare').",
'PAN8535':"Repeat of PAN7521 (u74-g03 check list: newly confirmed thyrotoxicosis, which further symptom fits) and parked PAQ16070/PAQ15114 (heat intolerance, sweating -> hyperthyroidism). Same learning point.",
'PAN7061':"Repeat of parked PAN3641 and PAN3982 (infrequent/absent periods with milky nipple discharge, pregnancy negative -> prolactinoma), and of live BX926. Same scenario and learning point.",
'PAN1887':"Repeat of parked PAQ16049 (annual diabetes foot check, symmetrical stocking sensory loss -> distal symmetrical polyneuropathy) and PAQ15409. Same scenario and learning point.",
'PAN6277':"Repeat of PAN5865 (u74-g01 check list: diabetic with loss of feeling in both feet asks about self-care -> inspect feet daily and protect from injury). Same scenario and learning point.",
'PAN3646':"Repeat of PAN5759 in this batch (76-year-old woman with weight loss, tremor, thyrotoxic features and new AF). Both teach thyrotoxicosis <-> atrial fibrillation in the same scenario; PAN5759 kept. The keyed fact (irregularly irregular pulse = AF) is also live BX804.",
'PAN5573':"Repeat of parked PAQ15997 and PAN215 (conscious hypoglycaemia, able to swallow -> fast-acting carbohydrate such as glucose tablets/juice, then recheck). Same learning point and setting.",
'PAN5762':"Repeat of parked PAQ15781 and PAQ16261 (day after total thyroidectomy, perioral/fingertip tingling, carpal spasm on cuff inflation -> hypocalcaemia), and of PAN6310 in this batch.",
'PAN5394':"Repeat of live CR055 (water deprivation: urine stays dilute, concentrates after desmopressin -> cranial DI); also END086/END020. Same learning point.",
'PAN6316':"Repeat of live END049 and END041 (long-term lithium, dilute urine not corrected by desmopressin -> nephrogenic DI). Asking for the mechanism (renal ADH resistance) rather than the name does not change the learning point.",
'PAN3634':"Repeat of live BX227 (polyuria with very dilute urine -> diabetes insipidus): same one-line fact (DI = dilute, low-osmolality urine). BX rule applies.",
'PAN8209':"Repeat of parked PAQ218 (61-year-old with recurrent thrush, thirst, nocturia and raised HbA1c -> type 2 diabetes). Also overlaps PAN7279 in this batch (also a taxi driver with osmotic symptoms and genital candida).",
'PAN8344':"Repeat of parked PAQ16312 (polyuria and thirst after a serious head injury, normal glucose -> cranial diabetes insipidus). Same scenario and learning point.",
'PAN7173':"Repeat of live NEP023 (hypertension, unexplained hypokalaemia, no diuretic -> primary hyperaldosteronism) and parked PAQ16319, PAQ15778, PAAKT159 (resistant hypertension, low potassium, no diuretic -> primary hyperaldosteronism).",
'PAN2029':"Repeat of live END026 and END047 (resistant hypertension with spontaneous hypokalaemia -> plasma aldosterone-to-renin ratio first).",
'PAQ11939':"Repeat of live BX521 (heavy smoker, hyponatraemia with concentrated urine, euvolaemic, new lung mass -> lung disease can cause SIADH). Same fact; also parked PAQ15774.",
'PAN248':"Repeat: the festival/MDMA/water-loading scenario with confusion, vomiting and seizure is parked PAN3987 and PAQ16256 (cerebral oedema, seizure), and the learning point (severe symptomatic hyponatraemia = emergency needing hypertonic saline) is live NEP061 and DS102 and parked PAQ15474. The writer's re-set to avoid PAQ15474 moved it onto PAN3987/PAQ16256.",
'PAN1889':"Repeat of parked PAQ15530 and PAQ14747 (patient with another autoimmune disease, pigmented palmar creases, postural dizziness, weight loss -> Addison's disease). Naming Hashimoto rather than type 1 diabetes/vitiligo does not change the scenario or learning point; also overlaps PAN3923 (u74-g01).",
'PAN6723':"Repeat of parked PAQ16388 and PAQ15999 (months of high-dose prednisolone, moon face, buffalo hump, purple striae, bruising -> iatrogenic/exogenous Cushing's). Asking for the mechanism rather than the name does not change the learning point.",
'PAN1361':"Repeat of live END023, ID007 and DR082 (confused, dehydrated, polyuric patient with marked hypercalcaemia -> urgent IV 0.9% sodium chloride). Same learning point.",
'PAN6310':"Repeat of parked PAQ16261 and PAQ15781 (day after total thyroidectomy, lip/fingertip tingling and carpal spasm on cuff inflation -> hypocalcaemia), and of PAN5762 in this batch.",
'PAN7965':"Repeat of PAN3922 (u74-g01 check list: older woman with vitamin D deficiency, perioral/finger tingling and cramps, low calcium -> prolonged QT). Same scenario and learning point.",
'PAN10294':"Repeat of live END054 (fatigue, weight gain, cold intolerance, constipation, high TSH and low free T4 -> levothyroxine) and parked PAAKT054. Same scenario and learning point.",
}
NG145="Thyroid disease: assessment and management (NG145), NICE, 2019, updated 2023"
LABMED="Evaluation and management of adult hypoglycaemic disorders, Endocrine Society guideline 2009, summarised by the Association for Laboratory Medicine (UK), 2019"
S={
'PAN3625':dict(src="Nutrition support for adults: oral nutrition support, enteral tube feeding and parenteral nutrition (CG32), NICE, 2006, updated 2017",
  urls=["https://www.nice.org.uk/guidance/cg32/chapter/Recommendations"],
  edits={'options':{'B':"A heavy drinker aged 49 who has lost weight and barely eaten for a fortnight"}},
  issues="Key option was the longest (113 chars) and repeated almost word for word the patient in parked PAQ15968 (58-year-old alcohol-dependent man, nothing eaten for two weeks; a different learning point: phosphate monitoring). B rewritten shorter, with different details. Clinical content checked against NICE CG32 (high-risk criteria include little or no intake for more than 10 days, with alcohol misuse as a lesser criterion); the writer's pearl correction is accurate. Added Source line and sources. Overlap noted with parked PAAKT078 (anorexia, refeeding is the complication); that tests a different learning point, so the item is kept."),
'PAN3639':dict(src="Cushing's syndrome: symptoms, NHS website, 2025",
  urls=["https://www.nhs.uk/conditions/cushings-syndrome/symptoms/"],
  edits={'options':{'E':"Symmetrical proximal limb weakness"}},
  issues="Key was the longest option; shortened (same meaning). Content correct (NHS: muscle weakness particularly at the top of the arms and legs). Added Source and sources. Note for the reviewer: PAN10299 (u74-g03) also teaches that proximal myopathy is a feature of cortisol excess (it discriminates Cushing's from simple obesity). The scenario is different (diagnostic decision vs known Cushing's disease), so the item is kept, but the clinician may want only one of the pair."),
'PAN3622':dict(src="Emergency management of acute hypocalcaemia in adult patients, Society for Endocrinology, 2016",
  urls=["https://doaj.org/article/a7d7010a3f2440548523b44308e21e42","https://gloshospitals.nhs.uk/media/documents/Emergency_Guidance_Acute_Hypocalcaemia_in_Adults.pdf"],
  edits={'options':{'B':"Brudzinski's sign"},
         'why_wrong':"A. Chvostek's sign is twitching of the facial muscles when the facial nerve is tapped. B. Brudzinski's sign is reflex flexion of the hips and knees when the neck is flexed, seen in meningism. C. Murphy's sign is arrest of inspiration on palpating the gallbladder. D. Babinski's sign is an extensor plantar response from an upper motor neurone lesion."},
  issues="Key 'Trousseau's sign' was the longest option; distractor B changed from Kernig's to Brudzinski's sign (also a meningism sign) and why_wrong B updated. Content correct (SfE 2016 lists Trousseau's and Chvostek's signs; post-thyroidectomy hypoparathyroidism is the commonest hospital cause). Different learning point from the parked post-thyroidectomy items (they key hypocalcaemia; this one keys the name of the sign). Added Source and sources."),
'PAN3012':dict(src=NG145+"; Underactive thyroid: causes, NHS website, 2025",
  urls=["https://www.nhs.uk/conditions/underactive-thyroid-hypothyroidism/causes/","https://www.nice.org.uk/guidance/ng145/chapter/Recommendations"],
  edits={}, issues="Content correct (Hashimoto's is the main cause of hypothyroidism in the UK; NG145 says levothyroxine is first-line). No duplicate found (parked PAQ16069 keys hypothyroidism, PAAKT054 keys levothyroxine). Format only: added Source and sources."),
'PAN5759':dict(src="Atrial fibrillation: causes, NHS website, 2025; "+NG145,
  urls=["https://www.nhs.uk/conditions/atrial-fibrillation/causes/","https://www.nice.org.uk/guidance/ng145/chapter/Recommendations","https://www.nice.org.uk/guidance/ng196/chapter/Recommendations"],
  wc="Weight loss despite a good appetite, heat intolerance and a fine tremor are classic features of thyrotoxicosis, which increases sympathetic sensitivity and atrial excitability and is a recognised cause of new atrial fibrillation, particularly in older people. Thyroid function is therefore part of the routine work-up of new atrial fibrillation, and treating the thyrotoxicosis often allows sinus rhythm to return.",
  edits={}, issues="why_correct reworded: 'checked in all patients presenting with new AF' was stronger than the NICE AF guideline (NG196) says, so it now reads 'part of the routine work-up'. Otherwise correct. Kept in preference to PAN3646, which repeats it. Borderline overlap with parked PAQ15114/PAQ16070 (diagnose hyperthyroidism from classic symptoms); kept because the scenario and angle (an older patient presenting with new AF) differ. The clinician may judge otherwise. Added Source and sources."),
'PAN5180':dict(src=NG145,
  urls=["https://www.nice.org.uk/guidance/ng145/chapter/Recommendations"],
  edits={'options':{'C':"Radionuclide thyroid uptake scan"}},
  issues="Key was the longest option; shortened to 'Radionuclide thyroid uptake scan' (same meaning; why_correct still names technetium or radioiodine). Content consistent with NG145 (technetium scanning to define the cause of thyrotoxicosis when TRAbs are negative). No duplicate found (live BX519 asks for the nodule type, not the investigation). Added Source and sources."),
'PAN2076':dict(src="Primary care clinical referral criteria: nipple discharge and galactorrhoea, NHS Cornwall and Isles of Scilly, accessed 2026",
  urls=["https://rms.kernowccg.nhs.uk/primary_care_clinical_referral_criteria/primary_care_clinical_referral_criteria/breast_guidelines/nipple_discharge","https://www.nhs.uk/conditions/nipple-discharge/"],
  wc="Galactorrhoea is the discharge of milk from the breast unrelated to pregnancy or breastfeeding. Bilateral milky discharge from several ducts is typical. It should prompt a pregnancy test, a medication review, a serum prolactin and thyroid function tests.",
  edits={'options':{'B':"Mammary duct ectasia"},
         'why_wrong':"A. Mastalgia means breast pain, which she does not have. B. Mammary duct ectasia is a benign condition, usually after the menopause, causing a thick yellow, green or brown discharge from several ducts, not milk. D. Gynaecomastia is enlargement of male breast tissue. E. Mastitis is inflammation of the breast with pain, redness and warmth.",
         'exam_trap':"B, Mammary duct ectasia — it is a common benign cause of discharge from both breasts, but the discharge is thick and coloured rather than milky."},
  issues="Clinical correction: why_wrong B said duct ectasia discharge is 'usually from one nipple'; UK referral guidance says it is usually bilateral, from more than one duct, in postmenopausal women. Rewritten (why_wrong B and exam_trap). The key tied for longest with D; B lengthened to 'Mammary duct ectasia'. Thyroid function added to the work-up in why_correct. Added Source and sources. A vocabulary-level item, but no duplicate found."),
'PAN10295':dict(src=NG145+"; Overactive thyroid: treatment, NHS website, 2023",
  urls=["https://www.nice.org.uk/guidance/ng145/chapter/Recommendations","https://www.nhs.uk/conditions/overactive-thyroid-hyperthyroidism/treatment/","https://pubmed.ncbi.nlm.nih.gov/2349134/","https://niformulary.hscni.net/?p=2577"],
  edits={'pearl':"If a beta-blocker is contraindicated, a rate-limiting calcium-channel blocker such as diltiazem can be used for symptom control, usually on specialist advice."},
  issues="Content correct (beta-blocker for adrenergic symptoms while carbimazole takes effect; NG145 calls this supportive treatment). Pearl softened to add 'usually on specialist advice', because the evidence for diltiazem is limited and the UK formulary advice is specialist-led. No duplicate found. Added Source and sources."),
'PAN4940':dict(src="Diabetes (type 1 and type 2) in children and young people: diagnosis and management (NG18), NICE, 2015, updated 2023",
  urls=["https://www.nice.org.uk/guidance/ng18/chapter/Recommendations"],
  edits={'options':{'B':"Autoimmune destruction of pancreatic beta cells"}},
  issues="Key was the longest option; shortened (same meaning). Content correct (NG18: refer suspected type 1 diabetes the same day to the paediatric diabetes team). No duplicate found (parked PAQ972/PAPAED188 key referral; PAQ16148 keys the diagnosis). Added Source and sources."),
'PAN7279':dict(src="Type 2 diabetes: prevention in people at high risk (PH38), NICE, 2012, updated 2017",
  urls=["https://www.nice.org.uk/guidance/ph38/chapter/Recommendations","https://www.nhs.uk/conditions/type-2-diabetes/symptoms/"],
  edits={}, issues="Content correct (PH38: a second test is needed only when there are no symptoms; the pearl matches). Option lengths are fine. Borderline overlap with parked PAQ218 (61-year-old with thrush, thirst and a diabetic HbA1c -> type 2 diabetes). Kept because the angle here is type 2 vs type 1 (risk profile, no ketones), but the clinician may judge it a repeat. PAN8209 in this batch has been dropped as the closer repeat. Format only: added Source and sources."),
'PAN6725':dict(src="Type 2 diabetes: prevention in people at high risk (PH38), NICE, 2012, updated 2017",
  urls=["https://www.nice.org.uk/guidance/ph38/chapter/Recommendations","https://www.nhs.uk/conditions/type-2-diabetes/"],
  edits={}, issues="Content correct (PH38 names obesity as a risk condition and uses lower BMI thresholds for South Asian and Chinese people). A very easy item: all four distractors are protective factors and the stem mentions the rising waist. Acceptable at the Easy level. No duplicate found. Format only: added Source and sources."),
'PAN3619':dict(src=LABMED,
  urls=["https://labmed.org.uk/asset/A8C7F434-10D3-44C9-AB28555DC6F8ACFB","https://www.nhs.uk/conditions/low-blood-sugar-hypoglycaemia/"],
  wc="Adrenergic symptoms a few hours after a carbohydrate-rich meal, relieved by eating and never seen when fasting, suggest reactive (postprandial) hypoglycaemia, thought to reflect an exaggerated or delayed insulin response after the initial post-meal rise in glucose. Before the label is accepted, a low glucose should be documented during a typical episode (Whipple's triad), for example with a supervised mixed-meal test.",
  edits={'options':{'B':"Adrenal phaeochromocytoma"}},
  issues="Key was the longest option; distractor B lengthened to 'Adrenal phaeochromocytoma'. why_correct now adds that the diagnosis needs a documented low glucose during symptoms (Whipple's triad, mixed-meal test), because 'reactive hypoglycaemia' should not be diagnosed on symptoms alone (Endocrine Society 2009). Reviewer note: there is no UK national guideline on non-diabetic hypoglycaemia; the source is the Endocrine Society guideline as summarised by the UK Association for Laboratory Medicine. No duplicate found."),
'PAN3620':dict(src=LABMED,
  urls=["https://labmed.org.uk/asset/A8C7F434-10D3-44C9-AB28555DC6F8ACFB"],
  edits={'options':{'A':"Symptoms that consistently improve after eating, with no glucose measured",
                    'B':"Symptoms, a low glucose measured during them, and relief with glucose",
                    'C':"A low glucose on a single routine fasting sample, taken without any symptoms"},
         'exam_trap':"A, Symptoms that consistently improve after eating — this is what the patient reports, but without a measured low glucose it cannot confirm hypoglycaemia."},
  issues="The key (95 chars) was far longer than every other option, which cued it. Key tightened, and A and C lengthened (same meaning). exam_trap updated to match A. Content correct (Whipple's triad; the supervised 72-hour fast is the definitive test). Reviewer note: there is no UK national guideline; the source is the Endocrine Society guideline as summarised by the UK Association for Laboratory Medicine. No duplicate found (live END032 keys insulinoma)."),
'PAN249':dict(src="Hypercalcaemia in adult patients in secondary care, NHS Scotland Right Decisions, 2022; Emergency management of acute hypercalcaemia in adult patients, Society for Endocrinology, 2016",
  urls=["https://rightdecisions.scot.nhs.uk/media/2143/hypercalcaemia-in-adult-patients-in-secondary-care-13102022.pdf","https://doaj.org/article/6dea33c153d9469cb840422b379f251a"],
  edits={'stem':None},
  issues="Content correct (90% of hypercalcaemia is due to primary hyperparathyroidism or malignancy; a normal or raised PTH points to primary hyperparathyroidism, so a suppressed PTH points away from it). Stem: 'lost a stone in weight' (an imperial unit that IMG candidates may not know) changed to plain wording. Different learning point from parked PAN887 (known breast cancer -> hypercalcaemia of malignancy) and live BX085, because here the cause has to be reasoned from the suppressed PTH. Added Source and sources."),
}
assert set(D)|set(S)==set(ids) and not set(D)&set(S), (set(ids)-set(D)-set(S), set(D)&set(S))
rev=[];final=[]
for i in ids:
  q=json.loads(json.dumps(draft[i]))
  if i in D:
    rev.append({'id':i,'verdict':'drop','issues':D[i],'edits':{}}); continue
  s=S[i]; e={}
  for k,v in s['edits'].items():
    if k=='stem':
      new=q['stem'].replace('He has lost a stone in weight over two months.','He has lost weight without trying over the past two months.')
      assert new!=q['stem']; e['stem']=new
    elif k!='options': e[k]=v
  wc=s.get('wc',q['why_correct']).rstrip()
  if not wc.endswith('.'): wc+='.'
  e['why_correct']=wc+' Source: '+s['src']+'.'
  if 'options' in s['edits']:
    L=q['correct_letter']; opts=dict(q['options']); opts.update(s['edits']['options']); e['options']=opts
    e['correct_answer']=f"{L}. {opts[L]}"
  e['sources']=s['urls']
  for k,v in e.items(): q[k]=v
  rev.append({'id':i,'verdict':'fix','issues':s['issues'],'edits':e})
  final.append(q)
fid={q['id']:q for q in final}
final=[fid[q['id']] for q in json.load(open(B+'draft.json',encoding='utf-8')) if q['id'] in fid]
json.dump(rev,open(B+'rev/C.json','w',encoding='utf-8'),ensure_ascii=False,indent=1)
json.dump(final,open(B+'out/final.json','w',encoding='utf-8'),ensure_ascii=False,indent=1)
print(Counter(r['verdict'] for r in rev), len(final))
for q in final:
  print(q['id'], q['correct_letter'], {k:len(v) for k,v in q['options'].items()})
