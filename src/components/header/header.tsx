"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import ModeToggle from "../theme-toggle/theme-toggle";

function Header() {
  const { setTheme } = useTheme();

  return (
    <header className="p-4 border-b w-full flex items-center justify-between">
      <div>
        <h1>Navbar</h1>
      </div>
      <div>
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;
