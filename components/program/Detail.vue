<template>
  <div :id="timetable.timetableId">
    <h2 class="section_title">
      <span class="section_title_inner">{{ timetable.title[locale] }}</span>
    </h2>

    <div class="timetable">
      <div v-for="content in timetable.contents" :key="contentsId(content)" :set="(session = getSession(content))" class="timetable-column">
        <div class="time">
          {{ displayDateAndHour(content.startAt) }}
          <br />
          (GMT+9)
        </div>
        <div class="contents" v-if="content.type === 'EVENT'">
          <ProgramEvent :event="getEvent(content)" :content="content" />
        </div>
        <div class="contents" v-if="content.type === 'SESSION'">
          <ProgramSession :session="getSession(content)" :content="content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Session, type TimeTable, type TimeTableEvent, type TimeTableContents } from '~/models/model'
const { locale, t } = useI18n()
const localePath = useLocalePath()
const { sessions, events, timetable } = defineProps({
  sessions: {} as PropType<Session[]>,
  events: {} as PropType<TimeTableEvent[]>,
  timetable: {} as PropType<TimeTable>,
})

const contentsId = (content: TimeTableContents) => {
  switch (content.type) {
    case 'EVENT':
      return content.eventId
    case 'SESSION':
      return content.sessionId
  }
}

const getSession = (content) => {
  return sessions.find((s) => s.sessionId.value === content.sessionId)
}
const getEvent = (content) => {
  return events.find((e) => e.eventId === content.eventId)
}
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
  font-size: 20px;
  border-right: 1px solid #eee;
  flex: 0 0 200px;
  padding: 20px 30px;

  @media screen and (max-width: $headerViewport - 1) {
    flex: 0 0 20%;
    font-size: 14px;
  }
}

.contents {
  flex: 1 1 auto;
}
</style>
