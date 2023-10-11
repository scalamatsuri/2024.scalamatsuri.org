<i18n lang="yaml">
en:
  outline: "Outline"
  program: "Program"
  sponsor: "Sponsor"
  coc: "Code of Conduct"
  access: "Access"
  staff: "Staff"
  extra_staff: "Extra Staff"
  travel: "Accommodation"
  help: "Help"
  past_scalamatsuri: "Past ScalaMatsuri's"
ja:
  outline: "開催概要"
  program: "プログラム"
  sponsor: "スポンサー"
  coc: "行動規範"
  access: "アクセス"
  staff: "スタッフ一覧"
  extra_staff: "当日スタッフ募集"
  travel: "会場付近の宿泊情報"
  help: "ヘルプ"
  past_scalamatsuri: "過去のイベント"
</i18n>

<template>
  <footer class="footer">
    <div class="footer_inner">
      <p class="footerlogo">
        <a :href="localePath('index')"><img v-lazy="require('~/assets/img/common/logo.svg')" alt="ScalaMatsuri 2024" width="68" height="53" /></a>
      </p>
      <div class="footerNav">
        <dl class="footerNav_list">
          <dt class="footerNav_title">ScalaMatsuri 2024</dt>
          <dd class="footerNav_item">
            <a :href="localePath('index')">{{ $t("outline") }}</a>
          </dd>
          <!-- <dd class="footerNav_item">
            <a :href="localePath('program')">{{ $t('program') }}</a>
          </dd> -->
          <!-- <dd class="footerNav_item">
            <a :href="localePath('sponsor')">{{ $t('sponsor') }}</a>
          </dd> -->
          <dd class="footerNav_item">
            <a :href="localePath('code-of-conduct')">{{ $t("coc") }}</a>
          </dd>
          <!-- <dd class="footerNav_item">
            <a :href="localePath('index') + '#access' ">{{ $t('access') }}</a>
          </dd> -->
        </dl>
        <dl class="footerNav_list">
          <dt class="footerNav_title">
            {{ $t("help") }}
          </dt>
          <!-- <dd class="footerNav_item">
            <a :href="localePath('staff')">{{ $t('staff') }}</a>
          </dd>
          <dd class="footerNav_item">
            <a :href="localePath('extra-staff')">{{ $t('extra_staff') }}</a>
          </dd>-->
          <!--
          <dd class="footerNav_item">
            <a :href="localePath('travel')">{{ $t('travel') }}</a>
          </dd>
          -->
          <dd class="footerNav_item">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSftjA6961ZzzJjqq1CrWtAN9wwrqXRUGFqZI5G8x2BjmZHeWw/viewform"
              target="_blank"
              rel="noopener"
              >{{ $t("help") }}</a
            >
          </dd>
        </dl>
        <dl class="footerNav_list">
          <dt class="footerNav_title">
            {{ $t("past_scalamatsuri") }}
          </dt>
          <dd class="footerNav_item">
            <a href="https://2024.scalamatsuri.org/" target="_blank" rel="noopener">ScalaMatsuri 2024</a>
          </dd>
          <dd class="footerNav_item">
            <a href="https://2022.scalamatsuri.org/" target="_blank" rel="noopener">ScalaMatsuri 2022</a>
          </dd>
          <dd class="footerNav_item">
            <a href="https://2020.scalamatsuri.org/" target="_blank" rel="noopener">ScalaMatsuri 2020</a>
          </dd>
          <dd class="footerNav_item">
            <a href="https://2019.scalamatsuri.org/" target="_blank" rel="noopener">ScalaMatsuri 2019</a>
          </dd>
          <dd class="footerNav_item">
            <a href="https://2018.scalamatsuri.org/" target="_blank" rel="noopener">ScalaMatsuri 2018</a>
          </dd>
          <dd class="footerNav_item">
            <a href="https://2017.scalamatsuri.org/" target="_blank" rel="noopener">ScalaMatsuri 2017</a>
          </dd>
          <dd class="footerNav_item">
            <a href="https://2016.scalamatsuri.org/" target="_blank" rel="noopener">ScalaMatsuri 2016</a>
          </dd>
          <dd class="footerNav_item">
            <a href="https://2014.scalamatsuri.org/" target="_blank" rel="noopener">ScalaMatsuri 2014</a>
          </dd>
          <dd class="footerNav_item">
            <a href="https://2013.scalamatsuri.org/" target="_blank" rel="noopener">Scala Conference in Japan 2013</a>
          </dd>
        </dl>
      </div>
    </div>
    <a href="https://github.com/scalamatsuri/2024.scalamatsuri.org" class="pullrequestBtn" target="_blank" rel="noopener">
      <img v-lazy="require('~/assets/img/common/icon-octcat.svg')" />Send a pull request
    </a>
    <p class="copyright">
      <small>&copy; ScalaMatsuri Organization | Japan Scala Association</small>
    </p>
    <!--お問い合わせフォーム(JIRA)-->
    <script
      data-jsd-embedded
      data-key="5fb513a6-45d7-424f-9213-6f517b966355"
      data-base-url="https://jsd-widget.atlassian.com"
      src="https://jsd-widget.atlassian.com/assets/embed.js"
    />
  </footer>
</template>
