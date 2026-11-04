import type { SharedWork, SharedWorkId } from './types';

/**
 * N-Lab 共通作品正本データベース。
 *
 * このファイルが唯一の正本 (One Data, One Source)。
 * Main v2 の cases.ts と Video Studio の videos.ts はここから参照する。
 * 更新する場合は updatedAt を必ず今日の日付に更新すること。
 */
export const sharedWorks: Record<SharedWorkId, SharedWork> = {
  "coffee-01": {
    id: "coffee-01",
    youtubeId: "gT1S0n6xa3Y",
    humanTimeMinutes: 25,
    creditsUsed: 5,
    toolMonthlyFeeYen: 2578,
    productionDate: "2026-11-03",
    updatedAt: "2026-11-04",
  },
};

/** SharedWork から Main v2 のevidenceフィールド文字列を生成する */
export function formatEvidenceString(work: SharedWork): string {
  const parts: string[] = [];
  if (work.humanTimeMinutes !== undefined) {
    parts.push(`制作作業時間: ${work.humanTimeMinutes}分`);
  }
  if (work.creditsUsed !== undefined) {
    parts.push(`使用クレジット: ${work.creditsUsed}cr`);
  }
  if (work.toolMonthlyFeeYen !== undefined) {
    const yen = work.toolMonthlyFeeYen.toLocaleString('en-US');
    parts.push(`ツール月額料金: ¥${yen}（月額契約料）`);
  }
  return parts.join(' / ');
}

/** SharedWork から YouTube サムネイルURLを生成する */
export function getYoutubeThumbnailUrl(work: SharedWork): string | null {
  return work.youtubeId
    ? `https://img.youtube.com/vi/${work.youtubeId}/hqdefault.jpg`
    : null;
}

/** SharedWork から YouTube Shorts URLを生成する */
export function getYoutubeShortsUrl(work: SharedWork): string | null {
  return work.youtubeId
    ? `https://youtube.com/shorts/${work.youtubeId}`
    : null;
}
