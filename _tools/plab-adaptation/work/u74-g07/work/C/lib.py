import json,re,glob
W='_tools/plab-adaptation/work/'
def live():
    t=open('plab1-questions.js',encoding='utf-8').read()
    t=t[t.index('['):t.rindex(']')+1]
    return json.loads(t)
L=live()
P=json.load(open('_parked/plab1-adapted-awaiting-review.json',encoding='utf-8'))
if isinstance(P,dict): P=P.get('questions',list(P.values()))
D=[]
for f in glob.glob(W+'u74-g*/draft.json'):
    if 'u74-g07' in f: continue
    for q in json.load(open(f,encoding='utf-8')): q['_src']=f.split('/')[-2]; D.append(q)
ALL=[('LIVE',q) for q in L]+[('PARK',q) for q in P]+[(q['_src'],q) for q in D]
def search(*pats,show=False):
    for tag,q in ALL:
        txt=' '.join(str(q.get(k,'')) for k in ['presentation','stem','correct_answer'])
        if all(re.search(p,txt,re.I) for p in pats):
            print(f"[{tag}] {q['id']} | {q.get('presentation')} | KEY: {q.get('correct_answer')}")
            if show: print('    ',q['stem'][:400].replace('\n',' '))
IDX={}
for tag,q in ALL: IDX.setdefault(q['id'],(tag,q))
def show(*ids):
    for i in ids:
        if i not in IDX: print('??',i); continue
        tag,q=IDX[i]
        print(f"[{tag}] {i} | {q.get('presentation')}\n   {q['stem'][:600]}\n   KEY: {q.get('correct_answer')}")
