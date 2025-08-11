import db from "@/app/db/drizzle";
import { challengeOptions } from "@/app/db/schema";
import { isAdmin } from "@/lib/admin"
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server"

// (tuỳ chọn) helper: "" -> null để tránh empty src warning
const toNull = (v?: string | null) => (v && v.trim().length ? v : null);

export const GET = async (
req: Request,
{ params }: { params: Promise<{ challengeOptionId: string }> }
) => {
    if (!(await isAdmin())) {
        return new NextResponse("Unauthorized", { status: 403 });
    }

    const { challengeOptionId } = await params;                     
    const id = Number(challengeOptionId);

    const data = await db.query.challengeOptions.findFirst({
        where: eq(challengeOptions.id, id),
    });

    return NextResponse.json(data);
};


export const PUT = async (
req: Request,
{ params }: { params: Promise<{ challengeOptionId: string }> }
) => {
    if (!(await isAdmin())) {
        return new NextResponse("Unauthorized", { status: 403 });
    }

      const { challengeOptionId } = await params;
  const id = Number(challengeOptionId);

  const body = await req.json();

  // (tuỳ chọn) chuẩn hoá dữ liệu trước khi lưu
  const payload = {
    text: String(body.text ?? "").trim(),
    correct: Boolean(body.correct),
    challengeId: Number(body.challengeId),
    imageSrc: toNull(body.imageSrc ?? body.image_src),
    audioSrc: toNull(body.audioSrc ?? body.audio_src),
  };

  const data = await db
    .update(challengeOptions)
    .set(payload)
    .where(eq(challengeOptions.id, id))
    .returning();

  return NextResponse.json(data[0]);
};

export const DELETE = async (
  req: Request,
  { params }: { params: Promise<{ challengeOptionId: string }> }
) => {
  if (!(await isAdmin())) {
    return new NextResponse("Unauthorized", { status: 403 });
  }

  const { challengeOptionId } = await params;
  const id = Number(challengeOptionId);

  const data = await db
    .delete(challengeOptions)
    .where(eq(challengeOptions.id, id))
    .returning();

  return NextResponse.json(data[0]);
};