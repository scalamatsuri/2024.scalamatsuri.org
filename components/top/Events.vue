<i18n lang="yaml">
en:
  alt: The largest international Scala conference in Asia
  date: on 7th-9th June. 2024
  event_overview: |
    This year's Scala Matsuri will be held offline.<br>
    We are planning to hold some contents unique to offline. Stay tuned!<br>
    <br>
    Date: on 7th-9th June. 2024
    Venue: Tokyo International Exchange Center Plaza Heisei<br>
    <a href="https://www.jasso.go.jp/en/ryugaku/kyoten/tiec/access.html" target="_blank">Access</a>
ja:
  alt: アジア最大級のScalaカンファレンス
  date: Dates 2024年6月7日(金)〜9日(日)
  event_overview: |
    本年のScalaMatsuriはオフライン開催になりました。<br>
    オフラインならではの催し物を多数実施する予定ですので、どうぞお楽しみに！<br>
    <br>
    Date: 2024年6月7日(金)〜9日(日)<br>
    Venue: 東京国際交流館 プラザ平成<br>
    <a href="https://www.jasso.go.jp/en/ryugaku/kyoten/tiec/access.html" target="_blank">アクセス</a>
</i18n>

<template>
  <section class="content">
    <h2 class="content_title">Events</h2>
    <div class="content_text">
      <span v-html="t('event_overview')" />
      <div class="venue_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1621.6413002621073!2d139.7761757!3d35.6207591!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889fec03298c3%3A0x580ab4984e28a750!2z5p2x5Lqs5Zu96Zqb5Lqk5rWB6aSoIOODl-ODqeOCtuW5s-aIkA!5e0!3m2!1sja!2sjp!4v1703073639041!5m2!1sja!2sjp"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    <div class="content_contents">
      <figure v-for="(image, idx) in shuffledImages" :key="image" :class="[idx === 0 ? 'content_img-big' : '', 'content_img']">
        <img class="loaded" :src="image" :alt="`ScalaMatsuri ${year}`" />
      </figure>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { year } = useAppConfig()
const images = [
  '/img/events/img-events1.jpg',
  '/img/events/img-events2.jpg',
  '/img/events/img-events3.jpg',
  '/img/events/img-events4.jpg',
  '/img/events/img-events5.jpg',
  '/img/events/img-events6.jpg',
  '/img/events/img-events7.jpg',
  '/img/events/img-events8.jpg',
  '/img/events/img-events9.jpg',
  '/img/events/img-events10.jpg',
  '/img/events/img-events11.jpg',
  '/img/events/img-events12.jpg',
  '/img/events/img-events13.jpg',
  '/img/events/img-events13.jpg',
  '/img/events/img-events14.jpg',
  '/img/events/img-events15.jpg',
  '/img/events/img-events16.jpg',
  '/img/events/img-events17.jpg',
  '/img/events/img-events18.jpg',
  '/img/events/img-events19.jpg',
  '/img/events/img-events20.jpg',
  '/img/events/img-events21.jpg',
  '/img/events/img-events22.jpg',
  '/img/events/img-days1.jpg',
  '/img/events/img-days2.jpg',
  '/img/events/img-days3.jpg',
]
const shuffledImages = computed(() => arrayShuffle(images).slice(0, 13))
</script>

<style lang="scss" scoped>
.content {
  padding: 0 20px;
  text-align: center;
  max-width: $pcMinWidth - 40px;
  margin: 0 auto 50px;
}

.content_title {
  display: inline-block;
  margin-top: 40px;
  font-weight: bold;
  font-size: 48px;
  color: #bd3844;
}
.content_text {
  margin-top: 40px;
  font-size: 16px;
  line-height: 28px;
}
.content_contents {
  margin-top: 50px;
  display: grid;
  grid-gap: 14px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
}

.venue_map {
  margin-top: 10px;
  width: 100%;
  height: 600px;
  border: 0;
  iframe {
    width: 100%;
    height: 100%;
  }
}

.content_img {
  padding-top: 1px;
  img {
    width: 100%;
  }
}
.content_img-big {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
</style>
