import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { userLanguages } from '@/lib/schema';
import { eq } from 'drizzle-orm';

// Giả lập userId, thực tế lấy từ auth
const USER_ID = 1;

export async function GET() {
  const userLang = await db.select().from(userLanguages).where(eq(userLanguages.userId, USER_ID));
  return NextResponse.json(userLang[0] || null);
}

export async function POST(req: Request) {
  const { userId, languageId } = await req.json();
  // Xóa ngôn ngữ cũ nếu có
  await db.delete(userLanguages).where(eq(userLanguages.userId, userId));
  // Lưu ngôn ngữ mới
  await db.insert(userLanguages).values({ userId, languageId });
  // Trả về bản ghi mới nhất
  const userLang = await db.select().from(userLanguages).where(eq(userLanguages.userId, userId));
  return NextResponse.json(userLang[0] || null);
} 