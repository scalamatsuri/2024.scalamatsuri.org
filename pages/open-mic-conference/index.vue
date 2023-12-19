<i18n lang="yaml">
en:
  title: 'Open Mic Conference'
ja:
  title: '飛び入りカンファレンス'
</i18n>

<template>
  <MainVisual :title="t('title')" />
  {{ $route.fullPath }}
</template>

<script setup lang="ts">
const { t } = useI18n()
pageMetaCheck()
</script>
