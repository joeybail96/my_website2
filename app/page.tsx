// app/(site)/page.tsx  (Home)
import Image from "next/image";
import Link from "next/link";

function SectionCard({
  eyebrow,
  title,
  children,
  ctaHref,
  ctaText,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  ctaHref: string;
  ctaText: string;
}) {
  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      <div className="mt-3 text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
        {children}
      </div>
      <div className="mt-4">
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-500 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:decoration-zinc-400"
        >
          {ctaText} <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}

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
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
    >
      <span className="text-zinc-900 dark:text-zinc-100">{children}</span>
    </a>
  );
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-black">
      {/* Background banner: always behind everything */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34vh] min-h-[260px] z-0">
        <Image
          src="/photos/hero-banner.jpg"
          alt="Landscape background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-zinc-50 dark:to-black" />
      </div>

      {/* Page content */}
      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-14 pt-8 sm:px-6">
        {/* This spacer replaces the old negative margin overlap */}
        <div className="h-[22vh] min-h-[160px]" />

        <div className="grid gap-6 md:grid-cols-[320px_1fr]">
          {/* Profile card */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-800">
              <Image
                src="/photos/squaretop-profile.jpg"
                alt="Joey Bail"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 320px, 60vw"
              />
            </div>

            <h1 className="mt-5 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              Joey Bail
            </h1>
            <p className="mt-2 text-sm text-zinc-800 dark:text-zinc-200">
              Mechanical Engineering • Atmospheric Science • Salt Lake City, UT
            </p>

            <div className="mt-4 flex items-center gap-3">
              <SocialIcon
                href="https://www.linkedin.com/in/josephbail2018/"
                label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.8v2.1h.1c.5-.9 1.8-2.1 3.8-2.1 4 0 4.7 2.6 4.7 5.9V24h-4v-7.5c0-1.8 0-4.1-2.5-4.1s-2.9 1.9-2.9 4v7.6h-4V8.5z" />
                </svg>
              </SocialIcon>

              <SocialIcon href="https://github.com/joeybail96" label="GitHub">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
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
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="7" cy="12" r="5" />
                  <circle cx="17" cy="12" r="5" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Three sections */}
          <div className="grid gap-6">
            <SectionCard
              eyebrow="About"
              title="Engineer, scientist, and hands-on builder"
              ctaHref="/about"
              ctaText="More about me"
            >
              <p>
                I’m an engineer with a research background in air quality and environmental
                systems. I like projects that start with messy constraints and end with robust,
                documented systems — from CAD and fabrication through deployment, data, and
                results.
              </p>
            </SectionCard>

            <SectionCard
              eyebrow="Portfolio"
              title="Field systems, modeling work, and personal builds"
              ctaHref="/projects"
              ctaText="View projects"
            >
              <p>
                My portfolio includes field-deployable instrumentation and remote lab work,
                atmospheric modeling and analysis, and a handful of personal projects where I
                design, build, and iterate. Each project write-up focuses on what I owned, what
                tools I used, and what shipped.
              </p>
            </SectionCard>

            <SectionCard
              eyebrow="Now"
              title="Looking for roles where I can build real systems"
              ctaHref="/contact"
              ctaText="Contact me"
            >
              <p>
                I’m interested in roles that combine engineering execution with environmental or
                atmospheric applications — instrumentation, hardware development, test and
                deployment, or applied modeling and data workflows. If you think I’d be a fit,
                I’d love to connect.
              </p>
            </SectionCard>
          </div>
        </div>
      </main>
    </div>
  );
}
