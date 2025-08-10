import { isAdmin } from "@/lib/admin";
import BackToHomeClient from "./back-to-home-client";

export default async function BackToHome() {
  const admin = await isAdmin();
  if (!admin) return null;
  return <BackToHomeClient />;
}
