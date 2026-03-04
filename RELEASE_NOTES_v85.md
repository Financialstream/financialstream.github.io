RELEASE_NOTES_v85.md

Base
- Built from FinancialStreamNew_v83.zip (NOT from v78).

Changes
A) Footer contract (4 pages): add missing contact-link in footer right block
- Results: {'blog/seattle-quickbooks-bookkeeping.html': (True, 'inserted'), 'blog/seattle-tax-return-guide.html': (True, 'inserted'), 'ru/blog/buhgalter-seattle-quickbooks.html': (True, 'inserted'), 'ru/blog/nalogovaya-deklaraciya-seattle.html': (True, 'inserted')}

B) Mobile landscape footer: prevent right block dropping below left
- styles.css: added v85 media block (max-width:900px, landscape) with flex-nowrap.

C) Home hreflang:
- index.html: added hreflang ru + x-default (kept 1 canonical).

Not changed
- Chatbase untouched
- Formspree endpoints/_next/submit untouched
- EN↔RU mapping JS untouched
- No content/SEO text changes beyond hreflang links
