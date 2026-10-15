# Cap'nShare

Cap'nShare is a Vite, React, and TypeScript interface concept for sharing surplus food on a campus. It demonstrates a landing page, food listings and detail pages, mock login and signup, a dashboard, a food-post form, and a profile screen.

The repository contains browser-side code and sample data. Login, signup, posting, claiming, and profile flows are simulations. The project has no server, verified identity, food-safety review, durable listings, messaging, claim coordination, or notification service. Do not use the current interface to coordinate real food pickups or enter real personal information.

## Features represented in the interface

- Responsive pages styled with Tailwind CSS.
- Client-side routes for the landing page, authentication screens, dashboard, food listings, food detail, posting, profile, and a not-found page.
- Search over the sample food titles and descriptions.
- Location, distance, availability, and sort controls displayed on the listings screen.
- Local mock user state and sample food cards.
- Static landing-page impact figures, testimonials, contact details, and external food photos.

The app currently applies the search term to the in-memory sample data. The other listing filters are interface controls only. Food data is imported from a fixed mock array. Posting a food item and requesting a claim wait briefly and show a success-like transition without saving a record or contacting another user. The login and signup screens accept the entered credentials through a mock context function; no account is created or verified.

## Technology

- React 18 and React Router 6
- TypeScript 5
- Vite 5
- Tailwind CSS 3 with PostCSS and Autoprefixer
- Lucide React icons
- ESLint 9

See package.json and package-lock.json for declared dependency ranges and locked versions.

## Run locally

Requirements: Git, Node.js compatible with the Vite version in the lockfile, and npm.

    git clone https://github.com/Brajesh31/cap-and-share.git
    cd cap-and-share
    npm ci
    npm run dev

Open the local URL printed by Vite, usually http://localhost:5173. No database or environment variable is needed by the current code.

## Available scripts

- npm run dev starts the Vite development server.
- npm run build creates a production bundle in dist.
- npm run preview serves the most recent production build locally.
- npm run lint runs ESLint.

There is no test script or automated test suite in the package manifest.

## Routes

| Path | Screen |
| --- | --- |
| / | Landing page |
| /login | Demo login form |
| /signup | Demo signup form |
| /dashboard | Dashboard with fixed sample metrics and posts |
| /food | Sample food listings and title/description search |
| /food/:id | Sample food details and simulated claim request |
| /post-food | Food-post form with simulated completion |
| /profile | Mock profile and fixed statistics |
| Any other path | Not-found page |

The route table is defined in src/App.tsx. Routes are rendered inside a shared Header and Footer. The routes are not access-controlled; typing /dashboard, /post-food, or /profile directly does not require authentication.

## Project structure

    index.html                    HTML shell and Google Fonts link
    src/main.tsx                  React entry point and global CSS import
    src/App.tsx                    Auth context, shared shell, and route table
    src/context/AuthContext.tsx    Simulated auth state stored in localStorage
    src/types/food.ts              FoodPost TypeScript shape
    src/data/mockData.ts           Fixed sample food listings
    src/pages/                     Route-level screens
    src/components/                Shared layout and food card components
    src/index.css                  Tailwind directives
    tailwind.config.js             Tailwind content paths and theme
    docs/                          Project and operational guides

Read the [architecture guide](docs/architecture.md), [installation guide](docs/installation.md), and [development guide](docs/development.md) for implementation details.

## Important prototype limitations

- The auth context accepts any submitted email and password after a delay. It stores a demo profile in browser localStorage; it does not verify credentials or protect routes.
- The post-food screen navigates to the dashboard after a delay but does not add the submitted item to the listings.
- The claim screen displays “Request sent” after a delay but does not send or store a request.
- Profile edits and statistics are local or hard-coded. Edits are not saved to the auth profile.
- Location, distance, availability-time, and sort controls do not filter or sort the listings. Only title and description search is applied.
- Landing-page impact figures and testimonials are static sample content, not measured results.
- Photos are hotlinked from Pexels. The page also requests Inter from Google Fonts.
- The footer points to routes such as feedback, FAQ, terms, privacy, and contact that are not in the app route table. Its menu download target is absent from this repository.
- index.html points to /vite.svg, but this repository does not contain that asset.

See [troubleshooting](docs/troubleshooting.md), [deployment](docs/deployment.md), and [security](SECURITY.md) before sharing or hosting the interface.

## Contributing and security

Read [CONTRIBUTING.md](CONTRIBUTING.md) before proposing a change. Report security issues privately as described in [SECURITY.md](SECURITY.md). Do not post sensitive details in public issues.

## License

The project source is offered under the MIT License. See [LICENSE](LICENSE). External image, font, and dependency assets may have separate terms; confirm their usage rights before redistribution.

Last updated: 2026-10-15 13:52 UTC
