import json,sys,re,glob,os,pickle
sys.stdout.reconfigure(encoding='utf-8')
cache='_tools/plab-adaptation/work/u74-g02/work/C/corpus.pkl'
if not os.path.exists(cache):
  t=open('plab1-questions.js',encoding='utf-8').read()
  live=json.loads(t[t.index('['):t.rindex(']')+1])
  un=json.load(open('_parked/plab1-adaptation-ii-unadapted.json',encoding='utf-8'))
  unids={q['id'] for q in (un if isinstance(un,list) else un.get('questions',[]))}
  C=[('LIVE',q) for q in live if q['id'] not in unids]
  pk=json.load(open('_parked/plab1-adapted-awaiting-review.json',encoding='utf-8'))
  pk=pk if isinstance(pk,list) else pk.get('questions',pk)
  C+=[('PARK',q) for q in pk]
  for f in glob.glob('_tools/plab-adaptation/work/u74-g*/draft.json'):
    g=f.split('/')[-2] if '/' in f else f
    g=re.search(r'u74-g\d+',f).group()
    if True:
      ids=set(json.load(open(f'_tools/plab-adaptation/work/{g}/ctx/check_ids.json')))
    else: ids=None
    for q in json.load(open(f,encoding='utf-8')):
      if ids is not None and q['id'] not in ids: continue
      C+=[(g,q)]
  pickle.dump((C,len(unids)),open(cache,'wb'))
C,n=pickle.load(open(cache,'rb'))
pats=sys.argv[1:]
for src,q in C:
  txt=' '.join(str(q.get(k,'')) for k in ['presentation','stem','correct_answer','why_correct'])
  if all(re.search(p,txt,re.I) for p in pats):
    print(f"[{src}] {q['id']} | {q.get('presentation')} | {q['stem'][:230].replace(chr(10),' ')} || KEY: {q['correct_answer'][:110]}")
