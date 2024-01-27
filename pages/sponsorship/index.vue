<i18n lang="yaml">
en:
  title: スポンサー募集
ja:
  title: スポンサー募集
</i18n>

<template>
  <MainVisual title="スポンサー募集" />

  <SponsorshipForm :application_form="application_form" :pdf_filepath="pdf_filepath" :is_sponsorship_expired="sponsorship_expired" />
  <SponsorshipRecruit :recruits="recruits" />
  <SponsorshipPlanTable :plans="plans" />
  <SponsorshipPlanAddon :title="booth_title" :description="booth_description" :contents="booth_contents" />
  <SponsorshipPlanAddon :title="utage_sponsor_title" :description="utage_description" :contents="utage_sponsor_contents" />
  <SponsorshipForm :application_form="application_form" :pdf_filepath="pdf_filepath" :is_sponsorship_expired="sponsorship_expired" />
  <SponsorshipInquiry :inquiry_form="inquiry_form" :pdf_filepath="pdf_filepath" />
</template>

<script setup lang="ts">
const { t } = useI18n()
pageMetaCheck()

const sponsorship_expired = false
const pdf_filepath = '/pdf/sponsorship.pdf'
const application_form = 'https://docs.google.com/forms/d/e/1FAIpQLScKsUTWMWJRRtdI6M0YmMfLYIVhZCZvFS9hO77FWCEoj7OZgA/closedform'
const inquiry_form = 'https://docs.google.com/forms/d/e/1FAIpQLSftjA6961ZzzJjqq1CrWtAN9wwrqXRUGFqZI5G8x2BjmZHeWw/viewform'

const recruits: Array<Recruit> = [
  {
    image: '/img/sponsorship/img-recruit2.jpg',
    url: 'https://blog.scalamatsuri.org/entry/2017/10/30/150859',
    title: '株式会社FLINTERSさまへ転職された 河内崇さん（@kawachi）',
  },
  {
    image: '/img/sponsorship/img-recruit1.png',
    url: 'https://blog.scalamatsuri.org/entry/2022/03/01/093656',
    title: '株式会社アットウェアさまへ転職された オヤマさん',
  },
  {
    image: '/img/sponsorship/img-recruit3.jpg',
    url: 'https://blog.scalamatsuri.org/entry/2020/05/01/155020',
    title: 'アルプ株式会社さまへ転職された オミさん(@omiend)',
  },
]

const booth_title = '常設ブース'
const booth_description =
  '将軍・大老スポンサーには常設ブースが付帯します。その他のプランは常設ブースは別販売となります。<br>常設ブースには2名様分の招待枠が付きます。常設ブースの設営及び運営をされる方は招待枠を使用してご入場ください。なお、この招待枠は通常プランに付いて来るものと同じ扱いで、カンファレンスや懇親会にご参加頂けます。<br>また、将軍スポンサー10名様/大老スポンサー4名様の招待枠の中には、常設ブースの設営及び運営をされる方用として2名様分の招待枠が含まれております。'
const booth_contents: Array<PlanAddon> = [
  {
    name: '金額',
    value: '¥250,000',
  },
  {
    name: '上限枠数',
    value: '11枠(将軍5枠・大老2枠・別売4枠)',
  },
  {
    name: '招待枠',
    value: '2名様',
  },
]

const utage_sponsor_title = '宴スポンサー'
const utage_description = 'ScalaMatsuriの懇親会をスポンサードして頂くプランです。'
const utage_sponsor_contents: Array<PlanAddon> = [
  {
    name: '金額',
    value: '¥200,000',
  },
  {
    name: '上限枠数',
    value: '3枠',
  },
  {
    name: '特典',
    value: '・Webサイトロゴ掲載<br>・懇親会開始、終了時の貴社名読み上げ<br>・10分間のLT実施権',
  },
]

const plans: Array<Plan> = [
  {
    name: '将軍',
    name_kana: 'ショーグン',
    color: 'color_shogun',
    price: '¥1,300,000',
    maximum_number_sponsored: '5',
    shoutai_waku: '10名様',
    web_logo_view_html: '◎<br />ファーストビュー',
    web_advertisement: '○',
    distribute_novelty_number: '3点まで',
    logo_panel: 'A会場',
    logo_sousyoku: '◯',
    logo_eco_bag: '◯',
    opening_call: 'ロゴ掲載<br>読み上げ',
    slide_cm: '◎<br />(大)',
    sponser_session: '○',
    booth: '○',
    utage_sponsor: '別売',
  },
  {
    name: '大老',
    name_kana: 'タイロウ',
    color: 'color_tairou',
    price: '¥800,000',
    maximum_number_sponsored: '2',
    shoutai_waku: '4名様',
    web_logo_view_html: '○',
    web_advertisement: '○',
    distribute_novelty_number: '3点まで',
    logo_panel: 'B会場',
    logo_sousyoku: '―',
    logo_eco_bag: '―',
    opening_call: 'ロゴ掲載',
    slide_cm: '◎<br />(中)',
    sponser_session: '─',
    booth: '○',
    utage_sponsor: '別売',
  },
  {
    name: '大名',
    name_kana: 'ダイミョー',
    color: 'color_daimyo',
    price: '¥200,000',
    maximum_number_sponsored: '―',
    shoutai_waku: '2名様',
    web_logo_view_html: '○',
    web_advertisement: '○',
    distribute_novelty_number: '2点まで',
    logo_panel: '─',
    logo_sousyoku: '―',
    logo_eco_bag: '―',
    opening_call: 'ロゴ掲載',
    slide_cm: '◎<br />(小)',
    sponser_session: '─',
    booth: '別売',
    utage_sponsor: '別売',
  },
  {
    name: '侍',
    name_kana: 'サムライ',
    color: 'color_samurai',
    price: '¥80,000',
    maximum_number_sponsored: '―',
    shoutai_waku: '1名様',
    web_logo_view_html: '○',
    web_advertisement: '○',
    distribute_novelty_number: '1点まで',
    logo_panel: '─',
    logo_sousyoku: '―',
    logo_eco_bag: '―',
    opening_call: '─',
    slide_cm: '─',
    sponser_session: '─',
    booth: '別売',
    utage_sponsor: '別売',
  },
]
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
