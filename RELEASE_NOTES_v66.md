RELEASE_NOTES_v66.md

Summary
- Fix: remove accidental 'Contact/Контакты' menu item on Getting Started pages (EN/RU).
- Fix: stabilize footer layout on mobile portrait using 2-column grid so right link block stays aligned (no drop/empty gap).

Files changed
- getting-started.html
- ru/kak-nachat.html
- styles.css
- RELEASE_NOTES_v66.md
- TODO_OWNER.md

Non-changes
- No changes to desktop structure/visual.
- No changes to forms/endpoints, Chatbase IDs, calendar/google form URLs.
- No changes to SEO tags/URL structure.
- No JS logic changes.

Validation
- node --check assets/js/shared-header.js: PASS
- node --check script.js: PASS
