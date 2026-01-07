import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    slug: "project-1",
    title: "Design & Deployment of a Remote Aerosol Research Facility",
    role: "Design & Analysis",
    description:
      "End-to-end development of a remote aerosol research facility, including design and fabrication of a custom inlet system, construction of a container-based lab, and installation of the inlet, structural supports, and instruments at a remote site in the Wasatch Mountains.",
    image: "/photos/snowscape-profile.jpg",
  },
  {
    slug: "project-2",
    title: "(Thesis) Modeling Secondary Air Quality Impacts of Shrinking Saline Lakes",
    role: "Instrumentation & Field Work",
    description:
      "Extended the GEOS-Chem global air-quality model to simulate chloride-rich dust from shrinking saline lakes, and used the framework I developed to quantify how chloride-rich dust from shrinking saline lakes might be altering regional air-quality in the western United States.",
    image: "/photos/geoschem-profile.jpg",
  },
  {
    slug: "project-3",
    title: "(Thesis) Analyzing the Softening Behavior of Brain Vessels",
    role: "Data & Visualization",
    description:
      "High-level description of the data processing, modeling, or visualization you handled.",
    image: "/photos/vessel-profile.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex justify-center bg-zinc-50 px-4 py-12 dark:bg-black">
      <main className="w-full max-w-6xl rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-950 sm:p-12">
        <h1 className="text-4xl font-semibold tracking-tight">Projects</h1>

        <p className="mt-6 max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">
          A sample of things I&apos;ve worked on. Click any project to read more
          about it.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
            >
              {/* ASPECT-RATIO LOCKED IMAGE */}
              <div className="relative w-full aspect-[800/578] overflow-hidden rounded-t-2xl bg-zinc-200 dark:bg-zinc-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>

              <div className="flex flex-1 flex-col gap-3 p-8">
                <h2 className="text-xl font-semibold leading-tight group-hover:underline">
                  {project.title}
                </h2>

                <p className="text-sm font-medium text-zinc-500">
                  {project.role}
                </p>

                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
