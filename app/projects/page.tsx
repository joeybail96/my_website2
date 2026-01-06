import Image from "next/image";

const projects = [
  {
    title: "Example Project 1",
    role: "Design & Analysis",
    description:
      "Short description of what you did here. Mechanical design, modeling, data analysis, or field work.",
    image: "/photos/project1.jpg", // change to your real files later
  },
  {
    title: "Example Project 2",
    role: "Instrumentation & Field Work",
    description:
      "Another project summary. Focus on what problem you solved and what you contributed.",
    image: "/photos/project2.jpg",
  },
  {
    title: "Example Project 3",
    role: "Data & Visualization",
    description:
      "High-level description of the data processing, modeling, or visualization you handled.",
    image: "/photos/project3.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex justify-center bg-zinc-50 px-4 py-10 dark:bg-black">
      <main className="w-full max-w-5xl rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-950 sm:p-12">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Projects
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
          A sample of things I&apos;ve worked on. I&apos;ll gradually add more
          detail, photos, and links as I organize past projects.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="relative h-40 w-full bg-zinc-200 dark:bg-zinc-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <h2 className="text-sm font-semibold">{project.title}</h2>
                <p className="text-xs font-medium text-zinc-500">
                  {project.role}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
