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
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
