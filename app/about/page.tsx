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
      </main>
    </div>
  );
}
