QA_REPORT_v74.md

Automated checks (package-time)
- node --check script.js: PASS
- node --check assets/js/shared-header.js: PASS
- missing internal links (after stripping ? and #): 0
- head audit: canonical_count==1 for all pages; no duplicate hreflang keys: PASS
- script_tmp.js: not present and not referenced: PASS
- href="#faq" without id="faq": 0

Manual acceptance (owner/dev; needs screenshots)
Pages:
- Home EN/RU
- Blog index EN/RU
- 2 EN articles + 2 RU articles
- Contact EN/RU
- Privacy or Terms (1)

Modes:
- desktop
- mobile portrait
- mobile landscape

Pass criteria:
1) Header: 4 text nav links only (Home/Services/Process/FAQ) + blue CTA "Contact us / Связаться с нами"
2) Mobile: nav links never disappear; no whole-page horizontal scroll.
3) Footer: left brand / right links; no big empty gaps; no right block falling under left.
4) RU contact: form labels/placeholders in Russian; site_lang=ru.
