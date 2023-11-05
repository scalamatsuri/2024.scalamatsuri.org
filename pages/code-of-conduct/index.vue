<i18n lang="yaml">
en:
  title: 'code-of-conduct en'
ja:
  title: 'code-of-conduct ja'
</i18n>

<template>
  <MainVisual :title="t('title')" />
  {{ $route.fullPath }}
</template>

<script setup lang="ts">
const { t } = useI18n()
publichedCheck()
</script>
