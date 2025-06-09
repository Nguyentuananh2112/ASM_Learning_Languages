import { Header } from "./header";
import FeedWrapper from "@/components/feed-wrapper";
import StickyWrapper from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { redirect } from "next/navigation";
import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress } from "@/app/db/queries";
import { get } from "http";
import { Unit } from "./unit";
import { lessons, units as unitsSchema } from "@/app/db/schema";

const LearnPage = async () => {
  // Gọi các hàm lấy dữ liệu song song
  const unitsData = getUnits(); // Lấy danh sách các Unit trong DB
  const userProgressData = getUserProgress(); // Lấy tiến trình học người dùng
  const courseProgressData = getCourseProgress();// Lấy bài học hiện tại người dùng đang học
  const lessonPercentageData = getLessonPercentage();// Tính phần trăm hoàn thành bài học hiện tại

  // Chờ tất cả dữ liệu được trả về cùng lúc
  const [userProgress, units, courseProgress, lessonPercentage] = await Promise.all(
    [
      userProgressData, 
      unitsData, 
      courseProgressData, 
      lessonPercentageData
    ]);


// Nếu chưa có khóa học hoặc tiến trình học → chuyển hướng về trang courses
  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  // Nếu không tìm được bài học hiện tại → cũng chuyển hướng về trang khóa học
  if (!courseProgress){
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          // Truyền dữ liệu userProgress vào UserProgress component
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>

      {/* Trang learn chứa Header và FeedWrapper */}
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
        {units.map((unit) => (
          <div key = {unit.id} className="mb-10" >
            <Unit
            id= {unit.id}
            order= {unit.order}
            description= {unit.description}
            title= {unit.title}
            lessons= {unit.lessons}
            activeLesson= {courseProgress.activeLesson as typeof lessons.$inferSelect & {
              unit: typeof unitsSchema.$inferSelect;
            } | undefined} // Bài học đang học trong unit
            activeLessonPercentage= {lessonPercentage} // Phần trăm hoàn thành
            />
          </div>
        ))}
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
