# 2024.scalamatsuri.org

> 2024.scalamatsuri.org Nuxt.js project

[![Deploy to Firebase Hosting on staging](https://github.com/scalamatsuri/2024.scalamatsuri.org/actions/workflows/staging-firebase-hosting-merge.yml/badge.svg?branch=master)](https://github.com/scalamatsuri/2024.scalamatsuri.org/actions/workflows/staging-firebase-hosting-merge.yml) [![Deploy to Firebase Hosting on production](https://github.com/scalamatsuri/2024.scalamatsuri.org/actions/workflows/production-firebase-hosting-merge.yml/badge.svg?branch=production)](https://github.com/scalamatsuri/2024.scalamatsuri.org/actions/workflows/production-firebase-hosting-merge.yml)

[Production environment for ScalaMatsuri2024](https://scalamatsuri.org/ja/)

## Build Setup

### Install nodenv

Currently this project Node.js version is managed via [`.node-version`](.node-version) (e.g. [nodenv](https://github.com/nodenv/nodenv) ).

If you use Mac and want to use nodenv,

```bash
$ brew install nodenv

$ nodenv init

$ nodenv install x.x.x #please refer to .node-version under this project

$ nodenv rehash

$ node -v #check the version is same as .node-verson .
```

Or you can also use nvm. nvm referes [.nvmrc](.nvmrc) file.

```bash
$ brew install nvm

$ nvm use

$ nvm ls #check the version
```

Or you can also use asdf. nvm referes [.tool-versions](.tool-versions) file.

```bash
$ brew install asdf

$ asdf plugin add nodejs

$ asdf install nodejs # If you are in this project directory, the tool version will be installed automatically.
```

## Build and start development local server

```bash
# corepack enable
# `corepack enable` enables the use of yarn even if yarn is not installed locally.
$ yarn
! Corepack is about to download https://repo.yarnpkg.com/4.1.0/packages/yarnpkg-cli/bin/yarn.js
? Do you want to continue? [Y/n] Y

# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn run dev
```

## Build and deploy production

WIP

## firebase

自分用の firebase 環境を作って動作確認する時の手順です。

### 1. firebase のアカウントを設定する

https://firebase.google.com/

### 2. firebase 上でアプリを作成する

自分で決めるプロジェクト ID をメモしておきます。(ここでは `my-scalamatsuri-firebase-app` としています)

<img width="1682" alt="image" src="https://github.com/scalamatsuri/2024.scalamatsuri.org/assets/4135267/09c28bd4-074f-40c9-bb63-49b111bc8763">

### 3. firebase-tools を使えるようにする

https://firebase.google.com/docs/cli?hl=ja

### 4. ローカルのコンソールから firebase にログインする

```
$ firebase login:ci

1//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

`1//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX` といった TOKEN が表示されるので、これをデプロイで使います。

### 5. WEB サイトをビルドする

Nuxt の generate コマンドを実行すると、デプロイ用の JavaScript が .output/public に吐き出されます。

```
$ nuxt generate
Nuxt 3.7.4 with Nitro 2.6.3                                                             21:02:12

・・・

✔ You can now deploy .output/public to any static hosting!                             21:02:30
✨  Done in 19.23s.
```

### 6. firebase にデプロイする

```
$ firebase deploy --only hosting --token "1//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" -P my-scalamatsuri-firebase-app

・・・

✔ Deploy complete!

Project Console: https://console.firebase.google.com/project/my-scalamatsuri-firebase-app/overview
Hosting URL: https://my-scalamatsuri-firebase-app.web.app
```

### その他

2024 年 1 月、nuxt のバージョンアップをしたら下記エラーが発生したため、yarn v1 をやめる対応( `$ yarn set version stable` )をしました。

[Slack memo](https://scalamatsuri.slack.com/archives/CBUJ2C004/p1706326231097559)

```
$ nuxt prepare

[12:34:47]  ERROR  require() of ES Module ~/scalamatsuri/2024.scalamatsuri.org/node_modules/string-width/index.js from ~/scalamatsuri/2024.scalamatsuri.org/node_modules/wide-align/align.js not supported.
Instead change the require of index.js in ~/scalamatsuri/2024.scalamatsuri.org/node_modules/wide-align/align.js to a dynamic import() which is available in all CommonJS modules.

  Instead change the require of index.js in node_modules/wide-align/align.js to a dynamic import() which is available in all CommonJS modules.
  at Object.<anonymous> (node_modules/wide-align/align.js:2:19)
  at Object.<anonymous> (node_modules/gauge/render-template.js:2:13)
  at Object.<anonymous> (node_modules/gauge/plumbing.js:3:22)
  at Object.<anonymous> (node_modules/gauge/index.js:2:16)
  at Object.<anonymous> (node_modules/npmlog/log.js:3:13)
  at Object.<anonymous> (node_modules/@mapbox/node-pre-gyp/lib/node-pre-gyp.js:23:13)
  at Object.<anonymous> (node_modules/@vercel/nft/out/analyze.js:22:40)
  at Object.<anonymous> (node_modules/@vercel/nft/out/node-file-trace.js:31:35)
  at Object.<anonymous> (node_modules/@vercel/nft/out/index.js:22:25)



[12:34:47]  ERROR  require() of ES Module ~/scalamatsuri/2024.scalamatsuri.org/node_modules/string-width/index.js from ~/scalamatsuri/2024.scalamatsuri.org/node_modules/wide-align/align.js not supported.
Instead change the require of index.js in ~/scalamatsuri/2024.scalamatsuri.org/node_modules/wide-align/align.js to a dynamic import() which is available in all CommonJS modules.

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/install for documentation about this command.
```
