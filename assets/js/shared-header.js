(function(){
  function isRu(){ return window.location.pathname.startsWith('/ru/'); }
  var ru = isRu();
  var path = window.location.pathname;
  // Normalize language counterpart paths for blog articles
  var enPath = ru ? path.replace(/^\/ru\//,'/') : path;
  var ruPath = ru ? path : '/ru' + path;
  // Special-case: root
  if(path === '/ru' || path === '/ru/' ){ ruPath='/ru/'; enPath='/'; }
  if(path === '' ){ enPath='/'; ruPath='/ru/'; }

  var t = ru ? {
    home: 'Главная',
    services: 'Услуги',
    process: 'Процесс',
    faq: 'Вопросы',
    contact: 'Контакты',
    cta: 'Бесплатная консультация',
    aria: 'Financial Stream LLC'
  } : {
    home: 'Home',
    services: 'Services',
    process: 'Process',
    faq: 'FAQ',
    contact: 'Contact',
    cta: 'Book a Free Consultation',
    aria: 'Financial Stream LLC'
  };

  var headerHTML = `
<header class="topbar">
  <div class="container topbar__inner">
    <a aria-label="${t.aria}" class="brand" href="#top">
      <img alt="Financial Stream LLC logo" class="brand__logo" src="/assets/logo-horizontal.png"/>
    </a>
    <nav aria-label="Primary" class="nav">
      <a class="nav__link" href="${ru?'/ru/':'/'}#top">${t.home}</a>
      <a class="nav__link" href="${ru?'/ru/services/':'/services/'}">${t.services}</a>
      <a class="nav__link" href="${ru?'/ru/process.html':'/process.html'}">${t.process}</a>
      <a class="nav__link" href="${ru?'/ru/faq.html':'/faq.html'}">${t.faq}</a>
      <a class="nav__link" href="#contact">${t.contact}</a>
    </nav>
    <div class="topbar__actions">
      <div class="lang" role="navigation" aria-label="Language">
        <a class="lang__link ${ru?'':'is-active'}" href="${enPath}" aria-current="${ru?'false':'page'}">EN</a>
        <a class="lang__link ${ru?'is-active':''}" href="${ruPath}" aria-current="${ru?'page':'false'}">RU</a>
      </div>
      <a class="btn btn--primary" href="#contact">${t.cta}</a>
    </div>
  </div>
</header>`;
  var slots = document.querySelectorAll('[data-shared-header]');
  if(!slots || !slots.length) return;
  slots.forEach(function(el){ el.outerHTML = headerHTML; });
})();
