import json,re,glob,sys
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
B='_tools/plab-adaptation/work/u74-g10'
s=open('plab1-questions.js',encoding='utf-8').read()
s=s[s.index('['):s.rindex(']')+1]
live=json.loads(s)
park=json.load(open('_parked/plab1-adapted-awaiting-review.json',encoding='utf-8'))
others=[]
for f in glob.glob('_tools/plab-adaptation/work/u74-g*/draft.json'):
    if 'u74-g10' in f: continue
    for q in json.load(open(f,encoding='utf-8')): q['_src']=f.split('/')[-2]; others.append(q)
corp=[('L',q) for q in live]+[('P',q) for q in park]+[('O',q) for q in others]
ids=json.load(open(B+'/ctx/check_ids.json'))
d=[q for q in json.load(open(B+'/draft.json',encoding='utf-8')) if q['id'] in ids]
def txt(q):
    ca=q.get('correct_answer') or ''
    return ' '.join([q.get('presentation',''),q.get('stem',''),ca,ca,q.get('presentation','')])
v=TfidfVectorizer(stop_words='english',sublinear_tf=True).fit([txt(q) for _,q in corp]+[txt(q) for q in d])
M=v.transform([txt(q) for _,q in corp]); D=v.transform([txt(q) for q in d])
S=cosine_similarity(D,M)
only=sys.argv[1:] 
for i,q in enumerate(d):
    if only and q['id'] not in only: continue
    print('#####',q['id'],'|',q['presentation'],'|',q['correct_answer'])
    for j in S[i].argsort()[::-1][:12]:
        t,c=corp[j]
        print(f"  {S[i,j]:.2f} {t}{c.get('_src','')} {c['id']} | {c.get('presentation')} | {str(c.get('correct_answer'))[:70]} | {c['stem'][:110]!r}")
