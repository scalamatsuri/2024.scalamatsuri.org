export default defineNuxtConfig({
  // SEO目的でCSRではなくSSG相当とするため、ssr=trueとすることでnext generateで各種ページを生成させる
  ssr: true,
  nitro: {
    prerender: {
      // @nuxtjs/i18n を入れている影響でnuxt generateのroot page生成が500となるためfalseを指定
      // 本番環境ではfirebase hosting側で301としているため該当ページは不要
      failOnError: false,
    },
  },
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
        compilation: {
          // ロケールメッセージ内のHTMLタグを許容
          strictMessage: false,
        },
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
  devtools: {
    // 有効にするとエラーが出てしまうが、どの設定で切り分けを行ったら良いかわからなかった
    // 内容は以下の通り
    // [plugin:vite-plugin-vue-inspector] Unquoted attribute value cannot contain U+0022 ("), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).
    enabled: false,
  },
})
