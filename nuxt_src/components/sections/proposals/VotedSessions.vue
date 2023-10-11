<i18n lang="yaml">
## language=yaml
en:
  title: 'sessions you voted'
  description: "Vote below, then order the selection using drag&drop\nThe screening will take into account the ranking."
  editCode: 'Click here to update your check-in code.'
ja:
  title: '投票済みセッション'
  description: "ドラッグ&ドロップで順位付けをしてください。\n順位も考慮されて選考されます。"
  editCode: 'チェックインコードの修正はこちら'
</i18n>

<template>
  <section class="section__voted-programs">
    <h1 class="voted-program__title">{{ $t('title') }} ({{ votes.length }}/5)</h1>

    <div class="voted-program__description">
      <p>{{ $t('description') }}</p>
    </div>

    <div class="voted-program__edit-code">
      <a @click="setDialog(true)">
        {{ $t('editCode') }}
      </a>
    </div>

    <ul v-if="votes && votes.every((v) => v)" class="voted-program__programs-list">
      <draggable
        v-model="votes"
        v-bind="dragOptions"
        handle=".list__drag-point"
        drag-class="dragging"
        @start="dragging = true"
        @end="dragging = false"
      >
        <transition-group type="transition">
          <li v-for="(program, index) in votes" :key="program.id" class="program-list__list-container" :class="{ dragging }">
            <div class="list__rank">
              <span>{{ index + 1 }}</span>
            </div>
            <div class="list__body">
              <div class="program-list">
                <div class="list__drag-point" />
                <div class="list__title">
                  <span class="centered">
                    {{ program[$i18n.locale].title }}
                  </span>
                </div>
                <div class="list__speakers">
                  <div v-for="speaker in program[$i18n.locale].speakers" :key="speaker.name" class="schedule_speakers">
                    <div class="schedule_speaker">
                      <div class="schedule_speaker_icon" :style="`background-image: url('${speaker.icon}')`" />
                      <p class="schedule_speaker_name">
                        {{ speaker.name }}
                      </p>
                      <p class="schedule_speaker_id">
                        <a v-if="speaker.twitter" class="modal_speaker_sns" :href="`https://twitter.com/${speaker.twitter}`">
                          <img v-lazy="require('~/assets/img/common/icon-sns-tw.svg')" />{{ speaker.twitter }}
                        </a>
                        <a v-if="speaker.github" class="modal_speaker_sns" :href="`https://github.com/${speaker.github}`">
                          <img v-lazy="require('~/assets/img/common/icon-sns-git.svg')" />{{ speaker.github }}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </transition-group>
      </draggable>
    </ul>
    <transition name="fade">
      <CheckinCodeDialog v-if="checkinCodeDialogVisible" :initial-value="checkinCode" @submit="registerCheckinCode" @close="setDialog(false)" />
    </transition>
  </section>
</template>

<script>
import draggable from 'vuedraggable'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { auth } from '~/plugins/firebase'
import * as mTypes from '~/store/mutation-types'
import CheckinCodeDialog from '~/components/parts/CheckinCodeDialog.vue'

export default {
  components: {
    draggable,
    CheckinCodeDialog,
  },
  data() {
    return {
      dragging: false,
      checkinCodeDialogVisible: false,
    }
  },
  computed: {
    ...mapGetters({
      filterProposalsByIds: 'proposals/filterByIds',
      isLoggedIn: 'auth/isLoggedIn',
      currentVotes: 'vote/userVotes',
      checkinCode: 'vote/checkinCode',
    }),
    dragOptions() {
      return {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost',
      }
    },
    votes: {
      get() {
        const votedIds = this.currentVotes.map((vote) => vote.id) || []
        const targetVotes = this.filterProposalsByIds(votedIds)
        return votedIds.map((id) => targetVotes.find((v) => v.id === id))
      },
      async set(v) {
        if (this.isLoggedIn) {
          const ranked = v.map((vote, idx) => {
            return { ...vote, rank: idx + 1 }
          })
          await this.setVotes(ranked)
          await this.storeVotes()
        } else {
          // If user tried voting without sign in, redirect to login path.
          this.$router.push(this.localePath('login'))
        }
      },
    },
  },
  mounted() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        await this.fetchVotes()
        await this.setUserInfo(user)
        if (!this.checkinCode || this.checkinCode.length < 1) {
          this.setDialog(true)
        }
      }
    })
  },
  methods: {
    ...mapActions({
      fetchVotes: 'vote/fetch',
      storeVotes: 'vote/store',
    }),
    ...mapMutations({
      setVotes: 'vote/' + mTypes.SET_USER_VOTES,
      setCheckinCode: 'vote/' + mTypes.SET_CHECKIN_CODE,
      setUserInfo: 'vote/' + mTypes.SET_USER_INFO,
    }),
    setDialog: function (bool) {
      this.checkinCodeDialogVisible = bool
    },
    registerCheckinCode: async function (value) {
      await this.setCheckinCode(value)
      await this.storeVotes()
      this.setDialog(false)
    },
  },
}
</script>

<style lang="scss" scoped>
.section__voted-programs {
  background-color: #f1f1f1;
  text-align: center;
  padding: 48px 0;
}
.voted-program__title {
  padding: 8px 48px;
  font-weight: bold;
  line-height: 49px;
  font-size: 30px;
  font-weight: normal;
  text-align: center;
  letter-spacing: 0.05em;
  color: #fff;
  background: #333;
  display: inline-block;
}
.voted-program__description {
  padding: 48px 0 1em;
  line-height: 2rem;
  font-weight: bold;
  white-space: pre-line;
}
.voted-program__edit-code {
  padding-bottom: 48px;
}
.program-list__list-container {
  display: flex;
  margin: 0 auto;
  max-width: 980px;
  padding: 0 10px;
  box-sizing: border-box;
  justify-content: center;
  .list__rank {
    flex: 0 0 30px;
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: bold;

    @media screen and (max-width: 819px) {
      flex: 0 0 20px;
      font-size: 18px;
    }

    & > span {
      transition: all 80ms ease-out;
      opacity: 1;
      transform: translateX(0);
    }
  }
  .list__body {
    flex: 0 0 calc(100% - 30px);
    padding: 2px;
    max-height: 96px;
    overflow: hidden;

    @media screen and (max-width: 819px) {
      max-height: 210px;
      flex-wrap: wrap;
    }
  }

  &.dragging {
    .list__rank > span {
      opacity: 0;
      transform: translateX(-12px);
    }
  }
}
.program-list {
  display: flex;
  max-width: 100%;
  background-color: white;
  border-radius: 2px;
  min-height: 80px;
  position: relative;
  padding-left: 40px;

  @media screen and (max-width: 819px) {
    flex-wrap: wrap;
    padding-left: 30px;
  }

  .list__drag-point {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: 4px 10px;
    margin: 0 auto;
    cursor: grab;

    &::after {
      content: '';
      position: absolute;
      width: 8px;
      top: 24px;
      bottom: 24px;
      left: 16px;
      right: 16px;
      background-size: 4px 4px;
      background-color: #ffffff;
      background-image: radial-gradient(#bcbcbc 33%, transparent 46%);
      background-repeat: repeat;
    }
  }
  .list__title {
    flex: 1 1 calc(100% - 40px - 200px);
    max-width: 100%;
    font-weight: bold;
    text-align: left;
    word-break: break-all;
    padding: 6px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 819px) {
      flex: 1 1 calc(100% - 40px);
    }

    & > span.centered {
      display: table-cell;
      vertical-align: middle;
      line-height: 2em;
    }
  }
  .list__speakers {
    flex: 1 0 200px;
    max-height: 96px;
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 819px) {
      flex: 1 1 100%;
    }
  }
  .schedule_speakers {
    margin-left: 8px;
    width: 100% !important;
    padding: 0 !important;

    @media screen and (min-width: 820px) {
      width: 150px !important;
    }
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
</style>
