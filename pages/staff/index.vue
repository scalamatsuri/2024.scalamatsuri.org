<i18n lang="yaml">
en:
  title: 'Staff'
ja:
  title: 'スタッフ一覧'
</i18n>

<template>
  <MainVisual :title="t('title')" />
  <ClientOnly>
    <div id="staff">
      <div class="staff">
        <ul class="staff_list">
          <StaffListItem v-for="staff in shuffledChairmans" :key="staff.index" :staff="staff" class="staff_item" />
        </ul>
      </div>
      <!-- スタッフ ここから -->
      <div class="staff">
        <ul class="staff_list">
          <StaffListItem v-for="staff in shuffledStaffs" :key="staff.index" :staff="staff" class="staff_item" />
        </ul>
      </div>
      <!-- スタッフ ここまで -->
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { type Staff } from '~/models/model'
const { t } = useI18n()
pageMetaCheck()

const staffs: ComputedRef<Staff[]> = getStaff()
const shuffledChairmans = computed(() => arrayShuffle(staffs.value.filter((s) => s.role === 'CHAIRMAN')))
const shuffledStaffs = computed(() => arrayShuffle(staffs.value.filter((s) => s.role === 'STAFF')))
</script>

<style lang="scss" scoped>
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
