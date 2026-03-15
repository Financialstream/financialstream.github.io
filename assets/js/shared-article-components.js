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
        ctaCallQuote: '\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442 \u0437\u0430 1 \u0440\u0430\u0431\u043e\u0447\u0438\u0439 \u0434\u0435\u043d\u044c',
        ctaForm: '\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 (\u0444\u043e\u0440\u043c\u0430)',
        ctaTrust: '\u041e\u0431\u044b\u0447\u043d\u044b\u0439 \u0441\u0440\u043e\u043a \u043e\u0442\u0432\u0435\u0442\u0430: \u0434\u043e 1 \u0440\u0430\u0431\u043e\u0447\u0435\u0433\u043e \u0434\u043d\u044f',
        ctaPoint1: '\u041f\u043e\u043d\u044f\u0442\u043d\u044b\u0439 \u043e\u0431\u044a\u0435\u043c \u0440\u0430\u0431\u043e\u0442 \u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0448\u0430\u0433\u0438',
        ctaPoint2: '\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0439 \u043e\u0431\u043c\u0435\u043d \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438',
        ctaPoint3: '\u0423\u0434\u0430\u043b\u0435\u043d\u043d\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043f\u043e \u0432\u0441\u0435\u0439 \u0421\u0428\u0410',
        relatedTitle: '\u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438',
        faqTitle: '\u0427\u0430\u0441\u0442\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u043f\u043e \u0442\u0435\u043c\u0435',
        backTo: '\u2190 \u041d\u0430\u0437\u0430\u0434 \u043a \u043d\u043e\u0432\u043e\u0441\u0442\u044f\u043c',
        allUpdates: '\u0412\u0441\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438',
        readSuffix: '\u043c\u0438\u043d \u0447\u0442\u0435\u043d\u0438\u044f'
      }
    : {
        keyTitle: 'Key takeaways',
        tocTitle: 'In this article',
        ctaTitle: 'Need help with this topic?',
        ctaBody: 'Send a request and we will confirm details, scope, and the best next step for your case.',
        ctaCall: 'Book a free 15-min consult',
        ctaCallQuote: 'Get a response in 1 business day',
        ctaForm: 'Send request (form)',
        ctaTrust: 'Typical response: within 1 business day',
        ctaPoint1: 'Clear scope and fixed next steps',
        ctaPoint2: 'Secure document process',
        ctaPoint3: 'Remote support across the U.S.',
        relatedTitle: 'Related articles',
        faqTitle: 'Frequently asked questions',
        backTo: '\u2190 Back to Updates',
        allUpdates: 'All updates',
        readSuffix: 'min read'
      };

  function getThemeLabel() {
    if (/tax|nalog|irs|declar/i.test(path)) {
      return ru ? '\u041d\u0430\u043b\u043e\u0433\u0438' : 'Tax notes';
    }
    if (/payroll/i.test(path)) {
      return ru ? 'Payroll' : 'Payroll notes';
    }
    if (/sales-tax|dor/i.test(path)) {
      return ru ? 'Sales Tax' : 'Sales tax notes';
    }
    if (/quickbooks|bookkeeping|buhgalter/i.test(path)) {
      return ru ? 'QuickBooks \u0438 \u0443\u0447\u0435\u0442' : 'QuickBooks and bookkeeping';
    }
    return 'Financial Stream Journal';
  }

  function estimateReadTime(article) {
    var text = article ? (article.textContent || '') : '';
    var words = text.trim().split(/\s+/).filter(Boolean).length;
    return words ? Math.max(1, Math.round(words / 190)) : 0;
  }

  function getKeyPoints() {
    if (ru) {
      return [
        '\u0421\u043e\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u0437\u0430\u0440\u0430\u043d\u0435\u0435.',
        '\u041f\u043e\u043d\u044f\u0442\u043d\u044b\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0448\u0430\u0433\u0438 \u0441\u043d\u0438\u0436\u0430\u044e\u0442 \u0440\u0438\u0441\u043a \u0437\u0430\u0434\u0435\u0440\u0436\u0435\u043a.',
        '\u0427\u0438\u0441\u0442\u044b\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0432 \u043d\u0430\u0447\u0430\u043b\u0435 \u044d\u043a\u043e\u043d\u043e\u043c\u0438\u0442 \u0432\u0440\u0435\u043c\u044f \u0434\u0430\u043b\u044c\u0448\u0435.'
      ];
    }
    return [
      'Prepare core documents and numbers before the first review.',
      'Clear next steps reduce delays and rework.',
      'A cleaner process early usually saves time later.'
    ];
  }

  function getFaqItems() {
    if (ru) {
      return [
        { q: '\u041c\u043e\u0436\u043d\u043e \u043b\u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e?', a: '\u0414\u0430, \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u0437\u0430\u0434\u0430\u0447 \u0432\u0435\u0434\u0435\u043c \u043e\u043d\u043b\u0430\u0439\u043d.' },
        { q: '\u0427\u0442\u043e \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u0434 \u0441\u0442\u0430\u0440\u0442\u043e\u043c?', a: '\u041c\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u0447\u0435\u043a\u043b\u0438\u0441\u0442 \u043f\u043e\u0434 \u0432\u0430\u0448\u0443 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044e.' },
        { q: '\u041a\u0430\u043a \u0431\u044b\u0441\u0442\u0440\u043e \u0432\u044b \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442\u0435?', a: '\u041e\u0442\u0432\u0435\u0447\u0430\u0435\u043c \u0432 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0440\u0430\u0431\u043e\u0447\u0435\u0435 \u0432\u0440\u0435\u043c\u044f.' }
      ];
    }
    return [
      { q: 'Can this be handled remotely across the U.S.?', a: 'Yes. Most bookkeeping and tax support is handled remotely with secure document exchange.' },
      { q: 'What should I prepare before onboarding?', a: 'We send a short checklist based on your case so onboarding stays fast and structured.' },
      { q: 'How quickly do you respond?', a: 'We respond as quickly as possible during business hours and confirm the next step.' }
    ];
  }

  function toId(text) {
    return String(text || '').trim().toLowerCase().replace(/[^a-z0-9\u0400-\u04FF]+/g, '-').replace(/^-+|-+$/g, '');
  }

  function ensureBacklink(article) {
    var meta = article.querySelector('.meta .backlink');
    if (meta) {
      meta.textContent = t.backTo;
      return;
    }

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

  function injectEyebrow(article) {
    var h1 = article.querySelector('h1');
    if (!h1 || article.querySelector('.article-eyebrow')) return;

    var eyebrow = document.createElement('div');
    eyebrow.className = 'article-eyebrow';
    eyebrow.textContent = getThemeLabel();
    article.insertBefore(eyebrow, h1);
  }

  function injectReadTime(article) {
    var readTime = estimateReadTime(article);
    if (!readTime) return;

    var firstMeta = article.querySelector('.meta');
    if (!firstMeta || firstMeta.querySelector('.article-readtime')) return;

    var sep = document.createElement('span');
    sep.className = 'article-meta-sep';
    sep.textContent = '\u2022';

    var time = document.createElement('span');
    time.className = 'article-readtime';
    time.textContent = readTime + ' ' + t.readSuffix;

    firstMeta.appendChild(sep);
    firstMeta.appendChild(time);
  }

  function injectKeyPoints(article) {
    if (article.querySelector('.article-keypoints')) return;
    var points = getKeyPoints();
    if (!points.length) return;

    var block = document.createElement('section');
    block.className = 'article-keypoints';
    block.innerHTML = '<h2 class="article-keypoints__title">' + t.keyTitle + '</h2><ul class="article-keypoints__list">' + points.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>';

    var firstH2 = article.querySelector('h2');
    var firstParagraph = article.querySelector('p:not(.meta)');
    if (firstH2) article.insertBefore(block, firstH2);
    else if (firstParagraph && firstParagraph.nextSibling) article.insertBefore(block, firstParagraph.nextSibling);
    else article.appendChild(block);
  }

  function injectToc(article) {
    if (article.querySelector('.article-toc')) return;
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

  function getPrimaryCtaLabel() {
    var ab = '';
    try {
      ab = (new URLSearchParams(window.location.search).get('ab') || '').toLowerCase();
    } catch (_) {}
    return ab === 'quote' ? (t.ctaCallQuote || t.ctaCall) : t.ctaCall;
  }

  function injectCTA(article) {
    if (article.querySelector('.article-cta')) return;
    var slot = article.querySelector('[data-article-cta]');
    var box = document.createElement('div');
    box.className = 'article-cta';
    box.innerHTML = '<div class="article-cta__inner"><h2 class="article-cta__title">' + t.ctaTitle + '</h2><p class="article-cta__text">' + t.ctaBody + '</p><div class="article-cta__actions"><a class="btn btn-primary" href="https://calendar.app.google/xWh5kEQBoJvy9ien8" target="_blank" rel="noopener">' + getPrimaryCtaLabel() + '</a><a class="btn btn-ghost" href="https://docs.google.com/forms/d/e/1FAIpQLSeGVohbKaOOEevQnt3kPCTz7LuKFYxtgVx2o3trXWTPL7pIxw/viewform?usp=publish-editor" target="_blank" rel="noopener">' + t.ctaForm + '</a></div><p class="article-cta__trust">' + t.ctaTrust + '</p><ul class="article-cta__points"><li>' + t.ctaPoint1 + '</li><li>' + t.ctaPoint2 + '</li><li>' + t.ctaPoint3 + '</li></ul></div>';
    if (slot) slot.replaceWith(box);
    else article.appendChild(box);
  }


function hasManualRelated(article) {
  // Explicit manual blocks (if present) always win.
  if (article.querySelector('.manual-related, .related-manual')) return true;

  // Narrow detection: only treat as "manual related" when the heading matches known markers.
  var markersEn = ['related services', 'helpful reads', 'related articles'];
  var markersRu = ['похожие статьи', 'полезные материалы', 'связанные статьи', 'по теме'];

  function normalize(s) {
    return (s || '').replace(/\s+/g, ' ').trim().toLowerCase();
  }

  // "H2 (or section heading)" — keep this strict to avoid false positives.
  var headings = article.querySelectorAll('h2, h3');
  for (var i = 0; i < headings.length; i++) {
    var ttxt = normalize(headings[i].textContent || '');
    if (!ttxt) continue;

    var list = markersEn.concat(markersRu);
    for (var j = 0; j < list.length; j++) {
      if (ttxt.indexOf(list[j]) !== -1) return true;
    }
  }

  return false;
}

  function injectRelated(article) {
    if (article.querySelector('.related-section')) return;

    if (hasManualRelated(article)) return;

    var items = ru
      ? [
          { href: '/ru/blog/', text: t.allUpdates },
          { href: '/ru/services/quickbooks-bookkeeping.html', text: '\u0411\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0438\u044f \u0432 QuickBooks' }
        ]
      : [
          { href: '/blog/', text: t.allUpdates },
          { href: '/services/quickbooks-bookkeeping.html', text: 'QuickBooks bookkeeping' }
        ];

    var block = document.createElement('div');
    block.className = 'related-section';
    block.innerHTML = '<h2 class="related-section__title">' + t.relatedTitle + '</h2><ul class="related-section__list">' + items.map(function (it) { return '<li><a href="' + it.href + '">' + it.text + '</a></li>'; }).join('') + '</ul>';

    var anchor = article.querySelector('footer.footer, script[src*="/script.js"], script[src*="shared-header.js"], script[src*="shared-article-components.js"]');
    if (anchor) article.insertBefore(block, anchor);
    else article.appendChild(block);
  }

  function injectFaq(article) {
    if (article.querySelector('.article-faq')) return;
    var items = getFaqItems();
    var block = document.createElement('section');
    block.className = 'article-faq';
    block.innerHTML = '<h2 class="article-faq__title">' + t.faqTitle + '</h2><div class="article-faq__list">' + items.map(function (it) { return '<details class="article-faq__item"><summary class="article-faq__q">' + it.q + '</summary><p class="article-faq__a">' + it.a + '</p></details>'; }).join('') + '</div>';

    var anchor = article.querySelector('.article-cta') || article.querySelector('[data-article-cta]');
    if (anchor) article.insertBefore(block, anchor);
    else article.appendChild(block);

    if (!document.querySelector('script[data-fs-article-faq="1"]')) {
      var schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map(function (it) {
          return { '@type': 'Question', name: it.q, acceptedAnswer: { '@type': 'Answer', text: it.a } };
        })
      };
      var s = document.createElement('script');
      s.type = 'application/ld+json';
      s.setAttribute('data-fs-article-faq', '1');
      s.textContent = JSON.stringify(schema);
      document.head.appendChild(s);
    }
  }

  var article = document.querySelector('.article');
  if (!article) return;

  ensureBacklink(article);
  injectEyebrow(article);
  injectReadTime(article);
  injectKeyPoints(article);
  injectToc(article);
  injectFaq(article);
  injectCTA(article);
  injectRelated(article);
})();
