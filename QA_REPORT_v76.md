QA_REPORT_v76.md

Scope
- ONLY mobile footer portrait fix (2-column contract). No desktop changes intended.

Automated checks
- Key pages head audit (canonical==1, no duplicate hreflang keys):
  - index.html: PASS
  - ru/index.html: PASS
  - blog/index.html: PASS
  - ru/blog/index.html: PASS
  - contact/index.html: PASS
  - ru/contact/index.html: PASS
  - getting-started.html: PASS
  - ru/kak-nachat.html: PASS

- shared-header:
  - nav anchor count in main-nav: 4 (expected 4)
  - CTA button present: YES

Manual checks required (needs screenshots)
1) RU Contact footer
   - portrait (390x844): left/right are in one row (2 columns), right aligned, no drop under logo
   - landscape (844x390): still correct (right stays right)
2) EN Home footer
   - portrait + landscape as above

Note
- Screenshots must be captured on device/browser after deploy.
