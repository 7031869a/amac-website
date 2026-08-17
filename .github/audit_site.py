#!/usr/bin/env python3
"""
AMaC website structural audit.

Runs from the repository root and checks the things that break silently:
  1. Broken internal links        (HARD FAIL)
  2. Banned editorial terms        (HARD FAIL)  -- "Kill Zone", "Automatic Fail"
  3. Old-prototype contamination   (HARD FAIL)  -- catches the wrong file being deployed
  4. Advertised counts vs reality  (HARD FAIL, except Master Cards = WARNING)
  5. Missing ground truth          (HARD FAIL)  -- a metric that cannot be checked
                                                   at all is a broken audit, not a pass
  6. Unmapped advertised numbers   (WARNING)   -- a displayed count with no metric
                                                   behind it; visible, not enforced

It does NOT check clinical accuracy. That always needs a human clinician.

Exit code 0 = clean (warnings allowed). Exit code 1 = at least one hard failure.
"""
import re, glob, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__))) if os.path.basename(os.getcwd()) == ".github" else "."
pages = {}
for f in glob.glob(os.path.join(ROOT, "*.html")):
    pages[os.path.basename(f)[:-5]] = open(f, encoding="utf-8", errors="ignore").read()

errors, warnings = [], []

# ---------------------------------------------------------------- ground truth
# Count one-per-record JSON ids inside each tool's data array.
def record_count(name):
    return len(re.findall(r'"id"\s*:', pages.get(name, "")))

# Some tools keep their cards in an external JS data file, not inline HTML.
# Handle both shapes: minified JSON ("id":"slug") and pretty-printed (id: "slug").
def js_record_count(filename):
    path = os.path.join(ROOT, filename)
    if not os.path.exists(path):
        return 0
    txt = open(path, encoding="utf-8", errors="ignore").read()
    return len(re.findall(r'"id"\s*:', txt)) or len(re.findall(r'(?m)^\s*id:\s*"', txt))

TRUTH = {
    "Examiner Brain": record_count("examiner-brain"),
    "Actor Traps":    record_count("actor-traps"),
    "OSCE Stations":  record_count("osce"),
    "Master Cards":   record_count("mastercards"),
    "Flashcards":     record_count("flashcards"),
    "Question Bank":  record_count("questions"),
    # PLAB 1 lives in an external data file, NOT inline in plab1.html.
    # Counting plab1.html returned 0, which silently disabled every PLAB 1 check.
    "PLAB 1":         js_record_count("plab1-questions.js"),
    # Wired in while the bank is still a scaffold, deliberately. A bank that is
    # only added to the audit once it is "ready" is a bank that ships unchecked.
    # NOTE: this counts every object in the file, reviewed or not. Structural
    # conformance is a separate gate -- see mrcp1-validate.py.
    "MRCP 1":         js_record_count("mrcp1-questions.js"),
    "Instant Fail Atlas": js_record_count("atlas-cards.js"),
}

# Metrics that are deliberately wired up before their bank exists. A pre-launch
# metric is allowed to have zero ground truth WITHOUT failing the build -- but it
# is still named out loud on every run, and the moment a page advertises a count
# for it the [no-truth] hard failure below fires anyway. The point is that an
# unwritten bank is not an excuse for being absent from the audit.
PRELAUNCH_METRICS = {
    "MRCP 1",   # scaffold only; remove from this set at the first authored question
}

# A metric with no ground truth cannot be validated at all. That is a broken
# audit, not a clean site -- fail hard rather than skipping in silence. This is
# exactly how the PLAB 1 counts went unchecked: the counter returned 0 and every
# downstream check quietly passed.
for _metric, _true in sorted(TRUTH.items()):
    if not _true:
        if _metric in PRELAUNCH_METRICS:
            warnings.append(
                f"[prelaunch] '{_metric}' has no ground truth yet (bank is empty). "
                f"Wired into the audit and watched; it will be enforced as soon as "
                f"the first record exists.")
        else:
            errors.append(
                f"[no-truth]  '{_metric}' has NO ground truth (0 records found) -- "
                f"every advertised '{_metric}' count is going UNVALIDATED")
    elif _metric in PRELAUNCH_METRICS:
        # The exemption must not outlive its purpose.
        warnings.append(
            f"[prelaunch] '{_metric}' now has {_true} record(s) -- remove it from "
            f"PRELAUNCH_METRICS so a zero count fails the build again.")

# ---------------------------------------------------------------- 1. links
valid = set(pages)
for n, h in pages.items():
    for tgt in sorted(set(re.findall(r'href="([^"#?:]+\.html)"', h))):
        if os.path.basename(tgt)[:-5] not in valid:
            errors.append(f"[link]      {n}.html -> missing target '{tgt}'")

# ---------------------------------------------------------------- 2. banned terms
BANNED = ["Kill Zone", "Automatic Fail", "Auto Fail", "Auto-Fail"]
for n, h in pages.items():
    for b in BANNED:
        if re.search(re.escape(b), h, re.I):
            errors.append(f"[term]      {n}.html contains banned term '{b}' (use INSTANT FAIL)")

# ---------------------------------------------------------------- 3. prototype contamination
# These strings exist ONLY in the old scrapped prototype, never in the real site.
PROTO = ["Medical Education Platform", "Chapter Types", "Learning Value"]
for n, h in pages.items():
    for p in PROTO:
        if p in h:
            errors.append(f"[prototype] {n}.html contains '{p}' -- wrong/old file deployed?")

# ---------------------------------------------------------------- 4. advertised counts
# Bare labels that mean "the whole PLAB 1 bank" when they appear on a PLAB 1
# page. Kept as an explicit set so a label like "Questions Each" (180 per mock
# paper) can never be mistaken for the bank total.
PLAB1_BANK_LABELS = {
    "questions", "sba questions", "bank total", "question bank", "total questions",
}

# The same idea for the MRCP Part 1 bank, on mrcp1* pages.
MRCP1_BANK_LABELS = {
    "questions", "bank total", "question bank", "total questions",
}

def metric_for(label, page=""):
    L = label.lower().strip()
    if "instant fail atlas" in L: return "Instant Fail Atlas"
    if "examiner brain" in L: return "Examiner Brain"
    if "actor trap"    in L and "simulator" not in L: return "Actor Traps"
    # MRCP before the PLAB tests: "MRCP Part 1" must not fall through to any
    # PLAB rule, and "Part 1"/"Part 2" here mean the MRCP parts, not PLAB.
    if "mrcp" in L:
        return "MRCP 1" if ("question" in L or "bank" in L) else None
    # A bare "plab" test is ambiguous: it fires on "... -- PLAB 2" labels too,
    # which are not the PLAB 1 bank. Match the exam explicitly.
    if "plab 1" in L or "plab1" in L:
        return "PLAB 1" if ("question" in L or "sba" in L or "bank" in L) else None
    if "plab 2" in L or "plab2" in L: return None
    if "osce"          in L and "circuit" not in L and "trainer" not in L: return "OSCE Stations"
    if "flashcard"     in L: return "Flashcards"
    # An unqualified bank label means the PLAB 1 bank on a PLAB 1 page and the
    # AKT bank anywhere else.
    if page.startswith("mrcp1"):
        return "MRCP 1" if L in MRCP1_BANK_LABELS else None
    if page.startswith("plab1"):
        return "PLAB 1" if L in PLAB1_BANK_LABELS else None
    if "question"      in L: return "Question Bank"
    if "master card"   in L: return "Master Cards"
    return None

def advertised(h):
    # Captures the displayed number plus an optional trailing "+" (a growth floor).
    out = []
    # Tolerate attributes before '>' (e.g. id="total-count") and the
    # <span class="hs-num">N</span><span class="hs-lbl">..</span> variant used
    # by the hub pages -- the original patterns matched neither, so those
    # numbers were invisible to this audit.
    out += [(n.replace(",", ""), l.strip()) for n, l in
            re.findall(r'class="hs-num"[^>]*>(\d[\d,]*\+?)</(?:div|span)>\s*'
                       r'<(?:div|span) class="hs-(?:label|lbl)"[^>]*>([^<]+)', h)]
    out += [(n.replace(",", ""), l.strip()) for n, l in
            re.findall(r'class="stat-num"[^>]*>(\d[\d,]*\+?)</div>\s*'
                       r'<div class="stat-label"[^>]*>([^<]+)', h)]
    for name, badge in re.findall(r'class="tc-name"[^>]*>([^<]+)</div>\s*<div class="tc-badge">([^<]+)', h, re.S):
        m = re.match(r'(\d[\d,]*\+?)', badge.strip())
        if m:
            out.append((m.group(1).replace(",", ""), name.strip()))
    # Entrance-page door cards: <div class="door-stats"><b>N</b> Label<br>...
    # Only the PLAB 1 door is decoded. The other doors mix metrics (stations,
    # tools, handbook pages) that this audit has no ground truth for, so
    # reading them would produce false failures, not coverage.
    for block in re.findall(r'<a class="door plab1"[^>]*>(.*?)</a>', h, re.S):
        for n, l in re.findall(r'<b>(\d[\d,]*\+?)</b>\s*([^<]*)', block):
            if "question" in l.lower() or "sba" in l.lower():
                out.append((n.replace(",", ""), "PLAB 1 " + l.strip()))
    return out

# Every page that displays a headline count. PLAB 1 numbers appear on far more
# than the original three, and a page missing from this tuple is never checked.
COUNT_PAGES = ("index", "landing", "tools", "plab2",
               "plab1", "plab1-hub", "plab1-exams", "plab1-study",
               "mrcp", "mrcp1", "mrcp1-study", "mrcp1-exams",
               "mrcp1-mock", "mrcp1-exam-runner")

_unmapped_seen = set()

for pg in COUNT_PAGES:
    if pg not in pages:
        continue
    for num, label in advertised(pages[pg]):
        metric = metric_for(label, pg)
        if not metric:
            # An unmapped label is either a number nobody is checking or a gap
            # in metric_for(). Both are worth seeing. Kept a WARNING because the
            # site legitimately displays numbers with no ground truth behind them.
            if (pg, label) not in _unmapped_seen:
                _unmapped_seen.add((pg, label))
                warnings.append(
                    f"[no-metric] {pg}.html shows {num} for '{label}' -- no metric "
                    f"mapped, so this number is never validated")
            continue
        true_n = TRUTH[metric]
        if not true_n:
            # Never treat "no ground truth" as a pass -- that is exactly how the
            # PLAB 1 counts went unchecked for so long.
            errors.append(
                f"[no-truth]  {pg}.html shows {num} for '{metric}', but there is "
                f"no ground truth to validate it against")
            continue
        is_floor = num.endswith("+")
        shown = int(num.rstrip("+"))
        if is_floor:
            # "N+" is honest as long as reality is at least N; only flag an over-claim.
            mismatch = true_n < shown
            detail = f"shows {num} for {metric}, but the data file has only {true_n}"
        else:
            mismatch = true_n != shown
            detail = f"shows {num} for {metric}, but the data file has {true_n}"
        if mismatch:
            msg = f"[count]     {pg}.html {detail}"
            if metric == "Master Cards":
                warnings.append(msg + "  (cards vs chapters -- intentional? your call)")
            else:
                errors.append(msg)

# ---------------------------------------------------------------- report
print("=" * 64)
print(f"AMaC SITE AUDIT  --  {len(pages)} pages")
print("=" * 64)
print("Live counts derived from data files:")
for k, v in TRUTH.items():
    print(f"   {k:16} {v}")
print("-" * 64)

if errors:
    print(f"\nHARD FAILURES ({len(errors)}):")
    for e in errors:
        print("  ✗ " + e)
if warnings:
    print(f"\nWARNINGS ({len(warnings)}) -- non-blocking:")
    for w in warnings:
        print("  ⚠ " + w)
if not errors and not warnings:
    print("\n✓ All clean. (Structural only -- clinical accuracy still needs a clinician.)")
elif not errors:
    print("\n✓ No hard failures. Review warnings above.")

print()
sys.exit(1 if errors else 0)
