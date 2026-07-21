#!/bin/sh
set -eu
ROOT=/home/gagi_/freeCodeCamp-clean/freeCodeCamp
cd "$ROOT"
rm -rf poc-inline-css
mkdir -p poc-inline-css
cp -a client/public poc-inline-css/public
python3 - <<'PY'
from pathlib import Path
import re

path = Path('poc-inline-css/public/index.html')
text = path.read_text(encoding='utf-8')
pattern = re.compile(
    r'<style data-href="/swahili/styles\.d6bcfe22d55d4cd50da9\.css" '
    r'data-identity="gatsby-global-css">.*?</style>',
    re.S,
)
replacement = '<link rel="stylesheet" href="/swahili/styles.d6bcfe22d55d4cd50da9.css">'
new_text, count = pattern.subn(replacement, text, count=1)
if count != 1:
    raise SystemExit('expected exactly one Gatsby global CSS block')
path.write_text(new_text, encoding='utf-8')
PY
