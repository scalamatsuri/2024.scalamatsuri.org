<i18n lang="yaml">
en:
  title: 'program en'
ja:
  title: 'program ja'
</i18n>

<template>
  <ClientOnly>
    <MainVisual :title="t('title')" />
    <div class="page">
      <div class="proposals">
        <!--TODO: タイムテーブルを表現する-->
        <div v-for="timetable in timetables" :key="timetable.timetableId">
          <ProgramDetail :sessions="sessions" :events="timetableEvents" :timetable="timetable" />
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const { t } = useI18n()
pageMetaCheck()
const sessions = getSessions()
const timetableEvents = getTimetableEvents()
const timetables = getTimetables()
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
  margin: 60px auto 0;
  max-width: 1200px;
}
</style>
