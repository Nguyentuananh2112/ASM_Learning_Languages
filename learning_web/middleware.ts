
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'; 

// Định nghĩa các route công khai (public)
const isPublicRoute = createRouteMatcher([
  '/',             // Trang marketing chính của bạn
  '/sign-in(.*)',  // Trang đăng nhập của Clerk
  '/sign-up(.*)',  // Trang đăng ký của Clerk
  '/api/webhooks(.*)', // Thêm các route API công khai khác nếu có
  // Thêm bất kỳ route marketing công khai nào khác của bạn vào đây
]);

// Định nghĩa các route cần bỏ qua hoàn toàn bởi middleware của Clerk
const isIgnoredRoute = createRouteMatcher([
  '/api/webhooks(.*)',
  '/api/stripe',
  // Thêm các route bạn muốn bỏ qua
]);

// Sử dụng clerkMiddleware với một hàm
export default clerkMiddleware((auth, req) => {
  // Nếu route là public hoặc là route bị bỏ qua, không làm gì cả
  if (isPublicRoute(req) || isIgnoredRoute(req)) {
    return;
  }


});

// Cấu hình matcher cho middleware
export const config = {
  matcher: [
    // Đây là matcher chuẩn được khuyến nghị bởi Clerk và Next.js
    '/((?!.+\\.[\\w]+$|_next).*)', // Match tất cả trừ file tĩnh và nội bộ Next.js
  ],
};