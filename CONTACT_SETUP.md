# Contact Form Setup

The contact form submits to a server-side Next.js route at `src/app/api/contact/route.ts`.
That route sends email through Resend and keeps the API key on the server only.

## Required Environment Variables

Add these locally in `.env.local` and in Vercel Project Settings:

```bash
RESEND_API_KEY=your_resend_key_here
CONTACT_TO_EMAIL=RSO.Limitless@msu.edu
CONTACT_FROM_EMAIL=no-reply@your-verified-domain.com
MEMBER_PORTAL_PASSWORD=test-password
```

`CONTACT_TO_EMAIL` is the inbox that receives website inquiries. For launch, keep it as:

```bash
CONTACT_TO_EMAIL=RSO.Limitless@msu.edu
```

`CONTACT_FROM_EMAIL` must be a sender/domain verified in Resend. Do not use a random Gmail, Outlook, or personal address as the sender. The visitor's submitted email is used as `replyTo`, so Limitless can reply directly from the received message.

## Create a Resend API Key

1. Create or log into a Resend account.
2. Verify a sending domain or approved sender in Resend.
3. Go to the Resend dashboard and create an API key with sending access.
4. Copy the key into `.env.local` for local testing.
5. Add the same key to Vercel as `RESEND_API_KEY`.

## Local Setup

1. Copy the example env file:

```bash
cp .env.example .env.local
```

2. Fill in:

```bash
RESEND_API_KEY=your_resend_key_here
CONTACT_TO_EMAIL=RSO.Limitless@msu.edu
CONTACT_FROM_EMAIL=no-reply@your-verified-domain.com
MEMBER_PORTAL_PASSWORD=test-password
```

3. Start the site:

```bash
MEMBER_PORTAL_PASSWORD=test-password npm run dev
```

4. Open `/contact`, submit a test message, and confirm it arrives at `RSO.Limitless@msu.edu`.

Never commit `.env.local`. It is ignored by git.

## Vercel Setup

1. Open Vercel.
2. Select the Limitless website project.
3. Go to Settings -> Environment Variables.
4. Add:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL`
   - `MEMBER_PORTAL_PASSWORD`
5. Add the variables to Production and Preview environments.
6. Redeploy the latest branch deployment.

## How The Form Behaves

- Valid submissions send an email to `CONTACT_TO_EMAIL`.
- The submitted visitor email is set as `replyTo`.
- Messages include HTML and plain-text versions.
- The form includes basic validation and a hidden honeypot field for spam.
- If Resend is not configured, users see: "The contact form is temporarily unavailable. Please email RSO.Limitless@msu.edu directly."

## Troubleshooting

If the form shows a configuration error:

1. Confirm `RESEND_API_KEY` is set.
2. Confirm `CONTACT_FROM_EMAIL` is set.
3. Confirm `CONTACT_FROM_EMAIL` is verified in Resend.
4. Restart the local dev server or redeploy on Vercel after changing env vars.
5. Make sure the variable names are not prefixed with `NEXT_PUBLIC_`.

If Resend rejects the send request, the server returns a safe generic error to visitors and does not log private message content.
