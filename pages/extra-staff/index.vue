<i18n lang="yaml">
en:
  title: 当日スタッフ募集
ja:
  title: 当日スタッフ募集
</i18n>

<template>
  <MainVisual title="当日スタッフ募集" />
  <div class="extra_staff">
    <h2 class="extra_staff_title">Scalaコミュニティ 日本最大のイベント<br class="is_pc" />を一緒に盛り上げる当日スタッフを募集中！</h2>
    <div class="extra_staff_btn_area">
      <a :href="application_form" class="extra_staff_btn" target="_blank" rel="noopener">お申込みフォーム</a>
    </div>
  </div>
  <div class="section">
    <h2 class="section_title">
      <span class="section_title_inner">当日スタッフ概要</span>
    </h2>
    <p class="section_text">
      開催日<br />
      2024年6月8日(土) 〜 6月9日(日)<br />
      当日の作業内容などについて事前説明会も開催します。
      <br /><br />
      開催時間<br />
      9:30 〜 19:00(懇親会参加の場合は21:00)
      <br /><br />

      開催地<br />
      東京国際交流館 プラザ平成<br />
      〒135-0064 東京都江東区青海２丁目２−１
      <br /><br />

      応募方法<br />
      応募フォームよりご連絡のつくメールアドレスを入力して下さい。<br />
      後日、こちらでご入力いただいたメールアドレス宛に後日Slackの招待リンクをお送りします。
    </p>
  </div>
  <div class="section">
    <h2 class="section_title">
      <span class="section_title_inner">スタッフ業務の内容</span>
    </h2>
    <p class="section_text">
      - 司会<br />
      - 各セッションのタイムキーパー<br />
      - 飛び入りカンファレンス<br />
      <br />
      シフト時間外は自由にScalaMatsuriを楽しんでください！
    </p>
  </div>
  <div class="section">
    <h2 class="section_title">
      <span class="section_title_inner">スタッフ参加の特典</span>
    </h2>
    <p class="section_text">
      スタッフ参加の特典として、以下をご用意します。
      <br /><br />
      - チケット代無料（シフト時間以外は会場で自由にセッションを聞くなどが可能）<br />
      - Tシャツ割引クーポン。クーポン利用時の購入価格は、ECサイトの仕様上の下限である50円となります。<br />
      - 後日のスタッフ打ち上げへの参加（無料）<br />
    </p>
  </div>
  <div class="extra_staff">
    <div class="extra_staff_btn_area">
      <a :href="application_form" class="extra_staff_btn extra_staff_btn-form" target="_blank" rel="noopener">お申込みフォーム</a>
    </div>
  </div>
</template>

<script setup lang="ts">
pageMetaCheck()
const application_form = 'https://docs.google.com/forms/d/e/1FAIpQLScKsUTWMWJRRtdI6M0YmMfLYIVhZCZvFS9hO77FWCEoj7OZgA/closedform'
</script>

<style lang="scss" scoped>
.extra_staff {
  max-width: 80%;
  margin: 100px auto 0;
  padding: 50px;
  background-color: #f1f1f1;
  text-align: center;
}
.extra_staff_title {
  font-weight: bold;
  line-height: 59px;
  font-size: 36px;
  text-align: center;
  letter-spacing: 0.1em;
  margin-bottom: 40px;
}
.extra_staff_btn {
  padding: 1rem 5rem;
  font-weight: bold;
  line-height: 60px;
  font-size: 25px;
  letter-spacing: 0.1em;
  border-radius: 30px;
  position: relative;
  background-color: #00a4de;
  color: #fff;
}
@media screen and (max-width: $viewport - 1) {
  .extra_staff {
    margin-top: 30px;
    padding: 30px 20px;
  }
  .extra_staff_title {
    font-size: 6.5vw;
    line-height: 1.5;
  }
  .extra_staff_btn_area {
    margin-top: 20px;
    display: block;
  }
  .extra_staff_btn {
    width: 100%;
    margin: 15px auto 0;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
  }
}
</style>
