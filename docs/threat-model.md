# 🛡️ Threat Model

## Scope and assumptions

This threat model describes risks relevant to the current browser-only prototype and the additional risks that would arise if Cap'nShare became a real service. It is not a penetration test or security certification.

## Assets

- User profile values stored in browser localStorage.
- Food listing and claim details entered into UI forms.
- Future account credentials and session tokens, if authentication is implemented.
- Future donor/recipient contact and pickup information.
- Future moderation reports and operational records.

## Trust boundaries

1. Browser UI to browser storage.
2. Browser to third-party image/font hosts.
3. Future browser-to-API boundary.
4. Future API-to-database and notification-provider boundaries.
5. Future moderator/admin access boundary.

## Current risks

| Risk | Why it matters | Current state |
|---|---|---|
| Client-controlled identity | localStorage can be edited by the user | Mock auth only, not secure |
| No server authorization | Routes can be opened directly | No protected-route guarantee |
| Persistent local profile | Shared browser profiles may expose stored values | Mock profile stored in localStorage |
| Untrusted form input | Future rendering/persistence may mishandle input | Prototype forms only |
| External resource requests | Third parties receive normal request metadata | Pexels and Google Fonts are requested |
| Misleading trust signals | Static testimonials/metrics can be mistaken for evidence | Sample content in UI |
| Unsafe exchange assumptions | UI does not verify food quality or pickup conditions | No safety review service |

## Future attack scenarios

- A user changes a client-side role value to impersonate a moderator.
- A user claims another donor's listing without authorization.
- A malicious user publishes misleading or abusive listing content.
- An attacker enumerates listings or harvests exposed contact details.
- Automated traffic floods post, claim, login, or report operations.
- A compromised account alters or removes a legitimate listing.
- A notification integration leaks recipient or pickup information.
- A report queue is abused to harass donors or suppress legitimate listings.

## Required mitigations before real launch

- Authenticate users through a trusted server-side identity flow.
- Enforce ownership and role checks on every API operation.
- Validate and normalize data on the server.
- Apply rate limits, abuse detection, and safe error responses.
- Minimize public personal information and protect contact/pickup details.
- Add moderation, reporting, audit records, and appeal handling.
- Protect secrets and service credentials on the server.
- Define retention, deletion, backup, and incident procedures.
- Review dependencies and deploy with security headers and TLS.
- Test authorization boundaries and abuse scenarios.

## Security review questions

- Can a user read or change another user's private data?
- Can an unauthenticated user create, claim, edit, or delete records?
- Can a user forge role, owner, or status fields?
- Is sensitive information present in logs, URLs, analytics, or public pages?
- Are file uploads, images, and text validated?
- Can automation overwhelm the service?
- Is there a real process to respond to safety and privacy reports?

See [SECURITY.md](../SECURITY.md) for repository reporting instructions.
