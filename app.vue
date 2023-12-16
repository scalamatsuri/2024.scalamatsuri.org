<i18n lang="yaml">
en:
  defaultSiteName: 'ScalaMatsuri {year}'
  defaultSiteSubTitle: 'The largest international Scala conference in Asia'
  defaultDescription: 'The largest international Scala conference in Asia.'
  defaultUrl: 'https://scalamatsuri.org/'
  opengraphUri: 'https://scalamatsuri.org/img/favicons/ogp.png'
  twitterAccountId: "'scala_jp'"
ja:
  defaultSiteName: 'ScalaMatsuri {year}'
  defaultSiteSubTitle: 'アジア最大級の Scala のカンファレンス'
  defaultDescription: 'Scala をテーマにアジア最大級のカンファレンスが開催されます。'
  defaultUrl: 'https://scalamatsuri.org/'
  opengraphUri: 'https://scalamatsuri.org/img/favicons/ogp.png'
  twitterAccountId: "'scala_jp'"
</i18n>

<template>
  <div>
    <TheHeader />
    <NuxtPage />
    <LazySnsFooter />
    <LazySnsFlow />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { year } = useAppConfig()
const title = `ScalaMatsuri ${year}`
const snsFooterHasShown = ref(false)
useHead({
  title: t('defaultSiteName', { year: year }),
  titleTemplate: `%s | ${t('defaultSiteSubTitle')}`,
  meta: [
    { charset: 'UTF-8' },
    { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: `${t('defaultSiteName', { year: year })} | ${t('defaultSiteSubTitle')}` },
    { name: 'keywords', content: `Scala,スカラ,カンファレンス,ScalaMatsuri,${year}` },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'ja_JP' },
    { property: 'og:url', content: t('defaultUrl') },
    { property: 'og:title', content: `${t('defaultSiteName', { year: year })} | ${t('defaultSiteSubTitle')}` },
    { property: 'og:site_name', content: t('defaultSiteName', { year: year }) },
    { property: 'og:description', content: `${t('defaultDescription')}` },
    { property: 'og:image', content: t('opengraphUri') },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: t('twitterAccountId') },
    { name: 'twitter:creator', content: t('twitterAccountId') },
    { name: 'twitter:url', content: 'https://twitter.com/scala_jp' },
    { name: 'twitter:title', content: `${t('defaultSiteName', { year: year })} | ${t('defaultSiteSubTitle')}` },
    { name: 'twitter:description', content: t('defaultDescription') },
    { name: 'twitter:image', content: t('opengraphUri') },
    { name: 'og:image:secure_url', content: t('opengraphUri'), hid: 'og:image:secure_url' },
    { name: 'application-name', content: title },
    { name: 'apple-mobile-web-app-title', content: title },
    { name: 'theme-color', content: '#2d88ef' },
    { name: 'msapplication-TileColor', content: '#2d88ef' },
    { name: 'msapplication-TileImage', content: '/img/favicons/mstile-144x144.png' },
    { name: 'google-site-verification', content: 'HliqkO_EksFAabDeL9H8LT1_F3sqTf3x7-aL9JIHaK4' },
    { 'http-equiv': 'x-dns-prefetch-control', content: 'on' },
  ],
  link: [
    { rel: 'dns-prefetch', href: '//maps.googleapis.com' },
    { rel: 'dns-prefetch', href: '//maps.gstatic.com' },
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//connect.facebook.net' },
    { rel: 'dns-prefetch', href: '//platform.twitter.com' },
    { rel: 'dns-prefetch', href: '//b.st-hatena.com' },
    { rel: 'dns-prefetch', href: '//blog.scalamatsuri.org' },
    { rel: 'icon', type: 'image/x-icon', href: '/img/favicons/favicon.ico' },
    { rel: 'shortcut icon', type: 'image/vnd.microsoft.icon', href: '/img/favicons/favicon.ico' },
    { rel: 'icon', type: 'image/vnd.microsoft.icon', href: '/img/favicons/favicon.ico' },
    { rel: 'icon', type: 'image/png', href: '/img/favicons/android-chrome-192x192.png', sizes: '192x192' },
    { rel: 'icon', type: 'image/png', href: '/img/favicons/favicon-16x16.png', sizes: '16x16' },
    { rel: 'icon', type: 'image/png', href: '/img/favicons/favicon-32x32.png', sizes: '32x32' },
    { rel: 'icon', type: 'image/png', href: '/img/favicons/favicon-48x48.png', sizes: '48x48' },
    { rel: 'icon', type: 'image/png', href: '/img/favicons/favicon-96x96.png', sizes: '96x96' },
    { rel: 'apple-touch-icon', href: '/img/favicons/apple-touch-icon-57x57.png', sizes: '57x57' },
    { rel: 'apple-touch-icon', href: '/img/favicons/apple-touch-icon-60x60.png', sizes: '60x60' },
    { rel: 'apple-touch-icon', href: '/img/favicons/apple-touch-icon-72x72.png', sizes: '72x72' },
    { rel: 'apple-touch-icon', href: '/img/favicons/apple-touch-icon-76x76.png', sizes: '76x76' },
    { rel: 'apple-touch-icon', href: '/img/favicons/apple-touch-icon-114x114.png', sizes: '114x114' },
    { rel: 'apple-touch-icon', href: '/img/favicons/apple-touch-icon-120x120.png', sizes: '120x120' },
    { rel: 'apple-touch-icon', href: '/img/favicons/apple-touch-icon-144x144.png', sizes: '144x144' },
    { rel: 'apple-touch-icon', href: '/img/favicons/apple-touch-icon-152x152.png', sizes: '152x152' },
    { rel: 'apple-touch-icon', href: '/img/favicons/apple-touch-icon-180x180.png', sizes: '180x180' },
    { rel: 'manifest', href: '/img/favicons/manifest.json' },
  ],
})
</script>
