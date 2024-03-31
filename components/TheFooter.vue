<i18n lang="yaml">
en:
  code-of-conduct: Code of Conduct
  call-for-proposals: Call for Proposals
  proposals: Proposals
  programs: Programs
  training-day: Training Day(ja)
  open-mic-conference: Open Mic Conference
  sponsorship: Sponsor Ship(ja)
  sponsors: Sponsors(ja)
  cm: CM
  ticket: Ticket
  travel: Travel
  staff: Staff
  extra-staff: Extra Staffs(ja)
  help: 'Help'
  past_scalamatsuri: "Past ScalaMatsuri's"
  scala-training-title-1: Scala Online Training Program
  scala-training-title-2: by Japan Scala Association
  scala-training: Scala Training(ja)
ja:
  code-of-conduct: 行動規範
  call-for-proposals: セッション募集
  proposals: セッション候補
  programs: プログラム
  training-day: トレーニング・デイ
  open-mic-conference: 飛び入りカンファレンス
  sponsorship: スポンサー募集
  sponsors: スポンサー
  cm: CM
  ticket: チケット
  travel: トラベル情報
  staff: スタッフ
  extra-staff: スタッフ募集
  help: 'ヘルプ'
  past_scalamatsuri: '過去のイベント'
  scala-training-title-1: SCALA オンライン研修
  scala-training-title-2: by Japan Scala Association
  scala-training: Scala Training
</i18n>

<template>
  <footer class="footer">
    <div class="footer_inner">
      <div class="footerNav">
        <dl class="footerNav_list">
          <p class="footer_logo">
            <NuxtLink :to="localePath('/')"><img src="/img/common/logo.svg" :alt="`ScalaMatsuri ${year}`" width="68" height="53" /></NuxtLink>
          </p>
        </dl>
        <dl class="footerNav_list">
          <dt class="footerNav_title">ScalaMatsuri {{ year }}</dt>
          <dd class="footerNav_item" v-for="_header in headers" :key="_header.order">
            <NuxtLink :to="localePath(_header.path)">{{ t(_header.path) }}</NuxtLink>
          </dd>
        </dl>
        <dl class="footerNav_list">
          <dt class="footerNav_title">{{ t('help') }}</dt>
          <dd class="footerNav_item">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSftjA6961ZzzJjqq1CrWtAN9wwrqXRUGFqZI5G8x2BjmZHeWw/viewform"
              target="_blank"
              rel="noopener">
              {{ t('help') }}
            </a>
          </dd>
        </dl>
        <dl class="footerNav_list">
          <dt class="footerNav_title">{{ t('past_scalamatsuri') }}</dt>
          <dd class="footerNav_item"><a href="https://2024.scalamatsuri.org/" target="_blank" rel="noopener">ScalaMatsuri 2024</a></dd>
          <dd class="footerNav_item"><a href="https://2023.scalamatsuri.org/" target="_blank" rel="noopener">ScalaMatsuri 2023</a></dd>
          <dd class="footerNav_item"><a href="https://2022.scalamatsuri.org/" target="_blank" rel="noopener">ScalaMatsuri 2022</a></dd>
          <dd class="footerNav_item"><a href="https://2020.scalamatsuri.org/" target="_blank" rel="noopener">ScalaMatsuri 2020</a></dd>
          <dd class="footerNav_item"><a href="https://2019.scalamatsuri.org/" target="_blank" rel="noopener">ScalaMatsuri 2019</a></dd>
          <dd class="footerNav_item"><a href="https://2018.scalamatsuri.org/" target="_blank" rel="noopener">ScalaMatsuri 2018</a></dd>
          <dd class="footerNav_item"><a href="https://2017.scalamatsuri.org/" target="_blank" rel="noopener">ScalaMatsuri 2017</a></dd>
          <dd class="footerNav_item"><a href="https://2016.scalamatsuri.org/" target="_blank" rel="noopener">ScalaMatsuri 2016</a></dd>
          <dd class="footerNav_item"><a href="https://2014.scalamatsuri.org/" target="_blank" rel="noopener">ScalaMatsuri 2014</a></dd>
          <dd class="footerNav_item"><a href="https://2013.scalamatsuri.org/" target="_blank" rel="noopener">Scala Conference in Japan 2013</a></dd>
        </dl>
        <dl class="footerNav_list">
          <dt class="footerNav_title">{{ t('scala-training-title-1') }}<br />{{ t('scala-training-title-2') }}</dt>
          <dd class="footerNav_item">
            <a href="https://www.scala-training.jp/" target="_blank" rel="noopener">
              {{ t('scala-training') }}
            </a>
          </dd>
        </dl>
      </div>
    </div>
    <a href="https://github.com/scalamatsuri/2024.scalamatsuri.org" class="pullrequestBtn" target="_blank" rel="noopener">
      <img src="/img/common/icon-octcat.svg" />Send a pull request
    </a>
    <p class="copyright">
      <small>&copy; ScalaMatsuri Organization | Japan Scala Association</small>
    </p>
  </footer>
</template>

<script setup lang="ts">
import appConfig from '~/app.config'
const { t } = useI18n()
const localePath = useLocalePath()
const { year } = useAppConfig()
const headers = appConfig.pages.filter((h) => h.published && h.footer).sort((h1, h2) => h1.order - h2.order)

// お問い合わせフォーム(JIRA)
const jira = {
  dataJsdEmbedded: true,
  dataKey: '5fb513a6-45d7-424f-9213-6f517b966355',
  dataBaseUrl: 'https://jsd-widget.atlassian.com',
  src: 'https://jsd-widget.atlassian.com/assets/embed.js',
}
useHead({
  script: [
    jira,
    {
      type: 'text/javascript',
      src: 'https://platform.twitter.com/widgets.js',
      async: true,
      defer: true,
    },
    {
      type: 'text/javascript',
      src: 'https://b.st-hatena.com/js/bookmark_button.js',
      async: true,
      defer: true,
    },
  ],
})
</script>

<style lang="scss" scoped>
/* footer */
.footer {
  background: url('/img/common/bg-black.png') repeat;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
}
.footerNav_title {
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
}
.footerNav_item {
  opacity: 0.5;
  line-height: 1.71;
  a {
    color: #fff;
    font-size: 14px;
    &:hover {
      opacity: 0.5;
    }
  }
}
@media screen and (min-width: $headerViewport) {
  /* footer PC */
  .footer {
    padding-top: 85px;
  }
  .footer_inner {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .footer_logo {
    float: left;
    margin-right: 127px;
  }
  .footerNav {
    // float: right;
    display: flex;
    justify-content: space-between;
    // width: 675px;
  }
  .footerNav_list {
    width: 20%;
    max-width: 20%;
  }
}
@media screen and (max-width: $headerViewport - 1) {
  /* footer SP */
  .footer_logo {
    display: none;
  }
  .footerNav_list {
    margin-top: 30px;
  }
  .footerNav_title {
    margin-bottom: 10px;
    font-size: 16px;
  }
  .footer_inner {
    padding: 0 20px 0;
  }
  .copyright {
    margin-top: 10px;
  }

  .pullrequestBtn {
    display: inline-block;
    position: static;
    margin-top: 40px;
    margin-left: 18px;
  }
}
.copyright {
  text-align: center;
  color: rgba(255, 255, 255, 0.2);
  margin-top: 92px;
  margin-bottom: 20px;
}
.pullrequestBtn {
  position: absolute;
  height: 40px;
  right: 10px;
  bottom: 10px;
  background: #221e23;
  border: 2px solid #39333b;
  box-sizing: border-box;
  border-radius: 100px;
  font-weight: bold;
  line-height: normal;
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  padding: 6px 16px 6px 6px;
  white-space: nowrap;
  img {
    margin-right: 9px;
    vertical-align: middle;
  }
}
</style>
