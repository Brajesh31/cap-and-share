# API and integrations

## Application API status

The repository has no application API. Source code contains no fetch or Axios requests to a Cap'nShare backend, no server routes, and no API credentials. Food posts are read from a local imported array. Login, signup, posting, and claiming use client-side delay simulations.

These browser routes are React Router screens, not HTTP API endpoints:

| Route | Screen | Current behavior |
| --- | --- | --- |
| / | Landing page | Static content, links, images, and sample statistics |
| /login | Login | Accepts input through mock AuthContext logic |
| /signup | Signup | Creates a mock client-side user profile |
| /dashboard | Dashboard | Shows hard-coded metrics and sample posts |
| /food | Listings | Searches sample titles and descriptions |
| /food/:id | Detail | Displays a sample record and simulated claim confirmation |
| /post-food | Post form | Validates some required fields, waits, and navigates without saving |
| /profile | Profile | Displays local profile fields and fixed statistics |

The footer links to /feedback, /faq, /terms, /privacy, and /contact, but those paths are not declared application routes and display the not-found page. Its /menu.pdf link also has no corresponding file.

## Third-party requests

- Google Fonts serves Inter from the HTML entry point.
- Food photos are loaded from Pexels URLs embedded in source code.
- The package manifest declares React, React Router, Lucide React, Tailwind tooling, and a chat UI package. The current application source does not implement a chat API or service.

## Adding a real API

Before connecting a service, specify each operation's method, URL, request and response schema, authentication, authorization, validation, rate limits, error behavior, and data lifecycle. Keep secrets on the server. A Vite environment variable exposed to browser code is public and must not contain a credential.

Update this guide together with database.md, SECURITY.md, and deployment.md when adding a backend. UI success messages should only represent a completed server operation once the service is implemented and verified.
