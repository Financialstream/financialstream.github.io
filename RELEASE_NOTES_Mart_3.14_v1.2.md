Financial Stream LLC — Patch v1.2 (local QA + safe fixes)

Changes
- Focus ring: switched from `outline: 2px solid currentColor` to neutral token `--focus-ring`, with optional `--focus-ring-on-dark` override.
- Cleanup: removed unused legacy CSS/JS bundles that were not referenced by active pages.

QA checks
- Internal link scan: 0 missing targets (HTML href/src/link).
- No changes to Chatbase, Formspree endpoints, language switch mapping, or head SEO logic.
