import { NextRequest, NextResponse } from 'next/server';
import { i18nRouter } from 'next-i18n-router';
import i18nConfig from './i18nConfig';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;

  // Handle static assets by removing the locale part from the path
  const staticAssetPattern = /^\/(ar|en|fr|es)\/(images|css|js|fonts)\/(.*)$/;
  const match = pathname.match(staticAssetPattern);

  if (match) {
    // Construct the new pathname without the locale part
    const newPathname = `/${match[2]}/${match[3]}`;
    url.pathname = newPathname;
    return NextResponse.rewrite(url);
  }

  // Continue with the i18nRouter for other paths
  return i18nRouter(request, i18nConfig);
}

// Applies this middleware only to files in the app directory
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
