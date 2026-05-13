import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

// Next.js'in bu dosyayı dinamik olarak işlemesini sağlıyoruz
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const arama = searchParams.get("arama") || "";
    const dersId = Number(searchParams.get("ders_id"));

    const projeler = await prisma.prj_projeler.findMany({
      where: {
        durum: "onaylandi",
        AND: [
          {
            OR: [
              { baslik: { contains: arama, mode: "insensitive" } },
              { ozet: { contains: arama, mode: "insensitive" } },
            ],
          },
          dersId !== 0 && !isNaN(dersId) ? { ders_id: dersId } : {},
        ],
      },
      include: {
        prj_dersler: true,
        prj_kullanicilar: {
          select: {
            ad_soyad: true,
          },
        },
      },
      orderBy: {
        olusturma_tarihi: "desc",
      },
    });

    return NextResponse.json(projeler);
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "API Hatası";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
