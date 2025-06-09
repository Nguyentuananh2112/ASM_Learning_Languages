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
          
        console.log("Seeding completed successfully.");
    } catch (error) {
        console.error("Error seeding the database:", error);
        throw new Error("Database seeding failed");
    }
};

main();