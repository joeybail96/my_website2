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
    <section className="rounded-2xl border border-black bg-white p-6 shadow-sm dark:border-white dark:bg-zinc-950">
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
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
    >
      {children}
    </a>
  );
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-black">
      {/* Background banner */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[34vh] min-h-[260px]">
        <Image
          src="/photos/hero-banner.jpg"
          alt="Landscape background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-zinc-50 dark:to-black" />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-14 pt-8 sm:px-6">
        <div className="h-[14vh] min-h-[110px]" />

        <div className="grid gap-6 md:grid-cols-[360px_1fr]">
          {/* Profile card */}
          <div className="rounded-3xl border border-black bg-white p-5 shadow-sm dark:border-white dark:bg-zinc-950">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-800">
              <Image
                src="/photos/home-profile.jpg"
                alt="Joey Bail"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 320px, 60vw"
              />
            </div>

            <h1 className="mt-5 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              Joey Bail
            </h1>

            <p className="mt-2 text-base font-medium text-black dark:text-white">
              Engineer • Scientist • Coder • Maker
            </p>

            <div className="mt-3 flex items-center gap-2 text-base font-medium text-black dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-blue-600 dark:text-blue-400"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>

              <span>Based in Salt Lake City, UT</span>
            </div>

            <div className="mt-5 flex justify-center gap-4">
              {/* LinkedIn */}
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

              {/* GitHub */}
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

              {/* Flickr */}
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

              {/* Google Scholar */}
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
          </div>

          {/* Three sections */}
          <div className="grid gap-6">
            <SectionCard
              eyebrow="About"
              title="Background and Career Objectives"
              ctaHref="/about"
              ctaText="More about me"
            >
              <p>
                I am an engineer with a research background in air quality and
                environmental systems. I am passionate about delivering solutions to complex 
                engineering problems with creative and thoughtful designs. Outside of work,
                I participate in a wide assortment of outdoor recreation, and I always 
                looking for another excuse to be out in nature!
              </p>
            </SectionCard>

            <SectionCard
              eyebrow="Portfolio"
              title="Academic and Personal Projects"
              ctaHref="/projects"
              ctaText="View projects"
            >
              <p>
                My portfolio includes field-deployable instrumentation and remote
                lab work, atmospheric modeling and analysis, and personal builds.
                Each project write-up focuses on what I owned, what tools I used,
                and project outcomes.
              </p>
            </SectionCard>

            <SectionCard
              eyebrow="Contact Me"
              title="Career Outreach"
              ctaHref="/contact"
              ctaText="Contact me"
            >
              <p>
                I am seeking design-focused mechanical engineering roles where I can contribute to the development and execution of real, 
                physical products and systems.
              </p>
            </SectionCard>
          </div>
        </div>
      </main>
    </div>
  );
}
