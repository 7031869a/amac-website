"""Extra v2 item-writing checks on top of lint.py (no model calls).

Usage: python _tools/mrcp1-lint/check_v2.py FILE.json|FILE.js [--no-spread]

FILE.json is a plain list of items; FILE.js is window.X = [ ... ];
Each item: id, source_id, subdomain, topic, difficulty, stem, options{A-E},
correct_letter, why_correct, distractor_analysis{4 non-key letters},
generalisation, review_status.
Exit code 1 if any item fails.
"""
import json
import re
import sys
import os

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from lint import lint  # noqa: E402

LEAD_IN = re.compile(r"^What is the most (likely|appropriate|useful) [^?]+\?$")
TOPIC = re.compile(r"^[A-Z][A-Za-z ,]+: (diagnosis|next step|investigation|management|interpretation|cause)$")
STEM_BANNED = ["markedly", "substantially", "significantly", "severe", "severely", "very high",
               "very low", "elevated", "raised", "extremely", "grossly", "profound", "profoundly"]
ABSOLUTE = ["alone", "only", "sole", "solely", "never", "always", "every", "proves", "excludes",
            "completely", "complete", "without", "in all cases", "all", "definitively", "definite",
            "certainly", "must"]
ANYWHERE_BANNED = ["instant fail", "ai-checked", "ai checked", "examiner-led", "examiner led",
                   "ahmed", "mansour", "carter", "darton"]
LAB_UNIT = re.compile(r"\d[\d.,]*\s*(mmol/L|micromol/L|µmol/L|g/L|mg/L|U/L|IU/L|x 10\^9/L|×\s?10\^?9/L|"
                      r"ng/L|pmol/L|nmol/L|mU/L|kPa|mOsm/kg|micrograms/g|fL|kU/L|mg/mmol|seconds|mL/min)")


def load(path):
    text = open(path, encoding="utf-8").read()
    if path.endswith(".js"):
        return json.loads(text[text.index("[", text.index("window.")):text.rindex("]") + 1])
    return json.loads(text)


def check(q):
    errs, warns = [], []
    opts, key = q["options"], q["correct_letter"]
    if sorted(opts) != list("ABCDE"):
        errs.append("options not A-E")
    if key not in opts:
        errs.append("key letter missing")
        return errs, warns
    flags, detail = lint({"id": q["id"], "specialty": q["subdomain"], "topic": q["topic"],
                          "stem": q["stem"], "options": opts, "key": key})
    if flags:
        errs.append("lint " + "|".join(flags) + " (" + detail + ")")

    sents = re.split(r"(?<=[.?!])\s+", q["stem"].strip())
    lead = sents[-1]
    if not LEAD_IN.match(lead):
        errs.append("lead-in form: " + lead)
    if not TOPIC.match(q["topic"]):
        errs.append("topic form: " + q["topic"])
    if not q["topic"].startswith(q["subdomain"]):
        errs.append("topic does not start with subdomain")

    ages = [int(a) for a in re.findall(r"(\d+)-year-old", q["stem"])]
    if not ages or min(ages) < 18:
        errs.append(f"adult age not stated (ages {ages})")

    low = q["stem"].lower()
    for w in STEM_BANNED:
        if re.search(r"\b" + re.escape(w) + r"\b", low):
            errs.append("stem vague word: " + w)

    lens = {k: len(v) for k, v in opts.items()}
    mean = sum(lens.values()) / 5
    for k, n in lens.items():
        if abs(n - mean) > 0.30 * mean:
            errs.append(f"option {k} length {n} outside 30% of mean {mean:.0f}")
    if lens[key] > max(n for k, n in lens.items() if k != key):
        errs.append(f"key is the longest option ({lens[key]})")
    for k, v in opts.items():
        for w in ABSOLUTE:
            if re.search(r"\b" + re.escape(w) + r"\b", v, re.I):
                errs.append(f"option {k} absolute word: {w}")
    if len(set(v.strip().lower() for v in opts.values())) < 5:
        errs.append("duplicate options")

    da = q.get("distractor_analysis", {})
    if sorted(da) != sorted(k for k in "ABCDE" if k != key):
        errs.append(f"distractor_analysis letters {sorted(da)} do not match non-key letters")
    for field in ["why_correct", "generalisation"]:
        if not q.get(field, "").strip():
            errs.append("empty " + field)
    explan = " ".join([q.get("why_correct", ""), q.get("generalisation", "")] + list(da.values()))
    if re.search(r"\b(option|answer|choice)\s+[A-E]\b|\([A-E]\)", explan):
        errs.append("explanation refers to an option letter")

    alltext = json.dumps(q, ensure_ascii=False).lower()
    for w in ANYWHERE_BANNED:
        if w in alltext:
            errs.append("banned wording: " + w)
    if re.search(r"[\U0001F300-\U0001FAFF☀-➿]", json.dumps(q, ensure_ascii=False)):
        errs.append("emoji present")

    for m in LAB_UNIT.finditer(q["stem"]):
        tail = q["stem"][m.end():m.end() + 4]
        if "(" not in tail:
            warns.append("value without reference range: " + m.group(0))
    return errs, warns


def main():
    path = sys.argv[1]
    items = load(path)
    sys.stdout.reconfigure(encoding="utf-8")
    bad = 0
    for q in items:
        errs, warns = check(q)
        if errs:
            bad += 1
        for e in errs:
            print(f"{q.get('id')}: ERROR {e}")
        for w in warns:
            print(f"{q.get('id')}: warn  {w}")
    ids = [q["id"] for q in items]
    if len(set(ids)) != len(ids):
        print("ERROR duplicate ids")
        bad += 1
    if "--no-spread" not in sys.argv:
        from collections import Counter
        c = Counter(q["correct_letter"] for q in items)
        print("key spread:", dict(sorted(c.items())))
    print(f"{len(items)} items, {bad} failing")
    sys.exit(1 if bad else 0)


if __name__ == "__main__":
    main()
