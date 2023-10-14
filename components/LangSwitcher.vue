<template>
  <li class="gnav_item">
    <div class="selectArea">
      <select id="" name="" class="js-select selectArea_select">
        <option v-for="locale in _locales" :key="locale.name" value="日本語">
          {{ locale.name }}
        </option>
      </select>
      <div class="selectArea_label" :class="{ active: _active }" @click="onClickSelectedLocaleLink">
        {{ selectedLocaleName }}
      </div>
      <ul class="selectArea_list js-selectArea_list">
        <li
          v-if="_active"
          v-for="locale in _locales"
          :key="locale.name"
          class="selectArea_list_item"
          rel="locale.code"
          @click="onClickedLocaleLink(switchLocalePath(locale.code))">
          {{ locale.name }}
        </li>
      </ul>
    </div>
  </li>
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
const selectedLocaleName = computed(() => _locales.value.filter((l) => l.code === locale.value)[0].name)
const router = useRouter()
const _active = ref(false)
const onClickedLocaleLink = (url: string) => {
  _active.value = !_active.value
  router.push(url)
}
const onClickSelectedLocaleLink = () => (_active.value = !_active.value)
</script>

<style scoped lang="scss">
.selectArea_select {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.selectArea {
  position: relative;
  border-left: 2px solid #eee;
  padding-left: 26px;
}
.selectArea_label {
  position: absolute;
  cursor: pointer;
  position: relative;
  padding-left: 28px;
  padding-right: 18px;
  font-size: 14px;
  line-height: 22px;
  &:hover {
    opacity: 0.3;
  }
  &:before {
    content: '';
    background-image: url('~assets/img/common/icon-lang.svg');
    width: 20px;
    height: 20px;
    background-size: 20px 20px;
    display: block;
    position: absolute;
    left: 0;
    top: 2px;
  }
  &:after {
    content: '';
    background-image: url('~assets/img/common/arrow-bottom.svg');
    width: 10px;
    height: 6px;
    background-size: 10px 6px;
    display: block;
    position: absolute;
    right: 0;
    top: 9px;
  }
}
.selectArea_list {
  position: absolute;
  top: 30px;
  left: 20px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;
  cursor: pointer;
}
.selectArea_list_item {
  padding: 11px 20px;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #eee;
  }
}
</style>
