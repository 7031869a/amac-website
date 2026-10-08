import json,sys,glob
sys.stdout.reconfigure(encoding='utf-8')
t=open('plab1-questions.js',encoding='utf-8').read()
bank={q['id']:q for q in json.loads(t[t.index('['):t.rindex(']')+1])}
for q in json.load(open('_parked/plab1-adapted-awaiting-review.json',encoding='utf-8')): bank.setdefault(q['id'],q)
for f in glob.glob('_tools/plab-adaptation/work/u74-g*/draft.json'):
    for q in json.load(open(f,encoding='utf-8')): bank.setdefault(q['id'],q)
for i in sys.argv[1:]:
    q=bank.get(i)
    if not q: print(i,'NOT FOUND'); continue
    print('--',i,'|',q.get('presentation'),'|',q['stem'].replace('\n',' '),'|| KEY:',q['correct_answer'],'|| OPTS:',list(q['options'].values()))
