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