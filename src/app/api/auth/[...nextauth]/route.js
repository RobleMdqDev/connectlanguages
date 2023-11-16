import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/prisma";
import bcrypt from "bcrypt";

export const authOptions = {
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {label: "Email", type: "text", placeholder: "Email"},
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials, req) {
        const userFound = await prisma.user.findUnique({
          where: {email: credentials.email},
        });

        if (!userFound) throw new Error(`User ${credentials.email} not found`);

        const matchPassword = await bcrypt.compare(
          credentials.password,
          userFound.password
        );

        if (!matchPassword) throw new Error(`Email or password incorrect`);

        return {
          id: userFound.id,
          name: `${userFound.firstName} ${userFound.lastName}`,
          email: userFound.email,
        };
      },
    }),
  ],
};
const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
