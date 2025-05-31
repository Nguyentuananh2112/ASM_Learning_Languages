import Image from "next/image";
import React from "react";

export interface Language {
  code: string;
  name: string;
  flag: string;
}

interface CoursesProps {
  languages: Language[];
  selected: string;
  onSelect: (code: string) => void;
}

export function Courses({ languages, selected, onSelect }: CoursesProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap gap-8">
        {languages.map(lang => (
          <button
            key={lang.code}
            onClick={() => onSelect(lang.code)}
            className={`relative flex flex-col items-center justify-center w-60 h-56 rounded-xl border-2 transition shadow-md hover:scale-105 focus:outline-none ${
              selected === lang.code ? "border-blue-300 bg-blue-50" : "border-slate-200 bg-white"
            }`}
            type="button"
          >
            <div className="relative mt-6 mb-4">
              <Image
                src={lang.flag}
                alt={lang.name}
                width={100}
                height={70}
                className="rounded-lg shadow object-cover"
              />
              {selected === lang.code && (
                <span className="absolute -top-3 -right-3 bg-blue-500 rounded-full p-2">
                  <svg width="20" height="20" fill="white" viewBox="0 0 20 20">
                    <path d="M7.629 15.314a1 1 0 0 1-1.415 0l-3.536-3.536a1 1 0 1 1 1.415-1.415l2.829 2.829 6.364-6.364a1 1 0 1 1 1.415 1.415l-7.072 7.071z"/>
                  </svg>
                </span>
              )}
            </div>
            <span className="text-lg font-semibold">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
} 