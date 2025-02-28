import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Example middleware for admin routes protection
  // In a real app, you would implement proper authentication
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Check if user is authenticated/authorized
    // For now, we'll just redirect to login
    // In a real app, you would check session/token
    const isAuthenticated = false; // This would be a real check

    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
