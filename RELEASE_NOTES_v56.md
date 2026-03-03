# RELEASE_NOTES_v56

## Summary
Fix regressions on **/getting-started.html** (EN) and **/ru/kak-nachat.html** (RU): restore full header navigation, restore standard footer layout/links, and normalize CTA labels to **Contact us / Связаться с нами**.

## Files changed
- `getting-started.html`
- `ru/kak-nachat.html`
- Removed unused temp file: `script_tmp.js`

## Tests run
- `node --check script.js` ✅ PASS
- `node --check assets/js/shared-header.js` ✅ PASS
- Offline internal link scan (href/src, case-sensitive file existence) ✅ broken=0

## What fixed
- **Header regression on /getting-started.html:** added full nav (Home/Services/Process/FAQ/Contact anchor) + language switch links.
- **Footer regression on /getting-started.html:** replaced legacy footer with the standard site footer (includes Contact us + Privacy/Terms/SMS).
- **CTA consistency:** replaced "Book a Free Consultation" CTA on Getting Started pages with **Contact us / Связаться с нами**.
- **Helpful links anchors:** fixed FAQ link to point to the main page section (`/#faq` and `/ru/#faq`) instead of a non-existent on-page anchor.
- **SEO head hygiene (limited to structure):** added canonical + hreflang to both Getting Started pages and aligned favicon/fonts/styles includes to the site standard.

## What intentionally not changed
- No changes to article/service business copy.
- No changes to Chatbase chatbotId or Formspree endpoints.
- No changes to routing structure or language mapping logic.

## Needs Owner Input
- (Optional) Confirm canonical base domain policy (www vs non-www) for future SEO normalization.
- (Optional) Confirm whether you want the header menu to include the "Contact" anchor on ALL non-home pages (it is now included on Getting Started pages; some policy pages may still omit it).

## Rollback notes
Rollback this release in one step by deploying the previous ZIP (v55) or reverting the commit that introduced v56 (if using git):
- `git revert <commit_hash_for_v56>`

