import { OpenAI } from "openai";
import { NextResponse } from "next/server";

// Khởi tạo client OpenAI với API key từ biến môi trường
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
    try {
        // Lấy dữ liệu messages và history từ body của yêu cầu
        const { messages, history = [] } = await req.json();

        // Kiểm tra xem messages có phải là mảng không rỗng
        if (!messages || !Array.isArray(messages)) {
            throw new Error("Invalid input: 'messages' must be a non-empty array");
        }

        // Xây dựng lịch sử trò chuyện
        // System prompt được cập nhật để giới hạn phạm vi trả lời
        const chatHistory = [
            {
                role: "system",
                content: "You are a language learning assistant that communicates in multiple languages, providing accurate, natural, and contextually appropriate responses related to language learning (e.g., grammar, vocabulary, pronunciation, language practice, or study tips). Respond only to questions about language learning in the user's language, adjusting tone (friendly, professional, humorous) as requested. If the question is unrelated to language learning, politely apologize and explain that you can only assist with language learning topics. If a question is unclear, ask for clarification."
            },
            // Thêm lịch sử cũ (nếu có)
            ...history,
            // Thêm các tin nhắn mới từ người dùng
            ...messages.map((msg: any) => ({
                role: "user",
                content: msg.content
            })),
        ];

        // Gửi lịch sử trò chuyện đến mô hình để sinh phản hồi
        const result = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: chatHistory,
        });

        // Lấy nội dung phản hồi từ mô hình
        const responseText = result.choices[0].message.content;

        // Cập nhật lịch sử trò chuyện với tin nhắn mới và phản hồi
        const updatedHistory = [
            ...history,
            { role: "user", content: messages[messages.length - 1].content },
            { role: "assistant", content: responseText },
        ];

        // Trả về JSON chứa phản hồi và lịch sử cập nhật
        return NextResponse.json({
            response: responseText,
            history: updatedHistory,
        });
    } catch (error) {
        // Ghi log lỗi ra console
        console.error("Error: ", error);

        // Trả về JSON với thông tin lỗi và mã trạng thái 500
        return NextResponse.json(
            { 
                error: "Failed to generate response", 
                details: error instanceof Error ? error.message : "Unknown error" 
            },
            { status: 500 }
        );
    }
}

// Cấu  hình cho chat gemini
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { NextResponse } from "next/server";

// // Khởi tạo client Gemini với API key từ biến môi trường
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// export async function POST(req: Request) {
//     try {
//         // Lấy dữ liệu messages và history từ body của yêu cầu
//         const { messages, history = [] } = await req.json();

//         // Kiểm tra xem messages có phải là mảng không rỗng
//         if (!messages || !Array.isArray(messages)) {
//             throw new Error("Invalid input: 'messages' must be a non-empty array");
//         }

//         // Khởi tạo mô hình Gemini với model gemini-1.5-flash
//         const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//         // Xây dựng lịch sử trò chuyện
//         // Bắt đầu bằng system prompt định nghĩa vai trò chatbot
//         const chatHistory = [
//             {
//                 role: "user",
//                 parts: [
//                     {
//                         text: "You are a smart chatbot that communicates in multiple languages, providing accurate, natural, and contextually appropriate responses. Identify the user's language and respond in it, adjusting tone (friendly, professional, humorous) as requested. Learn from interactions to improve answers. If a question is unclear, ask for clarification."
//                     },
//                 ],
//             },
//             // Thêm lịch sử cũ (nếu có)
//             ...history,
//             // Thêm các tin nhắn mới từ người dùng
//             ...messages.map((msg: any) => ({
//                 role: "user",
//                 parts: [{ text: msg.content }],
//             })),
//         ];

//         // Gửi lịch sử trò chuyện đến mô hình để sinh phản hồi
//         const result = await model.generateContent({
//             contents: chatHistory,
//         });

//         // Lấy nội dung phản hồi từ mô hình
//         const responseText = result.response.text();

//         // Cập nhật lịch sử trò chuyện với tin nhắn mới và phản hồi
//         const updatedHistory = [
//             ...history,
//             { role: "user", parts: [{ text: messages[messages.length - 1].content }] },
//             { role: "model", parts: [{ text: responseText }] },
//         ];

//         // Trả về JSON chứa phản hồi và lịch sử cập nhật
//         return NextResponse.json({
//             response: responseText,
//             history: updatedHistory,
//         });
//     } catch (error) {
//         // Ghi log lỗi ra console
//         console.error("Error: ", error);

//         // Trả về JSON với thông tin lỗi và mã trạng thái 500
//         return NextResponse.json(
//             { 
//                 error: "Failed to generate response", 
//                 details: error instanceof Error ? error.message : "Unknown error" 
//             },
//             { status: 500 }
//         );
//     }
// }