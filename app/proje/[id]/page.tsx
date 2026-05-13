import { prisma } from "@/lib/db";
import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import FotoSlayt from "./FotoSlayt";

// Tip güvenliği için arayüz tanımı
interface ProjeWithRelations {
  id: number;
  baslik: string | null;
  ozet: string | null;
  icerik: string | null;
  kapak_resmi_url: string | null;
  detay_fotolari: string[];
  dosya_linkleri: string[];
  prj_dersler: { ders_adi: string } | null;
  prj_kullanicilar: { ad_soyad: string; eposta: string } | null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const proje = await prisma.prj_projeler.findUnique({
    where: { id: Number(id) },
    include: { prj_dersler: true, prj_kullanicilar: true },
  });

  if (!proje) return { title: "Proje Bulunamadı" };

  return {
    title: proje.baslik || "Proje Detayı",
    description: proje.ozet || "Proje detaylarını inceleyin.",
    openGraph: {
      title: proje.baslik || "Proje Detayı",
      description: proje.ozet || "",
      images: proje.kapak_resmi_url ? [proje.kapak_resmi_url] : [],
    },
  };
}

export default async function ProjeDetayPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const projeId = Number(id);

  const rawProje = await prisma.prj_projeler.findUnique({
    where: { id: projeId },
    include: { prj_dersler: true, prj_kullanicilar: true },
  });

  if (!rawProje) notFound();

  // image_1eed8c.png'deki 'Unexpected any' hatasını bu güvenli cast ile çözüyoruz
  const proje = rawProje as unknown as ProjeWithRelations;

  // Dosya ve Fotoğraf hazırlığı
  const dosyaLinkleri = Array.isArray(proje.dosya_linkleri)
    ? proje.dosya_linkleri
    : [];
  const detayFotolari = Array.isArray(proje.detay_fotolari)
    ? proje.detay_fotolari
    : [];
  const tumKaynaklar = [...dosyaLinkleri, ...detayFotolari];

  // Sadece resim olanları ayıklıyoruz (Slayt için)
  const fotograflar = tumKaynaklar.filter((link) => {
    const l = typeof link === "string" ? link.toLowerCase() : "";
    return (
      l.endsWith(".jpg") ||
      l.endsWith(".jpeg") ||
      l.endsWith(".png") ||
      l.endsWith(".webp") ||
      l.endsWith(".gif")
    );
  });

  // Resim olmayan diğer dosyalar (Dosya listesi için)
  const digerDosyalar = dosyaLinkleri.filter(
    (link) => !fotograflar.includes(link),
  );

  return (
    <main className="min-h-screen bg-white pb-20">
      <Navbar />

      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* BAŞLIK VE KULLANICI BİLGİSİ */}
        <header className="mb-12">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
            {proje.prj_dersler?.ders_adi || "Proje"}
          </span>

          <h1 className="text-5xl font-serif font-bold text-gray-900 mt-8 mb-6 leading-tight">
            {proje.baslik}
          </h1>

          <div className="flex items-center gap-3 text-gray-500">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 text-blue-600 font-bold">
              {proje.prj_kullanicilar?.ad_soyad?.[0]?.toUpperCase() || "?"}
            </div>
            <div>
              <p className="text-[9px] font-black uppercase text-gray-400">
                Paylaşan Öğrenci
              </p>
              <p className="text-sm font-bold text-gray-800">
                {proje.prj_kullanicilar?.ad_soyad || "Bilinmiyor"}
              </p>
            </div>
          </div>
        </header>

        {/* ANA İÇERİK */}
        <section className="mb-16">
          <div
            className="prose prose-blue max-w-none text-gray-700 leading-relaxed text-lg"
            dangerouslySetInnerHTML={{ __html: proje.icerik || "" }}
          />
        </section>

        {/* FOTOĞRAF SLAYTI (Resim varsa görünür) */}
        {fotograflar.length > 0 && (
          <div className="my-20">
            <h3 className="text-[10px] font-black uppercase text-gray-400 mb-8 tracking-widest text-center">
              — PROJE GALERİSİ —
            </h3>
            <FotoSlayt fotograflar={fotograflar} />
          </div>
        )}

        {/* PROJE DOSYALARI LİSTESİ */}
        <footer className="mt-20 pt-10 border-t border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="text-2xl">📂</span> Proje Dosyaları
          </h3>

          {/* Sadece resim olmayan dosyaları (digerDosyalar) burada listeliyoruz */}
          {digerDosyalar.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {digerDosyalar.map((link, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-transparent hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm text-2xl border border-gray-100">
                    📄
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="text-xs font-bold text-gray-800 truncate group-hover:text-blue-600">
                      {link.split("/").pop() || `Ek Dosya ${index + 1}`}
                    </p>
                    <p className="text-[9px] text-gray-400 font-black uppercase mt-1">
                      Görüntülemek için tıkla
                    </p>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="p-12 bg-gray-50 rounded-[2rem] border border-dashed border-gray-200 text-center text-sm text-gray-400 italic">
              Bu projeye henüz indirilebilir bir dosya eklenmemiş.
            </div>
          )}
        </footer>
      </article>
    </main>
  );
}
