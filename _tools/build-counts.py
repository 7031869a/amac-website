#!/usr/bin/env python3
"""
_tools/build-counts.py — keep every headline number on the site in step with the data.

    python _tools/build-counts.py          count, write data/counts.json, rewrite HTML fallbacks
    python _tools/build-counts.py --check  count and report only; exit 1 if anything is stale

What it does:

1. Counts the live data arrays (question banks, station libraries, card decks,
   the MRCS Part A review files) and writes data/counts.json.

2. Rewrites the static fallback inside every tagged element, so the markup is
   correct without JavaScript and for crawlers:

       <span data-count="aktQuestions">1,569</span>
       <span data-count="plab1Questions" data-count-plain>1330</span>   (no separator)

3. Rewrites numbers inside attributes (meta descriptions and the like). The
   attribute names the key and the words that follow the number:

       <meta data-count-content="cpsaStations:CPSA stations;aktQuestions:AKT questions"
             name="description" content="294 CPSA stations, 1,569 AKT questions ...">

   Each number keeps its original style: a figure written with a thousands
   separator stays separated, one written without stays plain.

counts.js fills the same elements at runtime from data/counts.json.

Keys must start with a letter. A data-count whose value is only digits (the
question-count chips on plab1-exams.html use data-count="10" etc.) is left
alone by both this script and counts.js.

Files are read and written as bytes, so line endings are never changed.
"""

import glob
import json
import os
import re
import sys
from datetime import date

# The script lives in _tools/ (not published by GitHub Pages); the site is one level up.
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def read(rel):
    with open(os.path.join(ROOT, rel), 'rb') as f:
        return f.read().decode('utf-8')


# ---------------------------------------------------------------- counting

def literal_start(text, name):
    m = re.search(r'(?:window\.|\b(?:const|var|let)\s+)' + re.escape(name) + r'\s*=\s*(?=[\[{])', text)
    if not m:
        raise LookupError('%s not found' % name)
    return m.end()


def top_level_items(text, start):
    """Count the items at depth 1 of the array or object literal at text[start].
    Works on plain JavaScript literals (unquoted keys, single quotes, template
    strings), not only strict JSON."""
    opener = text[start]
    depth, i, n = 0, start, len(text)
    items, pending = 0, False
    while i < n:
        c = text[i]
        if c in '"\'`':
            q = c
            i += 1
            while i < n and text[i] != q:
                i += 2 if text[i] == '\\' else 1
            if depth == 1:
                pending = True
        elif c == '/' and text[i + 1:i + 2] == '/':
            i = text.find('\n', i)
            i = n if i < 0 else i
            continue
        elif c == '/' and text[i + 1:i + 2] == '*':
            i = text.find('*/', i) + 1
        elif c in '[{(':
            depth += 1
            if depth == 2:
                pending = True
        elif c in ']})':
            depth -= 1
            if depth == 0:
                return items + (1 if pending else 0)
        elif depth == 1 and c == ',':
            items += 1 if pending else 0
            pending = False
        elif depth == 1 and not c.isspace():
            pending = True
        i += 1
    raise ValueError('unterminated literal')


def json_array(rel, name):
    text = read(rel)
    return json.JSONDecoder().raw_decode(text, literal_start(text, name))[0]


def count(rel, name):
    text = read(rel)
    s = literal_start(text, name)
    try:
        return len(json.JSONDecoder().raw_decode(text, s)[0])
    except ValueError:
        return top_level_items(text, s)


def load_json(rel):
    return json.loads(read(rel))


def measure():
    counts, problems = {}, []

    def safe(key, fn):
        try:
            counts[key] = fn()
        except Exception as exc:  # noqa: BLE001
            problems.append('%s: %s: %s' % (key, type(exc).__name__, exc))

    def domains(rel, name):
        return len({q['domain'] for q in json_array(rel, name)})

    safe('aktQuestions', lambda: count('questions.html', 'QUESTIONS'))
    safe('aktDomains', lambda: domains('questions.html', 'QUESTIONS'))
    safe('plab1Questions', lambda: count('plab1-questions.js', 'PLAB1_QUESTIONS'))
    safe('plab1Domains', lambda: domains('plab1-questions.js', 'PLAB1_QUESTIONS'))
    safe('plab1Papers', lambda: count('plab1-papers.js', 'PLAB1_PAPERS'))
    safe('cpsaStations', lambda: count('cpsa-stations.html', 'STATIONS'))
    safe('osceStations', lambda: count('osce.html', 'STATIONS'))
    safe('flashcards', lambda: count('flashcards.html', 'CARDS'))
    safe('cpsaFlashcards', lambda: count('cpsa-flashcards.html', 'CARDS'))
    safe('atlasCards', lambda: count('atlas-cards.js', 'ATLAS_CARDS'))
    safe('masterCards', lambda: count('mastercards.html', 'CARDS'))
    safe('masterCardsUkmla', lambda: count('mastercards-ukmla.html', 'CARDS'))
    safe('actorTraps', lambda: count('actor-traps.html', 'TRAPS'))
    safe('examinerBrain', lambda: count('examiner-brain.html', 'BRAIN'))
    safe('sayThisCpsa', lambda: count('say-never-say.html', 'CARDS'))
    safe('sayThisPlab2', lambda: count('say-never-say-plab2.html', 'CARDS'))
    safe('doNeverDo', lambda: count('do-never-do.html', 'CARDS'))
    safe('performanceBands', lambda: count('performance-bands.html', 'BANDS'))
    safe('mockCircuitStations', lambda: count('mock-circuit.html', 'STATIONS'))
    safe('simulatorStations', lambda: count('simulator.html', 'STATIONS'))
    safe('actorTrapSimStations', lambda: count('actor-trap-simulator.html', 'ORDER'))
    safe('stationPlannerStations', lambda: count('station-planner.html', 'FREQ'))
    safe('mrcp1Questions', lambda: count('mrcp1-questions.js', 'MRCP1_QUESTIONS'))
    try:
        reviewed = load_json('data/reviewed.json')
        # the pending pool was withdrawn from the site on 24 Sep 2026
        counts['mrcsReviewed'] = len(reviewed)
    except Exception as exc:  # noqa: BLE001
        problems.append('mrcs: %s: %s' % (type(exc).__name__, exc))
    return counts, problems


# ---------------------------------------------------------------- rewriting

NUM = r'\d{1,3}(?:,\d{3})+|\d+'
ELEM = re.compile(r'<([a-zA-Z][\w-]*)(\s[^>]*?\bdata-count="([A-Za-z]\w*)"[^>]*)>([^<]*)</\1>')
ATTR = re.compile(r'<[a-zA-Z][^>]*?\bdata-count-([a-z-]+)="([^"]+)"[^>]*>')


def fmt(value, like):
    return '{:,}'.format(value) if ',' in like else str(value)


def rewrite(html, counts, errors, where):
    def elem(m):
        key, inner = m.group(3), m.group(4)
        if key not in counts:
            errors.append('%s: unknown key %r' % (where, key))
            return m.group(0)
        if not re.fullmatch(NUM, inner.strip()):
            errors.append('%s: data-count=%r holds %r, not a number' % (where, key, inner))
            return m.group(0)
        plain = re.search(r'\bdata-count-plain\b', m.group(2))
        new = str(counts[key]) if plain else '{:,}'.format(counts[key])
        return m.group(0)[:m.start(4) - m.start(0)] + new + m.group(0)[m.end(4) - m.start(0):]

    def tag(m):
        t = m.group(0)
        attr, spec = m.group(1), m.group(2)
        if attr == 'plain':
            return t
        am = re.search(r'\s' + re.escape(attr) + r'="([^"]*)"', t)
        if not am:
            errors.append('%s: data-count-%s but no %s attribute' % (where, attr, attr))
            return t
        val = am.group(1)
        for pair in spec.split(';'):
            key, _, phrase = pair.partition(':')
            if key not in counts:
                errors.append('%s: unknown key %r in data-count-%s' % (where, key, attr))
                continue
            pat = re.compile(r'(?<![\d,])(' + NUM + r')(\+?\s+' + re.escape(phrase) + r')')
            hits = pat.findall(val)
            if len(hits) != 1:
                errors.append('%s: %r found %d times in %s' % (where, phrase, len(hits), attr))
                continue
            val = pat.sub(lambda x: fmt(counts[key], x.group(1)) + x.group(2), val)
        return t[:am.start(1)] + val + t[am.end(1):]

    html = ELEM.sub(elem, html)
    return ATTR.sub(tag, html)


def main():
    check = '--check' in sys.argv[1:]
    counts, problems = measure()
    if problems:
        print('COULD NOT COUNT:', file=sys.stderr)
        for p in problems:
            print('  - ' + p, file=sys.stderr)
        return 1

    errors, changed = [], []
    for path in sorted(glob.glob(os.path.join(ROOT, '*.html'))):
        rel = os.path.basename(path)
        old = read(rel)
        if 'data-count' not in old:
            continue
        new = rewrite(old, counts, errors, rel)
        if new != old:
            changed.append(rel)
            if not check:
                with open(path, 'wb') as f:
                    f.write(new.encode('utf-8'))
    if errors:
        print('MARKUP PROBLEMS:', file=sys.stderr)
        for e in errors:
            print('  - ' + e, file=sys.stderr)

    out = dict(counts, generated=date.today().isoformat())
    json_path = os.path.join(ROOT, 'data', 'counts.json')
    try:
        prev = json.loads(read('data/counts.json'))
        prev.pop('generated', None)
    except (OSError, ValueError):
        prev = None
    stale_json = prev != counts
    if stale_json and check:
        if prev is None:
            print('stale: data/counts.json is missing or unreadable')
        else:
            diff = ['%s %s -> %s' % (k, prev.get(k), counts.get(k))
                    for k in sorted(set(prev) | set(counts)) if prev.get(k) != counts.get(k)]
            print('stale: data/counts.json (%s)' % '; '.join(diff))
    if stale_json and not check:
        with open(json_path, 'wb') as f:
            f.write((json.dumps(out, indent=2) + '\n').encode('utf-8'))

    width = max(len(k) for k in counts)
    for k, v in counts.items():
        print('  %-*s  %s' % (width, k, v))
    verb = 'stale' if check else 'updated'
    print('\n%s: %s' % (verb, ', '.join(changed) if changed else 'no HTML files'))
    if check:
        return 1 if (changed or errors or stale_json) else 0
    return 1 if errors else 0


if __name__ == '__main__':
    sys.exit(main())
