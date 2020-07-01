![Søk & Skriv](./docs/.vuepress/public/sos-logo.svg)

# Søk & Skriv

[Søk & Skriv](https://sokogskriv.no)

Søk & Skriv er laget for alle studenter som ønsker å lære mer om informasjonssøk og akademisk skriving, uavhengig av studiested og -emne.

## Installasjon

```bash
yarn install
yarn dev
```

## PWA asset generator

Vi kan generere det vi trenger av iconer til Søk og skriv ved å bruke [pwa-asset-generator](https://github.com/onderceylan/pwa-asset-generator). Se [PWA splash screen and icon generator](https://itnext.io/pwa-splash-screen-and-icon-generator-a74ebb8a130) for informasjon.

```bash
pwa-asset-generator sos-logo.svg --background white -i ./index.html -m ./manifest.json
```

## Interne ressurser

* [Markdown guide for Søk & Skriv](https://sokogskriv.no/om/markdown-demo/)
* [Gitlab-arbeidsflyt](https://sokogskriv.no/om/gitlab-arbeidsflyt/)
* [Brukertest 2020](https://sokogskriv.no/om/brukertest/)
