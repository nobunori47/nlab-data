#!/usr/bin/env node
/**
 * nlab-data 同期スクリプト
 * 使い方: node scripts/sync.js [--dry-run]
 *
 * nlab-data/src/ の正本を両サイトの node_modules/nlab-data/src/ にコピーする。
 * npm install --install-links はバージョン変更がない場合に再コピーしないため、
 * データ更新後はこのスクリプトを実行すること。
 *
 * 本番（Cloudflare Pages）では github: 参照を使うため、このスクリプトは不要。
 */

const fs = require('fs');
const path = require('path');

const isDryRun = process.argv.includes('--dry-run');
const scriptDir = __dirname;
const pkgRoot = path.resolve(scriptDir, '..');
const srcDir = path.join(pkgRoot, 'src');

// 同期先を検出（../*/node_modules/nlab-data/src/ が存在するプロジェクト）
const desktopDir = path.resolve(pkgRoot, '..');
const targets = fs.readdirSync(desktopDir)
  .filter(name => {
    const targetSrc = path.join(desktopDir, name, 'node_modules', 'nlab-data', 'src');
    return name !== 'nlab-data' && fs.existsSync(targetSrc);
  })
  .map(name => ({
    name,
    srcDest: path.join(desktopDir, name, 'node_modules', 'nlab-data', 'src'),
  }));

if (targets.length === 0) {
  console.log('同期先が見つかりません。各プロジェクトで npm install --install-links を先に実行してください。');
  process.exit(0);
}

console.log(`=== nlab-data 同期 (${isDryRun ? 'DRY RUN' : '実行'}) ===\n`);
console.log(`ソース: ${srcDir}`);
console.log(`同期先: ${targets.map(t => t.name).join(', ')}\n`);

const srcFiles = fs.readdirSync(srcDir).filter(f => f.endsWith('.ts'));

for (const target of targets) {
  console.log(`[${target.name}]`);
  for (const file of srcFiles) {
    const src = path.join(srcDir, file);
    const dest = path.join(target.srcDest, file);
    if (!isDryRun) {
      fs.copyFileSync(src, dest);
    }
    console.log(`  ${isDryRun ? '(dry)' : '✓'} ${file}`);
  }
}

console.log('\n同期完了。両サイトで npm run build を実行して変更を確認してください。');
