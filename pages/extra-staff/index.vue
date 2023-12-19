<i18n lang="yaml">
en:
  title: 'Extra Staff(ja)'
ja:
  title: '当日スタッフ'
</i18n>

<template>
  <MainVisual :title="t('title')" />
  {{ $route.fullPath }}
</template>

<script setup lang="ts">
const { t } = useI18n()
pageMetaCheck()
</script>
