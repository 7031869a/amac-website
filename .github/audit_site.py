#!/usr/bin/env python3
"""
AMaC website structural audit.

Runs from the repository root and checks the things that break silently:
  1. Broken internal links        (HARD FAIL)
  2. Banned editorial terms        (HARD FAIL)  -- "Kill Zone", "Automatic Fail"
  3. Old-prototype contamination   (HARD FAIL)  -- catches the wrong file being deployed
  4. Advertised counts vs reality  (HARD FAIL, except Master Cards = WARNING)

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
    "PLAB 1":         record_count("plab1"),
    "Instant Fail Atlas": js_record_count("atlas-cards.js"),
}

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
def metric_for(label):
    L = label.lower()
    if "instant fail atlas" in L: return "Instant Fail Atlas"
    if "examiner brain" in L: return "Examiner Brain"
    if "actor trap"    in L: return "Actor Traps"
    if "plab"          in L: return "PLAB 1"
    if "osce"          in L and "circuit" not in L: return "OSCE Stations"
    if "flashcard"     in L: return "Flashcards"
    if "question"      in L and "plab" not in L: return "Question Bank"
    if "master card"   in L: return "Master Cards"
    return None

def advertised(h):
    # Captures the displayed number plus an optional trailing "+" (a growth floor).
    out = []
    out += [(n.replace(",", ""), l.strip()) for n, l in
            re.findall(r'class="hs-num">(\d[\d,]*\+?)</div><div class="hs-label">([^<]+)', h)]
    out += [(n.replace(",", ""), l.strip()) for n, l in
            re.findall(r'class="stat-num">(\d[\d,]*\+?)</div><div class="stat-label">([^<]+)', h)]
    for name, badge in re.findall(r'class="tc-name"[^>]*>([^<]+)</div>\s*<div class="tc-badge">([^<]+)', h, re.S):
        m = re.match(r'(\d[\d,]*\+?)', badge.strip())
        if m:
            out.append((m.group(1).replace(",", ""), name.strip()))
    return out

for pg in ("index", "tools", "plab2"):
    if pg not in pages:
        continue
    for num, label in advertised(pages[pg]):
        metric = metric_for(label)
        if not metric:
            continue
        true_n = TRUTH[metric]
        if not true_n:
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
