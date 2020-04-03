---
title: "Kontaktinformasjon"
date: "2013-02-04"
---

# Kontaktinformasjon

Vi svarer gjerne på spørsmål som dreier seg om nettstedet. Merk e-posten med "søkogskriv". Epostliste: sokogskriv\[at\]uio.no. For spørsmål om oppsett av referanser er det best å henvende seg til faglærer eller til biblioteket.

Følg oss også gjerne på [Facebook](https://www.facebook.com/sokogskriv "Søk & Skriv på Facebook") og [Youtube](https://www.youtube.com/user/sokogskriv "Søk & Skriv på Youtube")!

## Redaksjonen

<div class="persons">
  <div class="person" v-for="i in items">
    <div class="image">
      <img :src="i.imageUrl" v-if="i.imageUrl">
    </div>
    <div class="content">
      <a :href="i.url" target="_blank"><h3>{{i.fullname}}</h3></a>
      <p>{{i.affiliation.no}}</p>
      <p v-if="i.bio && i.bio.no">{{i.bio.no}}</p>
    </div>
  </div>
</div>

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
