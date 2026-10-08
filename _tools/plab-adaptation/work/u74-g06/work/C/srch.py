import json,re,sys,glob
sys.stdout.reconfigure(encoding='utf-8')
t=open('plab1-questions.js',encoding='utf-8').read()
live=json.loads(t[t.index('['):t.rindex(']')+1])
park=json.load(open('_parked/plab1-adapted-awaiting-review.json',encoding='utf-8'))
other=[]
for f in glob.glob('_tools/plab-adaptation/work/u74-g*/draft.json'):
    if 'u74-g06' in f: continue
    for q in json.load(open(f,encoding='utf-8')):
        if not q.get('skip'): q['_f']=f.split('/')[-2]; other.append(q)
pats=sys.argv[1:]
for name,bank in [('LIVE',live),('PARK',park),('U74',other)]:
    for q in bank:
        txt=' '.join([q.get('presentation',''),q.get('stem',''),q.get('correct_answer','')])
        if all(re.search(p,txt,re.I) for p in pats):
            print(name,q.get('_f',''),q['id'],'|',q.get('presentation'),'|',q['stem'][:160].replace('\n',' '),'|| KEY:',q.get('correct_answer','')[:120])
