(function () {
  function isRu() {
    return window.location.pathname.startsWith('/ru/');
  }

  var path = window.location.pathname || '/';
  var ru = isRu();

  if (!/\/(ru\/)?blog\/.+\.html$/.test(path) || /\/blog\/index\.html$/.test(path) || /\/ru\/blog\/index\.html$/.test(path)) {
    return;
  }

  var t = ru
    ? {
        keyTitle: '\u041a\u043e\u0440\u043e\u0442\u043a\u043e \u043f\u043e \u0441\u0443\u0442\u0438',
        tocTitle: '\u0412 \u044d\u0442\u043e\u0439 \u0441\u0442\u0430\u0442\u044c\u0435',
        ctaTitle: '\u041d\u0443\u0436\u043d\u0430 \u043f\u043e\u043c\u043e\u0449\u044c \u043f\u043e \u044d\u0442\u043e\u0439 \u0442\u0435\u043c\u0435?',
        ctaBody: '\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 \u2014 \u043c\u044b \u0443\u0442\u043e\u0447\u043d\u0438\u043c \u0434\u0435\u0442\u0430\u043b\u0438 \u0438 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u043c \u043f\u043e\u043d\u044f\u0442\u043d\u044b\u0439 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0448\u0430\u0433.',
        ctaCall: '\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044e (15 \u043c\u0438\u043d)',
        ctaForm: '\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 (\u0444\u043e\u0440\u043c\u0430)',
        relatedTitle: '\u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438',
        faqTitle: '\u0427\u0430\u0441\u0442\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u043f\u043e \u0442\u0435\u043c\u0435',
        backTo: '\u2190 \u041d\u0430\u0437\u0430\u0434 \u043a \u043d\u043e\u0432\u043e\u0441\u0442\u044f\u043c',
        allUpdates: '\u0412\u0441\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438',
      }
    : {
        keyTitle: 'Key takeaways',
        tocTitle: 'In this article',
        ctaTitle: 'Need help with this topic?',
        ctaBody: 'Send a request and we will confirm details, scope, and the best next step for your case.',
        ctaCall: 'Book a free 15-min consult',
        ctaForm: 'Send request (form)',
        relatedTitle: 'Related articles',
        faqTitle: 'Frequently asked questions',
        backTo: '\u2190 Back to Updates',
        allUpdates: 'All updates',
      };

  var related = {
    '/blog/us-bookkeeping-small-business.html': [
      { href: '/blog/us-tax-return-preparation.html', text: 'U.S. tax return preparation: what to gather' },
      { href: '/services/quickbooks-bookkeeping.html', text: 'QuickBooks bookkeeping service' },
    ],
    '/blog/us-tax-return-preparation.html': [
      { href: '/blog/us-bookkeeping-small-business.html', text: 'U.S. small business bookkeeping guide' },
      { href: '/services/tax-returns.html', text: 'Tax returns service' },
    ],
    '/blog/quickbooks-online-bookkeeping-monthly-close.html': [
      { href: '/blog/us-bookkeeping-small-business.html', text: 'U.S. small business bookkeeping guide' },
      { href: '/services/quickbooks-bookkeeping.html', text: 'QuickBooks bookkeeping service' },
    ],
    '/blog/us-tax-return-prep-remote-checklist.html': [
      { href: '/blog/us-tax-return-preparation.html', text: 'U.S. tax return preparation: what to gather' },
      { href: '/services/tax-returns.html', text: 'Tax returns service' },
    ],
    '/blog/seattle-quickbooks-bookkeeping.html': [
      { href: '/blog/seattle-tax-return-guide.html', text: 'Tax return in Seattle (2026)' },
      { href: '/services/quickbooks-bookkeeping.html', text: 'QuickBooks bookkeeping service' },
    ],
    '/blog/seattle-tax-return-guide.html': [
      { href: '/blog/seattle-quickbooks-bookkeeping.html', text: 'Seattle + QuickBooks checklist (2026)' },
      { href: '/services/tax-returns.html', text: 'Tax returns service' },
    ],
    '/blog/seattle-area-accountant-bookkeeper.html': [
      { href: '/blog/washington-bookkeeping-quickbooks.html', text: 'Washington + QuickBooks checklist (2026)' },
      { href: '/services/quickbooks-bookkeeping.html', text: 'Monthly bookkeeping' },
    ],
    '/blog/washington-bookkeeping-quickbooks.html': [
      { href: '/blog/seattle-area-accountant-bookkeeper.html', text: 'Seattle area: what to prepare (2026)' },
      { href: '/services/quickbooks-bookkeeping.html', text: 'QuickBooks bookkeeping' },
    ],
    '/blog/sales-tax-2026.html': [
      { href: '/blog/payroll-2026.html', text: 'Payroll 2026: reporting habits' },
      { href: '/services/sales-tax-dor-reporting.html', text: 'Sales tax reporting support' },
    ],
    '/blog/payroll-2026.html': [
      { href: '/blog/sales-tax-2026.html', text: 'Sales tax in 2026: what matters' },
      { href: '/services/payroll-li-quarterly.html', text: 'Payroll & quarterly reporting' },
    ],
    '/blog/quickbooks-healthy-books.html': [
      { href: '/blog/washington-bookkeeping-quickbooks.html', text: 'Washington + QuickBooks checklist (2026)' },
      { href: '/services/quickbooks-bookkeeping.html', text: 'QuickBooks bookkeeping' },
    ],
    '/blog/irs-2026-inflation-adjustments.html': [
      { href: '/blog/seattle-tax-return-guide.html', text: 'Tax return guide (Seattle)' },
      { href: '/services/tax-returns.html', text: 'Tax returns (business & personal)' },
    ],

    '/ru/blog/buhgalteriya-ssha-malogo-biznesa.html': [
      { href: '/ru/blog/podgotovka-nalogovoy-deklaracii-ssha.html', text: '\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0439 \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u0438 \u0432 \u0421\u0428\u0410' },
      { href: '/ru/services/quickbooks-bookkeeping.html', text: '\u0411\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0438\u044f \u0432 QuickBooks' },
    ],
    '/ru/blog/podgotovka-nalogovoy-deklaracii-ssha.html': [
      { href: '/ru/blog/buhgalteriya-ssha-malogo-biznesa.html', text: '\u0411\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0438\u044f \u043c\u0430\u043b\u043e\u0433\u043e \u0431\u0438\u0437\u043d\u0435\u0441\u0430 \u0432 \u0421\u0428\u0410' },
      { href: '/ru/services/tax-returns.html', text: '\u041d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0435 \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u0438' },
    ],
    '/ru/blog/quickbooks-uchet-ssha-ezhemesyachnyy-cheklist.html': [
      { href: '/ru/blog/buhgalteriya-ssha-malogo-biznesa.html', text: '\u0411\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0438\u044f \u043c\u0430\u043b\u043e\u0433\u043e \u0431\u0438\u0437\u043d\u0435\u0441\u0430 \u0432 \u0421\u0428\u0410' },
      { href: '/ru/services/quickbooks-bookkeeping.html', text: '\u0411\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0438\u044f \u0432 QuickBooks' },
    ],
    '/ru/blog/nalogovaya-deklaraciya-usa-udalenno-cheklist.html': [
      { href: '/ru/blog/podgotovka-nalogovoy-deklaracii-ssha.html', text: '\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0439 \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u0438 \u0432 \u0421\u0428\u0410' },
      { href: '/ru/services/tax-returns.html', text: '\u041d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0435 \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u0438' },
    ],
    '/ru/blog/buhgalter-seattle-quickbooks.html': [
      { href: '/ru/blog/nalogovaya-deklaraciya-seattle.html', text: '\u041d\u0430\u043b\u043e\u0433\u043e\u0432\u0430\u044f \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u044f Seattle (2026)' },
      { href: '/ru/services/quickbooks-bookkeeping.html', text: '\u0411\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0438\u044f \u0432 QuickBooks' },
    ],
    '/ru/blog/nalogovaya-deklaraciya-seattle.html': [
      { href: '/ru/blog/buhgalter-seattle-quickbooks.html', text: '\u0411\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440 Seattle \u0438 QuickBooks (2026)' },
      { href: '/ru/services/tax-returns.html', text: '\u041d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0435 \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u0438' },
    ],
    '/ru/blog/seattle-area-accountant-bookkeeper.html': [
      { href: '/ru/blog/washington-bookkeeping-quickbooks.html', text: '\u0412\u0430\u0448\u0438\u043d\u0433\u0442\u043e\u043d \u0438 QuickBooks: \u0447\u0435\u043a-\u043b\u0438\u0441\u0442 (2026)' },
      { href: '/ru/services/quickbooks-bookkeeping.html', text: '\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u044b\u0439 \u0443\u0447\u0435\u0442 \u0432 QuickBooks' },
    ],
    '/ru/blog/washington-bookkeeping-quickbooks.html': [
      { href: '/ru/blog/seattle-area-accountant-bookkeeper.html', text: '\u0411\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440 \u0432 Seattle area: \u0447\u0442\u043e \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c (2026)' },
      { href: '/ru/services/quickbooks-bookkeeping.html', text: '\u0411\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0438\u044f \u0432 QuickBooks' },
    ],
    '/ru/blog/sales-tax-2026.html': [
      { href: '/ru/blog/payroll-2026.html', text: 'Payroll 2026 (\u0437\u0430\u0440\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u043e\u0442\u0447\u0435\u0442\u043d\u043e\u0441\u0442\u044c): \u043f\u0440\u0438\u0432\u044b\u0447\u043a\u0438' },
      { href: '/ru/services/sales-tax-dor-reporting.html', text: '\u041d\u0430\u043b\u043e\u0433 \u0441 \u043f\u0440\u043e\u0434\u0430\u0436 (Sales Tax) / DOR' },
    ],
    '/ru/blog/payroll-2026.html': [
      { href: '/ru/blog/sales-tax-2026.html', text: 'Sales Tax 2026 (\u043d\u0430\u043b\u043e\u0433 \u0441 \u043f\u0440\u043e\u0434\u0430\u0436): \u0447\u0442\u043e \u0432\u0430\u0436\u043d\u043e' },
      { href: '/ru/services/payroll-li-quarterly.html', text: 'Payroll (\u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430) \u0438 \u043e\u0442\u0447\u0435\u0442\u043d\u043e\u0441\u0442\u044c (L&I)' },
    ],
    '/ru/blog/quickbooks-healthy-books.html': [
      { href: '/ru/blog/washington-bookkeeping-quickbooks.html', text: '\u0412\u0430\u0448\u0438\u043d\u0433\u0442\u043e\u043d \u0438 QuickBooks: \u0447\u0435\u043a-\u043b\u0438\u0441\u0442 (2026)' },
      { href: '/ru/services/quickbooks-bookkeeping.html', text: '\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u044b\u0439 \u0443\u0447\u0435\u0442 \u0432 QuickBooks' },
    ],
    '/ru/blog/irs-2026-inflation-adjustments.html': [
      { href: '/ru/blog/nalogovaya-deklaraciya-seattle.html', text: '\u041d\u0430\u043b\u043e\u0433\u043e\u0432\u0430\u044f \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u044f Seattle (2026)' },
      { href: '/ru/services/tax-returns.html', text: '\u041d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0435 \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u0438' },
    ],
  };

  function getArticleTheme() {
    if (/tax|nalog|irs|declar/i.test(path)) return 'tax';
    if (/payroll/i.test(path)) return 'payroll';
    if (/sales-tax|dor/i.test(path)) return 'sales';
    if (/quickbooks|bookkeeping|buhgalter/i.test(path)) return 'books';
    return 'general';
  }

  function getKeyPoints() {
    var theme = getArticleTheme();
    if (ru) {
      if (theme === 'tax') return ['\u0421\u043e\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043e \u0441\u0442\u0430\u0440\u0442\u0430 \u043f\u043e\u0434\u0430\u0447\u0438.', '\u0423\u0442\u043e\u0447\u043d\u044f\u0439\u0442\u0435 \u0448\u0442\u0430\u0442\u044b, \u0441\u0442\u0430\u0442\u0443\u0441 \u0438 \u0441\u0440\u043e\u043a\u0438 \u0437\u0430\u0440\u0430\u043d\u0435\u0435.', '\u0427\u0438\u0441\u0442\u0430\u044f \u0431\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0438\u044f \u0443\u0441\u043a\u043e\u0440\u044f\u0435\u0442 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0443 \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u0438.'];
      if (theme === 'books') return ['\u0417\u0430\u043a\u0440\u044b\u0432\u0430\u0439\u0442\u0435 \u043c\u0435\u0441\u044f\u0446 \u043f\u043e \u0447\u0435\u043a\u043b\u0438\u0441\u0442\u0443.', '\u0421\u0432\u0435\u0440\u044f\u0439\u0442\u0435 \u0431\u0430\u043d\u043a, AR/AP \u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0431\u0435\u0437 \u0437\u0430\u0434\u0435\u0440\u0436\u0435\u043a.', '\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u043f\u043e \u0443\u0447\u0435\u0442\u0443 \u043b\u0443\u0447\u0448\u0435 \u0440\u0435\u0448\u0430\u0442\u044c \u0435\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u043e.'];
      if (theme === 'payroll') return ['\u0414\u0435\u0440\u0436\u0438\u0442\u0435 \u0435\u0434\u0438\u043d\u044b\u0439 \u0433\u0440\u0430\u0444\u0438\u043a payroll-\u043e\u0442\u0447\u0435\u0442\u043d\u043e\u0441\u0442\u0438.', '\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0439\u0442\u0435 L&I \u0438 \u043a\u0432\u0430\u0440\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u0438\u043d\u0433\u0438 \u0431\u0435\u0437 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043e\u0432.', '\u0421\u0432\u044f\u0437\u044b\u0432\u0430\u0439\u0442\u0435 payroll \u0441 \u043c\u0435\u0441\u044f\u0447\u043d\u043e\u0439 \u0431\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0438\u0435\u0439.'];
      if (theme === 'sales') return ['\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0439\u0442\u0435 nexus \u0438 \u0441\u0442\u0430\u0432\u043a\u0438 \u043d\u0430\u043b\u043e\u0433\u0430 \u0441 \u043f\u0440\u043e\u0434\u0430\u0436.', '\u0414\u0435\u043b\u0430\u0439\u0442\u0435 \u0441\u0432\u0435\u0440\u043a\u0443 \u043f\u0440\u043e\u0434\u0430\u0436 \u0438 \u043e\u0442\u0447\u0435\u0442\u043e\u0432 DOR.', '\u041d\u0435 \u043e\u0442\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0439\u0442\u0435 \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0448\u0438\u0431\u043e\u043a \u0434\u043e \u0434\u0435\u0434\u043b\u0430\u0439\u043d\u0430.'];
      return ['\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0435 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 \u0438 \u0441\u0440\u043e\u043a.', '\u0421\u043e\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u0437\u0430\u0440\u0430\u043d\u0435\u0435.', '\u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u0447\u0435\u0442\u043a\u0438\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0448\u0430\u0433\u0438.'];
    }

    if (theme === 'tax') return ['Collect all tax documents before review begins.', 'Confirm state scope and deadlines early.', 'Clean bookkeeping reduces tax prep delays.'];
    if (theme === 'books') return ['Close each month with a repeatable checklist.', 'Reconcile bank, AR/AP, and categories consistently.', 'Resolve bookkeeping issues monthly, not at year-end.'];
    if (theme === 'payroll') return ['Keep one reporting calendar for payroll filings.', 'Track L&I and quarterly filings without gaps.', 'Align payroll data with monthly bookkeeping.'];
    if (theme === 'sales') return ['Confirm nexus and sales tax rates by state.', 'Reconcile sales reports with DOR filing data.', 'Fix classification issues before filing deadlines.'];
    return ['Define the scope and target outcome first.', 'Prepare key documents before onboarding.', 'Use clear next steps with expected timing.'];
  }

  function getFaqItems() {
    var theme = getArticleTheme();
    if (ru) {
      if (theme === 'tax') {
        return [
          { q: '\u0427\u0442\u043e \u043f\u0440\u0438\u043d\u0435\u0441\u0442\u0438 \u043d\u0430 \u0441\u0442\u0430\u0440\u0442 \u043f\u043e \u043d\u0430\u043b\u043e\u0433\u0430\u043c?', a: '\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u044c\u0442\u0435 \u0434\u043e\u0445\u043e\u0434\u043d\u044b\u0435 \u0444\u043e\u0440\u043c\u044b, \u043f\u0440\u043e\u0448\u043b\u0443\u044e \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u044e, \u0432\u044b\u043f\u0438\u0441\u043a\u0438 \u0438 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f (notices), \u0435\u0441\u043b\u0438 \u043e\u043d\u0438 \u0435\u0441\u0442\u044c.' },
          { q: '\u041c\u043e\u0436\u043d\u043e \u043b\u0438 \u043f\u043e\u0434\u0430\u0442\u044c \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e?', a: '\u0414\u0430, \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u043e\u0431\u044b\u0447\u043d\u043e \u0432\u0435\u0434\u0435\u0442\u0441\u044f \u043e\u043d\u043b\u0430\u0439\u043d \u043f\u043e \u0432\u0441\u0435\u043c \u0448\u0442\u0430\u0442\u0430\u043c \u0421\u0428\u0410.' },
          { q: '\u041a\u0430\u043a \u0431\u044b\u0441\u0442\u0440\u043e \u043f\u043e\u043d\u044f\u0442\u044c \u043e\u0431\u044a\u0435\u043c \u0440\u0430\u0431\u043e\u0442?', a: '\u041f\u043e\u0441\u043b\u0435 \u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043c\u044b \u0434\u0430\u0435\u043c \u0447\u0435\u0442\u043a\u0438\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0448\u0430\u0433\u043e\u0432.' },
        ];
      }
      return [
        { q: '\u041c\u043e\u0436\u043d\u043e \u043b\u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e?', a: '\u0414\u0430, \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u0437\u0430\u0434\u0430\u0447 \u0432\u0435\u0434\u0435\u043c \u043e\u043d\u043b\u0430\u0439\u043d.' },
        { q: '\u0427\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u0434 \u0441\u0442\u0430\u0440\u0442\u043e\u043c?', a: '\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u0447\u0435\u043a\u043b\u0438\u0441\u0442 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043f\u043e\u0434 \u0432\u0430\u0448\u0443 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044e.' },
        { q: '\u041a\u0430\u043a \u0431\u044b\u0441\u0442\u0440\u043e \u0432\u044b \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442\u0435?', a: '\u041e\u0442\u0432\u0435\u0447\u0430\u0435\u043c \u0432 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0440\u0430\u0431\u043e\u0447\u0435\u0435 \u0432\u0440\u0435\u043c\u044f.' },
      ];
    }

    if (theme === 'tax') {
      return [
        { q: 'What documents should I prepare first?', a: 'Prepare income forms, prior return, business summaries if relevant, and any IRS/state notices.' },
        { q: 'Can this be handled remotely?', a: 'Yes. Most tax preparation workflow is handled remotely across U.S. states.' },
        { q: 'How do we confirm scope quickly?', a: 'Start with a short request and we will send a targeted checklist and next steps.' },
      ];
    }

    return [
      { q: 'Can this be handled remotely across the U.S.?', a: 'Yes. Most bookkeeping and tax support is handled remotely with secure document exchange.' },
      { q: 'What should I prepare before onboarding?', a: 'We send a short checklist based on your case so onboarding stays fast and structured.' },
      { q: 'How quickly do you respond?', a: 'We respond as quickly as possible during business hours and confirm the next step.' },
    ];
  }

  function toId(text) {
    return String(text || '')
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\u0400-\u04FF]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function ensureBacklink() {
    var meta = document.querySelector('.article .meta .backlink');
    if (meta) {
      meta.textContent = t.backTo;
      return;
    }
    var article = document.querySelector('.article');
    if (!article) return;
    var p = document.createElement('p');
    p.className = 'meta';
    var a = document.createElement('a');
    a.className = 'backlink';
    a.href = ru ? '/ru/blog/' : '/blog/';
    a.textContent = t.backTo;
    p.appendChild(a);
    var h1 = article.querySelector('h1');
    if (h1 && h1.nextSibling) article.insertBefore(p, h1.nextSibling.nextSibling);
    else article.appendChild(p);
  }

  function injectKeyPoints() {
    var article = document.querySelector('.article');
    if (!article || article.querySelector('.article-keypoints')) return;
    var points = getKeyPoints();
    if (!points || !points.length) return;

    var block = document.createElement('section');
    block.className = 'article-keypoints';
    block.innerHTML = '<h2 class="article-keypoints__title">' + t.keyTitle + '</h2><ul class="article-keypoints__list">' + points.map(function (x) {
      return '<li>' + x + '</li>';
    }).join('') + '</ul>';

    var firstParagraph = article.querySelector('p:not(.meta)');
    var firstH2 = article.querySelector('h2');
    if (firstH2) article.insertBefore(block, firstH2);
    else if (firstParagraph && firstParagraph.nextSibling) article.insertBefore(block, firstParagraph.nextSibling);
    else article.appendChild(block);
  }

  function injectToc() {
    var article = document.querySelector('.article');
    if (!article || article.querySelector('.article-toc')) return;

    var headings = Array.prototype.slice.call(article.querySelectorAll('h2'));
    if (!headings.length) return;

    var list = headings.map(function (h, idx) {
      if (!h.id) h.id = toId(h.textContent) || ('section-' + (idx + 1));
      return '<li><a href="#' + h.id + '">' + h.textContent + '</a></li>';
    }).join('');

    var block = document.createElement('div');
    block.className = 'article-toc';
    block.innerHTML = '<h2 class="article-toc__title">' + t.tocTitle + '</h2><ul class="article-toc__list">' + list + '</ul>';

    var anchor = article.querySelector('.article-keypoints') || headings[0];
    if (anchor && anchor.nextSibling) article.insertBefore(block, anchor.nextSibling);
    else article.insertBefore(block, headings[0]);
  }

  function injectCTA() {
    var article = document.querySelector('.article');
    if (!article || article.querySelector('.article-cta')) return;

    var slot = article.querySelector('[data-article-cta]');
    var box = document.createElement('div');
    box.className = 'article-cta';
    box.innerHTML =
      '<div class="article-cta__inner">' +
      '<h2 class="article-cta__title">' + t.ctaTitle + '</h2>' +
      '<p class="article-cta__text">' + t.ctaBody + '</p>' +
      '<div class="article-cta__actions">' +
      '<a class="btn btn-primary" href="https://calendar.app.google/xWh5kEQBoJvy9ien8" target="_blank" rel="noopener">' + t.ctaCall + '</a>' +
      '<a class="btn btn-ghost" href="https://docs.google.com/forms/d/e/1FAIpQLSeGVohbKaOOEevQnt3kPCTz7LuKFYxtgVx2o3trXWTPL7pIxw/viewform?usp=publish-editor" target="_blank" rel="noopener">' + t.ctaForm + '</a>' +
      '</div></div>';

    if (slot) slot.replaceWith(box);
    else article.appendChild(box);
  }

  function injectRelated() {
    var article = document.querySelector('.article');
    if (!article || article.querySelector('.related-section')) return;

    var items = related[path] || (ru
      ? [
          { href: '/ru/blog/', text: t.allUpdates },
          { href: '/ru/services/quickbooks-bookkeeping.html', text: '\u0411\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0438\u044f \u0432 QuickBooks' },
        ]
      : [
          { href: '/blog/', text: t.allUpdates },
          { href: '/services/quickbooks-bookkeeping.html', text: 'QuickBooks bookkeeping' },
        ]);

    var block = document.createElement('div');
    block.className = 'related-section';
    block.innerHTML = '<h2 class="related-section__title">' + t.relatedTitle + '</h2><ul class="related-section__list">' + items.map(function (it) {
      return '<li><a href="' + it.href + '">' + it.text + '</a></li>';
    }).join('') + '</ul>';

    var anchor = article.querySelector('footer.footer, script[src*="/script.js"], script[src*="shared-header.js"], script[src*="shared-article-components.js"]');
    if (anchor) article.insertBefore(block, anchor);
    else article.appendChild(block);
  }

  function injectFaq() {
    var article = document.querySelector('.article');
    if (!article || article.querySelector('.article-faq')) return;

    var items = getFaqItems();
    if (!items || !items.length) return;

    var block = document.createElement('section');
    block.className = 'article-faq';
    block.innerHTML = '<h2 class="article-faq__title">' + t.faqTitle + '</h2><div class="article-faq__list">' + items.map(function (it) {
      return '<details class="article-faq__item"><summary class="article-faq__q">' + it.q + '</summary><p class="article-faq__a">' + it.a + '</p></details>';
    }).join('') + '</div>';

    var anchor = article.querySelector('.article-cta') || article.querySelector('[data-article-cta]');
    if (anchor) article.insertBefore(block, anchor);
    else article.appendChild(block);

    if (!document.querySelector('script[data-fs-article-faq="1"]')) {
      var schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map(function (it) {
          return { '@type': 'Question', name: it.q, acceptedAnswer: { '@type': 'Answer', text: it.a } };
        }),
      };
      var s = document.createElement('script');
      s.type = 'application/ld+json';
      s.setAttribute('data-fs-article-faq', '1');
      s.textContent = JSON.stringify(schema);
      document.head.appendChild(s);
    }
  }

  ensureBacklink();
  injectKeyPoints();
  injectToc();
  injectFaq();
  injectCTA();
  injectRelated();
})();
