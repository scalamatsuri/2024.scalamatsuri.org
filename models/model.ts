/***********************************************************
 *** Speaker Model
 ***********************************************************/
export type Speaker = {
  id: string // スピーカーID(一意となるように設定する)
  en: {
    name: string // 名前(本名を入力するのはNG)
  }
  ja: {
    name: string // 名前(本名を入力するのはNG)
  }
  iconUrl: string // アイコン画像のURL(Twitterのアイコン画像URLなど)
  contributes: string[] // [任意] contribution 一覧
  github?: string // [任意] GitHub の URL
  twitter?: string // [任意] X(旧Twitter) の URL
  otherSnsUrls: string[] // [任意] その他の URL
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
  speakerdeckUrl?: string // speakerdeck の URL
  youtubeIFrame1?: string // speakerdeck の URL
  youtubeIFrame2?: string // speakerdeck の URL
}

/***********************************************************
 *** Session Model
 ***********************************************************/
export type Detail = {
  title: string
  description: string
}

export type Proposal = {
  proposalId: ProposalId // プロポーザルID
  en: Detail // 英語の場合のタイトルと概要
  ja: Detail // 日本語の場合のタイトルと概要
  language: string // ja or en
  length: number // セッションの長さ
  keywords?: string[] // キーワード
  speakerIds: string[] // スピーカーIds
  youtubeUrl?: string
  slideUrl?: string
}

export type ProposalId = {
  value: string
}

export type SessionId = {
  value: string
  type: 'SESSION' | 'SPONSOR' | 'OMC'
}

export type Speakers = {
  speakers: Speaker[]
}

// Proposal(セッションの応募情報)
export type ProposalWithSpeakers = Proposal & Speakers

// 採択を意味するモデル
export type Adoption = {
  sessionId: SessionId
  proposalId: ProposalId
  room: string
}

// プロポーザルとスピーカーの組み合わせに対して、採択されたデータを紐づけたものがセッションとなる
export type Session = Adoption & {
  proposalWithSpeakers: ProposalWithSpeakers
  timetable?: TimeTableSessionContents
}

export type TimeTableContents = {
  type: 'EVENT' | 'SESSION'
  startAt: string // JST
  endAt?: string // JST
}

export type TimeTableEvent = {
  eventId: string
  name: {
    en: string
    ja: string
  }
}

export type TimeTableSessionContents = TimeTableContents & {
  sessionId: string
}

export type TimeTableEventContents = TimeTableContents & {
  eventId: string
}

export type TimeTable = {
  date: string
  timetableId: string
  title: {
    en: string
    ja: string
  }
  contents: Array<TimeTableSessionContents | TimeTableEventContents>
}

/***********************************************************
 *** Staff Model
 ***********************************************************/
export type StaffRole = 'CHAIRMAN' | 'STAFF' | 'EXTRA_STAFF'
export type Staff = {
  backgroundImage: string
  name: string
  ruby: string
  ghAccount: string
  githubUrl: string
  twAccount: string
  twitterUrl: string
  profile: string
  role: StaffRole
}
