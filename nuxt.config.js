module.exports = {
  target: "static",
  srcDir: "nuxt_src/",

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  head: {
    meta: [{ "http-equiv": "x-dns-prefetch-control", content: "on" }],
    link: [
      { rel: "dns-prefetch", href: "//maps.googleapis.com" },
      { rel: "dns-prefetch", href: "//maps.gstatic.com" },
      { rel: "dns-prefetch", href: "//fonts.googleapis.com" },
      { rel: "dns-prefetch", href: "//connect.facebook.net" },
      { rel: "dns-prefetch", href: "//platform.twitter.com" },
      { rel: "dns-prefetch", href: "//b.st-hatena.com" },
      { rel: "dns-prefetch", href: "//blog.scalamatsuri.org" },
    ],
  },
  /** Global CSS */
  css: ["~/assets/vendor/sanitize.css/sanitize.css", "~/assets/scss/style.scss", "@fortawesome/fontawesome-svg-core/styles.css"],
  plugins: [
    { src: "~/plugins/vue2-google-maps", ssr: false },
    { src: "~/plugins/lazyload", ssr: false },
    { src: "~/plugins/firebase", ssr: false },
    { src: "~/plugins/scalaMatsuriCommon", ssr: false },
    { src: "~/plugins/toast", ssr: false },
    { src: "~/plugins/constants" },
    { src: "~/plugins/fontawesome.js" },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxt/typescript-build", "@aceforth/nuxt-optimized-images"],
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/sentry",
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-51559416-6",
      },
    ],
    [
      "@nuxtjs/i18n",
      {
        baseUrl: "http://scalamatsuri.org",
        locales: [
          {
            code: "ja",
            iso: "ja_JP",
            name: "日本語",
          },
          {
            code: "en",
            iso: "en_US",
            name: "English",
          },
        ],
        strategy: "prefix",
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: "scalamatsuri_i18n_redirected",
          alwaysRedirect: false,
        },
        rootRedirect: "en",
        vueI18nLoader: true,
        vueI18n: {
          fallbackLocale: "en",
        },
        rules: [
          {
            resourceQuery: /blockType=i18n/,
            type: "javascript/auto",
            options: { asStream: true },
            loader: "@intlify/vue-i18n-loader",
          },
        ],
      },
    ],
    [
      "nuxt-mq",
      {
        defaultBreakpoint: "default",
        breakpoints: {
          sm: 600,
          lg: Infinity,
        },
      },
    ],
  ],
  axios: {},
  sentry: {
    dsn: "https://0dc25f3d199249d7a209f4fd48cdc9a6@sentry.io/2211949",
    config: {},
  },
  /*
   ** Build configuration
   */
  build: {},
  optimizedImages: {
    optimizeImages: true,
  },
  generate: {
    fallback: "404.html",
  },
  render: {
    resourceHints: false,
    compressor: {
      threshold: 0,
      level: 9,
    },
  },
}
