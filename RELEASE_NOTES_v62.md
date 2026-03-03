RELEASE_NOTES_v62.md

Summary
- Mobile layout normalization (CSS-only) focused on blog/news pages.
- Goal: make mobile header behavior consistent (portrait wrap, landscape one-row) and keep footer symmetric on mobile.

Files changed
- styles.css

What changed
- Blog/news header (.site-header / .header-inner):
  - Portrait: logo row + actions row (centered, stable wrapping)
  - Landscape: forced single-row layout with reduced logo/button sizes
- Footer (.footer__inner):
  - Keep two-column brand/links layout on mobile, allow safe wrapping of policy links; remove '|' separators on mobile.

Non-changes (guarantees)
- No changes to JS (script.js, assets/js/shared-header.js)
- No changes to HTML content/copy, forms, endpoints, Chatbase, language routing
- No changes to URLs/canonicals/hreflang

Suggested checks
- iPhone Safari: /blog/, /ru/blog/, 2 posts EN/RU; rotate portrait/landscape; verify header/footer stable and symmetric.
