<script setup>
import { ref } from 'vue'
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'

const props = defineProps({
  id: String,
  title: String,
});

const iframe = ref(null)

iframe.value?.stopVideo()
iframe.value?.pauseVideo()
iframe.value?.playVideo()
</script>

<template>
  <LiteYouTubeEmbed :id="id" ref="iframe" :title="title" />
</template>