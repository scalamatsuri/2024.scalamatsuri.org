<i18n lang="yaml">
en:
  sponsor_title: 'Sponsors'
  sponsor_overview1: We are looking for sponsors who can support ScalaMatsuri, Asia's largest international Scala conference.
  sponsor_overview2: For details, please see the
  sponsor_recruitment_page: Sponsor Recruitment Page
  syogun: 'Syogun Sponsor'
  tairou: 'Tairou Sponsor'
  daimyo: 'Daimyo Sponsor'
  samurai: 'Samurai Sponsor'
  inrou: 'Inrou Sponsor'
  ninja: 'Ninja Sponsor'
  utage: 'Utage Sponsor'
  bugyo: 'Bugyo Sponsor'
  bugyo_kintone: 'Kintone Bugyo'
  bugyo_cacoo: 'Ukiyo-e Bugyo'
  bugyo_hatena: 'Kawara-ban Bugyo'
  bugyo_sentry: 'Metsuke Bugyo'
  bugyo_scalatimes: 'Kawara-ban Bugyo'
  gofuku_bugyo: The ScalaMatsuri 2024 commemorative T-shirt was designed and produced by FOLIO Co., Ltd.
ja:
  sponsor_title: 'スポンサー'
  sponsor_overview1: アジア最大級の国際Scalaカンファレンスである、ScalaMatsuriに協賛いただけるスポンサー様を募集しています。
  sponsor_overview2: 詳細はスポンサー募集ページをご覧ください。
  sponsor_recruitment_page: スポンサー募集ページ
  syogun: '将軍スポンサー'
  tairou: '大老スポンサー'
  daimyo: '大名スポンサー'
  samurai: '侍スポンサー'
  inrou: '印籠スポンサー'
  ninja: '忍者'
  utage: '宴スポンサー'
  bugyo: '奉行スポンサー'
  bugyo_kintone: '筋斗雲奉行'
  bugyo_cacoo: '浮世絵奉行'
  bugyo_hatena: '瓦版奉行'
  bugyo_sentry: '目付奉行'
  bugyo_scalatimes: '瓦版奉行'
  gofuku_bugyo: ScalaMatsuri 2024 開催記念Tシャツは株式会社FOLIO様にデザイン・制作いただきました。
</i18n>

<template>
  <ClientOnly>
    <section class="sponsors">
      <div class="sponsors_inner">
        <h2 class="content_title">{{ t('sponsor_title') }}</h2>
        <p class="sponsors_content_text">
          <span v-html="t('sponsor_overview1')" />
          <br />
          <span v-html="t('sponsor_overview2')" />
          <a :href="localePath('sponsorship')">{{ t('sponsor_recruitment_page') }}</a>
        </p>
        <h3 class="sponsors_title sponsors_subtitle-syogun">{{ t('syogun') }}</h3>
        <ul class="sponsors_list">
          <li v-for="sponsor in shuffledShoguns" :key="sponsor.logo" class="sponsors_item">
            <a :href="sponsor.url" target="_blank"><img :src="sponsor.logo" :alt="sponsor.en.name" /></a>
            <div v-if="locale == `en`"><p>{{ sponsor.en.name }}</p></div>
            <div v-if="locale == `ja`"><p>{{ sponsor.ja.name }}</p></div>
          </li>
        </ul>
        <h3 class="sponsors_title sponsors_subtitle-tairou">{{ t('tairou') }}</h3>
        <ul class="sponsors_list">
          <li v-for="sponsor in shuffledTairous" :key="sponsor.logo" class="sponsors_item">
            <a :href="sponsor.url" target="_blank"><img :src="sponsor.logo" :alt="sponsor.en.name" /></a>
            <div v-if="locale == `en`"><p>{{ sponsor.en.name }}</p></div>
            <div v-if="locale == `ja`"><p>{{ sponsor.ja.name }}</p></div>
          </li>
        </ul>
        <h3 class="sponsors_title sponsors_subtitle-daimyo">{{ t('daimyo') }}</h3>
        <ul class="sponsors_list">
          <li v-for="sponsor in shuffledDaimyos" :key="sponsor.logo" class="sponsors_item">
            <a :href="sponsor.url" target="_blank"><img :src="sponsor.logo" :alt="sponsor.en.name" /></a>
            <div v-if="locale == `en`"><p>{{ sponsor.en.name }}</p></div>
            <div v-if="locale == `ja`"><p>{{ sponsor.ja.name }}</p></div>
          </li>
        </ul>
        <h3 class="sponsors_title sponsors_subtitle-samurai">{{ t('samurai') }}</h3>
        <ul class="sponsors_list">
          <li v-for="sponsor in shuffledSamurais" :key="sponsor.logo" class="sponsors_item">
            <a :href="sponsor.url" target="_blank"><img :src="sponsor.logo" :alt="sponsor.en.name" /></a>
            <div v-if="locale == `en`"><p>{{ sponsor.en.name }}</p></div>
            <div v-if="locale == `ja`"><p>{{ sponsor.ja.name }}</p></div>
          </li>
        </ul>
        <h3 class="sponsors_title sponsors_subtitle-utage">{{ t('utage') }}</h3>
        <ul class="sponsors_list">
          <li v-for="sponsor in shuffledUtages" :key="sponsor.logo" class="sponsors_item">
            <a :href="sponsor.url" target="_blank"><img :src="sponsor.logo" :alt="sponsor.en.name" /></a>
            <div v-if="locale == `en`"><p>{{ sponsor.en.name }}</p></div>
            <div v-if="locale == `ja`"><p>{{ sponsor.ja.name }}</p></div>
          </li>
        </ul>
        <h3 class="sponsors_title sponsors_subtitle-ninja">{{ t('ninja') }}</h3>
        <ul class="sponsors_list">
          <li v-for="sponsor in shuffledNinjas" :key="sponsor.logo" class="sponsors_item-ninja">
            <a :href="sponsor.url" target="_blank"><img :src="sponsor.logo" :alt="sponsor.en.name" /></a>
            <div v-if="locale == `en`"><p>{{ sponsor.en.name }}</p></div>
            <div v-if="locale == `ja`"><p>{{ sponsor.ja.name }}</p></div>
          </li>
        </ul>
        <h3 class="sponsors_title sponsors_subtitle-bugyo">{{ t('bugyo') }}</h3>
        <ul class="sponsors_list">
          <li v-for="sponsor in shuffledBugyos" :key="sponsor.logo" class="sponsors_item-bugyo">
            <a :href="sponsor.url" target="_blank"><img :src="sponsor.logo" :alt="sponsor.en.name" /></a>
            <div v-if="locale == `en`"><p>{{ sponsor.en.name }}</p></div>
            <div v-if="locale == `ja`"><p>{{ sponsor.ja.name }}</p></div>
          </li>
        </ul>
        <!-- ScalaMatsuri 2024 特別実装 -->
        <div class="gofuku-bugyo">
          <div class="gofuku-bugyo-title">
            <div v-if="locale == `en`"><p>Gohuku Bugyo</p></div>
            <div v-if="locale == `ja`"><p>呉服奉行</p></div>
          </div>
          <div class="gofuku-bugyo-logo">
            <a href="https://corp.folio-sec.com/" target="_blank"><img src="/img/sponsors/folio.svg" alt="sponsor.en.name" /></a>
          </div>
          <div class="gofuku-bugyo-content">
            <img class="gofuku-bugyo_img" src="/img/top/t-shirts/t-shirts-01.png" alt="sponsor.en.name" />
            <img class="gofuku-bugyo_img" src="/img/top/t-shirts/t-shirts-02.png" alt="sponsor.en.name" />
          </div>
          <p>{{ t("gofuku_bugyo") }}</p>
        </div>
      </div>
    </section>
  </ClientOnly>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { locale, t } = useI18n()
const shoguns = getSponsorsByType('SHOGUN')
const tairous = getSponsorsByType('TAIROU')
const daimyos = getSponsorsByType('DAIMYO')
const samurais = getSponsorsByType('SAMURAI')
const utages = getSponsorsByType('UTAGE')
const ninjas = getSponsorsByType('NINJA')
const bugyos = getSponsorsByType('BUGYO')
const shuffledShoguns = computed(() => arrayShuffle(shoguns.value))
const shuffledTairous = computed(() => arrayShuffle(tairous.value))
const shuffledDaimyos = computed(() => arrayShuffle(daimyos.value))
const shuffledSamurais = computed(() => arrayShuffle(samurais.value))
const shuffledUtages = computed(() => arrayShuffle(utages.value))
const shuffledNinjas = computed(() => arrayShuffle(ninjas.value))
const shuffledBugyos = computed(() => arrayShuffle(bugyos.value))
</script>

<style lang="scss" scoped>
.gofuku-bugyo {
  &-title {
    font-size: 1.5em;
    margin-top: 1em;
    font-weight: bold;
  }
  &-logo {
    width: 220px;
    margin: 0 auto;
    img {
      margin-top: 1em;
      width: 100%;
      background: white;
    }
  }
}
@media screen and (min-width: $headerViewport) {
  /* footer PC */
  .gofuku-bugyo {
    &-content {
      width: 30%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      margin-top: 1em;
      max-width: 600px;
      img {
        width: 80%;
        padding: 10px;
        margin: 0px 10px;
        background: white;
      }
    }
  }
}
@media screen and (max-width: $headerViewport - 1) {
  /* footer SP */
  .gofuku-bugyo {
    &-content {
      // width: 30%;
      margin: 0 auto;
      justify-content: center;
      img {
        width: 60%;
        padding: 10px;
        margin-top: 10px;
        background: white;
      }
    }
  }
}

.content_title {
  display: inline-block;
  margin-top: 40px;
  font-weight: bold;
  color: #bd3844;
}

.sponsors_title {
  margin-top: 1em;
  font-weight: bold;
}
.sponsors_content_text {
  margin-top: 40px;
  margin-bottom: 5%;
  font-size: 16px;
  line-height: 28px;
}
.sponsors_subtitle {
  &-syogun {
    font-size: 5em;
    background: #e74e5e;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &-tairou {
    font-size: 3em;
    color: #ee892c;
  }
  &-daimyo {
    font-size: 3em;
    color: #3cad8b;
  }
  &-samurai {
    font-size: 3em;
    color: #2989cf;
  }
  &-inro {
    font-size: 3em;
    color: #2989cf;
  }
  &-utage {
    font-size: 3em;
  }
  &-ninja {
    font-size: 2em;
  }
  &-bugyo {
    font-size: 2em;
  }
}
.sponsors {
  background-color: #f1f1f1;
  text-align: center;
  padding: 1rem 0;
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
.sponsors_item {
  padding: 0 10px;
  width: 50%;
  max-width: 50%;
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
  &-ninja {
    padding: 0 10px;
    width: 30%;
    max-width: 100px;
    margin-top: 20px;
    img {
      width: 100%;
      background: white;
    }
  }
  &-bugyo {
    padding: 0 10px;
    width: 30%;
    margin-top: 20px;
    img {
      width: 100%;
      background: white;
    }
  }
}
</style>
