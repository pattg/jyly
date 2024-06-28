import { auth } from "../auth";
import Image from "next/image";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div>
      <h1>Hey, {session.user.name?.split(" ")[0] || "User"}</h1>
      {session?.user.image ? (
        <Image
          src={session.user.image}
          alt={`Avatar for ${session.user.name || "user"}`}
          width={50}
          height={50}
        ></Image>
      ) : (
        <div>No Avatar Available</div>
      )}
    </div>
  );
}
