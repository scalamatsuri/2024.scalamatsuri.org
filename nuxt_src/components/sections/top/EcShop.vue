<i18n lang="yaml">
## language=yaml
en:
  title: ScalaMatsuri T-shirt shop
  overview: ScalaMatsuri T-shirts online shop has been open for a limited period!
  ecshop_world_link: Worldwide Orders
  tshirt: "Get a T-Shirt"
  tshirt_url: "https://scalamatsuri-online-shop.myshopify.com/"
ja:
  title: ScalaMatsuri Tシャツショップ
  overview: ScalaMatsuriTシャツのオンラインショップが、期間限定でオープンしました！
  ecshop_world_link: 世界中から注文可能なショップはこちら
  tshirt: "Tシャツ購入"
  tshirt_url: "https://scalamatsuri-online-shop.myshopify.com/"
</i18n>

<template>
  <section class="content pre-events">
    <div class="content_inner">
      <h2 class="content_title">
        {{ $t("title") }}
      </h2>
      <p class="content_text">
        <span v-html="$t('overview')" />
      </p>
      <p>{{ $t("ecshop_world_link") }}</p>
      <a :href="$t('tshirt_url')" class="banner_item banner_item-tshirt">
        <span>{{ $t("tshirt") }} </span>
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  // margin-top: 40px;
}
.banner_list {
  margin: 0 auto;
  max-width: 834px;
  display: flex;
  justify-content: space-between;
}
.banner_item {
  display: block;
  margin: 0 auto; // NOTE: バナー1つのとき
  max-width: 394px; // NOTE: バナー1つのとき
  height: 88px;
  color: #fff;
  font-weight: bold;
  line-height: 46px;
  font-size: 28px;
  letter-spacing: 0.05em;
  position: relative;
  padding: 17px 0;
  &:after {
    content: "";
    width: 18px;
    height: 18px;
    display: block;
    position: absolute;
    right: 5px;
    bottom: 5px;
    background-image: url("~assets/img/common/arrow-banner.svg");
  }
  span {
    background-position: center left;
    background-image: url("~assets/img/common/icon-happi.svg");
    padding-left: 70px;
    display: inline-block;
    height: 54px;
    line-height: 54px;
  }
  &-tshirt {
    background-color: #cb534e;
    span {
      background-image: url("~assets/img/common/icon-mikoshi.svg");
    }
  }
}
</style>
