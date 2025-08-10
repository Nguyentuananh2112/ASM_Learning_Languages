import  db  from "@/app/db/drizzle";
import { auth } from "@clerk/nextjs/server";
import { eq, sql } from "drizzle-orm";
import { cache, useId } from "react";
import { challengeProgress, courses, lessons, units, userProgress } from "./schema";


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


// lấy danh sách các unit (đơn vị học tập) thuộc khóa học mà người dùng đang học
export const getUnits = cache(async () => {
    const {userId} = await auth();
    const userProgress = await getUserProgress();
    if (!userId || !userProgress?.activeCourseId){
        return [];
    
    }

    //TODO: Confirm whether order is needed
    const data = await db.query.units.findMany({
        where: eq(units.courseId, userProgress.activeCourseId),
        with: {
            lessons: {
                with:{
                    challenges: {
                        with: {
                            challengeProgress: {
                                where:eq(challengeProgress.userId,
                                    userId,
                                ),
                            },
                        },
                    },
                },
            },
        },
    });

    
    const normalizedData = data.map((unit) => {
        const lessonsWithCompletedStatus = unit.lessons.map((lesson)=>{
            
            // Nếu không có challenge nào trong bài học, đánh dấu là chưa hoàn thành
            if (
                lesson.challenges.length === 0
            ) {
                return { ...lesson, completed: false };
            }

            const allCompletedChallenges = lesson.challenges.every((challenge)=>{
                return challenge.challengeProgress 
                 && challenge.challengeProgress.length > 0
                 && challenge.challengeProgress.every((progress) => progress.completed );

            });

            return { ...lesson, completed: allCompletedChallenges};
        });
         return{...unit, lessons: lessonsWithCompletedStatus };
    });
    return normalizedData;
   
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
});

// Truy xuất bài học hiện tại mà người dùng đang học
export const getCourseProgress = cache(async () => {
    const {userId} = await auth();
    const userProgress = await getUserProgress();

    if(!userId || !userProgress?.activeCourseId){
        return null;
    }


    // Lấy tất cả unit thuộc khóa học đang học, sắp xếp theo thứ tự tăng dần
    const unitsInActiveCourse = await db.query.units.findMany({
        orderBy: (units, {asc}) => [asc(units.order)],
        where: eq(units.courseId, userProgress.activeCourseId),
        with: {
            lessons: {
                orderBy: (lessons, {asc}) => [asc(lessons.order)],
                with: {
                    unit: true,
                    challenges: {
                        with: {
                            challengeProgress: {
                                where: eq(challengeProgress.userId, userId),
                            }
                        }
                    }
                }
            }
        }
    });

    // Tìm bài học đầu tiên có ít nhất một challenge chưa hoàn thành
    const firstUnCompletedLesson = unitsInActiveCourse
        .flatMap((unit) => unit.lessons)
        .find((lesson) => {
            return lesson.challenges.some((challenge) => {
                return !challenge.challengeProgress 
                    || challenge.challengeProgress.length === 0
                    || challenge.challengeProgress.some((progress) => progress.completed === false);
            });
        });
     // Trả về bài học đang học và id của nó
    return {
        activeLesson: firstUnCompletedLesson,
        activeLessonId: firstUnCompletedLesson?.id,
    }
});


// Lấy chi tiết bài học theo ID 
// bao gồm danh sách challenge và trạng thái hoàn thành
export const getLesson = cache(async (id?: number) => {
    const {userId} = await auth();
    if(!userId){
        return null;
    }

    // Lấy bài học hiện tại nếu không truyền vào id cụ thể
    const courseProgress = await getCourseProgress();
    const lessonId = id || courseProgress?.activeLessonId;

    if(!lessonId){
        return null;
    }

     // Tìm bài học theo ID, bao gồm challenge, option và tiến trình
    const data = await db.query.lessons.findFirst({
        where: eq(lessons.id, lessonId),
        with: {
            challenges: {
                orderBy: (challenges, {asc}) => [asc(challenges.order)],
                with: {
                    challengeOptions: true, // Lấy các đáp án
                    challengeProgress: {
                        where: eq(challengeProgress.userId, userId), // Tiến trình của user này
                    },
                },
            },
        },
    });

    if(!data || !data.challenges){
        return null;
    }

    // Kiểm tra từng challenge đã hoàn thành hay chưa
    const normalizedChallenges = data.challenges.map((challenge) => {
        const completed = challenge.challengeProgress 
            && challenge.challengeProgress.length > 0
            && challenge.challengeProgress.every((progress) => progress.completed);

        return {... challenge, completed: completed}
    });

    // Trả về bài học với danh sách challenge đã được gắn thêm trạng thái "completed"
    return {...data, challenges: normalizedChallenges}
});



// Tính phần trăm hoàn thành của bài học hiện tại
export const getLessonPercentage = cache(async () => {
    const courseProgress = await getCourseProgress(); // Lấy bài học hiện tại

    if (!courseProgress?.activeLessonId) {
        return 0;
    }
    
    const lesson = await getLesson(courseProgress.activeLessonId); // Lấy thông tin chi tiết của bài học

    if (!lesson) {
        return 0;
    }

    // Đếm số challenge đã hoàn thành
    const completedChallenges = lesson.challenges.filter((challenge) => challenge.completed);
    // Tính phần trăm hoàn thành: (số đã xong / tổng số) * 100
    const percentage = Math.round(
        (completedChallenges.length / lesson.challenges.length) *100,
    );

    return percentage;
});

export const getTopTenUsers = cache(async() => {
    const {userId} = await auth();

    if (!userId){
        return[];
    }
const data = await db.query.userProgress.findMany({
    orderBy: (userProgress, {desc}) => [desc(userProgress.points)],
    limit: 10,
    columns: {
        userId: true,
        userName: true,
        userImageSrc: true,
        points: true,

    },
});

return data;


});