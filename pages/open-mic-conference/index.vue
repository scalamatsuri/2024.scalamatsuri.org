<i18n lang="yaml">
en:
  title: 'open-mic-conference en'
ja:
  title: 'open-mic-conference ja'
</i18n>

<template>
  <MainVisual :title="t('title')" />
  {{ $route.fullPath }}
</template>

<script setup lang="ts">
const { t } = useI18n()
publichedCheck()
</script>
