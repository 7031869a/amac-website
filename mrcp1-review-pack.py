#!/usr/bin/env python3
"""
AMaC — MRCP Part 1 clinical review pack.

Two commands, run from the repository root:

    python mrcp1-review-pack.py build [questions.js ...]
        Collects every question with review_status == "draft" from the files
        given (default: mrcp1-questions.js), shuffles them, and writes:
            mrcp1-review-pack.html   -- what the reviewer opens
            mrcp1-review-key.json    -- maps the pack's opaque tokens (R01..) back to
                                question ids. The pack itself never contains a
                                question id, because the id blocks are
                                themselves an authorship tell. Keep this file:
                                without it the returned verdicts cannot be
                                matched to questions.

    python mrcp1-review-pack.py apply <returned.json> <questions.js>
        Reads the reviewer's returned file and updates review_status,
        reviewer and signoff_date on the matching questions. Writes a .bak
        first. Only questions that passed all three verdicts become
        "reviewed"; anything else becomes "revise".

WHY IT SHUFFLES
Batch 1 is written by two hands. If the reviewer can see which questions came
from which author, they read one set more generously than the other and the
comparison is worthless. The shuffle is recorded by seed so the mapping is
reproducible.

THE LIMIT OF THAT, STATED PLAINLY
The shuffle stops the two sets being grouped. It does not blind authorship.
The sub-domain tag is on every question and the split is by sub-domain, so
anyone who knows how batch 1 was divided can recover the author of every
question from the tag alone. This is a deliberate trade: the brief requires
the tag. If the comparison ever matters more than the tag does, drop
subdomain from render() and keep it in the key file.

WHAT IT DOES NOT DO
It does not mark anything as reviewed on its own, and it never invents a
reviewer name or a sign-off date -- both come from the returned file. A
question that was not reviewed stays "draft".
"""
import io
import json
import os
import random
import sys
import html
import hashlib
import time
from collections import OrderedDict, Counter

SEED = 20260812          # recorded so the shuffle is reproducible
PACK = "mrcp1-review-pack.html"
KEY = "mrcp1-review-key.json"

VERDICTS = [
    ("keyed", "Is the keyed answer correct?"),
    ("distractors", "Is every distractor genuinely wrong?"),
    ("reasoning", "Is the explanation's reasoning sound?"),
]


def load(path):
    if not os.path.exists(path):
        sys.exit("FATAL: %s not found (run from the repository root)" % path)
    txt = io.open(path, encoding="utf-8").read()
    try:
        body = txt[txt.index("["):txt.rindex("]") + 1]
    except ValueError:
        sys.exit("FATAL: %s contains no JSON array" % path)
    return json.loads(body, object_pairs_hook=OrderedDict)


def build(paths):
    pool, seen = [], set()
    for p in paths:
        for q in load(p):
            if q.get("review_status") != "draft":
                continue
            if q["id"] in seen:
                sys.exit("FATAL: duplicate id %s across the input files" % q["id"])
            seen.add(q["id"])
            pool.append(q)

    if not pool:
        sys.exit("Nothing to review: no question has review_status 'draft'.")

    order = list(range(len(pool)))
    random.Random(SEED).shuffle(order)
    shuffled = [pool[i] for i in order]

    # Fingerprint of this exact pack. The reviewer's browser stores answers
    # under it, and apply verifies a return against it, so a pack built from
    # different questions can never have its verdicts applied to this one.
    #
    # It hashes the CONTENT the reviewer actually sees, not just the ids.
    # Hashing ids alone was not enough: correcting a stem or an explanation
    # leaves every id unchanged, so a return describing the uncorrected text
    # would validate against the corrected bank and be written as sign-off on
    # wording the reviewer never read. Every field rendered into the pack is
    # included; anything not rendered is excluded, so an editorial change that
    # the reviewer cannot see does not needlessly invalidate their work.
    RENDERED = ("id", "subdomain", "topic", "stem", "options",
                "correct_letter", "why_correct", "distractor_analysis",
                "generalisation")
    payload = json.dumps(
        [{k: q[k] for k in RENDERED} for q in shuffled],
        sort_keys=True, ensure_ascii=False, separators=(",", ":"))
    fp = hashlib.sha1(("%d|" % SEED + payload).encode("utf-8")).hexdigest()[:12]

    io.open(KEY, "w", encoding="utf-8").write(json.dumps({
        "seed": SEED,
        "count": len(shuffled),
        "fingerprint": fp,
        "token_to_id": {"R%02d" % (i + 1): q["id"] for i, q in enumerate(shuffled)},
    }, indent=2))

    io.open(PACK, "w", encoding="utf-8").write(render(shuffled, fp))

    print("Review pack built.")
    print("  questions        : %d" % len(shuffled))
    print("  sub-domains      : %s" % ", ".join(
        "%s %d" % (s.split(",")[0][:22], n)
        for s, n in sorted(Counter(q["subdomain"] for q in shuffled).items())))
    print("  shuffle seed     : %d" % SEED)
    print("  pack fingerprint : %s" % fp)
    print("  written          : %s, %s" % (PACK, KEY))
    print("\nSend %s to the reviewer. Keep %s -- it is not for them." % (PACK, KEY))


def apply_returns(returned_path, questions_path):
    ret = json.loads(io.open(returned_path, encoding="utf-8").read())
    reviewer = (ret.get("reviewer") or "").strip()
    date = (ret.get("date") or "").strip()
    if not reviewer or not date:
        sys.exit("FATAL: the returned file carries no reviewer name or date. "
                 "Both are required; neither will be invented here.")

    if not os.path.exists(KEY):
        sys.exit("FATAL: %s not found. It maps the reviewer's tokens back to "
                 "question ids and cannot be regenerated after the fact." % KEY)
    keydata = json.loads(io.open(KEY, encoding="utf-8").read())
    tok2id = keydata["token_to_id"]

    expected = keydata.get("fingerprint")
    got = ret.get("fingerprint")
    if expected and got != expected:
        sys.exit(
            "FATAL: the returned file was produced by a different pack.\n"
            "  key file expects : %s\n"
            "  returned file has: %s\n"
            "Applying it would attach verdicts to the wrong questions. Find the\n"
            "key file that belongs to the pack the reviewer actually opened."
            % (expected, got or "no fingerprint at all"))

    by_id = {}
    for v in ret.get("verdicts", []):
        qid = tok2id.get(v.get("id"))
        if not qid:
            sys.exit("FATAL: token %r in the returned file is not in %s"
                     % (v.get("id"), KEY))
        by_id[qid] = v
    data = load(questions_path)

    raw = io.open(questions_path, encoding="utf-8").read()

    # The file is rewritten as head + array + ";\n", so anything after the
    # closing bracket would be silently destroyed. Refuse rather than lose it.
    tail = raw[raw.rindex("]") + 1:].strip()
    if tail not in ("", ";"):
        sys.exit("FATAL: %s has content after the array (%r). This tool rewrites "
                 "the file as header + array + ';' and would discard it. Move that "
                 "content above the array or extend this tool." % (questions_path, tail[:60]))

    # Never clobber an earlier backup: a second apply must not destroy the
    # pre-first-apply state.
    bak = "%s.%s.bak" % (questions_path, time.strftime("%Y%m%d-%H%M%S"))
    io.open(bak, "w", encoding="utf-8").write(raw)

    passed = failed = untouched = 0
    for q in data:
        v = by_id.get(q["id"])
        if not v:
            untouched += 1
            continue
        ok = all(v.get(k) == "yes" for k, _ in VERDICTS)
        q["review_status"] = "reviewed" if ok else "revise"
        q["reviewer"] = reviewer
        q["signoff_date"] = date
        if ok:
            passed += 1
        else:
            failed += 1

    head = raw[:raw.index("[")]
    io.open(questions_path, "w", encoding="utf-8").write(
        head + json.dumps(data, ensure_ascii=False, indent=2) + ";\n")

    print("Applied %s to %s (backup at %s)" % (returned_path, questions_path, bak))
    print("  reviewed : %d" % passed)
    print("  revise   : %d" % failed)
    print("  untouched: %d" % untouched)
    print("\nRun the validator before committing:  python mrcp1-validate.py")


def render(qs, fp):
    e = html.escape
    blocks = []
    for i, q in enumerate(qs, 1):
        tok = "R%02d" % i
        opts = "".join(
            '<li%s><span class="l">%s</span>%s</li>' % (
                ' class="keyed"' if L == q["correct_letter"] else "",
                L, e(q["options"][L]))
            for L in sorted(q["options"]))
        das = "".join(
            '<p><span class="l">%s</span>%s</p>' % (L, e(q["distractor_analysis"][L]))
            for L in sorted(q["distractor_analysis"]))
        verdicts = "".join(
            '<div class="v"><p class="vq">%s</p><div class="vb">%s</div>'
            '<textarea rows="2" placeholder="If no, what is wrong?" '
            'data-q="%s" data-k="%s"></textarea></div>' % (
                e(label),
                "".join('<button type="button" data-q="%s" data-k="%s" data-a="%s">%s</button>'
                        % (tok, key, a, a) for a in ("yes", "no")),
                tok, key)
            for key, label in VERDICTS)

        blocks.append("""
<article class="q" id="q-{qid}">
  <header>
    <span class="num">{i} of {n}</span>
    <span class="sub">{sub}</span>
    <span class="topic">{topic}</span>
  </header>
  <p class="stem">{stem}</p>
  <ol class="opts">{opts}</ol>
  <div class="expl">
    <h3>Why {cl} is correct</h3><p>{why}</p>
    <h3>Distractor analysis</h3>{das}
    <h3>Generalisation</h3><p class="gen">{gen}</p>
  </div>
  <section class="verdicts" data-qid="{qid}">{verdicts}</section>
</article>""".format(
            qid=tok, i=i, n=len(qs), sub=e(q["subdomain"]), topic=e(q["topic"]),
            stem=e(q["stem"]), opts=opts, cl=q["correct_letter"],
            why=e(q["why_correct"]), das=das, gen=e(q["generalisation"]),
            verdicts=verdicts))

    return (TEMPLATE.replace("{{BLOCKS}}", "".join(blocks))
                    .replace("{{N}}", str(len(qs)))
                    .replace("{{FP}}", fp))


TEMPLATE = r"""<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>MRCP Part 1 — batch 1 clinical review</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
:root{
  --paper:#FBFAF7; --ink:#1B1E26; --soft:#5A6070; --faint:#8B91A0;
  --rule:#E2DFD8; --card:#FFFFFF;
  --violet:#6B52AC; --violet-soft:#F0ECFA;
  --yes:#1E7A5E; --no:#A8324A;
}
*{box-sizing:border-box;margin:0;padding:0}
body{background:var(--paper);color:var(--ink);font-family:'Outfit',system-ui,sans-serif;
  line-height:1.65;font-size:16px;-webkit-font-smoothing:antialiased}
h1,h2,h3{font-family:'Fraunces',Georgia,serif;font-weight:600}
.wrap{max-width:760px;margin:0 auto;padding:0 24px 120px}

header.top{padding:56px 0 28px;border-bottom:2px solid var(--ink)}
.eyebrow{font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:var(--violet);font-weight:600}
h1{font-size:34px;margin:12px 0 14px;line-height:1.15}
.lede{color:var(--soft);max-width:60ch}
.ask{margin-top:22px;background:var(--violet-soft);border-left:3px solid var(--violet);
  padding:16px 18px;border-radius:0 6px 6px 0;font-size:15px}
.ask ol{margin:8px 0 0 18px}
.ask li{margin:3px 0}
.who{display:flex;gap:14px;flex-wrap:wrap;margin-top:22px}
.who label{font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--faint);display:block;margin-bottom:5px}
.who input{font-family:inherit;font-size:15px;padding:9px 12px;border:1px solid var(--rule);
  border-radius:6px;background:var(--card);color:var(--ink);min-width:220px}
.who input:focus{outline:2px solid var(--violet);outline-offset:1px;border-color:transparent}

article.q{border-bottom:1px solid var(--rule);padding:42px 0}
article.q > header{display:flex;gap:12px;align-items:baseline;flex-wrap:wrap;margin-bottom:16px}
.num{font-family:'Fraunces',serif;font-size:13px;color:var(--faint)}
.sub{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--violet);font-weight:600}
.topic{font-size:13px;color:var(--soft);flex:1;min-width:160px}
.stem{font-size:17px;line-height:1.7;margin-bottom:18px}
.opts{list-style:none;display:flex;flex-direction:column;gap:7px;margin-bottom:22px}
.opts li{background:var(--card);border:1px solid var(--rule);border-radius:6px;padding:10px 14px;font-size:15px}
.opts li.keyed{border-color:var(--violet);background:var(--violet-soft)}
.opts li.keyed::after{content:"keyed";float:right;font-size:10px;letter-spacing:.14em;
  text-transform:uppercase;color:var(--violet);font-weight:600}
.l{font-weight:600;color:var(--violet);margin-right:9px}
.expl h3{font-size:12px;letter-spacing:.13em;text-transform:uppercase;color:var(--faint);
  margin:20px 0 7px;font-family:'Outfit',sans-serif;font-weight:600}
.expl p{font-size:15px;color:#2F3440;margin-bottom:8px}
.gen{border-left:2px solid var(--rule);padding-left:14px;font-style:italic;color:var(--soft)}

.verdicts{margin-top:26px;display:grid;gap:14px}
.v{background:var(--card);border:1px solid var(--rule);border-radius:8px;padding:14px 16px}
.vq{font-size:14px;font-weight:500;margin-bottom:9px}
.vb{display:flex;gap:8px;margin-bottom:9px}
.vb button{font-family:inherit;font-size:13px;font-weight:600;padding:7px 20px;border-radius:20px;
  border:1px solid var(--rule);background:var(--paper);color:var(--soft);cursor:pointer;
  transition:background .12s,color .12s,border-color .12s}
.vb button:hover{border-color:var(--violet)}
.vb button:focus-visible{outline:2px solid var(--violet);outline-offset:2px}
.vb button.on[data-a="yes"]{background:var(--yes);border-color:var(--yes);color:#fff}
.vb button.on[data-a="no"]{background:var(--no);border-color:var(--no);color:#fff}
.v textarea{width:100%;font-family:inherit;font-size:14px;padding:9px 11px;border:1px solid var(--rule);
  border-radius:6px;background:var(--paper);color:var(--ink);resize:vertical;display:none}
.v.show-note textarea{display:block}

.bar{position:fixed;left:0;right:0;bottom:0;background:var(--card);border-top:1px solid var(--rule);
  padding:12px 24px;display:flex;gap:14px;align-items:center;justify-content:center;flex-wrap:wrap;
  box-shadow:0 -2px 16px rgba(27,30,38,.06)}
.count{font-size:14px;color:var(--soft)}
.count b{color:var(--ink)}
.bar button{font-family:inherit;font-size:14px;font-weight:600;padding:10px 22px;border-radius:8px;
  border:none;background:var(--violet);color:#fff;cursor:pointer}
.bar button:disabled{background:var(--rule);color:var(--faint);cursor:not-allowed}
.bar button:focus-visible{outline:2px solid var(--ink);outline-offset:2px}
.saved{font-size:12px;color:var(--faint)}
@media(prefers-reduced-motion:reduce){*{transition:none!important}}
@media print{.bar,.vb button{display:none}.v textarea{display:block}body{background:#fff}}
</style></head><body>
<div class="wrap">
<header class="top">
  <div class="eyebrow">AMaC · MRCP Part 1 · Batch 1</div>
  <h1>Clinical review — {{N}} questions</h1>
  <p class="lede">Clinical sciences only. Every question is a draft; none has been used anywhere.
     Order is randomised, and the pack carries no indication of who wrote what.</p>
  <div class="ask">
    <strong>Three separate verdicts per question, please, not an overall impression.</strong>
    <ol>
      <li>Is the keyed answer correct?</li>
      <li>Is every distractor genuinely wrong?</li>
      <li>Is the explanation's reasoning sound?</li>
    </ol>
    Those three fail differently, and we need to know which one failed. Answering <em>no</em> opens
    a box — a line on what is wrong is worth more than a long note.
  </div>
  <div class="who">
    <div><label for="rev">Your name</label><input id="rev" placeholder="Reviewer"></div>
    <div><label for="dt">Date</label><input id="dt" type="date"></div>
  </div>
</header>
{{BLOCKS}}
</div>
<div class="bar">
  <span class="count"><b id="done">0</b> of <span id="total">0</span> verdicts recorded</span>
  <button id="save" disabled>Download my review</button>
  <span class="saved" id="msg">Answers are kept in this browser as you go.</span>
</div>
<script>
(function(){
  var FP='{{FP}}';
  var STORE='amac-mrcp1-review-'+FP;
  var state={fp:FP,reviewer:'',date:'',v:{}};
  try{
    var s=localStorage.getItem(STORE);
    if(s){
      var loaded=JSON.parse(s);
      // Belt and braces: the key is already fingerprint-scoped, but refuse
      // anything whose recorded fingerprint does not match this pack.
      if(loaded && loaded.fp===FP){state=loaded;}
    }
  }catch(e){}

  var rev=document.getElementById('rev'), dt=document.getElementById('dt');
  rev.value=state.reviewer||''; dt.value=state.date||'';

  var buttons=[].slice.call(document.querySelectorAll('.vb button'));
  var notes=[].slice.call(document.querySelectorAll('.v textarea'));
  document.getElementById('total').textContent=buttons.length/2;

  function key(q,k){return q+'|'+k;}
  function save(){
    state.fp=FP; state.reviewer=rev.value; state.date=dt.value;
    try{localStorage.setItem(STORE,JSON.stringify(state));}catch(e){}
    paint();
  }
  function paint(){
    buttons.forEach(function(b){
      var r=state.v[key(b.dataset.q,b.dataset.k)];
      b.classList.toggle('on', !!r && r.a===b.dataset.a);
    });
    notes.forEach(function(t){
      var r=state.v[key(t.dataset.q,t.dataset.k)];
      t.value=(r&&r.note)||'';
      t.closest('.v').classList.toggle('show-note', !!r && r.a==='no');
    });
    var n=Object.keys(state.v).length;
    document.getElementById('done').textContent=n;
    var ready=n===buttons.length/2 && rev.value.trim() && dt.value;
    document.getElementById('save').disabled=!ready;
    document.getElementById('msg').textContent = ready
      ? 'All questions answered — download and send the file back.'
      : 'Answers are kept in this browser as you go.';
  }
  buttons.forEach(function(b){b.addEventListener('click',function(){
    var k=key(b.dataset.q,b.dataset.k);
    var cur=state.v[k]||{};
    state.v[k]={a:b.dataset.a, note:cur.note||''};
    save();
  });});
  notes.forEach(function(t){t.addEventListener('input',function(){
    var k=key(t.dataset.q,t.dataset.k);
    if(state.v[k]){state.v[k].note=t.value; save();}
  });});
  rev.addEventListener('input',save); dt.addEventListener('input',save);

  document.getElementById('save').addEventListener('click',function(){
    var ids=[].slice.call(document.querySelectorAll('.verdicts')).map(function(s){return s.dataset.qid;});
    var out={fingerprint:FP, reviewer:rev.value.trim(), date:dt.value, verdicts:ids.map(function(id){
      var o={id:id};
      ['keyed','distractors','reasoning'].forEach(function(k){
        var r=state.v[key(id,k)]||{};
        o[k]=r.a||''; if(r.note) o[k+'_note']=r.note;
      });
      return o;
    })};
    var a=document.createElement('a');
    a.href=URL.createObjectURL(new Blob([JSON.stringify(out,null,2)],{type:'application/json'}));
    a.download='mrcp1-batch1-review-'+(rev.value.trim().replace(/\W+/g,'-').toLowerCase()||'reviewer')+'.json';
    a.click();
  });
  paint();
})();
</script>
</body></html>
"""


if __name__ == "__main__":
    if len(sys.argv) < 2 or sys.argv[1] not in ("build", "apply"):
        sys.exit(__doc__)
    if sys.argv[1] == "build":
        build(sys.argv[2:] or ["mrcp1-questions.js"])
    else:
        if len(sys.argv) != 4:
            sys.exit("usage: mrcp1-review-pack.py apply <returned.json> <questions.js>")
        apply_returns(sys.argv[2], sys.argv[3])
