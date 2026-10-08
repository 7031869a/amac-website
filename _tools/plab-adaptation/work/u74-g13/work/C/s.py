import json,re,sys,glob
sys.stdout.reconfigure(encoding='utf-8')
def load():
    t=open('plab1-questions.js',encoding='utf-8').read()
    t=t[t.index('['):t.rindex(']')+1]
    live=json.loads(t)
    pk=json.load(open('_parked/plab1-adapted-awaiting-review.json',encoding='utf-8'))
    if isinstance(pk,dict): pk=pk.get('questions',list(pk.values()))
    drafts=[]
    for f in glob.glob('_tools/plab-adaptation/work/u74-g*/draft.json'):
        if 'g13' in f: continue
        for q in json.load(open(f,encoding='utf-8')):
            q=dict(q); q['_src']=f.replace(chr(92),'/').split('/')[-2]; drafts.append(q)
    return [('LIVE',q) for q in live]+[('PARK',q) for q in pk]+[('DRAFT:'+q['_src'],q) for q in drafts]
A=load()
mode=sys.argv[1]
if mode=='id':
    for w,q in A:
        if q.get('id') in sys.argv[2:]:
            print('==',w,q['id'],q.get('presentation'));print(q['stem']);print(q.get('options'));print('KEY',q.get('correct_answer'));print('WHY',q.get('why_correct','')[:400]);print()
else:
    pats=[re.compile(p,re.I) for p in sys.argv[2:]]
    for w,q in A:
        txt=' '.join(str(q.get(k,'')) for k in ['presentation','stem','correct_answer'])
        if all(p.search(txt) for p in pats):
            print(w,q['id'],'|',q.get('presentation'),'|',q['stem'][:160].replace('\n',' '),'| KEY:',q.get('correct_answer'))
