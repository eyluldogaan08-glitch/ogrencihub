"use client";

import { kayitOl } from "@/actions/authActions";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "Kayıt Ol",
  description: "ÖğrenciHub'a üye ol ve projelerini paylaş.",
};

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await kayitOl(formData);

      if (result.success) {
        localStorage.setItem("userToken", "aktif");
        localStorage.setItem("userName", formData.get("ad_soyad") as string);
        router.push("/paylas");
      } else {
        setError(result.error || "Bir sorun oluştu kanka!");
        setIsLoading(false);
      }
    } catch (err) {
      console.error(err);
      setError("Bağlantı hatası oluştu.");
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-serif font-bold text-blue-600 mb-2">
            ÖğrenciHub
          </h1>
          <p className="text-gray-400 font-medium text-sm leading-relaxed">
            Hemen kayıt ol ve projelerini dünyayla paylaş kanka!
          </p>
        </div>

        <form action={handleSubmit} className="space-y-5">
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-xs font-bold border border-red-100">
              {error}
            </div>
          )}

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
              Ad Soyad
            </label>
            <input
              name="ad_soyad"
              type="text"
              required
              placeholder="Adın ve Soyadın"
              className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all font-medium text-sm"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
              E-posta
            </label>
            <input
              name="eposta"
              type="email"
              required
              placeholder="eposta@hub.com"
              className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all font-medium text-sm"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
              Şifre
            </label>
            <input
              name="sifre"
              type="password"
              required
              placeholder="••••••••"
              className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all font-medium text-sm"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
              Güvenlik Sorusu
            </label>
            <select
              name="guvenlik_sorusu"
              required
              className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all font-medium text-sm"
            >
              <option value="">Soru seçin...</option>
              <option value="annenin_kizlik_soyadi">
                Annenin kızlık soyadı nedir?
              </option>
              <option value="ilk_okul">İlk okul adın nedir?</option>
              <option value="evcil_hayvan">
                İlk evcil hayvanınızın adı nedir?
              </option>
              <option value="dogdugu_sehir">Doğduğun şehir neresidir?</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
              Güvenlik Sorusu Cevabı
            </label>
            <input
              name="guvenlik_cevabi"
              type="text"
              required
              placeholder="Cevabınız"
              className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all font-medium text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white py-4 rounded-2xl font-bold shadow-lg shadow-black/10 hover:bg-gray-800 transition-all active:scale-[0.98] disabled:bg-gray-400 flex justify-center items-center"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Hesap Oluşturuluyor...
              </span>
            ) : (
              "Kayıt Ol ve Başla"
            )}
          </button>
        </form>

        <p className="text-center mt-8 text-sm font-medium text-gray-500">
          Zaten hesabın var mı?{" "}
          <Link
            href="/login"
            className="text-blue-600 font-extrabold hover:underline"
          >
            Giriş Yap
          </Link>
        </p>
      </div>
    </main>
  );
}
