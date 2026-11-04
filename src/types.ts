/** N-Labの制作実績として両サイト共通で管理する正本データ型 */
export interface SharedWork {
  /** 正本ID（Video Studio の VideoRecord.id と同一） */
  id: string;
  /** YouTube動画ID（両サイトでの動画参照に使用） */
  youtubeId?: string;
  /** 制作にかかった人間の作業時間（分） */
  humanTimeMinutes?: number;
  /** 使用したAI生成クレジット数 */
  creditsUsed?: number;
  /** 利用ツールの月額料金（1本あたりの費用ではない） */
  toolMonthlyFeeYen?: number;
  /** 制作日（YYYY-MM-DD） */
  productionDate: string;
  /** このレコードの最終更新日（YYYY-MM-DD） */
  updatedAt: string;
}

/**
 * SharedWork の正本ID型。
 * 新しい作品を works.ts に追加したら必ずここにも追記すること。
 * TypeScriptの型チェックにより、無効なIDの参照はビルド時エラーになる。
 */
export type SharedWorkId = "coffee-01" | "beauty-01";
