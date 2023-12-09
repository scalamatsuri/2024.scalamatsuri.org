<i18n lang="yaml">
</i18n>

<template>
  <section class="inquiry section">

    <h3 class="inquiry_title">スポンサーのお申込みに関するお問い合わせ</h3>
    <p class="inquiry_text">
    <a :href="pdf_filepath" target="_blank" rel="noopener">本年度スポンサーシップのご案内</a> をご参照の上、不明点などがございましたら
      <a :href="inquiry_form" target="_blank" rel="noopener"
        >お問い合わせフォーム</a
      >
      よりお問い合わせください。
    </p>
  </section>

</template>

<script setup lang="ts">
const { t } = useI18n()

const { pdf_filepath, inquiry_form } = defineProps({
  pdf_filepath: String,
  inquiry_form: String,
})

</script>

<style lang="scss" scoped>
.inquiry {
  margin: 60px auto 0;
  text-align: left;
  padding: 40px;
  background-color: #F1F1F1;
}
.inquiry_title {
  font-weight: bold;
  line-height: 33px;
  font-size: 20px;
  letter-spacing: 0.1em;
  color: #000000;

}
.inquiry_text {
  margin-top: 20px;
  line-height: 23px;
  font-size: 14px;
  letter-spacing: 0.1em;
  color: #000000;
}

// TODO 共通化
$viewport: 820px;
@media screen and (max-width: $viewport - 1) {
  .inquiry {
    margin-top: 30px;
  }
}

</style>
