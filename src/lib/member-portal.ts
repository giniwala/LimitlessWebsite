import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const memberPortalCookieName = "limitless_portal_session";

const sessionMessage = "limitless-member-portal-v1";
const sessionMaxAgeSeconds = 60 * 60 * 12;

function portalPassword() {
  return process.env.MEMBER_PORTAL_PASSWORD;
}

function safeEqual(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);

  if (left.length !== right.length) {
    return false;
  }

  return timingSafeEqual(left, right);
}

function expectedSessionValue() {
  const password = portalPassword();

  if (!password) {
    return null;
  }

  return createHmac("sha256", password).update(sessionMessage).digest("hex");
}

export function hasMemberPortalPassword() {
  return Boolean(portalPassword());
}

export function isCorrectPortalPassword(submittedPassword: string) {
  const password = portalPassword();

  if (!password) {
    return false;
  }

  return safeEqual(submittedPassword, password);
}

export async function hasMemberPortalAccess() {
  const expectedValue = expectedSessionValue();

  if (!expectedValue) {
    return false;
  }

  const cookieStore = await cookies();
  const currentValue = cookieStore.get(memberPortalCookieName)?.value;

  return Boolean(currentValue && safeEqual(currentValue, expectedValue));
}

export async function grantMemberPortalAccess() {
  const expectedValue = expectedSessionValue();

  if (!expectedValue) {
    return;
  }

  const cookieStore = await cookies();
  cookieStore.set(memberPortalCookieName, expectedValue, {
    httpOnly: true,
    maxAge: sessionMaxAgeSeconds,
    path: "/portal",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}

export async function clearMemberPortalAccess() {
  const cookieStore = await cookies();
  cookieStore.set(memberPortalCookieName, "", {
    httpOnly: true,
    maxAge: 0,
    path: "/portal",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}
