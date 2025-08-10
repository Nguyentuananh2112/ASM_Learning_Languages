import ChatBubbleWrapper from "@/components/ChatBubbleWrapper";
// Định nghĩa layout cho trang học (learn)

export default function LearnLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    // Container bọc nội dung, chiều cao full
    <div className="h-full">
      <div className="main-content h-full">
        {children}
      </div>
      <ChatBubbleWrapper />
    </div>
  );
}