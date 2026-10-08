import json,sys
sys.stdout.reconfigure(encoding='utf-8')
B='_tools/plab-adaptation/work/u74-g06/'
d={q['id']:q for q in json.load(open(B+'draft.json',encoding='utf-8'))}
src={x['live_plab_copy']['source_akt_id']:x for x in json.load(open(B+'ctx/source.json',encoding='utf-8'))}
ps={x['id']:x for x in json.load(open(B+'ctx/prescreen.json',encoding='utf-8'))}
for i in sys.argv[1:]:
    q=d[i]; s=src[q['source_akt_id']]['live_plab_copy']
    print('='*20,i,'|',q['presentation'],'|',q['difficulty'])
    print('SRC STEM:',s['stem'][:400]); print('SRC KEY:',s.get('correct_answer'))
    print('STEM:',q['stem'])
    for k,v in q['options'].items(): print(f'  {k}{"*" if k==q["correct_letter"] else " "} ({len(v)}) {v}')
    for f in ['why_correct','why_wrong','pearl','thinking','exam_trap','takeaway','notes']: print(f.upper()+':',q[f])
    print('TOP:',[(m['id'],m['presentation'][:40],m['correct_answer'][:50]) for m in ps[i]['top_matches'][:8]])
