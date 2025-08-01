"use client";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode-toggle";
import { ClientOnly } from "./client-only";
import { LanguageSwitcher } from "./language-switcher";

export default function TopRightWidgets() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  // Sử dụng responsive: trên mobile (<=640px) sẽ dùng flex-row, trên desktop giữ nguyên vị trí cũ
  return (
    <div
      className={
        // flex-row cho mobile, absolute cho desktop
        // sm:absolute: chỉ absolute từ sm (640px) trở lên, còn mobile thì relative
        // top-4 right-4: vị trí góc trên bên phải
        // gap-2: khoảng cách giữa 2 icon
        "flex flex-row items-center gap-2 sm:absolute sm:top-4 sm:right-4 z-50"
      }
    >
      {/* Icon chuyển chế độ sáng/tối */}
      <ModeToggle />
      {/* Icon chọn ngôn ngữ, chỉ render trên client để tránh lỗi hydration */}
      <ClientOnly>
        <LanguageSwitcher />
      </ClientOnly>
    </div>
  );
} 