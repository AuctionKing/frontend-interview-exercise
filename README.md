
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Assignments

  This is a pair programming exercise. You will be the driver, and your interviewer
  will be the navigator.

  This is a <strong>NextJS app (v16.x)</strong> that styled with
  <strong>Tailwindcss</strong> and uses <strong>shadcn/ui</strong>
  components. There are a set of mocked API endpoints, that each have a
  helper function configured for yo, that each have a helper function
  configured for you.

  - work-items: <a target="_blank" href="/api/work-items?page=1"> /api/work-items?page=1 </a>
  - bid-items: <a target="_blank" href="/api/bid-items"> /api/bid-items </a>

### Work Items Exercise

  On the <a href="/items">Work Items</a> page
  - Implement pagination for the list.
  - Add a filter by <strong>status</strong>.
  - Add a filter by <strong>priority</strong>.
  - Add a filter by <strong>type</strong>.
  - Add <strong>sort by</strong> any attributes of a work item.

### Bids Exercise
  On the <a href="/bids">Bids</a> page

  This page is meant to simulate a live auction environment where bids
  are constantly being placed on items. Your task is to implement a
  feature that allows users to increase their bid on one or more items.

  Your QA partners have complained that the UX of this page is horrible.
  Your job is to improve it.

### Hydration Exercise

  On the <a href="/hydration">[Hydration](/hydration)</a> page fix all the
  hydration issues.

