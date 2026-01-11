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
    title:
      "(Thesis) Modeling Secondary Air Quality Impacts of Shrinking Saline Lakes",
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
      "Developed data processing and modeling tools to quantify softening behavior of cerebral vessels from experimental and imaging-based measurements.",
    image: "/photos/vessel-profile.jpg",
  },
  {
    slug: "subaru-camper",
    title: "Subaru Camper",
    role: "Mechanical Design & Fabrication",
    description:
      "Designed and built a modular camper system inside a Subaru, including a raised sleeping platform, integrated storage, and vehicle-safe mounting hardware for extended road trips and field travel.",
    image: "/photos/camper-profile.jpg",
  },
  {
    slug: "cnc-plotter",
    title: "CNC Plotter",
    role: "Mechatronics & Prototyping",
    description:
      "Built a desktop CNC plotter using stepper motors, belt drives, and a microcontroller to convert digital vector drawings into precise physical motion.",
    image: "/photos/cncplotter-profile.jpg",
  },
  {
    slug: "glass-autoloader",
    title: "(Capstone) Glass Autoloader",
    role: "Mechanical Engineering & Automation",
    description:
      "Designed and implemented an automated system for safely handling and loading large glass sheets in an industrial manufacturing environment.",
    image: "/photos/glass-profile.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex justify-center bg-zinc-50 px-3 py-8 dark:bg-black">
      <main className="w-full max-w-4xl rounded-2xl bg-white p-6 shadow-sm dark:bg-zinc-950 sm:p-8">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Projects
        </h1>

        <p className="mt-3 max-w-3xl text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
          A sample of things I&apos;ve worked on. Click any project to read more
          about it.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 shadow transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="relative w-full aspect-[800/578] overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>

              <div className="flex flex-1 flex-col gap-2 p-4">
                <h2 className="text-base font-semibold leading-snug group-hover:underline sm:text-lg">
                  {project.title}
                </h2>

                <p className="text-xs font-medium text-zinc-500">
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
