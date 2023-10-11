<i18n lang="yaml">
## language=yaml
en:
  access_link: Accommodation and facilities near the venue
  time: DateTime
  acceptance_time: "(Open 9:30)"
  venue: Venue
  place_name: Tokyo International Exchange Center.
  address: "Tokyo Academic Park, 2-2-1 Aomi, Koto-ku, Tokyo 135-8630 Japan"
ja:
  access_link: "会場付近の宿泊・施設の情報"
  time: "日時"
  acceptance_time: "(受付開始 9:30予定)"
  venue: "会場"
  place_name: "東京国際交流館"
  address: "〒135-0064 東京都江東区2丁目2-1"
</i18n>
<template>
  <section id="access" class="content access">
    <h2 class="content_title">Access</h2>
    <p class="content_link">
      <nuxt-link :to="localePath('travel')">
        {{ $t("access_link") }}<img v-lazy="require('~/assets/img/common/arrow-next-b.svg')" alt="" />
      </nuxt-link>
    </p>
    <lazy-component>
      <GmapMap :center="uluru" :zoom="zoom" map-type-id="terrain" class="access_gmap">
        <GmapMarker :position="uluru" icon="/img/common/icon-pin.svg" />
      </GmapMap>
    </lazy-component>
    <div class="content_inner">
      <div class="access_contents">
        <div class="access_col">
          <h3 class="access_subtitle">
            {{ $t("time") }}
          </h3>
          <dl class="access_date">
            <dt>Day 1</dt>
            <dd>yyyy.MM.dd（Thu.）13:00 - 19:00</dd>
            <dt>Day 2</dt>
            <dd>yyyy.MM.dd（Fri.）9:30 - 21:00 {{ $t("acceptance_time") }}</dd>
            <dt>Day 3</dt>
            <dd>yyyy.MM.dd（Sat.）9:30 - 21:00 {{ $t("acceptance_time") }}</dd>
          </dl>
        </div>
        <div class="access_col">
          <h3 class="access_subtitle">
            {{ $t("venue") }}
          </h3>
          <div class="access_place">
            <p class="access_place_name">
              {{ $t("place_name") }}
            </p>
            <p class="access_place_address">
              <a href="https://goo.gl/maps/cRF32b5vyGM2" target="_blank" rel="noopener"> {{ $t("address") }} </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import sponsers from '~/data/sponsors/syogun'
// let map
export default {
  data() {
    return {
      uluru: { lat: 35.6208626, lng: 139.7760936 },
      zoom: 17,
    }
  },
}
</script>
