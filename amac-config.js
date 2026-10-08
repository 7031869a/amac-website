/* =========================================================
   amac-config.js — the site-wide PAID ON/OFF SWITCH.

   Loaded in the <head> of every page, before anything is drawn,
   so hidden content never flashes on screen.

   TO TURN PAID FEATURES ON:  change  paid: false  to  paid: true  below.
   That single edit is the whole switch.

   How to mark content (while paid is false it is hidden everywhere):
     <div data-paid-only> ... </div>     shown only when paid is ON
     <div data-free-only> ... </div>     shown only when paid is OFF
                                         (e.g. "free while we grow")
     <html data-paid-only>               a WHOLE page that is paid-only:
                                         visitors are sent to index.html
                                         while paid is OFF. Also give such
                                         pages <meta name="robots" content="noindex">
                                         until launch, and leave them out of
                                         sitemap.xml and the navigation.

   Previewing paid content before launch (in your own browser only):
     open any page with  ?amac-preview=paid   -> paid content shows on this
                                                 browser until you turn it off
     open any page with  ?amac-preview=off    -> back to normal

   IMPORTANT: this switch HIDES content; it does not PROTECT it. Anything
   in a page's files can still be downloaded by a determined visitor.
   Real paid access needs logins and a server (see
   _plans/ukmla-monetisation/ROADMAP.md section 1). Use this switch to
   build and test paid features in place, then turn them on in one step.
   ========================================================= */
(function () {
  'use strict';

  var AMAC_CONFIG = {
    paid: false          // <-- THE SWITCH. false = free site (today). true = paid features visible.
  };

  var PREVIEW_KEY = 'amac_preview_paid';
  var preview = false;
  try {
    var q = new URLSearchParams(location.search).get('amac-preview');
    if (q === 'paid') localStorage.setItem(PREVIEW_KEY, '1');
    if (q === 'off') localStorage.removeItem(PREVIEW_KEY);
    preview = localStorage.getItem(PREVIEW_KEY) === '1';
  } catch (e) {}

  var on = AMAC_CONFIG.paid === true || preview;
  var root = document.documentElement;

  window.AMAC = {
    paid: on,                    // true when paid features should show
    paidLive: AMAC_CONFIG.paid === true,
    preview: preview && AMAC_CONFIG.paid !== true
  };

  // Whole-page gate: a paid-only page is not shown while the switch is off.
  if (!on && root.hasAttribute('data-paid-only')) {
    location.replace('index.html');
    return;
  }

  root.classList.add(on ? 'amac-paid' : 'amac-free');

  var css = on
    ? '[data-free-only]{display:none!important}'
    : '[data-paid-only]{display:none!important}';
  if (window.AMAC.preview) {
    css += '[data-paid-only]{outline:2px dashed #C9A227;outline-offset:2px}';
  }
  var style = document.createElement('style');
  style.setAttribute('data-amac-config', '');
  style.textContent = css;
  (document.head || root).appendChild(style);

  // A small reminder badge while previewing, so a preview is never mistaken for the live site.
  if (window.AMAC.preview) {
    document.addEventListener('DOMContentLoaded', function () {
      var b = document.createElement('a');
      b.href = '?amac-preview=off';
      b.textContent = 'Paid preview ON — click to turn off';
      b.style.cssText = 'position:fixed;left:12px;bottom:12px;z-index:99999;background:#C9A227;color:#16233F;font:600 12px/1.2 sans-serif;padding:8px 12px;border-radius:6px;text-decoration:none;box-shadow:0 2px 8px rgba(0,0,0,.25);';
      document.body.appendChild(b);
    });
  }
})();
