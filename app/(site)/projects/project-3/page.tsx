import Image from "next/image";

export default function Project3Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">
        Example Project 3
      </h1>

      <p className="mt-2 text-sm font-medium text-zinc-500">
        Data & Visualization
      </p>

      <div className="relative mt-6 h-64 w-full overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
        <Image
          src="/photos/project3.jpg"
          alt="Example Project 3"
          fill
          className="object-cover"
        />
      </div>

      <article className="mt-6 space-y-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        <p>
          This project focuses on data analysis and visualization. You can write
          about the datasets you worked with, the methods you used, and the
          goals of the project.
        </p>

        <p>
          Describe how you approached turning raw information into meaningful
          insights, tools, or visual outputs. Mention any coding, tools, or
          frameworks you relied on.
        </p>

        <p>
          Finally, you can talk about what you learned, and what impact the work
          had — whether research, engineering, or decision-making.
        </p>
      </article>
    </main>
  );
}
