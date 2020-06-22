<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar
      v-if="shouldShowNavbar"
      @toggle-sidebar="toggleSidebar"
    />

    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    />

    <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </Sidebar>

    <Home v-if="$page.frontmatter.home" />

    <Page
      v-else
      :sidebar-items="sidebarItems"
    >
      <template #top>
        <slot name="page-top" />
      </template>
      <template #bottom>
        <slot name="page-bottom" />
        <footer class="theme-default-content">
          <div class="partners">
            <div class="partner">
              <a href="https://www.hvl.no">
                <picture>
                  <source media="(max-width: 809px)" srcset="/partners/hvl-icon.jpg">
                  <img src="/partners/hvl-logo.jpg" alt="Høyskolen på Vestlandet"/>
                </picture>
              </a>
              <div class="title">
                Høyskolen på Vestlandet
              </div>
            </div>
            <div class="partner">
              <a href="https://www.uib.no">
                <picture>
                  <source media="(max-width: 809px)" srcset="/partners/uib-icon.png">
                  <img src="/partners/uib-logo.png" alt="Universitetet i Bergen"/>
                </picture>
              </a>
              <div class="title">
                Universitetet i Bergen
              </div>
            </div>
            <div class="partner">
              <a href="https://www.uio.no">
                <picture>
                  <source media="(max-width: 809px)" srcset="/partners/uio-icon.png">
                  <img src="/partners/uio-logo.png" alt="Universitetet i Oslo"/>
                </picture>
              </a>
              <div class="title">
                Universitetet i Oslo
              </div>
            </div>
            <div class="partner">
              <a href="https://www.nb.no">
                <picture>
                  <source media="(max-width: 809px)" srcset="/partners/nb-icon.png">
                  <img src="/partners/nb-logo.png" alt="Nasjonalbiblioteket"/>
                </picture>
              </a>
              <div class="title">
                Nasjonalbiblioteket
              </div>
            </div>
          </div>
          <div class="container two-column footer-links">
            <div class="align-right">
              <div><a href="/om/">Om Søk og skriv</a></div>
              <div><a href="/om/kontaktinformasjon/">Kontaktinformasjon</a></div>
              <div><a href="/om/sok-og-skriv-i-undervisning/">Søk og skriv i undervisning</a></div>
            </div>
            <div class="align-left">
              <div><a href="/en/about/">About Search and write</a></div>
              <div><a href="/en/about/contact-information/">Contact</a></div>
            </div>
          </div>
        </footer>
      </template>
    </Page>
  </div>
</template>

<style lang="stylus" scoped>
footer .partners  
  grid-template-columns: 1fr 1fr
  grid-gap: 2.5rem
  display: grid
  align-items: center
  justify-content: center
  margin-bottom: 2rem
  @media screen and (min-width: 809px) and (max-width: $MQNarrow)
    grid-template-columns: 1fr 1fr
  @media screen and (max-width: 809px)
    grid-template-columns: 1fr 1fr 1fr 1fr
    grid-gap: 1rem
  .partner
    display: grid
    align-items: left
    @media screen and (max-width: $MQMobile)
      align-items: center
      a
        margin: auto
    img
      max-height: 60px
    .title
      display: none
</style>

<script>
import Home from '@parent-theme/components/Home.vue'
import Navbar from '@parent-theme/components/Navbar.vue'
import Page from '@parent-theme/components/Page.vue'
import Sidebar from '@parent-theme/components/Sidebar.vue'
import { resolveSidebarItems } from '@parent-theme//util'

export default {
  name: 'Layout',

  components: {
    Home,
    Page,
    Sidebar,
    Navbar
  },

  data () {
    return {
      isSidebarOpen: false
    }
  },

  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home
        && frontmatter.sidebar !== false
        && this.sidebarItems.length
      )
    },

    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },

  mounted () {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
  },

  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>
