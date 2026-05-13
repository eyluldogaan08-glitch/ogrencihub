"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

// TEST
console.log("AdminDuzenleClient yüklendi!");
interface Proje {
  id: number;
  baslik: string | null;
  ozet: string | null;
  icerik: string | null;
  kapak_resmi_url: string | null;
  dosya_linkleri: string[];
}

export default function AdminDuzenleClient({ proje }: { proje: Proje }) {
  const router = useRouter();
  const [baslik, setBaslik] = useState(proje.baslik || "");
  const [ozet, setOzet] = useState(proje.ozet || "");
  const [icerik, setIcerik] = useState(proje.icerik || "");
  const [kapakUrl, setKapakUrl] = useState(proje.kapak_resmi_url || "");
  const [kapakOnizleme, setKapakOnizleme] = useState(
    proje.kapak_resmi_url || "",
  );
  const [detayUrller, setDetayUrller] = useState<string[]>(
    proje.dosya_linkleri || [],
  );
  const [isLoading, setIsLoading] = useState(false);
  const kapakRef = useRef<HTMLInputElement>(null);
  const detayRef = useRef<HTMLInputElement>(null);

  const uploadFile = async (file: File): Promise<string> => {
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: fd });
    const data = await res.json();
    return data.url;
  };

  const handleKapakSec = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setKapakOnizleme(URL.createObjectURL(file));
    const url = await uploadFile(file);
    setKapakUrl(url);
  };

  const handleDetayEkle = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    for (const file of files) {
      const url = await uploadFile(file);
      setDetayUrller((prev) => [...prev, url]);
    }
  };

  const detaySil = (index: number) => {
    setDetayUrller((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("id", proje.id.toString());
      formData.append("baslik", baslik);
      formData.append("ozet", ozet);
      formData.append("icerik", icerik);
      formData.append("kapak_resmi_url", kapakUrl);
      formData.append("dosya_linkleri", JSON.stringify(detayUrller));

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
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-10 text-center">
          Proje Düzenle
        </h1>

        <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-6">
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

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-gray-400 ml-1">
              Özet
            </label>
            <textarea
              rows={3}
              value={ozet}
              onChange={(e) => setOzet(e.target.value)}
              className="w-full p-4 bg-gray-50 rounded-2xl outline-none text-sm focus:ring-2 ring-blue-100"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-gray-400 ml-1">
              İçerik
            </label>
            <textarea
              rows={8}
              value={icerik}
              onChange={(e) => setIcerik(e.target.value)}
              className="w-full p-4 bg-gray-50 rounded-2xl outline-none text-sm leading-relaxed focus:ring-2 ring-blue-100"
            />
          </div>

          {/* KAPAK FOTOĞRAFI */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-gray-400 ml-1">
              Kapak Fotoğrafı
            </label>
            <input
              type="file"
              ref={kapakRef}
              className="hidden"
              accept="image/*"
              onChange={handleKapakSec}
            />
            <div
              onClick={() => kapakRef.current?.click()}
              className="border-2 border-dashed border-gray-100 rounded-2xl overflow-hidden cursor-pointer hover:border-blue-300 transition-colors"
            >
              {kapakOnizleme ? (
                <img
                  src={kapakOnizleme}
                  alt="Kapak"
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="p-8 text-center bg-gray-50">
                  <span className="text-3xl">🖼️</span>
                  <p className="text-xs font-bold text-gray-400 mt-2 uppercase">
                    Kapak Seç
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* DETAY FOTOĞRAFLARI */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-gray-400 ml-1">
              Detay Fotoğrafları
            </label>
            <input
              type="file"
              ref={detayRef}
              className="hidden"
              accept="image/*"
              multiple
              onChange={handleDetayEkle}
            />
            <div className="grid grid-cols-2 gap-3">
              {detayUrller.map((url, i) => (
                <div key={i} className="relative rounded-xl overflow-hidden">
                  <img
                    src={url}
                    alt={`Detay ${i + 1}`}
                    className="w-full h-32 object-cover"
                  />
                  <button
                    onClick={() => detaySil(i)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 text-xs font-bold hover:bg-red-600"
                  >
                    ✕
                  </button>
                </div>
              ))}
              <div
                onClick={() => detayRef.current?.click()}
                className="border-2 border-dashed border-gray-100 rounded-xl p-6 text-center bg-gray-50 hover:border-blue-300 transition-colors cursor-pointer"
              >
                <span className="text-2xl">📷</span>
                <p className="text-xs font-bold text-gray-400 mt-1 uppercase">
                  Ekle
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg disabled:bg-gray-400"
          >
            {isLoading ? "Kaydediliyor..." : "Güncellemeleri Kaydet"}
          </button>
        </div>
      </div>
    </main>
  );
}
