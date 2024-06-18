import { getServerSession } from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";

import { initDb } from "../../connect/mongo";

const authOptions: any = {
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        const data = await initDb("sport-app", "users");

        try {
          const user: any = await data.findOne({ email: credentials.email });
          // console.log(user);
          if (user) {
            const isCorrectPassword = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isCorrectPassword) {
              return user;
            }
          }
          throw new Error("Incorrect email or password");
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      user && (token.userId = user.userId);
      return token;
    },
    session: async ({ session, token }: { session: any; token: any }) => {
      // console.log("session //" + JSON.stringify(session));
      // console.log("Token// " + JSON.stringify(token));

      // Creating the userId in the session so it can be used in the frontend
      if (session?.user) {
        session.user.userId = token.userId;
      }

      console.log(session);

      return session;
      // return session;
    },
    async signIn({ user, account }: { user: any; account: any }) {
      if (account?.provider === "credentials") {
        return true;
      }

      //Check if the user already exists in mongodb and adds it if it doesn't.
      // if (account?.provider === "github") {
      //   const response = await insertCredentialsInMongo({ user, account });
      //   return response;
      // }
      // if (account?.provider === "google") {
      //   const response = await insertCredentialsInMongo({ user, account });
      //   return response;
      // }
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  URL: process.env.NEXTAUTH_URL,
};

export default authOptions;

export async function ServerComponent() {
  const session = await getServerSession(authOptions);
  return session;
}
