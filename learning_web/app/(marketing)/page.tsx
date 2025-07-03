// Import Button từ components/ui
import { Button } from "@/components/ui/button";
// Import các component xác thực từ Clerk
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
// Import icon và component cần thiết
import { Link as LucideLink, Loader } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Định nghĩa component Home cho trang chủ marketing
export default function Home() {
  return (
    // Layout chính, căn giữa, responsive cho mobile và desktop
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      {/* Hình minh họa chính */}
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0:">
        <Image src="/people.svg" fill alt="people"/>
      </div>
      {/* Khu vực nội dung và nút hành động */}
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:tex-3xl font-bold text-neutral-600 max-w-[480px] text-center dark:text-neutral-100">
          Learn, pratice, and master new languages with our!
        </h1>
        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          {/* Hiển thị icon loading khi Clerk đang load */}
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
          </ClerkLoading>
          {/* Khi Clerk đã load xong */}
          <ClerkLoaded>
            {/* Nếu chưa đăng nhập, hiển thị nút đăng ký và đăng nhập */}
            <SignedOut>
              <SignUpButton>
                <Button size="lg" variant="secondary" className="w-full ">
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton>
                <Button size="lg" variant="primaryOutline" className="w-full ">
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>
            {/* Nếu đã đăng nhập, hiển thị nút chuyển sang trang học */}
            <SignedIn>
              <Button size="lg" variant="secondary" className="w-full" asChild>
                <Link href="/learn">
                  <div className="flex items-center gap-x-2 dark:text-neutral-100">
                    Start
                  </div>
                </Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  )
}
