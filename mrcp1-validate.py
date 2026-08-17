#!/usr/bin/env python3
"""
AMaC — MRCP Part 1 question bank validator.

Run from the repository root:

    python mrcp1-validate.py            # validates mrcp1-questions.js
    python mrcp1-validate.py <file.js>  # validates another bank file

Exit code 0 = every question conforms. Exit code 1 = at least one breach.

HARD FAILURES (any one of these exits non-zero):
  • a key that is not in the schema, a schema key that is missing, or a
    key order that differs from any other object -- one shape, enforced
  • subdomain not present in MRCP1_SUBDOMAINS
  • options keys != exactly A, B, C, D, E
  • correct_letter not present in options
  • distractor_analysis keys != exactly the four non-correct letters
  • duplicate id

REPORTED BUT NOT FAILED:
  • count per subdomain against MRCP1_TARGET_SPLIT
  • correct_letter distribution, flagged if any letter falls outside
    15-25%. The PLAB 1 bank drifted to B 32.0% / E 9.9% because nothing
    ever looked. This is looked at from question one.

It does NOT check clinical accuracy or whether an answer is right.
That always needs a clinician.
"""
import io
import json
import os
import re
import sys
from collections import Counter, OrderedDict

# The seven sub-domains of the Federation's published Part 1 blueprint,
# transcribed verbatim. Do not tidy, re-word, re-case or re-order these strings:
# they are the published names and the validator matches them exactly.
MRCP1_SUBDOMAINS = {
    "Statistics, epidemiology and evidence-based medicine",
    "Clinical biochemistry and metabolism",
    "Clinical physiology",
    "Immunology",
    "Clinical anatomy",
    "Genetics",
    "Cell, molecular and membrane biology",
}

# The blueprint's own weighting, as PERCENTAGES rather than our rounded counts.
# Derived from the published 5/4/4/4/3/3/2 out of 25, which is 20/16/16/16/12/12/8.
# Percentages are the target because they are scale-free: a count target would
# silently become wrong the moment the bank is a different size.
#
# v1 realisation at 80 questions is 16/13/13/12/10/10/6 (= 80). Those counts are
# rounded, so they cannot hit the targets exactly and the split report will show
# small drift -- correctly, not as an error:
#     stats         16/80 = 20.00%  vs 20.0   (+0.00)
#     biochemistry  13/80 = 16.25%  vs 16.0   (+0.25)
#     physiology    13/80 = 16.25%  vs 16.0   (+0.25)
#     immunology    12/80 = 15.00%  vs 16.0   (-1.00)
#     anatomy       10/80 = 12.50%  vs 12.0   (+0.50)
#     genetics      10/80 = 12.50%  vs 12.0   (+0.50)
#     cell/molecular 6/80 =  7.50%  vs  8.0   (-0.50)
# Drift of this size at n=80 is arithmetic, not a blueprint breach. The split
# report never fails the build; it is there to catch real skew as n grows.
MRCP1_TARGET_SPLIT = {
    "Statistics, epidemiology and evidence-based medicine": 20.0,
    "Clinical biochemistry and metabolism":                 16.0,
    "Clinical physiology":                                  16.0,
    "Immunology":                                           16.0,
    "Clinical anatomy":                                     12.0,
    "Genetics":                                             12.0,
    "Cell, molecular and membrane biology":                  8.0,
}

# The one permitted shape. Order is part of the contract: every object must
# carry these keys, in this sequence, so the bank stays diffable and a
# hand-edited question cannot quietly drift into a variant shape.
SCHEMA = (
    "id",
    "subdomain",
    "topic",
    "difficulty",
    "stem",
    "options",
    "correct_letter",
    "why_correct",
    "distractor_analysis",
    "generalisation",
    "review_status",
    "reviewer",
    "signoff_date",
)

OPTION_LETTERS = ("A", "B", "C", "D", "E")
LETTER_MIN_PCT = 15.0
LETTER_MAX_PCT = 25.0
DEFAULT_DATA = "mrcp1-questions.js"

errors = []


def fail(qref, msg):
    errors.append("%s %s" % (qref, msg))


def load_bank(path):
    """Pull the JSON array out of `window.MRCP1_QUESTIONS = [...];`."""
    if not os.path.exists(path):
        print("FATAL: %s not found (run from the repository root)" % path)
        sys.exit(1)
    txt = io.open(path, encoding="utf-8").read()
    try:
        start = txt.index("[")
        end = txt.rindex("]") + 1
    except ValueError:
        print("FATAL: %s contains no JSON array" % path)
        sys.exit(1)
    try:
        # object_pairs_hook keeps key order so the shape check can see it.
        data = json.loads(txt[start:end], object_pairs_hook=OrderedDict)
    except ValueError as exc:
        print("FATAL: %s is not valid JSON -- %s" % (path, exc))
        sys.exit(1)
    if not isinstance(data, list):
        print("FATAL: %s did not parse to a list" % path)
        sys.exit(1)
    return data


def check_question(idx, q):
    qid = q.get("id") if isinstance(q, dict) else None
    qref = "[%d]%s" % (idx, (" id=%s" % qid) if qid else " (no id)")

    if not isinstance(q, dict):
        fail(qref, "is not an object")
        return

    # ---- shape: exact keys, exact order ----------------------------------
    keys = tuple(q.keys())
    if keys != SCHEMA:
        unknown = [k for k in keys if k not in SCHEMA]
        missing = [k for k in SCHEMA if k not in keys]
        if unknown:
            fail(qref, "has unknown key(s): %s" % ", ".join(sorted(unknown)))
        if missing:
            fail(qref, "is missing key(s): %s" % ", ".join(missing))
        if not unknown and not missing:
            fail(qref, "has the right keys in the wrong order: %s" % ", ".join(keys))
        # Shape is wrong; the per-field checks below would only add noise.
        return

    # ---- subdomain --------------------------------------------------------
    sub = q["subdomain"]
    if sub not in MRCP1_SUBDOMAINS:
        if not MRCP1_SUBDOMAINS:
            fail(qref, "subdomain %r rejected: MRCP1_SUBDOMAINS is empty "
                       "(populate it from the published blueprint)" % sub)
        else:
            fail(qref, "subdomain %r is not in MRCP1_SUBDOMAINS" % sub)

    # ---- options ----------------------------------------------------------
    opts = q["options"]
    if not isinstance(opts, dict):
        fail(qref, "options is not an object")
        return
    opt_keys = tuple(sorted(opts.keys()))
    if opt_keys != OPTION_LETTERS:
        fail(qref, "options keys are %s, expected A, B, C, D, E"
                   % (", ".join(opt_keys) if opt_keys else "(none)"))
        return
    for letter in OPTION_LETTERS:
        if not isinstance(opts[letter], str) or not opts[letter].strip():
            fail(qref, "option %s is empty or not a string" % letter)

    # ---- correct_letter ---------------------------------------------------
    correct = q["correct_letter"]
    if correct not in opts:
        fail(qref, "correct_letter %r is not one of the options" % correct)
        return

    # ---- distractor_analysis ----------------------------------------------
    da = q["distractor_analysis"]
    if not isinstance(da, dict):
        fail(qref, "distractor_analysis is not an object")
        return
    expected = tuple(sorted(l for l in OPTION_LETTERS if l != correct))
    got = tuple(sorted(da.keys()))
    if got != expected:
        fail(qref, "distractor_analysis keys are %s, expected %s "
                   "(the four letters other than %s)"
                   % (", ".join(got) if got else "(none)",
                      ", ".join(expected), correct))
    else:
        for letter in expected:
            if not isinstance(da[letter], str) or not da[letter].strip():
                fail(qref, "distractor_analysis[%s] is empty or not a string" % letter)

    # ---- remaining string fields -----------------------------------------
    for field in ("id", "topic", "difficulty", "stem", "why_correct",
                  "generalisation", "review_status", "reviewer", "signoff_date"):
        if not isinstance(q[field], str):
            fail(qref, "%s is not a string" % field)


def main():
    path = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_DATA
    bank = load_bank(path)

    print("=" * 68)
    print("AMaC MRCP PART 1 BANK VALIDATOR  --  %s" % path)
    print("=" * 68)
    print("questions found        : %d" % len(bank))
    print("schema keys enforced   : %d" % len(SCHEMA))
    print("MRCP1_SUBDOMAINS       : %d %s" % (
        len(MRCP1_SUBDOMAINS),
        "(EMPTY -- every question will be rejected, by design)"
        if not MRCP1_SUBDOMAINS else ""))
    print("-" * 68)

    for idx, q in enumerate(bank):
        check_question(idx, q)

    # ---- duplicate ids -----------------------------------------------------
    ids = [q.get("id") for q in bank if isinstance(q, dict) and isinstance(q.get("id"), str)]
    for dup, n in sorted(Counter(ids).items()):
        if n > 1:
            errors.append("id %r appears %d times -- ids must be unique" % (dup, n))

    # ---- REPORT ONLY: subdomain split -------------------------------------
    print("\nSUBDOMAIN SPLIT (report only, never fails):")
    counts = Counter(q.get("subdomain") for q in bank if isinstance(q, dict))
    total = len(bank)
    if not counts:
        print("   (no questions)")
    else:
        names = sorted(set(counts) | set(MRCP1_TARGET_SPLIT), key=lambda s: str(s))
        for name in names:
            n = counts.get(name, 0)
            pct = (100.0 * n / total) if total else 0.0
            target = MRCP1_TARGET_SPLIT.get(name)
            if target is None:
                note = "no target declared"
            else:
                note = "target %.1f%%  (%+.1f)" % (target, pct - target)
            print("   %-34s %4d  %5.1f%%   %s" % (str(name)[:34], n, pct, note))
    if not MRCP1_TARGET_SPLIT:
        print("   -- MRCP1_TARGET_SPLIT is empty, so nothing to compare against yet.")

    # ---- REPORT ONLY: answer-letter distribution ---------------------------
    print("\nCORRECT-LETTER DISTRIBUTION (report only, never fails):")
    print("   target band %.0f-%.0f%% per letter. PLAB 1 drifted to B 32.0%% / "
          "E 9.9%% unwatched." % (LETTER_MIN_PCT, LETTER_MAX_PCT))
    letters = Counter(q.get("correct_letter") for q in bank if isinstance(q, dict))
    if not total:
        print("   (no questions)")
    else:
        for letter in OPTION_LETTERS:
            n = letters.get(letter, 0)
            pct = 100.0 * n / total
            flag = "" if LETTER_MIN_PCT <= pct <= LETTER_MAX_PCT else "   <-- OUTSIDE BAND"
            print("   %s  %5d  %5.1f%%%s" % (letter, n, pct, flag))
        stray = sorted(l for l in letters if l not in OPTION_LETTERS)
        if stray:
            print("   unexpected letter values: %s" % ", ".join(map(repr, stray)))
        if total < 20:
            print("   (n=%d -- too few questions for the percentages to mean much yet, "
                  "but the watch starts now)" % total)

    # ---- verdict -----------------------------------------------------------
    print("\n" + "-" * 68)
    if errors:
        print("FAILURES (%d):" % len(errors))
        for e in errors:
            print("  x " + e)
        print("\nBANK REJECTED.")
        return 1
    print("Bank valid. (Structure only -- clinical accuracy still needs a clinician.)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
