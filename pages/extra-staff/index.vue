<i18n lang="yaml">
en:
  title: 'extra-staff en'
ja:
  title: 'extra-staff ja'
</i18n>

<template>
  <MainVisual :title="t('title')" />
  {{ $route.fullPath }}
</template>

<script setup lang="ts">
const { t } = useI18n()
publichedCheck()
</script>
