<i18n lang="yaml">
## language=yaml
en:
  login: 'Log in to ScalaMatsuri 2024'
  login_successful: 'Logged in successfully.'
ja:
  login: 'ScalaMatsuri 2024 にログイン'
  login_successful: 'ログインしました.'
</i18n>

<template>
  <div class="login">
    <div v-show="isLoggedOut || isUnknown" class="login__container">
      <div class="login__logo">
        <img v-if="$mq === 'lg'" class="logo--pc" :src="require(`~/assets/img/login/img-main_logo-pc.png?resize&size=200`)" alt="ScalaMatsuri 2024" />
        <img v-if="$mq === 'sm'" class="logo--sp" :src="require(`~/assets/img/login/img-main_logo-sp.png?resize&size=314`)" alt="ScalaMatsuri 2024" />
      </div>
      <div class="login__text">
        {{ $t('login') }}
      </div>
      <div class="login__firebase-container">
        <div v-show="isLoggedOut" id="firebaseui-container" />
      </div>
    </div>
    <div v-if="isLoggedIn" class="userinfo">
      <img v-if="auth.profile.photoURL" class="userinfo__avater" :src="auth.profile.photoURL" />
      <ul>
        <li v-if="auth.profile.displayName" class="userinfo__name">
          {{ auth.profile.displayName }}
        </li>
      </ul>
      <button class="userinfo__button" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import firebase from 'firebase/compat/app'
import { auth } from '~/plugins/firebase'
import Page404NotFoundMixin from '~/mixins/page/Page404NotFound.js'

export default {
  name: 'FirebaseAuth',
  mixins: [Page404NotFoundMixin],
  beforeRouteEnter(_, from, next) {
    next((vm) => {
      vm.prevRoute = from
    })
  },
  data() {
    return {
      prevRoute: null,
    }
  },
  computed: {
    ...mapState({
      auth: (state) => state.auth,
    }),
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
      isLoggedOut: 'auth/isLoggedOut',
      isUnknown: 'auth/isUnknown',
    }),
  },
  mounted() {
    this.$nextTick(function () {
      this.renderFirebaseUI()
    })
  },
  updated() {
    this.$nextTick(function () {
      this.renderFirebaseUI()
    })
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
    },
    renderFirebaseUI() {
      if (process.client) {
        require('firebaseui/dist/firebaseui.css')
        const firebaseui = require('firebaseui')
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth)

        const config = {
          signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.GithubAuthProvider.PROVIDER_ID],
          callbacks: {
            signInSuccessWithAuthResult: () => {
              this.$toast(this.$t('login_successful'), { closeOnTap: true })
              this.prevRoute ? this.$router.push(this.prevRoute.fullPath) : this.$router.push('/')
              return false
            },
          },
          signInFlow: 'popup',
        }
        ui.start('#firebaseui-container', config)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.login {
  background-color: #f4f4f4;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
}
.login__container {
  padding: 60px 0 20px;
}
.login__logo {
  text-align: center;

  & > img {
    width: 120px;
    max-width: 80vw;
  }
}

.login__text {
  font-size: 21px;
  padding: 20px 0 10px;
  text-align: center;
}

.login__firebase-container {
  padding: 20px 0;
  background: white;
  border-radius: 5px;
  margin: 20px auto 40px;
  width: 400px;
  max-width: 90vw;
}

.userinfo {
  padding: 60px 0 20px;
}
.userinfo__avater {
  display: block;
  width: 80px;
  height: 80px;
  margin: 0 auto 5px auto;
  border-radius: 50%;
}
.userinfo__name {
  display: block;
  font-size: 20px;
  font-weight: bold;
  color: #444;
  text-align: center;
}
.userinfo__button {
  display: block;
  height: 44px;
  width: 106px;
  margin: 10px auto 0;
  box-sizing: border-box;
  text-align: center;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: normal;
  color: #444;
}
</style>
