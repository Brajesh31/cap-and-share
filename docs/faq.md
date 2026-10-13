# Frequently asked questions

## What is Cap'nShare?

It is a React, TypeScript, and Vite interface concept for campus food sharing. It includes landing, listing, detail, account-form, dashboard, posting, and profile screens.

## Can people use it to share or claim real food?

No. The app has no backend or real pickup coordination. Posting and claim forms only simulate completion. Do not use it to arrange real food exchanges.

## Does login create a secure account?

No. Login and signup accept submitted form data in a client-side mock context. The demo profile is stored in browser localStorage. There is no identity verification, password checking, or route authorization.

## Are listings saved?

No. Listings come from a sample array in src/data/mockData.ts. A submitted food post does not add an item to this array or survive a reload.

## Which listing filters work?

The title and description search works against the mock records. Location, distance, available-time, and sort controls do not currently affect results.

## Why do expiry times change after a reload?

The sample timestamps are computed relative to the current time when the mock data module loads. They are demonstration values rather than persisted availability data.

## Does the project use an API or database?

No application API or database is included. See api.md and database.md.

## Are environment variables required?

No. The current app does not read environment variables. Do not put secrets in a Vite variable that is bundled into browser code.

## Is there a test suite?

The package manifest defines lint, build, dev, and preview scripts but no test script. See CONTRIBUTING.md for review guidance.

## Why do some footer links fail?

Feedback, FAQ, terms, privacy, contact, and the menu PDF destination are referenced by the footer, but their routes or file are absent. Unmatched app paths show the not-found screen.

## How can I contribute or report a vulnerability?

Read ../CONTRIBUTING.md for contribution steps. Report security issues privately using ../SECURITY.md, not in a public issue.
