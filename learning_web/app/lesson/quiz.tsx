
"use client";

import { useState } from "react";
import { challenges, challengeOptions } from "../db/schema";
import { Header } from "./header";
import QuestionBubble from "./question-bubble";
import { Challenge } from "./challenge";
import { Footer } from "./footer";

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

    // Hàm xử lý khi người dùng chọn đáp án
    const onSelect = (id: number) => {
        if (status !== "none") return; // Nếu đã chọn rồi thì không cho chọn lại
        setSelectedOption(id);
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
                                disabled={false}
                                type={challenge.type}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer hiển thị nút điều khiển */}
            <Footer
                disabled={!selectedOption}
                status={status}
                onCheck={() => {}}
            />
        </>
    );
};