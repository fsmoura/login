import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GB_ID,
      clientSecret: process.env.GB_SECRET,
    }),
  ],
});
