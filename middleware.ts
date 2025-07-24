import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const NOTION_URL =
  'https://www.notion.so/2399cedf029080ae883ef709bce344ec?v=2389cedf029081a48337000cdd7e08f4&source=copy_link'

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || ''
  if (host === 'wiki.criticalpathprojects.com') {
    return NextResponse.redirect(NOTION_URL, 308) // permanent
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
