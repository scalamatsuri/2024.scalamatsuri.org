<i18n lang="yaml">
en:
  title: 'Proposals'
  slide_notation: 'Talking languages are as shown below. All slides will be in English.'
  cfp_notation: |
    CFP is still open now. You can submit from <a href="/en/cfp/">here</a> by 23:59, 1st Feb Anywhere on Earth.
  en_100: '100-minute sessions in English'
  en_40: '40-minute sessions in English'
  ja_100: '100-minute sessions in Japanese'
  ja_40: '40-minute sessions in Japanese'
ja:
  title: '応募セッション一覧'
  slide_notation: '発表言語ごとに表示しています。スライドの言語は全て英語の予定です.'
  cfp_notation: |
    セッション募集(CFP) 期間中です。ご応募は<a href="/ja/cfp/">こちら</a>。2/1 23:59 AoE (2/2 20:59 JST)締切です。
  en_100: '100分英語'
  en_40: '40分英語'
  ja_100: '100分日本語'
  ja_40: '40分日本語'
</i18n>

<template>
  <MainVisual :title="t('title')" />
  <div class="page">
    <h2 class="page_title">{{ t('en_40') }}</h2>
    <div class="proposals">
      <div v-for="proposal in localedProposals40min" :key="proposal.id.value">
        <div :id="proposal.id.value" class="proposal" data-target="proposal.id.value">
          <div class="detail">
            <p class="title">
              <NuxtLink :to="localePath(`/proposals/${proposal.id.value}`)">
                {{ proposal[locale].title }}
              </NuxtLink>
            </p>
            <p v-if="proposal.language == 'en'">English</p>
            <p v-if="proposal.language == 'ja'">Japanese</p>
            <div class="speakers">
              <div v-for="speaker in proposal.speakers" :key="speaker.name" class="speaker">
                <img :src="speaker.iconUrl" class="speaker_icon" />
                <p class="speaker_name">{{ speaker.name }}</p>
                <p class="speaker_id">
                  <a v-if="speaker.twitter" class="modal_speaker_sns" :href="`https://twitter.com/${speaker.twitter}`">
                    <img src="~/assets/img/common/icon-sns-tw.svg" />{{ speaker.twitter }}
                  </a>
                  <a v-if="speaker.github" class="modal_speaker_sns" :href="`https://github.com/${speaker.github}`">
                    <img src="~/assets/img/common/icon-sns-git.svg" />{{ speaker.github }}
                  </a>
                </p>
              </div>
            </div>
            <p class="description">{{ proposal[locale].description }}</p>
            <div class="tags">
              <div v-for="kw in proposal.keywords" :key="kw" class="tag" data-tag="tag">
                <span>{{ kw }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2 class="page_title">{{ t('en_20') }}</h2>
    <div class="proposals">
      <div v-for="proposal in localedProposals20min" :key="proposal.id.value">
        <div :id="proposal.id.value" class="proposal" data-target="proposal.id.value">
          <div class="detail">
            <p class="title">
              <NuxtLink :to="localePath(`/proposals/${proposal.id.value}`)">
                {{ proposal[locale].title }}
              </NuxtLink>
            </p>
            <p v-if="proposal.language == 'en'">English</p>
            <p v-if="proposal.language == 'ja'">Japanese</p>
            <div class="speakers">
              <div v-for="speaker in proposal.speakers" :key="speaker.name" class="speaker">
                <img :src="speaker.iconUrl" class="speaker_icon" />
                <p class="speaker_name">{{ speaker.name }}</p>
                <p class="speaker_id">
                  <a v-if="speaker.twitter" class="modal_speaker_sns" :href="`https://twitter.com/${speaker.twitter}`">
                    <img src="~/assets/img/common/icon-sns-tw.svg" />{{ speaker.twitter }}
                  </a>
                  <a v-if="speaker.github" class="modal_speaker_sns" :href="`https://github.com/${speaker.github}`">
                    <img src="~/assets/img/common/icon-sns-git.svg" />{{ speaker.github }}
                  </a>
                </p>
              </div>
            </div>
            <p class="description">{{ proposal[locale].description }}</p>
            <div class="tags">
              <div v-for="kw in proposal.keywords" :key="kw" class="tag" data-tag="tag">
                <span>{{ kw }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Proposal, type Talk } from '~/models/model'
const { locale, t } = useI18n()
const localePath = useLocalePath()
pageMetaCheck()

const proposals: ComputedRef<Proposal[]> = getProposals()
const localedProposals40min = proposals.value.filter((proposal) => proposal.length === 40)
const localedProposals20min = proposals.value.filter((proposal) => proposal.length === 20)
</script>

<style scoped lang="scss">
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
.proposal {
  border-bottom: 1px solid #eee;
  padding: 20px 0;
}
.detail {
  text-align: left;
  padding: 0px 30px;
}
.title {
  font-weight: bold;
  font-size: 2em;
}
.description {
  margin-top: 10px;
  letter-spacing: 0.1em;
}

.speakers {
  // padding: 0px 30px;
  display: flex;
  flex-wrap: wrap;
}
.speaker {
  width: calc(33.3% - 10px);
  text-align: left;
  margin-top: 10px;
  min-width: 300px;
}
.speaker_icon {
  width: 40px;
  height: 40px;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1) inset;
  background-size: cover;
  border-radius: 20px;
  float: left;
}
.speaker_name {
  margin-left: 50px;
  font-weight: bold;
  line-height: 20px;
  font-size: 12px;
  letter-spacing: 0.1em;
}
.speaker_id {
  margin-left: 50px;
  line-height: 20px;
  font-size: 12px;
  > a {
    margin-right: 10px;
  }
  > a > img {
    width: 16px;
    height: 16px;
    margin: 4px 3px 0 0;
  }
}

.tags {
  display: inline;
  font-weight: bold;
  line-height: normal;
  font-size: 12px;
  letter-spacing: 0.1em;
}
.tag {
  display: inline;
  color: rgba(0, 0, 0, 0.5);
  > span {
    display: inline-block;
    line-height: 20px;
    font-size: 12px;
    letter-spacing: 0.05em;
    font-weight: normal;
  }
  + .tag {
    &:before {
      content: ' | ';
    }
  }
}
</style>
