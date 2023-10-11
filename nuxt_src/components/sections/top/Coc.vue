<i18n lang="yaml">
## language=yaml
en:
  title: "Code of Conduct"
  text: |
    Don't be a jerk<br><br>
    ScalaMatsuri is dedicated to providing an open conference for all technologists from various regions and communities. We want to make it a fun experience for everyone, regardless of gender, race, and many different backgrounds. All participants, including speakers and sponsors, are asked to be respectful to each other and follow the Code of conduct.<br><br>
    Conference participants violating these rules may be asked to stop the session or leave the conference at the sole discretion of the conference organizers. If you have any questions about the Code of conduct, please ask us on the inquiry form.<br><br>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSftjA6961ZzzJjqq1CrWtAN9wwrqXRUGFqZI5G8x2BjmZHeWw/viewform" class="info_btn" target="_blank" rel="noopener">inquiry form</a>
ja:
  title: "行動規範"
  text: |
    ScalaMatsuriは、様々な地域やコミュニティから集う技術者に対して開かれたカンファレンスを目指しています。
    特に、性別や人種など、多様な背景を持つ人々が互いに敬意を払って楽しい時間を過ごせるよう、当カンファレンスでは、発表者や参加者、スポンサーの皆様に行動規範を守っていただくようにお願いしています。<br><br>
    ScalaMatsuriの主催者は、行動規範の趣旨に反してハラスメント行為を行う参加者に対して、発表の中止や会場からの退出を指示する場合があります。
    行動規範についてご質問がある場合は、お近くのスタッフまでお問い合わせください。
</i18n>

<template>
  <section class="info">
    <div class="info_inner">
      <h2 class="info_title">
        {{ $t("title") }}
      </h2>
      <p class="info_text">
        <span v-html="$t('text')" />
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.info {
  margin-top: 4vh;
}
</style>
