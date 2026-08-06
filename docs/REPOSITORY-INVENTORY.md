# Financial Stream Repository Inventory

## Purpose

This file records public paths that may look duplicated or legacy. It is intentionally conservative: no listed path is approved for deletion by this document.

A public website can contain apparently duplicated files for redirects, historical links, search indexing, language routing, campaign links, or compatibility. Removal requires a separate route, reference, and deployment audit.

## Current preservation rule

Until a path is proven safe to remove:

- keep the file;
- keep the live URL working;
- do not replace it with a redirect without testing;
- do not assume a newer-looking directory route supersedes an older `.html` route;
- check internal links, sitemap references, search-engine visibility, analytics, and external backlinks.

## Suspected legacy or parallel route groups

| Path or group | Current assessment | Removal status | Required verification |
|---|---|---|---|
| `privacy-policy.html` and `privacy/index.html` | Parallel privacy-policy routes may support older links or compatibility | **Preserve** | Compare content, canonical tags, inbound links, sitemap, and live response behavior |
| `ru/privacy-policy.html` and `ru/privacy/index.html` | Parallel Russian privacy routes | **Preserve** | Same checks as English routes; verify language alternates |
| `terms-and-conditions.html` and `terms/index.html` | Parallel terms routes may represent legacy and current structures | **Preserve** | Compare content, canonical tags, internal links, and external references |
| `ru/terms/index.html` and other Russian terms paths | Russian terms architecture requires a full route map | **Preserve** | Confirm all consent and footer links before any change |
| `getting-started.html`, `getting-started/index.html`, and `start-here/index.html` | Multiple onboarding-style routes may serve different generations or navigation paths | **Preserve** | Compare page intent, canonical tags, redirects, navigation references, and search performance |
| `ru/kak-nachat.html` and `ru/kak-nachat/index.html` | Parallel Russian onboarding routes | **Preserve** | Compare content and determine whether either path is linked or indexed |
| `materials/index.html` and `blog/index.html` | May represent an older materials hub and current editorial hub | **Preserve** | Check live navigation, canonical targets, redirects, and external links |
| `ru/materials/index.html` and `ru/blog/` content | Russian editorial structure may be transitional | **Preserve** | Verify current navigation and language pairing |
| `sms-consent.html`, `sms-terms/index.html`, and related Russian routes | Compliance-related routes may be referenced by forms, carriers, or A2P documentation | **Preserve** | Do not modify without consent-flow, Twilio/A2P, footer, and form audit |
| `404.html` | Required GitHub Pages fallback | **Preserve** | Verify that custom-domain 404 behavior remains correct |

## Known production-sensitive areas

The following categories require explicit scope before modification:

- contact forms and Formspree behavior;
- SMS consent, privacy, and terms links;
- Chatbase scripts and mobile layering;
- canonical and `hreflang` tags;
- structured data;
- Open Graph and Twitter metadata;
- custom-domain and GitHub Pages files;
- article URLs already indexed or shared externally.

## Required audit before cleanup

For each candidate path:

1. fetch the live URL and record status code;
2. record canonical and language alternate tags;
3. search the repository for references;
4. inspect navigation, footer, forms, sitemap, and robots files;
5. check whether another route has materially identical content;
6. review available Search Console and analytics evidence;
7. identify external backlinks where feasible;
8. define the replacement route;
9. implement and test a redirect where appropriate;
10. monitor after deployment.

## Decision states

Use only these states in future updates:

- **ACTIVE** — primary current route;
- **LEGACY-REQUIRED** — old route retained for compatibility;
- **REDIRECT-CANDIDATE** — may redirect after verification;
- **DUPLICATE-UNDER-REVIEW** — content overlap confirmed but disposition unresolved;
- **SAFE-TO-REMOVE** — all dependencies and replacement behavior verified;
- **DO-NOT-REMOVE** — operational, compliance, or platform requirement.

No path in this initial inventory is marked **SAFE-TO-REMOVE**.
