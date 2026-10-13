# Roadmap

This roadmap lists possible work based on the repository's current prototype state. It is not a delivery commitment or schedule. Discuss scope in an issue before starting a substantial change.

## Current state

The app demonstrates a set of React routes and sample food-sharing workflows. Authentication, listings, posting, claims, profile persistence, and impact statistics are client-side simulations or fixed sample data.

## Near-term prototype improvements

- Mark mock data, testimonials, impact counts, and simulated actions clearly in the interface.
- Fix the missing favicon reference and remove or implement footer links to unavailable routes and the absent menu download.
- Make listing controls apply their displayed location, availability, distance, and sort filters.
- Improve validation, keyboard interaction, accessible names, responsive layout, and error handling.
- Validate stored localStorage data and provide a recovery path for malformed values.
- Add a not-found view for invalid food IDs and meaningful route-level error states.
- Add sustainable automated checks for routes, forms, filtering, and important rendering behavior.

## Before real-world use

A real campus sharing service needs a separate, reviewed design for identity verification, server-side authorization, durable food listings, claim coordination, personal-data handling, abuse prevention, food-safety guidance, moderation, support, and incident response. Select and document the backend and deployment model before replacing mock functions with real services.

## Suggesting a change

Open an issue describing the user need, measurable outcome, affected routes, data involved, and operational requirements. Priorities may change as maintainers review proposals.
