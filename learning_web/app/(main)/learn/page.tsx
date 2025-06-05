import { Header } from "./header";
import FeedWrapper from "@/components/feed-wrapper";
import StickyWrapper from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { redirect } from "next/navigation";
import { getUserProgress } from "@/app/db/queries";

const LearnPage = async () => {
  //  getUserProgress lấy thông tin tiến trình học user (trả về Promise)
  const userProgressData = getUserProgress();
  const [userProgress] = await Promise.all([userProgressData]);

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
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
