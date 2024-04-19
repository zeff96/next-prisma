/**
 * An array of routes that are public
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = ["/", "/notifications"];

/**
 * An array of routes used for authentication
 * These routes will redirect logged in users to homepage
 * @type {string []}
 */

export const authRoutes = [
  "/auth/login",
  "/auth/registration",
  "/auth/confirmation",
  "/auth/email-verification",
  "/auth/reset_password",
  "/auth/edit_password",
];

/**
 * The prefix for API authentication
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */

export const prefixRoutes = "/api/auth";

/**
 * The default redirect after login
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/";
