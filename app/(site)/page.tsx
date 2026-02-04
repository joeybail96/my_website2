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
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black bg-white shadow-sm transition hover:bg-zinc-50"
    >
      {children}
    </a>
  );
}

function MiniPhoto({
  href,
  src,
  alt,
  overlay,
}: {
  href: string;
  src: string;
  alt: string;
  overlay?: string;
}) {
  return (
    <a
      href={href}
      className="group relative block overflow-hidden rounded-2xl border border-black bg-white shadow-sm"
      aria-label={alt}
    >
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
          sizes="(min-width: 768px) 220px, 50vw"
        />

        <div className="pointer-events-none absolute inset-0 flex items-end bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/45 group-hover:opacity-100">
          <div className="w-full p-3">
            <p className="text-sm font-medium text-white">{overlay ?? alt}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

/* ---------------- Degree Logo (circle wrapper) ---------------- */

function CircleLogo({
  src,
  alt,
  scale = 1,
}: {
  src: string;
  alt: string;
  scale?: number;
}) {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border border-black bg-white">
      <Image
        src={src}
        alt={alt}
        width={14}
        height={14}
        className="object-contain"
        style={{ transform: `scale(${scale})` }}
      />
    </span>
  );
}

export default function HomePage() {
  return (
    <div className="bg-transparent">
      <div className="mx-auto flex min-h-[calc(100vh-64px-72px)] w-full max-w-6xl items-center px-4 py-10 sm:px-6">
        {/* ✅ change items-stretch -> items-start so left panel doesn't stretch */}
        <div className="grid w-full items-start gap-8 md:grid-cols-[360px_1fr]">
          {/* LEFT */}
          {/* ✅ remove h-full so it sizes to content */}
          <aside className="flex flex-col rounded-3xl border border-black bg-white/80 p-5 shadow-sm backdrop-blur-md">
            {/* Top: photo + centered name */}
            <div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-black bg-zinc-200">
                <Image
                  src="/photos/home-profile.jpg"
                  alt="Joey Bail"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 360px, 80vw"
                />
              </div>

              {/* Centered name + labels */}
              <div className="mt-5 text-center">
                <h1 className="text-2xl font-semibold tracking-tight text-black">
                  Joseph Bail (Joey)
                </h1>
                <p className="mt-1 text-sm font-medium text-black">
                  Engineer • Researcher • Coder • Maker
                </p>
              </div>
            </div>

            {/* ✅ remove flex-1 centering; just normal spacing so no forced whitespace */}
            <div className="mt-5">
              <ul className="space-y-2 pl-6 text-[15px] text-black">
                <li className="flex items-center gap-3">
                  <CircleLogo
                    src="/logos/university-of-utah.jpg"
                    alt="University of Utah"
                  />
                  <span>MS Atmospheric Sciences</span>
                </li>

                <li className="flex items-center gap-3">
                  <CircleLogo
                    src="/logos/university-of-utah.jpg"
                    alt="University of Utah"
                  />
                  <span>MS Mechanical Engineering</span>
                </li>

                <li className="flex items-center gap-3">
                  <CircleLogo
                    src="/logos/penn-state.jpg"
                    alt="Penn State University"
                    scale={1.2}
                  />
                  <span>BS Mechanical Engineering</span>
                </li>
              </ul>
            </div>

            {/* Bottom icons */}
            <div className="pt-4 flex justify-center gap-3">
              <SocialIcon href="mailto:joey.bail@gmail.com" label="Email">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="text-[#EA4335]"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </SocialIcon>

              <SocialIcon
                href="https://www.linkedin.com/in/josephbail2018/"
                label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="text-[#0A66C2]"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.8v2.1h.1c.5-.9 1.8-2.1 3.8-2.1 4 0 4.7 2.6 4.7 5.9V24h-4v-7.5c0-1.8 0-4.1-2.5-4.1s-2.9 1.9-2.9 4v7.6h-4V8.5z" />
                </svg>
              </SocialIcon>

              <SocialIcon href="https://github.com/joeybail96" label="GitHub">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="text-black"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.5 1.1 3.1.8.1-.7.4-1.1.7-1.4-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.3 1.1-3.2-.1-.3-.5-1.5.1-3.2 0 0 .9-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.7.9 1.1 2 1.1 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </SocialIcon>

              <SocialIcon
                href="https://www.flickr.com/photos/204000233@N02/albums"
                label="Flickr"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
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
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
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

          {/* RIGHT unchanged (keeps filling height) */}
          <section className="flex h-full flex-col rounded-3xl border border-black bg-white/80 p-6 shadow-sm backdrop-blur-md sm:p-7">
            <h2 className="text-2xl font-semibold tracking-tight text-black">
              Welcome to my website!
            </h2>
            <p className="mt-3 text-base leading-relaxed text-black">
              I’m a mechanical engineer with experience in applied engineering and academic
              research. I am passionate about designing and building practical solutions to complex
              problems. My background spans drafting project proposals, CAD, prototyping, testing, and
              implementation, with an emphasis on work that carries ideas all the way from
              concept to execution.
            </p>


            <p className="mt-3 text-base leading-relaxed text-black">
              I recently completed my MS thesis in Atmospheric Sciences focused on air quality research. While my
              thesis centered on atmospheric chemistry and climate modeling, I naturally became heavily involved
              in field campaign work that required engineering skillsets, which I had already developed through my education,
              industry experience, and personal projects. This work included instrument installation, data
              collection and management, and the design and construction of a remote, mobile mountain laboratory.
            </p>


            <p className="mt-3 text-base leading-relaxed text-black">
              I am currently seeking an engineering role where I can contribute as a practical, detail-oriented
              engineer. While air quality challenges strongly motivate me, I am excited to work on a broad range
              of real-world engineering problems.
            </p>


            <p className="mt-3 text-base leading-relaxed text-black">
              I have designed this website to share some of my professional
              experience, a little bit about my personal interests, and a sample
              of my project portfolio. Thanks for checking it out!
            </p>

            <div className="mt-auto pt-5 grid gap-3 sm:grid-cols-2">
              <MiniPhoto
                href="/professional"
                src="/photos/building.jpg"
                alt="Professional"
                overlay="professional experience & skills"
              />
              <MiniPhoto
                href="/personal"
                src="/photos/moes.jpg"
                alt="Personal"
                overlay="personal background & interests"
              />
              <MiniPhoto
                href="/projects"
                src="/photos/cncplotter-profile.jpg"
                alt="Portfolio"
                overlay="personal and professional portfolio"
              />
              <MiniPhoto
                href="/contact"
                src="/photos/outreach_blurred.jpg"
                alt="Contact"
                overlay="contact me"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
