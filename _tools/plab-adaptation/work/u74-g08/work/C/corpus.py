import json,glob,re,os
def load():
    t=open('plab1-questions.js',encoding='utf-8').read()
    i=t.index('['); j=t.rindex(']')
    live=json.loads(t[i:j+1])
    C=[]
    for q in live: C.append(('LIVE',q))
    for q in json.load(open('_parked/plab1-adapted-awaiting-review.json',encoding='utf-8')): C.append(('PARKED',q))
    for f in sorted(glob.glob('_tools/plab-adaptation/work/u74-g*/draft.json')):
        g=f.split('/')[-2] if '/' in f else f
        g=os.path.basename(os.path.dirname(f))
        if g=='u74-g08': continue
        d=os.path.dirname(f)
        try: ck=set(json.load(open(d+'/ctx/check_ids.json')))
        except Exception: ck=None
        for q in json.load(open(f,encoding='utf-8')):
            tag=g+('' if ck is None else (':chk' if q['id'] in ck else ':RETIRE'))
            C.append((tag,q))
    return C
