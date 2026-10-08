/* =========================================================
   mla-coverage.js — one shared calculation for GMC content-map coverage.

   Used by mla-coverage.html (full page) and the coverage strip on ukmla.html,
   so the two can never disagree.

   Data:
     data/gmc-mla-map.json  GMC conditions (C###) and presentations (P###).
                            An entry may carry "covered_under": [ids] — an
                            umbrella entry whose questions are labelled under
                            more specific entries (e.g. Antepartum haemorrhage
                            -> Placenta praevia, Placental abruption, Vasa praevia).
     data/akt-mla-map.json  q[id] = [condition, presentation]
                            GMC id | "X" (tests something with no exact GMC entry)
                            | null (nothing to map). Only GMC ids are counted.

   Answers come from the AKT bank's localStorage key 'amac_q_state'.
   ========================================================= */
(function (global) {
  'use strict';

  function answered() {
    try { return JSON.parse(localStorage.getItem('amac_q_state') || '{}') || {}; }
    catch (e) { return {}; }
  }

  function status(it) {
    if (it.total === 0) return 'none';
    if (it.ans === 0) return 'untouched';
    var need = Math.min(it.total, Math.max(3, Math.ceil(it.total * 0.2)));
    return (it.ans >= need && it.cor / it.ans >= 0.8) ? 'secure' : 'practised';
  }

  function compute(gmc, map, ans) {
    ans = ans || answered();
    var out = {};
    [['conditions', 0], ['presentations', 1]].forEach(function (kind) {
      var key = kind[0], slot = kind[1], idx = {};
      gmc[key].forEach(function (x) {
        idx[x.id] = { id: x.id, name: x.name, codes: [x.id], qids: [], total: 0, ans: 0, cor: 0, via: null };
      });
      Object.keys(map.q).forEach(function (qid) {
        var it = idx[map.q[qid][slot]];
        if (it) it.qids.push(qid);
      });
      gmc[key].forEach(function (x) {
        var it = idx[x.id];
        // Umbrella entry with no direct questions: count the specific entries that cover it.
        if (!it.qids.length && x.covered_under && x.covered_under.length) {
          var kids = x.covered_under.filter(function (k) { return idx[k] && idx[k].qids.length; });
          if (kids.length) {
            it.via = kids.map(function (k) { return idx[k].name; });
            it.codes = kids;
            kids.forEach(function (k) { it.qids = it.qids.concat(idx[k].qids); });
          }
        }
      });
      out[key] = gmc[key].map(function (x) {
        var it = idx[x.id];
        it.total = it.qids.length;
        it.qids.forEach(function (q) { var a = ans[q]; if (a) { it.ans++; if (a.correct) it.cor++; } });
        it.st = status(it);
        delete it.qids;
        return it;
      });
    });
    out.anyAnswered = Object.keys(ans).length > 0;
    return out;
  }

  function load() {
    return Promise.all([
      fetch('data/gmc-mla-map.json').then(function (r) { if (!r.ok) throw 0; return r.json(); }),
      fetch('data/akt-mla-map.json').then(function (r) { if (!r.ok) throw 0; return r.json(); })
    ]).then(function (res) { return { gmc: res[0], map: res[1] }; });
  }

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  /* A ~20-minute session (default 17 questions, the AKT pace of 72 seconds each), built from the candidate's own answers:
     up to 6 from their weakest conditions (>=3 answered, under 80% right) — one previously
     wrong question to retest plus one new — then one new question from each of several
     different untouched conditions. With no answers yet: one question from each of 17
     different conditions, as a breadth check. */
  function session(gmc, map, ans, size) {
    ans = ans || answered(); size = size || 17;
    var byCond = {};
    Object.keys(map.q).forEach(function (q) {
      var c = map.q[q][0];
      if (c && c !== 'X') (byCond[c] = byCond[c] || []).push(q);
    });
    var r = compute(gmc, map, ans), picked = [], seen = {}, weakNames = [], retest = 0;
    function take(q) { if (q && !seen[q] && picked.length < size) { seen[q] = 1; picked.push(q); return true; } return false; }
    function unanswered(c) { return shuffle((byCond[c] || []).filter(function (q) { return !ans[q] && !seen[q]; })); }
    function wrong(c) { return shuffle((byCond[c] || []).filter(function (q) { return ans[q] && !ans[q].correct && !seen[q]; })); }

    var weak = r.conditions.filter(function (it) { return byCond[it.id] && it.ans >= 3 && it.cor / it.ans < 0.8; })
      .sort(function (a, b) { return (a.cor / a.ans) - (b.cor / b.ans) || b.ans - a.ans; }).slice(0, 3);
    weak.forEach(function (it) {
      var got = false;
      if (take(wrong(it.id)[0])) { retest++; got = true; }
      if (take(unanswered(it.id)[0])) got = true;
      if (got) weakNames.push(it.name);
    });
    var weakCount = picked.length;

    var fresh = shuffle(r.conditions.filter(function (it) { return byCond[it.id] && it.st === 'untouched'; }));
    fresh.sort(function (a, b) { return (b.total >= 5) - (a.total >= 5); });
    for (var i = 0; i < fresh.length && picked.length < size; i++) take(unanswered(fresh[i].id)[0]);
    var freshCount = picked.length - weakCount;

    if (picked.length < size) {
      shuffle(Object.keys(byCond)).forEach(function (c) { if (picked.length < size) take(unanswered(c)[0]); });
    }
    return { ids: shuffle(picked), weak: weakNames, weakCount: weakCount, retest: retest, fresh: freshCount,
             other: picked.length - weakCount - freshCount, anyAnswered: Object.keys(ans).length > 0 };
  }

  global.AMaCMLA = { compute: compute, load: load, answered: answered, session: session };
})(window);
