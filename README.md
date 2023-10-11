# 2024.scalamatsuri.org

> 2024.scalamatsuri.org Nuxt.js project

[![Deploy to Firebase Hosting on production](https://github.com/scalamatsuri/2024.scalamatsuri.org/actions/workflows/production-firebase-hosting-merge.yml/badge.svg)](https://github.com/scalamatsuri/2024.scalamatsuri.org/actions/workflows/production-firebase-hosting-merge.yml)

## Build Setup

### Install nodenv

Currently this project Node.js version is managed via [`.node-version`](.node-version) (e.g. [nodenv](https://github.com/nodenv/nodenv) ).

If you use Mac and want to use nodenv,

```bash
$ brew install nodenv

$ nodenv init

$ nodenv install x.x.x #please refer to .node-version under this project

$ node -v #check the version is same as .node-verson .
```

Or you can also use nvm. nvm referes [.nvmrc](.nvmrc) file.

```bash
$ brew install nvm

$ nvm use

$ nvm ls #check the version
```

## Build and start development local server

```bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev
```

## Build for production

```bash
# build for production and launch server
$ yarn run build

$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## source directory

[nuxt_src/](./nuxt_src/)

## スポンサーロゴの更新(How to put sponsor logos)

1. [nuxt_src/data/sponsors/](./nuxt_src/data/sponsors/)の該当 json ファイルの末尾 `]`の前に, 以下を追記する。

```json
,{
 "name": "",
 "logo": "",
 "url": ""
}
```

2. 1 で追記した json の以下のフィールドを編集する

- `name`: スポンサー名。[広告ページ](https://scalamatsuri.org/ja/sponsors)のタイトルにも使われるため、日本語の正式名称を入れます。
- `logo`: ロゴファイルのパス。 ファイルは[/nuxt_src/static/img/sponsors](./nuxt_src/static/img/sponsors)に入れて、このフィールドへの記入は `/img/sponsors/XXX.svg` としてください。
- `url`: ロゴのリンク先。

3. develop branch に向けて、PullRequest を送る

4. merge 後、staging 環境で表示を確認する。

5. 問題なければ、develop から master branch に向けて PullRequest を送る。

6. merge 後、[production 環境の Web サイト](https://scalamatsuri.org/ja/)に反映されていることを確認する。

## 奉行スポンサーロゴの更新(How to put bugyo-sponsor logos)

1. [nuxt_src/components/sections/top/](./nuxt_src/components/sections/top/)の sponsors.vue ファイルを編集する。

`## language=yaml`の`en`/`ja`それぞれの一番下に`bugyo_name: "奉行名"`を追記する。
`bugyos:`の末尾に以下を追記する。

```
,{
 'name': '',
 'logo': '',
 'url': '',
 'display_name': this.$i18n.t('')
}
```

2. 1 で追記した vue の以下のフィールドを編集する。

- `name`: スポンサー名。
- `logo`: ロゴファイルのパス。 ファイルは[/nuxt_src/static/img/sponsors](./nuxt_src/static/img/sponsors)に入れて、このフィールドへの記入は `/img/sponsors/XXX.svg` としてください。
- `url`: ロゴのリンク先。
- `display_name`: 1 で`## language=yaml`に追記した`bugyo_name`を入れます。

3. develop branch に向けて、PullRequest を送る

4. merge 後、staging 環境で表示を確認する。

5. 問題なければ、develop から master branch に向けて PullRequest を送る。

6. merge 後、[production 環境の Web サイト](https://scalamatsuri.org/ja/)に反映されていることを確認する。

## スポンサー広告ページの更新(How to put sponsor ads)

1. [nuxt_src/data/sponsors/](./nuxt_src/data/sponsors/)の該当スポンサーの json に, 以下のように `text_html`と`slide_html` を追記する。
   `slied_html` について、提出されたスライドが speakerdeck の場合はサンプルの data-id 部分（ `8fbedebe1c6b475b8ed7a8552bd9c6a3` のところ）を当該スライドの data-id に書き換えれば OK。

```json
{
  "name": "すごいScalaの会社",
  "logo": "/img/sponsors/sugoi-scala.svg",
  "url": "http://sugoiscala.example.com/",
  "text_html": "すごいScalaの会社です！",
  "slide_html": "<div style=\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 74.9296%;\"><iframe src=\"https://speakerdeck.com/player/8fbedebe1c6b475b8ed7a8552bd9c6a3\" style=\"border: 0; top: 0; left: 0; width: 80%; height: 80%; position: absolute;\" allowfullscreen scrolling=\"no\" allow=\"encrypted-media\"></iframe></div>"
}
```

3. develop branch に向けて、PullRequest を送る

4. merge 後、staging 環境のスポンサーページで表示を確認する。

5. 問題なければ、develop から master branch に向けて PullRequest を送る。

6. merge 後、[production 環境の Web サイト](https://scalamatsuri.org/ja/sponsors/)に反映されていることを確認する。
