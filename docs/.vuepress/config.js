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
        home: 'true',
        nav: [
          { text: 'Søking', link: '/soking/' },
          { text: 'Lesing', link: '/lesing/' },
          { text: 'Skriving', link: '/skriving/' },
          { text: 'Kildebruk og referanser', link: '/kildebruk-og-referanser/' },
          {
            text: 'Om',
            ariaLabel: 'Om Søk og skriv meny',
            items: [
              { text: 'Blog', link: '/blog/' },
              { text: 'Kontaktinformasjon', link: '/om/kontaktinformasjon/' },
              { text: 'Søk og skriv i undervisning', link: '/om/sok-og-skriv-i-undervisning/' },
              { text: 'Rettigheter', link: '/om/rettigheter-til-sok-og-skriv/' },
              { text: 'Referanser', link: '/om/referanser/' }
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
            {
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
            },
            'kildevurdering'
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
    }
  },
  plugins: [
    'vuepress-plugin-export',
    ['@vuepress/back-to-top', true],
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
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
}
