# RELEASE_NOTES_v54

## Summary
Technical + SEO hygiene refactor (head cleanup + canonical/hreflang fixes + blog index JS sanity) with zero functional regressions. No business copy or article text was changed.

## Files changed
- `terms-and-conditions.html`
- `contact/index.html`
- `ru/contact/index.html`
- `ru/index.html`
- `blog/index.html`
- `ru/blog/index.html`
- `RELEASE_NOTES_v54.md` (this file)
- `TODO_OWNER.md`

## Tests run (PASS/FAIL)
### A) Syntax / JS
- `node --check script.js` — **PASS**
- `node --check assets/js/shared-header.js` — **PASS**

### B) Offline internal link scan (case-sensitive)
- Parsed **all** `*.html` and checked internal `href/src` targets (`/path` form) against files in the ZIP (including folder paths that map to `index.html`). — **PASS**
- Result: **checked 896** internal refs, **broken 0**.

## What fixed
### SEO head hygiene (HEAD CLEANUP)
- Removed malformed `</link>` and de-duplicated/normalized `hreflang` blocks in:
  - `ru/index.html`
  - `ru/contact/index.html`
- Fixed incorrect canonicals:
  - `terms-and-conditions.html` canonical previously pointed to `privacy-policy.html` → now points to itself.
  - `contact/index.html` canonical previously pointed to home `/` → now points to `/contact/`.
  - `ru/contact/index.html` canonical previously pointed to `/ru/` → now points to `/ru/contact/`.
- Fixed `hreflang` targets for contact pages to correctly pair EN `/contact/` ↔ RU `/ru/contact/`.

### Blog index JS sanity
- Removed duplicate redirect scripts and cleaned up concatenated head tags on:
  - `blog/index.html`
  - `ru/blog/index.html`
- Kept a single safe redirect that normalizes `/index.html` → folder URL.

### Functional bug fix
- Removed a **harmful redirect** on `ru/contact/index.html` that redirected any `/index.html` to `/ru/` (this could force-contact page to bounce to home and break intended routing).

## What intentionally not changed
- No changes to business copy or article text.
- No changes to Chatbase chatbotId, Formspree endpoint, Calendar URL, or Google Form URL.
- No changes to routing structure (no new redirects/server logic).

## Constants (extracted from repo; unchanged)
- Chatbase chatbotId: `L9Rqcw-6NJyxiL2AcTbtP`
- Formspree endpoint (EN/RU): `https://formspree.io/f/xwvqekla`
- Calendar URL: `https://calendar.app.google/xWh5kEQBoJvy9ien8`
- Google Form URL: `https://docs.google.com/forms/d/e/1FAIpQLSeGVohbKaOOEevQnt3kPCTz7LuKFYxtgVx2o3trXWTPL7pIxw/viewform?usp=publish-editor`
- Canonical base domain used in files: `https://financialstreamllc.com` (non-www)

## Needs Owner Input
- (Optional hardening) Verify Chatbase **Allowed domains** includes:
  - `financialstreamllc.com`
  - `www.financialstreamllc.com` (if you serve it)
- If you want a strict canonical policy for www vs non-www or trailing-slash normalization, confirm preferred standard (current build uses non-www and folder canonicals where applicable).

## Rollback notes (How to rollback in 1 commit)
If you commit this release as a single commit:
- `git revert <COMMIT_HASH>`
- `git push`

If you squash-merge, record the squash commit hash above and use that hash for rollback.
