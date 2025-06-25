// Lưu ý quan trọng: 
// Khi tách file, cần tự quản lý các id để đảm bảo chúng là duy nhất 
// trên toàn bộ bảng 
// (ví dụ: id của một unit trong tệp Tiếng Nhật 
// không được trùng với id của một unit trong tệp Tiếng Hàn).

export const course = {
    id: 3,
    title: "English",
    imageSrc: "/english.svg",
};

// English Units: 30001 - 30005
export const units = [
    { id: 30001, courseId: 3, title: "Unit 1: The Basics", description: "Learn the alphabet and basic nouns", order: 1 },
    { id: 30002, courseId: 3, title: "Unit 2: Everyday Verbs", description: "Learn common action words", order: 2 },
    { id: 30003, courseId: 3, title: "Unit 3: Simple Sentences", description: "Form basic 'Subject-Verb-Object' sentences", order: 3 },
    { id: 30004, courseId: 3, title: "Unit 4: Asking Questions", description: "Learn to ask 'Wh-' questions", order: 4 },
    { id: 30005, courseId: 3, title: "Unit 5: Present Tense", description: "Learn about the Simple Present Tense", order: 5 },
]as const;

// English Lessons: 31001+
export const lessons = [
    // Unit 30001
    { id: 31001, unitId: 30001, order: 1, title: "The Alphabet A-M" },
    { id: 31002, unitId: 30001, order: 2, title: "The Alphabet N-Z" },
    // ... thêm 23 lessons nữa
]as const;

// English Challenges: 32001+
export const challenges = [
    // Lesson 31001
    { id: 32001, lessonId: 31001, type: "SELECT", order: 1, question: "Which one of these is the letter 'B'?" },
    { id: 32002, lessonId: 31001, type: "SELECT", order: 2, question: "Which one of these is the letter 'G'?" },
    { id: 32003, lessonId: 31001, type: "ASSIST", order: 3, question: "The letter 'E'" },
    // ... thêm 72 challenges nữa
]as const;

export const challengeOptions = [
    { challengeId: 32001, correct: true, text: "B", audioSrc: "/en_b.mp3" },
    { challengeId: 32001, correct: false, text: "D", audioSrc: "/en_d.mp3" },
    { challengeId: 32001, correct: false, text: "P", audioSrc: "/en_p.mp3" },
    // ...
]as const;