"""Import the signed MRCP PACES Round 5 stations from the owner's docx into paces-stations/R5-*.json.

    python _tools/paces/import-round5.py PATH/TO/AMaC_PACES_Round5_56_signed_2026-10-16.docx

Each station is kept as written: its sections in order, each a list of blocks
(p = paragraph, h3 = sub-heading, li = list item, table = rows of cells). The only
text removed is editorial workflow notes (Station ID placeholders, draft labels,
"check live register before publication", "sign-off pending" lines); every
removal is printed. Stations in HOLD are not written (reasons alongside).

Then run: node build-paces-index.js
"""
import json
import os
import re
import sys

import docx
from docx.table import Table
from docx.text.paragraph import Paragraph

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OUT_DIR = os.path.join(ROOT, 'paces-stations')

HOLD = {
    'R5-124': 'clinical amendment not yet integrated ("Not independently clinically approved")',
    'R5-193': 'clinical issue still to verify and integrate before clinician review',
    'R5-332': '"Safety-critical omission" label with garbled amendment text in the scoring grid',
    'R5-340': '"Safety-critical omission" label with garbled amendment text in the scoring grid',
    **{i: 'no sources in the signed docx' for i in (
        'R5-323', 'R5-339', 'R5-345', 'R5-346', 'R5-349', 'R5-350', 'R5-353',
        'R5-354', 'R5-360', 'R5-368', 'R5-370', 'R5-379', 'R5-396')},
}

# Header segments that are workflow metadata, not station content.
DROP_SEGMENT = re.compile(r'^(?:Station ID\b.*|Educational draft dated .*|Working draft .*|Draft dated .*|DRAFT, .*)$')
DROP_SENTENCES = [
    'Related AMaC stations: check live register before publication.',
    'Draft awaiting clinical approval.',
    'Educational draft: clinician verification pending.',
    'Draft pending independent sign-off.',
    'PROVISIONAL: independent sign-off pending.',
]
ID_RE = re.compile(r'R5-\d{3}')


def ptext(p):
    out = []
    for r in p._p.iter():
        t = r.tag.split('}')[1]
        if t == 't':
            out.append(r.text or '')
        elif t in ('br', 'cr'):
            out.append('\n')
        elif t == 'tab':
            out.append('\t')
    return ''.join(out)


def parse(path):
    d = docx.Document(path)
    stations, cur, sec, seen_doc_title = [], None, None, False
    for el in d.element.body.iterchildren():
        tag = el.tag.split('}')[1]
        if tag == 'tbl':
            if sec is not None:
                t = Table(el, d)
                rows = [['\n'.join(ptext(p) for p in c.paragraphs).strip() for c in r.cells] for r in t.rows]
                sec['blocks'].append({'t': 'table', 'rows': rows})
            continue
        if tag != 'p':
            continue
        p = Paragraph(el, d)
        style = p.style.name if p.style is not None else ''
        text = ptext(p)
        if style == 'Title':
            if not seen_doc_title:
                seen_doc_title = True
                continue
            cur, sec = {'sections': [], 'title_line': text}, None
            stations.append(cur)
            continue
        if style == 'Heading 2':
            if re.match(r'^1\.\s*Title', text.strip()) and (cur is None or cur['sections']):
                cur = {'sections': [], 'title_line': ''}
                stations.append(cur)
            sec = {'heading': text.strip(), 'blocks': []}
            cur['sections'].append(sec)
            continue
        if sec is None:
            continue
        if style == 'Heading 3':
            sec['blocks'].append({'t': 'h3', 'text': text})
        elif style.startswith('List'):
            sec['blocks'].append({'t': 'li', 'text': text})
        else:
            sec['blocks'].append({'t': 'p', 'text': text})
    for s in stations:
        for x in s['sections']:
            while x['blocks'] and x['blocks'][-1]['t'] == 'p' and not x['blocks'][-1]['text'].strip():
                x['blocks'].pop()
            x['blocks'] = [b for b in x['blocks'] if b['t'] != 'p' or b['text'].strip()]
        head = s['title_line'] + ' ' + ' '.join(b.get('text', '') for x in s['sections'][:2] for b in x['blocks'])
        ids = ID_RE.findall(head)
        s['id'] = ids[0] if ids else None
    return stations


def clean_header(text, log, sid):
    parts = re.split(r'(\s+[·•|]\s+)', text)
    segs, seps = parts[0::2], parts[1::2]
    kept = []
    for i, seg in enumerate(segs):
        s = seg
        for sent in DROP_SENTENCES:
            if sent in s:
                s = s.replace(sent, '').strip()
                log.append(f'{sid} header: removed "{sent}"')
        if DROP_SEGMENT.match(s.strip()):
            log.append(f'{sid} header: removed "{s.strip()}"')
            continue
        if s.strip():
            kept.append((seps[i - 1] if i else '', s))
    if not kept:
        return ''
    return kept[0][1] + ''.join(sep + s for sep, s in kept[1:])


def clean_text(text, log, sid, where):
    for sent in DROP_SENTENCES:
        if sent in text:
            text = re.sub(r'\s*' + re.escape(sent), '', text)
            log.append(f'{sid} {where}: removed "{sent}"')
    return text


def encounter(header):
    m = re.search(r'Station\s+(\d)\s*[:,]?\s*([^·•|]*)', header)
    mins = re.search(r'(\d+)\s*minutes', header)
    return {
        'station': int(m.group(1)) if m else None,
        'label': m.group(2).strip().rstrip('.') if m else None,
        'minutes': int(mins.group(1)) if mins else None,
    }


def main():
    src = sys.argv[1]
    stations = parse(src)
    os.makedirs(OUT_DIR, exist_ok=True)
    log, written, held = [], [], []
    ids = [s['id'] for s in stations]
    assert None not in ids and len(set(ids)) == len(ids), ids
    for s in stations:
        sid = s['id']
        if sid in HOLD:
            held.append(f'{sid}: {HOLD[sid]}')
            continue
        sections = []
        for x in s['sections']:
            blocks = []
            for b in x['blocks']:
                b = dict(b)
                if x['heading'].startswith('2.') and b['t'] == 'p':
                    b['text'] = clean_header(b['text'], log, sid)
                elif b['t'] == 'table':
                    b['rows'] = [[clean_text(c, log, sid, x['heading']) for c in r] for r in b['rows']]
                else:
                    b['text'] = clean_text(b['text'], log, sid, x['heading'])
                blocks.append(b)
            sections.append({'heading': x['heading'], 'blocks': blocks})
        title = next(b['text'] for x in sections if x['heading'].startswith('1.') for b in x['blocks'] if b['t'] == 'p')
        header = next(b['text'] for x in sections if x['heading'].startswith('2.') for b in x['blocks'] if b['t'] == 'p')
        st = {'id': sid, 'exam': 'MRCP-PACES', 'round': 5, 'title': title.strip(),
              'encounter': encounter(header), 'sections': sections}
        with open(os.path.join(OUT_DIR, f'{sid}.json'), 'w', encoding='utf-8', newline='\n') as f:
            json.dump(st, f, ensure_ascii=False, indent=2)
            f.write('\n')
        written.append(sid)
    print(f'Wrote {len(written)} stations to paces-stations/, held {len(held)}:')
    for h in held:
        print('  - ' + h)
    print(f'Editorial notes removed ({len(log)}):')
    for line in log:
        print('  - ' + line)


if __name__ == '__main__':
    main()
