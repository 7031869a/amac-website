import sys
sys.path.insert(0,sys.argv[1]); from corpus import load
ids=set(sys.argv[2:])
for src,q in load():
    if q.get('id') in ids:
        ca=q.get('correct_answer')
        print(f"[{src}] {q['id']} | {q.get('presentation')}\n  STEM: {q.get('stem','').replace(chr(10),' ')}\n  KEY: {ca}\n")
