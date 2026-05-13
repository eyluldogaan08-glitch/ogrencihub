"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  // Başlangıçta null veriyoruz
  const [user, setUser] = useState<{ ad: string } | null>(null);

  useEffect(() => {
    const syncUser = () => {
      const storedUser = localStorage.getItem("userName");
      const isLoggedIn = localStorage.getItem("userToken");

      if (isLoggedIn === "aktif" && storedUser) {
        setUser({ ad: storedUser });
      } else {
        setUser(null);
      }
    };

    // Sayfa yüklendiğinde bir kez çalıştır
    syncUser();

    // Diğer sekmelerden çıkış yapılırsa anında tepki ver
    window.addEventListener("storage", syncUser);
    return () => window.removeEventListener("storage", syncUser);
  }, []); // Boş dizi: Sonsuz döngüyü engeller

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    window.location.href = "/";
  };

  return (
    <nav className="border-b p-5 sticky top-0 bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-serif font-bold text-blue-600 tracking-tighter"
        >
          ÖğrenciHub
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/paylas"
            className="text-sm font-bold text-gray-400 hover:text-blue-600 transition"
          >
            Proje Paylaş
          </Link>
          {user ? (
            <div className="flex items-center gap-4 pl-6 border-l border-gray-100">
              <div className="flex flex-col items-end leading-none">
                <span className="text-[10px] font-black uppercase text-gray-400 mb-1">
                  Hesabım
                </span>
                <span className="text-sm font-bold text-gray-900">
                  {user.ad}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="text-xs font-bold text-red-500 hover:text-red-700 transition"
              >
                Çıkış
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg shadow-blue-100"
            >
              Giriş Yap
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
