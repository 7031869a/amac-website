import json,re,sys,glob
W='_tools/plab-adaptation/work/'
t=open('plab1-questions.js',encoding='utf-8').read()
t=t[t.index('['):t.rindex(']')+1]
live=json.loads(t)
park=json.load(open('_parked/plab1-adapted-awaiting-review.json',encoding='utf-8'))
other=[]
for f in sorted(glob.glob(W+'u74-g*/draft.json')):
  g=f.replace(chr(92),'/').split('/')[-2]
  if g=='u74-g01': continue
  for q in json.load(open(f,encoding='utf-8')): other.append((g,q))
corp=[('LIVE',q) for q in live]+[('PARK',q) for q in park]+other
pats=[re.compile(p,re.I) for p in sys.argv[1:]]
full='-f' in sys.argv
for tag,q in corp:
  txt=' '.join(str(q.get(k,'')) for k in ['presentation','stem','correct_answer'])
  if all(p.search(txt) for p in pats if p.pattern!='-f'):
    print(f"[{tag}] {q['id']} | {q.get('presentation')} | {q.get('stem','')[:250]!r} -> {q.get('correct_answer')}")
