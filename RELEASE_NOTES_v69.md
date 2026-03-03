RELEASE_NOTES_v69.md

Summary
- Header contract: keep CTA "Contact us / Связаться с нами" everywhere; ensure no text nav-item "Contact/Контакты" appears in the 4-link nav (Home/Services/Process/FAQ).
- Mobile header/footer: micro-stabilization rules to avoid disappearing nav links and prevent thick header from chaotic wraps.
- Fix: add missing #faq anchor markers on Getting Started pages to prevent broken FAQ anchor behavior.
- Cleanup: verified no script_tmp.js present/referenced.

Files changed
- styles.css
- getting-started.html
- ru/kak-nachat.html
- RELEASE_NOTES_v69.md
- QA_REPORT_v69.md
- TODO_OWNER.md

Non-changes
- No business text/copy changes.
- No changes to forms/endpoints, Chatbase IDs, calendar/google form URLs.
- No SEO tag or URL-structure changes.
- No desktop layout changes intended.

Notes
- The #faq fix adds a non-visual <div id="faq"></div> marker right after <main> start; no visible content change.
