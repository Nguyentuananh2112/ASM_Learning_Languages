// Important Note:
// When separating files, it's crucial to manually manage IDs to ensure they are unique
// across all tables (e.g., a unit ID in the Japanese file
// must not conflict with a unit ID in the Korean file).

// scripts/data/english.ts

export const course = {
    id: 3,
    title: "English",
    imageSrc: "/english.svg",
};

// ============================================================================
// == UNITS (ID Range: 30001-30005)
// ============================================================================
export const units = [
    { id: 30001, courseId: 3, title: "Unit 1: Basic English", description: "Learn greetings, alphabet, and basic phrases", order: 1 },
    { id: 30002, courseId: 3, title: "Unit 2: Daily Conversations", description: "Communicate in everyday situations", order: 2 },
    { id: 30003, courseId: 3, title: "Unit 3: Expanding Vocabulary", description: "Learn about time, weather, and hobbies", order: 3 },
    { id: 30004, courseId: 3, title: "Unit 4: Core Grammar", description: "Master sentence structures and tenses", order: 4 },
    { id: 30005, courseId: 3, title: "Unit 5: Advanced Communication", description: "Intermediate vocabulary and dialogues", order: 5 },
] as const;

// ============================================================================
// == LESSONS (ID Range: 31001-31025)
// ============================================================================
export const lessons = [
    // Unit 1 (ID: 30001)
    { id: 31001, unitId: 30001, order: 1, title: "Greetings and Introductions" },
    { id: 31002, unitId: 30001, order: 2, title: "The English Alphabet" },
    { id: 31003, unitId: 30001, order: 3, title: "Basic Nouns and Pronouns" },
    { id: 31004, unitId: 30001, order: 4, title: "Basic Verbs (To Be, To Have)" },
    { id: 31005, unitId: 30001, order: 5, title: "Numbers 1-10" },
    // Unit 2 (ID: 30002)
    { id: 31006, unitId: 30002, order: 1, title: "Asking and Giving Personal Information" },
    { id: 31007, unitId: 30002, order: 2, title: "Family and Friends" },
    { id: 31008, unitId: 30002, order: 3, title: "Common Objects" },
    { id: 31009, unitId: 30002, order: 4, title: "Shopping and Prices" },
    { id: 31010, unitId: 30002, order: 5, title: "Asking for Directions" },
    // Unit 3 (ID: 30003)
    { id: 31011, unitId: 30003, order: 1, title: "Talking About Time" },
    { id: 31012, unitId: 30003, order: 2, title: "Talking About Weather" },
    { id: 31013, unitId: 30003, order: 3, title: "Talking About Hobbies" },
    { id: 31014, unitId: 30003, order: 4, title: "Ordering at a Restaurant" },
    { id: 31015, unitId: 30003, order: 5, title: "Descriptive Adjectives" },
    // Unit 4 (ID: 30004)
    { id: 31016, unitId: 30004, order: 1, title: "Simple Present Tense" },
    { id: 31017, unitId: 30004, order: 2, title: "Simple Past Tense" },
    { id: 31018, unitId: 30004, order: 3, title: "Simple Future Tense" },
    { id: 31019, unitId: 30004, order: 4, title: "Subject-Verb Agreement" },
    { id: 31020, unitId: 30004, order: 5, title: "Conjunctions (And, But, Or)" },
    // Unit 5 (ID: 30005)
    { id: 31021, unitId: 30005, order: 1, title: "Expressing Emotions and Feelings" },
    { id: 31022, unitId: 30005, order: 2, title: "Workplace Communication" },
    { id: 31023, unitId: 30005, order: 3, title: "Renting and Living Spaces" },
    { id: 31024, unitId: 30005, order: 4, title: "Planning a Trip" },
    { id: 31025, unitId: 30005, order: 5, title: "Cultural Nuances" },
] as const;

// ============================================================================
// == CHALLENGES (ID Range: 32001-32075)
// ============================================================================
export const challenges = [
    // Unit 1, Lesson 31001: Greetings and Introductions
    { id: 32001, lessonId: 31001, type: "ASSIST", order: 1, question: "How do you greet someone formally in English?" },
    { id: 32002, lessonId: 31001, type: "ASSIST", order: 2, question: "What do you say in the morning to greet someone?" },
    { id: 32003, lessonId: 31001, type: "ASSIST", order: 3, question: "What's a common way to express gratitude?" },
    // Unit 1, Lesson 31002: The English Alphabet
    { id: 32004, lessonId: 31002, type: "ASSIST", order: 1, question: "Which letter comes right after 'A'?" },
    { id: 32005, lessonId: 31002, type: "ASSIST", order: 2, question: "Can you identify this letter: 'Z'?" },
    { id: 32006, lessonId: 31002, type: "ASSIST", order: 3, question: "How do you spell 'CAT'?" },
    // Unit 1, Lesson 31003: Basic Nouns and Pronouns
    { id: 32007, lessonId: 31003, type: "SELECT", order: 1, question: 'Select the image that represents "apple".' },
    { id: 32008, lessonId: 31003, type: "SELECT", order: 2, question: 'Which image shows a "dog"?' },
    { id: 32009, lessonId: 31003, type: "ASSIST", order: 3, question: "What's the male third-person singular pronoun?" },
    // Unit 1, Lesson 31004: Basic Verbs (To Be, To Have)
    { id: 32010, lessonId: 31004, type: "SELECT", order: 1, question: 'Which option is the correct form of "to be" for "he/she/it"?' },
    { id: 32011, lessonId: 31004, type: "SELECT", order: 2, question: 'Which option is the correct form of "to have" for "he/she/it"?' },
    { id: 32012, lessonId: 31004, type: "ASSIST", order: 3, question: "How do you say 'I am'?" },
    // Unit 1, Lesson 31005: Numbers 1-10
    { id: 32013, lessonId: 31005, type: "SELECT", order: 1, question: "Choose the image representing the number 3." },
    { id: 32014, lessonId: 31005, type: "SELECT", order: 2, question: "Which image shows the number 7?" },
    { id: 32015, lessonId: 31005, type: "ASSIST", order: 3, question: "What is the word for the number '10'?" },
    // Unit 2, Lesson 31006: Asking and Giving Personal Information
    { id: 32016, lessonId: 31006, type: "ASSIST", order: 1, question: 'What is the standard question to ask someone\'s name?' },
    { id: 32017, lessonId: 31006, type: "ASSIST", order: 2, question: 'How do you introduce your name, starting with "My name..."?' },
    { id: 32018, lessonId: 31006, type: "ASSIST", order: 3, question: "How do you inquire about someone's age?" },
    // Unit 2, Lesson 31007: Family and Friends
    { id: 32019, lessonId: 31007, type: "ASSIST", order: 1, question: 'What is the word for your female parent?' },
    { id: 32020, lessonId: 31007, type: "ASSIST", order: 2, question: 'What is the word for your male parent?' },
    { id: 32021, lessonId: 31007, type: "ASSIST", order: 3, question: "What do you call a female sibling?" },
    // Unit 2, Lesson 31008: Common Objects
    { id: 32022, lessonId: 31008, type: "SELECT", order: 1, question: 'Identify the image of a "car".' },
    { id: 32023, lessonId: 31008, type: "SELECT", order: 2, question: 'Which image represents a "table"?' },
    { id: 32024, lessonId: 31008, type: "ASSIST", order: 3, question: "What do you call a device used for making calls?" },
    // Unit 2, Lesson 31009: Shopping and Prices
    { id: 32025, lessonId: 31009, type: "ASSIST", order: 1, question: 'How do you ask for the price of something?' },
    { id: 32026, lessonId: 31009, type: "ASSIST", order: 2, question: 'What phrase do you use to say you want to purchase an item?' },
    { id: 32027, lessonId: 31009, type: "ASSIST", order: 3, question: '"It’s not expensive" in English?' },
    // Unit 2, Lesson 31010: Asking for Directions
    { id: 32028, lessonId: 31010, type: "ASSIST", order: 1, question: 'How do you ask where a bank is located?' },
    { id: 32029, lessonId: 31010, type: "ASSIST", order: 2, question: 'What instruction means to move towards your left side?' },
    { id: 32030, lessonId: 31010, type: "ASSIST", order: 3, question: '"Go straight without turning" in English.' },
    // Unit 3, Lesson 31011: Talking About Time
    { id: 32031, lessonId: 31011, type: "ASSIST", order: 1, question: 'What question do you ask to know the current time?' },
    { id: 32032, lessonId: 31011, type: "ASSIST", order: 2, question: 'How do you say "It is exactly 5"?' },
    { id: 32033, lessonId: 31011, type: "ASSIST", order: 3, question: "What word refers to the day before today?" },
    // Unit 3, Lesson 31012: Talking About Weather
    { id: 32034, lessonId: 31012, type: "ASSIST", order: 1, question: 'How do you describe clear and bright weather?' },
    { id: 32035, lessonId: 31012, type: "ASSIST", order: 2, question: 'How do you say the weather is "cold"?' },
    { id: 32036, lessonId: 31012, type: "SELECT", order: 3, question: 'Select the image representing "rain".' },
    // Unit 3, Lesson 31013: Talking About Hobbies
    { id: 32037, lessonId: 31013, type: "ASSIST", order: 1, question: 'How do you express a hobby like "playing sports"?' },
    { id: 32038, lessonId: 31013, type: "ASSIST", order: 2, question: 'How do you ask about someone\'s leisure activities?' },
    { id: 32039, lessonId: 31013, type: "ASSIST", order: 3, question: "What's the hobby of preparing food?" },
    // Unit 3, Lesson 31014: Ordering at a Restaurant
    { id: 32040, lessonId: 31014, type: "ASSIST", order: 1, question: 'How do you order a coffee politely at a restaurant?' },
    { id: 32041, lessonId: 31014, type: "ASSIST", order: 2, question: 'What is the term for the paper showing what you owe after a meal?' },
    { id: 32042, lessonId: 31014, type: "ASSIST", order: 3, question: '"This food tastes great!" in one word.' },
    // Unit 3, Lesson 31015: Descriptive Adjectives
    { id: 32043, lessonId: 31015, type: "ASSIST", order: 1, question: 'What adjective describes feeling joyful?' },
    { id: 32044, lessonId: 31015, type: "ASSIST", order: 2, question: 'What adjective describes feeling sorrowful?' },
    { id: 32045, lessonId: 31015, type: "ASSIST", order: 3, question: "An adjective for something recently made or acquired." },
    // Unit 4, Lesson 31016: Simple Present Tense
    { id: 32046, lessonId: 31016, type: "ASSIST", order: 1, question: "Conjugate the verb 'to eat' for 'I' in the simple present." },
    { id: 32047, lessonId: 31016, type: "ASSIST", order: 2, question: "Conjugate the verb 'to go' for 'he/she/it' in the simple present." },
    { id: 32048, lessonId: 31016, type: "ASSIST", order: 3, question: "Form a sentence: 'They' + 'play' + 'sports' (simple present)." },
    // Unit 4, Lesson 31017: Simple Past Tense
    { id: 32049, lessonId: 31017, type: "ASSIST", order: 1, question: "What is the past tense of 'to see'?" },
    { id: 32050, lessonId: 31017, type: "ASSIST", order: 2, question: "What is the past tense of 'to do'?" },
    { id: 32051, lessonId: 31017, type: "ASSIST", order: 3, question: "Form a sentence: 'She' + 'read' (past tense) + 'a book'." },
    // Unit 4, Lesson 31018: Simple Future Tense
    { id: 32052, lessonId: 31018, type: "SELECT", order: 1, question: "Fill in the blank: 'I __ go to the park tomorrow.' (future tense helper verb)" },
    { id: 32053, lessonId: 31018, type: "SELECT", order: 2, question: "Fill in the blank: 'We __ study later.' (future tense helper verb)" },
    { id: 32054, lessonId: 31018, type: "ASSIST", order: 3, question: "Form a sentence: 'He' + 'will' + 'eat' + 'dinner'." },
    // Unit 4, Lesson 31019: Subject-Verb Agreement
    { id: 32055, lessonId: 31019, type: "SELECT", order: 1, question: "Choose the correct verb to agree with the subject: 'She (like/likes) apples.'" },
    { id: 32056, lessonId: 31019, type: "SELECT", order: 2, question: "Choose the correct verb to agree with the subject: 'They (is/are) happy.'" },
    { id: 32057, lessonId: 31019, type: "ASSIST", order: 3, question: "Correct the sentence: 'The dog run fast.'" },
    // Unit 4, Lesson 31020: Conjunctions (And, But, Or)
    { id: 32058, lessonId: 31020, type: "ASSIST", order: 1, question: 'Which conjunction is used to connect similar ideas or add information?' },
    { id: 32059, lessonId: 31020, type: "ASSIST", order: 2, question: 'Which conjunction introduces a contrasting idea?' },
    { id: 32060, lessonId: 31020, type: "ASSIST", order: 3, question: "What conjunction pair means 'one or the other'?" },
    // Unit 5, Lesson 31021: Expressing Emotions and Feelings
    { id: 32061, lessonId: 31021, type: "ASSIST", order: 1, question: 'How do you state that you are feeling "angry"?' },
    { id: 32062, lessonId: 31021, type: "ASSIST", order: 2, question: 'How do you express feeling "excited"?' },
    { id: 32063, lessonId: 31021, type: "ASSIST", order: 3, question: "What adjective describes feeling bewildered or unclear?" },
    // Unit 5, Lesson 31022: Workplace Communication
    { id: 32064, lessonId: 31022, type: "ASSIST", order: 1, question: 'What do you call a person you work with?' },
    { id: 32065, lessonId: 31022, type: "ASSIST", order: 2, question: 'What is the term for a final date by which a task must be completed?' },
    { id: 32066, lessonId: 31022, type: "ASSIST", order: 3, question: "What is a formal talk given to an audience about a topic?" },
    // Unit 5, Lesson 31023: Renting and Living Spaces
    { id: 32067, lessonId: 31023, type: "ASSIST", order: 1, question: 'What is a common type of rented living unit in a larger building?' },
    { id: 32068, lessonId: 31023, type: "ASSIST", order: 2, question: 'Who is the person who rents out property?' },
    { id: 32069, lessonId: 31023, type: "ASSIST", order: 3, question: "What is the general term for services like electricity, water, and gas in a home?" },
    // Unit 5, Lesson 31024: Planning a Trip
    { id: 32070, lessonId: 31024, type: "ASSIST", order: 1, question: 'What is the intended place of arrival for a trip?' },
    { id: 32071, lessonId: 31024, type: "ASSIST", order: 2, question: 'What is the official document needed for international travel?' },
    { id: 32072, lessonId: 31024, type: "ASSIST", order: 3, question: "What's another word for your bags and suitcases when traveling?" },
    // Unit 5, Lesson 31025: Cultural Nuances
    { id: 32073, lessonId: 31025, type: "ASSIST", order: 1, question: 'What are the traditional behaviors and beliefs of a society called?' },
    { id: 32074, lessonId: 31025, type: "ASSIST", order: 2, question: 'What do you call polite ways of behaving in social situations?' },
    { id: 32075, lessonId: 31025, type: "ASSIST", order: 3, question: "What's the term for the customary code of polite behavior in society or among members of a particular profession or group?" },
] as const;

// ============================================================================
// == CHALLENGE OPTIONS
// ============================================================================
export const challengeOptions = [
    // U1-L31001
    { challengeId: 32001, correct: false, text: "Goodbye", audioSrc: "/assets/audio/english/unit_1/en_goodbye.mp3" },
    { challengeId: 32001, correct: true, text: "Hello", audioSrc: "/assets/audio/english/unit_1/en_hello.mp3" }, // Correct answer moved
    { challengeId: 32001, correct: false, text: "Please", audioSrc: "/assets/audio/english/unit_1/en_please.mp3" },

    { challengeId: 32002, correct: false, text: "Good evening", audioSrc: "/assets/audio/english/unit_1/en_good_evening.mp3" },
    { challengeId: 32002, correct: true, text: "Good morning", audioSrc: "/assets/audio/english/unit_1/en_good_morning.mp3" }, // Correct answer moved
    { challengeId: 32002, correct: false, text: "Good night", audioSrc: "/assets/audio/english/unit_1/en_good_night.mp3" },

    { challengeId: 32003, correct: false, text: "You're welcome", audioSrc: "/assets/audio/english/unit_1/en_youre_welcome.mp3" },
    { challengeId: 32003, correct: false, text: "Excuse me", audioSrc: "/assets/audio/english/unit_1/en_excuse_me.mp3" },
    { challengeId: 32003, correct: true, text: "Thank you", audioSrc: "/assets/audio/english/unit_1/en_thank_you.mp3" }, // Correct answer moved

    // U1-L31002
    { challengeId: 32004, correct: false, text: "C", audioSrc: "/assets/audio/english/unit_1/en_c.mp3" },
    { challengeId: 32004, correct: true, text: "B", audioSrc: "/assets/audio/english/unit_1/en_b.mp3" }, // Correct answer moved
    { challengeId: 32004, correct: false, text: "Z", audioSrc: "/assets/audio/english/unit_1/en_z.mp3" },

    { challengeId: 32005, correct: false, text: "Y", audioSrc: "/assets/audio/english/unit_1/en_y.mp3" },
    { challengeId: 32005, correct: false, text: "X", audioSrc: "/assets/audio/english/unit_1/en_x.mp3" },
    { challengeId: 32005, correct: true, text: "Z", audioSrc: "/assets/audio/english/unit_1/en_z.mp3" }, // Correct answer moved

    { challengeId: 32006, correct: false, text: "K-A-T", audioSrc: "/assets/audio/english/unit_1/en_kat_spell.mp3" },
    { challengeId: 32006, correct: true, text: "C-A-T", audioSrc: "/assets/audio/english/unit_1/en_cat_spell.mp3" }, // Correct answer moved
    { challengeId: 32006, correct: false, text: "C-T-A", audioSrc: "/assets/audio/english/unit_1/en_cta_spell.mp3" },

    // U1-L31003
    { challengeId: 32007, imageSrc: "/assets/images/english/unit_1/en_banana.svg", correct: false, text: "A", },
    { challengeId: 32007, imageSrc: "/assets/images/english/unit_1/en_apple.svg", correct: true, text: "B", }, // Correct answer moved
    { challengeId: 32007, imageSrc: "/assets/images/english/unit_1/en_orange.svg", correct: false, text: "C", },

    { challengeId: 32008, imageSrc: "/assets/images/english/unit_1/en_cat.svg", correct: false, text: "A", },
    { challengeId: 32008, imageSrc: "/assets/images/english/unit_1/en_bird.svg", correct: false, text: "B", },
    { challengeId: 32008, imageSrc: "/assets/images/english/unit_1/en_dog.svg", correct: true, text: "C", }, // Correct answer moved

    { challengeId: 32009, correct: false, text: "she", audioSrc: "/assets/audio/english/unit_1/en_she.mp3" },
    { challengeId: 32009, correct: false, text: "they", audioSrc: "/assets/audio/english/unit_1/en_they.mp3" },
    { challengeId: 32009, correct: true, text: "he", audioSrc: "/assets/audio/english/unit_1/en_he.mp3" }, // Correct answer moved

    // U1-L31004
    { challengeId: 32010, correct: false, text: "are", audioSrc: "/assets/audio/english/unit_1/en_are.mp3" },
    { challengeId: 32010, correct: true, text: "is", audioSrc: "/assets/audio/english/unit_1/en_is.mp3" }, // Correct answer moved
    { challengeId: 32010, correct: false, text: "am", audioSrc: "/assets/audio/english/unit_1/en_am.mp3" },

    { challengeId: 32011, correct: false, text: "have", audioSrc: "/assets/audio/english/unit_1/en_have.mp3" },
    { challengeId: 32011, correct: false, text: "had", audioSrc: "/assets/audio/english/unit_1/en_had.mp3" },
    { challengeId: 32011, correct: true, text: "has", audioSrc: "/assets/audio/english/unit_1/en_has.mp3" }, // Correct answer moved

    { challengeId: 32012, correct: false, text: "You are", audioSrc: "/assets/audio/english/unit_1/en_you_are.mp3" },
    { challengeId: 32012, correct: true, text: "I am", audioSrc: "/assets/audio/english/unit_1/en_i_am.mp3" }, // Correct answer moved
    { challengeId: 32012, correct: false, text: "He is", audioSrc: "/assets/audio/english/unit_1/en_he_is.mp3" },

    // U1-L31005
    { challengeId: 32013, imageSrc: "/assets/images/english/unit_1/en_two.svg", correct: false, text: "A",  },
    { challengeId: 32013, imageSrc: "/assets/images/english/unit_1/en_three.svg", correct: true, text: "B",  }, // Correct answer moved
    { challengeId: 32013, imageSrc: "/assets/images/english/unit_1/en_four.svg", correct: false, text: "C",  },

    { challengeId: 32014, imageSrc: "/assets/images/english/unit_1/en_six.svg", correct: false, text: "A",  },
    { challengeId: 32014, imageSrc: "/assets/images/english/unit_1/en_eight.svg", correct: false, text: "B", },
    { challengeId: 32014, imageSrc: "/assets/images/english/unit_1/en_seven.svg", correct: true, text: "C", }, // Correct answer moved

    { challengeId: 32015, correct: false, text: "nine", audioSrc: "/assets/audio/english/unit_1/en_nine.mp3" },
    { challengeId: 32015, correct: true, text: "ten", audioSrc: "/assets/audio/english/unit_1/en_ten.mp3" }, // Correct answer moved
    { challengeId: 32015, correct: false, text: "eleven", audioSrc: "/assets/audio/english/unit_1/en_eleven.mp3" },

    // U2-L31006
    { challengeId: 32016, correct: false, text: "How are you?", audioSrc: "/assets/audio/english/unit_2/en_how_are_you.mp3" },
    { challengeId: 32016, correct: true, text: "What is your name?", audioSrc: "/assets/audio/english/unit_2/en_what_is_your_name.mp3" }, // Correct answer moved
    { challengeId: 32016, correct: false, text: "Where are you from?", audioSrc: "/assets/audio/english/unit_2/en_where_are_you_from.mp3" },

    { challengeId: 32017, correct: false, text: "I am...", audioSrc: "/assets/audio/english/unit_2/en_i_am.mp3" },
    { challengeId: 32017, correct: false, text: "Nice to meet you", audioSrc: "/assets/audio/english/unit_2/en_nice_to_meet_you.mp3" },
    { challengeId: 32017, correct: true, text: "My name is...", audioSrc: "/assets/audio/english/unit_2/en_my_name_is.mp3" }, // Correct answer moved

    { challengeId: 32018, correct: false, text: "What do you do?", audioSrc: "/assets/audio/english/unit_2/en_what_do_you_do.mp3" },
    { challengeId: 32018, correct: true, text: "How old are you?", audioSrc: "/assets/audio/english/unit_2/en_how_old_are_you.mp3" }, // Correct answer moved
    { challengeId: 32018, correct: false, text: "Are you busy?", audioSrc: "/assets/audio/english/unit_2/en_are_you_busy.mp3" },

    // U2-L31007
    { challengeId: 32019, correct: false, text: "father", audioSrc: "/assets/audio/english/unit_2/en_father.mp3" },
    { challengeId: 32019, correct: true, text: "mother", audioSrc: "/assets/audio/english/unit_2/en_mother.mp3" }, // Correct answer moved
    { challengeId: 32019, correct: false, text: "brother", audioSrc: "/assets/audio/english/unit_2/en_brother.mp3" },

    { challengeId: 32020, correct: false, text: "sister", audioSrc: "/assets/audio/english/unit_2/en_sister.mp3" },
    { challengeId: 32020, correct: true, text: "father", audioSrc: "/assets/audio/english/unit_2/en_father.mp3" }, // Correct answer moved
    { challengeId: 32020, correct: false, text: "child", audioSrc: "/assets/audio/english/unit_2/en_child.mp3" },

    { challengeId: 32021, correct: false, text: "aunt", audioSrc: "/assets/audio/english/unit_2/en_aunt.mp3" },
    { challengeId: 32021, correct: false, text: "cousin", audioSrc: "/assets/audio/english/unit_2/en_cousin.mp3" },
    { challengeId: 32021, correct: true, text: "sister", audioSrc: "/assets/audio/english/unit_2/en_sister.mp3" }, // Correct answer moved

    // U2-L31008
    { challengeId: 32022, imageSrc: "/assets/images/english/unit_2/en_bike.svg", correct: false, text: "A",  },
    { challengeId: 32022, imageSrc: "/assets/images/english/unit_2/en_car.svg", correct: true, text: "B",  }, // Correct answer moved
    { challengeId: 32022, imageSrc: "/assets/images/english/unit_2/en_bus.svg", correct: false, text: "C",  },

    { challengeId: 32023, imageSrc: "/assets/images/english/unit_2/en_chair.svg", correct: false, text: "A",  },
    { challengeId: 32023, imageSrc: "/assets/images/english/unit_2/en_bed.svg", correct: false, text: "B",  },
    { challengeId: 32023, imageSrc: "/assets/images/english/unit_2/en_table.svg", correct: true, text: "C",  }, // Correct answer moved

    { challengeId: 32024, correct: false, text: "computer", audioSrc: "/assets/audio/english/unit_2/en_computer.mp3" },
    { challengeId: 32024, correct: true, text: "phone", audioSrc: "/assets/audio/english/unit_2/en_phone.mp3" }, // Correct answer moved
    { challengeId: 32024, correct: false, text: "television", audioSrc: "/assets/audio/english/unit_2/en_television.mp3" },

    // U2-L31009
    { challengeId: 32025, correct: false, text: "What is this?", audioSrc: "/assets/audio/english/unit_2/en_what_is_this.mp3" },
    { challengeId: 32025, correct: true, text: "How much is it?", audioSrc: "/assets/audio/english/unit_2/en_how_much_is_it.mp3" }, // Correct answer moved
    { challengeId: 32025, correct: false, text: "Can I help you?", audioSrc: "/assets/audio/english/unit_2/en_can_i_help_you.mp3" },

    { challengeId: 32026, correct: false, text: "I like this", audioSrc: "/assets/audio/english/unit_2/en_i_like_this.mp3" },
    { challengeId: 32026, correct: false, text: "This is good", audioSrc: "/assets/audio/english/unit_2/en_this_is_good.mp3" },
    { challengeId: 32026, correct: true, text: "I want to buy this", audioSrc: "/assets/audio/english/unit_2/en_i_want_to_buy_this.mp3" }, // Correct answer moved

    { challengeId: 32027, correct: false, text: "It's expensive", audioSrc: "/assets/audio/english/unit_2/en_its_expensive.mp3" },
    { challengeId: 32027, correct: false, text: "It's nice", audioSrc: "/assets/audio/english/unit_2/en_its_nice.mp3" },
    { challengeId: 32027, correct: true, text: "It's cheap", audioSrc: "/assets/audio/english/unit_2/en_its_cheap.mp3" }, // Correct answer moved

    // U2-L31010
    { challengeId: 32028, correct: false, text: "How do I get there?", audioSrc: "/assets/audio/english/unit_2/en_how_do_i_get_there.mp3" },
    { challengeId: 32028, correct: true, text: "Where is the bank?", audioSrc: "/assets/audio/english/unit_2/en_where_is_the_bank.mp3" }, // Correct answer moved
    { challengeId: 32028, correct: false, text: "Is it far?", audioSrc: "/assets/audio/english/unit_2/en_is_it_far.mp3" },

    { challengeId: 32029, correct: false, text: "Turn right", audioSrc: "/assets/audio/english/unit_2/en_turn_right.mp3" },
    { challengeId: 32029, correct: true, text: "Turn left", audioSrc: "/assets/audio/english/unit_2/en_turn_left.mp3" }, // Correct answer moved
    { challengeId: 32029, correct: false, text: "Go straight", audioSrc: "/assets/audio/english/unit_2/en_go_straight.mp3" },

    { challengeId: 32030, correct: false, text: "Around the corner", audioSrc: "/assets/audio/english/unit_2/en_around_the_corner.mp3" },
    { challengeId: 32030, correct: true, text: "Go straight ahead", audioSrc: "/assets/audio/english/unit_2/en_straight_ahead.mp3" }, // Correct answer moved
    { challengeId: 32030, correct: false, text: "On the right", audioSrc: "/assets/audio/english/unit_2/en_on_the_right.mp3" },

    // U3-L31011
    { challengeId: 32031, correct: false, text: "When is your birthday?", audioSrc: "/assets/audio/english/unit_3/en_when_is_your_birthday.mp3" },
    { challengeId: 32031, correct: false, text: "What day is it?", audioSrc: "/assets/audio/english/unit_3/en_what_day_is_it.mp3" },
    { challengeId: 32031, correct: true, text: "What time is it?", audioSrc: "/assets/audio/english/unit_3/en_what_time_is_it.mp3" }, // Correct answer moved

    { challengeId: 32032, correct: false, text: "It's 5:30", audioSrc: "/assets/audio/english/unit_3/en_its_5_30.mp3" },
    { challengeId: 32032, correct: true, text: "It's 5 o'clock", audioSrc: "/assets/audio/english/unit_3/en_its_5_oclock.mp3" }, // Correct answer moved
    { challengeId: 32032, correct: false, text: "It's 5 minutes", audioSrc: "/assets/audio/english/unit_3/en_its_5_minutes.mp3" },

    { challengeId: 32033, correct: false, text: "today", audioSrc: "/assets/audio/english/unit_3/en_today.mp3" },
    { challengeId: 32033, correct: false, text: "tomorrow", audioSrc: "/assets/audio/english/unit_3/en_tomorrow.mp3" },
    { challengeId: 32033, correct: true, text: "yesterday", audioSrc: "/assets/audio/english/unit_3/en_yesterday.mp3" }, // Correct answer moved

    // U3-L31012
    { challengeId: 32034, correct: false, text: "It's cloudy", audioSrc: "/assets/audio/english/unit_3/en_its_cloudy.mp3" },
    { challengeId: 32034, correct: true, text: "It's sunny", audioSrc: "/assets/audio/english/unit_3/en_its_sunny.mp3" }, // Correct answer moved
    { challengeId: 32034, correct: false, text: "It's rainy", audioSrc: "/assets/audio/english/unit_3/en_its_rainy.mp3" },

    { challengeId: 32035, correct: false, text: "It's hot", audioSrc: "/assets/audio/english/unit_3/en_its_hot.mp3" },
    { challengeId: 32035, correct: false, text: "It's warm", audioSrc: "/assets/audio/english/unit_3/en_its_warm.mp3" },
    { challengeId: 32035, correct: true, text: "It's cold", audioSrc: "/assets/audio/english/unit_3/en_its_cold.mp3" }, // Correct answer moved

    { challengeId: 32036, imageSrc: "/assets/images/english/unit_3/en_sun.svg", correct: false, text: "A", },
    { challengeId: 32036, imageSrc: "/assets/images/english/unit_3/en_cloud.svg", correct: false, text: "B", },
    { challengeId: 32036, imageSrc: "/assets/images/english/unit_3/en_rain.svg", correct: true, text: "C", }, // Correct answer moved

    // U3-L31013
    { challengeId: 32037, correct: false, text: "reading books", audioSrc: "/assets/audio/english/unit_3/en_reading_books.mp3" },
    { challengeId: 32037, correct: false, text: "watching movies", audioSrc: "/assets/audio/english/unit_3/en_watching_movies.mp3" },
    { challengeId: 32037, correct: true, text: "playing sports", audioSrc: "/assets/audio/english/unit_3/en_playing_sports.mp3" }, // Correct answer moved

    { challengeId: 32038, correct: false, text: "What do you like?", audioSrc: "/assets/audio/english/unit_3/en_what_do_you_like.mp3" },
    { challengeId: 32038, correct: true, text: "What are your hobbies?", audioSrc: "/assets/audio/english/unit_3/en_what_are_your_hobbies.mp3" }, // Correct answer moved
    { challengeId: 32038, correct: false, text: "What is your job?", audioSrc: "/assets/audio/english/unit_3/en_what_is_your_job.mp3" },

    { challengeId: 32039, correct: false, text: "drawing", audioSrc: "/assets/audio/english/unit_3/en_drawing.mp3" },
    { challengeId: 32039, correct: true, text: "cooking", audioSrc: "/assets/audio/english/unit_3/en_cooking.mp3" }, // Correct answer moved
    { challengeId: 32039, correct: false, text: "singing", audioSrc: "/assets/audio/english/unit_3/en_singing.mp3" },

    // U3-L31014
    { challengeId: 32040, correct: false, text: "Can I have water?", audioSrc: "/assets/audio/english/unit_3/en_can_i_have_water.mp3" },
    { challengeId: 32040, correct: true, text: "I would like a coffee", audioSrc: "/assets/audio/english/unit_3/en_i_would_like_a_coffee.mp3" }, // Correct answer moved
    { challengeId: 32040, correct: false, text: "I want a soda", audioSrc: "/assets/audio/english/unit_3/en_i_want_a_soda.mp3" },

    { challengeId: 32041, correct: false, text: "menu", audioSrc: "/assets/audio/english/unit_3/en_menu.mp3" },
    { challengeId: 32041, correct: false, text: "receipt", audioSrc: "/assets/audio/english/unit_3/en_receipt.mp3" },
    { challengeId: 32041, correct: true, text: "bill", audioSrc: "/assets/audio/english/unit_3/en_bill.mp3" }, // Correct answer moved

    { challengeId: 32042, correct: false, text: "bad", audioSrc: "/assets/audio/english/unit_3/en_bad.mp3" },
    { challengeId: 32042, correct: false, text: "spicy", audioSrc: "/assets/audio/english/unit_3/en_spicy.mp3" },
    { challengeId: 32042, correct: true, text: "delicious", audioSrc: "/assets/audio/english/unit_3/en_delicious.mp3" }, // Correct answer moved

    // U3-L31015
    { challengeId: 32043, correct: false, text: "angry", audioSrc: "/assets/audio/english/unit_3/en_angry.mp3" },
    { challengeId: 32043, correct: true, text: "happy", audioSrc: "/assets/audio/english/unit_3/en_happy.mp3" }, // Correct answer moved
    { challengeId: 32043, correct: false, text: "tired", audioSrc: "/assets/audio/english/unit_3/en_tired.mp3" },

    { challengeId: 32044, correct: false, text: "excited", audioSrc: "/assets/audio/english/unit_3/en_excited.mp3" },
    { challengeId: 32044, correct: true, text: "sad", audioSrc: "/assets/audio/english/unit_3/en_sad.mp3" }, // Correct answer moved
    { challengeId: 32044, correct: false, text: "bored", audioSrc: "/assets/audio/english/unit_3/en_bored.mp3" },

    { challengeId: 32045, correct: false, text: "old", audioSrc: "/assets/audio/english/unit_3/en_old.mp3" },
    { challengeId: 32045, correct: false, text: "big", audioSrc: "/assets/audio/english/unit_3/en_big.mp3" },
    { challengeId: 32045, correct: true, text: "new", audioSrc: "/assets/audio/english/unit_3/en_new.mp3" }, // Correct answer moved

    // U4-L31016
    { challengeId: 32046, correct: false, text: "eats", audioSrc: "/assets/audio/english/unit_4/en_eats.mp3" },
    { challengeId: 32046, correct: true, text: "eat", audioSrc: "/assets/audio/english/unit_4/en_eat.mp3" }, // Correct answer moved
    { challengeId: 32046, correct: false, text: "ate", audioSrc: "/assets/audio/english/unit_4/en_ate.mp3" },

    { challengeId: 32047, correct: false, text: "go", audioSrc: "/assets/audio/english/unit_4/en_go.mp3" },
    { challengeId: 32047, correct: true, text: "goes", audioSrc: "/assets/audio/english/unit_4/en_goes.mp3" }, // Correct answer moved
    { challengeId: 32047, correct: false, text: "went", audioSrc: "/assets/audio/english/unit_4/en_went.mp3" },

    { challengeId: 32048, correct: false, text: "They plays sports", audioSrc: "/assets/audio/english/unit_4/en_they_plays_sports.mp3" },
    { challengeId: 32048, correct: true, text: "They play sports", audioSrc: "/assets/audio/english/unit_4/en_they_play_sports.mp3" }, // Correct answer moved
    { challengeId: 32048, correct: false, text: "They played sports", audioSrc: "/assets/audio/english/unit_4/en_they_played_sports.mp3" },

    // U4-L31017
    { challengeId: 32049, correct: false, text: "seen", audioSrc: "/assets/audio/english/unit_4/en_seen.mp3" },
    { challengeId: 32049, correct: false, text: "see", audioSrc: "/assets/audio/english/unit_4/en_see.mp3" },
    { challengeId: 32049, correct: true, text: "saw", audioSrc: "/assets/audio/english/unit_4/en_saw.mp3" }, // Correct answer moved

    { challengeId: 32050, correct: false, text: "done", audioSrc: "/assets/audio/english/unit_4/en_done.mp3" },
    { challengeId: 32050, correct: true, text: "did", audioSrc: "/assets/audio/english/unit_4/en_did.mp3" }, // Correct answer moved
    { challengeId: 32050, correct: false, text: "do", audioSrc: "/assets/audio/english/unit_4/en_do.mp3" },

    { challengeId: 32051, correct: false, text: "She reads a book", audioSrc: "/assets/audio/english/unit_4/en_she_reads_a_book.mp3" },
    { challengeId: 32051, correct: true, text: "She read a book", audioSrc: "/assets/audio/english/unit_4/en_she_read_a_book.mp3" }, // Correct answer moved
    { challengeId: 32051, correct: false, text: "She will read a book", audioSrc: "/assets/audio/english/unit_4/en_she_will_read_a_book.mp3" },

    // U4-L31018
    { challengeId: 32052, correct: false, text: "am", audioSrc: "/assets/audio/english/unit_4/en_am.mp3" },
    { challengeId: 32052, correct: true, text: "will", audioSrc: "/assets/audio/english/unit_4/en_will.mp3" }, // Correct answer moved
    { challengeId: 32052, correct: false, text: "was", audioSrc: "/assets/audio/english/unit_4/en_was.mp3" },

    { challengeId: 32053, correct: false, text: "are", audioSrc: "/assets/audio/english/unit_4/en_are.mp3" },
    { challengeId: 32053, correct: true, text: "will", audioSrc: "/assets/audio/english/unit_4/en_will.mp3" }, // Correct answer moved
    { challengeId: 32053, correct: false, text: "were", audioSrc: "/assets/audio/english/unit_4/en_were.mp3" },

    { challengeId: 32054, correct: false, text: "He eats dinner", audioSrc: "/assets/audio/english/unit_4/en_he_eats_dinner.mp3" },
    { challengeId: 32054, correct: true, text: "He will eat dinner", audioSrc: "/assets/audio/english/unit_4/en_he_will_eat_dinner.mp3" }, // Correct answer moved
    { challengeId: 32054, correct: false, text: "He ate dinner", audioSrc: "/assets/audio/english/unit_4/en_he_ate_dinner.mp3" },

    // U4-L31019
    { challengeId: 32055, correct: false, text: "like", audioSrc: "/assets/audio/english/unit_4/en_like.mp3" },
    { challengeId: 32055, correct: true, text: "likes", audioSrc: "/assets/audio/english/unit_4/en_likes.mp3" }, // Correct answer moved
    { challengeId: 32055, correct: false, text: "liking", audioSrc: "/assets/audio/english/unit_4/en_liking.mp3" },

    { challengeId: 32056, correct: false, text: "is", audioSrc: "/assets/audio/english/unit_4/en_is.mp3" },
    { challengeId: 32056, correct: false, text: "am", audioSrc: "/assets/audio/english/unit_4/en_am.mp3" },
    { challengeId: 32056, correct: true, text: "are", audioSrc: "/assets/audio/english/unit_4/en_are.mp3" }, // Correct answer moved

    { challengeId: 32057, correct: false, text: "The dog run fast", audioSrc: "/assets/audio/english/unit_4/en_the_dog_run_fast.mp3" },
    { challengeId: 32057, correct: true, text: "The dog runs fast", audioSrc: "/assets/audio/english/unit_4/en_the_dog_runs_fast.mp3" }, // Correct answer moved
    { challengeId: 32057, correct: false, text: "The dog running fast", audioSrc: "/assets/audio/english/unit_4/en_the_dog_running_fast.mp3" },

    // U4-L31020
    { challengeId: 32058, correct: false, text: "but", audioSrc: "/assets/audio/english/unit_4/en_but.mp3" },
    { challengeId: 32058, correct: true, text: "and", audioSrc: "/assets/audio/english/unit_4/en_and.mp3" }, // Correct answer moved
    { challengeId: 32058, correct: false, text: "or", audioSrc: "/assets/audio/english/unit_4/en_or.mp3" },

    { challengeId: 32059, correct: true, text: "but", audioSrc: "/assets/audio/english/unit_4/en_but.mp3" },
    { challengeId: 32059, correct: false, text: "so", audioSrc: "/assets/audio/english/unit_4/en_so.mp3" },
    { challengeId: 32059, correct: false, text: "because", audioSrc: "/assets/audio/english/unit_4/en_because.mp3" },

    { challengeId: 32060, correct: false, text: "neither...nor", audioSrc: "/assets/audio/english/unit_4/en_neither_nor.mp3" },
    { challengeId: 32060, correct: false, text: "not only...but also", audioSrc: "/assets/audio/english/unit_4/en_not_only_but_also.mp3" },
    { challengeId: 32060, correct: true, text: "either...or", audioSrc: "/assets/audio/english/unit_4/en_either_or.mp3" }, // Correct answer moved

    // U5-L31021
    { challengeId: 32061, correct: false, text: "I am happy", audioSrc: "/assets/audio/english/unit_5/en_i_am_happy.mp3" },
    { challengeId: 32061, correct: true, text: "I am angry", audioSrc: "/assets/audio/english/unit_5/en_i_am_angry.mp3" }, // Correct answer moved
    { challengeId: 32061, correct: false, text: "I am sad", audioSrc: "/assets/audio/english/unit_5/en_i_am_sad.mp3" },

    { challengeId: 32062, correct: false, text: "I am bored", audioSrc: "/assets/audio/english/unit_5/en_i_am_bored.mp3" },
    { challengeId: 32062, correct: false, text: "I am tired", audioSrc: "/assets/audio/english/unit_5/en_i_am_tired.mp3" },
    { challengeId: 32062, correct: true, text: "I am excited", audioSrc: "/assets/audio/english/unit_5/en_i_am_excited.mp3" }, // Correct answer moved

    { challengeId: 32063, correct: false, text: "surprised", audioSrc: "/assets/audio/english/unit_5/en_surprised.mp3" },
    { challengeId: 32063, correct: true, text: "confused", audioSrc: "/assets/audio/english/unit_5/en_confused.mp3" }, // Correct answer moved
    { challengeId: 32063, correct: false, text: "disappointed", audioSrc: "/assets/audio/english/unit_5/en_disappointed.mp3" },

    // U5-L31022
    { challengeId: 32064, correct: false, text: "boss", audioSrc: "/assets/audio/english/unit_5/en_boss.mp3" },
    { challengeId: 32064, correct: true, text: "colleague", audioSrc: "/assets/audio/english/unit_5/en_colleague.mp3" }, // Correct answer moved
    { challengeId: 32064, correct: false, text: "employee", audioSrc: "/assets/audio/english/unit_5/en_employee.mp3" },

    { challengeId: 32065, correct: false, text: "meeting", audioSrc: "/assets/audio/english/unit_5/en_meeting.mp3" },
    { challengeId: 32065, correct: true, text: "deadline", audioSrc: "/assets/audio/english/unit_5/en_deadline.mp3" }, // Correct answer moved
    { challengeId: 32065, correct: false, text: "report", audioSrc: "/assets/audio/english/unit_5/en_report.mp3" },

    { challengeId: 32066, correct: false, text: "project", audioSrc: "/assets/audio/english/unit_5/en_project.mp3" },
    { challengeId: 32066, correct: true, text: "presentation", audioSrc: "/assets/audio/english/unit_5/en_presentation.mp3" }, // Correct answer moved
    { challengeId: 32066, correct: false, text: "task", audioSrc: "/assets/audio/english/unit_5/en_task.mp3" },

    // U5-L31023
    { challengeId: 32067, correct: false, text: "house", audioSrc: "/assets/audio/english/unit_5/en_house.mp3" },
    { challengeId: 32067, correct: true, text: "apartment", audioSrc: "/assets/audio/english/unit_5/en_apartment.mp3" }, // Correct answer moved
    { challengeId: 32067, correct: false, text: "room", audioSrc: "/assets/audio/english/unit_5/en_room.mp3" },

    { challengeId: 32068, correct: false, text: "tenant", audioSrc: "/assets/audio/english/unit_5/en_tenant.mp3" },
    { challengeId: 32068, correct: true, text: "landlord", audioSrc: "/assets/audio/english/unit_5/en_landlord.mp3" }, // Correct answer moved
    { challengeId: 32068, correct: false, text: "agent", audioSrc: "/assets/audio/english/unit_5/en_agent.mp3" },

    { challengeId: 32069, correct: false, text: "rent", audioSrc: "/assets/audio/english/unit_5/en_rent.mp3" },
    { challengeId: 32069, correct: false, text: "deposit", audioSrc: "/assets/audio/english/unit_5/en_deposit.mp3" },
    { challengeId: 32069, correct: true, text: "utilities", audioSrc: "/assets/audio/english/unit_5/en_utilities.mp3" }, // Correct answer moved

    // U5-L31024
    { challengeId: 32070, correct: false, text: "journey", audioSrc: "/assets/audio/english/unit_5/en_journey.mp3" },
    { challengeId: 32070, correct: true, text: "destination", audioSrc: "/assets/audio/english/unit_5/en_destination.mp3" }, // Correct answer moved
    { challengeId: 32070, correct: false, text: "travel", audioSrc: "/assets/audio/english/unit_5/en_travel.mp3" },

    { challengeId: 32071, correct: false, text: "visa", audioSrc: "/assets/audio/english/unit_5/en_visa.mp3" },
    { challengeId: 32071, correct: true, text: "passport", audioSrc: "/assets/audio/english/unit_5/en_passport.mp3" }, // Correct answer moved
    { challengeId: 32071, correct: false, text: "ticket", audioSrc: "/assets/audio/english/unit_5/en_ticket.mp3" },

    { challengeId: 32072, correct: false, text: "bag", audioSrc: "/assets/audio/english/unit_5/en_bag.mp3" },
    { challengeId: 32072, correct: true, text: "luggage", audioSrc: "/assets/audio/english/unit_5/en_luggage.mp3" }, // Correct answer moved
    { challengeId: 32072, correct: false, text: "backpack", audioSrc: "/assets/audio/english/unit_5/en_backpack.mp3" },

    // U5-L31025
    { challengeId: 32073, correct: false, text: "traditions", audioSrc: "/assets/audio/english/unit_5/en_traditions.mp3" },
    { challengeId: 32073, correct: true, text: "customs", audioSrc: "/assets/audio/english/unit_5/en_customs.mp3" }, // Correct answer moved
    { challengeId: 32073, correct: false, text: "beliefs", audioSrc: "/assets/audio/english/unit_5/en_beliefs.mp3" },

    { challengeId: 32074, correct: false, text: "habits", audioSrc: "/assets/audio/english/unit_5/en_habits.mp3" },
    { challengeId: 32074, correct: true, text: "manners", audioSrc: "/assets/audio/english/unit_5/en_manners.mp3" }, // Correct answer moved
    { challengeId: 32074, correct: false, text: "rules", audioSrc: "/assets/audio/english/unit_5/en_rules.mp3" },

    { challengeId: 32075, correct: false, text: "behavior", audioSrc: "/assets/audio/english/unit_5/en_behavior.mp3" },
    { challengeId: 32075, correct: true, text: "etiquette", audioSrc: "/assets/audio/english/unit_5/en_etiquette.mp3" }, // Correct answer moved
    { challengeId: 32075, correct: false, text: "protocol", audioSrc: "/assets/audio/english/unit_5/en_protocol.mp3" },
] as const;