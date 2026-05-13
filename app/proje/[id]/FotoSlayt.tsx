"use client";
import { useState } from "react";
import Image from "next/image";

export default function FotoSlayt({ fotograflar }: { fotograflar: string[] }) {
  const [aktif, setAktif] = useState(0);

  return (
    <div className="mb-12">
      <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-gray-100 mb-4 bg-gray-50">
        <Image
          src={fotograflar[aktif]}
          alt={`Fotoğraf ${aktif + 1}`}
          fill
          quality={100}
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-contain transition-all duration-300"
        />

        {fotograflar.length > 1 && (
          <>
            <button
              onClick={() =>
                setAktif(
                  (a) => (a - 1 + fotograflar.length) % fotograflar.length,
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md text-xl transition"
            >
              ‹
            </button>
            <button
              onClick={() => setAktif((a) => (a + 1) % fotograflar.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md text-xl transition"
            >
              ›
            </button>
          </>
        )}

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/40 text-white text-xs px-3 py-1 rounded-full">
          {aktif + 1} / {fotograflar.length}
        </div>
      </div>

      {fotograflar.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {fotograflar.map((foto, i) => (
            <button
              key={i}
              onClick={() => setAktif(i)}
              className={`relative w-20 h-14 rounded-xl overflow-hidden flex-shrink-0 border-2 transition ${
                i === aktif
                  ? "border-blue-500"
                  : "border-transparent opacity-60"
              }`}
            >
              <Image
                src={foto}
                alt={`Küçük ${i + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
