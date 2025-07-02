import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

type Props = {
    title:string;
    id:number;
    imageSrc:string;
    onClick: (id: number) => void;
    disabled?: boolean;
    active?: boolean;
};

export const Card = ({
    title,
    id,
    imageSrc,
    disabled,
    onClick,
    active,
}: Props) => {
    return (
        <div 
            onClick={() => onClick(id)}
            className={cn(
                "relative h-full border rounded-xl hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-4 pb-6 min-h-[217px] min-w-[200px] bg-white shadow-sm transition",
                // SỬA LỖI: Sử dụng các lớp theme-aware
                "bg-card text-card-foreground border-border", // Nền, chữ, và viền mặc định
                "hover:bg-accent", // Hiệu ứng hover cho cả 2 theme

                // Các lớp cho trạng thái active
                active && "border-sky-500 bg-sky-100/50", // Viền và nền khi được chọn ở Light Mode
                active && "dark:border-sky-400 dark:bg-sky-900/50", // Viền và nền khi được chọn ở Dark Mode
                
                // Các lớp cho trạng thái disabled
                disabled && "pointer-events-none opacity-50"
            )}
        >
            <div className="min-[24px] w-full flex items-center justify-end">
                {/* Dấu check khi active */}
                {active && (
                    <div className="rounded-md bg-blue-600 flex items-center justify-center p-1.5 ">
                        <Check className="text-white stroke-[4] h-4 w-4 "/>
                    </div>
                )}
            </div>
            {/* Hình cờ */}
            <Image 
                src={imageSrc}
                alt={title}
                width={93.33}
                height={70}
                className="rounded-lg drop-shadow-md border object-cover"
            />
            {/* Tên ngôn ngữ */}
            <p className="text-neutral-700 text-center font-bold mt-3 dark:text-neutral-100">
                {title}
            </p>
        </div>
    )
}