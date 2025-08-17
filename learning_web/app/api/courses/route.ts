import { NextResponse } from "next/server";
import db from "@/app/db/drizzle";
import { courses } from "@/app/db/schema";
import { isAdmin } from "@/lib/admin";


export const GET = async () => {
    if (!(await isAdmin())) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    const data = await db.query.courses.findMany();

    return NextResponse.json(data);
}

export const POST = async (req: Request) => {
    if (!await isAdmin()) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    console.log('BODY:', body);

    // Map đúng field schema (phải là imageSrc, không phải image_src!)
    const data = {
        title: body.title,
        imageSrc: body.imageSrc, // <-- Đúng theo schema drizzle!
    };

    // Kiểm tra dữ liệu có đủ chưa
    if (!data.title || !data.imageSrc) {
        return NextResponse.json({ error: "Thiếu dữ liệu title hoặc imageSrc" }, { status: 400 });
    }

    // Truyền đúng kiểu vào drizzle
    const result = await db.insert(courses).values(data).returning();

    return NextResponse.json(result[0]);
};
