import type { PriceDefinition } from './catalog-types';
/** Preserve existing Main v2 prices; reference mockups do not establish prices. */
export const pricingCatalog: readonly PriceDefinition[] = [
  { id: 'consultation', serviceIds: [], title: '相談・お見積もり', kind: 'free', tax: 'not-applicable', note: '課題のヒアリングと、進め方・費用感のご相談。', source: 'existing-main-v2' },
  { id: 'small-automation', serviceIds: ['automation'], title: '小規模自動化', kind: 'from', amountYen: 30000, tax: 'exclusive', note: 'GAS・Excelの定型作業自動化。内容・規模に応じてお見積もりします。', source: 'existing-main-v2' },
  { id: 'custom', serviceIds: ['ai-system', 'creative'], title: 'AIシステム開発・AI動画・画像制作', kind: 'quote', tax: 'exclusive', note: '内容・規模・納品形式を確認して、個別にお見積もりします。画像制作の固定料金は未設定です。', source: 'existing-main-v2' },
];
export function formatPrice(price: PriceDefinition): string {
  if (price.kind === 'free') return '無料';
  if (price.kind === 'quote') return '個別お見積もり';
  return `${price.amountYen?.toLocaleString('ja-JP')}円〜`;
}
