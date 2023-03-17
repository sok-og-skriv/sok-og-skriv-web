<template>
  <div class="video_container">
    <LazyYoutubeVideo :src="data" previewImageSize="hqdefault" />
  </div>
</template>

<script>
import Vue from "vue";
import LazyYoutubeVideo from "vue-lazy-youtube-video";
import "vue-lazy-youtube-video/dist/style.css";

export default {
  components: {
    LazyYoutubeVideo,
  },
  props: {
    id: String,
  },
  data() {
    let id = this.id;
    let data = `https://www.youtube.com/embed/${id}`;

    return {
      data: data,
    };
  },
};
</script>

<style scoped>
.video_container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  margin-bottom: 1rem;
}
.video_container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
