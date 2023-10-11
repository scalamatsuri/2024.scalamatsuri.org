<i18n lang="yaml">
en:
  add_hatena_bookmark: "Add this entry to Hatena bookmark"
  facebook_locale: "en_US"
  facebook_button_width: "82.8"
ja:
  add_hatena_bookmark: "このエントリーをはてなブックマークに追加"
  facebook_locale: "ja_JP"
  facebook_button_width: "84.8"
</i18n>

<template>
  <section class="sns">
    <a class="twitter-share-button sns_item" href="https://twitter.com/intent/tweet">Tweet</a>
    <iframe
      :src="`https://www.facebook.com/plugins/share_button.php?locale=${$t(
        'facebook_locale'
      )}&href=https%3A%2F%2Fscalamatsuri.org%2F&width=97&layout=button_count&action=like&size=small&show_faces=true&share=false&height=21&appId`"
      :width="$t('facebook_button_width')"
      height="20"
      style="border: none; overflow: hidden"
      scrolling="no"
      frameborder="0"
      allowTransparency="true"
      allow="encrypted-media"
    />
    <a
      href="http://b.hatena.ne.jp/entry/"
      class="hatena-bookmark-button sns_item"
      data-hatena-bookmark-layout="touch"
      data-hatena-bookmark-width="20"
      data-hatena-bookmark-height="20"
      :title="$t('add_hatena_bookmark')"
      ><img
        src="https://b.st-hatena.com/images/entry-button/button-only.png"
        :alt="$t('add_hatena_bookmark')"
        width="20"
        height="20"
        style="border: none"
    /></a>
    <script type="text/javascript" src="https://platform.twitter.com/widgets.js" defer />
    <script type="text/javascript" src="https://b.st-hatena.com/js/bookmark_button.js" charset="utf-8" defer />
  </section>
</template>
