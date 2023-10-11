<i18n lang="yaml">
## language=yaml
en:
  title: "Staff"
ja:
  title: "スタッフ一覧"
</i18n>

<template>
  <div id="staff">
    <div class="main">
      <div class="main_inner">
        <h1 class="main_title">
          {{ $t("title") }}
        </h1>
      </div>
    </div>
    <!-- スタッフ ここから -->
    <div class="staff">
      <ul class="staff_list">
        <Staff v-for="staff in staffs" :key="staff.index" :staff="staff" class="staff_item" />
      </ul>
    </div>
    <!-- スタッフ ここまで -->
  </div>
</template>

<script>
import Staff from "~/components/sections/staff/staff.vue"
import staffList from "~/data/staff/staff"
import Page404NotFoundMixin from "~/mixins/page/Page404NotFound.js"

export default {
  components: {
    Staff,
  },
  // TODO: スケジュールが決定し次第、404表示を解除する
  mixins: [Page404NotFoundMixin],
  data() {
    return {
      staffs: [],
    }
  },
  head() {
    const $t = this.$t.bind(this)
    return {
      title: $t("title"),
      meta: [{ name: "og:title", content: `${$t("title")} | ScalaMatsuri 2024` }],
    }
  },
  mounted() {
    this.staffs = staffList
  },
}
</script>
