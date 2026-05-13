"use client";

import Link from "next/link";
import { durumGuncelle, silmeAksiyonu } from "@/actions/adminActions";
import { useTransition } from "react";

interface ProjeTipi {
  id: number;
  baslik: string | null;
  ad_soyad?: string | null;
  detay_fotolari?: string[];
  dosya_linkleri?: string[];
  prj_dersler?: { ders_adi: string | null } | null;
  prj_kullanicilar?: { ad_soyad: string | null } | null;
}

export default function AdminProjeKarti({
  proje,
  isApproved = false,
}: {
  proje: ProjeTipi;
  isApproved?: boolean;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <div
      className={`p-5 bg-white border rounded-[2.5rem] shadow-sm transition-all ${
        isPending ? "opacity-50 grayscale pointer-events-none" : ""
      }`}
    >
      <div className="flex justify-between items-start gap-6">
        <div className="flex-1">
          <h3 className="font-bold text-gray-800 leading-tight text-lg">
            {proje.baslik}
          </h3>

          <p className="text-[10px] text-blue-600 font-black uppercase tracking-widest mt-1">
            Kategori: {proje.prj_dersler?.ders_adi}
          </p>

          <p className="text-sm text-gray-500 mt-2">
            Gönderen: {proje.ad_soyad || "Belirtilmemiş"}
          </p>

          {/* DETAY FOTOĞRAFLARI */}
          {proje.detay_fotolari && proje.detay_fotolari.length > 0 && (
            <div className="mt-4">
              <p className="text-xs font-bold text-gray-500 mb-2">
                Detay Fotoğrafları
              </p>

              <div className="flex flex-wrap gap-2">
                {proje.detay_fotolari.map((foto, i) => (
                  <img
                    key={i}
                    src={foto}
                    alt={`Detay ${i + 1}`}
                    className="w-20 h-20 object-cover rounded-xl border"
                  />
                ))}
              </div>
            </div>
          )}

          {/* DOSYALAR */}
          {proje.dosya_linkleri && proje.dosya_linkleri.length > 0 && (
            <div className="mt-4">
              <p className="text-xs font-bold text-gray-500 mb-2">
                Yüklenen Dosyalar
              </p>

              <div className="flex flex-col gap-1">
                {proje.dosya_linkleri.map((dosya, i) => (
                  <a
                    key={i}
                    href={dosya}
                    target="_blank"
                    className="text-blue-600 text-sm hover:underline"
                  >
                    📎 Dosya {i + 1}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/admin/duzenle/${proje.id}`}
            className="bg-gray-100 text-gray-600 px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-gray-200 transition"
          >
            Düzenle
          </Link>

          <form action={(fd) => startTransition(() => durumGuncelle(fd))}>
            <input type="hidden" name="id" value={proje.id} />
            <input
              type="hidden"
              name="yeniDurum"
              value={isApproved ? "onay_bekliyor" : "onaylandi"}
            />

            <button
              disabled={isPending}
              className={`px-5 py-2.5 rounded-xl text-white font-bold text-xs transition ${
                isApproved
                  ? "bg-orange-500 hover:bg-orange-600"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {isPending ? "..." : isApproved ? "Geri Al" : "Onayla"}
            </button>
          </form>

          <form
            action={(fd) => {
              if (confirm("Projeyi siliyoruz kanka, emin misin?")) {
                startTransition(() => silmeAksiyonu(fd));
              }
            }}
          >
            <input type="hidden" name="id" value={proje.id} />

            <button
              disabled={isPending}
              className="p-2.5 text-red-400 hover:bg-red-50 rounded-xl transition"
            >
              Sil
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
