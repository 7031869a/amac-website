import json,re,sys
sys.stdout.reconfigure(encoding='utf-8')
import os; B=os.environ.get('BATCH_DIR','_tools/plab-adaptation/work/b01')+'/'
plan={p['id']:p for p in json.load(open(B+'ctx/plan.json',encoding='utf-8'))}
src={x['live_plab_copy']['source_akt_id']:x['live_plab_copy'] for x in json.load(open(B+'ctx/source.json',encoding='utf-8'))}
K=['id','source_akt_id','presentation','difficulty','stem','options','correct_letter','correct_answer','why_correct','why_wrong','pearl','thinking','exam_trap','takeaway','skip','notes','sources']
tok=lambda t:set(re.findall(r'[a-z]{4,}',t.lower()))
errs=[]
for q in json.load(open(sys.argv[1],encoding='utf-8')):
  i=q.get('id'); e=lambda m:errs.append(f'{i}: {m}')
  if list(q)!=K: e(f'keys/order must be {K}')
  if i not in plan: e('id not in plan'); continue
  if q.get('skip'):
    if not q.get('notes'): e('skip needs reason')
    continue
  pl=plan[i]; s=src[pl['source_akt_id']]
  if q['source_akt_id']!=pl['source_akt_id']: e('source_akt_id')
  if q['difficulty']!=pl['difficulty']: e('difficulty')
  if q['correct_letter']!=pl['correct_letter']: e('correct_letter')
  o=q['options']; L=q['correct_letter']
  if sorted(o)!=list('ABCDE') or len({v.strip().lower() for v in o.values()})!=5: e('options')
  if q['correct_answer']!=f'{L}. {o[L]}': e('correct_answer')
  if len(o[L])==max(map(len,o.values())): e('correct option is (joint) longest')
  st=q['stem']
  if not st.rstrip().endswith('?') or '\n\n' not in st: e('stem format')
  if re.search(r'\b(NOT|EXCEPT)\b',st): e('negative stem')
  for x in 'ABCDE':
    if x!=L and not re.search(r'(^|\s)'+x+r'\. ',q['why_wrong']): e(f'why_wrong missing {x}')
  if re.search(r'(^|\s)'+L+r'\. ',q['why_wrong']): e('why_wrong explains key')
  if 'Source:' not in q['why_correct']: e('Source')
  if '↓' not in q['thinking']: e('thinking arrows')
  for f in ['pearl','exam_trap','takeaway']:
    if not str(q[f]).strip(): e(f'{f} empty')
  jac=len(tok(st)&tok(s['stem']))/max(1,len(tok(st)|tok(s['stem'])))
  if jac>=0.40: e(f'stem too close to source (Jaccard {jac:.2f})')
  if not isinstance(q['sources'],list) or not q['sources']: e('sources')
print('OK' if not errs else 'PROBLEMS:\n'+'\n'.join(errs))
