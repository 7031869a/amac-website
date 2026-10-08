import json,glob,sys,os
s=open('plab1-questions.js',encoding='utf-8').read(); s=s[s.index('['):s.rindex(']')+1]
db={}
for q in json.loads(s): db[q['id']]=('LIVE',q)
for q in json.load(open('_parked/plab1-adapted-awaiting-review.json',encoding='utf-8')): db[q['id']]=('PARKED',q)
for f in glob.glob('_tools/plab-adaptation/work/u74-g*/draft.json'):
    g=os.path.basename(os.path.dirname(f))
    try: chk=set(json.load(open(os.path.join(os.path.dirname(f),'ctx','check_ids.json'))))
    except Exception: chk=set()
    for q in json.load(open(f,encoding='utf-8')):
        if g=='u74-g10' : continue
        db[q['id']]=(g+(' CHECKED' if q['id'] in chk else ' RETIRING'),q)
for i in sys.argv[1:]:
    t,q=db[i]
    print('==',i,t,'|',q.get('presentation'));print(q['stem']);print(json.dumps(q['options'],ensure_ascii=False));print('KEY',q.get('correct_answer'));print()
