<i18n lang="yaml">
## language=yaml
en:
  document: Document link
ja:
  document: 資料へのリンク
</i18n>

<template>
  <MainVisual :title="session.proposalWithSpeakers[locale].title" />
  <div class="proposals">
    <div class="detail">
      <div class="speakers">
        <div v-for="speaker in session.proposalWithSpeakers.speakers" :key="speaker[locale].name" class="speaker">
          <img :src="speaker.iconUrl" class="speaker_icon" />
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
      <p>{{ displayDateAndHour(session.timetable?.startAt ?? "") }} ~ {{ displayHour(session.timetable?.endAt ?? "") }} (GMT+9)</p>
      <p>{{ session.proposalWithSpeakers.length }} min</p>
      <p v-if="session.proposalWithSpeakers.language == 'en'">Talking in English</p>
      <p v-if="session.proposalWithSpeakers.language == 'ja'">Talking in Japanese</p>
      <p class="description" v-html="session.proposalWithSpeakers[locale].description"></p>
      <div class="tags">
        <div v-for="kw in session.proposalWithSpeakers.keywords" :key="kw" class="tag" data-tag="tag">
          <span>{{ kw }}</span>
        </div>
      </div>
      <div v-if="session.proposalWithSpeakers.slideUrl" class="slide">
        <iframe :src="session.proposalWithSpeakers.slideUrl"
          width="100%"
          height="900px"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true">
        </iframe>
      </div>
      <div v-if="session.proposalWithSpeakers.otherWebUrl" class="slide">
        <a :href="session.proposalWithSpeakers.otherWebUrl">{{ t("document") }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Session } from '~/models/model'
const { locale, t } = useI18n()
pageMetaCheck()
const route = useRoute()
let session = {} as Session
const maybeSession: ComputedRef<Session | null> = getSessionById(route.params.id as string)
if (maybeSession) {
  session = maybeSession.value
} else {
  useState('pageMetaCheck', () => {
    throw createError({
      statusCode: 404,
      message: '404 Resource Not Found',
      fatal: true,
    })
  })
}
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
.slide {
  margin-top: 20px;
  iframe {
    border: none;
  }
}
</style>
