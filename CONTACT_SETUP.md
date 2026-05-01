# Contact Form Setup

The contact form submits to the server-side Next.js route at `src/app/api/contact/route.ts`.
That route sends email through **Resend** and keeps the API key on the server only.

Production domain: `https://limitlessatmsu.com`
Destination inbox: `RSO.Limitless@msu.edu`

## Provider Research Summary

| Provider | Fit for this site | Free/low-cost note | Domain/DNS needs | Security notes |
| --- | --- | --- | --- | --- |
| Resend | Best fit. Simple SDK, good Vercel/Next.js workflow, already installed in this project. | Free tier is enough for a student org contact form in normal use. Paid plans are available if volume grows. | Verify `limitlessatmsu.com` or a sending subdomain with DNS records. | Server-side API key works well in a Next.js route. |
| SendGrid | Capable, but heavier dashboard and setup. | Free access is trial-oriented/current-plan dependent; paid plans are more than this site needs. | Domain authentication via DNS is recommended. | Secure server-side API possible. |
| Postmark | Excellent deliverability, very polished transactional email product. | Free developer tier is small; paid plans are a better fit for sustained use. | Domain verification/DKIM recommended. | Secure server-side API possible. |
| Formspree | Easiest no-code-ish form backend. | Free plan can work for very low volume, but it introduces a third-party form endpoint/dashboard. | Does not require the same custom sender setup for basic notifications. | Secure enough for simple forms, but less control than the project-owned API route. |
| EmailJS | Simple for client-heavy sites. | Free plan exists, but it is not ideal for this production Next.js site. | Usually configured through EmailJS templates/services. | Often relies on public client-side keys; not preferred when a server route is available. |
| MailerSend | Reasonable alternative. | Free plan is small but workable for low volume. | Domain verification is needed for production sending. | Secure server-side API possible. |
| Amazon SES | Cheapest at scale. | Very low sending cost, but more operational setup. | Domain verification and AWS configuration required. | Secure, but too much setup for a student org contact form. |

Decision: keep **Resend**. It is already wired into the codebase, works cleanly with Vercel, supports server-side secrets, and keeps the implementation maintainable for future board members.

## Required Environment Variables

Add these locally in `.env.local` and in Vercel Project Settings:

```bash
RESEND_API_KEY=your_resend_key_here
CONTACT_TO_EMAIL=RSO.Limitless@msu.edu
CONTACT_FROM_EMAIL=no-reply@limitlessatmsu.com
MEMBER_PORTAL_PASSWORD=test-password
```

`CONTACT_TO_EMAIL` is the inbox that receives website inquiries:

```bash
CONTACT_TO_EMAIL=RSO.Limitless@msu.edu
```

`CONTACT_FROM_EMAIL` must be verified in Resend before production sending works reliably. Recommended:

```bash
CONTACT_FROM_EMAIL=no-reply@limitlessatmsu.com
```

The visitor's submitted email is used as `replyTo`, so Limitless can reply directly from the received message.

Never prefix these variables with `NEXT_PUBLIC_`.

## Create And Configure Resend

1. Create or log into a Resend account.
2. Add the sending domain `limitlessatmsu.com` in Resend.
3. Prefer a sending address like `no-reply@limitlessatmsu.com`.
4. Copy the DNS records Resend gives you.
5. Add the records in GoDaddy.
6. Wait for DNS propagation.
7. Click **Verify DNS Records** in Resend.
8. Create an API key with sending access.
9. Add that key to Vercel as `RESEND_API_KEY`.

## GoDaddy DNS Steps For Resend

Resend supports GoDaddy auto-configuration through Domain Connect. If that option appears, use it first.

Manual setup:

1. Log into GoDaddy.
2. Go to **My Products**.
3. Find `limitlessatmsu.com`.
4. Open **DNS** or **Manage DNS**.
5. Add the records shown in Resend.
6. For GoDaddy record names, usually omit the root domain from the name. For example, if Resend shows `send.limitlessatmsu.com`, enter `send`.
7. Typical records may include:
   - MX record for bounce/return-path handling.
   - TXT SPF record such as `v=spf1 include:amazonses.com ~all`.
   - TXT DKIM record such as `resend._domainkey`.
8. Save the records.
9. Return to Resend and click **Verify DNS Records**.

DNS can verify within minutes, but it can also take a few hours.

## Vercel Setup

1. Open Vercel.
2. Select the Limitless website project.
3. Go to **Settings -> Environment Variables**.
4. Add:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL`
   - `MEMBER_PORTAL_PASSWORD`
5. Add the variables to Production and Preview environments.
6. Redeploy the latest deployment after changing variables.

Recommended production values:

```bash
CONTACT_TO_EMAIL=RSO.Limitless@msu.edu
CONTACT_FROM_EMAIL=no-reply@limitlessatmsu.com
```

## Local Setup

1. Copy the example env file:

```bash
cp .env.example .env.local
```

2. Fill in local values:

```bash
RESEND_API_KEY=your_resend_key_here
CONTACT_TO_EMAIL=RSO.Limitless@msu.edu
CONTACT_FROM_EMAIL=no-reply@limitlessatmsu.com
MEMBER_PORTAL_PASSWORD=test-password
```

3. Start the site:

```bash
MEMBER_PORTAL_PASSWORD=test-password npm run dev
```

4. Open `/contact`, submit a test message, and confirm it arrives at `RSO.Limitless@msu.edu`.

Never commit `.env.local`. It is ignored by git.

## How The Form Behaves

- Valid submissions send an email to `CONTACT_TO_EMAIL`.
- Required fields are name, email, subject, and message.
- The submitted visitor email is set as `replyTo`.
- Messages include HTML and plain-text versions.
- The form includes server-side validation, a hidden honeypot field, and light rate limiting.
- If Resend is not configured, users see: "The contact form is temporarily unavailable. Please email RSO.Limitless@msu.edu directly."
- User input is escaped before it is included in HTML email.
- Private message content is not logged.

## Testing On The Live Domain

After the Vercel environment variables are set and the site redeploys:

1. Visit `https://limitlessatmsu.com/contact`.
2. Submit a message with a real reply email.
3. Confirm the success message appears.
4. Confirm the email arrives at `RSO.Limitless@msu.edu`.
5. Reply to the email and confirm the reply goes to the submitter.

## Troubleshooting

If the form says it is temporarily unavailable:

1. Confirm `RESEND_API_KEY` exists in Vercel.
2. Confirm `CONTACT_FROM_EMAIL` exists in Vercel.
3. Confirm `CONTACT_FROM_EMAIL` uses a domain/sender verified in Resend.
4. Confirm `CONTACT_TO_EMAIL=RSO.Limitless@msu.edu`.
5. Redeploy after editing Vercel environment variables.
6. Check the Vercel Function logs for the safe error category.
7. Make sure the variable names are not prefixed with `NEXT_PUBLIC_`.

If Resend rejects the send request, the server returns a generic visitor-safe error and does not log private message content.
