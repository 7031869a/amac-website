/* ============================================================
   AMaC — shared site footer component  (footer.js)
   ------------------------------------------------------------
   ONE source of truth for the global footer strip. Each page
   carries only, before </body>:

       <script src="footer.js" defer></script>

   This script appends a slim global band BELOW whatever footer
   the page already has. It does not touch or replace existing
   <footer> markup — no layout risk, no per-page editing.

   What it adds that the site currently has nowhere:
     • links out to the books / store
     • a link to the AMaC community
     • email capture on EVERY page (not just the four hubs)

   Safety behaviour:
     • Idempotent — if the band is already present, it exits.
     • Any CONFIG link still left as a PLACEHOLDER is not
       rendered, so no broken link can ever ship.
     • Email capture is suppressed automatically on pages that
       already contain .amac-capture (the four door hubs).

   Change the footer once here -> every page updates.
   ============================================================ */
(function () {
  "use strict";

  /* ---------------------------------------------------------
     CONFIG — edit these four lines, then never again.
     Leave a value as "PLACEHOLDER" and that link is hidden.
     --------------------------------------------------------- */
  var CONFIG = {
    storeUrl:     "PLACEHOLDER",   /* e.g. https://payhip.com/amac      */
    amazonUrl:    "PLACEHOLDER",   /* e.g. your KDP author page         */
    communityUrl: "PLACEHOLDER",   /* e.g. your Facebook group invite   */
    email:        "info@amac-medical.com"
  };

  var CAPTURE = {
    heading: "One email a week. The examiner's view.",
    sub:     "New stations, new questions and the reasoning behind them \u2014 sent as we publish. No spam, unsubscribe anytime.",
    button:  "Keep me posted",
    subject: "AMaC list signup \u2014 site footer"
  };

  /* ---- guard: run once only ---- */
  if (document.querySelector(".amacf")) { return; }

  function ok(v) { return v && v !== "PLACEHOLDER"; }

  /* ---- scoped CSS (self-contained; safe on any stylesheet) ---- */
  var css = ""
    + ".amacf{font-family:'Outfit',system-ui,-apple-system,'Segoe UI',sans-serif;"
    + "background:#08101F;border-top:1px solid rgba(201,162,39,.22);"
    + "color:#AEB9D0;padding:34px 30px 30px;line-height:1.6;}"
    + ".amacf *{box-sizing:border-box;}"
    + ".amacf-in{max-width:1080px;margin:0 auto;display:flex;flex-wrap:wrap;"
    + "gap:34px;align-items:flex-start;justify-content:space-between;}"
    + ".amacf-col{min-width:150px;}"
    + ".amacf-h{font-size:11px;letter-spacing:.16em;text-transform:uppercase;"
    + "color:#C9A227;margin-bottom:10px;font-weight:600;}"
    + ".amacf a{color:#AEB9D0;text-decoration:none;display:block;"
    + "font-size:14px;padding:3px 0;transition:color .15s;}"
    + ".amacf a:hover{color:#F6F4EE;}"
    + ".amacf-cap{flex:1 1 300px;max-width:400px;}"
    + ".amacf-cap p{font-size:13px;color:#8593AE;margin:0 0 12px;}"
    + ".amacf-cap strong{color:#F6F4EE;font-weight:500;display:block;"
    + "font-size:15px;margin-bottom:6px;}"
    + ".amacf-form{display:flex;gap:8px;flex-wrap:wrap;}"
    + ".amacf-form input[type=email]{flex:1 1 170px;min-width:0;padding:10px 12px;"
    + "border-radius:6px;border:1px solid rgba(174,185,208,.25);background:#0F1A2E;"
    + "color:#F6F4EE;font-size:14px;font-family:inherit;}"
    + ".amacf-form input[type=email]:focus{outline:none;border-color:#C9A227;}"
    + ".amacf-form button{padding:10px 16px;border:0;border-radius:6px;"
    + "background:#C9A227;color:#0C1526;font-weight:600;font-size:14px;"
    + "font-family:inherit;cursor:pointer;transition:background .15s;}"
    + ".amacf-form button:hover{background:#e0c45a;}"
    + ".amacf-legal{max-width:1080px;margin:26px auto 0;padding-top:16px;"
    + "border-top:1px solid rgba(174,185,208,.12);font-size:12px;color:#6B7794;"
    + "display:flex;flex-wrap:wrap;gap:14px;justify-content:space-between;}"
    + ".amacf-legal a{display:inline;font-size:12px;color:#6B7794;}"
    + "@media(max-width:640px){.amacf{padding:26px 20px 24px;}"
    + ".amacf-in{gap:24px;}.amacf-col{min-width:44%;}}";

  var style = document.createElement("style");
  style.setAttribute("data-amacf", "1");
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);

  /* ---- link columns ---- */
  function col(title, links) {
    var items = links.filter(function (l) { return ok(l.href); });
    if (!items.length) { return ""; }
    var out = '<div class="amacf-col"><div class="amacf-h">' + title + "</div>";
    items.forEach(function (l) {
      var ext = /^https?:/i.test(l.href)
        ? ' target="_blank" rel="noopener"' : "";
      out += '<a href="' + l.href + '"' + ext + ">" + l.label + "</a>";
    });
    return out + "</div>";
  }

  var cols = ""
    + col("Exams", [
        { href: "ukmla.html",     label: "UKMLA" },
        { href: "plab2.html",     label: "PLAB 2" },
        { href: "plab1-hub.html", label: "PLAB 1" },
        { href: "frcs.html",      label: "FRCS Part 2" }
      ])
    + col("Free resources", [
        { href: "tools.html",                 label: "Clinical reference" },
        { href: "uk-consultation-guide.html", label: "The UK consultation" },
        { href: "recovery-room.html",         label: "The Recovery Room" },
        { href: "instant-fail-atlas.html",    label: "Instant Fail Atlas" }
      ])
    + col("Books & community", [
        { href: "books.html",           label: "The Master Series" },
        { href: CONFIG.storeUrl,        label: "Buy direct" },
        { href: CONFIG.amazonUrl,       label: "On Amazon" },
        { href: CONFIG.communityUrl,    label: "Join the community" }
      ])
    + col("AMaC", [
        { href: "about.html",   label: "About" },
        { href: "contact.html", label: "Contact" },
        { href: "index.html",   label: "All exams" }
      ]);

  /* ---- email capture (skipped where a capture block already exists) ---- */
  var cap = "";
  if (!document.querySelector(".amac-capture")) {
    cap = ''
      + '<div class="amacf-cap">'
      + "<strong>" + CAPTURE.heading + "</strong>"
      + "<p>" + CAPTURE.sub + "</p>"
      + '<form class="amacf-form" action="https://formsubmit.co/'
      + CONFIG.email + '" method="POST">'
      + '<input type="email" name="email" required placeholder="your@email.com" aria-label="Email address">'
      + '<input type="hidden" name="_subject" value="' + CAPTURE.subject + '">'
      + '<input type="hidden" name="source" value="' + location.pathname + '">'
      + '<input type="hidden" name="_captcha" value="false">'
      + '<input type="hidden" name="_template" value="table">'
      + '<input type="text" name="_honey" style="display:none">'
      + "<button type=\"submit\">" + CAPTURE.button + "</button>"
      + "</form></div>";
  }

  var year = new Date().getFullYear();
  var el = document.createElement("footer");
  el.className = "amacf";
  el.setAttribute("role", "contentinfo");
  el.innerHTML = ''
    + '<div class="amacf-in">' + cols + cap + "</div>"
    + '<div class="amacf-legal">'
    + "<span>&copy; " + year + " A. Mansour &amp; Colleagues (AMaC). "
    + "Educational material only \u2014 not clinical advice.</span>"
    + '<span><a href="mailto:' + CONFIG.email + '">' + CONFIG.email + "</a></span>"
    + "</div>";

  document.body.appendChild(el);
})();
