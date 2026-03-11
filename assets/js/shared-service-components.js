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
        faqTitle: '\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B',
        snapshotTitle: '\u041A\u043E\u0440\u043E\u0442\u043A\u043E \u043E\u0431 \u0443\u0441\u043B\u0443\u0433\u0435',
        nextStepTitle: '\u0421 \u0447\u0435\u0433\u043E \u043B\u0443\u0447\u0448\u0435 \u043D\u0430\u0447\u0430\u0442\u044C',
        nextStepButton: '\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F',
        nextStepSecondary: '\u041A\u0430\u043A \u043C\u044B \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u043C \u0440\u0430\u0431\u043E\u0442\u0443',
        q1: '\u041C\u043E\u0436\u043D\u043E \u043B\u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0443\u0434\u0430\u043B\u0435\u043D\u043D\u043E \u043F\u043E \u0421\u0428\u0410?',
        a1: '\u0414\u0430, \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u0437\u0430\u0434\u0430\u0447 \u0432\u0435\u0434\u0435\u043c \u043e\u043d\u043b\u0430\u0439\u043d \u043f\u043e \u0432\u0441\u0435\u043c \u0448\u0442\u0430\u0442\u0430\u043c \u0421\u0428\u0410.',
        q2: '\u0427\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u0434 \u0441\u0442\u0430\u0440\u0442\u043e\u043c?',
        a2: '\u041f\u043e\u0441\u043b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043c\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u0447\u0435\u043a\u043b\u0438\u0441\u0442 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043f\u043e\u0434 \u0432\u0430\u0448\u0443 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044e.',
        q3: '\u041a\u0430\u043a \u0431\u044b\u0441\u0442\u0440\u043e \u0432\u044b \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442\u0435?',
        a3: '\u041e\u0442\u0432\u0435\u0447\u0430\u0435\u043c \u0432 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0440\u0430\u0431\u043e\u0447\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0438 \u0441\u0440\u0430\u0437\u0443 \u0434\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0448\u0430\u0433.',
      }
    : {
        relatedTitle: 'Related articles',
        faqTitle: 'Frequently asked questions',
        snapshotTitle: 'Service snapshot',
        nextStepTitle: 'Best next step',
        nextStepButton: 'Request a free consultation',
        nextStepSecondary: 'How onboarding works',
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
      { href: '/blog/us-tax-return-preparation.html', text: 'U.S. tax return preparation: what to gather' }
    ],
    '/services/quickbooks-bookkeeping.html': [
      { href: '/blog/quickbooks-online-bookkeeping-monthly-close.html', text: 'QuickBooks monthly close checklist' },
      { href: '/blog/us-bookkeeping-small-business.html', text: 'Bookkeeping onboarding for U.S. small business' }
    ],
    '/services/sales-tax-dor-reporting.html': [
      { href: '/blog/sales-tax-2026.html', text: 'Sales tax 2026: practical filing habits' },
      { href: '/blog/payroll-2026.html', text: 'Payroll reporting: what to keep consistent' }
    ],
    '/services/payroll-li-quarterly.html': [
      { href: '/blog/payroll-2026.html', text: 'Payroll 2026: clean reporting habits' },
      { href: '/blog/sales-tax-2026.html', text: 'Sales tax in 2026: what matters' }
    ],
    '/services/tax-returns.html': [
      { href: '/blog/us-tax-return-preparation.html', text: 'Tax return prep checklist' },
      { href: '/blog/us-tax-return-prep-remote-checklist.html', text: 'Remote tax return prep checklist' }
    ],
    '/services/financial-consulting.html': [
      { href: '/blog/us-bookkeeping-small-business.html', text: 'How clean books improve decisions' },
      { href: '/blog/quickbooks-healthy-books.html', text: 'Healthy books in QuickBooks' }
    ],
    '/ru/services/company-formation.html': [
      { href: '/ru/blog/buhgalteriya-ssha-malogo-biznesa.html', text: '\u0411\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0438\u044f \u043c\u0430\u043b\u043e\u0433\u043e \u0431\u0438\u0437\u043d\u0435\u0441\u0430 \u0432 \u0421\u0428\u0410' },
      { href: '/ru/blog/podgotovka-nalogovoy-deklaracii-ssha.html', text: '\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0439 \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u0438 \u0432 \u0421\u0428\u0410' }
    ],
    '/ru/services/quickbooks-bookkeeping.html': [
      { href: '/ru/blog/quickbooks-uchet-ssha-ezhemesyachnyy-cheklist.html', text: '\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u044b\u0439 \u0447\u0435\u043a\u043b\u0438\u0441\u0442 QuickBooks' },
      { href: '/ru/blog/buhgalteriya-ssha-malogo-biznesa.html', text: '\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0443\u0447\u0435\u0442\u0430 \u0434\u043b\u044f \u043c\u0430\u043b\u043e\u0433\u043e \u0431\u0438\u0437\u043d\u0435\u0441\u0430' }
    ],
    '/ru/services/sales-tax-dor-reporting.html': [
      { href: '/ru/blog/sales-tax-2026.html', text: 'Sales Tax 2026: \u043a\u0430\u043a \u0441\u043d\u0438\u0437\u0438\u0442\u044c \u0440\u0438\u0441\u043a\u0438' },
      { href: '/ru/blog/payroll-2026.html', text: 'Payroll 2026: \u0431\u0435\u0437 \u0441\u0442\u0440\u0435\u0441\u0441\u0430' }
    ],
    '/ru/services/payroll-li-quarterly.html': [
      { href: '/ru/blog/payroll-2026.html', text: 'Payroll 2026: \u043f\u0440\u0438\u0432\u044b\u0447\u043a\u0438 \u043e\u0442\u0447\u0435\u0442\u043d\u043e\u0441\u0442\u0438' },
      { href: '/ru/blog/sales-tax-2026.html', text: 'Sales Tax 2026: \u0432\u0430\u0436\u043d\u044b\u0435 \u0448\u0430\u0433\u0438' }
    ],
    '/ru/services/tax-returns.html': [
      { href: '/ru/blog/podgotovka-nalogovoy-deklaracii-ssha.html', text: '\u0427\u0442\u043e \u0441\u043e\u0431\u0440\u0430\u0442\u044c \u0434\u043b\u044f \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0439 \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u0438' },
      { href: '/ru/blog/nalogovaya-deklaraciya-usa-udalenno-cheklist.html', text: '\u0423\u0434\u0430\u043b\u0435\u043d\u043d\u0430\u044f \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u0438: \u0447\u0435\u043a\u043b\u0438\u0441\u0442' }
    ],
    '/ru/services/financial-consulting.html': [
      { href: '/ru/blog/buhgalteriya-ssha-malogo-biznesa.html', text: '\u041a\u0430\u043a \u0447\u0438\u0441\u0442\u0430\u044f \u0431\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0438\u044f \u0443\u043b\u0443\u0447\u0448\u0430\u0435\u0442 \u0440\u0435\u0448\u0435\u043d\u0438\u044f' },
      { href: '/ru/blog/quickbooks-healthy-books.html', text: '\u0417\u0434\u043e\u0440\u043e\u0432\u044b\u0439 \u0443\u0447\u0435\u0442 \u0432 QuickBooks' }
    ]
  };

  var snapshots = {
    '/services/company-formation.html': {
      label: ru ? '\u0417\u0430\u043f\u0443\u0441\u043a \u0431\u0438\u0437\u043d\u0435\u0441\u0430' : 'Business launch',
      items: ru ? [
        '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f, EIN \u0438 \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u0438 \u0431\u0435\u0437 \u043b\u0438\u0448\u043d\u0435\u0439 \u0440\u0443\u0442\u0438\u043d\u044b',
        '\u041f\u043e\u043d\u044f\u0442\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438 \u0448\u0430\u0433\u043e\u0432 \u0434\u043e \u0441\u0442\u0430\u0440\u0442\u0430',
        '\u041f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u043d\u043e\u0432\u044b\u0445 LLC \u0438 \u043c\u0430\u043b\u043e\u0433\u043e \u0441\u0435\u0440\u0432\u0438\u0441\u043d\u043e\u0433\u043e \u0431\u0438\u0437\u043d\u0435\u0441\u0430'
      ] : [
        'Formation, EIN, and licenses without admin overload',
        'Clear document checklist before launch',
        'Best for new LLCs and small service businesses'
      ]
    },
    '/services/quickbooks-bookkeeping.html': {
      label: 'QuickBooks',
      items: ru ? [
        '\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u043e\u0435 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u0435 \u043f\u0435\u0440\u0438\u043e\u0434\u0430 \u0438 \u0441\u0432\u0435\u0440\u043a\u0438',
        '\u0427\u0438\u0441\u0442\u044b\u0435 \u043e\u0442\u0447\u0435\u0442\u044b \u0434\u043b\u044f \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u043a\u0430 \u0438 \u043d\u0430\u043b\u043e\u0433\u043e\u0432',
        '\u041f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f ongoing support \u0438 cleanup'
      ] : [
        'Monthly close workflow and reconciliations',
        'Cleaner reports for owner review and taxes',
        'Fits both ongoing support and cleanup cases'
      ]
    },
    '/services/sales-tax-dor-reporting.html': {
      label: ru ? '\u041d\u0430\u043b\u043e\u0433 \u0441 \u043f\u0440\u043e\u0434\u0430\u0436' : 'Sales tax',
      items: ru ? [
        '\u0421\u0432\u0435\u0440\u043a\u0430 sales data \u0438 state reporting',
        '\u041f\u043e\u043c\u043e\u0449\u044c \u0441 \u0447\u0430\u0441\u0442\u043e\u0442\u043e\u0439 filing \u0438 \u0434\u0435\u0434\u043b\u0430\u0439\u043d\u0430\u043c\u0438',
        '\u0421\u043d\u0438\u0436\u0430\u0435\u0442 \u0440\u0438\u0441\u043a \u0441\u043f\u0435\u0448\u043a\u0438 \u043f\u0435\u0440\u0435\u0434 \u043e\u0442\u0447\u0435\u0442\u043d\u043e\u0441\u0442\u044c\u044e'
      ] : [
        'Reconcile sales data with state reporting',
        'Support on filing cadence and deadlines',
        'Reduces last-minute reporting risk'
      ]
    },
    '/services/payroll-li-quarterly.html': {
      label: 'Payroll',
      items: ru ? [
        'Payroll \u0438 quarterly filings \u0432 \u043e\u0434\u043d\u043e\u043c \u0440\u0438\u0442\u043c\u0435',
        '\u0411\u043e\u043b\u0435\u0435 \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0443\u0435\u043c\u0430\u044f \u043e\u0442\u0447\u0435\u0442\u043d\u043e\u0441\u0442\u044c \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u0433\u043e\u0434\u0430',
        '\u0423\u0434\u043e\u0431\u043d\u043e, \u0435\u0441\u043b\u0438 payroll \u0443\u0436\u0435 \u0435\u0441\u0442\u044c, \u043d\u043e \u043d\u0443\u0436\u0435\u043d \u043f\u043e\u0440\u044f\u0434\u043e\u043a'
      ] : [
        'Payroll and quarterly filings in one rhythm',
        'More predictable reporting throughout the year',
        'Useful when payroll exists but needs cleaner process'
      ]
    },
    '/services/tax-returns.html': {
      label: ru ? '\u041d\u0430\u043b\u043e\u0433\u043e\u0432\u0430\u044f \u043f\u043e\u0434\u0430\u0447\u0430' : 'Tax filing',
      items: ru ? [
        '\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 business \u0438 personal returns',
        '\u0421\u043f\u0438\u0441\u043e\u043a \u043d\u0443\u0436\u043d\u044b\u0445 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0437\u0430\u0440\u0430\u043d\u0435\u0435',
        '\u041c\u0435\u043d\u044c\u0448\u0435 \u043f\u0440\u0430\u0432\u043e\u043a, \u0435\u0441\u043b\u0438 \u043a\u043d\u0438\u0433\u0438 \u0443\u0436\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u044b \u0432 \u043f\u043e\u0440\u044f\u0434\u043e\u043a'
      ] : [
        'Business and personal return preparation',
        'Document checklist before filing starts',
        'Fewer revision cycles when books are already clean'
      ]
    },
    '/services/financial-consulting.html': {
      label: ru ? '\u0424\u0438\u043d\u0430\u043d\u0441\u043e\u0432\u0430\u044f \u044f\u0441\u043d\u043e\u0441\u0442\u044c' : 'Financial clarity',
      items: ru ? [
        '\u0411\u044b\u0441\u0442\u0440\u043e \u043f\u043e\u043d\u044f\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u0440\u0438\u0441\u043a\u0438 \u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0448\u0430\u0433',
        '\u041f\u043e\u043b\u0435\u0437\u043d\u043e \u043f\u0435\u0440\u0435\u0434 \u0440\u0435\u0448\u0435\u043d\u0438\u044f\u043c\u0438, \u043f\u043e\u0434\u0430\u0447\u0435\u0439 \u0438 cleanup',
        '\u0424\u043e\u043a\u0443\u0441 \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u043c \u0432\u044b\u0432\u043e\u0434\u0435, \u0430 \u043d\u0435 \u043d\u0430 \u0442\u0435\u043e\u0440\u0438\u0438'
      ] : [
        'Quick clarity on numbers, risks, and next steps',
        'Useful before filing, cleanup, or growth decisions',
        'Focused on practical action, not theory'
      ]
    }
  };
  var nextStepGuides = {
    '/services/company-formation.html': {
      intro: 'Start here if you are opening a new LLC, fixing the setup after formation, or making sure EIN, licensing, and bookkeeping are aligned from day one.',
      points: [
        'Best for new businesses that want a clean start instead of fixing paperwork later',
        'Useful when you are unsure which setup step comes first',
        'Often paired with QuickBooks setup and early tax-readiness support'
      ]
    },
    '/services/quickbooks-bookkeeping.html': {
      intro: 'Start here if your books are behind, reports feel unreliable, or you want a stable monthly close without rebuilding the file every tax season.',
      points: [
        'Best for monthly support, catch-up work, or QuickBooks cleanup',
        'Useful when payroll, sales tax, or owner transactions are creating noise',
        'Usually the right first move before tax filing if the books are not fully ready'
      ]
    },
    '/services/sales-tax-dor-reporting.html': {
      intro: 'Start here if sales tax is already being collected but the filing process feels unclear, inconsistent, or disconnected from bookkeeping.',
      points: [
        'Best for Washington DOR filing and ongoing sales-tax support',
        'Useful when platform reports do not clearly match the books',
        'Usually works best after a quick review of bookkeeping and filing cadence'
      ]
    },
    '/services/payroll-li-quarterly.html': {
      intro: 'Start here if payroll is running but quarterly reporting, reconciliations, or worker records are starting to feel messy or too manual.',
      points: [
        'Best for businesses with active payroll and recurring filing deadlines',
        'Useful when payroll reports no longer feel easy to verify',
        'Often paired with monthly bookkeeping for cleaner year-round reporting'
      ]
    },
    '/services/tax-returns.html': {
      intro: 'Start here if tax season is approaching and you need a clean document process, clearer scope, and fewer last-minute corrections before filing.',
      points: [
        'Best for business returns, personal returns, or both together',
        'Useful when documents are scattered or bookkeeping is not fully tax-ready',
        'Often starts with a quick review to confirm what should be gathered first'
      ]
    },
    '/services/financial-consulting.html': {
      intro: 'Start here if you need financial clarity before making a decision, fixing a reporting issue, or choosing the right accounting next step.',
      points: [
        'Best when reports exist but are not yet helping with real decisions',
        'Useful before pricing changes, tax planning, cleanup, or growth steps',
        'Often turns unclear numbers into a simpler action plan'
      ]
    },
    '/ru/services/company-formation.html': {
      intro: '\u042d\u0442\u0430 \u0443\u0441\u043b\u0443\u0433\u0430 \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442, \u0435\u0441\u043b\u0438 \u0432\u044b \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0435 LLC, \u0445\u043e\u0442\u0438\u0442\u0435 \u0441\u0440\u0430\u0437\u0443 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u043e\u0444\u043e\u0440\u043c\u0438\u0442\u044c EIN \u0438 \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u0438 \u0438 \u043d\u0435 \u0447\u0438\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0440\u0442 \u0431\u0438\u0437\u043d\u0435\u0441\u0430 \u043f\u043e\u0442\u043e\u043c.',
      points: [
        '\u041b\u0443\u0447\u0448\u0438\u0439 \u0432\u0445\u043e\u0434 \u0434\u043b\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u0431\u0438\u0437\u043d\u0435\u0441\u0430 \u0431\u0435\u0437 \u0431\u0443\u043c\u0430\u0436\u043d\u043e\u0433\u043e \u0445\u0430\u043e\u0441\u0430',
        '\u041f\u043e\u043b\u0435\u0437\u043d\u043e, \u0435\u0441\u043b\u0438 \u043d\u0435\u044f\u0441\u043d\u043e, \u043a\u0430\u043a\u0438\u0435 \u0448\u0430\u0433\u0438 \u0438\u0434\u0443\u0442 \u043f\u0435\u0440\u0432\u044b\u043c\u0438',
        '\u0427\u0430\u0441\u0442\u043e \u0438\u0434\u0435\u0442 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c QuickBooks \u0438 \u0443\u0447\u0435\u0442\u0430'
      ]
    },
    '/ru/services/quickbooks-bookkeeping.html': {
      intro: '\u042d\u0442\u0430 \u0443\u0441\u043b\u0443\u0433\u0430 \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442, \u0435\u0441\u043b\u0438 \u0443\u0447\u0435\u0442 \u043e\u0442\u0441\u0442\u0430\u0435\u0442, \u043e\u0442\u0447\u0435\u0442\u044b \u043d\u0435 \u0432\u044b\u0437\u044b\u0432\u0430\u044e\u0442 \u0434\u043e\u0432\u0435\u0440\u0438\u044f \u0438\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u0439 monthly close \u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u0431\u043e\u0440\u043a\u0438 \u043a\u043d\u0438\u0433 \u043f\u0435\u0440\u0435\u0434 \u043d\u0430\u043b\u043e\u0433\u0430\u043c\u0438.',
      points: [
        '\u041f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f monthly support, catch-up \u0438 cleanup',
        '\u041f\u043e\u043b\u0435\u0437\u043d\u043e, \u043a\u043e\u0433\u0434\u0430 payroll, sales tax \u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 owner \u0443\u0436\u0435 \u043c\u0435\u0448\u0430\u044e\u0442 \u0447\u0438\u0442\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b',
        '\u0427\u0430\u0441\u0442\u043e \u044d\u0442\u043e \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0448\u0430\u0433 \u043f\u0435\u0440\u0435\u0434 \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0439 \u043f\u043e\u0434\u0430\u0447\u0435\u0439'
      ]
    },
    '/ru/services/sales-tax-dor-reporting.html': {
      intro: '\u042d\u0442\u0430 \u0443\u0441\u043b\u0443\u0433\u0430 \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442, \u0435\u0441\u043b\u0438 sales tax \u0443\u0436\u0435 \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044f, \u043d\u043e \u0441\u0430\u043c \u043f\u0440\u043e\u0446\u0435\u0441\u0441 filing \u0438 \u0441\u0432\u0435\u0440\u043a\u0438 \u043f\u043e\u043a\u0430 \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u043d\u0435\u043d\u0430\u0434\u0435\u0436\u043d\u043e.',
      points: [
        '\u041b\u0443\u0447\u0448\u0438\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0434\u043b\u044f Washington DOR \u0438 regular filing',
        '\u041f\u043e\u043b\u0435\u0437\u043d\u043e, \u0435\u0441\u043b\u0438 reports \u0438\u0437 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c \u043d\u0435 \u0441\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0441 \u0443\u0447\u0435\u0442\u043e\u043c',
        '\u041e\u0431\u044b\u0447\u043d\u043e \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0439 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 cadence \u0438 source data'
      ]
    },
    '/ru/services/payroll-li-quarterly.html': {
      intro: '\u042d\u0442\u0430 \u0443\u0441\u043b\u0443\u0433\u0430 \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442, \u0435\u0441\u043b\u0438 payroll \u0443\u0436\u0435 \u0435\u0441\u0442\u044c, \u043d\u043e quarterly reporting, \u0441\u0432\u0435\u0440\u043a\u0438 \u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0442 \u0437\u0430\u0431\u0438\u0440\u0430\u0442\u044c \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e \u0440\u0443\u0447\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f.',
      points: [
        '\u041b\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u0434\u043b\u044f \u0431\u0438\u0437\u043d\u0435\u0441\u0430 \u0441 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u043c payroll \u0438 recurring deadlines',
        '\u041f\u043e\u043b\u0435\u0437\u043d\u043e, \u043a\u043e\u0433\u0434\u0430 payroll reports \u0441\u0442\u0430\u043b\u0438 \u0442\u0440\u0443\u0434\u043d\u0435\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0442\u044c',
        '\u0427\u0430\u0441\u0442\u043e \u0438\u0434\u0435\u0442 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0435\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u043e\u0439 \u0431\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0438\u0435\u0439'
      ]
    },
    '/ru/services/tax-returns.html': {
      intro: '\u042d\u0442\u0430 \u0443\u0441\u043b\u0443\u0433\u0430 \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442, \u0435\u0441\u043b\u0438 \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0441\u0435\u0437\u043e\u043d \u0431\u043b\u0438\u0437\u043a\u043e, \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u0435\u0449\u0435 \u043d\u0435 \u0441\u043e\u0431\u0440\u0430\u043d\u044b \u0438\u043b\u0438 \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u043d\u044f\u0442\u044c, \u0447\u0442\u043e \u0438\u043c\u0435\u043d\u043d\u043e \u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u0434\u043e filing.',
      points: [
        '\u041f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f business returns, personal returns \u0438 \u043e\u0431\u043e\u0438\u0445 \u0432\u043c\u0435\u0441\u0442\u0435',
        '\u041f\u043e\u043b\u0435\u0437\u043d\u043e, \u043a\u043e\u0433\u0434\u0430 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u0440\u0430\u0437\u0440\u043e\u0437\u043d\u0435\u043d\u044b \u0438\u043b\u0438 bookkeeping \u0435\u0449\u0435 \u043d\u0435 tax-ready',
        '\u0427\u0430\u0441\u0442\u043e \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0439 \u043e\u0446\u0435\u043d\u043a\u0438 \u0438 \u0441\u043f\u0438\u0441\u043a\u0430, \u0447\u0442\u043e \u0434\u043e\u0441\u043e\u0431\u0440\u0430\u0442\u044c'
      ]
    },
    '/ru/services/financial-consulting.html': {
      intro: '\u042d\u0442\u0430 \u0443\u0441\u043b\u0443\u0433\u0430 \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442, \u0435\u0441\u043b\u0438 \u043d\u0443\u0436\u043d\u0430 \u044f\u0441\u043d\u043e\u0441\u0442\u044c \u043f\u043e \u0446\u0438\u0444\u0440\u0430\u043c \u0434\u043e \u0440\u0435\u0448\u0435\u043d\u0438\u044f, cleanup \u0438\u043b\u0438 \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0439 \u043f\u043e\u0434\u0430\u0447\u0438.',
      points: [
        '\u041b\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043e, \u043a\u043e\u0433\u0434\u0430 \u043e\u0442\u0447\u0435\u0442\u044b \u0443\u0436\u0435 \u0435\u0441\u0442\u044c, \u043d\u043e \u043e\u043d\u0438 \u043d\u0435 \u0434\u0430\u044e\u0442 \u043f\u043e\u043d\u044f\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u0432\u043e\u0434\u0430',
        '\u041f\u043e\u043b\u0435\u0437\u043d\u043e \u043f\u0435\u0440\u0435\u0434 pricing, filing, cleanup \u0438\u043b\u0438 growth-\u0448\u0430\u0433\u0430\u043c\u0438',
        '\u0424\u043e\u043a\u0443\u0441 \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u043c \u043f\u043b\u0430\u043d\u0435, \u0430 \u043d\u0435 \u043d\u0430 \u0442\u0435\u043e\u0440\u0438\u0438'
      ]
    }
  };

  function injectSnapshot() {
    var root = document.querySelector('.policy__inner');
    var lead = root ? root.querySelector('.policy__lead') : null;
    if (!root || !lead || root.querySelector('.service-snapshot')) return;

    var snapshot = snapshots[path];
    if (!snapshot) return;

    var block = document.createElement('section');
    block.className = 'service-snapshot';
    block.innerHTML = '<div class="service-snapshot__head"><span class="service-snapshot__eyebrow">' + snapshot.label + '</span><h2 class="service-snapshot__title">' + t.snapshotTitle + '</h2></div><div class="service-snapshot__grid">' + snapshot.items.map(function (item) {
      return '<div class="service-snapshot__item"><span class="service-snapshot__dot"></span><p>' + item + '</p></div>';
    }).join('') + '</div>';

    if (lead.nextSibling) root.insertBefore(block, lead.nextSibling);
    else root.appendChild(block);
  }

  function injectRelatedArticles() {
    var root = document.querySelector('.policy__inner');
    if (!root || root.querySelector('.service-related-articles')) return;

    var items = related[path] || [];
    if (!items.length) return;

    var block = document.createElement('section');
    block.className = 'service-related-articles related-section';
    block.innerHTML = '<h2 class="related-section__title">' + t.relatedTitle + '</h2><ul class="related-section__list">' + items.map(function (it) {
      return '<li><a href="' + it.href + '">' + it.text + '</a></li>';
    }).join('') + '</ul>';

    var cta = root.querySelector('.policy__cta');
    if (cta) root.insertBefore(block, cta);
    else root.appendChild(block);
  }

  function injectFaq() {
    var root = document.querySelector('.policy__inner');
    if (!root || root.querySelector('.service-faq')) return;

    var items = [
      { q: t.q1, a: t.a1 },
      { q: t.q2, a: t.a2 },
      { q: t.q3, a: t.a3 }
    ];

    var faq = document.createElement('section');
    faq.className = 'service-faq';
    faq.innerHTML = '<h2 class="faq__title">' + t.faqTitle + '</h2><div class="service-faq__list">' + items.map(function (it) {
      return '<details class="faq__item"><summary class="faq__q">' + it.q + '</summary><p class="faq__a">' + it.a + '</p></details>';
    }).join('') + '</div>';

    var cta = root.querySelector('.policy__cta');
    if (cta) root.insertBefore(faq, cta);
    else root.appendChild(faq);

    if (!document.querySelector('script[data-fs-service-faq="1"]')) {
      var schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map(function (it) {
          return { '@type': 'Question', name: it.q, acceptedAnswer: { '@type': 'Answer', text: it.a } };
        })
      };
      var s = document.createElement('script');
      s.type = 'application/ld+json';
      s.setAttribute('data-fs-service-faq', '1');
      s.textContent = JSON.stringify(schema);
      document.head.appendChild(s);
    }
  }

  function injectNextStep() {
    var root = document.querySelector('.policy__inner');
    if (!root || root.querySelector('.service-next-step')) return;

    var guide = nextStepGuides[path];
    if (!guide) return;

    var block = document.createElement('section');
    block.className = 'service-next-step';
    block.innerHTML =
      '<div class="service-next-step__copy">' +
        '<h2 class="service-next-step__title">' + t.nextStepTitle + '</h2>' +
        '<p class="service-next-step__intro">' + guide.intro + '</p>' +
        '<ul class="service-next-step__list">' +
          guide.points.map(function (item) { return '<li>' + item + '</li>'; }).join('') +
        '</ul>' +
      '</div>' +
      '<div class="service-next-step__actions">' +
        '<a class="btn btn-primary" href="' + (ru ? '/ru/contact/' : '/contact/') + '">' + t.nextStepButton + '</a>' +
        '<a class="btn btn-ghost" href="' + (ru ? '/ru/kak-nachat.html' : '/getting-started.html') + '">' + t.nextStepSecondary + '</a>' +
      '</div>';

    var cta = root.querySelector('.policy__cta');
    if (cta) root.insertBefore(block, cta);
    else root.appendChild(block);
  }
  injectSnapshot();
  injectRelatedArticles();
  injectFaq();
  injectNextStep();
})();
