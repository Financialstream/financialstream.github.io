(function () {
  function isRu() {
    return window.location.pathname.startsWith('/ru/');
  }

  var path = window.location.pathname || '/';
  var ru = isRu();

  if (!/\/(ru\/)?services\/.+\.html$/.test(path) || /\/services\/index\.html$/.test(path)) {
    return;
  }

  var t = ru
    ? {
        relatedTitle: '\u0421\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438',
        faqTitle: '\u0427\u0430\u0441\u0442\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b',
        q1: '\u041c\u043e\u0436\u043d\u043e \u043b\u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e \u043f\u043e \u0421\u0428\u0410?',
        a1: '\u0414\u0430, \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u0437\u0430\u0434\u0430\u0447 \u043c\u044b \u0432\u0435\u0434\u0435\u043c \u043e\u043d\u043b\u0430\u0439\u043d \u043f\u043e \u0432\u0441\u0435\u043c \u0448\u0442\u0430\u0442\u0430\u043c.',
        q2: '\u0427\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u0434 \u0441\u0442\u0430\u0440\u0442\u043e\u043c?',
        a2: '\u041f\u043e\u0441\u043b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043c\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u0447\u0435\u043a\u043b\u0438\u0441\u0442 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043f\u043e\u0434 \u0432\u0430\u0448\u0443 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044e.',
        q3: '\u041a\u0430\u043a \u0431\u044b\u0441\u0442\u0440\u043e \u0432\u044b \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442\u0435?',
        a3: '\u041e\u0442\u0432\u0435\u0447\u0430\u0435\u043c \u0432 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0440\u0430\u0431\u043e\u0447\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0438 \u0441\u0440\u0430\u0437\u0443 \u0434\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0448\u0430\u0433.',
      }
    : {
        relatedTitle: 'Related articles',
        faqTitle: 'Frequently asked questions',
        q1: 'Can this service be delivered remotely across the U.S.?',
        a1: 'Yes. Most work is handled remotely across states with secure document exchange and clear next steps.',
        q2: 'What should I prepare before we start?',
        a2: 'After your request, we send a short checklist tailored to your case so onboarding is fast and organized.',
        q3: 'How quickly do you respond?',
        a3: 'We reply as quickly as possible during business hours and confirm the next step immediately.',
      };

  var related = {
    '/services/company-formation.html': [
      { href: '/blog/us-bookkeeping-small-business.html', text: 'U.S. small business bookkeeping guide' },
      { href: '/blog/us-tax-return-preparation.html', text: 'U.S. tax return preparation: what to gather' },
    ],
    '/services/quickbooks-bookkeeping.html': [
      { href: '/blog/quickbooks-online-bookkeeping-monthly-close.html', text: 'QuickBooks monthly close checklist' },
      { href: '/blog/us-bookkeeping-small-business.html', text: 'Bookkeeping onboarding for U.S. small business' },
    ],
    '/services/sales-tax-dor-reporting.html': [
      { href: '/blog/sales-tax-2026.html', text: 'Sales tax 2026: practical filing habits' },
      { href: '/blog/payroll-2026.html', text: 'Payroll reporting: what to keep consistent' },
    ],
    '/services/payroll-li-quarterly.html': [
      { href: '/blog/payroll-2026.html', text: 'Payroll 2026: clean reporting habits' },
      { href: '/blog/sales-tax-2026.html', text: 'Sales tax in 2026: what matters' },
    ],
    '/services/tax-returns.html': [
      { href: '/blog/us-tax-return-preparation.html', text: 'Tax return prep checklist' },
      { href: '/blog/us-tax-return-prep-remote-checklist.html', text: 'Remote tax return prep checklist' },
    ],
    '/services/financial-consulting.html': [
      { href: '/blog/us-bookkeeping-small-business.html', text: 'How clean books improve decisions' },
      { href: '/blog/quickbooks-healthy-books.html', text: 'Healthy books in QuickBooks' },
    ],
    '/ru/services/company-formation.html': [
      { href: '/ru/blog/buhgalteriya-ssha-malogo-biznesa.html', text: '\u0411\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0438\u044f \u043c\u0430\u043b\u043e\u0433\u043e \u0431\u0438\u0437\u043d\u0435\u0441\u0430 \u0432 \u0421\u0428\u0410' },
      { href: '/ru/blog/podgotovka-nalogovoy-deklaracii-ssha.html', text: '\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0439 \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u0438 \u0432 \u0421\u0428\u0410' },
    ],
    '/ru/services/quickbooks-bookkeeping.html': [
      { href: '/ru/blog/quickbooks-uchet-ssha-ezhemesyachnyy-cheklist.html', text: '\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u044b\u0439 \u0447\u0435\u043a\u043b\u0438\u0441\u0442 QuickBooks' },
      { href: '/ru/blog/buhgalteriya-ssha-malogo-biznesa.html', text: '\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0443\u0447\u0435\u0442\u0430 \u0434\u043b\u044f \u043c\u0430\u043b\u043e\u0433\u043e \u0431\u0438\u0437\u043d\u0435\u0441\u0430' },
    ],
    '/ru/services/sales-tax-dor-reporting.html': [
      { href: '/ru/blog/sales-tax-2026.html', text: 'Sales tax 2026: \u043a\u0430\u043a \u0441\u043d\u0438\u0437\u0438\u0442\u044c \u0440\u0438\u0441\u043a\u0438' },
      { href: '/ru/blog/payroll-2026.html', text: 'Payroll 2026: \u043e\u0442\u0447\u0435\u0442\u043d\u043e\u0441\u0442\u044c \u0431\u0435\u0437 \u0441\u0442\u0440\u0435\u0441\u0441\u0430' },
    ],
    '/ru/services/payroll-li-quarterly.html': [
      { href: '/ru/blog/payroll-2026.html', text: 'Payroll 2026: \u043f\u0440\u0438\u0432\u044b\u0447\u043a\u0438 \u043e\u0442\u0447\u0435\u0442\u043d\u043e\u0441\u0442\u0438' },
      { href: '/ru/blog/sales-tax-2026.html', text: 'Sales tax 2026: \u0432\u0430\u0436\u043d\u044b\u0435 \u0448\u0430\u0433\u0438' },
    ],
    '/ru/services/tax-returns.html': [
      { href: '/ru/blog/podgotovka-nalogovoy-deklaracii-ssha.html', text: '\u0427\u0442\u043e \u0441\u043e\u0431\u0440\u0430\u0442\u044c \u0434\u043b\u044f \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0439 \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u0438' },
      { href: '/ru/blog/nalogovaya-deklaraciya-usa-udalenno-cheklist.html', text: '\u0423\u0434\u0430\u043b\u0435\u043d\u043d\u0430\u044f \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u0438: \u0447\u0435\u043a\u043b\u0438\u0441\u0442' },
    ],
    '/ru/services/financial-consulting.html': [
      { href: '/ru/blog/buhgalteriya-ssha-malogo-biznesa.html', text: '\u041a\u0430\u043a \u0447\u0438\u0441\u0442\u0430\u044f \u0431\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0438\u044f \u0443\u043b\u0443\u0447\u0448\u0430\u0435\u0442 \u0440\u0435\u0448\u0435\u043d\u0438\u044f' },
      { href: '/ru/blog/quickbooks-healthy-books.html', text: '\u0417\u0434\u043e\u0440\u043e\u0432\u044b\u0439 \u0443\u0447\u0435\u0442 \u0432 QuickBooks' },
    ],
  };

  function injectRelatedArticles() {
    var root = document.querySelector('.policy__inner');
    if (!root || root.querySelector('.service-related-articles')) return;

    var items = related[path] || [];
    if (!items.length) return;

    var block = document.createElement('section');
    block.className = 'service-related-articles related-section';
    block.innerHTML =
      '<h2 class="related-section__title">' +
      t.relatedTitle +
      '</h2>' +
      '<ul class="related-section__list">' +
      items
        .map(function (it) {
          return '<li><a href="' + it.href + '">' + it.text + '</a></li>';
        })
        .join('') +
      '</ul>';

    var cta = root.querySelector('.policy__cta');
    if (cta) root.insertBefore(block, cta);
    else root.appendChild(block);
  }

  function injectFaq() {
    var root = document.querySelector('.policy__inner');
    if (!root || root.querySelector('.service-faq')) return;

    var faq = document.createElement('section');
    faq.className = 'service-faq faq';
    faq.innerHTML =
      '<h2 class="faq__title">' +
      t.faqTitle +
      '</h2>' +
      '<div class="faq__item"><h3 class="faq__q">' +
      t.q1 +
      '</h3><p class="faq__a">' +
      t.a1 +
      '</p></div>' +
      '<div class="faq__item"><h3 class="faq__q">' +
      t.q2 +
      '</h3><p class="faq__a">' +
      t.a2 +
      '</p></div>' +
      '<div class="faq__item"><h3 class="faq__q">' +
      t.q3 +
      '</h3><p class="faq__a">' +
      t.a3 +
      '</p></div>';

    var cta = root.querySelector('.policy__cta');
    if (cta) root.insertBefore(faq, cta);
    else root.appendChild(faq);

    if (!document.querySelector('script[data-fs-service-faq="1"]')) {
      var schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: t.q1, acceptedAnswer: { '@type': 'Answer', text: t.a1 } },
          { '@type': 'Question', name: t.q2, acceptedAnswer: { '@type': 'Answer', text: t.a2 } },
          { '@type': 'Question', name: t.q3, acceptedAnswer: { '@type': 'Answer', text: t.a3 } },
        ],
      };
      var s = document.createElement('script');
      s.type = 'application/ld+json';
      s.setAttribute('data-fs-service-faq', '1');
      s.textContent = JSON.stringify(schema);
      document.head.appendChild(s);
    }
  }

  injectRelatedArticles();
  injectFaq();
})();