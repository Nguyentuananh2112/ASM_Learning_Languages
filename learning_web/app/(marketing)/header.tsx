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
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-xl mx-auto flex items-center justify-between h-full">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/logo_main.svg" alt="Logo Main" width={40} height={40} />
          <h1 className="text-2xl font-extrabold text-blue-500 tracking-wide">
            Learning Web
          </h1>
        </div>
        <div className="flex items-center gap-x-2"> 
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
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