<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import { defineComponent } from 'vue'
import { usePageLang, usePageData } from '@vuepress/client'
const locale = usePageLang()
const page = usePageData()

defineComponent({
  setup() {
    const locale = usePageLang();

    return {
      locale
    };
  }
});

const iframe = `<iframe
  src="https://sokogskriv.no${page.value.path}"
  width="900" height="600" style="overflow: hidden;" />`

</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="theme-default-content">
        <hr />
        <div class="partners" v-if="locale === 'EN'">
          <div class="partner">
            <a href="https://www.hvl.no">
              <picture>
                <source media="(max-width: 719px)" srcset="/partners/hvl-icon.jpg">
                <img src="/partners/hvl-logo-en.jpg" alt="Western Norway University of Applied Sciences" />
              </picture>
            </a>
            <div class="title">
              Western Norway University of Applied Sciences
            </div>
          </div>
          <div class="partner">
            <a href="https://www.uib.no">
              <picture>
                <source media="(max-width: 719px)" srcset="/partners/uib-icon.png">
                <img src="/partners/uib-logo-en.png" alt="University of Bergen" />
              </picture>
            </a>
            <div class="title">
              University of Bergen
            </div>
          </div>
          <div class="partner">
            <a href="https://www.uio.no">
              <picture>
                <source media="(max-width: 719px)" type="image/svg+xml" srcset="/partners/uio-icon-en.svg">
                <img src="/partners/uio-logo-en.svg" alt="University of Oslo" />
              </picture>
            </a>
            <div class="title">
              University of Oslo
            </div>
          </div>
        </div>
        <div class="partners" v-if="locale === 'NO'">
          <div class="partner">
            <a href="https://www.hvl.no">
              <picture>
                <source media="(max-width: 719px)" srcset="/partners/hvl-icon.jpg">
                <img src="/partners/hvl-logo.jpg" alt="Høyskolen på Vestlandet" />
              </picture>
            </a>
            <div class="title">
              Høgskulen på Vestlandet
            </div>
          </div>
          <div class="partner">
            <a href="https://www.uib.no">
              <picture>
                <source media="(max-width: 719px)" srcset="/partners/uib-icon.png">
                <img src="/partners/uib-logo.png" alt="Universitetet i Bergen" />
              </picture>
            </a>
            <div class="title">
              Universitetet i Bergen
            </div>
          </div>
          <div class="partner">
            <a href="https://www.uio.no">
              <picture>
                <source media="(max-width: 719px)" type="image/svg+xml" srcset="/partners/04_uio_segl_pos.svg">
                <img src="/partners/uio-logo.svg" alt="Universitetet i Oslo" />
              </picture>
            </a>
            <div class="title">
              Universitetet i Oslo
            </div>
          </div>
        </div>

        <hr />

        <div class="container footer-links">
          <div v-if="locale === 'NO'">
            <div><a href="/om/">Om Søk & Skriv</a></div>
            <div><a href="/om/kontaktinformasjon.html">Kontaktinformasjon</a></div>
            <div><a href="/om/sok-og-skriv-i-undervisning.html">Søk & Skriv i undervisning</a></div>
            <div><a
                href="https://uustatus.no/nb/erklaringer/publisert/c6d9a394-b5ac-48fd-9f1f-0154b2daacbc">Tilgjengelighetserklæring</a>
            </div>
            <details class="embed">
              <summary>Bygg inn</summary>
              <pre class="">{{ iframe }}</pre>
            </details>
          </div>
          <div v-if="locale === 'EN'">
            <div><a href="/en/about/">About Search & Write</a></div>
            <div><a href="/en/about/contact-information.html">Contact</a></div>
            <details class="embed">
              <summary>Embed</summary>
              <pre class="">{{ iframe }}</pre>
            </details>
          </div>
        </div>
      </div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
details.embed {
  margin: 0em auto;
  padding: 10px;

  width: 640px;
}

summary.embed {
  background-color: var(--c-details-bg) !important;
  padding: 0;
  margin: 5px 0 !important;
  color: #666;
  overflow-x: scroll;
  text-align: center;
}

details.embed pre {
  border-radius: 0 !important;
  font-size: 0.9em;
  background-color: #f3f5f7;
  padding: 0.5rem 1rem !important;
  margin: 0.25em 0 !important;
}

.page {
  padding-bottom: 2rem;
  display: block;
}
</style>