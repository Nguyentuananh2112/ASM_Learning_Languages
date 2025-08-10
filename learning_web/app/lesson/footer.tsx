"use client";

import { useKey, useMedia } from "react-use";
import { CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

// Định nghĩa Props cho Footer
type Props = {
    onCheck: () => void;
    status: "correct" | "wrong" | "none" | "completed";
    disabled?: boolean;
    lessonId?: number;
};

// Component Footer
export const Footer = ({
    onCheck,
    status,
    disabled,
    lessonId
}: Props) => {
    // Cho phép bấm phím Enter để gọi onCheck
    useKey("Enter", onCheck, {}, [onCheck]);
    // Kiểm tra thiết bị có phải mobile không để chỉnh size nút
    const isMobile = useMedia("(max-width: 1024px)", false);
    const { t } = useTranslation();

    return (
        <footer className={cn(
            "lg:-h[140px] h-[100px] border-t-2",
            status === "correct" && "border-transparent bg-blue-100 dark:bg-blue-200",
            status === "wrong" && "border-transparent bg-rose-100 dark:bg-rose-200",
        )}>
            <div className="max-width-[1140px] h-full mx-auto flex items-center justify-between px-6 lg:px-10">
                {/* Hiển thị thông báo khi trả lời đúng */}
                {status === "correct" && (
                     <div className="text-blue-500 font-bold text-base lg:text-2xl flex items-center dark:text-blue-400">
                        <CheckCircle className="h-6 w-6 lg:h-10 lg:w-10 mr-4"/>
                        {t("nicely_done")}
                    </div>
                )}

                {/* Hiển thị thông báo khi trả lời sai */}
                {status === "wrong" && (
                    <div className="text-rose-500 font-bold text-base lg:text-2xl flex items-center dark:text-rose-400">
                        <XCircle className="h-6 w-6 lg:h-10 lg:w-10 mr-4"/>
                        {t("try_again")}
                    </div>
                )}

                {/* Hiển thị nút Practice again khi hoàn thành */}
                {status === "completed" && (
                    <Button
                        variant="default"
                        size={isMobile ? "sm" : "lg"}
                        onClick={() => window.location.href = `/lesson/${lessonId}`}
                    >
                        {t("practice_again")}
                    </Button>
                )}

                {/* Nút điều khiển chính (Next, Retry, Continue,...) */}
                <Button
                    disabled={disabled}
                    className={cn("ml-auto", status === "correct" && "bg-blue-400 hover:bg-blue-500 border-blue-500 text-white")}
                    onClick={onCheck}
                    size={isMobile ? "sm" : "lg"}
                    variant={status === "wrong" ? "danger" : "secondary"}
                >
                    {status === "none" && "check"}
                    {status === "correct" && t("next")}
                    {status === "wrong" && t("retry")}
                    {status === "completed" && t("continue")}
                </Button>
            </div>
        </footer>
    );
};