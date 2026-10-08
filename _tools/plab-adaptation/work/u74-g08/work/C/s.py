import sys,re,json
sys.path.insert(0,sys.argv[1]); from corpus import load
C=load()
pats=[re.compile(p,re.I) for p in sys.argv[2:]]
n=0
for src,q in C:
    txt=' '.join(str(q.get(k,'')) for k in ['presentation','stem','correct_answer'])
    if all(p.search(txt) for p in pats):
        n+=1
        ca=q.get('correct_answer') or ''
        if isinstance(ca,str) and len(ca)<3 and isinstance(q.get('options'),dict): ca=q['options'].get(ca,ca)
        print(f"[{src}] {q.get('id')} | {q.get('presentation')} | KEY: {str(ca)[:90]}\n    {q.get('stem','')[:260].replace(chr(10),' ')}")
print('N=',n)
