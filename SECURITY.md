# Security Policy

## Supported code

Security reports are considered for the current main branch. This repository is a client-side prototype. It has no server-side authentication, authorization, database, or production food-claim service.

## Report privately

Do not disclose vulnerabilities in a public issue or pull request. Use GitHub's private vulnerability reporting for this repository if it is enabled:

https://github.com/Brajesh31/cap-and-share/security/advisories/new

If private reporting is unavailable, contact the maintainer, Brajesh Kumar (@brajesh31), through https://github.com/brajesh31. Include the affected route or commit, impact, reproduction steps, and a safe proof of concept. Remove real personal information and secrets.

## Areas to consider

Examples include unsafe handling of user input, dependency vulnerabilities, an exposed credential, or a deployment misconfiguration that compromises a real service. The current login and signup are mock flows and should not be treated as account security.

## Response

The maintainer will acknowledge and assess a report as reasonably soon as possible and coordinate on a fix and disclosure where practical. No fixed response or patch deadline is promised. Reporters may request attribution.

## Current security boundaries

- Login and signup accept submitted values through client-side mock functions. No password is checked against a server.
- The stored user object in localStorage is controlled by the visitor's browser. It is not a trustworthy identity or authorization token.
- Routes do not enforce authentication or roles. Dashboard, profile, and post-food screens are reachable directly.
- Food posts and claim requests are not persisted or sent to a service. Contact details typed into the claim form do not coordinate a pickup.
- The app has no server secrets or required environment variables. Anything included in the browser bundle is public.
- The auth context parses localStorage without validation; malformed data may break initialization.

Do not enter real passwords, phone numbers, addresses, or other private information into this prototype. A real food-sharing service requires a reviewed backend, validated identity, server-enforced authorization, privacy and retention controls, abuse protection, and operational food-safety processes.
