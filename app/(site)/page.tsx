import Image from "next/image";

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
    >
      {children}
    </a>
  );
}

function MiniPhoto({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
          sizes="(min-width: 768px) 220px, 33vw"
        />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-transparent">
      {/* Center the whole block vertically in the viewport (account for sticky header + fixed bottom bar) */}
      <div className="mx-auto flex min-h-[calc(100vh-64px-72px)] w-full max-w-6xl items-center px-4 py-10 sm:px-6">
        <div className="grid w-full items-center gap-8 md:grid-cols-[360px_1fr]">
          {/* LEFT */}
          <aside className="rounded-3xl border border-zinc-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/60">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-800">
              <Image
                src="/photos/home-profile.jpg"
                alt="Joey Bail"
                fill
                priority
                className="object-cover object-top"
                sizes="(min-width: 1024px) 360px, 80vw"
              />
            </div>

            <h1 className="mt-5 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              Joey Bail
            </h1>
            <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Engineer • Scientist • Coder • Maker
            </p>

            <div className="mt-5 flex justify-center gap-4">
              <SocialIcon
                href="https://www.linkedin.com/in/josephbail2018/"
                label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-[#0A66C2]"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.8v2.1h.1c.5-.9 1.8-2.1 3.8-2.1 4 0 4.7 2.6 4.7 5.9V24h-4v-7.5c0-1.8 0-4.1-2.5-4.1s-2.9 1.9-2.9 4v7.6h-4V8.5z" />
                </svg>
              </SocialIcon>

              <SocialIcon href="https://github.com/joeybail96" label="GitHub">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-black dark:text-white"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.5 1.1 3.1.8.1-.7.4-1.1.7-1.4-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.3 1.1-3.2-.1-.3-.5-1.5.1-3.2 0 0 .9-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.7.9 1.1 2 1.1 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </SocialIcon>

              <SocialIcon
                href="https://www.flickr.com/photos/204000233@N02/albums"
                label="Flickr"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-[#FF0084]"
                >
                  <circle cx="7" cy="12" r="5" />
                  <circle cx="17" cy="12" r="5" />
                </svg>
              </SocialIcon>

              <SocialIcon
                href="https://scholar.google.com/citations?view_op=list_works&hl=en&user=jc_bJg4AAAAJ"
                label="Google Scholar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-[#4285F4]"
                >
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                  <path d="M11 12.98L3.24 9 11 5.02 18.76 9 11 12.98z" />
                  <path d="M11 14.97L5 11.94V17l6 3 6-3v-5.06l-6 3.03z" />
                </svg>
              </SocialIcon>
            </div>
          </aside>

          {/* RIGHT */}
          <section className="rounded-3xl border border-zinc-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/60 sm:p-7">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              Welcome to my website!
            </h2>

            <p className="mt-3 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              I’m a mechanical engineer with a background in atmospheric science,
              focused on building field-ready systems that work outside the lab.
              My projects span CAD and fabrication, instrumentation and
              deployments, and data-driven modeling—often in environmental or
              outdoor contexts.
            </p>

            {/* 1x3 photo row */}
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <MiniPhoto
                src="/photos/outreach.jpg"
                alt="Climbing"
              />
              <MiniPhoto
                src="/photos/moes.jpg"
                alt="Skiing"
              />
              <MiniPhoto
                src="/photos/cncplotter-profile.jpg"
                alt="Camping build"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
