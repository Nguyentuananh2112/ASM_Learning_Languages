"use client";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode-toggle";
import { ClientOnly } from "./client-only";
import { LanguageSwitcher } from "./language-switcher";

export default function TopRightWidgets() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <>
      <div className="absolute top-4 right-4 z-50">
        <ModeToggle />
      </div>
      <ClientOnly>
        <div className="absolute top-5 right-[4.8rem] z-50">
          <LanguageSwitcher />
        </div>
      </ClientOnly>
    </>
  );
} 