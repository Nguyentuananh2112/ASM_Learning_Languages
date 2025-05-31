'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useUser } from '@clerk/nextjs';

// Danh sách các mục điều hướng chính của sidebar
const navigationItems = [
  {
    label: "LEARN",
    href: "/learn", // Thay đổi từ /version-dev/learn thành /learn
    icon: "🎓",
  },
  {
    label: "LEADERBOARD",
    href: "/leaderboard",
    icon: "🏆",
  },
  {
    label: "QUESTS",
    href: "/quests",
    icon: "🎯",
  },
  {
    label: "SHOP",
    href: "/shop",
    icon: "🛍️",
  },
  {
    label: "CHAT",
    href: "/chat",
    icon: "💬",
  },
  {
    label: "CHAT BOT",
    href: "/chatbot",
    icon: "🤖",
  },
];

export const Navigation = () => {
  // Lấy đường dẫn hiện tại
  const pathname = usePathname();
  // Hook điều hướng router
  const router = useRouter();
  // Lấy trạng thái đăng nhập từ Clerk
  const { isSignedIn } = useUser();

  // Xử lý khi click vào logo: nếu đang ở /learn thì về trang chủ, ngược lại chuyển sang /learn
  const handleLogoClick = () => {
    if (pathname === '/learn') {
      router.push('/');
    } else {
      router.push('/learn');
    }
  };

  return (
    <div className="h-full flex flex-col items-center w-[220px] bg-white border-r border-gray-200 shadow-sm py-4">
      {/* Logo và mascot, click để chuyển trang */}
      <button
        className="flex flex-col items-center mb-8 cursor-pointer select-none bg-transparent border-none p-0"
        onClick={handleLogoClick}
        type="button"
      >
        <div className="w-14 h-14 relative mb-2">
          {/* Nếu có mascot, thay src bằng đường dẫn ảnh của bạn */}
          <Image src="/logo_main.svg" alt="Mascot" fill style={{objectFit:'contain'}} />
        </div>
        <span className="text-2xl font-bold text-sky-400 tracking-tight">Learning Web</span>
      </button>
      {/* Danh sách các mục điều hướng */}
      <div className="flex flex-col gap-y-2 w-full px-2">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={isSignedIn ? item.href : "#"}
            className={`flex items-center gap-x-3 px-4 py-3 rounded-xl transition-all text-lg font-semibold select-none ${pathname === item.href ? 'bg-sky-100 text-sky-500 shadow' : 'text-slate-500 hover:bg-sky-50 hover:text-sky-400'} ${!isSignedIn ? 'pointer-events-none opacity-50' : ''}`}
            tabIndex={isSignedIn ? 0 : -1}
            aria-disabled={!isSignedIn}
          >
            <span className="text-2xl">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
