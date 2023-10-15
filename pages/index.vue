<template>
  <!-- LazyをPrefixにつけることで遅延読み込みになる -->
  <LazyTopMainVisual />
  <!-- https://github.com/scalamatsuri/2024.scalamatsuri.org/issues/1: Newsコンポーネントにてブログの内容が取得できないため修正する -->
  <!-- <TopNews /> -->
  <TopEvents />
  <TopCodeOfConduct />
</template>
