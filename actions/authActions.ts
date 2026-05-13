"use server";

import { prisma } from "../lib/db";

export async function kayitOl(formData: FormData) {
  const ad_soyad = formData.get("ad_soyad") as string;
  const eposta = formData.get("eposta") as string;
  const sifre = formData.get("sifre") as string;
  const guvenlik_sorusu = formData.get("guvenlik_sorusu") as string;
  const guvenlik_cevabi = formData.get("guvenlik_cevabi") as string;

  try {
    const mevcutKullanici = await prisma.prj_kullanicilar.findUnique({
      where: { eposta },
    });

    if (mevcutKullanici) {
      return { success: false, error: "Bu e-posta zaten kayıtlı kanka!" };
    }

    await prisma.prj_kullanicilar.create({
      data: {
        ad_soyad,
        eposta,
        sifre_hash: sifre,
        rol: "OGRENCI",
        guvenlik_sorusu,
        guvenlik_cevabi: guvenlik_cevabi.toLowerCase().trim(),
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Kayıt hatası kanks:", error);
    return { success: false, error: "Veritabanına ulaşılamadı!" };
  }
}

export async function girisYap(formData: FormData) {
  const eposta = formData.get("eposta") as string;
  const sifre = formData.get("sifre") as string;

  try {
    const kullanici = await prisma.prj_kullanicilar.findUnique({
      where: { eposta },
    });

    if (!kullanici || kullanici.sifre_hash !== sifre) {
      return { success: false, error: "E-posta veya şifre hatalı!" };
    }

    return {
      success: true,
      user: { id: kullanici.id, ad: kullanici.ad_soyad },
    };
  } catch (error) {
    console.error("Giriş hatası kanks:", error);
    return { success: false, error: "Sistemsel bir hata oluştu." };
  }
}

export async function guvenlikSorusunuGetir(eposta: string) {
  try {
    const kullanici = await prisma.prj_kullanicilar.findUnique({
      where: { eposta },
      select: { guvenlik_sorusu: true },
    });

    if (!kullanici) return { success: false, error: "E-posta bulunamadı!" };
    return { success: true, soru: kullanici.guvenlik_sorusu };
  } catch {
    return { success: false, error: "Bir hata oluştu!" };
  }
}

export async function sifreSifirla(formData: FormData) {
  const eposta = formData.get("eposta") as string;
  const cevap = formData.get("guvenlik_cevabi") as string;
  const yeni_sifre = formData.get("yeni_sifre") as string;

  try {
    const kullanici = await prisma.prj_kullanicilar.findUnique({
      where: { eposta },
    });

    if (!kullanici) {
      return { success: false, error: "Bu e-posta kayıtlı değil!" };
    }

    if (!kullanici.guvenlik_cevabi) {
      return { success: false, error: "Güvenlik sorusu tanımlanmamış!" };
    }

    if (kullanici.guvenlik_cevabi !== cevap.toLowerCase().trim()) {
      return { success: false, error: "Güvenlik sorusu cevabı yanlış!" };
    }

    await prisma.prj_kullanicilar.update({
      where: { eposta },
      data: { sifre_hash: yeni_sifre },
    });

    return { success: true };
  } catch (error) {
    console.error("Şifre sıfırlama hatası:", error);
    return { success: false, error: "Bir hata oluştu!" };
  }
}
