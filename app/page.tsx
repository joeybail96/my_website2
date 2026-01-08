import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center bg-zinc-50 px-4 py-10 dark:bg-black">
      <main className="flex w-full max-w-5xl flex-col gap-10 rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-950 sm:flex-row sm:p-12">
        {/* Left: photo collage */}
        <section className="flex-1">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative h-40 w-full overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
              <Image
                src="/photos/joey-1.jpg"
                alt="Joey outdoors"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 w-full overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
              <Image
                src="/photos/joey-2.jpg"
                alt="Joey working on a project"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 w-full overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
              <Image
                src="/photos/joey-3.jpg"
                alt="Mountains or trail"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 w-full overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
              <Image
                src="/photos/snowclime-profile.jpg"
                alt="Lab or hardware setup"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Right: intro + links */}
        <section className="flex-1">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Portfolio
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Hi, I&apos;m Joey.
          </h1>
          <p className="mt-4 max-w-xl text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
            I&apos;m an engineer and scientist who likes building things,
            solving messy problems, and spending time in the mountains. This
            site is a place to keep a bit of who I am and what I&apos;ve worked
            on, from field projects to analysis and design work.
          </p>

          <p className="mt-4 max-w-xl text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
            If you want the longer version, you can read more about my
            background, interests, and what I&apos;m looking for. Or skip
            straight to concrete projects I&apos;ve worked on.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/about"
              className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-300"
            >
              About Me
            </a>
            <a
              href="/projects"
              className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-800 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              View Projects
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
