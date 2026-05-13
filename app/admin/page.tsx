import { prisma } from "@/lib/db";
import Navbar from "@/components/Navbar";
import AdminProjeKarti from "./AdminProjeKarti";
import { dersEkle, dersSil } from "@/actions/adminActions";

interface ProjeVerisi {
  id: number;
  baslik: string | null;
  ozet: string | null;
  kapak_resmi_url: string | null;
  detay_fotolari: string[];
  dosya_linkleri: string[];
  ad_soyad: string | null;
  durum: string | null;
  prj_dersler: { ders_adi: string | null } | null;
  prj_kullanicilar: { ad_soyad: string | null } | null;
}

export default async function AdminPage() {
  const tumProjeler = await prisma.prj_projeler.findMany({
    include: {
      prj_dersler: true,
      prj_kullanicilar: true,
    },
    orderBy: {
      olusturma_tarihi: "desc",
    },
  });

  const dersler = await prisma.prj_dersler.findMany({
    orderBy: {
      id: "asc",
    },
  });

  const bekleyenler = tumProjeler.filter((p) => p.durum === "onay_bekliyor");

  const onaylilar = tumProjeler.filter((p) => p.durum === "onaylandi");

  return (
    <main className="min-h-screen bg-[#FAFAFA] pb-20">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 mt-16">
        <header className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">
            Yönetim Paneli
          </h1>

          <p className="text-gray-400 font-medium tracking-tight">
            Sistemi buradan yönetiyoruz.
          </p>
        </header>

        {/* DERS YÖNETİMİ */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-blue-600 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            Ders Kategorileri ({dersler.length})
          </h2>

          <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-6 mb-4">
            <div className="grid gap-3 mb-6">
              {dersler.map((ders) => (
                <div
                  key={ders.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl"
                >
                  <span className="font-semibold text-gray-700">
                    {ders.ders_adi}
                  </span>

                  <form action={dersSil}>
                    <input type="hidden" name="id" value={ders.id} />

                    <button
                      type="submit"
                      className="text-red-400 hover:text-red-600 text-sm font-bold transition"
                    >
                      Sil
                    </button>
                  </form>
                </div>
              ))}
            </div>

            <form action={dersEkle} className="flex gap-3">
              <input
                name="ders_adi"
                type="text"
                required
                placeholder="Yeni ders adı..."
                className="flex-1 px-4 py-3 bg-gray-50 rounded-2xl outline-none focus:ring-2 ring-blue-100 font-medium text-sm"
              />

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-blue-700 transition"
              >
                Ekle
              </button>
            </form>
          </div>
        </section>

        {/* ONAY BEKLEYENLER */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-orange-600 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            Onay Bekleyenler ({bekleyenler.length})
          </h2>

          <div className="grid gap-4">
            {bekleyenler.map((proje) => (
              <AdminProjeKarti
                key={proje.id}
                proje={proje as unknown as ProjeVerisi}
              />
            ))}

            {bekleyenler.length === 0 && (
              <p className="text-gray-400 italic text-sm">
                Bekleyen işlem yok.
              </p>
            )}
          </div>
        </section>

        {/* ONAYLANMIŞLAR */}
        <section>
          <h2 className="text-xl font-bold text-green-600 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            Yayındaki Kayıtlar ({onaylilar.length})
          </h2>

          <div className="grid gap-4 opacity-75 hover:opacity-100 transition-opacity">
            {onaylilar.map((proje) => (
              <AdminProjeKarti
                key={proje.id}
                proje={proje as unknown as ProjeVerisi}
                isApproved
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
