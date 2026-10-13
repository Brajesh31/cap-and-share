# Architecture

## System shape

Cap'nShare is a client-side single-page application. Vite serves the development app and bundles React and TypeScript into static files. There is no application server, API, database, authentication provider, notification service, or durable food-sharing workflow.

Render flow:

index.html → src/main.tsx → src/App.tsx → AuthProvider and BrowserRouter → shared Header, selected route page, shared Footer.

## Main modules

| Module | Location | Responsibility |
| --- | --- | --- |
| HTML shell | index.html | Root element, title, favicon URL, Google Fonts link, Vite entry |
| React entry | src/main.tsx | Creates the React root, enables StrictMode, imports global styles |
| App and routes | src/App.tsx | Wraps the app in AuthProvider and BrowserRouter; renders shared layout and route table |
| Authentication context | src/context/AuthContext.tsx | Demo login/signup/logout state and browser localStorage profile |
| Food type | src/types/food.ts | FoodPost interface used by the sample listings |
| Sample data | src/data/mockData.ts | Twelve fixed food records with timestamps calculated when the module loads |
| Pages | src/pages/ | Landing, login, signup, dashboard, listing, detail, post-food, profile, and not-found views |
| Shared components | src/components/ | Header, footer, and food listing card |
| Styles | src/index.css and Tailwind config | Tailwind directives, content scanning, font and color extensions |

## Routes

The route table is in src/App.tsx:

| Path | Screen |
| --- | --- |
| / | LandingPage |
| /login | LoginPage |
| /signup | SignupPage |
| /dashboard | Dashboard |
| /food | FoodListings |
| /food/:id | FoodDetails |
| /post-food | PostFood |
| /profile | ProfilePage |
| * | NotFoundPage |

The header and footer wrap all route pages. Routes are not protected: the dashboard, profile, and post-food page can be opened without signing in. Several footer destinations, including feedback, FAQ, terms, privacy, and contact, are not declared in the route table.

## Data and interaction flow

FoodListings and Dashboard read from the imported mockFoodPosts array. FoodDetails selects an item by ID from the same array. FoodPost submission waits and navigates to the dashboard without adding the form data to a list. Claim submission changes local component state to show a confirmation without sending a request. Listing search filters title and description; displayed location, distance, availability, and sorting controls do not change the result set.

AuthProvider accepts login and signup values after a delay, constructs the same demo user identity, and stores the profile in localStorage under the user key. On startup it parses that value and restores client-side state. This is not identity verification or authorization. Profile edits are held in local page state and are not written back to AuthContext.

## External resources

Food photography is loaded from Pexels image URLs in source data and pages. Inter is requested from Google Fonts. These resources require network access and are not part of the local build artifact. The HTML also requests /vite.svg, which is absent from the tracked repository.

## Operational boundary

The current application is suitable for demonstrating a frontend concept. Real food exchanges require server-backed listings and claims, identity and authorization, data retention decisions, privacy safeguards, and safe pickup workflows. Document any future backend and data contract in api.md and database.md before implementing real user operations.
