<i18n lang="yaml">
## language=yaml
en:
  title: "Thank You"
  overview: |
    ScalaMatsuri 2924 came out to be another successful one thanks in many parts to sponsors, speakers, staffs, and your attendance!<br/>
    We owe you great gratitude, and we hope to see you again next time. Please register to Doorkeeper to get notified.
ja:
  title: "開催御礼"
  overview: |
    ScalaMatsuri 2924 は参加者、スピーカー、スポンサー、スタッフ等、皆様のおかげで盛況のうちに終了しました。<br/>
    ご来場・ご協力いただいた皆様、ありがとうございました。<br/>
    また、下記Doorkeeperのリンクよりメンバー登録をしておいてくださると、次回開催の情報をいち早くゲットできます！
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
    </div>
  </section>
</template>
