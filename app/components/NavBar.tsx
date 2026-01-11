"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const base =
    "transition-colors duration-150";

  const inactive =
    "text-zinc-700 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400";

  const active =
    "font-semibold text-blue-700 dark:text-blue-400";

  return (
    <header className="border-b border-blue-200/60 bg-white/80 backdrop-blur dark:border-blue-900/60 dark:bg-black/60">
      <nav className="mx-auto flex h-16 w-full max-w-4xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold text-blue-700 dark:text-blue-400"
        >
          Joey
        </Link>

        {/* Links */}
        <div className="flex gap-6 text-sm font-medium">
          <Link
            href="/"
            className={`${base} ${
              pathname === "/" ? active : inactive
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`${base} ${
              pathname?.startsWith("/about") ? active : inactive
            }`}
          >
            About
          </Link>

          <Link
            href="/projects"
            className={`${base} ${
              pathname?.startsWith("/projects") ? active : inactive
            }`}
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className={`${base} ${
              pathname?.startsWith("/contact") ? active : inactive
            }`}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
