"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ProjeKarti from "@/components/ProjeKarti";

interface Proje {
  id: number;
  baslik: string;
  ozet: string | null;
  durum: string | null;
  yazar_id: number | null;
  ders_id: number | null;
  prj_dersler?: { ders_adi: string | null } | null;
  prj_kullanicilar?: { ad_soyad: string | null } | null;
}

interface Ders {
  id: number;
  ders_adi: string;
}

export default function AnaSayfa() {
  const [aramaMetni, setAramaMetni] = useState("");
  const [seciliKategori, setSeciliKategori] = useState(0);
  const [projeler, setProjeler] = useState<Proje[]>([]);
  const [dersler, setDersler] = useState<Ders[]>([]);
  const [yukleniyor, setYukleniyor] = useState(true);

  useEffect(() => {
    async function dersleriGetir() {
      try {
        const res = await fetch("/api/dersler");
        const data = await res.json();
        setDersler(data);
      } catch (error) {
        console.error("Dersler yüklenirken hata:", error);
      }
    }
    dersleriGetir();
  }, []);

  useEffect(() => {
    async function projeleriGetir() {
      setYukleniyor(true);
      try {
        const res = await fetch(
          `/api/projeler?arama=${aramaMetni}&ders_id=${seciliKategori}`,
        );
        const data = await res.json();
        setProjeler(data);
      } catch (error) {
        console.error("Projeler yüklenirken hata:", error);
      } finally {
        setYukleniyor(false);
      }
    }

    const gecikme = setTimeout(() => {
      projeleriGetir();
    }, 300);

    return () => clearTimeout(gecikme);
  }, [aramaMetni, seciliKategori]);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Proje ara..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              value={aramaMetni}
              onChange={(e) => setAramaMetni(e.target.value)}
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">
              🔍
            </span>
          </div>

          <div className="relative">
            <select
              value={seciliKategori}
              onChange={(e) => setSeciliKategori(Number(e.target.value))}
              className="appearance-none w-full sm:w-56 pl-4 pr-10 py-4 rounded-2xl shadow-sm bg-white font-bold text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value={0}>Hepsi</option>
              {dersler.map((ders) => (
                <option key={ders.id} value={ders.id}>
                  {ders.ders_adi}
                </option>
              ))}
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              ▼
            </span>
          </div>
        </div>

        {yukleniyor ? (
          <div className="text-center py-20 font-bold text-gray-400">
            Yükleniyor...
          </div>
        ) : projeler.length === 0 ? (
          <div className="text-center py-20 font-bold text-gray-400">
            Proje bulunamadı.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projeler.map((proje) => (
              <ProjeKarti key={proje.id} proje={proje} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
