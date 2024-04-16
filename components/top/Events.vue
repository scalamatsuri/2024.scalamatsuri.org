<i18n lang="yaml">
en:
  alt: The largest international Scala conference in Asia
  date: on 7th-9th June. 2024
  ticket_info: |
    Admission tickets are now on sale!<br/>
    The sale will end on June 7th, 23:59 (JST), so get yours early.<br/>
    <a href="https://scalaconfjp.doorkeeper.jp/events/168847" target="_blank">Click here to get ScalaMatsuri 2024 tickets</a>
  event_overview_1: |
    This year's Scala Matsuri will be held offline.<br />
    We are planning to hold some contents unique to offline. Stay tuned!<br />
    <br />
    <b>Conference Sessions and Open Mic Sessions</b><br />
    Conference sessions and open mic sessions will be held on the same day, Saturday, June 8 - Sunday, June 9, 2024! <br />
    Please see <a href="/programs" target="_blank">here</a> for the timetable.
    <br />
    <br />
    <b>Training day</b><br />
    On Friday, June 7, 2024, a training day will be held in conjunction with Recruit Co., Ltd.<br />
    For more information on the Training Day, please refer to <a href="/training-day" target="_blank">here(ja only)</a>.
    <br />
    <br />
  event_overview_2: |
    Date: on 7th-9th June. 2024
    Venue: Tokyo International Exchange Center Plaza Heisei<br />
    <a href="https://www.jasso.go.jp/en/ryugaku/kyoten/tiec/access.html" target="_blank">Access</a>
ja:
  alt: アジア最大級のScalaカンファレンス
  date: Dates 2024年6月7日(金)〜9日(日)
  ticket_info: |
    一般チケットが発売されました！<br/>
    6月7日 23:59(JST)までとなりますので、お早めにお求めください。<br/>
    <a href="https://scalaconfjp.doorkeeper.jp/events/168847" target="_blank">ScalaMatsuri 2024 チケットはこちら</a>
  event_overview_1: |
    本年のScalaMatsuriはオフライン開催になりました。<br />
    オフラインならではの催し物を多数実施する予定ですので、どうぞお楽しみに！<br />
    <br />
    <b>カンファレンスセッション、オープンマイクセッション</b><br />
    2024年6月8日(土)〜9日(日)には、カンファレンスセッションとオープンマイクセッションを同日開催する予定です！<br />
    タイムテーブルは<a href="/programs" target="_blank">こちら</a>をご参照ください。
    <br />
    <br />
    2024年6月7日(金)には、トレーニング・デイを株式会社リクルート様と共同開催します！<br />
    トレーニング・デイの詳細は<a href="/training-day" target="_blank">こちら</a>をご参照ください。
    <br />
    <br />
  event_overview_2: |
    Date: 2024年6月7日(金)〜9日(日)<br />
    Venue: 東京国際交流館 プラザ平成<br />
    東京都江東区青海2-2-1<br />
    <a href="https://www.jasso.go.jp/en/ryugaku/kyoten/tiec/access.html" target="_blank">アクセス</a>
</i18n>

<template>
  <section class="content">
    <h2 class="content_title">Ticket</h2>
    <div class="content_text">
      <span v-html="t('ticket_info')" />
    </div>
    <h2 class="content_title">Events</h2>
    <div class="content_text">
      <span v-html="t('event_overview_1')" />
      <span v-html="t('event_overview_2')" />
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
