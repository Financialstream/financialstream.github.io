# Financial Stream — Website Rebuild Audit V1.1

**Status:** Corrected audit baseline — ready for roadmap execution  
**Audit date:** 2026-08-05  
**Owner correction:** 2026-08-05  
**Production baseline:** `main` @ `2fb271f745eba7d9722b1613abc46342479f96d5`  
**Live site:** https://financialstreamllc.com/

## Canonical service rule

Financial Stream has six peer service concepts. None is automatically treated as the single primary service:

1. Bookkeeping / QuickBooks
2. Tax Returns / Tax Preparation
3. Sales Tax / DOR Reporting
4. Payroll / L&I / Quarterly Reporting
5. Business Setup / Company Formation
6. Financial Consulting / Document Review

Payroll / L&I is an active, important service and must remain in public copy, service navigation, structured data and intake options. It should not be removed, hidden, demoted or automatically placed first.

Financial Consulting / Document Review remains a combined, complementary service concept. It may cover document review and practical financial consultation, while avoiding unsupported legal, investment-adviser or credential claims.

## Purpose

This package is the working control set for the sitewide Financial Stream modernization. It is deliberately separate from the RU/EN flagship article program and contains audit/planning documentation only.

## Recommended repository location

```text
.github/project-docs/website-rebuild/audit-v1/
```

## Google Drive source of truth

- Audit folder: https://drive.google.com/drive/folders/1sOnYSza97wtxEVBDz1tj4I3uzHH8qPVQ
- Working index: https://docs.google.com/document/d/1VXEnzppZMs2VfLZ92bp23s1joOBy9ePhUhs24C0mW_E/edit
- Executive report: https://docs.google.com/document/d/1x8LooMLQXL_Ef8b20l8_6nMAfwErMIok3HB6ivuRGag/edit
- Complete page inventory: https://docs.google.com/spreadsheets/d/1K1HbtqEAOvGg384duLnwD7yMwR7Y4p__TKE-xxLP73A/edit
- Priority roadmap: https://docs.google.com/document/d/1q8HoM9G6A6OQKjre9hP2gNuKJl9zz3Av5PbVNUZPVSU/edit
- Baseline screenshots: https://drive.google.com/drive/folders/1kR1IeCzZjtpetOy_8nKpGbGBFLsacW2D
- Technical evidence: https://drive.google.com/drive/folders/1J0k94iAgY2Q0xbnZXdvLapSTbZNrtorT

## Package files

1. `00_EXECUTIVE_REPORT.md`
2. `01_PAGE_INVENTORY_SUMMARY.md`
3. `02_PRIORITY_ROADMAP.md`
4. `03_OWNER_DECISIONS_AND_NEXT_TASK.md`
5. `04_CURRENT_EXECUTION_SEQUENCE.md`
6. `audit-manifest.json`

## Current owner-approved execution sequence

1. Complete the two RU/EN flagship articles.
2. Create a premium About / Trust page as an EN/RU pair using the approved owner photograph.
3. Apply only small safety and release-quality fixes required around those pages.
4. Pause broad Financial Stream redesign until the ProAI Expert website is finished.
5. Return later for the evidence-led sitewide redesign.

See `04_CURRENT_EXECUTION_SEQUENCE.md` for the complete rationale and guardrails.

## Default technical next action

For any implementation work, use a separate branch and owner-reviewed pull request. Do not modify `main` directly.

Do not delete, hide, demote or redirect Payroll pages. Do not force Financial Consulting and Document Review into an artificial either/or choice.
