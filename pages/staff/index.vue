<i18n lang="yaml">
en:
  title: 'Staff'
ja:
  title: 'スタッフ一覧'
</i18n>

<template>
  <MainVisual :title="t('title')" />
  <div class="extra_staff">
    <h2 class="extra_staff_title">Scalaコミュニティ 日本最大のイベント<br class="is_pc" />を一緒に盛り上げる当日スタッフを募集中！</h2>
    <div class="extra_staff_btn_area">
      <!-- <a :href="application_form" class="extra_staff_btn" target="_blank" rel="noopener">詳しくはこちら</a> -->
      <NuxtLink :to="localePath(`/extra-staff`)" class="extra_staff_btn" rel="noopener">詳しくはこちら</NuxtLink>
    </div>
  </div>
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

.extra_staff {
  max-width: 80%;
  margin: 100px auto 0;
  padding: 50px;
  background-color: #f1f1f1;
  text-align: center;
}
.extra_staff_title {
  font-weight: bold;
  line-height: 59px;
  font-size: 36px;
  text-align: center;
  letter-spacing: 0.1em;
  margin-bottom: 40px;
}
.extra_staff_btn {
  padding: 1rem 5rem;
  font-weight: bold;
  line-height: 60px;
  font-size: 25px;
  letter-spacing: 0.1em;
  border-radius: 30px;
  position: relative;
  background-color: #00a4de;
  color: #fff;
}
@media screen and (min-width: $viewport) {
  /* staff PC */
}
@media screen and (max-width: $viewport - 1) {
  /* staff SP */
  .staff_list {
    margin: 0;
  }
  .extra_staff {
    margin-top: 30px;
    padding: 30px 20px;
  }
  .extra_staff_title {
    font-size: 6.5vw;
    line-height: 1.5;
  }
  .extra_staff_btn_area {
    margin-top: 20px;
    display: block;
  }
  .extra_staff_btn {
    width: 100%;
    margin: 15px auto 0;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
  }
}
</style>
