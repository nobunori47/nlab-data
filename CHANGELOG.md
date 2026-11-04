# nlab-data Changelog

## v1.0.0 — 2026-11-04

### Added
- Initial release
- `SharedWork` type and `SharedWorkId` union type
- `sharedWorks` canonical data record for `coffee-01`
- Helper functions: `formatEvidenceString`, `getYoutubeThumbnailUrl`, `getYoutubeShortsUrl`
- `scripts/sync.js` for local development sync
- `scripts/verify-sync.ts` for integrity verification

### Works included
- `coffee-01`: Coffee PR video (YouTube: gT1S0n6xa3Y, 25min, 5cr, ¥2,578/mo)

---

## Versioning rules

- **Bump version and create a git tag for every change to `src/`**
- Both sites (`nlab-main-v2`, `nlab-video-studio`) must reference a specific tag, not `#main`
- After tagging: update `package.json` in both sites to `github:nobunori47/nlab-data#vX.Y.Z`
- Never reference `#main` in production — only use tags

### Tag format: `vMAJOR.MINOR.PATCH`
- PATCH: add/update work data (non-breaking)
- MINOR: add new fields to SharedWork (non-breaking)
- MAJOR: breaking type changes or field renames
