<template>
  <ul class="choose_langage">
    <li v-for="locale in _locales" :key="locale.name" class="langage_item active" @click="$emit('on-option-click')">
      <nuxt-link :to="switchLocalePath(locale.code)">
        {{ locale.name }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables'
const switchLocalePath = useSwitchLocalePath()
const { locale, locales, t } = useI18n()
const _locales = computed<{ code: string; name: string }[]>(() =>
  locales.value.map((locale: LocaleObject | string) =>
    typeof locale === 'string' ? { code: locale, name: locale } : { code: locale.code, name: locale.name ?? '' }
  )
)
// export default {
//   name: 'LangSwitcherSp',
//   data() {
//     return {
//       active: false
//     }
//   },
//   computed: {
//     availableLocales() {
//       return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
//     }
//   },
//   methods: {
//     onClickedLocaleLink(url) {
//       this.active = false
//       this.$router.push(url)
//     }
//   }
// }
</script>

<style scoped lang="scss">
.choose_langage {
  display: flex;
  justify-content: center;
  border-top: 1px solid #eee;
  margin-top: 20px;
  padding-top: 20px;
  font-size: 12px;
  font-weight: bold;
  > .langage_item {
    margin: 0 10px;
  }
  > .langage_item a {
    color: #999;
  }
  > .langage_item.active a {
    color: #bd3844;
  }
}
</style>
