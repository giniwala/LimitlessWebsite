import { Resend } from "resend";
import { NextResponse } from "next/server";
import { siteConfig } from "@/data/siteConfig";

export const runtime = "nodejs";

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 320;
const MAX_OPTIONAL_LENGTH = 160;
const MAX_MESSAGE_LENGTH = 5000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  inquiryType?: unknown;
  organization?: unknown;
  subject?: unknown;
  phone?: unknown;
  message?: unknown;
  body?: unknown;
  sourcePath?: unknown;
  website?: unknown;
};

type ValidatedContact = {
  name: string;
  email: string;
  inquiryType: string;
  organization: string;
  subject: string;
  phone: string;
  message: string;
  sourcePath: string;
};

const requestLog = new Map<string, number[]>();

function getContactConfig() {
  return {
    apiKey: process.env.RESEND_API_KEY,
    fromEmail: process.env.CONTACT_FROM_EMAIL,
    toEmail: process.env.CONTACT_TO_EMAIL ?? siteConfig.contact.email,
  };
}

function asSingleLine(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().replace(/[\r\n]+/g, " ").slice(0, maxLength);
}

function asMessage(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().replace(/\r/g, "").slice(0, maxLength);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function clientKey(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwardedFor || request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(request: Request) {
  const key = clientKey(request);
  const now = Date.now();
  const recent = (requestLog.get(key) ?? []).filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(key, recent);
    return true;
  }

  requestLog.set(key, [...recent, now]);
  return false;
}

function validatePayload(payload: ContactPayload): { data: ValidatedContact } | { error: string } {
  const name = asSingleLine(payload.name, MAX_NAME_LENGTH);
  const email = asSingleLine(payload.email, MAX_EMAIL_LENGTH).toLowerCase();
  const inquiryType = asSingleLine(payload.inquiryType, MAX_OPTIONAL_LENGTH);
  const organization = asSingleLine(payload.organization, MAX_OPTIONAL_LENGTH);
  const subject = asSingleLine(payload.subject, MAX_OPTIONAL_LENGTH);
  const phone = asSingleLine(payload.phone, MAX_OPTIONAL_LENGTH);
  const message = asMessage(payload.message ?? payload.body, MAX_MESSAGE_LENGTH);
  const sourcePath = asSingleLine(payload.sourcePath, MAX_OPTIONAL_LENGTH);

  if (!name) {
    return { error: "Please enter your name." };
  }

  if (!email || !isValidEmail(email)) {
    return { error: "Please enter a valid email address." };
  }

  if (!subject) {
    return { error: "Please enter a subject." };
  }

  if (!message) {
    return { error: "Please enter a message." };
  }

  if (message.length < 8) {
    return { error: "Please enter a brief message with at least a short sentence." };
  }

  return {
    data: {
      name,
      email,
      inquiryType,
      organization,
      subject,
      phone,
      message,
      sourcePath,
    },
  };
}

function escapeHtml(raw: string) {
  return raw
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function row(label: string, value: string) {
  if (!value) {
    return "";
  }

  return `
    <tr>
      <td style="padding:8px 14px;border-bottom:1px solid #e5eee8;color:#5d7068;font-weight:600;width:160px;">${escapeHtml(label)}</td>
      <td style="padding:8px 14px;border-bottom:1px solid #e5eee8;color:#10231d;">${escapeHtml(value)}</td>
    </tr>
  `;
}

function buildEmail(contact: ValidatedContact) {
  const timestamp = new Date().toISOString();
  const subject =
    contact.subject
      ? `New Limitless Website Inquiry: ${contact.subject}`
      : `New Limitless Website Inquiry from ${contact.name}`;

  const plainText = [
    `New Limitless Website Inquiry`,
    ``,
    `Name: ${contact.name}`,
    `Email: ${contact.email}`,
    `Subject: ${contact.subject}`,
    contact.inquiryType ? `Inquiry type: ${contact.inquiryType}` : "",
    contact.organization ? `Organization/company: ${contact.organization}` : "",
    contact.phone ? `Phone: ${contact.phone}` : "",
    contact.sourcePath ? `Source page: ${contact.sourcePath}` : "",
    `Timestamp: ${timestamp}`,
    ``,
    `Message:`,
    contact.message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <div style="font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f4f8f5;padding:24px;color:#10231d;">
      <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #d4e4dc;border-radius:12px;overflow:hidden;">
        <div style="background:#071510;color:#ffffff;padding:22px 24px;">
          <p style="margin:0 0 8px;color:#d9f0e4;font-size:13px;font-weight:700;text-transform:uppercase;">Limitless Consulting</p>
          <h1 style="margin:0;font-size:24px;line-height:1.25;">New website inquiry</h1>
        </div>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
          ${row("Name", contact.name)}
          ${row("Email", contact.email)}
          ${row("Subject", contact.subject)}
          ${row("Inquiry type", contact.inquiryType)}
          ${row("Organization/company", contact.organization)}
          ${row("Phone", contact.phone)}
          ${row("Source page", contact.sourcePath)}
          ${row("Timestamp", timestamp)}
        </table>
        <div style="padding:22px 24px;">
          <p style="margin:0 0 10px;color:#5d7068;font-size:13px;font-weight:700;text-transform:uppercase;">Message</p>
          <div style="white-space:pre-wrap;font-size:15px;line-height:1.65;color:#10231d;">${escapeHtml(contact.message)}</div>
        </div>
      </div>
    </div>
  `.trim();

  return { html, plainText, subject };
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const honeypot = asSingleLine(payload.website, MAX_OPTIONAL_LENGTH);
  if (honeypot) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  if (isRateLimited(request)) {
    return NextResponse.json(
      { error: "Too many contact attempts. Please wait a few minutes before trying again." },
      { status: 429 },
    );
  }

  const validation = validatePayload(payload);
  if ("error" in validation) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const { apiKey, fromEmail, toEmail } = getContactConfig();
  if (!apiKey || !fromEmail) {
    return NextResponse.json(
      {
        code: "EMAIL_NOT_CONFIGURED",
        error: `The contact form is temporarily unavailable. Please email ${siteConfig.contact.email} directly.`,
      },
      { status: 503 },
    );
  }

  const email = buildEmail(validation.data);
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: validation.data.email,
      subject: email.subject,
      text: email.plainText,
      html: email.html,
    });

    if (error) {
      console.error("[contact] Resend returned an error", {
        name: error.name,
      });
      return NextResponse.json(
        { error: `We could not send your message right now. Please email ${siteConfig.contact.email} directly.` },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("[contact] Email send failed", error instanceof Error ? error.name : "UnknownError");
    return NextResponse.json(
      { error: `We could not send your message right now. Please email ${siteConfig.contact.email} directly.` },
      { status: 502 },
    );
  }
}
