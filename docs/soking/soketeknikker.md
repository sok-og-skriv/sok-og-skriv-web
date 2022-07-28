---
title: "Søketeknikker"
date: "2016-07-04"
---

# Søketeknikker
Når du søker i akademiske databaser, er det en fordel å kjenne til noen grunnleggende søketeknikker. Her forklarer vi de mest brukte.

## Fritekstsøk

Fritekstsøk, eller søk på tekstord, er den vanligste måten å søke på. Da matches søkeordene dine til referansens innhold, ofte på ord i tittel, sammendrag og emneord. Her er det viktig å finne rett nivå; ikke for spesifikt og ikke for generelt.

::: eksempel Eksempel 
Om du gjør et fritekstsøk på ordet «mellomtrinnet» vil du få treff på dokumenter som har ordet «mellomtrinnet» i tittelen, sammendraget eller som emneord. Fordi ulike betegnelser kan bli brukt om det samme fenomenet, er det viktig å bruke flere søkeord. Ord som skole, barneskole, grunnskole osv. er alle synonymer som kan være brukt i en tekst om mellomtrinnet.
:::

Alternativ, eller tillegg, til fritekstsøk er søk via kontrollert vokabular, såkalte [emneordsøk](#emneordssøk)

### Frasesøk
Dersom søkebegrepet ditt består av mer en ett ord, for eksempel tilpasset opplæring, må du markere det med anførselstegn når du søker: “tilpasset opplæring”. Du søker da på frasen **tilpasset opplæring**, og ikke tilpasset og opplæring som to separate ord.

### Trunkering
Ved trunkering søker du på stammen av et ord for å få med ulike varianter av ordet. Som regel er trunkeringstegnet en stjerne (\*).  Barn\* gir treff på barnet, barna, barneskole, barneskule, barnehage osv.

## Emneordssøk
Fagspesifikke databaser inneholder ofte emneordlister (også kalt tesaurus), med liste over standardiserte fagtermer som brukes for å beskrive innholdet i et dokument. Det er mulig å søke via disse emneordlistene. Når du søker på emneord via emneordlisten, får du treff på alle dokumenter som er merket med dette emneordet. For eksempel dokumenter i databasen som handler om skole, får emneordet skole selv om forfatteren har brukt andre termer (mellomtrinnet, skule, grunnskole osv.) Det kan lønne seg å finne de emneordene som dekker ditt temaområde. Innen helsefag er Medical Subject Headings (MeSH) den mest kjente emneordslisten, og den brukes i flere helsefaglige databaser. For et grundig søk bør emneordssøket gjøres i tillegg til fritekstsøket.

## Kombiner søkeord

<Video id="V20SCScsECE" />

Når du har funnet alle relevante søkeord, må du tenke gjennom hvordan de skal kombineres. I de fleste databaser kan du kombinere søkeord på tre forskjellige måter: med OG/AND, ELLER/OR, IKKE/NOT. Dette kalles å søke med boolske operatorer.

### Kombinasjon med AND

Dersom du velger å kombinere to søkeord med AND, får du bare treff på litteratur som omhandler begge ordene. Kombinasjoner med AND spisser søket, og bidrar til å **begrense** antall treff.

Eksempel: Søk på **Diabetes AND Livskvalitet** gir bare treff på litteratur som handler om **både** diabetes og livskvalitet.

<ClientOnly>
  <Venn 
    v-bind:sets="[
        {sets: ['Diabetes'], size: 12}, 
        {sets: ['Livskvalitet'], size: 12},
        {sets: ['Diabetes','Livskvalitet'], size: 3}
    ]" 
    text="Treff for AND-søk"
    type="and" />
</ClientOnly>

### Kombinasjon med OR

Dersom du velger å kombinere to søkeord med OR, får du treff som inneholder det ene, det andre eller begge ordene. Kombinasjoner med OR utvider søket og gir deg **flere** treff. OR brukes som regel ved synonyme søkeord.

Eksempel: Søk på **Diabetes OR Sukkersyke** gir treff på diabetes, sukkersyke eller begge deler.

<ClientOnly>
  <Venn 
    v-bind:sets="[
        {sets: ['Diabetes'], size: 12}, 
        {sets: ['Sukkersyke'], size: 12},
        {sets: ['Diabetes','Sukkersyke'], size: 3}
    ]" 
    text="Treff for OR-søk"
    type="or" />
</ClientOnly>

### Kombinasjon med NOT

Dersom du velger å kombinere to søkeord med NOT, får du treff på dokumenter som inneholder det første søkeordet mens doukumentene som inneholder det andre søkeordet (søkeordet etter etter NOT) utelates. Bruk NOT-operatoren med forsiktighet, da den potensielt kan ekskludere relevant litteratur.

Eksempel: Søk på **Diabetes NOT Svangerskapsdiabetes** gir treff på litteratur som omhandler diabetes men utelater samtidig all litteratur hvor søkeordet svangerskapsdiabetes forekommer i referansen.

<ClientOnly>
  <Venn 
    v-bind:sets="[
        {sets: ['Diabetes','Svangerskaps- diabetes'], size: 3},
        {sets: ['Diabetes'], size: 12}, 
        {sets: ['Svangerskaps- diabetes'], size: 12},
    ]" 
    text="Treff for NOT-søk"
    type="not" />
</ClientOnly>


## Bruk av søketabell

Tabellen nedenfor har tre kolonner, en for hvert av de tre tematiske elementene i problemstillingen. Først kombineres de synonyme søkeordene i hver kolonne med ELLER, så kombineres resultatene for hver av de tre kolonnene med OG.

Denne framgangsmåten kan brukes på de aller fleste prosjekter.

Problemstilling: «Hvordan har globaliseringen påvirket sosiale ulikheter innenfor utdanningssystemet?» 

:::: søketabell 
::: tabell
Globalisering

**OR**

Globalisation

**OR**

Globalization

**OR** 

"Global approach*"
:::

::: kombinator
**AND**
:::

::: tabell
Inequalit*

**OR**

Inequit*

**OR**

"Equal opportunit*"
:::

::: kombinator
**AND**
:::

::: tabell
Utdanning*

**OR**

Skole*

**OR**

Education*

**OR**

School*

:::
::::

[Vil du prøve selv? Trykk her og fyll inn med dine egne søkeord.](/docs/soketabell.docx)


## Siteringssøk

Noen databaser og søkeverktøy, f. eks. Web of Science og Google Scholar, gir informasjon om siteringer. Det vil si hvor mange artikler e.l., og hvilke, som har sitert et gitt dokument. Hvor ofte et dokument er sitert, kan si kan si noe om hvor stor gjennomslagskraft dokumentet har hatt på fagområdet. Klikker du på lenken «Cited by» i Google Scholar, får du opp en liste med siteringer. En slik liste kan brukes til å løfte fram sentrale dokumenter og nøkkelforfattere.

## Let i referanselister
Det er ikke bare ved å foreta søk i databaser du finner god og kvalitetssikret informasjon. Hvis du har funnet en vitenskapelig artikkel som er midt i blinken for din oppgave, kan artikkelens referanseliste vise til annen aktuell litteratur som du kan bruke.
