import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    slug: "project-1",
    title: "Design & Deployment of a Remote Aerosol Research Facility",
    role: "Design, Machining, & Field Install Work",
    description:
      "Designed and led construction of a 30-ft inlet and support structure for remote aerosol laboratory in the Wasatch Mountains",
    image: "/photos/snowscape-profile.jpg",
  },
  {
    slug: "project-2",
    title:
      "(Thesis) Modeling Secondary Air Quality Impacts of Shrinking Saline Lakes",
    role: "Fortran programming, Chemistry Modeling, & Analysis",
    description:
      "Created the framework for an atmospheric chemistry model to include the playa dust in its chemistry schemes, so we can begin to better understand the secondary chemistry impact of shrinking saline lakes, such as the Great Salt Lake.",
    image: "/photos/geoschem-profile.jpg",
  },
  {
    slug: "project-3",
    title: "(Thesis) Analyzing the Softening Behavior of Brain Vessels",
    role: "Experimental Design, Data, & Visualization",
    description:
      "Developed and executed experiments to further understand how brain vessels become damaged during traumatic brain injury events",
    image: "/photos/brain_vessel.bmp",
  },
  {
    slug: "project-4",
    title: "Subaru Camper",
    role: "Mechanical Design & Fabrication",
    description:
      "Designed and built a custom camping and storage setup in the trunk of my Subaru Outback.",
    image: "/photos/camper-profile.jpg",
  },
  {
    slug: "project-5",
    title: "CNC Plotter",
    role: "Mechatronics & Prototyping",
    description:
      "Built a desktop CNC plotter that could generate physical marker drawings of any image",
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
    <div className="flex justify-center bg-transparent px-3 py-10">
      <main className="w-full max-w-4xl rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md sm:p-10">
        <header className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Project Portfolio
          </h1>

          <p className="max-w-3xl text-base text-black">
            (click any project to read more)
          </p>
        </header>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-black bg-white/70 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[800/578] w-full overflow-hidden bg-zinc-200/70">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>

              <div className="flex flex-1 flex-col gap-2 p-4">
                <h2 className="text-base font-semibold leading-snug text-black group-hover:underline sm:text-lg">
                  {project.title}
                </h2>

                <p className="text-xs font-medium text-zinc-600">
                  {project.role}
                </p>

                <p className="text-sm leading-relaxed text-zinc-700">
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
