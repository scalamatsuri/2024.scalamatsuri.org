<i18n lang="yaml">
en:
  outline: Outline
  code-of-conduct: Code of Conduct
  call-for-proposals: Call for Proposals
  proposals: Proposals
  programs: Programs
  training-day: Training Day(ja)
  open-mic-conference: Open Mic Conference
  sponsorship: Sponsorship(ja)
  sponsors: Sponsors(ja)
  cm: CM
  ticket: Ticket
  travel: Travel
  staff: Staff
  extra-staff: Extra Staffs(ja)
ja:
  outline: 開催概要
  code-of-conduct: 行動規範
  call-for-proposals: セッション募集
  proposals: セッション候補
  programs: プログラム
  training-day: トレーニング・デイ
  open-mic-conference: 飛び入りカンファレンス
  sponsorship: スポンサー募集
  sponsors: スポンサー
  cm: CM
  ticket: チケット
  travel: トラベル情報
  staff: スタッフ
  extra-staff: スタッフ募集
</i18n>

<template>
  <header>
    <div ref="header" class="header is_pc is_active is_fixed">
      <div class="header_inner">
        <p class="logo">
          <NuxtLink :to="localePath('/')">
            <img src="$image/common/logo.svg" :alt="`ScalaMatsuriaa ${appConfig.year}`" width="42" height="32" />
          </NuxtLink>
        </p>
        <div class="menu">
          <ul class="gnav">
            <li class="gnav_item" :class="{ 'gnav_item-current': currentPath('/') }">
              <NuxtLink :to="localePath('/')">
                <span>{{ t('outline') }}</span>
              </NuxtLink>
            </li>
            <li class="gnav_item" :class="{ 'gnav_item-current': currentPath(_header.path) }" v-for="_header in headers" :key="_header.order">
              <NuxtLink :to="localePath(_header.path)">
                <span>{{ t(_header.path) }}</span>
              </NuxtLink>
            </li>
            <LangSwitcher />
          </ul>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div v-if="menuActive" class="shadow" @click.self="toggleMenu()" />
    </transition>
    <div class="header is_sp">
      <div class="header_inner">
        <transition name="fade">
          <p v-if="!menuActive" class="logo">
            <NuxtLink :to="localePath('/')">
              <img src="$image/common/logo.svg" :alt="`ScalaMatsuri ${appConfig.year}`" height="24" /><span class="logo_type">
                ScalaMatsuri {{ appConfig.year }}
              </span>
            </NuxtLink>
          </p>
        </transition>
        <transition name="expand-v">
          <div v-if="menuActive" class="menu">
            <ul class="gnav">
              <li class="gnav_item" :class="{ 'gnav_item-current': currentPath('/') }" @click="toggleMenu()">
                <NuxtLink :to="localePath('/')">
                  <span>{{ t('outline') }}</span>
                </NuxtLink>
              </li>
              <li
                class="gnav_item"
                :class="{ 'gnav_item-current': currentPath(_header.path) }"
                @click="toggleMenu()"
                v-for="_header in headers"
                :key="_header.order">
                <NuxtLink :to="localePath(_header.path)">
                  <span>{{ t(_header.path) }}</span>
                </NuxtLink>
              </li>
            </ul>
            <LangSwitcherSp @on-option-click="toggleMenu" />
            <a class="menuCloseBtn is_sp" @click="toggleMenu">閉じる</a>
          </div>
        </transition>
        <a class="menuBtn" :class="{ is_active: menuActive }" @click.capture="toggleMenu">
          <span />
          <span />
          <span />
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
const localePath = useLocalePath()
const appConfig = useAppConfig()
const headers = appConfig.pages.filter((h) => h.published && h.header).sort((h1, h2) => h1.order - h2.order)
const currentPath = (path: string) => router.currentRoute.value.fullPath.indexOf(path) > 0
const menuActive = ref(false)
const toggleMenu = () => (menuActive.value = !menuActive.value)
</script>

<style scoped lang="scss">
/* header PC */
@media screen and (min-width: $headerViewport) {
  .header {
    box-sizing: border-box;
    width: 100%;
    padding: 40px 0;
    height: 120px;
    position: absolute;
    z-index: 2;
    background-color: #fff;
    top: -120px;
    &.is_fixed {
      position: fixed;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    }
    &.is_active {
      top: 0;
      display: block;
      transition-property: background-color, height, top;
      transition-duration: 0.2s;
      transition-timing-function: ease;
    }
  }
  .header_inner {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .logo {
    margin-top: 5px;
    margin-right: 22px;
    float: left;
  }
  .gnav {
    font-weight: bold;
    font-size: 16px;
    margin-top: 0;
    float: left;
  }
  .gnav_item {
    display: inline-block;
    text-align: center;
    a {
      display: block;
      color: #000;
      padding: 0 16px;
      span {
        display: inline-block;
        padding: 8px 4px;
        position: relative;
        &:after {
          content: none;
          display: block;
          width: 100%;
          height: 3px;
          background-color: #bd3844;
          border-radius: 3px;
          position: absolute;
          bottom: 0;
          left: 0;
        }
      }
      &:hover,
      &.router-link-exact-active {
        span {
          &:after {
            content: '';
          }
        }
      }
    }
    > select {
      opacity: 0;
    }
  }
}
/* header SP */
@media screen and (max-width: $headerViewport - 1) {
  .header {
    height: 50px;
    padding: 6px 10px;
    position: fixed;
    top: 0;
    width: 100%;
    min-width: 320px;
    background-color: #fff;
    box-sizing: border-box;
    z-index: 2;
    pointer-events: auto;
  }
  .logo {
    margin-top: 6px;
    margin-left: 5px;
    position: relative;
    z-index: 3;
    html.is_gmenuView & {
      opacity: 0;
    }
  }
  .logo_type {
    display: inline-block;
    position: relative;
    z-index: 3;
    color: #333;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 1px;
    vertical-align: bottom;
    margin-left: 10px;
    margin-bottom: 2px;
  }
  .menu {
    position: absolute;
    top: 46px;
    left: 0;
    z-index: 1;
    background-color: #fff;
    width: 100%;
    overflow: hidden;
    max-height: calc(100vh - 50px);
  }
  .gnav {
    text-align: center;
    margin-bottom: 20px;
  }
  .gnav_item {
    font-weight: bold;
  }
  .gnav_item a {
    display: block;
    padding: 10px;
    color: #000;
  }
  .menuBtn,
  .menuBtn span {
    display: inline-block;
    position: relative;
    z-index: 1000;
    transition: all 0.4s;
    box-sizing: border-box;
  }
  .menuBtn {
    padding: 10px;
    position: absolute;
    top: 7px;
    right: 8px;
    width: 40px;
    height: 38px;
    span {
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #000;
      &:nth-of-type(1) {
        top: 13px;
        left: 10px;
        animation: menu-bar01 0.5s forwards;
        width: 20px;
      }
      &:nth-of-type(2) {
        top: 18px;
        left: 10px;
        transition: all 0.25s 0.25s;
        opacity: 1;
        width: 20px;
      }
      &:nth-of-type(3) {
        top: 23px;
        left: 10px;
        animation: menu-bar02 0.5s forwards;
        width: 20px;
      }
    }
    &.is_active {
      span {
        &:nth-of-type(1) {
          animation: active-menu-bar01 0.5s forwards;
        }
        &:nth-of-type(2) {
          opacity: 0;
        }
        &:nth-of-type(3) {
          animation: active-menu-bar03 0.5s forwards;
        }
      }
    }
  }
  .menuCloseBtn {
    text-align: center;
    display: block;
    padding: 10px;
    margin-top: 30px;
  }
  .shadow {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1;
    pointer-events: auto;
  }
}
</style>
