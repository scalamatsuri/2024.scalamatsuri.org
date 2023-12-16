<i18n lang="yaml">
en:
  proposals: Proposals
  description: |
    Day 1 will be a training day.<br>
    Days 2 and 3 will feature conference days and open mic sessions.
ja:
  proposals: セッション候補はこちら
  description: |
    1日目はトレーニング・デイを開催します。<br>
    2日目と3日目はカンファレンスデイと、オープンマイクセッションを開催します。
</i18n>

<template>
  <section class="content">
    <h2 class="content_title">Programs</h2>
    <div class="content_text">
      <!-- <NuxtLink :to="localePath('/proposals')">
        {{ t('proposals') }}
      </NuxtLink> -->
      <p v-html="t('description')"></p>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()
</script>

<style lang="scss" scoped>
.content {
  padding: 0 20px;
  text-align: center;
  max-width: $pcMinWidth - 40px;
  margin: 0 auto;
}
.content_title {
  display: inline-block;
  margin-top: 40px;
  font-weight: bold;
  font-size: 48px;
  color: #bd3844;
}
.content_text {
  margin-top: 40px;
  font-size: 16px;
  line-height: 28px;
}
</style>
