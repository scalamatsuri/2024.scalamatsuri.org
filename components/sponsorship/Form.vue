<i18n lang="yaml">
</i18n>

<template>
    <div class="sponsorship">
      <h2 class="sponsorship_title">Scalaコミュニティ 日本最大のイベント<br class="is_pc" />ScalaMatsuriのスポンサーを募集しています。</h2>
      <p class="sponsorship_text">様々な特典をご用意しています。詳細は以下の資料を参照してください。</p>


      <p v-if="is_sponsorship_expired" class="sponsorship_note">
        2023/4/14 ScalaMatsuri 2023 <strong>スポンサー募集は締め切りました。</strong><br />たくさんのご応募、誠にありがとうございました。
      </p>
      <div v-else class="sponsorship_btnArea">
         <a :href="pdf_filepath" class="sponsorship_btn sponsorship_btn-pdf" target="_blank" rel="noopener">スポンサーシップのご案内</a>
         <a v-if="!hidden_form_btn" :href="application_form" class="sponsorship_btn sponsorship_btn-form" target="_blank" rel="noopener">お申込みフォーム</a>
      </div>
    </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const { is_sponsorship_expired, hidden_form_btn, pdf_filepath, application_form } = defineProps({
  is_sponsorship_expired: Boolean,
  hidden_form_btn: Boolean,
  pdf_filepath: String,
  application_form: String,
})
</script>

<style lang="scss" scoped>

.sponsorship {
  max-width: 1200px;
  margin: 100px auto 0;
  padding: 42px 0 51px;
  background-color: #F1F1F1;
  text-align: center;
}

.sponsorship_title {
  font-weight: bold;
  line-height: 59px;
  font-size: 36px;
  text-align: center;
  letter-spacing: 0.1em;
}


.sponsorship_text {
  font-weight: bold;
  line-height: 26px;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.1em;
}
.sponsorship_btnArea {
  max-width: 720px;
  width: 100%;
  display: flex;
  margin: 45px auto 0;
  justify-content: space-between;

}

.sponsorship_btn {
  max-width: 340px;
  width: calc(50% - 20px);
  display: block;
  height: 60px;
  font-weight: bold;
  line-height: 60px;
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.1em;
  border-radius: 30px;
  background-color: #fff;
  color: #000;
  position: relative;
  &-pdf {
    padding-left: 30px;
    &:before {
      content: "";
      background-image: url('~assets/img/common/icon-pdf.svg');
      width: 24px;
      height: 24px;
      display: block;
      position: absolute;
      margin-top: -12px;
      top: 50%;
      left: 34px;
    }
  }
  &-form {
    background-color: #00A4DE;
    color: #fff;

  }
}
.sponsorship_note {
  font-size: 14px;
  text-align: center;
  letter-spacing: 0.1em;
  margin-top: 40px;
}

@media screen and (max-width: $viewport - 1) {
  .sponsorship {
    margin-top: 30px;
    padding: 30px 20px;
  }
  .sponsorship_title {
    font-size: 6.5vw;
    line-height: 1.5;
  }
  .sponsorship_text {
    font-size: 5vw;
    line-height: 1.5;
    margin-top: 5px;
  }
  .sponsorship_btnArea {
    margin-top: 20px;
    display: block;
  }
  .sponsorship_btn {
    width: 100%;
    margin: 15px auto 0;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
  }
  .sponsorship_note {
    margin-top: 20px;
    text-align: left;
  }
}

</style>
