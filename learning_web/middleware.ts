import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!_next|favicon.ico|logo_main.svg|people.svg|vn-flag.svg|uk-flag.svg|.*\\..*).*)",
  ],
};