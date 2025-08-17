"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function AdminShortcutClient() {
  const pathname = usePathname();
  // Chỉ hiện ở trang chủ
  if (pathname !== "/") return null;

  return (
    <Link
      href="/admin"
      aria-label="Go to Admin"
      className="
        fixed left-3 top-3 z-50
        inline-flex items-center justify-center
        h-10 w-10 rounded-full border
        bg-background/80 backdrop-blur
        hover:bg-muted transition
        shadow-sm
      "
      title="Admin"
    >
        {/* Mũi tên */}
      <ArrowRight className="w-5 h-5" />
    </Link>
  );
}
