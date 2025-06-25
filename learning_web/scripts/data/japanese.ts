// scripts/data/japanese.ts

export const course = {
    id: 1,
    title: "Japanese",
    imageSrc: "/jp.svg",
};

export const units = [
    {
        id: 1,
        courseId: 1, // Japanese
        title: "Unit 1",
        description: "Learn the basics of Japanese",
        order: 1,
    },
];

export const lessons = [
    { id: 1, unitId: 1, order: 1, title: "Nouns" },
    { id: 2, unitId: 1, order: 2, title: "Verbs" },
];

export const challenges = [
    { id: 1, lessonId: 1, type: "SELECT", order: 1, question: 'Which one of these is "the man"?' },
    { id: 2, lessonId: 1, type: "SELECT", order: 2, question: 'Which one of these is "the robot"?' },
    { id: 3, lessonId: 2, type: "ASSIST", order: 1, question: '"the woman"' },
]as const;

export const challengeOptions = [
    // Challenge 1
    { challengeId: 1, imageSrc: "/man.svg", correct: true, text: "その男", audioSrc: "/jp_man.mp3" },
    { challengeId: 1, imageSrc: "/woman.svg", correct: false, text: "女性", audioSrc: "/jp_woman.mp3" },
    { challengeId: 1, imageSrc: "/robot.svg", correct: false, text: "ロボット", audioSrc: "/jp_robot.mp3" },
    // Challenge 2
    { challengeId: 2, imageSrc: "/robot.svg", correct: true, text: "ロボット", audioSrc: "/jp_robot.mp3" },
    { challengeId: 2, imageSrc: "/man.svg", correct: false, text: "その男", audioSrc: "/jp_man.mp3" },
    { challengeId: 2, imageSrc: "/woman.svg", correct: false, text: "女性", audioSrc: "/jp_woman.mp3" },
    // Challenge 3
    { challengeId: 3, correct: true, text: "女性", audioSrc: "/jp_woman.mp3" },
    { challengeId: 3, correct: false, text: "その男", audioSrc: "/jp_man.mp3" },
    { challengeId: 3, correct: false, text: "ロボット", audioSrc: "/jp_robot.mp3" },
];