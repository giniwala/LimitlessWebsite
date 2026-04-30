"use server";

import { redirect } from "next/navigation";
import {
  clearMemberPortalAccess,
  grantMemberPortalAccess,
  hasMemberPortalPassword,
  isCorrectPortalPassword,
} from "@/lib/member-portal";

export async function unlockMemberPortal(formData: FormData) {
  if (!hasMemberPortalPassword()) {
    redirect("/portal?error=not-configured");
  }

  const password = String(formData.get("password") ?? "");

  if (!isCorrectPortalPassword(password)) {
    redirect("/portal?error=incorrect");
  }

  await grantMemberPortalAccess();
  redirect("/portal");
}

export async function logoutMemberPortal() {
  await clearMemberPortalAccess();
  redirect("/portal");
}
