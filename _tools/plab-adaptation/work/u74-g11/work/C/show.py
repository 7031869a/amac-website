import json,sys
B=sys.argv[1]; a,b=int(sys.argv[2]),int(sys.argv[3])
d=json.load(open(B+'/work/C/subset.json',encoding='utf-8'))
src={x['live_plab_copy']['source_akt_id']:x for x in json.load(open(B+'/ctx/source.json',encoding='utf-8'))}
for q in d[a:b]:
  s=src[q['source_akt_id']]['akt_source']
  print('#####',q['id'],q['presentation'],q['difficulty'])
  print('SRC:',str(s.get('stem') or s.get('question'))[:600])
  print('SRC key:',s.get('correct_answer') or s.get('answer'))
  print('STEM:',q['stem'])
  for k,v in q['options'].items(): print(' ',k,len(v),v)
  print('KEY:',q['correct_letter'])
  for f in ['why_correct','why_wrong','pearl','thinking','exam_trap','takeaway','notes']: print(f.upper()+':',q[f])
  print()
