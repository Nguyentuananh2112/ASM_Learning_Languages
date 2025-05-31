"use client";
import { useState, useEffect } from "react";
import { Courses } from "@/components/Courses";
import { useRouter } from "next/navigation";

interface Language {
  id: number;
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { id: 1, code: "vi", name: "Vietnamese", flag: "/vn-flag.svg" },
  { id: 2, code: "en", name: "English", flag: "/gb.svg" },
  { id: 3, code: "jp", name: "Japanese", flag: "/jp.svg" },
  { id: 4, code: "fr", name: "French", flag: "/fr.svg" },
  { id: 5, code: "cn", name: "Chinese", flag: "/cn.svg" },
  { id: 6, code: "kr", name: "Korean", flag: "/kr.svg" },
  // Thêm các ngôn ngữ khác nếu muốn
];

export default function CoursesPage() {
  const [selected, setSelected] = useState<string>("vi");
  const router = useRouter();

  // Luôn fetch lại ngôn ngữ hiện tại mỗi khi vào trang
  useEffect(() => {
    let ignore = false;
    fetch("/api/user-language")
      .then(res => res.json())
      .then(userLang => {
        if (ignore) return;
        if (userLang && userLang.languageId) {
          const lang = languages.find(l => l.id === userLang.languageId);
          if (lang) setSelected(lang.code);
        } else {
          setSelected("vi");
        }
      });
    return () => { ignore = true; };
  }, [router]);

  // Khi chọn ngôn ngữ, gọi API lưu và chuyển hướng
  const handleSelect = async (code: string) => {
    if (code === selected) return;
    const confirm = window.confirm("Bạn có chắc chắn đổi ngôn ngữ học của mình không?");
    if (!confirm) return;
    const lang = languages.find(l => l.code === code);
    if (!lang) return;
    await fetch("/api/user-language", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: 1, languageId: lang.id }),
    });
    window.location.href = "/learn";
  };

  // Chia languages thành 2 hàng, mỗi hàng 3 lá cờ
  const row1 = languages.slice(0, 3);
  const row2 = languages.slice(3, 6);

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="w-full flex justify-start">
        <button
          onClick={() => router.push("/learn")}
          className="mb-1 px-6 py-2 rounded-full border-2 border-blue-200 bg-white hover:bg-blue-50 text-blue-600 font-semibold shadow transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Back
        </button>
      </div>
      <h2 className="text-2xl font-bold mb-6">Language Courses</h2>
      <div className="flex flex-col gap-8">
        <div className="flex flex-row gap-8 justify-center">
          {row1.map(lang => (
            <Courses
              key={lang.code}
              languages={[lang]}
              selected={selected}
              onSelect={handleSelect}
            />
          ))}
        </div>
        <div className="flex flex-row gap-8 justify-center">
          {row2.map(lang => (
            <Courses
              key={lang.code}
              languages={[lang]}
              selected={selected}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 