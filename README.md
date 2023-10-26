# 2024.scalamatsuri.org

> 2024.scalamatsuri.org Nuxt.js project

[![Deploy to Firebase Hosting on staging](https://github.com/scalamatsuri/2024.scalamatsuri.org/actions/workflows/staging-firebase-hosting-merge.yml/badge.svg?branch=master)](https://github.com/scalamatsuri/2024.scalamatsuri.org/actions/workflows/staging-firebase-hosting-merge.yml) [![Deploy to Firebase Hosting on production](https://github.com/scalamatsuri/2024.scalamatsuri.org/actions/workflows/production-firebase-hosting-merge.yml/badge.svg?branch=production)](https://github.com/scalamatsuri/2024.scalamatsuri.org/actions/workflows/production-firebase-hosting-merge.yml)

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
# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev
```

## Build and deploy production

WIP

## firebase

自分用の firebase 環境を作って動作確認する時の手順です。

### 1. firebase のアカウントを設定する

https://firebase.google.com/

### 2. firebase 上でアプリを作成する

自分で決めるプロジェクト ID をメモしておきます。

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
$ firebase deploy --only hosting --token "1//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" -P scalamatsuri-dev
✔ Deploy complete!

Project Console: https://console.firebase.google.com/project/scalamatsuri-dev/overview
Hosting URL: https://scalamatsuri-dev.web.app
```
