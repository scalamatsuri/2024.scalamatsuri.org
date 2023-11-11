<i18n lang="yaml">
en:
  title: 'sponsorship en'
ja:
  title: 'sponsorship ja'
</i18n>

<template>
  <MainVisual :title="t('title')" />
  {{ $route.fullPath }}
</template>

<script setup lang="ts">
const { t } = useI18n()
publichedCheck()
</script>
