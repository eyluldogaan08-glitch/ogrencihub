import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const id = Number(formData.get("id"));
    const dosya_linkleri = JSON.parse(
      (formData.get("dosya_linkleri") as string) || "[]",
    );

    await prisma.prj_projeler.update({
      where: { id },
      data: {
        baslik: formData.get("baslik") as string,
        ozet: formData.get("ozet") as string,
        icerik: formData.get("icerik") as string,
        kapak_resmi_url: formData.get("kapak_resmi_url") as string,
        dosya_linkleri,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Güncelleme başarısız" },
      { status: 500 },
    );
  }
}
