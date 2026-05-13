"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

interface Proje {
  id: number;
  baslik: string | null;
  ozet: string | null;
  icerik: string | null;
  kapak_resmi_url: string | null;
  detay_fotolari: string[];
  dosya_linkleri: string[];
  prj_kullanicilar: {
    ad_soyad: string;
    eposta: string;
  } | null;
}

export default function AdminDuzenleClient({ proje }: { proje: Proje }) {
  const router = useRouter();

  // "ozet" state'ini tamamen çıkarttık
  const [baslik, setBaslik] = useState(proje.baslik || "");
  const [icerik, setIcerik] = useState(proje.icerik || "");
  const [kapakUrl, setKapakUrl] = useState(proje.kapak_resmi_url || "");

  const [detayUrller, setDetayUrller] = useState<string[]>(
    proje.detay_fotolari || [],
  );

  const [dosyaUrller, setDosyaUrller] = useState<string[]>(
    proje.dosya_linkleri || [],
  );

  const [isLoading, setIsLoading] = useState(false);

  const detayRef = useRef<HTMLInputElement>(null);
  const dosyaRef = useRef<HTMLInputElement>(null);

  const uploadFile = async (file: File): Promise<string> => {
    const fd = new FormData();
    fd.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: fd,
    });

    const data = await res.json();
    return data.url;
  };

  const handleDetayEkle = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    for (const file of files) {
      const url = await uploadFile(file);
      setDetayUrller((prev) => [...prev, url]);
    }
  };

  const handleDosyaEkle = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    for (const file of files) {
      const url = await uploadFile(file);
      setDosyaUrller((prev) => [...prev, url]);
    }
  };

  const detaySil = (index: number) => {
    setDetayUrller((prev) => prev.filter((_, i) => i !== index));
  };

  const dosyaSil = (index: number) => {
    setDosyaUrller((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const formData = new FormData();

      formData.append("id", proje.id.toString());
      formData.append("baslik", baslik);
      // Backend'e özet bilgisini boş gönderiyoruz ki detay sayfasındaki papağan sorunu çözülsün
      formData.append("ozet", "");
      formData.append("icerik", icerik);
      formData.append("kapak_resmi_url", kapakUrl);

      formData.append("detay_fotolari", JSON.stringify(detayUrller));
      formData.append("dosya_linkleri", JSON.stringify(dosyaUrller));

      const res = await fetch("/api/proje-guncelle", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        router.push("/admin");
      } else {
        alert("Güncelleme başarısız!");
      }
    } catch {
      alert("Bir hata oluştu!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] pb-20">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 mt-16">
        <h1 className="text-3xl font-serif font-bold mb-10">Proje Düzenle</h1>

        <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-8">
          {/* PROJE SAHİBİ - BİLGİ */}
          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
              {proje.prj_kullanicilar?.ad_soyad?.[0]?.toUpperCase() || "?"}
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-gray-400">
                Proje Sahibi
              </p>
              <p className="text-sm font-bold text-gray-800">
                {proje.prj_kullanicilar?.ad_soyad || "Bilinmiyor"}
              </p>
            </div>
          </div>

          {/* BAŞLIK */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-gray-400 ml-1">
              Başlık
            </label>
            <input
              value={baslik}
              onChange={(e) => setBaslik(e.target.value)}
              className="w-full p-4 bg-gray-50 rounded-2xl outline-none font-bold focus:ring-2 ring-blue-100"
            />
          </div>

          {/* İÇERİK - ÖZET ALANI BURADAN KALDIRILDI */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-gray-400 ml-1">
              İçerik
            </label>
            <textarea
              rows={10}
              value={icerik}
              onChange={(e) => setIcerik(e.target.value)}
              className="w-full p-4 bg-gray-50 rounded-2xl outline-none text-sm leading-relaxed focus:ring-2 ring-blue-100"
            />
          </div>

          {/* DETAY FOTOĞRAFLARI */}
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase text-gray-400 ml-1">
              Görsel Galerisi
            </label>
            <input
              type="file"
              ref={detayRef}
              hidden
              multiple
              accept="image/*"
              onChange={handleDetayEkle}
            />

            <div className="grid grid-cols-3 gap-3">
              {detayUrller.map((url, i) => (
                <div
                  key={i}
                  className="relative group rounded-xl overflow-hidden shadow-sm"
                >
                  <img
                    src={url}
                    className="h-24 w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <button
                    onClick={() => detaySil(i)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 text-[10px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    ✕
                  </button>
                </div>
              ))}
              <button
                onClick={() => detayRef.current?.click()}
                className="h-24 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center text-gray-400 hover:border-blue-200 hover:text-blue-400 transition-all bg-gray-50"
              >
                <span className="text-xl">+</span>
                <span className="text-[9px] font-black uppercase">Ekle</span>
              </button>
            </div>
          </div>

          {/* DOSYALAR */}
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase text-gray-400 ml-1">
              Ek Dosyalar
            </label>
            <input
              type="file"
              ref={dosyaRef}
              hidden
              multiple
              onChange={handleDosyaEkle}
            />

            <div className="space-y-2">
              {dosyaUrller.map((url, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-gray-50 p-3 rounded-xl border border-gray-100"
                >
                  <a
                    href={url}
                    target="_blank"
                    className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-2"
                  >
                    📄 Dosya {i + 1}
                  </a>
                  <button
                    onClick={() => dosyaSil(i)}
                    className="text-red-400 hover:text-red-600 transition-colors"
                  >
                    ✕
                  </button>
                </div>
              ))}
              <button
                onClick={() => dosyaRef.current?.click()}
                className="w-full py-3 border-2 border-dashed border-gray-200 rounded-xl text-gray-400 text-xs font-bold hover:bg-gray-50 transition-colors"
              >
                Dosya Yükle
              </button>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg disabled:bg-gray-300"
          >
            {isLoading ? "Güncelleniyor..." : "Değişiklikleri Kaydet"}
          </button>
        </div>
      </div>
    </main>
  );
}
