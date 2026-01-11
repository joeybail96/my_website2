export type Project = {
  slug: string;
  title: string;
  role: string;
  shortDescription: string;
  longDescription: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "project-1",
    title: "Example Project 1",
    role: "Design & Analysis",
    shortDescription:
      "Short description of what you did here. Mechanical design, modeling, data analysis, or field work.",
    longDescription: `
This is where you can write a longer story about the project.

Talk about:
• the problem
• your role
• tools you used
• challenges
• what you learned
• results or impact
    `,
    image: "/photos/project1.jpg",
  },
  {
    slug: "project-2",
    title: "Example Project 2",
    role: "Instrumentation & Field Work",
    shortDescription:
      "Another project summary. Focus on what problem you solved and what you contributed.",
    longDescription: `
Another deeper explanation of a project.

You can paste paragraph-style content here and expand later.
    `,
    image: "/photos/project2.jpg",
  },
  {
    slug: "project-3",
    title: "Example Project 3",
    role: "Data & Visualization",
    shortDescription:
      "High-level description of the data processing, modeling, or visualization you handled.",
    longDescription: `
Anything you want to highlight about this project goes here.
    `,
    image: "/photos/project3.jpg",
  },
  {
    slug: "subaru-camper",
    title: "Subaru Camper",
    role: "Mechanical Design & Fabrication",
    shortDescription:
      "Converted a Subaru into a compact camper with custom-built sleeping and storage systems.",
    longDescription: `
I designed and built a modular camper system inside my Subaru for road trips and outdoor travel.

The build included a raised sleeping platform, integrated storage, and mounting hardware designed to be removable and vehicle-safe. The project required careful planning around space, weight, and durability.

This was a hands-on mechanical design and fabrication project that turned an everyday vehicle into a functional mobile living space.
    `,
    image: "/photos/subaru-camper.jpg",
  },
  {
    slug: "cnc-plotter",
    title: "CNC Plotter",
    role: "Mechatronics & Prototyping",
    shortDescription:
      "Built a desktop CNC plotter using stepper motors, microcontrollers, and custom hardware.",
    longDescription: `
I built a small CNC plotter to learn motion control, electronics, and digital fabrication.

The system uses stepper motors, belts, and a microcontroller to translate digital vector files into precise physical drawings. I assembled the electronics, built the frame, and calibrated the motion system.

This project helped bridge CAD, electronics, and physical prototyping.
    `,
    image: "/photos/cnc-plotter.jpg",
  },
  {
    slug: "glass-autoloader",
    title: "Glass Autoloader",
    role: "Mechanical Engineering & Automation",
    shortDescription:
      "Designed and implemented an automated system for handling large glass sheets in a manufacturing line.",
    longDescription: `
I worked on the design and deployment of an automated glass-handling system used in an industrial production environment.

The system was built to safely and reliably move large glass panels between stations, requiring careful mechanical design, structural analysis, and coordination with controls and manufacturing teams.

This project provided direct experience with real-world industrial automation and production engineering.
    `,
    image: "/photos/glass-autoloader.jpg",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
