import { redirect } from 'next/navigation';
import { getServerSession, NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authConfig: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
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
      console.log({ account });
      return token;
    },
    async session({ session, token }) {
      if (session) {
        // @ts-ignore
        session.accessToken = token.accessToken;
        // @ts-ignore
        session.user.id = token.userId;
      }

      return session;
    }
  }
};

export const loginIsRequiredServer = async () => {
  const session = await getServerSession(authConfig);
  console.log({ session });

  if (!session) return redirect('/');
};
