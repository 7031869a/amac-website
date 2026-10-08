# Re-check GMC labels on AKT questions (strict rule)

Reference list: /home/claude/mla-map/gmc-reference.txt (read it fully first).
C### = GMC conditions (429), P### = GMC patient presentations (220).

Each input row has a question (stem, answer, explanation) and its CURRENT labels. Decide the correct labels
under this HARD RULE, which replaces the old "pick the nearest entry" approach:

CONDITION — what the question primarily tests:
- A C### id if a GMC condition genuinely represents it. An umbrella entry that genuinely INCLUDES the disease
  is correct (Crohn disease -> Inflammatory bowel disease; migraine -> Primary headache disorders;
  oesophageal rupture -> Gastrointestinal perforation; rotator cuff tear -> Soft tissue injury).
- "X" (no exact GMC entry) if the question tests a specific condition that is NOT on the GMC list and no
  entry genuinely includes it. Do NOT force a neighbour. Examples: adjustment disorder is NOT acute stress
  reaction -> X; aspiration is NOT lower respiratory tract infection -> X; tropical eosinophilia from
  parasites is NOT "Abnormal blood film" -> X; Gilbert syndrome is NOT "Incidental finding" unless the
  question is genuinely about managing an incidental finding.
- Label what is TESTED, not background: dysphagia + weight loss in a man with a known small hiatus hernia,
  answer cancer-pathway endoscopy -> Oesophageal cancer, NOT Hiatus hernia.
- An unconfirmed/reported drug allergy is NOT "Adverse drug effects" -> X.
- "NONE" if the question tests no clinical condition (ethics, law, statistics, communication, professional
  practice, pure basic science with no disease).

PRESENTATION — how the patient presents in the stem:
- A P### id if a GMC presentation genuinely represents it. Prefer the actual presenting feature over a broad
  setting (a warty penile lump -> Skin lesion, NOT "Urethral discharge and genital ulcers/warts").
- "X" if there is a presentation but no GMC entry accurately represents it (e.g. an oral aphthous ulcer is
  not a "Skin ulcer" or "Skin lesion" -> X). Do not force an anatomically or clinically inaccurate entry.
- "NONE" if there is no patient presentation at all (abstract knowledge question).

Keep the current label when it is correct or genuinely defensible. Change it only when it is wrong or a
forced neighbour. Equally defensible alternatives: keep current.

Output one JSON object per line, every input id exactly once, same order:
{"id":"...","condition":"C123"|"X"|"NONE","presentation":"P045"|"X"|"NONE","changed":true|false,"reason":"<=15 words, only if changed"}
Keep working files ONLY in your own folder /home/claude/mla-map/recheck/work_<batch>/. Judge every stem yourself; no keyword scripts.
Then run: python3 /home/claude/mla-map/recheck/validate.py <input> <output>  and fix until exit 0.
Reply only with the validator line and counts: changed conditions, changed presentations, X conditions, X presentations.
