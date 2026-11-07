import type { ServiceDefinition } from './catalog-types';

/** Canonical service descriptions. Consumers provide layout, not duplicate copy. */
export const serviceCatalog: readonly ServiceDefinition[] = [
  {
    id: 'automation', title: '業務自動化・効率化',
    description: 'Excel・GAS・API連携で、集計や転記などの繰り返し作業を仕組みに。いまの業務に合う、小さな改善から対応します。',
    deliverables: ['現状の整理・要件定義', '自動化スクリプトの設計・実装', '動作確認・使い方の説明'],
    examples: ['GAS自動化', 'レポート自動生成', 'データ連携'],
  },
  {
    id: 'ai-system', title: 'AIシステム開発',
    description: '社内文書検索、チャットボット、データ分析など。「調べる・答える・まとめる」を支えるAIシステムを設計・開発します。',
    deliverables: ['課題のヒアリング・設計', 'AI機能・画面の実装', 'テスト・利用方法の説明'],
    examples: ['社内文書検索（RAG）', 'AIチャットボット', '分析ダッシュボード'],
  },
  {
    id: 'creative', title: 'AI動画・画像制作',
    description: '商品紹介やサービス説明に使う動画・画像をAIで制作。目的や媒体に合わせて、構成から生成・仕上げまで対応します。',
    deliverables: ['用途・構成のすり合わせ', 'AIによる動画・画像の生成', '確認・仕上げ・データ納品'],
    examples: ['AI動画生成', '商品PR・ショート動画', '画像・バナー制作'],
  },
];
