<i18n lang="yaml">
## language=yaml
en:
  title: Program
  overview: |
    D1th Mar. is a conference day. D2th Mar. is an open mic conference day.
  link_text: Here is our timetable.
ja:
  title: プログラム
  overview: |
    MM月D1日はカンファレンス、MM月D2日は飛び入りカンファレンスを開催します。
  link_text: タイムテーブルはこちら
</i18n>

<template>
  <section class="content pre-events">
    <div class="content_inner">
      <h2 class="content_title">
        {{ $t('title') }}
      </h2>
     <!-- <p class="content_text"> -->
     <!--   <span v-html="$t('overview')" /> -->
     <!-- </p> -->
      <p class="content_link">
        <nuxt-link :to="localePath('program')">
          {{ $t('link_text') }}
        </nuxt-link>
        <img v-lazy="require('~/assets/img/common/arrow-next-b.svg')" />
      </p>
    </div>
  </section>
</template>
