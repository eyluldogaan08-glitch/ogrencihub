import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.redirect("http://localhost:5800/yonetim");
  res.cookies.delete("admin_token");
  return res;
}
