/* =========================================================
   report.js — "Report a problem" link on every question, station and card.

   Each page carries only, before </body>:
       <script src="report.js" defer></script>

   The script adds one small text link to each displayed item. The link opens
   an email to AMaC with the item's ID, the page address and a short checklist
   already filled in. No data files: each page's adapter below reads the ID the
   page already shows or already holds in its own variables.

   Pages rebuild their cards with innerHTML, so links are re-added whenever the
   page changes (MutationObserver), and the ID is read again at the moment the
   link is clicked, so it can never point at the previous item.

   To cover a new page, add an entry to ADAPTERS:
       sel  CSS selector for the element holding ONE item
       id   function (el, index) -> the item's ID, or null to show no link
       at   optional function (el) -> where inside el to put the link
   ========================================================= */
(function () {
  'use strict';

  var EMAIL = 'info@amac-medical.com';
  var CLS = 'amac-report';

  // Reads a value without throwing. Top-level let/const of the page's own
  // script are reachable by bare name from here; a missing name just gives null.
  function safe(fn, el, i) {
    try {
      var v = fn(el, i);
      return v === undefined || v === null || String(v).trim() === '' ? null : String(v).trim();
    } catch (e) { return null; }
  }
  function text(root, sel) {
    var n = root && root.querySelector(sel);
    return n ? n.textContent.trim() : null;
  }
  function first(el, sel) { return el.querySelector(sel) || el; }

  // PLAB 1 exam runner keeps its state private, so match the shown stem.
  var stemIndex = null;
  function idFromStem(stem) {
    if (!stem || !window.PLAB1_QUESTIONS) return null;
    if (!stemIndex) {
      stemIndex = {};
      window.PLAB1_QUESTIONS.forEach(function (q) {
        var k = String(q.stem || '').trim();
        if (k && !(k in stemIndex)) stemIndex[k] = q.id;
      });
    }
    return stemIndex[stem.trim()] || null;
  }

  // Question banks shown as expandable cards with id="qc-<id>". The link is added
  // when a card is opened (the AKT bank alone has 11,000+ cards on one page).
  var bankCards = { sel: '.q-card.open[id^="qc-"]', id: function (el) { return el.id.slice(3); },
    at: function (el) { return first(el, '.q-body'); } };

  // Flip-card decks (PLAB 2 and CPSA flashcards): grid cards and study mode
  var flipDeck = [
    { sel: '#cardsGrid > .flip-wrap[id^="fc-"]', id: function (el) { return el.id.slice(3); },
      at: function (el) { return first(el, '.back-footer'); } },
    { sel: '#singleFlip', id: function () { return studyList[studyIdx].id; },   // eslint-disable-line no-undef
      at: function (el) { return first(el, '.back-footer'); } }
  ];

  // Master Cards: one card at a time
  var masterCard = [{ sel: '#cc > .card-wrap', id: function () { return filtered[cidx].id; } }]; // eslint-disable-line no-undef

  /* eslint-disable no-undef */
  var ADAPTERS = {
    // ---- questions
    'questions.html': [bankCards],
    'plab1.html': [bankCards],
    'plab1-study.html': [{ sel: '#qcard', id: function (el) { return safe(function () { return QUESTIONS[cur].id; }) || text(el, '.qmeta .dim'); } }],
    'plab1-mock.html': [
      { sel: '#s-exam #qcard', id: function () { return EXAM_QS[cur].id; } },
      { sel: '#s-results .rev-q', id: function (el, i) { return EXAM_QS[i].id; } }
    ],
    'plab1-exam-runner.html': [{ sel: '#examMain', id: function (el) { return idFromStem(text(el, '.q-stem')); } }],
    'mrcs-part-a.html': [
      bankCards,
      { sel: '#quiz-screen .card', id: function () { return quizPool[currentIndex].q.id; } },
      { sel: '#mock-screen .card', id: function () { return mockPool[mockIndex].q.id; } },
      { sel: '#review-list .review-item', id: function (el) {
        var m = (text(el, 'p.q b') || '').match(/^Q(\d+)\./);
        return m ? sessionLog[+m[1] - 1].q.id : null;
      } }
    ],
    // ---- stations
    'cpsa-stations.html': [{ sel: '#detailOverlay.active .detail-header',
      id: function (el) { return safe(function () { return current.num; }) || text(el, '#dNum'); } }],
    'osce.html': [{ sel: '#modalOverlay.open #modalContent .m-banner',
      id: function (el) { return (text(el, '.m-sub') || '').split(' · ')[0]; } }],
    'station-viewer.html': [{ sel: '#head', id: function (el) {
      var t = (text(el, 'h1') || '').split(' · ')[0];
      return /^[A-Z]{2,5}-\d{2,4}$/.test(t) ? t : null;
    } }],
    // ---- cards
    'instant-fail-atlas.html': [{ sel: '#grid > .flip', id: function (el) {
      var title = text(el, '.front-title');
      var c = (window.ATLAS_CARDS || []).filter(function (x) { return x.title === title; })[0];
      return c ? c.id : null;
    }, at: function (el) { return first(el, '.back-head'); } }],
    'mastercards.html': masterCard,
    'mastercards-ukmla.html': masterCard,
    'flashcards.html': flipDeck,
    'cpsa-flashcards.html': flipDeck,
    'frcs-flashcards.html': [{ sel: '.flashcard', id: function (el) {
      var n = (text(el, '.card-number') || '').replace('#', '');
      return n ? 'FRCS-' + n : null;
    }, at: function (el) { return first(el, '.card-front'); } }]
  };
  /* eslint-enable no-undef */

  var page = decodeURIComponent(location.pathname.split('/').pop() || 'index.html');
  var adapters = ADAPTERS[page];
  if (!adapters) return;

  // "<page>" in the subject: the page title without the brand, e.g.
  // "AMaC PLAB 1 — Study Mode" -> "PLAB 1 · Study Mode". A title that starts
  // with the item ID (the MRCS station viewer) drops it, as the ID leads already.
  function pageName(id) {
    var parts = (document.title || '').split(/\s+[|·—–-]\s+/).map(function (p) {
      return p.replace(/\bAMaC\b/g, '').replace(/\s+/g, ' ').trim();
    }).filter(Boolean);
    var name = parts.join(' · ');
    if (id && name.indexOf(id) === 0) name = name.slice(id.length).trim();
    return name || page;
  }

  function mailto(id) {
    var url = location.href.split('#')[0];
    var subject = '[AMaC report] ' + id + ' — ' + pageName(id);
    var body = [
      'Item ID: ' + id,
      'Page: ' + url,
      '',
      'What is the problem? (keep the ones that apply)',
      '- Wrong answer',
      '- Outdated guidance',
      '- Unclear wording',
      '- Broken link or image',
      '- Other',
      '',
      'Details:',
      ''
    ].join('\r\n');
    return 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  }

  var css = document.createElement('style');
  css.textContent =
    '.' + CLS + '{display:inline-block;margin-top:8px;font-family:inherit;font-size:12px;font-weight:500;' +
    'line-height:1.4;color:inherit;opacity:.6;text-decoration:underline;text-underline-offset:3px;cursor:pointer;}' +
    '.' + CLS + ':hover,.' + CLS + ':focus-visible{opacity:1;}' +
    '@media print{.' + CLS + '{display:none!important;}}';
  document.head.appendChild(css);

  // The link belongs to one item element; read the ID again from it when used.
  function refresh(link) {
    var host = link.__amacHost;
    var a = host && host.adapter;
    var id = a ? safe(a.id, host.el, host.index) : null;
    if (id) link.href = mailto(id);
    return id;
  }

  function make(el, a, i, id) {
    var link = document.createElement('a');
    link.className = CLS;
    link.textContent = 'Report a problem';
    link.setAttribute('data-report-id', id);
    link.href = mailto(id);
    link.__amacHost = { el: el, adapter: a, index: i };
    // Cards flip, open or advance when clicked; the link must only send the email.
    link.addEventListener('click', function (e) { e.stopPropagation(); refresh(link); });
    link.addEventListener('keydown', function (e) { e.stopPropagation(); });
    return link;
  }

  function scan() {
    adapters.forEach(function (a) {
      var els = document.querySelectorAll(a.sel);
      for (var i = 0; i < els.length; i++) {
        var el = els[i];
        var id = safe(a.id, el, i);
        var spot = a.at ? a.at(el) : el;
        var link = el.querySelector('a.' + CLS);
        if (!id) { if (link) link.remove(); continue; }
        if (link && link.parentNode !== spot) { link.remove(); link = null; }
        if (!link) { spot.appendChild(make(el, a, i, id)); continue; }
        link.__amacHost = { el: el, adapter: a, index: i };
        if (link.getAttribute('data-report-id') !== id) {
          link.setAttribute('data-report-id', id);
          link.href = mailto(id);
        }
      }
    });
  }

  var queued = false;
  function schedule() {
    if (queued) return;
    queued = true;
    setTimeout(function () { queued = false; scan(); }, 60);
  }

  scan();
  new MutationObserver(schedule).observe(document.body, {
    childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['class']
  });
})();
