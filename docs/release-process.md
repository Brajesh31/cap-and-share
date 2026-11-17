# 🚀 Release Process

## Current delivery model

The repository builds as a Vite static site. No deployment platform or release automation is defined here beyond the existing README timestamp workflow. Follow the hosting provider's documented procedure and preserve the previous known-good artifact.

## Pre-release checks

- [ ] Confirm the intended commit and reviewed change set.
- [ ] Run `npm ci`.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Test changed routes and direct nested-route refresh.
- [ ] Review keyboard access, labels, focus, and responsive layout.
- [ ] Check browser console and network failures.
- [ ] Confirm no secrets, personal data, or local files are committed.
- [ ] Verify external images/fonts and their usage rights.
- [ ] Update README/docs/changelog when behavior or setup changes.
- [ ] Confirm all public claims, screenshots, and impact metrics are accurate.

## Deploy

1. Build the reviewed commit.
2. Publish the contents of `dist/` as the static document root.
3. Apply the BrowserRouter history fallback described in [deployment.md](deployment.md).
4. Open the root and all primary routes directly.
5. Refresh nested routes and verify static assets load.
6. Keep the previous artifact/release identifier available for rollback.

## Rollback

Restore the previous known-good static artifact using the hosting provider's release mechanism. Verify the root and nested routes after rollback. If the release exposed sensitive information, treat rollback as containment only and follow the security incident process.

## Release record template

Record the release commit, date, person responsible, checks executed, deployment target, smoke-test result, known limitations, and rollback reference.

A release is not production-ready merely because the Vite build succeeds. Real food sharing requires the backend, identity, safety, privacy, moderation, and operational controls described in the relevant guides.
