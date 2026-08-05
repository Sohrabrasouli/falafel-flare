# Falafel Flare

A cinematic, one-page restaurant website for Falafel Flare in Hayward.

The public experience uses owner-approved restaurant photography, clear anchored navigation, a still-image motion system, direct ordering through Orders.co, catering through ezCater, and verified visit information.

## Run locally

Use Node.js 22.13 or newer.

```bash
npm install
npm run dev
npm run lint
npm test
```

The local preview runs at `http://localhost:3001/`.

## Verify the GitHub Pages release

```bash
npm run test:pages
```

The GitHub Pages workflow builds a static export at `dist/client`, scopes every asset to `/falafel-flare`, verifies hydration, and deploys after changes reach `main`.

The source-of-truth content files live at `../../04_CONTENT_AND_ASSETS/`.
