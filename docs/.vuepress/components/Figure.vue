<template>
<figure :class="type">
  <img :src="src">
  <figcaption v-if="caption" v-html="caption">
  </figcaption>
</figure>
</template>

<script>
import Vue from 'vue';
export default {
  props: {
    src: String,
    caption: String,
    type: String
  }
}
</script>

<style lang="stylus" scoped>
figure
  img 
    width: 100%

figure.right
  @media screen and (min-width: $MQMobile)
    width: 50%
    float: right
    margin-inline-end: 0

figure.left
  @media screen and (min-width: $MQMobile)
    width: 50%
    float: left
    margin-inline-start: 0
</style>
