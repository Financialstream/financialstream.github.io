QA_REPORT_v64.md

Acceptance matrix (mobile portrait + landscape):
1) Header contract on ALL pages
   - Logo
   - Nav: Home / Services / Process / FAQ (ONLY these 4 on blog/news/article)
   - Language switch EN/RU
   - CTA button: Contact us / Связаться с нами (must be present everywhere)

2) Footer contract on ALL pages
   - Left: logo + © Financial Stream LLC
   - Right: Contact link + Privacy + Terms + SMS links
   - Mobile: right column wraps internally; no big empty gap; no collapse under left.

Pages to test:
- / and /ru/
- /blog/ and /ru/blog/
- 2 EN posts + 2 RU posts
- /contact/ and /ru/contact/
- /privacy-policy.html and /terms-and-conditions.html (+ RU equivalents if present)

Notes
- This package does not include device screenshots (must be captured after deploy on iPhone).
