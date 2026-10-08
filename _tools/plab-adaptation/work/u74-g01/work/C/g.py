import re,sys,html
t=open('src/'+sys.argv[1]+'.html',encoding='utf-8',errors='ignore').read()
t=re.sub(r'<script.*?</script>|<style.*?</style>','',t,flags=re.S)
t=html.unescape(re.sub(r'<[^>]+>',' ',t)); t=re.sub(r'\s+',' ',t)
for p in sys.argv[2:]:
  for m in list(re.finditer(p,t,re.I))[:4]: print('>>',t[max(0,m.start()-220):m.end()+220]); print()
