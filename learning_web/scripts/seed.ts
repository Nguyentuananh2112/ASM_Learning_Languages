import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "@/app/db/schema"


const sql = neon(process.env.DATABASE_URL!);
// @ts-ignore
const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log("Seeding the database...");

        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons)
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);
        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Japanese",
                imageSrc: "/jp.svg",
            },
            {
                id: 2,
                title: "Korean",
                imageSrc: "/kr.svg",
            },
            {
                id: 3,
                title: "English",
                imageSrc: "/english.svg",
            },
            {
                id: 4,
                title: "Vietnamese",
                imageSrc: "/vn-flag.svg",
            },
        ]);


        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 1,
                title: "Unit 1",
                description: "Learn the basic of Japanese",
                order: 1,
            },

            // {
            //     id: 2,
            //     courseId: 1,
            //     title: "Unit 2",
            //     description: "Learn Japanese",
            //     order: 2,
            // }
        ]
        )
        await db.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1, //Unit 1 (Learn the basicx....)
                order: 1,
                title: "Nouns"

            },

            {
                id: 2,
                unitId: 1, //Unit 1 (Learn the basicx....)
                order: 2,
                title: "Verbs"

            },
            {
                id: 3,
                unitId: 1, //Unit 1 (Learn the basicx....)
                order: 3,
                title: "Nouns"

            },

            {
                id: 4,
                unitId: 1, //Unit 1 (Learn the basicx....)
                order: 4,
                title: "Verbs"

            },
            // // bai hoc trong lesson 2
            //  {
            //     id: 5,
            //     unitId: 2, //Unit 1 (Learn the basicx....)
            //     order: 1,
            //     title: "Nouns"

            // },
            //  {
            //     id: 6,
            //     unitId: 2, //Unit 1 (Learn the basicx....)
            //     order: 2,
            //     title: "Nouns"

            // },
            //  {
            //     id: 7,
            //     unitId: 2, //Unit 1 (Learn the basicx....)
            //     order: 3,
            //     title: "Nouns"

            // },
            //  {
            //     id: 8,
            //     unitId: 2, //Unit 1 (Learn the basicx....)
            //     order: 4,
            //     title: "Nouns"

            // },
          
        ]);

        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1, //Nours
                type: "SELECT",
                order: 1,
                question: 'Which one of these is the "The man" ?',

            },
       
        ]);
        await db.insert(schema.challengeOptions).values([
            {
                id: 1,
                challengeId: 1, //Which one of these is "the man" ?
                imageSrc: "/man.svg",
                correct: true,
                text: "その男",
                audioSrc: "/jp_man.mp3"
            },
            {
                id: 2,
                challengeId: 1, //Which one of these is "the man" ?
                imageSrc: "/woman.svg",
                correct: false,
                text: "女性たち",
                audioSrc: "/jp_women.mp3"
            },
            {
                id: 3,
                challengeId: 1, //Which one of these is "the man" ?
                imageSrc: "/robot.svg",
                correct: false,
                text: "ロボット",
                audioSrc: "/jp_robot.mp3"
            },
            {
                id: 4,
                challengeId: 1, //Which one of these is "the man" ?
                imageSrc: "/cat.svg",
                correct: false,
                text: "猫",
                audioSrc: "/jp_cat.mp3"
            },
        ]);

          
        console.log("Seeding completed successfully.");
    } catch (error) {
        console.error("Error seeding the database:", error);
        throw new Error("Database seeding failed");
    }
};

main();