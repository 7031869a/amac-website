import json,glob,sys,os,re
s=open('plab1-questions.js',encoding='utf-8').read(); s=s[s.index('['):s.rindex(']')+1]
items=[('LIVE',q) for q in json.loads(s)]+[('PARK',q) for q in json.load(open('_parked/plab1-adapted-awaiting-review.json',encoding='utf-8'))]
for f in glob.glob('_tools/plab-adaptation/work/u74-g*/draft.json'):
    g=os.path.basename(os.path.dirname(f))
    if g=='u74-g10': continue
    chk=set(json.load(open(os.path.join(os.path.dirname(f),'ctx','check_ids.json'))))
    items+=[(g+('C' if q['id'] in chk else 'R'),q) for q in json.load(open(f,encoding='utf-8'))]
field=sys.argv[1]; pat=re.compile(sys.argv[2],re.I)
for t,q in items:
    txt=q.get('correct_answer','') if field=='key' else (q.get('presentation','')+' '+q['stem']+' '+str(q.get('correct_answer')))
    if pat.search(txt): print(t,q['id'],'|',q.get('presentation'),'|',str(q.get('correct_answer'))[:80],'|',q['stem'][-120:].replace('\n',' '))
