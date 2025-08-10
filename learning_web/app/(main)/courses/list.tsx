"use client";

import { courses, userProgress } from "@/app/db/schema";
import { Card } from "./card";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { upsertUserProgress } from "@/actions/user-progress";
import { toast } from "sonner";

type Props = {
    courses: typeof courses.$inferSelect[];
    activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};

export const List = ({ courses, activeCourseId }: Props) => {
    const router = useRouter();
    const [pending, startTransition] = useTransition();

    const onClick = (id: number) => {
        if (pending) return; // Nếu đang trong quá trình chuyển tiếp, không làm gì cả

        if (id === activeCourseId) {
            return router.push("/learn"); // Nếu khóa học đã được chọn, chuyển hướng đến trang học
        }
        startTransition(() => {
            upsertUserProgress(id)
                .catch((error: any) => {
                    // Kiểm tra xem có phải redirect không
                    if (error?.digest?.startsWith('NEXT_REDIRECT')) {
                        console.log("Redirecting to learn page");
                        return; // Không hiển thị error toast cho redirect
                    }
                    console.error("Error updating user progress:", error);
                    toast.error("Something went wrong! Please try again later.");
                });
        });
    }

    return (
        <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210,1fr))] gap-4"> {/* css cho phần khung ở ngoài page courses */}
            {courses.map((courses) => (
                <Card
                    key={courses.id}
                    id={courses.id}
                    title={courses.title}
                    imageSrc={courses.imageSrc}
                    onClick={onClick}
                    disabled={false}
                    active={courses.id === activeCourseId}
                />
            ))}
        </div>
    );
};