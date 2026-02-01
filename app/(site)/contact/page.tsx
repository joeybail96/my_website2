"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const res = await fetch("https://formspree.io/f/meeeoyjd", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("idle");
      router.push("/contact/thanks");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        Contact
      </h1>

      <p className="mt-3 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
        If you’d like to reach out about roles, collaborations, or any of the work
        on this site, the form below will send me an email.
      </p>

      {/* Direct contact options */}
      <div className="mt-6">
        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          You can also reach me via any of these mediums:
        </p>

        <ul className="mt-3 space-y-2 text-sm">
          {/* Gmail */}
          <li className="flex items-center gap-3">
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="currentColor"
              className="text-[#EA4335]"
            >
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>

            <a
              href="mailto:joey.bail@gmail.com"
              className="underline-offset-4 hover:underline text-zinc-900 dark:text-zinc-100"
            >
              joey.bail@gmail.com
            </a>
          </li>

          {/* University of Utah */}
          <li className="flex items-center gap-3">
            <span className="inline-flex h-[22px] w-[22px] items-center justify-center overflow-hidden rounded-full border border-black bg-white">
              <Image
                src="/logos/university-of-utah.jpg"
                alt="University of Utah"
                width={16}
                height={16}
                className="object-contain"
              />
            </span>

            <a
              href="mailto:joey.bail@utah.edu"
              className="underline-offset-4 hover:underline text-zinc-900 dark:text-zinc-100"
            >
              joey.bail@utah.edu
            </a>
          </li>

          {/* LinkedIn */}
          <li className="flex items-center gap-3">
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="currentColor"
              className="text-[#0A66C2]"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.8v2.1h.1c.5-.9 1.8-2.1 3.8-2.1 4 0 4.7 2.6 4.7 5.9V24h-4v-7.5c0-1.8 0-4.1-2.5-4.1s-2.9 1.9-2.9 4v7.6h-4V8.5z" />
            </svg>

            <a
              href="https://www.linkedin.com/in/josephbail2018/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:underline text-zinc-900 dark:text-zinc-100"
            >
              linkedin.com/in/josephbail2018
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:p-8">
        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-zinc-600"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-zinc-600"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
            >
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-zinc-600"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={7}
              required
              className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-zinc-600"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            {status === "submitting" ? "Sending..." : "Send message"}
          </button>

          {status === "error" ? (
            <p className="text-sm text-red-600 dark:text-red-400">
              Something went wrong. Please try again.
            </p>
          ) : null}
        </form>
      </div>
    </main>
  );
}
