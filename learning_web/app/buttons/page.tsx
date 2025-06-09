// Import component Button từ thư mục components/ui/button
import { Button } from "@/components/ui/button";

// Định nghĩa component ButtonPage để hiển thị các kiểu button khác nhau
const ButtonPage = () => {
  return (
    // Container căn lề, dãn cách các button theo chiều dọc, giới hạn chiều rộng tối đa
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      {/* Button mặc định */}
      <Button>
        Default
      </Button>
      {/* Button với variant primary (nút chính) */}
      <Button variant="primary">
        Primary
      </Button>
      {/* Button với variant primaryOutline (nút chính viền) */}
      <Button variant="primaryOutline">
        Primary Outline
      </Button>
      {/* Button với variant secondary (nút phụ) */}
      <Button variant="secondary">
        Secondary
      </Button>
      {/* Button với variant secondaryOutline (nút phụ viền) */}
      <Button variant="secondaryOutline">
        Secondary Outline
      </Button>
      {/* Button với variant danger (nút cảnh báo/nguy hiểm) */}
      <Button variant="danger">
        Secondary
      </Button>
      {/* Button với variant dangerOutline (nút cảnh báo viền) */}
      <Button variant="dangerOutline">
        Secondary Outline
      </Button>
      {/* Button với variant super (nút nổi bật đặc biệt) */}
      <Button variant="super">
        Secondary
      </Button>
      {/* Button với variant superOutline (nút nổi bật đặc biệt viền) */}
      <Button variant="superOutline">
        Secondary Outline
      </Button>
      {/* Button với variant ghost (nút dạng "ghost" trong suốt) */}
      <Button variant="ghost">
        ghost
      </Button>
      {/* Button với variant sidebar (nút dùng cho sidebar) */}
      <Button variant="sidebar">
        sidebar
      </Button>
      {/* Button với variant sidebarOutline (nút sidebar viền) */}
      <Button variant="sidebarOutline">
        Secondary Outline
      </Button>
    </div>
  );
};

// Xuất component ButtonPage làm mặc định
export default ButtonPage;
