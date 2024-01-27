<i18n lang="yaml">
en:
  title: Inquiry about Sponsorship(ja)
  text: Posting of job postings on this page is provided to sponsor companies over Daimyo sponsors.
ja:
  title: スポンサー申し込みはこちら
  text: このページでの広告情報の掲載は大名スポンサー以上のスポンサー様に提供させていただいております。
</i18n>

<template>
  <section class="inquiry">
    <h3 class="inquiry_title">
      <NuxtLink :to="localePath('sponsorship')">
        {{ t('title') }}
      </NuxtLink>
    </h3>
    <p class="inquiry_text">
      {{ t('text') }}
    </p>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<style scoped lang="scss">
.inquiry {
  margin-top: 60px;
  text-align: left;
  padding: 40px;
  background-color: #f1f1f1;
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
</style>
