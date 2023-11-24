<i18n lang="yaml">
</i18n>

<template>
  <MainVisual title="スポンサー募集" />

  <SponsorshipForm :application_form="application_form" :pdf_filepath="pdf_filepath" :is_sponsorship_expired="sponsorship_expired" />
  <SponsorshipRecruit :recruits="recruits" />
  <SponsorshipPlanTable :plans="plans" />
  <SponsorshipPlanAddon :title="virtual_booth_title" :contents="virtual_booth_contents" />
  <SponsorshipPlanAddon :title="satellite_sponsor_title" :contents="satellite_sponsor_contents" />
  <SponsorshipForm :application_form="application_form" :pdf_filepath="pdf_filepath" :is_sponsorship_expired="sponsorship_expired" />
  <SponsorshipInquiry :inquiry_form="inquiry_form" :pdf_filepath="pdf_filepath" />

</template>

<script setup lang="ts">
const { t } = useI18n()
publichedCheck()


const sponsorship_expired = false
const sponsorship_expired_date = "2023/4/4"
const pdf_filepath = "/pdf/sponsership.pdf"
const application_form = "https://forms.gle/AVWpqNB3xyWWwx5T8"
const inquiry_form = "https://docs.google.com/forms/d/e/1FAIpQLSftjA6961ZzzJjqq1CrWtAN9wwrqXRUGFqZI5G8x2BjmZHeWw/viewform"

const recruits: Array<Recruit> = [
  {
    image: "https://avatars.githubusercontent.com/u/3018584",
    url: "https://blog.scalamatsuri.org/entry/2017/10/30/150859",
    title: "株式会社FLINTERSさまへ転職された 河内崇さん（@kawachi）",
  },
  {
    image: "https://avatars.githubusercontent.com/u/3018584",
    url: "https://blog.scalamatsuri.org/entry/2022/03/01/093656",
    title: "株式会社アットウェアさまへ転職された オヤマさん",
  },
  {
    image: "https://avatars.githubusercontent.com/u/3018584",
    url: "https://blog.scalamatsuri.org/entry/2020/05/01/155020",
    title: "アルプ株式会社さまへ転職された オミさん(@omiend)",
  },
]

  const virtual_booth_title = "バーチャルブース"
  const virtual_booth_contents: Array<PlanAddon> = [
    {
      name: "金額",
      value: "¥150,000"
    },
    {
      name: "Discordチャンネル数",
      value: "最大5つまで"
    }
  ]

  const satellite_sponsor_title = "さてらいとスポンサー"
  const satellite_sponsor_contents: Array<PlanAddon> = [
    {
      name: "金額",
      value: "¥250,000"
    }
  ]

const plans: Array<Plan> = [
  {
    name: "将軍",
    name_kana: "ショーグン",
    color: "color_shogun",
    price: "¥1,000,000",
    web_logo_view_html: "◎<br />ファーストビュー",
    web_advertisement: "○",
    slide_opening_html: "ロゴ掲載・<br />読み上げ",
    slide_cm: "スライド掲載",
    sponser_session: "○",
    read_sponser: "○",
    virtual_booth: "別売",
    satellite_sponsor: "別売",
  },
  {
    name: "大名",
    name_kana: "ダイミョー",
    color: "color_daimyo",
    price: "¥250,000",
    web_logo_view_html: "○",
    web_advertisement: "○",
    slide_opening_html: "ロゴ掲載",
    slide_cm: "ロゴ＋文言掲載",
    sponser_session: "─",
    read_sponser: "─",
    virtual_booth: "別売",
    satellite_sponsor: "別売",
  },
  {
    name: "侍",
    name_kana: "サムライ",
    color: "color_samurai",
    price: "¥100,000",
    web_logo_view_html: "○",
    web_advertisement: "─",
    slide_opening_html: "─",
    slide_cm: "─",
    sponser_session: "─",
    read_sponser: "─",
    virtual_booth: "別売",
    satellite_sponsor: "─",
  },
  {
    name: "印籠",
    name_kana: "インロウ",
    color: "color_inro",
    price: "¥25,000",
    web_logo_view_html: "○<br />アイコン",
    web_advertisement: "─",
    slide_opening_html: "─",
    slide_cm: "─",
    sponser_session: "─",
    read_sponser: "─",
    virtual_booth: "─",
    satellite_sponsor: "─",
  },
]

//meta: [{ name: "og:title", content: "スポンサー募集 | ScalaMatsuri 2023" }],

</script>

<style lang="scss" scoped>
.notification {
  text-align: center;
  font-size: 20px;
  width: 100%;
  padding: 100px 20px 0.1em;

  & > strong {
    border-bottom: 2px solid #eba808;
    padding-bottom: 0.1em;
  }
}

@media screen and (min-width: $viewport) {
  .section {
    max-width: 1200px;
    width: calc(100% - 40px);
  }

}
</style>

