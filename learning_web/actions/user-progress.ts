"use server";

import { getCourseById, getUserProgress } from "@/app/db/queries";
import { auth, currentUser } from "@clerk/nextjs/server";
import db from "@/app/db/drizzle";
import { challengeProgress, challenges, userProgress } from "@/app/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { and, eq } from "drizzle-orm";


const POINTS_TO_REFILL = 10;

export const upsertUserProgress = async (courseId: number) => {
    try {
        const { userId } = await auth();
        const user = await currentUser();

        if (!userId || !user) {
            throw new Error("User not authenticated");
        }

        const course = await getCourseById(courseId);

        if (!course) {
            throw new Error("Course not found");
        }

   

    // // Kiểm tra xem khóa học có chứa ít nhất một đơn vị và một bài học không
    // if (!course.units.length || !course.units[0].lessons.length) {
    //     throw new Error("Course has no units or lessons");
    // }

    const existingUserProgress = await getUserProgress();

     if (existingUserProgress) {
        await db.update(userProgress).set({
            activeCourseId: courseId,
            userName: user.firstName || "User",
            userImageSrc: user.imageUrl || "/logo_main.svg",
        }).where(eq(userProgress.userId, userId));
    } else {
        await db.insert(userProgress).values({
            userId,
            activeCourseId: courseId,
            userName: user.firstName || "User",
            userImageSrc: user.imageUrl || "/logo_main.svg",
        });
    }

        revalidatePath("/courses");
        revalidatePath("/learn");
        redirect("/learn");
    } catch (error: any) {
        // NEXT_REDIRECT không phải là lỗi thực sự
        if (error?.digest?.startsWith('NEXT_REDIRECT')) {
            // Đây là redirect bình thường, không phải lỗi
            return;
        }
        console.error("Error in upsertUserProgress:", error);
        throw error; // Re-throw để component có thể handle
    }
};

export const reduceHearts = async (challengeId: number) => {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("Unauthorized");
    }

    const currentUserProgress = await getUserProgress();

    const challenge = await db.query.challenges.findFirst({
        where: eq(challenges.id, challengeId),
    });

    if (!challenge) {
        throw new Error("Challenge not found");
    }

    const lessonId = challenge.lessonId;

    const existingChallengeProgress = await db.query.challengeProgress.findFirst({
        where: and(
            eq(challengeProgress.userId, userId),
            eq(challengeProgress.challengeId, challengeId),
        ),
    });

    const isPractive = !!existingChallengeProgress;

    if (isPractive) {
        return { error: "practice"};
    }

    if (!currentUserProgress) {
        throw new Error("User progress not found");
    }


    if (currentUserProgress.hearts === 0) {
        return { error: "hearts"};

    }

    await db.update(userProgress).set({
        hearts: Math.max(currentUserProgress.hearts -1, 0),

    }).where(eq(userProgress.userId, userId));

    revalidatePath("/shop");
    revalidatePath("/learn");
    revalidatePath("/quests");
    revalidatePath("/leaderboard");
    revalidatePath(`/lesson/${lessonId}`);
};

export const refillHearts = async () => {
    const currentUserProgress = await getUserProgress();

    if (!currentUserProgress) {
        throw new Error("User progress not found");
    }

    if (currentUserProgress.hearts === 5) {
        throw new Error("Hearts are already full");
    }

    if (currentUserProgress.points < POINTS_TO_REFILL) {
        throw new Error("Not enough points");
    }

    await db.update(userProgress).set({
        hearts: 5,
        points: currentUserProgress.points - POINTS_TO_REFILL,
    }).where(eq(userProgress.userId, currentUserProgress.userId));

    revalidatePath("/shop");
    revalidatePath("/learn");
    revalidatePath("/quests");
    revalidatePath("/leaderboard");
}