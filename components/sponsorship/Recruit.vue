<i18n lang="yaml"></i18n>

<template>
  <section v-if="has_recruits" class="section recruit">
    <h2 class="section_title">
      <span class="section_title_inner">特別企画 - 私、ScalaMatsuriで転職しました -</span>
    </h2>
    <p class="section_text">ScalaMatsuriがきっかけで、ScalaMatsuri協賛企業に就職または転職された方々のインタビュー記事です。</p>
    <ul class="recruit_recruit">
      <li v-for="r in recruits" :key="r.url">
        <img :src="r.image" :alt="r.title" class="recruit_recruit_img" />
        <p class="recruit_recruit_title">
          <a :href="r.url" target="_blank" rel="noopener">{{ r.title }}</a>
        </p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const { recruits } = defineProps({
  recruits: Array<Recruit>,
})

interface Recruit {
  title: String
  url: String
  image: String
}

const has_recruits = recruits.length > 0
</script>

<style lang="scss" scoped>
.recruit_recruit {
  margin-top: 60px;
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  li {
    width: 31.6%;
  }
}
.recruit_recruit_img {
  width: 100%;
}
.recruit_recruit_title {
  font-weight: bold;
  line-height: normal;
  font-size: 16px;
  margin-top: 20px;
}

$viewport: 820px;
@media screen and (max-width: $viewport - 1) {
  .recruit_recruit {
    margin-top: 20px;
    display: block;
    li {
      width: 100%;
      margin-bottom: 20px;
    }
  }
  .recruit_recruit_title {
    padding: 0 20px;
    margin-top: 10px;
  }
}
</style>
