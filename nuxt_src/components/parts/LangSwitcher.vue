<template>
  <li class="gnav_item">
    <div class="selectArea">
      <select id="" name="" class="js-select selectArea_select">
        <option v-for="locale in availableLocales" :key="locale.name" value="日本語">
          {{ locale.name }}
        </option>
      </select>
      <div
        class="selectArea_label"
        :class="{ active: active }"
        @click="onClickSelectedLocaleLink"
      >
        {{ selectedLocaleName }}
      </div>
      <ul v-if="active" class="selectArea_list js-selectArea_list">
        <li
          v-for="locale in availableLocales"
          :key="locale.name"
          class="selectArea_list_item"
          rel="locale.code"
          @click="onClickedLocaleLink(switchLocalePath(locale.code))"
        >
          {{ locale.name }}
        </li>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  name: 'LangSwitcher',
  data() {
    return {
      active: false
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
    },
    selectedLocaleName() {
      return this.$i18n.locales.filter(locale => locale.code === this.$i18n.locale)[0].name
    }
  },
  methods: {
    onClickedLocaleLink(url) {
      this.active = false
      this.$router.push(url)
    },

    onClickSelectedLocaleLink() {
      this.active = !this.active
    }
  }
}
</script>
