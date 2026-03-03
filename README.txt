FinancialStream v47 — Navigation/Language Switch Structural Fix Report

Root cause(s) of broken nav / 404
1) Language-switch mapping in assets/js/shared-header.js contained legacy EN blog slugs that no longer exist in the repo.
   - Example: /blog/tax-return-seattle-wa-russian.html (missing file) was used as EN target for RU article /ru/blog/nalogovaya-deklaraciya-seattle.html.
   - Result: RU→EN switch could lead to GitHub Pages 404.
2) Blog index pages used a separate static header implementation, while article pages used shared-header injection. This created inconsistent header behavior/targets across blog pages.
3) Related links block was appended as a standalone section at the end of <main> (outside the article body container), creating layout inconsistency risk on some viewports.
4) Shared header "Contact us" CTA pointed to locale #contact anchor instead of locale contact page URL.

Files changed
- assets/js/shared-header.js
- styles.css
- assets/js/shared-article-components.js
- blog/index.html
- ru/blog/index.html

Mapping table entries added/updated (EN↔RU)
Updated explicit mapping dictionary in assets/js/shared-header.js:
- /getting-started.html ↔ /ru/kak-nachat.html
- /blog/seattle-quickbooks-bookkeeping.html ↔ /ru/blog/buhgalter-seattle-quickbooks.html
- /blog/seattle-tax-return-guide.html ↔ /ru/blog/nalogovaya-deklaraciya-seattle.html
- /blog/washington-bookkeeping-quickbooks.html ↔ /ru/blog/washington-bookkeeping-quickbooks.html
- /blog/quickbooks-healthy-books.html ↔ /ru/blog/quickbooks-healthy-books.html
- /blog/seattle-area-accountant-bookkeeper.html ↔ /ru/blog/seattle-area-accountant-bookkeeper.html
- /blog/sales-tax-2026.html ↔ /ru/blog/sales-tax-2026.html
- /blog/payroll-2026.html ↔ /ru/blog/payroll-2026.html
- /blog/irs-2026-inflation-adjustments.html ↔ /ru/blog/irs-2026-inflation-adjustments.html

Added safety behavior
- Rule-based locale pairing for mirrored paths.
- Existence-aware routing via known-path set.
- Fallbacks when explicit/rule target is unavailable:
  - blog article: /blog/ or /ru/blog/
  - services: /#services or /ru/#services
  - other pages: / or /ru/

Confirmation
0 internal broken links after scan.

How scan was performed
Tool: Python 3 standard library script (html.parser + urllib.parse + pathlib), executed offline against the repo.
What it checked:
- All *.html files
- Internal href/src references in <a>, <link>, <script>, <img>, <source>
- Missing target files and index-folder routes
- Main-page anchors existence for #services, #process, #faq, #contact on EN and RU homepages

Scan result:
- missing_links: 0
- anchor_issues: 0


=== v51 HOTFIX: Chatbot not loading ===
Root cause: script.js had stray leftover code referencing `normalized` and an `illegal return` at top-level, which prevents the entire file from executing in browsers. That stops the Chatbase loader from running.
Fix: removed the stray block; added a few extra embed attributes for Chatbase compatibility and a console warning if embed fails.
Files changed: script.js, README.txt
