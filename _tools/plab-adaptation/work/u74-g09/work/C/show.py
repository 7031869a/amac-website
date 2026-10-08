import json,sys
d=json.load(open(sys.argv[1],encoding='utf-8'))
a,b=int(sys.argv[2]),int(sys.argv[3])
for q in d[a:b]:
  print('=====',q['id'],q['source_akt_id'],q['presentation'],q['difficulty'])
  print(q['stem'])
  for k,v in q['options'].items(): print(f'  {k}{"*" if k==q["correct_letter"] else " "} ({len(v)}) {v}')
  for f in ['why_correct','why_wrong','pearl','thinking','exam_trap','takeaway','notes']: print(f'[{f}]',q[f])
  print('[sources]',q['sources'])
