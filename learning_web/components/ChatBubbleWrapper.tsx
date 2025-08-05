"use client";

import ChatBubble from "./ChatBubble";

// Wrapper component để loại trừ ChatBubble khỏi việc thay đổi kích cỡ chữ
export default function ChatBubbleWrapper() {
  return (
    <div className="chat-bubble-wrapper" style={{ fontSize: 'inherit' }}>
      <ChatBubble />
    </div>
  );
} 