import { relations } from "drizzle-orm";
import { integer, pgTable, point, serial, text } from "drizzle-orm/pg-core";

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  imageSrc: text("image_src").notNull(), 
});

// Mỗi khóa học (courses) có nhiều userProgress liên quan
// mối quan hệ "1-nhiều"
export const coursesRelations = relations(courses, ({ many}) => ({
   userProgress: many(userProgress),

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