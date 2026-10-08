import json,glob,sys
s=open('plab1-questions.js',encoding='utf-8').read();live=json.loads(s[s.index('['):s.rindex(']')+1])
D={}
for q in live: D.setdefault(q['id'],[]).append(('LIVE',q))
for q in json.load(open('_parked/plab1-adapted-awaiting-review.json',encoding='utf-8')): D.setdefault(q['id'],[]).append(('PARK',q))
chk={}
for f in glob.glob('_tools/plab-adaptation/work/u74-g*/ctx/check_ids.json'):
  g=f.replace(chr(92),'/').split('/')[-3]
  for i in json.load(open(f)): chk[i]=g
for f in glob.glob('_tools/plab-adaptation/work/u74-g*/draft.json'):
  g=f.replace(chr(92),'/').split('/')[-2]
  for q in json.load(open(f,encoding='utf-8')): D.setdefault(q['id'],[]).append((g+(' CHECKED' if q['id'] in chk else ' notchecked/retire'),q))
for i in sys.argv[1:]:
  for src,q in D.get(i,[('NONE',{})]):
    print('-----',i,src,q.get('presentation'))
    print(q.get('stem'))
    print('  KEY:',q.get('correct_answer'))
    print('  WC:',(q.get('why_correct') or '')[:300])
