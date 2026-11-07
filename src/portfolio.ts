import type { PortfolioEntry } from './catalog-types';
import { getYoutubeShortsUrl, sharedWorks } from './works';

/** Public canonical copy; internal evidence is deliberately not exported. */
export const portfolioCatalog: readonly PortfolioEntry[] = [
  {
    "id": "course-01",
    "kind": "development",
    "origin": "course-self-produced",
    "serviceId": "ai-system",
    "courseProjectNumber": 1,
    "title": "LINE Bot・AI自動応答",
    "summary": "美容室の問い合わせ対応を想定し、FAQを参照したAI自動応答と、判断に迷う質問の担当者通知・管理画面を制作しました。",
    "features": [
      "FAQ自動応答",
      "担当者への通知",
      "FAQ・会話ログ管理"
    ],
    "evidenceStatus": "source-reviewed",
    "publication": "published",
    "links": [],
    "details": {
      "challenge": "営業時間・料金などの繰り返し質問への対応と、AIだけでは判断しにくい問い合わせの引き継ぎ。",
      "solution": "FAQを管理画面で整備し、AIの回答と担当者に確認を依頼する経路を分ける構成を設計しました。",
      "implemented": [
        "LINE Webhookの署名検証とテキスト受信",
        "登録FAQを使ったClaudeの回答生成・確信度判定",
        "低確信度時の担当者LINE通知と会話履歴保存",
        "管理画面からのFAQ・メニュー管理、会話ログ閲覧、お知らせ配信"
      ],
      "technologies": [
        "Next.js",
        "TypeScript",
        "Claude API",
        "Supabase",
        "LINE Messaging API"
      ],
      "verification": [
        "Webhook・回答生成・管理画面のソースを照合しました。",
        "制作時の手動統合テスト記録を確認しました。今回、LINEへの送信は再実行していません。"
      ],
      "limitations": [
        "現行環境でのLINE送受信・通知の実地再検証は未実施です。",
        "予約案内への応答を扱うもので、予約台帳への登録・空席管理は確認していません。",
        "WebhookはAI処理完了を待つ構造です。応答時間は保証しません。"
      ],
      "improvements": [
        "回答の確信度を使って、人に確認を依頼する分岐を設けました。",
        "管理画面でFAQの更新と会話履歴の確認をまとめました。"
      ],
      "futureWork": [
        "予約台帳・空席管理との連携",
        "実機での継続検証と運用設計"
      ],
      "architecture": [
        "LINEの質問",
        "Next.js / Webhook",
        "Supabase / FAQ・履歴",
        "Claude / 回答生成",
        "LINE返信・担当者通知"
      ],
      "process": [
        {
          "stage": "課題整理",
          "description": "講座の開発課題として想定した業務を整理。ヒアリング会話の原文は今回未取得です。"
        },
        {
          "stage": "設計",
          "description": "FAQを管理画面で整備し、AIの回答と担当者に確認を依頼する経路を分ける構成を設計しました。"
        },
        {
          "stage": "実装",
          "description": "公開説明は最終コミットのコードと照合し、確認できた機能に限定しています。"
        },
        {
          "stage": "検証・振り返り",
          "description": "制作時の手動統合テスト記録を確認しました。今回、LINEへの送信は再実行していません。"
        }
      ],
      "reviewedOn": "2026-11-08",
      "mediaNote": "制作時の実画面資料です。学習・テスト用の件数表示であり、店舗の運用実績ではありません。",
      "externalLinkNote": "GitHub・技術記事は匿名運用との整合性確認待ち、開発用デモは安全性・再現性の確認待ちのためリンク掲載を保留しています。"
    },
    "asset": {
      "src": "/works/line-dashboard.png",
      "alt": "LINE Botの学習用管理画面。FAQ管理と会話ログへのメニュー。"
    }
  },
  {
    "id": "course-02",
    "kind": "development",
    "origin": "course-self-produced",
    "serviceId": "automation",
    "courseProjectNumber": 2,
    "title": "GAS＋AI記事自動生成",
    "summary": "スプレッドシートのキーワードから、タイトル・HTML本文・説明文を生成して出力する学習用ツールを制作しました。",
    "features": [
      "スプレッドシート連携",
      "記事生成",
      "進捗・エラー管理"
    ],
    "evidenceStatus": "source-reviewed",
    "publication": "published",
    "links": [],
    "details": {
      "challenge": "キーワード管理、記事のたたき台作成、生成状況の確認をひとつのシートで扱いたいという想定課題。",
      "solution": "既存のスプレッドシートを操作画面にし、選択した行ごとに生成・出力・状態確認を行う方式にしました。",
      "implemented": [
        "選択行のキーワード・参考記事を使ったClaude APIへの生成依頼",
        "生成結果のJSON検証とタイトル・本文・説明文のシート出力",
        "未生成・生成中・生成済み・エラーの状態管理",
        "WordPress REST APIへの下書き送信コード（実送信は未検証）"
      ],
      "technologies": [
        "Google Apps Script",
        "Googleスプレッドシート",
        "Claude API",
        "WordPress REST API"
      ],
      "verification": [
        "Code.gsとREADMEの実装範囲を照合しました。",
        "今回、記事JSONの解析を外部通信なしで4ケース確認しました。記事の生成・SEO効果を測定したものではありません。",
        "制作資料にはシートへの出力と送信payload確認の記録があります。"
      ],
      "limitations": [
        "WordPressへの実際の下書き作成は未検証です。",
        "GAS画面操作・現在のAPI応答は今回再検証していません。",
        "記事内容の正確性・権利・公開可否は人による確認が必要です。"
      ],
      "improvements": [
        "生成JSONとHTML属性の競合に対し、出力形式の指定とパース処理を用意しました。",
        "生成状況とエラーをシート上で確認できる形にしました。"
      ],
      "futureWork": [
        "WordPressへの下書き保存の実環境検証",
        "生成記事の品質チェックフロー"
      ],
      "architecture": [
        "キーワードのシート",
        "GAS / 選択行処理",
        "Sheets / 状態・本文",
        "Claude / 記事生成",
        "シートに生成結果"
      ],
      "process": [
        {
          "stage": "課題整理",
          "description": "講座の開発課題として想定した業務を整理。ヒアリング会話の原文は今回未取得です。"
        },
        {
          "stage": "設計",
          "description": "既存のスプレッドシートを操作画面にし、選択した行ごとに生成・出力・状態確認を行う方式にしました。"
        },
        {
          "stage": "実装",
          "description": "公開説明は最終コミットのコードと照合し、確認できた機能に限定しています。"
        },
        {
          "stage": "検証・振り返り",
          "description": "制作資料にはシートへの出力と送信payload確認の記録があります。"
        }
      ],
      "reviewedOn": "2026-11-08",
      "mediaNote": "実画面の掲載資料は未取得です。構成図はソースをもとにした説明図です。",
      "externalLinkNote": "GitHub・技術記事は匿名運用との整合性確認待ち、開発用デモは安全性・再現性の確認待ちのためリンク掲載を保留しています。"
    }
  },
  {
    "id": "case-rag-01",
    "kind": "development",
    "origin": "course-self-produced",
    "serviceId": "ai-system",
    "courseProjectNumber": 3,
    "title": "社内文書検索RAG",
    "summary": "学習用の社内規程PDFを取り込み、質問に関連する箇所を検索して、出典とともに回答する仕組みを制作しました。",
    "features": [
      "PDF取り込み",
      "出典付き回答",
      "認証付きチャット"
    ],
    "evidenceStatus": "source-reviewed",
    "publication": "published",
    "links": [],
    "details": {
      "challenge": "社内規程やマニュアルが複数資料に分かれており、必要な情報を見つけにくいという想定課題。",
      "solution": "文書を検索してから回答を生成し、参照した資料を利用者が確認できる構成にしました。",
      "implemented": [
        "PDFの分割とOpenAI Embeddingsによるベクトル化",
        "Supabase pgvectorを使った関連文書検索",
        "Claudeによる回答生成と出典表示",
        "Next.jsのチャット画面、マジックリンク認証とAPI認証確認"
      ],
      "technologies": [
        "TypeScript",
        "Next.js",
        "OpenAI Embeddings",
        "Claude API",
        "Supabase pgvector / Auth"
      ],
      "verification": [
        "検索・回答・Web APIのソースとREADMEを照合しました。",
        "制作時の質問セットと評価スクリプト、評価記録を確認しました。現在のAPI・DBでは再測定していません。"
      ],
      "limitations": [
        "同じPDFの再取り込み時の自動重複除去は未実装です。",
        "文書単位の部署権限・Word/Confluence連携はこの案件の実装範囲外です。",
        "公開URLはログイン画面までの到達確認で、認証後の回答は今回未検証です。"
      ],
      "improvements": [
        "文書にない情報を推測しないよう回答指示を設計し、出典を回答とは別に組み立てます。",
        "READMEに再取り込みの重複課題と今後の改善方針を残しました。"
      ],
      "futureWork": [
        "Word・Confluenceの取り込み",
        "文書の差分更新・重複除去",
        "部署権限とSlack連携"
      ],
      "architecture": [
        "PDF・利用者の質問",
        "TypeScript / Next.js",
        "Supabase pgvector",
        "Embedding・Claude",
        "出典付きチャット回答"
      ],
      "process": [
        {
          "stage": "課題整理",
          "description": "講座の開発課題として想定した業務を整理。ヒアリング会話の原文は今回未取得です。"
        },
        {
          "stage": "設計",
          "description": "文書を検索してから回答を生成し、参照した資料を利用者が確認できる構成にしました。"
        },
        {
          "stage": "実装",
          "description": "公開説明は最終コミットのコードと照合し、確認できた機能に限定しています。"
        },
        {
          "stage": "検証・振り返り",
          "description": "制作時の質問セットと評価スクリプト、評価記録を確認しました。現在のAPI・DBでは再測定していません。"
        }
      ],
      "reviewedOn": "2026-11-08",
      "mediaNote": "実画面の掲載資料は未取得です。構成図はソースをもとにした説明図です。",
      "externalLinkNote": "GitHub・技術記事は匿名運用との整合性確認待ち、開発用デモは安全性・再現性の確認待ちのためリンク掲載を保留しています。"
    }
  },
  {
    "id": "course-04",
    "kind": "development",
    "origin": "course-self-produced",
    "serviceId": "ai-system",
    "courseProjectNumber": 4,
    "title": "EC向けCSチャットボット",
    "summary": "ECなどのWebサイトでの問い合わせ対応を想定し、AIチャットとオペレーター画面からの返信を扱う学習用システムを制作しました。",
    "features": [
      "チャットウィジェット",
      "リアルタイム表示",
      "オペレーター返信"
    ],
    "evidenceStatus": "source-reviewed",
    "publication": "published",
    "links": [],
    "details": {
      "challenge": "Web上の質問に応答しつつ、必要な場面では担当者が会話を確認・返信できるようにしたいという想定課題。",
      "solution": "顧客向けウィジェットと担当者用の会話画面を分け、同じメッセージをリアルタイムに表示する構成にしました。",
      "implemented": [
        "ブラウザ内の匿名セッションと会話履歴の保持",
        "Claude APIの回答とSupabaseへのメッセージ保存",
        "Realtimeによる新着メッセージ表示",
        "オペレーター画面の会話一覧・会話詳細・担当者返信"
      ],
      "technologies": [
        "Next.js",
        "React",
        "TypeScript",
        "Claude API",
        "Supabase Realtime"
      ],
      "verification": [
        "API・チャット用hook・オペレーター画面とDBスキーマを照合しました。",
        "制作時の画面資料を確認しました。今回、会話データの作成・返信は行っていません。"
      ],
      "limitations": [
        "管理者認証が未実装で、公開SQLには認証なしの広い読み書き許可があります。実顧客データを扱える完成品としての安全性は確認していません。",
        "自動引き継ぎ・手動ステータス変更のUI・注文/配送情報の照会は未実装です。",
        "AI処理に担当者の発言を渡す際のrole変換は追加確認が必要です。",
        "FAQ専用の検索・pgvector・Shopify連携・管理分析は確認できず、実装済みとして掲載していません。"
      ],
      "improvements": [
        "Realtimeの受信時に同じメッセージIDが重複しないように処理しています。",
        "会話IDとセッションIDを保持し、同じブラウザで履歴を表示する仕組みにしました。"
      ],
      "futureWork": [
        "管理者認証と会話データのアクセス制御",
        "自動エスカレーション・対応完了操作",
        "FAQ検索・Slack通知・EC連携"
      ],
      "architecture": [
        "顧客のチャット",
        "Next.js / Chat API",
        "Supabase / Realtime",
        "Claude / 一次回答",
        "顧客・担当者の画面"
      ],
      "process": [
        {
          "stage": "課題整理",
          "description": "講座の開発課題として想定した業務を整理。ヒアリング会話の原文は今回未取得です。"
        },
        {
          "stage": "設計",
          "description": "顧客向けウィジェットと担当者用の会話画面を分け、同じメッセージをリアルタイムに表示する構成にしました。"
        },
        {
          "stage": "実装",
          "description": "公開説明は最終コミットのコードと照合し、確認できた機能に限定しています。"
        },
        {
          "stage": "検証・振り返り",
          "description": "制作時の画面資料を確認しました。今回、会話データの作成・返信は行っていません。"
        }
      ],
      "reviewedOn": "2026-11-08",
      "mediaNote": "実画面の掲載資料は未取得です。構成図はソースをもとにした説明図です。",
      "externalLinkNote": "GitHub・技術記事は匿名運用との整合性確認待ち、開発用デモは安全性・再現性の確認待ちのためリンク掲載を保留しています。"
    }
  },
  {
    "id": "case-inquiry-01",
    "kind": "development",
    "origin": "course-self-produced",
    "serviceId": "automation",
    "courseProjectNumber": 5,
    "title": "AI通知・問い合わせ分類システム",
    "summary": "不動産管理の問い合わせを想定し、メール・LINEの受信、AI分類、Slack集約と緊急通知を扱う仕組みを制作しました。",
    "features": [
      "問い合わせ分類",
      "Slack集約",
      "緊急通知・送信ログ"
    ],
    "evidenceStatus": "source-reviewed",
    "publication": "published",
    "links": [],
    "details": {
      "challenge": "複数窓口に分散する問い合わせの見落としと、急ぎの連絡への対応漏れを防ぎたいという想定課題。",
      "solution": "受信・分類・通知の処理を分け、緊急性のある連絡は通常キューとは別に処理する構成にしました。",
      "implemented": [
        "Gmailブリッジ・LINE Webhookの受信検証と重複処理の抑制",
        "Claude APIによるカテゴリ・信頼度・判断理由の分類",
        "通常処理と緊急判定経路の分離、Slack・LINEへの通知",
        "通知結果・失敗理由・再送回数の記録と一覧画面"
      ],
      "technologies": [
        "Next.js",
        "TypeScript",
        "Claude API",
        "Supabase",
        "Slack Web API",
        "LINE Messaging API"
      ],
      "verification": [
        "受信・分類・通知・状態更新のソースと設計資料を照合しました。",
        "外部接続なしのデモ用データと画面構成の実装を確認しました。"
      ],
      "limitations": [
        "実際のメール・LINE・Slack送受信と到達時間は今回未検証です。",
        "電話の文字起こし、担当者アサイン、SLAレポートは実装範囲外です。",
        "構成図は設計イメージで、実データの画面や業務効果ではありません。"
      ],
      "improvements": [
        "通知の成功後にだけ通知済みの状態へ進め、送信失敗と分類成功を混同しない設計です。",
        "キーワードの一次判定にAIの文脈確認を組み合わせ、緊急判定を扱います。"
      ],
      "futureWork": [
        "電話音声の文字起こし",
        "担当者割り当て・対応状態管理",
        "高度な検索・分析"
      ],
      "architecture": [
        "Gmail・LINE",
        "Next.js / 分類・通知",
        "Supabase / キュー",
        "Claude / 分類・判定",
        "Slack・緊急LINE通知"
      ],
      "process": [
        {
          "stage": "課題整理",
          "description": "講座の開発課題として想定した業務を整理。ヒアリング会話の原文は今回未取得です。"
        },
        {
          "stage": "設計",
          "description": "受信・分類・通知の処理を分け、緊急性のある連絡は通常キューとは別に処理する構成にしました。"
        },
        {
          "stage": "実装",
          "description": "公開説明は最終コミットのコードと照合し、確認できた機能に限定しています。"
        },
        {
          "stage": "検証・振り返り",
          "description": "外部接続なしのデモ用データと画面構成の実装を確認しました。"
        }
      ],
      "reviewedOn": "2026-11-08",
      "mediaNote": "実画面の掲載資料は未取得です。構成図はソースをもとにした説明図です。",
      "externalLinkNote": "GitHub・技術記事は匿名運用との整合性確認待ち、開発用デモは安全性・再現性の確認待ちのためリンク掲載を保留しています。"
    }
  },
  {
    "id": "course-07",
    "kind": "development",
    "origin": "course-self-produced",
    "serviceId": "ai-system",
    "courseProjectNumber": 7,
    "title": "Slack連携RAG",
    "summary": "Slackから社内文書を検索し、所属部署に応じた検索範囲で、出典付き回答と監査ログを扱う学習プロジェクトです。",
    "features": [
      "Slackから文書検索",
      "部署別の検索制限",
      "出典・監査ログ"
    ],
    "evidenceStatus": "source-reviewed",
    "publication": "published",
    "links": [],
    "details": {
      "challenge": "Slack上で質問でき、閲覧権限に応じた文書だけを回答に利用したいという想定課題。",
      "solution": "Slackユーザーの許可部署を解決してから文書検索に渡し、結果と根拠をログに残す構成にしました。",
      "implemented": [
        "Slack署名・タイムスタンプ検証とイベント受信",
        "文書の分割・ベクトル検索・OpenAIによる出典付き回答",
        "ユーザーの部署対応表とSQL関数による検索範囲の制限",
        "非同期処理、スレッド返信、質問・回答・根拠の監査ログ"
      ],
      "technologies": [
        "Next.js",
        "TypeScript",
        "OpenAI API",
        "Supabase pgvector",
        "Slack Events API"
      ],
      "verification": [
        "イベント受信・権限絞り込み・回答生成のコードと制作時の検証記録を照合しました。",
        "制作時の検証はローカルの模擬リクエストです。Slack実チャンネルでの実地テストではありません。",
        "今回、外部通信なしでMarkdown4資料のセクション分割スクリプトが完走しました。"
      ],
      "limitations": [
        "実Slackワークスペースのメンションから投稿までの通し検証は未実施です。",
        "検索範囲の実効制御はSQL関数の部署フィルタで、RLSだけで制御する方式ではありません。",
        "現行の外部API・DB疎通は今回再確認していません。"
      ],
      "improvements": [
        "最終コードはTF-IDFではなく、OpenAI Embeddingsとpgvectorの検索です。",
        "制作記録では小規模データの検索漏れを調査し、文書タイトルを含める取り込みと検索方法を修正しています。",
        "権限制御の実効部分をSQL関数の部署フィルタとして明示しています。"
      ],
      "futureWork": [
        "SharePoint自動同期・PowerPoint OCR",
        "大量文書の取り込みと負荷検証",
        "ハイブリッド検索"
      ],
      "architecture": [
        "Slackメンション",
        "Next.js / 非同期処理",
        "pgvector / 部署フィルタ",
        "OpenAI / 検索・回答",
        "Slack返信・監査ログ"
      ],
      "process": [
        {
          "stage": "課題整理",
          "description": "講座の開発課題として想定した業務を整理。ヒアリング会話の原文は今回未取得です。"
        },
        {
          "stage": "設計",
          "description": "Slackユーザーの許可部署を解決してから文書検索に渡し、結果と根拠をログに残す構成にしました。"
        },
        {
          "stage": "実装",
          "description": "公開説明は最終コミットのコードと照合し、確認できた機能に限定しています。"
        },
        {
          "stage": "検証・振り返り",
          "description": "今回、外部通信なしでMarkdown4資料のセクション分割スクリプトが完走しました。"
        }
      ],
      "reviewedOn": "2026-11-08",
      "mediaNote": "実画面の掲載資料は未取得です。構成図はソースをもとにした説明図です。",
      "externalLinkNote": "GitHub・技術記事は匿名運用との整合性確認待ち、開発用デモは安全性・再現性の確認待ちのためリンク掲載を保留しています。"
    }
  },
  {
    "id": "course-08",
    "kind": "development",
    "origin": "course-self-produced",
    "serviceId": "ai-system",
    "courseProjectNumber": 8,
    "title": "AI売上分析ダッシュボード",
    "summary": "学習用ECデータのCSV取り込み、売上・粗利などの集計、グラフ表示とAI分析コメントを組み合わせたダッシュボードを制作しました。",
    "features": [
      "CSV検証・取り込み",
      "KPI・グラフ表示",
      "AI分析コメント"
    ],
    "evidenceStatus": "source-reviewed",
    "publication": "published",
    "links": [],
    "details": {
      "challenge": "CSVの月次データを集計し、数字の変化と検討すべき点を把握しやすくしたいという想定課題。",
      "solution": "CSVの入力検証と数値集計をコードで行い、集計済みの値をAIコメント生成へ渡す構成にしました。",
      "implemented": [
        "必須列・数値・日付などのCSV入力検証とデータ保存",
        "売上・粗利・期間内リピート率・前月比較の計算",
        "月次推移・カテゴリ順位・SKU順位の表示",
        "AIコメントの構造検証と月別の分析履歴保存"
      ],
      "technologies": [
        "Next.js",
        "React",
        "TypeScript",
        "Supabase",
        "Claude API",
        "Recharts",
        "PapaParse",
        "Vitest"
      ],
      "verification": [
        "CSV・KPI計算・AI出力検証とAPIソースを照合しました。",
        "今回、CSV・KPI・AI出力形式の既存テスト26件が成功しました。",
        "対象コミットのGitHub Actionsで型・テスト・ビルドの成功記録を確認しました。"
      ],
      "limitations": [
        "売上等の表示は学習用データであり、N-Labや顧客の実績ではありません。",
        "外部EC自動連携、異常検知、PDF配信、多店舗対応は未実装です。",
        "公開画面の到達のみ確認。CSV送信・AI生成・認証やアクセス制御の実運用評価はしていません。"
      ],
      "improvements": [
        "数値の計算をAIに任せず、集計済みのKPIを入力します。",
        "AIのJSON Schema出力に加え、保存前の構造検証を設けています。"
      ],
      "futureWork": [
        "Shopify API連携",
        "異常検知・PDFレポート配信",
        "複数店舗・ブラウザE2Eテスト"
      ],
      "architecture": [
        "CSVファイル",
        "Next.js / 検証・集計",
        "Supabase / 分析履歴",
        "Claude / 分析コメント",
        "KPI・グラフ・分析画面"
      ],
      "process": [
        {
          "stage": "課題整理",
          "description": "講座の開発課題として想定した業務を整理。ヒアリング会話の原文は今回未取得です。"
        },
        {
          "stage": "設計",
          "description": "CSVの入力検証と数値集計をコードで行い、集計済みの値をAIコメント生成へ渡す構成にしました。"
        },
        {
          "stage": "実装",
          "description": "公開説明は最終コミットのコードと照合し、確認できた機能に限定しています。"
        },
        {
          "stage": "検証・振り返り",
          "description": "対象コミットのGitHub Actionsで型・テスト・ビルドの成功記録を確認しました。"
        }
      ],
      "reviewedOn": "2026-11-08",
      "mediaNote": "制作時の実画面資料です。画面の数値は学習用サンプルデータで、N-Labや顧客の売上・改善効果ではありません。",
      "externalLinkNote": "GitHub・技術記事は匿名運用との整合性確認待ち、開発用デモは安全性・再現性の確認待ちのためリンク掲載を保留しています。"
    },
    "asset": {
      "src": "/works/sales-dashboard.png",
      "alt": "学習用サンプルデータを表示した売上分析ダッシュボード。実売上ではありません。"
    }
  },
  {
    "id": "case-ai-video-01",
    "sharedWorkId": "coffee-01",
    "kind": "video",
    "origin": "self-produced",
    "serviceId": "creative",
    "title": "コーヒーPRショート動画",
    "summary": "Pollo AIによる映像生成と、FFmpegによるテロップ合成を組み合わせた自主制作。完成作品をYouTube Shortsで公開しています。",
    "features": [
      "AI映像生成",
      "テロップ合成",
      "縦型ショート動画"
    ],
    "evidenceStatus": "source-reviewed",
    "publication": "published",
    "links": [{ label: "YouTubeで作品を見る", href: getYoutubeShortsUrl(sharedWorks["coffee-01"])! }]
  },
  {
    "id": "beauty-video",
    "sharedWorkId": "beauty-01",
    "kind": "video",
    "origin": "self-produced",
    "serviceId": "creative",
    "title": "美容商品PR動画",
    "summary": "美容商品をテーマにした自主制作。公開用素材とリンクの確認待ち。",
    "features": [
      "AI動画"
    ],
    "evidenceStatus": "owner-reported",
    "publication": "draft",
    "links": []
  },
  {
    "id": "beauty-image",
    "kind": "image",
    "origin": "self-produced",
    "serviceId": "creative",
    "title": "スキンケア紹介画像",
    "summary": "夕方の乾燥をテーマにした自主制作。公開用画像と権利・表示の確認待ち。",
    "features": [
      "AI画像",
      "商品紹介"
    ],
    "evidenceStatus": "owner-reported",
    "publication": "draft",
    "links": []
  }
];

export const publishedPortfolio = portfolioCatalog.filter(entry => entry.publication === 'published');
export const developmentPortfolio = publishedPortfolio.filter(entry => entry.kind === 'development');
export const featuredPortfolio = ['course-08', 'course-07', 'course-01'].map(id => developmentPortfolio.find(entry => entry.id === id)!).filter(Boolean);
export function getPublishedPortfolioEntry(id: string): PortfolioEntry | undefined {
  return publishedPortfolio.find(entry => entry.id === id);
}
export const originLabels = { 'course-self-produced': '学習課題をもとにした自主制作', 'self-produced': '自主制作', 'paid-client': '有償受託実績' } as const;
