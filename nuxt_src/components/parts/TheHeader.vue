<i18n lang="yaml">
## language=yaml
en:
  sponsors: Sponsors(ja)
  access: Access
  code-of-conduct: Code of Conduct
  program: Program
  open-mic-conference: Open mic conference
  proposals: Proposals
  outline: Outline
  login: Log in
  ticket: Ticket
  cfp: CFP
  cm: CM
  extra-staff: Extra Staffs(ja)
  logout: Log Out
  logout_successful: Logged out successfully.
ja:
  sponsors: スポンサー
  access: アクセス
  code-of-conduct: 行動規範
  program: プログラム
  open-mic-conference: 飛び入りカンファレンス
  proposals: セッション候補
  outline: 開催概要
  login: ログイン
  ticket: チケット
  cfp: セッション募集
  cm: CM
  extra-staff: スタッフ募集
  logout: ログアウト
  logout_successful: ログアウトしました.
</i18n>

<template>
  <header>
    <div ref="header" class="header is_pc" :class="{ is_active: isHeaderActivePC, is_fixed: isHeaderFixedPC }">
      <div class="header_inner">
        <p class="logo">
          <nuxt-link :to="localePath('index')">
            <img src="~/assets/img/common/logo.svg" alt="ScalaMatsuri 2024" width="42" height="32" />
          </nuxt-link>
        </p>
        <div class="menu">
          <ul class="gnav">
            <li class="gnav_item" :class="{ 'gnav_item-current': current_path('/') }">
              <nuxt-link :to="localePath('index')">
                <span>{{ $t("outline") }}</span>
              </nuxt-link>
            </li>
            <li class="gnav_item" :class="{ 'gnav_item-current': current_path('/program') }">
              <nuxt-link :to="localePath('program')">
                <span>{{ $t("program") }}</span>
              </nuxt-link>
            </li>
            <li class="gnav_item" :class="{ 'gnav_item-current': current_path('/open-mic-conference') }">
              <nuxt-link :to="localePath('open-mic-conference')">
                <span>{{ $t("open-mic-conference") }}</span>
              </nuxt-link>
            </li>
            <!-- <li class="gnav_item" :class="{ 'gnav_item-current': current_path('/proposals') }"> -->
            <!--   <nuxt-link :to="localePath('proposals')"> -->
            <!--     <span>{{ $t("proposals") }}</span> -->
            <!--   </nuxt-link> -->
            <!-- </li> -->
            <li class="gnav_item" :class="{ 'gnav_item-current': current_path('/code-of-conduct') }">
              <nuxt-link :to="localePath('code-of-conduct')">
                <span>{{ $t("code-of-conduct") }}</span>
              </nuxt-link>
            </li>
            <li class="gnav_item" :class="{ 'gnav_item-current': current_path('/sponsors') }">
              <nuxt-link :to="localePath('sponsors')">
                <span>{{ $t("sponsors") }}</span>
              </nuxt-link>
            </li>
            <li class="gnav_item" :class="{ 'gnav_item-current': current_path('/cm') }">
              <nuxt-link :to="localePath('cm')">
                <span>{{ $t("cm") }}</span>
              </nuxt-link>
            </li>
            <!-- <li class="gnav_item" :class="{ 'gnav_item-current': current_path('/#access') }"> -->
            <!--   <nuxt-link :to="locale_access_link()"> -->
            <!--     <span>{{ $t('access') }}</span> -->
            <!--   </nuxt-link> -->
            <!-- </li> -->
            <!-- </li> -->

            <li class="gnav_item">
              <LangSwitcher />
            </li>
          </ul>
          <!--  ログイン前 ここから -->
          <ul v-if="isLoggedOut" class="function">
            <!-- <div class="function_item function_item-application"> -->
            <!-- <nuxt-link :to="localePath('login')" style="background-color: #EBA80A;"> -->
            <!-- {{ $t('login') }} -->
            <!-- </nuxt-link> -->
            <!-- </div> -->
            <!--<li class="function_item function_item-application">-->
            <!--  <a href="https://scalaconfjp.doorkeeper.jp/events/152333" target="_blank" rel="noopener">-->
            <!--    {{ $t("ticket") }}-->
            <!--  </a>-->
            <!--</li>-->
            <!-- <li class="function_item function_item-login"> -->
            <!--   <nuxt-link :to="localePath('cfp')"> -->
            <!--     {{ $t("cfp") }} -->
            <!--   </nuxt-link> -->
            <!-- </li> -->
            <!-- <li class="gnav_item" :class="{ 'gnav_item-current': current_path('/extra-staff') }"> -->
            <!--   <nuxt-link :to="localePath('extra-staff')"> -->
            <!--     <span>{{ $t("extra-staff") }}</span> -->
            <!--   </nuxt-link> -->
            <!-- </li> -->
          </ul>
        </div>
        <!-- ログイン前 ここまで -->
        <!-- ログイン後 ここから -->
        <!-- <ul v-else-if="isLoggedIn" class="function"> -->
        <!-- <li class="function_item function_item-userIcon"> -->
        <!-- <div class="userMenu js-myMenu"> -->
        <!-- <div class="function_userIcon js-myMenuIcon" :style="`background-image: url(${auth.profile.photoURL})`" @click="toggleUserMenu()" /> -->
        <!-- <ul v-if="userMenuActive" class="userMenu_list js-myMenuList"> -->
        <!-- <li class="userMenu_list_item" @click="logout()"> -->
        <!-- {{ $t('logout') }} -->
        <!-- </li> -->
        <!-- </ul> -->
        <!-- </div> -->
        <!-- </li> -->
        <!-- <li class="function_item function_item-login"> -->
        <!-- <nuxt-link :to="localePath('cfp')"> -->
        <!-- {{ $t('cfp') }} -->
        <!-- </nuxt-link> -->
        <!-- </li> -->
        <!-- <li class="function_item function_item-application"> -->
        <!-- <a href="https://scalaconfjp.doorkeeper.jp/events/103550" target="_blank" rel="noopener"> -->
        <!-- {{ $t('ticket') }} -->
        <!-- </a> -->
        <!-- </li> -->
        <!-- </ul> -->
        <!-- ログイン後 ここまで -->
      </div>
    </div>
    <!-- グローバルナビ PC ここまで -->
    <!-- グローバルナビ SP ここから -->
    <transition name="fade">
      <div v-if="menuActive" class="shadow" @click.self="toggleMenu()" />
    </transition>
    <div class="header is_sp">
      <div class="header_inner">
        <transition name="fade">
          <p v-if="!menuActive" class="logo">
            <a href="/"
              ><img src="~/assets/img/common/logo.svg" alt="ScalaMatsuri 2024" height="24" /><span class="logo_type">ScalaMatsuri 2024</span></a
            >
          </p>
        </transition>
        <transition name="expand-v">
          <div v-if="menuActive" class="menu">
            <ul class="gnav">
              <li class="gnav_item" :class="{ 'gnav_item-current': current_path('/') }" @click="toggleMenu()">
                <nuxt-link :to="localePath('index')">
                  <span>{{ $t("outline") }}</span>
                </nuxt-link>
              </li>
              <li class="gnav_item" :class="{ 'gnav_item-current': current_path('/program') }" @click="toggleMenu()">
                <nuxt-link :to="localePath('program')">
                  <span>{{ $t("program") }}</span>
                </nuxt-link>
              </li>
              <li class="gnav_item" :class="{ 'gnav_item-current': current_path('/open-mic-conference') }" @click="toggleMenu()">
                <nuxt-link :to="localePath('open-mic-conference')">
                  <span>{{ $t("open-mic-conference") }}</span>
                </nuxt-link>
              </li>
              <!-- <li class="gnav_item" :class="{ 'gnav_item-current': current_path('/proposals') }" @click="toggleMenu()"> -->
              <!--   <nuxt-link :to="localePath('proposals')"> -->
              <!--     <span>{{ $t('proposals') }}</span> -->
              <!--   </nuxt-link> -->
              <!-- </li> -->
              <li class="gnav_item" :class="{ 'gnav_item-current': current_path('/code-of-conduct') }" @click="toggleMenu()">
                <nuxt-link :to="localePath('code-of-conduct')">
                  <span>{{ $t("code-of-conduct") }}</span>
                </nuxt-link>
              </li>
              <li class="gnav_item" :class="{ 'gnav_item-current': current_path('/sponsors') }" @click="toggleMenu()">
                <nuxt-link :to="localePath('sponsors')">
                  <span>{{ $t("sponsors") }}</span>
                </nuxt-link>
              </li>
              <li class="gnav_item" :class="{ 'gnav_item-current': current_path('/cm') }" @click="toggleMenu()">
                <nuxt-link :to="localePath('cm')">
                  <span>{{ $t("cm") }}</span>
                </nuxt-link>
              </li>
              <!-- <li class="gnav_item" :class="{ 'gnav_item-current': current_path('#access') }" @click="toggleMenu()"> -->
              <!--   <nuxt-link :to="locale_access_link()"> -->
              <!--     <span>{{ $t('access') }}</span> -->
              <!--   </nuxt-link> -->
              <!-- </li> -->
            </ul>
            <div class="function">
              <!-- <div v-if="isLoggedOut" class="function_item function_item-login" style="margin-bottom: 16px;" @click="toggleMenu()"> -->
              <!--   <nuxt-link :to="localePath('login')"> -->
              <!--     {{ $t('login') }} -->
              <!--   </nuxt-link> -->
              <!-- </div> -->
              <!-- <div class="function_item function_item-application">-->
              <!--   <a href="https://scalaconfjp.doorkeeper.jp/events/152333" target="_blank" rel="noopener">-->
              <!--     {{ $t("ticket") }}-->
              <!--   </a>-->
              <!-- </div>-->
              <!-- <div class="function_item function_item-login" @click="toggleMenu()"> -->
              <!--   <nuxt-link :to="localePath('cfp')"> -->
              <!--     {{ $t("cfp") }} -->
              <!--   </nuxt-link> -->
              <!-- </div> -->
              <!-- <div v-if="isLoggedIn" class="function_item-userIcon"> -->
              <!--   <div class="userMenu"> -->
              <!--     <div class="function_userInfo js-accordion" @click="toggleUserMenu()"> -->
              <!--       <div class="function_userIcon" :style="`background-image: url(${auth.profile.photoURL})`" /> -->
              <!--       <p class="function_userName"> -->
              <!--         {{ auth.profile.displayName }} -->
              <!--       </p> -->
              <!--     </div> -->
              <!--     <ul v-if="userMenuActive" class="userMenu_list js-accordionTarget"> -->
              <!--       <li class="userMenu_list_item" @click="logout()"> -->
              <!--         {{ $t('logout') }} -->
              <!--       </li> -->
              <!--     </ul> -->
              <!--   </div> -->
              <!-- </div> -->
            </div>
            <LangSwitcherSp @on-option-click="toggleMenu()" />
            <a class="menuCloseBtn is_sp" @click="toggleMenu()">閉じる</a>
          </div>
        </transition>
        <a class="menuBtn" :class="{ is_active: menuActive }" @click.capture="toggleMenu()">
          <span />
          <span />
          <span />
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapGetters } from "vuex"
import LangSwitcher from "~/components/parts/LangSwitcher"
import LangSwitcherSp from "~/components/parts/LangSwitcherSp"

export default {
  components: {
    LangSwitcher,
    LangSwitcherSp,
  },
  data: () => {
    return {
      menuActive: false,
      userMenuActive: false,
      lastScrollPos: 0,
      isHeaderActivePC: true, // PC only.toggle css classes on header in conditions.Default true for initial rendering.
      isHeaderFixedPC: true, // Same as above.
    }
  },
  computed: {
    ...mapState({
      auth: (state) => state.auth,
    }),
    ...mapGetters({
      isLoggedIn: "auth/isLoggedIn",
      isLoggedOut: "auth/isLoggedOut",
    }),
  },
  mounted() {
    window.addEventListener("scroll", this.updateHeaderClassAssignmentByScrollPos)
    if (this.$route.hash.match(/^#/)) {
      document.getElementById(this.$route.hash.replace(/^#/, "")).scrollIntoView()
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.updateHeaderClassAssignmentByScrollPos)
  },
  methods: {
    current_path(path) {
      return this.$route.fullPath.endsWith(path)
    },
    locale_access_link() {
      // ページ内リンクの時は、フルパスではなく "#access" で飛ばしたい
      return this.$route.fullPath.endsWith("ja") || this.$route.fullPath.endsWith("en") ? "#access" : this.localePath("index") + "#access"
    },
    toggleMenu() {
      this.menuActive = !this.menuActive
    },
    toggleUserMenu() {
      this.userMenuActive = !this.userMenuActive
    },
    logout() {
      this.userMenuActive = false
      this.$store.dispatch("auth/logout")
      this.$toast(this.$t("logout_successful"), { closeOnTap: true })
      this.toggleMenu()
    },
    /**
     * Determin the header css class assignment by scroll position.
     */
    updateHeaderClassAssignmentByScrollPos() {
      const headerHeight = this.$refs.header.clientHeight || 0
      const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop

      // Whether the scroll direction is up
      const isScrollUp = currentScrollPos < this.lastScrollPos
      // will be true when user scrolled down more than header height
      const isHeaderOutOfView = currentScrollPos > headerHeight

      // Update each css class assignment
      this.isHeaderActivePC = !isHeaderOutOfView || (isHeaderOutOfView && isScrollUp)
      this.isHeaderFixedPC = isHeaderOutOfView || (this.isHeaderFixedPC && currentScrollPos > 0)

      // update the last scroll position.
      this.lastScrollPos = currentScrollPos
    },
  },
}
</script>

<style lang="scss" scoped>
// Animation definition
.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.3s ease-out;
    will-change: opacity;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
.expand-v {
  &-enter-active {
    max-height: calc(100vh - 40px);
    transition: max-height 0.6s ease;
  }
  &-leave-active {
    max-height: calc(100vh - 40px);
    transition: max-height 0.3s ease;
  }
  &-enter,
  &-leave-to {
    max-height: 0;
  }
}
</style>
