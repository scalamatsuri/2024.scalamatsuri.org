<i18n lang="yaml">
en:
  title: Sponsors
  sponsorType:
    syogun: Shogun Sponsor
    daimyo: Daimyo Sponsor
ja:
  title: スポンサー
  sponsorType:
    syogun: 将軍スポンサー
    daimyo: 大名スポンサー
</i18n>

<template>
  <MainVisual :title="t('title')" />
  <SponsorInquiry />
  <SponsorBlock :title="t('sponsorType.syogun')" :sponsors="shogunSponsors" />
  <SponsorBlock :title="t('sponsorType.daimyo')" :sponsors="daimyoSponsors" />
</template>

<script setup lang="ts">
const { t } = useI18n()
const shogunSponsors = getSponsorsByType('SHOGUN')
const daimyoSponsors = getSponsorsByType('DAIMYO')
</script>
