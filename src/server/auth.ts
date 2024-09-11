import { PrismaAdapter } from "@auth/prisma-adapter";
import type { PrismaClient, UserRole } from "@prisma/client";
import { compare } from "bcryptjs";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { type Adapter } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";

import { db } from "~/server/db";
import { getISODate } from "~/utils/dateFormat";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: UserRole;
      termsAccepted: boolean;
      marketingOptIn: boolean;
      disabledAt?: Date | null;
      bannedAt?: Date | null;
      lastLogin?: Date | null;
      // ...other properties
    } & DefaultSession["user"];
  }

  interface User extends AdapterUser {
    role: UserRole;
    termsAccepted: boolean;
    marketingOptIn: boolean;
    disabledAt?: Date | null;
    bannedAt?: Date | null;
    lastLogin?: Date | null;
  }

  
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
        session.user.role = token.role as UserRole;
        session.user.termsAccepted = token.termsAccepted as boolean;
        session.user.marketingOptIn = token.marketingOptIn as boolean;
        session.user.lastLogin = token.lastLogin as Date;
        session.user.disabledAt = token.disabledAt as Date;
        session.user.bannedAt = token.bannedAt as Date;
      }
      console.log("session", session);
      return session;
    },
  },
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      authorize: authorize(db),
    }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
};

function authorize(prisma: PrismaClient) {
  return async (
    credentials: Record<"email" | "password", string> | undefined,
  ) => {
    if (!credentials) throw new Error("Missing credentials");
    if (!credentials.email)
      throw new Error('"email" is required in credentials');
    if (!credentials.password)
      throw new Error('"password" is required in credentials');

    const maybeUser = await prisma.user.findFirst({
      where: { email: credentials.email },
      select: { id: true, email: true, password: true, disabledAt: true, bannedAt: true, role: true, termsAccepted: true, marketingOptIn: true, lastLogin: true },
    });

    if (!maybeUser?.password) return null;

    if (maybeUser.disabledAt || maybeUser.bannedAt) return null;

    // verify the input password with stored hash
    const isValid = await compare(credentials.password, maybeUser.password);

    if (!isValid) return null;

    await prisma.user.update({
      where: { id: maybeUser.id },
      data: { lastLogin: getISODate(new Date()) },
    });

    return {
      id: maybeUser.id,
      email: maybeUser.email!, 
      role: maybeUser.role,
      termsAccepted: maybeUser.termsAccepted,
      marketingOptIn: maybeUser.marketingOptIn,
      lastLogin: maybeUser.lastLogin,
      disabledAt: maybeUser.disabledAt,
      bannedAt: maybeUser.bannedAt,
    };
  };
}

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
