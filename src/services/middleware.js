import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/forbidden",
    // signIn: "/api/auth/signin",
    // signOut: '/api/auth/signout',
    // error: "/forbidden",
    // verifyRequest: '/api/auth/verify-request',
    // newUser: '/api/auth/new-user'
  },
});
