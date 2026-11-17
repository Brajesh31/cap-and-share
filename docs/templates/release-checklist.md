# 🚀 Release Checklist

## Change record
- Release/version:
- Commit:
- Date:
- Owner:
- Deployment target:

## Build and quality
- [ ] npm ci
- [ ] npm run lint
- [ ] npm run build
- [ ] Manual regression on affected routes
- [ ] No unreviewed console/network errors

## UX and accessibility
- [ ] Responsive review
- [ ] Keyboard review
- [ ] Labels, focus, contrast, and image alternatives checked
- [ ] Loading, error, and empty states reviewed

## Privacy and security
- [ ] No credentials or personal data committed
- [ ] Browser-exposed configuration contains no secrets
- [ ] External providers/assets reviewed
- [ ] Security and privacy impact considered

## Documentation and communication
- [ ] README/docs updated
- [ ] Known limitations stated
- [ ] Changelog/release notes prepared
- [ ] Support/rollback owner identified

## Deployment verification
- [ ] Root route loads
- [ ] Nested routes load on direct navigation and refresh
- [ ] Assets load correctly
- [ ] Smoke test completed
- [ ] Previous artifact/rollback reference recorded

## Sign-off
State what was actually verified. Do not mark checks complete without evidence.
