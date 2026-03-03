RELEASE_NOTES_v64.md

Summary
- Restore CTA "Contact us / Связаться с нами" in blog/news/article header (shared-header).
- Remove ONLY the extra Contact menu item from blog/news/article nav; keep 4 items (Home/Services/Process/FAQ).
- Mobile header/footer stabilization aligned to HOME contract for portrait + landscape.
- Footer mobile kept symmetric (left brand / right links) with internal wrap on right.

Files changed
- assets/js/shared-header.js
- styles.css

Non-changes
- No desktop structure/visual changes intended (mobile-only layout rules for injected header/footer).
- No content/copy edits.
- No changes to forms/endpoints, Chatbase IDs, calendar/google form URLs.
- No SEO tags/URL structure changes.

Manual QA (required)
- Home EN/RU
- Blog index EN/RU
- 2 articles EN + 2 articles RU
- Contact EN/RU
- Terms/Privacy
Check on iPhone Safari:
- Portrait: header shows logo + 4 nav items + EN/RU + CTA; footer symmetric.
- Landscape: nav links never disappear (scroll inside nav if needed); CTA visible; footer symmetric.
- No whole-page horizontal scroll.
