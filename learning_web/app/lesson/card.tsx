import { cn } from "@/lib/utils";
import Image from "next/image";
import { challenges } from "../db/schema";
import { useCallback } from "react";
import { useKey } from "react-use";
import { useAudioManager } from "@/lib/audio-utils";

type Props = {
    id: number;
    text: string;
    imageSrc: string | null;
    shortcut: string;
    selected?: boolean;
    onClick: () => void;
    status?: "correct" | "wrong" | "none";
    audioSrc: string | null;
    disabled?: boolean;
    type: typeof challenges.$inferSelect["type"];
}
export const Card = ({
    id, 
    text, 
    imageSrc, 
    shortcut,
    selected, 
    onClick, 
    status, 
    audioSrc, 
    disabled, 
    type
}: Props) => {

    const { playAudio } = useAudioManager();
    
    const handleClick = useCallback(async () => {
        if (disabled) return;
        
        // Play audio if available
        if (audioSrc) {
            try {
                await playAudio(audioSrc);
            } catch (error) {
                console.error('Failed to play audio:', error);
            }
        }
        
        onClick();
    }, [disabled, onClick, playAudio, audioSrc]);

  useKey(shortcut, handleClick, {}, [handleClick]);
    
    return (
        <div
            onClick={handleClick}
            className={cn(
                "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 dark:hover:bg-white/5 p-4 lg:p-6 cursor-pointer active:border-b-2 transition-all duration-200",
                // Styling cho đáp án đã chọn nhưng chưa có kết quả
                selected && status === "none" && "border-sky-400 bg-sky-50 dark:bg-sky-900/30 dark:border-sky-500 hover:bg-sky-50 dark:hover:bg-sky-900/30 shadow-md",
                // Styling cho đáp án đúng
                selected && status === "correct" && "border-blue-400 bg-blue-100 dark:bg-blue-900/30 dark:border-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900/30 shadow-md",
                // Styling cho đáp án sai
                selected && status === "wrong" && "border-rose-400 bg-rose-100 dark:bg-rose-900/30 dark:border-rose-500 hover:bg-rose-100 dark:hover:bg-rose-900/30 shadow-md",
                disabled && "pointer-events-none hover:bg-white dark:hover:bg-gray-800",
                type === "ASSIST" && "lg:p-3 w-full"
            )} 
        >
            {imageSrc && (
                <div className="relative aspect-square mb-4 max-h-[80px] lg:max-h-[150px] w-full">
                    <Image 
                        src={imageSrc}
                        alt={text}
                        fill
                    />
                </div>
            )}

            <div className={cn(
                "flex items-center justify-between",
                type === "ASSIST" && "flex-row-reverse"
            )}>
                {type === "ASSIST" && <div />}
                <p
                    className={cn(
                        "text-neutral-600 text-sm lg:text-base dark:text-neutral-300 font-medium",
                        // Text color cho đáp án đã chọn nhưng chưa có kết quả
                        selected && status === "none" && "text-sky-700 dark:text-sky-300",
                        // Text color cho đáp án đúng
                        selected && status === "correct" && "text-blue-700 dark:text-blue-300",
                        // Text color cho đáp án sai
                        selected && status === "wrong" && "text-rose-700 dark:text-rose-300",
                    )}
                >
                    {text}
                </p>
                <div
                    className={cn(
                        "lg:w-[20px] lg:h-[30px] w-[40px] h-[20px] border-2 flex items-center "
                        + "justify-center rounded-lg text-neutral-400 lg:text-[15px] text-xs font-semibold dark:text-neutral-400 transition-all duration-200",
                        // Styling cho shortcut khi đáp án đã chọn nhưng chưa có kết quả
                        selected && status === "none" && "border-sky-500 text-sky-600 dark:text-sky-400 dark:border-sky-400 bg-sky-100 dark:bg-sky-900/50",
                        // Styling cho shortcut khi đáp án đúng
                        selected && status === "correct" && "border-blue-500 text-blue-600 dark:text-blue-400 dark:border-blue-400 bg-blue-100 dark:bg-blue-900/50",
                        // Styling cho shortcut khi đáp án sai
                        selected && status === "wrong" && "border-rose-500 text-rose-600 dark:text-rose-400 dark:border-rose-400 bg-rose-100 dark:bg-rose-900/50",
                    )}
                >
                    {shortcut}
                </div>
            </div>
        </div>
    );
};