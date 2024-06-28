import NextAuth from "next-auth";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import Google from "next-auth/providers/google";
import { firestore } from "./lib/firestore";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: FirestoreAdapter(firestore),
  providers: [Google],
});
