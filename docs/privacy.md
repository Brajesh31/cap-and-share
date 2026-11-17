# 🔐 Privacy and Data Handling

## Current implementation

The repository is a browser-side prototype. It has no application server, user database, analytics integration, or backend API.

The current authentication context:
- Reads the localStorage key `user` on startup.
- Writes a mock profile containing a fixed ID, name, email, role, and campus after simulated login/signup.
- Removes that key on logout.
- Does not store the submitted password in the mock profile.
- Does not verify identity or establish a secure session.

Food records are fixed sample values in `src/data/mockData.ts`. Claim details and profile edits are held in component state and are not durably submitted. Food photos load from external Pexels URLs, and the page requests Inter from Google Fonts.

## User guidance

Do not enter real passwords, personal contact details, addresses, sensitive information, or actual food pickup arrangements into this prototype. Browser localStorage can be inspected or changed by someone with access to the browser profile.

## Requirements before production

A real service needs a documented privacy design covering:

1. **Purpose limitation:** Collect only data required for a defined user journey.
2. **Notice and choice:** Explain data use, sharing, retention, and deletion before collection.
3. **Authentication:** Use a trusted identity system and secure session handling.
4. **Authorization:** Enforce permissions on the server, not by trusting client-side role values.
5. **Minimization:** Avoid publishing personal phone numbers, precise private locations, or unnecessary identity data.
6. **Retention:** Set deletion periods for profiles, listings, claims, reports, and audit records.
7. **User rights:** Define access, correction, export, and deletion workflows where applicable.
8. **Vendors:** Review the privacy implications of hosting, image, analytics, email, and identity providers.
9. **Incident response:** Provide a process to contain and communicate material data incidents.
10. **Legal review:** Assess applicable privacy requirements in every deployment jurisdiction.

## External requests

Third-party image and font requests may disclose ordinary request metadata, such as IP address and user-agent information, to those providers. Review vendor terms and privacy policies before public or institutional deployment.

## Privacy review checklist

- [ ] Data inventory and purpose are documented.
- [ ] Public listing fields are separated from private account fields.
- [ ] No secret is included in browser bundles.
- [ ] Role and ownership checks are server-enforced.
- [ ] Retention and deletion behavior are implemented and tested.
- [ ] External vendors and assets have been reviewed.
- [ ] Privacy notice and support contact are accurate.
- [ ] Incident ownership and escalation are documented.

See [SECURITY.md](../SECURITY.md) and [threat-model.md](threat-model.md).
