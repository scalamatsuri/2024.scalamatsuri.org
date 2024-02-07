<i18n lang="yaml">
en:
  title: 'Staff'
ja:
  title: 'スタッフ一覧'
</i18n>

<template>
  <MainVisual :title="t('title')" />
  <div id="staff">
    <!-- スタッフ ここから -->
    <div class="staff">
      <ul class="staff_list">
        <StaffListItem v-for="staff in staffs" :key="staff.index" :staff="staff" class="staff_item" />
      </ul>
    </div>
    <!-- スタッフ ここまで -->
  </div>
</template>

<script setup lang="ts">
import { type Staff } from '~/models/model'
const { t } = useI18n()
pageMetaCheck()

const staffs: ComputedRef<Staff[]> = getStaff()
</script>

<style lang="scss" scoped>
/* staff */

.staff {
  max-width: $pcMinWidth;
  width: 100%;
  margin: 0 auto;
}
.staff_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 34px 0 70px;
}
@media screen and (max-width: $viewport - 1) {
  /* staff SP */
  .staff_list {
    margin: 0;
  }
}
@media screen and (min-width: $viewport) {
  /* staff PC */
}
</style>
