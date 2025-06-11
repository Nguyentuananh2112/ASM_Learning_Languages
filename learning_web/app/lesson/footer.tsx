import { useKey, useMedia } from "react-use";
import { CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Định nghĩa Props cho Footer
type Props = {
    onCheck: () => void;
    status: "correct" | "wrong" | "none" | "completed";
    disabled?: boolean;
    lessonId?: boolean;
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
    const isMobile = useMedia("(max-width: 1024px)");

    return (
        <footer className={cn(
            "lg:-h[140px] h-[100px] border-t-2",
            status === "correct" && "border-transparent bg-green-100",
            status === "wrong" && "border-transparent bg-rose-100",
        )}>
            <div className="max-w-[1140px] h-full mx-auto flex item-center justify-between px-6 lg:px-10">
                {/* Hiển thị thông báo khi trả lời đúng */}
                {status === "correct" && (
                    <div className="text-green-500 font-bold text-base lg:text-2xl flex item">
                        <CheckCircle className="h6 w-6 lg:h-10 lg:w-10 mr-4" />
                        Nicely done!
                    </div>
                )}

                {/* Hiển thị thông báo khi trả lời sai */}
                {status === "wrong" && (
                    <div className="text-rose-500 font-bold text-base lg:text-2xl flex item">
                        <XCircle className="h6 w-6 lg:h-10 lg:w-10 mr-4" />
                        Try again.
                    </div>
                )}

                {/* Hiển thị nút Practice again khi hoàn thành */}
                {status === "completed" && (
                    <Button
                        variant="default"
                        size={isMobile ? "sm" : "lg"}
                        onClick={() => window.location.href = `/lesson/${lessonId}`}
                    >
                        Practice again
                    </Button>
                )}

                {/* Nút điều khiển chính (Next, Retry, Continue,...) */}
                <Button
                    disabled={disabled}
                    className={cn("ml-auto", status === "correct" && "bg-green-400 hover:bg-green-500 border-green-500 text-white")}
                    onClick={onCheck}
                    size={isMobile ? "sm" : "lg"}
                    variant={status === "wrong" ? "danger" : "secondary"}
                >
                    {status === "none" && "check"}
                    {status === "correct" && "Next"}
                    {status === "wrong" && "Retry"}
                    {status === "completed" && "Continue"}
                </Button>
            </div>
        </footer>
    );
};