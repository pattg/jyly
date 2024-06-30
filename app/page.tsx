import UserAvatar from "@/components/UserAvatar";
import { SignOut } from "@/components/auth/signout-button";
import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();

  if (!session?.user)
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm sm:flex">
          <p>
            Welcome to jyly! You can either play a quick round. Or sign in and
            track your progress. Either way, have fun practising!
          </p>
        </div>
      </main>
    );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <p>Happy to have you on board</p>
      <h1 className="text-4xl text-cyan-500">
        {session.user.name?.split(" ")[0]}
      </h1>
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex"></div>
    </main>
  );
};

export default Home;
