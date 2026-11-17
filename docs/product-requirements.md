# 🧭 Product Overview and Requirements

## Product concept

Cap'nShare explores a campus-oriented way for people and organizations to make surplus food visible to others who may want it. The prototype provides interface concepts for browsing sample food, viewing details, and entering donor/recipient-oriented screens.

## Problem framing

Campus events, meetings, and shared kitchens can produce surplus portions while other campus members may be looking for food. A useful service would need to make availability understandable while protecting privacy and handling safety concerns responsibly.

This is a product hypothesis, not a measured impact claim. The repository's landing-page figures and testimonials are static sample content and should not be presented as validated outcomes.

## Personas to validate

| Persona | Need to validate | Important concern |
|---|---|---|
| Student recipient | Discover suitable available portions | Trust, allergens, timing, pickup location |
| Student donor | Share surplus portions with minimal effort | Privacy, safety, no-show handling |
| Campus organization | Coordinate event surplus | Accountability, volume, moderation |
| Moderator | Respond to reports and unsafe listings | Clear policy, audit trail, escalation |

These are design personas, not verified research findings.

## Existing interface journeys

### Browse sample food
Landing page → food listings → search → food detail.

### Demonstrate posting
Dashboard → post-food form → simulated success transition. No listing is created.

### Demonstrate claiming
Food detail → claim form → simulated confirmation. No donor notification or claim record is created.

### Demonstrate account screens
Login/signup → mock auth context → localStorage profile. No identity provider is involved.

## Current non-goals

The current repository does not provide:
- Real-time or authoritative inventory.
- Verified campus identity.
- Server-side authorization.
- Food-safety inspection or certification.
- A durable claim, handoff, cancellation, or dispute workflow.
- Messaging, push/email notifications, or moderation tooling.
- Verified impact analytics.

## Production acceptance themes

Before a real pilot, define measurable acceptance criteria for:
- Listing accuracy and expiry handling.
- Donor ownership and recipient permissions.
- Clear ingredient/allergen uncertainty.
- Claim lifecycle, cancellation, and no-show handling.
- Safe and privacy-preserving handoff.
- Abuse reporting and moderation.
- Data deletion, access, and incident response.
- Accessibility and mobile usability.
- Support ownership and service availability.

A product launch decision should be based on user research, operational readiness, safety review, privacy/security review, and a tested backend. The current UI alone is not sufficient.
