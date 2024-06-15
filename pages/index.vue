<template>
  <!-- LazyをPrefixにつけることで遅延読み込みになる -->
  <LazyTopMainVisual />
  <ClientOnly fallback-tag="span" fallback="Loading comments...">
    <TopNews />
  </ClientOnly>
  <TopThankYou />
  <TopBanners />
  <TopEvents />
  <TopSponsors />
  <TopCodeOfConduct />
</template>
