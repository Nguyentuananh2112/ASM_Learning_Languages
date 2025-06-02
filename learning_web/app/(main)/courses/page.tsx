import { getCourses } from "@/app/db/queries";
import { Course } from "@/app/db/schema";
import { List } from "./list";

const CoursesPage = async () => {

  const courses = await getCourses();

  return (
    <div className="h-full max-w-[1300px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-600">
        Languages Courses
      </h1>

      <List
        courses={courses}
        activeCourseId={1}
 
      />
    </div>
  );
};

export default CoursesPage;