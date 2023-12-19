<i18n lang="yaml">
en:
  title: 'program en'
ja:
  title: 'program ja'
</i18n>

<template>
  {{ $route.fullPath }}
</template>

<script setup lang="ts">
const { t } = useI18n()
pageMetaCheck()
</script>
