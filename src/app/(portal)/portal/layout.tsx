import { redirect } from "next/navigation";
import { PortalLayout } from "@/components/portal/portal-layout";
import { hasSupabaseConfig } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";
import { normalizeRole } from "@/utils/roles";

export const dynamic = "force-dynamic";

export default async function MemberPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!hasSupabaseConfig) {
    redirect("/login?setup=required&next=/portal");
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?next=/portal");
  }

  const role = normalizeRole(user.app_metadata?.role ?? user.user_metadata?.role);
  const userName =
    typeof user.user_metadata?.full_name === "string"
      ? user.user_metadata.full_name
      : user.email ?? "Member";

  return (
    <PortalLayout userName={userName} userEmail={user.email ?? ""} role={role}>
      {children}
    </PortalLayout>
  );
}
