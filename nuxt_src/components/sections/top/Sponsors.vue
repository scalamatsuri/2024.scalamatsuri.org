<i18n lang="yaml">
## language=yaml
en:
  sponsor_title: "Sponsors"
  sponsor_overview: |
    We are looking for sponsors who can support ScalaMatsuri, Asia's largest international Scala conference.<br>
    For details, please see the <a href="%{sponsor_link}">sponsor recruitment page</a>.
  syogun: "Syogun Sponsor"
  daimyo: "Daimyo Sponsor"
  samurai: "Samurai Sponsor"
  inrou: "Inrou Sponsor"
  satellite: "Satellite Sponsor"
  bugyo: "Bugyo Sponsor"
  bugyo_kintone: "Kintone Bugyo"
  bugyo_cacoo: "Ukiyo-e Bugyo"
  bugyo_hatena: "Kawara-ban Bugyo"
  bugyo_sentry: "Metsuke Bugyo"
  bugyo_scalatimes: "Kawara-ban Bugyo"
ja:
  sponsor_title: "スポンサー"
  sponsor_overview: |
    アジア最大級の国際Scalaカンファレンスである、ScalaMatsuriに協賛いただけるスポンサー様を募集しています。<br>
    詳細は<a href="%{sponsor_link}">スポンサー募集ページ</a> をご覧ください。
  syogun: "将軍スポンサー"
  daimyo: "大名スポンサー"
  samurai: "侍スポンサー"
  inrou: "印籠スポンサー"
  satellite: "さてらいとスポンサー"
  bugyo: "奉行スポンサー"
  bugyo_kintone: "筋斗雲奉行"
  bugyo_cacoo: "浮世絵奉行"
  bugyo_hatena: "瓦版奉行"
  bugyo_sentry: "目付奉行"
  bugyo_scalatimes: "瓦版奉行"
</i18n>

<template>
  <section class="sponsors">
    <div class="sponsors_inner">
      <h2 class="content_title">
        {{ $t("sponsor_title") }}
      </h2>
      <p class="sponsors_content_text">
        <span v-html="$t('sponsor_overview', { sponsor_link: localePath('sponsorship') })" />
      </p>
      <h3 class="sponsors_title sponsors_subtitle-em">
        {{ $t("syogun") }}
      </h3>
      <ul class="sponsors_list">
        <li v-for="sponsor in syoguns" :key="sponsor.logo" class="sponsors_item">
          <a :href="sponsor.url" target="_blank" rel="noopener"><img v-lazy="sponsor.logo" :alt="sponsor.name" /></a>
        </li>
      </ul>
      <h3 class="sponsors_subtitle">
        {{ $t("daimyo") }}
      </h3>
      <ul class="sponsors_list">
        <li v-for="sponsor in daimyos" :key="sponsor.logo" class="sponsors_item">
          <a :href="sponsor.url" target="_blank" rel="noopener"><img v-lazy="sponsor.logo" :alt="sponsor.name" /></a>
        </li>
      </ul>
      <h3 class="sponsors_subtitle">
        {{ $t("samurai") }}
      </h3>
      <ul class="sponsors_list">
        <li v-for="sponsor in samurais" :key="sponsor.logo" class="sponsors_item">
          <a :href="sponsor.url" target="_blank" rel="noopener"><img v-lazy="sponsor.logo" :alt="sponsor.name" /></a>
        </li>
      </ul>
      <h3 class="sponsors_subtitle">
        {{ $t("inrou") }}
      </h3>
      <ul class="sponsors_list">
        <li v-for="sponsor in inrous" :key="sponsor.logo" class="inrou_sponsors_item">
          <a :href="sponsor.url" target="_blank" rel="noopener"><img v-lazy="sponsor.logo" :alt="sponsor.name" /></a>
          <p>{{ sponsor.display_name }}</p>
        </li>
      </ul>
      <h3 class="sponsors_subtitle">
        {{ $t("satellite") }}
      </h3>
      <ul class="sponsors_list">
        <li v-for="sponsor in satellites" :key="sponsor.logo" class="sponsors_item">
          <a :href="sponsor.url" target="_blank" rel="noopener"><img v-lazy="sponsor.logo" :alt="sponsor.name" /></a>
          <p>{{ sponsor.display_name }}</p>
        </li>
      </ul>
      <h3 class="sponsors_subtitle">
        {{ $t("bugyo") }}
      </h3>
      <ul class="sponsors_list">
        <li v-for="sponsor in bugyos" :key="sponsor.logo" class="sponsors_item">
          <a :href="sponsor.url" target="_blank" rel="noopener"><img v-lazy="sponsor.logo" :alt="sponsor.name" /></a>
          <p>{{ sponsor.display_name }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import syoguns from "~/data/sponsors/syogun"
import daimyos from "~/data/sponsors/daimyo"
import samurais from "~/data/sponsors/samurai"
import inrous from "~/data/sponsors/inrou"

export default {
  data() {
    return {
      syoguns: [],
      daimyos: [],
      inrous: [],
      samurais: [],
      satellites: [
        {
          name: "株式会社ギブリー",
          logo: "/img/sponsors/track.png",
          url: "https://tracks.run/",
        },
      ],
      bugyos: [
        {
          name: "kintone",
          logo: "/img/sponsors/kintone.png",
          url: "https://kintone.cybozu.com/jp/",
          display_name: this.$i18n.t("bugyo_kintone"),
        },
        {
          name: "cacoo",
          logo: "/img/sponsors/cacoo.png",
          url: "https://cacoo.com/",
          display_name: this.$i18n.t("bugyo_cacoo"),
        },
        {
          name: "hatena",
          logo: "/img/sponsors/hatena.png",
          url: "http://hatenacorp.jp/",
          display_name: this.$i18n.t("bugyo_hatena"),
        },
        {
          name: "sentry",
          logo: "/img/sponsors/sentry.svg",
          url: "https://sentry.io/",
          display_name: this.$i18n.t("bugyo_sentry"),
        },
        {
          name: "scalatimes",
          logo: "/img/sponsors/scalatimes.png",
          url: "https://scalatimes.com/",
          display_name: this.$i18n.t("bugyo_scalatimes"),
        },
      ],
    }
  },
  mounted() {
    function notDummy(sponsor) {
      return sponsor.logo && !sponsor.logo.includes("dummy")
    }
    this.syoguns = this.shuffle(syoguns.filter((s) => notDummy(s)))
    this.daimyos = this.shuffle(daimyos.filter((s) => notDummy(s)))
    this.inrous = this.shuffle(inrous.filter((s) => notDummy(s)))
    this.samurais = this.shuffle(samurais.filter((s) => notDummy(s)))
  },
}
</script>

<style lang="scss" scoped>
.sponsors_title {
  font-size: 48px;
  font-weight: bold;
}
.sponsors_content_text {
  margin-top: 40px;
  margin-bottom: 5%;
  font-size: 16px;
  line-height: 28px;
}
.sponsors_subtitle {
  margin-top: 67px;
  font-size: 20px;
  font-weight: bold;
  line-height: normal;
  color: #4f4c47;
  background: -webkit-linear-gradient(0deg, #7f797f, #4f4c47);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &-em {
    font-size: 30px;
    color: #f39200;
    background: -webkit-linear-gradient(0deg, #f7d000, #f39200);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
.sponsors {
  background-color: #f1f1f1;
  text-align: center;
  padding: 58px 0 100px;
}
.sponsors_list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 766px;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
}
.sponsors_inner {
}
.sponsors_item {
  padding: 0 10px;
  width: 33%;
  max-width: 242px;
  margin-top: 20px;

  img {
    width: 100%;
    background: white;
  }
  p {
    padding-top: 6px;
    font-size: 16px;
    color: #4f4c47;
  }
}
.inrou_sponsors_item {
  padding: 0 10px;
  width: 20%;
  max-width: 100px;
  margin-top: 20px;

  img {
    width: 100%;
    background: white;
  }
  p {
    padding-top: 6px;
    font-size: 16px;
    color: #4f4c47;
  }
}
</style>
