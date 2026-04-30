# Member Portal Setup

The member portal is a simple shared-password area at `/portal`.

## How It Works

- The password is stored only in the server environment variable `MEMBER_PORTAL_PASSWORD`.
- A member enters the password on `/portal`.
- A server action checks the submitted password.
- If correct, the server sets an httpOnly cookie scoped to `/portal`.
- The dashboard reads that cookie server-side.
- Log Out clears the cookie.

No Supabase, user accounts, or public client-side password values are used.

## Local Setup

Create `.env.local`:

```bash
cp .env.example .env.local
```

Set:

```bash
MEMBER_PORTAL_PASSWORD=your-semester-password
```

Run:

```bash
npm run dev
```

Visit `http://localhost:3000/portal`.

## Vercel Setup

1. Open the Vercel project.
2. Go to **Settings > Environment Variables**.
3. Add `MEMBER_PORTAL_PASSWORD`.
4. Redeploy the project.

## Rotating the Password

At the start of each semester:

1. Choose a new shared password.
2. Update `MEMBER_PORTAL_PASSWORD` in Vercel.
3. Redeploy.
4. Share the new password through a private member channel.

Changing the password invalidates old portal cookies because the cookie signature is derived from the current password.

## Updating Portal Content

- Edit announcements, meetings, and resource labels in `src/data/portal.ts`.
- Edit actual resource URLs in `src/data/siteConfig.ts`.
- Keep private folders permissioned in Google Drive or your storage tool.
- Never add private keys, API tokens, or confidential client files to the repository.
