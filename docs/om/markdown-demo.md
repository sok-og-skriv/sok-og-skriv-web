---
title: "Markdown demo"
date: "2020-02-12"
---

# Markdown demo

Søk og skriv dokumentasjon på bruk av Markdown. Se også [Markdown-it](https://markdown-it.github.io/) for flere muligheter.

## Avsnitt

Dette er avsnitt én og det må en blank linje til for at det skal dukke opp et andre avsnitt.

Og her er avsnitt to.

## Horisontal skillelinje

``` markdown
---
```

---

## Utheving og kursiv

``` markdown
**uthevet tekst**

__uthevet tekst__

*kursiv*

_kursiv_
```

**uthevet tekst**

__uthevet tekst__

*kursiv*

_kursiv_

## Overskrifter

``` markdown
# Heading 1

## Heading 2

### Heading 3

#### Heading 4
```

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

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

## Lenker og youtube

``` markdown
**lenke**

[lenketekst](url)

[skriving](/skriving)

[kildekompasset](https://kildekompasset.no)

**youtube**

@[youtube](FJKg3G-JRpg)
```

**lenke**

[skriving](/skriving)

[kildekompasset](http://kildekompasset.no)

**youtube**

@[youtube](FJKg3G-JRpg)

## Bilder

``` markdown
![bildetekst](lenke-til-bilde)

![HVL logo](../images/hvl_logo.jpg)
```

![HVL logo](../images/hvl_logo.jpg)

## Bokser

``` markdown
::: tip TIPS
_tekst_
:::

::: warning ADVARSEL
_tekst_
:::

::: danger UFF OG NEI
_tekst_
:::

::: details Vi og skjul
Blabla
:::

::: tip TIPS med "vis og skjul"
_tekst_

::: details Se her da
__blabla__
:::
```

::: tip TIPS
_tekst_
:::

::: warning ADVARSEL
_tekst_
:::

::: danger UFF OG NEI
_tekst_
:::

::: details Vi og skjul
Blabla
:::

::: tip TIPS med "vis og skjul"
_tekst_

::: details Se her da
__blabla__
:::

## Tabeller

``` markdown
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
