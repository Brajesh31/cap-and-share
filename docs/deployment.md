# Deployment

## Build and publish

Cap'nShare is a Vite single-page application. A generic static deployment can install the locked dependencies and build the site:

    npm ci
    npm run build

Publish the contents of dist as the site's document root. The repository does not include a server application, backend, database, environment-specific deployment manifest, or required environment variables.

## Configure route fallback

The app uses BrowserRouter. Configure the static host to return the root index.html for application paths such as /food, /food/1, /dashboard, and /profile, while serving existing built assets normally. Without this history fallback, client-side navigation can work from / but refreshing a nested route may return a hosting-provider 404.

After deployment, open each route directly and refresh it to confirm the rewrite rule is active.

## Domain and path prefix

No deployment configuration is tracked that establishes a canonical custom domain or subpath. If hosting under a path prefix rather than the domain root, configure Vite's base option and verify React Router links and external/static asset URLs for that target.

## Third-party resources

The app requests food photos from Pexels and Inter from Google Fonts. Those requests require network access and depend on third-party availability and terms. Confirm media rights and privacy expectations before using the site for an organization. Replace remote URLs with reviewed and properly licensed assets when needed.

index.html refers to /vite.svg, but no matching asset is in the repository. Update the favicon reference or add an approved favicon before release to avoid a failed request.

## Production readiness

The current application has no real user authentication, route authorization, listing persistence, claims, or notification flow. Do not use it to collect personal data or coordinate actual food pickups. Before a real launch, implement and review a backend, identity and access controls, data lifecycle, abuse protections, food safety guidance, monitoring, support, and incident handling.

Landing-page impact metrics and testimonials are static content and must be verified or labeled as examples before public release. Check image and font licensing as part of release review.

## Rollback

Keep the previously deployed artifact or hosting release identifier so it can be restored quickly. If sensitive information is exposed in a future deployment, remove the active artifact and follow SECURITY.md, including credential rotation where applicable.
