import sys, pypdf
path = sys.argv[1]
r = pypdf.PdfReader(path)
out = []
for i, p in enumerate(r.pages):
    t = p.extract_text() or ''
    out.append(f"\n===== PAGE {i+1} / {len(r.pages)}  (chars={len(t)}) =====\n{t}")
sys.stdout.reconfigure(encoding='utf-8')
print(''.join(out))
