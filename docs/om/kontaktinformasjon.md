---
title: "Kontaktinformasjon"
date: "2013-02-04"
---

# Kontaktinformasjon

Vi svarer gjerne på spørsmål som dreier seg om nettstedet. Merk e-posten med "søkogskriv". Epostliste: sokogskriv\[at\]uio.no. For spørsmål om oppsett av referanser er det best å henvende seg til biblioteket.

Følg oss også gjerne på [Facebook](https://www.facebook.com/sokogskriv "Søk & Skriv på Facebook") og [Youtube](//www.youtube.com/user/sokogskriv "Søk & Skriv på Youtube")!

## Redaksjonen

<div class="persons">
  <div class="person" v-for="i in items">
    <div class="image">
      <img :src="i.imageUrl" v-if="i.imageUrl">
    </div>
    <div class="content">
      <h3>{{i.fullname}}</h3>
      <p>{{i.affiliation.no}}</p>
      <p v-if="i.bio && i.bio.no">{{i.bio.no}}</p>
    </div>
  </div>
</div>

<style lang="stylus" scoped>
.persons
  display: grid
  grid-template-columns: 1fr
  .person
    display: grid
    grid-template-columns: 1fr 2fr
    margin: 1rem 0
    padding: 1rem
    border-radius: 5%
    background-color: #f0f4f8
    grid-gap: 1rem
    .content
      h3
        margin: 0
      p:last-child
        margin-bottom: 0
    .image img
      border-radius: 5%
      width: 100%
      height: inherit
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
