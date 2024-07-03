import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import { CredentialsProvider } from "next-auth/providers";
import Credentials from "next-auth/providers/credentials";
import { NextRequest } from "next/server";


interface ICredentials {
    email: string;
    password: string | undefined;
}
const authOptions: NextAuthOptions = {
    providers: [

        //credentials that will be passed for provider
        Credentials({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'email' },
                password: { label: 'password', type: 'string' }
            },

            //function that will auth the user with the backend
            async authorize(credentials, req) {
                try {
                    const response = await fetch(`${process.env.URL_API}/login-admin`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            email: credentials!.email,
                            password: credentials!.password
                        })
                    },
                    )
                    const user = await response.json()

                    if (user && response.ok) {
                        return user
                    }

                    return null;
                } catch (error: any) {
                    return error;
                }
            }
        })
    ],
    pages: {
        signIn: '/login'
    },
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async jwt({ token, user, account }) {
            if (account && account.access_token) {
                token.acessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token, user }) {
            return { ...session, token: token.acessToken }
        }
    },
    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST, authOptions }