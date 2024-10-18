<div id="top"></div>

# 計量政治経済研究室

このリポジトリは，計量政治経済研究室（通称矢内研究室）のホームページを構成するものです．

## 1. 研究員の方へ

ホームページには研究員紹介のページがあります．自分の情報を掲載するために以下の手順を踏んでください．

**署名の手順**

まず，このリポジトリをフォーク（Fork）します．すると，自分のアカウント下に`Yanai-Lab.github.io`が作成されるので，そのリポジトリ（`<YourUserName>/Yanai-Lab.github.io`）をローカルへクローン（`git clone`）します．

クローンしたリポジトリへ移動すると，`data`というディレクトリが存在します．その中に`members.ts`ファイルがあり，そこに`members`という配列が定義されているので，配列の要素として辞書形式でご自身の情報を記載してください．

記載する情報は以下の通りです．
- `name`: 名前
- `nameRomaji`: ローマ字表記の名前
- `position`: 役職
- `image`: アイコンのファイル名
- `description`: 紹介
- `github`: GitHubのユーザ名
- `graduationYear`: 卒業予定年度

ただし，アイコンは`public/imgs/icons/`へ保存しておく必要があります（PNG, JPEG推奨）．保存したファイル名を，**拡張子を忘ずに**`image`へ指定します．アイコンを設定したくない，あるいは設定する必要がない方は`default.png`としてください．

変更後，新規ブランチを作成してからリモートへプッシュします．ブランチ名（下記コードでの`<branchName>`）は任意です．`addMyInfo`といったブランチ名がわかりやすいでしょう．

```
$ git branch <branchName>
$ git switch <branchName>
$ git add data/members.ts
$ git commit -m "added my information"
$ git push origin <branchName>
```

その後，GitHub上でプルリクエストを作成します．

**フォークしたリポジトリとローカルを最新の状態に保つには**

オリジナルのリポジトリ（`Yanai-Lab/Yanai-Lab.github.io.git`）が更新された時，フォークしたリポジトリ（`<YourUserName>/Yanai-Lab.github.io.git`）が自動的に最新の状態になることはありません．ローカルのリポジトリも同じく．

フォークしたリポジトリとローカルのリポジトリを，オリジナルのリポジトリに合わせて手動で最新の状態にしておく必要があります．でなければ，コンフリクト等の問題が発生します．

以下に手順を記します．

まず，オリジナルのリポジトリ（`Yanai-Lab/Yanai-Lab.github.io.git`）をリモートリポジトリとしてローカルに追加する必要があります．

```
$ git remote add upstream git@github.com:Yanai-Lab/Yanai-Lab.github.io.git
```

このコマンドは`Yanai-Lab/Yanai-Lab.github.io.git`を`upstream`という名前のリモートリポジトリとしてローカルへ追加するものです．ちなみに，`<YourUserName>/Yanai-Lab.github.io.git`は`origin`という名前でローカルへ追加されています．

`upstream`は常に最新の状態なので，これをローカルの`main`ブランチに反映させます．

```
$ git switch main
$ git fetch upstream
$ git merge upstream/main
```

これでローカルの`main`ブランチが最新の状態となりました．

続いて，フォークしたリポジトリ（`<YourUserName>/Yanai-Lab.github.io.git`）に，先ほど最新の状態とした`main`ブランチをプッシュ（`git push`）します．

```
$ git push origin main
```

これで，ローカルと`origin`が最新の状態となりました．

<p align="right"><a href="#top">トップへ</a></p>

## 2. 開発者の方へ

**使用技術**

<!-- https://img.shields.io/badge/-{TechName}-{SheildColor}.svg?logo=next.js&style={BadgeStyle}&logoColor={} -->
<p style="display: inline">
  <img src="https://img.shields.io/badge/-Node.js-000000.svg?logo=node.js&style=for-the-badge" />
  <img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=for-the-badge" />
  <img src="https://img.shields.io/badge/-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/-TypeScript-000000.svg?logo=typescript&style=for-the-badge" />
  <img src="https://img.shields.io/badge/-TailwindCSS-000000.svg?logo=tailwindcss&style=for-the-badge" />
  <img src="https://img.shields.io/badge/-Shadcn/ui-000000.svg?logo=shadcn/ui&style=for-the-badge" />
</p>

### プロジェクトについて

このプロジェクトは，Next.js(TypeScript)で作成し，それを静的HTMLファイルへ変換したものをGitHub Pagesにデプロイしています．

### 環境

| 言語・フレームワーク | バージョン |
| -------------------- | ---------- |
| Node.js              | v22.9.0    |
| Next.js              | 14.2.15    |
| React                | 18.3.1     |

その他のパッケージのバージョンは`package.json`を参照してください．

<p align="right"><a href="#top">トップへ</a></p>

### 開発環境構築（Mac）

開発にはNode.jsが必要です．次のコマンドでインストールしてください．

```
$ brew install node
```

バージョンが出力されるとインストール完了です．

```
$ node --version
```

その後，このリポジトリ（`Yanai-Lab/Yanai-Lab.github.io.git`）をフォーク（Fork）し，フォークしたリポジトリ（`<YourUserName>/Yanai-Lab.github.io.git`）をローカルへクローン（`git clone`）します．作業ディレクトリで以下のコマンドを実行してください．

```
$ npm install
```

これで，ローカルリポジトリでの開発環境が整いました．以下のコマンドで`localhost:3000`へアクセスができると完了です．

```
npm run dev
```

**デプロイ**

[こちらのZenn記事](https://zenn.dev/kazzyfrog/articles/8e24dfe951aad9)を参考に，GitHub Pagesへデプロイします．

<p align="right"><a href="#top">トップへ</a></p>

### ディレクトリ構成

```
$ tree -a -I "node_modules|.next|.git" -L 2
.
├── .eslintrc.json
├── .github
│   └── workflows
├── .gitignore
├── README.md
├── app
│   ├── about
│   ├── contact
│   ├── fonts
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── research
├── components
│   ├── about.tsx
│   ├── contact.tsx
│   ├── eyecatch.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── landing.tsx
│   ├── member.tsx
│   ├── providers
│   ├── research.tsx
│   └── ui
├── components.json
├── data
│   └── members.ts
├── lib
│   └── utils.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── favicon.ico
│   ├── imgs
│   └── logos
├── tailwind.config.ts
└── tsconfig.json

16 directories, 24 files
```

<p align="right"><a href="#top">トップへ</a></p>

