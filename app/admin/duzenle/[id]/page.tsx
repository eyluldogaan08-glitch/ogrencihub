import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import AdminDuzenleClient from "./AdminDuzenleClient";

interface ProjeData {
  id: number;
  baslik: string | null;
  ozet: string | null;
  icerik: string | null;
  kapak_resmi_url: string | null;
  detay_fotolari: string[];
  dosya_linkleri: string[];
  ad_soyad: string | null;
  prj_kullanicilar: {
    ad_soyad: string;
    eposta: string;
  } | null;
}

export default async function AdminDuzenlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const proje = await prisma.prj_projeler.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      prj_kullanicilar: {
        select: {
          ad_soyad: true,
          eposta: true,
        },
      },
    },
  });

  if (!proje) notFound();

  return <AdminDuzenleClient proje={proje as unknown as ProjeData} />;
}
