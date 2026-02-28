(function(){
  function isRu(){ return window.location.pathname.startsWith('/ru/'); }
  var ru = isRu();
  var path = window.location.pathname || '/';

  // Only run on article pages (blog/*.html excluding index.html)
  if(!/\/(ru\/)?blog\/.+\.html$/.test(path) || /\/blog\/index\.html$/.test(path) || /\/ru\/blog\/index\.html$/.test(path)){
    return;
  }

  var t = ru ? {
    ctaTitle: 'Нужна помощь по этой теме?',
    ctaBody: 'Оставьте запрос — мы уточним детали и предложим лучший следующий шаг. Цены и сроки обсуждаем после уточнения вашей ситуации.',
    ctaCall: 'Записаться на консультацию (15 мин)',
    ctaForm: 'Оставить запрос (форма)',
    relatedTitle: 'Похожие статьи',
    backTo: '← Назад к новостям'
  } : {
    ctaTitle: 'Need help with this topic?',
    ctaBody: 'Send a request and we’ll confirm details and the best next step. Pricing and timing are discussed after we review your situation.',
    ctaCall: 'Book a free 15‑min consult',
    ctaForm: 'Send request (form)',
    relatedTitle: 'Related articles',
    backTo: '← Back to Updates'
  };

  // Related links mapping (keep small and high-signal: 2 items)
  var related = {
    '/blog/seattle-quickbooks-bookkeeping.html': [
      {href:'/blog/seattle-tax-return-guide.html', text:'Tax return in Seattle (2026)'},
      {href:'/services/quickbooks-bookkeeping.html', text:'QuickBooks bookkeeping service'}
    ],
    '/blog/seattle-tax-return-guide.html': [
      {href:'/blog/seattle-quickbooks-bookkeeping.html', text:'Seattle + QuickBooks checklist (2026)'},
      {href:'/services/tax-returns.html', text:'Tax returns service'}
    ],
    '/blog/seattle-area-accountant-bookkeeper.html': [
      {href:'/blog/washington-bookkeeping-quickbooks.html', text:'Washington + QuickBooks checklist (2026)'},
      {href:'/services/quickbooks-bookkeeping.html', text:'Monthly bookkeeping'}
    ],
    '/blog/washington-bookkeeping-quickbooks.html': [
      {href:'/blog/seattle-area-accountant-bookkeeper.html', text:'Seattle area: what to prepare (2026)'},
      {href:'/services/quickbooks-bookkeeping.html', text:'QuickBooks bookkeeping'}
    ],
    '/blog/sales-tax-2026.html': [
      {href:'/blog/payroll-2026.html', text:'Payroll 2026: reporting habits'},
      {href:'/services/sales-tax-dor-reporting.html', text:'Sales tax reporting support'}
    ],
    '/blog/payroll-2026.html': [
      {href:'/blog/sales-tax-2026.html', text:'Sales tax in 2026: what matters'},
      {href:'/services/payroll-li-quarterly.html', text:'Payroll & quarterly reporting'}
    ],
    '/blog/quickbooks-healthy-books.html': [
      {href:'/blog/washington-bookkeeping-quickbooks.html', text:'Washington + QuickBooks checklist (2026)'},
      {href:'/services/quickbooks-bookkeeping.html', text:'QuickBooks bookkeeping'}
    ],
    '/blog/irs-2026-inflation-adjustments.html': [
      {href:'/blog/seattle-tax-return-guide.html', text:'Tax return guide (Seattle)'},
      {href:'/services/tax-returns.html', text:'Tax returns (business & personal)'}
    ],

    // RU counterparts
    '/ru/blog/buhgalter-seattle-quickbooks.html': [
      {href:'/ru/blog/nalogovaya-deklaraciya-seattle.html', text:'Налоговая декларация Seattle (2026)'},
      {href:'/ru/services/quickbooks-bookkeeping.html', text:'Бухгалтерия в QuickBooks'}
    ],
    '/ru/blog/nalogovaya-deklaraciya-seattle.html': [
      {href:'/ru/blog/buhgalter-seattle-quickbooks.html', text:'Бухгалтер Seattle и QuickBooks (2026)'},
      {href:'/ru/services/tax-returns.html', text:'Налоговые декларации'}
    ],
    '/ru/blog/seattle-area-accountant-bookkeeper.html': [
      {href:'/ru/blog/washington-bookkeeping-quickbooks.html', text:'Вашингтон и QuickBooks: чек‑лист (2026)'},
      {href:'/ru/services/quickbooks-bookkeeping.html', text:'Ежемесячный учёт в QuickBooks'}
    ],
    '/ru/blog/washington-bookkeeping-quickbooks.html': [
      {href:'/ru/blog/seattle-area-accountant-bookkeeper.html', text:'Бухгалтер в Seattle area: что подготовить (2026)'},
      {href:'/ru/services/quickbooks-bookkeeping.html', text:'Бухгалтерия в QuickBooks'}
    ],
    '/ru/blog/sales-tax-2026.html': [
      {href:'/ru/blog/payroll-2026.html', text:'Payroll 2026: отчётность и привычки'},
      {href:'/ru/services/sales-tax-dor-reporting.html', text:'Sales Tax / отчётность DOR'}
    ],
    '/ru/blog/payroll-2026.html': [
      {href:'/ru/blog/sales-tax-2026.html', text:'Sales tax 2026: что важно'},
      {href:'/ru/services/payroll-li-quarterly.html', text:'Payroll и отчётность (L&I)'}
    ],
    '/ru/blog/quickbooks-healthy-books.html': [
      {href:'/ru/blog/washington-bookkeeping-quickbooks.html', text:'Вашингтон и QuickBooks: чек‑лист (2026)'},
      {href:'/ru/services/quickbooks-bookkeeping.html', text:'Ежемесячный учёт в QuickBooks'}
    ],
    '/ru/blog/irs-2026-inflation-adjustments.html': [
      {href:'/ru/blog/nalogovaya-deklaraciya-seattle.html', text:'Налоговая декларация Seattle (2026)'},
      {href:'/ru/services/tax-returns.html', text:'Налоговые декларации'}
    ]
  };

  function ensureBacklink(){
    var meta = document.querySelector('.article .meta .backlink');
    if(meta){
      meta.textContent = t.backTo;
      return;
    }
    // If missing, inject under title/meta
    var article = document.querySelector('.article');
    if(!article) return;
    var p = document.createElement('p');
    p.className = 'meta';
    var a = document.createElement('a');
    a.className = 'backlink';
    a.href = ru ? '/ru/blog/' : '/blog/';
    a.textContent = t.backTo;
    p.appendChild(a);
    // insert after first meta if exists else after h1
    var h1 = article.querySelector('h1');
    if(h1 && h1.nextSibling) article.insertBefore(p, h1.nextSibling.nextSibling);
    else article.appendChild(p);
  }

  function injectCTA(){
    var article = document.querySelector('.article');
    if(!article) return;
    if(article.querySelector('.article-cta')) return;

    // Prefer placeholder if present
    var slot = article.querySelector('[data-article-cta]');
    var box = document.createElement('div');
    box.className = 'article-cta';
    box.innerHTML = `
      <div class="article-cta__inner">
        <h2 class="article-cta__title">${t.ctaTitle}</h2>
        <p class="article-cta__text">${t.ctaBody}</p>
        <div class="article-cta__actions">
          <a class="btn btn-primary" href="#contact">${t.ctaCall}</a>
          <a class="btn btn-ghost" href="${ru ? 'https://docs.google.com/forms/d/e/1FAIpQLSeGVohbKaOOEevQnt3kPCTz7LuKFYxtgVx2o3trXWTPL7pIxw/viewform?usp=publish-editor' : 'https://docs.google.com/forms/d/e/1FAIpQLSeGVohbKaOOEevQnt3kPCTz7LuKFYxtgVx2o3trXWTPL7pIxw/viewform?usp=publish-editor'}" target="_blank" rel="noopener">${t.ctaForm}</a>
        </div>
      </div>`;
    if(slot){
      slot.replaceWith(box);
    }else{
      article.appendChild(box);
    }
  }

  function injectRelated(){
    var main = document.querySelector('main.page') || document.querySelector('main');
    if(!main) return;

    // If an explicit slot exists, use it; else append after the article section.
    if(main.querySelector('.related-section')) return;

    var items = related[path] || [];
    if(!items.length){
      // safe default: blog index + services
      items = ru ? [
        {href:'/ru/blog/', text:'Все новости'},
        {href:'/ru/services/quickbooks-bookkeeping.html', text:'Бухгалтерия в QuickBooks'}
      ] : [
        {href:'/blog/', text:'All updates'},
        {href:'/services/quickbooks-bookkeeping.html', text:'QuickBooks bookkeeping'}
      ];
    }

    var section = document.createElement('section');
    section.className = 'related-section';
    var lis = items.map(function(it){
      return '<li><a href="'+it.href+'">'+it.text+'</a></li>';
    }).join('');
    section.innerHTML = `
      <div class="container">
        <h2 class="related-section__title">${t.relatedTitle}</h2>
        <ul class="related-section__list">${lis}</ul>
      </div>`;

    // Append right before footer if possible
    var footer = document.querySelector('footer.footer');
    if(footer && footer.parentNode){
      footer.parentNode.insertBefore(section, footer);
    }else{
      main.appendChild(section);
    }
  }

  ensureBacklink();
  injectCTA();
  injectRelated();
})();