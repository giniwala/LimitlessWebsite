import type { Role } from "@/types/content";

export const roleLabels: Record<Role, string> = {
  member: "Member",
  "project-manager": "Project Manager",
  admin: "Executive Board/Admin",
};

export function normalizeRole(value: unknown): Role {
  if (value === "admin" || value === "project-manager" || value === "member") {
    return value;
  }

  return "member";
}

export function canAccess(userRole: Role, allowedRoles: Role[]) {
  return allowedRoles.includes(userRole);
}
