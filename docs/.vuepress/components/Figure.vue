<template>
  <figure :class="type">
    <img :src="src" :alt="alt">
    <figcaption v-if="caption" v-html="caption">
    </figcaption>
  </figure>
</template>

<script setup>
const props = defineProps({
  src: String,
  alt: String,
  caption: String,
  type: String
})

</script>

<style lang="scss" scoped>
figure {
  img {
    width: 100%;
  }
}

@media screen and (min-width: 719px) {
  figure.right {
    width: 50%;
    float: right;
    margin-inline-end: 0;
  }

  figure.left {
    width: 50%;
    float: left;
    margin-inline-start: 0;
  }
}
</style>
