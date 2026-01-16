import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    slug: "project-1",
    title: "Design & Deployment of a Remote Aerosol Research Facility",
    role: "Design, Machining, & Field Install Work",
    description:
      "End-to-end development of a remote aerosol research facility, including design and fabrication of a custom inlet system, construction of a container-based lab, and installation of the inlet, structural supports, and instruments at a remote site in the Wasatch Mountains.",
    image: "/photos/snowscape-profile.jpg",
  },
  {
    slug: "project-2",
    title:
      "(Thesis) Modeling Secondary Air Quality Impacts of Shrinking Saline Lakes",
    role: "Fortran programming, Chemistry Modeling, & Analysis",
    description:
      "Extended the GEOS-Chem global air-quality model to simulate chloride-rich dust from shrinking saline lakes, and used the framework I developed to quantify how chloride-rich dust from shrinking saline lakes might be altering regional air-quality in the western United States.",
    image: "/photos/geoschem-profile.jpg",
  },
  {
    slug: "project-3",
    title: "(Thesis) Analyzing the Softening Behavior of Brain Vessels",
    role: "Experimental Design, Data, & Visualization",
    description:
      "Developed data processing and modeling tools to quantify softening behavior of cerebral vessels from experimental and imaging-based measurements.",
    image: "/photos/vessel-profile.jpg",
  },
  {
    slug: "project-4",
    title: "Subaru Camper",
    role: "Mechanical Design & Fabrication",
    description:
      "Designed and built a modular camper system inside a Subaru, including a raised sleeping platform, integrated storage, and vehicle-safe mounting hardware for extended road trips and field travel.",
    image: "/photos/camper-profile.jpg",
  },
  {
    slug: "project-5",
    title: "CNC Plotter",
    role: "Mechatronics & Prototyping",
    description:
      "Built a desktop CNC plotter using stepper motors, belt drives, and a microcontroller to convert digital vector drawings into precise physical motion.",
    image: "/photos/cncplotter-profile.jpg",
  },
  {
    slug: "project-6",
    title: "(Capstone) Glass Autoloader",
    role: "Mechanical Engineering & Automation",
    description:
      "Designed and implemented an automated system for safely handling and loading large glass sheets in an industrial manufacturing environment.",
    image: "/photos/glass-profile.jpg",
  },
];

export default function ProjectsPage() {
  return (
    // ✅ IMPORTANT: transparent wrapper so global layout background can show
    <div className="flex justify-center bg-transparent px-3 py-8">
      {/* ✅ Main container translucent + blur */}
      <main className="w-full max-w-4xl rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/60 sm:p-8">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
          Project Portfolio
        </h1>

        <p className="mt-3 max-w-3xl text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
          Click any project to read more about it.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/70 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-950/55 dark:hover:border-zinc-700"
            >
              <div className="relative aspect-[800/578] w-full overflow-hidden bg-zinc-200/70 dark:bg-zinc-800/60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>

              <div className="flex flex-1 flex-col gap-2 p-4">
                <h2 className="text-base font-semibold leading-snug text-zinc-900 group-hover:underline dark:text-zinc-100 sm:text-lg">
                  {project.title}
                </h2>

                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
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
