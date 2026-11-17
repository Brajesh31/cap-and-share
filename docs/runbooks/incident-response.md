# 🚨 Runbook: Incident Response

## Scope

Use this as a starting point for a suspected security, privacy, availability, or user-safety incident. The current prototype has no backend or formal on-call system, so assign a responsible maintainer before claiming an incident process is operational.

## Initial response

1. Record the time, reporter, affected route/build, and observed behavior.
2. Preserve relevant evidence. Remove passwords, tokens, private addresses, and unnecessary personal data.
3. Determine whether the issue is reproducible and whether it affects the public deployment.
4. If sensitive information is exposed, restrict access or take the affected deployment offline where appropriate.
5. Notify the project owner and any relevant institutional or legal contact.
6. Do not speculate publicly about cause or impact.

## Triage categories

| Category | Example | Immediate focus |
|---|---|---|
| Security | Unauthorized access or malicious content | Contain exposure and preserve evidence |
| Privacy | Personal information exposed | Limit access and assess affected data |
| Availability | Site or critical route unavailable | Restore known-good static build |
| User safety | Unsafe listing or misleading food claim | Stop real-world coordination; review content |

## Recovery

- Identify a confirmed cause.
- Apply a reviewed fix or rollback.
- Validate affected routes and controls.
- Document what remains unknown.
- Assign follow-up actions with owners and due dates.

## Post-incident record

Use [incident-report.md](../templates/incident-report.md). Record facts separately from assumptions. Follow applicable legal and institutional notification requirements with qualified advice.
