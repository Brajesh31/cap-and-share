# Contributing

Thanks for considering a contribution to Cap'nShare. Changes should make the prototype clearer, more accessible, safer to understand, or easier to maintain. Keep documentation accurate about which workflows are mock interactions.

## Before you begin

1. Read the README and the relevant files under docs.
2. Search existing GitHub issues for a related report or proposal.
3. Open an issue before substantial changes so scope and approach can be discussed.
4. Do not commit credentials, private user data, or images and copy without appropriate rights.

The repository is maintained by Brajesh Kumar, GitHub account @brajesh31. Maintainer review is required before a contribution is merged.

## Report a bug

Open an issue in this repository and include:

- A concise title and the affected route or component.
- Reproduction steps and expected versus observed behavior.
- Browser, operating system, and whether the issue occurs locally or after deployment.
- Relevant browser console or network errors, with private information removed.
- Screenshots or recordings for visual issues where useful.

Use the private process in SECURITY.md for vulnerabilities. Do not publish exploit details or personal information in a public issue.

## Propose a feature

Describe the user problem, the expected behavior, affected routes, and any data or service required. Distinguish a visual prototype from a feature that will handle real accounts, food listings, claims, or contact details. Real food sharing needs verified identity, privacy controls, safe handling guidance, authorization, and operational workflows; a front-end form alone is not sufficient.

## Prepare a change

1. Fork the repository and branch from main. Suggested branch names include docs/improve-setup, fix/missing-favicon, or feature/listing-filters.
2. Keep the change focused and follow the existing React, TypeScript, Tailwind, and Vite patterns.
3. Prefer semantic, keyboard-accessible controls with labels and clear focus states.
4. Keep sample content visibly identified as sample content. Do not present invented impact metrics or testimonials as measured facts.
5. Explain and limit dependency changes. When dependencies change, update package.json and package-lock.json together.
6. Update docs when routes, data behavior, setup, deployment, or security boundaries change.
7. Do not commit node_modules, dist, local environment files, credentials, or unrelated generated output.

## Review before submitting

Install from the lockfile and run the available checks:

    npm ci
    npm run lint
    npm run build

There is no automated test script configured. For interface changes, inspect the affected route at small and large viewport widths, exercise keyboard operation, and check the console and Network panel. Include the checks you ran and any limitations in your pull request.

## Commit and pull request

Use a clear commit subject that explains the change, such as:

- docs: clarify mock authentication behavior
- fix: correct missing favicon reference
- feat: apply location filter to food listings

Open a pull request against main. Summarize the reason for the change, behavior affected, validation performed, screenshots for visual changes, and known limitations. Link the related issue and respond to review feedback with focused updates.

## License and conduct

By submitting a contribution, you agree it may be distributed under this repository's MIT License. You confirm you have the right to submit the contribution and any required third-party attribution. Follow CODE_OF_CONDUCT.md in project spaces.
