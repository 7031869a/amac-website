/* ============================================================
   AMaC — shared navigation component  (nav.js)
   ------------------------------------------------------------
   ONE source of truth for the site nav. Each page carries only:
       <nav data-door="ukmla|plab1|plab2|shelf|structural"> … </nav>
   plus, before </body>:
       <script src="nav.js" defer></script>

   This script reads data-door, injects that door's correct nav
   (links + door-tag + "← all exams" exit), and brings its OWN
   scoped CSS so it renders identically on any page regardless of
   that page's stylesheet. The static <nav> markup already in the
   HTML is the JS-OFF FALLBACK; this script replaces it only when
   JS runs (progressive enhancement — never a navless page).

   Change the nav once here → every page updates. No more drift.
   ============================================================ */
(function () {
  "use strict";

  /* ---- per-door config: accent + link set ---- */
  var DOORS = {
    ukmla: {
      tag: "UKMLA",
      accent: "#2FB48C", accentText: "#5DCAA5",
      links: [
        { href: "cpsa-stations.html", label: "CPSA stations" },
        { href: "questions.html",     label: "AKT bank" },
        { href: "say-never-say.html", label: "Say / Never" },
        { href: "tools.html",         label: "Clinical reference" }
      ]
    },
    plab1: {
      tag: "PLAB 1",
      accent: "#4F97DD", accentText: "#85B7EB",
      links: [
        { href: "plab1.html",        label: "Question bank" },
        { href: "plab1-exams.html",  label: "Mock papers" },
        { href: "plab1-study.html",  label: "Study mode" },
        { href: "tools.html",        label: "Clinical reference" }
      ]
    },
    plab2: {
      tag: "PLAB 2",
      accent: "#C9A227", accentText: "#D7B43A",
      links: [
        { href: "tools.html",          label: "Tools" },
        { href: "books.html",          label: "Master Series" },
        { href: "osce.html",           label: "OSCE" },
        { href: "examiner-brain.html", label: "Examiner Brain" }
      ],
      cta: { href: "contact.html", label: "Get Started" }
    },
    shelf: {
      tag: "CLINICAL REFERENCE",
      accent: "#888780", accentText: "#B4B2A9",
      links: [
        { href: "prescribing.html",   label: "Prescribing" },
        { href: "antibiotics.html",   label: "Antibiotics" },
        { href: "normal-values.html", label: "Normal values" },
        { href: "ecg-abg.html",       label: "ECG / ABG" },
        { href: "frameworks.html",    label: "Frameworks" }
      ]
    },
    structural: {
      tag: "",
      accent: "#C9A227", accentText: "#D7B43A",
      links: [
        { href: "about.html",   label: "About" },
        { href: "contact.html", label: "Contact" }
      ]
    }
  };

  function currentFile() {
    var p = (location.pathname || "").split("/").pop();
    return p && p.length ? p : "index.html";
  }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  /* ---- inject scoped CSS once ---- */
  function injectStyles() {
    if (document.getElementById("amac-nav-styles")) return;
    var css = [
      ".amac-nav{position:sticky;top:0;z-index:200;background:#16243F;border-bottom:1px solid #28385A;",
      "-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);font-family:'Outfit',system-ui,sans-serif;}",
      ".amac-nav-inner{max-width:1180px;margin:0 auto;padding:13px 26px;display:flex;align-items:center;",
      "justify-content:space-between;gap:12px;}",
      ".amac-nav-left{display:flex;align-items:center;gap:13px;min-width:0;}",
      ".amac-brand{font-weight:600;letter-spacing:.1em;color:#C9A227;font-size:16px;text-decoration:none;white-space:nowrap;}",
      ".amac-door-tag{font-size:19px;font-weight:600;padding:3px 12px;border-radius:6px;letter-spacing:.1em;white-space:nowrap;line-height:1.25;animation:amac-tag-in .5s ease both;}",
      "@keyframes amac-tag-in{from{opacity:0;transform:translateY(-3px);}to{opacity:1;transform:none;}}",
      ".amac-nav-links{display:flex;align-items:center;gap:16px;list-style:none;margin:0;padding:0;font-size:12.5px;flex-wrap:wrap;}",
      ".amac-nav-links a{color:#C7D0E2;text-decoration:none;letter-spacing:.3px;transition:color .2s;white-space:nowrap;}",
      ".amac-nav-links a:hover{color:#fff;}",
      ".amac-nav-cta{background:#C9A227;color:#0B1220!important;padding:8px 16px;border-radius:5px;font-weight:600;}",
      ".amac-nav-cta:hover{background:#e0c45a;}",
      ".amac-nav-exit{color:#8593AE;font-size:11.5px;border-left:1px solid #2A3A5E;padding-left:13px;white-space:nowrap;}",
      ".amac-nav-toggle{display:none;background:none;border:0;cursor:pointer;color:#C7D0E2;font-size:22px;line-height:1;padding:4px 8px;}",
      "@media(max-width:760px){",
      "  .amac-nav-toggle{display:block;}",
      "  .amac-nav-links{display:none;position:absolute;top:100%;left:0;right:0;background:#16243F;",
      "    border-bottom:1px solid #28385A;flex-direction:column;align-items:flex-start;gap:0;padding:6px 26px 14px;}",
      "  .amac-nav.open .amac-nav-links{display:flex;}",
      "  .amac-nav-links li{width:100%;padding:8px 0;border-bottom:1px solid #18253c;}",
      "  .amac-nav-exit,.amac-door-tag{border-left:0;padding-left:0;}",
      "  .amac-nav{position:relative;}",
      "}"
    ].join("");
    var el = document.createElement("style");
    el.id = "amac-nav-styles";
    el.textContent = css;
    document.head.appendChild(el);
  }

  function buildNav(doorKey) {
    var cfg = DOORS[doorKey] || DOORS.structural;
    var here = currentFile();

    var nav = document.createElement("nav");
    nav.className = "amac-nav";
    nav.setAttribute("data-door", doorKey);

    var linksHTML = cfg.links.map(function (l) {
      var isHere = (l.href === here);
      var style = isHere ? ' style="color:' + cfg.accentText + '"' : "";
      return '<li><a href="' + esc(l.href) + '"' + style + '>' + esc(l.label) + "</a></li>";
    }).join("");

    var ctaHTML = cfg.cta
      ? '<li><a class="amac-nav-cta" href="' + esc(cfg.cta.href) + '">' + esc(cfg.cta.label) + "</a></li>"
      : "";

    // structural pages don't get an "all exams" exit (they ARE cross-site)
    var exitHTML = (doorKey === "structural")
      ? ""
      : '<li><a class="amac-nav-exit" href="index.html">\u2190 all exams</a></li>';

    var tagHTML = cfg.tag
      ? '<span class="amac-door-tag" style="background:' + cfg.accent + ';color:#0B1220;">' + esc(cfg.tag) + "</span>"
      : "";

    nav.innerHTML =
      '<div class="amac-nav-inner">' +
        '<div class="amac-nav-left">' +
          '<a class="amac-brand" href="index.html">AMaC</a>' +
          tagHTML +
        "</div>" +
        '<button class="amac-nav-toggle" aria-label="Menu" aria-expanded="false">\u2630</button>' +
        '<ul class="amac-nav-links">' + linksHTML + ctaHTML + exitHTML + "</ul>" +
      "</div>";

    // hamburger toggle
    var btn = nav.querySelector(".amac-nav-toggle");
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    return nav;
  }

  function init() {
    // find the page's existing <nav data-door> (the static fallback)
    var existing = document.querySelector("nav[data-door]");
    if (!existing) return; // page opts out of shared nav; leave it alone
    var doorKey = existing.getAttribute("data-door") || "structural";
    if (!DOORS[doorKey]) doorKey = "structural";

    injectStyles();
    var fresh = buildNav(doorKey);
    existing.parentNode.replaceChild(fresh, existing);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
