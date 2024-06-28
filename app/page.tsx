import UserAvatar from "@/components/UserAvatar";
import { SignIn } from "@/components/auth/signin-button";
import { SignOut } from "@/components/auth/signout-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <UserAvatar />
      <SignIn />
      <SignOut />
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-yellow-300 bg-gradient-to-b from-purple-200 pb-6 pt-8 backdrop-blur-2xl dark:border-red-800 dark:bg-pink-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          jyly coming soon...
        </p>
      </div>
    </main>
  );
}
