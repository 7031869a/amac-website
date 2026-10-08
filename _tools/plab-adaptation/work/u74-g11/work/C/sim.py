import json,re,glob,math,collections
s=open('plab1-questions.js',encoding='utf-8').read()
live=json.loads(s[s.index('['):s.rindex(']')+1])
park=json.load(open('_parked/plab1-adapted-awaiting-review.json',encoding='utf-8'))
other=[]
for f in glob.glob('_tools/plab-adaptation/work/u74-g*/draft.json'):
  g=f.replace(chr(92),'/').split('/')[-2]
  if g=='u74-g11': continue
  for q in json.load(open(f,encoding='utf-8')): q['_b']='OTHER:'+g; other.append(q)
for q in live: q['_b']='LIVE'
for q in park: q['_b']='PARK'
allq=live+park+other
B='_tools/plab-adaptation/work/u74-g11'
mine=json.load(open(B+'/work/C/subset.json',encoding='utf-8'))
tok=lambda q:re.findall(r'[a-z]{4,}',(q.get('presentation','')+' '+q.get('stem','')+' '+q.get('correct_answer','')+' '+q.get('correct_answer',''))
.lower())
df=collections.Counter()
docs=[collections.Counter(tok(q)) for q in allq]
for d in docs: df.update(set(d))
N=len(docs)
def vec(c): 
  v={t:(1+math.log(n))*math.log(N/(1+df.get(t,0))) for t,n in c.items()}
  nm=math.sqrt(sum(x*x for x in v.values())) or 1
  return {t:x/nm for t,x in v.items()}
V=[vec(d) for d in docs]
for m in mine:
  mv=vec(collections.Counter(tok(m)))
  sc=sorted(((sum(mv.get(t,0)*x for t,x in v.items()),i) for i,v in enumerate(V)),reverse=True)[:6]
  print('##',m['id'],m['presentation'])
  for s_,i in sc:
    q=allq[i]
    if q['id']==m['id']: continue
    print('   %.2f %s %s | %s => %s'%(s_,q['_b'],q['id'],q.get('presentation'),str(q.get('correct_answer'))[:70]))
