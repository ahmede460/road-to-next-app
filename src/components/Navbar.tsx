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
      <ThemeSwitcher />
    </nav>
  );
}

export default Navbar;