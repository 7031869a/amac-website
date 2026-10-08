import json,sys,glob
s=open('plab1-questions.js',encoding='utf-8').read()
live=json.loads(s[s.index('['):s.rindex(']')+1])
park=json.load(open('_parked/plab1-adapted-awaiting-review.json',encoding='utf-8'))
if isinstance(park,dict): park=park.get('questions',list(park.values()))
other=[]
for f in glob.glob('_tools/plab-adaptation/work/u74-g*/draft.json'):
  for q in json.load(open(f,encoding='utf-8')): q['_f']=f.replace(chr(92),'/').split('/')[-2]; other.append(q)
idx={}
for name,bank in [('OTHER',other),('PARK',park),('LIVE',live)]:
  for q in bank: idx.setdefault(q['id'],[]).append((name,q))
for i in sys.argv[1:]:
  for name,q in idx.get(i,[('NONE',{})]):
    print('==',name,q.get('_f',''),i,'|',q.get('presentation'),'\n  ',q.get('stem','').replace('\n',' '),'\n   KEY:',q.get('correct_answer'))
