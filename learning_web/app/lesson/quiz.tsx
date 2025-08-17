"use client";

import { toast } from "sonner";
import Image from "next/image";
import Confetti from "react-confetti";
import { useWindowSize, useMount } from "react-use";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { useTranslation } from "react-i18next";
import { ClientOnly } from "@/components/client-only";
import { Loader } from "lucide-react";

import { reduceHearts } from "@/actions/user-progress";
import { challenges, challengeOptions } from "../db/schema";
import { upsertChallengeProgress } from "@/actions/challenge-progress";

import { Header } from "./header";
import { Footer } from "./footer";
import { Challenge } from "./challenge";
import { ResultCard } from "./result-card";
import QuestionBubble from "./question-bubble";
import { useHeartsModal } from "@/store/use-hearts-modal";
import { usePracticesModal } from "@/store/use-practice-modals";
import { useAudioManager } from "@/lib/audio-utils";





// Định nghĩa kiểu Props cho component Quiz
type Props = {
    initialLessonId: number;
    initialHearts: number;
    initialPercentage: number;
    initialLessonChallenges: (typeof challenges.$inferSelect & {
        completed: boolean;
        challengeOptions: typeof challengeOptions.$inferSelect[];
    })[];
    userSubscription: any; // true nếu là VIP
}

// Component Quiz chính
export const Quiz = ({
    initialLessonId,
    initialHearts,
    initialPercentage,
    initialLessonChallenges,
    userSubscription,
}: Props) => {
    const { t } = useTranslation();
    const { open: openHeartsModal } = useHeartsModal();
    const { open: openPracticeModal } = usePracticesModal();

    useMount(() => {
        if (initialPercentage === 100) {
            openPracticeModal();
        }
    })

    const { width, height } = useWindowSize();

    const router = useRouter();

    // Khởi tạo audio manager
    const { playAudio } = useAudioManager();
    
    const [pending, startTransiton] = useTransition(); // Xử lý trạng thái loading khi gọi API

    const [lessonId] = useState(initialLessonId);
    // State theo dõi số tim & phần trăm hoàn thành bài học
    const [hearts, setHearts] = useState(initialHearts); // Số tim hiện tại
    const [percentage, setPercentage] = useState(() => {
        return initialPercentage === 100 ? 0 : initialPercentage
    }); 
    const [challenges] = useState(initialLessonChallenges); // Danh sách các câu hỏi

    // Xác định index của câu hỏi hiện tại (chưa hoàn thành)
    const [activeIndex, setActiveIndex] = useState(() => {
        const uncompletedIndex = challenges.findIndex((challenge) => !challenge.completed);
        return uncompletedIndex === -1 ? 0 : uncompletedIndex;
    }); // Index của câu hỏi đang làm

    // State lưu lựa chọn của người dùng và trạng thái đúng/sai
    const [selectedOption, setSelectedOption] = useState<number>(); // Đáp án người dùng chọn
    const [status, setStatus] = useState<"correct" | "wrong" | "none">("none"); // Trạng thái trả lời
    // const [hasPlayedFinishAudio, setHasPlayedFinishAudio] = useState(false); // Theo dõi trạng thái phát âm thanh


    // Lấy challenge và options hiện tại
    const challenge = challenges[activeIndex]; // Câu hỏi hiện tại
    const options = challenge?.challengeOptions ?? []; // Các lựa chọn của câu hỏi

    const onNext = () => {
        setActiveIndex((current) => current + 1); // Chuyển sang câu hỏi tiếp theo
    };

    
    // Dùng useEffect để chủ động phát nhạc khi hoàn thành
    useEffect(() => {
        // Điều kiện: Không còn câu hỏi VÀ đã đạt 100%
        if (!challenge && percentage === 100) {
            playAudio("/finish.mp3").catch(error => {
                console.error('Failed to play finish audio:', error);
            });
        }
    }, [challenge, percentage, playAudio]);



    // Hàm xử lý khi người dùng chọn đáp án
    const onSelect = (id: number) => {
        if (status !== "none") return; // Nếu đã chọn rồi thì không cho chọn lại
        setSelectedOption(id); // Lưu đáp án người dùng chọn
    };

    const onContinue = () => {
        if (!selectedOption) return; // Nếu chưa chọn đáp án thì không làm gì

        if (status === "wrong") {
            setStatus("none"); // Nếu sai thì reset trạng thái để chọn lại
            setSelectedOption(undefined);
            return;
        }

        if (status === "correct") {
            onNext(); // Nếu đúng thì chuyển sang câu tiếp theo
            setStatus("none");
            setSelectedOption(undefined);
            return;
        }

        const correctOption = options.find((option) => option.correct); // Tìm đáp án đúng

        if (!correctOption) {
            return;
        }

        if (correctOption.id === selectedOption) {
            startTransiton(() => {
                upsertChallengeProgress(challenge.id).then((respone) => {
                    if (respone?.error === "hearts") {
                        openHeartsModal();
                        return;
                    }
                    
                    playAudio("/correct.mp3").catch(error => {
                        console.error('Failed to play correct audio:', error);
                    }); // Phát âm thanh đúng
                    setStatus("correct"); // Đánh dấu trả lời đúng
                    setPercentage((prev) => prev + 100 /challenges.length); // Tăng phần trăm hoàn thành

                    if (initialPercentage === 100) {
                        setHearts((prev) => Math.min(prev + 1, 5)); // Nếu hoàn thành 100% thì cộng tim
                    }
                })
                .catch(() => toast.error("Wrong. Pls try again."))
            });
        } else {
            startTransiton(() => {
                reduceHearts(challenge.id).then((respone) => {
                    if (respone?.error === "hearts") {
                        openHeartsModal();
                        return;
                    }

                    playAudio("/incorrect.mp3").catch(error => {
                        console.error('Failed to play incorrect audio:', error);
                    }); // Phát âm thanh sai
                    setStatus("wrong"); // Đánh dấu trả lời sai

                    if (!respone?.error) {
                        setHearts((prev) => Math.max(prev - 1, 0)) // Trừ tim nếu sai
                    }
                }) .catch(() => toast.error("Something went wrong. Try again."));
            })
        }
    };

    // Nếu đã hoàn thành hết các câu hỏi thì hiển thị màn hình chúc mừng
    if (!challenge) {
        return (
            <>
            <Confetti
                width={width}
                height={height}
                recycle={false}
                numberOfPieces={500}
                tweenDuration={10000}
            />
            <div className="flex flex-col gap-y-4 lg:gap-y-8 max-w-lg mx-auto text-center items-center justify-center h-full">
               <Image
                src="/finish.svg"
                alt="Finish"
                className="hidden lg:block"
                height={100}
                width={100}
               />
                <Image
                src="/finish.svg"
                alt="Finish"
                className="block lg:hidden"
                height={50}
                width={50}
               />
               <h1 className="text-xl lg:text-3xl font-bold text-neutral-700 dark:text-neutral-100">
                    {t('quiz_complete_title')} <br /> {t('quiz_complete_description')}
                </h1>
                <div className="flex items-center gap-x-4 w-full">
                    <ResultCard
                        variant="points"
                        value={challenges.length * 10}
                    />
                    <ResultCard
                        variant="hearts"
                        value={hearts }
                    />
                </div>
            </div>
            <Footer
                lessonId={lessonId}
                status="completed"
                onCheck={() => router.push("/learn")}
            />
            </>
        );
    }

    // Tiêu đề câu hỏi
    const title = challenge.type === "ASSIST" ? t('quiz_assist_title')  : challenge.question; // Tiêu đề hiển thị trên mỗi câu hỏi

    return (
        <>
            
            {/* Header hiển thị trạng thái học */}
            <Header 
                hearts={hearts}
                percentage={percentage}
                hasActiveSubscription={!!userSubscription?.isActive}
            />  

            {/* Nội dung chính của quiz */}
            <div className="flex-1">
                <div className="h-full flex items-center justify-center">
                    <div className="lg:min-h-[350px] lg:w-[600px] w-full px-6 lg:px-0 flex flex-col gap-y-12">
                        <h1 className="text-lg lg:text-3xl text-center lg:text-start font-bold text-neutral-700 dark:text-white">
                            {title}
                        </h1>
                        <div>
                            {/* Nếu là dạng ASSIST thì hiển thị QuestionBubble */}
                            {challenge.type === "ASSIST" && (
                                <QuestionBubble question={challenge.question} />
                            )}

                            {/* Hiển thị các lựa chọn */}
                            <Challenge
                                options={options}
                                onSelect={onSelect}
                                status={status}
                                selectedOption={selectedOption}
                                disabled={pending}
                                type={challenge.type}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer hiển thị nút điều khiển */}
            <Footer
                disabled={pending || !selectedOption}
                status={status}
                onCheck={onContinue}
            />
        </>
    );
};