"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { projePaylas } from "@/actions/projeActions";

const lowlight = createLowlight(common);

export default function PaylasPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [selectedLessonId, setSelectedLessonId] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [kapakOnizleme, setKapakOnizleme] = useState<string | null>(null);
  const [detayFotolar, setDetayFotolar] = useState<File[]>([]);
  const [detayOnizlemeler, setDetayOnizlemeler] = useState<string[]>([]);
  const [lessons, setLessons] = useState<{ id: number; name: string }[]>([]);
  const kapakInputRef = useRef<HTMLInputElement>(null);
  const detayInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("userToken");
    if (!isLoggedIn) router.push("/login");
  }, [router]);

  useEffect(() => {
    async function dersleriGetir() {
      try {
        const res = await fetch("/api/dersler");
        const data = await res.json();
        setLessons(
          data.map((d: { id: number; ders_adi: string }) => ({
            id: d.id,
            name: d.ders_adi,
          })),
        );
      } catch (error) {
        console.error("Dersler yüklenirken hata:", error);
      }
    }
    dersleriGetir();
  }, []);

  const editor = useEditor({
    extensions: [StarterKit, CodeBlockLowlight.configure({ lowlight })],
    content: "<p>Proje detaylarını anlatmaya başla...</p>",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "outline-none min-h-[400px] text-lg leading-relaxed prose max-w-none focus:ring-0",
      },
    },
  });

  if (!editor) return null;

  const handleKapakSec = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setKapakOnizleme(URL.createObjectURL(file));
    }
  };

  const handleDetayFotoSec = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setDetayFotolar((prev) => [...prev, ...files]);
    const yeniOnizlemeler = files.map((f) => URL.createObjectURL(f));
    setDetayOnizlemeler((prev) => [...prev, ...yeniOnizlemeler]);
  };

  const detayFotoSil = (index: number) => {
    setDetayFotolar((prev) => prev.filter((_, i) => i !== index));
    setDetayOnizlemeler((prev) => prev.filter((_, i) => i !== index));
  };

  const handleOnayaGonder = async () => {
    if (!title.trim() || !selectedLessonId) {
      alert("Lütfen başlık ve ders seç!");
      return;
    }
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("baslik", title);
      formData.append("ozet", editor.getText().slice(0, 150) + "...");
      formData.append("icerik", editor.getHTML());
      formData.append("ders_id", selectedLessonId.toString());

      const user = JSON.parse(localStorage.getItem("user") || "{}");
      formData.append("kullanici_id", user.id?.toString() || "1");

      if (kapakInputRef.current?.files?.[0]) {
        formData.append("kapak_resmi", kapakInputRef.current.files[0]);
      }

      detayFotolar.forEach((foto) => {
        formData.append("detay_fotolar", foto);
      });

      const sonuc = await projePaylas(formData);

      if (sonuc?.success) {
        alert("Projen başarıyla onaya gönderildi!");
        router.push("/");
      } else {
        alert(sonuc?.error || "Kayıt sırasında bir hata oluştu.");
      }
    } catch (error) {
      console.error(error);
      alert("Sistemsel bir hata oluştu.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <nav className="border-b p-4 mb-10 sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-serif font-bold text-blue-600">
            ÖğrenciHub
          </Link>
          <button
            onClick={handleOnayaGonder}
            disabled={isSubmitting}
            className={`${isSubmitting ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"} text-white px-8 py-2.5 rounded-full font-bold text-sm transition shadow-lg`}
          >
            {isSubmitting ? "Gönderiliyor..." : "Onaya Gönder"}
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 pb-32">
        <aside className="w-full md:w-64 flex-shrink-0 space-y-8">
          {/* DERS KATEGORİSİ */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
              Ders Kategorisi
            </label>
            <div className="flex flex-col gap-2">
              {lessons.map((lesson) => (
                <button
                  key={lesson.id}
                  type="button"
                  onClick={() => setSelectedLessonId(lesson.id)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    selectedLessonId === lesson.id
                      ? "bg-blue-600 text-white shadow-md scale-[1.02]"
                      : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {lesson.name}
                </button>
              ))}
            </div>
          </div>

          {/* KAPAK FOTOĞRAFI */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
              Kapak Fotoğrafı
            </label>
            <input
              type="file"
              ref={kapakInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleKapakSec}
            />
            <div
              onClick={() => kapakInputRef.current?.click()}
              className="border-2 border-dashed border-gray-100 rounded-2xl overflow-hidden cursor-pointer hover:border-blue-300 transition-colors"
            >
              {kapakOnizleme ? (
                <img
                  src={kapakOnizleme}
                  alt="Kapak"
                  className="w-full h-40 object-cover"
                />
              ) : (
                <div className="p-6 text-center bg-gray-50/50">
                  <span className="text-2xl">🖼️</span>
                  <p className="text-[10px] font-bold text-gray-400 mt-2 uppercase">
                    Görsel Seç
                  </p>
                </div>
              )}
            </div>
            {kapakOnizleme && (
              <button
                onClick={() => {
                  setKapakOnizleme(null);
                  if (kapakInputRef.current) kapakInputRef.current.value = "";
                }}
                className="text-xs text-red-400 hover:text-red-600 mt-2 w-full text-center"
              >
                Kaldır
              </button>
            )}
          </div>

          {/* DETAY FOTOĞRAFLARI */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
              Detay Fotoğrafları
            </label>
            <input
              type="file"
              ref={detayInputRef}
              className="hidden"
              accept="image/*"
              multiple
              onChange={handleDetayFotoSec}
            />
            <div className="flex flex-col gap-3">
              {detayOnizlemeler.map((src, i) => (
                <div key={i} className="relative rounded-xl overflow-hidden">
                  <img
                    src={src}
                    alt={`Detay ${i + 1}`}
                    className="w-full h-32 object-cover"
                  />
                  <button
                    onClick={() => detayFotoSil(i)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 text-xs font-bold hover:bg-red-600 transition"
                  >
                    ✕
                  </button>
                </div>
              ))}
              <div
                onClick={() => detayInputRef.current?.click()}
                className="border-2 border-dashed border-gray-100 rounded-2xl p-4 text-center bg-gray-50/50 hover:border-blue-300 transition-colors cursor-pointer"
              >
                <span className="text-xl">📷</span>
                <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase">
                  Fotoğraf Ekle
                </p>
              </div>
            </div>
          </div>
        </aside>

        <section className="flex-1">
          <input
            type="text"
            placeholder="Proje Başlığı..."
            className="w-full text-4xl font-serif font-bold outline-none placeholder:text-gray-200 mb-8"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="flex flex-wrap gap-2 mb-8 bg-white border border-gray-100 p-2 rounded-2xl sticky top-24 z-10 shadow-sm">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`w-10 h-10 rounded-xl font-bold transition ${
                editor.isActive("bold")
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              B
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              className={`w-10 h-10 rounded-xl font-bold transition ${
                editor.isActive("heading", { level: 1 })
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              H1
            </button>
            <button
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              className={`px-4 h-10 rounded-xl font-bold transition ${
                editor.isActive("codeBlock")
                  ? "bg-blue-600 text-white"
                  : "text-blue-600 hover:bg-blue-50"
              }`}
            >
              <span className="text-xs uppercase font-black tracking-wider">
                Kod Ekle
              </span>
            </button>
          </div>
          <div className="prose prose-lg max-w-none min-h-[500px]">
            <EditorContent editor={editor} />
          </div>
        </section>
      </div>
    </main>
  );
}
