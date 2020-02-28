---
title: "Contact information"
date: "2013-04-16"
---

# Contact information

Contact the editorial board for any questions regarding the _Search & write website_. Please mention "search&write" in subject field.

Questions regarding use of references should be addressed to your academic library.

## Editors

<div class="persons">
  <div class="person" v-for="i in items">
    <div class="image">
      <img :src="i.imageUrl" v-if="i.imageUrl">
    </div>
    <div class="content">
      <h3>{{i.fullname}}</h3>
      <p>{{i.affiliation.en}}</p>
      <p v-if="i.bio && i.bio.no">{{i.bio.en}}</p>
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
import data from '../../om/persons.json'
export default {
  data () {
      return {
          items: data.persons
      }
  }
}
</script>
