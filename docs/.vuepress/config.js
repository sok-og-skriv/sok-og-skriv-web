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
    logo: '/sokogskriv2013.png',
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
              { text: 'Blog', link: '/blog/' },
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
          '/soking/': [
            '',
            'planlegg-soket-ditt',
            'soketeknikker',
            'systematisk-soking',
          ],
          '/lesing/': [
            '',
            'lesemater',
            'lesing-og-skriving',
            'kollokvie',
            'argumentasjon-i-tekst',
            'akademiske-sjangrer'
          ],
          '/skriving/': [
            '',
            {
              title: 'Skriveprosessen',
              children: [
                'skriveprosessen',
                'kom-i-gang-a-skrive',
                'skrivegrupper'
              ]
            },
            {
              title: 'Struktur og argumentasjon',
              children: [
                'struktur-og-argumentasjon',
                'oppbygning-av-en-oppgave',
                'redegjor-og-droft',
                'a-argumentere-i-egen-tekst',
                'imrod-modellen'
              ]
            },
            {
              title: 'Akademisk sprak og stil',
              children: [
                'akademisk-sprak-og-stil',
                'skrive-ryddig',
                'a-skape-flyt',
                'ikke-akademisk-sprak'
              ]
            },
            'formelle-krav-til-oppsett',
            'formidling',
          ],
          '/kildebruk-og-referanser/': [
            '',
            {
              title: 'Hvordan referere',
              children: [
                'hvordan-referere',
                'hva-refereres',
                'forkortelser'
              ]
            },
            {
              title: 'Hvorfor referere',
              children: [
                'hvorfor-referere',
                'etiske-retningslinjer-i-akademia',
                'opphavsrettslige-forhold'
              ]
            },
            /* {
              title: 'Referansestiler',
              children: [
                'referansestiler/',
                'referansestiler/apa-6th',
                'referansestiler/chicago-fotnoter',
                'referansestiler/chicago-forfatter-aar',
                'referansestiler/mla',
                'referansestiler/harvard',
                'referansestiler/vancouver',
              ]
            }, */
            'kildevurdering'
          ],
          '/referansestiler/apa/': [
            '',
            'boeker',
            'artikler',
            'offentlige-kilder',
            'annet'
          ],
          '/referansestiler/chicago-forfatter-aar/': [
            '',
            /* 'boeker',
            'artikler',
            'offentlige-kilder',
            'annet' */
          ],
          '/referansestiler/chicago-fotnoter/': [
            '',
            /* 'boeker',
            'artikler',
            'offentlige-kilder',
            'annet' */
          ],
          '/referansestiler/harvard/': [
            '',
            /* 'boeker',
            'artikler',
            'offentlige-kilder',
            'annet' */
          ],
          '/referansestiler/mla/': [
            '',
            /* 'boeker',
            'artikler',
            'offentlige-kilder',
            'annet' */
          ],
          '/referansestiler/vancouver/': [
            '',
            /* 'boeker',
            'artikler',
            'offentlige-kilder',
            'annet' */
          ],
          '/om/brukertest/': [
            '',
            'eksempel2',
            'eksempel3',
            'eksempel4',
            'eksempel5'
          ],
          '/': [
            '/om/',
            '/blog/',
            '/om/kontaktinformasjon',
            '/om/rettigheter-til-sok-og-skriv',
            '/om/referanser'
          ]
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
              { text: 'Blog', link: '/en/blog/' },
              { text: 'Contact', link: '/en/about/contact-us/' },
              { text: 'Rights', link: '/en/about/copyright-for-search-and-write/' },
              { text: 'References', link: '/en/about/references/' }
            ]
          }
        ],
        sidebar: {
          '/en/searching/': [
            '',
            'plan-your-searches',
            'searching-techniques',
            'systematic-searching',
          ],
          '/en/reading/': [
            '',
            'ways-of-reading',
            'reading-and-writing',
            'study-groups',
            'argumentation-in-text',
            'academic-genres'
          ],
          '/en/writing/': [
            '',
            {
              title: 'Structure and argumentation',
              children: [
                'structure-and-argumentation',
                'structuring-a-thesis',
                'crafting-an-argument',
                'the-imrad-format'
              ]
            },
            {
              title: 'Language and style',
              children: [
                'language-and-style',
                'organising-your-writing',
                'flow',
                'non-academic-language'
              ]
            },
            {
              title: 'The writing process',
              children: [
                'the-writing-process',
                'start-writing',
                'writing-groups'
              ]
            },
            'formal-requirements',
            'disseminating-your-thesis',
          ],
          '/en/sources-and-referencing/': [
            '',
            {
              title: 'How to cite?',
              children: [
                'how-to-cite',
                'what-to-cite',
                'abbreviations'
              ]
            },
            {
              title: 'Why cite sources?',
              children: [
                'why-cite-sources',
                'guidelines-on-academic-ethics',
                'intellectual-property-rights'
              ]
            },
            'reference-styles',
            {
              title: 'Source evaluation',
              children: [
                'source-evaluation',
                'qualitative-evaluation',
                'assessing-relevance'
              ]
            }
          ],
          '/en/': [
            '/en/about/',
            '/en/blog/',
            '/en/about/contact-information',
            '/en/about/copyright-for-search-and-write',
            '/en/about/references'
          ]
        }
      }
    }
  },
  markdown: {
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
    ['@vuepress/pwa', {
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
    }]
  ],
  head: [
    /* ['link', { rel: 'icon', href: `/sokogskriv2013.png` }], */
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#4daebf' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: 'apple-icon-180.png'}],
    ['link', { rel: 'apple-touch-icon', sizes: '167x167', href: 'apple-icon-167.png'}],
    ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: 'apple-icon-152.png'}],
    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: 'apple-icon-120.png' }],
    ['link', { rel: 'apple-touch-startup-image', href: 'apple-splash-2048-2732.png', media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'}],
    ['link', { rel: 'apple-touch-startup-image', href: 'apple-splash-2732-2048.png', media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'}],
    ['link', { rel: 'apple-touch-startup-image', href: 'apple-splash-1668-2388.png', media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'}],
    ['link', { rel: 'apple-touch-startup-image', href: 'apple-splash-2388-1668.png', media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'}],
    ['link', { rel: 'apple-touch-startup-image', href: 'apple-splash-1668-2224.png', media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'}],
    ['link', { rel: 'apple-touch-startup-image', href: 'apple-splash-2224-1668.png', media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'}],
    ['link', { rel: 'apple-touch-startup-image', href: 'apple-splash-1536-2048.png', media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'}],
    ['link', { rel: 'apple-touch-startup-image', href: 'apple-splash-2048-1536.png', media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'}],
    ['link', { rel: 'apple-touch-startup-image', href: 'apple-splash-1242-2688.png', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'}],
    ['link', { rel: 'apple-touch-startup-image', href: 'apple-splash-2688-1242.png', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'}],
    ['link', { rel: 'apple-touch-startup-image', href: 'apple-splash-1125-2436.png', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'}],
    ['link', { rel: 'apple-touch-startup-image', href: 'apple-splash-2436-1125.png', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'}],
    ['link', { rel: 'apple-touch-startup-image', href: 'apple-splash-828-1792.png', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'}],
    ['link', { rel: 'apple-touch-startup-image', href: 'apple-splash-1792-828.png', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'}],
    ['link', { rel: 'apple-touch-startup-image', href: 'apple-splash-1242-2208.png', media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'}],
    ['link', { rel: 'apple-touch-startup-image', href: 'apple-splash-2208-1242.png', media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'}],
    ['link', { rel: 'apple-touch-startup-image', href: 'apple-splash-750-1334.png', media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'}],
    ['link', { rel: 'apple-touch-startup-image', href: 'apple-splash-1334-750.png', media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'}],
    ['link', { rel: 'apple-touch-startup-image', href: 'apple-splash-640-1136.png', media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'}],
    ['link', { rel: 'apple-touch-startup-image', href: 'apple-splash-1136-640.png', media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'}],
    ['link', { rel: 'mask-icon', href: '/sos-logo.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
}
