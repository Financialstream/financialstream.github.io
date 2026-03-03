RELEASE_NOTES_v60.md

Summary
- Mobile layout hardening for header/footer on narrow screens (iOS Safari), targeting pages where footer/header could overflow (e.g., blog/news).
- No changes to business copy, forms, Chatbase, language routing, or JS logic.

Files changed
- styles.css

What changed (high level)
- Added mobile-only (@media max-width: 760px / 420px) rules:
  - Header: enable flex-wrap; reduce logo height; allow header-right wrap; slightly reduce CTA button padding/font.
  - Footer: stack footer blocks on mobile; wrap policy links; hide separators to avoid overflow.

Non-changes (explicit)
- script.js unchanged
- assets/js/shared-header.js unchanged
- No HTML edits
- No Formspree/_next changes
- No Chatbase chatbotId changes
- No URL/path changes

Suggested validation
- Open on iPhone:
  - /ru/blog/ (index) and a RU blog post
  - /blog/ (index) and an EN blog post
  - Verify header fits without horizontal overflow; footer links wrap cleanly; no layout jump.
