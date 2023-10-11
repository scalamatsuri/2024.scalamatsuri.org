<i18n lang="yaml">
## language=yaml
en:
  title: "Proposals"
  slide_notation: "Talking languages are as shown below. All slides will be in English."
  cfp_notation: |
    CFP is still open now. You can submit from <a href="/en/cfp/">here</a> by 23:59, 1st Feb Anywhere on Earth.
  en_100: "100-minute sessions in English"
  en_40: "40-minute sessions in English"
  ja_100: "100-minute sessions in Japanese"
  ja_40: "40-minute sessions in Japanese"
ja:
  title: "応募セッション一覧"
  slide_notation: "発表言語ごとに表示しています。スライドの言語は全て英語の予定です."
  cfp_notation: |
    セッション募集(CFP) 期間中です。ご応募は<a href="/ja/cfp/">こちら</a>。2/1 23:59 AoE (2/2 20:59 JST)締切です。
  en_100: "100分英語"
  en_40: "40分英語"
  ja_100: "100分日本語"
  ja_40: "40分日本語"
</i18n>
<template>
  <div id="candidates">
    <div class="main">
      <div class="main_inner">
        <h1 class="main_title">
          {{ $t("title") }}
        </h1>
      </div>
    </div>

    <div class="section">
      <!-- <p class="section_text">
        <span v-html="$t('cfp_notation')" />
      </p> -->
      <p class="section_text">
        <span v-html="$t('slide_notation')" />
      </p>
    </div>

    <ul class="js-tags tagIndex" />

    <!-- 100分英語 ここから -->
    <div class="program">
      <h2 class="program_title">
        {{ $t("en_100") }}
      </h2>
      <div class="schedule schedule-thin">
        <!-- schedule 1コマ ここから -->
        <div class="schedule_content">
          <div class="schedule_events">
            <div v-for="program in filterProposalsByIdAndLang(100, 'English')" :key="program.id" @click="openModal(program)">
              <table-row :program="program" :locale="$i18n.locale" :on-vote="onVote" :on-unvote="onUnVote" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 100分英語 ここまで -->

    <!-- 100分日本語 ここから -->
    <div class="program">
      <h2 class="program_title">
        {{ $t("ja_100") }}
      </h2>
      <div class="schedule schedule-thin">
        <!-- schedule 1コマ ここから -->
        <div class="schedule_content">
          <div class="schedule_events">
            <div v-for="program in filterProposalsByIdAndLang(100, 'Japanese')" :key="program.id" @click="openModal(program)">
              <table-row :program="program" :locale="$i18n.locale" :on-vote="onVote" :on-unvote="onUnVote" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 90分日本語 ここまで -->

    <!-- 40分英語 ここから -->
    <div class="program">
      <h2 class="program_title">
        {{ $t("en_40") }}
      </h2>
      <div class="schedule schedule-thin">
        <!-- schedule 1コマ ここから -->
        <div class="schedule_content">
          <div class="schedule_events">
            <div v-for="program in filterProposalsByIdAndLang(40, 'English')" :key="program.id" @click="openModal(program)">
              <table-row :program="program" :locale="$i18n.locale" :on-vote="onVote" :on-unvote="onUnVote" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 40分日本語 ここまで -->

    <!-- 40分日本語 ここから -->
    <div class="program">
      <h2 class="program_title">
        {{ $t("ja_40") }}
      </h2>
      <div class="schedule schedule-thin">
        <!-- schedule 1コマ ここから -->
        <div class="schedule_content">
          <div class="schedule_events">
            <!--            <ProposalSkelton v-if="isLoading()" />-->
            <div v-for="program in filterProposalsByIdAndLang(40, 'Japanese')" :key="program.id" @click="openModal(program)">
              <table-row :program="program" :locale="$i18n.locale" :on-vote="onVote" :on-unvote="onUnVote" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 40分日本語 ここまで -->

    <!-- modal -->
    <transition name="fade">
      <div v-if="showModal" class="modal is_active fadeIn animated" tabindex="0" @click.self="closeModal" @keyup.escape="closeModal()">
        <modal :program="selectProgram" @close="closeModal" />
      </div>
    </transition>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex"
import TableRow from "~/components/sections/candidates/tableRow"
import Modal from "~/components/parts/SessionDetailModal.vue"
// import ProposalSkelton from '~/components/parts/ProposalSkelton.vue'
import * as mTypes from "~/store/mutation-types"
import Page404NotFoundMixin from "~/mixins/page/Page404NotFound.js"
// import VotedSessions from '~/components/sections/proposals/VotedSessions.vue'

export default {
  components: {
    Modal,
    TableRow,
    // ProposalSkelton,
    // VotedSessions
  },
  mixins: [Page404NotFoundMixin],
  // mixins: [Page404NotFoundMixin],
  data() {
    return {
      selectProgram: null,
      showModal: false,
    }
  },
  computed: {
    ...mapGetters({
      // filterProposalsByIdAndLang: "proposals/filterByLengthAndLang",
      currentVotes: "vote/userVotes",
      isLoggedIn: "auth/isLoggedIn",
    }),
  },
  created() {
    // this.fetchProposals()
  },
  methods: {
    ...mapActions({
      // fetchProposals: 'proposals/fetch',
      storeVotes: "vote/store",
    }),
    ...mapMutations({
      // setIsLoading: mTypes.SET_IS_LOADING,
      appendVote: "vote/" + mTypes.APPEND_USER_VOTE,
      removeVote: "vote/" + mTypes.REMOVE_USER_VOTE,
    }),
    openModal(item) {
      this.selectProgram = item
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
    async onVote(proposal) {
      if (this.isLoggedIn) {
        await this.appendVote(proposal)
        await this.storeVotes()
      } else {
        // If user tried voting without sign in, redirect to login path.
        this.$router.push(this.localePath("login"))
      }
    },
    async onUnVote(proposal) {
      if (this.isLoggedIn) {
        await this.removeVote(proposal)
        await this.storeVotes()
      } else {
        // If user tried voting without sign in, redirect to login path.
        this.$router.push(this.localePath("login"))
      }
    },
  },
  head() {
    const $t = this.$t.bind(this)
    return {
      title: $t("title"),
      meta: [{ name: "og:title", content: `${$t("title")} | ScalaMatsuri 2024` }],
    }
  },
}
</script>

<style lang="scss" scoped>
// animations
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
