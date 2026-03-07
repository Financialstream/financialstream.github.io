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
        ctaText: 'Book a free consultation or send a request â€” weâ€™ll reply shortly.',
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
          text: 'Reconciliations and cleanup â€” consistent and on time.',
        },
      },
      reviews: {
        title: 'Client reviews',
        subtitle: 'Clients across the U.S. â€” here are a few short notes.',
        r1: { text: '"We came in with messy books and no clear monthly process. They cleaned everything up, explained the reports in plain language, and now we actually trust our numbers."', name: 'Alex' },
        r2: { text: '"Communication is excellent. I always know what is pending, what was completed, and what documents are needed next. That alone removed a lot of stress."', name: 'Olga' },
        r3: { text: '"They fixed categorization mistakes from our previous setup and aligned QuickBooks with our tax workflow. Filing season felt much smoother this year."', name: 'Svetlana' },
        r4: { text: '"Professional, responsive, and very practical. We get clear monthly reports, fast answers, and no last-minute surprises with payroll or sales tax."', name: 'Viktor' },
        r5: { text: '"As a U.S. small business owner, I needed reliable support I could trust. They are consistent, detail-oriented, and easy to work with every month."', name: 'Steve' },
      },
      faq: {
        title: 'FAQ',
        subtitle: 'Answers to common questions.',
        q1: { q: 'What do you need from me to get started?', a: 'Weâ€™ll ask a few questions and request access to your bookkeeping platform and key documents.' },
        q2: { q: 'Do I need to come to your office in person?', a: 'No. We can work fully online or by phone, so you donâ€™t need to visit an office. We support clients across the U.S.' },
        q3: { q: 'Do you work with QuickBooks Online?', a: 'Yes. QuickBooks Online is our primary platform, and we can help you set it up correctly.' },
        q4: { q: 'Can you clean up months of backlog?', a: 'Yes. We can catch up past months, fix categorization, and move you into a stable monthly process.' },
        q5: { q: 'Do you help with sales tax?', a: 'Yes. We support sales tax tracking, filings, and notices for your state.' },
        q6: { q: 'Do you help with state revenue and labor agencies?', a: 'Yes. We can help with reporting, notices, documentation, and communication so you stay compliant.' },
        q7: { q: 'Do you do taxes?', a: 'Yes. We prepare and file business and personal tax returns and help you keep documentation organized year-round.' },
        q8: { q: 'How fast do you respond?', a: 'Typically within 1 business day. Complex cases may take longer â€” weâ€™ll keep you updated.' },
        q9: { q: 'How much does it cost?', a: 'Pricing depends on volume and complexity. Weâ€™ll provide a quote after a short call.' },
      },
      contact: {
        title: 'Contact',
        subtitle: 'Tell us your goal and timeline â€” we will reply with the next step.',
        formTitle: 'Book a free consultation or ask a question',
        formSub: 'Weâ€™ll review your situation, ask a few quick questions, and suggest the next step.',
        phone: 'Phone',
        email: 'Email',
        website: 'Website',
      
        location: 'Location',
        locationValue: 'Virtually serving clients across the U.S. Based out of Federal Way, Washington.',},
      form: {
        success: 'Thank you â€” your request was sent.',
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
        metaTitle: 'Privacy Policy â€” Financial Stream LLC',
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
        sms1: 'Ð•ÑÐ»Ð¸ Ð²Ñ‹ Ð´Ð°Ð´Ð¸Ñ‚Ðµ ÑÐ¾Ð³Ð»Ð°ÑÐ¸Ðµ, Ð¼Ñ‹ Ð¼Ð¾Ð¶ÐµÐ¼ Ð¾Ñ‚Ð¿Ñ€Ð°Ð²Ð»ÑÑ‚ÑŒ ÑÐµÑ€Ð²Ð¸ÑÐ½Ñ‹Ðµ SMS Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ð¿Ð¾ Ð²Ð°ÑˆÐµÐ¼Ñƒ Ð·Ð°Ð¿Ñ€Ð¾ÑÑƒ (Ð½Ð°Ð¿Ñ€Ð¸Ð¼ÐµÑ€, Ð¿Ð¾ÑÐ»Ðµ Ð¿Ñ€Ð¾Ð¿ÑƒÑ‰ÐµÐ½Ð½Ð¾Ð³Ð¾ Ð·Ð²Ð¾Ð½ÐºÐ°, Ð´Ð»Ñ ÑÐ¾Ð³Ð»Ð°ÑÐ¾Ð²Ð°Ð½Ð¸Ñ ÐºÐ¾Ð½ÑÑƒÐ»ÑŒÑ‚Ð°Ñ†Ð¸Ð¸ Ð¸ ÑÑ‚Ð°Ñ‚ÑƒÑÐ¾Ð²). ÐœÐ°Ñ€ÐºÐµÑ‚Ð¸Ð½Ð³Ð¾Ð²Ñ‹Ñ… Ñ€Ð°ÑÑÑ‹Ð»Ð¾Ðº Ð½ÐµÑ‚. Ð§Ð°ÑÑ‚Ð¾Ñ‚Ð° ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ð¹ Ð·Ð°Ð²Ð¸ÑÐ¸Ñ‚ Ð¾Ñ‚ ÑÐ¸Ñ‚ÑƒÐ°Ñ†Ð¸Ð¸. ÐœÐ¾Ð³ÑƒÑ‚ Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÑÑ‚ÑŒÑÑ Ñ‚Ð°Ñ€Ð¸Ñ„Ñ‹ Ð¾Ð¿ÐµÑ€Ð°Ñ‚Ð¾Ñ€Ð°.',
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
        metaTitle: 'Terms & Conditions â€” Financial Stream LLC',
        h1: 'Terms & Conditions',
        updated: 'Last updated: 2026-02-08',
        intro: 'These Terms govern your use of the Financial Stream LLC website and our service-related communications. By using this site, you agree to these Terms.',
        servicesTitle: 'Services',
        services1: 'Financial Stream LLC provides bookkeeping, tax preparation support, and related administrative assistance. Information on this site is for general informational purposes and is not legal advice.',
        requestsTitle: 'Requests and consultations',
        requests1: 'When you submit a request, you agree that the information you provide is accurate to the best of your knowledge. We may contact you to clarify details needed to respond.',
        smsTitle: 'SMS terms (service-related)',
        sms1: 'Ð•ÑÐ»Ð¸ Ð²Ñ‹ ÑÐ¾Ð³Ð»Ð°ÑÐ¸Ð»Ð¸ÑÑŒ Ð½Ð° SMS, Ð²Ñ‹ Ð´Ð°Ñ‘Ñ‚Ðµ ÑÐ¾Ð³Ð»Ð°ÑÐ¸Ðµ Ð¿Ð¾Ð»ÑƒÑ‡Ð°Ñ‚ÑŒ ÑÐµÑ€Ð²Ð¸ÑÐ½Ñ‹Ðµ ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ñ Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ð¿Ð¾ Ð²Ð°ÑˆÐµÐ¼Ñƒ Ð·Ð°Ð¿Ñ€Ð¾ÑÑƒ (Ð²ÐºÐ»ÑŽÑ‡Ð°Ñ SMS Ð¿Ð¾ÑÐ»Ðµ Ð¿Ñ€Ð¾Ð¿ÑƒÑ‰ÐµÐ½Ð½Ð¾Ð³Ð¾ Ð·Ð²Ð¾Ð½ÐºÐ°, ÑÐ¾Ð³Ð»Ð°ÑÐ¾Ð²Ð°Ð½Ð¸Ðµ ÐºÐ¾Ð½ÑÑƒÐ»ÑŒÑ‚Ð°Ñ†Ð¸Ð¸ Ð¸ ÑÑ‚Ð°Ñ‚ÑƒÑÑ‹). ÐœÐ°Ñ€ÐºÐµÑ‚Ð¸Ð½Ð³Ð¾Ð²Ñ‹Ñ… Ñ€Ð°ÑÑÑ‹Ð»Ð¾Ðº Ð½ÐµÑ‚. Ð§Ð°ÑÑ‚Ð¾Ñ‚Ð° ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ð¹ Ð·Ð°Ð²Ð¸ÑÐ¸Ñ‚ Ð¾Ñ‚ ÑÐ¸Ñ‚ÑƒÐ°Ñ†Ð¸Ð¸. ÐœÐ¾Ð³ÑƒÑ‚ Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÑÑ‚ÑŒÑÑ Ñ‚Ð°Ñ€Ð¸Ñ„Ñ‹ Ð¾Ð¿ÐµÑ€Ð°Ñ‚Ð¾Ñ€Ð°.',
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
        metaTitle: 'SMS Consent â€” Financial Stream LLC',
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
        rights: 'Â© 2026 Financial Stream LLC',
        privacy: 'Privacy Policy',
        terms: 'Terms & Conditions',
      sms: 'SMS Consent',
      },
    },

    ru: {
      nav: {
        
        home: 'Ð“Ð»Ð°Ð²Ð½Ð°Ñ',services: 'Ð£ÑÐ»ÑƒÐ³Ð¸',
        process: 'ÐŸÑ€Ð¾Ñ†ÐµÑÑ',
        faq: 'Ð’Ð¾Ð¿Ñ€Ð¾ÑÑ‹',
        contact: 'ÐšÐ¾Ð½Ñ‚Ð°ÐºÑ‚Ñ‹',
      },
      cta: {
        bookTop: '\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f',
        seeServices: '\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0438',
        ctaTitle: 'Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹ Ð½Ð°Ñ‡Ð°Ñ‚ÑŒ?',
        ctaText: 'Ð—Ð°Ð¿Ð¸ÑˆÐ¸Ñ‚ÐµÑÑŒ Ð½Ð° Ð±ÐµÑÐ¿Ð»Ð°Ñ‚Ð½ÑƒÑŽ ÐºÐ¾Ð½ÑÑƒÐ»ÑŒÑ‚Ð°Ñ†Ð¸ÑŽ Ð¸Ð»Ð¸ Ð¾Ñ‚Ð¿Ñ€Ð°Ð²ÑŒÑ‚Ðµ Ð·Ð°Ð¿Ñ€Ð¾Ñ â€” Ð¼Ñ‹ Ð¾Ñ‚Ð²ÐµÑ‚Ð¸Ð¼ Ð² Ð±Ð»Ð¸Ð¶Ð°Ð¹ÑˆÐµÐµ Ð²Ñ€ÐµÐ¼Ñ.',
        ctaButton: 'Ð—Ð°Ð¿Ð¸ÑÐ°Ñ‚ÑŒÑÑ Ð½Ð° Ð±ÐµÑÐ¿Ð»Ð°Ñ‚Ð½ÑƒÑŽ ÐºÐ¾Ð½ÑÑƒÐ»ÑŒÑ‚Ð°Ñ†Ð¸ÑŽ',
        sendRequest: 'ÐžÑ‚Ð¿Ñ€Ð°Ð²Ð¸Ñ‚ÑŒ',
        bookFooter: 'Ð—Ð°Ð¿Ð¸ÑÐ°Ñ‚ÑŒÑÑ Ð½Ð° Ð±ÐµÑÐ¿Ð»Ð°Ñ‚Ð½ÑƒÑŽ ÐºÐ¾Ð½ÑÑƒÐ»ÑŒÑ‚Ð°Ñ†Ð¸ÑŽ',
        bookMid: 'Ð—Ð°Ð¿Ð¸ÑÐ°Ñ‚ÑŒÑÑ Ð½Ð° Ð±ÐµÑÐ¿Ð»Ð°Ñ‚Ð½ÑƒÑŽ ÐºÐ¾Ð½ÑÑƒÐ»ÑŒÑ‚Ð°Ñ†Ð¸ÑŽ',
      },
      hero: {
        title1: 'Ð‘ÑƒÑ…Ð³Ð°Ð»Ñ‚ÐµÑ€Ð¸Ñ Ð¸ ÑƒÑ‡Ñ‘Ñ‚',
        title2: 'Ð´Ð»Ñ Ð¼Ð°Ð»Ð¾Ð³Ð¾ Ð±Ð¸Ð·Ð½ÐµÑÐ° Ð¸ Ñ‡Ð°ÑÑ‚Ð½Ñ‹Ñ… Ð»Ð¸Ñ†',
        subtitle: '\u0411\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440, bookkeeping, payroll \u0438 \u043d\u0430\u043b\u043e\u0433\u0438 \u0434\u043b\u044f \u043c\u0430\u043b\u043e\u0433\u043e \u0431\u0438\u0437\u043d\u0435\u0441\u0430 \u0432 \u0421\u0428\u0410.',
        body: 'ÐŸÐ¾Ð¼Ð¾Ð³Ð°ÐµÐ¼ Ð¼Ð°Ð»Ð¾Ð¼Ñƒ Ð±Ð¸Ð·Ð½ÐµÑÑƒ Ð¸ Ñ‡Ð°ÑÑ‚Ð½Ñ‹Ð¼ Ð»Ð¸Ñ†Ð°Ð¼ Ð² Ð¡Ð¨Ð Ñ Ð±ÑƒÑ…Ð³Ð°Ð»Ñ‚ÐµÑ€Ð¸ÐµÐ¹, Ð½Ð°Ð»Ð¾Ð³Ð°Ð¼Ð¸ Ð¸ Ð¾Ñ‚Ñ‡Ñ‘Ñ‚Ð½Ð¾ÑÑ‚ÑŒÑŽ: QuickBooks Online bookkeeping, Sales Tax (Ð½Ð°Ð»Ð¾Ð³ Ñ Ð¿Ñ€Ð¾Ð´Ð°Ð¶), payroll (Ð·Ð°Ñ€Ð¿Ð»Ð°Ñ‚Ð°), Ð¿Ð¾Ð´Ð³Ð¾Ñ‚Ð¾Ð²ÐºÐ° Ð¸ Ð¿Ð¾Ð´Ð°Ñ‡Ð° Ð½Ð°Ð»Ð¾Ð³Ð¾Ð²Ñ‹Ñ… Ð´ÐµÐºÐ»Ð°Ñ€Ð°Ñ†Ð¸Ð¹. Ð•ÑÐ»Ð¸ Ð²Ñ‹ Ð·Ð°Ð¿ÑƒÑÐºÐ°ÐµÑ‚Ðµ ÑƒÑ‡Ñ‘Ñ‚ Ñ Ð½ÑƒÐ»Ñ, Ñ…Ð¾Ñ‚Ð¸Ñ‚Ðµ Ð²Ð¾ÑÑÑ‚Ð°Ð½Ð¾Ð²Ð¸Ñ‚ÑŒ Ð¿Ñ€Ð¾ÑˆÐ»Ñ‹Ðµ Ð¿ÐµÑ€Ð¸Ð¾Ð´Ñ‹ (catch-up/cleanup) Ð¸Ð»Ð¸ Ð¿Ð¾Ð´Ð³Ð¾Ñ‚Ð¾Ð²Ð¸Ñ‚ÑŒÑÑ Ðº Ð¿Ð¾Ð´Ð°Ñ‡Ðµ Ð½Ð°Ð»Ð¾Ð³Ð¾Ð² Ð±ÐµÐ· ÑÑ‚Ñ€ÐµÑÑÐ°, Ð¼Ñ‹ Ð²Ñ‹ÑÑ‚Ñ€Ð¾Ð¸Ð¼ Ð¿Ð¾Ð½ÑÑ‚Ð½Ñ‹Ð¹ Ð¿Ð¾ÑˆÐ°Ð³Ð¾Ð²Ñ‹Ð¹ Ð¿Ñ€Ð¾Ñ†ÐµÑÑ Ð¸ Ð²Ð¾Ð·ÑŒÐ¼Ñ‘Ð¼ Ñ€ÑƒÑ‚Ð¸Ð½Ñƒ Ð½Ð° ÑÐµÐ±Ñ. Ð Ð°Ð±Ð¾Ñ‚Ð°ÐµÐ¼ ÑƒÐ´Ð°Ð»Ñ‘Ð½Ð½Ð¾ Ð¿Ð¾ Ð²ÑÐµÐ¹ Ñ‚ÐµÑ€Ñ€Ð¸Ñ‚Ð¾Ñ€Ð¸Ð¸ Ð¡Ð¨Ð, Ð½Ð° Ñ€ÑƒÑÑÐºÐ¾Ð¼ Ð¸ Ð°Ð½Ð³Ð»Ð¸Ð¹ÑÐºÐ¾Ð¼.',
        pillLang: 'Ð”Ð²ÑƒÑÐ·Ñ‹Ñ‡Ð½Ð¾: Ð°Ð½Ð³Ð»Ð¸Ð¹ÑÐºÐ¸Ð¹ / Ñ€ÑƒÑÑÐºÐ¸Ð¹',
        chip1: 'Ð‘Ñ‹ÑÑ‚Ñ€Ñ‹Ð¹ Ð¾Ñ‚Ð²ÐµÑ‚',
        chip2: 'Ð§Ð¸ÑÑ‚Ñ‹Ðµ ÐµÐ¶ÐµÐ¼ÐµÑÑÑ‡Ð½Ñ‹Ðµ Ð¾Ñ‚Ñ‡Ñ‘Ñ‚Ñ‹',
        chip3: 'Ð¤Ð¾ÐºÑƒÑ Ð½Ð° QuickBooks',
      },
      pill: {
        lang: 'Ð”Ð²Ð° ÑÐ·Ñ‹ÐºÐ°: ÐÐ½Ð³Ð»Ð¸Ð¹ÑÐºÐ¸Ð¹ / Ð ÑƒÑÑÐºÐ¸Ð¹',
      },
      badges: {
        response: 'Ð‘Ñ‹ÑÑ‚Ñ€Ñ‹Ð¹ Ð¾Ñ‚Ð²ÐµÑ‚',
        reports: 'ÐŸÐ¾Ð½ÑÑ‚Ð½Ñ‹Ðµ ÐµÐ¶ÐµÐ¼ÐµÑÑÑ‡Ð½Ñ‹Ðµ Ð¾Ñ‚Ñ‡ÐµÑ‚Ñ‹',
        us: 'Ð¤Ð¾ÐºÑƒÑ Ð½Ð° Ð¼Ð°Ð»Ð¾Ð¼ Ð±Ð¸Ð·Ð½ÐµÑÐµ Ð¡Ð¨Ð',
      },
      services: {
        title: 'ÐÐ°ÑˆÐ¸ ÑƒÑÐ»ÑƒÐ³Ð¸',
        subtitle: 'ÐŸÑ€Ð°ÐºÑ‚Ð¸Ñ‡Ð½Ð°Ñ Ð±ÑƒÑ…Ð³Ð°Ð»Ñ‚ÐµÑ€ÑÐºÐ°Ñ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶ÐºÐ° Ð´Ð»Ñ Ð¼Ð°Ð»Ð¾Ð³Ð¾ Ð±Ð¸Ð·Ð½ÐµÑÐ°: ÑÑ€Ð¾ÐºÐ¸ Ð¿Ð¾Ð´ ÐºÐ¾Ð½Ñ‚Ñ€Ð¾Ð»ÐµÐ¼, Ñ‡Ð¸ÑÑ‚Ñ‹Ð¹ ÑƒÑ‡Ñ‘Ñ‚ Ð¸ ÑÐ¿Ð¾ÐºÐ¾Ð¹Ð½Ð°Ñ Ð¿Ð¾Ð´Ð³Ð¾Ñ‚Ð¾Ð²ÐºÐ° Ðº Ð½Ð°Ð»Ð¾Ð³Ð°Ð¼.',
        more: 'ÐŸÐ¾Ð´Ñ€Ð¾Ð±Ð½ÐµÐµ',
        s1: { b1: 'Ð ÐµÐ³Ð¸ÑÑ‚Ñ€Ð°Ñ†Ð¸Ñ/Ð»Ð¸ÐºÐ²Ð¸Ð´Ð°Ñ†Ð¸Ñ ÐºÐ¾Ð¼Ð¿Ð°Ð½Ð¸Ð¸', b2: 'ÐŸÐ¾Ð»ÑƒÑ‡ÐµÐ½Ð¸Ðµ EIN', b3: 'ÐžÑ„Ð¾Ñ€Ð¼Ð»ÐµÐ½Ð¸Ðµ Ð±Ð¸Ð·Ð½ÐµÑÑ Ð»Ð¸Ñ†ÐµÐ½Ð·Ð¸Ð¸', b4: 'ÐžÑ„Ð¾Ñ€Ð¼Ð»ÐµÐ½Ð¸Ðµ Ð»Ð¸Ñ†ÐµÐ½Ð·Ð¸Ð¸ ÐºÐ¾Ð½Ñ‚Ñ€Ð°ÐºÑ‚Ð¾Ñ€Ð°' },
        s2: { b1: 'Ð’ÐµÐ´ÐµÐ½Ð¸Ðµ Ð±ÑƒÑ…Ð³Ð°Ð»Ñ‚ÐµÑ€ÑÐºÐ¾Ð³Ð¾ ÑƒÑ‡ÐµÑ‚Ð° Ð² QuickBooks. ÐŸÑ€Ð¾Ñ„ÐµÑÑÐ¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ð°Ñ ÐµÐ¶ÐµÐ¼ÐµÑÑÑ‡Ð½Ð°Ñ ÐºÐ°Ñ‚ÐµÐ³Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ñ.' },
        s3: { b1: 'ÐŸÐ¾Ð´Ð°Ñ‡Ð° ÐµÐ¶ÐµÐ¼ÐµÑÑÑ‡Ð½Ñ‹Ñ… Ð¸ ÐµÐ¶ÐµÐºÐ²Ð°Ñ€Ñ‚Ð°Ð»ÑŒÐ½Ñ‹Ñ… Ð¾Ñ‚Ñ‡ÐµÑ‚Ð¾Ð² Ð² Department of Revenue , Sales Tax filing.' },
        s4: { b1: 'Ð Ð°ÑÑ‡ÐµÑ‚ Ð·Ð°Ñ€Ð°Ð±Ð¾Ñ‚Ð½Ð¾Ð¹ Ð¿Ð»Ð°Ñ‚Ñ‹ Ð¸ Ð¿Ð¾Ð´Ð°Ñ‡Ð° ÐµÐ¶ÐµÐºÐ²Ð°Ñ€Ñ‚Ð°Ð»ÑŒÐ½Ñ‹Ñ… Ð¾Ñ‚Ñ‡ÐµÑ‚Ð¾Ð² Ð² Department L& I' },
        s5: { b1: 'ÐŸÐ¾Ð´Ð³Ð¾Ñ‚Ð¾Ð²ÐºÐ° Ð¸ Ð¿Ð¾Ð´Ð°Ñ‡Ð° Ð½Ð°Ð»Ð¾Ð³Ð¾Ð²Ñ‹Ñ… Ð´ÐµÐºÐ»Ð°Ñ€Ð°Ñ†Ð¸Ð¹ Ð´Ð»Ñ Ð±Ð¸Ð·Ð½ÐµÑÑÐ° Ð¸ Ñ‡Ð°ÑÑ‚Ð½Ñ‹Ñ… Ð»Ð¸Ñ†.' },
        s6: { b1: 'ÐÐ½Ð°Ð»Ð¸Ð· Ð¸ ÐºÐ¾Ð½ÑÑƒÐ»ÑŒÑ‚Ð°Ñ†Ð¸Ñ Ð² Ñ„Ð¸Ð½Ð°Ð½ÑÐ¾Ð²Ñ‹Ñ… Ð²Ð¾Ð¿Ñ€Ð¾ÑÐ°Ñ… Ð¸ Ð´Ð¾ÐºÑƒÐ¼ÐµÐ½Ñ‚Ð°Ñ….' },
      },
      process: {
        title: 'ÐšÐ°Ðº Ð¼Ñ‹ Ñ€Ð°Ð±Ð¾Ñ‚Ð°ÐµÐ¼',
        subtitle: 'ÐœÑ‹ Ð´ÐµÐ»Ð°ÐµÐ¼ ÑÐ²Ð¾ÑŽ Ñ€Ð°Ð±Ð¾Ñ‚Ñƒ Ð±Ñ‹ÑÑ‚Ñ€Ð¾, ÐºÐ°Ñ‡ÐµÑÑ‚Ð²ÐµÐ½Ð½Ð¾ Ð¸ Ð¿Ñ€Ð¾Ñ„ÐµÑÑÐ¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ð¾.',
        p1: {
          title: 'Ð‘ÐµÑÐ¿Ð»Ð°Ñ‚Ð½Ð°Ñ ÐºÐ¾Ð½ÑÑƒÐ»ÑŒÑ‚Ð°Ñ†Ð¸Ñ',
          text: 'Ð Ð°Ð·Ð±Ð¸Ñ€Ð°ÐµÐ¼ Ð²Ð°ÑˆÑƒ ÑÐ¸Ñ‚ÑƒÐ°Ñ†Ð¸ÑŽ Ð¸ ÑÐ¾Ð³Ð»Ð°ÑÑƒÐµÐ¼ Ð¾Ð±ÑŠÐµÐ¼ Ñ€Ð°Ð±Ð¾Ñ‚.',
        },
        p2: {
          title: 'Ð‘ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ñ‹Ð¹ ÑÑ‚Ð°Ñ€Ñ‚',
          text: 'Ð¡Ð¾Ð±Ð¸Ñ€Ð°ÐµÐ¼ Ð´Ð¾ÑÑ‚ÑƒÐ¿Ñ‹ Ð¸ Ð´Ð¾ÐºÑƒÐ¼ÐµÐ½Ñ‚Ñ‹ Ð¿Ð¾ Ð¿Ð¾Ð½ÑÑ‚Ð½Ñ‹Ð¼ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐºÑ†Ð¸ÑÐ¼.',
        },
        p3: {
          title: 'Ð•Ð¶ÐµÐ¼ÐµÑÑÑ‡Ð½Ð¾Ðµ Ð·Ð°ÐºÑ€Ñ‹Ñ‚Ð¸Ðµ',
          text: 'Ð¡Ð²ÐµÑ€ÐºÐ¸ Ð¸ Ð¿Ð¾Ñ€ÑÐ´Ð¾Ðº â€” ÑÑ‚Ð°Ð±Ð¸Ð»ÑŒÐ½Ð¾ Ð¸ Ð² ÑÑ€Ð¾Ðº.',
        },
      },
      reviews: {
        title: 'ÐžÑ‚Ð·Ñ‹Ð²Ñ‹ ÐºÐ»Ð¸ÐµÐ½Ñ‚Ð¾Ð²',
        subtitle: 'ÐÐ°Ð¼ Ð´Ð¾Ð²ÐµÑ€ÑÑŽÑ‚ ÑÐ¾Ñ‚Ð½Ð¸ ÐºÐ»Ð¸ÐµÐ½Ñ‚Ð¾Ð² â€” Ð²Ð¾Ñ‚ Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾ ÐºÐ¾Ñ€Ð¾Ñ‚ÐºÐ¸Ñ… Ð¾Ñ‚Ð·Ñ‹Ð²Ð¾Ð².',
        r1: { text: '"ÐŸÑ€Ð¸ÑˆÐ»Ð¸ Ñ Ð·Ð°Ð¿ÑƒÑ‰ÐµÐ½Ð½Ñ‹Ð¼ ÑƒÑ‡ÐµÑ‚Ð¾Ð¼ Ð¸ Ð½ÐµÐ¿Ð¾Ð½ÑÑ‚Ð½Ñ‹Ð¼Ð¸ Ñ†Ð¸Ñ„Ñ€Ð°Ð¼Ð¸. ÐšÐ¾Ð¼Ð°Ð½Ð´Ð° Ð²ÑÐµ Ð°ÐºÐºÑƒÑ€Ð°Ñ‚Ð½Ð¾ Ð²Ð¾ÑÑÑ‚Ð°Ð½Ð¾Ð²Ð¸Ð»Ð°, Ð¾Ð±ÑŠÑÑÐ½Ð¸Ð»Ð° Ð¾Ñ‚Ñ‡ÐµÑ‚Ñ‹ Ð¿Ñ€Ð¾ÑÑ‚Ñ‹Ð¼ ÑÐ·Ñ‹ÐºÐ¾Ð¼ Ð¸ Ð²Ñ‹ÑÑ‚Ñ€Ð¾Ð¸Ð»Ð° Ð¿Ð¾Ð½ÑÑ‚Ð½Ñ‹Ð¹ ÐµÐ¶ÐµÐ¼ÐµÑÑÑ‡Ð½Ñ‹Ð¹ Ð¿Ñ€Ð¾Ñ†ÐµÑÑ."', name: 'ÐÐ»ÐµÐºÑÐµÐ¹' },
        r2: { text: '"ÐžÑ‡ÐµÐ½ÑŒ ÑÐ¸Ð»ÑŒÐ½Ð°Ñ ÐºÐ¾Ð¼Ð¼ÑƒÐ½Ð¸ÐºÐ°Ñ†Ð¸Ñ: Ð²ÑÐµÐ³Ð´Ð° Ð¿Ð¾Ð½ÑÑ‚Ð½Ð¾, Ñ‡Ñ‚Ð¾ ÑƒÐ¶Ðµ ÑÐ´ÐµÐ»Ð°Ð½Ð¾, Ñ‡Ñ‚Ð¾ Ð² Ñ€Ð°Ð±Ð¾Ñ‚Ðµ Ð¸ ÐºÐ°ÐºÐ¸Ðµ Ð´Ð¾ÐºÑƒÐ¼ÐµÐ½Ñ‚Ñ‹ Ð½ÑƒÐ¶Ð½Ñ‹ Ð´Ð°Ð»ÑŒÑˆÐµ. Ð—Ð° ÑÑ‡ÐµÑ‚ ÑÑ‚Ð¾Ð³Ð¾ ÑÑ‚Ð°Ð»Ð¾ Ð³Ð¾Ñ€Ð°Ð·Ð´Ð¾ ÑÐ¿Ð¾ÐºÐ¾Ð¹Ð½ÐµÐµ ÑƒÐ¿Ñ€Ð°Ð²Ð»ÑÑ‚ÑŒ Ð±Ð¸Ð·Ð½ÐµÑÐ¾Ð¼."', name: 'ÐžÐ»ÑŒÐ³Ð°' },
        r3: { text: '"Ð˜ÑÐ¿Ñ€Ð°Ð²Ð¸Ð»Ð¸ Ð¾ÑˆÐ¸Ð±ÐºÐ¸ Ð¿Ð¾ÑÐ»Ðµ Ð¿Ñ€ÐµÐ´Ñ‹Ð´ÑƒÑ‰ÐµÐ³Ð¾ Ð±ÑƒÑ…Ð³Ð°Ð»Ñ‚ÐµÑ€Ð°, Ð¿Ñ€Ð°Ð²Ð¸Ð»ÑŒÐ½Ð¾ Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¸Ð»Ð¸ QuickBooks Ð¸ ÑÐ²ÑÐ·Ð°Ð»Ð¸ ÑƒÑ‡ÐµÑ‚ Ñ Ð½Ð°Ð»Ð¾Ð³Ð¾Ð²Ð¾Ð¹ Ð¿Ð¾Ð´Ð³Ð¾Ñ‚Ð¾Ð²ÐºÐ¾Ð¹. Ð’ ÑÐµÐ·Ð¾Ð½ Ð¿Ð¾Ð´Ð°Ñ‡Ð¸ ÑÑ‚Ð°Ð»Ð¾ Ð½Ð°Ð¼Ð½Ð¾Ð³Ð¾ Ð¿Ñ€Ð¾Ñ‰Ðµ."', name: 'Ð¡Ð²ÐµÑ‚Ð»Ð°Ð½Ð°' },
        r4: { text: '"ÐŸÑ€Ð¾Ñ„ÐµÑÑÐ¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ð¹ Ð¿Ð¾Ð´Ñ…Ð¾Ð´ Ð¸ Ð±Ñ‹ÑÑ‚Ñ€Ñ‹Ðµ Ð¾Ñ‚Ð²ÐµÑ‚Ñ‹ Ð¿Ð¾ Ð´ÐµÐ»Ñƒ. Ð•Ð¶ÐµÐ¼ÐµÑÑÑ‡Ð½Ñ‹Ðµ Ð¾Ñ‚Ñ‡ÐµÑ‚Ñ‹ Ñ‚ÐµÐ¿ÐµÑ€ÑŒ Ñ‡Ð¸ÑÑ‚Ñ‹Ðµ, Ð° Ð²Ð¾Ð¿Ñ€Ð¾ÑÑ‹ Ð¿Ð¾ payroll Ð¸ sales tax Ð·Ð°ÐºÑ€Ñ‹Ð²Ð°ÑŽÑ‚ÑÑ Ð±ÐµÐ· Ñ…Ð°Ð¾ÑÐ° Ð¸ ÑÐ¿ÐµÑˆÐºÐ¸."', name: 'Ð’Ð¸ÐºÑ‚Ð¾Ñ€' },
        r5: { text: '"ÐšÐ°Ðº Ð²Ð»Ð°Ð´ÐµÐ»ÑŒÑ†Ñƒ Ð±Ð¸Ð·Ð½ÐµÑÐ° Ð² Ð¡Ð¨Ð, Ð¼Ð½Ðµ Ð±Ñ‹Ð»Ð° Ð²Ð°Ð¶Ð½Ð° Ð½Ð°Ð´ÐµÐ¶Ð½Ð¾ÑÑ‚ÑŒ Ð¸ Ð¿Ñ€ÐµÐ´ÑÐºÐ°Ð·ÑƒÐµÐ¼Ð¾ÑÑ‚ÑŒ. Ð Ð°Ð±Ð¾Ñ‚Ð°ÑŽÑ‚ ÑÑ‚Ð°Ð±Ð¸Ð»ÑŒÐ½Ð¾, Ð²Ð½Ð¸Ð¼Ð°Ñ‚ÐµÐ»ÑŒÐ½Ð¾ Ðº Ð´ÐµÑ‚Ð°Ð»ÑÐ¼ Ð¸ Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾ Ð´ÐµÑ€Ð¶Ð°Ñ‚ Ð¿Ñ€Ð¾Ñ†ÐµÑÑ Ð¿Ð¾Ð´ ÐºÐ¾Ð½Ñ‚Ñ€Ð¾Ð»ÐµÐ¼."', name: 'Ð¡Ñ‚Ð¸Ð²' },
      },
monthly: {
      title: 'Ð§Ñ‚Ð¾ Ð²Ñ‹ Ð¿Ð¾Ð»ÑƒÑ‡Ð°ÐµÑ‚Ðµ ÐºÐ°Ð¶Ð´Ñ‹Ð¹ Ð¼ÐµÑÑÑ†',
      b1: 'Ð¡Ð²ÐµÑ€ÐµÐ½Ð½Ñ‹Ðµ Ð±Ð°Ð½ÐºÐ¾Ð²ÑÐºÐ¸Ðµ ÑÑ‡ÐµÑ‚Ð° Ð¸ ÐºÐ°Ñ€Ñ‚Ñ‹',
      b2: 'Ð§Ð¸ÑÑ‚Ð°Ñ ÐºÐ°Ñ‚ÐµÐ³Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ñ Ð² QuickBooks Online',
      b3: 'P&L Ð¸ Balance Sheet ÐºÐ°Ð¶Ð´Ñ‹Ð¹ Ð¼ÐµÑÑÑ†',
      b4: 'ÐŸÐ¾ÑÑÐ½ÐµÐ½Ð¸Ñ: Ñ‡Ñ‚Ð¾ Ð¸Ð·Ð¼ÐµÐ½Ð¸Ð»Ð¾ÑÑŒ Ð¸ Ð½Ð° Ñ‡Ñ‚Ð¾ Ð¾Ð±Ñ€Ð°Ñ‚Ð¸Ñ‚ÑŒ Ð²Ð½Ð¸Ð¼Ð°Ð½Ð¸Ðµ',
      b5: 'Ð‘Ñ‹ÑÑ‚Ñ€Ñ‹Ðµ Ð¾Ñ‚Ð²ÐµÑ‚Ñ‹ Ð½Ð° Ð²Ð¾Ð¿Ñ€Ð¾ÑÑ‹ Ð¿Ð¾ ÑƒÑ‡Ñ‘Ñ‚Ñƒ',
      },
      
      faq: {
        title: 'Ð’Ð¾Ð¿Ñ€Ð¾ÑÑ‹ Ð¸ Ð¾Ñ‚Ð²ÐµÑ‚Ñ‹',
        subtitle: 'ÐšÐ¾Ñ€Ð¾Ñ‚ÐºÐ¾ Ð¾Ñ‚Ð²ÐµÑ‡Ð°ÐµÐ¼ Ð½Ð° ÑÐ°Ð¼Ñ‹Ðµ Ñ‡Ð°ÑÑ‚Ñ‹Ðµ Ð²Ð¾Ð¿Ñ€Ð¾ÑÑ‹.',
        q1: { q: 'Ð§Ñ‚Ð¾ Ð½ÑƒÐ¶Ð½Ð¾ Ð¾Ñ‚ Ð¼ÐµÐ½Ñ, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð½Ð°Ñ‡Ð°Ñ‚ÑŒ?', a: 'ÐœÑ‹ ÑƒÑ‚Ð¾Ñ‡Ð½Ð¸Ð¼ Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾ Ð²Ð¾Ð¿Ñ€Ð¾ÑÐ¾Ð² Ð¸ Ð·Ð°Ð¿Ñ€Ð¾ÑÐ¸Ð¼ Ð´Ð¾ÑÑ‚ÑƒÐ¿ Ðº Ð±ÑƒÑ…Ð³Ð°Ð»Ñ‚ÐµÑ€ÑÐºÐ¾Ð¹ ÑÐ¸ÑÑ‚ÐµÐ¼Ðµ Ð¸ ÐºÐ»ÑŽÑ‡ÐµÐ²Ñ‹Ðµ Ð´Ð¾ÐºÑƒÐ¼ÐµÐ½Ñ‚Ñ‹.' },
        q2: { q: 'ÐÑƒÐ¶Ð½Ð¾ Ð»Ð¸ Ð¿Ñ€Ð¸ÐµÐ·Ð¶Ð°Ñ‚ÑŒ Ðº Ð²Ð°Ð¼ Ð² Ð¾Ñ„Ð¸Ñ Ð»Ð¸Ñ‡Ð½Ð¾?', a: 'ÐÐµÑ‚. ÐœÑ‹ Ð¼Ð¾Ð¶ÐµÐ¼ Ñ€Ð°Ð±Ð¾Ñ‚Ð°Ñ‚ÑŒ Ð¿Ð¾Ð»Ð½Ð¾ÑÑ‚ÑŒÑŽ Ð¾Ð½Ð»Ð°Ð¹Ð½ Ð¸Ð»Ð¸ Ð¿Ð¾ Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½Ñƒ â€” Ð¿Ñ€Ð¸ÐµÐ·Ð¶Ð°Ñ‚ÑŒ Ð½Ðµ Ð½ÑƒÐ¶Ð½Ð¾. Ð Ð°Ð±Ð¾Ñ‚Ð°ÐµÐ¼ Ñ ÐºÐ»Ð¸ÐµÐ½Ñ‚Ð°Ð¼Ð¸ Ð¿Ð¾ Ð²ÑÐµÐ¹ Ð¡Ð¨Ð.' },
        q3: { q: 'Ð’Ñ‹ Ñ€Ð°Ð±Ð¾Ñ‚Ð°ÐµÑ‚Ðµ Ñ QuickBooks Online?', a: 'Ð”Ð°. QuickBooks Online â€” Ð½Ð°ÑˆÐ° Ð¾ÑÐ½Ð¾Ð²Ð½Ð°Ñ Ð¿Ð»Ð°Ñ‚Ñ„Ð¾Ñ€Ð¼Ð°, Ð¸ Ð¼Ñ‹ Ð¿Ð¾Ð¼Ð¾Ð¶ÐµÐ¼ Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¸Ñ‚ÑŒ Ð²ÑÑ‘ Ð¿Ñ€Ð°Ð²Ð¸Ð»ÑŒÐ½Ð¾.' },
        q4: { q: 'ÐœÐ¾Ð¶ÐµÑ‚Ðµ Ð²Ð¾ÑÑÑ‚Ð°Ð½Ð¾Ð²Ð¸Ñ‚ÑŒ ÑƒÑ‡Ñ‘Ñ‚ Ð·Ð° Ð¿Ñ€Ð¾ÑˆÐ»Ñ‹Ðµ Ð¼ÐµÑÑÑ†Ñ‹?', a: 'Ð”Ð°. ÐœÑ‹ ÑÐ´ÐµÐ»Ð°ÐµÐ¼ catch-up, Ð¸ÑÐ¿Ñ€Ð°Ð²Ð¸Ð¼ ÐºÐ°Ñ‚ÐµÐ³Ð¾Ñ€Ð¸Ð¸ Ð¸ Ð¿ÐµÑ€ÐµÐ²ÐµÐ´Ñ‘Ð¼ Ð½Ð° ÑÑ‚Ð°Ð±Ð¸Ð»ÑŒÐ½Ñ‹Ð¹ ÐµÐ¶ÐµÐ¼ÐµÑÑÑ‡Ð½Ñ‹Ð¹ Ð¿Ñ€Ð¾Ñ†ÐµÑÑ.' },
        q5: { q: 'Ð’Ñ‹ Ð¿Ð¾Ð¼Ð¾Ð³Ð°ÐµÑ‚Ðµ Ñ sales tax?', a: 'Ð”Ð°. ÐŸÐ¾Ð¼Ð¾Ð³Ð°ÐµÐ¼ Ñ ÑƒÑ‡Ñ‘Ñ‚Ð¾Ð¼, Ð¿Ð¾Ð´Ð°Ñ‡ÐµÐ¹ Ð¸ ÑƒÐ²ÐµÐ´Ð¾Ð¼Ð»ÐµÐ½Ð¸ÑÐ¼Ð¸ Ð¿Ð¾ Ð²Ð°ÑˆÐµÐ¼Ñƒ ÑˆÑ‚Ð°Ñ‚Ñƒ.' },
        q6: { q: 'ÐŸÐ¾Ð¼Ð¾Ð³Ð°ÐµÑ‚Ðµ Ð¿Ð¾ Ð²Ð¾Ð¿Ñ€Ð¾ÑÐ°Ð¼ Ð´ÐµÐ¿Ð°Ñ€Ñ‚Ð°Ð¼ÐµÐ½Ñ‚Ð¾Ð² ÑˆÑ‚Ð°Ñ‚Ð° (Ð½Ð°Ð»Ð¾Ð³Ð¸/Ñ‚Ñ€ÑƒÐ´)?', a: 'Ð”Ð°. ÐžÑ‚Ñ‡Ñ‘Ñ‚Ð½Ð¾ÑÑ‚ÑŒ, ÑƒÐ²ÐµÐ´Ð¾Ð¼Ð»ÐµÐ½Ð¸Ñ, Ð´Ð¾ÐºÑƒÐ¼ÐµÐ½Ñ‚Ñ‹ Ð¸ ÐºÐ¾Ð¼Ð¼ÑƒÐ½Ð¸ÐºÐ°Ñ†Ð¸Ñ â€” Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð²Ñ‹ ÑÐ¾Ð±Ð»ÑŽÐ´Ð°Ð»Ð¸ Ñ‚Ñ€ÐµÐ±Ð¾Ð²Ð°Ð½Ð¸Ñ.' },
        q7: { q: 'Ð’Ñ‹ Ð´ÐµÐ»Ð°ÐµÑ‚Ðµ Ð½Ð°Ð»Ð¾Ð³Ð¸?', a: 'Ð”Ð°. Ð“Ð¾Ñ‚Ð¾Ð²Ð¸Ð¼ Ð¸ Ð¿Ð¾Ð´Ð°Ñ‘Ð¼ Ð±Ð¸Ð·Ð½ÐµÑ- Ð¸ Ð»Ð¸Ñ‡Ð½Ñ‹Ðµ Ð´ÐµÐºÐ»Ð°Ñ€Ð°Ñ†Ð¸Ð¸ Ð¸ Ð¿Ð¾Ð¼Ð¾Ð³Ð°ÐµÐ¼ Ð´ÐµÑ€Ð¶Ð°Ñ‚ÑŒ Ð´Ð¾ÐºÑƒÐ¼ÐµÐ½Ñ‚Ñ‹ Ð² Ð¿Ð¾Ñ€ÑÐ´ÐºÐµ Ð²ÐµÑÑŒ Ð³Ð¾Ð´.' },
        q8: { q: 'ÐšÐ°Ðº Ð±Ñ‹ÑÑ‚Ñ€Ð¾ Ð²Ñ‹ Ð¾Ñ‚Ð²ÐµÑ‡Ð°ÐµÑ‚Ðµ?', a: 'ÐžÐ±Ñ‹Ñ‡Ð½Ð¾ Ð² Ñ‚ÐµÑ‡ÐµÐ½Ð¸Ðµ 1 Ñ€Ð°Ð±Ð¾Ñ‡ÐµÐ³Ð¾ Ð´Ð½Ñ. Ð¡Ð»Ð¾Ð¶Ð½Ñ‹Ðµ ÑÐ»ÑƒÑ‡Ð°Ð¸ Ð¼Ð¾Ð³ÑƒÑ‚ Ð·Ð°Ð½ÑÑ‚ÑŒ Ð±Ð¾Ð»ÑŒÑˆÐµ Ð²Ñ€ÐµÐ¼ÐµÐ½Ð¸ â€” Ð¼Ñ‹ Ð±ÑƒÐ´ÐµÐ¼ Ð´ÐµÑ€Ð¶Ð°Ñ‚ÑŒ Ð²Ð°Ñ Ð² ÐºÑƒÑ€ÑÐµ.' },
        q9: { q: 'Ð¡ÐºÐ¾Ð»ÑŒÐºÐ¾ ÑÑ‚Ð¾ ÑÑ‚Ð¾Ð¸Ñ‚?', a: 'Ð¡Ñ‚Ð¾Ð¸Ð¼Ð¾ÑÑ‚ÑŒ Ð·Ð°Ð²Ð¸ÑÐ¸Ñ‚ Ð¾Ñ‚ Ð¾Ð±ÑŠÑ‘Ð¼Ð° Ð¸ ÑÐ»Ð¾Ð¶Ð½Ð¾ÑÑ‚Ð¸. ÐœÑ‹ Ð´Ð°Ð´Ð¸Ð¼ Ñ€Ð°ÑÑ‡Ñ‘Ñ‚ Ð¿Ð¾ÑÐ»Ðµ ÐºÐ¾Ñ€Ð¾Ñ‚ÐºÐ¾Ð³Ð¾ ÑÐ¾Ð·Ð²Ð¾Ð½Ð°.' },
      },
      contact: {
        title: 'ÐšÐ¾Ð½Ñ‚Ð°ÐºÑ‚Ñ‹',
        subtitle: '\u041e\u043f\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u0437\u0430\u0434\u0430\u0447\u0443 \u0438 \u0441\u0440\u043e\u043a\u0438 â€” \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0448\u0430\u0433.',
        formTitle: 'Ð—Ð°Ð¿Ð¸ÑÐ°Ñ‚ÑŒÑÑ Ð½Ð° Ð±ÐµÑÐ¿Ð»Ð°Ñ‚Ð½ÑƒÑŽ ÐºÐ¾Ð½ÑÑƒÐ»ÑŒÑ‚Ð°Ñ†Ð¸ÑŽ Ð¸Ð»Ð¸ Ð·Ð°Ð´Ð°Ñ‚ÑŒ Ð²Ð¾Ð¿Ñ€Ð¾Ñ',
        formSub: 'Ð—Ð°Ð´Ð°Ñ‚ÑŒ Ð²Ð¾Ð¿Ñ€Ð¾Ñ â€” Ð¼Ñ‹ Ð¾Ñ‚Ð²ÐµÑ‚Ð¸Ð¼ Ð² Ð±Ð»Ð¸Ð¶Ð°Ð¹ÑˆÐµÐµ Ð²Ñ€ÐµÐ¼Ñ.',
        phone: 'Ð¢ÐµÐ»ÐµÑ„Ð¾Ð½',
        email: 'Email',
        website: 'Ð¡Ð°Ð¹Ñ‚',
      
        location: 'Ð›Ð¾ÐºÐ°Ñ†Ð¸Ñ',
        locationValue: 'Ð Ð°Ð±Ð¾Ñ‚Ð°ÐµÐ¼ Ñ ÐºÐ»Ð¸ÐµÐ½Ñ‚Ð°Ð¼Ð¸ Ð¾Ð½Ð»Ð°Ð¹Ð½ Ð¿Ð¾ Ð²ÑÐµÐ¹ Ñ‚ÐµÑ€Ñ€Ð¸Ñ‚Ð¾Ñ€Ð¸Ð¸ Ð¡Ð¨Ð. Ð‘Ð°Ð·Ð¸Ñ€ÑƒÐµÐ¼ÑÑ Ð² Federal Way, Washington.',},
      form: {
        success: 'Ð¡Ð¿Ð°ÑÐ¸Ð±Ð¾ â€” Ð²Ð°Ñˆ Ð·Ð°Ð¿Ñ€Ð¾Ñ Ð¾Ñ‚Ð¿Ñ€Ð°Ð²Ð»ÐµÐ½.',
        nameLabel: 'Ð˜Ð¼Ñ',
        phoneLabel: 'Ð¢ÐµÐ»ÐµÑ„Ð¾Ð½',
        emailLabel: 'Email',
        messageLabel: 'Ð¡Ð¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ðµ',
        namePlaceholder: 'Ð’Ð°ÑˆÐµ Ð¸Ð¼Ñ',
        phonePlaceholder: 'Ð¢ÐµÐ»ÐµÑ„Ð¾Ð½ (Ð½ÐµÐ¾Ð±ÑÐ·Ð°Ñ‚ÐµÐ»ÑŒÐ½Ð¾)',
        emailPlaceholder: 'Email',
        messagePlaceholder: 'Ð§ÐµÐ¼ Ð¼Ñ‹ Ð¼Ð¾Ð¶ÐµÐ¼ Ð¿Ð¾Ð¼Ð¾Ñ‡ÑŒ?',
        thanksTitle: 'Ð¡Ð¿Ð°ÑÐ¸Ð±Ð¾!',
        thanksBody: 'Ð’Ð°Ñˆ Ð·Ð°Ð¿Ñ€Ð¾Ñ Ð¾Ñ‚Ð¿Ñ€Ð°Ð²Ð»ÐµÐ½. ÐœÑ‹ ÑÐ²ÑÐ¶ÐµÐ¼ÑÑ Ñ Ð²Ð°Ð¼Ð¸ Ð² Ð±Ð»Ð¸Ð¶Ð°Ð¹ÑˆÐµÐµ Ð²Ñ€ÐµÐ¼Ñ.',
      optional: 'ÐÐµÐ¾Ð±ÑÐ·Ð°Ñ‚ÐµÐ»ÑŒÐ½Ð¾:',
        details: 'ÐŸÐ¾Ð´Ñ€Ð¾Ð±Ð½ÐµÐµ:',
        smsConsentLabel: 'Ð¯ ÑÐ¾Ð³Ð»Ð°ÑÐµÐ½(Ð½Ð°), Ñ‡Ñ‚Ð¾ Financial Stream LLC Ð¼Ð¾Ð¶ÐµÑ‚ Ð¾Ñ‚Ð¿Ñ€Ð°Ð²Ð¸Ñ‚ÑŒ Ð¼Ð½Ðµ SMS Ð¿Ð¾ Ð¼Ð¾ÐµÐ¼Ñƒ Ð¾Ð±Ñ€Ð°Ñ‰ÐµÐ½Ð¸ÑŽ Ð¸Ð»Ð¸ Ð¿Ñ€Ð¸ Ð¿Ñ€Ð¾Ð¿ÑƒÑ‰ÐµÐ½Ð½Ð¾Ð¼ Ð·Ð²Ð¾Ð½ÐºÐµ (Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ð¿Ð¾ Ð²Ð¾Ð¿Ñ€Ð¾ÑÐ°Ð¼ ÑÐµÑ€Ð²Ð¸ÑÐ°). Ð§Ð°ÑÑ‚Ð¾Ñ‚Ð° ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ð¹ Ð·Ð°Ð²Ð¸ÑÐ¸Ñ‚ Ð¾Ñ‚ ÑÐ¸Ñ‚ÑƒÐ°Ñ†Ð¸Ð¸. ÐœÐ¾Ð³ÑƒÑ‚ Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÑÑ‚ÑŒÑÑ Ñ‚Ð°Ñ€Ð¸Ñ„Ñ‹ Ð¾Ð¿ÐµÑ€Ð°Ñ‚Ð¾Ñ€Ð°. STOP â€” Ð¾Ñ‚ÐºÐ°Ð·, HELP â€” Ð¿Ð¾Ð¼Ð¾Ñ‰ÑŒ.',
        ackPrefix: 'ÐžÑ‚Ð¿Ñ€Ð°Ð²Ð»ÑÑ Ñ„Ð¾Ñ€Ð¼Ñƒ, Ð²Ñ‹ Ð¿Ð¾Ð´Ñ‚Ð²ÐµÑ€Ð¶Ð´Ð°ÐµÑ‚Ðµ Ð¾Ð·Ð½Ð°ÐºÐ¾Ð¼Ð»ÐµÐ½Ð¸Ðµ Ñ',
        ackAnd: 'Ð¸',
        smsConsentHint: 'ÐžÑ‚Ð¿Ñ€Ð°Ð²Ð»ÑÑ Ñ„Ð¾Ñ€Ð¼Ñƒ, Ð²Ñ‹ Ð¿Ð¾Ð´Ñ‚Ð²ÐµÑ€Ð¶Ð´Ð°ÐµÑ‚Ðµ Ð¾Ð·Ð½Ð°ÐºÐ¾Ð¼Ð»ÐµÐ½Ð¸Ðµ Ñ ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ¾Ð¹ ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸ Ð¸ Ð£ÑÐ»Ð¾Ð²Ð¸ÑÐ¼Ð¸.',
      },
      
      policyPrivacy: {
        metaTitle: 'ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸ â€” Financial Stream LLC',
        h1: 'ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸',
        updated: 'ÐŸÐ¾ÑÐ»ÐµÐ´Ð½ÐµÐµ Ð¾Ð±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ðµ: 2026-02-08',
        intro: 'Financial Stream LLC ÑƒÐ²Ð°Ð¶Ð°ÐµÑ‚ Ð²Ð°ÑˆÑƒ ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚ÑŒ. Ð’ ÑÑ‚Ð¾Ð¹ Ð¿Ð¾Ð»Ð¸Ñ‚Ð¸ÐºÐµ Ð¾Ð¿Ð¸ÑÐ°Ð½Ð¾, ÐºÐ°ÐºÐ¸Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ Ð¼Ñ‹ ÑÐ¾Ð±Ð¸Ñ€Ð°ÐµÐ¼, ÐºÐ°Ðº Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÐ¼ Ð¸Ñ… Ð¸ ÐºÐ°ÐºÐ¸Ðµ Ñƒ Ð²Ð°Ñ ÐµÑÑ‚ÑŒ Ð²Ð°Ñ€Ð¸Ð°Ð½Ñ‚Ñ‹ Ð²Ñ‹Ð±Ð¾Ñ€Ð°.',
        collectTitle: 'ÐšÐ°ÐºÐ¸Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ Ð¼Ñ‹ ÑÐ¾Ð±Ð¸Ñ€Ð°ÐµÐ¼',
        collect1: 'ÐšÐ¾Ð½Ñ‚Ð°ÐºÑ‚Ð½Ñ‹Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ Ð²Ñ‹ Ð¾Ñ‚Ð¿Ñ€Ð°Ð²Ð»ÑÐµÑ‚Ðµ (Ð½Ð°Ð¿Ñ€Ð¸Ð¼ÐµÑ€: Ð¸Ð¼Ñ, Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½, email Ð¸ ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ðµ).',
        collect2: 'Ð”Ð°Ð½Ð½Ñ‹Ðµ Ð¾ Ð±Ð¸Ð·Ð½ÐµÑÐµ, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ Ð²Ñ‹ Ð´Ð¾Ð±Ñ€Ð¾Ð²Ð¾Ð»ÑŒÐ½Ð¾ Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²Ð»ÑÐµÑ‚Ðµ Ð´Ð»Ñ Ð·Ð°Ð¿Ñ€Ð¾ÑÐ° Ð±ÑƒÑ…Ð³Ð°Ð»Ñ‚ÐµÑ€ÑÐºÐ¸Ñ…, Ð½Ð°Ð»Ð¾Ð³Ð¾Ð²Ñ‹Ñ… Ð¸Ð»Ð¸ Ð°Ð´Ð¼Ð¸Ð½Ð¸ÑÑ‚Ñ€Ð°Ñ‚Ð¸Ð²Ð½Ñ‹Ñ… ÑƒÑÐ»ÑƒÐ³.',
        collect3: 'Ð‘Ð°Ð·Ð¾Ð²Ñ‹Ðµ Ñ‚ÐµÑ…Ð½Ð¸Ñ‡ÐµÑÐºÐ¸Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ (Ð½Ð°Ð¿Ñ€Ð¸Ð¼ÐµÑ€ Ð¿Ð¾ÑÐµÑ‰Ñ‘Ð½Ð½Ñ‹Ðµ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñ‹) Ð´Ð»Ñ Ñ€Ð°Ð±Ð¾Ñ‚Ñ‹ ÑÐ°Ð¹Ñ‚Ð° Ð¸ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸.',
        useTitle: 'ÐšÐ°Ðº Ð¼Ñ‹ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÐ¼ Ð´Ð°Ð½Ð½Ñ‹Ðµ',
        use1: 'Ð§Ñ‚Ð¾Ð±Ñ‹ Ð¾Ñ‚Ð²ÐµÑ‡Ð°Ñ‚ÑŒ Ð½Ð° Ð·Ð°Ð¿Ñ€Ð¾ÑÑ‹ Ð¸ Ð¾ÐºÐ°Ð·Ñ‹Ð²Ð°Ñ‚ÑŒ ÑÐµÑ€Ð²Ð¸ÑÐ½ÑƒÑŽ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶ÐºÑƒ.',
        use2: 'Ð§Ñ‚Ð¾Ð±Ñ‹ Ð¾Ñ‚Ð¿Ñ€Ð°Ð²Ð»ÑÑ‚ÑŒ ÑÐµÑ€Ð²Ð¸ÑÐ½Ñ‹Ðµ Ð¾Ð±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ñ Ð¸ Ð½Ð°Ð¿Ð¾Ð¼Ð¸Ð½Ð°Ð½Ð¸Ñ Ð¿Ð¾ email Ð¸Ð»Ð¸ SMS â€” ÐºÐ¾Ð³Ð´Ð° Ð²Ñ‹ ÑÐ°Ð¼Ð¸ Ð·Ð°Ð¿Ñ€Ð¾ÑÐ¸Ð»Ð¸ Ð¸Ð»Ð¸ Ð´Ð°Ð»Ð¸ ÑÐ¾Ð³Ð»Ð°ÑÐ¸Ðµ.',
        use3: 'Ð§Ñ‚Ð¾Ð±Ñ‹ ÑƒÐ»ÑƒÑ‡ÑˆÐ°Ñ‚ÑŒ ÐºÐ°Ñ‡ÐµÑÑ‚Ð²Ð¾ ÑÐµÑ€Ð²Ð¸ÑÐ° Ð¸ Ð¾Ð±ÐµÑÐ¿ÐµÑ‡Ð¸Ð²Ð°Ñ‚ÑŒ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚ÑŒ ÑÐ°Ð¹Ñ‚Ð°.',
        smsTitle: 'SMSâ€‘ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ñ (Ñ‚Ð¾Ð»ÑŒÐºÐ¾ ÑÐµÑ€Ð²Ð¸ÑÐ½Ñ‹Ðµ)',
        sms1: 'Ð•ÑÐ»Ð¸ Ð²Ñ‹ Ð¾ÑÑ‚Ð°Ð²Ð¸Ð»Ð¸ Ð½Ð¾Ð¼ÐµÑ€ Ð¸ ÑÐ¾Ð³Ð»Ð°ÑÐ¸Ð»Ð¸ÑÑŒ, Ð¼Ñ‹ Ð¼Ð¾Ð¶ÐµÐ¼ Ð¾Ñ‚Ð¿Ñ€Ð°Ð²Ð»ÑÑ‚ÑŒ ÑÐµÑ€Ð²Ð¸ÑÐ½Ñ‹Ðµ SMS: ÑÐ¾Ð³Ð»Ð°ÑÐ¾Ð²Ð°Ð½Ð¸Ðµ ÐºÐ¾Ð½ÑÑƒÐ»ÑŒÑ‚Ð°Ñ†Ð¸Ð¸, Ð¾Ð±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ñ Ð¿Ð¾ Ð´Ð¾ÐºÑƒÐ¼ÐµÐ½Ñ‚Ð°Ð¼/ÑÑ‚Ð°Ñ‚ÑƒÑÐ°Ð¼, Ð¾Ñ‚Ð²ÐµÑ‚Ñ‹ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶ÐºÐ¸. Ð§Ð°ÑÑ‚Ð¾Ñ‚Ð° ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ð¹ Ð¼Ð¾Ð¶ÐµÑ‚ Ñ€Ð°Ð·Ð»Ð¸Ñ‡Ð°Ñ‚ÑŒÑÑ. Ð’Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ñ‹ ÑÑ‚Ð°Ð½Ð´Ð°Ñ€Ñ‚Ð½Ñ‹Ðµ Ñ‚Ð°Ñ€Ð¸Ñ„Ñ‹ Ð¾Ð¿ÐµÑ€Ð°Ñ‚Ð¾Ñ€Ð°.',
        sms2: 'ÐžÑ‚Ð¿Ð¸ÑÐ°Ñ‚ÑŒÑÑ Ð¼Ð¾Ð¶Ð½Ð¾ Ð² Ð»ÑŽÐ±Ð¾Ð¹ Ð¼Ð¾Ð¼ÐµÐ½Ñ‚, Ð¾Ñ‚Ð²ÐµÑ‚Ð¸Ð² STOP. Ð”Ð»Ñ Ð¿Ð¾Ð¼Ð¾Ñ‰Ð¸ â€” Ð¾Ñ‚Ð²ÐµÑ‚ÑŒÑ‚Ðµ HELP.',
        shareTitle: 'ÐŸÐµÑ€ÐµÐ´Ð°Ñ‡Ð° Ð´Ð°Ð½Ð½Ñ‹Ñ…',
        share1: 'ÐœÑ‹ Ð½Ðµ Ð¿Ñ€Ð¾Ð´Ð°Ñ‘Ð¼ Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ. ÐœÑ‹ Ð½Ðµ Ð¿ÐµÑ€ÐµÐ´Ð°Ñ‘Ð¼ Ð²Ð°Ñˆ Ð½Ð¾Ð¼ÐµÑ€ Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½Ð° Ñ‚Ñ€ÐµÑ‚ÑŒÐ¸Ð¼ Ð»Ð¸Ñ†Ð°Ð¼ Ð´Ð»Ñ Ð¸Ñ… Ð¼Ð°Ñ€ÐºÐµÑ‚Ð¸Ð½Ð³Ð°. Ð”Ð»Ñ Ñ€Ð°Ð±Ð¾Ñ‚Ñ‹ ÑÐµÑ€Ð²Ð¸ÑÐ° Ð¼Ñ‹ Ð¼Ð¾Ð¶ÐµÐ¼ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒ Ð½Ð°Ð´Ñ‘Ð¶Ð½Ñ‹Ñ… Ð¿Ð¾Ð´Ñ€ÑÐ´Ñ‡Ð¸ÐºÐ¾Ð² (Ð½Ð°Ð¿Ñ€Ð¸Ð¼ÐµÑ€, Ð¿Ñ€Ð¾Ð²Ð°Ð¹Ð´ÐµÑ€Ð° ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ð¹ Ð¸ Ñ…Ð¾ÑÑ‚Ð¸Ð½Ð³) Ð½Ð° ÑƒÑÐ»Ð¾Ð²Ð¸ÑÑ… ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸.',
        securityTitle: 'Ð‘ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚ÑŒ',
        security1: 'ÐœÑ‹ Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÑÐµÐ¼ Ñ€Ð°Ð·ÑƒÐ¼Ð½Ñ‹Ðµ Ð¾Ñ€Ð³Ð°Ð½Ð¸Ð·Ð°Ñ†Ð¸Ð¾Ð½Ð½Ñ‹Ðµ Ð¸ Ñ‚ÐµÑ…Ð½Ð¸Ñ‡ÐµÑÐºÐ¸Ðµ Ð¼ÐµÑ€Ñ‹ Ð·Ð°Ñ‰Ð¸Ñ‚Ñ‹. ÐžÐ´Ð½Ð°ÐºÐ¾ Ð½Ð¸ Ð¾Ð´Ð¸Ð½ ÑÐ¿Ð¾ÑÐ¾Ð± Ð¿ÐµÑ€ÐµÐ´Ð°Ñ‡Ð¸/Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ñ Ð´Ð°Ð½Ð½Ñ‹Ñ… Ð½Ðµ Ð³Ð°Ñ€Ð°Ð½Ñ‚Ð¸Ñ€ÑƒÐµÑ‚ 100% Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚ÑŒ.',
        choiceTitle: 'Ð’Ð°Ñˆ Ð²Ñ‹Ð±Ð¾Ñ€',
        choice1: 'Ð’Ñ‹ Ð¼Ð¾Ð¶ÐµÑ‚Ðµ Ð·Ð°Ð¿Ñ€Ð¾ÑÐ¸Ñ‚ÑŒ Ð´Ð¾ÑÑ‚ÑƒÐ¿, Ð¸ÑÐ¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ðµ Ð¸Ð»Ð¸ ÑƒÐ´Ð°Ð»ÐµÐ½Ð¸Ðµ Ð´Ð°Ð½Ð½Ñ‹Ñ…, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ Ð²Ñ‹ Ð¾Ñ‚Ð¿Ñ€Ð°Ð²Ð»ÑÐ»Ð¸ Ñ‡ÐµÑ€ÐµÐ· ÑÐ°Ð¹Ñ‚.',
        choice2: 'ÐžÑ‚Ð¿Ð¸ÑÐºÐ° Ð¾Ñ‚ SMS â€” STOP; Ð¿Ð¾Ð¼Ð¾Ñ‰ÑŒ â€” HELP.',
        contactTitle: 'ÐšÐ¾Ð½Ñ‚Ð°ÐºÑ‚Ñ‹',
        contact1: 'ÐŸÐ¾ Ð²Ð¾Ð¿Ñ€Ð¾ÑÐ°Ð¼ ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐ¹Ñ‚Ðµ Ñ„Ð¾Ñ€Ð¼Ñƒ Contact Ð½Ð° Ð½Ð°ÑˆÐµÐ¼ ÑÐ°Ð¹Ñ‚Ðµ.',
        back: 'Ð’ÐµÑ€Ð½ÑƒÑ‚ÑŒÑÑ Ð½Ð° Ð³Ð»Ð°Ð²Ð½ÑƒÑŽ',
      },
      policyTerms: {
        metaTitle: 'Ð£ÑÐ»Ð¾Ð²Ð¸Ñ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ñ â€” Financial Stream LLC',
        h1: 'Ð£ÑÐ»Ð¾Ð²Ð¸Ñ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ñ',
        updated: 'ÐŸÐ¾ÑÐ»ÐµÐ´Ð½ÐµÐµ Ð¾Ð±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ðµ: 2026-02-08',
        intro: 'Ð­Ñ‚Ð¸ ÑƒÑÐ»Ð¾Ð²Ð¸Ñ Ñ€ÐµÐ³ÑƒÐ»Ð¸Ñ€ÑƒÑŽÑ‚ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ðµ ÑÐ°Ð¹Ñ‚Ð° Financial Stream LLC Ð¸ ÑÐµÑ€Ð²Ð¸ÑÐ½Ñ‹Ñ… ÐºÐ¾Ð¼Ð¼ÑƒÐ½Ð¸ÐºÐ°Ñ†Ð¸Ð¹. Ð˜ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÑ ÑÐ°Ð¹Ñ‚, Ð²Ñ‹ ÑÐ¾Ð³Ð»Ð°ÑˆÐ°ÐµÑ‚ÐµÑÑŒ Ñ ÑÑ‚Ð¸Ð¼Ð¸ ÑƒÑÐ»Ð¾Ð²Ð¸ÑÐ¼Ð¸.',
        servicesTitle: 'Ð£ÑÐ»ÑƒÐ³Ð¸',
        services1: 'Financial Stream LLC Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²Ð»ÑÐµÑ‚ Ð±ÑƒÑ…Ð³Ð°Ð»Ñ‚ÐµÑ€ÑÐºÐ¸Ðµ ÑƒÑÐ»ÑƒÐ³Ð¸, Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶ÐºÑƒ Ð¿Ð¾ Ð½Ð°Ð»Ð¾Ð³Ð¾Ð²Ð¾Ð¹ Ð¿Ð¾Ð´Ð³Ð¾Ñ‚Ð¾Ð²ÐºÐµ Ð¸ ÑÐ¾Ð¿ÑƒÑ‚ÑÑ‚Ð²ÑƒÑŽÑ‰ÑƒÑŽ Ð°Ð´Ð¼Ð¸Ð½Ð¸ÑÑ‚Ñ€Ð°Ñ‚Ð¸Ð²Ð½ÑƒÑŽ Ð¿Ð¾Ð¼Ð¾Ñ‰ÑŒ. Ð˜Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ñ Ð½Ð° ÑÐ°Ð¹Ñ‚Ðµ Ð½Ð¾ÑÐ¸Ñ‚ Ð¾Ð±Ñ‰Ð¸Ð¹ Ñ…Ð°Ñ€Ð°ÐºÑ‚ÐµÑ€ Ð¸ Ð½Ðµ ÑÐ²Ð»ÑÐµÑ‚ÑÑ ÑŽÑ€Ð¸Ð´Ð¸Ñ‡ÐµÑÐºÐ¾Ð¹ ÐºÐ¾Ð½ÑÑƒÐ»ÑŒÑ‚Ð°Ñ†Ð¸ÐµÐ¹.',
        requestsTitle: 'Ð—Ð°Ð¿Ñ€Ð¾ÑÑ‹ Ð¸ ÐºÐ¾Ð½ÑÑƒÐ»ÑŒÑ‚Ð°Ñ†Ð¸Ð¸',
        requests1: 'ÐžÑ‚Ð¿Ñ€Ð°Ð²Ð»ÑÑ Ð·Ð°Ð¿Ñ€Ð¾Ñ, Ð²Ñ‹ Ð¿Ð¾Ð´Ñ‚Ð²ÐµÑ€Ð¶Ð´Ð°ÐµÑ‚Ðµ, Ñ‡Ñ‚Ð¾ Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²Ð»ÑÐµÑ‚Ðµ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸ÑŽ Ð´Ð¾Ð±Ñ€Ð¾ÑÐ¾Ð²ÐµÑÑ‚Ð½Ð¾ Ð¸ Ð¿Ð¾ Ð²Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ð¾ÑÑ‚Ð¸ Ñ‚Ð¾Ñ‡Ð½Ð¾. ÐŸÑ€Ð¸ Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¾ÑÑ‚Ð¸ Ð¼Ñ‹ Ð¼Ð¾Ð¶ÐµÐ¼ ÑƒÑ‚Ð¾Ñ‡Ð½Ð¸Ñ‚ÑŒ Ð´ÐµÑ‚Ð°Ð»Ð¸ Ð´Ð»Ñ Ð¾Ñ‚Ð²ÐµÑ‚Ð°.',
        smsTitle: 'Ð£ÑÐ»Ð¾Ð²Ð¸Ñ Ð¿Ð¾ SMS (Ñ‚Ð¾Ð»ÑŒÐºÐ¾ ÑÐµÑ€Ð²Ð¸ÑÐ½Ñ‹Ðµ)',
        sms1: 'Ð•ÑÐ»Ð¸ Ð²Ñ‹ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐ°Ð»Ð¸ÑÑŒ Ð½Ð° SMS, Ð²Ñ‹ Ð´Ð°Ñ‘Ñ‚Ðµ ÑÐ¾Ð³Ð»Ð°ÑÐ¸Ðµ Ð½Ð° ÑÐµÑ€Ð²Ð¸ÑÐ½Ñ‹Ðµ ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ñ (Ð½Ðµ Ð¼Ð°Ñ€ÐºÐµÑ‚Ð¸Ð½Ð³): ÑÐ¾Ð³Ð»Ð°ÑÐ¾Ð²Ð°Ð½Ð¸Ðµ, Ð½Ð°Ð¿Ð¾Ð¼Ð¸Ð½Ð°Ð½Ð¸Ñ, Ð¾Ð±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ñ Ð¿Ð¾ Ð´Ð¾ÐºÑƒÐ¼ÐµÐ½Ñ‚Ð°Ð¼/ÑÑ‚Ð°Ñ‚ÑƒÑÐ°Ð¼ Ð¸ Ð¾Ñ‚Ð²ÐµÑ‚Ñ‹ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶ÐºÐ¸. Ð§Ð°ÑÑ‚Ð¾Ñ‚Ð° ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ð¹ Ð¼Ð¾Ð¶ÐµÑ‚ Ñ€Ð°Ð·Ð»Ð¸Ñ‡Ð°Ñ‚ÑŒÑÑ. Ð’Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ñ‹ Ñ‚Ð°Ñ€Ð¸Ñ„Ñ‹ Ð¾Ð¿ÐµÑ€Ð°Ñ‚Ð¾Ñ€Ð°.',
        sms2: 'ÐžÑ‚Ð¿Ð¸ÑÐºÐ° â€” STOP. ÐŸÐ¾Ð¼Ð¾Ñ‰ÑŒ â€” HELP.',
        privacyTitle: 'ÐšÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚ÑŒ',
        privacy1: 'ÐŸÐ¾Ð´Ñ€Ð¾Ð±Ð½Ð¾ÑÑ‚Ð¸ Ð¾ ÑÐ±Ð¾Ñ€Ðµ Ð¸ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ð¸ Ð´Ð°Ð½Ð½Ñ‹Ñ… Ð¾Ð¿Ð¸ÑÐ°Ð½Ñ‹ Ð² ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐµ ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸.',
        disclaimerTitle: 'ÐžÑ‚ÐºÐ°Ð· Ð¾Ñ‚ Ð³Ð°Ñ€Ð°Ð½Ñ‚Ð¸Ð¹',
        disclaimer1: 'ÐœÑ‹ ÑÑ‚Ð°Ñ€Ð°ÐµÐ¼ÑÑ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶Ð¸Ð²Ð°Ñ‚ÑŒ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸ÑŽ Ð°ÐºÑ‚ÑƒÐ°Ð»ÑŒÐ½Ð¾Ð¹, Ð½Ð¾ Ð½Ðµ Ð³Ð°Ñ€Ð°Ð½Ñ‚Ð¸Ñ€ÑƒÐµÐ¼ Ð¿Ð¾Ð»Ð½Ð¾Ñ‚Ñƒ Ð¸ Ð°ÐºÑ‚ÑƒÐ°Ð»ÑŒÐ½Ð¾ÑÑ‚ÑŒ Ð²ÑÐµÐ³Ð¾ ÐºÐ¾Ð½Ñ‚ÐµÐ½Ñ‚Ð°. Ð˜ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ðµ ÑÐ°Ð¹Ñ‚Ð° â€” Ð½Ð° Ð²Ð°Ñˆ Ñ€Ð¸ÑÐº.',
        changesTitle: 'Ð˜Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ',
        changes1: 'ÐœÑ‹ Ð¼Ð¾Ð¶ÐµÐ¼ Ð¾Ð±Ð½Ð¾Ð²Ð»ÑÑ‚ÑŒ ÑÑ‚Ð¸ ÑƒÑÐ»Ð¾Ð²Ð¸Ñ. Ð˜Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ Ð²ÑÑ‚ÑƒÐ¿Ð°ÑŽÑ‚ Ð² ÑÐ¸Ð»Ñƒ Ð¿Ð¾ÑÐ»Ðµ Ð¿ÑƒÐ±Ð»Ð¸ÐºÐ°Ñ†Ð¸Ð¸ Ð½Ð° ÑÑ‚Ð¾Ð¹ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ðµ.',
        back: 'Ð’ÐµÑ€Ð½ÑƒÑ‚ÑŒÑÑ Ð½Ð° Ð³Ð»Ð°Ð²Ð½ÑƒÑŽ',
      },
      policySmsConsent: {
        metaTitle: 'Ð¡Ð¾Ð³Ð»Ð°ÑÐ¸Ðµ Ð½Ð° SMS â€” Financial Stream LLC',
        h1: 'Ð¡Ð¾Ð³Ð»Ð°ÑÐ¸Ðµ Ð½Ð° SMS Ð¸ Ð¿Ð¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ð¹',
        updated: 'ÐžÐ±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¾: 2026-02-15',
        intro: 'ÐÐ° ÑÑ‚Ð¾Ð¹ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ðµ Ð¾Ð¿Ð¸ÑÐ°Ð½Ð¾, ÐºÐ°Ðº Financial Stream LLC Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚ SMS Ð´Ð»Ñ ÐºÐ¾Ð¼Ð¼ÑƒÐ½Ð¸ÐºÐ°Ñ†Ð¸Ð¸ Ð¿Ð¾ Ð¸Ð½Ð¸Ñ†Ð¸Ð°Ñ‚Ð¸Ð²Ðµ ÐºÐ»Ð¸ÐµÐ½Ñ‚Ð°.',
        scopeTitle: 'Ð”Ð»Ñ Ñ‡ÐµÐ³Ð¾ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÑŽÑ‚ÑÑ SMS',
        scope1: 'ÐŸÑ€Ð¾Ð¿ÑƒÑ‰ÐµÐ½Ð½Ñ‹Ð¹ Ð·Ð²Ð¾Ð½Ð¾Ðº: ÐµÑÐ»Ð¸ Ð²Ñ‹ Ð·Ð²Ð¾Ð½Ð¸Ñ‚Ðµ Ð½Ð° Ð½Ð°Ñˆ Ñ€Ð°Ð±Ð¾Ñ‡Ð¸Ð¹ Ð½Ð¾Ð¼ÐµÑ€ Ð¸ Ð¼Ñ‹ Ð½Ðµ Ð¾Ñ‚Ð²ÐµÑ‚Ð¸Ð»Ð¸, Ð¼Ñ‹ Ð¼Ð¾Ð¶ÐµÐ¼ Ð¾Ñ‚Ð¿Ñ€Ð°Ð²Ð¸Ñ‚ÑŒ Ð¾Ð´Ð½Ð¾ SMS Ñ Ð¿Ð¾Ð´Ñ‚Ð²ÐµÑ€Ð¶Ð´ÐµÐ½Ð¸ÐµÐ¼ Ð¿Ñ€Ð¾Ð¿ÑƒÑ‰ÐµÐ½Ð½Ð¾Ð³Ð¾ Ð·Ð²Ð¾Ð½ÐºÐ° Ð¸ Ð¿Ñ€Ð¾ÑÑŒÐ±Ð¾Ð¹ Ð½Ð°Ð¿Ð¸ÑÐ°Ñ‚ÑŒ Ð²Ð°Ñˆ Ð²Ð¾Ð¿Ñ€Ð¾Ñ.',
        scope2: 'Ð•ÑÐ»Ð¸ Ð²Ñ‹ Ð¾Ñ‚Ð²ÐµÑ‚Ð¸Ñ‚Ðµ, Ð¼Ñ‹ Ð¼Ð¾Ð¶ÐµÐ¼ Ð¿Ñ€Ð¾Ð´Ð¾Ð»Ð¶Ð¸Ñ‚ÑŒ Ð¿ÐµÑ€ÐµÐ¿Ð¸ÑÐºÑƒ Ð¾Ð´Ð¸Ð½-Ð½Ð°-Ð¾Ð´Ð¸Ð½, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð¿Ð¾Ð¼Ð¾Ñ‡ÑŒ Ð²Ð°Ð¼ (Ð½Ð°Ð¿Ñ€Ð¸Ð¼ÐµÑ€, Ð¾Ñ‚Ð²ÐµÑ‚Ð¸Ñ‚ÑŒ Ð½Ð° Ð²Ð¾Ð¿Ñ€Ð¾ÑÑ‹ Ð¸Ð»Ð¸ ÑÐ¾Ð³Ð»Ð°ÑÐ¾Ð²Ð°Ñ‚ÑŒ ÐºÐ¾Ð½ÑÑƒÐ»ÑŒÑ‚Ð°Ñ†Ð¸ÑŽ).',
        scope3: 'ÐœÑ‹ Ð½Ðµ Ð¾Ñ‚Ð¿Ñ€Ð°Ð²Ð»ÑÐµÐ¼ Ð¼Ð°Ñ€ÐºÐµÑ‚Ð¸Ð½Ð³Ð¾Ð²Ñ‹Ðµ ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ñ, Ð½Ðµ Ð´ÐµÐ»Ð°ÐµÐ¼ Ð¼Ð°ÑÑÐ¾Ð²Ñ‹Ðµ Ñ€Ð°ÑÑÑ‹Ð»ÐºÐ¸ Ð¸ Ð½Ðµ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÐ¼ Ð±Ð°Ð·Ñ‹ Ð»Ð¸Ð´Ð¾Ð².',
        consentTitle: 'Ð’Ð°ÑˆÐµ ÑÐ¾Ð³Ð»Ð°ÑÐ¸Ðµ',
        consent1: 'Ð—Ð²Ð¾Ð½Ñ Ð½Ð° Ð½Ð°Ñˆ Ñ€Ð°Ð±Ð¾Ñ‡Ð¸Ð¹ Ð½Ð¾Ð¼ÐµÑ€ Ð¸/Ð¸Ð»Ð¸ Ð¾Ñ‚Ð¿Ñ€Ð°Ð²Ð»ÑÑ Ñ„Ð¾Ñ€Ð¼Ñƒ Ð½Ð° ÑÐ°Ð¹Ñ‚Ðµ Ñ Ð¾Ñ‚Ð¼ÐµÑ‡ÐµÐ½Ð½Ñ‹Ð¼ Ñ‡ÐµÐºÐ±Ð¾ÐºÑÐ¾Ð¼ SMS, Ð²Ñ‹ ÑÐ¾Ð³Ð»Ð°ÑˆÐ°ÐµÑ‚ÐµÑÑŒ Ð¿Ð¾Ð»ÑƒÑ‡Ð°Ñ‚ÑŒ SMS Ð¿Ð¾ Ð²Ð°ÑˆÐµÐ¼Ñƒ Ð·Ð°Ð¿Ñ€Ð¾ÑÑƒ.',
        consent2: 'Ð§Ð°ÑÑ‚Ð¾Ñ‚Ð° ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ð¹ Ð·Ð°Ð²Ð¸ÑÐ¸Ñ‚ Ð¾Ñ‚ ÑÐ¸Ñ‚ÑƒÐ°Ñ†Ð¸Ð¸. ÐœÐ¾Ð³ÑƒÑ‚ Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÑÑ‚ÑŒÑÑ Ñ‚Ð°Ñ€Ð¸Ñ„Ñ‹ Ð¾Ð¿ÐµÑ€Ð°Ñ‚Ð¾Ñ€Ð°.',
        optoutTitle: 'ÐžÑ‚ÐºÐ°Ð· / ÐŸÐ¾Ð¼Ð¾Ñ‰ÑŒ',
        optout1: 'ÐžÑ‚Ð¿Ñ€Ð°Ð²ÑŒÑ‚Ðµ STOP, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð¾Ñ‚ÐºÐ°Ð·Ð°Ñ‚ÑŒÑÑ. ÐžÑ‚Ð¿Ñ€Ð°Ð²ÑŒÑ‚Ðµ HELP Ð´Ð»Ñ Ð¿Ð¾Ð¼Ð¾Ñ‰Ð¸.',
        optout2: 'ÐœÐ¾Ð³ÑƒÑ‚ Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÑÑ‚ÑŒÑÑ Ñ‚Ð°Ñ€Ð¸Ñ„Ñ‹ Ð¾Ð¿ÐµÑ€Ð°Ñ‚Ð¾Ñ€Ð°.',

        contactTitle: 'ÐšÐ¾Ð½Ñ‚Ð°ÐºÑ‚Ñ‹',
        contact1: 'Ð•ÑÐ»Ð¸ Ñƒ Ð²Ð°Ñ ÐµÑÑ‚ÑŒ Ð²Ð¾Ð¿Ñ€Ð¾ÑÑ‹ Ð¿Ð¾ ÑÑ‚Ð¾Ð¹ Ð¿Ð¾Ð»Ð¸Ñ‚Ð¸ÐºÐµ, ÑÐ²ÑÐ¶Ð¸Ñ‚ÐµÑÑŒ Ñ Financial Stream LLC.',
        recordsTitle: 'Ð¥Ñ€Ð°Ð½ÐµÐ½Ð¸Ðµ ÑÐ¾Ð³Ð»Ð°ÑÐ¸Ñ',
        records1: 'ÐœÑ‹ Ð¼Ð¾Ð¶ÐµÐ¼ Ñ…Ñ€Ð°Ð½Ð¸Ñ‚ÑŒ Ð·Ð°Ð¿Ð¸ÑÐ¸ ÑÐ¾Ð³Ð»Ð°ÑÐ¸Ñ Ð¸ Ð¿ÐµÑ€ÐµÐ¿Ð¸ÑÐºÐ¸ (Ð²Ñ€ÐµÐ¼Ñ, Ð½Ð¾Ð¼ÐµÑ€, Ñ‚ÐµÐºÑÑ‚ ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ñ) Ð´Ð»Ñ Ð¿Ð¾Ð´Ñ‚Ð²ÐµÑ€Ð¶Ð´ÐµÐ½Ð¸Ñ ÑÐ¾Ð±Ð»ÑŽÐ´ÐµÐ½Ð¸Ñ Ð¿Ñ€Ð°Ð²Ð¸Ð».',
      },

      policySmsConsentLinksLabel: 'Ð¡Ð¼. Ñ‚Ð°ÐºÐ¶Ðµ:',
      policySmsConsentLinks1: 'ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸',
      policySmsConsentLinksSep: 'Ð¸',
      policySmsConsentLinks2: 'Ð£ÑÐ»Ð¾Ð²Ð¸Ñ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ñ',
      policyBackHome: 'Ð’ÐµÑ€Ð½ÑƒÑ‚ÑŒÑÑ Ð½Ð° Ð³Ð»Ð°Ð²Ð½ÑƒÑŽ',

      footer: {
        rights: 'Â© 2026 Financial Stream LLC',
        privacy: 'ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸',
        terms: 'Ð£ÑÐ»Ð¾Ð²Ð¸Ñ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ñ',
      sms: 'Ð¡Ð¾Ð³Ð»Ð°ÑÐ¸Ðµ Ð½Ð° SMS',
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
  // We embed a list of existing paths from the build and use explicit ENâ†”RU mappings where slugs differ.
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
