import { auth, signOut } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import { LogOut, User } from "lucide-react";
import { SignOut } from "./auth/signout-button";

const Navbar = async () => {
  const session = await auth();

  const handleSignOut = (event: any) => {
    event.preventDefault();
    console.log("signing out");
    signOut();
  };
  const image = session?.user?.image || "";

  if (!session?.user)
    return (
      <nav className="bg-primary dark:bg-slate-800 text-white py-4 px-5 flex justify-between items-center text-3xl">
        <Link href="/">JYLY</Link>
        <Button asChild>
          <Link href="/api/auth/signin">Login</Link>
        </Button>
      </nav>
    );

  return (
    <nav className="bg-primary dark:bg-slate-800 text-white py-4 px-5 flex justify-between">
      <Link href="/">JYLY</Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage src={image}></AvatarImage>
            <AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <SignOut />
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default Navbar;
