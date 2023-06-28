<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import { defineComponent } from 'vue'
import { usePageLang } from '@vuepress/client'
const locale = usePageLang()
console.log(locale)
defineComponent({
  setup() {
    const locale = usePageLang();

    return {
      locale
    };
  }
});

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

        <div class="container two-column footer-links">
          <div class="align-right">
            <div><a href="/om/">Om Søk & Skriv</a></div>
            <div><a href="/om/kontaktinformasjon.html">Kontaktinformasjon</a></div>
            <div><a href="/om/sok-og-skriv-i-undervisning.html">Søk & Skriv i undervisning</a></div>
            <div><a
                href="https://uustatus.no/nb/erklaringer/publisert/c6d9a394-b5ac-48fd-9f1f-0154b2daacbc">Tilgjengelighetserklæring</a>
            </div>
          </div>
          <div class="align-left">
            <div><a href="/en/about/">About Search & Write</a></div>
            <div><a href="/en/about/contact-information.html">Contact</a></div>
          </div>
        </div>
      </div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>