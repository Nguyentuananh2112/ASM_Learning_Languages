// Lưu ý quan trọng: 
// Khi tách file, cần tự quản lý các id để đảm bảo chúng là duy nhất 
// trên toàn bộ bảng 
// (ví dụ: id của một unit trong tệp Tiếng Nhật 
// không được trùng với id của một unit trong tệp Tiếng Hàn).

// scripts/data/vietnamese.ts

export const course = {
    id: 4,
    title: "Vietnamese",
    imageSrc: "/vn-flag.svg",
};

export const units = [
    {
        id: 4,
        courseId: 4, // Vietnamese
        title: "Bài 1",
        description: "Học những điều cơ bản của Tiếng Việt",
        order: 1,
    },
];

export const lessons = [
    { id: 7, unitId: 4, order: 1, title: "Danh từ" },
    { id: 8, unitId: 4, order: 2, title: "Động từ" },
];

export const challenges = [
    { id: 10, lessonId: 7, type: "SELECT", order: 1, question: 'Đâu là "người đàn ông"?' },
    { id: 11, lessonId: 7, type: "SELECT", order: 2, question: 'Đâu là "người phụ nữ"?' },
    { id: 12, lessonId: 8, type: "ASSIST", order: 1, question: '"đi bộ"' },
]as const;

export const challengeOptions = [
    // Challenge 10
    { challengeId: 10, imageSrc: "/man.svg", correct: true, text: "người đàn ông", audioSrc: "/vn_man.mp3" },
    { challengeId: 10, imageSrc: "/woman.svg", correct: false, text: "người phụ nữ", audioSrc: "/vn_woman.mp3" },
    { challengeId: 10, imageSrc: "/boy.svg", correct: false, text: "cậu bé", audioSrc: "/vn_boy.mp3" },
    // Challenge 11
    { challengeId: 11, imageSrc: "/woman.svg", correct: true, text: "người phụ nữ", audioSrc: "/vn_woman.mp3" },
    { challengeId: 11, imageSrc: "/man.svg", correct: false, text: "người đàn ông", audioSrc: "/vn_man.mp3" },
    { challengeId: 11, imageSrc: "/girl.svg", correct: false, text: "cô bé", audioSrc: "/vn_girl.mp3" },
    // Challenge 12
    { challengeId: 12, correct: true, text: "đi bộ", audioSrc: "/vn_walk.mp3" },
    { challengeId: 12, correct: false, text: "chạy", audioSrc: "/vn_run.mp3" },
    { challengeId: 12, correct: false, text: "bơi", audioSrc: "/vn_swim.mp3" },
];