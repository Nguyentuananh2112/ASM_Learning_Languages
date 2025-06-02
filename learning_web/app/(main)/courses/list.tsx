"use client";

import { Course } from "@/app/db/schema";
import { Card } from "./card";

type Props = {
    courses: typeof Course.$inferSelect[];
    activeCourseId: number;
};

export const List = ({ courses, activeCourseId }: Props) => {
    return (
        <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210,1fr))] gap-4"> {/* css cho phần khung ở ngoài page courses */}
            {courses.map((courses) => (
                <Card
                    key={courses.id}
                    id={courses.id}
                    title={courses.title}
                    imageSrc={courses.imageSrc}
                    onClick={() => {}}
                    disabled={false}
                    active={courses.id === activeCourseId}
                />
            ))}
        </div>
    );
};