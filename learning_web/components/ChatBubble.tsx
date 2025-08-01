"use client";

import { useState, useEffect, useRef } from "react";
import { Send, Bot, User, Loader2, Minimize2 } from "lucide-react";

type Message = {
    role: "assistant" | "user";
    content: string;
    id: string;
};

export default function ChatBubble() {
    // Chat bubble states
    const [isDragging, setIsDragging] = useState(false);
    // Khởi tạo vị trí mặc định tĩnh để tránh lỗi SSR (window is not defined)
    const [position, setPosition] = useState({ x: 0, y: 80 });
    const [showChat, setShowChat] = useState(false);
    const bubbleRef = useRef<HTMLDivElement>(null);
    const offset = useRef({ x: 0, y: 0 });
    const BUBBLE_SIZE = 64;

    // Khi đã vào client, cập nhật lại vị trí dựa trên window.innerWidth
    useEffect(() => {
        setPosition({ x: window.innerWidth - 94, y: 80 });
    }, []);

    // Chat states
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [activeMessage, setActiveMessage] = useState<string | null>(null);
    const [chatHistory, setChatHistory] = useState<any[]>([]);

    // Handle message submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage: Message = {
            role: "user",
            content: input,
            id: Date.now().toString(),
        };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    messages: [userMessage],
                    history: chatHistory,
                }),
            });
            if (!response.ok) throw new Error("Failed to fetch response");

            const data = await response.json();
            const assistantMessage: Message = {
                role: "assistant",
                content: data.response,
                id: (Date.now() + 1).toString(),
            };
            setMessages((prev) => [...prev, assistantMessage]);
            setChatHistory(data.history);
        } catch (error) {
            console.error("Error:", error);
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "Sorry, I encountered an error. Please try again later.",
                    id: (Date.now() + 2).toString(),
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    // --- PHÂN BIỆT CLICK VÀ DRAG BUBBLE ---
    const [dragged, setDragged] = useState(false);
    const onMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setDragged(false); // Reset cờ dragged
        offset.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        };
        document.body.style.userSelect = "none";
    };
    const onMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        const maxX = window.innerWidth - BUBBLE_SIZE - 10;
        const maxY = window.innerHeight - BUBBLE_SIZE - 10;
        let newX = e.clientX - offset.current.x;
        let newY = e.clientY - offset.current.y;
        newX = Math.max(10, Math.min(newX, maxX));
        newY = Math.max(10, Math.min(newY, maxY));
        setPosition({ x: newX, y: newY });
        setDragged(true); // Đánh dấu là đã kéo
    };
    const onMouseUp = () => {
        setIsDragging(false);
        document.body.style.userSelect = "";
    };
    // Chỉ mở chatbox khi click thực sự (không phải drag)
    const handleBubbleClick = (e: React.MouseEvent) => {
        if (!isDragging && !dragged) setShowChat(true);
    };
    // --- END PHÂN BIỆT CLICK VÀ DRAG BUBBLE ---

    // --- DRAG CHATBOX BY HEADER ---
    // Trạng thái kéo chatbox
    const [isDraggingChat, setIsDraggingChat] = useState(false);
    const chatOffset = useRef({ x: 0, y: 0 });

    // Bắt đầu kéo khi mousedown vào header chatbox
    const onChatHeaderMouseDown = (e: React.MouseEvent) => {
        setIsDraggingChat(true);
        chatOffset.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        };
        document.body.style.userSelect = "none";
    };
    // Kéo chatbox
    const onChatMouseMove = (e: MouseEvent) => {
        if (!isDraggingChat) return;
        const maxX = window.innerWidth - 360 - 10; // 360 là width chatbox
        const maxY = window.innerHeight - 480 - 10; // 480 là height chatbox
        let newX = e.clientX - chatOffset.current.x;
        let newY = e.clientY - chatOffset.current.y;
        newX = Math.max(10, Math.min(newX, maxX));
        newY = Math.max(10, Math.min(newY, maxY));
        setPosition({ x: newX, y: newY });
    };
    const onChatMouseUp = () => {
        setIsDraggingChat(false);
        document.body.style.userSelect = "";
    };
    useEffect(() => {
        if (isDraggingChat) {
            window.addEventListener("mousemove", onChatMouseMove);
            window.addEventListener("mouseup", onChatMouseUp);
        } else {
            window.removeEventListener("mousemove", onChatMouseMove);
            window.removeEventListener("mouseup", onChatMouseUp);
        }
        return () => {
            window.removeEventListener("mousemove", onChatMouseMove);
            window.removeEventListener("mouseup", onChatMouseUp);
        };
    }, [isDraggingChat]);
    // --- END DRAG CHATBOX BY HEADER ---

    // --- Transition cho bubble và chatbox ---
    const bubbleTransition = isDragging
        ? "box-shadow 0.1s, transform 0.1s"
        : "box-shadow 0.3s, transform 0.3s, left 0.3s, top 0.3s";
    const chatboxTransition = isDraggingChat ? "none" : "left 0.3s, top 0.3s";
    // --- END Transition cho bubble và chatbox ---

    // --- Ẩn chatbox khi click ra ngoài ---
    const chatBoxRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!showChat) return;
        function handleClickOutside(e: MouseEvent) {
            // Nếu click vào chatbox thì không làm gì
            if (chatBoxRef.current && chatBoxRef.current.contains(e.target as Node)) return;
            setShowChat(false);
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showChat]);
    // --- END Ẩn chatbox khi click ra ngoài ---

    // Handle resize and zoom
    useEffect(() => {
        const handleResize = () => {
            const maxX = window.innerWidth - BUBBLE_SIZE - 10;
            const maxY = window.innerHeight - BUBBLE_SIZE - 10;
            setPosition((pos) => ({
                x: Math.max(10, Math.min(pos.x, maxX)),
                y: Math.max(10, Math.min(pos.y, maxY)),
            }));
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Handle bubble dragging events
    useEffect(() => {
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
    }, [isDragging]);

    // Handle key press for Shift + Enter
    const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        } else if (e.key === "Enter" && e.shiftKey) {
            e.preventDefault();
            setInput((prev) => prev + "\n");
        }
    };

    return (
        <>
            {/* Ẩn bubble khi showChat=true */}
            {!showChat && (
                <div
                    ref={bubbleRef}
                    onMouseDown={onMouseDown}
                    onClick={handleBubbleClick}
                    style={{
                        position: "fixed",
                        left: position.x,
                        top: position.y,
                        zIndex: 1000,
                        cursor: isDragging ? "grabbing" : "grab",
                        transition: bubbleTransition,
                        boxShadow: isDragging
                            ? "0 0 0 6px #4b5e97aa, 0 8px 32px 0 #4b5e9777"
                            : "0 4px 24px 0 #4b5e9755",
                        transform: isDragging ? "scale(1.08)" : "scale(1)",
                    }}
                    className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold select-none shadow-lg hover:shadow-2xl border-4 border-white"
                    title={showChat ? "Click to close chat" : "Click to open chat"}
                >
                    💬
                </div>
            )}
            {/* Hiện chatbox khi showChat=true */}
            {showChat && (
                <div
                    ref={chatBoxRef}
                    style={{
                        position: "fixed",
                        left: Math.max(10, Math.min(position.x, window.innerWidth - 360 - 10)),
                        top: Math.max(10, Math.min(position.y, window.innerHeight - 480 - 10)),
                        zIndex: 999,
                        width: Math.min(360, window.innerWidth - 20),
                        height: Math.min(480, window.innerHeight - 20),
                        transition: chatboxTransition,
                        cursor: isDraggingChat ? "grabbing" : "default",
                    }}
                    className="bg-gray-800/90 backdrop-blur-md rounded-xl shadow-xl border border-gray-700 flex flex-col"
                >
                    {/* Thanh header của chatbox, dùng để kéo */}
                    <div
                        className="p-3 flex items-center justify-between border-b border-gray-700 bg-blue-600/20 cursor-move select-none rounded-t-xl"
                        onMouseDown={onChatHeaderMouseDown}
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            <h1 className="text-sm font-semibold tracking-wide text-white">LINO CHAT ASSISTANT</h1>
                        </div>
                        <button
                            onClick={() => setShowChat(false)}
                            className="p-1 hover:bg-gray-700/50 rounded-md transition-colors text-white"
                        >
                            <Minimize2 size={14} />
                        </button>
                    </div>
                    <div className="flex-1 p-3 space-y-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800" style={{ wordBreak: "break-word", whiteSpace: "pre-wrap" }}>
                        {messages.length === 0 && (
                            <div className="flex flex-col items-center justify-center h-full space-y-2 text-center">
                                <div className="text-lg font-light text-blue-300">START CHAT</div>
                                <p className="text-gray-400 text-xs">
                                    Ask me anything in your language—I'll respond naturally!
                                </p>
                            </div>
                        )}
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}
                                onMouseEnter={() => setActiveMessage(message.id)}
                                onMouseLeave={() => setActiveMessage(null)}
                            >
                                <div className={`group relative max-w-[75%] ${message.role === "assistant" ? "pr-3" : "pl-3"}`}>
                                    <div className={`p-2 rounded-lg text-sm transition-all duration-300 ${activeMessage === message.id ? "scale-[1.02]" : "scale-100"} ${message.role === "assistant" ? "bg-blue-600/20 hover:bg-blue-600/30 rounded-tl-sm" : "bg-gray-700/30 hover:bg-gray-700/50 rounded-tr-sm"}`} style={{ wordBreak: "break-word", whiteSpace: "pre-wrap" }}>
                                        {message.content}
                                    </div>
                                    <div className={`absolute -bottom-3 flex items-center gap-1 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity ${message.role === "assistant" ? "left-0" : "right-0"}`}>
                                        <div className="w-3 h-3 rounded-full flex items-center justify-center bg-gray-700/50">
                                            {message.role === "assistant" ? <Bot size={8} /> : <User size={8} />}
                                        </div>
                                        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center">
                                    <Loader2 size={10} className="animate-spin text-blue-500" />
                                </div>
                                <div className="space-y-1">
                                    <div className="h-1 w-12 bg-blue-600/20 rounded-full animate-pulse" />
                                    <div className="h-1 w-8 bg-blue-600/20 rounded-full animate-pulse" />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="p-3 border-t border-gray-700 bg-gray-800/90"
                    >
                        <div className="relative">
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyPress}
                                placeholder="Type your message (e.g., Xin chào, Hello, Hola)..."
                                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder:text-gray-400 pr-10"
                                style={{ minHeight: "60px", maxHeight: "120px", resize: "vertical" }}
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-gray-600/50 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
                            >
                                <Send size={16} />
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}