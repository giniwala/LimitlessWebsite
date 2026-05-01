import { NextResponse } from "next/server";
import { siteConfig } from "@/data/siteConfig";

export const runtime = "nodejs";

const MAX_NAME = 200;
const MAX_EMAIL_LEN = 320;
const MAX_MESSAGE = 8000;

function isConfigured() {
  return Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_FROM_EMAIL);
}

function sanitizeLine(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\r/g, "");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const honeypot = sanitizeLine(body.website);
  if (honeypot !== "") {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = sanitizeLine(body.name).slice(0, MAX_NAME);
  const email = sanitizeLine(body.email).slice(0, MAX_EMAIL_LEN);
  const inquiryType = sanitizeLine(body.inquiryType).slice(0, 120);
  const message = sanitizeLine(body.message).slice(0, MAX_MESSAGE);

  if (!name) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (!message || message.length < 8) {
    return NextResponse.json({ error: "Please enter a brief message (at least a short sentence)." }, { status: 400 });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL ?? siteConfig.contact.email;

  if (!isConfigured()) {
    return NextResponse.json(
      {
        error:
          "The contact inbox is not configured yet. Until Resend credentials are added, please email us directly or use the Mail link on this page.",
        code: "EMAIL_NOT_CONFIGURED",
      },
      { status: 503 },
    );
  }

  const plain = [
    `Name: ${name}`,
    `Reply-to: ${email}`,
    inquiryType ? `Inquiry type: ${inquiryType}` : "",
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <pre style="font-family:ui-sans-serif,system-ui,sans-serif;font-size:14px;line-height:1.55;white-space:pre-wrap;">${escapeHtml(plain)}</pre>
  `.trim();

  const resendKey = process.env.RESEND_API_KEY!;
  const from = process.env.CONTACT_FROM_EMAIL!;

  const subject = `[Limitless Consulting] ${inquiryType ? inquiryType + " · " : ""}${name}`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [toEmail],
        reply_to: email,
        subject,
        text: plain,
        html,
      }),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      console.error("[contact] Resend error", res.status, errText);
      return NextResponse.json(
        { error: "We could not send your message right now. Please try again later or email us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e) {
    console.error("[contact] send failed", e);
    return NextResponse.json(
      { error: "We could not send your message right now. Please try again later or email us directly." },
      { status: 502 },
    );
  }
}

function escapeHtml(raw: string) {
  return raw
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
