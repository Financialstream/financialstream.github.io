# 02 — Priority Matrix and Upgrade Roadmap — Corrected V1.1

## Superseded assumptions

The following original findings are withdrawn:

- Payroll / L&I as an unapproved service.
- Payroll requests as invalid intake routing.
- Six-service architecture as a conflict with a five-service model.

The owner-confirmed model contains six peer services, including Payroll / L&I. Financial Consulting / Document Review remains a combined complementary service.

## Corrected priority matrix

| ID | Status/Priority | Finding | Impact | Effort | Dependency |
|---|---|---|---|---|---|
| CORR-01 | Closed | Payroll/L&I exclusion assumption was incorrect | Audit correction | Complete | Owner correction |
| CORR-02 | Closed | Payroll intake is valid for an active service | Audit correction | Complete | Owner correction |
| CORR-03 | Closed | Six-service architecture is owner-confirmed | Audit correction | Complete | Owner correction |
| P0-03 | P0 | RU mobile menu unnamed to assistive technology | High user impact | Small | Shared-header QA |
| P1-02 | P1 | `300+` metric context needs proof | High trust | Small | Owner evidence |
| P1-03 | P1 | Testimonials need consent/source ledger | High trust | Small | Owner records |
| P1-04 | P1 | No About/Trust system | Medium/High | Medium | Approved facts/story |
| P1-05 | P1 | Client-side legacy redirects | Medium | Medium | GSC/backlinks/hosting |
| P1-06 | P1 | No skip link | High accessibility | Small | Shared template |
| P1-07 | P1 | Potential content cannibalization | High SEO opportunity | Large | GSC/backlinks |
| P1-08 | P1 | 75-file static duplication | High technical | Large | Component strategy |
| P1-09 | P1 | QA script lacks modern gates | High technical | Medium | Tooling task |
| P1-10 | P1 | Competing contact paths | High conversion | Medium | Operating model |

## Phase 0 — Accessibility, trust and QA alignment V2

**Pages/systems**

- Shared EN/RU header and navigation
- Contact EN/RU and Start Here EN/RU
- Homepage proof sections
- Metrics/testimonials governance
- Existing QA scripts
- Representative service templates, including Payroll and Financial Consulting / Document Review

**Actions**

- Preserve the six-service architecture and equal peer treatment.
- Preserve Payroll in navigation, metadata, schema, articles and intake.
- Keep Financial Consulting / Document Review as a combined service and clarify practical scope.
- Fix RU mobile-menu accessible naming.
- Add skip-link support.
- Verify metrics/testimonials.
- Simplify contact-path governance without removing valid service options.
- Add canonical/hreflang, broken-link, service-presence and accessibility regression checks.

**Complexity:** Medium  
**Business value:** High

## Phase 1 — Core conversion

- Homepage positioning and hierarchy across six services.
- One primary structured intake path with valid service choices.
- Contact and Start Here simplification.
- About/Trust system.
- Header/footer/navigation consistency.

**Complexity:** Large  
**Business value:** High

## Phase 2 — Template systems

Build reusable static/build-time systems for:

1. Homepage.
2. Six service pages.
3. Editorial/articles.
4. Contact/intake.
5. About/trust.
6. Legal/utility.
7. Multilingual navigation.
8. FAQ, CTA and source-note components.
9. Design tokens and metadata logic.

Do not adopt a framework unless it produces clear maintainability value.

## Phase 3 — Priority content

- Six owner-confirmed service concepts.
- RU/EN flagship pair after owner approval.
- Supporting resources and internal-link clusters.
- Language-specific search intent rather than literal translation.

## Phase 4 — Full modernization

- Remaining articles.
- Remaining language gaps.
- Evidence-based consolidation candidates.
- Legacy cleanup after GSC/backlink review.

## Phase 5 — Optimization

- Performance measurement.
- Accessibility validation.
- Conversion measurement.
- Structured-data refinement.
- Release checks and content governance.

## Top safe quick wins

1. Fix RU mobile-menu accessible names.
2. Add skip link and main-content target.
3. Preserve and consistently present all six services across EN/RU shared components.
4. Confirm Payroll remains present in metadata, schema and intake as a peer service.
5. Keep Financial Consulting / Document Review combined and clarify its practical scope.
6. Create a private claim/proof ledger.
7. Lock exact conservative wording of `127+` and `300+` metrics.
8. Verify testimonial consent and attribution.
9. Simplify the primary contact journey without deleting service topics.
10. Expand canonical/hreflang/sitemap/robots checks.
11. Add broken-link and missing-asset checks.
12. Add `html lang`, accessible-menu-name and duplicate-ID checks.
13. Prepare an About/Trust brief and internal-link plan.
14. Map Bookkeeping/QuickBooks intent before rewrites.
15. Map tax content intent before consolidation.

## Changes not to do yet

1. Do not delete, hide, demote or redirect Payroll pages.
2. Do not automatically place Payroll first or describe it as the single primary service.
3. Do not force Financial Consulting and Document Review into an artificial either/or choice.
4. Do not mass-change `.html` or trailing-slash patterns.
5. Do not delete older articles merely because they look dated.
6. Do not merge bookkeeping/QuickBooks or tax pages without page-query evidence.
7. Do not auto-translate the entire site into Ukrainian.
8. Do not modify or judge unfinished flagship implementation as production.
9. Do not add schema unsupported by visible content.
10. Do not add credentials, ratings, awards, partnerships or guarantees without proof.
