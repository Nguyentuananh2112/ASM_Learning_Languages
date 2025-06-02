"use client";
// Import các component xác thực từ Clerk
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
// Import component hiển thị từng unit học
import { UnitCard } from "@/components/units/unit-card";
// Import component hiển thị đường nối zigzag giữa các unit
import { UnitZigzagPath } from "@/components/units/unit-zigzag-path";
// Import icon mũi tên trái
import { ArrowLeft } from "lucide-react";
// Import component Image của Next.js
import Image from "next/image";
// Import chat bubble (hỗ trợ chat/gợi ý)
import ChatBubble from "@/components/ChatBubble";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Danh sách các unit học
const units = [
  { title: "Unit 1", description: "Basic English" },
  { title: "Unit 2", description: "Food" },
  { title: "Unit 3", description: "Family" },
  { title: "Unit 4", description: "Numbers" },
  { title: "Unit 5", description: "Greetings" },
  { title: "Unit 6", description: "Travel" },
  { title: "Unit 7", description: "Colors" },
  { title: "Unit 8", description: "School" },
  { title: "Unit 9", description: "Weather" },
  { title: "Unit 10", description: "Shopping" },
];

// Dữ liệu cho đường zigzag giữa các unit
const zigzagData: { type: "star" | "crown" | "start" | "check"; active?: boolean }[] = [
  { type: "star", active: true },
  { type: "star" },
  { type: "crown" },
];

const languages = [
  { id: 1, code: "vi", name: "Vietnamese", flag: "/vn-flag.svg" },
  { id: 2, code: "en", name: "English", flag: "/gb.svg" },
  { id: 3, code: "jp", name: "Japanese", flag: "/jp.svg" },
  { id: 4, code: "fr", name: "French", flag: "/fr.svg" },
  { id: 5, code: "cn", name: "Chinese", flag: "/cn.svg" },
  { id: 6, code: "kr", name: "Korean", flag: "/kr.svg" },
];

// Định nghĩa component trang học (LearnPage)
export default function LearnPage() {
  // Không dùng state, không fetch API, chỉ hiển thị cờ English mặc định
  return (
    <>
      {/* Nếu đã đăng nhập thì hiển thị nội dung học */}
      <SignedIn>
        <div className="h-full bg-white">
          {/* Header */}
          <div className="w-full flex justify-center relative">
            <div className="w-[400px] flex items-center border-b px-4 py-2 gap-x-2 mx-auto">
              <ArrowLeft className="h-5 w-5 text-neutral-400 cursor-pointer" />
              {/* Button lá cờ: click chuyển sang /courses */}
              <button
                onClick={() => window.location.href = '/courses'}
                className="w-12 h-8 rounded-md overflow-hidden border-2 border-gray-300 shadow-sm flex items-center justify-center bg-white hover:scale-105 transition"
                title="Đổi ngôn ngữ"
                style={{padding: 0, marginRight: 8}}
              >
                <img
                  src="/gb.svg"
                  alt="English"
                  width={48}
                  height={32}
                  style={{ objectFit: "cover", background: "#fff", border: "1px solid #ccc", display: "block" }}
                />
              </button>
              <div className="flex-1 text-center text-base font-bold text-neutral-400">English</div>
            </div>
            {/* Các icon bên phải header */}
            <div className="absolute right-4 top-1 flex items-center gap-x-2">
              {/* Nút đổi ngôn ngữ (có thể để trống hoặc ẩn) */}
              {/* Hiển thị số năng lượng (lightning) */}
              <span className="text-orange-400 font-bold text-[22px] flex items-center gap-1">
                <span>⚡</span>150
              </span>
              {/* Hiển thị số mạng (tim) */}
              <span className="text-red-400 font-bold text-[22px] flex items-center gap-1">
                <span>❤️</span>5
              </span>
            </div>
          </div>
          {/* Nội dung chính: danh sách các unit học */}
          <div className="flex justify-center items-start py-10 min-h-[calc(100vh-60px)]">
            <div className="flex flex-col items-center gap-y-8 w-[400px]">
              {units.map((unit, idx) => (
                <React.Fragment key={unit.title}>
                  <UnitCard title={unit.title} description={unit.description} />
                  {/* Hiển thị đường zigzag giữa các unit */}
                  <UnitZigzagPath data={
                    idx === 0
                      ? zigzagData.map((item, i) => ({ ...item, active: i === 0 }))
                      : zigzagData.map(item => ({ ...item, active: false }))
                  } />
                </React.Fragment>
              ))}
            </div>
          </div>
          {/* Chat bubble hỗ trợ */}
          <ChatBubble />
        </div>
      </SignedIn>
      {/* Nếu chưa đăng nhập thì hiển thị yêu cầu đăng nhập */}
      <SignedOut>
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
          <h1 className="text-2xl font-bold mb-4">Sign in to start learning</h1>
          <p className="mb-6 text-neutral-500">You need to be signed in to access the learning content.</p>
          <SignInButton mode="modal">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Sign In</button>
          </SignInButton>
        </div>
      </SignedOut>
    </>
  );
}
