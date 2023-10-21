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
