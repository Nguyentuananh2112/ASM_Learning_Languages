import { pgTable, serial, text, varchar, integer, primaryKey } from 'drizzle-orm/pg-core';

// Bảng users
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  // Thêm các trường khác nếu cần
});

// Bảng languages
export const languages = pgTable('languages', {
  id: serial('id').primaryKey(),
  code: varchar('code', { length: 10 }).notNull().unique(), // vd: 'en', 'vi', 'jp'
  name: varchar('name', { length: 100 }).notNull(),
  flag: varchar('flag', { length: 100 }).notNull(), // đường dẫn file flag
});

// Bảng user_languages: ngôn ngữ hiện tại của user
export const userLanguages = pgTable('user_languages', {
  userId: integer('user_id').notNull().references(() => users.id),
  languageId: integer('language_id').notNull().references(() => languages.id),
}, (table) => ({
  pk: primaryKey({ columns: [table.userId] }), // mỗi user chỉ có 1 ngôn ngữ hiện tại
}));

// Bảng units: các unit cho từng ngôn ngữ
export const units = pgTable('units', {
  id: serial('id').primaryKey(),
  languageId: integer('language_id').notNull().references(() => languages.id),
  title: varchar('title', { length: 100 }).notNull(),
  description: text('description'),
  // Thêm các trường khác nếu cần
}); 