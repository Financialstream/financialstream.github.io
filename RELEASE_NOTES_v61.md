RELEASE_NOTES_v61

Scope: Mobile rendering stabilization (iOS Safari) + Blog footer placement consistency.
Principle: Safe change; no copy changes; no integration/URL changes.

Changes:
- styles.css
  - Add: html{ -webkit-text-size-adjust: 100%; } to prevent iOS text autosizing regressions.
  - Add: mobile footer policy wrapping rules (flex-wrap; hide separators) for stable layout on narrow screens.
- Blog pages (EN + RU):
  - Move the single <footer class="footer"> block from inside article content to the end of <body> (before shared scripts),
    so footer does not appear mid-article and layout remains consistent across orientations.

Files changed:
- styles.css
- blog/index.html
- blog/irs-2026-inflation-adjustments.html
- blog/payroll-2026.html
- blog/quickbooks-healthy-books.html
- blog/sales-tax-2026.html
- blog/seattle-area-accountant-bookkeeper.html
- blog/seattle-quickbooks-bookkeeping.html
- blog/seattle-tax-return-guide.html
- blog/washington-bookkeeping-quickbooks.html
- ru/blog/index.html
- ru/blog/irs-2026-inflation-adjustments.html
- ru/blog/payroll-2026.html
- ru/blog/quickbooks-healthy-books.html
- ru/blog/sales-tax-2026.html
- ru/blog/seattle-area-accountant-bookkeeper.html
- ru/blog/seattle-quickbooks-bookkeeping.html
- ru/blog/seattle-tax-return-guide.html
- ru/blog/washington-bookkeeping-quickbooks.html

Validation (static):
- Confirmed: each blog page contains exactly 1 footer; footer now occurs near end of body.
- No changes to JS files, Formspree, Chatbase, calendar links.

Recommended manual smoke on iPhone:
- /blog/ and 2 posts
- /ru/blog/ and 2 posts
- rotate portrait/landscape; verify header/footer stay consistent; footer appears at bottom.
