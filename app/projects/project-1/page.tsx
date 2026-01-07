import Image from "next/image";

export default function Project1Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">
        Design & Deployment of a Remote Aerosol Research Facility
      </h1>
      <p className="mt-2 text-sm font-medium text-zinc-500">
        Design & Analysis
      </p>

      <div className="relative mt-6 h-64 w-full overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
        <Image
          src="/photos/project1.jpg"
          alt="Design & Deployment of a Remote Aerosol Research Facility"
          fill
          className="object-cover"
        />
      </div>

      <article className="mt-6 space-y-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        <p>
          This is where you write the longer description of the project. Talk
          about the problem, your role, what tools you used, and what the
          outcome was.
        </p>
        <p>
          You can add multiple paragraphs here. Later, we could make this nicer
          with headings, bullet points, or even markdown.
        </p>
      </article>
    </main>
  );
}
