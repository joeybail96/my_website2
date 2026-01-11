import Image from "next/image";
import Link from "next/link";

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
      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 text-white/80 shadow-sm backdrop-blur transition hover:border-white/30 hover:text-white"
    >
      {children}
    </a>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
      {children}
    </span>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      <div className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {children}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      {/* HERO */}
      <section className="relative">
        {/* Background image */}
        <div className="relative h-[62vh] min-h-[560px] w-full">
          <Image
            src="/photos/hero-banner.jpg"
            alt="Landscape background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-zinc-50 dark:to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
        </div>

        {/* Foreground content */}
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6 sm:pb-14">
            <div className="grid gap-8 md:grid-cols-[280px_1fr]">
              {/* PROFILE PHOTO */}
              <div className="md:self-stretch">
                <div className="relative h-[260px] w-[260px] md:h-full md:w-full md:max-w-[280px] overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-xl backdrop-blur">
                  <Image
                    src="/photos/squaretop-profile.jpg"
                    alt="Joey Bail"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>

              {/* TEXT STACK */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <Pill>Mechanical Engineering</Pill>
                    <Pill>Atmospheric Science</Pill>
                    <Pill>Salt Lake City, UT</Pill>
                  </div>

                  <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Joey Bail
                  </h1>

                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                    I’m an engineer with a research background in air quality and
                    environmental systems. I enjoy work that combines hands-on
                    design and deployment with analysis and modeling — producing
                    systems and results that are practical, documented, and
                    repeatable.
                  </p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/projects"
                      className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-white/90"
                    >
                      Selected work
                    </Link>

                    <Link
                      href="/about"
                      className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/15"
                    >
                      About
                    </Link>
                  </div>
                </div>

                {/* SOCIALS — bottom-aligned */}
                <div className="mt-6 flex items-center gap-3">
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
            </div>

            <div className="mt-10 h-px w-full bg-white/10" />
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Focus">
            Field instrumentation, mechanical design, and applied modeling for air
            quality and environmental systems.
          </Card>

          <Card title="Strengths">
            Comfortable moving between CAD/fabrication, sensors & deployment, and
            Python-based analysis. I value clean documentation and reproducible
            workflows.
          </Card>

          <Card title="Start here">
            <div className="flex flex-col gap-2">
              <Link href="/projects" className="hover:underline">
                Browse selected work →
              </Link>
              <Link href="/about" className="hover:underline">
                Background & interests →
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
