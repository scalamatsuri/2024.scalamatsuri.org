<template>
  <div :id="proposal?.proposalId.value" class="session" data-target="session.sessionId.value">
    <div class="detail">
      <p class="title">{{ proposal[locale].title }}</p>
      <div class="speakers">
        <div v-for="speaker in proposal?.speakers" :key="speaker[locale].name" class="speaker">
          <img v-if="speaker.iconUrl" :src="speaker.iconUrl" class="speaker_icon" />
          <img v-if="!speaker.iconUrl" src="/img/common/logo.svg" class="speaker_icon" />
          <p class="speaker_name">{{ speaker[locale].name }}</p>
          <p class="speaker_id">
            <a v-if="speaker.twitter" class="modal_speaker_sns" :href="`https://twitter.com/${speaker.twitter}`">
              <img src="/img/common/icon-sns-x.svg" />{{ speaker.twitter }}
            </a>
            <a v-if="speaker.github" class="modal_speaker_sns" :href="`https://github.com/${speaker.github}`">
              <img src="/img/common/icon-sns-git.svg" />{{ speaker.github }}
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type ProposalWithSpeakers, type Session, type TimeTableContents } from '~/models/model'
const { locale, t } = useI18n()
const localePath = useLocalePath()
const { proposal } = defineProps({
  proposal: {} as PropType<ProposalWithSpeakers>
})
const languageMap = { en: 'English', ja: 'Japanese' }
</script>

<style scoped lang="scss">
.session {
  padding: 20px 0;

  /* for SP */
  @media screen and (max-width: $headerViewport - 1) {
    padding: 10px 0;
  }
}
.detail {
  text-align: left;
  padding: 0px 30px;

  @media screen and (max-width: $headerViewport - 1) {
    padding: 0px 15px;
  }
}
.title {
  font-weight: bold;
  font-size: 28px;

  @media screen and (max-width: $headerViewport - 1) {
    font-size: 20px;
  }
}
.description {
  margin-top: 10px;
  letter-spacing: 0.1em;
}

.speakers {
  display: flex;
  flex-wrap: wrap;
}
.speaker {
  text-align: left;
  margin-top: 10px;

  @media screen and (min-width: $headerViewport) {
    width: calc(33.3% - 10px);
    min-width: 300px;
  }
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

.meta {
  color: #888;
  @media screen and (max-width: $headerViewport - 1) {
    font-size: 16px;
  }
}

.tags {
  display: inline;
  font-weight: bold;
  line-height: normal;
  font-size: 12px;
  letter-spacing: 0.1em;

  @media screen and (max-width: $headerViewport - 1) {
    line-height: 10px;
    font-size: 10px;
  }
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

    @media screen and (max-width: $headerViewport - 1) {
      font-size: 10px;
      line-height: 10px;
    }
  }
  + .tag {
    &:before {
      content: ' | ';
    }
  }
}
</style>
