<i18n lang="yaml">
en:
  lang: "Talking in"
  date: "DateTime"
  contribute: "OSS work"
  keywords: "Keywords"
  tag: "Categories"
  speaker_experience: "Speaker Experience"
ja:
  lang: "発表言語"
  date: "日時"
  contribute: "OSS 活動"
  keywords: "キーワード"
  tag: "カテゴリ"
  speaker_experience: "スピーカー経験"
</i18n>

<template>
  <div ref="modalKeyListener" class="modal_inner" tabindex="0" @keyup.escape="$emit('close')">
    <h2 class="modal_title">
      <!-- NOTE(omiend): proposal/ 画面と共通で使っているが、ScalaMatsuri 2024 時点では proposal/ 画面が存在しないため、program/ 画面専用となっている-->
      <!-- <nuxt-link v-if="isProgram(program)" :to="localePath({ name: 'program-id', params: { id: program.id } })" no-prefetch target="_blank"> -->
      <nuxt-link v-if="isProgram(program)" :to="localePath({ name: 'program-id', params: { id: program.id } })" no-prefetch target="_blank">
        {{ program[$i18n.locale].title }} <font-awesome-icon icon="fa-solid fa-share-from-square" style="width: 1rem" />
      </nuxt-link>
      <span v-else>
        {{ program[$i18n.locale].title }}
      </span>
    </h2>
    <ul class="modal_speakers">
      <li v-for="speaker in program[$i18n.locale].speakers.filter((speaker) => !speaker.organization)" :key="speaker.id" class="modal_speaker">
        <div v-if="speaker.icon" class="modal_speaker_icon" :style="`backgroundImage: url('${speaker.icon}')`" />
        <p class="modal_speaker_name">
          {{ speaker.name }}
        </p>
        <p class="modal_speaker_org">
          {{ speaker.organization }}
        </p>
        <p class="modal_speaker_id">
          <a v-if="speaker.twitter" class="modal_speaker_sns" :href="`https://twitter.com/${speaker.twitter}`">
            <img v-lazy="require('~/assets/img/common/icon-sns-tw.svg')" />
            {{ speaker.twitter }}
          </a>
          <a v-if="speaker.github" class="modal_speaker_sns" :href="`https://github.com/${speaker.github}`">
            <img v-lazy="require('~/assets/img/common/icon-sns-git.svg')" />{{ speaker.github }}
          </a>
        </p>
      </li>
    </ul>
    <div v-if="program[$i18n.locale].detail" class="modal_text">
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
        <a :href="program.artifacts.slides.other_url" no-prefetch target="_blank">
          {{ program.artifacts.slides.other_url }}
        </a>
      </div>
    </div>
    <div class="modal_scopeArea">
      <dl v-if="program.startAt" class="modal_scope">
        <dt>
          {{ $t("date") }}
        </dt>
        <dd>
          {{ program.startAt }}
        </dd>
      </dl>
      <dl v-if="program.track" class="modal_scope">
        <dt>Track</dt>
        <dd>
          {{ program.track }}
        </dd>
      </dl>
      <dl v-if="program[$i18n.locale].language" class="modal_scope">
        <dt>
          {{ $t("lang") }}
        </dt>
        <dd>
          {{ program[$i18n.locale].language }}
        </dd>
      </dl>
      <!-- NOTE(omiend): ScalaMatsuri 2024 時点で不要。削除してしまっても良いかも。 -->
      <!-- <dl v-if="program[$i18n.locale].keywords" class="modal_scope"><dt>{{ $t("keywords") }}</dt><dd><ul><li v-for="kw in program[$i18n.locale].keywords" :key="kw">{{ kw }}</li></ul></dd></dl> -->
      <!-- <dl v-if="program[$i18n.locale].tags" class="modal_scope"><dt>{{ $t("tag") }}</dt><dd><ul><li v-for="tag in program[$i18n.locale].tags" :key="tag">{{ tag }}</li></ul></dd></dl> -->
      <!-- <div v-for="speaker in program[$i18n.locale].speakers" :key="speaker.name"><dl v-if="speaker.contributes && speaker.contributes.length > 0" class="modal_scope_large"><dt v-if="program[$i18n.locale].speakers.length === 1">{{ $t("contribute") }}</dt><dt v-else>{{ speaker.name }} <br />{{ $t("contribute") }}</dt><dd><p v-for="contribute in speaker.contributes" :key="contribute">{{ contribute }}</p></dd></dl><dl v-if="speaker.speaker_experience && speaker.speaker_experience.length > 0" class="modal_scope_large"><dt v-if="program[$i18n.locale].speakers && program[$i18n.locale].speakers.length === 1">{{ $t("speaker_experience") }}</dt><dt v-else>{{ speaker.name }} <br />{{ $t("speaker_experience") }}</dt><dd><p v-for="ex in speaker.speaker_experience" :key="ex">{{ ex }}</p></dd></dl></div> -->
    </div>
    <div class="modal_close" @click="$emit('close')">閉じる</div>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(from, next) {
    next((vm) => {
      vm.prevRoute = from
    })
  },
  props: {
    program: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    // For closing modal by pushing ESC key.
    this.$nextTick(this.$refs.modalKeyListener.focus())
  },
  methods: {
    isProgram(proposal) {
      return proposal.id.startsWith("J") || proposal.id.startsWith("E") || proposal.id.startsWith("OMC")
    },
  },
}
</script>

<style lang="scss">
.modal_inner {
  z-index: 3;
  max-width: 740px;
  width: 90%;
  max-height: 90vh;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  padding: 50px 60px 40px;
  overflow: auto;
  outline: 0;
  text-align: left;
}
.modal_title {
  font-weight: bold;
  line-height: 39px;
  font-size: 24px;
  letter-spacing: 0.1em;
}
.modal_speaker {
  display: inline-block;
  margin-top: 10px;
  margin-right: 18px;
}
.modal_speaker_icon {
  width: 40px;
  height: 40px;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1) inset;
  background-size: cover;
  border-radius: 20px;
  float: left;
}
.modal_speaker_name {
  font-weight: bold;
  line-height: 20px;
  font-size: 12px;
  letter-spacing: 0.1em;
  margin-left: 50px;
}
.modal_speaker_org {
  line-height: 18px;
  font-size: 9px;
  letter-spacing: 0.1em;
  margin-left: 50px;
}
.modal_speaker_id {
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
.modal_text {
  line-height: 26px;
  font-size: 16px;
  letter-spacing: 0.1em;
  margin-top: 30px;
  white-space: pre-wrap;
}
.modal_close {
  font-weight: bold;
  line-height: 23px;
  font-size: 14px;
  text-align: center;
  width: 80px;
  height: 30px;
  border-radius: 15px;
  border: 2px solid #000000;
  line-height: 25px;
  margin: 40px auto 0;
  cursor: pointer;
}
.modal_shadow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.modal_scopeArea {
  margin-top: 37px;
}
.modal_scope {
  font-weight: bold;
  line-height: normal;
  font-size: 14px;
  letter-spacing: 0.1em;
  display: flex;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
  & + .modal_scope {
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
.modal_scope_large {
  font-weight: bold;
  line-height: normal;
  font-size: 14px;
  letter-spacing: 0.1em;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
  & + .modal_scope {
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
.modal_input {
  margin-top: 30px;
  input {
    background: #eeeeee;
    border-radius: 6px;
    padding: 8px 16px;
    border: none;
    outline: none;
    width: 480px;
    max-width: 70%;
    font-size: 14px;
    line-height: 28px;
    vertical-align: middle;
    &::placeholder {
      color: rgba(0, 0, 0, 0.2);
    }
  }
}
.modal_inputBtn {
  vertical-align: middle;
  background: #cf293b;
  border-radius: 22px;
  width: 120px;
  max-width: 25%;
  height: 44px;
  line-height: 44px;
  display: inline-block;
  color: #fff;
  text-decoration: none;
  text-align: center;
  margin-left: 5%;
}
// SP
@media screen and (max-width: 820px - 1) {
  .modal_inner {
    height: calc(100% - 40px);
    padding: 40px;
  }
  .modal_content {
    max-height: calc(100% - 70px);
    overflow: auto;
  }
  .modal_close {
    margin-top: 20px;
  }
}
// 埋め込みのレスポンシブ対応
.session {
  width: 100%;
  height: 0;
  position: relative;
  padding-top: 56.25%;
  overflow: hidden;
}
.session iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
}
</style>
