# 📚 Cap'nShare Documentation Hub

Welcome to the project documentation. This directory describes the implementation that exists today and sets out the engineering and operational requirements for future development.

> ⚠️ **Prototype boundary:** Cap'nShare is currently a browser-only React prototype backed by fixed sample data. It does not coordinate real food collection, authenticate people, persist listings, or send claim requests. Do not enter real personal information or use it to arrange a real pickup.

## 🧭 Guides

| Guide | What it covers |
|---|---|
| [Architecture](architecture.md) | Browser runtime, modules, routes, and current data flow |
| [Installation](installation.md) | Local setup and npm commands |
| [Development](development.md) | Source conventions, checks, and change workflow |
| [API and integrations](api.md) | Current absence of an application API and requirements for one |
| [Database and persistence](database.md) | Mock data, local storage, and future persistence considerations |
| [Deployment](deployment.md) | Static hosting and BrowserRouter fallback |
| [Troubleshooting](troubleshooting.md) | Common local and hosting issues |
| [FAQ](faq.md) | Project scope and common questions |
| [Food safety](food-safety.md) | Safety principles for any future real-world food-sharing workflow |
| [Privacy](privacy.md) | Current browser data behavior and future privacy requirements |
| [Accessibility](accessibility.md) | Review checklist for UI changes |
| [Testing strategy](testing.md) | Checks available today and a practical future test matrix |
| [Product requirements](product-requirements.md) | Problem framing, intended user journeys, and non-goals |
| [Threat model](threat-model.md) | Prototype risks and controls required before launch |
| [Observability](observability.md) | What can be monitored today and future operational signals |
| [Release process](release-process.md) | Review and release checklist |
| [Glossary](glossary.md) | Shared project terminology |

## 🗺️ Diagrams and visual assets

- [System architecture](diagrams/system-architecture.mmd)
- [Current food-sharing interaction](diagrams/food-sharing-flow.mmd)
- [Current authentication flow](diagrams/auth-flow.mmd)
- [Future safe exchange boundary](diagrams/future-trust-boundaries.mmd)
- [Diagram guide](diagrams/README.md)
- [Project banner](assets/capnshare-banner.svg)
- [Food-sharing illustration](assets/food-sharing-illustration.svg)

## 🧰 Templates

The templates directory contains reusable checklists and review documents:
- [Bug investigation](templates/bug-investigation.md)
- [Feature proposal](templates/feature-proposal.md)
- [UI/accessibility review](templates/ui-accessibility-review.md)
- [Food-safety review](templates/food-safety-review.md)
- [Release checklist](templates/release-checklist.md)
- [Test plan](templates/test-plan.md)
- [Incident report](templates/incident-report.md)

## 🔎 Documentation principles

1. Describe current code separately from proposed future behavior.
2. Do not call a mock interaction a completed transaction.
3. Do not publish real contact details, credentials, pickup locations, or personal data in examples.
4. Update the relevant guide whenever routes, data models, dependencies, or runtime behavior change.
5. Record checks actually run. Never claim a test passed when it was not executed.

For repository contribution rules, see [CONTRIBUTING.md](../CONTRIBUTING.md). For security reporting, see [SECURITY.md](../SECURITY.md).
