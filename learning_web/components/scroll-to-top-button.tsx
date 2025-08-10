"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export const ScrollToTopButton = () => {
    // State để theo dõi nút có được hiển thị hay không
    const [isVisible, setIsVisible] = useState(false);
    
    // Hàm xử lý việc hiển thị nút dựa trên vị trí cuộn
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) { // Hiển thị nút khi cuộn xuống hơn 300px
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Hàm để cuộn lên đầu trang
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // Thêm và xóa event listener cho sự kiện cuộn
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-5 right-5 z-50">
            <Button
                size="icon"
                onClick={scrollToTop}
                // SỬA ĐỔI: Thêm các lớp CSS để tùy chỉnh giao diện
                className={cn(
                    "rounded-xl border-2 transition-opacity duration-300",
                    "bg-white dark:bg-slate-800", // Nền trắng ở light mode, xám đậm ở dark mode
                    "border-slate-200 dark:border-slate-700", // Viền xám nhạt/đậm
                    "hover:bg-slate-100 dark:hover:bg-slate-700", // Hiệu ứng hover
                    // Logic ẩn/hiện nút
                    isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
            >
                {/* SỬA ĐỔI: Thêm lớp CSS để đổi màu icon */}
                <ArrowUp className="h-6 w-6 text-sky-500" />
            </Button>
        </div>
    );
};

