"use client";

import { useState, useEffect, useRef } from "react";
import { Send, Bot, User, Loader2, Minimize2, Maximize2 } from "lucide-react";

type Message = {
    role: "assistant" | "user";
    content: string;
    id: string;
};

export default function ChatBubble() {
    // Chat bubble states
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 30, y: 80 });
    const [showChat, setShowChat] = useState(false);
    const bubbleRef = useRef<HTMLDivElement>(null);
    const offset = useRef({ x: 0, y: 0 });
    const BUBBLE_SIZE = 64;

    // Chat states
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isExpanded, setIsExpanded] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [activeMessage, setActiveMessage] = useState<string | null>(null);
    const [chatHistory, setChatHistory] = useState<any[]>([]);

    // Scroll to bottom of messages
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

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
        } finally {
            setIsLoading(false);
        }
    };

    // Handle bubble dragging
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
        const maxX = window.innerWidth - BUBBLE_SIZE - 10;
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

    useEffect(() => {
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

    const handleBubbleClick = (e: React.MouseEvent) => {
        if (showChat && !isDragging) setShowChat(false);
    };

    const handleBubbleDoubleClick = (e: React.MouseEvent) => {
        if (!showChat) setShowChat(true);
    };

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
                className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold select-none shadow-lg hover:shadow-2xl border-4 border-white"
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
                    className="bg-gray-950/80 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/10 flex flex-col overflow-hidden"
                >
                    <div className="p-4 flex items-center justify-between border-b border-white/10 bg-purple-500/20">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />
                            <h1 className="text-base font-light tracking-wider text-white">LINO CHAT</h1>
                        </div>
                        <button
                            onClick={() => setShowChat(false)}
                            className="p-2 hover:bg-white/5 rounded-lg transition-colors text-white"
                        >
                            <Minimize2 size={16} />
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 mb-16">
                        {messages.length === 0 && (
                            <div className="flex flex-col items-center justify-center h-full space-y-2 text-center">
                                <div className="text-xl font-thin tracking-widest text-purple-300">NEW</div>
                                <p className="text-gray-400 text-sm">
                                    Welcome to the quantum realm of conversation.
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
                                <div className={`group relative max-w-[80%] ${message.role === "assistant" ? "pr-4" : "pl-4"}`}>
                                    <div className={`p-3 rounded-2xl text-sm transition-all duration-300 ${activeMessage === message.id ? "scale-[1.02]" : "scale-100"} ${message.role === "assistant" ? "bg-purple-500/10 hover:bg-purple-500/20 rounded-tl-sm" : "bg-white/5 hover:bg-white/10 rounded-tr-sm"}`}>
                                        {message.content}
                                    </div>
                                    <div className={`absolute -bottom-4 flex items-center gap-1 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity ${message.role === "assistant" ? "left-0" : "right-0"}`}>
                                        <div className="w-4 h-4 rounded-full flex items-center justify-center bg-white/5">
                                            {message.role === "assistant" ? <Bot size={10} /> : <User size={10} />}
                                        </div>
                                        {new Date().toLocaleDateString()}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center">
                                    <Loader2 size={12} className="animate-spin text-purple-500" />
                                </div>
                                <div className="space-y-1">
                                    <div className="h-1 w-16 bg-purple-500/10 rounded-full animate-pulse" />
                                    <div className="h-1 w-12 bg-purple-500/10 rounded-full animate-pulse" />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="p-4 border-t border-white/10 bg-gray-950/80 backdrop-blur-md"
                    >
                        <div className="relative">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Enter message..."
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-purple-500/50 placeholder:text-gray-500"
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-lg hover:bg-white/5 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
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