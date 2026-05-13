import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const token = request.cookies.get("admin_token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/yonetim", request.url));
  }

  // Token var mı yok mu kontrolü (basit)
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
