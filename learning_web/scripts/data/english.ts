// Lưu ý quan trọng: 
// Khi tách file, cần tự quản lý các id để đảm bảo chúng là duy nhất 
// trên toàn bộ bảng 
// (ví dụ: id của một unit trong tệp Tiếng Nhật 
// không được trùng với id của một unit trong tệp Tiếng Hàn).

// scripts/data/english.ts

export const course = {
    id: 3,
    title: "English",
    imageSrc: "/english.svg",
};

export const units = [
    {
        id: 3,
        courseId: 3, // English
        title: "Unit 1",
        description: "Learn the basics of English",
        order: 1,
    },
];

export const lessons = [
    { id: 5, unitId: 3, order: 1, title: "People" },
    { id: 6, unitId: 3, order: 2, title: "Animals" },
];

export const challenges = [
    { id: 7, lessonId: 5, type: "SELECT", order: 1, question: 'Which one of these is "the boy"?' },
    { id: 8, lessonId: 5, type: "ASSIST", order: 2, question: '"the girl"' },
    { id: 9, lessonId: 6, type: "SELECT", order: 1, question: 'Which one of these is "the cat"?' },
]as const;

export const challengeOptions = [
    // Challenge 7
    { challengeId: 7, imageSrc: "/boy.svg", correct: true, text: "the boy", audioSrc: "/en_boy.mp3" },
    { challengeId: 7, imageSrc: "/girl.svg", correct: false, text: "the girl", audioSrc: "/en_girl.mp3" },
    { challengeId: 7, imageSrc: "/man.svg", correct: false, text: "the man", audioSrc: "/en_man.mp3" },
    // Challenge 8
    { challengeId: 8, correct: true, text: "the girl", audioSrc: "/en_girl.mp3" },
    { challengeId: 8, correct: false, text: "the boy", audioSrc: "/en_boy.mp3" },
    { challengeId: 8, correct: false, text: "the woman", audioSrc: "/en_woman.mp3" },
    // Challenge 9
    { challengeId: 9, imageSrc: "/cat.svg", correct: true, text: "the cat", audioSrc: "/en_cat.mp3" },
    { challengeId: 9, imageSrc: "/dog.svg", correct: false, text: "the dog", audioSrc: "/en_dog.mp3" },
    { challengeId: 9, imageSrc: "/bird.svg", correct: false, text: "the bird", audioSrc: "/en_bird.mp3" },
];