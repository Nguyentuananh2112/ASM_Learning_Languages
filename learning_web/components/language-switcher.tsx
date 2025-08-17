"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Globe } from "lucide-react"; // Import icon quả địa cầu
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

    // Chỉ sử dụng useEffect để đảm bảo rằng chúng ta đang ở client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    Cookies.set('i18next', lng, { expires: 365 }); // Lưu lựa chọn vào cookie
    // Yêu cầu server render lại với ngôn ngữ mới (tức là khi bấm chuyển sang vi thì load luôn vi)
    router.refresh(); 
  };

   // Nếu chưa ở client, không render gì cả để tránh lỗi hydration
  if (!isClient) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {/* Đồng bộ kích thước với các icon khác */}
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage('en')}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('vi')}>
          Tiếng Việt
        </DropdownMenuItem>
        {/* <DropdownMenuItem onClick={() => changeLanguage('ko')}>
          한국어 (Korean)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('ja')}>
          日本語 (Japanese)
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}