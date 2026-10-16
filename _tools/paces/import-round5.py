"""Import the signed MRCP PACES Round 5 stations from the owner's docx into paces-stations/R5-*.json.

    python _tools/paces/import-round5.py PATH/TO/AMaC_PACES_Round5_56_signed_2026-10-16.docx

Each station is kept as written: its sections in order, each a list of blocks
(p = paragraph, h3 = sub-heading, li = list item, table = rows of cells). The only
text removed is editorial workflow notes (Station ID placeholders, draft labels,
"check live register before publication", "sign-off pending" lines); every
removal is printed. Stations in HOLD are not published: all of them are listed with
their reasons in _tools/paces/held-round5.json, and those in HOLD_RECORD also get a
full record in _tools/paces/held/ with their original Sources text (not served).

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
    # Owner, 16 Oct 2026: held until the sign-off is confirmed.
    **{i: 'source said sign-off pending - awaiting confirmation' for i in (
        'R5-211', 'R5-212', 'R5-214', 'R5-217', 'R5-218', 'R5-220', 'R5-224',
        'R5-226', 'R5-227', 'R5-228')},
}
# Held stations kept as a full record, with their Sources section exactly as in the docx.
HOLD_RECORD = {i for i, why in HOLD.items() if why.startswith('source said sign-off pending')}
HELD_DIR = os.path.join(ROOT, '_tools', 'paces', 'held')

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
    os.makedirs(HELD_DIR, exist_ok=True)
    log, written, held, held_list = [], [], [], []
    ids = [s['id'] for s in stations]
    assert None not in ids and len(set(ids)) == len(ids), ids
    for s in stations:
        sid = s['id']
        if sid in HOLD and sid not in HOLD_RECORD:
            title = next((b['text'] for x in s['sections'] if x['heading'].startswith('1.')
                          for b in x['blocks'] if b['t'] == 'p'), '')
            held.append(f'{sid}: {HOLD[sid]}')
            held_list.append({'id': sid, 'title': title.strip(), 'reason': HOLD[sid], 'record': None})
            continue
        keep_sources = sid in HOLD_RECORD
        sections = []
        for x in s['sections']:
            blocks = []
            raw = keep_sources and x['heading'].startswith('15')
            for b in x['blocks']:
                b = dict(b)
                if raw:
                    pass
                elif x['heading'].startswith('2.') and b['t'] == 'p':
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
        if keep_sources:
            st = {'held': HOLD[sid], **st}
            path = os.path.join(HELD_DIR, f'{sid}.json')
            held.append(f'{sid}: {HOLD[sid]} (record: _tools/paces/held/{sid}.json)')
            held_list.append({'id': sid, 'title': st['title'], 'reason': HOLD[sid], 'record': f'_tools/paces/held/{sid}.json'})
        else:
            path = os.path.join(OUT_DIR, f'{sid}.json')
            written.append(sid)
        with open(path, 'w', encoding='utf-8', newline='\n') as f:
            json.dump(st, f, ensure_ascii=False, indent=2)
            f.write('\n')
    # A held station must not stay in the published folder from an earlier run.
    for sid in HOLD:
        stale = os.path.join(OUT_DIR, f'{sid}.json')
        if os.path.exists(stale):
            os.remove(stale)
            print(f'Removed {sid} from paces-stations/ (now held)')
    held_list.sort(key=lambda h: h['id'])
    with open(os.path.join(ROOT, '_tools', 'paces', 'held-round5.json'), 'w', encoding='utf-8', newline='\n') as f:
        json.dump(held_list, f, ensure_ascii=False, indent=2)
        f.write('\n')
    print(f'Wrote {len(written)} stations to paces-stations/, held {len(held)}:')
    for h in held:
        print('  - ' + h)
    print(f'Editorial notes removed ({len(log)}):')
    for line in log:
        print('  - ' + line)


if __name__ == '__main__':
    main()
