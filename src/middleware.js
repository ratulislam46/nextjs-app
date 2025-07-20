import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {

    const currentCookies = request.cookies.get("nextjs-token");
    console.log(currentCookies);

    const dymmyUserData = {
        role: 'admin',
        email: 'nextjs@gmail.com'
    }
    // console.log('pathname', request.nextUrl.pathname.startsWith('/services'));
    // console.log('pathname', request.nextUrl.pathname.startsWith('/blogs'));
    let isServicesPage = request.nextUrl.pathname.startsWith('/services');
    let isAdmin = dymmyUserData.role == 'admin';

    if (isServicesPage && !isAdmin) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}
