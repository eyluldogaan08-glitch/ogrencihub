import { prisma } from "@/lib/db";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

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

  const proje = await prisma.prj_projeler.findUnique({
    where: { id: projeId },
    include: { prj_dersler: true, prj_kullanicilar: true },
  });

  if (!proje) notFound();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <header className="mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
            {proje.prj_dersler?.ders_adi}
          </span>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mt-6 mb-4">
            {proje.baslik}
          </h1>
          <div className="text-gray-500 font-medium">
            Paylaşan: {proje.prj_kullanicilar?.ad_soyad}
          </div>
        </header>

        <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-gray-100 mb-12">
          <Image
            src={proje.kapak_resmi_url || "/placeholder.jpg"}
            alt="Proje"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 text-lg mb-10">{proje.ozet}</p>
          <div className="text-gray-600 whitespace-pre-wrap">
            {proje.icerik}
          </div>
        </div>
      </article>
    </main>
  );
}
