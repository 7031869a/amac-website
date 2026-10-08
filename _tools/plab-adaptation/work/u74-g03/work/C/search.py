import sys,re,json
sys.path.insert(0,sys.argv[1]); from lib import *
pat=re.compile(sys.argv[2],re.I); mode=sys.argv[3] if len(sys.argv)>3 else 'all'
L=live(); P=parked(); D=drafts()
if isinstance(P,dict): P=P.get('questions',list(P.values()))
for name,coll in [('LIVE',L),('PARKED',P),('DRAFT',D)]:
  for q in coll:
    txt=' '.join(str(q.get(k,'')) for k in ['presentation','stem','correct_answer'])
    if pat.search(txt):
      print(f"{name} {q['id']} {q.get('_batch','')[-30:]} | {q.get('presentation')} | {q['stem'][:230]!r} -> {q.get('correct_answer','')[:90]}")
