// Định nghĩa layout cho trang học (learn)
export default function LearnLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    // Container bọc nội dung, chiều cao full
    <div className="h-full">
      {children} // Nội dung động sẽ được render ở đây
    </div>
  );
}