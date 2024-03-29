---
name: スポンサーロゴWeb掲載 Issue
about: Webにスポンサーのロゴを掲載するIssue
title: Webロゴ掲載（さま）
labels: sponsor
assignees: shomatan
---

## やること

- [ ] リポジトリにロゴを入れる
  - ロゴ画像:
- [ ] `data/sponsors.json` を変更する
- [ ] master branch に向けて PullRequest を送る
- [ ] staging 環境で表示を確認する
- [ ] master から production に向けて自動で PullRequest が作成されるのでマージ
- [ ] merge 後、production 環境の Web サイトに反映されていることを確認する
- [ ] speakerdeck のスライドが指定された場合、URL のみ切り取って `"speakerdeckUrl": ""` に指定する。
  - 2024 年 2 月: 現在 slideHtml が機能しておらず、iframe 内部が空で表示されてしまう模様。
  - 2024 年 2 月: speakerdeck 以外の URL を指定された場合は別途 WEB サイトチームにご相談ください。

## Template

### 将軍

```
  {
    "id": "SHOGUN_1",
    "type": "SHOGUN",
    "ja": {
      "name": "将軍スポンサー1"
    },
    "en": {
      "name": "Syogun Sponsor1"
    },
    "logo": "/img/sponsors/scalamatsuri_logo.png",
    "url": "",
    "textHtml": "<p>将軍スポンサー1です。</p>",
    "slideHtml": "",
    "speakerdeckUrl": ""
  },
```

### 大老

```
  {
    "id": "TAIROU_1",
    "type": "TAIROU",
    "ja": {
      "name": "大老スポンサー1"
    },
    "en": {
      "name": "Tairou Sponsro1"
    },
    "logo": "/img/sponsors/scalamatsuri_logo.png",
    "url": "",
    "textHtml": "<p>大老スポンサー1です。</p>",
    "slideHtml": "",
    "speakerdeckUrl": ""
  },
```

### 大名

```
  {
    "id": "DAIMYO_1",
    "type": "DAIMYO",
    "ja": {
      "name": "大名スポンサー1"
    },
    "en": {
      "name": "Daimyo Sponsor1"
    },
    "logo": "/img/sponsors/scalamatsuri_logo.png",
    "url": "",
    "textHtml": "<p>大名スポンサー1です。</p>",
    "slideHtml": "",
    "speakerdeckUrl": ""
  },
```

### 侍

```
  {
    "id": "SAMURAI_1",
    "type": "SAMURAI",
    "ja": {
      "name": "侍スポンサー1"
    },
    "en": {
      "name": "Samurai Sponsor1"
    },
    "logo": "/img/sponsors/scalamatsuri_logo.png",
    "url": "",
    "textHtml": "<p>侍スポンサー1です。</p>",
    "slideHtml": "",
    "speakerdeckUrl": ""
  },
```

### 宴

```
  {
    "id": "UTAGE_1",
    "type": "UTAGE",
    "ja": {
      "name": "宴スポンサー1"
    },
    "en": {
      "name": "Utage Sponsor1"
    },
    "logo": "/img/sponsors/scalamatsuri_logo.png",
    "url": "",
    "textHtml": "<p>ScalaMatsuri宴スポンサー01です。</p>",
    "slideHtml": ">"
  },
```
