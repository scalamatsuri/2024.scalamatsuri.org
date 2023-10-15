export default defineNuxtConfig({
  css: ['~/assets/vendor/sanitize.css/sanitize.css', '~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/_variables.scss";',
        },
      },
    },
  },
  modules: [
    'nuxt-lazy-load',
    [
      '@nuxtjs/i18n',
      {
        baseUrl: 'http://scalamatsuri.org',
        locales: [
          {
            code: 'ja',
            iso: 'ja_JP',
            name: '日本語',
          },
          {
            code: 'en',
            iso: 'en_US',
            name: 'English',
          },
        ],
        strategy: 'prefix',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'scalamatsuri_i18n_redirected',
          alwaysRedirect: false,
        },
        rootRedirect: 'en',
        vueI18nLoader: true,
        fallbackLocale: 'en',
        rules: [
          {
            resourceQuery: /blockType=i18n/,
            type: 'javascript/auto',
            options: { asStream: true },
            loader: '@intlify/vue-i18n-loader',
          },
        ],
      },
    ],
  ],
  devtools: { enabled: true },
})
