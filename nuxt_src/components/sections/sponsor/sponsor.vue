<template>
  <section class="sponsor_item">
    <div class="sponsor_logo">
      <a :href="sponsor.url" target="_blank" rel="noopener"><img :src="sponsor.logo" :alt="sponsor.name" /></a>
    </div>
    <section class="sponsor_content">
      <h3 class="sponsor_name">
        {{ sponsor.name }}
      </h3>
      <div class="sponsor_text">
        <span v-html="sponsor.text_html" />
      </div>
      <div class="sponsor_text">
        <span v-html="sponsor.slide_html" />
      </div>
      <div v-if="sponsor.others">
        <div class="other_text" v-html="sponsor.others" />
      </div>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    sponsor: {
      // Object{}である
      type: Object,
      // 必須である
      required: true,
      // デフォルト値
      default: () => {
        return {}
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.other_text {
  padding: 1rem;
  margin-top: 1rem;
  background-color: #f1f1f1;
  border-radius: 3px;
}
</style>
