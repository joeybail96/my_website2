"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/* ------------------------ Bottom Social Bar ------------------------ */

function BottomSocialBar() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-3 px-6 py-3 sm:flex-row sm:items-center">
        {/* LEFT — EMAIL */}
        <div className="flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="text-zinc-600 dark:text-zinc-400"
          >
            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
          <a
            href="mailto:jdbail2018@gmail.com"
            className="underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-500 dark:decoration-zinc-700 dark:hover:decoration-zinc-400"
          >
            jdbail2018@gmail.com
          </a>
        </div>

        {/* RIGHT — SOCIAL LINKS */}
        <div className="flex flex-wrap items-center gap-5">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/josephbail2018/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-zinc-900 transition hover:opacity-80 dark:text-zinc-100"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              className="text-[#0A66C2]"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.8v2.1h.1c.5-.9 1.8-2.1 3.8-2.1 4 0 4.7 2.6 4.7 5.9V24h-4v-7.5c0-1.8 0-4.1-2.5-4.1s-2.9 1.9-2.9 4v7.6h-4V8.5z" />
            </svg>
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/joeybail96"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-zinc-900 transition hover:opacity-80 dark:text-zinc-100"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              className="text-black dark:text-white"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.5 1.1 3.1.8.1-.7.4-1.1.7-1.4-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.3 1.1-3.2-.1-.3-.5-1.5.1-3.2 0 0 .9-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.7.9 1.1 2 1.1 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z" />
            </svg>
            GitHub
          </a>

          {/* Google Scholar */}
          <a
            href="https://scholar.google.com/citations?view_op=list_works&hl=en&user=jc_bJg4AAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-zinc-900 transition hover:opacity-80 dark:text-zinc-100"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              className="text-[#4285F4]"
            >
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
              <path d="M11 12.98L3.24 9 11 5.02 18.76 9 11 12.98z" />
              <path d="M11 14.97L5 11.94V17l6 3 6-3v-5.06l-6 3.03z" />
            </svg>
            Scholar
          </a>

          {/* Flickr */}
          <a
            href="https://www.flickr.com/photos/204000233@N02/albums"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-zinc-900 transition hover:opacity-80 dark:text-zinc-100"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              className="text-[#FF0084]"
            >
              <circle cx="7" cy="12" r="5" />
              <circle cx="17" cy="12" r="5" />
            </svg>
            Flickr
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------ Top Nav Link ------------------------ */

function TopNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  return (
    <Link
      href={href}
      className={[
        "text-sm font-semibold transition underline underline-offset-4",
        isActive
          ? "text-zinc-900 decoration-zinc-900 dark:text-zinc-100 dark:decoration-zinc-100"
          : "text-zinc-900 decoration-transparent hover:text-blue-800 hover:decoration-blue-300 dark:text-zinc-100 dark:hover:text-blue-300 dark:hover:decoration-blue-300",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

/* ------------------------ Layout ------------------------ */

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Global background image for ALL pages */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="h-full w-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/photos/hero-banner.jpg')" }}
        />
        {/* Overlay so text/cards remain readable */}
        <div className="absolute inset-0 bg-white/80 dark:bg-black/75" />
      </div>

      <header className="sticky top-0 z-50 bg-blue-200/90 text-zinc-900 shadow-sm backdrop-blur-md dark:bg-blue-900/60 dark:text-zinc-100">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight hover:opacity-80"
          >
            Joey Bail{" "}
            <span className="ml-1 text-xs font-normal text-zinc-600 dark:text-zinc-300">
              (homepage)
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <TopNavLink href="/professional">Professional</TopNavLink>
            <TopNavLink href="/personal">Personal</TopNavLink>
            <TopNavLink href="/projects">Portfolio</TopNavLink>
            <TopNavLink href="/contact">Contact</TopNavLink>
          </div>
        </nav>
      </header>

      {/* ✅ flex-1 pushes layout height correctly */}
      {/* ✅ pb-24 prevents footer overlap */}
      <main className="flex-1 pt-6 pb-24">{children}</main>

      <BottomSocialBar />
    </div>
  );
}
