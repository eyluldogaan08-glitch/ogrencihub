import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proje Paylaş",
  description: "Yeni bir proje paylaş ve topluluğa katıl.",
};

export default function PaylasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
