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
        <div className="fixed bottom-5 right-5 z-10">
            <Button
                size="icon"
                onClick={scrollToTop}
                className={cn(
                    "rounded-full transition-opacity duration-300",
                    // Áp dụng class để ẩn/hiện nút
                    isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
            >
                <ArrowUp className="h-6 w-6" />
            </Button>
        </div>
    );
};

