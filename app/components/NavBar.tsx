"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const linkBase =
    "hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors";

  return (
    <header className="border-b border-zinc-200/60 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-black/60">
      <nav className="mx-auto flex h-16 w-full max-w-4xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold">
          Joey
        </Link>

        <div className="flex gap-4 text-sm font-medium">
          <Link
            href="/"
            className={`${linkBase} ${
              pathname === "/" ? "font-bold" : "font-normal"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`${linkBase} ${
              pathname?.startsWith("/about") ? "font-bold" : "font-normal"
            }`}
          >
            About
          </Link>

          <Link
            href="/projects"
            className={`${linkBase} ${
              pathname?.startsWith("/projects") ? "font-bold" : "font-normal"
            }`}
          >
            Projects
          </Link>
        </div>
      </nav>
    </header>
  );
}
