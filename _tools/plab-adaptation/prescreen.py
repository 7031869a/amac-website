"""Duplicate pre-screen for a PLAB 1 adaptation batch. Run BEFORE writing (README step 1).

Compares each candidate parked entry with the whole live PLAB 1 bank (plab1-questions.js, including the
one-line BX recall questions) and decides whether it is a likely repeat of something already live.

  BATCH_DIR=_tools/plab-adaptation/work/b03 python _tools/plab-adaptation/prescreen.py [candidates.json]

candidates.json (default: $BATCH_DIR/ctx/source.json) may be the batch's source.json
([{live_plab_copy, akt_source}, ...]), a list of parked entries, or a list of parked ids / source_akt_ids.

Two tests per candidate:
  1. TF-IDF cosine (words + word pairs) on presentation + stem + correct answer text; top 15 live matches listed.
     likely_repeat if the best score >= --threshold (default 0.45; see README for the batch 2 calibration).
  2. Same keyed answer text AND same presentation/diagnosis as a live question -> likely_repeat regardless of score.
Live questions built from the same source_akt_id are ignored (they are this source's own adaptation).

Writes to $BATCH_DIR/ctx/:
  prescreen.json  every candidate: likely_repeat, matching live ids + scores, top 15 matches
  retire.json     likely repeats -> retirement list, reason = the matching live ids
  to_writers.json the remaining candidates, in the same format as the input -> the only items that go to writers
Pure Python (no third-party packages); opens every file as UTF-8, so it runs on Windows without PYTHONUTF8.
"""
import argparse, json, math, os, re, sys
from collections import Counter

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
STOP = set('''a an and are as at be been but by can do does for from had has have he her his how i if in into is it its
may most of on or she should that the their them there these they this to was were what when which who will with would
you your patient patients year old years man woman boy girl presents presented history following likely next best
appropriate step management diagnosis'''.split())


def load_live(path):
    t = open(path, encoding='utf-8').read()
    live, _ = json.JSONDecoder().raw_decode(t, t.index('['))
    return live


def norm(s):
    s = re.sub(r'^[A-E]\.\s+', '', str(s or '').strip())
    return re.sub(r'[^a-z0-9 ]+', ' ', s.lower()).split()


def answer_text(q):
    o, L = q.get('options') or {}, q.get('correct_letter')
    return o.get(L) or q.get('correct_answer', '')


def doc(q):
    return ' '.join([q.get('presentation', ''), q.get('stem', ''), answer_text(q)])


def tokens(text):
    w = [x for x in re.findall(r'[a-z0-9]+', text.lower()) if x not in STOP and len(x) > 1]
    return w + [a + '_' + b for a, b in zip(w, w[1:])]


class Tfidf:
    def __init__(self, corpus):
        self.df = Counter()
        for toks in corpus:
            self.df.update(set(toks))
        self.n = len(corpus)

    def vec(self, toks):
        tf = Counter(toks)
        v = {t: (1 + math.log(c)) * (math.log((1 + self.n) / (1 + self.df.get(t, 0))) + 1) for t, c in tf.items()}
        n = math.sqrt(sum(x * x for x in v.values())) or 1.0
        return {t: x / n for t, x in v.items()}


def cos(a, b):
    if len(a) > len(b):
        a, b = b, a
    return sum(x * b.get(t, 0.0) for t, x in a.items())


def same_presentation(p1, p2):
    a, b = set(norm(p1)) - STOP, set(norm(p2)) - STOP
    if not a or not b:
        return False
    return a == b or a <= b or b <= a or len(a & b) / len(a | b) >= 0.6


def load_candidates(path, parked):
    data = json.load(open(path, encoding='utf-8'))
    by_id = {p['id']: p for p in parked}
    by_src = {p['source_akt_id']: p for p in parked}
    out = []
    for x in data:
        if isinstance(x, str):
            q = by_id.get(x) or by_src.get(x)
            if q is None:
                sys.exit(f'candidate {x} is not in the parked list')
        elif 'live_plab_copy' in x:
            q = x['live_plab_copy']
        else:
            q = x
        out.append((x, q))
    return out


def main():
    B = os.environ.get('BATCH_DIR', '_tools/plab-adaptation/work/b01')
    ap = argparse.ArgumentParser()
    ap.add_argument('candidates', nargs='?', default=os.path.join(B, 'ctx', 'source.json'))
    ap.add_argument('--live', default=os.path.join(ROOT, 'plab1-questions.js'))
    ap.add_argument('--parked', default=os.path.join(ROOT, '_parked', 'plab1-adaptation-ii-unadapted.json'))
    ap.add_argument('--out-dir', default=os.path.join(B, 'ctx'))
    ap.add_argument('--threshold', type=float, default=0.45)
    ap.add_argument('--top', type=int, default=15)
    a = ap.parse_args()

    live = load_live(a.live)
    parked = json.load(open(a.parked, encoding='utf-8'))
    cands = load_candidates(a.candidates, parked)

    live_toks = [tokens(doc(q)) for q in live]
    cand_toks = [tokens(doc(q)) for _, q in cands]
    tf = Tfidf(live_toks + cand_toks)
    live_vecs = [tf.vec(t) for t in live_toks]
    live_ans = [' '.join(norm(answer_text(q))) for q in live]

    results, retire, keep = [], [], []
    for (raw, q), toks in zip(cands, cand_toks):
        src = q.get('source_akt_id')
        v = tf.vec(toks)
        scored = sorted(((cos(v, lv), i) for i, lv in enumerate(live_vecs)
                         if not (src and live[i].get('source_akt_id') == src)), reverse=True)[:a.top]
        ans = ' '.join(norm(answer_text(q)))
        ap_hits = [live[i]['id'] for i, l in enumerate(live)
                   if ans and live_ans[i] == ans and not (src and l.get('source_akt_id') == src)
                   and same_presentation(q.get('presentation'), l.get('presentation'))]
        score_hits = [(live[i]['id'], round(s, 3)) for s, i in scored if s >= a.threshold]
        likely = bool(ap_hits or score_hits)
        rec = {
            'parked_id': q.get('id'), 'source_akt_id': src, 'presentation': q.get('presentation'),
            'correct_answer': answer_text(q), 'likely_repeat': likely,
            'matching_ids': sorted(set(ap_hits) | {i for i, _ in score_hits}),
            'score_matches': [{'id': i, 'score': s} for i, s in score_hits],
            'same_answer_and_presentation': ap_hits,
            'top_matches': [{'id': live[i]['id'], 'score': round(s, 3), 'presentation': live[i].get('presentation'),
                             'correct_answer': answer_text(live[i])} for s, i in scored],
        }
        results.append(rec)
        if likely:
            why = []
            if score_hits:
                why.append('TF-IDF cosine >= %.2f with %s' % (a.threshold, ', '.join(f'{i} ({s})' for i, s in score_hits)))
            if ap_hits:
                why.append('same keyed answer and presentation as ' + ', '.join(ap_hits))
            retire.append({'parked_id': q.get('id'), 'source_akt_id': src, 'presentation': q.get('presentation'),
                           'matching_ids': rec['matching_ids'], 'reason': 'Likely repeat of a live question: ' + '; '.join(why)})
        else:
            keep.append(raw)

    os.makedirs(a.out_dir, exist_ok=True)
    meta = {'threshold': a.threshold, 'top': a.top, 'live_questions': len(live), 'candidates': len(cands),
            'likely_repeats': len(retire)}
    for name, obj in (('prescreen.json', {'meta': meta, 'candidates': results}),
                      ('retire.json', retire), ('to_writers.json', keep)):
        with open(os.path.join(a.out_dir, name), 'w', encoding='utf-8', newline='\n') as f:
            json.dump(obj, f, ensure_ascii=False, indent=1)
            f.write('\n')
    print(f"{len(cands)} candidates vs {len(live)} live: {len(retire)} likely repeats -> retire.json, "
          f"{len(keep)} -> to_writers.json (threshold {a.threshold})")


if __name__ == '__main__':
    main()
