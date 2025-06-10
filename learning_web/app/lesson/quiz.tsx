"use client";

import { useState } from "react";
import { challenges, challengeOptions } from "../db/schema";
import { Header } from "./header";



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
    // const [lessonChallenges, setLessonChallenges] = useState(initialLessonChallenges);

    return (
        <>
        {/* Header hiển thị trạng thái học */}
          <Header 
            hearts={hearts}
            percentage={percentage}
            hasActiveSubscription={!!userSubscription?.isActive}
            />  
            {/* TODO: các câu hỏi tương tác sẽ thêm vào ở các bài sau */}
        </>
    );
};