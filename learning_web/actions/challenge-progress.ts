"use server";

import db from "@/app/db/drizzle";
import { getUserProgress } from "@/app/db/queries";
import { challengeProgress, challenges, userProgress } from "@/app/db/schema";
import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const upsertChallengeProgress = async (challengeId: number) => {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("unauthorized");
    }

    const currentUserProgress = await getUserProgress();

    if (!currentUserProgress) {
        throw new Error("User progress not found");
    }

    const challenge = await db.query.challenges.findFirst({
        where: eq(challenges.id, challengeId)
    });

    if (!challenge) {
        throw new Error("Challenge not fount");
    }

    const lessonId = challenge.lessonId;

    const existingChallengeProgress = await db.query.challengeProgress.findFirst({
        where: and(
            eq(challengeProgress.userId, userId),
            eq(challengeProgress.challengeId, challengeId),
        ),
    });

    const isPractive = !!existingChallengeProgress;

    if (currentUserProgress.hearts === 0 && !isPractive) {
        return { error: "heart" };
    }

    if (isPractive) {
        await db.update(challengeProgress).set({
            completed: true,
        })
        .where(
            eq(challengeProgress.id, existingChallengeProgress.id)
        );

        await db.update(userProgress).set({
            hearts: Math.min(currentUserProgress.hearts + 1, 5),
            points: currentUserProgress.points + 20
        }).where(eq(userProgress.userId, userId));

        revalidatePath("/learn");
        revalidatePath("/lesson");
        revalidatePath("/quests");
        revalidatePath("/leaderboard");
        revalidatePath(`/lesson/${lessonId}`);
        return;
    }

    await db.insert(challengeProgress).values({
        challengeId,
        userId,
        completed: true,
    });

    await db.update(userProgress).set({
        points: currentUserProgress.points + 10,
    }).where(eq(userProgress.userId, userId));

        revalidatePath("/learn");
        revalidatePath("/lesson");
        revalidatePath("/quests");
        revalidatePath("/leaderboard");
        revalidatePath(`/lesson/${lessonId}`);
        
};