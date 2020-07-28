---
title: "Contact information"
date: "2013-04-16"
---

# Contact information

You are welcome to contact the editors for any questions regarding the _Search & Write website_. Please mention "search & write" in the subject field.

Questions regarding use of references should be addressed to your academic library.

## Editors

<div class="persons">
  <div class="person" v-for="i in items">
    <div class="image">
      <img :src="i.imageUrl" v-if="i.imageUrl">
    </div>
    <div class="content">
      <a :href="i.url" target="_blank"><h3>{{i.fullname}}</h3></a>
      <p>{{i.affiliation.en}}</p>
      <p v-if="i.bio && i.bio.no">{{i.bio.en}}</p>
    </div>
  </div>
</div>

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
