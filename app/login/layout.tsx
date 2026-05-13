import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giriş Yap",
  description: "ÖğrenciHub hesabına giriş yap.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
