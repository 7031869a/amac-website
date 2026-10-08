import json,sys
B=sys.argv[1]
d=json.load(open(B+'/draft.json',encoding='utf-8'))
ids=json.load(open(B+'/ctx/check_ids.json'))
src={x['live_plab_copy']['source_akt_id']:x for x in json.load(open(B+'/ctx/source.json',encoding='utf-8'))}
out=[]
for q in d:
  if q['id'] not in ids: continue
  s=src[q['source_akt_id']]['live_plab_copy']
  out.append(f"#### {q['id']} [{q['presentation']}] diff={q['difficulty']} key={q['correct_letter']}")
  out.append("SRC STEM: "+s['stem'].replace('\n',' / '))
  out.append("SRC KEY: "+str(s.get('correct_answer')))
  out.append("STEM: "+q['stem'].replace('\n',' / '))
  L=q['correct_letter']
  for k,v in q['options'].items(): out.append(f"  {k}{'*' if k==L else ' '} ({len(v)}) {v}")
  for f in ['why_correct','why_wrong','pearl','thinking','exam_trap','takeaway','notes']:
    out.append(f"{f.upper()}: {q[f]}")
  out.append('')
open(B+'/work/C/dump.txt','w',encoding='utf-8').write('\n'.join(out))
