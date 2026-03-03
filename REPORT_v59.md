FinancialStream v58 -> v59
P0 micro-fixes SEO/head (no refactor)

Changed files (exactly 8):
- getting-started.html
- ru/kak-nachat.html
- blog/index.html
- ru/blog/index.html
- contact/index.html
- ru/contact/index.html
- ru/index.html
- terms-and-conditions.html

Verification:
1) canonical_count == 1 on all 8 files: PASS
2) no duplicate hreflang keys (en/ru/x-default) on all 8 files: PASS
3) no '</link>' in head on all 8 files: PASS
4) values match the exact blocks specified in the v59 spec: PASS (manual spot-check via script)

Notes:
- JS/CSS/layout/content not modified.
- Only <head> link tags and the specified redirect script tags were normalized per spec.
