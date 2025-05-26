"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";

import paths from "@/paths";

function Navbar() {
  return (
    <nav className="flex gap-2 px-5 py-2 font-bold border-b justify-between">
      <div>
        <Button variant={"ghost"} asChild>
          <Link href={paths.HomePath}>Home</Link>
        </Button>

        <Button variant={"ghost"} asChild>
          <Link href={paths.ticketPath}>Tickets</Link>
        </Button>
      </div>
      <div className="flex gap-3 justify-baseline">      <Button variant={"default"} asChild>
          <Link href={paths.SignIn}>Sign In</Link>
        </Button>
      <Button variant={"default"} asChild>
          <Link href={paths.SignUp}>Sign Up</Link>
        </Button>
      <ThemeSwitcher /></div>

    </nav>
  );
}

export default Navbar;