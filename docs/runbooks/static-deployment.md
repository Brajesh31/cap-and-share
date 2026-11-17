# 🚀 Runbook: Static Deployment

## Scope

This procedure applies to the current Vite frontend only. It does not deploy an API or database.

## Build

```bash
npm ci
npm run lint
npm run build
```

Publish the contents of the generated dist/ directory to the static host's document root.

## SPA route fallback

The app uses BrowserRouter. Configure the host to serve index.html for application routes that do not match a physical asset. Do not rewrite missing JavaScript, CSS, image, or font assets to index.html.

Example Apache fallback, adapt and test it for the actual hosting environment:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Smoke test

- [ ] Root route loads.
- [ ] /food loads directly.
- [ ] /food/<known-id> loads directly.
- [ ] Refresh on nested routes returns the app, not a host 404.
- [ ] Built JS/CSS assets return successful responses.
- [ ] Browser console has no unexpected runtime errors.
- [ ] External images/fonts behave as expected.

## Rollback

Restore the previous known-good dist artifact using the host's deployment history or backup. Re-run smoke tests after rollback.

## Important

The current app has no production authentication, persistence, moderation, or food-safety controls. A static deployment is a hosted demo, not a real food-sharing platform.
