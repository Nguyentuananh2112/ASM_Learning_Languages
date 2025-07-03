import { getCourses, getUserProgress } from "@/app/db/queries";
import { List } from "./list";

const CoursesPage = async () => {
  const coursesData = getCourses();
  const userProgressData = getUserProgress();

  const [courses, userProgress] = await Promise.all([coursesData, userProgressData]);

  return (
    <div className="h-full max-w-[1300px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-600 dark:text-neutral-100">
        Languages Courses
      </h1>
      <List
        courses={courses}
        activeCourseId={userProgress?.activeCourseId}
 
      />
    </div>
  );
};

export default CoursesPage;