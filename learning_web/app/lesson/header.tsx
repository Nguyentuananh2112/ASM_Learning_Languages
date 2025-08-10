import { Progress } from "@/components/ui/progress";
import { useExitModal } from "@/store/use-exit-modal";
import { InfinityIcon, X } from "lucide-react";
import Image from "next/image";


type Props = {
    hearts: number; // số "tim" còn lại của người dùng (sức học)
    percentage: number; // % hoàn thành bài học
    hasActiveSubscription: boolean; // người dùng có phải tài khoản VIP không
};

export const Header = ({ hearts, percentage, hasActiveSubscription }: Props) => {

    // Hàm mở modal thoát bài học
    const { open } = useExitModal();

    return (
        <div className="lg:pt-[50px] pt-[20px] px-10 flex gap-x-7 items-center justify-between max-w-[1140px] mx-auto w-full">
            {/* Nút X để thoát */}
            <X 
                onClick={open}
                className="text-slate-500 hover:opacity-75 transition cursor-pointer"
            />

            {/* Thanh tiến độ của bài học */}
            <Progress value={percentage} />

            {/* Hiển thị số tim còn lại hoặc biểu tượng vô hạn nếu là VIP */}
            <div className="text-rose-500 flex items-center font-bold">
                <Image 
                    src="/heart.svg"
                    height={28}
                    width={28}
                    alt="Heart"
                    className="mr-2"
                />
                {hasActiveSubscription
                ? <InfinityIcon className="h-6 w-6 stroke-[3]  shrink-0"/>
                : hearts
                }
            </div>
        </div>
    )
}
