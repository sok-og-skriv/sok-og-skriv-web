<template>
  <div>
    <div class="persons">
      <div class="person" v-for="i in activePersons" :key="i.id">
        <div class="image">
          <img :src="i.imageUrl" v-if="i.imageUrl">
        </div>
        <div class="content">
          <a :href="i.url" target="_blank">
            <h3>{{ i.fullname }}</h3>
          </a>
          <p>{{ i.affiliation.no }}</p>
          <p v-if="i.bio && i.bio.no">{{ i.bio.no }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../public/persons.json'

export default {
  data() {
    return {
      activePersons: [],
    }
  },
  mounted() {
    this.getActivePersons()
  },
  methods: {
    getActivePersons() {
      this.activePersons = data.persons.filter((person) => person.active === true)
    },
  },
}
</script>