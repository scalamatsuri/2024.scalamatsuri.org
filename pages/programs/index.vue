<i18n lang="yaml">
en:
  title: 'Program'
ja:
  title: 'プログラム'
</i18n>

<template>
  <ClientOnly>
    <MainVisual :title="t('title')" />
    <h3 class="sub_header_link">
      <NuxtLink v-for="timetable in timetables" :key="'l_' + timetable.timetableId" :to="'#' + timetable.timetableId" class="sub_header_link_item">
        {{ timetable.title[locale] }}
      </NuxtLink>
    </h3>

    <div class="page">
      <div class="proposals">
        <div v-for="timetable in timetables" :key="timetable.timetableId">
          <ProgramDetail :sessions="sessions" :events="timetableEvents" :timetable="timetable" />
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
pageMetaCheck()
const sessions = getSessions()
const timetableEvents = getTimetableEvents()
const timetables = getTimetables()
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
  margin: 60px auto 0;
  max-width: 1200px;
}
</style>
