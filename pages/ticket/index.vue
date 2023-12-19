<i18n lang="yaml">
en:
  title: 'ticket en'
ja:
  title: 'ticket ja'
</i18n>

<template>
  <MainVisual :title="t('title')" />
  {{ $route.fullPath }}
</template>

<script setup lang="ts">
const { t } = useI18n()
pageMetaCheck()
</script>
