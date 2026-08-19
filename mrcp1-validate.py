#!/usr/bin/env python3
"""
AMaC — MRCP Part 1 question bank validator.

    python mrcp1-validate.py            # validates mrcp1-questions.js
    python mrcp1-validate.py <file.js>  # validates another bank file

Exit 0 = conforms. Exit 1 = at least one breach.

TWO KEYS. The schema carries a slot for each clearance so that recording one
never overwrites the other:
    cleared_by / cleared_date   key one -- a named clinician cleared it
    reviewer   / signoff_date   key two -- pack verdicts, written only by
                                mrcp1-review-pack.py apply
review_status states how many keys are turned: draft (neither),
cleared_verbally (one), reviewed (both), revise (a verdict failed).

Hard failures: unknown/missing key or wrong key order; subdomain not in
MRCP1_SUBDOMAINS; options keys != A-E; correct_letter absent from options;
distractor_analysis keys != the four non-correct letters; duplicate id;
review_status not one of the four; a status whose key fields do not match it.

Reported, never failed: count per subdomain against MRCP1_TARGET_SPLIT, and
the correct_letter distribution flagged outside 15-25%.

It does not check clinical accuracy. That always needs a clinician.
"""
import io, json, os, sys
from collections import Counter, OrderedDict

MRCP1_SUBDOMAINS = {
    "Statistics, epidemiology and evidence-based medicine",
    "Clinical biochemistry and metabolism",
    "Clinical physiology",
    "Immunology",
    "Clinical anatomy",
    "Genetics",
    "Cell, molecular and membrane biology",
}

# Federation percentages (5/4/4/4/3/3/2 of 25), not our rounded counts: a count
# target silently becomes wrong the moment the bank is a different size.
MRCP1_TARGET_SPLIT = {
    "Statistics, epidemiology and evidence-based medicine": 20.0,
    "Clinical biochemistry and metabolism": 16.0,
    "Clinical physiology": 16.0,
    "Immunology": 16.0,
    "Clinical anatomy": 12.0,
    "Genetics": 12.0,
    "Cell, molecular and membrane biology": 8.0,
}

SCHEMA = ("id","subdomain","topic","difficulty","stem","options","correct_letter",
          "why_correct","distractor_analysis","generalisation",
          "review_status","cleared_by","cleared_date","reviewer","signoff_date")

STATUSES = ("draft","cleared_verbally","reviewed","revise")
OPTION_LETTERS = ("A","B","C","D","E")
LETTER_MIN_PCT, LETTER_MAX_PCT = 15.0, 25.0
errors = []


def load(path):
    if not os.path.exists(path):
        sys.exit("FATAL: %s not found (run from the repository root)" % path)
    txt = io.open(path, encoding="utf-8").read()
    try:
        body = txt[txt.index("["):txt.rindex("]")+1]
    except ValueError:
        sys.exit("FATAL: %s contains no JSON array" % path)
    return json.loads(body, object_pairs_hook=OrderedDict)


def check(idx, q):
    ref = "[%d] id=%s" % (idx, q.get("id","?") if isinstance(q, dict) else "?")
    if not isinstance(q, dict):
        errors.append(ref + " is not an object"); return
    if tuple(q.keys()) != SCHEMA:
        unknown = [k for k in q if k not in SCHEMA]
        missing = [k for k in SCHEMA if k not in q]
        if unknown: errors.append(ref + " unknown key(s): " + ", ".join(sorted(unknown)))
        if missing: errors.append(ref + " missing key(s): " + ", ".join(missing))
        if not unknown and not missing: errors.append(ref + " keys in the wrong order")
        return
    if q["subdomain"] not in MRCP1_SUBDOMAINS:
        errors.append(ref + " subdomain %r not in MRCP1_SUBDOMAINS" % q["subdomain"])
    if not isinstance(q["options"], dict) or tuple(sorted(q["options"])) != OPTION_LETTERS:
        errors.append(ref + " options keys must be exactly A, B, C, D, E"); return
    if q["correct_letter"] not in q["options"]:
        errors.append(ref + " correct_letter %r is not an option" % q["correct_letter"]); return
    exp = tuple(sorted(l for l in OPTION_LETTERS if l != q["correct_letter"]))
    if tuple(sorted(q["distractor_analysis"])) != exp:
        errors.append(ref + " distractor_analysis keys must be exactly " + ", ".join(exp))

    st = q["review_status"]
    if st not in STATUSES:
        errors.append(ref + " review_status %r not one of %s" % (st, ", ".join(STATUSES)))
    else:
        k1 = bool((q["cleared_by"] or "").strip() and (q["cleared_date"] or "").strip())
        k2 = bool((q["reviewer"] or "").strip() and (q["signoff_date"] or "").strip())
        if st == "draft" and (k1 or k2):
            errors.append(ref + " status 'draft' but a clearance field is populated")
        if st == "cleared_verbally" and not k1:
            errors.append(ref + " status 'cleared_verbally' but cleared_by/cleared_date are empty")
        if st in ("reviewed","revise") and not k2:
            errors.append(ref + " status %r but reviewer/signoff_date are empty" % st)
    for f in SCHEMA:
        if f not in ("options","distractor_analysis") and not isinstance(q[f], str):
            errors.append(ref + " %s is not a string" % f)


def main():
    path = sys.argv[1] if len(sys.argv) > 1 else "mrcp1-questions.js"
    bank = load(path)
    print("=" * 68)
    print("AMaC MRCP PART 1 BANK VALIDATOR  --  %s" % path)
    print("=" * 68)
    print("questions found        : %d" % len(bank))
    print("schema keys enforced   : %d" % len(SCHEMA))
    print("MRCP1_SUBDOMAINS       : %d" % len(MRCP1_SUBDOMAINS))
    print("-" * 68)
    for i, q in enumerate(bank): check(i, q)
    for d, n in sorted(Counter(q.get("id") for q in bank).items()):
        if n > 1: errors.append("id %r appears %d times -- ids must be unique" % (d, n))

    total = len(bank)
    print("\nKEYS TURNED (report only):")
    for st in STATUSES:
        n = sum(1 for q in bank if q.get("review_status") == st)
        label = {"draft":"neither key","cleared_verbally":"key one only",
                 "reviewed":"both keys","revise":"verdict failed"}[st]
        print("   %-18s %3d   %s" % (st, n, label))

    print("\nSUBDOMAIN SPLIT (report only):")
    counts = Counter(q.get("subdomain") for q in bank)
    for name in sorted(set(counts) | set(MRCP1_TARGET_SPLIT), key=str):
        n = counts.get(name, 0)
        pct = 100.0*n/total if total else 0.0
        t = MRCP1_TARGET_SPLIT.get(name)
        note = "no target declared" if t is None else "target %.1f%%  (%+.1f)" % (t, pct-t)
        print("   %-42s %3d  %5.1f%%   %s" % (str(name)[:42], n, pct, note))

    print("\nCORRECT-LETTER DISTRIBUTION (report only, band %.0f-%.0f%%):"
          % (LETTER_MIN_PCT, LETTER_MAX_PCT))
    letters = Counter(q.get("correct_letter") for q in bank)
    for L in OPTION_LETTERS:
        n = letters.get(L, 0); pct = 100.0*n/total if total else 0.0
        flag = "" if LETTER_MIN_PCT <= pct <= LETTER_MAX_PCT else "   <-- OUTSIDE BAND"
        print("   %s  %4d  %5.1f%%%s" % (L, n, pct, flag))

    print("\n" + "-"*68)
    if errors:
        print("FAILURES (%d):" % len(errors))
        for e in errors: print("  x " + e)
        print("\nBANK REJECTED.")
        return 1
    print("Bank valid. (Structure only -- clinical accuracy still needs a clinician.)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
