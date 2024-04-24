import { loginService, registerSevice } from "@/service/auth-service";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
//$2a$10$asm6BKN2OO1/kwRVsavBHez7PZSV9wcBhJ5yEmGE8SaHv30Ysogsu
export const authOption = {
  providers: [
    //login by email and ps
    CredentialsProvider({
      //use to accept email and ps
      async authorize(userInfo) {
        const newUserInfo = {
          email: userInfo.email,
          password: userInfo.password,
        };
        // call login service
        const login = await loginService(newUserInfo);
        console.log("Login", login); // respone token
        if (login.status == 400) {
          throw new Error("fail");
        } else {
          return login;
        }
      },
    }),
  ],
  //used to set token in cookie
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  //calling serectkey
  secret: process.env.NEXTAUTH_SECRET,
};

// export
const handler = nextAuth(authOption);
export { handler as GET, handler as POST };


