<i18n lang="yaml">
## language=yaml
en:
  release_time_table: <a href="https://docs.google.com/spreadsheets/d/1FJ7V6OUuSjfpMcNMIOXDUNnxJDiTWYx2UcaFfXSAx9o/edit?usp=sharing">Time table</a> is now released.
ja:
  release_time_table: <a href="https://docs.google.com/spreadsheets/d/1FJ7V6OUuSjfpMcNMIOXDUNnxJDiTWYx2UcaFfXSAx9o/edit?usp=sharing">タイムテーブル</a>を公開しました。
</i18n>

<template>
  <section id="sessions" class="content sessions">
    <div class="content_inner">
      <h2 class="content_title">Sessions</h2>
      <div class="session_news" v-html="$t('release_time_table')" />
      <div>
        <list-session-container :programs="sessions" @program-clicked="openModal" />
      </div>
    </div>
    <!-- modal -->
    <transition name="fade">
      <div v-if="showModal" class="modal" tabindex="0" @click.self="closeModal" @keyup.escape="closeModal()">
        <modal :program="selectedProgram" @close="closeModal" />
      </div>
    </transition>
  </section>
</template>

<script>
import ListSessionContainer from '~/components/parts/ListSessionContainer'
import Modal from '~/components/parts/SessionDetailModal.vue'

// accepted sessions json
import proposals from '~/data/proposals/all.json'

export default {
  components: {
    Modal,
    ListSessionContainer,
  },
  data() {
    const addaptedSessions = proposals.filter((session) => session.isAdapted)
    return {
      addaptedSessions,
      selectedProgram: null,
      showModal: null,
    }
  },
  methods: {
    openModal(item) {
      this.selectedProgram = item
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
  },
}
</script>

<style lang="scss">
.content {
  padding-bottom: 40px !important;
}
.modal {
  display: flex;
  pointer-events: auto;
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
  z-index: 2;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  animation-duration: 0.1s;
  &.is_active {
    display: flex;
  }
}

// animations
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.session_news {
  font-size: 20px;
}
</style>
