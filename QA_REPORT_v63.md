QA_REPORT_v63.md

Scope
- Final stabilization header/footer for mobile (portrait + landscape) across EN/RU, including future blog/articles.
- Critical: No desktop structure changes; no business logic changes.

Changes
1) assets/js/shared-header.js
   - Blog/news/article header nav now includes ONLY 4 links:
     Home / Services / Process / FAQ
   - Removed Contact menu item and removed Contact CTA button from blog/news/article header.
   - Other pages unaffected (shared-header is used only where [data-shared-header] exists).

2) styles.css
   - Blog/news/article header:
     * Ensure main-nav is visible on mobile (was desktop-only).
     * Controlled horizontal overflow on nav (links never disappear).
     * Portrait: 2-row layout (logo row, then nav+lang).
     * Landscape: compact 1-row layout with scrollable nav if needed.
   - Footer mobile:
     * Keep symmetric two-column layout (left brand, right links).
     * Right column wraps links internally; avoids large empty gap.
     * Smaller link typography on very small screens for symmetry.

Manual acceptance checklist (owner/dev to run)
Pages:
- Home EN + Home RU
- Blog index EN + RU
- 2+ article pages EN
- 2+ article pages RU
- Contact EN + RU
- Terms + Privacy (EN/RU if available)

For each:
- Mobile portrait:
  * Header: 4 nav links visible (Home/Services/Process/FAQ) on blog/article
  * No extra Contact item and no Contact CTA in blog/article header
  * Footer: left brand + right links, symmetric; no empty gap
- Mobile landscape:
  * Header links do not disappear; nav scrolls if tight
  * Footer stays symmetric; no collapse under left block
- No horizontal scroll of the whole page
- Desktop unchanged vs prior release

Note on screenshots
- This package does not include device-rendered screenshots (requires iOS Safari rendering).
  Capture screenshots on iPhone (portrait+landscape) for the above pages after deploy.
