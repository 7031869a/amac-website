import json,re,sys,glob
s=open('plab1-questions.js',encoding='utf-8').read()
s=s[s.index('['):s.rindex(']')+1]
live=json.loads(s)
park=json.load(open('_parked/plab1-adapted-awaiting-review.json',encoding='utf-8'))
if isinstance(park,dict): park=park.get('questions',list(park.values()))
other=[]
for f in glob.glob('_tools/plab-adaptation/work/u74-g*/draft.json'):
  if 'g11' in f: continue
  for q in json.load(open(f,encoding='utf-8')): q['_f']=f.replace(chr(92),'/').split('/')[-2]; other.append(q)
pats=sys.argv[1:]
for name,bank in [('LIVE',live),('PARK',park),('OTHER',other)]:
  for q in bank:
    t=' '.join(str(q.get(k,'')) for k in ['presentation','stem','correct_answer'])
    if all(re.search(p,t,re.I) for p in pats):
      print(name,q.get('_f',''),q['id'],'|',q.get('presentation'),'|',q.get('stem','')[:230].replace('\n',' '),'|| KEY:',q.get('correct_answer'))
