export default defineNuxtConfig({
  ssr: true,
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
  nitro: {
    prerender: {
      /**
       * FIXME: deploy 用に yarn generate すると、以下のエラーが出てしまう。
       *
       * ```
       * ├─ / (63ms)
       * │ └── Error: [500]
       * ```
       *
       * ScalaMatsuri のサイトは /en, /ja というルートがあり、generate 結果も
       *
       * ```
       * dist/
       * ├─ /en
       * | |____index.html
       * |__/ja
       * | |____index.html
       * ```
       *
       * と生成されるが、設定が足りないためか `/` に対する index.html の出力がされずに、エラーとなる模様。
       *
       * `/` アクセス時は `/en` `/ja` にリダイレクトされるため、`/index.html` は存在しなくても問題ないため、エラーとなっても処理を最後まで実行する `failOnError: false` を設定している。
       */
      failOnError: false,
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
