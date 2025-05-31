import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { languages } from '@/lib/schema';

export async function GET() {
  const langs = await db.select().from(languages);
  return NextResponse.json(langs);
} 