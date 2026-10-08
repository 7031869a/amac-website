import json,re,glob,sys
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
B='_tools/plab-adaptation/work/u74-g09/'
s=open('plab1-questions.js',encoding='utf-8').read()
s=s[s.index('['):s.rindex(']')+1]
live=json.loads(s)
copies=set()
for f in glob.glob('_tools/plab-adaptation/work/u74-g*/ctx/source.json'):
  for x in json.load(open(f,encoding='utf-8')): copies.add(x['live_plab_copy']['id'])
corp=[]
for q in live:
  if q['id'] in copies: continue
  corp.append(('LIVE',q))
for q in json.load(open('_parked/plab1-adapted-awaiting-review.json',encoding='utf-8')): corp.append(('PARK',q))
for f in glob.glob('_tools/plab-adaptation/work/u74-g*/draft.json'):
  for q in json.load(open(f,encoding='utf-8')):
    if q.get('skip'): continue
    corp.append((f.replace(chr(92),'/').split('/')[-2],q))
mine=json.load(open(B+'work/C/checked_orig.json',encoding='utf-8'))
txt=lambda q:(q.get('presentation','')+' ')*2+q.get('stem','')+' '+(q.get('correct_answer','')+' ')*2
V=TfidfVectorizer(stop_words='english',sublinear_tf=True,ngram_range=(1,2),min_df=1)
X=V.fit_transform([txt(q) for _,q in corp]+[txt(q) for q in mine])
C=X[:len(corp)];M=X[len(corp):]
S=cosine_similarity(M,C)
N=int(sys.argv[1]) if len(sys.argv)>1 else 10
for i,q in enumerate(mine):
  print('=====',q['id'],'|',q['presentation'],'|',q['correct_answer'])
  for j in S[i].argsort()[::-1][:N]:
    src,c=corp[j]
    if c['id']==q['id']: continue
    print(f"  {S[i][j]:.2f} {src} {c['id']} | {c.get('presentation','')} | {c.get('correct_answer','')[:90]}")
