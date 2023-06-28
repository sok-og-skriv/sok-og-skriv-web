import { defineUserConfig, defaultTheme } from 'vuepress'
import { containerPlugin } from '@vuepress/plugin-container'
import MarkdownItSup from 'markdown-it-sup'
import MarkdownItSub from 'markdown-it-sub'
import MarkdownItIns from 'markdown-it-ins'
import MarkdownItmark from 'markdown-it-mark'
import MarkdownItDeflist from 'markdown-it-deflist'
import MarkdownItAbbr from 'markdown-it-abbr'
import MarkdownItFootnote from 'markdown-it-footnote'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
import { redirectPlugin } from "vuepress-plugin-redirect";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { getDirname, path } from '@vuepress/utils'

let sidebarNo = require("./sidebarNo");
let sidebarEn = require("./sidebarEn");
const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  title: "Søk & Skriv",
  home: "true",
  dest: "public",
  locales: {
    "/": {
      lang: "NO",
      title: "Søk & Skriv",
      description: "Lær om informasjonssøk og akademisk skriving",
    },
    "/en/": {
      lang: "EN",
      title: "Search & Write",
      description: "Learn about information gathering and academic writing",
    },
  },
  theme: defaultTheme({
    contributors: false,
    logo: "/sos-logo.svg",
    locales: {
      "/": {
        selectLanguageName: 'Norsk',
        selectLanguageText: "Språk",
        lastUpdatedText: "Oppdatert",
        sidebarDepth: 2,
        home: "/",
        navbar: [
          { text: "Søking", link: "/soking/" },
          { text: "Studieteknikk", link: "/studieteknikk/" },
          { text: "Skriving", link: "/skriving/" },
          { text: "Kjeldebruk", link: "/kjeldebruk/" },
          {
            text: "Referansestiler",
            link: "/referansestiler/",
            /* ariaLabel: 'Referansestiler meny',
            items: [
              { text: 'Introduksjon', link: '/referansestiler/index' },
              { text: 'APA 7th', link: '/referansestiler/apa-7th' },
              { text: 'Chicago forfatter-år', link: '/referansestiler/chicago-forfatter-aar' },
              { text: 'Chicago fotnoter', link: '/referansestiler/chicago-fotnoter' },
              { text: 'MLA', link: '/referansestiler/mla' },
              { text: 'Vancouver', link: '/referansestiler/vancouver' }
            ] */
          },
          { text: "Frasebank", link: "/frasebank/" },
          { text: "Videoer", link: "/video/soking" },
        ],
        sidebar: {
          ...sidebarNo,
        },
      },
      "/en/": {
        selectLanguageName: 'English',
        selectLanguageText: "Languages",
        sidebarDepth: 2,
        lastUpdatedText: "Last Updated",
        home: "/en/",
        navbar: [
          { text: "Searching", link: "/en/searching/" },
          { text: "Study skills", link: "/en/study-skills/" },
          { text: "Writing", link: "/en/writing/" },
          {
            text: "Sources and referencing",
            link: "/en/sources-and-referencing/",
          },
          { text: "Videos", link: "/en/video/" },
        ],
        sidebar: {
          ...sidebarEn,
        },
      },
    },
  }),
  extendsMarkdown: (md) => {
    md.set({
      typographer: true,
      quotes: "«»’’",
    });
    md.use(MarkdownItSup);
    md.use(MarkdownItSub);
    md.use(MarkdownItIns);
    md.use(MarkdownItmark);
    md.use(MarkdownItDeflist);
    md.use(MarkdownItAbbr);
    md.use(MarkdownItFootnote);
  },
  plugins: [
    backToTopPlugin(),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    containerPlugin({
      type: 'teksten',
      locales: {
        '/': {
          defaultInfo: 'Kilden i teksten',
        },
        '/en/': {
          defaultInfo: 'The source in the text',
        },
      },
      before: (info) => `<div class="custom-container tip in-text">${info ? `<p class="custom-container-title title">${info}</p>` : ''}\n`,
      after: () => '</div>\n',
    }),
    containerPlugin({
      type: "footnote",
      locales: {
        '/': {
          defaultInfo: 'Kilden i fotnoten',
        },
        '/en/': {
          defaultInfo: 'The source in the footnote',
        },
      },
      before: (info) => `<div class="custom-container tip in-footnote">${info ? `<p class="custom-container-title title"><span class="text-placeholder long"></span> <span class="text-placeholder short"></span>${info}</p>` : ''}\n`,
      after: () => '</div>\n',
    }),
    containerPlugin({
      type: "ref",
      locales: {
        '/': {
          defaultInfo: 'Kilden i referanselisten',
        },
        '/en/': {
          defaultInfo: 'The source in the reference list',
        },
      },
      before: (info) => `<div class="custom-container tip in-ref">${info ? `<p class="custom-container-title title"><span class="text-placeholder long"></span> <span class="text-placeholder short"></span>${info}</p>` : ''}\n`,
      after: () => '</div>\n',
    }),
    containerPlugin({
      type: "eksempel",
      locales: {
        '/': {
          defaultInfo: 'Eksempel',
        },
        '/en/': {
          defaultInfo: 'Example',
        },
      },
      before: (info) => `<div class="custom-container tip example"><p class="title">${info}</p>`,
      after: () => '</div>\n',
    }),
    containerPlugin({
      type: "oppgave",
      locales: {
        '/': {
          defaultInfo: 'Oppgave',
        },
        '/en/': {
          defaultInfo: 'Exercise',
        },
      },
      before: (info) => `<div class="custom-container tip exercise"><p class="title">${info}</p>`,
      after: () => '</div>\n',
    }),
    containerPlugin({
      type: "søketabell",
      locales: {
        '/': {
          defaultInfo: 'Søketabell',
        },
        '/en/': {
          defaultInfo: 'Search table',
        },
      },
      before: (info) => `<div class="custom-container search-table">`,
      after: () => '</div>\n',
    }),
    containerPlugin({
      type: "tabell",
      locales: {
        '/': {
          defaultInfo: '',
        },
        '/en/': {
          defaultInfo: '',
        },
      },
      before: (info) => `<div class="custom-container search-table-box">`,
      after: () => '</div>\n',
    }),
    containerPlugin({
      type: "kombinator",
      locales: {
        '/': {
          defaultInfo: '',
        },
        '/en/': {
          defaultInfo: '',
        },
      },
      before: (info) => `<div class="custom-container search-table-combinator">`,
      after: () => '</div>\n',
    }),
    containerPlugin({
      type: "picoskjema",
      locales: {
        '/': {
          defaultInfo: '',
        },
        '/en/': {
          defaultInfo: '',
        },
      },
      before: (info) => `<div class="custom-container pico">`,
      after: () => '</div>\n',
    }),
    containerPlugin({
      type: "picoboks",
      locales: {
        '/': {
          defaultInfo: '',
        },
        '/en/': {
          defaultInfo: '',
        },
      },
      before: (info) => `<div class="custom-container pico-box">`,
      after: () => '</div>\n',
    }),
    sitemapPlugin({
      hostname: "https://www.sokogskriv.no/",
      // modifyTimeGetter: (time) => {
      //   let dayjs = require("dayjs");
      //   let customParseFormat = require("dayjs/plugin/customParseFormat");
      //   dayjs.extend(customParseFormat);
      //   require("dayjs/locale/en");
      //   require("dayjs/locale/nb");

      //   if (time.match(/^\d/)) {
      //     let date = dayjs(time, "D. MMMM YYYY", "nb", true).format(
      //       "YYYY-MM-DDThh:mm:ssTZD"
      //     );
      //     return date;
      //   } else {
      //     let dateEN = dayjs(time, "MMMM D, YYYY", "en", true).format(
      //       "YYYY-MM-DDThh:mm:ssTZD"
      //     );
      //     return dateEN;
      //   }
      // },
    }),
    redirectPlugin({
      duration: 0
    }),
    pwaPlugin({
      skipWaiting: true,
    }),
  ],
  head: [
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-11WMC6TGYX',
      },
    ],
    [
      'script',
      {},
      [
        "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-11WMC6TGYX');",
      ],
    ],
    ['link', { rel: 'icon', href: `/favicon.svg` }],
    ["meta", { name: "charset", content: "UTF-8" }],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ["meta", { name: "theme-color", content: "#4daebf" }],
    ["link", { rel: "mask-icon", href: "/sos-logo.svg", color: "#3eaf7c" }],
  ],
});
