<template>
  <div id="extraStaff">
    <div class="main">
      <div class="main_inner">
        <h1 class="main_title">直前期スタッフ募集</h1>
      </div>
    </div>

    <div class="lead">
      <img v-lazy="require('~/assets/img/extra-staff/img-main.jpg')" alt="" class="lead_img is_sp" />
      <div class="lead_inner">
        <h2 class="lead_text">イベントを一緒に盛り上げる<br />仲間を募集しています</h2>
        <!--
        <div class="section_btnArea lead_btnArea">
          <a href="https://forms.gle/SkbscteHs4nzGPZB8" target="_blank" rel="noopener" class="section_btn section_btn-l">スタッフに応募する</a>
        </div>
        -->
        <p class="extrastaff_note">
          2024/10/1 ScalaMatsuri 2024 <strong>直前期スタッフ募集は締め切りました。</strong><br />
          たくさんのご応募、誠にありがとうございました。
        </p>
      </div>
    </div>
    <p class="catch">カンファレンス運営に興味のある方、Scalaコミュニティを盛り上げていきたい方は、是非当日スタッフとしてのご参加を検討下さい。</p>

    <div class="section">
      <h2 class="section_title">
        <span class="section_title_inner">直前期スタッフ概要</span>
      </h2>
      <div class="section_table1">
        <dl>
          <dt>開催日</dt>
          <dd><em>2024年10/17(土) 〜 10/18(日)</em><br />当日の作業やZoom Webinarの扱い方について事前説明会も開催します。</dd>
        </dl>
        <dl>
          <dt>開催時間</dt>
          <dd><em>9:30 〜 19:00</em>(懇親会参加の場合は21:00)</dd>
        </dl>
        <dl>
          <dt>開催地</dt>
          <dd><em>ScalaMatsuri DiscordサーバーおよびZoom Webinar</em></dd>
        </dl>
        <dl>
          <dt>応募方法</dt>
          <dd>
            <em>応募フォームよりご連絡のつくメールアドレスを入力して下さい。</em><br />
            後日、こちらでご入力いただいたメールアドレス宛に詳細のご連絡や、Discordのご招待を送ります。
          </dd>
        </dl>

        <dl>
          <dt>スタッフ業の内容</dt>
          <dd>
            <p>事前（希望者のみ）</p>
            <ul>
              <li>スライドの和訳字幕付け</li>
              <li>Webサイト改修（Nuxt.js @ Firebase Hosting)</li>
            </ul>
            <p>カンファレンス当日</p>
            <p>(シフト時間外は自由にScalaMatsuriを楽しんでください！)</p>
            <ul>
              <li>各セッションのタイムキーパー、司会</li>
              <li>飛び入りカンファレンス</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>スタッフ特典</dt>
          <dd>
            <ul>
              <li>チケット代無料</li>
              <li>
                <a href="https://scalamatsuri.official.ec/" target="_blank" rel="noopener">Tシャツ</a>割引クーポン(システム下限の50円となります)
              </li>
              <li>後日のスタッフ打ち上げへの参加</li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="section_btnArea">
        <a href="https://forms.gle/SkbscteHs4nzGPZB8" target="_blank" rel="noopener" class="section_btn section_btn-l">スタッフに応募する</a>
      </div>
    </div>
  </div>
</template>

<script>
import Page404NotFoundMixin from "~/mixins/page/Page404NotFound.js"
export default {
  mixins: [Page404NotFoundMixin],
  head() {
    return {
      title: `直前期スタッフ募集`,
      meta: [{ name: "og:title", content: `直前期スタッフ募集 | ScalaMatsuri ${this.$YEAR}` }],
    }
  },
}
</script>
