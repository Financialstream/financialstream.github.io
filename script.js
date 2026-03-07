(() => {
  try {
  const i18n = {
    en: {
      nav: {
        
        home: 'Home',
        services: 'Services',
        process: 'Process',
        faq: 'FAQ',
        contact: 'Contact',
      },
      cta: {
        bookTop: 'Free Consultation',
        seeServices: 'View Services',
        ctaTitle: 'Ready to get started?',
        ctaText: 'Book a free consultation or send a request — we’ll reply shortly.',
        ctaButton: 'Request a Free Consultation',
        sendRequest: 'Send Request',
        bookFooter: 'Request a Free Consultation',
        bookMid: 'Request a Free Consultation',
      },
      hero: {
        title1: 'Accounting & Bookkeeping',
        title2: 'for Small Businesses & Individuals',
        subtitle: 'Bookkeeping, payroll, and tax preparation for U.S. small businesses.',
        body: 'We help U.S. small businesses and individuals with accounting, tax, and reporting: QuickBooks Online bookkeeping, sales tax and state reporting, payroll, and business/personal tax return preparation. If you are starting from scratch, catching up past periods (catch-up/cleanup), or preparing for filing without stress, we build a clear step-by-step process and handle the routine work. We work remotely across the United States in English and Russian.',
        pillLang: 'Bilingual: English / Russian',
        chip1: 'Fast response',
        chip2: 'Clean monthly reports',
        chip3: 'QuickBooks-focused',
      },
      pill: {
        lang: 'Bilingual: English / Russian',
      },
      badges: {
        response: 'Fast response',
        reports: 'Clean monthly reports',
        us: 'US small-business focused',
      },
      services: {
        title: 'Our Services',
        subtitle: 'Practical accounting support for small businesses: on-time compliance, clean books, and stress-free tax readiness.',
        more: 'Learn more',
        s1: { b1: 'Company registration / closure', b2: 'EIN application', b3: 'Business license', b4: 'Contractor license' },
        s2: { b1: 'Bookkeeping in QuickBooks Online. Professional monthly categorization.' },
        s3: { b1: 'Monthly and quarterly reporting to the Department of Revenue, sales tax filing.' },
        s4: { b1: "Payroll calculation and quarterly reporting to the Department of Labor & Industries (L&I)" },
        s5: { b1: 'Preparation and filing of tax returns for businesses and individuals.' },
        s6: { b1: 'Financial analysis and consultation on financial matters and documents.' },
      },
      monthly: {
        title: 'What you get each month',
        b1: 'Reconciled bank & credit card accounts',
        b2: 'Clean categorization in QuickBooks Online',
        b3: 'Monthly P&L and Balance Sheet',
        b4: 'Clear notes on what changed and what to watch',
        b5: 'Fast answers to bookkeeping questions',
      },
      process: {
        title: 'How it works',
        subtitle: 'We do our work fast, high-quality, and professionally.',
        p1: {
          title: 'Free consultation',
          text: 'We understand your situation and confirm scope.',
        },
        p2: {
          title: 'Secure onboarding',
          text: 'We collect access and documents with clear instructions.',
        },
        p3: {
          title: 'Monthly close',
          text: 'Reconciliations and cleanup — consistent and on time.',
        },
      },
      reviews: {
        title: 'Client reviews',
        subtitle: 'Clients across the U.S. — here are a few short notes.',
        r1: { text: '"We came in with messy books and no clear monthly process. They cleaned everything up, explained the reports in plain language, and now we actually trust our numbers."', name: 'Alex' },
        r2: { text: '"Communication is excellent. I always know what is pending, what was completed, and what documents are needed next. That alone removed a lot of stress."', name: 'Olga' },
        r3: { text: '"They fixed categorization mistakes from our previous setup and aligned QuickBooks with our tax workflow. Filing season felt much smoother this year."', name: 'Svetlana' },
        r4: { text: '"Professional, responsive, and very practical. We get clear monthly reports, fast answers, and no last-minute surprises with payroll or sales tax."', name: 'Viktor' },
        r5: { text: '"As a U.S. small business owner, I needed reliable support I could trust. They are consistent, detail-oriented, and easy to work with every month."', name: 'Steve' },
      },
      faq: {
        title: 'FAQ',
        subtitle: 'Answers to common questions.',
        q1: { q: 'What do you need from me to get started?', a: 'We’ll ask a few questions and request access to your bookkeeping platform and key documents.' },
        q2: { q: 'Do I need to come to your office in person?', a: 'No. We can work fully online or by phone, so you don’t need to visit an office. We support clients across the U.S.' },
        q3: { q: 'Do you work with QuickBooks Online?', a: 'Yes. QuickBooks Online is our primary platform, and we can help you set it up correctly.' },
        q4: { q: 'Can you clean up months of backlog?', a: 'Yes. We can catch up past months, fix categorization, and move you into a stable monthly process.' },
        q5: { q: 'Do you help with sales tax?', a: 'Yes. We support sales tax tracking, filings, and notices for your state.' },
        q6: { q: 'Do you help with state revenue and labor agencies?', a: 'Yes. We can help with reporting, notices, documentation, and communication so you stay compliant.' },
        q7: { q: 'Do you do taxes?', a: 'Yes. We prepare and file business and personal tax returns and help you keep documentation organized year-round.' },
        q8: { q: 'How fast do you respond?', a: 'Typically within 1 business day. Complex cases may take longer — we’ll keep you updated.' },
        q9: { q: 'How much does it cost?', a: 'Pricing depends on volume and complexity. We’ll provide a quote after a short call.' },
      },
      contact: {
        title: 'Contact',
        subtitle: 'Tell us your goal and timeline — we will reply with the next step.',
        formTitle: 'Book a free consultation or ask a question',
        formSub: 'We’ll review your situation, ask a few quick questions, and suggest the next step.',
        phone: 'Phone',
        email: 'Email',
        website: 'Website',
      
        location: 'Location',
        locationValue: 'Virtually serving clients across the U.S. Based out of Federal Way, Washington.',},
      form: {
        success: 'Thank you — your request was sent.',
        nameLabel: 'Your Name',
        phoneLabel: 'Phone Number',
        emailLabel: 'Email',
        messageLabel: 'Message',
        namePlaceholder: 'Your Name',
        phonePlaceholder: 'Phone Number',
        emailPlaceholder: 'Email',
        messagePlaceholder: 'How can we help?',
        thanksTitle: 'Thank you!',
        thanksBody: 'Your request has been sent. We will contact you shortly.',
      optional: 'Optional:',
        details: 'Details:',
        smsConsentLabel: 'I agree that Financial Stream LLC may text me about my inquiry or a missed call (service-related only). Message frequency varies. Msg & data rates may apply. Reply STOP to opt out, HELP for help.',
        ackPrefix: 'By submitting, you acknowledge our',
        ackAnd: 'and',
        smsConsentHint: 'By submitting, you acknowledge our Privacy Policy and Terms.',
      },
      
      policyPrivacy: {
        metaTitle: 'Privacy Policy — Financial Stream LLC',
        h1: 'Privacy Policy',
        updated: 'Last updated: 2026-02-08',
        intro: 'Financial Stream LLC respects your privacy. This Privacy Policy explains what information we collect, how we use it, and the choices you have.',
        collectTitle: 'Information we collect',
        collect1: 'Contact details you submit (for example, name, phone number, email address, and message).',
        collect2: 'Business details you voluntarily share to request bookkeeping, tax, or administrative support.',
        collect3: 'Basic technical data (such as pages visited) for site functionality and security.',
        useTitle: 'How we use information',
        use1: 'To respond to requests and provide service-related support.',
        use2: 'To deliver service updates and reminders by email or SMS when you request or consent to that communication.',
        use3: 'To improve our service quality and maintain site security.',
        smsTitle: 'SMS communications (service-related)',
        sms1: 'Если вы дадите согласие, мы можем отправлять сервисные SMS только по вашему запросу (например, после пропущенного звонка, для согласования консультации и статусов). Маркетинговых рассылок нет. Частота сообщений зависит от ситуации. Могут применяться тарифы оператора.',
        sms2: 'You can opt out at any time by replying STOP. For help, reply HELP.',
        shareTitle: 'Sharing',
        share1: 'We do not sell your personal information. We do not share your phone number with third parties for their marketing. We may use trusted service providers (for example, messaging and hosting providers) only to operate our services, under confidentiality obligations.',
        securityTitle: 'Security',
        security1: 'We use reasonable administrative and technical safeguards to protect information. No method of transmission or storage is 100% secure.',
        choiceTitle: 'Your choices',
        choice1: 'Request access, correction, or deletion of information you submitted through our site.',
        choice2: 'Opt out of SMS by replying STOP; request help by replying HELP.',
        contactTitle: 'Contact',
        contact1: 'To contact us about privacy, please use the Contact form on our website.',
        back: 'Back to the main page',
      },
      policyTerms: {
        metaTitle: 'Terms & Conditions — Financial Stream LLC',
        h1: 'Terms & Conditions',
        updated: 'Last updated: 2026-02-08',
        intro: 'These Terms govern your use of the Financial Stream LLC website and our service-related communications. By using this site, you agree to these Terms.',
        servicesTitle: 'Services',
        services1: 'Financial Stream LLC provides bookkeeping, tax preparation support, and related administrative assistance. Information on this site is for general informational purposes and is not legal advice.',
        requestsTitle: 'Requests and consultations',
        requests1: 'When you submit a request, you agree that the information you provide is accurate to the best of your knowledge. We may contact you to clarify details needed to respond.',
        smsTitle: 'SMS terms (service-related)',
        sms1: 'Если вы согласились на SMS, вы даёте согласие получать сервисные сообщения только по вашему запросу (включая SMS после пропущенного звонка, согласование консультации и статусы). Маркетинговых рассылок нет. Частота сообщений зависит от ситуации. Могут применяться тарифы оператора.',
        sms2: 'To opt out, reply STOP. For help, reply HELP.',
        privacyTitle: 'Privacy',
        privacy1: 'Our Privacy Policy explains how we collect and use information. Please review it for details.',
        disclaimerTitle: 'Disclaimer',
        disclaimer1: 'We strive for accuracy, but we do not guarantee that all content is complete or up to date. Your use of this site is at your own risk.',
        changesTitle: 'Changes',
        changes1: 'We may update these Terms from time to time. Updates take effect when posted on this page.',
        back: 'Back to the main page',
      },
      policySmsConsent: {
        metaTitle: 'SMS Consent — Financial Stream LLC',
        h1: 'SMS Consent & Messaging Policy',
        updated: 'Last updated: 2026-02-15',
        intro: 'This page explains how Financial Stream LLC uses SMS for customer-initiated communication.',
        scopeTitle: 'What SMS is used for',
        scope1: 'Missed call follow-up: if you call our business number and we miss your call, we may send one text acknowledging the missed call and inviting you to reply.',
        scope2: 'If you reply, we may continue the conversation one-to-one to assist you (for example, answering questions or coordinating an appointment).',
        scope3: 'We do not send marketing messages. We do not send bulk messages. We do not purchase or use lead lists.',
        consentTitle: 'Your consent',
        consent1: 'By calling our business number and/or submitting our contact form with the SMS checkbox selected, you consent to receive text messages related to your inquiry.',
        consent2: 'Message frequency varies. Message & data rates may apply.',
        optoutTitle: 'Opt out / Help',
        optout1: 'Reply STOP to opt out at any time. Reply HELP for help.',
        recordsTitle: 'Consent records',
        records1: 'We may retain records of your consent and messaging activity (timestamp, phone number, and message content) to demonstrate compliance.',
      },

      policySmsConsentLinksLabel: 'See also:',
      policySmsConsentLinks1: 'Privacy Policy',
      policySmsConsentLinksSep: 'and',
      policySmsConsentLinks2: 'Terms & Conditions',
      policyBackHome: 'Back to the main page',

      footer: {
        rights: '© 2026 Financial Stream LLC',
        privacy: 'Privacy Policy',
        terms: 'Terms & Conditions',
      sms: 'SMS Consent',
      },
    },

    ru: {
      nav: {
        
        home: 'Главная',services: 'Услуги',
        process: 'Процесс',
        faq: 'Вопросы',
        contact: 'Контакты',
      },
      cta: {
        bookTop: '\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f',
        seeServices: '\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0438',
        ctaTitle: 'Готовы начать?',
        ctaText: 'Запишитесь на бесплатную консультацию или отправьте запрос — мы ответим в ближайшее время.',
        ctaButton: 'Записаться на бесплатную консультацию',
        sendRequest: 'Отправить',
        bookFooter: 'Записаться на бесплатную консультацию',
        bookMid: 'Записаться на бесплатную консультацию',
      },
      hero: {
        title1: 'Бухгалтерия и учёт',
        title2: 'для малого бизнеса и частных лиц',
        subtitle: '\u0411\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440, bookkeeping, payroll \u0438 \u043d\u0430\u043b\u043e\u0433\u0438 \u0434\u043b\u044f \u043c\u0430\u043b\u043e\u0433\u043e \u0431\u0438\u0437\u043d\u0435\u0441\u0430 \u0432 \u0421\u0428\u0410.',
        body: 'Помогаем малому бизнесу и частным лицам в США с бухгалтерией, налогами и отчётностью: QuickBooks Online bookkeeping, Sales Tax (налог с продаж), payroll (зарплата), подготовка и подача налоговых деклараций. Если вы запускаете учёт с нуля, хотите восстановить прошлые периоды (catch-up/cleanup) или подготовиться к подаче налогов без стресса, мы выстроим понятный пошаговый процесс и возьмём рутину на себя. Работаем удалённо по всей территории США, на русском и английском.',
        pillLang: 'Двуязычно: английский / русский',
        chip1: 'Быстрый ответ',
        chip2: 'Чистые ежемесячные отчёты',
        chip3: 'Фокус на QuickBooks',
      },
      pill: {
        lang: 'Два языка: Английский / Русский',
      },
      badges: {
        response: 'Быстрый ответ',
        reports: 'Понятные ежемесячные отчеты',
        us: 'Фокус на малом бизнесе США',
      },
      services: {
        title: 'Наши услуги',
        subtitle: 'Практичная бухгалтерская поддержка для малого бизнеса: сроки под контролем, чистый учёт и спокойная подготовка к налогам.',
        more: 'Подробнее',
        s1: { b1: 'Регистрация/ликвидация компании', b2: 'Получение EIN', b3: 'Оформление бизнесс лицензии', b4: 'Оформление лицензии контрактора' },
        s2: { b1: 'Ведение бухгалтерского учета в QuickBooks. Профессиональная ежемесячная категоризация.' },
        s3: { b1: 'Подача ежемесячных и ежеквартальных отчетов в Department of Revenue , Sales Tax filing.' },
        s4: { b1: 'Расчет заработной платы и подача ежеквартальных отчетов в Department L& I' },
        s5: { b1: 'Подготовка и подача налоговых деклараций для бизнесса и частных лиц.' },
        s6: { b1: 'Анализ и консультация в финансовых вопросах и документах.' },
      },
      process: {
        title: 'Как мы работаем',
        subtitle: 'Мы делаем свою работу быстро, качественно и профессионально.',
        p1: {
          title: 'Бесплатная консультация',
          text: 'Разбираем вашу ситуацию и согласуем объем работ.',
        },
        p2: {
          title: 'Безопасный старт',
          text: 'Собираем доступы и документы по понятным инструкциям.',
        },
        p3: {
          title: 'Ежемесячное закрытие',
          text: 'Сверки и порядок — стабильно и в срок.',
        },
      },
      reviews: {
        title: 'Отзывы клиентов',
        subtitle: 'Нам доверяют сотни клиентов — вот несколько коротких отзывов.',
        r1: { text: '"Пришли с запущенным учетом и непонятными цифрами. Команда все аккуратно восстановила, объяснила отчеты простым языком и выстроила понятный ежемесячный процесс."', name: 'Алексей' },
        r2: { text: '"Очень сильная коммуникация: всегда понятно, что уже сделано, что в работе и какие документы нужны дальше. За счет этого стало гораздо спокойнее управлять бизнесом."', name: 'Ольга' },
        r3: { text: '"Исправили ошибки после предыдущего бухгалтера, правильно настроили QuickBooks и связали учет с налоговой подготовкой. В сезон подачи стало намного проще."', name: 'Светлана' },
        r4: { text: '"Профессиональный подход и быстрые ответы по делу. Ежемесячные отчеты теперь чистые, а вопросы по payroll и sales tax закрываются без хаоса и спешки."', name: 'Виктор' },
        r5: { text: '"Как владельцу бизнеса в США, мне была важна надежность и предсказуемость. Работают стабильно, внимательно к деталям и действительно держат процесс под контролем."', name: 'Стив' },
      },
monthly: {
      title: 'Что вы получаете каждый месяц',
      b1: 'Сверенные банковские счета и карты',
      b2: 'Чистая категоризация в QuickBooks Online',
      b3: 'P&L и Balance Sheet каждый месяц',
      b4: 'Пояснения: что изменилось и на что обратить внимание',
      b5: 'Быстрые ответы на вопросы по учёту',
      },
      
      faq: {
        title: 'Вопросы и ответы',
        subtitle: 'Коротко отвечаем на самые частые вопросы.',
        q1: { q: 'Что нужно от меня, чтобы начать?', a: 'Мы уточним несколько вопросов и запросим доступ к бухгалтерской системе и ключевые документы.' },
        q2: { q: 'Нужно ли приезжать к вам в офис лично?', a: 'Нет. Мы можем работать полностью онлайн или по телефону — приезжать не нужно. Работаем с клиентами по всей США.' },
        q3: { q: 'Вы работаете с QuickBooks Online?', a: 'Да. QuickBooks Online — наша основная платформа, и мы поможем настроить всё правильно.' },
        q4: { q: 'Можете восстановить учёт за прошлые месяцы?', a: 'Да. Мы сделаем catch-up, исправим категории и переведём на стабильный ежемесячный процесс.' },
        q5: { q: 'Вы помогаете с sales tax?', a: 'Да. Помогаем с учётом, подачей и уведомлениями по вашему штату.' },
        q6: { q: 'Помогаете по вопросам департаментов штата (налоги/труд)?', a: 'Да. Отчётность, уведомления, документы и коммуникация — чтобы вы соблюдали требования.' },
        q7: { q: 'Вы делаете налоги?', a: 'Да. Готовим и подаём бизнес- и личные декларации и помогаем держать документы в порядке весь год.' },
        q8: { q: 'Как быстро вы отвечаете?', a: 'Обычно в течение 1 рабочего дня. Сложные случаи могут занять больше времени — мы будем держать вас в курсе.' },
        q9: { q: 'Сколько это стоит?', a: 'Стоимость зависит от объёма и сложности. Мы дадим расчёт после короткого созвона.' },
      },
      contact: {
        title: 'Контакты',
        subtitle: '\u041e\u043f\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u0437\u0430\u0434\u0430\u0447\u0443 \u0438 \u0441\u0440\u043e\u043a\u0438 — \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0448\u0430\u0433.',
        formTitle: 'Записаться на бесплатную консультацию или задать вопрос',
        formSub: 'Задать вопрос — мы ответим в ближайшее время.',
        phone: 'Телефон',
        email: 'Email',
        website: 'Сайт',
      
        location: 'Локация',
        locationValue: 'Работаем с клиентами онлайн по всей территории США. Базируемся в Federal Way, Washington.',},
      form: {
        success: 'Спасибо — ваш запрос отправлен.',
        nameLabel: 'Имя',
        phoneLabel: 'Телефон',
        emailLabel: 'Email',
        messageLabel: 'Сообщение',
        namePlaceholder: 'Ваше имя',
        phonePlaceholder: 'Телефон (необязательно)',
        emailPlaceholder: 'Email',
        messagePlaceholder: 'Чем мы можем помочь?',
        thanksTitle: 'Спасибо!',
        thanksBody: 'Ваш запрос отправлен. Мы свяжемся с вами в ближайшее время.',
      optional: 'Необязательно:',
        details: 'Подробнее:',
        smsConsentLabel: 'Я согласен(на), что Financial Stream LLC может отправить мне SMS по моему обращению или при пропущенном звонке (только по вопросам сервиса). Частота сообщений зависит от ситуации. Могут применяться тарифы оператора. STOP — отказ, HELP — помощь.',
        ackPrefix: 'Отправляя форму, вы подтверждаете ознакомление с',
        ackAnd: 'и',
        smsConsentHint: 'Отправляя форму, вы подтверждаете ознакомление с Политикой конфиденциальности и Условиями.',
      },
      
      policyPrivacy: {
        metaTitle: 'Политика конфиденциальности — Financial Stream LLC',
        h1: 'Политика конфиденциальности',
        updated: 'Последнее обновление: 2026-02-08',
        intro: 'Financial Stream LLC уважает вашу конфиденциальность. В этой политике описано, какие данные мы собираем, как используем их и какие у вас есть варианты выбора.',
        collectTitle: 'Какие данные мы собираем',
        collect1: 'Контактные данные, которые вы отправляете (например: имя, телефон, email и сообщение).',
        collect2: 'Данные о бизнесе, которые вы добровольно предоставляете для запроса бухгалтерских, налоговых или административных услуг.',
        collect3: 'Базовые технические данные (например посещённые страницы) для работы сайта и безопасности.',
        useTitle: 'Как мы используем данные',
        use1: 'Чтобы отвечать на запросы и оказывать сервисную поддержку.',
        use2: 'Чтобы отправлять сервисные обновления и напоминания по email или SMS — когда вы сами запросили или дали согласие.',
        use3: 'Чтобы улучшать качество сервиса и обеспечивать безопасность сайта.',
        smsTitle: 'SMS‑сообщения (только сервисные)',
        sms1: 'Если вы оставили номер и согласились, мы можем отправлять сервисные SMS: согласование консультации, обновления по документам/статусам, ответы поддержки. Частота сообщений может различаться. Возможны стандартные тарифы оператора.',
        sms2: 'Отписаться можно в любой момент, ответив STOP. Для помощи — ответьте HELP.',
        shareTitle: 'Передача данных',
        share1: 'Мы не продаём персональные данные. Мы не передаём ваш номер телефона третьим лицам для их маркетинга. Для работы сервиса мы можем использовать надёжных подрядчиков (например, провайдера сообщений и хостинг) на условиях конфиденциальности.',
        securityTitle: 'Безопасность',
        security1: 'Мы применяем разумные организационные и технические меры защиты. Однако ни один способ передачи/хранения данных не гарантирует 100% безопасность.',
        choiceTitle: 'Ваш выбор',
        choice1: 'Вы можете запросить доступ, исправление или удаление данных, которые вы отправляли через сайт.',
        choice2: 'Отписка от SMS — STOP; помощь — HELP.',
        contactTitle: 'Контакты',
        contact1: 'По вопросам конфиденциальности используйте форму Contact на нашем сайте.',
        back: 'Вернуться на главную',
      },
      policyTerms: {
        metaTitle: 'Условия использования — Financial Stream LLC',
        h1: 'Условия использования',
        updated: 'Последнее обновление: 2026-02-08',
        intro: 'Эти условия регулируют использование сайта Financial Stream LLC и сервисных коммуникаций. Используя сайт, вы соглашаетесь с этими условиями.',
        servicesTitle: 'Услуги',
        services1: 'Financial Stream LLC предоставляет бухгалтерские услуги, поддержку по налоговой подготовке и сопутствующую административную помощь. Информация на сайте носит общий характер и не является юридической консультацией.',
        requestsTitle: 'Запросы и консультации',
        requests1: 'Отправляя запрос, вы подтверждаете, что предоставляете информацию добросовестно и по возможности точно. При необходимости мы можем уточнить детали для ответа.',
        smsTitle: 'Условия по SMS (только сервисные)',
        sms1: 'Если вы подписались на SMS, вы даёте согласие на сервисные сообщения (не маркетинг): согласование, напоминания, обновления по документам/статусам и ответы поддержки. Частота сообщений может различаться. Возможны тарифы оператора.',
        sms2: 'Отписка — STOP. Помощь — HELP.',
        privacyTitle: 'Конфиденциальность',
        privacy1: 'Подробности о сборе и использовании данных описаны в Политике конфиденциальности.',
        disclaimerTitle: 'Отказ от гарантий',
        disclaimer1: 'Мы стараемся поддерживать информацию актуальной, но не гарантируем полноту и актуальность всего контента. Использование сайта — на ваш риск.',
        changesTitle: 'Изменения',
        changes1: 'Мы можем обновлять эти условия. Изменения вступают в силу после публикации на этой странице.',
        back: 'Вернуться на главную',
      },
      policySmsConsent: {
        metaTitle: 'Согласие на SMS — Financial Stream LLC',
        h1: 'Согласие на SMS и политика сообщений',
        updated: 'Обновлено: 2026-02-15',
        intro: 'На этой странице описано, как Financial Stream LLC использует SMS для коммуникации по инициативе клиента.',
        scopeTitle: 'Для чего используются SMS',
        scope1: 'Пропущенный звонок: если вы звоните на наш рабочий номер и мы не ответили, мы можем отправить одно SMS с подтверждением пропущенного звонка и просьбой написать ваш вопрос.',
        scope2: 'Если вы ответите, мы можем продолжить переписку один-на-один, чтобы помочь вам (например, ответить на вопросы или согласовать консультацию).',
        scope3: 'Мы не отправляем маркетинговые сообщения, не делаем массовые рассылки и не используем базы лидов.',
        consentTitle: 'Ваше согласие',
        consent1: 'Звоня на наш рабочий номер и/или отправляя форму на сайте с отмеченным чекбоксом SMS, вы соглашаетесь получать SMS по вашему запросу.',
        consent2: 'Частота сообщений зависит от ситуации. Могут применяться тарифы оператора.',
        optoutTitle: 'Отказ / Помощь',
        optout1: 'Отправьте STOP, чтобы отказаться. Отправьте HELP для помощи.',
        optout2: 'Могут применяться тарифы оператора.',

        contactTitle: 'Контакты',
        contact1: 'Если у вас есть вопросы по этой политике, свяжитесь с Financial Stream LLC.',
        recordsTitle: 'Хранение согласия',
        records1: 'Мы можем хранить записи согласия и переписки (время, номер, текст сообщения) для подтверждения соблюдения правил.',
      },

      policySmsConsentLinksLabel: 'См. также:',
      policySmsConsentLinks1: 'Политика конфиденциальности',
      policySmsConsentLinksSep: 'и',
      policySmsConsentLinks2: 'Условия использования',
      policyBackHome: 'Вернуться на главную',

      footer: {
        rights: '© 2026 Financial Stream LLC',
        privacy: 'Политика конфиденциальности',
        terms: 'Условия использования',
      sms: 'Согласие на SMS',
      },
    },
  };

  const getNested = (obj, path) => path.split('.').reduce((o, k) => (o && k in o ? o[k] : undefined), obj);

  function setLanguage(lang) {
    if (!i18n[lang]) return;

    // Text content
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = getNested(i18n[lang], key);
      if (typeof value === 'string') {
        el.textContent = value;
      }
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const value = getNested(i18n[lang], key);
      if (typeof value === 'string') {
        el.setAttribute('placeholder', value);
      }
    });

    // Reviews cards
    for (let i = 1; i <= 5; i++) {
      const t = getNested(i18n[lang], `reviews.r${i}.text`);
      const n = getNested(i18n[lang], `reviews.r${i}.name`);
      const tEl = document.querySelector(`[data-i18n="reviews.r${i}.text"]`);
      const nEl = document.querySelector(`[data-i18n="reviews.r${i}.name"]`);
      if (tEl && typeof t === 'string') tEl.textContent = t;
      if (nEl && typeof n === 'string') nEl.textContent = n;
    }

    // Active state
    document.querySelectorAll('.lang__btn').forEach((btn) => {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    // Store (guarded for privacy modes where storage may be blocked)
    try {
      localStorage.setItem('fs_lang', lang);
    } catch (_) {
      // no-op
    }
    document.documentElement.setAttribute('lang', lang);

    // Hidden language field for Formspree (optional)
    const formLang = document.getElementById('formLang');
    if (formLang) formLang.value = lang;
  }

  // Hook language buttons (URL-based switching for EN/RU static pages)
  function getLangFromPath() {
    return window.location.pathname.startsWith('/ru/') ? 'ru' : 'en';
  }

  
  // Language switch must NEVER route to a 404.
  // We embed a list of existing paths from the build and use explicit EN↔RU mappings where slugs differ.
  const FS_EXISTING_PATHS = new Set([
    "/",
    "/blog/",
    "/blog/index.html",
    "/blog/irs-2026-inflation-adjustments.html",
    "/blog/payroll-2026.html",
    "/blog/quickbooks-healthy-books.html",
    "/blog/quickbooks-online-bookkeeping-monthly-close.html",
    "/blog/sales-tax-2026.html",
    "/blog/seattle-area-accountant-bookkeeper.html",
    "/blog/seattle-quickbooks-bookkeeping.html",
    "/blog/seattle-tax-return-guide.html",
    "/blog/seattle-small-business-bookkeeper-services.html",
    "/blog/us-bookkeeping-small-business.html",
    "/blog/us-tax-return-preparation.html",
    "/blog/us-tax-return-prep-remote-checklist.html",
    "/blog/washington-tax-preparation-checklist-2026.html",
    "/blog/washington-bookkeeping-quickbooks.html",
    "/contact/",
    "/contact/index.html",
    "/getting-started/",
    "/getting-started/index.html",
    "/getting-started.html",
    "/googled57b0ab6edc65ff3.html",
    "/index.html",
    "/privacy-policy.html",
    "/ru/",
    "/ru/blog/",
    "/ru/blog/buhgalteriya-ssha-malogo-biznesa.html",
    "/ru/blog/buhgalter-seattle-quickbooks.html",
    "/ru/blog/index.html",
    "/ru/blog/irs-2026-inflation-adjustments.html",
    "/ru/blog/nalogovaya-deklaraciya-seattle.html",
    "/ru/blog/nalogovaya-deklaraciya-ssha-cheklist-dokumentov-2026.html",
    "/ru/blog/nalogovaya-deklaraciya-usa-udalenno-cheklist.html",
    "/ru/blog/payroll-2026.html",
    "/ru/blog/podgotovka-nalogovoy-deklaracii-ssha.html",
    "/ru/blog/quickbooks-healthy-books.html",
    "/ru/blog/quickbooks-uchet-ssha-ezhemesyachnyy-cheklist.html",
    "/ru/blog/sales-tax-2026.html",
    "/ru/blog/seattle-area-accountant-bookkeeper.html",
    "/ru/blog/russkogovoryashchiy-bukhgalter-v-ssha-seattle-washington.html",
    "/ru/blog/washington-bookkeeping-quickbooks.html",
    "/ru/contact/",
    "/ru/contact/index.html",
    "/ru/index.html",
    "/ru/kak-nachat/",
    "/ru/kak-nachat/index.html",
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
    "/terms-and-conditions.html",
  ]);

  const FS_EXPLICIT_LANG_MAP = {
    "/blog/seattle-quickbooks-bookkeeping.html": "/ru/blog/buhgalter-seattle-quickbooks.html",
    "/blog/seattle-tax-return-guide.html": "/ru/blog/nalogovaya-deklaraciya-seattle.html",
    "/blog/us-bookkeeping-small-business.html": "/ru/blog/buhgalteriya-ssha-malogo-biznesa.html",
    "/blog/us-tax-return-preparation.html": "/ru/blog/podgotovka-nalogovoy-deklaracii-ssha.html",
    "/blog/quickbooks-online-bookkeeping-monthly-close.html": "/ru/blog/quickbooks-uchet-ssha-ezhemesyachnyy-cheklist.html",
    "/blog/us-tax-return-prep-remote-checklist.html": "/ru/blog/nalogovaya-deklaraciya-usa-udalenno-cheklist.html",
    "/blog/seattle-small-business-bookkeeper-services.html": "/ru/blog/russkogovoryashchiy-bukhgalter-v-ssha-seattle-washington.html",
    "/blog/washington-tax-preparation-checklist-2026.html": "/ru/blog/nalogovaya-deklaraciya-ssha-cheklist-dokumentov-2026.html",
    "/getting-started.html": "/ru/kak-nachat.html",
    "/ru/blog/buhgalter-seattle-quickbooks.html": "/blog/seattle-quickbooks-bookkeeping.html",
    "/ru/blog/nalogovaya-deklaraciya-seattle.html": "/blog/seattle-tax-return-guide.html",
    "/ru/blog/buhgalteriya-ssha-malogo-biznesa.html": "/blog/us-bookkeeping-small-business.html",
    "/ru/blog/podgotovka-nalogovoy-deklaracii-ssha.html": "/blog/us-tax-return-preparation.html",
    "/ru/blog/quickbooks-uchet-ssha-ezhemesyachnyy-cheklist.html": "/blog/quickbooks-online-bookkeeping-monthly-close.html",
    "/ru/blog/nalogovaya-deklaraciya-usa-udalenno-cheklist.html": "/blog/us-tax-return-prep-remote-checklist.html",
    "/ru/blog/russkogovoryashchiy-bukhgalter-v-ssha-seattle-washington.html": "/blog/seattle-small-business-bookkeeper-services.html",
    "/ru/blog/nalogovaya-deklaraciya-ssha-cheklist-dokumentov-2026.html": "/blog/washington-tax-preparation-checklist-2026.html",
    "/ru/kak-nachat.html": "/getting-started.html",
  };

  function fsNormalizePath(pathname) {
    try {
      const u = new URL(pathname, window.location.origin);
      pathname = u.pathname;
    } catch (e) {}
    if (!pathname.startsWith('/')) pathname = '/' + pathname;
    pathname = pathname.replace(/\/{2,}/g, '/');
    if (pathname === '/index.html') pathname = '/';
    if (pathname === '/ru/index.html') pathname = '/ru/';
    return pathname;
  }

  function fsExists(pathname) {
    return FS_EXISTING_PATHS.has(fsNormalizePath(pathname));
  }

  function fsFallback(fromPath, targetLang) {
    const from = fsNormalizePath(fromPath);
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

  function fsFindAlternatePath(targetLang) {
    const selectors = targetLang === 'ru'
      ? ['link[rel="alternate"][hreflang="ru"]']
      : ['link[rel="alternate"][hreflang="en"]', 'link[rel="alternate"][hreflang="x-default"]'];

    for (const sel of selectors) {
      const link = document.querySelector(sel);
      if (!link) continue;
      const href = link.getAttribute('href');
      if (!href) continue;
      try {
        const u = new URL(href, window.location.origin);
        if (u.origin !== window.location.origin) continue;
        const p = fsNormalizePath(u.pathname);
        if (fsExists(p)) return p;
      } catch (_) {
        // no-op
      }
    }
    return null;
  }

  function buildLangUrl(targetLang) {
    const path = fsNormalizePath(window.location.pathname || '/');
    const search = window.location.search || '';
    const hash = window.location.hash || '';

    const currentLang = path.startsWith('/ru/') ? 'ru' : 'en';
    if (targetLang === currentLang) return path + search + hash;

    // 1) Page-declared alternate links (preferred)
    const alt = fsFindAlternatePath(targetLang);
    if (alt) return alt + search + hash;

    // 2) Explicit mapping (both directions stored in FS_EXPLICIT_LANG_MAP)
    if (FS_EXPLICIT_LANG_MAP[path]) {
      const mapped = FS_EXPLICIT_LANG_MAP[path];
      if (fsExists(mapped)) return mapped + search + hash;
    }

    // 3) Rule-based prefix/unprefix
    let cand;
    if (targetLang === 'ru') {
      if (path === '/') cand = '/ru/';
      else cand = path.startsWith('/ru/') ? path : '/ru' + path;
    } else {
      if (path === '/ru/') cand = '/';
      else cand = path.startsWith('/ru/') ? path.replace(/^\/ru/, '') : path;
    }

    // 4) Existence gate + fallback
    if (fsExists(cand)) return cand + search + hash;
    return fsFallback(path, targetLang) + search + hash;
  }

  // Expose for injected headers (blog articles) if needed
  window.FS_buildLangUrl = buildLangUrl;

  function updateLangLinks() {
    const path = fsNormalizePath(window.location.pathname || '/');
    const current = path.startsWith('/ru/') ? 'ru' : 'en';

    document.querySelectorAll('.lang__link').forEach((a) => {
      const label = (a.textContent || '').trim().toUpperCase();
      if (label !== 'EN' && label !== 'RU') return;
      const target = (label === 'RU') ? 'ru' : 'en';
      a.setAttribute('href', buildLangUrl(target));
      a.setAttribute('aria-current', target === current ? 'page' : 'false');
      a.classList.toggle('is-active', target === current);
    });
  }

  updateLangLinks();
  // Re-run after DOM changes (e.g., injected header on blog articles)
  document.addEventListener('DOMContentLoaded', updateLangLinks);

function updateLangButtons() {
    const current = getLangFromPath();
    document.querySelectorAll('.lang__btn').forEach((btn) => {
      const lang = btn.getAttribute('data-lang');
      const isActive = lang === current;
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
    document.documentElement.setAttribute('lang', current);
  }

  updateLangButtons();

  document.querySelectorAll('.lang__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      window.location.href = buildLangUrl(lang);
    });
  });

  // Init language
  const initial = (window.location.pathname.startsWith('/ru/') ? 'ru' : 'en');
  setLanguage(initial);

  // Simple success message based on URL param (?sent=1)
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.get('success') === '1') {
      const t = document.getElementById('formSuccess');
      if (t) t.style.display = 'block';
      // Remove the param from URL (optional, no reload)
      params.delete('success');
      const clean = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}${window.location.hash || ''}`;
      window.history.replaceState({}, '', clean);
    }
  } catch (_) {
    // no-op
  }
  } catch (_) {
    // Keep main site functional even if i18n logic fails on a specific page.
  }

})();

// Chatbase widget loader (Financial Stream Assistant)
(function(){
  try {
    var CHATBOT_ID = "L9Rqcw-6NJyxiL2AcTbtP";
    var CHATBOT_ID_LOWER = "L9Rqcw-6NJyxiL2AcTbtP".toLowerCase();
    var CHATBASE_DOMAIN = "www.chatbase.co";

    // Current Chatbase embed expects explicit config + chatbotId attribute.
    window.embeddedChatbotConfig = {
      chatbotId: CHATBOT_ID,
      domain: CHATBASE_DOMAIN
    };
    // Some builds/tools expect lower-case IDs
    window.embeddedChatbotConfigLower = { chatbotId: CHATBOT_ID_LOWER, domain: CHATBASE_DOMAIN };

    const onLoad=function(){
      // Avoid injecting twice
      if(document.querySelector('script[data-chatbase-loader="1"]')) return;
      const script=document.createElement("script");
      script.src="https://www.chatbase.co/embed.min.js";
      script.setAttribute("chatbotId", CHATBOT_ID);
      script.setAttribute("chatbotid", CHATBOT_ID);
      script.setAttribute("data-chatbot-id", CHATBOT_ID);
      script.setAttribute("data-chatbotid", CHATBOT_ID);
      script.setAttribute("data-chatbot-id-lower", CHATBOT_ID_LOWER);
      script.setAttribute("domain", CHATBASE_DOMAIN);
      script.setAttribute("data-chatbase-loader", "1");
      script.defer = true;
      script.addEventListener("error", function(){ console.warn("Chatbase embed failed to load."); });
      document.body.appendChild(script);
    };
    if(document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);
  } catch(e) {
    // no-op
  }
})();

// FS_tracking_v1: lightweight conversion event hooks (GTM/GA4-ready)
(function(){
  try {
    window.dataLayer = window.dataLayer || [];

    function detectLang(){
      try { return (window.location.pathname || '/').startsWith('/ru/') ? 'ru' : 'en'; }
      catch(_) { return 'en'; }
    }

    function pushEvent(eventName, payload){
      try {
        window.dataLayer.push(Object.assign({
          event: eventName,
          event_source: 'site',
          page_path: window.location.pathname || '/',
          page_lang: detectLang(),
          ts: Date.now()
        }, payload || {}));
      } catch(_) {
        // no-op
      }
    }

    window.FS_trackEvent = pushEvent;

    // Form submit events
    document.addEventListener('submit', function(e){
      var form = e.target;
      if(!(form instanceof HTMLFormElement)) return;
      if((form.id || '') !== 'contactForm') return;
      var action = (form.getAttribute('action') || '').toLowerCase();
      pushEvent('lead_form_submit', {
        form_id: form.id || null,
        form_action: action,
        form_provider: action.indexOf('formspree.io') !== -1 ? 'formspree' : 'unknown'
      });
    }, true);

    // Click tracking for key conversion links
    document.addEventListener('click', function(e){
      var el = e.target && e.target.closest ? e.target.closest('a') : null;
      if(!el) return;
      var href = (el.getAttribute('href') || '').trim();
      if(!href) return;

      if(href.indexOf('calendar.app.google') !== -1){
        pushEvent('booking_click', { href: href, cta_text: (el.textContent || '').trim().slice(0,120) });
        return;
      }

      if(href.indexOf('mailto:') === 0){
        pushEvent('email_click', { href: href });
        return;
      }

      if(href.indexOf('tel:') === 0){
        pushEvent('phone_click', { href: href });
        return;
      }
    }, true);

    // Chatbase load lifecycle
    window.addEventListener('load', function(){
      pushEvent('page_ready', {});
      if(document.querySelector('script[data-chatbase-loader="1"]')){
        pushEvent('chat_script_injected', { provider: 'chatbase' });
      }
    });

    // Best-effort chat open click capture
    document.addEventListener('click', function(e){
      var n = e.target;
      if(!n) return;
      var node = n.closest ? n.closest('[id*="chatbase"],[class*="chatbase"],iframe[src*="chatbase.co"]') : null;
      if(node){
        pushEvent('chat_interaction_click', { provider: 'chatbase' });
      }
    }, true);

  } catch(_) {
    // no-op
  }
})();
