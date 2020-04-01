---
title: "Søketeknikker"
date: "2016-07-04"
---

# Søketeknikker

Det første du må gjøre, er å finne gode søkeord (eller søketermer). Bruk problemstillingen som utgangspunkt og identifiser sentrale begreper. Husk å ta med synonymer. Finnes det flere ord som beskriver de begrepene du er ute etter? 

::: tip Språk og terminologi 
*	Bruk fagterminologi. Mange databaser har en innebygd emneordsliste (tesaurus) over anerkjente fagtermer med tilhørende synonymer.
*	Vær oppmerksom på at søkeord som er gode i én database, kan være mindre gode i en annen.
* De fleste internasjonale databaser krever at du søker på engelsk. 
::: 

Selv om Oria gir treff både på norsk og engelsk, kan du gå glipp av svært mange aktuelle dokumenter dersom du bare velger norske søkeord. Engelske fagtermer kan finnes i lærebøker, fagartikler og ordbøker. Les sammendrag og sjekk forfatternes egne emneord. Om du velger å søke på norsk, skal du være oppmerksom på at bokmål gir flere treff enn nynorsk.

::: tip Valg av søkeord 
*	Vær kreativ: Finn flest mulig synonymer til dine søkeord.
*	Ikke bruk for mange ulike søkeord - to til tre er vanligvis nok. 
* Merk at for hvert søkeord (eller -term) kan du ha mange synonymer.
::: 

## Fritekstsøk

Fritekstsøk, eller søk på tekstord, er den vanligste måten å søke på. Da søker du på ord i tittel, sammendrag, emne- og nøkkelord. Siden samme fenomen ofte dekkes av forskjellige termer, er det viktig å søke på synonymer.

::: eksempel Eksempel 
Om du gjør et fritekstsøk på ordet «mellomtrinnet» vil du få treff på dokumenter som har ordet «mellomtrinnet» i tittelen, sammendraget eller som emneord. Fordi ulike begreper kan bli brukt om det samme er, det viktig å søke på synonymer. Ord som skole, barneskole, grunnskole osv. er alle synonymer som kan være brukt i en tekst om mellomtrinnet.
:::


## Avgrensing av søk

Benytt databasenes muligheter for å avgrense en lang treffliste. I de fleste databaser kan du avgrense på publiseringsår, språk, større emneområder og dokumenttyper. Vær obs på at enhver avgrensing kan føre til at du mister viktig informasjon.

## Emneordssøk

<Video id="_yKr4R3k5Pg" />

Når du søker på emneord, får du treff på alle dokumenter som er merket med dette emneordet. Alt innhold i databasen som handler om skole, får emneordet skole selv om forfatteren har brukt andre termer (mellomtrinnet, skule, grunnskole osv.) Det lønner seg derfor å jobbe med å finne de emneordene som dekker ditt område.  

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

Dersom du velger å kombinere to søkeord med NOT, får du treff på det ene ordet mens du utelater det som også handler om det _andre_ søkeordet. Kombinasjoner med NOT kan utelate svært mange treff, så de bør brukes med varsomhet.

Eksempel: Søk på **Diabetes NOT Insulinpumpe** gir treff på diabetes mens det utelater alt som i tillegg handler om insulinpumpe.

<ClientOnly>
  <Venn 
    v-bind:sets="[
        {sets: ['Diabetes'], size: 12}, 
        {sets: ['Insulinpumpe'], size: 12},
        {sets: ['Diabetes','Insulinpumpe'], size: 3}
    ]" 
    text="Treff for NOT-søk"
    type="not" />
</ClientOnly>

## Bruk av søketabell

Tabellen nedenfor har tre kolonner, en for hvert av de tre begrepene i problemstillingen. Først kombineres de synonyme søkeordene i hver kolonne med ELLER, så kombineres alle treffene i de tre kolonnene med OG.

Denne framgangsmåten kan brukes på de aller fleste prosjekter.

Problemstilling: "Lønner det seg for bedrifter å markedsføre seg som bærekraftig?" 

:::: søketabell 
::: tabell
Verdivudering

**OR**

Verdisettelse

**OR**

Valuation estimate

**OR** 

Statement of value
:::

::: kombinator
**AND**
:::

::: tabell
Økologisk

**OR**

Bærekraftig

**OR**

Ecological

**OR**

Sustainable
:::

::: kombinator
**AND**
:::

::: tabell
Metode

**OR**

Fremgangsmåte

**OR**

Method

**OR**

Technique

**OR**

Skill
:::

::::


### Trunkering

Ved trunkering søker du på stammen av et ord for å få med ulike varianter av ordet. Som regel er trunkeringstegnet en stjerne (*). Barn* gir treff på barnet, barna, barneskole, barneskule, barnehage osv. 

### Lagring av søk

De fleste databaser gir deg mulighet til å lagre søket og sende søkehistorikken via e-post. Søkehistorikken viser hvilken database du har søkt i, hvilke søkeord du har brukt, hvordan søkeordene er kombinert og hvor mange treff du har fått. Dette kan være svært nyttig informasjon å ta vare på hvis du for eksempel ønsker å bygge videre på søket, eller hvis du ønsker å foreta det samme søket i en annen database.

### Siteringssøk

Noen databaser og verktøy som Web of Science (lenke) og Google Scholar (lenke) gir informasjon om siteringer. Det vil si hvor mange, og hvem har brukt ett gitt dokument i sin referanseliste. Hvor ofte et dokument er sitert, kan si kan si noe om hvor stor gjennomslagskraft dokumentet har hatt på fagområdet. Klikker du på lenken «Cited by» i Google Scholar, får du opp en liste med siteringer. En slik liste kan brukes til å løfte fram sentrale dokumenter og nøkkelforfattere.

### Let i referanselister
Det er ikke bare ved å foreta søk i databaser du finner god og kvalitetssikret informasjon. Hvis du har funnet en vitenskapelig artikkel som er midt i blinken for din oppgave, kan artikkelens referanseliste vise til annen, aktuell litteratur som du kan bruke.
