<i18n lang="yaml">
en:
  sponsorship: 'Sponsorship(ja)'
  call-for-proposals: 'Call for proposals'
  ticket: 'Get a Ticket'
  tshirt: 'Get a (Ninja) T-Shirt'
ja:
  sponsorship: 'スポンサー募集'
  call-for-proposals: 'セッションに応募'
  ticket: 'チケット購入'
  tshirt: '(忍者)Tシャツ購入'
</i18n>
<template>
  <div class="banner">
    <div class="banner_list">
      <nuxt-link :to="localePath('sponsorship')" class="banner_item banner_item-sponsor">
        <span>{{ t('sponsorship') }} </span>
      </nuxt-link>
      <!--
      <nuxt-link :to="localePath('call-for-proposals')" class="banner_item banner_item-session">
        <span>{{ t('call-for-proposals') }}</span>
      </nuxt-link>
      -->
      <a href="https://scalaconfjp.doorkeeper.jp/events/168847" target="_blank" class="banner_item banner_item-ticket">
        <span>{{ t('ticket') }}</span>
      </a>
      <!-- <a
        href="https://scalamatsuri-online-shop.myshopify.com/"
        target="_blank"
        rel="noopener"
        class="banner_item banner_item_two banner_item-tshorts">
        <span>{{ t('tshirt') }} </span>
      </a> -->
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { locale, t } = useI18n()
</script>

<style lang="scss" scoped>
.banner {
  margin-top: 40px;
}
@media screen and (min-width: $headerViewport) {
  /* footer PC */
  .banner_list {
    display: flex;
  }
}
@media screen and (max-width: $headerViewport - 1) {
  /* footer SP */
  .banner_item {
    display: block;
    margin-bottom: 10px;
  }
}
.banner_item {
  flex: 20rem;
  height: 88px;
  color: #fff;
  font-weight: bold;
  line-height: 46px;
  font-size: 28px;
  text-align: center;
  letter-spacing: 0.05em;
  text-align: center;
  position: relative;
  padding: 17px 0;
  margin-left: 12px;
  margin-right: 12px;
  &:after {
    content: '';
    width: 18px;
    height: 18px;
    display: block;
    position: absolute;
    right: 5px;
    bottom: 5px;
    background-image: url('$image/common/arrow-banner.svg');
  }
  span {
    background-position: center left;
    padding-left: 70px;
    display: inline-block;
    line-height: 54px;
    color: #fff;
  }
  &-sponsor {
    background-color: #e4ae2f;
    span {
      background-image: url('$image/common/icon-mikoshi.svg');
    }
  }
  &-ticket {
    background-color: #ff2600;
    span {
      background-image: url('$image/common/icon-happi.svg');
    }
  }
  &-staff {
    background-color: #4f9ad5;
    span {
      background-image: url('$image/common/logo.svg');
    }
  }
  &-session {
    background-color: #4f9ad5;
    span {
      background-image: url('$image/common/logo.svg');
    }
  }
  &-tshorts {
    background-color: #000000;
    span {
      background-image: url('$image/common/icon-happi.svg');
    }
  }
}
</style>
