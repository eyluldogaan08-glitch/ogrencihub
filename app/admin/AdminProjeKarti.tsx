"use client";

import Link from "next/link";
import { durumGuncelle, silmeAksiyonu } from "@/actions/adminActions";
import { useTransition } from "react";

// TİP TANIMLAMASI (Any hatasını sildik)
interface ProjeTipi {
  id: number;
  baslik: string | null;
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
      className={`p-5 bg-white border rounded-[2.5rem] flex items-center gap-6 shadow-sm transition-all ${isPending ? "opacity-50 grayscale pointer-events-none" : ""}`}
    >
      <div className="flex-1">
        <h3 className="font-bold text-gray-800 leading-tight">
          {proje.baslik}
        </h3>
        <p className="text-[10px] text-blue-600 font-black uppercase tracking-widest mt-1">
          Kategori: {proje.prj_dersler?.ders_adi}
        </p>
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
            className={`px-5 py-2.5 rounded-xl text-white font-bold text-xs transition ${isApproved ? "bg-orange-500 hover:bg-orange-600" : "bg-green-600 hover:bg-green-700"}`}
          >
            {isPending ? "..." : isApproved ? "Geri Al" : "Onayla"}
          </button>
        </form>

        <form
          action={(fd) => {
            if (confirm("Projeyi siliyoruz kanka, emin misin?"))
              startTransition(() => silmeAksiyonu(fd));
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
  );
}
