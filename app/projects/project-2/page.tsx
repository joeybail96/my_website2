import Image from "next/image";

export default function Project2Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">
        Example Project 2
      </h1>
      <p className="mt-2 text-sm font-medium text-zinc-500">
        Instrumentation & Field Work
      </p>

      <div className="relative mt-6 h-64 w-full overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
        <Image
          src="/photos/project2.jpg"
          alt="Example Project 2"
          fill
          className="object-cover"
        />
      </div>

      <article className="mt-6 space-y-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        <p>
          Longer description of this project. Field deployments, hardware,
          measurements, logistics, etc.
        </p>
      </article>
    </main>
  );
}
