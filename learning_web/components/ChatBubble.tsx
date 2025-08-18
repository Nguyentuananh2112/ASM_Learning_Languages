"use client";

// Import các hook từ React để quản lý state và side effects
import { useState, useEffect, useRef, useCallback } from "react";
// Import các icon từ lucide-react để sử dụng trong giao diện
import { Send, Bot, User, Loader2, Minimize2 } from "lucide-react";

// Tối thiểu hóa khai báo type cho Web Speech API để tránh lỗi TypeScript trên trình duyệt không có định nghĩa sẵn
interface ISpeechRecognitionResultAlternative {
    transcript: string;
}
interface ISpeechRecognitionResult {
    0: ISpeechRecognitionResultAlternative;
}
interface ISpeechRecognitionEvent {
    results: ArrayLike<ISpeechRecognitionResult>;
}
interface ISpeechRecognitionErrorEvent {
    error: string;
}
interface ISpeechRecognition {
    continuous: boolean;
    interimResults: boolean;
    lang: string;
    start: () => void;
    stop: () => void;
    onresult: ((event: ISpeechRecognitionEvent) => void) | null;
    onerror: ((event: ISpeechRecognitionErrorEvent) => void) | null;
    onend: (() => void) | null;
}
interface ISpeechRecognitionConstructor {
    new (): ISpeechRecognition;
}

declare global {
    interface Window {
        webkitSpeechRecognition?: ISpeechRecognitionConstructor;
        SpeechRecognition?: ISpeechRecognitionConstructor;
    }
}

// Định nghĩa kiểu cho mỗi tin nhắn trong chat (vai trò, nội dung, ID)
type Message = {
    role: "assistant" | "user";
    content: string;
    id: string;
};

export default function ChatBubble() {
    // === CHAT BUBBLE STATES (QUẢN LÝ VỊ TRÍ VÀ KÉO THẢ BUBBLE) ===
    // Trạng thái kéo thả bubble
    const [isDragging, setIsDragging] = useState(false);
    // Vị trí của bubble trên màn hình (x, y)
    const [position, setPosition] = useState({ x: 0, y: 80 });
    // Trạng thái hiển thị chatbox
    const [showChat, setShowChat] = useState(false);
    // Tham chiếu đến DOM element của bubble
    const bubbleRef = useRef<HTMLDivElement>(null);
    // Offset vị trí chuột khi bắt đầu kéo (tính toán tọa độ tương đối)
    const offset = useRef({ x: 0, y: 0 });
    // Kích thước cố định của bubble (64px)
    const BUBBLE_SIZE = 64;

    // Cập nhật vị trí ban đầu của bubble khi component mount (tránh lỗi SSR với window)
    useEffect(() => {
        setPosition({ x: window.innerWidth - 94, y: 80 }); // Đặt ở góc phải trên (width - 94, y = 80)
    }, []);

    // === CHAT STATES (QUẢN LÝ TIN NHẮN VÀ INPUT) ===
    // Danh sách các tin nhắn trong chat
    const [messages, setMessages] = useState<Message[]>([]);
    // Nội dung đang nhập trong textarea
    const [input, setInput] = useState("");
    // Trạng thái loading khi gửi tin nhắn
    const [isLoading, setIsLoading] = useState(false);
    // Tham chiếu đến cuối danh sách tin nhắn (dùng để scroll nếu cần)
    const messagesEndRef = useRef<HTMLDivElement>(null);
    // ID tin nhắn đang hover (để hiển thị tooltip)
    const [activeMessage, setActiveMessage] = useState<string | null>(null);
    // Lịch sử chat để gửi lên server
    const [chatHistory, setChatHistory] = useState<object[]>([]);

    // === SPEECH RECOGNITION STATES (QUẢN LÝ THU ÂM THANH) ===
    // Trạng thái ghi âm (true khi đang ghi, false khi dừng)
    const [isRecording, setIsRecording] = useState(false);
    // Tham chiếu đến object SpeechRecognition
    const recognitionRef = useRef<ISpeechRecognition | null>(null);

    // Khởi tạo Web Speech API khi component mount
    useEffect(() => {
        // Kiểm tra hỗ trợ SpeechRecognition (Chrome/Safari)
        const SpeechRecognitionConstructor = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognitionConstructor) {
            const recognition = new SpeechRecognitionConstructor();
            recognitionRef.current = recognition;
            // Không ghi liên tục, chỉ một lần
            recognition.continuous = false;
            // Hiển thị kết quả tạm thời
            recognition.interimResults = true;
            // Đặt ngôn ngữ mặc định là tiếng Việt
            recognition.lang = "vi-VN";

            // Xử lý khi nhận kết quả giọng nói (chuyển thành text)
            recognition.onresult = (event: ISpeechRecognitionEvent) => {
                const transcript = Array.from(event.results)
                    .map((result) => result[0].transcript)
                    .join("");
                setInput(transcript); // Điền text vào input
            };

            // Xử lý lỗi khi ghi âm
            recognition.onerror = (event: ISpeechRecognitionErrorEvent) => {
                console.error("Speech recognition error:", event.error);
                setIsRecording(false);
                setInput((prev) => prev + "\n[Error: Could not recognize speech]");
            };

            // Xử lý khi kết thúc ghi âm
            recognition.onend = () => {
                setIsRecording(false);
            };
        } else {
            console.warn("SpeechRecognition API is not supported in this browser.");
        }
    }, []);

    // === HÀM XỬ LÝ GỬI TIN NHẮN ===
    // Gửi tin nhắn và nhận phản hồi từ server
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Ngăn submit mặc định
        if (!input.trim()) return; // Không gửi nếu input rỗng

        // Tạo tin nhắn user và thêm vào danh sách
        const userMessage: Message = {
            role: "user",
            content: input,
            id: Date.now().toString(),
        };
        setMessages((prev) => [...prev, userMessage]);
        setInput(""); // Xóa input
        setIsLoading(true); // Bắt đầu loading

        try {
            // Gửi request POST đến API chat
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

            // Xử lý phản hồi từ server
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
            // Thêm tin nhắn lỗi nếu có vấn đề
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "Sorry, I encountered an error. Please try again later.",
                    id: (Date.now() + 2).toString(),
                },
            ]);
        } finally {
            setIsLoading(false); // Kết thúc loading
        }
    };

    // === HÀM TOGGLE GHI ÂM ===
    // Bật/tắt chức năng ghi âm
    const toggleRecording = () => {
        if (!recognitionRef.current) {
            setInput((prev) => prev + "\n[Error: Speech recognition not supported]");
            return;
        }

        if (isRecording) {
            recognitionRef.current.stop(); // Dừng ghi âm
        } else {
            recognitionRef.current.start(); // Bắt đầu ghi âm
        }
        setIsRecording(!isRecording); // Chuyển đổi trạng thái
    };

    // === LOGIC KÉO THẢ BUBBLE ===
    // Trạng thái đã kéo (phân biệt click và drag)
    const [dragged, setDragged] = useState(false);
    // Bắt đầu kéo bubble
    const onMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setDragged(false);
        offset.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        };
        document.body.style.userSelect = "none"; // Ngăn chọn text khi kéo
    };
    // Di chuyển khi kéo
    const onMouseMove = useCallback((e: MouseEvent) => {
        if (!isDragging) return;
        const maxX = window.innerWidth - BUBBLE_SIZE - 10;
        const maxY = window.innerHeight - BUBBLE_SIZE - 10;
        let newX = e.clientX - offset.current.x;
        let newY = e.clientY - offset.current.y;
        newX = Math.max(10, Math.min(newX, maxX)); // Giới hạn trong màn hình
        newY = Math.max(10, Math.min(newY, maxY));
        setPosition({ x: newX, y: newY });
        setDragged(true);
    }, [isDragging]);
    // Kết thúc kéo
    const onMouseUp = () => {
        setIsDragging(false);
        document.body.style.userSelect = "";
    };
    // Xử lý click để mở chatbox (chỉ khi không kéo)
    const handleBubbleClick = () => {
        if (!isDragging && !dragged) setShowChat(true);
    };

    // === LOGIC KÉO THẢ CHATBOX (BẰNG HEADER) ===
    // Trạng thái kéo chatbox
    const [isDraggingChat, setIsDraggingChat] = useState(false);
    // Offset khi kéo chatbox
    const chatOffset = useRef({ x: 0, y: 0 });
    // Bắt đầu kéo chatbox
    const onChatHeaderMouseDown = (e: React.MouseEvent) => {
        setIsDraggingChat(true);
        chatOffset.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        };
        document.body.style.userSelect = "none";
    };
    // Di chuyển khi kéo chatbox
    const onChatMouseMove = useCallback((e: MouseEvent) => {
        if (!isDraggingChat) return;
        const maxX = window.innerWidth - 360 - 10; // Giới hạn theo width chatbox (360px)
        const maxY = window.innerHeight - 480 - 10; // Giới hạn theo height chatbox (480px)
        let newX = e.clientX - chatOffset.current.x;
        let newY = e.clientY - chatOffset.current.y;
        newX = Math.max(10, Math.min(newX, maxX));
        newY = Math.max(10, Math.min(newY, maxY));
        setPosition({ x: newX, y: newY });
    }, [isDraggingChat]);
    // Kết thúc kéo chatbox
    const onChatMouseUp = () => {
        setIsDraggingChat(false);
        document.body.style.userSelect = "";
    };
    // Thêm/xóa event listener cho kéo chatbox
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
    }, [isDraggingChat, onChatMouseMove]);

    // === TRANSITION CHO BUBBLE VÀ CHATBOX ===
    // Thiết lập transition cho bubble (thay đổi khi kéo)
    const bubbleTransition = isDragging
        ? "box-shadow 0.1s, transform 0.1s"
        : "box-shadow 0.3s, transform 0.3s, left 0.3s, top 0.3s";
    // Thiết lập transition cho chatbox (tắt khi kéo)
    const chatboxTransition = isDraggingChat ? "none" : "left 0.3s, top 0.3s";

    // === ẨN CHATBOX KHI CLICK RA NGOÀI ===
    // Tham chiếu đến chatbox để kiểm tra click ngoài
    const chatBoxRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!showChat) return; // Chỉ chạy khi chatbox mở
        function handleClickOutside(e: MouseEvent) {
            if (chatBoxRef.current && chatBoxRef.current.contains(e.target as Node)) return;
            setShowChat(false); // Đóng chatbox nếu click ngoài
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showChat]);

    // === XỬ LÝ RESIZE MÀN HÌNH ===
    // Điều chỉnh vị trí bubble khi resize window
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

    // === EVENT LISTENER CHO KÉO THẢ BUBBLE ===
    // Thêm/xóa event listener khi kéo bubble
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
    }, [isDragging, onMouseMove]);

    // === XỬ LÝ PHÍM BÀN PHÍM TRONG TEXTAREA ===
    // Xử lý phím Enter (gửi hoặc xuống dòng)
    const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e as unknown as React.FormEvent); // Gửi tin nhắn
        } else if (e.key === "Enter" && e.shiftKey) {
            e.preventDefault();
            setInput((prev) => prev + "\n"); // Xuống dòng
        }
    };

    // === GIAO DIỆN (JSX RETURN) ===
    return (
        <>
            {/* Hiển thị bubble khi chatbox đóng */}
            {!showChat && (
                <div
                    ref={bubbleRef}
                    data-chat-bubble
                    onMouseDown={onMouseDown} // Bắt đầu kéo
                    onClick={handleBubbleClick} // Mở chatbox khi click
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
            {/* Hiển thị chatbox khi chatbox mở */}
            {showChat && (
                <div
                    ref={chatBoxRef}
                    data-chat-bubble
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
                    className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col text-gray-900 dark:text-white"
                >
                    {/* Header của chatbox (kéo thả và nút minimize) */}
                    <div
                        className="p-3 flex items-center justify-between border-b border-gray-200 dark:border-gray-700 bg-blue-600/10 dark:bg-blue-600/20 cursor-move select-none rounded-t-xl"
                        onMouseDown={onChatHeaderMouseDown} // Bắt đầu kéo chatbox
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> {/* Điểm sáng hiệu ứng */}
                            <h1 className="text-sm font-semibold tracking-wide text-gray-900 dark:text-white">LINO CHAT ASSISTANT</h1>
                        </div>
                        <button
                            onClick={() => setShowChat(false)} // Đóng chatbox
                            className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700/50 rounded-md transition-colors text-gray-700 dark:text-white"
                        >
                            <Minimize2 size={14} />
                        </button>
                    </div>
                    {/* Danh sách tin nhắn */}
                    <div className="flex-1 p-3 space-y-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800" style={{ wordBreak: "break-word", whiteSpace: "pre-wrap" }}>
                        {messages.length === 0 && (
                            <div className="flex flex-col items-center justify-center h-full space-y-2 text-center">
                                <div className="text-lg font-light text-blue-700 dark:text-blue-300">START CHAT</div>
                                <p className="text-gray-500 dark:text-gray-400 text-xs">
                                    Ask me anything in your language—I&apos;ll respond naturally!
                                </p>
                            </div>
                        )}
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}
                                onMouseEnter={() => setActiveMessage(message.id)} // Hover để hiển thị tooltip
                                onMouseLeave={() => setActiveMessage(null)}
                            >
                                <div className={`group relative max-w-[75%] ${message.role === "assistant" ? "pr-3" : "pl-3"}`}>
                                    <div className={`p-2 rounded-lg text-sm transition-all duration-300 ${activeMessage === message.id ? "scale-[1.02]" : "scale-100"} ${message.role === "assistant" ? "bg-blue-50 dark:bg-blue-600/20 hover:bg-blue-100 dark:hover:bg-blue-600/30 rounded-tl-sm text-gray-900 dark:text-white" : "bg-gray-100 dark:bg-gray-700/30 hover:bg-gray-200 dark:hover:bg-gray-700/50 rounded-tr-sm text-gray-900 dark:text-white"}`} style={{ wordBreak: "break-word", whiteSpace: "pre-wrap" }}>
                                        {message.content}
                                    </div>
                                    <div className={`absolute -bottom-3 flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity ${message.role === "assistant" ? "left-0" : "right-0"}`}>
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
                                <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-600/20 flex items-center justify-center">
                                    <Loader2 size={10} className="animate-spin text-blue-600 dark:text-blue-500" />
                                </div>
                                <div className="space-y-1">
                                    <div className="h-1 w-12 bg-blue-100 dark:bg-blue-600/20 rounded-full animate-pulse" />
                                    <div className="h-1 w-8 bg-blue-100 dark:bg-blue-600/20 rounded-full animate-pulse" />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    {/* Form nhập liệu */}
                    <form
                        onSubmit={handleSubmit}
                        className="p-3 border-t border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90"
                    >
                        <div className="relative">
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyPress} // Xử lý Enter/Shift+Enter
                                placeholder="Type your message (e.g., Xin chào, Hello, Hola)..."
                                className="w-full bg-gray-50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder:text-gray-500 dark:placeholder:text-gray-400 pr-20 text-gray-900 dark:text-white"
                                style={{ minHeight: "60px", maxHeight: "120px", resize: "vertical" }}
                            />
                            <button
                                type="button"
                                onClick={toggleRecording} // Bật/tắt ghi âm
                                className={`absolute right-10 top-1/2 -translate-y-1/2 p-1 rounded-md transition-colors ${
                                    isRecording ? "bg-red-500/50 hover:bg-red-500/70" : "hover:bg-gray-200 dark:hover:bg-gray-600/50"
                                }`}
                                disabled={!recognitionRef.current}
                                title={isRecording ? "Stop recording" : "Start recording"}
                            >
                                {isRecording ? (
                                    <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                                        <rect x="6" y="6" width="12" height="12" rx="2" />
                                    </svg>
                                ) : (
                                    <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                                        <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.47 6 6.93V21h2v-3.07c3.39-.46 6-3.4 6-6.93h-2z" />
                                    </svg>
                                )}
                            </button>
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()} // Vô hiệu khi loading hoặc input rỗng
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600/50 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
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