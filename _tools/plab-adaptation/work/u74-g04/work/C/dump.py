import json,sys
B=sys.argv[1]+'/'
d=json.load(open(B+'draft.json',encoding='utf-8'))
ids=json.load(open(B+'ctx/check_ids.json',encoding='utf-8'))
src={x['live_plab_copy']['source_akt_id']:x for x in json.load(open(B+'ctx/source.json',encoding='utf-8'))}
ps={x['id']:x for x in json.load(open(B+'ctx/prescreen.json',encoding='utf-8'))}
out=[]
for q in d:
  if q['id'] not in ids: continue
  s=src[q['source_akt_id']]['live_plab_copy']
  L=q['correct_letter']
  out.append(f"===== {q['id']} [{q['difficulty']}] {q['presentation']} | key {L} | src {s['domain']}/{s['presentation']} key: {s['correct_answer']}")
  out.append("SRCSTEM: "+s['stem'].replace('\n',' / '))
  out.append("STEM: "+q['stem'].replace('\n',' / '))
  for k,v in q['options'].items(): out.append(f"  {k}{'*' if k==L else ' '} ({len(v)}) {v}")
  for f in ['why_correct','why_wrong','pearl','thinking','exam_trap','takeaway','notes']:
    out.append(f"{f.upper()}: {q[f]}")
  out.append("SOURCES: "+json.dumps(q['sources']))
  out.append("TOP: "+" | ".join(f"{m['id']}:{m['presentation']}->{m['correct_answer']}" for m in ps[q['id']]['top_matches'][:8]))
open(B+'work/C/dump.txt','w',encoding='utf-8').write('\n'.join(out))
