import json,sys
sys.stdout.reconfigure(encoding='utf-8')
B=sys.argv[1]; a,b=int(sys.argv[2]),int(sys.argv[3])
x=json.load(open(B+'/work/C/checked_draft.json',encoding='utf-8'))
src={s['live_plab_copy']['source_akt_id']:s for s in json.load(open(B+'/ctx/source.json',encoding='utf-8'))}
ps={p['id']:p for p in json.load(open(B+'/ctx/prescreen.json',encoding='utf-8'))}
for q in x[a:b]:
  s=src[q['source_akt_id']]['live_plab_copy']
  print('=====',q['id'],q['difficulty'],'|',q['presentation'])
  print('SRC:',s['stem'].replace('\n',' '),'| KEY:',s['correct_answer'])
  print('STEM:',q['stem'])
  for k,v in q['options'].items(): print(f'  {k}. {v} ({len(v)})')
  print('KEY:',q['correct_answer'])
  for f in ['why_correct','why_wrong','pearl','thinking','exam_trap','takeaway','notes']: print(f.upper()+':',q[f])
  print('PRESCREEN:',' ; '.join(f"{m['id']}:{m['score']}:{m['correct_answer'][:60]}" for m in ps[q['id']]['top_matches'][:8]))
