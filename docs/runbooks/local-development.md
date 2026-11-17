# 🧑‍💻 Runbook: Local Development

## Purpose

Start the Cap'nShare prototype and diagnose common local failures.

## Prerequisites

- Git installed.
- Node.js compatible with the Vite version in package-lock.json.
- npm.
- Network access for dependency installation and externally hosted fonts/photos.

## Procedure

```bash
git clone https://github.com/Brajesh31/cap-and-share.git
cd cap-and-share
npm ci
npm run dev
```

Open the URL printed by Vite, usually http://localhost:5173.

## Validate a change

```bash
npm run lint
npm run build
npm run preview
```

## Troubleshooting

1. If dependencies are inconsistent, remove the local node_modules directory and rerun npm ci. Do not delete package-lock.json.
2. If the dev port is occupied, stop the process using it or use Vite's supported port option.
3. If images/fonts fail, inspect the browser Network panel. They may be external resources.
4. If a route renders blank, inspect the console and route table in src/App.tsx.
5. If a nested route fails only after deployment refresh, follow static-deployment.md.

## Boundaries

No database, API, or environment file is required by the current app. Do not create fake backend credentials or claim that the app is connected to a production service.
