FinancialStreamNew_v47 — NAV/LANG/BLOG STRUCTURE PATCH
Date: 2026-03-02

ROOT CAUSE(S) OF BROKEN NAV / 404
1) Language-switch explicit mapping in assets/js/shared-header.js referenced a non-existent EN blog URL:
   /blog/tax-return-seattle-wa-russian.html
   This URL does not exist in the build, so any navigation/language mapping to it produced a GitHub Pages 404.

2) The global language switch logic in script.js was rule-based only (/X ↔ /ru/X) and had no awareness of pages whose
   EN/RU slugs differ (e.g., /getting-started.html ↔ /ru/kak-nachat.html, and some blog slugs). That allowed the switch to
   generate non-existent targets (e.g., /ru/getting-started.html), which can produce 404.

WHAT WAS CHANGED (FILES)
- assets/js/shared-header.js
  - Replaced outdated EN↔RU blog mapping keys/values with the real existing slugs.
  - Added an embedded set of existing site paths and an existence-gated fallback strategy so the switch never routes to a 404.
  - Updated injected header markup to match the site’s standard "topbar" structure.
  - Fixed "Contact us" button target to locale contact page (/contact/ or /ru/contact/), while keeping the "Contact" menu item
    as an anchor to the locale main page contact section (/[#contact]).

- script.js
  - Added an embedded set of existing site paths (generated from the build) + an explicit EN↔RU mapping dictionary for pages
    with different slugs across locales.
  - Updated language switch link targets (.lang__link EN/RU) to be computed via:
    explicit mapping → rule-based mapping → existence check → fallback (blog/services/home), guaranteeing no 404 from switching.

MAPPING TABLE EN↔RU (ADDED/UPDATED)
- /blog/seattle-quickbooks-bookkeeping.html  ↔  /ru/blog/buhgalter-seattle-quickbooks.html
- /blog/seattle-tax-return-guide.html        ↔  /ru/blog/nalogovaya-deklaraciya-seattle.html
- /getting-started.html                      ↔  /ru/kak-nachat.html
(REMOVED: /blog/tax-return-seattle-wa-russian.html because the file does not exist.)

CONFIRMATION: 0 INTERNAL BROKEN LINKS AFTER SCAN
Scan method (offline, on the ZIP contents):
- Parsed every *.html file and validated local/internal references from:
  a[href], link[href], script[src], img[src]
  - Ignored external URLs (http/https), mailto/tel, and hash-only anchors.
  - Resolved relative paths against each HTML file’s directory.
  - For folder paths ending with "/", validated presence of index.html.

Also validated:
- sitemap.xml: every <loc> path resolves to an existing file in the build.
- JS language mapping dictionaries: every explicit-map key/value resolves to an existing file path, and the switch logic is
  existence-gated with deterministic fallbacks.

Result: 0 broken internal file references; EN↔RU switch is existence-gated (no generated 404 targets).
