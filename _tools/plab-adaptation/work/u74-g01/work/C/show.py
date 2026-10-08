import json,sys,glob
exec(open('_tools/plab-adaptation/work/u74-g01/work/C/srch.py',encoding='utf-8').read().split("pats=")[0])
want=set(sys.argv[1:])
for tag,q in corp:
  if q['id'] in want:
    print(f"[{tag}] {q['id']} | {q.get('presentation')}\n{q.get('stem')}\n{json.dumps(q.get('options'),ensure_ascii=False)}\n-> {q.get('correct_answer')}\nWC: {q.get('why_correct','')[:400]}\n")
