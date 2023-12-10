/***********************************************************
 *** Speaker Model
 ***********************************************************/
export type Speaker = {
  id: string // スピーカーID(一意となるように設定する)
  name: string // 名前(本名を入力するのはNG)
  iconUrl: string // アイコン画像のURL(Twitterのアイコン画像URLなど)
  organization?: string // [任意] 所属組織
  speaker_experience?: string[] // [任意] 経験一覧
  contributes?: string[] // [任意] contribution 一覧
  github?: string // [任意] GitHub の URL
  twitter?: string // [任意] X(旧Twitter) の URL
}

/***********************************************************
 *** Sponsor Model
 ***********************************************************/
export type SporsorType = 'SHOGUN' | 'TAIROU' | 'DAIMYO' | 'SAMURAI' | 'NINJA' | 'UTAGE' | 'BUGYO'

export type Sponsor = {
  id: string // スポンサーID
  type: SporsorType
  en: {
    name: string // スポンサー英語名
  }
  ja: {
    name: string // スポンサー日本名
  }
  logo: string // スポンサーのロゴ
  url: string // スポンサーのWEBサイト
  textHtml?: string // スポンサーの紹介文
  slideHtml?: string // スポンサーのスライド
}

/***********************************************************
 *** Session Model
 ***********************************************************/
export type Talk = {
  title: string
  description: string
}

export type Session = {
  speakerIds: string[] // スピーカーIds
  language: string // ja or en
  length: number // セッションの長さ
  en: Talk // 英語の場合のタイトルと概要
  ja: Talk // 日本語の場合のタイトルと概要
  tags?: string[] // タグ
  keywords?: string[] // キーワード
}

export type SessionId = {
  value: string
  type: 'session' | 'sponsor' | 'omc'
}

export type Speakers = {
  speakers: Speaker[]
}

// Proposal(セッションの応募情報)
export type Proposal = {
  id: SessionId // セッションID
} & Session &
  Speakers

export type AdoptedSession = {
  id: string
  sessionId: SessionId // 採択された SponsorSession.id か Session.id を紐付ける
  startAt: string // JST
  endAt?: string // JST
  room: string
  youtubeUrl?: string
  slideUrl?: string
}

export type SponsorSession = {
  sponsorId: SessionId // スポンサーセッションID
} & Session &
  Speakers
