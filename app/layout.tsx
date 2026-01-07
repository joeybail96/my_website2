import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Joey | Portfolio",
  description: "Personal site and project portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-50 dark:bg-black`}>
        {/* STICKY NAVBAR */}
        <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/90">
          <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
            {/* LEFT — NAME */}
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight hover:opacity-80"
            >
              Joey Bail
            </Link>

            {/* RIGHT — LINKS */}
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="text-sm text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-sm text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white"
              >
                Projects
              </Link>
            </div>
          </nav>
        </header>

        {/* CONTENT AREA — add padding so content doesn't hug navbar */}
        <main className="pt-6">{children}</main>
      </body>
    </html>
  );
}
