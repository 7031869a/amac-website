import json,re,sys,glob,os
R='C:/Users/user/AppData/Local/Temp/claude/C--Users-user/c8269527-cc45-4897-aeab-239005307720/scratchpad/wt/'
cache=R+'_tools/plab-adaptation/work/u74-g12/work/C/corpus.json'
if not os.path.exists(cache):
  t=open(R+'plab1-questions.js',encoding='utf-8').read()
  a=t.index('['); b=t.rindex(']')
  live=json.loads(t[a:b+1])
  C=[]
  for q in live: C.append(('LIVE',q))
  for q in json.load(open(R+'_parked/plab1-adapted-awaiting-review.json',encoding='utf-8')): C.append(('PARK',q))
  for f in glob.glob(R+'_tools/plab-adaptation/work/u74-g*/draft.json'):
    g=os.path.basename(os.path.dirname(f))
    for q in json.load(open(f,encoding='utf-8')): C.append((g,q))
  C=[(s,{k:q.get(k) for k in ['id','presentation','stem','correct_answer','options','correct']}) for s,q in C]
  json.dump(C,open(cache,'w',encoding='utf-8'))
C=json.load(open(cache,encoding='utf-8'))
full='-f' in sys.argv; K='-k' in sys.argv; pats=[p for p in sys.argv[1:] if p not in('-f','-k')]
if pats and pats[0].startswith('id='):
  ids=pats[0][3:].split(',')
  for s,q in C:
    if q['id'] in ids: print(s,q['id'],'|',q['presentation'],'|',q.get('correct_answer') or q.get('correct'),'\n  ',q['stem'],'\n  ',q.get('options'),'\n')
  sys.exit()
for s,q in C:
  txt=' '.join(str(q.get(k) or '') for k in (['presentation','correct_answer','correct'] if K else ['presentation','stem','correct_answer','correct']))
  if all(re.search(p,txt,re.I) for p in pats):
    print(s,q['id'],'|',q['presentation'],'|',q.get('correct_answer') or q.get('correct'),'||',(q['stem'] if full else q['stem'][:160]).replace('\n',' '))
