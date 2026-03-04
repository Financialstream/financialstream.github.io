QA_REPORT_v75.md

Automated checks
- node --check script.js: PASS 
- node --check assets/js/shared-header.js: PASS 
- head audit (canonical==1 + no duplicate hreflang): PASS issues=0
- missing_links (internal): 0
- bad_fragments (href="#..." without id): 0
- script_tmp.js present: NO

Manual acceptance requires screenshots:
- Home EN/RU, Blog index EN/RU, 2 articles EN/RU, Contact EN/RU, Terms/Privacy EN/RU
- desktop + mobile portrait + mobile landscape
