QA_REPORT_v78.md

Automated checks (ZIP-time)
- Header contract (shared-header): main-nav anchors = 4 (expected 4); CTA present = True
- missing internal links = 0
- bad fragments = 0
- key pages head audit (canonical==1, no hreflang duplicates): PASS on all checked pages
- node --check script.js: PASS
- node --check assets/js/shared-header.js: PASS

Manual checks to do on device (iPhone)
- RU Contact footer portrait: right policy text must no longer sit under the logo; right aligned and readable.
- EN Contact / EN Home: unchanged.
