<i18n lang="yaml">
en:
  title: Sponsors
  sponsorType:
    syogun: Shogun Sponsor
    tairou: Tairou Sponsor
    daimyo: Daimyo Sponsor
ja:
  title: スポンサー
  sponsorType:
    syogun: 将軍スポンサー
    tairou: 大老スポンサー
    daimyo: 大名スポンサー
</i18n>

<template>
  <MainVisual :title="t('title')" />
  <SponsorInquiry />
  <SponsorBlock :title="t('sponsorType.syogun')" :sponsors="shuffledShogunSponsors" />
  <SponsorBlock :title="t('sponsorType.tairou')" :sponsors="shuffledTairouSponsors" />
  <SponsorBlock :title="t('sponsorType.daimyo')" :sponsors="shuffledDaimyoSponsors" />
</template>

<script setup lang="ts">
import { type Sponsor } from '~/models/model'
const { t } = useI18n()
pageMetaCheck()
const shogunSponsors: ComputedRef<Sponsor[]> = getSponsorsByType('SHOGUN')
const shuffledShogunSponsors = computed(() => arrayShuffle(shogunSponsors.value))
const tairouSponsors: ComputedRef<Sponsor[]> = getSponsorsByType('TAIROU')
const shuffledTairouSponsors = computed(() => arrayShuffle(tairouSponsors.value))
const daimyoSponsors: ComputedRef<Sponsor[]> = getSponsorsByType('DAIMYO')
const shuffledDaimyoSponsors = computed(() => arrayShuffle(daimyoSponsors.value))
</script>
