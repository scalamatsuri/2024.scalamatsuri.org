<i18n lang="yaml">
## language=yaml
en:
  length: "トークの長さ"
  lang: "発表言語"
  target: "聴衆の対象"
ja:
  length: "トークの長さ"
  lang: "発表言語"
  target: "聴衆の対象"
</i18n>

<template>
  <div ref="modalKeyListener" class="modal_inner" tabindex="0" @keyup.escape="$emit('close')">
    <div class="modal_content">
      <h2 class="modal_title">
        {{ schedule[$i18n.locale].title }}
      </h2>
      <div class="modal_speakers">
        <div class="modal_speaker">
          <div class="modal_speaker_icon" style="background-image: url('/img/dummy/icon-user2.jpg')" />
          <p class="modal_speaker_name">
            {{ schedule.speaker.name }}
          </p>
          <p class="modal_speaker_id">
            <a href="" target="_blank" rel="noopener">{{ schedule.speaker.id }}</a>
          </p>
        </div>
      </div>
      <div class="modal_text">
        <p>{{ schedule.program[$i18n.locale].detail }}</p>
      </div>
      <div class="modal_scopeArea">
        <dl class="modal_scope">
          <dt>{{ $t("length") }}</dt>
          <dd>{{ schedule[$i18n.locale].length }}</dd>
        </dl>
        <dl class="modal_scope">
          <dt>{{ $t("lang") }}</dt>
          <dd>{{ schedule[$i18n.locale].lang }}</dd>
        </dl>
        <!--        <dl class="modal_scope">-->
        <!--          <dt>{{ $t('target') }}</dt>-->
        <!--          <dd>{{ schedule.program[$i18n.locale].audience }}</dd>-->
        <!--        </dl>-->
      </div>
    </div>
    <div class="modal_close" @click="$emit('close')">閉じる</div>
  </div>
</template>

<script>
export default {
  props: {
    schedule: {
      // Object{}である
      type: Object,
      // 必須である
      required: true,
    },
  },
  mounted: function () {
    // For closing modal by pushing ESC key.
    this.$nextTick(this.$refs.modalKeyListener.focus())
  },
}
</script>
