"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

async function dosyaKaydet(file: File): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const uploadDir = path.join(process.cwd(), "public/uploads");
  await mkdir(uploadDir, { recursive: true });
  const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
  await writeFile(path.join(uploadDir, fileName), buffer);
  return `/uploads/${fileName}`;
}

export async function projePaylas(
  formData: FormData,
): Promise<{ success: boolean; error?: string }> {
  try {
    const baslik = formData.get("baslik") as string;
    const ozet = formData.get("ozet") as string;
    const icerik = formData.get("icerik") as string;
    const ders_id = Number(formData.get("ders_id"));
    const kullanici_id = Number(formData.get("kullanici_id"));

    // Kapak fotoğrafı
    let kapak_resmi_url = null;
    const kapakFile = formData.get("kapak_resmi") as File | null;
    if (kapakFile && kapakFile.size > 0) {
      kapak_resmi_url = await dosyaKaydet(kapakFile);
    }

    // Detay fotoğrafları
    const detayFotolar = formData.getAll("detay_fotolar") as File[];
    const dosya_linkleri: string[] = [];
    for (const foto of detayFotolar) {
      if (foto && foto.size > 0) {
        const url = await dosyaKaydet(foto);
        dosya_linkleri.push(url);
      }
    }

    await prisma.prj_projeler.create({
      data: {
        baslik,
        ozet,
        icerik,
        ders_id,
        yazar_id: kullanici_id || 1,
        durum: "onay_bekliyor",
        kapak_resmi_url,
        dosya_linkleri,
      },
    });

    revalidatePath("/admin");
    revalidatePath("/");
    return { success: true };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Bilinmeyen hata";
    console.error("Kayıt hatası:", errorMessage);
    return { success: false, error: errorMessage };
  }
}
