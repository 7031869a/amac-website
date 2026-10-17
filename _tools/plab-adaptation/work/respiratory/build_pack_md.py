import json, re, collections

B = '_tools/plab-adaptation/work/respiratory/'
fin = json.load(open(B + 'final.json', encoding='utf-8'))
skips = [q for q in json.load(open(B + 'skips_all.json', encoding='utf-8')) if q['skip']]
drops = json.load(open(B + 'checker_drops.json', encoding='utf-8'))
retire = json.load(open(B + 'ctx/retire.json', encoding='utf-8'))
rev = json.load(open(B + 'rev_all.json', encoding='utf-8'))
swaps = json.load(open(B + 'letter_swaps.json'))
t = open('plab1-questions.js', encoding='utf-8').read()
live, _ = json.JSONDecoder().raw_decode(t, t.index('['))
L = {q['id']: q for q in live}
src = {x['live_plab_copy']['source_akt_id']: x['live_plab_copy']
       for x in json.load(open(B + 'ctx/source.json', encoding='utf-8'))}
hold_ids = {'PAN4778', 'PAN804', 'PAN984', 'PAN1410', 'PAN9320', 'PAN6904', 'PAN7129'}
dupskips = [q for q in skips if q['id'] not in hold_ids]
holds = [q for q in skips if q['id'] in hold_ids]
checker_drops = [x for x in drops if x['checker'] != 'pack review']
pack_drops = [x for x in drops if x['checker'] == 'pack review']
rep = {x['id']: x['replaces'] for x in json.load(open(B + 'ctx/plan.json', encoding='utf-8'))}
near = {}
for r in rev:
    for n in r.get('near_checked', []):
        if isinstance(n, str):
            n = {'id': n}
        near.setdefault(r['id'], {})[n['id']] = n
flag = {
    'PAN4499': 'Low-level terminology item (haemoptysis); the writer notes the owner may prefer to keep the live copy.',
    'PAN4490': 'Overlaps live BX266 (heart failure, bibasal dullness, key pleural effusions) but tests the mechanism, so the keys differ (C3). Shares the heart-failure effusion topic with PAN1946, which tests management.',
    'PAN4505': 'Weak item: the distractors are normal findings stated in the stem. Unambiguous, so kept (C2).',
    'PAN4686': 'Technique cited as standard teaching; no guideline page could be fetched (C2).',
    'PAN7070': 'BTS pleural guideline could not be fetched (403); cited from secondary summaries (C3).',
    'PAN356': 'Standard radiology teaching; no guideline applies.',
}
out = []
w = out.append
written = len(fin) + len(drops)
L2 = collections.Counter(q['correct_letter'] for q in fin)
lg = sum(len(q['options'][q['correct_letter']]) == max(map(len, q['options'].values())) for q in fin)
sh = sum(len(q['options'][q['correct_letter']]) == min(map(len, q['options'].values())) for q in fin)
w('# PLAB 1 Adaptation II: Respiratory review pack')
w('')
w('Review pack only. Not live, no PR, plab1-questions.js, _parked, counts and pages untouched. Branch plab1-adaptation-respiratory-review, built from main c817c29 (PLAB 1 bank 5,999; _parked 2,631; integrity 473). 18 October 2026.')
w('')
w('## 1. Counts')
w('')
w('| Stage | Count |')
w('|---|---|')
rows = [
    ('Candidates (Respiratory, not dropped_review_dup)', 168),
    ('Pre-screen repeats of live questions', len(retire)),
    ('Sent to writers', 159),
    ('Writer skips: duplicate of a live or in-batch item', len(dupskips)),
    ('Writer declines: movable threshold, terminology-only or weak key (Appendix B)', len(holds)),
    ('Written', written),
    ('Checker drops (3 checkers)', len(checker_drops)),
    ('Pack-review drops (within-pack duplicates)', len(pack_drops)),
    ('**IN PACK (section 3)**', len(fin)),
]
assert 168 - len(retire) == 159 and 159 - len(dupskips) - len(holds) == written
for a, b in rows:
    w(f'| {a} | {b} |')
w('')
w(f'**Funnel:** 168 candidates -> {written} written -> {len(fin)} in pack.')
w('')
w('**Answer-letter spread of the pack:** ' + ', '.join(f'{l} {L2[l]}' for l in 'ABCDE')
  + f'. The key is the longest option in {lg} of {len(fin)} items and the shortest in {sh}. '
  + f'Letters were pre-balanced in the plan (159 items); after skips and drops they were evened by swapping option positions only ({len(swaps)} items: {", ".join(swaps)}); wording unchanged.')
w('')
w('**Checks:** validate.py OK (including key longest/shortest <= 25%). No ID clash with the live bank; highest stem similarity to any live question 73% (rapidfuzz token_set_ratio, threshold 85). Each checker searched the live bank for every item by learning point, scenario and keyed answer; the closest live items are listed per item. 17 of the 168 candidates (UQ-prefixed) have no AKT original in the live AKT bank; they were adapted from the parked copy alone.')
w('')
w('**Citations:** NICE CKS (403) and BTS/Thorax (403) could not be fetched from this environment. Pages checked by writers and checkers: NICE NG158 (VTE, 1.1.17-1.1.18), NG115 (COPD, 1.1.5), NG250 (pneumonia, CURB65 Box 2), NG12 (1.1.1), HSE silicosis, NHS asbestosis and sleep apnoea. Statements not backed by a fetched page are labelled as standard teaching.')
w('')
w('**Label for every item:** 2026 UKMLA Adaptation II — adapted (Oct 2026). Domain/system: Respiratory.')
w('')
w('## 2. Dropped items (with the live or pack ID they duplicate)')
w('')
w(f'### 2.1 Checker drops ({len(checker_drops)})')
w('')
for x in checker_drops:
    w(f"- **{x['id']}** ({x['checker']}): {x['issues'].strip()}")
w('')
w(f'### 2.2 Pack-review drops: within-pack duplicates ({len(pack_drops)})')
w('')
for x in pack_drops:
    w(f"- **{x['id']}**: {x['issues'].strip()}")
w('')
w(f'### 2.3 Writer skips: duplicates ({len(dupskips)})')
w('')
for q in dupskips:
    w(f"- **{q['id']}**: {q['notes'].strip()}")
w('')
w(f'## 3. Items in the pack ({len(fin)})')
w('')
for n, q in enumerate(fin, 1):
    w(f"### {n}. {q['id']}: {q['presentation']}")
    w('')
    w(f"- **Item ID:** {q['id']}  |  **Source ID:** {q['source_akt_id']} (parked copy: {rep[q['id']]})  |  **Difficulty:** {q['difficulty']}")
    w('')
    vig, qq = q['stem'].split('\n\n', 1)
    w(f"**Stem:** {vig}")
    w('')
    w(qq)
    w('')
    for l in 'ABCDE':
        mark = '**' if l == q['correct_letter'] else ''
        w(f"- {mark}{l}. {q['options'][l]}{mark}")
    w('')
    w(f"**Key:** {q['correct_answer']}")
    w('')
    w(f"**Why correct:** {q['why_correct']}")
    w('')
    w(f"**Why the others are wrong:** {q['why_wrong']}")
    w('')
    w(f"**Pearl:** {q['pearl']}")
    w('')
    w(f"**Exam trap:** {q['exam_trap']}")
    w('')
    w(f"**Takeaway:** {q['takeaway']}")
    w('')
    srcs = [s for s in q['sources'] if isinstance(s, str)]
    if srcs:
        w('**Sources opened/carried:** ' + '; '.join(srcs))
        w('')
    w('**Closest live items by learning point:**')
    w('')
    nn = near.get(q['id'], {})
    if not nn:
        w('- none recorded')
    for i, nd in nn.items():
        lq = L.get(i)
        key = nd.get('key') or (lq['options'][lq['correct_letter']] if lq else '?')
        same = nd.get('same')
        tag = '' if same is None else (' (same learning point)' if same else ' (different learning point)')
        w(f"- **{i}**{tag}: key \"{key}\"")
    w('')
    if q['id'] in flag:
        w(f"**Reviewer note:** {flag[q['id']]}")
        w('')
    w('Verdict: [ ] APPROVE   [ ] EDIT   [ ] REJECT      Comment: ____________')
    w('')
w('## Appendix A: pre-screen repeats (' + str(len(retire)) + ')')
w('')
for r in retire:
    w(f"- **{r['parked_id']}** ({src[r['source_akt_id']]['presentation']}): live {', '.join(r['matching_ids'])}")
w('')
w(f'## Appendix B: writer declines / holds ({len(holds)})')
w('')
w('Declined because the key hinges on a movable threshold, the item is terminology-only, or the key is weak. Most also overlap a live item, as the notes say. A reviewer may reverse these.')
w('')
for q in holds:
    w(f"- **{q['id']}**: {q['notes'].strip()}")
w('')
open('review-packs/plab1-adaptation-ii-respiratory.md', 'w', encoding='utf-8', newline='\n').write('\n'.join(out))
