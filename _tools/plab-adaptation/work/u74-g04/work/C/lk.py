import json,re,sys,glob,os
R='C:/Users/user/AppData/Local/Temp/claude/C--Users-user/c8269527-cc45-4897-aeab-239005307720/scratchpad/wt/'
t=open(R+'plab1-questions.js',encoding='utf-8').read()
t=t[t.index('['):t.rstrip().rstrip(';').rindex(']')+1]
live=json.loads(t)
park=json.load(open(R+'_parked/plab1-adapted-awaiting-review.json',encoding='utf-8'))
if isinstance(park,dict): park=park.get('questions',list(park.values()))
dr=[]
for f in glob.glob(R+'_tools/plab-adaptation/work/u74-g*/draft.json'):
  g=os.path.basename(os.path.dirname(f))
  if 'g04' in f: continue
  for q in json.load(open(f,encoding='utf-8')): q['_g']=g; dr.append(q)
ALL=[('L',q) for q in live]+[('P',q) for q in park]+[('D',q) for q in dr]
def short(src,q):
  return f"[{src}{q.get('_g','')}] {q['id']} | {q.get('presentation')} | KEY: {q.get('correct_answer')}"
mode=sys.argv[1]
if mode=='id':
  for i in sys.argv[2:]:
    for s,q in ALL:
      if q['id']==i: print(short(s,q)); print('   STEM:',q['stem'].replace('\n',' ')); print('   OPTS:',' | '.join(f"{k}:{v}" for k,v in q['options'].items()))
else:
  pat=re.compile(sys.argv[2],re.I)
  for s,q in ALL:
    txt=' '.join([str(q.get('presentation','')),q.get('stem','') if mode=='s' else '',str(q.get('correct_answer',''))])
    if pat.search(txt): print(short(s,q))
if mode=='p':
  pass
