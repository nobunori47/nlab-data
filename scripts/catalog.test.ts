import { test } from 'node:test';
import * as assert from 'node:assert/strict';
import { sharedWorks, formatEvidenceString, getYoutubeShortsUrl, getYoutubeThumbnailUrl, portfolioCatalog, publishedPortfolio, serviceCatalog, pricingCatalog, formatPrice } from '../src/index';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { transpileModule, ModuleKind } from 'typescript';
import { runInNewContext } from 'node:vm';
import type { SharedWork, SharedWorkId } from '../src/index';

test('baseline files are unchanged and v1.0.0 data/functions remain compatible',()=>{
 for(const file of ['src/works.ts','src/types.ts']){
  const original=execFileSync('git',['show',`e4a6adb3090239ecf1016c461bd23eb34b07bcd5:${file}`],{encoding:'utf8'});
  assert.equal(readFileSync(file,'utf8'),original);
 }
 const oldSource=execFileSync('git',['show','v1.0.0:src/works.ts'],{encoding:'utf8'});
 const legacy: Record<string, any>={};
 runInNewContext(transpileModule(oldSource,{compilerOptions:{module:ModuleKind.CommonJS}}).outputText,{exports:legacy});
 for(const [key,value] of Object.entries(legacy.sharedWorks)){
   const current=sharedWorks[key as SharedWorkId];
   assert.equal(JSON.stringify(current),JSON.stringify(value));
   assert.equal(formatEvidenceString(current),legacy.formatEvidenceString(value));
   assert.equal(getYoutubeShortsUrl(current),legacy.getYoutubeShortsUrl(value));
   assert.equal(getYoutubeThumbnailUrl(current),legacy.getYoutubeThumbnailUrl(value));
 }
 const id: SharedWorkId='coffee-01';
 const work: SharedWork=sharedWorks[id];
 assert.equal(getYoutubeShortsUrl(work),'https://youtube.com/shorts/gT1S0n6xa3Y');
 assert.equal(getYoutubeThumbnailUrl(work),'https://img.youtube.com/vi/gT1S0n6xa3Y/hqdefault.jpg');
 assert.equal(getYoutubeShortsUrl(sharedWorks['beauty-01']),null);
 assert.equal(formatEvidenceString(work),'制作作業時間: 25分 / 使用クレジット: 5cr / ツール月額料金: ¥2,578（月額契約料）');
});
test('catalog relationships resolve and unverified drafts stay unpublished',()=>{
 const serviceIds=new Set(serviceCatalog.map(s=>s.id));
 assert.equal(serviceIds.size,3);
 assert.equal(new Set(portfolioCatalog.map(p=>p.id)).size,portfolioCatalog.length);
 assert.equal(portfolioCatalog.filter(p=>p.kind==='development').length,7);
 assert.ok(portfolioCatalog.some(p=>p.kind==='image'));
 for(const entry of portfolioCatalog){
  assert.ok(serviceIds.has(entry.serviceId));
  if(entry.sharedWorkId)assert.ok(sharedWorks[entry.sharedWorkId]);
  if(entry.publication==='published')assert.equal(entry.evidenceStatus,'source-reviewed');
  for(const link of entry.links)assert.equal(new URL(link.href).protocol,'https:');
 }
 assert.equal(publishedPortfolio.length,3);
 assert.ok(publishedPortfolio.every(p=>p.origin!=='paid-client'));
});
test('existing price policy is retained',()=>{
 const paid=pricingCatalog.filter(p=>p.kind==='from');
 assert.equal(paid.length,1);
 assert.equal(paid[0].amountYen,30000);
 assert.equal(paid[0].tax,'exclusive');
 assert.equal(formatPrice(paid[0]),'30,000円〜');
 assert.equal(formatPrice(pricingCatalog[0]),'無料');
 assert.equal(formatPrice(pricingCatalog[2]),'個別お見積もり');
});
