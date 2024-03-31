<template>
  <div class="workshop">
    <div class="name">
      {{ content.name[locale] }}
    </div>
    <div class="meta">
      {{ displayHour(content.startAt) }} - {{ displayHour(content.endAt) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { type TimeTableWorkshopContents } from '~/models/model'
const { locale } = useI18n()
const { session, timetable } = defineProps({
  content: {} as PropType<TimeTableWorkshopContents>,
})

console.log(event)
</script>

<style scoped lang="scss">
.workshop {
  text-align: left;
  padding: 24px;
}
.name {
  font-weight: bold;
  font-size: 20px;
}

.meta {
  color: #888;
}

</style>
