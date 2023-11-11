<i18n lang="yaml">
en:
  title: 'sponsor en'
ja:
  title: 'sponsor ja'
</i18n>

<template>
  <MainVisual :title="t('title')" />
  {{ $route.fullPath }}
</template>

<script setup lang="ts">
const { t } = useI18n()
publichedCheck()
</script>
