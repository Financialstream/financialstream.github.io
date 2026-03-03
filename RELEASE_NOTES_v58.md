# RELEASE_NOTES_v58

## Summary
P0 verification release: HEAD SEO consistency confirmed across the site with **zero regressions**.
No business copy changes. No integration changes.

## Scope (P0 only)
- Canonical: exactly 1 per HTML page
- Hreflang: exactly 1 set per page (en/ru/x-default where applicable)
- Canonical targets confirmed for:
  - /terms-and-conditions.html
  - /contact/
  - /ru/contact/
- Canonical + hreflang confirmed present for:
  - /getting-started.html
  - /ru/kak-nachat.html
- Head hygiene: no malformed </link>, no duplicated alternate blocks

## Files changed
- RELEASE_NOTES_v58.md (new)
- TODO_OWNER.md (updated: none)

## Validation commands
- node --check script.js
- node --check assets/js/shared-header.js
- Offline internal link scan across *.html (href/src/link/script/img/css) => 0 missing
- Head audit across *.html:
  - canonical_count == 1
  - no duplicate hreflang keys per page

## Fixed issues
- No additional diffs required beyond P0 verification in this build (site already compliant in v57).

## Non-changes (intentional)
- Chatbase ID and injection logic unchanged
- Formspree endpoints and _next unchanged
- Calendar / Google Form URLs unchanged
- Header/footer structure and language routing unchanged

## Rollback
Re-deploy previous zip (v57) to GitHub Pages.
