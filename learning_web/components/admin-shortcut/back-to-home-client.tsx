"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackToHomeClient() {
  const pathname = usePathname();

  // Chỉ hiện khi ở trong admin
  if (!pathname.startsWith("/admin")) return null;

  return (
    <Link
      href="/"
      aria-label="Back to Home"
      className="
        fixed left-3 top-3 z-50
        inline-flex items-center justify-center
        h-10 w-10 rounded-full border
        bg-background/80 backdrop-blur
        hover:bg-muted transition
        shadow-sm
      "
      title="Back to Home"
    >
      <ArrowLeft className="w-5 h-5" />
    </Link>
  );
}
