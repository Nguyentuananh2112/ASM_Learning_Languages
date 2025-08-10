import { isAdmin } from "@/lib/admin";
import { redirect } from "next/navigation";
import AdminAppWrapper from "./AppWrapper"; // Đặt tên tùy bạn

export default async function AdminPage() {
  const admin = await isAdmin();

  if (!admin) {
    redirect("/");
  }

  // Chỉ render một Client Component
  return <AdminAppWrapper />;
}
 
