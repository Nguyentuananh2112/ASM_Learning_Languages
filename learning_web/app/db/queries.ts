import  db  from "@/app/db/drizzle";
import { cache } from "react";

export const getCourses = cache(async () => {
    const data = await db.query.Course.findMany();

    return data;
});