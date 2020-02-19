---
title: "Gitlab-arbeidsflyt"
date: "2020-02-12"
---

# Gitlab-arbeidsflyt

Siden Søk og skriv nå er en Vuepress-drevet side, har vi fått en helt annen måte å redigere innhold. Alt innhold ligger i Markdown-filer (.md) som blir konvertert til web-sider og lagt på en server uten noen bakenforliggende database.

Hele Søk og skriv ligger på Gitlab med én fil per nettsadresse. Filen som ligger i `docs/lesing/lesemater.md` blir til [sokogskriv.no/lesing/lesemåter](https://sok-og-skriv.now.sh/lesing/lesemater.html).

## Videodemonstrasjon

Redigeringen kan skje på mange måter, men for å gjøre det mindre sannsynlig at redaksjonen går i føttene på hverandre er følgende arbeidsflyt anbefalt.

<div style="max-width:608px"><div style="position:relative;padding-bottom:66.118421052632%"><iframe id="kaltura_player" src="https://api.kaltura.nordu.net/p/355/sp/35500/embedIframeJs/uiconf_id/23451415/partner_id/355?iframeembed=true&playerId=kaltura_player&entry_id=0_kku4xv5v&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=0_vsemv2si" width="608" height="402" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player" style="position:absolute;top:0;left:0;width:100%;height:100%"></iframe></div></div>

1. Start med å lage en **sak** (Issue) som beskriver endringen du ønsker å gjøre.
    * Det kan være _Skriv om Lesing-sporet_ eller _Fiks skrivefeil på Om Søk og skriv_.
2. Lag en **Merge request** basert på **saken**.
    * Da blir det laget en slags kopi, en **gren** (branch) av hele Søk og skriv slik den er på det tidspunktet. Dersom Søk og skriv blir oppdatert av andre i mellomtiden vil denne **grenen** ikke bli oppdatert. Det er ok :-).
3. Klikk `Open in Web IDE` og rediger ønskede filer.
4. **Commit** endringen til **grenen**.
5. Gå tilbake til sok-og-skriv-vuepress (lenken er oppe til venstre i Web IDE).
6. Klikk på **Merge Request** og finn din merge request.
7. Du kan sjekke en forhåndsvisning ved å se etter en kommentar. Det kan ta litt tid før denne dukker opp.
8. Ser det bra ut, kan du klikke `Resolve WIP status` og vente noen sekunder. Klikk "Merge" når den dukker opp.
9. Etter noen minutter vil `sokogskriv.no` bli oppdatert. Om endringene ikke vises, mår du kanskje tvinge en innlasting av nettsiden på nytt. `Ctrl+Shift-F5` på Windows og `Ctrl+Shift-R` på Mac.
