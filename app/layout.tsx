import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ÖğrenciHub - Öğrenci Projeleri Platformu",
    template: "%s | ÖğrenciHub",
  },
  description: "Öğrencilerin projelerini paylaştığı, keşfedip ilham aldığı platform.",
  keywords: ["öğrenci projeleri", "web tasarım", "yapay zeka", "mobil programlama", "siber güvenlik"],
  openGraph: {
    title: "ÖğrenciHub",
    description: "Öğrencilerin projelerini paylaştığı platform.",
    url: "https://ogrencihub.com",
    siteName: "ÖğrenciHub",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}