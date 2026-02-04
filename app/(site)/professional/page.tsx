import Image from "next/image";

/* ------------------------ UI Helpers ------------------------ */

function Divider() {
  return <div className="my-12 h-px w-full bg-zinc-200/80 dark:bg-zinc-800/80" />;
}

function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="text-2xl font-semibold tracking-tight text-black">
      {title}
    </h2>
  );
}

function Photo({
  src,
  alt,
  overlay,
}: {
  src: string;
  alt: string;
  overlay?: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-black bg-white/70 shadow-sm backdrop-blur">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
        />

        <div className="pointer-events-none absolute inset-0 flex items-end bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/45 group-hover:opacity-100">
          <div className="w-full p-4">
            <p className="text-sm font-medium text-white">{overlay ?? alt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------- Social Links ----------------------- */

function SocialLink({
  href,
  label,
  icon,
  iconClassName,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  iconClassName?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-lg bg-white/75 px-4 py-2 text-sm font-medium text-black shadow-sm backdrop-blur transition hover:bg-white/90"
    >
      <span className={`h-5 w-5 ${iconClassName ?? ""}`}>{icon}</span>
      <span>{label}</span>
    </a>
  );
}

/* ---------------------- Icons ----------------------- */

const Icons = {
  file: (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path
        d="M7 3h7l3 3v15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M14 3v4h4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#0A66C2"
        d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.8v2.1h.1c.5-.9 1.8-2.1 3.8-2.1 4 0 4.7 2.6 4.7 5.9V24h-4v-7.5c0-1.8 0-4.1-2.5-4.1s-2.9 1.9-2.9 4v7.6h-4V8.5z"
      />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.5 1.1 3.1.8.1-.7.4-1.1.7-1.4-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.3 1.1-3.2-.1-.3-.5-1.5.1-3.2 0 0 .9-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.7.9 1.1 2 1.1 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  ),
  scholar: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
      <path fill="#34A853" d="M11 12.98L3.24 9 11 5.02 18.76 9 11 12.98z" />
      <path fill="#FBBC05" d="M11 14.97L5 11.94V17l6 3 6-3v-5.06l-6 3.03z" />
    </svg>
  ),
  flickr: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="7" cy="12" r="4" fill="#0063DC" />
      <circle cx="17" cy="12" r="4" fill="#FF0084" />
    </svg>
  ),
};

/* ------------------------- Page ---------------------------- */

export default function ProfessionalPage() {
  return (
    <div className="flex justify-center bg-transparent px-3 py-10">
      <main className="w-full max-w-4xl rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md sm:p-10">
        <header className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
              Engineering and Research Background
            </h1>

            <div className="space-y-4 text-base text-black">
              <p>
                I am a mechanical engineer with a bachelor’s degree in Mechanical Engineering from Penn State,
                a master’s degree in Mechanical Engineering from the University of Utah,
                and a master’s degree in Atmospheric Sciences from the University of Utah.
                Both master’s programs required completing and publishing research theses with substantial hands-on
                fieldwork, data collection and processing, coding, modeling, presenting, and technical writing.
                I also have several years of industry experience as a project mechanical engineer,
                leading large-scale capital engineering projects.
              </p>


              <p>
                I am most motivated by engineering work that combines strong fundamentals with
                thoughtful planning, practical design, and hands-on execution. My proudest
                accomplishments have involved taking complex systems from concept through
                fabrication and field deployment. Most recently, I led the design,
                fabrication, and installation of a 30-foot aerosol inlet and support
                structure for a remote mountain field site, using SolidWorks, machining,
                and on-site construction. The lab is now operating in the field and
                collecting aerosol and meteorological data.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <SocialLink href="/files/Bail-Resume.pdf" label="Resume (PDF)" icon={Icons.file} />
            <SocialLink href="/files/Bail-CV.pdf" label="CV (PDF)" icon={Icons.file} />
            <SocialLink
              href="https://www.linkedin.com/in/josephbail2018/"
              label="LinkedIn"
              icon={Icons.linkedin}
            />
            <SocialLink href="https://github.com/joeybail96" label="GitHub" icon={Icons.github} />
            <SocialLink
              href="https://scholar.google.com/citations?view_op=list_works&hl=en&user=jc_bJg4AAAAJ"
              label="Google Scholar"
              icon={Icons.scholar}
            />
            <SocialLink
              href="https://www.flickr.com/photos/204000233@N02/albums"
              label="Flickr"
              icon={Icons.flickr}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Photo
              src="/photos/snowclime-profile.jpg"
              alt="Deploying a probe at Storm Peak Lab"
              overlay="installing an cloud droplet imaging probe onto a custom mounting plate I designed"
            />
            <Photo
              src="/photos/buddys.jpg"
              alt="Aerosol inlet support structure"
              overlay="clearing snow away from instruments that I helped install at a remote site within Steamboat Ski Resort"
            />
          </div>

          <div className="space-y-4 text-base text-black">
            <p>
              These photos were taken during the{" "}
              <a
                href="https://www.eol.ucar.edu/field_projects/s2noclime"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
              >
                S2noClime
              </a>{" "}
              winter field campaign at{" "}
              <a
                href="https://atmos.utah.edu/storm_peak_lab/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
              >
                Storm Peak Laboratory
              </a>
              , and were featured in a{" "}
              <a
                href="https://www.steamboatpilot.com/news/scientists-study-variability-in-snowfall-wetter-snowpack/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
              >
                local news article
              </a>{" "}
              covering the campaign.
            </p>
          </div>
        </header>

        <Divider />

        <section className="space-y-12">
          <div className="space-y-5">
            <SectionHeading title="Career Objective" />

            <div className="space-y-4 text-base text-black">
              <p>
                I am seeking an engineering role where I have the freedom and
                responsibility to continue taking on complex technical problems through thoughtful
                design and hands-on execution.
              </p>

              <p>
                While I am especially drawn to projects connected to the environment,
                nature, and field-deployed systems, I am not limited to any single
                industry. I am most interested in teams that value strong technical
                foundations, practical problem solving, and building things that work
                in the real world.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <SectionHeading title="Programming Languages" />

            <div className="space-y-4 text-base text-black">
              <p>
                <span className="font-semibold">Proficient:</span> Python, MATLAB, R
              </p>
              <p>
                <span className="font-semibold">Familiar:</span> Fortran, Bash,
                JavaScript, HTML, Arduino (C++), G-Code, C
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <SectionHeading title="Tools and Software" />

            <div className="space-y-4 text-base text-black">
              <p>
                <span className="font-semibold">CAD Tools:</span> SolidWorks, Inventor, Fusion 360
              </p>
              <p>
                <span className="font-semibold">FE Modeling:</span> Inventor NASTRAN, Inventor CFD, SolidWorks FEA, ANSYS, Abaqus
              </p>
              <p>
                <span className="font-semibold">Data Analysis &amp; Visualization:</span> Pandas, NumPy, Xarray, Rasterio, Matplotlib, Cartopy
              </p>
              <p>
                <span className="font-semibold">Development Tools:</span> VS Code, Jupyter Notebook, Anaconda, RStudio, Git/GitHub, Linux
              </p>
              <p>
                <span className="font-semibold">Atmospheric Modeling:</span> GEOS-Chem, STILT, HYSPLIT, FENGSHA
              </p>
              <p>
                <span className="font-semibold">Remote Sensing / Instruments:</span> Optical Particle Counters, Nephelometer, Droplet/Imaging
                Probes, Radiosondes
              </p>
              <p>
                <span className="font-semibold">Machining:</span> Woodworking, manual lathe, manual mill, power tools
              </p>
              <p>
                <span className="font-semibold">Functional Expertise:</span> Technical writing, experimental design, scientific communication,
                cross-functional collaboration, project management, R&amp;D
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
