"use client";

import { girisYap } from "@/actions/authActions";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await girisYap(formData);

      // YENİ MANTIK: result.user kontrolü ve localStorage senkronizasyonu
      if (result.success && result.user) {
        localStorage.setItem("userToken", "aktif");
        localStorage.setItem("userName", result.user.ad);

        // Giriş başarılıysa Navbar'ın kendini tazelemesi için refresh yapıp yönlendiriyoruz
        router.refresh();
        router.push("/paylas");
      } else {
        setError(
          result.error || "Giriş yapılamadı, bilgilerini kontrol et.",
        );
        setIsLoading(false);
      }
    } catch (err) {
      console.error("Giriş hatası:", err);
      setError("Sistemde bir sorun oluştu kanks.");
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 transition-all">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-serif font-bold text-blue-600 mb-2 tracking-tighter">
            ÖğrenciHub
          </h1>
          <p className="text-gray-400 font-medium text-sm">
            Projelerine devam etmek için giriş yap!
          </p>
        </div>

        <form action={handleSubmit} className="space-y-5">
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-xs font-bold border border-red-100 animate-shake mb-4 text-center">
              {error}
            </div>
          )}

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
              E-posta
            </label>
            <input
              name="eposta"
              type="email"
              required
              placeholder="eposta@hub.com"
              className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-medium text-sm"
            />
          </div>

          <div className="space-y-1 relative">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
              Şifre
            </label>
            <div className="relative">
              <input
                name="sifre"
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-medium text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors"
              >
                {showPassword ? (
                  <span className="text-xs font-bold uppercase tracking-tighter">
                    Gizle
                  </span>
                ) : (
                  <span className="text-xs font-bold uppercase tracking-tighter">
                    Göster
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between px-1">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                className="w-4 h-4 rounded-lg border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
              />
              <span className="text-xs font-bold text-gray-400 group-hover:text-gray-600 transition-colors">
                Beni Hatırla
              </span>
            </label>
            <Link
              href="/sifremi-unuttum"
              className="text-xs font-bold text-blue-600 hover:underline"
            >
              Şifremi Unuttum
            </Link>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-[0.98] disabled:bg-blue-400 flex justify-center items-center"
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
                Giriş Yapılıyor...
              </span>
            ) : (
              "Giriş Yap"
            )}
          </button>
        </form>

        <p className="text-center mt-8 text-sm font-medium text-gray-500">
          Henüz hesabın yok mu?{" "}
          <Link
            href="/register"
            className="text-blue-600 font-extrabold hover:underline"
          >
            Hemen Kayıt Ol
          </Link>
        </p>
      </div>

      <style jsx global>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }
        .animate-shake {
          animation: shake 0.2s ease-in-out 0s 2;
        }
      `}</style>
    </main>
  );
}
