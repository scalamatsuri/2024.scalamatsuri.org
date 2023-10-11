<i18n lang="yaml">
## language=yaml
en:
  title: "Sponsors"
  sponsorType:
    syogun: Shogun Sponsor
    daimyo: Daimyo Sponsor
  inquiry:
    title: Inquiry about Sponsorship
    text1: Posting of job postings on this page is provided to sponsor companies over Daimyo sponsors.
ja:
  title: スポンサー
  sponsorType:
    syogun: 将軍スポンサー
    daimyo: 大名スポンサー
  inquiry:
    title: スポンサー申し込みはこちら
    text1: このページでの広告情報の掲載は大名スポンサー以上のスポンサー様に提供させていただいております。
</i18n>

<template>
  <div id="sponsor">
    <div class="main">
      <div class="main_inner">
        <h1 class="main_title">
          {{ $t("title") }}
        </h1>
      </div>
    </div>
    <section class="inquiry">
      <h3 class="inquiry_title">
        <nuxt-link :to="localePath('sponsorship')">
          {{ $t("inquiry.title") }}
        </nuxt-link>
      </h3>
      <p class="inquiry_text">
        {{ $t("inquiry.text1") }}
      </p>
    </section>
    <!-- sponsor ここから -->
    <div class="sponsor">
      <h2 v-if="syogun_sponsors.length" class="sponsor_title">
        {{ $t("sponsorType.syogun") }}
      </h2>
      <div v-if="syogun_sponsors.length" class="sponsor_list">
        <div v-for="sponsor in syogun_sponsors" :key="sponsor.logo">
          <sponsor :sponsor="sponsor" />
        </div>
      </div>
      <h2 class="sponsor_title">
        {{ $t("sponsorType.daimyo") }}
      </h2>
      <div class="sponsor_list">
        <div v-for="sponsor in daimyo_sponsors" :key="sponsor.logo">
          <sponsor :sponsor="sponsor" />
        </div>
      </div>
    </div>
    <!-- sponsor ここまで -->
  </div>
</template>

<script>
import Sponsor from "~/components/sections/sponsor/sponsor.vue"
import syoguns from "~/data/sponsors/syogun"
import daimyos from "~/data/sponsors/daimyo"

export default {
  components: {
    Sponsor,
  },
  data() {
    return {
      syogun_sponsors: [],
      daimyo_sponsors: [],
    }
  },
  head() {
    const $t = this.$t.bind(this)
    return {
      title: $t("title"),
      meta: [{ name: "og:title", content: `${$t("title")} | ScalaMatsuri 2024` }],
    }
  },
  mounted() {
    function hasHtmls(sponsor) {
      return sponsor.text_html
    }
    this.syogun_sponsors = this.shuffle(syoguns.filter((s) => hasHtmls(s)))
    this.daimyo_sponsors = this.shuffle(daimyos.filter((s) => hasHtmls(s)))
  },
}
</script>
