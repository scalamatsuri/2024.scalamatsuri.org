<template>
  <li class="staff_item">
    <div v-if="staff.backgroundImage" class="staff_img" :style="{ 'background-image': 'url(' + staff.backgroundImage + ')' }" />
    <div v-if="!staff.backgroundImage"><img class="staff_img" src="/img/common/logo.svg" alt="ScalaMatsuri Staff" /></div>
    <p class="staff_ruby">
      {{ staff.ruby }}
    </p>
    <p class="staff_name">
      {{ staff.name }}
    </p>
    <ul class="staff_sns">
      <li class="staff_sns_item staff_sns_item-tw" v-if="staff.twitterUrl">
        <a :href="staff.twitterUrl" target="_blank" rel="noopener">
          <img src="/img/common/icon-sns-x.svg" alt="Twitter" />
        </a>
      </li>
      <li class="staff_sns_item staff_sns_item-git">
        <a :href="staff.githubUrl" target="_blank" rel="noopener">
          <img src="/img/common/icon-sns-git.svg" alt="Github" />
        </a>
      </li>
    </ul>
    <p class="staff_profile">
      {{ staff.profile }}
    </p>
    <!-- Staff一人分 ここまで -->
  </li>
</template>

<script setup lang="ts">
import { type Staff } from '~/models/model'
const { staff } = defineProps({ staff: {} as PropType<Staff> })
</script>

<style lang="scss" scoped>
.staff_item {
  width: 240px;
  text-align: center;
  padding: 46px 20px 0;
  margin-bottom: 0;
}
.staff_img {
  width: 120px;
  height: 120px;
  background-size: cover;

  border-radius: 60px;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1) inset;
  margin: 0 auto 17px;
}
.staff_ruby {
  font-weight: bold;
  font-size: 14px;
  color: #999;
}
.staff_name {
  font-weight: bold;
  line-height: 29px;
  font-size: 18px;
  letter-spacing: 0.1em;

  color: #000000;
  margin-bottom: 8px;
}

.staff_sns {
  margin-bottom: 11px;
}

.staff_sns_item {
  display: inline-block;
  & + .staff_sns_item {
    margin-left: 5px;
  }
}
.staff_profile {
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  color: #000000;
}

@media screen and (max-width: $viewport - 1) {
  /* staff SP */
  .staff_item {
    max-width: 50%;
    padding: 30px 10px 0;
    margin-bottom: 0;
  }
}
</style>
