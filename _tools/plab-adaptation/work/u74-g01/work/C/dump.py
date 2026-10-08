import json,sys
B='_tools/plab-adaptation/work/u74-g01/'
d={q['id']:q for q in json.load(open(B+'draft.json',encoding='utf-8'))}
ids=json.load(open(B+'ctx/check_ids.json'))
p={x['id']:x for x in json.load(open(B+'ctx/prescreen.json',encoding='utf-8'))}
s={x['live_plab_copy']['source_akt_id']:x for x in json.load(open(B+'ctx/source.json',encoding='utf-8'))}
a,b=int(sys.argv[1]),int(sys.argv[2])
for i in ids[a:b]:
  q=d[i]; src=s[q['source_akt_id']]
  print('='*30,i,q['presentation'],q['difficulty'])
  print('SRC STEM:',src['akt_source']['stem'][:600]); print('SRC KEY:',src['akt_source']['correct_answer'])
  print('STEM:',q['stem']); 
  for k,v in q['options'].items(): print(f' {k} [{len(v)}] {v}')
  print('KEY:',q['correct_answer'])
  for f in ['why_correct','why_wrong','pearl','thinking','exam_trap','takeaway','notes']: print(f.upper()+':',q[f])
  print('PRESCREEN:',' | '.join(f"{m['id']} {m['score']} {m['presentation']} -> {m['correct_answer']}" for m in p[i]['top_matches'][:8]))
