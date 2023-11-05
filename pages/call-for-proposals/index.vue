<i18n lang="yaml">
en:
  title: 'call-for-proposals en'
ja:
  title: 'call-for-proposals ja'
</i18n>

<template>
  <MainVisual :title="t('title')" />
  {{ $route.fullPath }}
</template>

<script setup lang="ts">
const { t } = useI18n()
publichedCheck()
</script>
