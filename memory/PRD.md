# PRD — TanStack Start to Next.js App Router Migration

## Original Problem Statement
Migrate an existing TanStack Start + Vite + TypeScript application to Next.js (latest stable), using App Router, preserving all functionality/business logic, minimizing rewrites, and ensuring production readiness with successful build/lint/route validation.

## Architecture Decisions
- Migrated routing from TanStack file routes to Next.js App Router (`/app`) with:
  - Static pages for top-level routes (`/`, `/services`, `/industries`, `/service-areas`, `/resources`, `/case-studies`, `/contact`)
  - Dynamic slug route (`/app/[slug]/page.tsx`) for service detail and city pages
  - Native metadata routes: `app/sitemap.ts` and `app/robots.ts`
- Preserved reusable code in `src/components`, `src/data`, `src/hooks`, `src/lib` with minimal edits.
- Introduced `app/providers.tsx` as client boundary for global providers:
  - `QueryClientProvider` (stable `QueryClient` via `useState` initializer)
  - `Sonner` toaster
- Kept root layout as Server Component (`app/layout.tsx`), with providers and site shell composition.
- Preserved SEO parity via per-route metadata and dynamic metadata generation for slug pages.
- Preserved styling stack with Tailwind v4 + existing global CSS (`src/styles.css`) and added `@source` support for `/app` files.
- Removed legacy TanStack Start/Vite routing stack files and configs once parity was achieved.

## What Has Been Implemented
- Next.js foundation and config:
  - `next.config.ts`, `next-env.d.ts`, `postcss.config.mjs`, `.eslintrc.json`
  - scripts updated to `next dev/build/start/lint`
  - strict TypeScript config aligned for Next
- Routing migration:
  - Implemented all prior URLs in App Router
  - Added `not-found.tsx`, `error.tsx`, `loading.tsx`
- Component migration:
  - Replaced TanStack `Link` usage with Next.js `Link`
  - Added client boundaries where required (`Header`, `EstimateForm`, `Hero`, `Reveal`, `sonner`, `use-mobile`)
- SEO migration:
  - Route metadata parity for static and dynamic pages
  - `robots.txt` and `sitemap.xml` via metadata route files
- Browser-only and hydration safety:
  - Preserved browser-dependent behavior inside client components
  - Added `data-scroll-behavior="smooth"` to `<html>` to satisfy Next warning
- Legacy stack removal:
  - Removed TanStack Start route/entry files and Vite config
  - Removed legacy robots public file in favor of `app/robots.ts`
- Validation:
  - `yarn build` passes
  - `yarn lint` passes
  - manual route checks and screenshot-based flow checks completed
  - supervisor frontend process verified running after production build (`next start`)

## Prioritized Backlog

### P0
- Add `data-testid` comprehensively to **all** remaining interactive and critical user-facing elements across the full UI surface for robust automation coverage.
- Add explicit E2E test suite (Playwright) for route parity, navigation, and form interactions.

### P1
- Migrate from `next lint` script to ESLint CLI (`next lint` deprecation path) while preserving ruleset parity.
- Add optional route-level loading/error boundaries for major leaf routes if UX requires finer granularity.

### P2
- Add Next.js performance enhancements beyond parity:
  - selective dynamic imports for heavy non-critical UI blocks
  - evaluate `next/image` where asset usage is introduced
  - audit bundle composition and split opportunities

## Next Tasks
1. Implement complete `data-testid` coverage audit.
2. Add automated E2E regression suite and CI checks.
3. Migrate lint workflow from `next lint` to ESLint CLI command.