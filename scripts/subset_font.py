#!/usr/bin/env python3
"""Subset xique.ttf to only include characters used in the project, then convert to woff2."""
import os
from fontTools import subset

# Collect all characters from source files
chars = set()
for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith(('.jsx', '.js', '.json', '.tsx', '.html')):
            path = os.path.join(root, f)
            try:
                with open(path, 'r', encoding='utf-8') as fh:
                    for c in fh.read():
                        chars.add(c)
            except:
                pass

# Also scan public html
for root, dirs, files in os.walk('public'):
    for f in files:
        if f.endswith(('.html', '.json')):
            path = os.path.join(root, f)
            try:
                with open(path, 'r', encoding='utf-8') as fh:
                    for c in fh.read():
                        chars.add(c)
            except:
                pass

# Add ASCII printable + common CJK punctuation
for i in range(32, 127):
    chars.add(chr(i))
chars.update('，。、！？：；""''（）【】《》…—·「」')

text = ''.join(sorted(chars))
print(f"Total unique characters: {len(chars)}")

# Subset and convert to woff2
args = [
    'public/assets/fonts/xique.ttf',
    f'--text={text}',
    '--output-file=public/assets/fonts/xique.woff2',
    '--flavor=woff2',
    '--no-hinting',
    '--desubroutinize',
    '--drop-tables+=GSUB,GPOS',  # Drop layout tables we don't need
]
print("Subsetting font...")
subset.main(args)

# Show size comparison
import os
orig = os.path.getsize('public/assets/fonts/xique.ttf')
new = os.path.getsize('public/assets/fonts/xique.woff2')
print(f"Original: {orig/1024/1024:.2f} MB")
print(f"Subset woff2: {new/1024/1024:.2f} MB")
print(f"Reduction: {(1-new/orig)*100:.1f}%")
