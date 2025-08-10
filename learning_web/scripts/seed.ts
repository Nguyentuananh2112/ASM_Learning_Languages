import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "@/app/db/schema"

import * as japaneseData from "./data/japanese"
import * as koreanData from "./data/korean"
import * as englishData from "./data/english"
import * as vietnameseData from "./data/vietnamese"


const sql = neon(process.env.DATABASE_URL!);
// @ts-ignore
const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log("Seeding the database...");

        // Xóa dữ liệu cũ theo thứ tự phụ thuộc (bảng con trước, bảng cha sau)
        await db.delete(schema.challengeProgress);
        await db.delete(schema.userProgress);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challenges);
        await db.delete(schema.lessons);
        await db.delete(schema.units);
        await db.delete(schema.courses);

        // Tổng hợp dữ liệu từ tất cả các khóa học
        const allCourses = [
            japaneseData.course,
            koreanData.course,
            englishData.course,
            vietnameseData.course,
        ];

        const allUnits = [
            ...japaneseData.units,
            ...koreanData.units,
            ...englishData.units,
            ...vietnameseData.units,
        ];

        const allLessons = [
            ...japaneseData.lessons,
            ...koreanData.lessons,
            ...englishData.lessons,
            ...vietnameseData.lessons,
        ];
        
        const allChallenges = [
            ...japaneseData.challenges,
            ...koreanData.challenges,
            ...englishData.challenges,
            ...vietnameseData.challenges,
        ];
        
        const allChallengeOptions = [
            ...japaneseData.challengeOptions,
            ...koreanData.challengeOptions,
            ...englishData.challengeOptions,
            ...vietnameseData.challengeOptions,
        ];

        // Chèn dữ liệu đã tổng hợp
        console.log("Inserting courses...");
        await db.insert(schema.courses).values(allCourses);

        console.log("Inserting units...");
        await db.insert(schema.units).values(allUnits);
        
        console.log("Inserting lessons...");
        await db.insert(schema.lessons).values(allLessons);
        
        console.log("Inserting challenges...");
        await db.insert(schema.challenges).values(allChallenges);
        
        console.log("Inserting challenge options...");
        await db.insert(schema.challengeOptions).values(allChallengeOptions);

        console.log("Seeding completed successfully.");
    } catch (error) {
        console.error("Error seeding the database:", error);
        throw new Error("Database seeding failed");
    }
};
main();