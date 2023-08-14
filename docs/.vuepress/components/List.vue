<template>
  <div class="sos-list">
    <img v-if="image" :src="image" :alt="alt">
    <div v-if="text" v-html="text">
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: String,
  alt: String,
  text: String,
})
</script>

<style lang="scss" scoped>
div.sos-list {
  display: inline-grid;
  grid-template-columns: 1fr 8fr;
  align-items: center;
  grid-gap: 1em;

  img {
    width: 100%;
  }
}
</style>
