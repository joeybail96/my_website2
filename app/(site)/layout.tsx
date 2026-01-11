import Link from "next/link";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      {/* STICKY NAVBAR */}
      <header className="sticky top-0 z-50 bg-blue-200/90 text-zinc-900 shadow-sm backdrop-blur-md dark:bg-blue-900/60 dark:text-zinc-100">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          {/* LEFT — NAME / HOME LINK */}
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight hover:opacity-80"
          >
            Joey Bail{" "}
            <span className="ml-1 text-xs font-normal text-zinc-600 dark:text-zinc-300">
              (homepage)
            </span>
          </Link>

          {/* RIGHT — LINKS */}
          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="text-sm transition hover:text-blue-800 dark:hover:text-blue-300"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-sm transition hover:text-blue-800 dark:hover:text-blue-300"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-sm transition hover:text-blue-800 dark:hover:text-blue-300"
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* CONTENT AREA */}
      <main className="pt-6">{children}</main>
    </div>
  );
}
