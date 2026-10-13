# Development

## Source organization

- src/main.tsx bootstraps React and imports src/index.css.
- src/App.tsx declares BrowserRouter routes and the shared page shell.
- src/context/AuthContext.tsx holds the demo user state.
- src/data/mockData.ts and src/types/food.ts define sample food records and their TypeScript shape.
- src/pages contains route-level screens.
- src/components/layout contains Header and Footer.
- src/components/food contains FoodCard.
- tailwind.config.js scans the HTML and TypeScript/TSX source and extends the color palette and Inter font.

See architecture.md for the route and data-flow overview.

## Local workflow

    npm ci
    npm run dev

Make a focused change in the page, component, context, or data source responsible for the behavior. Keep sample behavior explicit and update documentation when a feature becomes connected to a real service.

Before proposing a change, run the available checks:

    npm run lint
    npm run build

No test runner or test script is configured. For UI updates, inspect affected routes on mobile and desktop widths, use keyboard navigation, and review browser console and network requests. State what was checked in the pull request.

## TypeScript and UI conventions

The application uses TypeScript with strict checking and unused local/parameter checks in tsconfig.app.json. Keep route data and component props typed. Use semantic HTML controls with associated labels, accessible names, keyboard behavior, and visible focus.

The styling approach uses Tailwind utility classes. Tailwind's content paths include index.html and src JavaScript/TypeScript files. If adding a dynamic class name, ensure Tailwind can discover the class or extend the configuration intentionally.

## Data and authentication changes

The mock auth context stores a user profile in localStorage but does not validate credentials with a service. Do not add real account or role claims to client-controlled state and treat them as trusted authorization. Server-side enforcement is required for real access control.

Food posts, profile edits, claim requests, and impact numbers are not durable. If implementing persistence, update api.md, database.md, SECURITY.md, and deployment.md to match the actual service and data behavior.

## Dependency and repository hygiene

Update package.json and package-lock.json together when changing dependencies. Do not commit node_modules, dist, local environment files, credentials, or real user data. The current app does not read environment variables; see ../.env.example.

## Pull requests

Follow ../CONTRIBUTING.md. Summarize affected routes, the user-visible change, accessibility considerations, available validation performed, and any known limitations. Report security issues through the private process in ../SECURITY.md.
