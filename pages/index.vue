<template>
  <!-- LazyをPrefixにつけることで遅延読み込みになる -->
  <LazyTopMainVisual />
  <ClientOnly fallback-tag="span" fallback="Loading comments...">
    <TopNews />
  </ClientOnly>
  <TopBanners />
  <TopEvents />
  <TopSponsors />
  <TopCodeOfConduct />
</template>
