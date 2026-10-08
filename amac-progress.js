/* =========================================================
   amac-progress.js — back up and restore a candidate's progress.

   AMaC has no accounts: progress lives in this browser's localStorage.
   This lets a candidate save it to a file and load it on another device.

   Backup:  every localStorage key on this site, as raw strings.
   Restore: answer histories (QUESTION_MAPS) are merged question by question;
            the copy already on this device wins where both have an answer.
            Any other key is restored only if this device does not have it,
            so nothing on this device is ever overwritten.
   ========================================================= */
(function (global) {
  'use strict';

  var APP = 'AMaC progress';
  var VERSION = 1;
  var QUESTION_MAPS = ['amac_q_state', 'amac_plab1_q_state', 'amac_q_first'];

  function keys() {
    var out = [];
    try { for (var i = 0; i < localStorage.length; i++) out.push(localStorage.key(i)); } catch (e) {}
    return out;
  }

  function snapshot() {
    var data = {};
    keys().forEach(function (k) { try { data[k] = localStorage.getItem(k); } catch (e) {} });
    return { app: APP, version: VERSION, exported: new Date().toISOString(), site: location.host, data: data };
  }

  function answeredCount(raw) {
    try { var o = JSON.parse(raw || '{}'); return o && typeof o === 'object' ? Object.keys(o).length : 0; }
    catch (e) { return 0; }
  }

  function summary() {
    var ks = keys();
    return {
      keys: ks.length,
      other: ks.filter(function (k) { return QUESTION_MAPS.indexOf(k) === -1; }).length,
      akt: answeredCount(safeGet('amac_q_state')),
      plab1: answeredCount(safeGet('amac_plab1_q_state'))
    };
  }

  function safeGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  function download() {
    var snap = snapshot();
    var blob = new Blob([JSON.stringify(snap)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'amac-progress-' + snap.exported.slice(0, 10) + '.json';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
    return Object.keys(snap.data).length;
  }

  function isPlainObject(o) { return o && typeof o === 'object' && !Array.isArray(o); }

  function restore(text) {
    var snap;
    try { snap = JSON.parse(text); } catch (e) { throw new Error('This file could not be read. Choose an AMaC progress file.'); }
    if (!snap || snap.app !== APP || !isPlainObject(snap.data)) throw new Error('This is not an AMaC progress file.');
    var report = { merged: 0, added: 0, kept: 0 };
    Object.keys(snap.data).forEach(function (k) {
      var incoming = snap.data[k];
      if (typeof incoming !== 'string') return;
      var current = safeGet(k);
      if (QUESTION_MAPS.indexOf(k) !== -1) {
        var a, b;
        try { a = JSON.parse(current || '{}'); b = JSON.parse(incoming); } catch (e) { return; }
        if (!isPlainObject(a) || !isPlainObject(b)) return;
        Object.keys(b).forEach(function (q) { if (!(q in a)) { a[q] = b[q]; if (k !== 'amac_q_first') report.merged++; } });
        try { localStorage.setItem(k, JSON.stringify(a)); } catch (e) { throw new Error('Your browser would not let AMaC save the progress.'); }
      } else if (current === null) {
        try { localStorage.setItem(k, incoming); report.added++; } catch (e) {}
      } else {
        report.kept++;
      }
    });
    return report;
  }

  function readFile(file) {
    return new Promise(function (resolve, reject) {
      var r = new FileReader();
      r.onload = function () { try { resolve(restore(String(r.result))); } catch (e) { reject(e); } };
      r.onerror = function () { reject(new Error('This file could not be read.')); };
      r.readAsText(file);
    });
  }

  global.AMaCProgress = { download: download, readFile: readFile, restore: restore, summary: summary };
})(window);
