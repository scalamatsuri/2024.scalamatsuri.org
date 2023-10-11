<i18n lang="yaml">
## language=yaml
en:
  session_overview: |
    3 days with over 40 sessions and workshops by Scala engineers!<br>
    The last day is an Open mic conference day that everyone makes!
  day2_overview: "Conference DAY in conference format (3 parallel sessions). Doors open at 9:00, scheduled to end at 20:00. Lunch and light refreshment will be served at the party."
  day3_overview: |
    Open mic conference day<br>
    <a href="%{unconference_link}" target="_blank" rel="noopener">What is Open mic conference?</a><br>
    Doors open at 9:30, and scheduled to end at 17:00.
  goto_program: Program
ja:
  session_overview: |
    Scalaエンジニアたちによる、40以上のセッションとワークショップで開催する３日間！<br>
    最終日は、みんなで作る飛び入りカンファレンスデー！
  day2_overview: |
    カンファレンスデー<br>
    カンファレンス形式(3パラレルセッション) 9時00分入場開始 20時終了予定。 昼食および懇親会での軽食をご用意しています。
  day3_overview: |
    飛び入りカンファレンスデー<br>
    飛び入りカンファレンスについては<a href="%{unconference_link}" target="_blank" rel="noopener">コチラ</a><br>
    9時30分入場開始 17:00時終了予定。
  goto_program: プログラム
</i18n>
<template>
  <section class="content sessions">
    <div class="content_inner">
      <h2 class="content_title">Sessions</h2>
      <p class="content_text">
        <span v-html="$t('session_overview')" />
      </p>
      <div class="content_days">
        <div class="content_days_col">
          <h3 class="content_days_title"><span class="content_days_tag">Day 2</span> Conference</h3>
          <img v-lazy="require('~/assets/img/top/img-days2.jpg?resize&size=414&lqip')" alt="" class="content_days_img" />
          <p class="content_days_text" v-html="$t('day2_overview')" />
          <p class="content_link">
            <nuxt-link :to="localePath('program') + '#day2'">
              {{ $t("goto_program") }}<img v-lazy="require('~/assets/img/common/arrow-next-b.svg')" alt="" />
            </nuxt-link>
          </p>
        </div>
        <div class="content_days_col">
          <h3 class="content_days_title"><span class="content_days_tag">Day 3</span> Open mic conference</h3>
          <img v-lazy="require('~/assets/img/top/img-days3.jpg?resize&size=414&lqip')" alt="" class="content_days_img" />
          <p class="content_days_text">
            <span v-html="$t('day3_overview', { unconference_link: localePath('Open mic conference') })" />
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
