// Lưu ý quan trọng: 
// Khi tách file, cần tự quản lý các id để đảm bảo chúng là duy nhất 
// trên toàn bộ bảng 
// (ví dụ: id của một unit trong tệp Tiếng Nhật 
// không được trùng với id của một unit trong tệp Tiếng Hàn).


export const course = {
    id: 4,
    title: "Vietnamese",
    imageSrc: "/vn-flag.svg",
};

// Vietnamese Units: 40001 - 40005
export const units = [
    { id: 40001, courseId: 4, title: "Bài 1: Bảng chữ cái và Thanh điệu", description: "Làm quen với chữ và dấu tiếng Việt", order: 1 },
    { id: 40002, courseId: 4, title: "Bài 2: Đại từ nhân xưng", description: "Học cách xưng hô", order: 2 },
    { id: 40003, courseId: 4, title: "Bài 3: Số đếm và Đơn vị", description: "Học số và các từ đi kèm", order: 3 },
    { id: 40004, courseId: 4, title: "Bài 4: Đặt câu hỏi cơ bản", description: "Hỏi với 'Ai', 'Cái gì', 'Ở đâu'", order: 4 },
    { id: 40005, courseId: 4, title: "Bài 5: Gia đình", description: "Học từ vựng về các thành viên trong gia đình", order: 5 },
]as const;

// Vietnamese Lessons: 41001+
export const lessons = [
    // Unit 40001
    { id: 41001, unitId: 40001, order: 1, title: "Nguyên âm đơn" },
    { id: 41002, unitId: 40001, order: 2, title: "Thanh điệu (Sắc, Huyền, Hỏi, Ngã, Nặng)" },
    // ... thêm 23 lessons nữa
]as const;

// Vietnamese Challenges: 42001+
export const challenges = [
    // Lesson 41001
    { id: 42001, lessonId: 41001, type: "SELECT", order: 1, question: "Đâu là chữ 'a'?" },
    { id: 42002, lessonId: 41001, type: "SELECT", order: 2, question: "Đâu là chữ 'ơ'?" },
    { id: 42003, lessonId: 41001, type: "ASSIST", order: 3, question: "Chữ 'e'" },
    // ... thêm 72 challenges nữa
]as const;

export const challengeOptions = [
    { challengeId: 42001, correct: true, text: "a", audioSrc: "/vn_a.mp3" },
    { challengeId: 42001, correct: false, text: "ă", audioSrc: "/vn_a2.mp3" },
    { challengeId: 42001, correct: false, text: "â", audioSrc: "/vn_a3.mp3" },
    // ...
]as const;