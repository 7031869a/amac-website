import json, sys, os
B = sys.argv[1]
sys.path.insert(0, B + '/work/C')
from drops import DROPS
from fixes import F, I
d = json.load(open(B + '/draft.json', encoding='utf-8'))
ids = json.load(open(B + '/ctx/check_ids.json'))
assert set(ids) == set(DROPS) | set(F), (set(ids) - set(DROPS) - set(F), (set(DROPS) | set(F)) - set(ids))
assert not set(DROPS) & set(F)
# sanity: thinking separator in draft
sep = None
rev, final = [], []
for q in d:
    i = q['id']
    if i not in ids:
        continue
    if i in DROPS:
        rev.append({"id": i, "verdict": "drop", "issues": DROPS[i], "edits": {}})
        continue
    e = F[i]
    rev.append({"id": i, "verdict": "fix", "issues": I[i], "edits": e})
    n = dict(q)
    for k, v in e.items():
        if k == 'options':
            o = dict(n['options']); o.update(v); n['options'] = o
        else:
            n[k] = v
    final.append(n)
os.makedirs(B + '/rev', exist_ok=True)
os.makedirs(B + '/out', exist_ok=True)
json.dump(rev, open(B + '/rev/C.json', 'w', encoding='utf-8', newline='\n'), ensure_ascii=False, indent=1)
json.dump(final, open(B + '/out/final.json', 'w', encoding='utf-8', newline='\n'), ensure_ascii=False, indent=1)
print(len(rev), 'rev;', len(final), 'final;', sum(r['verdict'] == 'drop' for r in rev), 'drops')
for q in final:
    L = q['correct_letter']; lens = {k: len(v) for k, v in q['options'].items()}
    print(q['id'], L, lens)
