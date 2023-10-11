<template>
  <li class="staff_item">
    <div class="staff_img" :style="{ 'background-image': 'url(' + staff.backgroundImage + ')' }" />
    <p class="staff_ruby">
      {{ staff.ruby }}
    </p>
    <p class="staff_name">
      {{ staff.name }}
    </p>
    <ul class="staff_sns">
      <li class="staff_sns_item staff_sns_item-tw">
        <a :href="staff.twitterUrl" target="_blank" rel="noopener">
          <img src="/assets/img/common/icon-sns-tw.svg" alt="Twitter" />
        </a>
      </li>
      <li class="staff_sns_item staff_sns_item-git">
        <a :href="staff.githubUrl" target="_blank" rel="noopener">
          <img src="/assets/img/common/icon-sns-git.svg" alt="Github" />
        </a>
      </li>
    </ul>
    <p class="staff_profile">
      {{ staff.profile }}
    </p>
    <!-- Staff一人分 ここまで -->
  </li>
</template>
<script>
export default {
  props: {
    staff: {
      // Object{}である
      type: Object,
      // 必須である
      required: true,
      // デフォルト値
      default: () => {
        return {
          backgroundImage: '',
          ruby: '',
          name: '',
          twitterUrl: '',
          githubUrl: '',
          profile: '',
        }
      },
    },
  },
}
</script>
<style></style>
