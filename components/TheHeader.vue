<i18n lang="yaml">
en:
  code-of-conduct: Code of Conduct
  call-for-proposals: Call for Proposals
  proposals: Proposals
  programs: Programss
  open-mic-conference: Open Mic Conference
  sponsorship: SponsorShip(ja)
  sponsors: Sponsors(ja)
  cm: CM
  ticket: Ticket
  staff: Staff
  extra-staff: Extra Staffs(ja)
ja:
  code-of-conduct: 行動規範
  call-for-proposals: セッション募集
  proposals: セッション候補
  programs: プログラム
  open-mic-conference: 飛び入りカンファレンス
  sponsorship: スポンサー募集
  sponsors: スポンサー
  cm: CM
  ticket: チケット
  staff: スタッフ
  extra-staff: スタッフ募集
</i18n>

<template>
  <nav>
    <ul>
      <li>
        <NuxtLink :to="localePath('/')">TOP</NuxtLink>
      </li>
      <li v-for="_header in _headers" :key="_header.order">
        <NuxtLink :to="localePath(_header.path)">{{ t(_header.path) }}</NuxtLink>
      </li>
      <li>
        <ul>
          <li v-for="l in _locales" :key="l.code" @click="onClickedLocaleLink(switchLocalePath(l.code))">
            {{ l.name }}
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables'

const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const appConfig = useAppConfig()
const _headers = appConfig.pages.filter((h) => h.published && h.header).sort((h1, h2) => h1.order - h2.order)

const router = useRouter()
const onClickedLocaleLink = (url: string) => {
  router.push(url)
}

const { locales, t } = useI18n()
const _locales = computed<{ code: string; name: string }[]>(() =>
  locales.value.map((locale: LocaleObject | string) => {
    if (typeof locale === 'string') {
      return {
        code: locale,
        name: locale,
      }
    } else {
      return {
        code: locale.code,
        name: locale.name ?? '',
      }
    }
  })
)
</script>
