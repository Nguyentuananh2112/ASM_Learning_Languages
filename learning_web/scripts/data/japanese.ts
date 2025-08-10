export const course = {
    id: 1,
    title: "Japanese",
    imageSrc: "/jp.svg",
};

// Japanese Units: 10001 - 10005
export const units = [
    { id: 10001, courseId: 1, title: "Unit 1", description: "Learn the basic of Japanese", order: 1 },
    { id: 10002, courseId: 1, title: "Unit 2", description: "Basic Conversations in Japanese", order: 2 },
    { id: 10003, courseId: 1, title: "Unit 3", description: "Advanced topics for intermediate learners", order: 3 },
    { id: 10004, courseId: 1, title: "Unit 4", description: "Advanced Topics for Intermediate and Advanced Learners", order: 4 },
    { id: 10005, courseId: 1, title: "Unit 5", description: "Subtle and Complex Topics for Advanced Learners", order: 5 },
] as const;

// Japanese Lessons: 11001 - 11025
export const lessons = [
    // Unit 10001
    { id: 11001, unitId: 10001, title: "Nouns", order: 1 },
    { id: 11002, unitId: 10001, title: "Verbs", order: 2 },
    { id: 11003, unitId: 10001, title: "Nouns", order: 3 },
    { id: 11004, unitId: 10001, title: "Verbs", order: 4 },
    { id: 11005, unitId: 10001, title: "Numbers", order: 5 },
    // Unit 10002
    { id: 11006, unitId: 10002, title: "Greetings", order: 1 },
    { id: 11007, unitId: 10002, title: "Self Introduction", order: 2 },
    { id: 11008, unitId: 10002, title: "Daily Conversations", order: 3 },
    { id: 11009, unitId: 10002, title: "Asking Questions", order: 4 },
    { id: 11010, unitId: 10002, title: "Family Members", order: 5 },
    // Unit 10003
    { id: 11011, unitId: 10003, title: "Costume", order: 1 },
    { id: 11012, unitId: 10003, title: "Animals", order: 2 },
    { id: 11013, unitId: 10003, title: "City & Countryside", order: 3 },
    { id: 11014, unitId: 10003, title: "Sports", order: 4 },
    { id: 11015, unitId: 10003, title: "Movies", order: 5 },
    // Unit 10004
    { id: 11016, unitId: 10004, title: "Household Items", order: 1 },
    { id: 11017, unitId: 10004, title: "Transportation", order: 2 },
    { id: 11018, unitId: 10004, title: "Common Jobs", order: 3 },
    { id: 11019, unitId: 10004, title: "Daily Activities", order: 4 },
    { id: 11020, unitId: 10004, title: "School Supplies", order: 5 },
    // Unit 10005
    { id: 11021, unitId: 10005, title: "Hobbies & Habits", order: 1 },
    { id: 11022, unitId: 10005, title: "Emotions & Personality", order: 2 },
    { id: 11023, unitId: 10005, title: "Shopping & Services", order: 3 },
    { id: 11024, unitId: 10005, title: "Health & Body", order: 4 },
    { id: 11025, unitId: 10005, title: "Technology & Communication", order: 5 },
] as const;

// Japanese Challenges: 12001 - 12079
export const challenges = [
    // Unit 1 Lesson 1
    { id: 12001, lessonId: 11001, type: "SELECT", order: 1, question: 'Which one of these is the "The man" (Sono otoko) ?' },
    { id: 12002, lessonId: 11001, type: "ASSIST", order: 2, question: "The Man (Sono otoko)"  },
    { id: 12003, lessonId: 11001, type: "SELECT", order: 3, question: 'Which one of these is the "The robot" (Robotto) ?' },
    // Unit 1 Lesson 2
    { id: 12004, lessonId: 11002, type: "SELECT", order: 1, question: 'Which one of these is "Apple" (Ringo)?' },
    { id: 12005, lessonId: 11002, type: "ASSIST", order: 2, question: "Banana (Banana)" },
    { id: 12006, lessonId: 11002, type: "SELECT", order: 3, question: 'Which one of these is "Orange" (Orenji)?' },
    // Unit 1 Lesson 3
    { id: 12007, lessonId: 11003, type: "SELECT", order: 1, question: 'Which one of these is "Water" (Mizu)?' },
    { id: 12008, lessonId: 11003, type: "ASSIST", order: 2, question: "Tea (Ocha)" },
    { id: 12009, lessonId: 11003, type: "SELECT", order: 3, question: 'Which one of these is "Coffee" (Koohii)?' },
    // Unit 1 Lesson 4
    { id: 12010, lessonId: 11004, type: "SELECT", order: 1, question: 'Which one of these is "Red" (Aka)?' },
    { id: 12011, lessonId: 11004, type: "ASSIST", order: 2, question: "Blue (あお, Ao)" },
    { id: 12012, lessonId: 11004, type: "SELECT", order: 3, question: 'Which one of these is "Yellow" (Kiiro)?' },
    // Unit 1 Lesson 5
    { id: 12013, lessonId: 11005, type: "SELECT", order: 1, question: 'Select the number "One" (Ichi)' },
    { id: 12014, lessonId: 11005, type: "ASSIST", order: 2, question: "Two (Ni)" },
    { id: 12015, lessonId: 11005, type: "SELECT", order: 3, question: 'Select the number "Three" (San)' },
    // Unit 2 Lesson 1
    { id: 12020, lessonId: 11006, type: "SELECT", order: 1, question: 'Which one means "Hello" (Konnichiwa)?' },
    { id: 12021, lessonId: 11006, type: "ASSIST", order: 2, question: "Good Morning (Ohayou gozaimasu)" },
    { id: 12022, lessonId: 11006, type: "SELECT", order: 3, question: 'Which one means "Good Evening" (Konbanwa)?' },
    // Unit 2 Lesson 2
    { id: 12023, lessonId: 11007, type: "SELECT", order: 1, question: 'Choose "Rice" (Gohan)' },
    { id: 12024, lessonId: 11007, type: "ASSIST", order: 2, question: 'Choose "Fish" (Sakana)' },
    { id: 12027, lessonId: 11007, type: "SELECT", order: 3, question: 'Choose "Meat" (Niku)' },
    // Unit 2 Lesson 3
    { id: 12025, lessonId: 11008, type: "SELECT", order: 1, question: 'Choose "Sunny" (Hare)' },
    { id: 12026, lessonId: 11008, type: "ASSIST", order: 2, question: 'Choose "Rainy" (Ame)' },
    { id: 12028, lessonId: 11008, type: "SELECT", order: 3, question: 'Choose "Cloudy" (Kumori)' },
    // Unit 2 Lesson 4
    { id: 12029, lessonId: 11009, type: "SELECT", order: 1, question: 'Choose "Student" (Gakusei)' },
    { id: 12030, lessonId: 11009, type: "ASSIST", order: 2, question: 'Choose "Staff" (Shokuin)' },
    { id: 12031, lessonId: 11009, type: "SELECT", order: 3, question: 'Choose "Principal" (Kouchou)' },
    // Unit 2 Lesson 5
    { id: 12032, lessonId: 11010, type: "SELECT", order: 1, question: 'Choose "Doctor" (Isha)' },
    { id: 12033, lessonId: 11010, type: "ASSIST", order: 2, question: 'Choose "Nurse" (Kangoshi)' },
    { id: 12034, lessonId: 11010, type: "SELECT", order: 3, question: 'Choose "Dentist" (Haisha)' },
    // Unit 3 Lesson 1
    { id: 12035, lessonId: 11011, type: "SELECT", order: 1, question: 'Choose "Coat" (Kooto)' },
    { id: 12036, lessonId: 11011, type: "ASSIST", order: 2, question: 'Choose "Skirt" (Sukaato)' },
    { id: 12037, lessonId: 11011, type: "SELECT", order: 3, question: 'Choose "Necktie" (Nekutai)' },
    // Unit 3 Lesson 2
    { id: 12038, lessonId: 11012, type: "SELECT", order: 1, question: 'Choose "Horse" (Uma)' },
    { id: 12039, lessonId: 11012, type: "ASSIST", order: 2, question: 'Choose "Monkey" (Saru)' },
    { id: 12040, lessonId: 11012, type: "SELECT", order: 3, question: 'Choose "Giraffe" (Kirin)' },
    // Unit 3 Lesson 3
    { id: 12041, lessonId: 11013, type: "SELECT", order: 1, question: 'Choose "City Hall" (Shiyakusho)' },
    { id: 12042, lessonId: 11013, type: "ASSIST", order: 2, question: 'Choose "Factory" (Koujou)' },
    { id: 12043, lessonId: 11013, type: "SELECT", order: 3, question: 'Choose "Farm" (Noujou)' },
    // Unit 3 Lesson 4
    { id: 12044, lessonId: 11014, type: "SELECT", order: 1, question: 'Choose "Swimming" (Suiei)' },
    { id: 12045, lessonId: 11014, type: "ASSIST", order: 2, question: 'Choose "Badminton" (Badominton)' },
    { id: 12046, lessonId: 11014, type: "SELECT", order: 3, question: 'Choose "Table Tennis" (Takkyuu)' },
    // Unit 3 Lesson 5
    { id: 12047, lessonId: 11015, type: "SELECT", order: 1, question: 'Choose "Animation" (Anime)' },
    { id: 12048, lessonId: 11015, type: "ASSIST", order: 2, question: 'Choose "Documentary" (Dokyumentarii)' },
    { id: 12049, lessonId: 11015, type: "SELECT", order: 3, question: 'Choose "Director" (Kantoku)' },
    // Unit 4 Lesson 1
    { id: 12050, lessonId: 11016, type: "SELECT", order: 1, question: 'Choose "Table" (Teeburu)' },
    { id: 12051, lessonId: 11016, type: "ASSIST", order: 2, question: 'Choose "Chair" (Isu)' },
    { id: 12052, lessonId: 11016, type: "SELECT", order: 3, question: 'Choose "Bed" (Beddo)' },
    // Unit 4 Lesson 2
    { id: 12053, lessonId: 11017, type: "SELECT", order: 1, question: 'Choose "Bicycle" (Jitensha)' },
    { id: 12054, lessonId: 11017, type: "ASSIST", order: 2, question: 'Choose "Car" (Kuruma)' },
    { id: 12055, lessonId: 11017, type: "SELECT", order: 3, question: 'Choose "Train" (Densha)' },
    // Unit 4 Lesson 3
    { id: 12056, lessonId: 11018, type: "SELECT", order: 1, question: 'Choose "Police Officer" (Keisatsukan)' },
    { id: 12057, lessonId: 11018, type: "ASSIST", order: 2, question: 'Choose "Chef" (Shefu)' },
    { id: 12058, lessonId: 11018, type: "SELECT", order: 3, question: 'Choose "Engineer" (Enjinia)' },
    // Unit 4 Lesson 4
    { id: 12059, lessonId: 11019, type: "SELECT", order: 1, question: 'Choose "Eat Breakfast" (Asagohan wo taberu)' },
    { id: 12060, lessonId: 11019, type: "ASSIST", order: 2, question: 'Choose "Go to School" (Gakkou e iku)' },
    { id: 12061, lessonId: 11019, type: "SELECT", order: 3, question: 'Choose "Read a Book" (Hon wo yomu)' },
    // Unit 4 Lesson 5
    { id: 12062, lessonId: 11020, type: "SELECT", order: 1, question: 'Choose "Pen" (Pen)' },
    { id: 12063, lessonId: 11020, type: "ASSIST", order: 2, question: 'Choose "Book" (Hon)' },
    { id: 12064, lessonId: 11020, type: "SELECT", order: 3, question: 'Choose "Bag" (Kaban)' },
    // Unit 5 Lesson 1
    { id: 12065, lessonId: 11021, type: "SELECT", order: 1, question: 'Choose "Reading Books" (Hon wo yomu)' },
    { id: 12066, lessonId: 11021, type: "ASSIST", order: 2, question: 'Choose "Listening to Music" (Ongaku wo kiku)' },
    { id: 12067, lessonId: 11021, type: "SELECT", order: 3, question: 'Choose "Cooking" (Ryouri suru)' },
    // Unit 5 Lesson 2
    { id: 12068, lessonId: 11022, type: "SELECT", order: 1, question: 'Choose "Happy" (Ureshii)' },
    { id: 12069, lessonId: 11022, type: "ASSIST", order: 2, question: 'Choose "Sad" (Kanashii)' },
    { id: 12070, lessonId: 11022, type: "SELECT", order: 3, question: 'Choose "Hardworking" (Hatarakimono)' },
    // Unit 5 Lesson 3
    { id: 12071, lessonId: 11023, type: "SELECT", order: 1, question: 'Choose "Supermarket" (Suupaa)' },
    { id: 12072, lessonId: 11023, type: "ASSIST", order: 2, question: 'Choose "Bank" (Ginkou)' },
    { id: 12073, lessonId: 11023, type: "SELECT", order: 3, question: 'Choose "Pharmacy" (Yakkyoku)' },
    // Unit 5 Lesson 4
    { id: 12074, lessonId: 11024, type: "SELECT", order: 1, question: 'Choose "Headache" (Zutsuu)' },
    { id: 12075, lessonId: 11024, type: "ASSIST", order: 2, question: 'Choose "Cold" (Kaze)' },
    { id: 12076, lessonId: 11024, type: "SELECT", order: 3, question: 'Choose "Exercise" (Undou suru)' },
    // Unit 5 Lesson 5
    { id: 12077, lessonId: 11025, type: "SELECT", order: 1, question: 'Choose "Phone" (Denwa)' },
    { id: 12078, lessonId: 11025, type: "ASSIST", order: 2, question: 'Choose "Computer" (Konpyuutaa)' },
    { id: 12079, lessonId: 11025, type: "SELECT", order: 3, question: 'Choose "Internet" (Intaanetto)' },
] as const;

// Japanese Challenge Options
export const challengeOptions = [

    
// Unit 1 Lesson 1
// Challenge 12001 (The man)
{ challengeId: 12001, imageSrc: "/cat.svg", correct: false, text: "猫", audioSrc: "/U1_cat.mp3" },
{ challengeId: 12001, imageSrc: "/woman.svg", correct: false, text: "女性たち", audioSrc: "/U1_girl.mp3" },
{ challengeId: 12001, imageSrc: "/man.svg", correct: true, text: "その男", audioSrc: "/U1_theman.mp3" },
{ challengeId: 12001, imageSrc: "/robot.svg", correct: false, text: "ロボット", audioSrc: "/U1_robot.mp3" },
// Challenge 12002 (The man - ASSIST)
{ challengeId: 12002, correct: false, text: "ロボット", audioSrc: "/U1_robot.mp3" },
{ challengeId: 12002, correct: false, text: "猫", audioSrc: "/U1_cat.mp3" },
{ challengeId: 12002, correct: true, text: "その男", audioSrc: "/U1_theman.mp3" },
{ challengeId: 12002, correct: false, text: "女性たち", audioSrc: "/U1_girl.mp3" },
// Challenge 12003 (The robot)
{ challengeId: 12003, imageSrc: "/woman.svg", correct: false, text: "女性たち", audioSrc: "/U1_girl.mp3" },
{ challengeId: 12003, imageSrc: "/robot.svg", correct: true, text: "ロボット", audioSrc: "/U1_robot.mp3" },
{ challengeId: 12003, imageSrc: "/cat.svg", correct: false, text: "猫", audioSrc: "/U1_cat.mp3" },
{ challengeId: 12003, imageSrc: "/man.svg", correct: false, text: "その男", audioSrc: "/U1_theman.mp3" },

// Unit 1 Lesson 2
// Challenge 12004 (Apple)
{ challengeId: 12004, imageSrc: "/assets/images/japan/unit1/strawberry.svg", correct: false, text: "いちご", audioSrc: "/assets/audio/japan/unit1/U1_strawberry.mp3" },
{ challengeId: 12004, imageSrc: "/assets/images/japan/unit1/apple.svg", correct: true, text: "りんご", audioSrc: "/assets/audio/japan/unit1/U1_apple.mp3" },
{ challengeId: 12004, imageSrc: "/assets/images/japan/unit1/banana.svg", correct: false, text: "バナナ", audioSrc: "/assets/audio/japan/unit1/U1_banana.mp3" },
{ challengeId: 12004, imageSrc: "/assets/images/japan/unit1/orange.svg", correct: false, text: "オレンジ", audioSrc: "/assets/audio/japan/unit1/U1_orange.mp3" },
// Challenge 12005 (Banana - ASSIST)
{ challengeId: 12005, correct: false, text: "いちご", audioSrc: "/assets/audio/japan/unit1/U1_strawberry.mp3" },
{ challengeId: 12005, correct: false, text: "りんご", audioSrc: "/assets/audio/japan/unit1/U1_apple.mp3" },
{ challengeId: 12005, correct: true, text: "バナナ", audioSrc: "/assets/audio/japan/unit1/U1_banana.mp3" },
{ challengeId: 12005, correct: false, text: "オレンジ", audioSrc: "/assets/audio/japan/unit1/U1_orange.mp3" },
// Challenge 12006 (Orange)
{ challengeId: 12006, imageSrc: "/assets/images/japan/unit1/banana.svg", correct: false, text: "バナナ", audioSrc: "/assets/audio/japan/unit1/U1_banana.mp3" },
{ challengeId: 12006, imageSrc: "/assets/images/japan/unit1/strawberry.svg", correct: false, text: "いちご", audioSrc: "/assets/audio/japan/unit1/U1_strawberry.mp3" },
{ challengeId: 12006, imageSrc: "/assets/images/japan/unit1/orange.svg", correct: true, text: "オレンジ", audioSrc: "/assets/audio/japan/unit1/U1_orange.mp3" },
{ challengeId: 12006, imageSrc: "/assets/images/japan/unit1/apple.svg", correct: false, text: "りんご", audioSrc: "/assets/audio/japan/unit1/U1_apple.mp3" },

// Unit 1 Lesson 3
// Challenge 12007 (Water)
{ challengeId: 12007, imageSrc: "/assets/images/japan/unit1/juice.svg", correct: false, text: "牛乳", audioSrc: "/assets/audio/japan/unit1/U1_juice.mp3" },
{ challengeId: 12007, imageSrc: "/assets/images/japan/unit1/water.svg", correct: true, text: "水", audioSrc: "/assets/audio/japan/unit1/U1_water.mp3" },
{ challengeId: 12007, imageSrc: "/assets/images/japan/unit1/tea.svg", correct: false, text: "お茶", audioSrc: "/assets/audio/japan/unit1/U1_tea.mp3" },
{ challengeId: 12007, imageSrc: "/assets/images/japan/unit1/coffee.svg", correct: false, text: "コーヒー", audioSrc: "/assets/audio/japan/unit1/U1_coffee.mp3" },
// Challenge 12008 (Tea - ASSIST)
{ challengeId: 12008, correct: false, text: "牛乳", audioSrc: "/assets/audio/japan/unit1/U1_juice.mp3" },
{ challengeId: 12008, correct: true, text: "お茶", audioSrc: "/assets/audio/japan/unit1/U1_tea.mp3" },
{ challengeId: 12008, correct: false, text: "水", audioSrc: "/assets/audio/japan/unit1/U1_water.mp3" },
{ challengeId: 12008, correct: false, text: "コーヒー", audioSrc: "/assets/audio/japan/unit1/U1_coffee.mp3" },
// Challenge 12009 (Coffee)
{ challengeId: 12009, imageSrc: "/assets/images/japan/unit1/tea.svg", correct: false, text: "お茶", audioSrc: "/assets/audio/japan/unit1/U1_tea.mp3" },
{ challengeId: 12009, imageSrc: "/assets/images/japan/unit1/juice.svg", correct: false, text: "牛乳", audioSrc: "/assets/audio/japan/unit1/U1_juice.mp3" },
{ challengeId: 12009, imageSrc: "/assets/images/japan/unit1/coffee.svg", correct: true, text: "コーヒー", audioSrc: "/assets/audio/japan/unit1/U1_coffee.mp3" },
{ challengeId: 12009, imageSrc: "/assets/images/japan/unit1/water.svg", correct: false, text: "水", audioSrc: "/assets/audio/japan/unit1/U1_water.mp3" },

// Unit 1 Lesson 4
// Challenge 12010 (Red)
{ challengeId: 12010, imageSrc: "/assets/images/japan/unit1/green.svg", correct: false, text: "みどり", audioSrc: "/assets/audio/japan/unit1/U1_green.mp3" },
{ challengeId: 12010, imageSrc: "/assets/images/japan/unit1/blue.svg", correct: false, text: "あお", audioSrc: "/assets/audio/japan/unit1/U1_blue.mp3" },
{ challengeId: 12010, imageSrc: "/assets/images/japan/unit1/red.svg", correct: true, text: "あか", audioSrc: "/assets/audio/japan/unit1/U1_red.mp3" },
{ challengeId: 12010, imageSrc: "/assets/images/japan/unit1/yellow.svg", correct: false, text: "きいろ", audioSrc: "/assets/audio/japan/unit1/U1_yellow.mp3" },
// Challenge 12011 (Blue - ASSIST)
{ challengeId: 12011, correct: false, text: "きいろ", audioSrc: "/assets/audio/japan/unit1/U1_yellow.mp3" },
{ challengeId: 12011, correct: true, text: "あお", audioSrc: "/assets/audio/japan/unit1/U1_blue.mp3" },
{ challengeId: 12011, correct: false, text: "あか", audioSrc: "/assets/audio/japan/unit1/U1_red.mp3" },
// Challenge 12012 (Yellow)
{ challengeId: 12012, imageSrc: "/assets/images/japan/unit1/blue.svg", correct: false, text: "あお", audioSrc: "/assets/audio/japan/unit1/U1_blue.mp3" },
{ challengeId: 12012, imageSrc: "/assets/images/japan/unit1/yellow.svg", correct: true, text: "きいろ", audioSrc: "/assets/audio/japan/unit1/U1_yellow.mp3" },
{ challengeId: 12012, imageSrc: "/assets/images/japan/unit1/red.svg", correct: false, text: "あか", audioSrc: "/assets/audio/japan/unit1/U1_red.mp3" },
{ challengeId: 12012, imageSrc: "/assets/images/japan/unit1/green.svg", correct: false, text: "みどり", audioSrc: "/assets/audio/japan/unit1/U1_green.mp3" },

// Unit 1 Lesson 5
// Challenge 12013 (One)
{ challengeId: 12013, imageSrc: "/assets/images/japan/unit1/four.svg", correct: false, text: "よん", audioSrc: "/assets/audio/japan/unit1/U1_four.mp3" },
{ challengeId: 12013, imageSrc: "/assets/images/japan/unit1/two.svg", correct: false, text: "に", audioSrc: "/assets/audio/japan/unit1/U1_two.mp3" },
{ challengeId: 12013, imageSrc: "/assets/images/japan/unit1/one.svg", correct: true, text: "いち", audioSrc: "/assets/audio/japan/unit1/U1_one.mp3" },
{ challengeId: 12013, imageSrc: "/assets/images/japan/unit1/three.svg", correct: false, text: "さん", audioSrc: "/assets/audio/japan/unit1/U1_three.mp3" },
// Challenge 12014 (Two - ASSIST)
{ challengeId: 12014, correct: false, text: "よん", audioSrc: "/assets/audio/japan/unit1/U1_four.mp3" },
{ challengeId: 12014, correct: true, text: "に", audioSrc: "/assets/audio/japan/unit1/U1_two.mp3" },
{ challengeId: 12014, correct: false, text: "いち", audioSrc: "/assets/audio/japan/unit1/U1_one.mp3" },
{ challengeId: 12014, correct: false, text: "さん", audioSrc: "/assets/audio/japan/unit1/U1_three.mp3" },
// Challenge 12015 (Three)
{ challengeId: 12015, imageSrc: "/assets/images/japan/unit1/two.svg", correct: false, text: "に", audioSrc: "/assets/audio/japan/unit1/U1_two.mp3" },
{ challengeId: 12015, imageSrc: "/assets/images/japan/unit1/four.svg", correct: false, text: "よん", audioSrc: "/assets/audio/japan/unit1/U1_four.mp3" },
{ challengeId: 12015, imageSrc: "/assets/images/japan/unit1/three.svg", correct: true, text: "さん", audioSrc: "/assets/audio/japan/unit1/U1_three.mp3" },
{ challengeId: 12015, imageSrc: "/assets/images/japan/unit1/one.svg", correct: false, text: "いち", audioSrc: "/assets/audio/japan/unit1/U1_one.mp3" },



// Unit 2 Lesson 1
// Challenge 12020 (Hello)
{ challengeId: 12020, imageSrc: "/assets/images/japan/unit2/goodbye.svg", correct: false, text: "さようなら", audioSrc: "/assets/audio/japan/unit2/U2_goodbye.mp3" },
{ challengeId: 12020, imageSrc: "/assets/images/japan/unit2/morning.svg", correct: false, text: "おはようございます", audioSrc: "/assets/audio/japan/unit2/U2_morning.mp3" },
{ challengeId: 12020, imageSrc: "/assets/images/japan/unit2/hello.svg", correct: true, text: "こんにちは", audioSrc: "/assets/audio/japan/unit2/U2_hello.mp3" },
{ challengeId: 12020, imageSrc: "/assets/images/japan/unit2/evening.svg", correct: false, text: "こんばんは", audioSrc: "/assets/audio/japan/unit2/U2_evening.mp3" },
// Challenge 12021 (Good Morning - ASSIST)
{ challengeId: 12021, correct: false, text: "さようなら", audioSrc: "/assets/audio/japan/unit2/U2_goodbye.mp3" },
{ challengeId: 12021, correct: true, text: "おはようございます", audioSrc: "/assets/audio/japan/unit2/U2_morning.mp3" },
{ challengeId: 12021, correct: false, text: "こんにちは", audioSrc: "/assets/audio/japan/unit2/U2_hello.mp3" },
{ challengeId: 12021, correct: false, text: "こんばんは", audioSrc: "/assets/audio/japan/unit2/U2_evening.mp3" },
// Challenge 12022 (Good Evening)
{ challengeId: 12022, imageSrc: "/assets/images/japan/unit2/morning.svg", correct: false, text: "おはようございます", audioSrc: "/assets/audio/japan/unit2/U2_morning.mp3" },
{ challengeId: 12022, imageSrc: "/assets/images/japan/unit2/evening.svg", correct: true, text: "こんばんは", audioSrc: "/assets/audio/japan/unit2/U2_evening.mp3" },
{ challengeId: 12022, imageSrc: "/assets/images/japan/unit2/goodbye.svg", correct: false, text: "さようなら", audioSrc: "/assets/audio/japan/unit2/U2_goodbye.mp3" },
{ challengeId: 12022, imageSrc: "/assets/images/japan/unit2/hello.svg", correct: false, text: "こんにちは", audioSrc: "/assets/audio/japan/unit2/U2_hello.mp3" },

// Unit 2 Lesson 2
// Challenge 12023 (Rice)
{ challengeId: 12023, imageSrc: "/assets/images/japan/unit2/vegetable.svg", correct: false, text: "やさい", audioSrc: "/assets/audio/japan/unit2/U2_yasai.mp3" },
{ challengeId: 12023, imageSrc: "/assets/images/japan/unit2/rice.svg", correct: true, text: "ごはん", audioSrc: "/assets/audio/japan/unit2/U2_gohan.mp3" },
{ challengeId: 12023, imageSrc: "/assets/images/japan/unit2/meat.svg", correct: false, text: "にく", audioSrc: "/assets/audio/japan/unit2/U2_niku.mp3" },
{ challengeId: 12023, imageSrc: "/assets/images/japan/unit2/fish.svg", correct: false, text: "さかな", audioSrc: "/assets/audio/japan/unit2/U2_sakana.mp3" },
// Challenge 12024 (Fish)
{ challengeId: 12024, correct: false, text: "やさい", audioSrc: "/assets/audio/japan/unit2/U2_yasai.mp3" },
{ challengeId: 12024, correct: false, text: "にく", audioSrc: "/assets/audio/japan/unit2/U2_niku.mp3" },
{ challengeId: 12024, correct: true, text: "さかな", audioSrc: "/assets/audio/japan/unit2/U2_sakana.mp3" },
{ challengeId: 12024, correct: false, text: "ごはん", audioSrc: "/assets/audio/japan/unit2/U2_gohan.mp3" },
// Challenge 12027 (Meat)
{ challengeId: 12027, imageSrc: "/assets/images/japan/unit2/fish.svg", correct: false, text: "さかな", audioSrc: "/assets/audio/japan/unit2/U2_sakana.mp3" },
{ challengeId: 12027, imageSrc: "/assets/images/japan/unit2/vegetable.svg", correct: false, text: "やさい", audioSrc: "/assets/audio/japan/unit2/U2_yasai.mp3" },
{ challengeId: 12027, imageSrc: "/assets/images/japan/unit2/meat.svg", correct: true, text: "にく", audioSrc: "/assets/audio/japan/unit2/U2_niku.mp3" },
{ challengeId: 12027, imageSrc: "/assets/images/japan/unit2/rice.svg", correct: false, text: "ごはん", audioSrc: "/assets/audio/japan/unit2/U2_gohan.mp3" },

// Unit 2 Lesson 3
// Challenge 12025 (Sunny)
{ challengeId: 12025, imageSrc: "/assets/images/japan/unit2/snow.svg", correct: false, text: "ゆき", audioSrc: "/assets/audio/japan/unit2/U2_snow.mp3" },
{ challengeId: 12025, imageSrc: "/assets/images/japan/unit2/rainy.svg", correct: false, text: "あめ", audioSrc: "/assets/audio/japan/unit2/U2_rainy.mp3" },
{ challengeId: 12025, imageSrc: "/assets/images/japan/unit2/sunny.svg", correct: true, text: "はれ", audioSrc: "/assets/audio/japan/unit2/U2_sunny.mp3" },
{ challengeId: 12025, imageSrc: "/assets/images/japan/unit2/cloudy.svg", correct: false, text: "くもり", audioSrc: "/assets/audio/japan/unit2/U2_cloudy.mp3" },
// Challenge 12026 (Rainy)
{ challengeId: 12026, correct: false, text: "くもり", audioSrc: "/assets/audio/japan/unit2/U2_cloudy.mp3" },
{ challengeId: 12026, correct: true, text: "あめ", audioSrc: "/assets/audio/japan/unit2/U2_rainy.mp3" },
{ challengeId: 12026, correct: false, text: "ゆき", audioSrc: "/assets/audio/japan/unit2/U2_snow.mp3" },
{ challengeId: 12026, correct: false, text: "はれ", audioSrc: "/assets/audio/japan/unit2/U2_sunny.mp3" },
// Challenge 12028 (Cloudy)
{ challengeId: 12028, imageSrc: "/assets/images/japan/unit2/rainy.svg", correct: false, text: "あめ", audioSrc: "/assets/audio/japan/unit2/U2_rainy.mp3" },
{ challengeId: 12028, imageSrc: "/assets/images/japan/unit2/cloudy.svg", correct: true, text: "くもり", audioSrc: "/assets/audio/japan/unit2/U2_cloudy.mp3" },
{ challengeId: 12028, imageSrc: "/assets/images/japan/unit2/snow.svg", correct: false, text: "ゆき", audioSrc: "/assets/audio/japan/unit2/U2_snow.mp3" },
{ challengeId: 12028, imageSrc: "/assets/images/japan/unit2/sunny.svg", correct: false, text: "はれ", audioSrc: "/assets/audio/japan/unit2/U2_sunny.mp3" },

// Unit 2 Lesson 4
// Challenge 12029 (Student)
{ challengeId: 12029, imageSrc: "/assets/images/japan/unit2/principal.svg", correct: false, text: "こうちょう", audioSrc: "/assets/audio/japan/unit2/U2_principal.mp3" },
{ challengeId: 12029, imageSrc: "/assets/images/japan/unit2/student.svg", correct: true, text: "がくせい", audioSrc: "/assets/audio/japan/unit2/U2_student.mp3" },
{ challengeId: 12029, imageSrc: "/assets/images/japan/unit2/staff.svg", correct: false, text: "しょくいん", audioSrc: "/assets/audio/japan/unit2/U2_staff.mp3" },
{ challengeId: 12029, imageSrc: "/assets/images/japan/unit2/teacher.svg", correct: false, text: "せんせい", audioSrc: "/assets/audio/japan/unit2/U2_teacher.mp3" },
// Challenge 12030 (Staff)
{ challengeId: 12030, correct: false, text: "がくせい", audioSrc: "/assets/audio/japan/unit2/U2_student.mp3" },
{ challengeId: 12030, correct: false, text: "こうちょう", audioSrc: "/assets/audio/japan/unit2/U2_principal.mp3" },
{ challengeId: 12030, correct: true, text: "しょくいん", audioSrc: "/assets/audio/japan/unit2/U2_staff.mp3" },
{ challengeId: 12030, correct: false, text: "せんせい", audioSrc: "/assets/audio/japan/unit2/U2_teacher.mp3" },
// Challenge 12031 (Principal)
{ challengeId: 12031, imageSrc: "/assets/images/japan/unit2/staff.svg", correct: false, text: "しょくいん", audioSrc: "/assets/audio/japan/unit2/U2_staff.mp3" },
{ challengeId: 12031, imageSrc: "/assets/images/japan/unit2/student.svg", correct: false, text: "がくせい", audioSrc: "/assets/audio/japan/unit2/U2_student.mp3" },
{ challengeId: 12031, imageSrc: "/assets/images/japan/unit2/principal.svg", correct: true, text: "こうちょう", audioSrc: "/assets/audio/japan/unit2/U2_principal.mp3" },
{ challengeId: 12031, imageSrc: "/assets/images/japan/unit2/teacher.svg", correct: false, text: "せんせい", audioSrc: "/assets/audio/japan/unit2/U2_teacher.mp3" },

// Unit 2 Lesson 5
// Challenge 12032 (Doctor)
{ challengeId: 12032, imageSrc: "/assets/images/japan/unit2/pharmacist.svg", correct: false, text: "やくざいし", audioSrc: "/assets/audio/japan/unit2/U2_pharmacist.mp3" },
{ challengeId: 12032, imageSrc: "/assets/images/japan/unit2/dentist.svg", correct: false, text: "はいしゃ", audioSrc: "/assets/audio/japan/unit2/U2_dentist.mp3" },
{ challengeId: 12032, imageSrc: "/assets/images/japan/unit2/doctor.svg", correct: true, text: "いしゃ", audioSrc: "/assets/audio/japan/unit2/U2_doctor.mp3" },
{ challengeId: 12032, imageSrc: "/assets/images/japan/unit2/nurse.svg", correct: false, text: "かんごし", audioSrc: "/assets/audio/japan/unit2/U2_nurse.mp3" },
// Challenge 12033 (Nurse)
{ challengeId: 12033, correct: false, text: "やくざいし", audioSrc: "/assets/audio/japan/unit2/U2_pharmacist.mp3" },
{ challengeId: 12033, correct: true, text: "かんごし", audioSrc: "/assets/audio/japan/unit2/U2_nurse.mp3" },
{ challengeId: 12033, correct: false, text: "いしゃ", audioSrc: "/assets/audio/japan/unit2/U2_doctor.mp3" },
{ challengeId: 12033, correct: false, text: "はいしゃ", audioSrc: "/assets/audio/japan/unit2/U2_dentist.mp3" },
// Challenge 12034 (Dentist)
{ challengeId: 12034, imageSrc: "/assets/images/japan/unit2/nurse.svg", correct: false, text: "かんごし", audioSrc: "/assets/audio/japan/unit2/U2_nurse.mp3" },
{ challengeId: 12034, imageSrc: "/assets/images/japan/unit2/pharmacist.svg", correct: false, text: "やくざいし", audioSrc: "/assets/audio/japan/unit2/U2_pharmacist.mp3" },
{ challengeId: 12034, imageSrc: "/assets/images/japan/unit2/dentist.svg", correct: true, text: "はいしゃ", audioSrc: "/assets/audio/japan/unit2/U2_dentist.mp3" },
{ challengeId: 12034, imageSrc: "/assets/images/japan/unit2/doctor.svg", correct: false, text: "いしゃ", audioSrc: "/assets/audio/japan/unit2/U2_doctor.mp3" },



// Unit 3 Lesson 1
// Challenge 12035 (Coat)
{ challengeId: 12035, imageSrc: "/assets/images/japan/unit3/gloves.svg", correct: false, text: "手袋", audioSrc: "/assets/audio/japan/unit3/U3_gloves.mp3" },
{ challengeId: 12035, imageSrc: "/assets/images/japan/unit3/coat.svg", correct: true, text: "コート", audioSrc: "/assets/audio/japan/unit3/U3_coat.mp3" },
{ challengeId: 12035, imageSrc: "/assets/images/japan/unit3/skirt.svg", correct: false, text: "スカート", audioSrc: "/assets/audio/japan/unit3/U3_skirt.mp3" },
{ challengeId: 12035, imageSrc: "/assets/images/japan/unit3/necktie.svg", correct: false, text: "ネクタイ", audioSrc: "/assets/audio/japan/unit3/U3_necktie.mp3" },
// Challenge 12036 (Skirt)
{ challengeId: 12036, correct: false, text: "ネクタイ", audioSrc: "/assets/audio/japan/unit3/U3_necktie.mp3" },
{ challengeId: 12036, correct: true, text: "スカート", audioSrc: "/assets/audio/japan/unit3/U3_skirt.mp3" },
{ challengeId: 12036, correct: false, text: "手袋", audioSrc: "/assets/audio/japan/unit3/U3_gloves.mp3" },
{ challengeId: 12036, correct: false, text: "コート", audioSrc: "/assets/audio/japan/unit3/U3_coat.mp3" },
// Challenge 12037 (Necktie)
{ challengeId: 12037, imageSrc: "/assets/images/japan/unit3/skirt.svg", correct: false, text: "スカート", audioSrc: "/assets/audio/japan/unit3/U3_skirt.mp3" },
{ challengeId: 12037, imageSrc: "/assets/images/japan/unit3/necktie.svg", correct: true, text: "ネクタイ", audioSrc: "/assets/audio/japan/unit3/U3_necktie.mp3" },
{ challengeId: 12037, imageSrc: "/assets/images/japan/unit3/gloves.svg", correct: false, text: "手袋", audioSrc: "/assets/audio/japan/unit3/U3_gloves.mp3" },
{ challengeId: 12037, imageSrc: "/assets/images/japan/unit3/coat.svg", correct: false, text: "コート", audioSrc: "/assets/audio/japan/unit3/U3_coat.mp3" },

// Unit 3 Lesson 2
// Challenge 12038 (Horse)
{ challengeId: 12038, imageSrc: "/assets/images/japan/unit3/lion.svg", correct: false, text: "ライオン", audioSrc: "/assets/audio/japan/unit3/U3_lion.mp3" },
{ challengeId: 12038, imageSrc: "/assets/images/japan/unit3/horse.svg", correct: true, text: "馬", audioSrc: "/assets/audio/japan/unit3/U3_horse.mp3" },
{ challengeId: 12038, imageSrc: "/assets/images/japan/unit3/monkey.svg", correct: false, text: "猿", audioSrc: "/assets/audio/japan/unit3/U3_monkey.mp3" },
{ challengeId: 12038, imageSrc: "/assets/images/japan/unit3/giraffe.svg", correct: false, text: "キリン", audioSrc: "/assets/audio/japan/unit3/U3_giraffe.mp3" },
// Challenge 12039 (Monkey)
{ challengeId: 12039, correct: false, text: "キリン", audioSrc: "/assets/audio/japan/unit3/U3_giraffe.mp3" },
{ challengeId: 12039, correct: false, text: "ライオン", audioSrc: "/assets/audio/japan/unit3/U3_lion.mp3" },
{ challengeId: 12039, correct: true, text: "猿", audioSrc: "/assets/audio/japan/unit3/U3_monkey.mp3" },
{ challengeId: 12039, correct: false, text: "馬", audioSrc: "/assets/audio/japan/unit3/U3_horse.mp3" },
// Challenge 12040 (Giraffe)
{ challengeId: 12040, imageSrc: "/assets/images/japan/unit3/monkey.svg", correct: false, text: "猿", audioSrc: "/assets/audio/japan/unit3/U3_monkey.mp3" },
{ challengeId: 12040, imageSrc: "/assets/images/japan/unit3/lion.svg", correct: false, text: "ライオン", audioSrc: "/assets/audio/japan/unit3/U3_lion.mp3" },
{ challengeId: 12040, imageSrc: "/assets/images/japan/unit3/giraffe.svg", correct: true, text: "キリン", audioSrc: "/assets/audio/japan/unit3/U3_giraffe.mp3" },
{ challengeId: 12040, imageSrc: "/assets/images/japan/unit3/horse.svg", correct: false, text: "馬", audioSrc: "/assets/audio/japan/unit3/U3_horse.mp3" },

// Unit 3 Lesson 3
// Challenge 12041 (City Hall)
{ challengeId: 12041, imageSrc: "/assets/images/japan/unit3/museum.svg", correct: false, text: "博物館", audioSrc: "/assets/audio/japan/unit3/U3_museum.mp3" },
{ challengeId: 12041, imageSrc: "/assets/images/japan/unit3/farm.svg", correct: false, text: "農場", audioSrc: "/assets/audio/japan/unit3/U3_farm.mp3" },
{ challengeId: 12041, imageSrc: "/assets/images/japan/unit3/cityhall.svg", correct: true, text: "市役所", audioSrc: "/assets/audio/japan/unit3/U3_cityhall.mp3" },
{ challengeId: 12041, imageSrc: "/assets/images/japan/unit3/factory.svg", correct: false, text: "工場", audioSrc: "/assets/audio/japan/unit3/U3_factory.mp3" },
// Challenge 12042 (Factory)
{ challengeId: 12042, correct: false, text: "博物館", audioSrc: "/assets/audio/japan/unit3/U3_museum.mp3" },
{ challengeId: 12042, correct: true, text: "工場", audioSrc: "/assets/audio/japan/unit3/U3_factory.mp3" },
{ challengeId: 12042, correct: false, text: "市役所", audioSrc: "/assets/audio/japan/unit3/U3_cityhall.mp3" },
{ challengeId: 12042, correct: false, text: "農場", audioSrc: "/assets/audio/japan/unit3/U3_farm.mp3" },
// Challenge 12043 (Farm)
{ challengeId: 12043, imageSrc: "/assets/images/japan/unit3/factory.svg", correct: false, text: "工場", audioSrc: "/assets/audio/japan/unit3/U3_factory.mp3" },
{ challengeId: 12043, imageSrc: "/assets/images/japan/unit3/museum.svg", correct: false, text: "博物館", audioSrc: "/assets/audio/japan/unit3/U3_museum.mp3" },
{ challengeId: 12043, imageSrc: "/assets/images/japan/unit3/farm.svg", correct: true, text: "農場", audioSrc: "/assets/audio/japan/unit3/U3_farm.mp3" },
{ challengeId: 12043, imageSrc: "/assets/images/japan/unit3/cityhall.svg", correct: false, text: "市役所", audioSrc: "/assets/audio/japan/unit3/U3_cityhall.mp3" },

// Unit 3 Lesson 4
// Challenge 12044 (Swimming)
{ challengeId: 12044, imageSrc: "/assets/images/japan/unit3/volleyball.svg", correct: false, text: "バレーボール", audioSrc: "/assets/audio/japan/unit3/U3_volleyball.mp3" },
{ challengeId: 12044, imageSrc: "/assets/images/japan/unit3/b EUROadmintion.svg", correct: false, text: "バドミントン", audioSrc: "/assets/audio/japan/unit3/U3_badminton.mp3" },
{ challengeId: 12044, imageSrc: "/assets/images/japan/unit3/swimming.svg", correct: true, text: "水泳", audioSrc: "/assets/audio/japan/unit3/U3_swimming.mp3" },
{ challengeId: 12044, imageSrc: "/assets/images/japan/unit3/tabletennis.svg", correct: false, text: "卓球", audioSrc: "/assets/audio/japan/unit3/U3_tabletennis.mp3" },
// Challenge 12045 (Badminton)
{ challengeId: 12045, correct: false, text: "卓球", audioSrc: "/assets/audio/japan/unit3/U3_tabletennis.mp3" },
{ challengeId: 12045, correct: false, text: "バレーボール", audioSrc: "/assets/audio/japan/unit3/U3_volleyball.mp3" },
{ challengeId: 12045, correct: true, text: "バドミントン", audioSrc: "/assets/audio/japan/unit3/U3_badminton.mp3" },
{ challengeId: 12045, correct: false, text: "水泳", audioSrc: "/assets/audio/japan/unit3/U3_swimming.mp3" },
// Challenge 12046 (Table Tennis)
{ challengeId: 12046, imageSrc: "/assets/images/japan/unit3/badminton.svg", correct: false, text: "バドミントン", audioSrc: "/assets/audio/japan/unit3/U3_badminton.mp3" },
{ challengeId: 12046, imageSrc: "/assets/images/japan/unit3/volleyball.svg", correct: false, text: "バレーボール", audioSrc: "/assets/audio/japan/unit3/U3_volleyball.mp3" },
{ challengeId: 12046, imageSrc: "/assets/images/japan/unit3/tabletennis.svg", correct: true, text: "卓球", audioSrc: "/assets/audio/japan/unit3/U3_tabletennis.mp3" },
{ challengeId: 12046, imageSrc: "/assets/images/japan/unit3/swimming.svg", correct: false, text: "水泳", audioSrc: "/assets/audio/japan/unit3/U3_swimming.mp3" },

// Unit 3 Lesson 5
// Challenge 12047 (Animation)
{ challengeId: 12047, imageSrc: "/assets/images/japan/unit3/producer.svg", correct: false, text: "プロデューサー", audioSrc: "/assets/audio/japan/unit3/U3_producer.mp3" },
{ challengeId: 12047, imageSrc: "/assets/images/japan/unit3/director.svg", correct: false, text: "監督", audioSrc: "/assets/audio/japan/unit3/U3_director.mp3" },
{ challengeId: 12047, imageSrc: "/assets/images/japan/unit3/anime.svg", correct: true, text: "アニメ", audioSrc: "/assets/audio/japan/unit3/U3_anime.mp3" },
{ challengeId: 12047, imageSrc: "/assets/images/japan/unit3/documentary.svg", correct: false, text: "ドキュメンタリー", audioSrc: "/assets/audio/japan/unit3/U3_documentary.mp3" },
// Challenge 12048 (Documentary)
{ challengeId: 12048, correct: false, text: "監督", audioSrc: "/assets/audio/japan/unit3/U3_director.mp3" },
{ challengeId: 12048, correct: true, text: "ドキュメンタリー", audioSrc: "/assets/audio/japan/unit3/U3_documentary.mp3" },
{ challengeId: 12048, correct: false, text: "プロデューサー", audioSrc: "/assets/audio/japan/unit3/U3_producer.mp3" },
{ challengeId: 12048, correct: false, text: "アニメ", audioSrc: "/assets/audio/japan/unit3/U3_anime.mp3" },
// Challenge 12049 (Director)
{ challengeId: 12049, imageSrc: "/assets/images/japan/unit3/documentary.svg", correct: false, text: "ドキュメンタリー", audioSrc: "/assets/audio/japan/unit3/U3_documentary.mp3" },
{ challengeId: 12049, imageSrc: "/assets/images/japan/unit3/producer.svg", correct: false, text: "プロデューサー", audioSrc: "/assets/audio/japan/unit3/U3_producer.mp3" },
{ challengeId: 12049, imageSrc: "/assets/images/japan/unit3/director.svg", correct: true, text: "監督", audioSrc: "/assets/audio/japan/unit3/U3_director.mp3" },
{ challengeId: 12049, imageSrc: "/assets/images/japan/unit3/anime.svg", correct: false, text: "アニメ", audioSrc: "/assets/audio/japan/unit3/U3_anime.mp3" },

    
// Unit 4 Lesson 1
// Challenge 12050 (Table)
{ challengeId: 12050, imageSrc: "/assets/images/japan/unit4/fridge.svg", correct: false, text: "れいぞうこ", audioSrc: "/assets/audio/japan/unit4/U4_fridge.mp3" },
{ challengeId: 12050, imageSrc: "/assets/images/japan/unit4/chair.svg", correct: false, text: "いす", audioSrc: "/assets/audio/japan/unit4/U4_chair.mp3" },
{ challengeId: 12050, imageSrc: "/assets/images/japan/unit4/table.svg", correct: true, text: "テーブル", audioSrc: "/assets/audio/japan/unit4/U4_table.mp3" },
{ challengeId: 12050, imageSrc: "/assets/images/japan/unit4/bed.svg", correct: false, text: "ベッド", audioSrc: "/assets/audio/japan/unit4/U4_bed.mp3" },
// Challenge 12051 (Chair)
{ challengeId: 12051, correct: false, text: "れいぞうこ", audioSrc: "/assets/audio/japan/unit4/U4_fridge.mp3" },
{ challengeId: 12051, correct: true, text: "いす", audioSrc: "/assets/audio/japan/unit4/U4_chair.mp3" },
{ challengeId: 12051, correct: false, text: "テーブル", audioSrc: "/assets/audio/japan/unit4/U4_table.mp3" },
{ challengeId: 12051, correct: false, text: "ベッド", audioSrc: "/assets/audio/japan/unit4/U4_bed.mp3" },
// Challenge 12052 (Bed)
{ challengeId: 12052, imageSrc: "/assets/images/japan/unit4/chair.svg", correct: false, text: "いす", audioSrc: "/assets/audio/japan/unit4/U4_chair.mp3" },
{ challengeId: 12052, imageSrc: "/assets/images/japan/unit4/fridge.svg", correct: false, text: "れいぞうこ", audioSrc: "/assets/audio/japan/unit4/U4_fridge.mp3" },
{ challengeId: 12052, imageSrc: "/assets/images/japan/unit4/bed.svg", correct: true, text: "ベッド", audioSrc: "/assets/audio/japan/unit4/U4_bed.mp3" },
{ challengeId: 12052, imageSrc: "/assets/images/japan/unit4/table.svg", correct: false, text: "テーブル", audioSrc: "/assets/audio/japan/unit4/U4_table.mp3" },

// Unit 4 Lesson 2
// Challenge 12053 (Bicycle)
{ challengeId: 12053, imageSrc: "/assets/images/japan/unit4/bus.svg", correct: false, text: "バス", audioSrc: "/assets/audio/japan/unit4/U4_bus.mp3" },
{ challengeId: 12053, imageSrc: "/assets/images/japan/unit4/bicycle.svg", correct: true, text: "じてんしゃ", audioSrc: "/assets/audio/japan/unit4/U4_bicycle.mp3" },
{ challengeId: 12053, imageSrc: "/assets/images/japan/unit4/train.svg", correct: false, text: "でんしゃ", audioSrc: "/assets/audio/japan/unit4/U4_train.mp3" },
{ challengeId: 12053, imageSrc: "/assets/images/japan/unit4/car.svg", correct: false, text: "くるま", audioSrc: "/assets/audio/japan/unit4/U4_car.mp3" },
// Challenge 12054 (Car)
{ challengeId: 12054, correct: false, text: "でんしゃ", audioSrc: "/assets/audio/japan/unit4/U4_train.mp3" },
{ challengeId: 12054, correct: false, text: "じてんしゃ", audioSrc: "/assets/audio/japan/unit4/U4_bicycle.mp3" },
{ challengeId: 12054, correct: true, text: "くるま", audioSrc: "/assets/audio/japan/unit4/U4_car.mp3" },
{ challengeId: 12054, correct: false, text: "バス", audioSrc: "/assets/audio/japan/unit4/U4_bus.mp3" },
// Challenge 12055 (Train)
{ challengeId: 12055, imageSrc: "/assets/images/japan/unit4/car.svg", correct: false, text: "くるま", audioSrc: "/assets/audio/japan/unit4/U4_car.mp3" },
{ challengeId: 12055, imageSrc: "/assets/images/japan/unit4/bus.svg", correct: false, text: "バス", audioSrc: "/assets/audio/japan/unit4/U4_bus.mp3" },
{ challengeId: 12055, imageSrc: "/assets/images/japan/unit4/train.svg", correct: true, text: "でんしゃ", audioSrc: "/assets/audio/japan/unit4/U4_train.mp3" },
{ challengeId: 12055, imageSrc: "/assets/images/japan/unit4/bicycle.svg", correct: false, text: "じてんしゃ", audioSrc: "/assets/audio/japan/unit4/U4_bicycle.mp3" },

// Unit 4 Lesson 3
// Challenge 12056 (Police Officer)
{ challengeId: 12056, imageSrc: "/assets/images/japan/unit4/officeworker.svg", correct: false, text: "かいしゃいん", audioSrc: "/assets/audio/japan/unit4/U4_officeworker.mp3" },
{ challengeId: 12056, imageSrc: "/assets/images/japan/unit4/engineer.svg", correct: false, text: "エンジニア", audioSrc: "/assets/audio/japan/unit4/U faj_engineer.mp3" },
{ challengeId: 12056, imageSrc: "/assets/images/japan/unit4/police.svg", correct: true, text: "けいさつかん", audioSrc: "/assets/audio/japan/unit4/U4_police.mp3" },
{ challengeId: 12056, imageSrc: "/assets/images/japan/unit4/chef.svg", correct: false, text: "シェフ", audioSrc: "/assets/audio/japan/unit4/U4_chef.mp3" },
// Challenge 12057 (Chef)
{ challengeId: 12057, correct: false, text: "かいしゃいん", audioSrc: "/assets/audio/japan/unit4/U4_officeworker.mp3" },
{ challengeId: 12057, correct: true, text: "シェフ", audioSrc: "/assets/audio/japan/unit4/U4_chef.mp3" },
{ challengeId: 12057, correct: false, text: "けいさつかん", audioSrc: "/assets/audio/japan/unit4/U4_police.mp3" },
{ challengeId: 12057, correct: false, text: "エンジニア", audioSrc: "/assets/audio/japan/unit4/U4_engineer.mp3" },
// Challenge 12058 (Engineer)
{ challengeId: 12058, imageSrc: "/assets/images/japan/unit4/chef.svg", correct: false, text: "シェフ", audioSrc: "/assets/audio/japan/unit4/U4_chef.mp3" },
{ challengeId: 12058, imageSrc: "/assets/images/japan/unit4/officeworker.svg", correct: false, text: "かいしゃいん", audioSrc: "/assets/audio/japan/unit4/U4_officeworker.mp3" },
{ challengeId: 12058, imageSrc: "/assets/images/japan/unit4/engineer.svg", correct: true, text: "エンジニア", audioSrc: "/assets/audio/japan/unit4/U4_engineer.mp3" },
{ challengeId: 12058, imageSrc: "/assets/images/japan/unit4/police.svg", correct: false, text: "けいさつかん", audioSrc: "/assets/audio/japan/unit4/U4_police.mp3" },

// Unit 4 Lesson 4
// Challenge 12059 (Eat Breakfast)
{ challengeId: 12059, imageSrc: "/assets/images/japan/unit4/sleep.svg", correct: false, text: "寝る", audioSrc: "/assets/audio/japan/unit4/U4_sleep.mp3" },
{ challengeId: 12059, imageSrc: "/assets/images/japan/unit4/book.svg", correct: false, text: "本を読む", audioSrc: "/assets/audio/japan/unit4/U4_Readbook.mp3" },
{ challengeId: 12059, imageSrc: "/assets/images/japan/unit4/breakfast.svg", correct: true, text: "朝ごはんを食べる", audioSrc: "/assets/audio/japan/unit4/U4_breakfast.mp3" },
{ challengeId: 12059, imageSrc: "/assets/images/japan/unit4/school.svg", correct: false, text: "学校へ行く", audioSrc: "/assets/audio/japan/unit4/U4_school.mp3" },
// Challenge 12060 (Go to School)
{ challengeId: 12060, correct: false, text: "本を読む", audioSrc: "/assets/audio/japan/unit4/U4_Readbook.mp3" },
{ challengeId: 12060, correct: false, text: "寝る", audioSrc: "/assets/audio/japan/unit4/U4_sleep.mp3" },
{ challengeId: 12060, correct: true, text: "学校へ行く", audioSrc: "/assets/audio/japan/unit4/U4_school.mp3" },
{ challengeId: 12060, correct: false, text: "朝ごはんを食べる", audioSrc: "/assets/audio/japan/unit4/U4_breakfast.mp3" },
// Challenge 12061 (Read a Book)
{ challengeId: 12061, imageSrc: "/assets/images/japan/unit4/school.svg", correct: false, text: "学校へ行く", audioSrc: "/assets/audio/japan/unit4/U4_school.mp3" },
{ challengeId: 12061, imageSrc: "/assets/images/japan/unit4/sleep.svg", correct: false, text: "寝る", audioSrc: "/assets/audio/japan/unit4/U4_sleep.mp3" },
{ challengeId: 12061, imageSrc: "/assets/images/japan/unit4/book.svg", correct: true, text: "本を読む", audioSrc: "/assets/audio/japan/unit4/U4_Readbook.mp3" },
{ challengeId: 12061, imageSrc: "/assets/images/japan/unit4/breakfast.svg", correct: false, text: "朝ごはんを食べる", audioSrc: "/assets/audio/japan/unit4/U4_breakfast.mp3" },

// Unit 4 Lesson 5
// Challenge 12062 (Pen)
{ challengeId: 12062, imageSrc: "/assets/images/japan/unit4/ruler.svg", correct: false, text: "じょうぎ", audioSrc: "/assets/audio/japan/unit4/U4_ruler.mp3" },
{ challengeId: 12062, imageSrc: "/assets/images/japan/unit4/bag.svg", correct: false, text: "かばん", audioSrc: "/assets/audio/japan/unit4/U4_bag.mp3" },
{ challengeId: 12062, imageSrc: "/assets/images/japan/unit4/pen.svg", correct: true, text: "ペン", audioSrc: "/assets/audio/japan/unit4/U4_pen.mp3" },
{ challengeId: 12062, imageSrc: "/assets/images/japan/unit4/book.svg", correct: false, text: "本", audioSrc: "/assets/audio/japan/unit4/U4_book.mp3" },
// Challenge 12063 (Book)
{ challengeId: 12063, correct: false, text: "じょうぎ", audioSrc: "/assets/audio/japan/unit4/U4_ruler.mp3" },
{ challengeId: 12063, correct: false, text: "かばん", audioSrc: "/assets/audio/japan/unit4/U4_bag.mp3" },
{ challengeId: 12063, correct: true, text: "本", audioSrc: "/assets/audio/japan/unit4/U4_book.mp3" },
{ challengeId: 12063, correct: false, text: "ペン", audioSrc: "/assets/audio/japan/unit4/U4_pen.mp3" },
// Challenge 12064 (Bag)
{ challengeId: 12064, imageSrc: "/assets/images/japan/unit4/book.svg", correct: false, text: "本", audioSrc: "/assets/audio/japan/unit4/U4_book.mp3" },
{ challengeId: 12064, imageSrc: "/assets/images/japan/unit4/ruler.svg", correct: false, text: "じょうぎ", audioSrc: "/assets/audio/japan/unit4/U4_ruler.mp3" },
{ challengeId: 12064, imageSrc: "/assets/images/japan/unit4/bag.svg", correct: true, text: "かばん", audioSrc: "/assets/audio/japan/unit4/U4_bag.mp3" },
{ challengeId: 12064, imageSrc: "/assets/images/japan/unit4/pen.svg", correct: false, text: "ペン", audioSrc: "/assets/audio/japan/unit4/U4_pen.mp3" },



// Unit 5 Lesson 1
// Challenge 12065 (Reading Books)
{ challengeId: 12065, imageSrc: "/assets/images/japan/unit5/walking.svg", correct: false, text: "歩く", audioSrc: "/assets/audio/japan/unit5/U5_walking.mp3" },
{ challengeId: 12065, imageSrc: "/assets/images/japan/unit5/cooking.svg", correct: false, text: "料理する", audioSrc: "/assets/audio/japan/unit5/U5_cooking.mp3" },
{ challengeId: 12065, imageSrc: "/assets/images/japan/unit5/book.svg", correct: true, text: "本を読む", audioSrc: "/assets/audio/japan/unit5/U5_book.mp3" },
{ challengeId: 12065, imageSrc: "/assets/images/japan/unit5/music.svg", correct: false, text: "音楽を聴く", audioSrc: "/assets/audio/japan/unit5/U5_music.mp3" },
// Challenge 12066 (Listening to Music)
{ challengeId: 12066, correct: false, text: "歩く", audioSrc: "/assets/audio/japan/unit5/U5_walking.mp3" },
{ challengeId: 12066, correct: true, text: "音楽を聴く", audioSrc: "/assets/audio/japan/unit5/U5_music.mp3" },
{ challengeId: 12066, correct: false, text: "本を読む", audioSrc: "/assets/audio/japan/unit5/U5_book.mp3" },
{ challengeId: 12066, correct: false, text: "料理する", audioSrc: "/assets/audio/japan/unit5/U5_cooking.mp3" },
// Challenge 12067 (Cooking)
{ challengeId: 12067, imageSrc: "/assets/images/japan/unit5/music.svg", correct: false, text: "音楽を聴く", audioSrc: "/assets/audio/japan/unit5/U5_music.mp3" },
{ challengeId: 12067, imageSrc: "/assets/images/japan/unit5/walking.svg", correct: false, text: "歩く", audioSrc: "/assets/audio/japan/unit5/U5_walking.mp3" },
{ challengeId: 12067, imageSrc: "/assets/images/japan/unit5/cooking.svg", correct: true, text: "料理する", audioSrc: "/assets/audio/japan/unit5/U5_cooking.mp3" },
{ challengeId: 12067, imageSrc: "/assets/images/japan/unit5/book.svg", correct: false, text: "本を読む", audioSrc: "/assets/audio/japan/unit5/U5_book.mp3" },

// Unit 5 Lesson 2
// Challenge 12068 (Happy)
{ challengeId: 12068, imageSrc: "/assets/images/japan/unit5/hardworking.svg", correct: false, text: "働き者", audioSrc: "/assets/audio/japan/unit5/U5_hardworking.mp3" },
{ challengeId: 12068, imageSrc: "/assets/images/japan/unit5/friendly.svg", correct: false, text: "親切", audioSrc: "/assets/audio/japan/unit5/U5_friendly.mp3" },
{ challengeId: 12068, imageSrc: "/assets/images/japan/unit5/happy.svg", correct: true, text: "うれしい", audioSrc: "/assets/audio/japan/unit5/U5_happy.mp3" },
{ challengeId: 12068, imageSrc: "/assets/images/japan/unit5/sad.svg", correct: false, text: "かなしい", audioSrc: "/assets/audio/japan/unit5/U5_sad.mp3" },
// Challenge 12069 (Sad)
{ challengeId: 12069, correct: false, text: "働き者", audioSrc: "/assets/audio/japan/unit5/U5_hardworking.mp3" },
{ challengeId: 12069, correct: false, text: "親切", audioSrc: "/assets/audio/japan/unit5/U5_friendly.mp3" },
{ challengeId: 12069, correct: true, text: "かなしい", audioSrc: "/assets/audio/japan/unit5/U5_sad.mp3" },
{ challengeId: 12069, correct: false, text: "うれしい", audioSrc: "/assets/audio/japan/unit5/U5_happy.mp3" },
// Challenge 12070 (Hardworking)
{ challengeId: 12070, imageSrc: "/assets/images/japan/unit5/sad.svg", correct: false, text: "かなしい", audioSrc: "/assets/audio/japan/unit5/U5_sad.mp3" },
{ challengeId: 12070, imageSrc: "/assets/images/japan/unit5/friendly.svg", correct: false, text: "親切", audioSrc: "/assets/audio/japan/unit5/U5_friendly.mp3" },
{ challengeId: 12070, imageSrc: "/assets/images/japan/unit5/hardworking.svg", correct: true, text: "働き者", audioSrc: "/assets/audio/japan/unit5/U5_hardworking.mp3" },
{ challengeId: 12070, imageSrc: "/assets/images/japan/unit5/happy.svg", correct: false, text: "うれしい", audioSrc: "/assets/audio/japan/unit5/U5_happy.mp3" },

// Unit 5 Lesson 3
// Challenge 12071 (Supermarket)
{ challengeId: 12071, imageSrc: "/assets/images/japan/unit5/pharmacy.svg", correct: false, text: "薬局", audioSrc: "/assets/audio/japan/unit5/U5_pharmacy.mp3" },
{ challengeId: 12071, imageSrc: "/assets/images/japan/unit5/postoffice.svg", correct: false, text: "郵便局", audioSrc: "/assets/audio/japan/unit5/U5_postoffice.mp3" },
{ challengeId: 12071, imageSrc: "/assets/images/japan/unit5/supermarket.svg", correct: true, text: "スーパー", audioSrc: "/assets/audio/japan/unit5/U5_supermarket.mp3" },
{ challengeId: 12071, imageSrc: "/assets/images/japan/unit5/bank.svg", correct: false, text: "銀行", audioSrc: "/assets/audio/japan/unit5/U5_bank.mp3" },
// Challenge 12072 (Bank)
{ challengeId: 12072, correct: false, text: "薬局", audioSrc: "/assets/audio/japan/unit5/U5_pharmacy.mp3" },
{ challengeId: 12072, correct: true, text: "銀行", audioSrc: "/assets/audio/japan/unit5/U5_bank.mp3" },
{ challengeId: 12072, correct: false, text: "スーパー", audioSrc: "/assets/audio/japan/unit5/U5_supermarket.mp3" },
{ challengeId: 12072, correct: false, text: "郵便局", audioSrc: "/assets/audio/japan/unit5/U5_postoffice.mp3" },
// Challenge 12073 (Pharmacy)
{ challengeId: 12073, imageSrc: "/assets/images/japan/unit5/bank.svg", correct: false, text: "銀行", audioSrc: "/assets/audio/japan/unit5/U5_bank.mp3" },
{ challengeId: 12073, imageSrc: "/assets/images/japan/unit5/postoffice.svg", correct: false, text: "郵便局", audioSrc: "/assets/audio/japan/unit5/U5_postoffice.mp3" },
{ challengeId: 12073, imageSrc: "/assets/images/japan/unit5/pharmacy.svg", correct: true, text: "薬局", audioSrc: "/assets/audio/japan/unit5/U5_pharmacy.mp3" },
{ challengeId: 12073, imageSrc: "/assets/images/japan/unit5/supermarket.svg", correct: false, text: "スーパー", audioSrc: "/assets/audio/japan/unit5/U5_supermarket.mp3" },

// Unit 5 Lesson 4
// Challenge 12074 (Headache)
{ challengeId: 12074, imageSrc: "/assets/images/japan/unit5/doctor.svg", correct: false, text: "医者", audioSrc: "/assets/audio/japan/unit5/U5_doctor.mp3" },
{ challengeId: 12074, imageSrc: "/assets/images/japan/unit5/cold.svg", correct: false, text: "かぜ", audioSrc: "/assets/audio/japan/unit5/U5_cold.mp3" },
{ challengeId: 12074, imageSrc: "/assets/images/japan/unit5/headache.svg", correct: true, text: "頭痛", audioSrc: "/assets/audio/japan/unit5/U5_headache.mp3" },
{ challengeId: 12074, imageSrc: "/assets/images/japan/unit5/exercise.svg", correct: false, text: "運動する", audioSrc: "/assets/audio/japan/unit5/U5_exercise.mp3" },
// Challenge 12075 (Cold)
{ challengeId: 12075, correct: false, text: "医者", audioSrc: "/assets/audio/japan/unit5/U5_doctor.mp3" },
{ challengeId: 12075, correct: true, text: "かぜ", audioSrc: "/assets/audio/japan/unit5/U5_cold.mp3" },
{ challengeId: 12075, correct: false, text: "頭痛", audioSrc: "/assets/audio/japan/unit5/U5_headache.mp3" },
{ challengeId: 12075, correct: false, text: "運動する", audioSrc: "/assets/audio/japan/unit5/U5_exercise.mp3" },
// Challenge 12076 (Exercise)
{ challengeId: 12076, imageSrc: "/assets/images/japan/unit5/cold.svg", correct: false, text: "かぜ", audioSrc: "/assets/audio/japan/unit5/U5_cold.mp3" },
{ challengeId: 12076, imageSrc: "/assets/images/japan/unit5/doctor.svg", correct: false, text: "医者", audioSrc: "/assets/audio/japan/unit5/U5_doctor.mp3" },
{ challengeId: 12076, imageSrc: "/assets/images/japan/unit5/exercise.svg", correct: true, text: "運動する", audioSrc: "/assets/audio/japan/unit5/U5_exercise.mp3" },
{ challengeId: 12076, imageSrc: "/assets/images/japan/unit5/headache.svg", correct: false, text: "頭痛", audioSrc: "/assets/audio/japan/unit5/U5_headache.mp3" },

// Unit 5 Lesson 5
// Challenge 12077 (Phone)
{ challengeId: 12077, imageSrc: "/assets/images/japan/unit5/internet.svg", correct: false, text: "インターネット", audioSrc: "/assets/audio/japan/unit5/U5_internet.mp3" },
{ challengeId: 12077, imageSrc: "/assets/images/japan/unit5/email.svg", correct: false, text: "メール", audioSrc: "/assets/audio/japan/unit5/U5_email.mp3" },
{ challengeId: 12077, imageSrc: "/assets/images/japan/unit5/phone.svg", correct: true, text: "電話", audioSrc: "/assets/audio/japan/unit5/U5_phone.mp3" },
{ challengeId: 12077, imageSrc: "/assets/images/japan/unit5/computer.svg", correct: false, text: "コンピューター", audioSrc: "/assets/audio/japan/unit5/U5_ computer.mp3" },
// Challenge 12078 (Computer)
{ challengeId: 12078, correct: false, text: "インターネット", audioSrc: "/assets/audio/japan/unit5/U5_internet.mp3" },
{ challengeId: 12078, correct: false, text: "メール", audioSrc: "/assets/audio/japan/unit5/U5_email.mp3" },
{ challengeId: 12078, correct: true, text: "コンピューター", audioSrc: "/assets/audio/japan/unit5/U5_computer.mp3" },
{ challengeId: 12078, correct: false, text: "電話", audioSrc: "/assets/audio/japan/unit5/U5_phone.mp3" },
// Challenge 12079 (Internet)
{ challengeId: 12079, imageSrc: "/assets/images/japan/unit5/computer.svg", correct: false, text: "コンピューター", audioSrc: "/assets/audio/japan/unit5/U5_computer.mp3" },
{ challengeId: 12079, imageSrc: "/assets/images/japan/unit5/email.svg", correct: false, text: "メール", audioSrc: "/assets/audio/japan/unit5/U5_email.mp3" },
{ challengeId: 12079, imageSrc: "/assets/images/japan/unit5/internet.svg", correct: true, text: "インターネット", audioSrc: "/assets/audio/japan/unit5/U5_internet.mp3" },
{ challengeId: 12079, imageSrc: "/assets/images/japan/unit5/phone.svg", correct: false, text: "電話", audioSrc: "/assets/audio/japan/unit5/U5_phone.mp3" },
] as const;
