import { getCourses, getUserProgress } from "@/app/db/queries";
import { List } from "./list";
import { getTranslations } from "@/lib/server-i18n"; 



const CoursesPage = async () => {
  // Bây giờ hàm này sẽ gọi đúng đến code server
  const { t } = await getTranslations();

  const coursesData = getCourses();
  const userProgressData = getUserProgress();

  const [
    courses, 
    userProgress
  ] = await Promise.all([
    coursesData, 
    userProgressData
  ]);

   return (
    <div className="h-full max-w-[1300px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700 dark:text-neutral-100">
        {t("language_courses")}
      </h1>
      <List
        courses={courses}
        activeCourseId={userProgress?.activeCourseId}
      />
    </div>
  );
};

export default CoursesPage;