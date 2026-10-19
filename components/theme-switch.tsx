"use client";

import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="fixed right-5 bottom-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-white/40 bg-white/80 shadow-2xl backdrop-blur-[.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:border-white/10 dark:bg-gray-950"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {/* Both icons render; CSS picks one so the server HTML never mismatches the stored theme. */}
      <BsSun className="dark:hidden" />
      <BsMoon className="hidden dark:block" />
    </button>
  );
}
