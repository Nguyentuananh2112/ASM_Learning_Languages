"use client";

import { useState, useTransition } from "react";
import { challenges, challengeOptions } from "../db/schema";
import { Header } from "./header";
import QuestionBubble from "./question-bubble";
import { Challenge } from "./challenge";
import { Footer } from "./footer";
import { upsertChallengeProgress } from "@/actions/challenge-progress";
import { toast } from "sonner";
import { reduceHearts } from "@/actions/user-progress";

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
    userSubscription
}: Props) => {

    const [pending, startTransiton] = useTransition();

    // State theo dõi số tim & phần trăm hoàn thành bài học
    const [hearts, setHearts] = useState(initialHearts);
    const [percentage, setPercentage] = useState(initialPercentage);
    const [challenges] = useState(initialLessonChallenges);

    // Xác định index của câu hỏi hiện tại (chưa hoàn thành)
    const [activeIndex, setActiveIndex] = useState(() => {
        const uncompletedIndex = challenges.findIndex((challenge) => !challenge.completed);
        return uncompletedIndex === -1 ? 0 : uncompletedIndex;
    });

    // State lưu lựa chọn của người dùng và trạng thái đúng/sai
    const [selectedOption, setSelectedOption] = useState<number>();
    const [status, setStatus] = useState<"correct" | "wrong" | "none">("none");

    // Lấy challenge và options hiện tại
    const challenge = challenges[activeIndex];
    const options = challenge?.challengeOptions ?? [];

    const onNext = () => {
        setActiveIndex((current) => current + 1);
    };



    // Hàm xử lý khi người dùng chọn đáp án
    const onSelect = (id: number) => {
        if (status !== "none") return; // Nếu đã chọn rồi thì không cho chọn lại
        setSelectedOption(id);
    };

    const onContinue = () => {
        if (!selectedOption) return;

        if (status === "wrong") {
            setStatus("none");
            setSelectedOption(undefined);
            return;
        }

        if (status === "correct") {
            onNext();
            setStatus("none");
            setSelectedOption(undefined);
            return;
        }

        const correctOption = options.find((option) => option.correct);

        if (!correctOption) {
            return;
        }

        if (correctOption.id === selectedOption) {
            startTransiton(() => {
                upsertChallengeProgress(challenge.id).then((respone) => {
                    if (respone?.error === "hearts") {
                        console.error("Missing hearts");
                        return;
                    }

                    setStatus("correct");
                    setPercentage((prev) => prev + 100 /challenges.length);

                    if (initialPercentage === 100) {
                        setHearts((prev) => Math.min(prev + 1, 5));
                    }
                })
                .catch(() => toast.error("Wrong. Pls try again."))
            });
        } else {
            startTransiton(() => {
                reduceHearts(challenge.id).then((respone) => {
                    if (respone?.error === "hearts") {
                        console.error("Missing hearts");
                        return;
                    }

                    setStatus("wrong");

                    if (!respone?.error) {
                        setHearts((prev) => Math.max(prev - 1, 0))
                    }
                }) .catch(() => toast.error("Something went wrong. Try again."));
            })
        }
    };

    // Tiêu đề câu hỏi
    const title = challenge.type === "ASSIST" ? "Select the correct meaning" : challenge.question;

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
                        <h1 className="text-lg lg:text-3xl text-center lg:text-start font-bold text-neutral-700">
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