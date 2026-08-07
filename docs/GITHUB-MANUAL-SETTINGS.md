# Financial Stream GitHub Manual Settings

This file covers account- and repository-level GitHub presentation controls that may require the repository owner to use the GitHub web interface.

## Current access status — verified August 6, 2026

The connected GitHub app has full repository-level access to `Financialstream/financialstream.github.io`, including admin, maintain, push, pull, branches, commits, and pull requests.

The following are not repository-content access problems, but separate GitHub account or Settings UI controls that are not reliably writable through the current connector:

- personal profile name, bio, website, and location;
- profile repository creation;
- pinned repositories;
- repository About description, homepage, and topics;
- repository social-preview upload;
- some repository feature toggles.

Current verified presentation gaps:

- the GitHub profile display name is blank;
- the profile repository `Financialstream/Financialstream` does not currently exist;
- the production repository files and documentation are accessible and complete;
- the approved repository social-preview asset exists at `assets/img/og/financial-stream-og-en-1200x630.png`.

## Canonical service rule

Financial Stream has six equal approved core services:

1. Bookkeeping / QuickBooks
2. Tax Returns / Tax Preparation
3. Sales Tax / DOR Reporting
4. Payroll / L&I / Quarterly Reporting
5. Business Setup / Company Formation
6. Financial Consulting / Document Review

Payroll is confirmed and does not require renewed approval. Do not remove it from profile, repository, topic, or description guidance.

## 1. Account profile

Open:

`https://github.com/settings/profile`

Set:

### Name

`Financial Stream LLC`

### Bio

`Bookkeeping, tax preparation, sales tax, payroll, business setup, and financial document review for U.S. small businesses. EN/RU.`

### Website

`https://financialstreamllc.com/`

### Location

`Washington, United States`

### Public email

Leave unpublished unless the business owner explicitly approves a public business email. The primary service path should remain:

`https://financialstreamllc.com/contact/#structured-request`

### Avatar

Use the official Financial Stream square or circular FS mark. Confirm that it remains legible in GitHub’s circular crop and at small sizes.

Do not use:

- a personal photograph;
- ProAI Expert branding;
- a wide horizontal logo with unreadable small text;
- unofficial recreated artwork.

## 2. Create the profile repository

Create one new public repository with the exact name:

`Financialstream`

Required full name:

`Financialstream/Financialstream`

Recommended creation settings:

- Visibility: Public
- Initialize with README: Yes
- Add `.gitignore`: No
- Choose a license: No license

Replace its README with the approved content from:

`docs/GITHUB-PROFILE-README.md`

GitHub displays this README on the account profile because the repository name exactly matches the username.

Do not create duplicate profile repositories or alternate spellings.

## 3. Pin the production repository

On `https://github.com/Financialstream`:

1. select **Customize your pins**;
2. select `financialstream.github.io`;
3. save the selection.

Do not pin empty or artificial repositories solely to fill the profile.

## 4. Repository About section

Open:

`https://github.com/Financialstream/financialstream.github.io`

In the **About** panel, select the edit icon and set:

### Description

`Official EN/RU website for Financial Stream LLC — bookkeeping, tax preparation, sales tax, payroll, business setup, and financial document review for U.S. small businesses.`

### Website

`https://financialstreamllc.com/`

### Topics

Add:

- `accounting`
- `bookkeeping`
- `quickbooks`
- `tax-preparation`
- `sales-tax`
- `payroll`
- `business-setup`
- `small-business`
- `financial-services`
- `multilingual-website`
- `github-pages`
- `responsive-web-design`
- `english`
- `russian`

Do not add `open-source`, `fintech`, `saas`, or `ai-accounting` unless the project scope materially changes and the label becomes accurate.

## 5. Repository social preview

Open:

`Repository → Settings → General → Social preview`

Preferred source:

`assets/img/og/financial-stream-og-en-1200x630.png`

The source file is present in the production repository.

Before upload, confirm:

- the image is readable at small preview sizes;
- Financial Stream is the dominant brand;
- no private data is visible;
- no unsupported metrics or claims appear;
- the file meets GitHub’s size and format limits.

If GitHub rejects the existing dimensions, export a dedicated 1280 × 640 PNG based on the same approved artwork.

## 6. Repository features

Open:

`Repository → Settings → General → Features`

Recommended state:

- Issues: Off unless actively used for development work
- Discussions: Off
- Projects: Off unless actively used
- Wiki: Off
- Sponsorships: Off

Keep GitHub Pages and required Actions workflows enabled.

## 7. Final manual verification

After applying the settings, verify:

- [ ] profile name is `Financial Stream LLC`;
- [ ] bio includes all six approved services without material truncation;
- [ ] official website is clickable;
- [ ] location is `Washington, United States`;
- [ ] avatar is clear in circular crop;
- [ ] profile repository `Financialstream/Financialstream` exists;
- [ ] profile README appears on `github.com/Financialstream`;
- [ ] `financialstream.github.io` is pinned;
- [ ] About description includes Payroll and the other five approved services;
- [ ] website and topics are saved;
- [ ] `payroll` is included as an approved topic;
- [ ] social preview renders when the repository link is shared;
- [ ] ProAI Expert appears only as subordinate developer attribution;
- [ ] no client or tax data is exposed.

## Authority note

This manual checklist does not override:

- `PROJECT_STATUS.md`;
- `docs/FINANCIAL_STREAM_PHASE_1_CLOSURE.md`;
- `docs/CONTENT-INTEGRITY.md`.

GitHub repository documentation remains canonical. Account-level manual settings must be kept consistent with the six approved Financial Stream services.