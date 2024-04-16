import NextAuth from "next-auth";
import authConfig from "./auth.config";

import {
  publicRoutes,
  authRoutes,
  prefixRoutes,
  DEFAULT_LOGIN_REDIRECT,
} from "./routes";

const { auth: middleware } = NextAuth(authConfig);

export default middleware((req) => {
  const { nextUrl } = req;
  const isLogged = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(prefixRoutes);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLogged) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  if (!isLogged && !isPublicRoute) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }

  return null;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
