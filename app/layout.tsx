import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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
      <body
        className={`${inter.className} bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50`}
      >
        <div className="min-h-screen flex flex-col">
          <NavBar />

          <main className="flex-1">{children}</main>

          <footer className="border-t border-zinc-200/60 bg-white/80 py-4 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:bg-black/60">
            © {new Date().getFullYear()} Joey. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
