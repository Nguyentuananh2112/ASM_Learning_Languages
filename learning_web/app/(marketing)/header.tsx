// Import Button từ thư mục components/ui
import { Button } from "@/components/ui/button";
// Import các component xác thực từ Clerk (thư viện xác thực người dùng)
import {
  SignedIn,      // Hiển thị nội dung khi đã đăng nhập
  SignedOut,     // Hiển thị nội dung khi chưa đăng nhập
  SignInButton,  // Nút đăng nhập
  UserButton,    // Hiển thị avatar và menu người dùng
  ClerkLoaded,   // Hiển thị khi Clerk đã load xong
  ClerkLoading,  // Hiển thị khi Clerk đang load
} from "@clerk/nextjs"; 
// Import icon Loader từ lucide-react để hiển thị loading
import { Loader } from "lucide-react";
// Import component Image của Next.js để tối ưu hình ảnh
import Image from "next/image";

// Định nghĩa component Header cho phần đầu trang
export const Header = () => {
  return (
    // Thanh header với border dưới, padding ngang
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-xl mx-auto flex items-center justify-between h-full">
        {/* Logo và tên ứng dụng */}
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/logo_main.svg" alt="Logo Main" width={40} height={40} />
          <h1 className="text-2xl font-extrabold text-blue-500 tracking-wide">
            Learning Web
          </h1>
        </div>
        {/* Khu vực xác thực người dùng */}
        <div className="flex items-center gap-x-2"> 
          {/* Hiển thị icon loading khi Clerk đang load */}
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          {/* Khi Clerk đã load xong */}
          <ClerkLoaded>
            {/* Nếu đã đăng nhập, hiển thị UserButton */}
            <SignedIn>
              <UserButton />
            </SignedIn>
            {/* Nếu chưa đăng nhập, hiển thị nút Login */}
            <SignedOut>
              <SignInButton>
              <Button size="lg" variant="ghost">
                Login
              </Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
        </div> 
      </div>
    </header>
  );
};