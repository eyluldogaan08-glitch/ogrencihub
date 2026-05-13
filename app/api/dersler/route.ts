import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const dersler = await prisma.prj_dersler.findMany({
      orderBy: { id: "asc" },
    });
    return NextResponse.json(dersler);
  } catch {
    return NextResponse.json({ error: "Hata" }, { status: 500 });
  }
}
