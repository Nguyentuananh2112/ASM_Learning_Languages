import { notFound, redirect } from "next/navigation";
import { getLesson, getUserProgress } from "@/app/db/queries";
import { Quiz } from "../quiz";

export default async function LessonIdPage(
  { params }: { params: Promise<{ lessonId: string }> } // 👈 params là Promise
) {
  const { lessonId } = await params;                    // 👈 phải await
  const id = Number(lessonId);
  if (!Number.isFinite(id)) notFound();

  const [lesson, userProgress] = await Promise.all([
    getLesson(id),
    getUserProgress(),
  ]);

  if (!lesson || !userProgress) {
    redirect("/learn");
  }


  // Tính toán tỷ lệ hoàn thành
  const total = lesson.challenges.length;
  const completed = lesson.challenges.filter((c) => c.completed).length;
  const initialPercentage = total ? Math.round((completed / total) * 100) : 0;

  return (
    <Quiz
      initialLessonId={lesson.id}
      initialLessonChallenges={lesson.challenges}
      initialHearts={userProgress.hearts}
      initialPercentage={initialPercentage}
      userSubscription={null}
    />
  );
}
