# 🧪 Testing Strategy

## Current test tooling

The package manifest exposes:
- `npm run lint` for ESLint.
- `npm run build` for the Vite production build.
- `npm run dev` and `npm run preview` for manual browser checks.

There is currently no test runner, test script, component test suite, end-to-end suite, or CI test workflow in the project. Do not describe lint/build as application behavior tests.

## Baseline validation

Run from the repository root:

```bash
npm ci
npm run lint
npm run build
```

Record the Node.js and npm versions and the result of each command in a change report. A successful build verifies compilation and bundling, not the correctness of food-sharing flows.

## Manual route matrix

| Area | Scenario | Expected current behavior |
|---|---|---|
| Landing | Open `/` | Landing page and shared layout render |
| Login | Submit sample credentials | Mock user state is created locally |
| Signup | Submit sample form | Mock user state is created locally |
| Dashboard | Open `/dashboard` directly | Static sample metrics/posts render, no auth gate |
| Listings | Search a title/description | In-memory sample list is narrowed |
| Listings | Change visual filter controls | Controls are not fully wired to filtering |
| Food detail | Open known sample ID | Matching sample detail renders |
| Claim | Submit claim form | Local confirmation state only, no request sent |
| Post food | Submit form | Simulated completion navigates, no record saved |
| Profile | Edit profile values | Local page state only |
| Unknown route | Open an undeclared path | Not-found screen renders |

## Regression checklist

- [ ] Existing route paths still resolve.
- [ ] Shared header and footer render.
- [ ] Loading and error states remain understandable.
- [ ] Empty and long text does not break layout.
- [ ] Forms remain keyboard accessible.
- [ ] Browser refresh works on nested routes in the deployment environment.
- [ ] No console errors or unexpected network calls are introduced.
- [ ] No secrets or personal data are written to logs or committed.

## Recommended future test layers

When test infrastructure is introduced, add tests in small, useful increments:
1. Unit tests for pure formatting, validation, and filtering utilities.
2. Component tests for forms, status announcements, and empty/error states.
3. Integration tests for route/context behavior.
4. End-to-end tests for actual server-backed signup, posting, claims, cancellation, and reporting.
5. Security tests for authorization, input validation, rate limits, and abuse cases.

Use deterministic fixtures and fake time for expiry-related tests. Never use real personal information in test fixtures.
