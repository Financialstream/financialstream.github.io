// Shared header injection + navigation + language switch
// Dependency-free and safe for GitHub Pages.
(function () {
  function normalizePath(pathname) {
    try {
      const u = new URL(pathname, window.location.origin);
      pathname = u.pathname;
    } catch (e) {}
    if (!pathname.startsWith('/')) pathname = '/' + pathname;
    pathname = pathname.replace(/\/{2,}/g, '/');
    return pathname;
  }

  function isRuPath(pathname) {
    return normalizePath(pathname).startsWith('/ru/');
  }

  const EN_TO_RU = {
    '/getting-started.html': '/ru/kak-nachat.html',
    '/blog/seattle-quickbooks-bookkeeping.html': '/ru/blog/buhgalter-seattle-quickbooks.html',
    '/blog/seattle-tax-return-guide.html': '/ru/blog/nalogovaya-deklaraciya-seattle.html',
    '/blog/washington-bookkeeping-quickbooks.html': '/ru/blog/washington-bookkeeping-quickbooks.html',
    '/blog/quickbooks-healthy-books.html': '/ru/blog/quickbooks-healthy-books.html',
    '/blog/seattle-area-accountant-bookkeeper.html': '/ru/blog/seattle-area-accountant-bookkeeper.html',
    '/blog/sales-tax-2026.html': '/ru/blog/sales-tax-2026.html',
    '/blog/payroll-2026.html': '/ru/blog/payroll-2026.html',
    '/blog/irs-2026-inflation-adjustments.html': '/ru/blog/irs-2026-inflation-adjustments.html'
  };

  const RU_TO_EN = Object.keys(EN_TO_RU).reduce((acc, en) => {
    acc[EN_TO_RU[en]] = en;
    return acc;
  }, {});

  const KNOWN_PATHS = new Set([
    '/', '/ru/', '/blog/', '/ru/blog/', '/contact/', '/ru/contact/', '/services/', '/ru/services/',
    '/privacy-policy.html', '/ru/privacy-policy.html', '/terms-and-conditions.html', '/ru/terms-and-conditions.html',
    '/sms-consent.html', '/ru/sms-consent.html', '/getting-started.html', '/ru/kak-nachat.html',
    '/services/company-formation.html', '/services/financial-consulting.html', '/services/payroll-li-quarterly.html',
    '/services/quickbooks-bookkeeping.html', '/services/sales-tax-dor-reporting.html', '/services/tax-returns.html',
    '/ru/services/company-formation.html', '/ru/services/financial-consulting.html', '/ru/services/payroll-li-quarterly.html',
    '/ru/services/quickbooks-bookkeeping.html', '/ru/services/sales-tax-dor-reporting.html', '/ru/services/tax-returns.html',
    '/blog/seattle-quickbooks-bookkeeping.html', '/blog/seattle-tax-return-guide.html', '/blog/washington-bookkeeping-quickbooks.html',
    '/blog/quickbooks-healthy-books.html', '/blog/seattle-area-accountant-bookkeeper.html', '/blog/sales-tax-2026.html',
    '/blog/payroll-2026.html', '/blog/irs-2026-inflation-adjustments.html', '/ru/blog/buhgalter-seattle-quickbooks.html',
    '/ru/blog/nalogovaya-deklaraciya-seattle.html', '/ru/blog/washington-bookkeeping-quickbooks.html',
    '/ru/blog/quickbooks-healthy-books.html', '/ru/blog/seattle-area-accountant-bookkeeper.html',
    '/ru/blog/sales-tax-2026.html', '/ru/blog/payroll-2026.html', '/ru/blog/irs-2026-inflation-adjustments.html'
  ]);

  function fallback(pathname, targetLang) {
    const ru = targetLang === 'ru';
    if (/\/(ru\/)?blog\/.+\.html$/.test(pathname)) {
      return ru ? '/ru/blog/' : '/blog/';
    }
    if (pathname.includes('/services/') || pathname === '/services/' || pathname === '/ru/services/') {
      return ru ? '/ru/#services' : '/#services';
    }
    return ru ? '/ru/' : '/';
  }

  function toRu(pathname) {
    pathname = normalizePath(pathname);
    if (pathname === '/ru/' || pathname.startsWith('/ru/')) return pathname;
    if (EN_TO_RU[pathname]) return EN_TO_RU[pathname];
    const candidate = pathname === '/' ? '/ru/' : '/ru' + pathname;
    return KNOWN_PATHS.has(candidate) ? candidate : fallback(pathname, 'ru');
  }

  function toEn(pathname) {
    pathname = normalizePath(pathname);
    if (pathname === '/' || !pathname.startsWith('/ru/')) return pathname;
    if (RU_TO_EN[pathname]) return RU_TO_EN[pathname];
    const candidate = pathname === '/ru/' ? '/' : pathname.replace(/^\/ru/, '');
    return KNOWN_PATHS.has(candidate) ? candidate : fallback(pathname, 'en');
  }

  function buildNavLinks(lang) {
    const prefix = lang === 'ru' ? '/ru' : '';
    return {
      home: lang === 'ru' ? '/ru/' : '/',
      services: `${prefix}/#services`,
      process: `${prefix}/#process`,
      faq: `${prefix}/#faq`,
      contactPage: `${prefix}/contact/`
    };
  }

  function renderHeader() {
    const pathname = normalizePath(window.location.pathname);
    const lang = isRuPath(pathname) ? 'ru' : 'en';
    const nav = buildNavLinks(lang);

    const enUrl = toEn(pathname);
    const ruUrl = toRu(pathname);

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
    const placeholder = document.querySelector('[data-shared-header]') || document.body;
    if (document.querySelector('header.site-header')) return;
    const header = renderHeader();
    if (placeholder === document.body) {
      document.body.insertBefore(header, document.body.firstChild);
    } else {
      placeholder.replaceWith(header);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountHeader);
  } else {
    mountHeader();
  }
})();
