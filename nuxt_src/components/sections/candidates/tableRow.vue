<i18n lang="yaml">
## language=yaml
en:
  voted: "voted"
  vote: "vote"
ja:
  voted: "投票済み"
  vote: "投票する"
</i18n>

<template>
  <div :id="program.id" class="schedule_event schedule_event-disabled" data-target="program.id">
    <!-- 内容 ここから -->
    <div class="schedule_detail">
      <p class="schedule_title">
        {{ program[locale].title }}
      </p>
      <!--      <p class="schedule_division">-->
      <!--        {{ program[locale].audience }}-->
      <!--      </p>-->
      <div class="schedule_tags">
        <div v-for="kw in program[locale].keywords" :key="kw" class="schedule_tag" data-tag="tag">
          <span>{{ kw }}</span>
        </div>
      </div>
    </div>
    <!-- 内容 ここまで -->
    <!-- 登壇者 ここから -->
    <div v-for="speaker in program[locale].speakers" :key="speaker.name" class="schedule_speakers">
      <div class="schedule_speaker">
        <img v-lazy="speaker.icon" class="schedule_speaker_icon" />
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
    <!-- 登壇者 ここまで -->
    <!-- <div class="schedule__vote">
      <button v-if="voted" class="vote__button--voted" @click.stop="onUnvote(program)">
        {{ $t('voted') }}
      </button>
      <button v-else class="vote__button" :disabled="exceededVoteLimit" @click.stop="onVote(program)">
        {{ $t('vote') }}
      </button>
    </div> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex"

export default {
  props: {
    program: {
      // Object{}である
      type: Object,
      // 必須である
      required: true,
      // デフォルト値
      default: () => {
        return {}
      },
    },
    locale: {
      type: String,
      required: true,
      defualt: "en",
    },
    onVote: {
      type: Function,
      default: () => {
        return () => {}
      },
    },
    onUnvote: {
      type: Function,
      default: () => {
        return () => {}
      },
    },
    voted: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters({
      exceededVoteLimit: "vote/exceededVoteLimit",
    }),
  },
}
</script>

<style lang="scss" scoped>
// PC
@media screen and (min-width: 820px) {
  .schedule_detail {
    width: 65%;
    text-align: left;
    padding: 20px 30px;
  }
  .schedule_speakers {
    width: 15%;
    align-items: center;
    display: flex;
  }
  .schedule_speaker {
    text-align: left;
    & + .schedule_speaker {
      margin-top: 10px;
    }
  }
  .schedule_speaker_icon {
    width: 40px;
    height: 40px;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1) inset;
    background-size: cover;
    border-radius: 20px;
    float: left;
  }
  .schedule_speaker_name {
    margin-left: 50px;
    font-weight: bold;
    line-height: 20px;
    font-size: 12px;
    letter-spacing: 0.1em;
  }
  .schedule_speaker_id {
    margin-left: 50px;
    font-weight: bold;
    line-height: 20px;
    font-size: 12px;
    letter-spacing: 0.1em;
    > a {
      color: #00a4de;
      white-space: nowrap;
      display: block;
      width: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    > a > img {
      width: 16px;
      height: 16px;
      margin-top: 0.24em;
      margin-right: 4px;
    }
  }
  .schedule_title {
    font-weight: bold;
    line-height: 26px;
    font-size: 16px;
    letter-spacing: 0.1em;
  }
  .schedule_function {
    display: flex;
    margin-top: 10px;
  }
  .schedule_function_item {
    img {
      display: inline-block;
      padding-right: 6px;
      vertical-align: middle;
    }
  }
  .schedule_icon {
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    font-size: 12px;
    &-yt {
      height: 30px;
    }
    &-gs {
      height: 30px;
      margin-left: 20px;
    }
  }
  .schedule_fav {
    position: relative;
    align-items: center;
    display: flex;
  }
  .schedule_fav_checkbox {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    &:checked + .schedule_fav_icon {
      background-image: url("/assets/img/common/icon-star.svg");
    }
  }
  .schedule_fav_icon {
    background-image: url("/assets/img/common/icon-star-blank.svg");
    display: block;
    width: 60px;
    height: 60px;
    margin-left: 0;
    background-size: 30px 30px;
    background-position: center;
    cursor: pointer;
  }
  .schedule_division {
    display: inline-block;
    font-weight: bold;
    line-height: normal;
    font-size: 14px;
    letter-spacing: 0.1em;
    color: #999999;
    margin-right: 20px;
  }
  .schedule_tags {
    display: inline;
    font-weight: bold;
    line-height: normal;
    font-size: 12px;
    letter-spacing: 0.1em;
  }
  .schedule_tag {
    display: inline;
    color: rgba(0, 0, 0, 0.5);
    > span {
      display: inline-block;
      line-height: 20px;
      font-size: 12px;
      letter-spacing: 0.05em;
      // color: #00A4DE;
      font-weight: normal;
    }
    &.is_current {
      > span {
        color: #eba80a;
      }
    }
    + .schedule_tag {
      &:before {
        content: " | ";
      }
    }
  }
}

// SP
@media screen and (max-width: 820px - 1) {
  .schedule_detail {
    text-align: left;
    padding: 20px 20px 0;
  }
  .schedule_speakers {
    padding: 0 20px 0;
  }
  .schedule_speaker {
    text-align: left;
    & + .schedule_speaker {
      margin-top: 10px;
    }
  }
  .schedule_speaker_icon {
    width: 30px;
    height: 30px;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1) inset;
    background-size: cover;
    border-radius: 20px;
    float: left;
  }
  .schedule_speaker_name {
    margin-left: 40px;
    font-weight: bold;
    line-height: 12px;
    font-size: 12px;
    letter-spacing: 0.1em;
  }
  .schedule_speaker_id {
    margin-left: 40px;
    font-weight: bold;
    line-height: 20px;
    font-size: 12px;
    letter-spacing: 0.1em;
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
  .schedule_title {
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 0.1em;
  }
  .schedule_function {
    display: flex;
  }
  .schedule_function_item {
    img {
      display: inline-block;
      padding-right: 6px;
      vertical-align: middle;
    }
  }
  .schedule_icon {
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    font-size: 12px;
    padding: 5px 0 5px;
    &-yt {
    }
    &-gs {
      margin-left: 20px;
    }
  }
  .schedule_fav {
    position: relative;
    width: 100%;
    height: 44px;
    text-align: right;
    margin-top: -10px;
  }
  .schedule_fav_checkbox {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    &:checked + .schedule_fav_icon {
      background-image: url("/assets/img/common/icon-star.svg");
    }
  }
  .schedule_fav_icon {
    background-image: url("/assets/img/common/icon-star-blank.svg");
    display: inline-block;
    width: 44px;
    height: 44px;
    margin-left: 0;
    background-size: 30px 30px;
    background-position: center top;
    cursor: pointer;
  }
  .schedule_division {
    display: inline-block;
    font-weight: bold;
    line-height: normal;
    font-size: 14px;
    letter-spacing: 0.1em;
    color: #999999;
    margin-right: 20px;
  }
  .schedule_tags {
    display: block;
    font-weight: bold;
    line-height: 1.5;
    font-size: 12px;
    letter-spacing: 0.1em;
    margin: 0 0 8px;
  }
  .schedule_tag {
    display: inline;
    color: rgba(0, 0, 0, 0.5);
    > span {
      display: inline-block;
      font-size: 12px;
      letter-spacing: 0.05em;
      padding: 0;
      // color: #00A4DE;
      font-weight: normal;
    }
    &.is_current {
      > span {
        color: #eba80a;
      }
    }
    + .schedule_tag {
      &:before {
        content: " | ";
      }
    }
  }
  .schedule_detail {
    + .schedule_speakers {
      margin-top: 5px;
      margin-bottom: 10px;
    }
  }
  .main {
    &.is_subNav {
      display: none;
    }
  }
  .main_index {
    margin-top: 0;
    text-align: center;
    padding: 0;
    margin-bottom: 0;
    height: auto;
  }
  .main_item {
    padding: 5px 0;
    > a {
      color: #fff;
      position: relative;
      display: inline-block;
      padding-right: 24px;
      &:after {
        content: "";
        position: absolute;
        right: 0;
        top: 4px;
        display: block;
        width: 24px;
        height: 20px;
        background-image: url(/assets/img/common/arrow-next-w.svg);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 10px auto;
        // transform: rotate(90deg);
      }
    }
  }
}

// vote
// .schedule__vote {
//   display: flex;
//   align-items: center;
//   min-width: 150px;

//   @media screen and (max-width: 819px) {
//     width: 100%;
//     padding: 7px 7px 14px;
//   }
// }
// .vote__button {
//   border: 1px solid #E6E6E6;
//   background-color: #eeeeee;
//   color: #272B4E;
//   font-weight: bold;
//   font-size: 18px;
//   letter-spacing: 1px;
//   padding: 10px 24px;
//   margin: 0 10px;
//   border-radius: 24px;
//   outline:none;
//   cursor: pointer;
//   transition: background-color .1s ease, color .1s ease;

//   &:hover:not(:disabled) {
//     opacity: .8;
//     transition: opacity .1s ease;
//   }

//   &:disabled {
//     pointer-events: none;
//     cursor: not-allowed;
//     background-color: #E0E0E0;
//     color: #A6A6A6;
//   }

//   &--voted {
//     border: 1px solid #CC293E;
//     font-weight: bold;
//     font-size: 18px;
//     letter-spacing: 1px;
//     padding: 10px 24px;
//     margin: 0 10px;
//     border-radius: 24px;
//     outline:none;
//     color: white;
//     background-color: #CC293E;
//     cursor: pointer;
//     transition: background-color .1s ease, color .1s ease;

//     &:hover {
//       opacity: .8;
//       transition: opacity .1s ease;
//     }
//   }
// }
</style>
