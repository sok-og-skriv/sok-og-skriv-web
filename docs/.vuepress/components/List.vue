<template>
<div class="sos-list">
  <img v-if="image" :src="image" :alt="alt">
  <div v-if="text" v-html="text">
  </div>
</div>
</template>

<script>
import Vue from 'vue';
export default {
  props: {
    image: String,
    alt: String,
    text: String,
  }
}
</script>

<style lang="stylus" scoped>
div.sos-list
  display: inline-grid
  grid-template-columns: 1fr 8fr
  align-items: center
  grid-gap: 1em

div.sos-list
  img 
    width: 100%
</style>
