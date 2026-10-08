import json,re,sys,glob,os
R='C:/Users/user/AppData/Local/Temp/claude/C--Users-user/c8269527-cc45-4897-aeab-239005307720/scratchpad/wt/'
t=open(R+'plab1-questions.js',encoding='utf-8').read()
live=json.loads(t[t.index('['):t.rindex(']')+1])
park=json.load(open(R+'_parked/plab1-adapted-awaiting-review.json',encoding='utf-8'))
if isinstance(park,dict): park=park.get('questions',list(park.values()))
others=[]
for f in glob.glob(R+'_tools/plab-adaptation/work/u74-g*/draft.json'):
    if 'u74-g05' in f: continue
    b=f.split('/')[-2] if '/' in f else f
    ck=set(json.load(open(os.path.dirname(f)+'/ctx/check_ids.json',encoding='utf-8')))
    for q in json.load(open(f,encoding='utf-8')):
        if q['id'] in ck: q['_src']=os.path.basename(os.path.dirname(f)); others.append(q)
for q in live: q['_src']='LIVE'
for q in park: q['_src']=q.get('_src','PARK')
for q in park: q['_src']='PARK'
ALL=live+park+others
def txt(q): return ' '.join([q.get('presentation',''),q.get('stem',''),q.get('correct_answer','')])
mode=sys.argv[1]
if mode=='s':
    pat=re.compile(sys.argv[2],re.I)
    for q in ALL:
        if pat.search(txt(q)): print(q['_src'],q['id'],'|',q.get('presentation'),'|',q.get('correct_answer','')[:90])
elif mode=='p':
    pat=re.compile(sys.argv[2],re.I)
    for q in ALL:
        if pat.search(q.get('presentation','')+' | '+q.get('correct_answer','')): print(q['_src'],q['id'],'|',q.get('presentation'),'|',q.get('correct_answer','')[:90])
elif mode=='show':
    for i in sys.argv[2:]:
        for q in ALL:
            if q['id']==i:
                print('#####',q['_src'],i,q.get('presentation')); print(q['stem']); print(q.get('options')); print('KEY',q.get('correct_answer')); print('WHY',q.get('why_correct','')[:500]); print()
