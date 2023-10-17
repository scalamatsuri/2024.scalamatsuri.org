<i18n lang="yaml">
en:
  sponsor_title: 'Sponsors'
  syogun: 'Syogun Sponsor'
  daimyo: 'Daimyo Sponsor'
  samurai: 'Samurai Sponsor'
  inrou: 'Inrou Sponsor'
  satellite: 'Satellite Sponsor'
  bugyo: 'Bugyo Sponsor'
  bugyo_kintone: 'Kintone Bugyo'
  bugyo_cacoo: 'Ukiyo-e Bugyo'
  bugyo_hatena: 'Kawara-ban Bugyo'
  bugyo_sentry: 'Metsuke Bugyo'
  bugyo_scalatimes: 'Kawara-ban Bugyo'
ja:
  sponsor_title: 'スポンサー'
  syogun: '将軍スポンサー'
  daimyo: '大名スポンサー'
  samurai: '侍スポンサー'
  inrou: '印籠スポンサー'
  satellite: 'さてらいとスポンサー'
  bugyo: '奉行スポンサー'
  bugyo_kintone: '筋斗雲奉行'
  bugyo_cacoo: '浮世絵奉行'
  bugyo_hatena: '瓦版奉行'
  bugyo_sentry: '目付奉行'
  bugyo_scalatimes: '瓦版奉行'
</i18n>

<template>
  <section class="sponsors">
    <div class="sponsors_inner">
      <h2 class="content_title">
        {{ $t('sponsor_title') }}
      </h2>
      <p class="sponsors_content_text">
        <span v-html="$t('sponsor_overview', { sponsor_link: localePath('sponsorship') })" />
      </p>
      <h3 class="sponsors_title sponsors_subtitle-em">
        {{ $t('syogun') }}
      </h3>
      <ul class="sponsors_list">
        <li v-for="sponsor in shoguns" :key="sponsor.logo" class="sponsors_item">
          <a :href="sponsor.url" target="_blank" rel="noopener"><img v-lazy="sponsor.logo" :alt="sponsor.name" /></a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const shoguns = getSponsorsByType('SHOGUN')
const shuffledShoguns = computed(() => arrayShuffle(shoguns.value))
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
