import json,sys
B=sys.argv[1]; ids=sys.argv[2].split(',')
d={q['id']:q for q in json.load(open(B+'/draft.json',encoding='utf-8'))}
src={x['live_plab_copy']['source_akt_id']:x for x in json.load(open(B+'/ctx/source.json',encoding='utf-8'))}
ps={x['id']:x for x in json.load(open(B+'/ctx/prescreen.json',encoding='utf-8'))}
for i in ids:
  q=d[i]; s=src[q['source_akt_id']]['live_plab_copy']
  print('='*30,i,q['difficulty'],'|',q['presentation'])
  print('SRC STEM:',s['stem']); print('SRC KEY:',s.get('correct_answer'))
  print('STEM:',q['stem'])
  for k,v in q['options'].items(): print(f' {k}{"*" if k==q["correct_letter"] else " "} ({len(v)}) {v}')
  for f in ['why_correct','why_wrong','pearl','thinking','exam_trap','takeaway','notes']: print(f.upper()+':',q[f])
  print('PRESCREEN:',ps[i]['likely_repeat'],'; '.join(f"{m['id']}({m['score']}):{m['presentation']}->{m['correct_answer'][:60]}" for m in ps[i]['top_matches'][:8]))
