import { getTranslations } from "@/lib/server-i18n";
import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Link as LucideLink, Loader } from "lucide-react";
import { useTranslation } from "react-i18next"; 
import Link from "next/link";
import Image from "next/image";


export default async function Home() {

  const { t } = await getTranslations();

  return (
    // Layout chính, căn giữa, responsive cho mobile và desktop
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
     
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0:">
        <Image src="/DuoFinal.svg" fill alt="people"/>
      </div>
      
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:tex-3xl font-bold text-neutral-600 max-w-[480px] text-center dark:text-neutral-100">
          {t("marketing_header")}
        </h1>

        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          {/* Hiển thị icon loading khi Clerk đang load */}
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
          </ClerkLoading>

          
          <ClerkLoaded>
            {/* Nếu chưa đăng nhập, hiển thị nút đăng ký và đăng nhập */}
            <SignedOut>
              <SignUpButton>
                <Button size="lg" variant="secondary" className="w-full ">
                  {t("get_started")}
                </Button>
              </SignUpButton>
              <SignInButton>
                <Button size="lg" variant="primaryOutline" className="w-full ">
                  {t("i_already_have_an_account")}
                </Button>
              </SignInButton>
            </SignedOut>
            {/* Nếu đã đăng nhập, hiển thị nút chuyển sang trang học */}
            <SignedIn>
              <Button size="lg" variant="secondary" className="w-full" asChild>
                <Link href="/learn">
                  {t("continue_learning")}
                </Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  )
}
