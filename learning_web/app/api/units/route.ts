import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { units } from '@/lib/schema';
import { eq } from 'drizzle-orm';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const languageId = Number(searchParams.get('languageId'));
  if (!languageId) return NextResponse.json([]);
  const data = await db.select().from(units).where(eq(units.languageId, languageId));
  return NextResponse.json(data);
} 