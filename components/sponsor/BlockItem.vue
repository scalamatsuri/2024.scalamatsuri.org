<template>
  <section class="sponsor_item" v-if="sponsor && isVisible">
    <div class="sponsor_logo">
      <a :href="sponsor.url" target="_blank" rel="noopener"><img :src="sponsor.logo" :alt="sponsor[locale].name" /></a>
    </div>
    <section class="sponsor_content">
      <h3 class="sponsor_name">
        {{ sponsor[locale].name }}
      </h3>
      <div class="sponsor_text" v-if="sponsor.textHtml">
        <span v-html="sponsor.textHtml" />
      </div>
      <div class="sponsor_text" v-if="sponsor.slideHtml">
        <span v-html="sponsor.slideHtml" />
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()
import { Sponsor } from '~/models/model'
const { sponsor } = defineProps({
  sponsor: {} as PropType<Sponsor>,
})
// NOTE: textHtml か slideHtml どちらかが存在すれば表示する
const isVisible = sponsor?.textHtml || sponsor?.slideHtml
</script>

<style lang="scss" scoped>
.sponsor_item {
  display: flex;
  border-bottom: 1px solid #eee;
  padding-bottom: 30px;
  & + .sponsor_item {
    margin-top: 30px;
  }
}
.sponsor_logo {
  padding: 10px 40px 0px 0px;
  img {
    width: 240px;
    background: white;
  }
}
.sponsor_content {
  text-align: left;
  padding: 30px;
}
.sponsor_name {
  font-weight: bold;
  line-height: 33px;
  font-size: 20px;
  letter-spacing: 0.1em;
  color: #000000;
}
.sponsor_url {
  margin-top: 8px;
  > a {
    font-weight: bold;
    line-height: 23px;
    font-size: 14px;
    letter-spacing: 0.1em;
    color: #00a4de;
  }
}
.sponsor_text {
  line-height: 23px;
  font-size: 14px;
  letter-spacing: 0.1em;
  color: #000000;
  p {
    margin-top: 1.2em;
  }
  ul {
    margin-top: 1.2em;
  }
  li {
    margin-top: 2px;
  }
  a {
    font-weight: bold;
    color: #00a4de;
  }
}
</style>
