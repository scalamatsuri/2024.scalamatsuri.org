<i18n lang="yaml">
en:
  title: 'staff en'
ja:
  title: 'staff ja'
</i18n>

<template>
  <MainVisual :title="t('title')" />
  {{ $route.fullPath }}
</template>

<script setup lang="ts">
const { t } = useI18n()
pageMetaCheck()
</script>
