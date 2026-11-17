# 🥗 Food Safety and Responsible Sharing

## 1. Scope

This guide defines safety considerations for a future real-world Cap'nShare service. The current repository is a frontend prototype. It does not inspect, approve, store, or coordinate actual food exchanges. This document is guidance, not a certification that any item is safe to eat.

## 2. Core principles

- **Voluntary sharing:** A listing must never imply that a recipient is obligated to accept food.
- **Transparent description:** The person offering food should describe ingredients, preparation time, storage conditions, and known allergen risks accurately.
- **No safety guarantees:** The interface cannot determine whether food is safe. Avoid labels such as “verified safe” unless a real, accountable review process exists.
- **Respectful pickup:** A future exchange should use a public, agreed campus location and a clear time window. Do not expose private room numbers or personal addresses publicly.
- **Stop when uncertain:** When storage, preparation, contamination, or expiry is uncertain, do not distribute the item.

## 3. Listing information to consider

A production listing workflow should consider collecting:
- Food name and plain-language description.
- Whether the food is packaged, homemade, or commercially prepared.
- Preparation or opening time, where known.
- Storage conditions and whether temperature control was maintained.
- Ingredient information and known allergens, with an explicit “unknown” option.
- Number of portions and realistic collection deadline.
- A way to withdraw or report a listing.

Do not assume the absence of an allergen disclosure means an item is allergen-free.

## 4. Handling and pickup

A future product should provide clear, locally reviewed guidance for safe transport and handoff. It should not recommend leaving perishable food unattended. It should support cancellation when the donor or recipient notices a safety concern. A pickup confirmation is not proof of food quality or safe handling.

## 5. Prohibited product assumptions

The app must not:
- Automatically certify food based on a form submission or photo.
- Treat a countdown timer as a food-safety assessment.
- Encourage users to consume food with unknown storage history.
- Hide allergen uncertainty behind a generic badge.
- Claim regulatory compliance without qualified review.

## 6. Reporting and moderation requirements

Before launch, define:
- A clear report-food-safety action.
- A process to hide a disputed listing while it is reviewed.
- A trained, accountable moderation owner.
- Response expectations and escalation criteria.
- A record of moderation decisions with limited access and retention.
- An appeal or correction path for inaccurate reports.

## 7. UI copy guidance

Prefer: “Ingredients and storage details are provided by the donor. Please review them and make your own decision.”

Avoid: “100% safe”, “allergen-free” without substantiation, or “approved” when no review occurred.

## 8. Review checklist

- [ ] Allergen information is not represented as guaranteed complete.
- [ ] Preparation/storage details have clear unknown states.
- [ ] Users can cancel or report a concern.
- [ ] The UI avoids safety guarantees.
- [ ] Pickup guidance avoids exposing private addresses.
- [ ] The process has been reviewed by qualified local stakeholders before real-world use.

**Important:** Food safety rules vary by jurisdiction and food type. Obtain qualified local guidance before operating a real food-sharing program.
