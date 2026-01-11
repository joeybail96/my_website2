import Image from "next/image";

export default function Project6Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">
        Glass Autoloader
      </h1>
      <p className="mt-2 text-sm font-medium text-zinc-500">
        Mechanical Engineering & Automation
      </p>

      <div className="relative mt-6 h-64 w-full overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
        <Image
          src="/photos/glass-autoloader.jpg"
          alt="Glass Autoloader"
          fill
          className="object-cover"
        />
      </div>

      <article className="mt-6 space-y-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        <p>
          I worked on the design and deployment of an automated system for handling large glass sheets in a manufacturing environment.
        </p>
        <p>
          The goal was to safely and reliably transfer fragile glass panels between stations, requiring careful mechanical design and coordination with controls and production teams.
        </p>
        <p>
          This project gave me real-world experience with industrial automation, reliability, and safety-critical mechanical systems.
        </p>
      </article>
    </main>
  );
}
