"use client";
// This directive tells Next.js that this is a client component (needed for hooks like useRouter)
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// List of supported languages for the courses page
// Each language has: code, English name, flag image, and a short description
const languages = [
  { code: "vi", name: "Vietnamese", flag: "/vn-flag.svg", desc: "Start learning Vietnamese from basics to advanced." },
  { code: "en", name: "English", flag: "/gb.svg", desc: "Master English for global communication." },
  { code: "jp", name: "Japanese", flag: "/jp.svg", desc: "Explore Japanese language and culture." },
  { code: "fr", name: "French", flag: "/fr.svg", desc: "Learn French for travel and business." },
  { code: "cn", name: "Chinese", flag: "/cn.svg", desc: "Discover Mandarin Chinese step by step." },
  { code: "kr", name: "Korean", flag: "/kr.svg", desc: "Enjoy learning Korean with fun lessons." },
];

export default function CoursesPage() {
  // useRouter hook from Next.js for navigation
  const router = useRouter();
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Page title */}
      <h1 className="text-4xl font-extrabold text-center mb-4 text-blue-600 drop-shadow">Language Courses</h1>
      {/* Short description under the title */}
      <p className="text-center text-lg text-slate-500 mb-10">Choose a language to start your learning journey!</p>
      {/* Grid layout for language cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {languages.map((lang) => (
          // Each language is displayed as a card
          <div
            key={lang.code}
            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center hover:shadow-2xl transition-all border border-slate-100 hover:border-blue-300 group cursor-pointer"
            // When clicking the card, navigate to /learn
            onClick={() => router.push("/learn")}
          >
            {/* Flag icon for the language */}
            <div className="w-16 h-16 mb-3 rounded-full overflow-hidden border-2 border-blue-100 group-hover:border-blue-400 transition-all flex items-center justify-center bg-blue-50">
              <Image src={lang.flag} alt={lang.name} width={48} height={48} className="object-cover" />
            </div>
            {/* Language name */}
            <span className="text-xl font-bold text-blue-500 group-hover:text-blue-700 mb-1 transition-all">{lang.name}</span>
            {/* Short description for the language */}
            <p className="text-sm text-slate-500 text-center mb-4 min-h-[40px]">{lang.desc}</p>
            {/* Button to start learning (also clickable) */}
            <Button
              variant="primary"
              className="w-full mt-auto group-hover:scale-105 transition-transform"
            >
              Start Learning
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
} 