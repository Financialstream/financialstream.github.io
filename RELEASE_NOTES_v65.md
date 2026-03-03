RELEASE_NOTES_v65.md

Summary
- Fix regression where blog/news/article header disappeared on desktop/mobile due to a JS template syntax error in assets/js/shared-header.js.
- Restored valid CTA expression: ${lang === 'ru' ? 'Связаться с нами' : 'Contact us'}.

Files changed
- assets/js/shared-header.js
- RELEASE_NOTES_v65.md
- TODO_OWNER.md

Validation
- node --check assets/js/shared-header.js: PASS
- node --check script.js: PASS

Non-changes
- No CSS/layout changes beyond previous v64.
- No content/copy edits.
- No changes to forms/endpoints, Chatbase IDs, calendar/google form URLs.
- No SEO/URL structure changes.
