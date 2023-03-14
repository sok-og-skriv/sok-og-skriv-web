let sidebarNo = require("./sidebarNo");
let sidebarEn = require("./sidebarEn");

module.exports = {
  title: "Søk & Skriv",
  home: "true",
  dest: "public",
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "NO", // this will be set as the lang attribute on <html>
      title: "Søk & Skriv",
      description: "Lær om informasjonssøk og akademisk skriving",
    },
    "/en/": {
      lang: "EN",
      title: "Search & Write",
      description: "Learn about information gathering and academic writing",
    },
  },
  themeConfig: {
    logo: "/sos-logo.svg",
    locales: {
      "/": {
        selectText: "Språk",
        lastUpdated: "Oppdatert",
        sidebarDepth: 2,
        home: "true",
        nav: [
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
        selectText: "Languages",
        sidebar: "auto",
        sidebarDepth: 2,
        lastUpdated: "Last Updated",
        home: "true",
        nav: [
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
  },
  markdown: {
    toc: {
      includeLevel: [2],
    },
    plugins: [],
    extendMarkdown: (md) => {
      md.set({
        typographer: true,
        quotes: "«»’’",
      }),
        md.use(
          require("markdown-it-video", {
            // <-- this use(package_name) is required
            youtube: { width: 640, height: 390 },
          })
        );
      md.use(require("markdown-it-footnote"));
      md.use(require("markdown-it-sub"));
      md.use(require("markdown-it-sup"));
      md.use(require("markdown-it-ins"));
      md.use(require("markdown-it-mark"));
      md.use(require("markdown-it-deflist"));
      md.use(require("markdown-it-abbr"));
    },
  },
  plugins: [
    [
      "sitemap",
      {
        hostname: "https://sokogskriv.no/",
        dateFormatter: (time) => {
          var dayjs = require("dayjs");
          var customParseFormat = require("dayjs/plugin/customParseFormat");
          dayjs.extend(customParseFormat);
          require("dayjs/locale/en");
          require("dayjs/locale/nb");

          if (time.match(/^\d/)) {
            let date = dayjs(time, "D. MMMM YYYY", "nb", true).format(
              "YYYY-MM-DDThh:mm:ssTZD"
            );
            return date;
          } else {
            let dateEN = dayjs(time, "MMMM D, YYYY", "en", true).format(
              "YYYY-MM-DDThh:mm:ssTZD"
            );
            return dateEN;
          }
        },
      },
    ],
    "vuepress-plugin-export",
    "vuepress-plugin-glossary",
    ["@vuepress/html-redirect", { duration: 0 }],
    ["@vuepress/back-to-top", true],
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          var dayjs = require("dayjs");
          var localizedFormat = require("dayjs/plugin/localizedFormat");
          dayjs.extend(localizedFormat);
          require("dayjs/locale/en");
          require("dayjs/locale/nb");

          lang = lang.toLowerCase();
          if (lang == "no") {
            lang = "nb";
          }
          dayjs.locale(lang);
          return dayjs(timestamp).format("LL");
        },
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "teksten",
        before: `<div class="in-text"><p class="title">Kilden i teksten</p>`,
        after: "</div>",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "footnote",
        before: `
          <div class="in-footnote">
            <p class="title">Kilden i fotnoten</p>
            <span class="text-placeholder long"></span>
            <span class="text-placeholder short"></span>
            <hr>`,
        after: "</div>",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "ref",
        before: `<div class="in-ref"><p class="title">Kilden i referanselisten</p>`,
        after: "</div>",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "eksempel",
        before: (info) => `<div class="example"><p class="title">${info}</p>`,
        after: "</div>",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "oppgave",
        before: (info) => `<div class="exercise"><p class="title">${info}</p>`,
        after: "</div>",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "søketabell",
        before: `<div class="search-table">`,
        after: "</div>",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "tabell",
        before: `<div class="search-table-box">`,
        after: "</div>",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "kombinator",
        before: `<div class="search-table-combinator">`,
        after: "</div>",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "picoskjema",
        before: `<div class="pico">`,
        after: "</div>",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "picoboks",
        before: (info) => `<div class="pico-box"><p class="title">${info}</p>`,
        after: "</div>",
      },
    ],
    [
      "vuepress-plugin-mathjax",
      {
        target: "svg",
        macros: {
          "*": "\\times",
        },
      },
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: false,
        updatePopup: {
          "/": {
            message: "Nytt innhold er tilgjenglig.",
            buttonText: "Last inn på nytt",
          },
          "/en/": {
            message: "New content is available.",
            buttonText: "Refresh",
          },
        },
      },
    ],
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
    ['script', { src: '/js/unregister-sw.js' }],
    ['link', { rel: 'icon', href: `/favicon.svg` }],
    ["meta", { name: "charset", content: "UTF-8" }],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#4daebf" }],
    ["link", { rel: "mask-icon", href: "/sos-logo.svg", color: "#3eaf7c" }],
  ],
};
