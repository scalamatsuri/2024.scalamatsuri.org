<template>
  <div class="main">
    <div class="main_inner">
      <h1 class="main_title">
        {{ title }}
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
const { title } = defineProps({
  title: String,
})
</script>

<style scoped lang="scss">
.main {
  background-image: url('/img/common/bg-red.png');
  background-position: bottom center;
  background-repeat: repeat;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  color: #fff;
  text-align: center;
  padding: 66px 0 66px;
}
.main_title {
  font-size: 42px;
  font-weight: bold;
  letter-spacing: 0.05em;
  line-height: 68px;
  word-break: auto-phrase;
}
</style>
