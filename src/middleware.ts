import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const token = await getToken({
    req: req,
    secret: process.env.NEXTAUTH_SECRET
  });

  const isPublicPath = path === "/login" || path === "/signup";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", req.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
}

export const config = {
  matcher: [ "/login", "/signup"],
};
