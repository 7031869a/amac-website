/* =========================================================
   counts.js — keeps headline numbers in step with the data.

   Fills every element carrying data-count="<key>" from
   data/counts.json. build-counts.py writes that file and also
   rewrites the number already in the markup, so the page is
   correct without JavaScript; this script only corrects drift
   between a content change and the next build.

   data-count-plain   write 1330, not 1,330
   Keys that are only digits (the chips on plab1-exams.html)
   are not counts and are left alone.

   After adding content, run:  python build-counts.py
   ========================================================= */
(function () {
  'use strict';

  var nodes = Array.prototype.filter.call(
    document.querySelectorAll('[data-count]'),
    function (el) { return /^[A-Za-z]\w*$/.test(el.getAttribute('data-count')); }
  );
  if (!nodes.length || typeof fetch !== 'function') return;

  fetch('data/counts.json', { cache: 'no-cache' })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (counts) {
      if (!counts) return;
      nodes.forEach(function (el) {
        var n = Number(counts[el.getAttribute('data-count')]);
        if (!isFinite(n) || n <= 0) return;
        el.textContent = el.hasAttribute('data-count-plain') ? String(n) : n.toLocaleString('en-GB');
      });
    })
    .catch(function () { /* keep the markup value */ });
})();
