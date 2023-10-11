<i18n lang="yaml">
## language=yaml
en:
  event_overview: |
    This year's Scala Matsuri 2024 will be held online.<br>
    We are planning to hold some contents unique to online. Stay tuned!
ja:
  event_overview: |
    ScalaMatsuri 2024はオンライン開催予定です。<br>
    オンラインならではの催し物を多数実施する予定ですので、どうぞお楽しみに！
</i18n>

<template>
  <section class="content events">
    <div class="content_inner">
      <h2 class="content_title">Events</h2>
      <!-- <p class="content_text">-->
      <!-- <span v-html="$t('event_overview')" />-->
      <!-- </p>-->
      <div class="content_contents">
        <figure v-for="(image, idx) in images" :key="image.src" :class="[idx === 0 ? 'content_img-big' : '', 'content_img']">
          <img v-lazy="image.src" :alt="image.caption" />
          <figcaption v-if="image.caption" class="content_imgcaption">
            {{ $t(image.caption) }}
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: require("~/assets/img/top/img-events1.jpg"), caption: "" },
        { src: require("~/assets/img/top/img-events2.jpg"), caption: "" },
        { src: require("~/assets/img/top/img-events3.jpg"), caption: "" },
        { src: require("~/assets/img/top/img-events4.jpg"), caption: "" },
        { src: require("~/assets/img/top/img-events5.jpg"), caption: "" },
        { src: require("~/assets/img/top/img-events6.jpg"), caption: "" },
        { src: require("~/assets/img/top/img-events7.jpg"), caption: "" },
        { src: require("~/assets/img/top/img-events8.jpg"), caption: "" },
        { src: require("~/assets/img/top/img-events9.jpg"), caption: "" },
        { src: require("~/assets/img/top/img-events10.jpg"), caption: "" },
        { src: require("~/assets/img/top/img-events11.jpg"), caption: "" },
        { src: require("~/assets/img/top/img-events12.jpg"), caption: "" },
        { src: require("~/assets/img/top/img-events13.jpg"), caption: "" },
      ],
    }
  },
  mounted() {
    this.images = this.shuffle(this.images)
  },
}
</script>

<style lang="scss" scoped>
// For preventing content from reflow by maintaining image height.
img:not([lazy="loaded"]) {
  padding-top: 68.9%;
}
</style>
