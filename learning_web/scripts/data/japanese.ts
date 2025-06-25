export const course = {
    id: 1,
    title: "Japanese",
    imageSrc: "/jp.svg",
};

// Japanese Units: 10001 - 10005
export const units = [
    { id: 10001, courseId: 1, title: "Unit 1: Bảng chữ cái Hiragana", description: "Làm quen với các ký tự Hiragana cơ bản", order: 1 },
    { id: 10002, courseId: 1, title: "Unit 2: Chào hỏi & Giới thiệu", description: "Học các mẫu câu giao tiếp đầu tiên", order: 2 },
    { id: 10003, courseId: 1, title: "Unit 3: Số đếm & Mua sắm", description: "Học cách đếm và hỏi giá", order: 3 },
    { id: 10004, courseId: 1, title: "Unit 4: Động từ và Tính từ", description: "Xây dựng câu đơn giản", order: 4 },
    { id: 10005, courseId: 1, title: "Unit 5: Bảng chữ cái Katakana", description: "Học các ký tự Katakana cho từ mượn", order: 5 },
]as const;

// Japanese Lessons: 11001+
export const lessons = [
    // Unit 10001
    { id: 11001, unitId: 10001, title: "Hàng A & Ka", order: 1 },
    { id: 11002, unitId: 10001, title: "Hàng Sa & Ta", order: 2 },
    // ... thêm 23 lessons nữa cho đủ 25 lessons
]as const;

// Japanese Challenges: 12001+
export const challenges = [
    // Lesson 11001
    { id: 12001, lessonId: 11001, type: "SELECT", order: 1, question: "Chữ 'a' trong Hiragana là gì?" },
    { id: 12002, lessonId: 11001, type: "SELECT", order: 2, question: "Chữ 'ka' trong Hiragana là gì?" },
    { id: 12003, lessonId: 11001, type: "ASSIST", order: 3, question: "Chữ 'i' là gì?" },
    // ... thêm 72 challenges nữa
]as const;

export const challengeOptions = [
    { challengeId: 12001, correct: true, text: "あ", audioSrc: "/jp_a.mp3" },
    { challengeId: 12001, correct: false, text: "か", audioSrc: "/jp_ka.mp3" },
    { challengeId: 12001, correct: false, text: "さ", audioSrc: "/jp_sa.mp3" },
    // ...
]as const;