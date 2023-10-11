<i18n lang="yaml">
## language=yaml
en:
  title_01: Note to speakers
  body_01: Here are some notes to ScalaMatsuri speakers.
  title_02: Stay in 20min slot
  body_02: |
    The program is tightly arranged this year, with a sequence of short talks.
    We ask your cooperation to be punctual for both the starting time and the talk time (20min or 40min) to respect the attendees and other speakers.
    On the day of the talk, a time keeper will join you in the Zoom Webinar to display the remaining time, which you could glance from time to time.
    <br/>
    <b>In the event the talk runs over, please note that the MC will interrupt your talk.</b>
  title_03: Practice using Zoom Meeting
  body_03: |
    We suggest practicing using an ad-hoc <a href="https://zoom.us/start/videomeeting">Zoom Meeting</a>.
    Please confirm that your computer is setup to share Keynote etc using full screen.
    In some cases, you might need to grant macOS more permissions such as <b>Accessibility</b>.
    (see also <a href="https://support.zoom.us/hc/en-us/articles/360016688031-Using-the-Zoom-client-and-Zoom-Rooms-with-macOS">Granting macOS permissions for the Zoom client</a>)
  title_04: Zoom Webinar Operation
  body_04: |
    We will send you an invitation email for Zoom Webinar by the day before. Please be sure to enter from the link in the invitation email.<br>
    <br>
    During the session, we will use Zoom Webinar's <b>Interpretation</b> feature. Be sure to click the <b>Interpretation</b> button at the bottom right of Zoom Webinar UI and choose <b>English</b> if you'd be giving your talk in English.<br>
    <br>
    Questions and answers are included in the session time. You can answer as appropriate during the session, or you can answer all at the end of the session. Questions from participants will be written to the <b>main-track</b> channel of Discord. Be sure to read the question aloud before answering these questions. The <b>main-track-chat</b> channel in Discord are for chat. You can see them when you want to see the reaction of the participants.
  title_05: slide link
  body_05: |
    After ScalaMatsuri 2024, we plan to add slide and video links to our website.<br>
    <br>
    If you would like to see the slide links published in your account, please be sure to post the link to the <br>SPEAKERS / chat</br> channel of Discord. If you don't, we will publish the submitted slides in your ScalaMatsuri account and provide a link.
ja:
  title_01: スピーカーの皆さんへ
  body_01: ScalaMatsuri スピーカーの皆さんへの連絡事項です。
  title_02: 時間厳守
  body_02: |
    本年度のプログラムは短めのトークが次々と続く形で例年よりもタイトになっております。
    スケジュールの遅れが出ないように、開始時間およびトーク時間 (20分又は40分) の時間厳守をお願いしております。
    当日の Zoom Webinar にはタイムキーパーが同席して残り時間を表示するなどするので是非活用してください。
    <br/>
    <b>終了時間オーバーした場合、司会がトークを中断させていただきます。ご了承ください。</b>
  title_03: Zoom Meeting での練習
  body_03: |
    <a href="https://zoom.us/start/videomeeting">Zoom Meeting</a> を使っての練習をお願いしております。
    お使いのコンピュータが Keynote 等を使った状態で画面共有できることを確認してください。
    macOS へ追加で<b>アクセシビリティ</b>などの権限を許可する必要があるかもしれません。
    (参考: <a href="https://support.zoom.us/hc/ja/articles/360016688031-Zoom-%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88%E3%81%A8-Zoom-Rooms-%E3%82%92-macOS-%E3%81%A7%E4%BD%BF%E7%94%A8">Zoom クライアントと Zoom Rooms を macOS で使用</a>)
  title_04: Zoom Webinarの運用
  body_04: |
    前日までにZoom Webinarの招待メールを送ります。必ず招待メール中のリンクから入ってください。<br>
    <br>
    同時通訳機能を利用します。スピーカーの皆さんは、Zoom Webinarの右下の「通訳」ボタンをクリックして、必ず自分が話す言語（日本語もしくは英語）を選ぶようにしてください。<br>
    <br>
    質疑応答もセッション時間の中に含まれます。セッション中に適宜回答しても、セッションの最後にまとめて回答してもかまいません。<br>
    質問はDiscordの <b>main-track</b> チャネルに書き込まれます。必ず質問を読み上げてから、回答するようにしてください。<br>
    Discordの <b>main-track-chat</b> は雑談チャネルです。参加者の反応が見たいときに利用してください。<br>
  title_05: スライドリンク共有のお願い
  body_05: |
    ScalaMatsuri 2024終了後、Webサイトにスライドと動画のリンクを追記する予定です。<br>
    皆さんのアカウントで公開したスライドのリンクを利用してほしい場合は、必ず Discordの <b>SPEAKERS / chat</b> チャネルまでご記入ください。記入がなかった場合は、提出済のスライドをScalaMatsuriアカウントで公開し、リンクを貼る予定です。
</i18n>

<template>
  <div id="speakers">
    <div class="section">
      <h2 class="section_title">
        <span class="section_title_inner">{{ $t("title_01") }}</span>
      </h2>
      <p class="section_text" v-html="$t('body_01')" />
    </div>
    <div class="section">
      <h2 class="section_title">
        <span class="section_title_inner">{{ $t("title_02") }}</span>
      </h2>
      <p class="section_text" v-html="$t('body_02')" />
    </div>
    <div class="section">
      <h2 class="section_title">
        <span class="section_title_inner">{{ $t("title_03") }}</span>
      </h2>
      <p class="section_text" v-html="$t('body_03')" />
    </div>
    <div class="section">
      <h2 class="section_title">
        <span class="section_title_inner">{{ $t("title_04") }}</span>
      </h2>
      <p class="section_text" v-html="$t('body_04')" />
    </div>
    <div class="section">
      <h2 class="section_title">
        <span class="section_title_inner">{{ $t("title_05") }}</span>
      </h2>
      <p class="section_text" v-html="$t('body_05')" />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    const $t = this.$t.bind(this)
    return {
      title: $t("title_01"),
      meta: [{ name: "og:title", content: `${$t("title_01")} | ScalaMatsuri 2024` }],
    }
  },
}
</script>
