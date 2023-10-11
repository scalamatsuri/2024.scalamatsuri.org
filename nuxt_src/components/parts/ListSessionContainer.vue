<template>
  <div class="schedule schedule-thin">
    <div class="schedule_content">
      <div class="schedule_events">
        <div v-for="program in programs" :key="program.id" @click="$emit('program-clicked', program)">
          <table-row :program="program" :locale="$i18n.locale" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TableRow from '~/components/sections/candidates/tableRow'

export default {
  components: {
    TableRow,
  },
  props: {
    programs: {
      type: Array,
      required: false,
      default: () => {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped>
// PC
@media screen and (min-width: 820px) {
  .schedule {
    border-top: 1px solid #eee;
    width: calc(100% - 40px);
    max-width: 1200px;
    margin: 60px auto 0;
    &-thin {
      max-width: 980px;
    }
  }
  .schedule_content {
    display: flex;
    // align-items: center;
    border-bottom: 1px solid #eee;
    &.is_disabled {
      display: none;
    }
  }
  .schedule_time {
    width: 24%;
    font-weight: bold;
    line-height: 39px;
    font-size: 24px;
    letter-spacing: 0.1em;
    padding: 22px 0;
    text-align: center;
    & + .schedule_events {
      border-left: 1px solid #eee;
    }
  }
  .schedule_events {
    width: 100%;
  }
  .schedule_event {
    width: 100%;
    display: flex;
    // align-items: center;
    justify-content: space-between;
    border-top: 1px solid #eee;
    cursor: pointer;
    margin-top: -1px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
    &-allArea {
      height: 100%;
      font-weight: bold;
      line-height: 26px;
      font-size: 16px;
      letter-spacing: 0.1em;
      text-align: left;
      padding: 0 30px;
      cursor: default;
      display: flex;
      align-items: center;
      &:hover {
        background: none;
      }
    }
    &.is_disabled {
      display: none;
    }
  }
  .schedule_room {
    font-weight: bold;
    line-height: 26px;
    font-size: 16px;
    text-align: center;
    letter-spacing: 0.1em;
    padding: 27px 30px;
    width: auto;
    border-right: 1px solid #eee;
    white-space: nowrap;
    display: flex;
    align-items: center;
  }
}

// SP
@media screen and (max-width: 820px - 1) {
  .schedule {
    border-top: 1px solid #eee;
    max-width: 1200px;
    margin: 0 auto 0;
    &-thin {
      max-width: 980px;
    }
  }
  .schedule_content {
    display: flex;
    // align-items: center;
    border-bottom: 1px solid #eee;
    &.is_disabled {
      display: none;
    }
  }
  .schedule_time {
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 0.1em;
    padding: 20px 2px;
    text-align: center;
    & + .schedule_events {
      border-left: 1px solid #eee;
    }
  }
  .schedule_events {
    width: 100%;
  }
  .schedule_event {
    width: 100%;
    justify-content: space-between;
    border-top: 1px solid #eee;
    cursor: pointer;
    margin-top: -1px;
    &:hover {
      // background-color: rgba(0,0,0,.05);
    }
    &-allArea {
      height: 100%;
      font-weight: bold;
      line-height: 26px;
      font-size: 16px;
      letter-spacing: 0.1em;
      text-align: left;
      padding: 0 30px;
      cursor: default;
      display: flex;
      align-items: center;
      &:hover {
        background: none;
      }
    }
    &.is_disabled {
      display: none;
    }
  }
}
</style>
