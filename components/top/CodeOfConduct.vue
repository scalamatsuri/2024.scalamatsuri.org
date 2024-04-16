<i18n lang="yaml">
en:
  title: Code of Conduct
  text1: Don't be a jerk
  text2: ScalaMatsuri is dedicated to providing an open conference for all technologists from various regions and communities. We want to make it a fun experience for everyone, regardless of gender, race, and many different backgrounds. All participants, including speakers and sponsors, are asked to be respectful to each other and follow the Code of conduct.
  text3: Conference participants violating these rules may be asked to stop the session or leave the conference at the sole discretion of the conference organizers. If you have any questions about the Code of conduct, please ask us on the inquiry form.
  button: inquiry form
ja:
  title: 行動規範
  text1: ScalaMatsuriは、様々な地域やコミュニティから集う技術者に対して開かれたカンファレンスを目指しています。
  text2: 特に、性別や人種など、多様な背景を持つ人々が互いに敬意を払って楽しい時間を過ごせるよう、当カンファレンスでは、発表者や参加者、スポンサーの皆様に行動規範を守っていただくようにお願いしています。
  text3: ScalaMatsuriの主催者は、行動規範の趣旨に反してハラスメント行為を行う参加者に対して、発表の中止や会場からの退出を指示する場合があります。行動規範についてご質問がある場合は、お近くのスタッフまでお問い合わせください。
  button: お問い合わせフォーム
</i18n>

<template>
  <section class="info">
    <div class="info_inner">
      <h2 class="info_title">
        {{ t('title') }}
      </h2>
      <p class="info_text">{{ t('text1') }}</p>
      <p class="info_text">{{ t('text2') }}</p>
      <p class="info_text">{{ t('text3') }}</p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSftjA6961ZzzJjqq1CrWtAN9wwrqXRUGFqZI5G8x2BjmZHeWw/viewform"
        class="info_btn"
        target="_blank"
        rel="noopener">
        {{ t('button') }}
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style lang="scss" scoped>
.info {
  background-image: url('$image/top/bg-info_pc.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;
  margin-top: 4vh;
}
.info_inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px 70px;
  font-weight: bold;
}
.info_text {
  font-size: 18px;
  margin-bottom: 1em;
  line-height: 32px;
}
.info_title {
  font-size: 36px;
  margin-bottom: 22px;
}
.info_btn {
  width: 20em;
  height: 3em;
  background-color: #fff;
  line-height: 3em;
  color: #000;
  text-align: center;
  display: block;
  border-radius: 22px;
}
</style>
