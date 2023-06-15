import { redirect } from 'next/navigation';
import { getServerSession, NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import { registerUser } from '../service/authApi';

export const authConfig: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  session: {
    strategy: 'jwt'
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET!
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.userId = account.providerAccountId;
      }

      return token;
    },
    async session({ session, token }) {
      if (session) {
        // @ts-ignore
        session.accessToken = token.accessToken;
        // @ts-ignore
        session.user.accountId = token.userId;
      }

      if (session.user) {
        const response = await registerUser(session.user);

        // @ts-ignore
        session.user.id = response.id;
      }
      console.log(session);

      return session;
    }
  }
};

export const loginIsRequired = () => {
  const session = getServerSession(authConfig);
  if (!session) return redirect('/auth/login');
};
