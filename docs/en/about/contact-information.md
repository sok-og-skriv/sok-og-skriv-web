---
title: "Contact information"
date: "2013-04-16"
---

# Contact information

Contact the editorial board for any questions regarding the _Search & write website_. Please mention "search&write" in subject field.

Questions regarding use of references should be addressed to your academic library.

## Editors

<div class="persons" v-for="i in items">
  <div>
    <img :src="i.imageUrl">
  </div>
  <div>
    <h3>{{i.fullname}}</h3>
    <p>{{i.affiliation.en}}</p>
    <p v-if="i.bio && i.bio.en">{{i.bio.en}}</p>
  </div>
</div>

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
import data from '../../om/persons.json'
export default {
  data () {
      return {
          items: data.persons
      }
  }
}
</script>
