#!/usr/bin/env python3
"""
_tools/build-counts.py — replaced by scripts/sync-counts.mjs (Oct 2026).

The counting and markup rewriting now live in one place, scripts/sync-counts.mjs,
which also records each count's source file and method in data/counts.json.
This shim keeps the old command working by running the new script:

    python _tools/build-counts.py          ==  node scripts/sync-counts.mjs
    python _tools/build-counts.py --check  ==  node scripts/sync-counts.mjs --check
"""

import os
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

if __name__ == '__main__':
    script = os.path.join(ROOT, 'scripts', 'sync-counts.mjs')
    sys.exit(subprocess.call(['node', script] + sys.argv[1:], cwd=ROOT))
