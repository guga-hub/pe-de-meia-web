import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('accessToken')

  // Rotas públicas
  const publicRoutes = ['/', '/login', '/onboarding', '/guia']
  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(route)
  )

  // Se é rota privada e não tem token, redireciona para login
  if (!isPublicRoute && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Se é rota pública e tem token, permite acesso
  if (isPublicRoute && token) {
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
