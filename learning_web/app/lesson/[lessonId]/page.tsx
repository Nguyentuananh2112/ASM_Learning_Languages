import { redirect } from "next/navigation";
import { getLesson, getUserProgress } from "@/app/db/queries";
import { Quiz } from "../quiz";


type Props = {
    params: {
        lessonId: number;
    }
  }

const LessonIdPage = async ({params} : Props) => {
  
    // Gọi dữ liệu bài học & tiến độ người dùng
  const lessonData = getLesson(params.lessonId);
  const userProgressData = getUserProgress();

  const [lesson, userProgress] = await Promise.all([
    lessonData,
    userProgressData,
  ]);

  // Nếu thiếu dữ liệu thì chuyển về /learn
  if (!lesson || !userProgress) {
    redirect("/learn");
  }

  // Tính phần trăm hoàn thành của bài học
  const initialPercentage = lesson.challenges.filter((challenge) => challenge.completed).length / lesson.challenges.length * 100;

  return (
    // Truyền dữ liệu vào component Quiz
    <Quiz 
        initialLessonId={lesson.id}
        initialLessonChallenges={lesson.challenges}
        initialHearts={userProgress.hearts}
        initialPercentage={initialPercentage}
        userSubscription={null}
    />
  );
};

export default LessonIdPage;
