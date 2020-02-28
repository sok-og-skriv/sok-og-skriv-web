let sidebarNo = require('./sidebarNo');
let sidebarEn = require('./sidebarEn');

module.exports = {
  title: 'Søk og skriv',
  home: 'true',
  dest: 'public',
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'NO', // this will be set as the lang attribute on <html>
      title: 'Søk og skriv',
      description: 'Søk & Skriv er laget for alle studenter som ønsker å lære mer om informasjonssøk og akademisk skriving, uavhengig av studiested og -emne',
    },
    '/en/': {
      lang: 'EN',
      title: 'Search and write',
      description: 'Search & Write is for all students who want to learn more about information gathering and academic writing, independent of institution and subject area.'
    }
  },
  themeConfig: {
    logo: '/sos-logo.svg',
    locales: {
      '/': {
        selectText: 'Språk',
        lastUpdated: 'Oppdatert',
        sidebarDepth: 2,
        home: 'true',
        nav: [
          { text: 'Søking', link: '/soking/' },
          { text: 'Lesing', link: '/lesing/' },
          { text: 'Skriving', link: '/skriving/' },
          { text: 'Kildebruk', link: '/kildebruk-og-referanser/' },
          {
            text: 'Referansestiler',
            ariaLabel: 'Referansestiler meny',
            items: [
              { text: 'APA 6th', link: '/referansestiler/apa/' },
              { text: 'Chicago forfatter-år', link: '/referansestiler/chicago-forfatter-aar/' },
              { text: 'Chicago fotnoter', link: '/referansestiler/chicago-fotnoter/' },
              { text: 'MLA', link: '/referansestiler/mla/' },
              { text: 'Vancouver', link: '/referansestiler/vancouver/' }
            ]
          },
          {
            text: 'Om',
            ariaLabel: 'Om Søk og skriv meny',
            items: [
              { text: 'Videoer', link: '/video/' },
              { text: 'Kontaktinformasjon', link: '/om/kontaktinformasjon/' },
              { text: 'Søk og skriv i undervisning', link: '/om/sok-og-skriv-i-undervisning/' },
              { text: 'Rettigheter', link: '/om/rettigheter-til-sok-og-skriv/' },
              { text: 'Referanser', link: '/om/referanser/' },
              { text: 'Markdown demo', link: '/om/markdown-demo/' },
              { text: 'Gitlab-arbeidsflyt', link: '/om/gitlab-arbeidsflyt/' },
              { text: 'Brukertest', link: '/om/brukertest/' }
            ]
          }
        ],
        sidebar: {
          ...sidebarNo
        }
      },
      '/en/': {
        selectText: 'Languages',
        sidebar: 'auto',
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        home: 'true',
        nav: [
          { text: 'Searching', link: '/en/searching/' },
          { text: 'Reading', link: '/en/reading/' },
          { text: 'Writing', link: '/en/writing/' },
          { text: 'Sources and referencing', link: '/en/sources-and-referencing/' },
          {
            text: 'About',
            ariaLabel: 'About Search and write menu',
            items: [
              { text: 'Videos', link: '/en/video/' },
              { text: 'Contact', link: '/en/about/contact-information/' },
              { text: 'Rights', link: '/en/about/copyright-for-search-and-write/' },
              { text: 'References', link: '/en/about/references/' }
            ]
          }
        ],
        sidebar: {
          ...sidebarEn
        }
      }
    }
  },
  markdown: {
    toc: {
      includeLevel: [2]
    },
    plugins: [
    ],
    extendMarkdown: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-video', { // <-- this use(package_name) is required
        youtube: { width: 640, height: 390 }
      }))
      md.use(require('markdown-it-footnote'))
      md.use(require('markdown-it-sub'))
      md.use(require('markdown-it-sup'))
      md.use(require('markdown-it-ins'))
      md.use(require('markdown-it-mark'))
      md.use(require('markdown-it-deflist'))
      md.use(require('markdown-it-abbr'))
    }
  },
  plugins: [
    'vuepress-plugin-export',
    'vuepress-plugin-glossary',
    /* 'alias', */
    ['@vuepress/back-to-top', true],
    [
      'vuepress-plugin-container',
      {
        type: 'eksempel',
        before: info => `<div class="example"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'oppgave',
        before: info => `<div class="exercise"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'søketabell',
        before: `<div class="search-table">`,
        after: '</div>',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'tabell',
        before: `<div class="search-table-box">`,
        after: '</div>',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'kombinator',
        before: `<div class="search-table-combinator">`,
        after: '</div>',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'picoskjema',
        before: `<div class="pico">`,
        after: '</div>',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'picoboks',
        before: info => `<div class="pico-box"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],
    [
      '@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
          '/': {
            message: "Nytt innhold er tilgjenglig.",
            buttonText: "Last inn på nytt"
          },
          '/en/': {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        }
      }
    ],
    [
      'sitemap', {
        hostname: 'https://pake.web.id'
      }
    ],
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
  ],
  head: [
    /* ['link', { rel: 'icon', href: `/sokogskriv2013.png` }], */
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#4daebf' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-icon-180.png'}],
    ['link', { rel: 'apple-touch-icon', sizes: '167x167', href: '/icons/apple-icon-167.png'}],
    ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/icons/apple-icon-152.png'}],
    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/icons/apple-icon-120.png' }],
    ['link', { rel: 'apple-touch-startup-image', href: '/icons/apple-splash-2048-2732.png', media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'}],
    ['link', { rel: 'apple-touch-startup-image', href: '/icons/apple-splash-2732-2048.png', media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'}],
    ['link', { rel: 'apple-touch-startup-image', href: '/icons/apple-splash-1668-2388.png', media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'}],
    ['link', { rel: 'apple-touch-startup-image', href: '/icons/apple-splash-2388-1668.png', media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'}],
    ['link', { rel: 'apple-touch-startup-image', href: '/icons/apple-splash-1668-2224.png', media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'}],
    ['link', { rel: 'apple-touch-startup-image', href: '/icons/apple-splash-2224-1668.png', media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'}],
    ['link', { rel: 'apple-touch-startup-image', href: '/icons/apple-splash-1536-2048.png', media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'}],
    ['link', { rel: 'apple-touch-startup-image', href: '/icons/apple-splash-2048-1536.png', media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'}],
    ['link', { rel: 'apple-touch-startup-image', href: '/icons/apple-splash-1242-2688.png', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'}],
    ['link', { rel: 'apple-touch-startup-image', href: '/icons/apple-splash-2688-1242.png', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'}],
    ['link', { rel: 'apple-touch-startup-image', href: '/icons/apple-splash-1125-2436.png', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'}],
    ['link', { rel: 'apple-touch-startup-image', href: '/icons/apple-splash-2436-1125.png', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'}],
    ['link', { rel: 'apple-touch-startup-image', href: '/icons/apple-splash-828-1792.png', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'}],
    ['link', { rel: 'apple-touch-startup-image', href: '/icons/apple-splash-1792-828.png', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'}],
    ['link', { rel: 'apple-touch-startup-image', href: '/icons/apple-splash-1242-2208.png', media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'}],
    ['link', { rel: 'apple-touch-startup-image', href: '/icons/apple-splash-2208-1242.png', media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'}],
    ['link', { rel: 'apple-touch-startup-image', href: '/icons/apple-splash-750-1334.png', media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'}],
    ['link', { rel: 'apple-touch-startup-image', href: '/icons/apple-splash-1334-750.png', media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'}],
    ['link', { rel: 'apple-touch-startup-image', href: '/icons/apple-splash-640-1136.png', media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'}],
    ['link', { rel: 'apple-touch-startup-image', href: '/icons/apple-splash-1136-640.png', media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'}],
    ['link', { rel: 'mask-icon', href: '/sos-logo.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
}
