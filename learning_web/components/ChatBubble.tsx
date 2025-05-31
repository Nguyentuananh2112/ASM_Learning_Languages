"use client";
// Import các hook cần thiết từ React
import React, { useRef, useState } from "react";

// Định nghĩa component ChatBubble (bong bóng chat nổi trên màn hình)
export default function ChatBubble() {
  // Trạng thái kiểm soát việc kéo bong bóng
  const [isDragging, setIsDragging] = useState(false);
  // Trạng thái vị trí của bong bóng trên màn hình (tọa độ x, y)
  const [position, setPosition] = useState({ x: 30, y: 80 });
  // Trạng thái hiển thị/ẩn cửa sổ chat
  const [showChat, setShowChat] = useState(false);
  // Ref tới DOM element của bong bóng
  const bubbleRef = useRef<HTMLDivElement>(null);
  // Ref lưu offset khi bắt đầu kéo
  const offset = useRef({ x: 0, y: 0 });
  // Kích thước cố định của bong bóng (px)
  const BUBBLE_SIZE = 64; // px, tương ứng w-16 h-16

  // Xử lý khi bắt đầu kéo bong bóng
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    document.body.style.userSelect = "none";
  };

  // Xử lý khi di chuyển chuột (kéo bong bóng)
  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    // Tính toán vị trí mới, giới hạn trong viewport
    const maxX = window.innerWidth - BUBBLE_SIZE - 10; // 10px padding
    const maxY = window.innerHeight - BUBBLE_SIZE - 10;
    let newX = e.clientX - offset.current.x;
    let newY = e.clientY - offset.current.y;
    newX = Math.max(10, Math.min(newX, maxX));
    newY = Math.max(10, Math.min(newY, maxY));
    setPosition({ x: newX, y: newY });
  };

  // Xử lý khi thả chuột (kết thúc kéo)
  const onMouseUp = () => {
    setIsDragging(false);
    document.body.style.userSelect = "";
  };

  // Lắng nghe sự kiện kéo/thả chuột để di chuyển bong bóng
  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    } else {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
    // eslint-disable-next-line
  }, [isDragging]);

  // Nếu resize cửa sổ, đảm bảo bong bóng không bị mất khỏi màn hình
  React.useEffect(() => {
    const handleResize = () => {
      const maxX = window.innerWidth - BUBBLE_SIZE - 10;
      const maxY = window.innerHeight - BUBBLE_SIZE - 10;
      setPosition(pos => ({
        x: Math.max(10, Math.min(pos.x, maxX)),
        y: Math.max(10, Math.min(pos.y, maxY)),
      }));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Double click để mở chat, single click để đóng chat
  const handleBubbleClick = (e: React.MouseEvent) => {
    if (showChat && !isDragging) setShowChat(false);
  };
  const handleBubbleDoubleClick = (e: React.MouseEvent) => {
    if (!showChat) setShowChat(true);
  };

  // Tối ưu hiệu ứng: khi đang kéo thì không transition vị trí, khi thả thì có
  const bubbleTransition = isDragging
    ? "box-shadow 0.1s, transform 0.1s"
    : "box-shadow 0.3s, transform 0.3s, left 0.3s, top 0.3s";
  const chatTransition = isDragging
    ? "none"
    : "left 0.3s, top 0.3s";

  return (
    <>
      {/* Bong bóng chat nổi, có thể kéo thả, double click để mở chat, click để đóng */}
      <div
        ref={bubbleRef}
        onMouseDown={onMouseDown}
        onClick={handleBubbleClick}
        onDoubleClick={handleBubbleDoubleClick}
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          zIndex: 50,
          cursor: isDragging ? "grabbing" : "grab",
          transition: bubbleTransition,
          boxShadow: isDragging
            ? "0 0 0 6px #5ba5fa55, 0 8px 32px 0 #5ba5fa77"
            : "0 4px 24px 0 #5ba5fa55",
          transform: isDragging ? "scale(1.08)" : "scale(1)",
        }}
        className="w-16 h-16 bg-[#5ba5fa] rounded-full flex items-center justify-center text-white text-3xl font-bold select-none shadow-lg hover:shadow-2xl border-4 border-white"
        title={showChat ? "Click to close chat" : "Double click to open chat"}
      >
        {/* Icon chat */}
        💬
      </div>
      {/* Cửa sổ chat, chỉ hiển thị khi showChat = true */}
      {showChat && (
        <div
          style={{
            position: "fixed",
            left: position.x + 80,
            top: position.y,
            zIndex: 51,
            width: 320,
            height: 420,
            transition: chatTransition,
          }}
          className="bg-white rounded-2xl shadow-2xl border border-blue-200 flex flex-col overflow-hidden animate-fade-in"
        >
          {/* Header của cửa sổ chat */}
          <div className="bg-[#5ba5fa] text-white px-4 py-2 font-bold flex items-center justify-between">
            Chat
            <button
              className="text-white text-xl font-bold hover:text-red-200"
              onClick={() => setShowChat(false)}
            >
              ×
            </button>
          </div>
          {/* Nội dung chat (hiện tại chỉ là placeholder) */}
          <div className="flex-1 p-4 text-neutral-500 flex items-center justify-center">
            Chatbot coming soon...
          </div>
        </div>
      )}
    </>
  );
} 
