import type { PortfolioEntry } from './catalog-types';
import { getYoutubeShortsUrl, sharedWorks } from './works';

/**
 * Canonical project/creative catalog. Course names are grounded in the course
 * record. Only the RAG and inquiry descriptions exist in reviewed Main v2 source.
 * Remaining course entries are drafts pending individual artifacts, not client work.
 */
export const portfolioCatalog: readonly PortfolioEntry[] = [
  { id: 'course-01', kind: 'development', origin: 'course-self-produced', serviceId: 'ai-system', courseProjectNumber: 1,
    title: 'LINE Bot＋AI自動応答', summary: 'LINEとAIの自動応答を組み合わせる学習プロジェクト。', features: ['LINE Bot', 'AI自動応答'], evidenceStatus: 'owner-reported', publication: 'draft', links: [] },
  { id: 'course-02', kind: 'development', origin: 'course-self-produced', serviceId: 'automation', courseProjectNumber: 2,
    title: 'GAS＋AIブログ記事自動生成', summary: 'GASとAIを組み合わせて記事生成を扱う学習プロジェクト。', features: ['GAS', '記事生成'], evidenceStatus: 'owner-reported', publication: 'draft', links: [] },
  { id: 'case-rag-01', kind: 'development', origin: 'course-self-produced', serviceId: 'ai-system', courseProjectNumber: 3,
    title: '社内文書検索AI（RAG）', summary: '架空企業の社内規程を想定し、質問に関連する資料を検索して、出典とともに回答する仕組みを制作。', features: ['文書検索', '出典付き回答', '質問画面'], evidenceStatus: 'source-reviewed', publication: 'published', links: [], asset: { src: '/cases/rag-thumb.svg', alt: '質問から文書検索、出典付き回答へ進む構成図', diagram: '/cases/rag-diagram.svg' } },
  { id: 'course-04', kind: 'development', origin: 'course-self-produced', serviceId: 'ai-system', courseProjectNumber: 4,
    title: 'CSチャットボット', summary: '問い合わせへの応答を扱うカスタマーサポートの学習プロジェクト。', features: ['チャットボット', '問い合わせ対応'], evidenceStatus: 'owner-reported', publication: 'draft', links: [] },
  { id: 'case-inquiry-01', kind: 'development', origin: 'course-self-produced', serviceId: 'automation', courseProjectNumber: 5,
    title: '問い合わせ自動分類・通知ハブ', summary: '架空の不動産管理会社を想定し、複数チャネルの問い合わせをAIで分類して、担当先へ通知する仕組みを制作。', features: ['問い合わせ分類', 'Slack・LINE通知', 'マルチチャネル連携'], evidenceStatus: 'source-reviewed', publication: 'published', links: [], asset: { src: '/cases/inquiry-thumb.svg', alt: '問い合わせを受信しAIで分類、担当先に通知する構成図', diagram: '/cases/inquiry-diagram.svg' } },
  { id: 'course-07', kind: 'development', origin: 'course-self-produced', serviceId: 'ai-system', courseProjectNumber: 7,
    title: 'Slack連携RAG', summary: '文書検索AIとSlack連携を扱う学習プロジェクト。', features: ['RAG', 'Slack連携'], evidenceStatus: 'owner-reported', publication: 'draft', links: [] },
  { id: 'course-08', kind: 'development', origin: 'course-self-produced', serviceId: 'ai-system', courseProjectNumber: 8,
    title: 'AI売上分析ダッシュボード', summary: 'データ分析とダッシュボード表示を扱う学習プロジェクト。', features: ['データ分析', 'ダッシュボード'], evidenceStatus: 'owner-reported', publication: 'draft', links: [] },
  { id: 'case-ai-video-01', sharedWorkId: 'coffee-01', kind: 'video', origin: 'self-produced', serviceId: 'creative',
    title: 'コーヒーPRショート動画', summary: 'Pollo AIによる映像生成と、FFmpegによるテロップ合成を組み合わせた自主制作。完成作品をYouTube Shortsで公開しています。', features: ['AI映像生成', 'テロップ合成', '縦型ショート動画'], evidenceStatus: 'source-reviewed', publication: 'published', links: [{ label: 'YouTubeで作品を見る', href: getYoutubeShortsUrl(sharedWorks['coffee-01'])! }] },
  { id: 'beauty-video', sharedWorkId: 'beauty-01', kind: 'video', origin: 'self-produced', serviceId: 'creative', title: '美容商品PR動画', summary: '美容商品をテーマにした自主制作。公開用素材とリンクの確認待ち。', features: ['AI動画'], evidenceStatus: 'owner-reported', publication: 'draft', links: [] },
  { id: 'beauty-image', kind: 'image', origin: 'self-produced', serviceId: 'creative', title: 'スキンケア紹介画像', summary: '夕方の乾燥をテーマにした自主制作。公開用画像と権利・表示の確認待ち。', features: ['AI画像', '商品紹介'], evidenceStatus: 'owner-reported', publication: 'draft', links: [] },
];

export const publishedPortfolio = portfolioCatalog.filter(entry => entry.publication === 'published');
export const originLabels = {
  'course-self-produced': '学習課題をもとにした自主制作',
  'self-produced': '自主制作',
  'paid-client': '有償受託実績',
} as const;
