<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <details>
      <summary>{{ $lang === "NO" ? "Bygg inn" : "Embed" }}</summary>
      <pre>{{ iframe }}</pre>
    </details>
    <PageEdit />
    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from "@parent-theme/components/PageEdit.vue";
import PageNav from "@parent-theme/components/PageNav.vue";

export default {
  components: { PageEdit, PageNav },
  props: ["sidebarItems"],
  computed: {
    iframe: function() {
      return `<iframe
  src="https://sokogskriv.no${this.$page.path}"
  width="900" height="600" style="overflow: hidden;" />`;
    },
  },
};
</script>

<style lang="stylus">
details
  max-width 640px
  margin 0 auto
  padding 0 2.5rem
summary
  text-align right
  padding 0
  margin-bottom: 5px
  color: #666
details pre
  font-size 0.9em
  border-left solid 0.5rem #96a407
  background-color #f3f5f7
  padding 1rem 1.5rem
  margin 0
.page
  padding-bottom 2rem
  display block
</style>
