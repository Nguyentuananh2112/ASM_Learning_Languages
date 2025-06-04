import  db  from "@/app/db/drizzle";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { cache } from "react";
import { courses, userProgress } from "./schema";


// Trả về tiến trình học của người dùng hiện tại (nếu đã đăng nhập)
// Kèm theo thông tin khóa học hiện tại (activeCourse)
export const getUserProgress = cache(async () => {
    // Lấy userId của người dùng hiện tại từ phiên đăng nhập Clerk
    const { userId } = await auth();
    
    if (!userId) {
        return null;
    }


     // Truy vấn bảng userProgress
    const data = await db.query.userProgress.findFirst({
        where: eq(userProgress.userId, userId), // Điều kiện: user_id trùng với user hiện tại
        with: {
            activeCourse: true, // Lấy thông tin khóa học hiện tại
        },
    });

    return data;
});

// Trả về danh sách tất cả các khóa học trong bảng 'courses'
export const getCourses = cache(async () => {
    const data = await db.query.courses.findMany(); // Truy vấn tất cả khóa học

    return data;
});

export const getCourseById = cache(async (courseId: number) => {
    const data = await db.query.courses.findFirst({
        where: eq(courses.id, courseId), // Lấy khóa học theo ID
        // TODO: Thêm thông tin liên quan nếu cần
    });

    return data;
})