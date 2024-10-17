## 計量政治経済研究室

このリポジトリは，計量政治経済研究室（通称矢内研究室）のホームページを構成するものです．

**目次**
1. 研究員の方へ
2. 開発者の方へ

### 1. 研究員の方へ

ホームページには研究員紹介のページがあります．自分の情報を掲載するためには以下の手順を踏んでください．

**署名の手順**

まず，このリポジトリの管理者から`read`の権限を付与してもらいます．その後，このリポジトリをローカルへクローンします．

`data`というディレクトリの中に`members.ts`ファイルがあります．そこに`members`という配列が定義されているので，配列の要素として辞書形式でご自身の情報を記載してください．

記載する情報は以下の通りです．
- `name`: 名前,
- `nameRomaji`: ローマ字表記の名前,
- `position`: 役職,
- `image`: アイコンのファイル名(`/public/imgs/icons/`へ保存しておく),
- `description`: 紹介,
- `github`: GitHubのユーザ名,
- `graduationYear`: 卒業予定年度

ただし，アイコンは`public/imgs/icons/`へ保存しておく必要があります．保存したファイル名を，**拡張子を忘ずに**`image`へ指定します．

変更後，新規ブランチを作成してからリモートへプッシュします．

```
$ git branch <branchName>
$ git switch <branchName>
$ git add data/members.ts
$ git commit -m "added my information"
$ git push origin <branchName>
```

### 2. 開発者の方へ

**使用技術**

<!-- https://img.shields.io/badge/-{TechName}-{SheildColor}.svg?logo=next.js&style={BadgeStyle}&logoColor={} -->
<img src="https://img.shields.io/badge/-Node.js-000000.svg?logo=node.js&style=for-the-badge" />
<img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=for-the-badge" />
<img src="https://img.shields.io/badge/-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/-TypeScript-000000.svg?logo=typescript&style=for-the-badge" />
<img src="https://img.shields.io/badge/-TailwindCSS-000000.svg?logo=tailwindcss&style=for-the-badge" />
<img src="https://img.shields.io/badge/-Shadcn/ui-000000.svg?logo=shadcn/ui&style=for-the-badge" />

**プロジェクトについて**

このプロジェクトは，Next.js(TypeScript)で作成し，それを静的HTMLファイルへ変換したものをGitHub Pagesにデプロイしています．

**環境**

| 言語・フレームワーク | バージョン |
| Node.js              | v22.9.0    |
| Next.js              | 14.2.15    |
| React                | 18.3.1     |

その他のパッケージのバージョンは`package.json`を参照してください．

**開発手順**

開発にはNode.jsが必要です．次のコマンドでインストールしてください．

```
$ brew install node
```

バージョンが出力されるとインストール完了です．

```
$ node --version
```

このリポジトリをローカルへクローンした後，作業ディレクトリで以下のコマンドを実行すると開発が可能になります

```
$ npm install
```

**デプロイ**

[こちらのZenn記事]("https://zenn.dev/kazzyfrog/articles/8e24dfe951aad9")を参考に，GitHub Pagesへデプロイします．

