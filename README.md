# Financial Stream LLC — Website (GitHub Pages)

This is a static website intended for GitHub Pages.

## Live URL
https://financialstreamllc.com

## Bilingual (EN/RU)
Language switching is handled by static EN/RU page pairs through header links, canonical tags, and hreflang alternates. Active shared behavior lives in `assets/js/site.js`; active styling lives in `assets/css/site.css`.

## Form submissions (email delivery)
GitHub Pages is static — it **cannot** send emails by itself.

Right now the forms use a safe fallback:
- On submit, it opens an email draft to `financialstreamllc@gmail.com` with the entered data.

### To receive submissions automatically (recommended)
Pick **one** option:
1) **Formspree** (easy):
   - Create a Formspree form endpoint
   - Keep the existing Formspree endpoint in the contact forms unless intentionally rotating providers
   - Remove the JS `hookMailto(...)` calls (or keep, but it will conflict)

2) **Netlify Forms**:
   - Deploy via Netlify (instead of GitHub Pages)
   - Add Netlify form attributes and connect notifications to email

## Assets
- `assets/logo-horizontal.png` extracted from the approved business card
- `assets/hero-bg.jpg` soft background image aligned with the card/site style

## Deploy to GitHub Pages
1. Create repo named: `financialstreamllc.com`
2. Upload all files from this folder to the repo root
3. Settings → Pages → Source: `Deploy from a branch` → Branch: `main` → Folder: `/ (root)`
4. Wait for build → your site is live.

---
If you need a custom domain later, add it in Settings → Pages.
