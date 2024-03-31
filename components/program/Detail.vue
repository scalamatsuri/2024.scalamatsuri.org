<template>
  <h2 class="section_title">
    <span class="section_title_inner">{{ timetable.title[locale] }}</span>
  </h2>

  <div class="timetable">
    <div v-for="content in timetable.contents" :key="contentsId(content)" :set="session = getSession(content)" class="timetable-column">
      <div class="time">
        {{displayDateAndHour(content.startAt)}}
        <br />
        (GMT+9)
      </div>
      <div class="contents" v-if="content.type === 'EVENT'">
        Event
      </div>
      <div class="contents" v-if="content.type === 'SESSION'">
        <ProgramSession :session="getSession(content)" :content="content" />
      </div> 
      <div class="contents" v-if="content.type === 'WORKSHOP'">
        Workshop
      </div> 
    </div>
  </div>

  <!--
  <div :id="timetable.sessionId.value" class="session" data-target="session.sessionId.value">
    <div class="detail">
      <p class="time">
        {{ displayDateAndHour(session.startAt) }} 
      </p>
      <p class="title">
        <NuxtLink :to="localePath(`/programs/${session.sessionId.value}`)" target="_blank">
          {{ session.proposalWithSpeakers[locale].title }}
        </NuxtLink>
      </p>
      <p class="meta">
        {{ displayHour(session.startAt) }} - {{ displayHour(session.endAt) }} | {{ language }}
     </p>
     <div class="speakers">
        <div v-for="speaker in session.proposalWithSpeakers.speakers" :key="speaker.name" class="speaker">
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
      <p class="description" v-html="session?.proposalWithSpeakers[locale].description" />
      <div class="tags">
        <div v-for="kw in session.proposalWithSpeakers.keywords" :key="kw" class="tag" data-tag="tag">
          <span>{{ kw }}</span>
        </div>
      </div>
    </div>
  </div>
  -->
</template>

<script setup lang="ts">
import { type Session, type TimeTable, type TimeTableEvents, type TimeTableContents } from '~/models/model'
const { locale, t } = useI18n()
const localePath = useLocalePath()
const { sessions, events, timetable } = defineProps({
  sessions: {} as PropType<Session[]>,
  events: {} as PropType<TimeTableEvent[]>,
  timetable: {} as PropType<TimeTable>
})

const contentsId = (content: TimeTableContents) => {
  switch (content.type) {
    case 'WORKSHOP':
      return content.workshipId
    case 'EVENT':
      return content.eventId 
    case 'SESSION':
      return content.sessionId
  }
}

const getSession = (content) => { return sessions.find(s => s.sessionId.value === content.sessionId) }
const getEvent = (content) => { events.find(e => e.eventId === content.eventId) }
</script>

<style scoped lang="scss">
.timetable {
  width: 100%;
  margin: 40px auto 80px;
  border-top: 1px solid #eee;
}
.timetable-column {
  display: flex;
  align-items: stretch;
  width: 100%;
  border-bottom: 1px solid #eee;
}

.time {
  font-size: 24px;
  border-right: 1px solid #eee;
  flex: 0 0 200px;
  padding: 20px 30px;
}

.contents {
  flex: 0 2 auto;
}
</style>
