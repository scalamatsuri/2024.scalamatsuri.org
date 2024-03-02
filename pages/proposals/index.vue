<i18n lang="yaml">
en:
  title: 'Proposals'
  slide_notation: 'Talking languages are as shown below. All slides will be in English.'
  cfp_notation: |
    CFP is still open now. You can submit from <a href="/en/cfp/">here</a> by 23:59, 1st Feb Anywhere on Earth.
  en_40: '40-minute sessions in English'
  en_20: '20-minute sessions in English'
  ja_40: '40-minute sessions in Japanese'
  ja_20: '20-minute sessions in Japanese'
ja:
  title: '応募セッション一覧'
  slide_notation: '発表言語ごとに表示しています。スライドの言語は全て英語の予定です.'
  cfp_notation: |
    セッション募集(CFP) 期間中です。ご応募は<a href="/ja/cfp/">こちら</a>。2/1 23:59 AoE (2/2 20:59 JST)締切です。
  en_40: '40分英語'
  en_20: '20分英語'
  ja_40: '40分日本語'
  ja_20: '20分日本語'
</i18n>

<template>
  <MainVisual :title="t('title')" />
  <h3 class="sub_header_link">
    <NuxtLink v-if="localedProposalsEn40min.length > 0" to="#en_40" class="sub_header_link_item">{{ t('en_40') }}</NuxtLink>
    <NuxtLink v-if="localedProposalsJa40min.length > 0" to="#ja_40" class="sub_header_link_item">{{ t('ja_40') }}</NuxtLink>
    <NuxtLink v-if="localedProposalsEn20min.length > 0" to="#en_20" class="sub_header_link_item">{{ t('en_20') }}</NuxtLink>
    <NuxtLink v-if="localedProposalsJa20min.length > 0" to="#ja_20" class="sub_header_link_item">{{ t('ja_20') }}</NuxtLink>
  </h3>
  <div class="page">
    <div v-if="localedProposalsEn40min.length > 0">
      <h2 id="en_40" class="page_title">{{ t('en_40') }}</h2>
      <div class="proposals">
        <div v-for="proposal in localedProposalsEn40min" :key="proposal.proposalId.value">
          <ProposalDetail :proposal="proposal" />
        </div>
      </div>
    </div>

    <div v-if="localedProposalsJa40min.length > 0">
      <h2 id="ja_40" class="page_title">{{ t('ja_40') }}</h2>
      <div class="proposals">
        <div v-for="proposal in localedProposalsJa40min" :key="proposal.proposalId.value">
          <ProposalDetail :proposal="proposal" />
        </div>
      </div>
    </div>

    <div v-if="localedProposalsEn20min.length > 0">
      <h2 id="en_20" class="page_title">{{ t('en_20') }}</h2>
      <div class="proposals">
        <div v-for="proposal in localedProposalsEn20min" :key="proposal.proposalId.value">
          <ProposalDetail :proposal="proposal" />
        </div>
      </div>
    </div>

    <div v-if="localedProposalsJa20min.length > 0">
      <h2 id="ja_20" class="page_title">{{ t('ja_20') }}</h2>
      <div class="proposals">
        <div v-for="proposal in localedProposalsJa20min" :key="proposal.proposalId.value">
          <ProposalDetail :proposal="proposal" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type ProposalWithSpeakers } from '~/models/model'
const { locale, t } = useI18n()
const localePath = useLocalePath()
pageMetaCheck()

const proposals: ComputedRef<ProposalWithSpeakers[]> = getProposals()
const shuffledProposals = computed(() => arrayShuffle(proposals.value))
const localedProposalsEn40min = shuffledProposals.value.filter((proposal) => proposal.length === 40 && proposal.language === 'en')
const localedProposalsJa40min = shuffledProposals.value.filter((proposal) => proposal.length === 40 && proposal.language === 'ja')
const localedProposalsEn20min = shuffledProposals.value.filter((proposal) => proposal.length === 20 && proposal.language === 'en')
const localedProposalsJa20min = shuffledProposals.value.filter((proposal) => proposal.length === 20 && proposal.language === 'ja')
</script>

<style scoped lang="scss">
.sub_header_link {
  margin-top: 60px;
  text-align: center;
  padding: 40px;
  background-color: #f1f1f1;
}
/* footer PC */
@media screen and (min-width: $headerViewport) {
  .sub_header_link_item {
    display: inline-block;
    margin: 0 20px;
  }
}
/* footer SP */
@media screen and (max-width: $headerViewport - 1) {
  .sub_header_link_item {
    display: block;
    margin: 20px 0;
  }
}
.page {
  text-align: center;
  margin: 0 auto;
  &.is_disabled {
    display: none;
  }
}
.page_title {
  margin-top: 100px;
  padding: 10px 59px;
  font-weight: bold;
  line-height: 49px;
  font-size: 30px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #fff;
  background: #333;
  display: inline-block;
}

.proposals {
  border-top: 1px solid #eee;
  margin: 60px auto 0;
  max-width: 1200px;
}
</style>
