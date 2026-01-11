export default function AboutPage() {
  return (
    <div className="flex justify-center bg-zinc-50 px-4 py-10 dark:bg-black">
      <main className="w-full max-w-4xl rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:p-12">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="mt-1 h-10 w-1.5 rounded-full bg-blue-600" />
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              About Me
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-zinc-700 dark:text-zinc-300 sm:text-base">
              I&apos;m Joey, an engineer and scientist interested in air quality,
              environmental systems, and building things that actually get used.
              I like projects that sit at the intersection of hardware, data,
              and the outdoors.
            </p>
          </div>
        </div>

        {/* Info blocks */}
        <section className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              What I work on
            </h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              Mechanical design, instrumentation, data analysis, and field
              deployments. I enjoy taking messy real-world constraints and
              turning them into systems that are robust and understandable.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Outside of work
            </h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              Trail running, climbing, skiing, and tinkering with small
              mechanical or electronics projects. I like being outside as much
              as possible and bringing that perspective back into the work I do.
            </p>
          </div>
        </section>

        {/* What I'm looking for */}
        <section className="mt-10">
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            What I&apos;m looking for
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-700 dark:text-zinc-300">
            Roles where I can blend hands-on engineering with real-world
            environmental or air-quality problems. If you&apos;re working on
            something in that space and need someone who can bridge hardware and
            data, I&apos;m interested in hearing about it.
          </p>
        </section>

        {/* Downloads */}
        <section className="mt-10">
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Downloads
          </h2>

          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/files/Bail-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Open Resume (PDF)
            </a>

            <a
              href="/files/Bail-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-2 text-sm font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              Open CV (PDF)
            </a>
          </div>
        </section>

        {/* Socials */}
        <section className="mt-10">
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Find me online
          </h2>

          <div className="mt-3 flex gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/josephbail2018/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900 shadow-sm transition hover:border-blue-300 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:border-blue-900 dark:hover:text-blue-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.8v2.1h.1c.5-.9 1.8-2.1 3.8-2.1 4 0 4.7 2.6 4.7 5.9V24h-4v-7.5c0-1.8 0-4.1-2.5-4.1s-2.9 1.9-2.9 4v7.6h-4V8.5z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/joeybail96"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900 shadow-sm transition hover:border-blue-300 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:border-blue-900 dark:hover:text-blue-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.5 1.1 3.1.8.1-.7.4-1.1.7-1.4-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.3 1.1-3.2-.1-.3-.5-1.5.1-3.2 0 0 .9-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.7.9 1.1 2 1.1 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </a>

            {/* Flickr */}
            <a
              href="https://www.flickr.com/photos/204000233@N02/albums"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Flickr"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900 shadow-sm transition hover:border-blue-300 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:border-blue-900 dark:hover:text-blue-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="7" cy="12" r="5" />
                <circle cx="17" cy="12" r="5" />
              </svg>
            </a>

            {/* Google Scholar */}
            <a
              href="https://scholar.google.com/citations?view_op=list_works&hl=en&user=jc_bJg4AAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Scholar"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900 shadow-sm transition hover:border-blue-300 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:border-blue-900 dark:hover:text-blue-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                <path d="M11 12.98L3.24 9 11 5.02 18.76 9 11 12.98z" />
                <path d="M11 14.97L5 11.94V17l6 3 6-3v-5.06l-6 3.03z" />
              </svg>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
