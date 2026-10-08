import json,re,glob,os
R='.'
def live():
  t=open(R+'/plab1-questions.js',encoding='utf-8').read()
  t=t[t.index('['):t.rindex(']')+1]
  return json.loads(t)
def parked():
  return json.load(open(R+'/_parked/plab1-adapted-awaiting-review.json',encoding='utf-8'))
def drafts():
  out=[]
  for f in glob.glob(R+'/_tools/plab-adaptation/work/u74-g*/draft.json'):
    g=f.split(os.sep)[-2] if os.sep in f else f.split('/')[-2]
    ck=set(json.load(open(os.path.join(os.path.dirname(f),'ctx','check_ids.json'))))
    for q in json.load(open(f,encoding='utf-8')):
      if q['id'] in ck: q['_batch']=f; out.append(q)
  return out
