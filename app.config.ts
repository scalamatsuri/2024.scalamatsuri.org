const year = '2024'
const scalaMatsuri = 'ScalaMatsuri 2024'

export default defineAppConfig({
  year: year,
  scalaMatsuri: scalaMatsuri,
  // NOTE: ヘッダーを定義しています。非公開にする場合は published: false にしてください
  // published を true に変更してもページが作成されない(ヘッダーから遷移できないなど)場合は、 ./.nuxtignore を確認してください
  pages: [
    { path: '/', title: { en: scalaMatsuri, ja: scalaMatsuri }, published: true, header: false, order: 0 },
    { path: 'code-of-conduct', title: { en: 'Code of Conduct', ja: '行動規範' }, published: true, header: true, order: 1 },
    {
      path: 'call-for-proposals',
      title: { en: 'Submit your talks for ScalaMatsuri 2024!', ja: 'ScalaMatsuriで話を聞かせてください！' },
      published: false,
      header: false,
      order: 20,
    },
    { path: 'proposals', title: { en: 'Proposals', ja: '応募セッション一覧' }, published: true, header: true, order: 21 },
    { path: 'programs', title: { en: 'Programs', ja: 'セッション一覧' }, published: true, header: true, order: 22 },
    { path: 'open-mic-conference', title: { en: 'Open Mic Conference', ja: '飛び入りカンファレンス' }, published: false, header: true, order: 23 },
    { path: 'sponsorship', title: { en: 'Sponsor Ship(ja)', ja: 'スポンサー募集' }, published: true, header: true, order: 30 },
    { path: 'sponsors', title: { en: 'Sponsors', ja: 'スポンサー一覧' }, published: true, header: true, order: 31 },
    { path: 'cm', title: { en: 'CM', ja: 'CM' }, published: false, header: true, order: 32 },
    { path: 'ticket', title: { en: 'Ticket', ja: 'チケット' }, published: false, header: false, order: 90 },
    { path: 'travel', title: { en: 'Travel', ja: 'トラベル情報' }, published: true, header: true, order: 91 },
    { path: 'staff', title: { en: 'Staffs', ja: 'スタッフ一覧' }, published: true, header: true, order: 100 },
    { path: 'extra-staff', title: { en: 'Extra Staffs(ja)', ja: '当日スタッフ募集' }, published: false, header: false, order: 101 },
  ],
})
