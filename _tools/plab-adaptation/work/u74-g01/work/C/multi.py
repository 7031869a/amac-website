import sys,re,subprocess
exec(open('work/C/srch.py',encoding='utf-8').read().split("pats=")[0].replace("open('plab1-questions.js'","open('../../../../plab1-questions.js'").replace("open('_parked","open('../../../../_parked").replace("W='_tools/plab-adaptation/work/'","W='../'"))
for spec in sys.argv[1:]:
  name,*ps=spec.split('::')
  pats=[re.compile(p,re.I) for p in ps]
  print('#####',name)
  for tag,q in corp:
    if tag=='u74-g01': continue
    txt=' '.join(str(q.get(k,'')) for k in ['presentation','stem','correct_answer'])
    if all(p.search(txt) for p in pats):
      print(f"  [{tag}] {q['id']} | {q.get('presentation')} | {q.get('stem','')[:160]!r} -> {q.get('correct_answer')}")
