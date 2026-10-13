"""Mechanical item-writing lint for MRCP Part 1 SBAs (no model calls).

Usage:
  python _tools/mrcp1-lint/lint.py POOL.json|PILOT.js [--csv OUT.csv] [--summary OUT.txt]

Input is either the archive pool (list of {item_label, stem, options, keyed, ...};
the lead-in is the last sentence of the stem) or a pilot .js file
(window.X = [ {id, subdomain, topic, stem, options, correct_letter, ...} ];).

Flags (one per rule, an item can carry several):
  F1_key_long       key text > 1.5 x mean distractor length (characters)
  F2_absolute       a distractor contains alone/only/sole/never/always/every/proves/
                    excludes/completely/without/in all cases (whole words)
  F3_key_word_cued  a 6+ letter word of the key appears in the stem, lead-in or topic
                    (ignoring patient, history, presents, examination, following, treatment)
  F4_vague_quant    a stem sentence uses markedly/substantially/significantly/severe/
                    very high/very low/elevated/raised and has no number in it
  F5_lead_in        lead-in lacks "most likely" / "most appropriate" / "best" / "next"
  F6_age_under_16   patient age < 16 (n-year-old < 16, or any month/week/day-old)
"""
import csv
import json
import re
import sys
from collections import Counter, defaultdict

ABSOLUTE = ["alone", "only", "sole", "never", "always", "every", "proves", "excludes",
            "completely", "without", "in all cases"]
IGNORE = {"patient", "patients", "history", "presents", "examination", "following", "treatment"}
VAGUE = ["markedly", "substantially", "significantly", "severe", "very high", "very low",
         "elevated", "raised"]
LEADIN_OK = re.compile(r"\b(most likely|most appropriate|best|next)\b", re.I)
# Specialty buckets: same mapping as the pilot selection (PR #85), plus clinical sciences.
BUCKET = [
    ("Cardiology", r"cardio"), ("Respiratory medicine", r"respir"),
    ("Gastroenterology and hepatology", r"gastro|hepat"), ("Nephrology", r"renal|nephro"),
    ("Endocrinology and diabetes", r"endocr|diabet"), ("Haematology", r"haemat"),
    ("Neurology", r"neuro"), ("Rheumatology", r"rheumat"), ("Infectious diseases", r"infect"),
    ("Clinical pharmacology and therapeutics", r"pharmac"), ("Dermatology", r"dermat"),
    ("Ophthalmology", r"ophthal"), ("Clinical immunology and allergy", r"immun|allerg"),
    ("Oncology", r"oncol|cancer"), ("Geriatric medicine", r"geriat|older"),
    ("Psychiatry", r"psychiat"), ("Metabolic medicine", r"metabol|biochem"),
    ("Clinical sciences and statistics", r"statist|epidem|clinical science|evidence"),
    ("Clinical genetics", r"genetic"),
]


def bucket(domain):
    first = re.split(r"\s*[/·&]\s*", domain.lower())[0]
    for name, pat in BUCKET:
        if re.search(pat, first):
            return name
    return "Unclassified (no domain line)"


FLAGS = ["F1_key_long", "F2_absolute", "F3_key_word_cued", "F4_vague_quant", "F5_lead_in",
         "F6_age_under_16"]


def load(path):
    text = open(path, encoding="utf-8").read()
    if path.endswith(".js"):
        start = text.index("[", text.index("window."))
        end = text.rindex("]")
        raw = json.loads(text[start:end + 1])
        items = []
        for q in raw:
            items.append({"id": q["id"], "specialty": q.get("subdomain", ""),
                          "topic": q.get("topic", ""), "stem": q["stem"],
                          "options": q["options"], "key": q["correct_letter"]})
        return items
    raw = json.loads(text)
    items = []
    for q in raw:
        m = re.match(r"#*\s*(MRCP1-\d+)\s*[—-]\s*(.*)", q["item_label"])
        d = re.search(r"\*\*(?:Clinical )?domain:?\*\*:?\s*(.+)", q.get("full_block", ""), re.I)
        domain = d.group(1).strip() if d else (m.group(2).strip() if m else "")
        items.append({"id": m.group(1) if m else q["item_label"],
                      "specialty": bucket(domain), "topic": "",
                      "stem": q["stem"], "options": q["options"], "key": q["keyed"]})
    return items


def sentences(text):
    return [s for s in re.split(r"(?<=[.?!])\s+", text.strip()) if s]


def split_lead_in(stem):
    s = sentences(stem)
    if len(s) > 1 and s[-1].endswith("?"):
        return " ".join(s[:-1]), s[-1]
    return stem, (s[-1] if s else "")


def lint(q):
    flags, detail = [], []
    opts = q["options"]
    key_text = opts.get(q["key"], "")
    distractors = [v for k, v in opts.items() if k != q["key"]]
    body, lead = split_lead_in(q["stem"])

    if distractors:
        mean_d = sum(len(d) for d in distractors) / len(distractors)
        if len(key_text) > 1.5 * mean_d:
            flags.append("F1_key_long")
            detail.append(f"key {len(key_text)} vs mean {mean_d:.0f} chars")

    hits = []
    for k, v in opts.items():
        if k == q["key"]:
            continue
        for w in ABSOLUTE:
            if re.search(r"\b" + re.escape(w) + r"\b", v, re.I):
                hits.append(f"{k}:{w}")
    if hits:
        flags.append("F2_absolute")
        detail.append("abs " + ",".join(hits))

    context = " ".join([q["stem"], q["topic"]]).lower()
    ctx_words = set(re.findall(r"[a-z]+", context))
    cued = sorted({w for w in re.findall(r"[a-z]+", key_text.lower())
                   if len(w) >= 6 and w not in IGNORE and w in ctx_words})
    if cued:
        flags.append("F3_key_word_cued")
        detail.append("cue " + ",".join(cued))

    vague = []
    for s in sentences(body):
        if re.search(r"\d", s):
            continue
        for w in VAGUE:
            if re.search(r"\b" + re.escape(w) + r"\b", s, re.I):
                vague.append(w)
    if vague:
        flags.append("F4_vague_quant")
        detail.append("vague " + ",".join(sorted(set(vague))))

    if not LEADIN_OK.search(lead):
        flags.append("F5_lead_in")
        detail.append("lead-in: " + lead[:80])

    young = False
    for m in re.finditer(r"(\d+)[- ]year[- ]old", q["stem"], re.I):
        if int(m.group(1)) < 16:
            young = True
    if re.search(r"\d+[- ](month|week|day)[- ]old", q["stem"], re.I):
        young = True
    if young:
        flags.append("F6_age_under_16")

    return flags, "; ".join(detail)


def main():
    args = sys.argv[1:]
    path = args[0]
    out_csv = args[args.index("--csv") + 1] if "--csv" in args else None
    out_sum = args[args.index("--summary") + 1] if "--summary" in args else None
    items = load(path)
    rows = []
    for q in items:
        f, d = lint(q)
        rows.append((q, f, d))

    if out_csv:
        with open(out_csv, "w", encoding="utf-8", newline="") as fh:
            w = csv.writer(fh, lineterminator="\n")
            w.writerow(["item_id", "specialty", "n_flags", "flags", "detail"])
            for q, f, d in rows:
                w.writerow([q["id"], q["specialty"], len(f), "|".join(f), d])

    n = len(rows)
    buckets = Counter(min(len(f), 3) for _, f, _ in rows)
    by_flag = Counter(x for _, f, _ in rows for x in f)
    spec_n = Counter(q["specialty"] for q, _, _ in rows)
    spec_flag = defaultdict(Counter)
    for q, f, _ in rows:
        for x in f:
            spec_flag[q["specialty"]][x] += 1
        if f:
            spec_flag[q["specialty"]]["any"] += 1

    out = [f"Items: {n}  ({path.replace(chr(92), '/').split('/')[-1]})", "",
           "Items by number of flags:"]
    for b, lab in [(0, "0"), (1, "1"), (2, "2"), (3, "3+")]:
        out.append(f"  {lab:>2} flags: {buckets[b]:5d}  ({100 * buckets[b] / n:5.1f}%)")
    out += ["", "Flag counts (items carrying each flag):"]
    for x in FLAGS:
        out.append(f"  {x:<18} {by_flag[x]:5d}  ({100 * by_flag[x] / n:5.1f}%)")
    out += ["", "By specialty (items; % with any flag; per-flag counts F1..F6):"]
    for s, c in sorted(spec_n.items(), key=lambda kv: -kv[1]):
        sf = spec_flag[s]
        per = " ".join(f"{sf[x]:4d}" for x in FLAGS)
        out.append(f"  {s[:42]:<42} {c:5d}  {100 * sf['any'] / c:5.1f}%  {per}")
    text = "\n".join(out)
    sys.stdout.reconfigure(encoding="utf-8")
    print(text)
    if out_sum:
        open(out_sum, "w", encoding="utf-8", newline="\n").write(text + "\n")
    return rows


if __name__ == "__main__":
    main()
