<i18n lang="yaml">
## language=yaml
en:
  lang: "Talking in"
  contribute: "OSS work"
  keywords: "Keywords"
  tag: "Categories"
  speaker_experience: "Speaker Experience"
ja:
  lang: "発表言語"
  contribute: "OSS 活動"
  keywords: "キーワード"
  tag: "カテゴリ"
  speaker_experience: "スピーカー経験"
</i18n>

<template>
  <div id="candidates">
    <div class="individual">
      <h2 class="individual_title">
        {{ program[$i18n.locale].title }}
      </h2>
      <ul class="individual_speakers">
        <li v-for="speaker in program[$i18n.locale].speakers" :key="speaker.id" class="individual_speaker">
          <div class="individual_speaker_icon" :style="`backgroundImage: url('${speaker.icon}')`" />
          <p class="individual_speaker_name">
            {{ speaker.name }}
          </p>
          <p class="individual_speaker_org">
            {{ speaker.organization }}
          </p>
          <p class="individual_speaker_id">
            <a v-if="speaker.twitter" class="individual_speaker_sns" :href="`https://twitter.com/${speaker.twitter}`">
              <img v-lazy="require('~/assets/img/common/icon-sns-tw.svg')" />
              {{ speaker.twitter }}
            </a>
            <a v-if="speaker.github" class="individual_speaker_sns" :href="`https://github.com/${speaker.github}`">
              <img v-lazy="require('~/assets/img/common/icon-sns-git.svg')" />{{ speaker.github }}
            </a>
            <!-- TODO: show other_sns field -->
          </p>
        </li>
      </ul>
      <div class="individual_text">
        <p v-text="program[$i18n.locale].detail" />
        <br />
        <div v-if="program.artifacts.youtube_embed_url" class="session">
          <iframe
            width="560"
            height="315"
            :src="`${program.artifacts.youtube_embed_url}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div v-if="program.artifacts.youtube_embed_url_2" class="session">
          <iframe
            width="560"
            height="315"
            :src="`${program.artifacts.youtube_embed_url_2}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div v-if="program.artifacts.slides.embed_url" class="session">
          <iframe
            :src="`${program.artifacts.slides.embed_url}`"
            width="595"
            height="485"
            frameborder="0"
            marginwidth="0"
            marginheight="0"
            scrolling="no"
            style="border: 1px solid #ccc; border-width: 1px; margin-bottom: 5px; max-width: 100%"
            allowfullscreen
          />
        </div>
        <div v-if="program.artifacts.slides.speakerdeck.data_id" class="session">
          <script
            async
            class="speakerdeck-embed"
            :data-id="`${program.artifacts.slides.speakerdeck.data_id}`"
            :data-ratio="`${program.artifacts.slides.speakerdeck.data_ratio}`"
            src="//speakerdeck.com/assets/embed.js"
          />
        </div>
        <div v-if="program.artifacts.slides.other_url">
          <h3>Slide</h3>
          <nuxt-link :to="program.artifacts.slides.other_url" no-prefetch target="_blank">
            {{ program.artifacts.slides.other_url }}
          </nuxt-link>
        </div>
      </div>
      <div class="individual_scopeArea">
        <dl class="individual_scope">
          <dt>
            {{ $t("lang") }}
          </dt>
          <dd>
            {{ program[$i18n.locale].language }}
          </dd>
        </dl>
        <!-- NOTE(omiend): ScalaMatsuri 2024 時点で不要。削除してしまっても良いかも。 -->
        <!-- <dl class="individual_scope"><dt>{{ $t("keywords") }}</dt><dd><ul><li v-for="kw in program[$i18n.locale].keywords" :key="kw">{{ kw }}</li></ul></dd></dl> -->
        <!-- <dl class="individual_scope"><dt>{{ $t("tag") }}</dt><dd><ul><li v-for="tag in program[$i18n.locale].tags" :key="tag">{{ tag }}</li></ul></dd></dl> -->
        <!-- <div v-for="speaker in program[$i18n.locale].speakers" :key="speaker.name"><dl v-if="speaker.contributes" class="individual_scope_large"><dt v-if="program[$i18n.locale].speakers.length === 1">{{ $t("contribute") }}</dt><dt v-else>{{ speaker.name }} <br />{{ $t("contribute") }}</dt><dd><p v-for="contribute in speaker.contributes" :key="contribute">{{ contribute }}</p></dd></dl><dl v-if="speaker.speaker_experience" class="individual_scope_large"><dt v-if="program[$i18n.locale].speakers.length === 1">{{ $t("speaker_experience") }} {{ program.id }}</dt><dt v-else>{{ speaker.name }} <br />{{ $t("speaker_experience") }}</dt><dd><p v-for="ex in speaker.speaker_experience" :key="ex">{{ ex }}</p></dd></dl></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  validate({ store, params }) {
    return store.getters["proposals/findById"](params.id)
  },
  data() {
    return {
      program: {
        type: Object,
        required: true,
      },
    }
  },
  computed: {
    ...mapGetters({
      findById: "proposals/findById",
    }),
  },
  head() {
    const title = `${this.program[this.$i18n.locale].title} - ${this.program[this.$i18n.locale].speakers[0].name}`
    return {
      title: title,
      meta: [
        { name: "og:title", content: `${title} | ScalaMatsuri 2024` },
        { name: "description", content: `${title} | ScalaMatsuri 2024` },
        { property: "og:title", content: `${title} | ScalaMatsuri 2024` },
        { property: "og:description", content: `${this.program[this.$i18n.locale].detail}` },
        { name: "twitter:title", content: `${title} | ScalaMatsuri 2024` },
        { name: "twitter:description", content: this.program[this.$i18n.locale].detail },
      ],
    }
  },
  asyncData({ store, params }) {
    return {
      program: store.getters["proposals/findById"](params.id),
    }
  },
}
</script>

<style lang="scss" scoped>
.individual {
  width: 90%;
  max-width: 87rem;
  margin: 0 auto;
  background-color: #fff;
  padding: 5%;
}
.individual_title {
  font-weight: bold;
  line-height: 39px;
  font-size: 24px;
  letter-spacing: 0.1em;
}
.individual_speaker {
  display: inline-block;
  margin-top: 10px;
  margin-right: 18px;
}
.individual_speaker_icon {
  width: 40px;
  height: 40px;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1) inset;
  background-size: cover;
  border-radius: 20px;
  float: left;
}
.individual_speaker_name {
  font-weight: bold;
  line-height: 20px;
  font-size: 12px;
  letter-spacing: 0.1em;
  margin-left: 50px;
}
.individual_speaker_org {
  line-height: 18px;
  font-size: 9px;
  letter-spacing: 0.1em;
  margin-left: 50px;
}
.individual_speaker_id {
  font-weight: bold;
  line-height: 20px;
  font-size: 12px;
  letter-spacing: 0.1em;
  margin-left: 50px;
  > a {
    color: #00a4de;
  }
  > a > img {
    width: 16px;
    height: 16px;
    margin-top: 0.24em;
    margin-right: 4px;
  }
}
.individual_text {
  line-height: 26px;
  font-size: 16px;
  letter-spacing: 0.1em;
  margin-top: 30px;
  white-space: pre-wrap;
}
.individual_scopeArea {
  margin-top: 37px;
}
.individual_scope {
  font-weight: bold;
  line-height: normal;
  font-size: 14px;
  letter-spacing: 0.1em;
  display: flex;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
  & + .individual_scope {
    border-top: none;
  }
  dt,
  dd {
    padding: 15px 0;
  }
  dt {
    width: 34%;
  }
}
.individual_scope_large {
  font-weight: bold;
  line-height: normal;
  font-size: 14px;
  letter-spacing: 0.1em;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
  & + .individual_scope {
    border-top: none;
  }
  dt,
  dd {
    padding: 15px 0;
  }
  dd {
    margin-left: 20px;
  }
}
</style>
