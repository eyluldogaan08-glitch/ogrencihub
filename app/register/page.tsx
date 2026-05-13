// app/register/page.tsx
import RegisterForm from "./RegisterForm";

export const metadata = {
  title: "Kayıt Ol",
  description: "ÖğrenciHub'a üye ol ve projelerini paylaş.",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
