<i18n lang="yaml">
## language=yaml
en:
  event_overview: |
    On Sunday, August 30th, we will be holding a pre-ScalaMatsuri Lightning Talks online meetup, <br>
    which is also intended as a rehearsal for the upcoming ScalaMatsuri.<br>
    Please check out the event page below and join us.
  event_link: Click here for event page
ja:
  event_overview: |
    8月30日(日) 17:00 より、プレScalaMatsuri 兼 リハーサルとして、オンラインLT大会を開催します。<br>
    開催概要を以下イベントページからご確認の上、奮ってご参加ください。
  event_link: イベントページはこちら
</i18n>

<template>
  <section class="content pre-events">
    <div class="content_inner">
      <h2 class="content_title">Pre-ScalaMatsuri</h2>
      <p class="content_text">
        <span v-html="$t('event_overview')" />
      </p>
      <p class="content_link">
        <a href="https://scalaconfjp.doorkeeper.jp/events/110045" target="_blank" rel="noopener">{{ $t("event_link") }}</a
        ><img v-lazy="require('~/assets/img/common/arrow-next-b.svg')" />
      </p>
    </div>
  </section>
</template>
