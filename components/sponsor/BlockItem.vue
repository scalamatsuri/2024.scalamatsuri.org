<template>
  <section class="sponsor_item" v-if="sponsor">
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
      <!-- FIXME: iframe の中身が表示されない不具合があり、speakerdeckUrl のように各サービス固定で定義することで逃げた -->
      <!-- <div class="sponsor_text" v-if="sponsor.slideHtml"> -->
      <!-- <span v-html="sponsor.slideHtml" /> -->
      <!-- </div> -->
      <div class="sponsor_text" v-if="sponsor.speakerdeckUrl">
        <div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.1972%">
          <iframe
            :src="sponsor.speakerdeckUrl"
            style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0"
            allowfullscreen
            scrolling="no"></iframe>
        </div>
      </div>
      <div v-if="sponsor.youtubeIFrame1">
        <iframe class="sponsor_youtube_frame" :src="sponsor.youtubeIFrame1" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div v-if="sponsor.youtubeIFrame2">
        <iframe class="sponsor_youtube_frame" :src="sponsor.youtubeIFrame2" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()
import { type Sponsor } from '~/models/model'
const { sponsor } = defineProps({
  sponsor: {} as PropType<Sponsor>,
})
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
  margin-top: 20px;
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
.sponsor_youtube_frame {
  margin-top: 20px;
  width: 100%;
  height: 350px;
}
</style>
