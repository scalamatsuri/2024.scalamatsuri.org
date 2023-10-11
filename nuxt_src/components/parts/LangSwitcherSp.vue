<template>
  <ul class="choose_langage">
    <li
      v-for="locale in availableLocales"
      :key="locale.name"
      class="langage_item active"
      @click="$emit('on-option-click')"
    >
      <nuxt-link :to="switchLocalePath(locale.code)">
        {{ locale.name }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'LangSwitcherSp',
  data() {
    return {
      active: false
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
    }
  },
  methods: {
    onClickedLocaleLink(url) {
      this.active = false
      this.$router.push(url)
    }
  }
}
</script>
