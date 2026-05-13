import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.redirect("http://localhost:3000/yonetim");
  res.cookies.delete("admin_token");
  return res;
}
