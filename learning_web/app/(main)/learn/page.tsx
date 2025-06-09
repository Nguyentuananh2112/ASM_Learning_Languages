import { Header } from "./header";
import FeedWrapper from "@/components/feed-wrapper";
import StickyWrapper from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { redirect } from "next/navigation";
import { getUnits, getUserProgress } from "@/app/db/queries";
import { get } from "http";
import { Unit } from "./unit";

const LearnPage = async () => {
  const unitsData =getUnits();
  //  getUserProgress lấy thông tin tiến trình học user (trả về Promise)
  const userProgressData = getUserProgress();
  const [userProgress, units] = await Promise.all([userProgressData,unitsData]);

  // Kiểm tra nếu không có dữ liệu userProgress hoặc không có khóa học đang học (activeCourse)
  // Chuyển hướng người dùng về course page 
  if (!userProgress || !userProgress.activeCourse) {
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
            activeLesson= {undefined}
            activeLessonPercentage= {0}
            />
          </div>
        ))}
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
