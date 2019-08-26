module.exports = {
  title: 'Søk og skriv',
  description: 'Søk & Skriv er laget for alle studenter som ønsker å lære mer om informasjonssøk og akademisk skriving, uavhengig av studiested og -emne',
  home: 'true',
  themeConfig: {
    logo: '/sokogskriv2013.png',
    nav: [
    ],
    sidebar: [
      '/',
      {
        title: 'Søking',
        /* collapsable: false, */
        children: [
          '/planlegg-soket-dit',
          '/soketeknikker',
          /* '/systematisk-soking' */
        ]
      },
      {
        title: 'Lesing',
        children: [ 
          '/lesemater',
          '/lesing-og-skriving',
          '/kollokvie',
          '/argumentasjon-i-tekst',
          /* '/akademiske sjangrer' */
        ]
      },
      {
        title: 'Skriving',
        children: [
          '/skriveprosessen',
          '/struktur-og-argumentasjon',
          '/sprak-og-stil',
          '/formelle-krav',
          '/formidling'
        ]
      },
      {
        title: 'Kildebruk og referanser',
        children: [
          '/hvordan-referere',
          /* '/hvorfor-referere', */
          '/referansestiler',
          '/kildevurdering'
        ]
      }
    ]
  },
  /* head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ], */
  serviceWorker: true,
  dest: 'public'
}