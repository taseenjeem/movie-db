import { defaultLocale, supportedLocales } from "./data/locales/locales";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";
import { NextResponse } from "next/server";

const getPreferredLocale = (request) => {
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;
  let headers = { "accept-language": acceptedLanguage };
  let preferredLanguages = new Negotiator({ headers }).languages();
  return match(preferredLanguages, supportedLocales, defaultLocale);
};

export const middleware = (request) => {
  const pathName = request.nextUrl.pathname;
  const pathDoesNotHaveLocale = supportedLocales.every(
    (locale) => !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
  );

  if (pathDoesNotHaveLocale) {
    const preferredLocale = getPreferredLocale(request);
    return NextResponse.redirect(
      new URL(`/${preferredLocale}/${pathName}`, request.url)
    );
  }
};

export const config = {
  matcher: ["/((?!api|assets|.*\\..*|_next).*)"],
};
