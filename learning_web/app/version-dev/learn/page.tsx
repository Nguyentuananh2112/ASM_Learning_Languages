import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { UnitCard } from "@/components/units/unit-card";
import { UnitZigzagPath } from "@/components/units/unit-zigzag-path";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import ChatBubble from "@/components/ChatBubble";
import React from "react";

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

const zigzagData: { type: "star" | "crown" | "start" | "check"; active?: boolean }[] = [
  { type: "star", active: true },
  { type: "star" },
  { type: "crown" },
];

export default function LearnPage() {
  return (
    <>
      <SignedIn>
        <div className="h-full bg-white">
          {/* Header */}
          <div className="w-full flex justify-center relative">
            <div className="w-[400px] flex items-center border-b px-4 py-2 gap-x-2 mx-auto">
              <ArrowLeft className="h-5 w-5 text-neutral-400 cursor-pointer" />
              <div className="flex-1 text-center text-base font-bold text-neutral-400">English</div>
            </div>
            {/* Right icons */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 flex items-center gap-x-5">
              {/* English flag: hình vuông, bo tròn 4 góc */}
              <div className="w-7 h-7 rounded-lg overflow-hidden border border-gray-200 shadow flex items-center justify-center bg-white">
                <Image src="/uk-flag.svg" alt="English" width={28} height={28} style={{objectFit: 'cover'}} />
              </div>
              <span className="text-orange-400 font-bold text-[22px] flex items-center gap-1">
                <span>⚡</span>150
              </span>
              <span className="text-red-400 font-bold text-[22px] flex items-center gap-1">
                <span>❤️</span>5
              </span>
            </div>
          </div>
          {/* Main content */}
          <div className="flex justify-center items-start py-10 min-h-[calc(100vh-60px)]">
            <div className="flex flex-col items-center gap-y-8 w-[400px]">
              {units.map((unit, idx) => (
                <React.Fragment key={unit.title}>
                  <UnitCard title={unit.title} description={unit.description} />
                  <UnitZigzagPath data={
                    idx === 0
                      ? zigzagData.map((item, i) => ({ ...item, active: i === 0 }))
                      : zigzagData.map(item => ({ ...item, active: false }))
                  } />
                </React.Fragment>
              ))}
            </div>
          </div>
          <ChatBubble />
        </div>
      </SignedIn>
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