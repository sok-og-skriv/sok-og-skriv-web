---
title: "Markdown demo"
date: "2020-02-12"
---

# Markdown demo

Søk og skriv dokumentasjon på bruk av Markdown. Se også [Markdown-it](https://markdown-it.github.io/) for flere muligheter.

## Tags for søk

Markdown filene har en metablokk eller "frontmatter" som det heter i markdownsk. Her har vi tittel og eventuelt dato for når siden ble opprettet. Her kan vi også legge inn **søkeord**. Se eksempelet nedenfor og vær oppmerksom på at `Creative Commons` må ha anførselstegn, mens enkelt ord ikke trenger det.

```yaml
---
title: "En side"
date: "2020-01-01"
tags: 
  - søking
  - referansestil
  - "en test kategori"
---
```

## Avsnitt

::: eksempel
Dette er avsnitt én og det må en blank linje til for at det skal dukke opp et andre avsnitt.

Og her er avsnitt to.
:::

## Enkel linjeskift

Ved å legge til **to mellomrom** kan man få et enkelt linjeskift

::: eksempel
Dette er linje 1. Med to mellomrom her ->  
Dette er linje 2
:::

## Horisontal skillelinje

``` markdown
---
```

::: eksempel
...vanskelig å se på grå bakgrunn...

---
:::

## Utheving og kursiv

``` markdown
**uthevet tekst**

__uthevet tekst__

*kursiv*

_kursiv_

***Uthevet OG kursiv***
```
::: eksempel
**uthevet tekst**

__uthevet tekst__

*kursiv*

_kursiv_

***Uthevet OG kursiv***
:::

## Overskrifter

``` markdown
# Heading 1

## Heading 2

### Heading 3

#### Heading 4
```

::: eksempel
# Heading 1

## Heading 2

### Heading 3

#### Heading 4
:::

:: Sitering

``` markdown
> Blokksitering er ganske pent
> Denne linjen er med i samme sitering

Noe tekste i mellom.

> En laaaang, sammenhengende linje trenger bare `> ` i starten. Linjen kan vare og vare og vare og vare. Du kan også *bruke* **Markdown** i en blokksitering.
```

::: eksempel
> Blokksitering er ganske pent
> Denne linjen er med i samme sitering

Noe tekst i mellom her, ja.

> En laaaang, sammenhengende linje trenger bare `> ` i starten. Linjen kan vare og vare og vare og vare. Du kan også *bruke* **Markdown** i en blokksitering.
:::

## Lister

``` markdown
**Uordnet**

+ Lag en liste med `+`, `-`, or `*`
+ Underlister lages med to mellomrom:
  - Underunderliste (med fire foregående mellomrom):
    - Ac tristique libero volutpat at
    - Facilisis in pretium nisl aliquet
+ Enkelt

**Nummerert**

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. Du kan selv lage nummereringen...
1. ...eller bare bruke `1.`

Du kan starte på et ønsket nummer:

57. foo
1. bar
```

::: eksempel
**Uordnet**

+ Lag en liste med `+`, `-`, or `*`
+ Underlister lages med to mellomrom:
  - Underunderliste (med fire foregående mellomrom):
    - Ac tristique libero volutpat at
    - Facilisis in pretium nisl aliquet
+ Enkelt

**Nummerert**

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

---

1. Du kan selv lage nummereringen...
1. ...eller bare bruke `1.`

Du kan starte på et ønsket nummer:

57. foo
1. bar
:::

## Lenker

``` markdown
**lenke**

[lenketekst](url)

*Interne lenker*  
[skriving](/skriving/)

[Kom i gang med å skrive](/skriving/kom-i-gang-med-a-skrive.html)

*Eksterne lenker*  
[kildekompasset](http://kildekompasset.no)
```

::: eksempel
**lenke**

*Interne lenker*  
[skriving](/skriving)

[Kom i gang med å skrive](/skriving/kom-i-gang-med-a-skrive.html)

*Eksterne lenker*  
[kildekompasset](http://kildekompasset.no)
:::

## YouTube

``` markdown
**youtube**

<Video id="FJKg3G-JRpg" />
```

::: eksempel
**youtube**

<Video id="FJKg3G-JRpg" />
:::

## Bilder (ikke anbefalt)

Denne måten er best når bilder skal være en del av teksten, som ikon på denne siden: [Formelle krav til oppsett](/skriving/formelle-krav-til-oppsett.html#brodtekst-marger-og-skriftstorrelse).

***Anbefales ikke!***

``` markdown
![bildetekst](lenke-til-bilde)

![HVL logo](/partners/hvl-logo.jpg)
```

::: eksempel
![HVL logo](/partners/hvl-logo.jpg)
:::

## Bilder II (anbefales)

Bruken av **Figure** gjør at vi kan lage penere bildebokser med bildetekst i Søk og skriv. Ved å ha med "alt" tekst tilfredsstiller vi krav til universell utforming. `type` brukes til å "styre" bildet. "left" drar bildet til venstre og lar teksten flyte rundt, samme for "right". Et `type` tom bruker bildet hele bredden til siden. 

``` html
<Figure
  src="[LENKE TIL BILDE I ./VUEPRESS/PUBLIC/IMAGES/]"
  alt="[ALTERNATIV TEKST, VELDIG VIKTIG FOR Å TILFREDSSTILLE TILGJENGELIGSKRAV]"
  caption="[BILDETEKST]"
  type="[TOM, left ELLER right]"
/>

<Figure
  src="/images/kategori_studier5-1.jpg"
  alt="Fire studenter diskuterer en akademisk tekst"
  caption="Kollokvie. Ill.foto: NHH"
  type=""
/>
```

::: eksempel
<Figure
  src="/images/kategori_studier5-1.jpg"
  alt="Fire studenter diskuterer en akademisk tekst"
  caption="Kollokvie. Ill.foto: NHH"
  type=""
/>
:::


## Bokser


### Tip
``` markdown
::: tip TIPS
_tekst_
:::
```

::: tip TIPS
_tekst_
:::

### Advarsel
``` markdown
::: warning ADVARSEL
_tekst_
:::
```

::: warning ADVARSEL
_tekst_
:::

### Fare
``` markdown
::: danger UFF OG NEI
_tekst_
:::
```

::: danger UFF OG NEI
_tekst_
:::

### Eksempel
``` markdown
::: eksempel Eksempel
Noe mer tekst
:::
```

::: eksempel Eksempel
Noe mer tekst
:::

### Oppgave
``` markdown
::: oppgave Oppgave
Noe mer tekst
:::
```

::: oppgave Oppgave
Noe mer tekst
:::

### Vis/skjul-boks
``` markdown
::: details Vis/skjul-boks
Blabla
:::
```

::: details Vis og skjul
Blabla
:::

### Boks i bokser
Boks i boks gjøres ved å la den ytterste boksen få et ekstra ":".

``` markdown
:::: tip TIPS med "vis og skjul"
_tekst_

::: eksempel Eksempel
Noe mer tekst
:::

::: details Se her da
__blabla__
:::
::::
```

:::: tip TIPS med "vis og skjul"
_tekst_

::: eksempel Eksempel
Noe mer tekst
:::

::: details Se her da
__blabla__
:::
::::

## Tabeller

Tabeller er aldri gøy :-(. Enkleste er å ha tabellen i Excel eller Google Sheets og konvertere til markdown. Da er [Tablesgenerator](https://www.tablesgenerator.com/markdown_tables) topp.

Jeg markerer tabellen på Søk og skriv, går til [Tablesgenerator](https://www.tablesgenerator.com/markdown_tables) og velger `File -> Paste table data`. Det går ann å gjøre enkel redigering med det verktøyet. Det har fungert veldig bra for meg :-).  
Ellers anbefales det å ha tabellene i regneark i Teams.

``` markdown
| Tabeller      | Er            | Blæh  |
| ------------- |:-------------:| -----:|
| col 3 er      | høyre-justert |  1600 |
| col 2 er      | sentrert      |    12 |
| zebra striper | er bra        |     1 |
```

::: eksempel
| Tabeller      | Er            | Blæh  |
| ------------- |:-------------:| -----:|
| col 3 er      | høyre-justert |  1600 |
| col 2 er      | sentrert      |    12 |
| zebra striper | er bra        |     1 |
:::
