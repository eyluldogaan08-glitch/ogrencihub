import { NextResponse } from "next/server";
import { SignJWT } from "jose";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET!);
const ADMIN_USER = process.env.ADMIN_USERNAME!;
const ADMIN_PASS = process.env.ADMIN_PASSWORD!;

export async function POST(req: Request) {
  const { username, password } = await req.json();

  // Kullanıcı adı veya şifre yanlışsa hata dön
  if (username !== ADMIN_USER || password !== ADMIN_PASS) {
    return NextResponse.json({ error: "Geçersiz bilgiler" }, { status: 401 });
  }

  // Token oluştur
  const token = await new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("8h")
    .sign(SECRET);

  // Token'ı cookie'ye kaydet ve başarılı dön
  const res = NextResponse.json({ success: true });
  res.cookies.set("admin_token", token, {
    httpOnly: true, // JS erişemez
    secure: true, // Sadece HTTPS
    sameSite: "lax",
    maxAge: 60 * 60 * 8, // 8 saat geçerli
  });

  return res;
}
