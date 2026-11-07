# nlab-data — N-Labの共通データ正本

Main v2・AI Video Studioの共通データ。サービス・料金・開発事例・動画・画像作品はここで更新し、各サイトに内容を複製しません。

| 更新する内容 | 唯一の更新場所 |
| --- | --- |
| サービス説明・対応範囲 | `src/services.ts` |
| 料金・税区分・見積もり条件 | `src/pricing.ts` |
| 開発事例・動画/画像作品の紹介、公開状態 | `src/portfolio.ts` |
| 動画ID・制作時間・credits・ツール月額料 | `src/works.ts`（既存API） |
| 新カタログの型 | `src/catalog-types.ts` |
| 旧作品の型 | `src/types.ts`（v1.0.0互換） |

## 互換性

`SharedWork`、`SharedWorkId`、`sharedWorks`と既存の3関数はそのままです。既存タグ`v1.0.0`は変更しません。拡張は`1.1.0-rc.2`として専用ブランチで検証し、タグは作成しません。新カタログは追加エクスポートです。

`portfolio.ts`の`publication: 'draft'`はサイトに表示しません。7件の講座プロジェクトは最終コードとREADMEを照合し、確認した範囲でpublishedに移行しました。美容動画・画像は引き続きdraftです。`source-reviewed`はコード/資料の照合を意味し、外部API・顧客環境のE2Eや安全性・効果検証の完了は意味しません。各事例で検証範囲と未実装を分けています。

講師会話の原文、講座内見積、監査の参照先はこの公開パッケージへ収録しません。privateなMain v2のdocs/internalで保持し、アプリからimportしません。公開紹介の正本は引き続きこのカタログです。

画像ファイルやスクリーンショットは公開前に個人情報と権利を確認してください。紹介文・公開状態はこの正本で管理し、各アプリは表示部品とアセットの配置だけを管理します。`asset.src`等のパスはMain v2のアセットパスです。他サイトで使う場合は自サイトの配信先との対応を取ってください。

## 開発

```bash
npm ci
npm run typecheck
npm test
npm run verify
```

テストにはv1.0.0タグのGit履歴が必要です。浅いチェックアウトの場合は先に`git fetch origin tag v1.0.0`で取得してください。

## 同期方法

通常はGitのコミットSHAに依存を固定し、利用側のpackage.jsonとpackage-lock.jsonを一緒に更新します。Macの作業ディレクトリ名や絶対パスを依存設定へ埋め込みません。

既存の`npm run sync`は後方互換のため残していますが、周辺プロジェクトのnode_modulesを直接上書きする従来方式です。今回の取り込みには使用しません。`npm ci`で固定された依存を復元してください。
