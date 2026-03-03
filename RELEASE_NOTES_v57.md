# RELEASE_NOTES_v57.md

## Summary
Safe technical SEO hygiene update across all HTML pages:
- Canonical and hreflang normalized (one canonical + one hreflang set per page).
- Fixed known canonical issues (terms/contact) and removed duplicated/malformed head link markup.
- Ensured `<html lang>` is correct for EN vs RU pages.

## Files changed
- All `.html` files (head normalization)
- No changes to chatbot/form/calendar constants.
- No changes to JS logic besides verification.

## Tests run
- `node --check script.js` (PASS)
- `node --check assets/js/shared-header.js` (PASS)
- Offline internal link scan across all HTML for href/src (PASS: 0 missing internal links)
- Head audit (PASS): exactly 1 canonical per page; no duplicate hreflang per page; no malformed link tags detected by parser.

## Fixed issues
- Incorrect/duplicated canonical/hreflang tags and malformed head markup on multiple pages.
- Standardized canonical for directory index pages to trailing-slash URLs (e.g., `/contact/`, `/ru/contact/`).

## Not changed intentionally
- Chatbase (ID: L9Rqcw-6NJyxiL2AcTbtP) injection and behavior.
- Formspree actions and `_next` redirects.
- Calendar / Google Form URLs.
- Shared header/footer structure and language-switch mapping logic.

## Risks & mitigations
- Risk: HTML formatting differs from previous minified/hand-written structure due to head normalization.
  - Mitigation: Parser-based rewrite limited to head; link scan + smoke list recommended.

## Rollback note
- Replace site with previous v56 zip if any regression is observed.
