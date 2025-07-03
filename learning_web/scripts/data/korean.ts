// scripts/data/korean.ts

export const course = {
    id: 2,
    title: "Korean",
    imageSrc: "/kr.svg",
};

// ============================================================================
// == UNITS (ID Range: 20001-20005)
// ============================================================================
export const units = [
    { id: 20001, courseId: 2, title: "Unit 1: Absolute Foundation", description: "Learn the alphabet and basic vocabulary", order: 1 },
    { id: 20002, courseId: 2, title: "Unit 2: Daily Life", description: "Communicate in real-life situations", order: 2 },
    { id: 20003, courseId: 2, title: "Unit 3: Expanding Communication", description: "Learn about time, hobbies, and adjectives", order: 3 },
    { id: 20004, courseId: 2, title: "Unit 4: Sentence Structure", description: "Master core grammar", order: 4 },
    { id: 20005, courseId: 2, title: "Unit 5: Advanced Topics", description: "Intermediate vocabulary and dialogues", order: 5 },
]as const;

// ============================================================================
// == LESSONS (ID Range: 21001-21025)
// ============================================================================
export const lessons = [
    // Unit 1 (ID: 20001)
    { id: 21001, unitId: 20001, order: 1, title: "Alphabet 1 (Consonants)" },
    { id: 21002, unitId: 20001, order: 2, title: "Alphabet 2 (Vowels)" },
    { id: 21003, unitId: 20001, order: 3, title: "Basic Nouns" },
    { id: 21004, unitId: 20001, order: 4, title: "Basic Verbs" },
    { id: 21005, unitId: 20001, order: 5, title: "Numbers 1–10 (Native Korean)" },
    // Unit 2 (ID: 20002)
    { id: 21006, unitId: 20002, order: 1, title: "Common Greetings" },
    { id: 21007, unitId: 20002, order: 2, title: "Introducing Yourself" },
    { id: 21008, unitId: 20002, order: 3, title: "Classroom Objects" },
    { id: 21009, unitId: 20002, order: 4, title: "Asking Prices & Shopping" },
    { id: 21010, unitId: 20002, order: 5, title: "Asking for Directions" },
    // Unit 3 (ID: 20003)
    { id: 21011, unitId: 20003, order: 1, title: "Talking About Time" },
    { id: 21012, unitId: 20003, order: 2, title: "Talking About Weather" },
    { id: 21013, unitId: 20003, order: 3, title: "Talking About Hobbies" },
    { id: 21014, unitId: 20003, order: 4, title: "Ordering at a Restaurant" },
    { id: 21015, unitId: 20003, order: 5, title: "Descriptive Adjectives" },
    // Unit 4 (ID: 20004)
    { id: 21016, unitId: 20004, order: 1, title: "Past Tense (았/었)" },
    { id: 21017, unitId: 20004, order: 2, title: "Future Tense (ㄹ/을 거예요)" },
    { id: 21018, unitId: 20004, order: 3, title: "Subject Particles (이/가)" },
    { id: 21019, unitId: 20004, order: 4, title: "Object Particles (을/를)" },
    { id: 21020, unitId: 20004, order: 5, title: "Conjunctions (그리고, 그래서)" },
    // Unit 5 (ID: 20005)
    { id: 21021, unitId: 20005, order: 1, title: "Emotions and Feelings" },
    { id: 21022, unitId: 20005, order: 2, title: "At the Workplace" },
    { id: 21023, unitId: 20005, order: 3, title: "Renting a House" },
    { id: 21024, unitId: 20005, order: 4, title: "Planning a Trip" },
    { id: 21025, unitId: 20005, order: 5, title: "Korean Culture" },
]as const;


// ============================================================================
// == CHALLENGES (ID Range: 22001-22075)
// ============================================================================
export const challenges = [
    // Unit 1, Lesson 21001: Bảng chữ cái 1 (Phụ âm)
    { id: 22001, lessonId: 21001, type: "ASSIST", order: 1, question: "What is this character? ㄱ" },
    { id: 22002, lessonId: 21001, type: "ASSIST", order: 2, question: "What is this character? ㅁ" },
    { id: 22003, lessonId: 21001, type: "ASSIST", order: 3, question: "What is the Korean character for 'S'?" },
    // Unit 1, Lesson 21002: Bảng chữ cái 2 (Nguyên âm)
    { id: 22004, lessonId: 21002, type: "ASSIST", order: 1, question: "What vowel is this? ㅏ" },
    { id: 22005, lessonId: 21002, type: "ASSIST", order: 2, question: "What vowel is this? ㅜ" },
    { id: 22006, lessonId: 21002, type: "ASSIST", order: 3, question: "What is the Korean vowel for 'i'?" },
    // Unit 1, Lesson 21003: Danh từ cơ bản
    { id: 22007, lessonId: 21003, type: "SELECT", order: 1, question: 'Which one is "tree"?' },
    { id: 22008, lessonId: 21003, type: "SELECT", order: 2, question: 'Which one is "house"?' },
    { id: 22009, lessonId: 21003, type: "ASSIST", order: 3, question: '"Student"' },
    // Unit 1, Lesson 21004: Động từ cơ bản
    { id: 22010, lessonId: 21004, type: "SELECT", order: 1, question: 'Which one is the verb "to go"?' },
    { id: 22011, lessonId: 21004, type: "SELECT", order: 2, question: 'Which one is the verb "to look"?' },
    { id: 22012, lessonId: 21004, type: "ASSIST", order: 3, question: '"To study"' },
    // Unit 1, Lesson 21005: Số đếm 1-10 (Thuần Hàn)
    { id: 22013, lessonId: 21005, type: "SELECT", order: 1, question: "What is number 2 (native Korean)?" },
    { id: 22014, lessonId: 21005, type: "SELECT", order: 2, question: "What is number 5 (native Korean)?" },
    { id: 22015, lessonId: 21005, type: "ASSIST", order: 3, question: '"One" (native Korean)' },
    // Unit 2, Lesson 21006: Chào hỏi thông dụng
    { id: 22016, lessonId: 21006, type: "ASSIST", order: 1, question: 'What is the formal way to say "Hello"?' },
    { id: 22017, lessonId: 21006, type: "ASSIST", order: 2, question: 'How do you say "Thank you"?' },
    { id: 22018, lessonId: 21006, type: "ASSIST", order: 3, question: '"Goodbye" (when you are staying)' },
    // Unit 2, Lesson 21007: Giới thiệu bản thân
    { id: 22019, lessonId: 21007, type: "ASSIST", order: 1, question: 'How to say "I am a student"?' },
    { id: 22020, lessonId: 21007, type: "ASSIST", order: 2, question: 'How to start "My name is..."?' },
    { id: 22021, lessonId: 21007, type: "ASSIST", order: 3, question: '"Nice to meet you"' },
    // Unit 2, Lesson 21008: Đồ vật trong lớp học
    { id: 22022, lessonId: 21008, type: "SELECT", order: 1, question: 'Which one is "book"?' },
    { id: 22023, lessonId: 21008, type: "SELECT", order: 2, question: 'Which one is "desk"?' },
    { id: 22024, lessonId: 21008, type: "ASSIST", order: 3, question: '"Chair"' },
    // Unit 2, Lesson 21009: Hỏi giá và Mua sắm
    { id: 22025, lessonId: 21009, type: "ASSIST", order: 1, question: 'How to ask "How much is this?"' },
    { id: 22026, lessonId: 21009, type: "ASSIST", order: 2, question: 'How to say "I’ll take this one"?' },
    { id: 22027, lessonId: 21009, type: "ASSIST", order: 3, question: '"Too expensive"' },
    // Unit 2, Lesson 21010: Hỏi đường
    { id: 22028, lessonId: 21010, type: "ASSIST", order: 1, question: 'How to ask "Where is the restroom?"' },
    { id: 22029, lessonId: 21010, type: "ASSIST", order: 2, question: 'How to say "Go straight"?' },
    { id: 22030, lessonId: 21010, type: "ASSIST", order: 3, question: '"Right side"' },
    // Unit 3, Lesson 21011: Hỏi và nói về Thời gian
    { id: 22031, lessonId: 21011, type: "ASSIST", order: 1, question: 'How to ask "What time is it now?"' },
    { id: 22032, lessonId: 21011, type: "ASSIST", order: 2, question: 'How to say "3 o’clock"?' },
    { id: 22033, lessonId: 21011, type: "ASSIST", order: 3, question: '"10 minutes"' },
    // Unit 3, Lesson 21012: Nói về Thời tiết
    { id: 22034, lessonId: 21012, type: "ASSIST", order: 1, question: 'How to say "The weather is nice"?' },
    { id: 22035, lessonId: 21012, type: "ASSIST", order: 2, question: 'It is raining' },
    { id: 22036, lessonId: 21012, type: "SELECT", order: 3, question: '"Snow"' },
    // Unit 3, Lesson 21013: Nói về Sở thích
    { id: 22037, lessonId: 21013, type: "ASSIST", order: 1, question: 'My hobby is "watching movies"' },
    { id: 22038, lessonId: 21013, type: "ASSIST", order: 2, question: 'How to ask "What is your hobby?"' },
    { id: 22039, lessonId: 21013, type: "ASSIST", order: 3, question: '"Reading books"' },

    // Unit 3, Lesson 21014: Gọi món tại nhà hàng
    { id: 22040, lessonId: 21014, type: "ASSIST", order: 1, question: 'How to say "I’ll have Kimchi jjigae"?' },
    { id: 22041, lessonId: 21014, type: "ASSIST", order: 2, question: 'What is "menu" in Korean?' },
    { id: 22042, lessonId: 21014, type: "ASSIST", order: 3, question: '"Delicious"' },
    // Unit 3, Lesson 21015: Tính từ mô tả
    { id: 22043, lessonId: 21015, type: "ASSIST", order: 1, question: 'Which is the adjective "big"?' },
    { id: 22044, lessonId: 21015, type: "ASSIST", order: 2, question: 'Which is the adjective "small"?' },
    { id: 22045, lessonId: 21015, type: "ASSIST", order: 3, question: '"Beautiful"' },
    // Unit 4, Lesson 21016: Thì quá khứ (았/었)
    { id: 22046, lessonId: 21016, type: "ASSIST", order: 1, question: "What is the past tense of '가다' (to go)?" },
    { id: 22047, lessonId: 21016, type: "ASSIST", order: 2, question: "What is the past tense of '먹다' (to eat)?" },
    { id: 22048, lessonId: 21016, type: "ASSIST", order: 3, question: '"I watched a movie"' },
    // Unit 4, Lesson 21017: Thì tương lai (ㄹ/을 거예요)
    { id: 22049, lessonId: 21017, type: "ASSIST", order: 1, question: "What is the future tense of '하다' (to do)?" },
    { id: 22050, lessonId: 21017, type: "ASSIST", order: 2, question: "What is the future tense of '보다' (to see)?" },
    { id: 22051, lessonId: 21017, type: "ASSIST", order: 3, question: '"I will study"' },
    // Unit 4, Lesson 21018: Tiểu từ chủ ngữ (이/가)
    { id: 22052, lessonId: 21018, type: "SELECT", order: 1, question: "Fill in the blank: '사과__ 맛있어요.'" },
    { id: 22053, lessonId: 21018, type: "SELECT", order: 2, question: "Fill in the blank: '학생__ 공부해요.'" },
    { id: 22054, lessonId: 21018, type: "SELECT", order: 3, question: 'Which particle goes with "Teacher" (선생님)?' },
    // Unit 4, Lesson 21019: Tiểu từ tân ngữ (을/를)
    { id: 22055, lessonId: 21019, type: "SELECT", order: 1, question: "Fill in the blank: '책__ 읽어요.'" },
    { id: 22056, lessonId: 21019, type: "SELECT", order: 2, question: "Fill in the blank: '영화__ 봐요.'" },
    { id: 22057, lessonId: 21019, type: "SELECT", order: 3, question: 'Which particle goes with "Coffee" (커피)?' },
    // Unit 4, Lesson 21020: Từ nối (그리고, 그래서)
    { id: 22058, lessonId: 21020, type: "ASSIST", order: 1, question: 'Which conjunction means "and"?' },
    { id: 22059, lessonId: 21020, type: "ASSIST", order: 2, question: 'Which conjunction means "so"?' },
    { id: 22060, lessonId: 21020, type: "ASSIST", order: 3, question: '"But"' },
    // Unit 5, Lesson 21021: Cảm xúc và Cảm giác
    { id: 22061, lessonId: 21021, type: "ASSIST", order: 1, question: 'Which one means "happy"?' },
    { id: 22062, lessonId: 21021, type: "ASSIST", order: 2, question: 'Which one means "sad"?' },
    { id: 22063, lessonId: 21021, type: "ASSIST", order: 3, question: '"Tired"' },
    // Unit 5, Lesson 21022: Tại nơi làm việc
    { id: 22064, lessonId: 21022, type: "ASSIST", order: 1, question: 'Which word means "meeting"?' },
    { id: 22065, lessonId: 21022, type: "ASSIST", order: 2, question: 'Which word means "report"?' },
    { id: 22066, lessonId: 21022, type: "ASSIST", order: 3, question: '"Colleague"' },
    // Unit 5, Lesson 21023: Thuê nhà
    { id: 22067, lessonId: 21023, type: "ASSIST", order: 1, question: 'Which one is "contract"?' },
    { id: 22068, lessonId: 21023, type: "ASSIST", order: 2, question: 'Which one is "deposit"?' },
    { id: 22069, lessonId: 21023, type: "ASSIST", order: 3, question: '"Monthly rent"' },
    // Unit 5, Lesson 21024: Lên kế hoạch du lịch
    { id: 22070, lessonId: 21024, type: "ASSIST", order: 1, question: 'Which one means "planning"?' },
    { id: 22071, lessonId: 21024, type: "ASSIST", order: 2, question: 'Which one means "plane ticket"?' },
    { id: 22072, lessonId: 21024, type: "ASSIST", order: 3, question: '"Passport"' },
    // Unit 5, Lesson 21025: Văn hóa Hàn Quốc
    { id: 22073, lessonId: 21025, type: "ASSIST", order: 1, question: 'What is the traditional Korean costume?' },
    { id: 22074, lessonId: 21025, type: "ASSIST", order: 2, question: 'What is Korea’s iconic dish?' },
    { id: 22075, lessonId: 21025, type: "ASSIST", order: 3, question: '"Cultural heritage"' },
] as const;

// ============================================================================
// == CHALLENGE OPTIONS
// ============================================================================
export const challengeOptions = [
    // U1-L21001
    { challengeId: 22001, correct: true, text: "Giyok", audioSrc: "/assets/audio/korean/unit_10001/kr_Giyok.mp3" },
    { challengeId: 22001, correct: false, text: "Nion", audioSrc: "/assets/audio/korean/unit_10001/kr_Nion.mp3" },
    { challengeId: 22001, correct: false, text: "Dikut", audioSrc: "/assets/audio/korean/unit_10001/kr_dikut.mp3" },

    { challengeId: 22002, correct: false, text: "Bip", audioSrc: "/assets/audio/korean/unit_10001/kr_Bip.mp3" },
    { challengeId: 22002, correct: false, text: "Shiot", audioSrc: "/assets/audio/korean/unit_10001/kr_Shiot.mp3" },
    { challengeId: 22002, correct: true, text: "Miom", audioSrc: "/assets/audio/korean/unit_10001/kr_Miom.mp3" },
    
    { challengeId: 22003, correct: false, text: "ㅈ", audioSrc: "/assets/audio/korean/unit_10001/kr_jiut.mp3" },
    { challengeId: 22003, correct: true, text: "ㅅ", audioSrc: "/assets/audio/korean/unit_10001/kr_Shiot.mp3" },
    { challengeId: 22003, correct: false, text: "ㅊ", audioSrc: "/assets/audio/korean/unit_10001/kr_chiut.mp3" },
   
    // U1-L21002
    { challengeId: 22004, correct: true, text: "a", audioSrc: "/assets/audio/korean/unit_10001/kr_a.mp3" },
    { challengeId: 22004, correct: false, text: "o", audioSrc: "/assets/audio/korean/unit_10001/kr_o.mp3" },
    { challengeId: 22004, correct: false, text: "u", audioSrc: "/assets/audio/korean/unit_10001/kr_u.mp3" },

    { challengeId: 22005, correct: false, text: "ya", audioSrc: "/assets/audio/korean/unit_10001/kr_ya.mp3" },
    { challengeId: 22005, correct: true, text: "u", audioSrc: "/assets/audio/korean/unit_10001/kr_u.mp3" },
    { challengeId: 22005, correct: false, text: "yo", audioSrc: "/assets/audio/korean/unit_10001/kr_yo.mp3" },

    { challengeId: 22006, correct: true, text: "ㅣ", audioSrc: "/assets/audio/korean/unit_10001/kr_i.mp3" },
    { challengeId: 22006, correct: false, text: "ㅡ", audioSrc: "/assets/audio/korean/unit_10001/kr_eu.mp3" },
    { challengeId: 22006, correct: false, text: "ㅔ", audioSrc: "/assets/audio/korean/unit_10001/kr_e.mp3" },

    // U1-L21003
    { challengeId: 22007, imageSrc:"/assets/images/korean/unit_1/kr_jib.svg", correct: false, text: "집", audioSrc: "/assets/audio/korean/unit_10001/kr_jib.mp3" },
    { challengeId: 22007, imageSrc:"/assets/images/korean/unit_1/kr_haksaeng.svg", correct: false, text: "학생", audioSrc: "/assets/audio/korean/unit_10001/kr_haksaeng.mp3" },
    { challengeId: 22007, imageSrc:"/assets/images/korean/unit_1/kr_namu.svg", correct: true, text: "나무", audioSrc: "/assets/audio/korean/unit_10001/kr_namu.mp3" },

    { challengeId: 22008, imageSrc:"/assets/images/korean/unit_1/kr_hakgyo.svg", correct: false, text: "학교", audioSrc: "/assets/audio/korean/unit_10001/kr_hakgyo.mp3" },
    { challengeId: 22008, imageSrc:"/assets/images/korean/unit_1/kr_jib.svg", correct: true, text: "집", audioSrc: "/assets/audio/korean/unit_10001/kr_jib.mp3" },
    { challengeId: 22008, imageSrc:"/assets/images/korean/unit_1/kr_sagwa.svg", correct: false, text: "사과", audioSrc: "/assets/audio/korean/unit_10001/kr_sagwa.mp3" },

    { challengeId: 22009, correct: false, text: "선생님", audioSrc: "/assets/audio/korean/unit_10001/kr_seonsaengnim.mp3" },
    { challengeId: 22009, correct: false, text: "의사", audioSrc: "/assets/audio/korean/unit_10001/kr_uisa.mp3" },
    { challengeId: 22009, correct: true, text: "학생", audioSrc: "/assets/audio/korean/unit_10001/kr_haksaeng.mp3" },

    // U1-L21004
    { challengeId: 22010, imageSrc:"/assets/images/korean/unit_1/kr_gada.svg", correct: true, text: "가다", audioSrc: "/assets/audio/korean/unit_10001/kr_gada.mp3" },
    { challengeId: 22010, imageSrc:"/assets/images/korean/unit_1/kr_boda.svg", correct: false, text: "보다", audioSrc: "/assets/audio/korean/unit_10001/kr_boda.mp3" },
    { challengeId: 22010, imageSrc:"/assets/images/korean/unit_1/kr_meokda.svg", correct: false, text: "먹다", audioSrc: "/assets/audio/korean/unit_10001/kr_meokda.mp3" },

    { challengeId: 22011, imageSrc:"/assets/images/korean/unit_1/kr_jada.svg", correct: false, text: "자다", audioSrc: "/assets/audio/korean/unit_10001/kr_jada.mp3" },
    { challengeId: 22011, imageSrc:"/assets/images/korean/unit_1/kr_oda.svg", correct: false, text: "오다", audioSrc: "/assets/audio/korean/unit_10001/kr_oda.mp3" },
    { challengeId: 22011, imageSrc:"/assets/images/korean/unit_1/kr_boda.svg", correct: true, text: "보다", audioSrc: "/assets/audio/korean/unit_10001/kr_boda.mp3" },

    { challengeId: 22012, correct: true, text: "공부하다", audioSrc: "/assets/audio/korean/unit_10001/kr_gongbuhada.mp3" },
    { challengeId: 22012, correct: false, text: "운동하다", audioSrc: "/assets/audio/korean/unit_10001/kr_undonghada.mp3" },
    { challengeId: 22012, correct: false, text: "일하다", audioSrc: "/assets/audio/korean/unit_10001/kr_ilhada.mp3" },
    
    // U1-L21005
    { challengeId: 22013, imageSrc:"/assets/images/korean/unit_1/kr_hana.svg", correct: false, text: "하나", audioSrc: "/assets/audio/korean/unit_10001/kr_hana.mp3" },
    { challengeId: 22013, imageSrc:"/assets/images/korean/unit_1/kr_dul.svg", correct: true, text: "둘", audioSrc: "/assets/audio/korean/unit_10001/kr_dul.mp3" },
    { challengeId: 22013, imageSrc:"/assets/images/korean/unit_1/kr_set.svg", correct: false, text: "셋", audioSrc: "/assets/audio/korean/unit_10001/kr_set.mp3" },

    { challengeId: 22014, imageSrc:"/assets/images/korean/unit_1/kr_daseot.svg", correct: true, text: "다섯", audioSrc: "/assets/audio/korean/unit_10001/kr_daseot.mp3" },
    { challengeId: 22014, imageSrc:"/assets/images/korean/unit_1/kr_net.svg", correct: false, text: "넷", audioSrc: "/assets/audio/korean/unit_10001/kr_net.mp3" },
    { challengeId: 22014, imageSrc:"/assets/images/korean/unit_1/kr_yeoseot.svg", correct: false, text: "여섯", audioSrc: "/assets/audio/korean/unit_10001/kr_yeoseot.mp3" },

    { challengeId: 22015, correct: true, text: "하나", audioSrc: "/assets/audio/korean/unit_10001/kr_hana.mp3" },
    { challengeId: 22015, correct: false, text: "일", audioSrc: "/assets/audio/korean/unit_10001/kr_il.mp3" },
    { challengeId: 22015, correct: false, text: "첫째", audioSrc: "/assets/audio/korean/unit_10001/kr_cheotjjae.mp3" },


    // U2-L21006
    { challengeId: 22016, correct: true, text: "안녕하세요", audioSrc: "/assets/audio/korean/unit_20001/kr_annyeonghaseyo.mp3" },
    { challengeId: 22016, correct: false, text: "안녕", audioSrc: "/assets/audio/korean/unit_20001/kr_annyeong.mp3" },
    { challengeId: 22016, correct: false, text: "여보세요", audioSrc: "/assets/audio/korean/unit_20001/kr_yeoboseyo.mp3" },

    { challengeId: 22017, correct: false, text: "미안합니다", audioSrc: "/assets/audio/korean/unit_20001/kr_mianhamnida.mp3" },
    { challengeId: 22017, correct: false, text: "괜찮아요", audioSrc: "/assets/audio/korean/unit_20001/kr_gwaenchanayo.mp3" },
    { challengeId: 22017, correct: true, text: "감사합니다", audioSrc: "/assets/audio/korean/unit_20001/kr_gamsahamnida.mp3" },
    
    { challengeId: 22018, correct: true, text: "안녕히 가세요", audioSrc: "/assets/audio/korean/unit_20001/kr_annyeonghi-gaseyo.mp3" },
    { challengeId: 22018, correct: false, text: "안녕히 계세요", audioSrc: "/assets/audio/korean/unit_20001/kr_annyeonghi-gyeseyo.mp3" },
    { challengeId: 22018, correct: false, text: "다음에 봐요", audioSrc: "/assets/audio/korean/unit_20001/kr_daeume-bwayo.mp3" },

    // U2-L21007
    { challengeId: 22019, correct: true, text: "저는 학생입니다", audioSrc: "/assets/audio/korean/unit_20001/kr_jeoneun-haksaengimnida.mp3" },
    { challengeId: 22019, correct: false, text: "이름이 뭐예요?", audioSrc: "/assets/audio/korean/unit_20001/kr_ireumi-mwoyeyo.mp3" },
    { challengeId: 22019, correct: false, text: "한국 사람입니다", audioSrc: "/assets/audio/korean/unit_20001/kr_hanguk-saramimnida.mp3" },

    
    { challengeId: 22020, correct: false, text: "저는...", audioSrc: "/assets/audio/korean/unit_20001/kr_jeoneun.mp3" },
    { challengeId: 22020, correct: true, text: "제 이름은...", audioSrc: "/assets/audio/korean/unit_20001/kr_je-ireumeun.mp3" },
    { challengeId: 22020, correct: false, text: "어디에서 왔어요?", audioSrc: "/assets/audio/korean/unit_20001/kr_eodieseo-wasseoyo.mp3" },

    
    { challengeId: 22021, correct: false, text: "잘 부탁드립니다", audioSrc: "/assets/audio/korean/unit_20001/kr_jal-butakdeurimnida.mp3" },
    { challengeId: 22021, correct: true, text: "만나서 반갑습니다", audioSrc: "/assets/audio/korean/unit_20001/kr_mannaseo-bangapseumnida.mp3" },
    { challengeId: 22021, correct: false, text: "오랜만이에요", audioSrc: "/assets/audio/korean/unit_20001/kr_oraenmanieyo.mp3" },
    
    // U2-L21008
    { challengeId: 22022, imageSrc:"/assets/images/korean/unit_2/kr_gongchaek.svg", correct: false, text: "공책", audioSrc: "/assets/audio/korean/unit_20001/kr_gongchaek.mp3" },
    { challengeId: 22022, imageSrc:"/assets/images/korean/unit_2/kr_chaek.svg", correct: true, text: "책", audioSrc: "/assets/audio/korean/unit_20001/kr_chaek.mp3" },
    { challengeId: 22022, imageSrc:"/assets/images/korean/unit_2/kr_yeonpil.svg", correct: false, text: "연필", audioSrc: "/assets/audio/korean/unit_20001/kr_yeonpil.mp3" },

    { challengeId: 22023, imageSrc:"/assets/images/korean/unit_2/kr_chaeksang.svg", correct: true, text: "책상", audioSrc: "/assets/audio/korean/unit_20001/kr_chaeksang.mp3" },
    { challengeId: 22023, imageSrc:"/assets/images/korean/unit_2/kr_uija.svg", correct: false, text: "의자", audioSrc: "/assets/audio/korean/unit_20001/kr_uija.mp3" },
    { challengeId: 22023, imageSrc:"/assets/images/korean/unit_2/kr_mun.svg", correct: false, text: "문", audioSrc: "/assets/audio/korean/unit_20001/kr_mun.mp3" },

    { challengeId: 22024, correct: true, text: "의자", audioSrc: "/assets/audio/korean/unit_20001/kr_uija.mp3" },
    { challengeId: 22024, correct: false, text: "창문", audioSrc: "/assets/audio/korean/unit_20001/kr_changmun.mp3" },
    { challengeId: 22024, correct: false, text: "칠판", audioSrc: "/assets/audio/korean/unit_20001/kr_chilpan.mp3" },
    
    // U2-L21009
    
    { challengeId: 22025, correct: false, text: "이거 뭐예요?", audioSrc: "/assets/audio/korean/unit_20001/kr_igeo-mwoyeyo.mp3" },
    { challengeId: 22025, correct: true, text: "이거 얼마예요?", audioSrc: "/assets/audio/korean/unit_20001/kr_igeo-eolmayeyo.mp3" },
    { challengeId: 22025, correct: false, text: "이거 주세요", audioSrc: "/assets/audio/korean/unit_20001/kr_igeo-juseyo.mp3" },

    { challengeId: 22026, correct: true, text: "이거 주세요", audioSrc: "/assets/audio/korean/unit_20001/kr_igeo-juseyo.mp3" },
    { challengeId: 22026, correct: false, text: "깎아주세요", audioSrc: "/assets/audio/korean/unit_20001/kr_kkakkajuseyo.mp3" },
    { challengeId: 22026, correct: false, text: "봉투 필요없어요", audioSrc: "/assets/audio/korean/unit_20001/kr_bongtu-piryoeopseoyo.mp3" },

    { challengeId: 22027, correct: true, text: "너무 비싸요", audioSrc: "/assets/audio/korean/unit_20001/kr_neomu-bissayo.mp3" },
    { challengeId: 22027, correct: false, text: "너무 싸요", audioSrc: "/assets/audio/korean/unit_20001/kr_neomu-ssayo.mp3" },
    { challengeId: 22027, correct: false, text: "아주 좋아요", audioSrc: "/assets/audio/korean/unit_20001/kr_aju-joayo.mp3" },

    // U2-L21010
    { challengeId: 22028, correct: false, text: "은행이 어디에 있어요?", audioSrc: "/assets/audio/korean/unit_20001/kr_eunhaengi-eodie-isseoyo.mp3" },
    { challengeId: 22028, correct: false, text: "지금 어디에요?", audioSrc: "/assets/audio/korean/unit_20001/kr_jigeum-eodieyo.mp3" },
    { challengeId: 22028, correct: true, text: "화장실이 어디에 있어요?", audioSrc: "/assets/audio/korean/unit_20001/kr_hwajangsiri-eodie-isseoyo.mp3" },
    
    { challengeId: 22029, correct: true, text: "똑바로 가세요", audioSrc: "/assets/audio/korean/unit_20001/kr_ttokbaro-gaseyo.mp3" },
    { challengeId: 22029, correct: false, text: "왼쪽으로 가세요", audioSrc: "/assets/audio/korean/unit_20001/kr_oenjjogeuro-gaseyo.mp3" },
    { challengeId: 22029, correct: false, text: "오른쪽으로 가세요", audioSrc: "/assets/audio/korean/unit_20001/kr_oreunjjogeuro-gaseyo.mp3" },

    
    { challengeId: 22030, correct: false, text: "왼쪽", audioSrc: "/assets/audio/korean/unit_20001/kr_oenjjok.mp3" },
    { challengeId: 22030, correct: true, text: "오른쪽", audioSrc: "/assets/audio/korean/unit_20001/kr_oreunjjok.mp3" },
    { challengeId: 22030, correct: false, text: "여기", audioSrc: "/assets/audio/korean/unit_20001/kr_yeogi.mp3" },

    // U3-L21011
    { challengeId: 22031, correct: true, text: "지금 몇 시예요?", audioSrc: "/assets/audio/korean/unit_3/kr_jigeum-myeot-siyeyo.mp3" },
    { challengeId: 22031, correct: false, text: "오늘 무슨 요일이에요?", audioSrc: "/assets/audio/korean/unit_3/kr_oneul-museun-yoirieyo.mp3" },
    { challengeId: 22031, correct: false, text: "생일이 언제예요?", audioSrc: "/assets/audio/korean/unit_3/kr_saengiri-eonjeyeyo.mp3" },

    
    { challengeId: 22032, correct: false, text: "세 개", audioSrc: "/assets/audio/korean/unit_3/kr_se-gae.mp3" },
    { challengeId: 22032, correct: true, text: "세 시", audioSrc: "/assets/audio/korean/unit_3/kr_se-si.mp3" },
    { challengeId: 22032, correct: false, text: "세 명", audioSrc: "/assets/audio/korean/unit_3/kr_se-myeong.mp3" },

    
    { challengeId: 22033, correct: false, text: "이십 분", audioSrc: "/assets/audio/korean/unit_3/kr_isip-bun.mp3" },
    { challengeId: 22033, correct: false, text: "오 분", audioSrc: "/assets/audio/korean/unit_3/kr_o-bun.mp3" },
    { challengeId: 22033, correct: true, text: "십 분", audioSrc: "/assets/audio/korean/unit_3/kr_sip-bun.mp3" },

    // U3-L21012
    { challengeId: 22034, correct: false, text: "기분이 좋아요", audioSrc: "/assets/audio/korean/unit_3/kr_gibuni-joayo.mp3" },
    { challengeId: 22034, correct: false, text: "날씨가 추워요", audioSrc: "/assets/audio/korean/unit_3/kr_nalssiga-chuwoyo.mp3" },
    { challengeId: 22034, correct: true, text: "날씨가 좋아요", audioSrc: "/assets/audio/korean/unit_3/kr_nalssiga-joayo.mp3" },

    { challengeId: 22035, correct: true, text: "비가 와요", audioSrc: "/assets/audio/korean/unit_3/kr_biga-wayo.mp3" },
    { challengeId: 22035, correct: false, text: "눈이 와요", audioSrc: "/assets/audio/korean/unit_3/kr_nuni-wayo.mp3" },
    { challengeId: 22035, correct: false, text: "바람이 불어요", audioSrc: "/assets/audio/korean/unit_3/kr_barami-bureoyo.mp3" },

    { challengeId: 22036, imageSrc:"/assets/images/korean/unit_3/kr_snow.svg", correct: true, text: "눈", audioSrc: "/assets/audio/korean/unit_3/kr_nun.mp3" },
    { challengeId: 22036, imageSrc:"/assets/images/korean/unit_3/kr_bi.svg", correct: false, text: "비", audioSrc: "/assets/audio/korean/unit_3/kr_bi.mp3" },
    { challengeId: 22036, imageSrc:"/assets/images/korean/unit_3/kr_gureum.svg", correct: false, text: "구름", audioSrc: "/assets/audio/korean/unit_3/kr_gureum.mp3" },

    // U3-L21013
    { challengeId: 22037, correct: false, text: "음악 듣기", audioSrc: "/assets/audio/korean/unit_3/kr_eumak-deutgi.mp3" },
    { challengeId: 22037, correct: false, text: "책 읽기", audioSrc: "/assets/audio/korean/unit_3/kr_chaek-ilgi.mp3" },
    { challengeId: 22037, correct: true, text: "영화 보기", audioSrc: "/assets/audio/korean/unit_3/kr_yeonghwa-bogi.mp3" },

    { challengeId: 22038, correct: true, text: "취미가 뭐예요?", audioSrc: "/assets/audio/korean/unit_3/kr_chwimiga-mwoyeyo.mp3" },
    { challengeId: 22038, correct: false, text: "직업이 뭐예요?", audioSrc: "/assets/audio/korean/unit_3/kr_jigeobi-mwoyeyo.mp3" },
    { challengeId: 22038, correct: false, text: "이름이 뭐예요?", audioSrc: "/assets/audio/korean/unit_20001/kr_ireumi-mwoyeyo.mp3" },

    { challengeId: 22039, correct: false, text: "요리하기", audioSrc: "/assets/audio/korean/unit_3/kr_yorihagi.mp3" },
    { challengeId: 22039, correct: true, text: "책 읽기", audioSrc: "/assets/audio/korean/unit_3/kr_chaek-ilgi.mp3" },
    { challengeId: 22039, correct: false, text: "운동하기", audioSrc: "/assets/audio/korean/unit_3/kr_undonghagi.mp3" },

    // U3-L21014
    { challengeId: 22040, correct: true, text: "김치찌개 주세요", audioSrc: "/assets/audio/korean/unit_3/kr_kimchijjigae-juseyo.mp3" },
    { challengeId: 22040, correct: false, text: "비빔밥 주세요", audioSrc: "/assets/audio/korean/unit_3/kr_bibimbap-juseyo.mp3" },
    { challengeId: 22040, correct: false, text: "물 주세요", audioSrc: "/assets/audio/korean/unit_3/kr_mul-juseyo.mp3" },

    { challengeId: 22041, correct: false, text: "계산서", audioSrc: "/assets/audio/korean/unit_3/kr_gyesanseo.mp3" },
    { challengeId: 22041, correct: true, text: "메뉴판", audioSrc: "/assets/audio/korean/unit_3/kr_menyupan.mp3" },
    { challengeId: 22041, correct: false, text: "숟가락", audioSrc: "/assets/audio/korean/unit_3/kr_sutgarak.mp3" },

    { challengeId: 22042, correct: true, text: "맛있어요", audioSrc: "/assets/audio/korean/unit_3/kr_masisseoyo.mp3" },
    { challengeId: 22042, correct: false, text: "맛없어요", audioSrc: "/assets/audio/korean/unit_3/kr_madeopseoyo.mp3" },
    { challengeId: 22042, correct: false, text: "매워요", audioSrc: "/assets/audio/korean/unit_3/kr_maewoyo.mp3" },

    // U3-L21015
    { challengeId: 22043, correct: true, text: "크다", audioSrc: "/assets/audio/korean/unit_3/kr_keuda.mp3" },
    { challengeId: 22043, correct: false, text: "작다", audioSrc: "/assets/audio/korean/unit_3/kr_jakda.mp3" },
    { challengeId: 22043, correct: false, text: "많다", audioSrc: "/assets/audio/korean/unit_3/kr_manta.mp3" },

    { challengeId: 22044, correct: false, text: "적다", audioSrc: "/assets/audio/korean/unit_3/kr_jeokda.mp3" },
    { challengeId: 22044, correct: true, text: "작다", audioSrc: "/assets/audio/korean/unit_3/kr_jakda.mp3" },
    { challengeId: 22044, correct: false, text: "길다", audioSrc: "/assets/audio/korean/unit_3/kr_gilda.mp3" },

    { challengeId: 22045, correct: true, text: "예쁘다", audioSrc: "/assets/audio/korean/unit_3/kr_yeppeuda.mp3" },
    { challengeId: 22045, correct: false, text: "멋있다", audioSrc: "/assets/audio/korean/unit_3/kr_meositda.mp3" },
    { challengeId: 22045, correct: false, text: "귀엽다", audioSrc: "/assets/audio/korean/unit_3/kr_gwiyeopda.mp3" },

    // U4-L21016
    { challengeId: 22046, correct: false, text: "가요", audioSrc: "/assets/audio/korean/unit_4/kr_gayo.mp3" },
    { challengeId: 22046, correct: true, text: "갔어요", audioSrc: "/assets/audio/korean/unit_4/kr_gasseoyo.mp3" },
    { challengeId: 22046, correct: false, text: "갈 거예요", audioSrc: "/assets/audio/korean/unit_4/kr_gal-geoyeyo.mp3" },
    
    { challengeId: 22047, correct: true, text: "먹었어요", audioSrc: "/assets/audio/korean/unit_4/kr_meogeosseoyo.mp3" },
    { challengeId: 22047, correct: false, text: "마셨어요", audioSrc: "/assets/audio/korean/unit_4/kr_masyeosseoyo.mp3" },
    { challengeId: 22047, correct: false, text: "먹을 거예요", audioSrc: "/assets/audio/korean/unit_4/kr_meogeul-geoyeyo.mp3" },

    
    { challengeId: 22048, correct: false, text: "영화를 봐요", audioSrc: "/assets/audio/korean/unit_4/kr_yeonghwareul-bwayo.mp3" },
    { challengeId: 22048, correct: false, text: "영화를 볼 거예요", audioSrc: "/assets/audio/korean/unit_4/kr_yeonghwareul-bol-geoyeyo.mp3" },
    { challengeId: 22048, correct: true, text: "영화를 봤어요", audioSrc: "/assets/audio/korean/unit_4/kr_yeonghwareul-bwasseoyo.mp3" },

    // U4-L21017
    
    { challengeId: 22049, correct: false, text: "했어요", audioSrc: "/assets/audio/korean/unit_4/kr_haesseoyo.mp3" },
    { challengeId: 22049, correct: false, text: "해요", audioSrc: "/assets/audio/korean/unit_4/kr_haeyo.mp3" },
    { challengeId: 22049, correct: true, text: "할 거예요", audioSrc: "/assets/audio/korean/unit_4/kr_hal-geoyeyo.mp3" },

    { challengeId: 22050, correct: false, text: "봤어요", audioSrc: "/assets/audio/korean/unit_4/kr_bwasseoyo.mp3" },
    { challengeId: 22050, correct: false, text: "봐요", audioSrc: "/assets/audio/korean/unit_4/kr_bwayo.mp3" },
    { challengeId: 22050, correct: true, text: "볼 거예요", audioSrc: "/assets/audio/korean/unit_4/kr_bol-geoyeyo.mp3" },

    { challengeId: 22051, correct: true, text: "공부할 거예요", audioSrc: "/assets/audio/korean/unit_4/kr_gongbuhal-geoyeyo.mp3" },
    { challengeId: 22051, correct: false, text: "공부했어요", audioSrc: "/assets/audio/korean/unit_4/kr_gongbuhaesseoyo.mp3" },
    { challengeId: 22051, correct: false, text: "공부해요", audioSrc: "/assets/audio/korean/unit_4/kr_gongbuhaeyo.mp3" },

    // U4-L21018
    { challengeId: 22052, imageSrc:"/assets/images/korean/unit_4/kr_ga.svg", correct: true, text: "가", audioSrc: "/assets/audio/korean/unit_4/kr_ga.mp3" },
    { challengeId: 22052, imageSrc:"/assets/images/korean/unit_4/kr_neun.svg", correct: false, text: "는", audioSrc: "/assets/audio/korean/unit_4/kr_neun.mp3" },
    { challengeId: 22052, imageSrc:"/assets/images/korean/unit_4/kr_reul.svg", correct: false, text: "를", audioSrc: "/assets/audio/korean/unit_4/kr_reul.mp3" },

    { challengeId: 22053, imageSrc:"/assets/images/korean/unit_4/kr_ii.svg", correct: true, text: "이", audioSrc: "/assets/audio/korean/unit_4/kr_ii.mp3" },
    { challengeId: 22053, imageSrc:"/assets/images/korean/unit_4/kr_eun.svg", correct: false, text: "은", audioSrc: "/assets/audio/korean/unit_4/kr_eun.mp3" },
    { challengeId: 22053, imageSrc:"/assets/images/korean/unit_4/kr_eul.svg", correct: false, text: "을", audioSrc: "/assets/audio/korean/unit_4/kr_eul.mp3" },

    { challengeId: 22054, imageSrc:"/assets/images/korean/unit_4/kr_ga.svg", correct: false, text: "가", audioSrc: "/assets/audio/korean/unit_4/kr_ga.mp3" },
    { challengeId: 22054, imageSrc:"/assets/images/korean/unit_4/kr_ii.svg", correct: true, text: "이", audioSrc: "/assets/audio/korean/unit_4/kr_ii.mp3" },
    { challengeId: 22054, imageSrc:"/assets/images/korean/unit_4/kr_neun.svg", correct: false, text: "는", audioSrc: "/assets/audio/korean/unit_4/kr_neun.mp3" },

    // U4-L21019
    { challengeId: 22055, imageSrc:"/assets/images/korean/unit_4/kr_reul.svg", correct: false, text: "를", audioSrc: "/assets/audio/korean/unit_4/kr_reul.mp3" },
    { challengeId: 22055, imageSrc:"/assets/images/korean/unit_4/kr_ii.svg", correct: false, text: "이", audioSrc: "/assets/audio/korean/unit_4/kr_ii.mp3" },
    { challengeId: 22055, imageSrc:"/assets/images/korean/unit_4/kr_eul.svg", correct: true, text: "을", audioSrc: "/assets/audio/korean/unit_4/kr_eul.mp3" },

    { challengeId: 22056, imageSrc:"/assets/images/korean/unit_4/kr_reul.svg", correct: true, text: "를", audioSrc: "/assets/audio/korean/unit_4/kr_reul.mp3" },
    { challengeId: 22056, imageSrc:"/assets/images/korean/unit_4/kr_eul.svg", correct: false, text: "을", audioSrc: "/assets/audio/korean/unit_4/kr_eul.mp3" },
    { challengeId: 22056, imageSrc:"/assets/images/korean/unit_4/kr_ga.svg", correct: false, text: "가", audioSrc: "/assets/audio/korean/unit_4/kr_ga.mp3" },

    { challengeId: 22057, imageSrc:"/assets/images/korean/unit_4/kr_reul.svg", correct: true, text: "를", audioSrc: "/assets/audio/korean/unit_4/kr_reul.mp3" },
    { challengeId: 22057, imageSrc:"/assets/images/korean/unit_4/kr_eul.svg", correct: false, text: "을", audioSrc: "/assets/audio/korean/unit_4/kr_eul.mp3" },
    { challengeId: 22057, imageSrc:"/assets/images/korean/unit_4/kr_neun.svg", correct: false, text: "는", audioSrc: "/assets/audio/korean/unit_4/kr_neun.mp3" },

    // U4-L21020
    { challengeId: 22058, correct: true, text: "그리고", audioSrc: "/assets/audio/korean/unit_4/kr_geurigo.mp3" },
    { challengeId: 22058, correct: false, text: "그래서", audioSrc: "/assets/audio/korean/unit_4/kr_geuraeseo.mp3" },
    { challengeId: 22058, correct: false, text: "하지만", audioSrc: "/assets/audio/korean/unit_4/kr_hajiman.mp3" },

    { challengeId: 22059, correct: false, text: "그러나", audioSrc: "/assets/audio/korean/unit_4/kr_geureona.mp3" },
    { challengeId: 22059, correct: true, text: "그래서", audioSrc: "/assets/audio/korean/unit_4/kr_geuraeseo.mp3" },
    { challengeId: 22059, correct: false, text: "그리고", audioSrc: "/assets/audio/korean/unit_4/kr_geurigo.mp3" },

    { challengeId: 22060, correct: true, text: "하지만", audioSrc: "/assets/audio/korean/unit_4/kr_hajiman.mp3" },
    { challengeId: 22060, correct: false, text: "그래서", audioSrc: "/assets/audio/korean/unit_4/kr_geuraeseo.mp3" },
    { challengeId: 22060, correct: false, text: "그러면", audioSrc: "/assets/audio/korean/unit_4/kr_geureomyeon.mp3" },

    // U5-L21021
    { challengeId: 22061, correct: true, text: "행복해요", audioSrc: "/assets/audio/korean/unit_5/kr_haengbokaeyo.mp3" },
    { challengeId: 22061, correct: false, text: "슬퍼요", audioSrc: "/assets/audio/korean/unit_5/kr_seulpeoyo.mp3" },
    { challengeId: 22061, correct: false, text: "화나요", audioSrc: "/assets/audio/korean/unit_5/kr_hwanayo.mp3" },

    { challengeId: 22062, correct: true, text: "슬퍼요", audioSrc: "/assets/audio/korean/unit_5/kr_seulpeoyo.mp3" },
    { challengeId: 22062, correct: false, text: "기뻐요", audioSrc: "/assets/audio/korean/unit_5/kr_gippeoyo.mp3" },
    { challengeId: 22062, correct: false, text: "피곤해요", audioSrc: "/assets/audio/korean/unit_5/kr_pigonhaeyo.mp3" },

    { challengeId: 22063, correct: true, text: "피곤해요", audioSrc: "/assets/audio/korean/unit_5/kr_pigonhaeyo.mp3" },
    { challengeId: 22063, correct: false, text: "아파요", audioSrc: "/assets/audio/korean/unit_5/kr_apayo.mp3" },
    { challengeId: 22063, correct: false, text: "좋아요", audioSrc: "/assets/audio/korean/unit_5/kr_joayo.mp3" },

    // U5-L21022
    
    { challengeId: 22064, correct: false, text: "보고서", audioSrc: "/assets/audio/korean/unit_5/kr_bogoseo.mp3" },
    { challengeId: 22064, correct: true, text: "회의", audioSrc: "/assets/audio/korean/unit_5/kr_hoeui.mp3" },
    { challengeId: 22064, correct: false, text: "상사", audioSrc: "/assets/audio/korean/unit_5/kr_sangsa.mp3" },

    { challengeId: 22065, correct: false, text: "업무", audioSrc: "/assets/audio/korean/unit_5/kr_eommu.mp3" },
    { challengeId: 22065, correct: false, text: "동료", audioSrc: "/assets/audio/korean/unit_5/kr_dongnyo.mp3" },
    { challengeId: 22065, correct: true, text: "보고서", audioSrc: "/assets/audio/korean/unit_5/kr_bogoseo.mp3" },

    { challengeId: 22066, correct: true, text: "동료", audioSrc: "/assets/audio/korean/unit_5/kr_dongnyo.mp3" },
    { challengeId: 22066, correct: false, text: "상사", audioSrc: "/assets/audio/korean/unit_5/kr_sangsa.mp3" },
    { challengeId: 22066, correct: false, text: "부하직원", audioSrc: "/assets/audio/korean/unit_5/kr_buhajigwon.mp3" },

    // U5-L21023
    { challengeId: 22067, correct: false, text: "보증금", audioSrc: "/assets/audio/korean/unit_5/kr_bojeunggeum.mp3" },
    { challengeId: 22067, correct: false, text: "월세", audioSrc: "/assets/audio/korean/unit_5/kr_wolse.mp3" },
    { challengeId: 22067, correct: true, text: "계약", audioSrc: "/assets/audio/korean/unit_5/kr_gyeyak.mp3" },

    { challengeId: 22068, correct: false, text: "관리비", audioSrc: "/assets/audio/korean/unit_5/kr_gwallibi.mp3" },
    { challengeId: 22068, correct: false, text: "전세", audioSrc: "/assets/audio/korean/unit_5/kr_jeonse.mp3" },
    { challengeId: 22068, correct: true, text: "보증금", audioSrc: "/assets/audio/korean/unit_5/kr_bojeunggeum.mp3" },

    { challengeId: 22069, correct: true, text: "월세", audioSrc: "/assets/audio/korean/unit_5/kr_wolse.mp3" },
    { challengeId: 22069, correct: false, text: "계약금", audioSrc: "/assets/audio/korean/unit_5/kr_gyeyakkeum.mp3" },
    { challengeId: 22069, correct: false, text: "부동산", audioSrc: "/assets/audio/korean/unit_5/kr_budongsan.mp3" },

    // U5-L21024
    { challengeId: 22070, correct: false, text: "비행기 표를 예매하다", audioSrc: "/assets/audio/korean/unit_5/kr_bihaenggi-pyoreul-yemaehada.mp3" },
    { challengeId: 22070, correct: false, text: "숙소를 예약하다", audioSrc: "/assets/audio/korean/unit_5/kr_suksoruel-yeyakada.mp3" },
    { challengeId: 22070, correct: true, text: "계획을 세우다", audioSrc: "/assets/audio/korean/unit_5/kr_gyehoegeul-seuda.mp3" },

    { challengeId: 22071, correct: false, text: "여권", audioSrc: "/assets/audio/korean/unit_5/kr_yeogwon.mp3" },
    { challengeId: 22071, correct: true, text: "비행기 표", audioSrc: "/assets/audio/korean/unit_5/kr_bihaenggi-pyo.mp3" },
    { challengeId: 22071, correct: false, text: "짐", audioSrc: "/assets/audio/korean/unit_5/kr_jim.mp3" },

    { challengeId: 22072, correct: true, text: "여권", audioSrc: "/assets/audio/korean/unit_5/kr_yeogwon.mp3" },
    { challengeId: 22072, correct: false, text: "비자", audioSrc: "/assets/audio/korean/unit_5/kr_bija.mp3" },
    { challengeId: 22072, correct: false, text: "여행 가방", audioSrc: "/assets/audio/korean/unit_5/kr_yeohaeng-gabang.mp3" },

    // U5-L21025
    { challengeId: 22073, correct: false, text: "기모노", audioSrc: "/assets/audio/korean/unit_5/kr_kimono.mp3" },
    { challengeId: 22073, correct: false, text: "아오자이", audioSrc: "/assets/audio/korean/unit_5/kr_aozai.mp3" },
    { challengeId: 22073, correct: true, text: "한복", audioSrc: "/assets/audio/korean/unit_5/kr_hanbok.mp3" },
    
    { challengeId: 22074, correct: false, text: "불고기", audioSrc: "/assets/audio/korean/unit_5/kr_bulgogi.mp3" },
    { challengeId: 22074, correct: true, text: "김치", audioSrc: "/assets/audio/korean/unit_5/kr_kimchi.mp3" },
    { challengeId: 22074, correct: false, text: "떡볶이", audioSrc: "/assets/audio/korean/unit_5/kr_tteokbokki.mp3" },
    
    { challengeId: 22075, correct: false, text: "전통", audioSrc: "/assets/audio/korean/unit_5/kr_jeontong.mp3" },
    { challengeId: 22075, correct: true, text: "문화유산", audioSrc: "/assets/audio/korean/unit_5/kr_munhwayusan.mp3" },
    { challengeId: 22075, correct: false, text: "역사", audioSrc: "/assets/audio/korean/unit_5/kr_yeoksa.mp3" },

]as const;