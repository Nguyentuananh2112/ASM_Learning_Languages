"use client";
import React, { useRef, useState } from "react";

export default function ChatBubble() {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 30, y: 80 });
  const [showChat, setShowChat] = useState(false);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const offset = useRef({ x: 0, y: 0 });
  const BUBBLE_SIZE = 64; // px, tương ứng w-16 h-16

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    document.body.style.userSelect = "none";
  };

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

  const onMouseUp = () => {
    setIsDragging(false);
    document.body.style.userSelect = "";
  };

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

  // Nếu resize cửa sổ, đảm bảo bong bóng không bị mất
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
        💬
      </div>
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
          <div className="bg-[#5ba5fa] text-white px-4 py-2 font-bold flex items-center justify-between">
            Chat
            <button
              className="text-white text-xl font-bold hover:text-red-200"
              onClick={() => setShowChat(false)}
            >
              ×
            </button>
          </div>
          <div className="flex-1 p-4 text-neutral-500 flex items-center justify-center">
            Chatbot coming soon...
          </div>
        </div>
      )}
    </>
  );
} 