// Shared header injection + navigation + language switch
// Dependency-free and safe for GitHub Pages.
//
// Purpose:
// - Ensure consistent header (logo, nav, language switch) on blog + standalone pages.
// - EN and RU are independent localized sites: we only switch URLs, never translate content.
// - Language switch must NEVER route to a 404 (uses existence-gated mapping + fallbacks).

(function () {
  'use strict';

  // Keep this list in sync with the build output (generated offline).
  const FS_EXISTING_PATHS = new Set([
    "/",
    "/blog/",
    "/blog/index.html",
    "/blog/irs-2026-inflation-adjustments.html",
    "/blog/payroll-2026.html",
    "/blog/quickbooks-healthy-books.html",
    "/blog/sales-tax-2026.html",
    "/blog/seattle-area-accountant-bookkeeper.html",
    "/blog/seattle-quickbooks-bookkeeping.html",
    "/blog/seattle-tax-return-guide.html",
    "/blog/washington-bookkeeping-quickbooks.html",
    "/contact/",
    "/contact/index.html",
    "/getting-started.html",
    "/googled57b0ab6edc65ff3.html",
    "/index.html",
    "/privacy-policy.html",
    "/ru/",
    "/ru/blog/",
    "/ru/blog/buhgalter-seattle-quickbooks.html",
    "/ru/blog/index.html",
    "/ru/blog/irs-2026-inflation-adjustments.html",
    "/ru/blog/nalogovaya-deklaraciya-seattle.html",
    "/ru/blog/payroll-2026.html",
    "/ru/blog/quickbooks-healthy-books.html",
    "/ru/blog/sales-tax-2026.html",
    "/ru/blog/seattle-area-accountant-bookkeeper.html",
    "/ru/blog/washington-bookkeeping-quickbooks.html",
    "/ru/contact/",
    "/ru/contact/index.html",
    "/ru/index.html",
    "/ru/kak-nachat.html",
    "/ru/privacy-policy.html",
    "/ru/services/",
    "/ru/services/company-formation.html",
    "/ru/services/financial-consulting.html",
    "/ru/services/index.html",
    "/ru/services/payroll-li-quarterly.html",
    "/ru/services/quickbooks-bookkeeping.html",
    "/ru/services/sales-tax-dor-reporting.html",
    "/ru/services/tax-returns.html",
    "/ru/sms-consent.html",
    "/ru/terms-and-conditions.html",
    "/services/",
    "/services/company-formation.html",
    "/services/financial-consulting.html",
    "/services/index.html",
    "/services/payroll-li-quarterly.html",
    "/services/quickbooks-bookkeeping.html",
    "/services/sales-tax-dor-reporting.html",
    "/services/tax-returns.html",
    "/sms-consent.html",
    "/terms-and-conditions.html"
    "/blog/us-tax-return-prep-remote-checklist.html",
    "/blog/quickbooks-online-bookkeeping-monthly-close.html",
    "/ru/blog/nalogovaya-deklaraciya-usa-udalenno-cheklist.html",
    "/ru/blog/quickbooks-uchet-ssha-ezhemesyachnyy-cheklist.html",
  ]);

  // Explicit mappings for cases where slugs differ.
  const FS_EXPLICIT_LANG_MAP = {
    "/blog/seattle-quickbooks-bookkeeping.html": "/ru/blog/buhgalter-seattle-quickbooks.html",
  "/blog/quickbooks-online-bookkeeping-monthly-close.html": "/ru/blog/quickbooks-uchet-ssha-ezhemesyachnyy-cheklist.html",
  "/blog/us-tax-return-prep-remote-checklist.html": "/ru/blog/nalogovaya-deklaraciya-usa-udalenno-cheklist.html",
    "/blog/seattle-tax-return-guide.html": "/ru/blog/nalogovaya-deklaraciya-seattle.html",
    "/getting-started.html": "/ru/kak-nachat.html",
    "/ru/blog/buhgalter-seattle-quickbooks.html": "/blog/seattle-quickbooks-bookkeeping.html",
    "/ru/blog/nalogovaya-deklaraciya-seattle.html": "/blog/seattle-tax-return-guide.html",
    "/ru/kak-nachat.html": "/getting-started.html"
  };

  function normalizePath(pathname) {
    try {
      const u = new URL(pathname, window.location.origin);
      pathname = u.pathname;
    } catch (_) {
      // no-op
    }
    if (!pathname.startsWith('/')) pathname = '/' + pathname;
    pathname = pathname.replace(/\/{2,}/g, '/');
    if (pathname === '/index.html') pathname = '/';
    if (pathname === '/ru/index.html') pathname = '/ru/';
    return pathname;
  }

  function exists(pathname) {
    return FS_EXISTING_PATHS.has(normalizePath(pathname));
  }

  function isRu(pathname) {
    return normalizePath(pathname).startsWith('/ru/');
  }

  function fallback(fromPath, targetLang) {
    const from = normalizePath(fromPath);
    const isBlogArticle = /\/(ru\/)?blog\/.+\.html$/.test(from) && !/\/blog\/index\.html$/.test(from);
    const isServicesArticle = /\/(ru\/)?services\/.+\.html$/.test(from);

    if (targetLang === 'ru') {
      if (isBlogArticle) return '/ru/blog/';
      if (isServicesArticle) return '/ru/#services';
      return '/ru/';
    }
    // EN
    if (isBlogArticle) return '/blog/';
    if (isServicesArticle) return '/#services';
    return '/';
  }

  function buildLangUrl(targetLang) {
    const path = normalizePath(window.location.pathname || '/');
    const search = window.location.search || '';
    const hash = window.location.hash || '';

    const currentLang = isRu(path) ? 'ru' : 'en';
    if (targetLang === currentLang) return path + search + hash;

    // 1) Explicit mapping
    if (FS_EXPLICIT_LANG_MAP[path]) {
      const mapped = FS_EXPLICIT_LANG_MAP[path];
      if (exists(mapped)) return mapped + search + hash;
    }

    // 2) Rule-based prefix/unprefix
    let candidate;
    if (targetLang === 'ru') {
      candidate = (path === '/') ? '/ru/' : (path.startsWith('/ru/') ? path : '/ru' + path);
    } else {
      candidate = (path === '/ru/') ? '/' : (path.startsWith('/ru/') ? path.replace(/^\/ru/, '') : path);
    }

    // 3) Existence gate + fallback
    if (exists(candidate)) return candidate + search + hash;
    return fallback(path, targetLang) + search + hash;
  }

  function buildNavLinks(lang) {
    const prefix = lang === 'ru' ? '/ru' : '';
    return {
      home: lang === 'ru' ? '/ru/' : '/',
      services: `${prefix}/#services`,
      process: `${prefix}/#process`,
      faq: `${prefix}/#faq`,
      contact: `${prefix}/#contact`, // must remain an anchor to the main page
      contactPage: `${prefix}/contact/`
    };
  }

  function renderHeader() {
    const path = normalizePath(window.location.pathname);
    const lang = isRu(path) ? 'ru' : 'en';
    const nav = buildNavLinks(lang);

    const enUrl = buildLangUrl('en');
    const ruUrl = buildLangUrl('ru');

    const header = document.createElement('header');
    header.className = 'site-header';
    header.innerHTML = `
      <div class="container header-inner">
        <a class="logo" href="${nav.home}" aria-label="Financial Stream">
          <img src="/assets/logo-horizontal.png" alt="Financial Stream" />
        </a>

        <nav class="main-nav" aria-label="Main navigation">
          <a href="${nav.home}">${lang === 'ru' ? 'Главная' : 'Home'}</a>
          <a href="${nav.services}">${lang === 'ru' ? 'Услуги' : 'Services'}</a>
          <a href="${nav.process}">${lang === 'ru' ? 'Процесс' : 'Process'}</a>
          <a href="${nav.faq}">${lang === 'ru' ? 'Вопросы' : 'FAQ'}</a>
</nav>

        <div class="header-right">
          <div class="lang-switch" role="group" aria-label="Language switch">
            <a class="${lang === 'en' ? 'active' : ''}" href="${enUrl}">EN</a>
            <a class="${lang === 'ru' ? 'active' : ''}" href="${ruUrl}">RU</a>
          </div>
          <a class="cta-btn" href="${nav.contactPage}">${lang === 'ru' ? 'Связаться с нами' : 'Contact us'}</a>

</div>
      </div>
    `;
    return header;
  }

  function mountHeader() {
    if (document.querySelector('header.site-header')) return;
    const placeholder = document.querySelector('[data-shared-header]');
    const header = renderHeader();
    if (placeholder) placeholder.replaceWith(header);
    else document.body.insertBefore(header, document.body.firstChild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountHeader);
  } else {
    mountHeader();
  }
})();
