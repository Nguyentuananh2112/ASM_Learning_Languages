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
                disabled && "pointer-events-none opacity-50",
                active ? "border-blue-600 border-[2px]" : "border-neutral-200" /* hiện viền xanh ở khung  */
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
            <p className="text-neutral-700 text-center font-bold mt-3">
                {title}
            </p>
        </div>
    )
}