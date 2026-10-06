#!/usr/bin/env python3
"""Release signed-off AMaC Foundation products in one step.

Run against a checkout of main. It copies each named product from the draft
branch, removes the draft markings, adds its door card to foundation.html,
adds it to sitemap.xml, updates the Bleep Cards "practise next" line, and then
checks every internal link. It changes files only; it never commits or pushes.

    python3 _tools/release_foundation.py --repo PATH_TO_MAIN_CHECKOUT ward prescribe
    python3 _tools/release_foundation.py --repo PATH --check     # links only

Products: bleep-triage night-shift ward prescribe develop
Safe to run twice: a second run changes nothing.
"""
import argparse, datetime, os, re, subprocess, sys

SOURCE = 'origin/bleep-triage-draft'
TODAY = datetime.date.today().isoformat()

PRODUCTS = {
    'bleep-triage': dict(grid='oncall', name='On Call: Bleep Triage', badge='12 practice sets',
        desc='Several bleeps at once. Decide who to see first, what to ask the nurse to do and when to call a senior, then compare your order with a model answer.',
        practise='several bleeps at once, who to see first'),
    'night-shift': dict(grid='oncall', name='On Call: Night Shift', badge='3 practice nights',
        desc='Practise a whole night on call in six decisions. Bleeps keep arriving, waiting patients change, and the registrar can take only one. See what happened to every patient.',
        practise='a whole night on call in six decisions', replaces='On-Call Shift Simulator'),
    'ward': dict(grid='doors', name='Ward', badge='24 task cards',
        desc='The planned work of a Foundation doctor: ward rounds, jobs lists, results, handover, discharge, difficult conversations, consent and capacity, and care at the end of life.'),
    'prescribe': dict(grid='doors', name='Prescribe', badge='17 task cards',
        desc='Safe prescribing, step by step: the safe prescription, the BNF, allergies, errors, medicines reconciliation, high-risk medicines, fluids, blood and discharge medicines.'),
    'develop': dict(grid='doors', name='Develop', badge='16 task cards',
        desc='The frameworks around clinical work and your own progression: incidents, candour, raising concerns, confidentiality, the ePortfolio, ARCP, reflection, teaching, QI and careers.'),
}
GRIDS = {
    'doors':  dict(order=['starting-out', 'ward', 'prescribe', 'develop'],
                   labels=['AVAILABLE NOW · STARTING OUT', 'AVAILABLE NOW · THE FOUNDATION DOORS']),
    'oncall': dict(order=['bleep-cards', 'bleep-triage', 'night-shift'],
                   labels=['AVAILABLE NOW · ON CALL']),
}
SITEMAP_ORDER = ['foundation', 'starting-out', 'ward', 'prescribe', 'develop',
                 'bleep-cards', 'bleep-triage', 'night-shift']


def die(msg):
    sys.exit('RELEASE STOPPED: ' + msg)


def rd(repo, f):
    with open(os.path.join(repo, f), encoding='utf-8') as fh:
        return fh.read()


def wr(repo, f, s, changed):
    p = os.path.join(repo, f)
    old = open(p, encoding='utf-8').read() if os.path.exists(p) else None
    if old != s:
        with open(p, 'w', encoding='utf-8') as fh:
            fh.write(s)
        changed.append(f)


def sub1(pattern, repl, s, what, flags=0):
    out, n = re.subn(pattern, repl, s, count=1, flags=flags)
    if n != 1:
        die('could not find ' + what)
    return out


def card_html(slug):
    p = PRODUCTS[slug]
    return ('    <a class="tool-card" href="%s.html">\n'
            '      <div class="tc-name">%s</div>\n'
            '      <div class="tc-badge">%s</div>\n'
            '      <div class="tc-desc">%s</div>\n'
            '    </a>\n') % (slug, p['name'], p['badge'], p['desc'])


def released(repo, slug):
    return os.path.exists(os.path.join(repo, slug + '.html'))


def copy_and_strip(repo, slug, source, changed):
    for f in (slug + '.html', slug + '-data.js'):
        try:
            s = subprocess.run(['git', '-C', repo, 'show', '%s:%s' % (source, f)],
                               check=True, capture_output=True, text=True).stdout
        except subprocess.CalledProcessError as e:
            die('cannot read %s from %s (%s)' % (f, source, e.stderr.strip()))
        if f.endswith('.html'):
            s = sub1(r'\n[ \t]*<div class="draft"><b>DRAFT</b>[^\n]*</div>', '', s, f + ' draft banner')
            s = s.replace("+' of '+planned+' cards drafted'", "+' cards'")
        else:
            s = sub1(r'DRAFT until senior sign-off\.', 'Released %s after senior review.' % TODAY, s, f + ' header')
            s = s.replace("status: 'DRAFT'", "status: 'REVIEWED'")
            if "'DRAFT'" in s:
                die(f + ' still contains a DRAFT status')
        if re.search(r'not yet signed off|cards drafted', s, re.I) and f.endswith('.html'):
            die(f + ' still contains draft wording')
        wr(repo, f, s, changed)


def rebuild_grid(page, gkey, repo):
    g = GRIDS[gkey]
    lab = '|'.join(re.escape(l) for l in g['labels'])
    m = re.search(r'(<div class="sec-label">)(%s)(</div>\n  <div class="tool-grid"[^>]*>\n)(.*?)(\n  </div>\n)' % lab, page, re.S)
    if not m:
        die('foundation.html: grid "%s" not found' % g['labels'][0])
    cards = re.findall(r'    <a class="tool-card" href="([^"]+)\.html">.*?</a>\n?', m.group(4) + '\n', re.S)
    blocks = {c: re.search(r'    <a class="tool-card" href="%s\.html">.*?</a>\n' % re.escape(c), m.group(4) + '\n', re.S).group(0)
              for c in cards}
    for slug in g['order']:
        if slug in PRODUCTS and released(repo, slug) and slug not in blocks:
            blocks[slug] = card_html(slug)
    keys = [c for c in cards if c not in g['order']] + [c for c in g['order'] if c in blocks]
    label = g['labels'][-1] if len(keys) > 1 else g['labels'][0]
    body = ''.join(blocks[k] for k in keys).rstrip('\n')
    return page[:m.start()] + m.group(1) + label + m.group(3) + body + m.group(5) + page[m.end():]


def update_foundation(repo, changed):
    page = rd(repo, 'foundation.html')
    for gkey in GRIDS:
        page = rebuild_grid(page, gkey, repo)
    for slug, p in PRODUCTS.items():
        if p.get('replaces') and released(repo, slug):
            page = re.sub(r'\n    <div class="tool-card planned">\n      <div class="tc-name">%s</div>.*?</div>\n    </div>' % re.escape(p['replaces']),
                          '', page, count=1, flags=re.S)
    n = len(re.findall(r'class="tool-card planned">\s*<div class="tc-name">[^<]*Simulator<', page))
    page = sub1(r'<span class="hs-num">\d+</span><span class="hs-lbl">simulators? in build</span>',
                '<span class="hs-num">%d</span><span class="hs-lbl">simulator%s in build</span>' % (n, '' if n == 1 else 's'),
                page, 'foundation.html hero stat')
    page = update_foundation_text(page, repo)
    wr(repo, 'foundation.html', page, changed)


def and_join(xs):
    return xs[0] if len(xs) == 1 else ', '.join(xs[:-1]) + ' and ' + xs[-1]


def update_foundation_text(page, repo):
    """Rewrite the hero line and meta descriptions to match what is live."""
    doors = [PRODUCTS[s]['name'] for s in ('ward', 'prescribe', 'develop') if released(repo, s)]
    practice = [PRODUCTS[s]['name'].replace('On Call: ', '') for s in ('bleep-triage', 'night-shift') if released(repo, s)]
    soon = ([] if released(repo, 'night-shift') else ['an on-call shift simulator']) + \
           ['a prescribing simulator with Prescribing Safety Assessment (PSA)-style tasks', 'a question bank']
    soon_short = ([] if released(repo, 'night-shift') else ['an on-call shift simulator']) + ['a prescribing simulator', 'a question bank']
    avail = ['Starting Out']
    if doors:
        avail.append(and_join(doors) + ' task cards')
    avail.append('On Call: Bleep Cards, 65 of the calls an F1 actually gets')
    if practice:
        avail.append(and_join(practice) + ' for on-call practice')
    lede = ('For UK foundation doctors and final-year students. Available now: %s; and %s. '
            'Coming soon: %s, written against the UK Foundation Programme curriculum.') % (
            '; '.join(avail[:-1]), avail[-1], and_join(soon))
    page = sub1(r'(<p class="hero-lede">)For UK foundation doctors[^<]*(</p>)',
                lambda m: m.group(1) + lede + m.group(2), page, 'foundation.html hero line')
    short = and_join(['Starting Out'] + doors + ['65 On Call Bleep Cards'] + practice)
    desc = ('Foundation training from AMaC for F1 and F2 doctors, now open: %s available now, with %s coming soon '
            '— built around safe decisions on the ward.') % (short, and_join(soon_short))
    page, n = re.subn(r'Foundation training from AMaC for F1 and F2 doctors, now open: [^"]*', desc, page)
    if n != 3:
        die('foundation.html: expected 3 meta descriptions, found %d' % n)
    return page


def update_bleep_cards(repo, changed):
    page = rd(repo, 'bleep-cards.html')
    items = ['<a href="%s.html">%s</a> (%s)' % (s, PRODUCTS[s]['name'].replace('On Call: ', ''), PRODUCTS[s]['practise'])
             for s in ('bleep-triage', 'night-shift') if released(repo, s)]
    page = re.sub(r'\n  <!--FD:PRACTISE-->.*?<!--/FD:PRACTISE-->', '', page, flags=re.S)
    if items:
        line = ('\n  <!--FD:PRACTISE--><div class="page-note"><b>Practise next.</b> %s.</div><!--/FD:PRACTISE-->'
                % ' · '.join(items))
        page = sub1(r'(\n  <div class="page-note">[^\n]*</div>)', lambda m: m.group(1) + line, page, 'bleep-cards.html page note')
    wr(repo, 'bleep-cards.html', page, changed)


def update_sitemap(repo, changed):
    sm = rd(repo, 'sitemap.xml')
    url = '  <url><loc>https://amac-medical.com/%s.html</loc><lastmod>%s</lastmod><changefreq>%s</changefreq><priority>0.7</priority></url>\n'
    for slug in SITEMAP_ORDER:
        if slug in PRODUCTS and released(repo, slug) and ('/%s.html<' % slug) not in sm:
            prev = [s for s in SITEMAP_ORDER[:SITEMAP_ORDER.index(slug)] if ('/%s.html<' % s) in sm][-1]
            sm = sub1(r'(  <url><loc>https://amac-medical\.com/%s\.html</loc>[^\n]*\n)' % re.escape(prev),
                      lambda m: m.group(1) + url % (slug, TODAY, 'monthly'), sm, 'sitemap entry ' + prev)
    for f in ('foundation', 'bleep-cards'):
        if f + '.html' in changed:
            sm = sub1(r'(/%s\.html</loc><lastmod>)[0-9-]+' % f, r'\g<1>' + TODAY, sm, 'sitemap lastmod ' + f)
    wr(repo, 'sitemap.xml', sm, changed)


def ids_in(repo, datafile):
    return set(re.findall(r"""["']?id["']?: *["']([A-Z]+-[0-9-]+)["']""", rd(repo, datafile)))


def check_links(repo, source):
    problems = []
    pages = ['foundation.html', 'bleep-cards.html'] + [s + '.html' for s in PRODUCTS if released(repo, s)]
    anchor_data = {'bleep-cards.html': 'bleep-cards-data.js', 'ward.html': 'ward-data.js',
                   'prescribe.html': 'prescribe-data.js', 'develop.html': 'develop-data.js'}
    for pg in pages:
        texts = [rd(repo, pg)]
        dj = pg.replace('.html', '-data.js')
        if os.path.exists(os.path.join(repo, dj)):
            texts.append(rd(repo, dj))
        for t in texts:
            for href in re.findall(r"""href[=:] *["']([^"'#?:]+\.html)(#[A-Za-z0-9-]+)?""", t):
                target, frag = href
                if not os.path.exists(os.path.join(repo, target)):
                    problems.append('%s links to %s, which is not on this site yet%s' % (
                        pg, target, ' (release %s too)' % target[:-5] if target[:-5] in PRODUCTS else ''))
                elif frag and target in anchor_data and frag[1:] not in ids_in(repo, anchor_data[target]):
                    problems.append('%s links to %s%s, but that card does not exist' % (pg, target, frag))
            for cid in re.findall(r"card: *'(BLEEP-\d+)'", t):
                if cid not in ids_in(repo, 'bleep-cards-data.js'):
                    problems.append('%s refers to %s, which is not a Bleep Card' % (pg, cid))
    sm = rd(repo, 'sitemap.xml')
    for loc in re.findall(r'<loc>https://amac-medical\.com/([^<]+)</loc>', sm):
        if not os.path.exists(os.path.join(repo, loc)):
            problems.append('sitemap.xml lists %s, which does not exist' % loc)
    return problems


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--repo', required=True)
    ap.add_argument('--source', default=SOURCE)
    ap.add_argument('--check', action='store_true')
    ap.add_argument('products', nargs='*')
    a = ap.parse_args()
    bad = [p for p in a.products if p not in PRODUCTS]
    if bad:
        die('unknown product(s): %s. Choose from: %s' % (', '.join(bad), ' '.join(PRODUCTS)))
    changed = []
    if not a.check:
        if not a.products:
            die('name at least one product')
        for slug in a.products:
            copy_and_strip(a.repo, slug, a.source, changed)
        update_foundation(a.repo, changed)
        update_bleep_cards(a.repo, changed)
        update_sitemap(a.repo, changed)
    problems = check_links(a.repo, a.source)
    print('Changed: ' + (', '.join(changed) if changed else 'nothing'))
    print('Live after this: ' + ', '.join(s for s in PRODUCTS if released(a.repo, s)))
    if problems:
        print('\nLINK PROBLEMS (fix before committing):')
        for p in problems:
            print('  - ' + p)
        sys.exit(1)
    print('Links: all internal links and card references resolve.')


if __name__ == '__main__':
    main()
