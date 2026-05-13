"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function durumGuncelle(formData: FormData) {
  const id = Number(formData.get("id"));
  const hamDurum = formData.get("yeniDurum") as string;
  const yeniDurum = hamDurum.trim().toLowerCase();

  try {
    await prisma.prj_projeler.update({
      where: { id },
      data: { durum: yeniDurum },
    });
    revalidatePath("/admin");
    revalidatePath("/");
  } catch (error: unknown) {
    console.error(
      "Durum Güncelleme Hatası:",
      error instanceof Error ? error.message : "Hata",
    );
  }
}

export async function silmeAksiyonu(formData: FormData) {
  const id = Number(formData.get("id"));
  await prisma.prj_projeler.delete({ where: { id } });
  revalidatePath("/admin");
}

export async function projeGuncelle(formData: FormData) {
  const id = Number(formData.get("id"));
  const kapak_resmi_url = formData.get("kapak_resmi_url") as string | null;
  const dosya_linkleri = JSON.parse(
    (formData.get("dosya_linkleri") as string) || "[]",
  );

  await prisma.prj_projeler.update({
    where: { id },
    data: {
      baslik: formData.get("baslik") as string,
      ozet: formData.get("ozet") as string,
      icerik: formData.get("icerik") as string,
      ...(kapak_resmi_url ? { kapak_resmi_url } : {}),
      dosya_linkleri,
    },
  });
  revalidatePath("/admin");
  redirect("/admin");
}

export async function dersEkle(formData: FormData) {
  const ders_adi = formData.get("ders_adi") as string;
  const url_etiketi = ders_adi
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

  await prisma.prj_dersler.create({
    data: { ders_adi, url_etiketi },
  });
  revalidatePath("/admin");
  revalidatePath("/");
}

export async function dersSil(formData: FormData) {
  const id = Number(formData.get("id"));
  await prisma.prj_dersler.delete({ where: { id } });
  revalidatePath("/admin");
  revalidatePath("/");
}
