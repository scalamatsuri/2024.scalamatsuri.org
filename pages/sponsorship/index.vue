<i18n lang="yaml">
en:
  title: 'スポンサー募集'
ja:
  title: 'sponsorship ja'
</i18n>

<template>
  <MainVisual :title="t('title')" />

  <!-- sponsorship ここから -->
    <div class="sponsorship">
      <h2 class="sponsorship_title">Scalaコミュニティ 日本最大のイベント<br class="is_pc" />ScalaMatsuriのスポンサーを募集しています。</h2>
      <p class="sponsorship_text">様々な特典をご用意しています。詳細は以下の資料を参照してください。</p>
      <div class="sponsorship_btnArea">
         <a href="/pdf/sponsorship.pdf" class="sponsorship_btn sponsorship_btn-pdf" target="_blank" rel="noopener">スポンサーシップのご案内</a>
         <a href="https://forms.gle/AVWpqNB3xyWWwx5T8" class="sponsorship_btn sponsorship_btn-form" target="_blank" rel="noopener">お申込みフォーム</a>
      </div>

      <!-- 終了時 -->
      <!--
      <p class="sponsorship_note">
        2023/4/14 ScalaMatsuri 2023 <strong>スポンサー募集は締め切りました。</strong><br />たくさんのご応募、誠にありがとうございました。
      </p>
      -->
    </div>
    <!-- sponsorship ここまで -->



    <!-- recruit ここから -->
    <section class="section recruit">
      <h2 class="section_title">
        <span class="section_title_inner">特別企画 - 私、ScalaMatsuriで転職しました -</span>
      </h2>
      <p class="section_text">ScalaMatsuriがきっかけで、ScalaMatsuri協賛企業に就職または転職された方々のインタビュー記事です。</p>
      <ul class="recruit_recruit">
        <li v-for="r in recruit_recruits" :key="r.url">
          <img :src="r.image" :alt="r.title" class="recruit_recruit_img" />
          <p class="recruit_recruit_title">
            <a :href="r.url" target="_blank" rel="noopener">{{ r.title }}</a>
          </p>
        </li>
      </ul>
    </section>
    <!-- recruit ここまで -->

    <!-- plan ここから -->
    <section class="section plan">
      <h2 class="section_title">
        <span class="section_title_inner">スポンサープラン</span>
      </h2>
      <div class="section_scroll">
        <table class="section_table2 section_table2-wide">
          <thead>
            <tr>
              <th colspan="3" />
              <th>
                <p class="color color_shogun">将軍<span>ショーグン</span></p>
              </th>
              <th>
                <p class="color color_daimyo">大名<span>ダイミョー</span></p>
              </th>
              <th>
                <p class="color color_samurai">侍<span>サムライ</span></p>
              </th>
              <th>
                <p class="color color_samurai">印籠<span>インロウ</span></p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colspan="3">金額</th>
              <td>¥1,000,000</td>
              <td>¥250,000</td>
              <td>¥100,000</td>
              <td>¥25,000</td>
            </tr>
            <tr>
              <th rowspan="2">Webサイト掲載</th>
              <th>ロゴ画像</th>
              <th />
              <td>◎<br />ファーストビュー</td>
              <td>○</td>
              <td>○</td>
              <td>○<br />アイコン</td>
            </tr>
            <tr>
              <th>広告ページ</th>
              <th>
                <span>サービス紹介や<br />リクルーティング</span>
              </th>
              <td>○</td>
              <td>○</td>
              <td>─</td>
              <td>─</td>
            </tr>
            <tr>
              <th rowspan="2">スライド掲載</th>
              <th>オープニング</th>
              <th>注目が集まる場面</th>
              <td>ロゴ掲載・<br />読み上げ</td>
              <td>ロゴ掲載</td>
              <td>─</td>
              <td>─</td>
            </tr>
            <tr>
              <th>セッション間<br />CMスライド</th>
              <th />
              <td>スライド掲載</td>
              <td>ロゴ＋文言掲載</td>
              <td>─</td>
              <td>─</td>
            </tr>
            <tr>
              <th>スポンサーセッション</th>
              <th />
              <th />
              <td>○</td>
              <td>─</td>
              <td>─</td>
              <td>─</td>
            </tr>
            <!-- <tr> -->
            <!--   <th>懇親会</th> -->
            <!--   <th>冒頭</th> -->
            <!--   <th>スポンサー名読み上げ</th> -->
            <!--   <td>○</td> -->
            <!--   <td>-</td> -->
            <!--   <td>─</td> -->
            <!--   <td>─</td> -->
            <!-- </tr> -->
            <tr>
              <th colspan="3">
                バーチャルブース 15万<br />
                最大5チャンネルまで
              </th>
              <td>別売</td>
              <td>別売</td>
              <td>別売</td>
              <td>-</td>
            </tr>
            <tr>
              <th colspan="3">さてらいとスポンサー</th>
              <td>別売</td>
              <td>別売</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <!-- plan ここまで -->

    <!-- booth ここから -->
    <section class="section booth">
      <h2 class="section_title">
        <span class="section_title_inner">バーチャルブース</span>
      </h2>
      <table class="addon-sponsorship-table">
        <tbody>
          <tr>
            <th>金額</th>
            <td>¥150,000</td>
          </tr>
          <tr>
            <th>Discordチャンネル数</th>
            <td>最大5つまで</td>
          </tr>
        </tbody>
      </table>
    </section>
    <!-- booth ここから -->
    <section class="section booth">
      <h2 class="section_title">
        <span class="section_title_inner">さてらいとスポンサー</span>
      </h2>
      <table class="addon-sponsorship-table">
        <tbody>
          <tr>
            <th>金額</th>
            <td>¥250,000</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- sponsorship ここから -->
    <div class="sponsorship">
      <h2 class="sponsorship_title">Scalaコミュニティ 日本最大のイベント<br class="is_pc" />ScalaMatsuriのスポンサーを募集しています。</h2>
      <p class="sponsorship_text">様々な特典をご用意しています。詳細は以下の資料を参照してください。</p>
      <div class="sponsorship_btnArea">
        <a href="/pdf/sponsorship.pdf" class="sponsorship_btn sponsorship_btn-pdf" target="_blank" rel="noopener">スポンサーシップのご案内</a>
        <!-- <a href="https://forms.gle/3o9P94ejae7VYk839" class="sponsorship_btn sponsorship_btn-form" target="_blank" rel="noopener">お申込みフォーム</a> -->
      </div>
      <!-- <p class="sponsorship_note"> -->
      <!--   2023/2/28 ScalaMatsuri 2023 <strong>スポンサー募集は締め切りました。</strong><br />たくさんのご応募、誠にありがとうございました。 -->
      <!-- </p> -->
    </div>
    <!-- sponsorship ここまで -->
 
    <section class="inquiry">
      <h3 class="inquiry_title">スポンサーのお申込みに関するお問い合わせ</h3>
      <p class="inquiry_text">
        <a href="/pdf/sponsorship.pdf" target="_blank" rel="noopener">本年度スポンサーシップのご案内</a> をご参照の上、不明点などがございましたら
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSftjA6961ZzzJjqq1CrWtAN9wwrqXRUGFqZI5G8x2BjmZHeWw/viewform" target="_blank" rel="noopener"
          >お問い合わせフォーム</a
        >
        よりお問い合わせください。
      </p>
    </section>
 

</template>

<script setup lang="ts">
const { t } = useI18n()
publichedCheck()


/*
const recruit_recruits = [
  {
    image: require("~/assets/img/sponsorship/img-recruit2.jpg"),
    url: "https://blog.scalamatsuri.org/entry/2017/10/30/150859",
    title: "株式会社FLINTERSさまへ転職された 河内崇さん（@kawachi）",
  },
  {
    image: require("~/assets/img/sponsorship/img-recruit1.png"),
    url: "https://blog.scalamatsuri.org/entry/2022/03/01/093656",
    title: "株式会社アットウェアさまへ転職された オヤマさん",
  },
  {
    image: require("~/assets/img/sponsorship/img-recruit3.jpg"),
    url: "https://blog.scalamatsuri.org/entry/2020/05/01/155020",
    title: "アルプ株式会社さまへ転職された オミさん(@omiend)",
  },
]
*/
//meta: [{ name: "og:title", content: "スポンサー募集 | ScalaMatsuri 2023" }],


</script>

<style lang="scss" scoped>

/* sponsorship */
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

.notification {
  text-align: center;
  font-size: 20px;
  width: 100%;
  padding: 100px 20px 0.1em;

  & > strong {
    border-bottom: 2px solid #eba808;
    padding-bottom: 0.1em;
  }
}
.addon-sponsorship-table {
  width: 100%;
  margin-top: 60px;
  border-collapse: collapse;
  border: 1px solid #eee;
}
.addon-sponsorship-table th,
td {
  border: 1px solid #eee;
  padding: 1rem;
  text-align: center;
}
.addon-sponsorship-table th {
  width: 50%;
}
</style>

