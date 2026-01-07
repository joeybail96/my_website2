export default function AboutPage() {
  return (
    <div className="flex justify-center bg-zinc-50 px-4 py-10 dark:bg-black">
      <main className="w-full max-w-4xl rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-950 sm:p-12">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          About Me
        </h1>

        <p className="mt-4 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
          I&apos;m Joey, an engineer and scientist interested in air quality,
          environmental systems, and building things that actually get used. I
          like projects that sit at the intersection of hardware, data, and the
          outdoors.
        </p>

        <section className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-sm font-semibold">What I work on</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Mechanical design, instrumentation, data analysis, and field
              deployments. I enjoy taking messy real-world constraints and
              turning them into systems that are robust and understandable.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-sm font-semibold">Outside of work</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Trail running, climbing, skiing, and tinkering with small
              mechanical or electronics projects. I like being outside as much
              as possible and bringing that perspective back into the work I do.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-sm font-semibold">What I&apos;m looking for</h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
            Roles where I can blend hands-on engineering with real-world
            environmental or air-quality problems. If you&apos;re working on
            something in that space and need someone who can bridge hardware and
            data, I&apos;m interested in hearing about it.
          </p>
        </section>

        {/* DOWNLOAD BUTTONS */}
        <section className="mt-10">
          <h2 className="text-sm font-semibold">Downloads</h2>

          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/files/Bail-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-300"
            >
              Open Resume (PDF)
            </a>

            <a
              href="/files/Bail-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-800 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              Open CV (PDF)
            </a>
          </div>
        </section>

        {/* SOCIAL ICONS */}
        <section className="mt-10">
          <h2 className="text-sm font-semibold">Find me online</h2>

          <div className="mt-3 flex gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/josephbail2018/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.8v2.1h.1c.5-.9 1.8-2.1 3.8-2.1 4 0 4.7 2.6 4.7 5.9V24h-4v-7.5c0-1.8 0-4.1-2.5-4.1s-2.9 1.9-2.9 4v7.6h-4V8.5z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/joeybail96"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.5 1.1 3.1.8.1-.7.4-1.1.7-1.4-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.3 1.1-3.2-.1-.3-.5-1.5.1-3.2 0 0 .9-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.7.9 1.1 2 1.1 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </a>

            {/* Flickr */}
            <a
              href="https://www.flickr.com/photos/204000233@N02/albums"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Flickr"
              className="text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="7" cy="12" r="5" />
                <circle cx="17" cy="12" r="5" />
              </svg>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
