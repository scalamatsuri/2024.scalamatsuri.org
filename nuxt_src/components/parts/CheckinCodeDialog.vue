<i18n lang="yaml">
en:
  title: 'Check-in code registration'
  description: 'Please enter your check-in code issued on purchacing ticket.'
  placeholder: 'Enter your check-in code here'
  submit: 'submit'
  close: 'close'
ja:
  title: 'チェックインコード登録'
  description: 'チケット取得時に発行されたチェックインコードを入力してください'
  placeholder: 'チェックインコードを入力'
  submit: '登録'
  close: '閉じる'
</i18n>

<template>
  <transition name="fade">
    <div class="backdrop" @click.self.stop="$emit('close')">
      <div class="checkin-modal" tabindex="0" @keyup.escape="$emit('close')">
        <div class="modal__content">
          <h2 class="content__title">
            {{ $t('title') }}
          </h2>
          <div class="content__description">
            {{ $t('description') }}
          </div>
          <form class="content__form" @submit.prevent="$emit('submit', value)">
            <input ref="inputRef" v-model="value" type="text" class="form__input" :placeholder="$t('placeholder')" />
            <button class="form__submit">
              {{ $t('submit') }}
            </button>
          </form>
        </div>
        <div class="modal__close" @click.stop="$emit('close')">
          {{ $t('close') }}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    initialValue: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      value: this.initialValue || '',
    }
  },
  mounted() {
    this.$nextTick(this.$refs.inputRef.focus())
  },
}
</script>

<style lang="scss" scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}
.checkin-modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 92%;
  width: 606px;
  min-height: 303px;
  background: white;
  padding: 32px;
  box-sizing: border-box;
  border-radius: 8px;
  letter-spacing: 2px;
  color: #333;
}
.modal__content {
  margin-bottom: 60px;
  padding-bottom: 40px;
  border-bottom: 1px solid #eee;
}
.modal__close {
  position: absolute;
  bottom: 32px;
  left: 50%;
  text-align: center;
  transform: translateX(-50%);
  padding: 4px 12px;
  padding-left: 14px;
  border: 2px solid #333;
  border-radius: 32px;
  font-size: 14px;
  font-weight: bold;
}
.content__title {
  font-size: 22px;
  font-weight: bold;
  width: 100%;
  text-align: left;
  padding-bottom: 24px;
}
.content__description {
  font-size: 14px;
  text-align: left;
}

.content__form {
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .form__input {
    flex: 1 0 auto;
    display: inline-block;
    height: 38px;
    margin-top: 10px;
    background-color: #eee;
    border: none;
    border-radius: 4px;
    padding: 0 8px;
    box-sizing: border-box;
    caret-color: #cc293e;
    font-weight: bold;
    outline: none;

    &::placeholder {
      color: #bebebe;
      font-weight: normal;
    }
  }
  .form__submit {
    flex: 0 0 100px;
    height: 38px;
    border: none;
    margin-top: 10px;
    margin-left: 10px;
    background-color: #cc293e;
    color: white;
    font-size: 16px;
    border-radius: 38px;
  }
}
</style>
