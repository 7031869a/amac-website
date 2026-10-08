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

  global.AMaCMLA = { compute: compute, load: load, answered: answered };
})(window);
