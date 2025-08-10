import Sidebar from "./sidebar";

// Wrapper component để loại trừ Sidebar khỏi việc thay đổi kích cỡ chữ
export default function SidebarWrapper({ className }: { className?: string }) {
  return (
    <div className="sidebar-wrapper" style={{ fontSize: 'inherit' }}>
      <Sidebar className={className} />
    </div>
  );
} 