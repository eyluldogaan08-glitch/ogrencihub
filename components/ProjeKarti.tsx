import Link from "next/link";

interface ProjeKartiProps {
  proje: {
    id: number;
    baslik: string;
    ozet: string | null;
    durum: string | null;
    yazar_id: number | null;
    ders_id: number | null;
    kapak_resmi_url?: string | null;
    prj_dersler?: { ders_adi: string | null } | null;
    prj_kullanicilar?: { ad_soyad: string | null } | null;
  };
}

export default function ProjeKarti({ proje }: ProjeKartiProps) {
  return (
    <Link href={`/proje/${proje.id}`}>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        {/* KAPAK FOTOĞRAFI */}
        {proje.kapak_resmi_url ? (
          <img
            src={proje.kapak_resmi_url}
            alt={proje.baslik}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
            <span className="text-4xl">📁</span>
          </div>
        )}

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {proje.prj_dersler?.ders_adi ?? "Ders Yok"}
            </span>
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                proje.durum === "onaylandi"
                  ? "bg-green-100 text-green-700"
                  : proje.durum === "onay_bekliyor"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-gray-100 text-gray-500"
              }`}
            >
              {proje.durum ?? "Belirsiz"}
            </span>
          </div>

          <h2 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
            {proje.baslik}
          </h2>

          <p className="text-sm text-gray-500 line-clamp-3 mb-4">
            {proje.ozet ?? "Özet bulunmuyor."}
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>👤</span>
            <span>{proje.prj_kullanicilar?.ad_soyad ?? "Bilinmiyor"}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

