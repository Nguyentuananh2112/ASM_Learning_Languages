import { Button } from "@/components/ui/button";
import {
  SignedIn,     
  SignedOut,    
  SignInButton,  
  UserButton,    
  ClerkLoaded,   
  ClerkLoading,  
} from "@clerk/nextjs"; 
import { Loader } from "lucide-react";
import Image from "next/image";
import TopRightWidgets from "@/components/TopRightWidgets";
import { getTranslations } from "@/lib/server-i18n";


export const Header = async () => {

  const { t } = await getTranslations();
  return (
    // Thanh header với border dưới, padding ngang
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-xl mx-auto flex items-center justify-between h-full flex-nowrap gap-x-2 sm:gap-x-4">
        {/* Logo và tên ứng dụng, cho phép co lại, không tràn */}
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3 min-w-0">
          <Image src="/logo_main.svg" alt="Logo Main" width={40} height={40} />
          <h1 className="text-2xl font-extrabold text-blue-500 tracking-wide truncate">
            Learning Web
          </h1>
        </div>
        {/* Khu vực xác thực + 2 icon, không co nhỏ quá mức, luôn cùng hàng */}
        <div className="flex items-center gap-x-2 flex-shrink-0">
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
                  {t("login")}
                </Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
          {/* Thêm 2 icon chế độ sáng/tối & chọn ngôn ngữ chỉ trên mobile (block sm:hidden) */}
          <div className="block sm:hidden">
            <TopRightWidgets />
          </div>
        </div>
      </div>
    </header>
  );
};