/**
 * nlab-data 整合性検証スクリプト
 * 実行: npx tsx scripts/verify-sync.ts
 *
 * SharedWork 正本データの完全性とバージョン情報をチェックする。
 * git push 前・本番デプロイ前に必ず実行すること。
 */
import { sharedWorks } from '../src/index';
import { readFileSync } from 'fs';
import { join } from 'path';

// package.json のバージョンを確認
const pkgPath = join(__dirname, '..', 'package.json');
const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
console.log(`nlab-data version: ${pkg.version}`);

let errors = 0;

console.log('=== nlab-data 整合性チェック ===\n');

for (const [key, work] of Object.entries(sharedWorks)) {
  const prefix = `[${key}]`;

  // id と key の一致チェック
  if (work.id !== key) {
    console.error(`${prefix} ERROR: work.id "${work.id}" がキー "${key}" と一致しない`);
    errors++;
  }

  // 必須フィールドチェック
  if (!work.productionDate) {
    console.error(`${prefix} ERROR: productionDate が未設定`);
    errors++;
  }
  if (!work.updatedAt) {
    console.error(`${prefix} ERROR: updatedAt が未設定`);
    errors++;
  }

  // 日付フォーマットチェック (YYYY-MM-DD)
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  if (work.productionDate && !datePattern.test(work.productionDate)) {
    console.error(`${prefix} ERROR: productionDate "${work.productionDate}" の形式が不正 (YYYY-MM-DD)`);
    errors++;
  }
  if (work.updatedAt && !datePattern.test(work.updatedAt)) {
    console.error(`${prefix} ERROR: updatedAt "${work.updatedAt}" の形式が不正 (YYYY-MM-DD)`);
    errors++;
  }

  // 数値フィールドの非負チェック
  if (work.humanTimeMinutes !== undefined && work.humanTimeMinutes < 0) {
    console.error(`${prefix} ERROR: humanTimeMinutes が負の値`);
    errors++;
  }
  if (work.creditsUsed !== undefined && work.creditsUsed < 0) {
    console.error(`${prefix} ERROR: creditsUsed が負の値`);
    errors++;
  }
  if (work.toolMonthlyFeeYen !== undefined && work.toolMonthlyFeeYen < 0) {
    console.error(`${prefix} ERROR: toolMonthlyFeeYen が負の値`);
    errors++;
  }

  if (errors === 0) {
    console.log(
      `${prefix} OK  youtubeId=${work.youtubeId ?? 'なし'} ` +
      `time=${work.humanTimeMinutes ?? '-'}min ` +
      `credits=${work.creditsUsed ?? '-'}cr ` +
      `fee=¥${work.toolMonthlyFeeYen?.toLocaleString('en-US') ?? '-'} ` +
      `updated=${work.updatedAt}`
    );
  }
}

console.log('\n--- 結果 ---');
if (errors > 0) {
  console.error(`FAIL: ${errors}件のエラーが見つかりました`);
  process.exit(1);
} else {
  console.log(`PASS: ${Object.keys(sharedWorks).length}件の共通作品データがすべて正常です`);
}
