import json
def ser(v):
    if isinstance(v,dict):
        return '{\r\n'+',\r\n'.join(json.dumps(k,ensure_ascii=False)+': '+ser(x) for k,x in v.items())+'\r\n}'
    if isinstance(v,list):
        return '[\r\n'+',\r\n'.join(ser(x) for x in v)+'\r\n]'
    return json.dumps(v,ensure_ascii=False)
