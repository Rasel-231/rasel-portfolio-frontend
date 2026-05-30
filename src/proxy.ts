import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    console.log('PROXY HIT 👉', request.nextUrl.pathname);

    const token = request.cookies.get('accessToken')?.value;
    console.log("Token", token)

    if (!token) {
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

// ম্যাচার কনফিগ
export const config = {
    matcher: [
        '/dashboard/:path*',
        '/admin/:path*',
    ],
};