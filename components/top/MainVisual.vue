<i18n lang="yaml">
en:
  alt: The largest international Scala conference in Asia
  date: on 7th-9th June. 2024
  venue: Tokyo International Exchange Center Plaza Heisei
ja:
  alt: アジア最大級のScalaカンファレンス
  date: 2024年6月7日(金)〜9日(日)
  venue: 東京国際交流館 プラザ平成
</i18n>

<template>
  <main class="main">
    <div class="main_inner">
      <div class="main__container">
        <h1 class="main__title">
          ScalaMatsuri {{ year }}
          <p class="main__title-sub">{{ t('alt') }}</p>
          <p class="main__title-sub">{{ t('date') }}</p>
          <p class="main__title-sub">{{ t('venue') }}</p>
        </h1>
      </div>
      <div class="main_sponsor">
        <ul class="main_sponsor_inner">
          <li v-for="sponsor in shuffledShogunSponsors" :key="sponsor.logo" class="main_sponsor_item">
            <a :href="sponsor.url"><img :src="sponsor.logo" :alt="sponsor.en.name" /></a>
            <div v-if="locale == `en`">
              <p>{{ sponsor.en.name }}</p>
            </div>
            <div v-if="locale == `ja`">
              <p>{{ sponsor.ja.name }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { type Sponsor } from '~/models/model'
const { locale, t } = useI18n()
const { year } = useAppConfig()
const shogunSponsors: ComputedRef<Sponsor[]> = getSponsorsByType('SHOGUN')
const shuffledShogunSponsors = computed(() => arrayShuffle(shogunSponsors.value))
</script>

<style scoped lang="scss">
.main__title-sub {
  font-size: 2vh;
}
.main__container {
  display: flex;
}
@media screen and (min-width: $viewport) {
  .main {
    color: #fff;
    text-align: center;
    padding: 0;
    background-image: linear-gradient(180deg, #cf5335 0%, #b81d26 100%);
  }
  .main__title {
    flex: 1 1 67%;
    padding: 5vh;
    font-size: 5vh;
    text-shadow: 1px 2px 3px #560808;
    & > .title--pc {
      display: block;
      width: 80%;
      margin: 14.4% auto 17.6%;
    }
    & > .title--sp {
      display: none;
    }
  }
  .main_inner {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    background-image: url('$image/top/img-main.jpg'), linear-gradient(180deg, #cf5335 0%, #b81d26 100%);
  }
  .main_sponsor {
    background-image: url('$image/top/bg-main-sponsor_body.png');
    background-size: 100% 100%;
    background-repeat: repeat-y;
    background-position: bottom center;
    margin: 0 auto;
    width: 100%;
    padding: 0 25px 6px;
    position: relative;
    &:before {
      content: '';
      display: block;
      background-image: url('$image/top/bg-main-sponsor_head.png');
      background-size: 100% auto;
      background-repeat: no-repeat;
      background-position: bottom -1px center;
      height: 205px;
      width: 100%;
      position: absolute;
      top: -205px;
      margin-left: -25px;
    }
  }
  .main_sponsor_inner {
    // max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .main_sponsor_item {
    padding: 0 12px;
    width: 30%;
    margin-bottom: 24px;
    img {
      width: 100%;
      background: white;
    }
  }
  .main__logo {
    flex: 1 1 33%;
    & > .logo--pc {
      display: block;
      width: 42%;
      margin-left: 49%;
      padding: 13% 0;
    }
    & > .logo--sp {
      display: none;
    }
  }
}
@media screen and (max-width: $viewport - 1) {
  .main {
    background-image: url('$image/common/bg-red.png');
    background-position: bottom center;
    background-repeat: repeat;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
    color: #fff;
    text-align: center;
    padding: 66px 0 66px;
  }
  .main {
    background-image: url('$image/top/img-main_sp.jpg');
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: top center;
    background-color: #b91e26;
    padding: 0;
    height: auto;
  }
  .main__title {
    flex: 1 1 67%;
    padding: 5vh;
    font-size: 5vh;
    text-shadow: 1px 2px 3px #560808;
    word-break: auto-phrase;
    & > .title--pc {
      display: none;
    }
    & > .title--sp {
      display: block;
      width: 80%;
      margin: 0 2% 0 auto;
      padding: 14.4% 0;
      box-sizing: border-box;
    }
  }
  .main_inner {
    background: none;
    width: 100%;
  }
  .main_sponsor_inner {
    background-color: rgba(255, 255, 255, 0.53);
    margin: 108px auto 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 0 6px;
    position: relative;
    &:before {
      content: '';
      display: block;
      background-image: url('$image/top/bg-main-sponsor_head_sp.png');
      background-size: 100% auto;
      background-repeat: no-repeat;
      background-position: center bottom -1px;
      height: 108px;
      width: 100%;
      position: absolute;
      top: -108px;
      margin-left: -0;
    }
  }
  .main_sponsor_item {
    padding: 0 12px;
    width: 33%;
    margin-bottom: 24px;
    img {
      width: 100%;
      background: white;
    }
  }
  .main__logo {
    flex: 1 1 33%;
    & > .logo--pc {
      display: none;
    }
    & > .logo--sp {
      display: block;
      width: 56%;
      margin-left: 50%;
      padding-top: 26%;
    }
  }
}
</style>
