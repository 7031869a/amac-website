import json,copy,os
os.chdir(os.path.dirname(os.path.abspath(__file__)))
exec(open('edits.py',encoding='utf-8').read())
B='../../'
draft=json.load(open(B+'draft.json',encoding='utf-8'))
ids=json.load(open(B+'ctx/check_ids.json',encoding='utf-8'))

DROP={
'PAN716':"Duplicate: same scenario and learning point (conscious, able-to-swallow hypoglycaemia on a ward -> oral fast-acting carbohydrate) as held PAQ15997 (ward, gliclazide, alert, swallowing) and PAN215 in _parked/plab1-adapted-awaiting-review.json; also u74-g02 PAN5573 covers the same point.",
'PAN936':"Duplicate of live END051 (70-year-old man, small-cell lung cancer, asymptomatic euvolaemic SIADH -> fluid restriction; near-identical scenario) and live END021 (asymptomatic SIADH -> fluid restriction).",
'PAN5391':"Duplicate learning point of live CR046 and CR056 (euvolaemic hyponatraemia + inappropriately concentrated urine = SIADH), plus held PAAKT061/PAQ14749. Candidate only reverses the direction of the same fact.",
'PAN7583':"Duplicate of live BX862 (raised TSH + low free T4 = primary hypothyroidism) and live CR015 (hypothyroid symptoms with high TSH/low FT4 -> primary hypothyroidism). BX one-line rule applies; candidate tests the same fact.",
'PAN8946':"Duplicate of live BX922 (painless punched-out ulcer under first metatarsal head in diabetic with numb feet -> neuropathic ulcer) and held PAQ16060 (same scenario with callus, good pulses, monofilament loss -> neuropathic ulcer).",
'PAN2196':"Duplicate of held PAN3921 (hypercalcaemia in cancer patient -> 'Passing large volumes of urine', identical key text and learning point); also live/held hypercalcaemia symptom items PAQ15966, PAN7529.",
'PAN3923':"Duplicate of held PAQ14747 (young man with vitiligo, pigmented palmar creases, postural drop, low Na/high K -> Addison's) and held PAQ15530 (same picture -> Addison's).",
'PAN7428':"Duplicate of held PAN4385 (known primary adrenal insufficiency, missed medication -> adrenal crisis diagnosis) and held PAQ15416 (Addison's, unable to take tablets -> adrenal crisis); live ACU050 also uses the same scenario (stopped steroids -> crisis).",
'PAN762':"Duplicate of live END081 (adrenal insufficiency on hydrocortisone with febrile illness -> double dose, parenteral if vomiting) and held PAQ882 (fever, no vomiting, asks about steroid tablets -> double dose, seek help if vomiting; near-identical phone-call scenario).",
'PAN7426':"Repeat of the learning point 'symptomatic hypoglycaemia, able to swallow -> fast-acting oral carbohydrate first' already held as PAQ15997 and PAN215 (and drafted again as u74-g02 PAN5573 and this batch's PAN716). Absence of diabetes does not change the scenario's learning point. Human reviewer may overrule if a 'treat before investigating insulinoma' angle is wanted.",
'PAN10297':"Intra-batch duplicate of PAN6123 (this batch): both are suspected primary adrenal insufficiency (pigmentation, postural drop) asking which electrolyte result is typical. PAN6123 (hyperkalaemia) kept as the more discriminating version.",
'PAN3922':"Duplicate of u74-g02 PAN7965 (elderly woman with vitamin D deficiency, perioral numbness, cramps, low calcium -> prolonged QT; near-identical) and held PAQ647 (prolonged QT with tetany -> hypocalcaemia, same fact). If the g02 checker drops PAN7965 against this item, PAQ647 still covers it.",
'PAN2038':"Repeat of live BX086 (cramps and arrhythmia after prolonged diarrhoea with low magnesium -> hypomagnesaemia): same fact (hypomagnesaemia causes neuromuscular irritability and arrhythmias). BX one-line rule applies.",
'PAN6493':"Duplicate of held PAQ16069 (woman with heavier periods, weight gain, constipation, cold intolerance -> hypothyroidism).",
'PAN1141':"Duplicate of held PAN10312 (patient puzzled that a single glucose was fine; HbA1c reflects average glucose over about 2-3 months) - same scenario and fact, reversed question.",
'PAN10318':"Repeat of held PAQ15409 (annual review, monofilament loss, unnoticed plantar ulcer -> loss of protective sensation from neuropathy) and close to u74-g02 PAN6277/PAN1887; same scenario and fact reversed. Draft also had implausible distractors (migraine, appendicitis).",
}
ISS={
'PAN251':"reinstated: partner g02 PAN8340 dropped. Full recheck: content correct per NICE NG145 1.2.8 (TSH alone first when pituitary disease not suspected, FT4 added if TSH abnormal); Source line and sources added; option lengths already valid (key not longest). Repeat check: no live or held item tests TSH-first for suspected hypothyroidism. Reviewer note: kept u74-g03 PAN9787 (suspected HYPERthyroidism -> TSH first) shares the 'TSH is the first-line test' point in a different scenario; judged not a repeat under the same-scenario-and-learning-point rule, but close.",
'PAN5865':"reinstated: partner g02 PAN6277 dropped. Full recheck: advice correct (daily inspection, footwear, avoid barefoot, no corn remedies, no self-paring, test water with elbow/thermometer) per NG19 1.3.13 and NHS trust foot-care leaflets. Key was longest (55 vs 47); options reworded to third person with distractors lengthened so the key is no longer longest. Source line and sources added. Repeat check: no live or held item tests daily self-care advice; held PAQ15409 (ulcer mechanism) and kept PAN7947 in this batch (annual professional foot risk assessment) have different learning points, though PAN7947 shares similar distractors.",
'PAN6678':"Format/source fix. Key was joint-longest; shortened. Removed the patient's first name (Priya). why_correct: replaced 'NICE recommends ACR at least annually' with wording NG203 supports (ACR for everyone with diabetes, part of annual review). No dup found (BX512/BX079 test different points).",
'PAN7947':"Pearl corrected: draft said spreading infection/ischaemia/new ulcer all need referral within 1 working day; NG19 says limb-threatening problems need immediate referral and other active problems within 1 working day. Source added. No dup found; u74-g02 PAN6277 is a different angle (self-care after loss of sensation).",
'PAN1885':"Key was longest; shortened. Source added. Overlap note for reviewer: live BX233 asks which complication diabetic eye screening detects; this item tests that retinopathy is silent with normal vision - judged a different learning point, but close.",
'PAN10323':"Age changed 16 -> 19 so adult JBDS DKA guidance applies (under-18s follow BSPED paediatric DKA guidance). Source added. No dup found.",
'PAN925':"Stem figure 5.8 mmol/L softened to 'above the upper limit of normal' (not needed). Key was longest; shortened. why_wrong B: removed 'or very high levels' for calcium gluconate, now ECG-changes wording. Source JBDS 2023 (confirms high serum K with low total body K). Distinct from live END075 (K replacement when K is low).",
'PAN926':"Source added (JBDS 2023 lists suppression of ketogenesis as the main insulin effect). Content correct.",
'PAN6732':"Source added. Distinct from live GAS111 (gastroparesis) and PMG068 (doxazosin and postural hypotension).",
'PAN1884':"Clinical correction. Draft key 'Stop driving now, explain his legal duty to follow DVLA rules on notification' was vague, and its pearl misquoted DVLA (said test 'no more than 2 hours before driving' and 'do not drive below 5 without eating'). The DVLA rule that makes notification mandatory is severe hypoglycaemia (needing another person's help) while driving, so the vignette now has a passer-by helping him. Driver made a car (Group 1) driver to avoid van-weight/Group 2 ambiguity. Key shortened (was 133 chars, longest); distractors rewritten to similar length; why_wrong, pearl, thinking, exam_trap, takeaway rewritten. Distinct from live PMG069 (impaired awareness).",
'PAN6109':"Source added (SfE hypercalcaemia guidance lists shortened QT). Removed 'bradycardia' claim from why_correct. No dup found.",
'PAN3635':"Source added. No dup found.",
'PAN4938':"Key was longest; shortened. Stem figure 116 mmol/L softened to 'very low'. why_correct now says vomiting = severe symptoms needing hypertonic saline (SfE). Reviewer note: held PAQ16256 (MDMA water intoxication -> seizure marks cerebral oedema) shares the cerebral-oedema learning point in a different scenario; judged not a repeat, but close.",
'PAN5392':"Figures softened (sodium 108 and 18 mmol/L rise) to 'profoundly low' and 'far faster than the recommended limit' - the key does not need them. Source added. No dup found.",
'PAN6721':"Source added (NICE NG243 2024). Close to PAN6123 in this batch but asks a different thing (which hormone), so kept.",
'PAN1363':"Key was longest (90 chars); tightened. why_correct now mentions senior decision on hypertonic saline. Reviewer note: confusion counts as a moderately severe symptom in SfE guidance, where hypertonic saline may be needed; option E stays wrong only because it aims to normalise sodium within 24 hours. Partial overlap with live NEP044 (assess fluid status first).",
'PAN6171':"Source added (BTF; NG145 on radioiodine worsening TED). Reviewer note: live END043 (mild TED management -> smoking cessation, lubricants, selenium) shares the smoking fact; judged a different question (risk factor vs management) but close.",
'PAN1886':"why_correct sharpened to NG19 wording (refer within 1 working day; immediate referral if limb-threatening). Source added. Distinct from live END030 (infected foot).",
'PAN2078':"Source added. No dup found.",
'PAN8943':"Distractors rewritten: 'Renal colic in every patient' and 'Cataract in every patient' gave the answer away, and 'Acute appendicitis' was absurd. Key was longest; shortened. why_wrong and exam_trap rewritten to match. Source added.",
'PAN3638':"Source added. No dup found (live/held phaeo items test diagnosis, metanephrines or alpha-blockade).",
'PAN3984':"Source added (UK clinical reference; no NICE/CKS page on primary aldosteronism was reachable - CKS is geo-blocked here). Physiology is standard. No dup found.",
'PAN4395':"Source added (same caveat as PAN3984). No dup found.",
'PAN9357':"Source added (same caveat as PAN3984). No dup found.",
'PAN10311':"Source added (SfE acute hypocalcaemia guidance, NHS trust copy). No dup found; live END024/END052 mention the sign but test management.",
'PAN6123':"Source added (NICE NG243). Kept over PAN10297 (intra-batch duplicate).",
'PAN5771':"Source added. Reviewer note: live CR061 (raised anion gap acidosis -> DKA as a cause) tests the same association in reverse; kept because the angle differs, but close.",
'PAN1460':"Key was longest (85 chars); tightened. why_correct reworded to NG28 1.5.3-1.5.4 (investigate discrepancy; use glucose profiles or fructosamine). Source added.",
'PAN3643':"Source added (NG145: measure TSH and FT4 when pituitary disease suspected). No dup found.",
}
rev=[];final=[]
for q in draft:
  i=q['id']
  if i not in ids: continue
  if i in DROP:
    rev.append(dict(id=i,verdict='drop',issues=DROP[i],edits={})); continue
  ed=copy.deepcopy(E[i]); n=copy.deepcopy(q)
  for k,v in ed.items():
    if k=='options': n['options'].update(v)
    else: n[k]=v
  L=n['correct_letter']; n['correct_answer']=f"{L}. {n['options'][L]}"
  if 'options' in ed and L in ed['options']: ed['correct_answer']=n['correct_answer']
  rev.append(dict(id=i,verdict='fix',issues=ISS[i],edits=ed))
  final.append(n)
assert len(rev)==len(ids), (len(rev),len(ids))
json.dump(rev,open(B+'rev/C.json','w',encoding='utf-8',newline=''),ensure_ascii=False,indent=1)
json.dump(final,open(B+'out/final.json','w',encoding='utf-8',newline=''),ensure_ascii=False,indent=1)
from collections import Counter
print(Counter(r['verdict'] for r in rev), len(final))
for n in final:
  L=n['correct_letter']; print(n['id'], {k:len(v) for k,v in n['options'].items()}, 'key',L)
