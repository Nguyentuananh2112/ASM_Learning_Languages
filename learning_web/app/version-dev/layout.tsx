// Import component Navigation từ sidebar
import { Navigation } from '@/components/sidebar/navigation';

// Định nghĩa layout cho toàn bộ khu vực version-dev
const VersionDevLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // Container bọc toàn bộ layout, chiều cao full
    <div className="h-full">
      {/* Sidebar chỉ hiển thị trên màn hình md trở lên, cố định bên trái */}
      <div className="hidden md:flex h-full w-[190px] flex-col fixed inset-y-0 z-50">
        <div className="h-full w-full flex flex-col border-r-2">
          <Navigation /> {/* Thanh điều hướng bên trái */}
        </div>
      </div>
      {/* Khu vực nội dung chính, có padding trái để tránh đè lên sidebar */}
      <main className="md:pl-[190px] h-full">
        {children} {/* Nội dung động sẽ được render ở đây */}
      </main>
    </div>
  );
};

export default VersionDevLayout;
