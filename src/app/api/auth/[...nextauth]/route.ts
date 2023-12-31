import NextAuth from 'next-auth/next'
import GithubProvider from 'next-auth/providers/github'

export const authOption = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  pages: {
    signIn: '/signin',
  },
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }
