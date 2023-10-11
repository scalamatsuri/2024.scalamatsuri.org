<template>
  <div v-if="!useRoom()" class="schedule_event">
    <p class="empty_room">
      {{ schedule.room }}
    </p>
    <div class="schedule_detail">
      <p class="schedule_title">
        {{ typeof schedule.title === 'string' ? schedule.title : locale in schedule.title ? schedule.title[locale] : schedule.title['en'] }}
      </p>
      <div class="schedule_tags">
        <p class="schedule_tag">{{ getTimeStr(schedule.startAt) }} - {{ getTimeStr(schedule.endAt) }}</p>
      </div>
    </div>
  </div>
  <div v-else-if="isProgram()" class="schedule_event">
    <div v-if="schedule.room" class="schedule_room">
      <p v-html="schedule.room" />
    </div>
    <div v-if="schedule.proposal" class="schedule_detail">
      <p class="schedule_title">
        {{ schedule.proposal[locale].title }}
      </p>
      <div class="schedule_tags">
        <p class="schedule_tag">{{ getTimeStr(schedule.startAt) }} - {{ getTimeStr(schedule.endAt) }}</p>
        <p v-if="schedule.proposal[locale].language" class="schedule_tag">
          {{ schedule.proposal[locale].language }}
        </p>
        <p v-if="schedule.proposal[locale].tags.length > 0" class="schedule_tag">
          {{ schedule.proposal[locale].tags.join() }}
        </p>
      </div>
      <ul class="schedule_function">
        <li v-for="item in schedule.proposal[locale].tags" :key="item" class="schedule_function">
          <span v-html="item" />
        </li>
      </ul>
    </div>
    <!-- 内容 ここまで -->
    <!-- 登壇者 ここから -->
    <div class="schedule_speakers">
      <div v-for="speaker in schedule.proposal[locale].speakers" :key="speaker.name" class="schedule_speaker">
        <div v-if="speaker.name">
          <template v-if="speaker.icon">
            <img v-lazy="speaker.icon" class="schedule_speaker_icon" />
            <div class="schedule_speaker_name">
              {{ speaker.name }}
            </div>
            <p class="schedule_speaker_id">
              {{ speaker.id }}
            </p>
          </template>
          <template v-if="!speaker.icon">
            <div class="schedule_speaker_name_not_icon">
              {{ speaker.name }}
            </div>
            <p class="schedule_speaker_id_not_icon">
              {{ speaker.id }}
            </p>
          </template>
        </div>
      </div>
    </div>
    <!-- 登壇者 ここまで -->
    <!-- お気に入り ここから -->
    <!-- <div class="schedule_fav js-anc">
      <input
        id="favCheck0-0-0"
        type="checkbox"
        name="favCheck0-0-0"
        class="schedule_fav_checkbox js-fav"
      >
      <label for="favCheck0-0-0" class="schedule_fav_icon js-favLabel" />
    </div> -->
    <!-- お気に入り ここまで -->
  </div>
  <!-- <div v-else class="schedule_event">
    <p class="schedule_room">
      ROOM {{ schedule.room }}
    </p>
    <div class="schedule_detail">
      <p class="schedule_title">
        {{ schedule.program.title }}
      </p>
      <div class="schedule_tags">
        <p class="schedule_tag">
          {{ schedule.started_at }} - {{ schedule.ended_at }}
        </p>
      </div>
    </div>
  </div> -->
</template>

<script>
import { DateTime } from 'luxon'

// ちょっと場当たり的な気がするが、一旦…
export default {
  props: {
    schedule: {
      // Object{}である
      type: Object,
      // 必須である
      required: true,
      // デフォルト値
      default: () => {
        return {}
      },
    },
    locale: {
      type: String,
      required: true,
      defualt: 'en',
    },
  },
  // 場当たり的な対応だが…
  methods: {
    useRoom() {
      return this.schedule && !!this.schedule.proposal
    },
    isSponsor() {
      return this.schedule && !!this.schedule.sponsor
    },
    isProgram() {
      return this.useRoom() && !!this.schedule.proposal
    },
    getTimeStr(time) {
      return DateTime.fromSeconds(time).toFormat('HH:mm')
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/style.scss';
.empty_room {
  @extend .schedule_room;
  color: rgba(0, 0, 0, 0);
  border-right: none !important;
}
</style>
