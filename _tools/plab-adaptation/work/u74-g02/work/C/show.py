import pickle,sys
sys.stdout.reconfigure(encoding='utf-8')
C,n=pickle.load(open('_tools/plab-adaptation/work/u74-g02/work/C/corpus.pkl','rb'))
for s,q in C:
  if q['id'] in sys.argv[1:]:
    print(f"[{s}] {q['id']} | {q.get('presentation')}\n {q['stem']}\n KEY: {q['correct_answer']}\n")
