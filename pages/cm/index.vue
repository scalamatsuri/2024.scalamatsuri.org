<i18n lang="yaml">
en:
  title: 'CM'
ja:
  title: 'CM'
</i18n>

<template>
  <MainVisual :title="t('title')" />
  <div class="section">
    <iframe
      src="https://docs.google.com/presentation/d/e/2PACX-1vQpDjD0CWNznkEvoKwp760dXcZwbu5os3YdfaK2j983voK1zMpvAvGXZl-_nna2DAQpCxjQy-OhsDAW/embed?start=true&loop=true&delayms=5000"
      frameborder="0"
      width="900"
      height="749"
      allowfullscreen="true"
      mozallowfullscreen="true"
      webkitallowfullscreen="true"></iframe>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
pageMetaCheck()
</script>
