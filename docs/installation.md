# Installation

## Requirements

- Git
- Node.js compatible with the Vite version declared in package.json
- npm

No database, API credential, or environment variable is required by the current app.

## Clone and install

    git clone https://github.com/Brajesh31/cap-and-share.git
    cd cap-and-share
    npm ci

npm ci installs the locked dependency graph from package-lock.json. It is intended to fail if package.json and the lockfile are inconsistent. When changing dependencies, use npm and commit both files.

## Start the development server

    npm run dev

Vite prints a local address, usually http://localhost:5173. Open that address in a browser. Use the Vite server rather than opening index.html directly; the source entry uses browser modules and client-side routing.

## Other commands

    npm run lint
    npm run build
    npm run preview

The lint script runs ESLint. The build script emits static output into dist. Preview serves the latest production build locally; run the build first. There is no test script in package.json.

## Setup troubleshooting

- If npm ci fails, confirm Node and npm are available and that package.json and package-lock.json are aligned.
- If the development page is blank, inspect the browser console and confirm the root element and Vite entry load.
- If photos or the font are missing, check network access and the browser Network panel; they are requested from external services.
- If the page requests /vite.svg and receives a 404, that file is not present in the repository.
- If a deployed deep link returns 404, configure a single-page application fallback as described in deployment.md.
