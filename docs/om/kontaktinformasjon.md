---
title: "Kontaktinformasjon"
date: "2013-02-04"
---

# Kontaktinformasjon

Vi svarer gjerne på spørsmål som dreier seg om nettstedet. Merk e-posten med "søkogskriv". Epostliste: sokogskriv\[a\]uio.no. For spørsmål om oppsett av referanser er det best å henvende seg til biblioteket.

Følg oss også gjerne på [Facebook](https://www.facebook.com/sokogskriv "Søk & Skriv på Facebook") og [Youtube](//www.youtube.com/user/sokogskriv "Søk & Skriv på Youtube")!

## Liste basert på data

<div class="persons" v-for="i in items">
  <div>
    <img :src="i.imageUrl">
  </div>
  <div>
    <h3>{{i.fullname}}</h3>
    <p>{{i.affiliation.no}}</p>
  </div>
</div>

Slik ser datafilen ut.

``` json
{
  "persons": [
    {
      "fullname": "Ingerid Straume",
      "affiliation": {
        "no": "Universitetet i Oslo",
        "en": "University of Oslo"
      },
      "imageUrl": "/ingerids-150x150.jpg",
      "url": "https://www.ub.uio.no/om/ansatte/uboledadm/ingerids/index.html"
    },
    {
      "fullname": "Tarje Sælen Lavik",
      "affiliation": {
        "no": "Universitetet i Bergen",
        "en": "University of Bergen"
      },
      "imageUrl": "/tarje-150x150.jpg",
      "url": "https://www.uib.no/personer/Tarje.Sælen.Lavik"
    }
  ]
}
```

## Liste basert på vanlig liste

![](../images/ingerids-pressebilde-150x150.jpg)

[Ingerid Straume](https://www.ub.uio.no/english/about/people/uhs/uhsfagstudier/ingerids/)  
Universitetet i Oslo, biblioteket

![](../images/june-150x150.jpg)

![](../images/profilbilde-2018-150x150.png)

![](../images/meg-foto.png)


[June Audsdotter Stafsnes](https://www.hvl.no/person/?user=6022370)  
Høgskulen på Vestlandet, biblioteket

[Henry Langseth ](https://www.uib.no/personer/Henry.Langseth)  
Universitetet i Bergen, biblioteket

[Toril Engesæter](https://www.hvl.no/person/?user=2404847)  
Høgskulen på Vestlandet, biblioteket

[![](../images/søkogskriv-2-150x150.jpg)](/wp-content/uploads/2013/02/søkogskriv-2.jpg)

[Ingunn Rødland](https://www.uib.no/personer/Ingunn.R%C3%B8dland)  
Universitetet i Bergen, biblioteket


<style>
.persons {
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 1rem 0;
  padding: .1rem 1.5rem;
  border-radius: 0.4rem;
  background-color: #f0f4f8;
}

.persons div {
  padding: 1rem 0;
}
</style>

<script>
import data from './persons.json'
export default {
  data () {
      return {
          items: data.persons
      }
  }
}
</script>
