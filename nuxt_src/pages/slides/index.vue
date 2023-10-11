<i18n lang="yaml">
## language=yaml
en:
  title_01: Subtitles on your presentation deck
  body_01: |
    We want to make it a fun event for both the Japanese audience and those visiting Japan from overseas. Please leave a room on the bottom of each slide so we can put subtitles in your sides. The ScalaMatsuri staff will provide the translation.
  title_02: How to put “subtitles”
  body_02: |
    <ul>
      <li><a href="https://www.slideshare.net/scalaconfjp/building-a-unified-data-pipline-in-spark" target="_blank">Building a Unified Data Pipline in Spark</a></li>
      <li><a href="https://www.slideshare.net/scalaconfjp/the-evolution-of-scala-scala" target="_blank">The Evolution of Scala</a></li>
      <li><a href="/sub-samples/sub-sample.key" target="_blank">Sample Deck (Keynote 09)</a></li>
      <li><a href="/sub-samples/sub-sample.pdf" target="_blank">Sample Deck (PDF)</a></li>
      <li><a href="/sub-samples/sub-sample.pptx" target="_blank">Sample Deck (PowerPoint)</a></li>
    </ul>
    <br/>
    Like the above sample decks, please create a black text box to fit 2 lines in 36px font (27pt on Windows, 36pt on Mac) at the bottom each slides.
  title_03: Submit your slides
  body_03: |
    Please submit your slide decks by deadline.
    <br/>
    ScalaMatsuri staff will provide the translation, and also check for Code of Conduct compliance. Since the translation will be done based on text, if you could please submit a text file with all the texts along with your slide deck, it would be most appreciated (like a lot)! The slide deck will also be submitted to the interpreters. If you send it as PowerPoint, Google slide show, or Keynote format, we put/fix “subtitles” directly. Otherwise, we send you a translated/fixed text file, so you put/fix by yourself. It's fine to choose 4:3 or 16:9 aspect ratio.
    <br/>
    If you have any changes by then, feel free to submit the new deck along with the change description such as “changed the text on page 3.” Any changes after February 10th will be at your own risk.
  title_04: Your slides of the day
  body_04: Please bring your laptop with your slide data. You can connect your laptop by HDMI or analog VGA.If you’re MACer, please bring a conversion connector. If you can’t bring your laptop, we’ll prepare.Please contact us.
ja:
  title_01: 発表資料の翻訳・字幕について
  body_01: |
    アジア最大規模の Scala イベントとして、ScalaMatsuri を日本国内からの参加者だけでなく海外からの参加者も楽しめるイベントにしたいと思っています。そのため、英語で発表資料を作っていただいた上で、日本語の字幕の追記をお願いしています。 もちろん、英語/日本語に不安のある方にはこちらで翻訳のチェックやサポートを行いますのでご安心下さい。
  title_02: 字幕について
  body_02: |
    <ul>
      <li><a href="https://www.slideshare.net/scalaconfjp/building-a-unified-data-pipline-in-spark" target="_blank">Apache Spark を用いた Big Data パイプラインの統一</a></li>
      <li><a href="https://www.slideshare.net/scalaconfjp/the-evolution-of-scala-scala" target="_blank">The Evolution of Scala / Scala進化論</a></li>
      <li><a href="/sub-samples/sub-sample.key" target="_blank">サンプル資料 (Keynote 09)</a></li>
      <li><a href="/sub-samples/sub-sample.pdf" target="_blank">サンプル資料 (PDF)</a></li>
      <li><a href="/sub-samples/sub-sample.pptx" target="_blank">サンプル資料 (PowerPoint)</a></li>
    </ul>
    <br/>
    サンプル資料を参考に丸ゴシック体の 36px (Windows だと 27pt、Mac だと 36pt) で二行分のスペースを資料の下の部分に入れて下さい。 字幕の文言は、全てを直訳しようとせずに、肝となる部分だけを一言で意訳するようにして下さい。
  title_03: 発表資料の提出
  body_03: |
    発表資料は締め切り日までに cfp[at]scalamatsuri.org へ提出して下さい。
    <br/>
    スタッフ側で発表資料の本文・字幕の翻訳の確認、および行動規範への準拠の確認を行います。 翻訳作業はチーム内ではテキストベースで行うので、スライドと共にテキスト部だけを書きだしたテキストファイルをご提出下さい。 また、資料の形式を、PowerPoint,Google スライドショー、Keynoteのいずれかで提出いただけた場合は、翻訳、チェック後の字幕をこちらで挿入/修正いたします。それ以外の場合は、翻訳/修正したテキストファイルをお送りしますので、ご自身で字幕の挿入/修正をお願いいたします。 画面の比率は4:3、16:9どちらでも構いません。
    <br/>
    ScalaMatsuri 開催2週間前ぐらいに発表資料をお返しすると共に、同時通訳者へ資料の提出を行います。 また、それまでは発表資料の差し替えを随時受け付けます。差し替えの際には、新しい資料に変更内容の概要（「3ページ目の文章を修正」など）を添えて提出してください。直前に資料を修正して頂いても構いませんが、その場合は内容についてのレビューはできませんので自己責任でお願いします。
  title_04: 当日の発表資料
  body_04: 当日は発表資料を入れた自身のPCをご持参下さい。 接続は、HDMIまたは、アナログVGA端子が利用可能です。Macの方は、変換コネクタもご用意下さい。 もし、なんらかの事情でPCを持参できない場合には、お気軽にご相談下さい。
</i18n>

<template>
  <div id="slides">
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
