import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware (request: NextRequest) {
  const path = request.nextUrl.pathname

  // Permite las rutas de NextAuth
  if (path.startsWith('/api/auth')) {
    return NextResponse.next()
  }

  let isLogin = request.cookies.get('logged')
  console.log('isLogin:', isLogin)

  if (isLogin !== undefined && isLogin.value === 'false') {
    if (path.startsWith('/dashboard')) {
      return NextResponse.rewrite(new URL('/', request.url))
    }
  } else if (isLogin !== undefined && isLogin.value === 'true') {
    if (path.startsWith('/')) {
      return NextResponse.rewrite(new URL('/dashboard', request.url))
    }
  }

  // Resto de tu lógica de middleware
}
