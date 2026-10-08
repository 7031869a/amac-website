"""Find checker drops whose cited matches are only other u74 drafts that were themselves dropped (topic lost from all batches)."""
import json, glob, re, os
W = os.path.dirname(os.path.abspath(__file__))
R = os.path.join(W, "..", "..", "..")   # repo root
live = set(re.findall(r'"id": ?"([A-Z]+[0-9]+)"', open(R + "/plab1-questions.js", encoding="utf-8").read()))
held = {q["id"] for q in json.load(open(R + "/_parked/plab1-adapted-awaiting-review.json", encoding="utf-8"))}
kept, drop, grp, retired = set(), {}, {}, set()
for g in sorted(glob.glob(W + "/u74-g*")):
    gn = os.path.basename(g)
    for r in json.load(open(g + "/ctx/retire_prescreen.json", encoding="utf-8")): retired.add(r["id"]); grp[r["id"]] = gn
    if not os.path.exists(g + "/rev/C.json"): print("PENDING", gn); continue
    for r in json.load(open(g + "/rev/C.json", encoding="utf-8")):
        grp[r["id"]] = gn
        if r["verdict"] == "drop": drop[r["id"]] = r["issues"]
        else: kept.add(r["id"])
cite = {i: set(re.findall(r"\b[A-Z]{1,6}[0-9]{2,6}\b", iss)) - {i} for i, iss in drop.items()}
direct = {i for i, c in cite.items() if any(x in live or x in held or x in kept for x in c)}
while True:   # covered = matches a live/held/kept item, directly or through a chain of dropped partners
    more = {i for i, c in cite.items() if i not in direct and c & direct}
    if not more: break
    direct |= more
orph = []
for i, iss in drop.items():
    cited = cite[i]
    if i not in direct:
        orph.append(i)
        print(f"ORPHAN {i} ({grp[i]}): cites {sorted(cited)} | {iss[:160]}")
print("kept", len(kept), "drop", len(drop), "prescreen-retire", len(retired), "orphans", len(orph))

