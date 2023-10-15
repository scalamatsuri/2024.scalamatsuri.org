<template>
  <section class="content">
    <h2 class="content_title">Events</h2>
    <div class="content_contents">
      <figure v-for="(image, idx) in shuffledImages" :key="image" :class="[idx === 0 ? 'content_img-big' : '', 'content_img']">
        <img class="loaded" :src="image" :alt="`ScalaMatsuri ${year}`" />
      </figure>
    </div>
  </section>
</template>

<script setup lang="ts">
const { year } = useAppConfig()
const images = [
  '/img/events/img-events1.jpg',
  '/img/events/img-events2.jpg',
  '/img/events/img-events3.jpg',
  '/img/events/img-events4.jpg',
  '/img/events/img-events5.jpg',
  '/img/events/img-events6.jpg',
  '/img/events/img-events7.jpg',
  '/img/events/img-events8.jpg',
  '/img/events/img-events9.jpg',
  '/img/events/img-events10.jpg',
  '/img/events/img-events11.jpg',
  '/img/events/img-events12.jpg',
  '/img/events/img-events13.jpg',
  '/img/events/img-events13.jpg',
  '/img/events/img-events14.jpg',
  '/img/events/img-events15.jpg',
  '/img/events/img-events16.jpg',
  '/img/events/img-events17.jpg',
  '/img/events/img-events18.jpg',
  '/img/events/img-events19.jpg',
  '/img/events/img-events20.jpg',
  '/img/events/img-events21.jpg',
  '/img/events/img-events22.jpg',
  '/img/events/img-days1.jpg',
  '/img/events/img-days2.jpg',
  '/img/events/img-days3.jpg',
]
const shuffledImages = computed(() => stringArrayShuffle(images).slice(0, 13))
</script>

<style lang="scss" scoped>
.content {
  padding: 0 20px;
  text-align: center;
  max-width: $pcMinWidth - 40px;
  margin: 0 auto;
}

.content_title {
  display: inline-block;
  margin-top: 40px;
  font-weight: bold;
  font-size: 48px;
  color: #bd3844;
}
.content_contents {
  margin-top: 50px;
  display: grid;
  grid-gap: 14px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
}
.content_img {
  padding-top: 1px;
  img {
    width: 100%;
  }
}
.content_img-big {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
</style>
