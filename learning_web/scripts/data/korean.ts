// scripts/data/korean.ts

export const course = {
    id: 2,
    title: "Korean",
    imageSrc: "/kr.svg",
};

// ============================================================================
// == UNITS
// ============================================================================
export const units = [
    { id: 2, courseId: 2, title: "Unit 1", description: "Learn the basics of Korean", order: 1 },
    { id: 5, courseId: 2, title: "Unit 2", description: "Learn common greetings", order: 2 },
    { id: 6, courseId: 2, title: "Unit 3", description: "Learn about numbers", order: 3 },
    { id: 7, courseId: 2, title: "Unit 4", description: "Learn about food and drinks", order: 4 },
    { id: 8, courseId: 2, title: "Unit 5", description: "Learn about family", order: 5 },
];

// ============================================================================
// == LESSONS
// ============================================================================
export const lessons = [
    // Lessons for Unit 1
    { id: 3, unitId: 2, order: 1, title: "Nouns" },
    { id: 4, unitId: 2, order: 2, title: "Verbs" },
    
    // Lessons for Unit 2
    { id: 9, unitId: 5, order: 1, title: "Greetings" },
    
    // Lessons for Unit 3
    { id: 10, unitId: 6, order: 1, title: "Numbers 1-5" },

    // Lessons for Unit 4
    { id: 11, unitId: 7, order: 1, title: "Food" },
    { id: 12, unitId: 7, order: 2, title: "Drinks" },

    // Lessons for Unit 5
    { id: 13, unitId: 8, order: 1, title: "Family Members" },
];

// ============================================================================
// == CHALLENGES
// ============================================================================
export const challenges = [
    // --- Challenges for Unit 1 ---
    { id: 4, lessonId: 3, type: "SELECT", order: 1, question: 'Which one of these is "the apple"?' },
    { id: 5, lessonId: 3, type: "SELECT", order: 2, question: 'Which one of these is "the bread"?' },
    { id: 6, lessonId: 4, type: "ASSIST", order: 1, question: '"to eat"' },
    
    // --- Challenges for Unit 2 ---
    { id: 13, lessonId: 9, type: "SELECT", order: 1, question: 'Which one of these is "Hello"?' },
    { id: 14, lessonId: 9, type: "ASSIST", order: 2, question: '"Thank you"' },

    // --- Challenges for Unit 3 ---
    { id: 15, lessonId: 10, type: "SELECT", order: 1, question: 'Which one of these is "Three"?' },
    { id: 16, lessonId: 10, type: "SELECT", order: 2, question: 'Which one of these is "Five"?' },

    // --- Challenges for Unit 4 ---
    { id: 17, lessonId: 11, type: "SELECT", order: 1, question: 'Which one of these is "Kimchi"?' },
    { id: 18, lessonId: 12, type: "ASSIST", order: 1, question: '"Water"' },

    // --- Challenges for Unit 5 ---
    { id: 19, lessonId: 13, type: "SELECT", order: 1, question: 'Which one of these is "Father"?' },
    { id: 20, lessonId: 13, type: "ASSIST", order: 2, question: '"Mother"' },
]as const;

// ============================================================================
// == CHALLENGE OPTIONS
// ============================================================================
export const challengeOptions = [
    // --- Options for Unit 1 ---
    { challengeId: 4, imageSrc: "/apple.svg", correct: true, text: "사과", audioSrc: "/kr_apple.mp3" },
    { challengeId: 4, imageSrc: "/water.svg", correct: false, text: "물", audioSrc: "/kr_water.mp3" },
    { challengeId: 4, imageSrc: "/bread.svg", correct: false, text: "빵", audioSrc: "/kr_bread.mp3" },
    
    { challengeId: 5, imageSrc: "/bread.svg", correct: true, text: "빵", audioSrc: "/kr_bread.mp3" },
    { challengeId: 5, imageSrc: "/apple.svg", correct: false, text: "사과", audioSrc: "/kr_apple.mp3" },
    { challengeId: 5, imageSrc: "/water.svg", correct: false, text: "물", audioSrc: "/kr_water.mp3" },

    { challengeId: 6, correct: true, text: "먹다", audioSrc: "/kr_eat.mp3" },
    { challengeId: 6, correct: false, text: "마시다", audioSrc: "/kr_drink.mp3" },
    { challengeId: 6, correct: false, text: "자다", audioSrc: "/kr_sleep.mp3" },

    // --- Options for Unit 2 ---
    { challengeId: 13, correct: true, text: "안녕하세요", audioSrc: "/kr_hello.mp3" },
    { challengeId: 13, correct: false, text: "감사합니다", audioSrc: "/kr_thankyou.mp3" },
    { challengeId: 13, correct: false, text: "안녕히 가세요", audioSrc: "/kr_goodbye.mp3" },

    { challengeId: 14, correct: true, text: "감사합니다", audioSrc: "/kr_thankyou.mp3" },
    { challengeId: 14, correct: false, text: "안녕하세요", audioSrc: "/kr_hello.mp3" },
    { challengeId: 14, correct: false, text: "미안합니다", audioSrc: "/kr_sorry.mp3" },

    // --- Options for Unit 3 ---
    { challengeId: 15, correct: true, text: "셋", audioSrc: "/kr_three.mp3" },
    { challengeId: 15, correct: false, text: "하나", audioSrc: "/kr_one.mp3" },
    { challengeId: 15, correct: false, text: "다섯", audioSrc: "/kr_five.mp3" },

    { challengeId: 16, correct: true, text: "다섯", audioSrc: "/kr_five.mp3" },
    { challengeId: 16, correct: false, text: "둘", audioSrc: "/kr_two.mp3" },
    { challengeId: 16, correct: false, text: "넷", audioSrc: "/kr_four.mp3" },
    
    // --- Options for Unit 4 ---
    { challengeId: 17, imageSrc: "/kimchi.svg", correct: true, text: "김치", audioSrc: "/kr_kimchi.mp3" },
    { challengeId: 17, imageSrc: "/rice.svg", correct: false, text: "밥", audioSrc: "/kr_rice.mp3" },
    { challengeId: 17, imageSrc: "/bulgogi.svg", correct: false, text: "불고기", audioSrc: "/kr_bulgogi.mp3" },

    { challengeId: 18, correct: true, text: "물", audioSrc: "/kr_water.mp3" },
    { challengeId: 18, correct: false, text: "맥주", audioSrc: "/kr_beer.mp3" },
    { challengeId: 18, correct: false, text: "주스", audioSrc: "/kr_juice.mp3" },

    // --- Options for Unit 5 ---
    { challengeId: 19, imageSrc: "/father.svg", correct: true, text: "아버지", audioSrc: "/kr_father.mp3" },
    { challengeId: 19, imageSrc: "/mother.svg", correct: false, text: "어머니", audioSrc: "/kr_mother.mp3" },
    { challengeId: 19, imageSrc: "/brother.svg", correct: false, text: "형", audioSrc: "/kr_brother.mp3" },
    
    { challengeId: 20, correct: true, text: "어머니", audioSrc: "/kr_mother.mp3" },
    { challengeId: 20, correct: false, text: "아버지", audioSrc: "/kr_father.mp3" },
    { challengeId: 20, correct: false, text: "누나", audioSrc: "/kr_sister.mp3" },
];