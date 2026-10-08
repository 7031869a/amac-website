import sys
sys.path.insert(0,sys.argv[1]); from lib import *
ids=set(sys.argv[2].split(','))
for coll in (live(),parked(),drafts()):
  for q in coll:
    if q['id'] in ids:
      print('##',q['id'],q.get('_batch','')[-25:],q.get('presentation'));print(q['stem']);print(q['options']);print('KEY',q['correct_answer']);print('WC',q['why_correct'][:400]);print()
