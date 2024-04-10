import NextAuth from "next-auth";

const handler = NextAuth();

export { handler as POST, handler as GET };
