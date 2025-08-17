// components/admin-shortcut/index.tsx
import { isAdmin } from "@/lib/admin";
import AdminShortcutClient from "./client";

export default async function AdminShortcut() {
  const admin = await isAdmin();
  if (!admin) return null;
  return <AdminShortcutClient />;
}


//Server component này gọi isAdmin() (server-only). Nếu đúng admin thì render client button.