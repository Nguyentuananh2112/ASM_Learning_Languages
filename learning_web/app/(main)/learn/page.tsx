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
          activeCourse={{ title: "English", imageSrc: "/english.svg" }}
          hearts={5}
          points={1000}
          hasActiveSubscription={false}
        />
      </StickyWrapper>

      {/* Trang learn chứa Header và FeedWrapper */}
      <FeedWrapper>
        <Header title="English" />
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
