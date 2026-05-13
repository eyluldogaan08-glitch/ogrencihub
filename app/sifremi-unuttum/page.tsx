"use client";

import { useState } from "react";
import { guvenlikSorusunuGetir, sifreSifirla } from "@/actions/authActions";
import Link from "next/link";


const SORULAR: Record<string, string> = {
  annenin_kizlik_soyadi: "Annenin kızlık soyadı nedir?",
  ilk_okul: "İlk okul adın nedir?",
  evcil_hayvan: "İlk evcil hayvanınızın adı nedir?",
  dogdugu_sehir: "Doğduğun şehir neresidir?",
};

export default function SifremiUnuttumPage() {
  const [adim, setAdim] = useState<1 | 2 | 3>(1);
  const [eposta, setEposta] = useState("");
  const [soru, setSoru] = useState("");
  const [yeniSifre, setYeniSifre] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Adım 1: E-posta gir → güvenlik sorusunu getir
  const epostaSorgula = async () => {
    setIsLoading(true);
    setError(null);
    const result = await guvenlikSorusunuGetir(eposta);
    if (result.success && result.soru) {
      setSoru(SORULAR[result.soru] || result.soru);
      setAdim(2);
    } else {
      setError(result.error || "Hata oluştu!");
    }
    setIsLoading(false);
  };

  // Adım 2 & 3: Cevap + yeni şifre gönder
  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true);
    setError(null);
    formData.append("eposta", eposta);
    const result = await sifreSifirla(formData);
    if (result.success) {
      setAdim(3);
    } else {
      setError(result.error || "Hata oluştu!");
    }
    setIsLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-blue-600 mb-2">
            ÖğrenciHub
          </h1>
          <p className="text-gray-400 font-medium text-sm">
            {adim === 1 && "E-posta adresini gir"}
            {adim === 2 && "Güvenlik sorusunu cevapla"}
            {adim === 3 && "Şifren sıfırlandı! 🎉"}
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-xs font-bold border border-red-100 mb-4">
            {error}
          </div>
        )}

        {adim === 1 && (
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                E-Posta
              </label>
              <input
                type="email"
                value={eposta}
                onChange={(e) => setEposta(e.target.value)}
                placeholder="eposta@hub.com"
                className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all font-medium text-sm"
              />
            </div>
            <button
              onClick={epostaSorgula}
              disabled={isLoading || !eposta}
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg hover:bg-blue-700 transition-all disabled:bg-gray-400"
            >
              {isLoading ? "Kontrol ediliyor..." : "Devam Et"}
            </button>
          </div>
        )}

        {adim === 2 && (
          <form action={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                Güvenlik Sorusu
              </label>
              <p className="px-5 py-4 bg-gray-50 rounded-2xl font-medium text-sm text-gray-700">
                {soru}
              </p>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                Cevabınız
              </label>
              <input
                name="guvenlik_cevabi"
                type="text"
                required
                placeholder="Cevabınız"
                className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all font-medium text-sm"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                Yeni Şifre
              </label>
              <input
                name="yeni_sifre"
                type="password"
                required
                value={yeniSifre}
                onChange={(e) => setYeniSifre(e.target.value)}
                placeholder="••••••••"
                className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all font-medium text-sm"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg hover:bg-blue-700 transition-all disabled:bg-gray-400"
            >
              {isLoading ? "Sıfırlanıyor..." : "Şifremi Sıfırla"}
            </button>
          </form>
        )}

        {adim === 3 && (
          <div className="text-center space-y-4">
            <p className="text-green-600 font-bold">
              Şifren başarıyla güncellendi!
            </p>
            <Link
              href="/login"
              className="block w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-center hover:bg-blue-700 transition-all"
            >
              Giriş Yap
            </Link>
          </div>
        )}

        {adim !== 3 && (
          <p className="text-center mt-6 text-sm font-medium text-gray-500">
            <Link
              href="/login"
              className="text-blue-600 font-extrabold hover:underline"
            >
              Giriş sayfasına dön
            </Link>
          </p>
        )}
      </div>
    </main>
  );
}
