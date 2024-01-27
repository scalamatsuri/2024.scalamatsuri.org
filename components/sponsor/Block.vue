<template>
  <section class="sponsor">
    <h2 class="sponsor_title">
      {{ title }}
    </h2>
    <div class="sponsor_list">
      <div v-for="sponsor in sponsors" :key="sponsor.id">
        <SponsorBlockItem :sponsor="sponsor" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Sponsor } from '~/models/model'
const { title, sponsors } = defineProps({
  title: String,
  sponsors: Array<Sponsor>,
})
</script>

<style scoped lang="scss">
.sponsor {
  text-align: center;
  max-width: 1050px;
  margin: 0 auto;
}
.sponsor_title {
  margin: 0 auto;
  display: inline-block;
  font-weight: bold;
  line-height: normal;
  font-size: 36px;
  text-align: center;
  margin-top: 89px;
  color: #acb6e5;
  background: -webkit-linear-gradient(0deg, #f7d000, #f39200);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.sponsor_list {
  margin-top: 66px;
}
</style>
