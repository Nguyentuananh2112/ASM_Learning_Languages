import { desc, relations } from "drizzle-orm";
import { integer, pgEnum, pgTable, point, serial, text, boolean } from "drizzle-orm/pg-core";
import { use } from "react";

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  imageSrc: text("image_src").notNull(), 
});

// Mỗi khóa học (courses) có nhiều userProgress liên quan
// mối quan hệ "1-nhiều"
export const coursesRelations = relations(courses, ({ many}) => ({
   userProgress: many(userProgress),
    units: many(units),
}));

export const units = pgTable("units", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(), // đây là Unit
  description: text("description").notNull(), // mô tả ngắn về Unit
  courseId: integer("course_id").references(() => courses.id, {
    onDelete: "cascade",
  }).notNull(), // khóa ngoại liên kết với bảng courses
  order: integer("order").notNull(), // thứ tự của Unit trong khóa học
})

export const unitRelations = relations(units, ({ many, one }) => ({
  course: one(courses, {
    fields: [units.courseId],
    references: [courses.id],
  }),
  lessons: many(lessons), // mỗi Unit có thể có nhiều bài học
  // có thể có nhiều câu hỏi liên quan đến Unit này
}));

export const lessons = pgTable("lessons", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(), // tiêu đề của bài học
  unitId: integer("unit_id").references(() => units.id, {
    onDelete: "cascade"
  }).notNull(), // khóa ngoại liên kết với bảng units
  order: integer("order").notNull(), // thứ tự của bài học trong Unit
  
});

export const lessonsRelations = relations(lessons, ({ one, many }) => ({
  unit: one(units, {
    fields: [lessons.unitId],
    references: [units.id],
  }),
  // mỗi bài học có thể có nhiều câu hỏi

  challenges: many(challenges), // mối quan hệ với bảng challenges
}));

export const challengesEnum = pgEnum("type", ["SELECT", "ASSIST"])

export const challenges = pgTable("challenges", {
  id: serial("id").primaryKey(),
  lessonId: integer("lesson_id").references(() => lessons.id, {
    onDelete: "cascade"
  }).notNull(), // khóa ngoại liên kết với bảng lessons
  type: challengesEnum("type").notNull(), // loại câu hỏi, có thể là SELECT hoặc ASSIST
  question: text("question").notNull(), // câu hỏi
  order: integer("order").notNull(), // random thứ tự của câu hỏi trong bài học

});

export const challengesRelations = relations(challenges, ({ one, many }) => ({
  lesson: one(lessons, {
    fields: [challenges.lessonId],
    references: [lessons.id],
  }),
  challengeOptions: many(challengeOptions), // mối quan hệ với bảng challengeOptions
  challengeProgress: many(challengeProgress), // mối quan hệ với bảng challengeProgress
}));

export const challengeOptions = pgTable("challenge_options", {
  id: serial("id").primaryKey(),
  challengeId: integer("challenge_id").references(() => challenges.id, {
    onDelete: "cascade"
  }).notNull(), // khóa ngoại liên kết với bảng challenges
  text: text("text").notNull(), 
  correct: boolean("correct").notNull(), // đánh dấu đáp án đúng
  imageSrc: text("image_src"),
  audioSrc: text("audio_src"),
});


export const challengeOptionsRelations = relations(challengeOptions, ({ one }) => ({
  challenge: one(challenges, {
    fields: [challengeOptions.challengeId],
    references: [challenges.id],
  }),
}));



export const challengeProgress = pgTable("challenge_progress", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(), // ID của người dùng
  challengeId: integer("challenge_id").references(() => challenges.id, {
    onDelete: "cascade"
  }).notNull(), // khóa ngoại liên kết với bảng challenges
  completed: boolean("completed").notNull().default(false), // trạng thái hoàn thành
  
});


export const challengeProgressRelations = relations(challengeProgress, ({ one }) => ({
  challenge: one(challenges, {
    fields: [challengeProgress.challengeId],
    references: [challenges.id],
  }),
}));



// bảng user_progress, đại diện cho tiến trình học của người dùng
export const userProgress = pgTable("user_progress" , {
  userId: text("user_id").primaryKey(),
  userName: text("user_name").notNull().default("User"),
  userImageSrc: text("user_image_src").notNull().default("/mascot.svg"),
  activeCourseId: integer("active_course_id").references(() => courses.id, 
  { onDelete: "cascade" }),
  hearts: integer("hearts").notNull().default(5),
  points: integer("points").notNull().default(0),
});


// Đây là mối quan hệ "1-1" giữa mỗi dòng trong bảng user_progress và một dòng trong bảng courses
// activeCourseId, có thể lấy ra khóa học hiện tại của người dùng
export const userProgressRelations = relations(userProgress, ({ one }) => ({
  activeCourse: one(courses,{
    fields: [userProgress.activeCourseId],
    references: [courses.id],
  }),
}));